import { Link } from 'react-router-dom'
import { BookOpen, Clock } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page pilier éditoriale « automatisation IA » (slug /automatisation-ia).
 * Tête du cluster : « automatisation ia » (880/mois), « ia automatisation »,
 * « automatisation ia entreprise », « automatisation de process entreprise avec ia »,
 * « automatisation projet ia ». Guide long format (3 000+ mots), maillage vers
 * /formation-automatisation-ia, /agence-automatisation-ia et /agents-ia-entreprise.
 * Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Automatisation IA : le guide complet pour les entreprises"
const META_DESC = "Définition, exemples par métier, outils, méthode en 5 étapes, erreurs et budgets : le guide complet pour automatiser vos processus avec l'IA."
const H1 = "Automatisation IA : le guide complet pour automatiser vos processus"

/* ───────── Styles partagés ───────── */

const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 20, lineHeight: 1.25 }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px' }
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.8, margin: '0 0 18px' }
const aStyle = { color: c, fontWeight: 600 }

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  { href: '#definition', label: "Qu'est-ce que l'automatisation IA ?" },
  { href: '#cas-usage', label: 'Que peut-on automatiser en 2026 ?' },
  { href: '#outils', label: 'Les outils : 3 familles' },
  { href: '#methode', label: 'La méthode en 5 étapes' },
  { href: '#erreurs', label: 'Les 6 erreurs à éviter' },
  { href: '#cout', label: 'Combien ça coûte' },
  { href: '#faq', label: 'Questions fréquentes' },
]

/* ───────── Cas d'usage par fonction ───────── */

const FONCTIONS = [
  {
    icon: '🧾',
    title: 'Administratif et comptabilité',
    intro: "Souvent la fonction la plus vite rentable : les volumes sont élevés et les règles sont claires.",
    examples: [
      "Extraction des données de factures fournisseurs (montants, échéances, TVA) et rapprochement avec les bons de commande, avant transfert vers l'outil comptable.",
      "Relances d'impayés rédigées automatiquement, avec un ton adapté à l'ancienneté de la créance et à l'historique du client.",
      "Tri des emails et du courrier numérisé : classement par nature, routage vers le bon service, projet de réponse préparé pour validation.",
      "Préparation des notes de frais : lecture des justificatifs, contrôle des plafonds, pré-saisie dans l'outil de gestion.",
    ],
  },
  {
    icon: '🤝',
    title: 'Commercial et ventes',
    intro: "L'IA prend la saisie et la préparation, le commercial garde la relation et la négociation.",
    examples: [
      "Qualification des leads entrants : lecture de la demande, enrichissement, scoring selon vos critères, routage au bon commercial avec une fiche de synthèse.",
      "Comptes rendus de rendez-vous générés depuis la transcription, avec mise à jour du CRM et création des tâches de suivi.",
      "Première trame de proposition commerciale assemblée à partir de votre bibliothèque d'offres et du contexte du prospect.",
      "Veille sur les comptes stratégiques : synthèse hebdomadaire des actualités de vos clients clés.",
    ],
  },
  {
    icon: '📣',
    title: 'Marketing et communication',
    intro: "La stratégie et la création restent humaines, la déclinaison et le suivi s'automatisent.",
    examples: [
      "Déclinaison d'un contenu pilier (article, webinaire, étude) en posts LinkedIn, newsletter et scripts vidéo, dans la charte éditoriale de la marque.",
      "Synthèse mensuelle des retours clients (avis, enquêtes, tickets) avec verbatims classés par thème.",
      "Personnalisation des campagnes email par segment, à partir des données du CRM.",
      "Brief créatif pré-rempli à partir des résultats des campagnes précédentes.",
    ],
  },
  {
    icon: '👥',
    title: 'Ressources humaines',
    intro: "Des gains réels, avec une vigilance forte : le tri automatisé de candidatures figure parmi les usages à haut risque au sens de l'AI Act et impose une validation humaine systématique.",
    examples: [
      "Présélection assistée des candidatures sur des critères explicites et traçables, chaque décision restant validée par un recruteur.",
      "Rédaction des offres d'emploi et des réponses aux candidats à chaque étape du processus.",
      "Préparation de l'onboarding : checklist, demandes d'accès, emails de bienvenue, programme de la première semaine.",
      "Réponses aux questions RH récurrentes (congés, mutuelle, attestations) à partir de la documentation interne.",
    ],
  },
  {
    icon: '🎧',
    title: 'Service client',
    intro: "Le partage des rôles est simple : l'IA absorbe le répétitif, le conseiller traite le sensible.",
    examples: [
      "Réponses aux questions récurrentes à partir de la base de connaissances, avec escalade vers un humain au moindre doute.",
      "Tri et priorisation des tickets selon l'urgence, le sujet et le niveau d'insatisfaction détecté.",
      "Résumé de l'historique du client présenté au conseiller avant chaque prise en charge.",
      "Analyse hebdomadaire des motifs de contact pour traiter les causes en amont.",
    ],
  },
  {
    icon: '📋',
    title: 'Gestion de projet',
    intro: "La production documentaire du pilotage se prête particulièrement bien à l'automatisation.",
    examples: [
      "Comptes rendus de réunion structurés (décisions, actions, échéances) générés depuis la transcription et diffusés aux participants.",
      "Reporting d'avancement consolidé à partir de vos outils de gestion de tâches, commenté et mis en forme automatiquement.",
      "Relances automatiques des porteurs d'actions en retard, avec rappel du contexte et de l'échéance.",
      "Création de tâches dans l'outil de gestion à partir des emails et des décisions de réunion.",
    ],
  },
  {
    icon: '⚖️',
    title: 'Juridique et conformité',
    intro: "L'IA prépare le travail, le juriste tranche : aucune automatisation ne doit engager l'entreprise sans relecture.",
    examples: [
      "Première lecture des contrats : repérage des clauses sensibles ou manquantes par rapport à votre grille de référence, avant la revue juridique.",
      "Veille réglementaire filtrée selon votre secteur et résumée chaque semaine.",
      "Préparation des registres et de la documentation RGPD à partir des informations collectées auprès des équipes.",
      "Comparaison de deux versions d'un document avec synthèse des écarts.",
    ],
  },
]

