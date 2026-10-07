import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Workflow, BadgeCheck, Wallet, MonitorSmartphone, Building2, Check,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import Pictogram from '../components/Pictogram'

/*
 * Page formation « automatisation IA » : structure des pages formation
 * (SpokePage) : hero + tarifs, repères, audience, cas d'usage, programme
 * J1/J2, CTA milieu, chaînes automatisées, paliers, objectifs, tarifs,
 * fondateur, pourquoi Masteria, erreurs, FAQ, formations associées, CTA.
 * Cible le mot-clé « formation automatisation ia ». Accent bleu Masteria.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre, faits à jour, source :
 * scratchpad FAITS-OUTILS-2026-10-07.md) :
 * - GPTs personnalisés retirés le 11/12/2026 (11/02/2027 pour les espaces
 *   Enterprise avec délai), migration vers des plugins ; Gems remplacés par
 *   les compétences Gemini ; agents de Vibe remplacés par les Skills le 22/09.
 * - Agents d'espace de travail ChatGPT : GA le 21/05/2026 (Business, Enterprise,
 *   Edu), exécutions en crédits depuis le 06/07/2026.
 * - Workspace Studio : accès promotionnel, plafonds dès le 01/11/2026.
 * - Copilot Cowork : disponibilité générale comptes pro, tâches planifiées ou
 *   déclenchées par un événement, accord avant chaque action sensible.
 * - Copilot Studio : pack de 25 000 crédits à 173,30 € HT par mois.
 * - AI Act : art. 4 depuis le 02/02/2025, art. 50 depuis le 02/08/2026, haut
 *   risque annexe III reporté au 02/12/2027 (règlement (UE) 2026/1744).
 * - Retirés : « +1 500 formés », « plusieurs heures par semaine », « nous
 *   accompagnons gratuitement », citation du fondateur partagée, FounderNote,
 *   OfficialSources, bloc « Qui intervient » commun.
 */

const SLUG = 'formation-automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation automatisation IA : workflows et agents | Masteria"
const META_DESC = "Formation automatisation IA en 2 jours : choisir les tâches, bâtir workflows et agents supervisés, sans code. Qualiopi, finançable par votre OPCO."
const H1 = "Formation automatisation IA"
const INTRO = "Relances, saisies, tri du courrier entrant, reporting du lundi : une part du travail de bureau suit toujours le même chemin, et l'IA permet désormais d'en confier une partie à des workflows et à des agents. Pendant deux jours, vos équipes apprennent à choisir ces tâches, à les automatiser avec l'outil adapté et à conserver le contrôle de ce qui engage l'entreprise, sans écrire de code."

const HERO_BADGES = [
  { icon: BadgeCheck,         label: 'Organisme Qualiopi' },
  { icon: Wallet,             label: 'Prise en charge OPCO possible' },
  { icon: MonitorSmartphone,  label: 'Sur site ou en visioconférence' },
  { icon: Building2,          label: 'Groupe intra ou parcours individuel' },
]

const AUDIENCE = [
  { title: 'Responsables de service', desc: "Votre équipe perd des heures sur des tâches qui se répètent chaque semaine. Vous voulez savoir lesquelles automatiser d'abord, et comment, sans attendre un projet informatique." },
  { title: 'Marketing, ventes, RH, finance', desc: "Relances, mises à jour de fichiers, comptes rendus, extractions : vous apprenez à confier ces gestes à un workflow, puis à contrôler le résultat." },
  { title: 'Assistanat et fonctions support', desc: "Vous faites circuler l'information entre plusieurs outils et plusieurs personnes. Vous repartez avec des automatisations qui tiennent quand vous êtes absent." },
  { title: 'Référents IA, DSI, chefs de projet', desc: "Vous devez industrialiser sans perdre le contrôle : documentation, propriétaires, données autorisées, revues. La session fournit la méthode et des modèles de fiches." },
]

