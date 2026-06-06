import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Check, ShieldCheck, Clock, Users, Sparkles, MapPin, Wallet, Briefcase } from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Pages éditoriales transversales pour positionnement SEO sur des requêtes informationnelles
// à fort volume identifiées via Search Console / nexa.
// Chaque entrée = 1 page autonome avec sa propre config (title, H1, contenu, FAQ).

const TOPICS = {
  'formation-intelligence-artificielle-cpf': {
    badge: 'CPF & financement formation IA',
    h1: "Formation intelligence artificielle CPF : nos réponses",
    metaTitle: "Formation intelligence artificielle CPF | Alternatives & financement | Masteria",
    metaDescription: "Formation IA CPF : pourquoi nos formations ne sont pas finançables CPF, quelles alternatives (OPCO, plan de développement, financement direct entreprise). Réponses claires et solutions concrètes.",
    intro: "Vous cherchez une formation intelligence artificielle finançable par votre Compte Personnel de Formation ? Voici une explication claire de ce que permet — et ne permet pas — le CPF pour l'IA, et les alternatives de financement les plus adaptées aux salariés et aux entreprises.",
    sections: [
      {
        h2: "Le CPF pour la formation IA : ce qu'il faut savoir",
        body: "Le CPF (Compte Personnel de Formation) ne finance que les formations menant à une certification enregistrée au RNCP (Répertoire National des Certifications Professionnelles) ou au RS (Répertoire Spécifique). À ce jour, peu de formations IA courtes destinées aux entreprises sont éligibles, car elles ne débouchent pas sur une certification reconnue par France Compétences. Attention aux organismes qui annoncent des formations IA \"finançables CPF\" : il s'agit souvent de bootcamps longs en data science ou en développement, pas de formations à l'usage des outils ChatGPT, Copilot ou Gemini.",
      },
      {
        h2: "Pourquoi Masteria ne propose pas de formation CPF",
        body: "Nos formations sont volontairement conçues pour être courtes (1 à 3 jours), pratiques et 100 % adaptées aux cas d'usage métier de l'entreprise. Ce format est incompatible avec les exigences du RNCP, qui impose des certifications longues et standardisées. Nous avons fait le choix de la pertinence opérationnelle plutôt que de l'éligibilité CPF, car nos clients (entreprises et organismes publics) financent leurs formations via leur OPCO ou leur plan de développement des compétences.",
      },
      {
        h2: "Les alternatives au CPF : OPCO, plan de développement, financement direct",
        body: "Trois solutions de financement existent pour suivre une formation Masteria sans toucher à votre CPF : 1) l'OPCO de votre branche professionnelle (ATLAS pour les services et la finance, AKTO pour les services à la personne, OPCO 2i pour l'industrie, AFDAS pour les médias…) prend en charge tout ou partie du coût ; 2) le plan de développement des compétences de votre entreprise, géré par votre service RH ou formation ; 3) le financement direct par l'entreprise, déductible des charges sociales. Masteria étant certifié Qualiopi, les trois dispositifs sont accessibles. Nous accompagnons gratuitement le montage du dossier de prise en charge.",
      },
    ],
    faq: [
      { q: "Puis-je utiliser mon CPF pour suivre une formation Masteria ?", a: "Non, nos formations courtes ne sont pas éligibles CPF car elles ne débouchent pas sur une certification RNCP. En revanche, elles sont finançables OPCO et via le plan de développement des compétences de votre entreprise." },
      { q: "Quelles formations IA sont réellement finançables CPF ?", a: "Les bootcamps longs (3 à 9 mois) en data science, machine learning ou développement IA proposés par des écoles comme Le Wagon, Datascientest ou Simplon sont parfois certifiés RNCP et donc finançables CPF. Ces formations s'adressent aux personnes en reconversion, pas aux salariés cherchant à utiliser ChatGPT au quotidien." },
      { q: "Mon employeur doit-il financer ma formation IA ?", a: "Si la formation est réalisée à la demande de l'employeur (plan de développement des compétences), elle est financée par l'entreprise et son OPCO. Si vous êtes à l'initiative, vous pouvez la proposer à votre RH avec un argumentaire de retour sur investissement." },
      { q: "Combien coûte une formation IA Masteria ?", a: "1 980 € HT par jour pour le groupe en intra-entreprise (jusqu'à 12 participants), 1 380 € HT par jour en accompagnement individuel sur mesure (jusqu'à 12 participants). Une journée pour le programme initiation, deux jours pour la version approfondie multi-outils." },
      { q: "L'OPCO finance-t-il à 100 % ?", a: "La plupart des OPCO prennent en charge entre 50 % et 100 % du coût pédagogique selon votre convention collective et votre taille d'entreprise. Les TPE (moins de 11 salariés) bénéficient souvent d'une prise en charge totale dans la limite des plafonds annuels." },
      { q: "Combien de temps pour obtenir l'accord OPCO ?", a: "Le délai moyen est de 5 à 15 jours ouvrés selon l'OPCO. Nous vous fournissons tous les documents nécessaires (devis, programme détaillé, convention) pour accélérer le traitement." },
    ],
  },

  'formation-intelligence-artificielle-distanciel': {
    badge: 'À distance & en ligne',
    h1: "Formation intelligence artificielle à distance",
    metaTitle: "Formation IA à distance | Visio · Classes virtuelles · Qualiopi | Masteria",
    metaDescription: "Formation intelligence artificielle 100 % à distance, en visioconférence avec un formateur dédié. Mêmes cas pratiques qu'en présentiel, finançable OPCO, certifié Qualiopi. Devis sous 24h.",
    intro: "Vos équipes sont réparties sur plusieurs sites ou en télétravail ? Notre formation IA en distanciel reproduit l'efficacité du présentiel grâce à des classes virtuelles animées par un formateur dédié, avec exercices pratiques sur vos vrais cas d'usage.",
    sections: [
      {
        h2: "Comment fonctionne une formation IA à distance ?",
        body: "La formation se déroule en classe virtuelle synchrone (Zoom, Teams ou Google Meet selon votre environnement), animée en direct par un formateur Masteria. Le programme est strictement identique au présentiel : 7 heures par jour, alternance théorie / pratique, exercices sur vos propres cas d'usage. Les participants travaillent simultanément dans leur outil IA (ChatGPT, Copilot, Gemini, Claude ou Mistral) et partagent leurs résultats avec le groupe via le chat ou le partage d'écran.",
      },
      {
        h2: "Distanciel ou présentiel : que choisir ?",
        body: "Le distanciel est recommandé quand vos équipes sont géographiquement dispersées, en télétravail régulier, ou pour des sessions de moins de 6 participants. Le présentiel reste préférable pour les groupes de 8 à 12 personnes, les ateliers de cadrage stratégique, ou quand l'enjeu est aussi de créer de la cohésion d'équipe autour du sujet IA. Tarifs et durée sont identiques dans les deux formats. Vous pouvez aussi mixer les deux : un premier jour en présentiel pour le cadrage, un second en distanciel pour l'approfondissement.",
      },
      {
        h2: "Outils, prérequis techniques et organisation",
        body: "Aucun logiciel à installer : la formation se fait directement dans votre outil de visioconférence habituel. Chaque participant doit avoir un ordinateur avec accès Internet, un casque ou des écouteurs, et un compte sur l'outil IA étudié (ChatGPT Plus, Copilot M365, Gemini Workspace, Claude.ai ou Le Chat Mistral). Si vos équipes n'ont pas encore de licence, nous proposons une formation avec comptes de démonstration. La connexion à la classe virtuelle se fait via un lien unique envoyé 48h avant la session.",
      },
    ],
    faq: [
      { q: "La formation IA à distance est-elle aussi efficace qu'en présentiel ?", a: "Oui, à condition d'avoir un formateur en direct (pas une vidéo enregistrée) et des exercices pratiques sur vos vrais cas d'usage. Notre format synchrone reproduit l'interactivité du présentiel : questions en direct, partage d'écran, feedback individuel sur les prompts produits." },
      { q: "Combien de participants maximum en distanciel ?", a: "12 participants maximum par session pour préserver la qualité des échanges et permettre au formateur de suivre individuellement la production de chacun. Au-delà, nous organisons plusieurs sessions successives." },
      { q: "Le distanciel est-il moins cher que le présentiel ?", a: "Les tarifs sont identiques (1 980 € HT par jour en intra-entreprise jusqu'à 12 participants, 1 380 € HT par jour en accompagnement individuel), car la qualité pédagogique est la même. L'économie se fait sur les frais de déplacement du formateur, déjà inclus dans nos tarifs présentiel." },
      { q: "La formation à distance est-elle finançable OPCO ?", a: "Oui, exactement comme le présentiel. Masteria est certifié Qualiopi pour les actions de formation en présentiel et à distance (FOAD). L'OPCO ne fait pas de différence dans la prise en charge." },
      { q: "Peut-on suivre la formation en asynchrone (à son rythme) ?", a: "Non, nous proposons uniquement du synchrone. Les formations asynchrones (vidéos enregistrées) ont un taux de complétion très faible et n'apportent pas l'ancrage opérationnel recherché par nos clients entreprises." },
      { q: "Quelle plateforme de visioconférence utilisez-vous ?", a: "Nous nous adaptons à votre environnement : Zoom, Microsoft Teams, Google Meet ou Webex. Si vous n'avez pas de plateforme, nous proposons une session sur notre instance Zoom Pro." },
    ],
  },

  'formation-intelligence-artificielle-generative': {
    badge: 'IA générative en entreprise',
    h1: "Formation intelligence artificielle générative",
    metaTitle: "Formation IA générative en entreprise | ChatGPT, Claude, Gemini, Mistral | Masteria",
    metaDescription: "Formation IA générative pour vos équipes : maîtriser ChatGPT, Claude, Copilot, Gemini et Mistral pour rédiger, analyser, automatiser. Certifié Qualiopi, finançable OPCO. Devis sous 24h.",
    intro: "L'IA générative — ChatGPT, Claude, Gemini, Copilot, Mistral — transforme les méthodes de travail dans tous les métiers. Notre formation IA générative apprend à vos équipes à utiliser ces outils efficacement, en sécurité et avec un vrai retour sur investissement opérationnel.",
    sections: [
      {
        h2: "Qu'est-ce que l'IA générative et que peut-elle faire ?",
        body: "L'IA générative regroupe les modèles d'intelligence artificielle capables de produire du contenu original (texte, image, code, voix) à partir d'une consigne en langage naturel. Les principaux outils utilisés en entreprise sont ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft) et Mistral (souverain européen). Ces outils permettent de rédiger des emails, synthétiser des documents longs, analyser des données, générer des présentations, traduire, coder, et automatiser des tâches répétitives à très grande échelle.",
      },
      {
        h2: "Quel outil d'IA générative choisir pour son entreprise ?",
        body: "Le choix dépend de trois critères. 1) Votre environnement : si vos équipes sont sur Microsoft 365, Copilot s'intègre nativement ; sur Google Workspace, Gemini est le plus naturel. 2) Vos cas d'usage : Claude excelle sur les longs documents et le raisonnement ; ChatGPT est le plus polyvalent ; Mistral est le choix de souveraineté pour les données sensibles. 3) Vos contraintes réglementaires : RGPD strict, DORA, secteur santé ou finance orientent vers Mistral ou les versions Enterprise de ChatGPT/Claude avec hébergement européen et zero retention.",
      },
      {
        h2: "Comment former ses équipes à l'IA générative",
        body: "Une formation IA générative efficace doit combiner trois piliers. 1) La compréhension du fonctionnement (modèles, hallucinations, biais) pour éviter les erreurs critiques. 2) La maîtrise du prompt engineering : structurer une consigne, donner du contexte, itérer pour atteindre la qualité attendue. 3) L'application aux cas d'usage métier réels : on ne forme pas un juriste comme un commercial. Chez Masteria, le programme est systématiquement adapté à votre secteur et à vos outils, avec une bibliothèque de prompts laissée à l'équipe et un suivi post-formation.",
      },
    ],
    faq: [
      { q: "Quelle est la différence entre IA et IA générative ?", a: "L'IA générative est une sous-catégorie de l'intelligence artificielle, capable de produire du contenu nouveau (texte, image, code) plutôt que de simplement classifier ou prédire. C'est cette branche qui a explosé depuis 2022 avec ChatGPT, et qui transforme aujourd'hui les métiers tertiaires." },
      { q: "Mes équipes ont-elles besoin de connaissances techniques ?", a: "Non. L'IA générative se pilote en langage naturel, sans code. Notre formation est accessible à tous les profils — marketing, finance, RH, juridique, direction — sans aucun prérequis technique." },
      { q: "L'IA générative est-elle fiable pour un usage professionnel ?", a: "Oui, à condition de comprendre ses limites : hallucinations (informations inventées), biais, données d'entraînement parfois obsolètes. Une partie de notre formation est consacrée à apprendre à vérifier et sécuriser les productions de l'IA avant de les diffuser." },
      { q: "Comment garantir la confidentialité des données ?", a: "Trois leviers : 1) utiliser les versions Enterprise (ChatGPT Enterprise, Claude for Work, Copilot M365) qui n'utilisent pas vos données pour réentraîner le modèle ; 2) choisir des outils hébergés en Europe (Mistral, Gemini Workspace EU) ; 3) former les équipes aux bons réflexes (ne jamais coller de données client identifiables dans un outil grand public)." },
      { q: "Combien de temps pour former une équipe à l'IA générative ?", a: "Une journée suffit pour une initiation solide qui couvre 1 outil et 5 cas d'usage métier. Comptez deux jours pour un programme multi-outils approfondi (3 à 5 outils comparés) avec ateliers de prompt engineering avancé." },
      { q: "Quels métiers gagnent le plus à se former à l'IA générative ?", a: "Tous les métiers tertiaires en bénéficient, mais les gains les plus rapides sont visibles en marketing, communication, RH, juridique, commercial et finance. Selon McKinsey, ces fonctions peuvent gagner 6 à 10 heures par semaine après une formation bien menée." },
    ],
    related: [
      { label: "Formation automatisation IA", href: "/formation-automatisation-ia", desc: "Automatiser ses tâches et ses workflows avec l'IA" },
      { label: "Formation multi-outils IA", href: "/formation-multi-outils", desc: "Comparer et combiner ChatGPT, Copilot, Gemini, Claude, Mistral" },
      { label: "Formation IA à distance", href: "/formation-intelligence-artificielle-distanciel", desc: "Le même programme en classe virtuelle" },
    ],
  },

  'formation-automatisation-ia': {
    badge: 'Automatisation & agents IA',
    h1: "Formation automatisation IA",
    metaTitle: "Formation automatisation IA | Workflows, agents & no-code | Masteria",
    metaDescription: "Formation automatisation IA : automatisez vos tâches et workflows avec l'IA (agents, Make, Power Automate). Certifié Qualiopi, finançable OPCO.",
    intro: "L'automatisation par l'intelligence artificielle permet de déléguer les tâches répétitives (saisie, relances, reporting, tri d'emails) à des agents et des workflows intelligents. Notre formation automatisation IA apprend à vos équipes à repérer ces tâches, à les automatiser avec les bons outils et à le faire en sécurité, sans écrire une ligne de code.",
    courseData: {
      name: "Formation automatisation IA",
      description: "Formation professionnelle pour automatiser ses tâches et ses workflows métier avec l'IA : agents, GPTs personnalisés, Make, Zapier, n8n et Power Automate. 1 à 2 jours, sans prérequis technique.",
      level: 'Tous niveaux',
      tool: 'Make, Zapier, n8n, Power Automate, GPTs',
      duration: 'PT14H',
      price: '1980',
      teaches: [
        "Identifier les tâches automatisables à plus fort retour sur investissement",
        "Construire un workflow d'automatisation IA en no-code",
        "Concevoir et superviser un agent IA",
        "Sécuriser et gouverner ses automatisations (RGPD, contrôle humain)",
      ],
    },
    sections: [
      {
        h2: "Qu'est-ce que l'automatisation IA ?",
        body: "L'automatisation IA consiste à confier à l'intelligence artificielle des tâches répétitives qui mobilisaient jusqu'ici du temps humain : trier des emails, relancer des clients, extraire des données d'un document, rédiger un compte-rendu, mettre à jour un CRM. Elle se distingue de l'IA générative, qui produit du contenu à la demande, par sa logique de chaîne : un déclencheur (un email reçu, un formulaire rempli, une heure précise) lance automatiquement une suite d'actions exécutées par l'IA. Elle se distingue aussi de l'automatisation classique, comme les macros ou la RPA, par sa capacité à comprendre le langage naturel, à interpréter un contexte et à décider. On parle d'agents IA lorsque le système enchaîne lui-même plusieurs étapes pour atteindre un objectif. La bonne nouvelle pour les équipes métier : la plupart de ces automatisations se construisent aujourd'hui en no-code, par glisser-déposer, sans aucune compétence de développeur.",
      },
      {
        h2: "Quels outils pour automatiser avec l'IA ?",
        body: "Quatre familles d'outils couvrent l'essentiel des besoins. Les assistants conversationnels dotés de mémoire et d'actions (ChatGPT et ses GPTs personnalisés, Claude, Gemini) automatisent des tâches rédactionnelles et d'analyse récurrentes. Microsoft Copilot, couplé à Power Automate, automatise les flux au sein de l'écosystème Microsoft 365 (Outlook, Teams, Excel, SharePoint). Les orchestrateurs no-code comme Make, Zapier et n8n connectent vos applications entre elles et y injectent de l'IA à chaque étape : lire un email, le résumer, créer une tâche, notifier une équipe. Enfin, les agents IA exécutent des objectifs plus complexes en autonomie supervisée. Le bon choix dépend de votre environnement logiciel, du niveau de sensibilité de vos données et de la complexité des flux. La formation vous apprend à comparer ces outils et à sélectionner la combinaison adaptée à vos cas d'usage, plutôt qu'à empiler des abonnements.",
      },
      {
        h2: "Quelles tâches automatiser en priorité ?",
        body: "Toutes les tâches ne se valent pas. Les meilleures candidates à l'automatisation IA sont fréquentes, chronophages, suivent des règles claires et présentent un risque d'erreur limité. En marketing, on automatise la veille, la production et la programmation de contenus. Au commercial, les relances, la qualification des leads et la mise à jour du CRM. En RH, le tri des candidatures et la création de supports d'onboarding. En finance, la consolidation de reportings et le rapprochement de documents. Au service client, le routage des tickets et la rédaction des premières réponses. À l'assistanat et au support administratif, le tri d'emails, la prise de notes de réunion et la génération de documents. La méthode que nous transmettons consiste à cartographier vos tâches selon trois critères, la fréquence, le temps consommé et le niveau de risque, afin d'automatiser d'abord ce qui libère le plus de temps en toute sécurité.",
      },
      {
        h2: "Comment se former à l'automatisation IA ?",
        body: "Une formation automatisation IA efficace suit une progression en quatre temps. D'abord comprendre les concepts (déclencheurs, actions, agents, limites de l'IA) pour automatiser sans se mettre en danger. Ensuite cartographier ses propres tâches et choisir les premiers cas d'usage. Puis construire un premier workflow de bout en bout sur un cas réel apporté par le participant, par exemple un tri d'emails entrants ou un reporting hebdomadaire. Enfin industrialiser et encadrer, en posant les règles de supervision, de contrôle humain et de conformité. Chez Masteria, la formation se déroule sur une à deux journées, sans aucun prérequis technique, en présentiel ou en distanciel. Chaque participant repart avec ses propres automatisations fonctionnelles et un kit de modèles réutilisables, prêts à l'emploi dès le lendemain.",
      },
      {
        h2: "Automatisation IA et sécurité : garder le contrôle",
        body: "Automatiser ne signifie pas perdre la main. Une automatisation IA bien conçue conserve un humain dans la boucle sur les décisions sensibles, journalise ses actions et reste auditable. Trois réflexes structurent une démarche responsable : ne jamais faire transiter de données personnelles ou confidentielles par un outil grand public non conforme, privilégier les versions entreprise et les hébergements européens pour les flux sensibles, et prévoir un point de validation humain avant tout envoi externe ou toute action irréversible. Notre formation intègre systématiquement ce volet gouvernance, parce qu'une automatisation que l'on ne maîtrise pas finit par coûter plus cher que la tâche qu'elle remplace. Vous apprenez à documenter vos workflows, à définir qui supervise quoi et à mettre vos automatisations en conformité avec le RGPD et l'AI Act.",
      },
    ],
    faq: [
      { q: "Faut-il savoir coder pour automatiser avec l'IA ?", a: "Non. La grande majorité des automatisations IA se construisent en no-code, par glisser-déposer, avec des outils comme Make, Zapier, n8n ou Power Automate. La formation est accessible à tous les profils métier, sans aucun prérequis en développement." },
      { q: "Quelle différence entre IA générative et automatisation IA ?", a: "L'IA générative produit du contenu à la demande (un texte, une image, une analyse) lorsque vous la sollicitez. L'automatisation IA déclenche et enchaîne ces actions toute seule à partir d'un événement, par exemple résumer et classer chaque email entrant sans intervention. Les deux se combinent : l'automatisation orchestre, le modèle génératif exécute." },
      { q: "Quels outils d'automatisation IA pour une PME ?", a: "Pour une PME, on démarre souvent avec ChatGPT et des GPTs personnalisés pour les tâches rédactionnelles, Make ou Zapier pour connecter les applications, et Power Automate si l'entreprise est déjà équipée de Microsoft 365. La formation vous aide à choisir selon vos outils existants plutôt qu'à multiplier les abonnements." },
      { q: "L'automatisation IA va-t-elle supprimer des emplois ?", a: "L'automatisation IA prend en charge les tâches répétitives à faible valeur ajoutée et laisse aux équipes l'analyse, la relation et la décision. Les collaborateurs formés redéploient le temps gagné, qui se compte souvent en plusieurs heures par semaine, vers des missions à plus forte valeur." },
      { q: "Combien de temps pour former une équipe à l'automatisation IA ?", a: "Une journée suffit pour poser les bases et construire ses premiers workflows. Comptez deux jours pour un programme complet couvrant les agents IA, les orchestrateurs no-code et la gouvernance. Le format s'adapte à votre niveau de maturité et à vos cas d'usage." },
      { q: "La formation automatisation IA est-elle finançable et certifiée Qualiopi ?", a: "Oui. Masteria est certifié Qualiopi, ce qui rend la formation finançable par votre OPCO ou via le plan de développement des compétences. Nous accompagnons gratuitement le montage du dossier de prise en charge. Tarif : 1 980 € HT par jour en intra-entreprise jusqu'à 12 participants, 1 380 € HT par jour en accompagnement individuel sur mesure." },
    ],
    related: [
      { label: "Formation multi-outils IA", href: "/formation-multi-outils", desc: "Combiner ChatGPT, Copilot, Gemini, Claude et Mistral" },
      { label: "Formation IA générative", href: "/formation-intelligence-artificielle-generative", desc: "Maîtriser les modèles qui produisent le contenu" },
      { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot", desc: "Automatiser avec Power Automate et Microsoft 365" },
      { label: "Quel est le meilleur agent IA ?", href: "/meilleur-agent-ia", desc: "Comparatif des agents IA pour automatiser des tâches" },
      { label: "Toutes nos formations IA", href: "/formation-intelligence-artificielle", desc: "Le catalogue complet par outil et par métier" },
    ],
  },
}

export default function TopicLandingPage() {
  const { '*': rest } = useParams()
  // Le slug arrive directement via la route — on l'extrait depuis location
  const slug = typeof window !== 'undefined'
    ? window.location.pathname.replace(/^\/|\/$/g, '')
    : (rest || '')

  const topic = TOPICS[slug]
  if (!topic) return null

  return (
    <>
      <SEOHead
        title={topic.metaTitle}
        description={topic.metaDescription}
        slug={slug}
        courseData={topic.courseData}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: topic.h1, slug },
        ]}
        faqItems={topic.faq}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: '#1d4ed8', marginBottom: 24,
            border: '1px solid #BFDBFE',
          }}>
            <Sparkles size={16} /> {topic.badge}
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: 1.1,
            color: '#0A0A0A', marginBottom: 20,
          }}>
            {topic.h1}
          </h1>
          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#4B5563',
            lineHeight: 1.6, maxWidth: 740, margin: '0 auto 36px',
          }}>
            {topic.intro}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
            }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: '1px solid #E5E7EB',
            }}>
              Voir le catalogue formations
            </Link>
          </div>
        </div>
      </section>

      {/* SECTIONS ÉDITORIALES */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {topic.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 56 }}>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                fontSize: 'clamp(24px, 3.4vw, 32px)', color: '#0A0A0A',
                marginBottom: 16, lineHeight: 1.25,
              }}>
                {s.h2}
              </h2>
              <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RÉASSURANCE */}
      <section style={{ padding: '60px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {[
            { Icon: ShieldCheck, t: 'Certifié Qualiopi', s: '3 ans, audit à 18 mois' },
            { Icon: Wallet, t: 'Finançable OPCO', s: 'Jusqu\'à 100 % pris en charge' },
            { Icon: Clock, t: '1 à 2 jours', s: 'Format compact, 100 % pratique' },
            { Icon: Users, t: 'Jusqu\'à 12 participants', s: 'Présentiel ou distanciel' },
          ].map(({ Icon, t, s }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: '#fff', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8' }}>
                <Icon size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0A0A0A', marginBottom: 2 }}>{t}</div>
                <div style={{ fontSize: 14, color: '#6B7280' }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 36px)', color: '#0A0A0A',
            marginBottom: 32, textAlign: 'center',
          }}>
            Questions fréquentes
          </h2>
          {topic.faq.map((item, i) => (
            <details key={i} style={{
              borderBottom: '1px solid #E5E7EB',
              padding: '20px 0',
            }}>
              <summary style={{
                cursor: 'pointer', fontWeight: 700, fontSize: 17,
                color: '#0A0A0A', listStyle: 'none', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: '#1d4ed8' }}>+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 16 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* POUR ALLER PLUS LOIN — maillage interne contextuel */}
      {topic.related && topic.related.length > 0 && (
        <section style={{ padding: '72px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 800,
              fontSize: 'clamp(24px, 3.4vw, 32px)', color: '#0A0A0A',
              marginBottom: 28, textAlign: 'center',
            }}>
              Pour aller plus loin
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              {topic.related.map((r, i) => (
                <Link
                  key={i}
                  to={r.href}
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 6,
                    background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
                    padding: '20px 22px', textDecoration: 'none',
                    transition: 'border-color 150ms, box-shadow 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(37,99,235,0.10)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16, color: '#0A0A0A' }}>
                    {r.label} <ArrowRight size={15} color="#1d4ed8" />
                  </span>
                  {r.desc && <span style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.5 }}>{r.desc}</span>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section style={{ padding: '80px 24px', background: '#0A0A0A', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 16,
          }}>
            Discutons de votre projet de formation IA
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 32, lineHeight: 1.6 }}>
            Devis personnalisé sous 24h. Programme construit sur vos cas d'usage.
            Accompagnement complet du dossier OPCO inclus.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#0A0A0A', padding: '16px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
          }}>
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export const TOPIC_SLUGS = Object.keys(TOPICS)