/* ───────── Méthode en 5 étapes ───────── */

const ETAPES = [
  {
    title: 'Cartographier les tâches automatisables',
    body: "Listez avec chaque équipe les tâches répétitives : fréquence, temps consommé, outils impliqués, niveau de risque en cas d'erreur. Une semaine d'observation honnête fait généralement émerger 15 à 30 candidates. Cherchez en priorité les tâches que tout le monde repousse, celles qui suivent toujours le même schéma et celles qui consistent à déplacer de l'information d'un outil vers un autre.",
  },
  {
    title: "Scorer l'impact et la faisabilité",
    body: "Évaluez chaque tâche sur deux axes. L'impact : temps récupéré, fréquence, nombre de personnes concernées. La faisabilité : clarté des règles, qualité des données disponibles, gravité d'une erreur. Les tâches à fort impact et forte faisabilité forment la première vague. Celles à fort impact mais faible faisabilité attendront : elles demandent souvent de nettoyer les données ou de clarifier le processus avant toute chose.",
  },
  {
    title: 'Prototyper sur un seul processus',
    body: "Choisissez un processus, un seul, et construisez un prototype en conditions réelles sur deux à quatre semaines. Mesurez avant et après : temps passé, taux d'erreur, ressenti de l'équipe. Une automatisation qui tourne et fait gagner plusieurs heures par semaine convainc davantage qu'un schéma directeur de quarante pages.",
  },
  {
    title: 'Sécuriser les données et la validation humaine',
    body: "Avant d'élargir, verrouillez deux sujets. Les données : quelles informations sortent de l'entreprise, vers quels serveurs, avec quelles garanties contractuelles (RGPD, hébergement, durée de conservation). La supervision : pour chaque automatisation, définissez ce que l'IA décide seule, ce qui passe par une validation humaine et comment reprendre la main à tout moment.",
  },
  {
    title: 'Déployer, documenter et former',
    body: "Une automatisation non documentée meurt avec le départ de la personne qui l'a construite. Documentez chaque flux (déclencheur, traitement, action, responsable), nommez un référent, puis formez les équipes à utiliser, surveiller et faire évoluer leurs automatisations. Cette étape est la plus souvent sacrifiée et la plus déterminante pour que les gains durent.",
  },
]