const USE_CASES = [
  { icon: '\uD83D\uDCE5', title: "La boîte mail triée", desc: "Chaque message entrant est classé, résumé et rapproché du bon dossier ; les réponses partent en brouillon, à relire." },
  { icon: '\uD83D\uDD01', title: "Les applications reliées", desc: "Un formulaire, un tableur, un CRM et une messagerie qui se parlent grâce à Make, Zapier ou n8n, avec une étape IA au milieu." },
  { icon: '\uD83E\uDD16', title: "Un premier agent", desc: "Un agent qui enchaîne recherche, rédaction et préparation d'une action, et s'arrête avant tout ce qui engage." },
  { icon: '\uD83D\uDCCA', title: "Le reporting qui se prépare seul", desc: "Les chiffres de la semaine collectés, calculés et commentés dans votre gabarit, prêts à relire le lundi matin." },
  { icon: '\uD83E\uDDE9', title: "Microsoft 365 et Google Workspace", desc: "Power Automate et Copilot côté Microsoft, Workspace Studio côté Google : ce que vos licences automatisent déjà." },
  { icon: '\uD83D\uDEE1\uFE0F', title: "Le contrôle humain", desc: "Où placer la validation, quelles données laisser passer, comment tracer : les garde-fous posés dès la conception." },
]

const MODULES = [
  { day: 1, title: "Module 1, Ce que l'IA sait automatiser, et ce qu'elle ne doit pas faire seule", duration: '2h', description: "Distinguer ce qui relève d'un assistant, d'un workflow ou d'un agent, et repérer ce qui doit rester à l'humain.", items: ['Déclencheur, étapes, sortie : la mécanique commune à tous les outils', "IA générative, automatisation, RPA (robots logiciels qui imitent les clics) : ce qui les sépare", "L'agent IA : un objectif, des outils, des limites", 'Les risques : erreurs, fuites de données, actions non voulues'], exercise: "Décrire, étape par étape, une tâche répétitive apportée par le participant." },
  { day: 1, title: 'Module 2, Choisir ses tâches et son palier', duration: '2h', description: "Classer les tâches par fréquence, temps passé et risque, puis les placer sur les trois paliers d'outils.", items: ["Une grille de priorisation : fréquence, durée, risque, données en jeu", 'Mesurer le temps que prend la tâche aujourd\'hui', 'Natif, orchestrateur ou sur-mesure : choisir le palier le plus simple qui tient le besoin', "Écarter ce qui ne doit pas être automatisé"], exercise: "Dresser la carte des tâches automatisables de son poste et retenir trois priorités." },
  { day: 1, title: 'Module 3, Un premier workflow sans code', duration: '2h', description: "Construire de bout en bout une automatisation qui lit, résume, classe et prévient.", items: ['Prise en main de Make ou de Zapier selon votre contexte', "Une étape IA au milieu du flux, avec un format de sortie fixé", 'Relier une boîte mail, un tableau de suivi et une notification', 'Tester sur des cas tirés de la semaine, puis corriger'], exercise: "Automatiser le tri et le résumé des messages entrants vers un tableau de suivi." },
  { day: 1, title: 'Module 4, Les compétences, socle des assistants durables', duration: '1h', description: "Écrire une procédure réutilisable par toute l'équipe, au format qui s'impose chez les éditeurs.", items: ["Pourquoi ni les GPTs (retrait au 11 décembre 2026) ni les Gems (remplacés par les compétences Gemini) ne servent plus de base", 'Rédiger une compétence : rôle, étapes, exemples, format de sortie', "Partager, versionner, faire relire"], exercise: "Rédiger une compétence pour une tâche récurrente du service et la tester sur trois cas." },
  { day: 2, title: 'Module 5, Automatiser dans la suite bureautique', duration: '2h', description: "Tirer parti de ce que vos licences Microsoft 365 ou Google Workspace permettent déjà.", items: ['Power Automate : Outlook, Teams, Excel et SharePoint reliés', 'Copilot Cowork : tâches planifiées ou déclenchées par un mail, accord avant chaque action sensible', 'Workspace Studio : des flux décrits en langage courant sur Gmail, Drive et Chat', 'Choisir entre l\'outil de la suite et un orchestrateur'], exercise: "Construire un flux lancé par l'arrivée d'un mail ou l'envoi d'un formulaire." },
  { day: 2, title: 'Module 6, Un agent qui travaille sous contrôle', duration: '2h', description: "Confier à un agent un enchaînement d'étapes sans lui laisser le dernier mot.", items: ["Découper l'objectif en étapes vérifiables", 'Chercher, rédiger, préparer : ce que l\'agent fait seul', "Placer les points de validation humaine", "L'éprouver sur des cas tirés de vos dossiers"], exercise: "Construire un agent qui qualifie une demande entrante et prépare la réponse, envoyée seulement après validation." },
  { day: 2, title: 'Module 7, Fiabilité, données et AI Act', duration: '2h', description: "Rendre chaque automatisation traçable et conforme.", items: ['Validation humaine sur les décisions qui engagent', 'Journal des exécutions et alertes en cas d\'échec', "RGPD : données autorisées, hébergement, registre des traitements", "AI Act, ce qui vous concerne : soutenir la culture IA des équipes (article 4, applicable dès février 2025) et signaler les contenus générés (article 50, depuis août 2026)"], exercise: "Passer l'un de ses workflows à la check-list de fiabilité et ajouter les garde-fous manquants." },
  { day: 2, title: "Module 8, Faire vivre les automatisations dans l'équipe", duration: '1h', description: "Passer d'une réussite isolée à une pratique partagée.", items: ['Une fiche par automatisation : déclencheur, étapes, accès, propriétaire', 'Désigner la personne qui surveille, et la fréquence des contrôles', 'Une bibliothèque de modèles réutilisables'], exercise: "Remplir la fiche de gouvernance d'une automatisation prête à être déployée." },
]