/* ───────── Les 6 erreurs ───────── */

const ERREURS = [
  {
    title: 'Automatiser un processus bancal',
    body: "Si le processus est flou, mal défini ou contesté en interne, l'automatisation accélère le désordre. Clarifiez les règles et les responsabilités d'abord, automatisez ensuite. Une heure passée à formaliser le processus en économise dix en correctifs.",
  },
  {
    title: 'Commencer trop large',
    body: "Dix automatisations lancées en parallèle donnent dix chantiers à moitié finis et des équipes lassées. Un seul processus mené jusqu'au bout, mesuré et raconté en interne crée plus de valeur et plus d'envie pour la suite.",
  },
  {
    title: "Choisir l'outil avant le besoin",
    body: "L'abonnement souscrit sous le coup de l'enthousiasme finit souvent inutilisé au bout de trois mois. Partez de la cartographie des tâches : l'outil découle du besoin, et le bon outil est souvent celui que vous payez déjà.",
  },
  {
    title: 'Supprimer toute validation humaine',
    body: "Un modèle d'IA se trompe avec aplomb. Sur tout ce qui touche à l'argent, au juridique, aux clients ou aux salariés, un humain valide avant l'action. Le point de contrôle se place aux endroits où l'erreur coûte cher.",
  },
  {
    title: 'Ignorer les données et la conformité',
    body: "Envoyer des données clients ou RH vers un outil non vérifié expose l'entreprise. Hébergement, réutilisation des données pour l'entraînement des modèles, durée de conservation, conformité RGPD : ces vérifications se font avant le premier test.",
  },
  {
    title: "Négliger la formation et l'adoption",
    body: "Une automatisation que l'équipe ne comprend pas génère de la méfiance, puis des contournements, puis l'abandon. Le temps de formation fait partie du projet au même titre que le temps de construction, et il conditionne la durée de vie des gains.",
  },
]

/* ───────── FAQ (réponse directe en gras + complément) ───────── */

const FAQ = [
  {
    q: "Quelle différence entre automatisation IA et RPA ?",
    strong: "La RPA exécute des règles fixes sur des données structurées. L'automatisation IA interprète le contexte et traite des données non structurées : emails, documents, conversations.",
    rest: "La RPA reste imbattable sur les processus stables à très gros volumes, comme certaines opérations de back-office. L'automatisation IA couvre les tâches qui demandaient jusqu'ici une lecture et un jugement humains. Les grandes organisations combinent souvent les deux approches.",
  },
  {
    q: "Faut-il savoir coder pour automatiser avec l'IA ?",
    strong: "Non. Les assistants IA personnalisés et les plateformes no-code comme Make, Zapier ou Power Automate se configurent visuellement, sans écrire de code.",
    rest: "Des compétences techniques deviennent utiles sur les cas avancés : connexion à des API internes, agents autonomes, gros volumes. Pour la majorité des besoins d'une PME, un profil métier formé pendant deux jours construit et maintient ses automatisations.",
  },
  {
    q: "Quels processus automatiser en premier ?",
    strong: "Commencez par les tâches fréquentes, chronophages, aux règles claires et au risque faible en cas d'erreur : tri d'emails, comptes rendus, relances, ressaisies entre deux outils.",
    rest: "Ces cas produisent des gains visibles en quelques semaines et créent l'adhésion pour la suite. Gardez les processus sensibles (paie, juridique, décisions client) pour une seconde vague, avec validation humaine systématique.",
  },
  {
    q: "Combien coûte une automatisation IA pour une PME ?",
    strong: "Comptez 0 à 50 € par mois et par personne pour les outils, un accompagnement sur devis si vous vous faites aider, et 1 980 € par jour pour former une équipe.",
    rest: "Beaucoup de premières automatisations se construisent avec les abonnements que l'entreprise paie déjà. Le véritable investissement porte sur le temps de cadrage et sur la montée en compétence des équipes.",
  },
  {
    q: "L'automatisation IA est-elle compatible avec le RGPD ?",
    strong: "Oui, à condition de choisir des outils offrant des garanties contractuelles sur les données et de définir précisément ce qui peut leur être transmis.",
    rest: "Vérifiez la localisation de l'hébergement, la non-réutilisation de vos données pour l'entraînement des modèles, les durées de conservation et la base légale des traitements. Certains usages, comme le tri de candidatures, relèvent en plus des exigences de l'AI Act et imposent une supervision humaine renforcée.",
  },
  {
    q: "Quelle différence entre une automatisation IA et un agent IA ?",
    strong: "Une automatisation IA suit un scénario défini à l'avance. Un agent IA reçoit un objectif et décide lui-même des étapes pour l'atteindre.",
    rest: "L'agent gère des situations plus ouvertes, au prix d'une supervision plus exigeante. Dans la pratique, on commence par des automatisations à scénario et on introduit des agents quand le besoin de flexibilité est démontré.",
  },
]