const OBJECTIVES = [
  "Classer les tâches de son poste et retenir celles qui gagnent à être automatisées",
  "Construire sans code un workflow complet doté d'une étape IA",
  "Concevoir un agent qui prépare le travail et attend une validation avant d'agir",
  "Choisir, selon le contexte, entre fonctions natives, orchestrateurs (Make, Zapier, n8n) et Power Automate",
  "Encadrer ses automatisations : validation humaine, données, RGPD, AI Act",
  "Documenter une automatisation pour qu'un collègue puisse la reprendre",
]

const FAQ = [
  { q: "Automatiser avec l'IA demande-t-il de savoir coder ?", a: "Non. Les deux premiers paliers présentés sur cette page, fonctions intégrées à vos outils puis orchestrateurs comme Make, Zapier ou n8n, se pratiquent à la souris, sans programmation. Seul le troisième palier, le développement sur mesure, mobilise un développeur. Les deux jours sont ouverts à tous les profils métier." },
  { q: "IA générative et automatisation IA : quelle différence ?", a: "L'IA générative produit un contenu quand vous le lui demandez : un texte, une synthèse, une analyse. L'automatisation IA déclenche ce travail toute seule, à partir d'un événement, par exemple résumer et classer chaque mail qui arrive. Dans la pratique, l'une s'appuie sur l'autre : le workflow organise, le modèle d'IA rédige ou classe à l'étape prévue." },
  { q: "Quels outils d'automatisation IA pour une PME ?", a: "Ceux que vous payez déjà, d'abord : Microsoft 365 avec Power Automate et Copilot, Google Workspace avec Workspace Studio, ChatGPT Business avec ses tâches planifiées et ses agents d'espace de travail. Viennent ensuite Make ou Zapier pour relier des applications entre elles, et n8n lorsque l'hébergement interne s'impose. La formation part de votre parc de licences avant de proposer un abonnement de plus." },
  { q: "Que deviennent nos GPTs personnalisés ?", a: "OpenAI a fixé leur retrait au 11 décembre 2026, toutes offres confondues ; seuls les espaces Enterprise ayant obtenu un report les gardent jusqu'au 11 février 2027. Chaque GPT se convertit en plugin : ses consignes deviennent une compétence et ses documents servent de référence, mais ses actions personnalisées sont perdues. Au module 4, nous réécrivons un GPT en compétence, un format que Google, Microsoft et Mistral ont adopté à leur tour." },
  { q: "L'automatisation IA supprime-t-elle des postes ?", a: "Elle retire des tâches, rarement des métiers entiers. Ce qui part en premier, c'est la ressaisie, le tri, la mise en forme ; ce qui reste, c'est l'analyse, la relation et la décision. Nous ne promettons pas de gain chiffré à l'avance : le module 2 apprend à mesurer le temps passé avant d'automatiser, pour constater ensuite le gain obtenu." },
  { q: "En combien de temps une équipe est-elle formée ?", a: "Le programme de référence dure deux jours, soit 14 heures, avec un workflow et un agent construits sur vos cas. Une journée suffit pour poser les bases et mettre en service une première automatisation ; nous la proposons quand l'équipe démarre de zéro." },
  { q: "Que devient une automatisation si nous changeons d'outil ?", a: "Le travail de fond survit. Une procédure décrite avec son déclencheur, ses étapes, ses règles et ses points de validation se reconstruit vite dans un autre outil. D'où le temps que la formation consacre à la description des tâches et à la documentation qu'à la prise en main des logiciels." },
  { q: "Formation ou prestation d'automatisation : que choisir ?", a: "Avec la formation, votre équipe devient autonome sur les fonctions natives et les orchestrateurs, appliqués à ses propres tâches. Quand un flux est critique, volumineux ou doit écrire dans un logiciel métier, notre agence le conçoit pour vous, en développement sur devis, pas finançable par votre OPCO. Formation et prestation se combinent : la première permet ensuite de faire vivre ce que livre la seconde." },
  { q: "La formation est-elle certifiée et finançable ?", a: "Oui. La certification Qualiopi de Masteria, catégorie actions de formation, ouvre droit à un financement des deux jours par l'OPCO de votre branche, qui applique ses propres règles et puise dans ses fonds. Nous établissons le programme, la convention et les documents de fin de formation qu'il réclame." },
]