const faqItems = FAQ.map(f => ({ q: f.q, a: `${f.strong} ${f.rest}` }))

/* ───────── Pour aller plus loin ───────── */

const RELATED = [
  { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Formation', desc: "2 jours pour apprendre à construire et superviser ses propres automatisations. Certifié Qualiopi, finançable OPCO." },
  { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Accompagnement', desc: "Masteria cadre et déploie vos automatisations avec vos équipes. Cadrage initial gratuit." },
  { label: 'Les agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Guide', desc: "Ce que les agents IA autonomes savent faire, leurs limites et les conditions d'un déploiement sûr." },
]

export default function AutomatisationIAGuidePage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Automatisation IA', slug: SLUG },
  ]

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
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 72, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Automatisation IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <BookOpen size={16} strokeWidth={2.2} />
              Guide complet · 2026
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} strokeWidth={2.2} />
              Lecture : 15 min
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.75, marginBottom: 16, maxWidth: 720, fontWeight: 500 }}>
            Trier les factures, qualifier les demandes entrantes, rédiger les comptes rendus, relancer les impayés : une partie du travail de bureau se répète chaque semaine, presque à l'identique. L'intelligence artificielle sait désormais prendre en charge ces tâches, y compris celles qui demandaient de lire, comprendre et décider.
          </p>
          <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, marginBottom: 36, maxWidth: 720 }}>
            Ce guide fait le tour du sujet en sept points : la définition et la différence avec l'automatisation classique, ce que l'on peut automatiser fonction par fonction, les familles d'outils, la méthode pour réussir, les erreurs courantes, les budgets à prévoir et les questions que tout le monde se pose.
          </p>

          {/* Sommaire */}
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '24px 28px', maxWidth: 720 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 14px' }}>Sommaire</p>
            <ol style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SOMMAIRE.map(item => (
                <li key={item.href} style={{ fontSize: 15, color: '#374151' }}>
                  <a href={item.href} style={{ color: c, fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 1. DÉFINITION ── */}
      <section id="definition" style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>Qu'est-ce que l'automatisation IA ?</h2>

          {/* Réponse directe (GEO) */}
          <p style={{ background: '#EFF6FF', borderLeft: `4px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 28px' }}>
            <strong>L'automatisation IA consiste à confier à l'intelligence artificielle des tâches qui exigeaient jusqu'ici un jugement humain : lire un email et décider de la suite, résumer une réunion, qualifier une demande. Là où l'automatisation classique (RPA) exécute des règles fixes, l'IA interprète le contexte et traite les cas imprévus.</strong>
          </p>

          <p style={pStyle}>
            La différence avec l'automatisation traditionnelle tient à la nature des tâches prises en charge. La RPA (Robotic Process Automation), les macros et les scripts exécutent des scénarios entièrement prévisibles : copier une cellule, remplir un formulaire, déplacer un fichier. Dès qu'une variation apparaît, par exemple une facture dont la mise en page change ou un email ambigu, le robot s'arrête ou se trompe.
          </p>
          <p style={pStyle}>
            L'IA générative ajoute la part de jugement qui manquait. Un modèle de langage peut lire un document qu'il n'a jamais vu, en extraire l'essentiel, reformuler, classer, proposer une décision argumentée. Combinée aux outils d'automatisation, elle permet de traiter des flux entiers de travail intellectuel répétitif : la machine gère les cas standards, l'humain garde les cas sensibles et la validation finale.
          </p>
          <p style={pStyle}>
            Concrètement, une automatisation IA combine trois briques : un déclencheur (un email arrive, un formulaire est soumis, une échéance tombe), un traitement par l'IA (lire, résumer, extraire, rédiger, décider selon des consignes écrites) et une action (mettre à jour le CRM, envoyer une réponse, créer une tâche, alerter un humain).
          </p>

          {/* Comparatif RPA vs IA */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, margin: '32px 0' }}>
            <div style={{ background: '#F9FAFB', borderRadius: 12, padding: 26, border: '1px solid #E5E7EB' }}>
              <h3 style={{ ...h3Style, fontSize: 16 }}>Automatisation classique (RPA, macros)</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Exécute des règles fixes, définies à l\'avance',
                  'Travaille sur des données structurées (tableaux, formulaires)',
                  'S\'arrête ou se trompe dès qu\'un cas sort du cadre',
                  'Idéale pour les processus stables à très gros volumes',
                ].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, display: 'flex', gap: 10 }}>
                    <span style={{ color: '#9CA3AF', flexShrink: 0 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#F9FAFB', borderRadius: 12, padding: 26, border: `2px solid ${cLight}`, borderLeftColor: c, borderLeftWidth: 4 }}>
              <h3 style={{ ...h3Style, fontSize: 16 }}>Automatisation IA</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Interprète le contexte et applique des consignes écrites',
                  'Traite des données non structurées (emails, PDF, conversations)',
                  'Gère les variations et les cas imprévus, sous supervision',
                  'Idéale pour les tâches qui demandaient lecture et jugement',
                ].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, display: 'flex', gap: 10 }}>
                    <span style={{ color: c, flexShrink: 0 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={{ ...pStyle, marginBottom: 0 }}>
            Les deux approches se complètent, mais pour une PME ou une ETI qui démarre en 2026, l'automatisation IA offre le meilleur rapport effort sur résultat : les outils sont accessibles sans développeur et les cas d'usage couvrent la majorité des tâches de bureau. Pour donner ces réflexes à vos équipes, la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> de Masteria couvre ces fondamentaux en deux jours de pratique.
          </p>
        </div>
      </section>

      {/* ── 2. CAS D'USAGE PAR FONCTION ── */}
      <section id="cas-usage" style={{ padding: '72px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>Que peut-on automatiser avec l'IA en 2026 ?</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            La réponse courte : toute tâche qui se répète, suit une logique que l'on peut expliquer et tolère une relecture humaine avant action. Voici un panorama par fonction, avec des exemples réalistes tels qu'on les rencontre en PME et en ETI. Aucun de ces cas ne demande de développeur.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {FONCTIONS.map(f => (
              <div key={f.title} style={{ background: '#fff', borderRadius: 12, padding: '28px 30px', border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
                <h3 style={h3Style}>
                  <span style={{ marginRight: 10 }}>{f.icon}</span>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{f.intro}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {f.examples.map((ex, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>
                      <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, marginTop: 32, marginBottom: 0 }}>
            Chacun de ces exemples se construit en quelques jours à quelques semaines selon la complexité. Pour identifier ceux qui rapportent le plus dans votre contexte et les déployer sans faux départ, un cadrage structuré fait gagner des mois : c'est précisément le rôle de notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link>, dont le cadrage initial est gratuit.
          </p>
        </div>
      </section>

      {/* ── 3. LES OUTILS ── */}
      <section id="outils" style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>Les outils d'automatisation IA : 3 familles à connaître</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Le marché est foisonnant, mais la quasi-totalité des solutions se range dans trois familles. Bien les distinguer évite de payer pour des outils redondants et de complexifier là où un réglage simple suffit.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
            <div style={{ background: '#F9FAFB', borderRadius: 12, padding: '28px 30px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>Famille 1</div>
              <h3 style={h3Style}>Les assistants IA et leurs automatisations natives</h3>
              <p style={{ ...pStyle, fontSize: 15 }}>
                ChatGPT, Claude et Gemini intègrent des fonctions qui automatisent les tâches récurrentes sans aucun outil supplémentaire : les GPTs personnalisés côté ChatGPT, les Projects côté Claude, les Gems côté Gemini. Le principe : vous enregistrez une fois vos instructions, votre contexte et vos documents de référence, puis chaque membre de l'équipe relance la tâche en quelques secondes.
              </p>
              <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>
                C'est la porte d'entrée idéale : coût inclus dans l'abonnement existant, mise en place en une heure, aucun risque technique. La limite est connue : un humain doit déclencher la tâche à chaque fois.
              </p>
            </div>

            <div style={{ background: '#F9FAFB', borderRadius: 12, padding: '28px 30px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>Famille 2</div>
              <h3 style={h3Style}>Les plateformes d'automatisation no-code</h3>
              <p style={{ ...pStyle, fontSize: 15 }}>
                Make, Zapier, n8n et Power Automate connectent vos applications entre elles et exécutent des scénarios sans intervention humaine : un événement déclenche le flux (email reçu, formulaire soumis, ligne ajoutée dans un tableur), l'IA traite, l'action s'exécute. Tout se configure visuellement, par glisser-déposer.
              </p>
              <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>
                Make et Zapier sont les plus accessibles pour démarrer. n8n peut s'auto-héberger, un atout quand la confidentialité des données est un sujet. Power Automate s'impose naturellement dans les environnements Microsoft 365. C'est la famille reine pour les flux entre applications : CRM, boîte mail, tableurs, outils métier.
              </p>
            </div>

            <div style={{ background: '#F9FAFB', borderRadius: 12, padding: '28px 30px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>Famille 3</div>
              <h3 style={h3Style}>Les agents IA autonomes</h3>
              <p style={{ ...pStyle, fontSize: 15 }}>
                Un agent IA reçoit un objectif, le décompose en étapes, utilise des outils (recherche, lecture de fichiers, rédaction, applications connectées) et enchaîne les actions jusqu'au résultat, avec des points de validation humaine. Là où une automatisation suit un chemin tracé, l'agent choisit son chemin.
              </p>
              <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>
                C'est la famille la plus récente et la plus puissante, et celle qui exige le plus de rigueur dans la supervision. Notre guide des <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link> détaille les cas d'usage pertinents et les conditions d'un déploiement maîtrisé.
              </p>
            </div>
          </div>

          {/* Quand choisir quoi */}
          <div style={{ background: '#EFF6FF', border: `1px solid ${cLight}`, borderRadius: 12, padding: '26px 30px' }}>
            <h3 style={{ ...h3Style, marginBottom: 16 }}>Quand choisir quoi ?</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Une tâche individuelle qui revient souvent (rédaction, analyse, synthèse) : un assistant IA personnalisé suffit.',
                'Un flux entre plusieurs applications, déclenché par un événement : une plateforme no-code comme Make, Zapier, n8n ou Power Automate.',
                'Un objectif en plusieurs étapes qui demande des décisions intermédiaires : un agent IA, avec validation humaine aux étapes sensibles.',
                'Dans le doute : commencez par la famille la plus simple qui couvre le besoin, et montez en complexité quand la valeur est prouvée.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7 }}>
                  <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. LA MÉTHODE ── */}
      <section id="methode" style={{ padding: '72px 40px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>La méthode en 5 étapes pour automatiser vos processus</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Les projets d'automatisation IA qui réussissent suivent à peu près tous le même chemin, qu'ils soient menés en interne ou avec un accompagnement. Le voici, étape par étape.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {ETAPES.map((etape, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '26px 30px', border: '1px solid #E5E7EB', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 38, height: 38, background: c, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <span style={{ fontSize: 16, color: '#fff', fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{i + 1}</span>
                </div>
                <div>
                  <h3 style={{ ...h3Style, fontSize: 17 }}>{etape.title}</h3>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{etape.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, marginTop: 28, marginBottom: 0 }}>
            La cinquième étape mérite d'être anticipée dès le départ : la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> de Masteria est conçue exactement pour cela, avec deux jours de pratique sur les tâches réelles des participants.
          </p>
        </div>
      </section>

      {/* ── CTA MILIEU ── */}
      <section style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Deux façons de passer à l'action avec Masteria
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Former vos équipes à construire leurs automatisations, ou vous faire accompagner de l'audit au déploiement.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/formation-automatisation-ia" style={{ background: '#fff', color: c, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
              Se former en 2 jours →
            </Link>
            <Link to="/agence-automatisation-ia" style={{ background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.55)' }}>
              Être accompagné →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. LES 6 ERREURS ── */}
      <section id="erreurs" style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>Les 6 erreurs qui font échouer un projet d'automatisation IA</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Les échecs se ressemblent davantage que les réussites. Ces six erreurs reviennent dans la grande majorité des projets abandonnés, et toutes se préviennent en amont.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {ERREURS.map((err, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: '24px 28px', border: '1px solid #E5E7EB' }}>
                <h3 style={{ ...h3Style, fontSize: 16.5 }}>
                  <span style={{ color: c, fontFamily: 'Nunito, sans-serif', fontWeight: 900, marginRight: 10 }}>{i + 1}.</span>
                  {err.title}
                </h3>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{err.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. COMBIEN ÇA COÛTE ── */}
      <section id="cout" style={{ padding: '72px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={h2Style}>Combien coûte l'automatisation IA ?</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Les ordres de grandeur ci-dessous valent pour une PME ou une ETI. Trois postes de coût se combinent, et le premier est souvent plus bas que ce que l'on imagine.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 28 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Les outils</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>0 à 50 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 4 }}>/ mois / personne</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Les versions gratuites des assistants IA et des plateformes no-code suffisent pour expérimenter. Les abonnements professionnels des assistants tournent autour d'une vingtaine d'euros par mois et par utilisateur, et les plateformes d'automatisation facturent à l'usage : quelques euros à quelques dizaines d'euros par mois aux volumes d'une PME.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>L'accompagnement</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>Sur devis</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Le budget dépend du nombre de processus, des outils en place et du niveau d'autonomie visé. Un cadrage sérieux précède tout chiffrage : méfiez-vous des forfaits vendus avant analyse. Chez Masteria, le cadrage initial est gratuit et débouche sur une feuille de route chiffrée.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>La formation</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 4 }}>/ jour HT</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Former une équipe à construire et superviser ses automatisations coûte 1 980 € HT par jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Masteria est certifié Qualiopi : ce volet est finançable par votre OPCO, et nous montons le dossier avec vous.
              </p>
            </div>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0 }}>
            Un point d'honnêteté sur le financement : seule la formation est finançable par votre OPCO. Le conseil et le déploiement ne le sont pas, et une offre qui vous promet la prise en charge OPCO d'une prestation de conseil vous expose à un refus de financement. Pour le détail des deux approches, voyez la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> et l'<Link to="/agence-automatisation-ia" style={aStyle}>accompagnement par notre agence</Link>.
          </p>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section id="faq" style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>Automatisation IA : les questions fréquentes</h2>
          <p style={{ ...pStyle, marginBottom: 32 }}>
            Les questions qui reviennent le plus souvent dans nos cadrages et nos formations, avec des réponses directes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '24px 28px' }}>
                <h3 style={{ ...h3Style, fontSize: 17 }}>{item.q}</h3>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  <strong style={{ color: '#0A0A0A' }}>{item.strong}</strong>
                  {' '}{item.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR ALLER PLUS LOIN ── */}
      <section style={{ padding: '72px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Pour aller plus loin</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32 }}>
            Se former, se faire accompagner ou creuser le sujet des agents : les trois suites logiques de ce guide.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {RELATED.map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 10, padding: 22, border: `2px solid ${c}20`, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
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
                  <span style={{ fontSize: 13, color: c, fontWeight: 700 }}>En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Par où commencer chez vous ?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Décrivez-nous les tâches qui consomment le plus de temps dans vos équipes. Nous revenons vers vous sous 24 heures avec un avis honnête : ce qui s'automatise vite, ce qui demande un cadrage, et ce qui ne vaut pas l'effort.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Organisme certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