const RELATED = [
  { label: "Formation n8n", href: "/formation-n8n", tag: "Outil", desc: "Deux jours sur l'orchestrateur qui s'installe chez vous, agents compris." },
  { label: "Formation Make", href: "/formation-make", tag: "Outil", desc: "Les scénarios visuels de l'ex-Integromat, facturés en crédits." },
  { label: "Formation Zapier", href: "/formation-zapier", tag: "Outil", desc: "Zapier en une journée : les tâches simples, et le moment d'en sortir." },
  { label: "Formation agents IA", href: "/formation-agents-ia", tag: "Agents", desc: "Construire, éprouver et superviser des agents dans vos assistants." },
  { label: "Formation multi-outils IA", href: "/formation-multi-outils", tag: "Comparatif", desc: "ChatGPT, Copilot, Gemini, Claude et Vibe mis à l'épreuve sur vos dossiers." },
  { label: "Formation IA générative", href: "/formation-intelligence-artificielle-generative", tag: "Fondamentaux", desc: "Comprendre les modèles qui rédigent, résument et analysent." },
  { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot", tag: "Outil", desc: "Copilot au quotidien dans la suite Microsoft, agents compris." },
  { label: "Meilleur agent IA : le comparatif", href: "/meilleur-agent-ia", tag: "Panorama", desc: "Les agents du marché comparés, pour choisir avant d'automatiser." },
]

const TRAINER = {
  name: 'Mathias Nizan',
  role: 'Fondateur de Masteria, il pilote chaque session',
  credentials: ['Fondateur de Masteria, Lyon, 2022', 'Activateur France Num', 'Cité dans Les Échos', 'Organisme certifié Qualiopi'],
  bio: "Mathias Nizan a créé Masteria pour accompagner les entreprises sur l'intelligence artificielle, du diagnostic jusqu'à la formation des équipes. Sur ce programme, il s'appuie sur les automatisations que le cabinet conçoit en mission, par exemple chez un distributeur photovoltaïque où le diagnostic a ciblé deux corvées : interroger les transporteurs à la main et ressaisir les réceptions d'entrepôt. Il pilote chaque session, qu'il anime en personne ou qu'il remet à un formateur du réseau.",
}

const WHY_MASTERIA = [
  { icon: '\uD83C\uDFAF', title: "Un cabinet consacré à la seule IA", desc: "Masteria travaille sur un seul sujet depuis 2022. Les formateurs automatisent en mission, ce qui se voit dans le choix des cas et dans les erreurs qu'ils vous évitent." },
  { icon: '\uD83D\uDCC1', title: 'Des exercices tirés de vos tâches', desc: "Chacun repart avec l'automatisation d'une tâche de sa propre semaine. Le soir du deuxième jour, son workflow tourne sur ses vrais fichiers." },
  { icon: '\uD83D\uDEE1\uFE0F', title: 'Des automatisations qui se relisent', desc: "Validation humaine, journal des exécutions, données autorisées : chaque automatisation construite pendant la session est traçable." },
  { icon: '\uD83D\uDCB3', title: 'Un dossier OPCO prêt', desc: "Programme, convention, émargement, attestations : chaque pièce utile à l'instruction de votre dossier par l'OPCO vous est remise." },
]

const AUTOMATION_CASES = [
  { icon: '\uD83D\uDCE1', title: 'La veille livrée le lundi', desc: "Vos sources (presse spécialisée, concurrents, textes réglementaires) sont surveillées, filtrées, puis résumées dans une note hiérarchisée qui arrive chaque semaine. Le lecteur décide de ce qui appelle une action." },
  { icon: '\uD83D\uDCC8', title: 'Le rapport pré-rempli', desc: "L'export de votre outil (ventes, production, support) alimente un calcul d'indicateurs et un commentaire rédigé dans votre gabarit. Le responsable vérifie les chiffres, retouche l'analyse et diffuse." },
  { icon: '\uD83D\uDCEC', title: 'Les demandes entrantes qualifiées', desc: "Chaque demande est classée par nature et par urgence, résumée, rapprochée de son dossier, et un brouillon de réponse attend. Personne ne répond à la place d'un humain." },
  { icon: '\uD83D\uDCC4', title: 'Les documents qui partent du gabarit', desc: "Comptes rendus, courriers types, fiches, réponses à questionnaire : le contenu varie selon le dossier, la structure reste celle de vos modèles validés." },
  { icon: '\uD83D\uDD17', title: 'Du document reçu à la saisie préparée', desc: "Une facture, une réclamation ou une candidature arrive : les champs sont extraits, rapprochés du dossier, et une saisie ou une réponse reste en attente jusqu'au feu vert d'un collaborateur." },
]

const PITFALLS = [
  { num: 'Erreur 1', title: 'Automatiser une procédure floue', desc: "Si personne ne sait décrire les étapes, les exceptions et le responsable, l'automatisation reproduit le désordre, plus vite. La procédure s'écrit d'abord ; c'est l'objet du module 2." },
  { num: 'Erreur 2', title: 'Laisser partir sans relecture', desc: "Relire un brouillon prend quelques secondes ; rattraper un mail erroné envoyé à un client prend beaucoup plus. Chaque message destiné à l'extérieur passe par une validation inscrite dans le flux." },
  { num: 'Erreur 3', title: "L'automatisation sans propriétaire", desc: "Son auteur est parti, le flux tourne encore et plus personne n'ose le modifier. Chaque automatisation reçoit un responsable nommé, une fiche et une date de revue au module 8." },
  { num: 'Erreur 4', title: 'Ne pas mesurer avant', desc: "Sans le temps de départ, impossible de dire ce qu'une automatisation rapporte, ni lesquelles garder. On chronomètre la tâche manuelle, puis on compare après un mois." },
]

/* Sources de la page (bloc visible en fin de page). */
const SOURCES = [
  { name: "OpenAI, FAQ sur le retrait des GPTs personnalisés et leur migration vers des plugins", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
  { name: 'Google Workspace, les compétences dans Gemini et la fin des Gems', url: 'https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html' },
  { name: 'Google Workspace, plafonds d\'usage de l\'IA (dont Workspace Studio)', url: 'https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits' },
  { name: 'Microsoft Learn, Copilot Cowork', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/' },
  { name: 'Microsoft, tarifs de Copilot Studio en France', url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio' },
  { name: "Règlement 2024/1689 dit AI Act, version publiée sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "CNIL, l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'Ministère du Travail, Qualiopi', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

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
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function AutomatisationIAPage() {
  const modulesJ1 = MODULES.filter(m => m.day === 1)
  const modulesJ2 = MODULES.filter(m => m.day === 2)

  const courseData = {
    name: H1,
    description: META_DESC,
    level: 'Tous niveaux',
    duration: 'PT14H',
    timeRequired: 'PT14H',
    price: '1980',
    audience: 'Professionnels en entreprise (B2B)',
    tool: 'Make, Zapier, n8n, Power Automate, Workspace Studio, compétences des assistants IA',
    teaches: OBJECTIVES,
    objectives: OBJECTIVES,
    modules: MODULES,
    about: "Formation à l'automatisation des tâches et des workflows par l'IA en entreprise",
    prerequisites: 'Aucun prérequis technique ; pratique courante des outils bureautiques.',
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formations IA', slug: 'formation-intelligence-artificielle' },
    { name: 'Automatisation IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        courseData={courseData}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        dateModified="2026-10-07"
        citations={SOURCES}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#6B7280' }}>Formations IA</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Automatisation IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Workflow size={16} strokeWidth={2.2} />
              Automatisation IA
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              2 jours · 14h
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680, fontWeight: 500 }}>
            La formation <strong>automatisation IA</strong> de Masteria se déroule sur <strong>deux jours (14 heures)</strong>, dans vos locaux comme à distance. Elle coûte <strong>1 980 € HT la journée</strong>, pour un groupe intra (douze participants maximum) comme pour un parcours individuel. Comme Masteria est certifiée Qualiopi, votre OPCO de branche peut y contribuer, selon ses règles et ses fonds. Chaque participant repart avec un workflow et un agent construits sur ses propres tâches.
          </p>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            {INTRO}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${c}30` }}>
              Parler de vos tâches à automatiser →
            </Link>
            <a href="#tarifs" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Tarifs et financement
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPÈRES ── */}
      <section style={{ background: '#fff', padding: '40px', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap', borderBottom: '1px solid #E5E7EB' }}>
        {[
          { num: '3', label: "paliers d'outils, du natif au sur-mesure" },
          { num: '8', label: 'modules répartis sur deux jours' },
          { num: '12', label: 'participants au plus en intra' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#4B5563', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── À QUI S'ADRESSE ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Quatre profils tirent le plus de ces deux jours
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            Le programme s'adresse aux personnes qui ont des tâches précises à automatiser, et qui veulent repartir avec un résultat en service.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {AUDIENCE.map((profile, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 28, border: `2px solid ${cLight}`, borderLeftColor: c, borderLeftWidth: 4 }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{profile.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS D'USAGE ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Six chantiers que les participants mènent pendant la session
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            Chacun se travaille sur les tâches apportées par le groupe.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {USE_CASES.map((uc, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ marginBottom: 12 }}><Pictogram emoji={uc.icon} tile size={26} /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{uc.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME (modules J1/J2) ── */}
      <section style={{ padding: '80px 40px', background: '#F5F3EE', color: '#0A0A0A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Le programme : huit modules en deux jours
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 56 }}>
            Quatorze heures de pratique. Chaque module commence par une démonstration courte et se termine par un exercice sur une tâche apportée par le participant.
          </p>

          {[{ label: 'Jour 1', modules: modulesJ1 }, { label: 'Jour 2', modules: modulesJ2 }].map(day => (
            <div key={day.label} style={{ marginBottom: 56 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <div style={{ background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, padding: '6px 18px', borderRadius: 99 }}>{day.label}</div>
                <div style={{ flex: 1, height: 1, background: '#F3F4F6' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {day.modules.map((mod, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 28, border: `1px solid #E5E7EB`, borderLeftColor: c, borderLeftWidth: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{mod.title}</h3>
                      {mod.duration && (
                        <span style={{ background: '#F3F4F6', color: '#6B7280', padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{mod.duration}</span>
                      )}
                    </div>
                    {mod.description && (
                      <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{mod.description}</p>
                    )}
                    {mod.items?.length > 0 && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: mod.exercise ? 16 : 0 }}>
                        {mod.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151' }}>
                            <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {mod.exercise && (
                      <div style={{ background: `${c}18`, border: `1px solid ${c}40`, borderRadius: 8, padding: '12px 16px', marginTop: 16 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: c, display: 'block', marginBottom: 4 }}>EXERCICE SUR VOS DOSSIERS</span>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{mod.exercise}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Quelle tâche votre équipe voudrait-elle ne plus faire à la main&nbsp;?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Décrivez-la en quelques lignes : nous bâtissons le programme autour d'elle.
            </p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: c, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Décrire la tâche →
          </Link>
        </div>
      </section>

      {/* ── CE QU'ON AUTOMATISE, ET LA LIMITE ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Cinq chaînes que les entreprises automatisent, et une limite qui ne bouge pas
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720, lineHeight: 1.7 }}>
            Ces cinq chaînes reviennent dans presque toutes les organisations. Elles partagent trois traits : un déclencheur net, des étapes que l'on sait décrire, et une relecture humaine placée au bon endroit. Pendant la formation, chacun en construit une sur ses propres dossiers.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
            {AUTOMATION_CASES.map((ac, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ marginBottom: 12 }}><Pictogram emoji={ac.icon} tile size={26} /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{ac.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{ac.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#0A0F1E', borderRadius: 12, padding: '28px 32px', marginBottom: 28 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 10 }}>La limite</div>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#F8FAFC', margin: '0 0 10px' }}>Une personne garde la main sur ce qui engage</h3>
            <p style={{ fontSize: 14.5, color: '#94A3B8', lineHeight: 1.75, margin: 0 }}>
              Envoyer un message à un client, valider un montant, prendre une décision qui touche un salarié : ces gestes sortent du flux automatique, quel que soit l'outil. Écrire dans un logiciel métier (CRM, ERP, comptabilité, paie) demande des accès, des tests et un responsable désigné ; c'est un projet d'intégration, chiffré et cadré comme tel. La règle est posée au module 1 et chaque automatisation des deux jours la respecte.
            </p>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
            La première chaîne est décrite pas à pas dans notre guide pour{' '}
            <Link to="/automatiser-sa-veille-ia" style={{ color: c, fontWeight: 600 }}>automatiser sa veille IA</Link>. Pour la démarche complète, du choix des tâches au déploiement, lisez notre{' '}
            <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>guide de l'automatisation IA en entreprise</Link>{' '}
            : il reprend la méthode suivie pendant la formation.
          </p>
        </div>
      </section>

      {/* ── PALIERS D'AUTOMATISATION ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Trois paliers d'outils, et le plus simple l'emporte
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720, lineHeight: 1.7 }}>
            La règle enseignée tient en une phrase : retenez le palier le plus simple qui tient le besoin. On monte d'un cran quand le flux l'exige, jamais parce qu'un outil fait envie. Faits relevés au 7 octobre 2026.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>1</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Les fonctions déjà incluses dans vos licences</h3>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Avant tout nouvel abonnement, on regarde ce que vous payez déjà. ChatGPT Business propose des tâches planifiées et, depuis le 21 mai 2026, des agents d'espace de travail, dont les exécutions sont payées en crédits depuis le 6 juillet : un poste à budgéter. Chez Google, Workspace Studio crée des flux décrits en langage courant sur Gmail, Drive et Chat ; il reste en accès promotionnel, avec des plafonds appliqués à partir du 1er novembre 2026. Côté Microsoft, Power Automate relie Outlook, Teams, Excel et SharePoint, et Copilot Cowork, disponible pour les comptes professionnels, lance des tâches planifiées ou déclenchées par un mail en demandant l'accord avant chaque action sensible. Vibe, l'assistant de Mistral, a remplacé ses agents par des compétences le 22 septembre 2026. Ce palier suffit quand le besoin reste dans un seul environnement ; notre page sur les{' '}
                <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>{' '}
                compare ces briques.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>2</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Les orchestrateurs qui relient vos applications</h3>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Quand le flux traverse plusieurs applications (une boîte mail, un tableur, un CRM consulté en lecture, un outil de gestion de projet), un orchestrateur prend le relais. Il attend un événement, enchaîne des étapes dans vos logiciels et appelle un modèle d'IA au milieu pour lire, résumer, classer ou rédiger. Les trois plus répandus ne facturent pas la même chose : Make compte des crédits, Zapier des tâches, n8n des exécutions de workflow entières. Chacun a sa formation dédiée, en{' '}
                <Link to="/formation-make" style={{ color: c, fontWeight: 600 }}>Make</Link>,{' '}
                <Link to="/formation-zapier" style={{ color: c, fontWeight: 600 }}>Zapier</Link> et{' '}
                <Link to="/formation-n8n" style={{ color: c, fontWeight: 600 }}>n8n</Link>. Ce palier se construit au module 3 et se fiabilise au module 7.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>3</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Le développement sur mesure</h3>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Un flux qui touche la facturation, des données clients ou une obligation réglementaire, des volumes qu'un orchestrateur absorbe mal, une écriture dans un logiciel métier : on quitte alors le sans-code. Copilot Studio, chez Microsoft, entre dans cette catégorie dès que l'agent écrit dans votre système d'information ; il se facture à part : un pack de 25 000 crédits Copilot y coûte 173,30 € HT par mois en France. C'est un projet, avec son cadrage, ses tests et son budget. Notre{' '}
                <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>agence d'automatisation IA</Link>{' '}
                conçoit et exploite ces flux ; quand aucune plateforme du marché ne convient, nos{' '}
                <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link>{' '}
                prennent le relais.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
            Au module 2, chaque participant place ses tâches prioritaires sur ces trois paliers, avant la moindre construction. Ce classement fixe l'outil, le niveau de garde-fous et le temps à consacrer à chaque flux.
          </p>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 32 }}>
            Six objectifs évalués au terme de la formation
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {OBJECTIVES.map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 26, height: 26, background: c, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Check size={14} color="#fff" strokeWidth={3} aria-hidden="true" />
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Deux formats, un même tarif journalier
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>PARCOURS INDIVIDUEL</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>HT / jour</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>3 960 € HT les deux jours, en tête-à-tête</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Deux jours d\'affilée ou séparés', 'Programme construit sur vos propres automatisations', 'Sur site ou en visioconférence', 'Questions possibles entre les deux journées'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={16} color={c} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }} /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>GROUPE INTRA</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>HT / jour</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>3 960 € HT les deux jours, jusqu'à 12 personnes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Session réservée à votre équipe', 'Ateliers sur vos outils et vos tâches', 'Chez vous ou en visioconférence', 'Finançable par votre OPCO'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={16} color={c} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }} /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
            Masteria est certifiée Qualiopi : l'OPCO de votre branche (Atlas, Akto, Afdas, Constructys, Opco 2i ou un autre) peut financer la session, dans la mesure où ses règles et son budget le permettent. Selon l'opérateur et la taille de l'entreprise, il règle directement l'organisme ou vous rembourse après paiement ; nous vérifions ce point avec vous avant de rédiger la convention. Pour Genève ou Bruxelles, où les OPCO n'interviennent pas, le devis est établi en euros HT. Les abonnements aux outils (Make, Zapier, n8n, Copilot Studio) restent hors du prix.
          </p>
        </div>
      </section>

      {/* ── FONDATEUR (E-E-A-T) ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Mathias Nizan pilote chaque session d'automatisation
          </h2>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/assets/mathias-nizan@120.jpg"
                srcSet="/assets/mathias-nizan@120.jpg 1x, /assets/mathias-nizan@240.jpg 2x"
                alt="Mathias Nizan, fondateur de Masteria"
                width="100" height="100"
                loading="lazy" decoding="async"
                style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{TRAINER.name}</h3>
              <p style={{ fontSize: 14, color: c, fontWeight: 600, margin: '0 0 16px' }}>{TRAINER.role}</p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
                {TRAINER.bio} Le détail de ce diagnostic figure dans <Link to="/etudes-de-cas-ia#photovoltaique" style={{ color: c, fontWeight: 600 }}>l'étude de cas</Link> ; son parcours, sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page</Link>.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {TRAINER.credentials.map(cred => (
                  <span key={cred} style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>{cred}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Pourquoi confier cette formation à Masteria ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
            {WHY_MASTERIA.map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ marginBottom: 12 }}><Pictogram emoji={card.icon} tile size={26} /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <blockquote style={{ borderLeft: `4px solid ${c}`, paddingLeft: 24, margin: 0 }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 700, color: '#0A0A0A', fontStyle: 'italic', marginBottom: 8 }}>
              Le bon palier est le plus simple qui tient le besoin.
            </p>
            <cite style={{ fontSize: 14, color: '#6B7280', fontStyle: 'normal' }}>La règle de choix d'outil enseignée au module 2</cite>
          </blockquote>
        </div>
      </section>

      {/* ── ERREURS DES PROJETS D'AUTOMATISATION ── */}
      <section style={{ padding: '80px 40px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Quatre erreurs condamnent la plupart des automatisations
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720, lineHeight: 1.7 }}>
            Les automatisations abandonnées en entreprise tombent presque toutes sur l'une de ces quatre erreurs. Le programme les traite une à une, au module où elles se présentent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {PITFALLS.map(pf => (
              <div key={pf.num} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{pf.num}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{pf.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{pf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Formation automatisation IA : vos questions
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Approfondir un outil ou une notion
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32 }}>
            Une fois les paliers choisis, ces formations vont plus loin sur un outil ou sur les agents.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {RELATED.map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 10, padding: 22, border: `2px solid ${c}20`, transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${c}20`}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: '0 0 10px' }}>{rel.desc}</p>
                  <span aria-hidden="true" style={{ fontSize: 13, color: c, fontWeight: 700 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', marginTop: 24 }}>
            Le catalogue complet, classé par métier, se trouve sur la page{' '}
            <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>formation intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Choisissons ensemble les premières tâches à automatiser
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Indiquez le nombre de personnes à former et les trois tâches qui leur prennent le plus de temps. Vous recevez sous 24 heures une proposition de programme sur deux jours, le devis et la liste des pièces pour votre OPCO.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Envoyer vos tâches →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Organisme certifié Qualiopi · 1 980 € HT la journée · intra ou individuel
          </p>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe mobilisée ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe mobilisée</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des formateurs, des consultants et des développeurs qui automatisent en mission
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Autour de Mathias Nizan, Masteria réunit selon les projets une vingtaine de formateurs, une dizaine de consultants IA et environ cinq développeurs, tous indépendants. Ceux qui animent cette formation construisent aussi des automatisations pour des clients, et aucun ne représente un éditeur : l'outil conseillé est celui qui convient à vos tâches. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples datés.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['2022', 'création du cabinet, à Lyon'],
              ['≈ 20', 'formateurs indépendants dans le réseau'],
              ['≈ 10', 'consultants IA mobilisables'],
              ['≈ 5', 'développeurs pour les flux sur mesure'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES DE LA PAGE ── */}
      <section aria-labelledby="sources-automatisation" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-automatisation" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les documents qui fondent cette page
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Dates de retrait et fonctions des éditeurs vérifiées le 7 octobre 2026, texte de l'AI Act, repères de la CNIL, certification de Masteria.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {SOURCES.map(s => (
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
