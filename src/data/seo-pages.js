// Hub & Spoke SEO architecture, Masteria
// Hub pages → Spoke pages (tool × métier)
import { CHATGPT_SPOKES } from './chatgpt-spokes-enriched.js'
import { COPILOT_SPOKES } from './copilot-spokes-enriched.js'
import { GEMINI_SPOKES } from './gemini-spokes-enriched.js'
import { CLAUDE_SPOKES } from './claude-spokes-enriched.js'
import { MISTRAL_SPOKES } from './mistral-spokes-enriched.js'
import { MULTI_OUTILS_SPOKES } from './multi-outils-spokes.js'
import { TESTIMONIALS } from './testimonials.js'

import { HUBS, METIERS } from './catalog-meta.js'
export { HUBS, METIERS }

// ─── SPOKE PAGES DATA ────────────────────────────────────────────────────────
// Base spokes, enriched data (modules, audience, objectives, FAQ) is merged below from *-enriched files.

const BASE_SPOKES = [

  // ── ChatGPT × Marketing ──────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-marketing',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Marketing',
    metierSlug: 'marketing',
    hubSlug: 'formation-chatgpt',
    priority: true,
    metaTitle: 'Formation ChatGPT Marketing | Masteria',
    metaDesc: "Formez vos équipes marketing à ChatGPT. Contenus, campagnes, analyses : multipliez votre productivité par 3. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation ChatGPT pour les équipes Marketing',
    intro: "Les équipes marketing sont parmi les premiers bénéficiaires de l'IA générative. ChatGPT peut réduire de 60% le temps de production de contenus, tout en améliorant la qualité et la cohérence de marque. Cette formation pratique vous apprend à exploiter ce potentiel, avec des cas d'usage concrets, testés dans de vraies équipes marketing.",
    useCases: [
      { icon: '✍️', title: 'Création de contenus', desc: 'Posts LinkedIn, articles de blog, scripts vidéo, newsletters, 3× plus vite.' },
      { icon: '📣', title: 'Rédaction publicitaire', desc: 'Accroches, headlines, copies d\'annonces adaptés à chaque canal et audience.' },
      { icon: '📋', title: 'Briefs créatifs', desc: 'Générez des briefs complets pour vos agences en quelques minutes plutôt qu\'en heures.' },
      { icon: '🔍', title: 'Analyse concurrentielle', desc: 'Synthétisez les tendances du marché et les positionnements concurrents rapidement.' },
      { icon: '🎯', title: 'SEO & optimisation', desc: 'Rédigez métas, titres et descriptions optimisées, et améliorez l\'existant.' },
      { icon: '📊', title: 'Reporting & insights', desc: 'Transformez vos données brutes en analyses narratives percutantes.' },
    ],
    program: [
      {
        title: 'Matin, ChatGPT pour la production de contenu',
        items: [
          'Anatomie d\'un prompt marketing efficace',
          'Créer et encoder votre brand voice dans ChatGPT',
          'Posts réseaux sociaux : LinkedIn, Instagram, X, formats et tonalités',
          'Rédaction d\'emails et newsletters : de la campagne au transactionnel',
        ],
      },
      {
        title: 'Après-midi, Campagnes, analyse & workflow',
        items: [
          'Briefs créatifs et cahiers des charges en 5 minutes',
          'Copies publicitaires multicanal : Google Ads, Meta, LinkedIn',
          'Analyse de données et reporting narratif automatisé',
          'Construire votre bibliothèque de prompts marketing réutilisables',
        ],
      },
    ],
    faq: [
      { q: 'La formation est-elle adaptée aux non-techniciens ?', a: 'Absolument. Elle est conçue pour les professionnels du marketing sans bagage technique. Vous apprendrez à utiliser ChatGPT comme un outil de production, pas à le programmer.' },
      { q: 'Comment garantir que le contenu reste dans notre ton de voix ?', a: 'C\'est précisément ce que vous apprendrez : créer un "system prompt" qui encode votre brand voice. Une fois maîtrisé, ChatGPT respecte systématiquement votre charte éditoriale.' },
      { q: 'Quels outils utilise-t-on pendant la formation ?', a: 'Principalement ChatGPT (versions gratuite et Plus), mais nous abordons aussi Claude et Jasper pour vous donner une vision complète du marché.' },
    ],
    relatedSpokes: ['formation-chatgpt-ressources-humaines', 'formation-prompt-engineering', 'formation-copilot-marketing'],
  },

  // ── ChatGPT × RH ────────────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-ressources-humaines',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Ressources Humaines',
    metierSlug: 'ressources-humaines',
    hubSlug: 'formation-chatgpt',
    priority: true,
    metaTitle: 'Formation ChatGPT RH | Masteria',
    metaDesc: 'Formation ChatGPT pour les équipes RH. Rédaction d\'offres, analyse de CV, onboarding, communication interne. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les équipes RH',
    intro: "Les DRH et responsables RH font face à un volume croissant de tâches rédactionnelles et administratives. ChatGPT peut automatiser une large partie de ces tâches, rédaction d'offres, fiches de poste, comptes-rendus d'entretiens, communication interne, en libérant du temps pour les missions à forte valeur humaine.",
    useCases: [
      { icon: '📝', title: "Rédaction d'offres d'emploi", desc: "Rédigez des offres attractives et optimisées pour les jobboards en 5 minutes." },
      { icon: '🔎', title: "Analyse de CV", desc: "Créez des grilles de présélection pertinentes et analysez des lots de candidatures." },
      { icon: '🎤', title: "Préparation d'entretiens", desc: "Générez des guides d'entretien structurés, adaptés au poste et au profil." },
      { icon: '📋', title: "Fiches de poste", desc: "Créez ou mettez à jour des fiches de poste claires, conformes et RH-ready." },
      { icon: '🤝', title: "Onboarding", desc: "Rédigez livrets d'accueil, emails de bienvenue et parcours d'intégration personnalisés." },
      { icon: '📢', title: "Communication interne", desc: "Notes RH, annonces d'équipe, politiques et procédures : rédigées en quelques minutes." },
    ],
    program: [
      {
        title: 'Matin, Recrutement & Sourcing',
        items: [
          'Prompts spécialisés pour la rédaction d\'offres attractives',
          'Analyse et scoring de CV assisté par IA',
          'Construire des grilles d\'entretien structurées par compétences',
          'Écrire des messages de sourcing personnalisés (LinkedIn, email)',
        ],
      },
      {
        title: 'Après-midi, RH opérationnel & communication',
        items: [
          'Fiches de poste, référentiels métier et organigrammes',
          'Parcours d\'onboarding et livrets d\'accueil personnalisés',
          'Communication interne : annonces, notes, procédures',
          'Aspects légaux et confidentialité : ce qu\'on peut ou ne peut pas faire',
        ],
      },
    ],
    faq: [
      { q: 'Peut-on utiliser ChatGPT pour analyser de vrais CV ?', a: 'Oui, avec précautions. Nous vous apprenons les bonnes pratiques RGPD : anonymisation des données personnelles avant traitement, et comment créer des grilles d\'analyse qui restent dans le respect du droit du travail.' },
      { q: 'ChatGPT peut-il rédiger des contrats ou des procédures légales ?', a: 'ChatGPT peut servir de premier jet et de base de travail pour des documents RH, mais ils doivent toujours être relus et validés par un juriste. Nous abordons précisément ce périmètre dans la formation.' },
      { q: 'La formation couvre-t-elle les outils RH spécifiques (ATS, SIRH) ?', a: 'La formation se concentre sur ChatGPT et les prompts RH. Si votre ATS ou SIRH dispose d\'une intégration IA, nous pouvons l\'aborder lors d\'un format intra-entreprise personnalisé.' },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-chatgpt-management', 'formation-copilot-rh'],
  },

  // ── Copilot × Finance ────────────────────────────────────────────────────
  {
    slug: 'formation-copilot-finance',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Finance',
    metierSlug: 'finance',
    hubSlug: 'formation-microsoft-copilot',
    priority: true,
    metaTitle: 'Formation Copilot Finance | Masteria',
    metaDesc: 'Formation Copilot pour les équipes finance et contrôle de gestion : analyse Excel, reporting, synthèse de documents. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Microsoft Copilot pour les équipes Finance',
    intro: "Les équipes finance passent une part importante de leur temps dans Excel, Word et PowerPoint. Microsoft Copilot s'intègre directement dans ces outils pour automatiser l'analyse de données, générer des rapports, synthétiser des documents complexes et préparer des présentations. Une révolution pour le contrôle de gestion, la trésorerie et la comptabilité.",
    useCases: [
      { icon: '📊', title: 'Analyse Excel avancée', desc: 'Analysez des tableaux complexes, créez des formules et identifiez des anomalies en langage naturel.' },
      { icon: '📈', title: 'Reporting automatisé', desc: 'Générez des rapports financiers narratifs à partir de vos données Excel en quelques secondes.' },
      { icon: '📄', title: 'Synthèse de documents', desc: 'Résumez contrats, rapports annuels, annexes comptables et appels d\'offres en minutes.' },
      { icon: '🎯', title: 'Présentations de résultats', desc: 'Créez des slides PowerPoint de résultats financiers directement depuis vos tableaux Excel.' },
      { icon: '✉️', title: 'Emails de relance', desc: 'Rédigez des relances clients et fournisseurs professionnelles et personnalisées.' },
      { icon: '🔍', title: 'Revue budgétaire', desc: 'Comparez budgets et réalisés, identifiez les écarts et rédigez vos commentaires d\'analyse.' },
    ],
    program: [
      {
        title: 'Matin, Copilot dans Excel et l\'analyse de données',
        items: [
          'Copilot dans Excel : analyse en langage naturel, formules, tableaux croisés',
          'Identifier automatiquement des tendances et anomalies',
          'Générer des graphiques et visualisations adaptés aux reportings financiers',
          'Construire des modèles d\'analyse réutilisables',
        ],
      },
      {
        title: 'Après-midi, Reporting, documents et communication',
        items: [
          'Copilot dans Word : rédiger des rapports financiers à partir de données',
          'Copilot dans PowerPoint : créer des slides de résultats depuis Excel',
          'Synthétiser des documents longs (contrats, rapports annuels)',
          'Emails professionnels finance : relances, réponses aux dirigeants',
        ],
      },
    ],
    faq: [
      { q: 'Faut-il avoir Microsoft 365 Copilot pour suivre cette formation ?', a: 'Oui, Copilot nécessite un abonnement Microsoft 365 Copilot (environ 30€/mois/utilisateur). Alternativement, si votre entreprise ne l\'a pas encore, nous adaptons la formation avec des équivalents accessibles (ChatGPT pour l\'analyse, etc.).' },
      { q: 'La formation couvre-t-elle des logiciels comptables spécifiques (Sage, Cegid) ?', a: 'La formation se concentre sur les outils Microsoft 365. Pour les intégrations avec des ERP spécifiques, nous proposons un format intra-entreprise personnalisé qui peut inclure vos outils métier.' },
      { q: 'Nos données financières sont-elles sécurisées avec Copilot ?', a: 'Microsoft Copilot Enterprise garantit que vos données ne servent pas à entraîner les modèles IA et restent dans votre tenant Microsoft. Nous couvrons ces aspects de sécurité et conformité en formation.' },
    ],
    relatedSpokes: ['formation-copilot-assistante', 'formation-chatgpt-finance', 'formation-copilot-marketing'],
  },

  // ── Copilot × Assistante ─────────────────────────────────────────────────
  {
    slug: 'formation-copilot-assistante',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Assistanat de direction',
    metierSlug: 'assistante',
    hubSlug: 'formation-microsoft-copilot',
    priority: true,
    metaTitle: 'Formation Copilot Assistanat de direction | Masteria',
    metaDesc: "Formation Microsoft Copilot pour les assistants de direction : emails, agendas, comptes-rendus. Gagnez 2h par jour. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot pour les Assistants et assistantes de direction',
    intro: "Les assistants et assistantes de direction sont au cœur de l'organisation : gestion d'agenda, rédaction de courriers, préparation de réunions, coordination des équipes. Microsoft Copilot, intégré dans Outlook, Word, Teams et PowerPoint, automatise une grande partie de ces tâches répétitives, permettant de se concentrer sur les missions à forte valeur ajoutée.",
    useCases: [
      { icon: '📧', title: 'Gestion des emails', desc: 'Rédigez, résumez et classez vos emails Outlook 3× plus vite avec Copilot.' },
      { icon: '📅', title: 'Coordination d\'agenda', desc: 'Planifiez des réunions, rédigez des invitations et gérez les conflits de planning.' },
      { icon: '📋', title: 'Comptes-rendus de réunion', desc: 'Générez automatiquement les CR depuis Teams avec actions et décisions identifiées.' },
      { icon: '📄', title: 'Rédaction de courriers', desc: 'Notes de service, courriers officiels, réponses délicates : rédigez en quelques secondes.' },
      { icon: '🎨', title: 'Présentations PowerPoint', desc: 'Créez des présentations complètes à partir d\'un brief ou d\'un document Word.' },
      { icon: '🔍', title: 'Recherche et synthèse', desc: 'Synthétisez rapidement des documents longs pour préparer vos dirigeants.' },
    ],
    program: [
      {
        title: 'Matin, Outlook et Teams : communication et réunions',
        items: [
          'Copilot dans Outlook : rédiger, résumer, répondre et trier les emails',
          'Rédiger des invitations, ordres du jour et rappels professionnels',
          'Copilot dans Teams : résumé automatique et CR de réunion',
          'Gérer et synthétiser les fils de discussion Teams',
        ],
      },
      {
        title: 'Après-midi, Word et PowerPoint : documents et présentations',
        items: [
          'Copilot dans Word : rédiger courriers, notes de service, rapports',
          'Mettre en forme et améliorer des documents existants',
          'Copilot dans PowerPoint : créer une présentation depuis un document',
          'Construire votre kit de prompts personnels pour les tâches récurrentes',
        ],
      },
    ],
    faq: [
      { q: 'Les comptes-rendus générés par Teams sont-ils confidentiels ?', a: 'Oui, dans Teams Enterprise. Les données de vos réunions restent dans votre tenant Microsoft et ne sont pas utilisées pour entraîner les modèles. Nous couvrons ces aspects de confidentialité en formation.' },
      { q: 'Peut-on utiliser Copilot sans abonnement Premium ?', a: 'Copilot dans Microsoft 365 nécessite une licence Copilot. Cependant, certaines fonctions sont disponibles dans la version gratuite de Bing/Copilot.microsoft.com. Nous vous aidons à optimiser selon votre niveau d\'abonnement.' },
      { q: 'La formation inclut-elle la gestion des agendas partagés ?', a: 'Oui. Nous couvrons la gestion d\'agenda dans Outlook, la coordination de réunions multi-participants, et les meilleures pratiques pour la gestion d\'agendas de direction.' },
    ],
    relatedSpokes: ['formation-copilot-finance', 'formation-copilot-rh', 'formation-chatgpt-ressources-humaines'],
  },

  // ── ChatGPT × Commercial ─────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-commercial',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Commercial',
    metierSlug: 'commercial',
    hubSlug: 'formation-chatgpt',
    priority: false,
    metaTitle: 'Formation ChatGPT Commerciaux | Masteria',
    metaDesc: 'Formation ChatGPT pour les équipes commerciales. Prospection, emails de vente, propositions commerciales, relances. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les équipes Commerciales',
    intro: "Les commerciaux passent en moyenne 30% de leur temps à des tâches rédactionnelles, emails de prospection, propositions commerciales, comptes-rendus de visite, relances. ChatGPT peut automatiser l'essentiel de cette charge, permettant aux commerciaux de se concentrer sur la relation client et la négociation.",
    useCases: [
      { icon: '📧', title: 'Emails de prospection', desc: 'Rédigez des emails de prospection personnalisés et percutants en quelques secondes.' },
      { icon: '📋', title: 'Propositions commerciales', desc: 'Générez des propositions complètes et personnalisées à partir de votre brief.' },
      { icon: '🔄', title: 'Emails de relance', desc: 'Séquences de relance intelligentes adaptées à chaque situation et interlocuteur.' },
      { icon: '📊', title: 'Préparation de RDV', desc: 'Préparez vos rendez-vous avec une fiche prospect complète et des questions clés.' },
      { icon: '📝', title: "Comptes-rendus de visite", desc: 'Transformez vos notes en CR structurés avec actions et prochaines étapes.' },
      { icon: '💼', title: 'Réponses aux objections', desc: 'Préparez des argumentaires solides pour répondre aux objections récurrentes.' },
    ],
    program: [
      {
        title: 'Matin, Prospection & communication commerciale',
        items: [
          'Rédiger des emails de prospection qui obtiennent des réponses',
          'Personnalisation à grande échelle : adapter sans copier-coller',
          'Séquences de relance multicanal (email + LinkedIn)',
          'Préparer des rendez-vous : fiche prospect et argumentaire',
        ],
      },
      {
        title: 'Après-midi, Propositions, CRM & suivi',
        items: [
          'Rédiger des propositions commerciales et devis persuasifs',
          'Comptes-rendus de RDV structurés et saisie CRM accélérée',
          'Réponses aux objections : bibliothèque de répartie IA',
          'Votre kit de prompts commercial complet à emporter',
        ],
      },
    ],
    faq: [
      { q: 'Peut-on intégrer ChatGPT à notre CRM (Salesforce, HubSpot) ?', a: 'ChatGPT peut être utilisé en parallèle de votre CRM pour rédiger et synthétiser. Des intégrations natives existent dans certains CRM (Salesforce Einstein, HubSpot AI). Nous abordons ces possibilités en formation.' },
      { q: 'Les emails générés par IA ne semblent-ils pas artificiels aux prospects ?', a: 'C\'est une vraie question. La formation vous apprend à utiliser ChatGPT pour produire des drafts que vous personnalisez, pas à envoyer des emails sans relecture. Le résultat final doit toujours sonner authentique.' },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-chatgpt-ressources-humaines', 'formation-copilot-commercial'],
  },

  // ── ChatGPT × Finance ────────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-finance',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Finance',
    metierSlug: 'finance',
    hubSlug: 'formation-chatgpt',
    priority: false,
    metaTitle: 'Formation ChatGPT Finance | Masteria',
    metaDesc: "Formation ChatGPT pour les équipes finance. Analyse de données, synthèse de documents, reporting narratif. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation ChatGPT pour les équipes Finance',
    intro: "ChatGPT révolutionne le travail des équipes finance : synthèse de rapports longs, rédaction de commentaires d'analyse, préparation de notes pour les dirigeants. Combiné à l'interpréteur de code, il peut même analyser des fichiers Excel directement.",
    useCases: [
      { icon: '📊', title: 'Analyse de données', desc: 'Interprétez des tableaux Excel et générez des analyses narratives automatiquement.' },
      { icon: '📄', title: 'Synthèse de documents', desc: 'Résumez rapports annuels, contrats et annexes en quelques secondes.' },
      { icon: '📋', title: 'Reporting narratif', desc: 'Transformez vos chiffres en commentaires d\'analyse clairs pour les dirigeants.' },
      { icon: '✉️', title: 'Communication financière', desc: 'Emails vers les banques, actionnaires, fournisseurs : clairs, précis, professionnels.' },
      { icon: '⚖️', title: 'Veille réglementaire', desc: 'Synthétisez des textes réglementaires complexes en points d\'action concrets.' },
      { icon: '📈', title: 'Prévisions & budgets', desc: "Rédigez des notes d'hypothèses et commentaires budgétaires rapidement." },
    ],
    program: [
      {
        title: 'Matin, Analyse et synthèse de données financières',
        items: [
          'Utiliser l\'interpréteur de code ChatGPT avec vos fichiers Excel',
          'Analyser et commenter des tableaux de bord financiers',
          'Synthétiser des documents comptables et financiers complexes',
          'Rédiger des commentaires de variation budget/réel',
        ],
      },
      {
        title: 'Après-midi, Communication et reporting',
        items: [
          'Rédiger des notes de synthèse pour les comités de direction',
          'Communication externe : lettres aux banques, actionnaires',
          'Veille réglementaire assistée : synthétiser les évolutions',
          'Construire votre bibliothèque de prompts finance',
        ],
      },
    ],
    faq: [
      { q: 'Peut-on analyser des données confidentielles avec ChatGPT ?', a: 'Nous recommandons de ne jamais uploader de données financières réelles non anonymisées dans ChatGPT grand public. ChatGPT Enterprise ou l\'API avec un accord de confidentialité peuvent être utilisés pour des données sensibles. Nous couvrons ces aspects en formation.' },
      { q: 'ChatGPT peut-il remplacer un analyste financier ?', a: 'Non. ChatGPT est un outil d\'accélération pour des tâches rédactionnelles et d\'analyse de premier niveau. L\'expertise financière, le jugement et la validation restent indispensables, ChatGPT libère du temps pour ces missions à valeur ajoutée.' },
    ],
    relatedSpokes: ['formation-copilot-finance', 'formation-chatgpt-commercial'],
  },

  // ── ChatGPT × Communication ──────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-communication',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Communication',
    metierSlug: 'communication',
    hubSlug: 'formation-chatgpt',
    priority: false,
    metaTitle: 'Formation ChatGPT Communication | Masteria',
    metaDesc: "Formation ChatGPT pour les équipes communication : communiqués, réseaux sociaux, communication de crise. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation ChatGPT pour les équipes Communication',
    intro: "Les équipes communication gèrent un flux constant de productions : communiqués de presse, contenus réseaux sociaux, communications internes, gestion de crise, relations médias. ChatGPT peut transformer leur façon de travailler en automatisant la production de contenu tout en préservant la cohérence de marque.",
    useCases: [
      { icon: '📰', title: 'Communiqués de presse', desc: 'Rédigez des communiqués percutants et adaptés aux codes journalistiques.' },
      { icon: '📱', title: 'Réseaux sociaux', desc: 'Planifiez et produisez des contenus pour tous les canaux en cohérence de marque.' },
      { icon: '🏢', title: 'Communication interne', desc: 'Notes de direction, newsletters internes, messages de change management.' },
      { icon: '🚨', title: 'Communication de crise', desc: 'Préparez des messages de crise clairs, maîtrisés et adaptés à chaque canal.' },
      { icon: '🎤', title: 'Prises de parole', desc: 'Discours, allocutions, tribunes : structurez et rédigez les prises de parole.' },
      { icon: '🤝', title: 'Relations médias', desc: 'Q&A journalistes, fiches thématiques et éléments de langage préparés.' },
    ],
    program: [
      {
        title: 'Matin, Communication externe & RP',
        items: [
          'Rédiger des communiqués de presse efficaces avec ChatGPT',
          'Adapter le ton et le message selon les médias cibles',
          'Préparer des éléments de langage et Q&A journalistes',
          'Contenus réseaux sociaux : LinkedIn, Instagram, X, formats et tonalités',
        ],
      },
      {
        title: 'Après-midi, Communication interne & gestion de crise',
        items: [
          'Communication interne : du message de direction à la newsletter',
          'Gérer l\'image de marque employeur avec l\'IA',
          'Préparer des messages de communication de crise',
          'Bibliothèque de prompts communication à emporter',
        ],
      },
    ],
    faq: [
      { q: 'Comment utiliser ChatGPT sans perdre l\'authenticité de la voix de marque ?', a: 'C\'est le cœur de la formation : construire un "system prompt" qui encode votre charte éditoriale, votre ton, vos valeurs. ChatGPT devient alors un assistant qui respecte votre identité à chaque production.' },
      { q: 'ChatGPT peut-il gérer les réseaux sociaux en temps réel ?', a: 'ChatGPT est un outil de production de contenu, pas un outil de publication. Nous vous apprenons à l\'intégrer dans votre workflow editorial, en amont des outils de planification (Hootsuite, Buffer, etc.).' },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-chatgpt-commercial', 'formation-copilot-marketing'],
  },

  // ── ChatGPT × Management ─────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-management',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Management',
    metierSlug: 'management',
    hubSlug: 'formation-chatgpt',
    priority: false,
    metaTitle: 'Formation ChatGPT Managers | Masteria',
    metaDesc: 'Formation ChatGPT pour les managers et dirigeants. Réunions, feedback, communication d\'équipe, prise de décision. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les Managers',
    intro: "Les managers consacrent une part importante de leur temps à des tâches rédactionnelles et organisationnelles : préparation de réunions, rédaction d'objectifs, feedback, reporting à la direction. ChatGPT peut libérer ce temps pour se concentrer sur l'essentiel : la relation avec les équipes et la prise de décision stratégique.",
    useCases: [
      { icon: '📅', title: 'Préparation de réunions', desc: 'Ordres du jour, objectifs de réunion et comptes-rendus générés automatiquement.' },
      { icon: '🎯', title: "Fixation d'objectifs", desc: 'Rédigez des objectifs SMART clairs et motivants pour vos collaborateurs.' },
      { icon: '💬', title: 'Feedback structuré', desc: 'Préparez des entretiens de feedback constructifs et bien formulés.' },
      { icon: '📊', title: 'Reporting direction', desc: 'Synthétisez l\'activité de votre équipe en rapports clairs pour vos N+1.' },
      { icon: '📧', title: 'Communication d\'équipe', desc: 'Emails d\'équipe, annonces, messages de motivation et de recadrage.' },
      { icon: '🔄', title: 'Change management', desc: 'Communiquez les changements organisationnels de façon claire et mobilisatrice.' },
    ],
    program: [
      {
        title: 'Matin, Organisation et communication managériale',
        items: [
          'Préparer et animer des réunions plus efficaces avec ChatGPT',
          'Rédiger des objectifs SMART et des plans de développement',
          'Communication d\'équipe : annoncer, motiver, recadrer',
          'Synthétiser des informations pour le reporting direction',
        ],
      },
      {
        title: 'Après-midi, Leadership, RH managérial & décision',
        items: [
          'Préparer des entretiens annuels et de feedback structurés',
          'Gérer les situations difficiles : recadrage, conflit, sous-performance',
          'Utiliser ChatGPT pour structurer sa pensée et prendre de meilleures décisions',
          'Kit de prompts managériaux : les essentiels du quotidien',
        ],
      },
    ],
    faq: [
      { q: 'ChatGPT peut-il m\'aider à gérer des conflits d\'équipe ?', a: 'ChatGPT peut vous aider à structurer votre approche, préparer les messages délicats et anticiper les réactions. Mais la gestion de conflit reste une compétence humaine : ChatGPT est un outil de préparation, pas un médiateur.' },
      { q: 'Est-ce que cette formation est adaptée aux nouveaux managers ?', a: 'Oui. Nous avons conçu des modules spécifiques pour les managers qui prennent leur fonction, avec des cas d\'usage liés à la prise de poste, la mise en place de rituels d\'équipe et la communication avec les équipes.' },
    ],
    relatedSpokes: ['formation-chatgpt-ressources-humaines', 'formation-chatgpt-commercial', 'formation-copilot-assistante'],
  },

  // ── ChatGPT × Assistante ─────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-assistante',
    tool: 'ChatGPT',
    toolSlug: 'chatgpt',
    toolColor: '#10a37f',
    toolColorLight: '#d1fae5',
    metier: 'Assistanat de direction',
    metierSlug: 'assistante',
    hubSlug: 'formation-chatgpt',
    priority: false,
    metaTitle: "Formation ChatGPT Assistanat de direction | Masteria",
    metaDesc: "Formation ChatGPT pour les assistants de direction : emails, courriers, comptes-rendus. Gagnez 2h par jour. Certifié Qualiopi, finançable OPCO.",
    h1: "Formation ChatGPT pour les Assistants et assistantes de direction",
    intro: "Les assistants et assistantes de direction jonglent avec des tâches variées et des volumes élevés de communication. ChatGPT peut automatiser la rédaction de courriers, la synthèse de documents et la préparation de réunions, pour se concentrer sur la coordination, la relation et les missions à forte valeur ajoutée.",
    useCases: [
      { icon: '✉️', title: 'Rédaction de courriers', desc: 'Lettres officielles, notes de service, réponses délicates : rédigées en secondes.' },
      { icon: '📋', title: 'Comptes-rendus', desc: 'Transformez vos notes de réunion en CR structurés avec actions et décisions.' },
      { icon: '📄', title: 'Synthèses de documents', desc: 'Résumez des rapports longs pour préparer vos dirigeants.' },
      { icon: '🗓️', title: 'Organisation de réunions', desc: 'Ordres du jour, convocations, préparation logistique et suivi.' },
      { icon: '📧', title: 'Gestion des emails', desc: 'Triez, répondez et déléguez les emails avec des templates personnalisés.' },
      { icon: '🎨', title: 'Présentations', desc: 'Rédigez les contenus de présentations à partir de notes ou de briefs.' },
    ],
    program: [
      {
        title: 'Matin, Communication et rédaction',
        items: [
          'Rédiger des courriers officiels et notes de service efficacement',
          'Emails professionnels : réponses rapides et délicates bien formulées',
          'Synthétiser des documents longs pour les dirigeants',
          'Créer des templates réutilisables pour les tâches récurrentes',
        ],
      },
      {
        title: 'Après-midi, Organisation et support direction',
        items: [
          'Préparer des ordres du jour et comptes-rendus structurés',
          'Rédiger des présentations et supports de réunion',
          'Organiser et gérer les informations et priorités',
          'Votre bibliothèque de prompts pour toutes vos tâches quotidiennes',
        ],
      },
    ],
    faq: [
      { q: 'ChatGPT peut-il accéder à mes emails et agendas directement ?', a: 'ChatGPT (version standard) n\'accède pas à vos outils. Vous copiez/collez le contenu à traiter. Des intégrations via ChatGPT Enterprise ou des plugins permettent des connexions directes, que nous abordons en formation.' },
      { q: 'Faut-il être à l\'aise avec la technologie pour suivre cette formation ?', a: 'Non. La formation est conçue pour être accessible à tous les niveaux. ChatGPT est une interface conversationnelle, si vous savez écrire un email, vous saurez utiliser ChatGPT.' },
    ],
    relatedSpokes: ['formation-copilot-assistante', 'formation-chatgpt-management', 'formation-chatgpt-communication'],
  },

  // ── Copilot × Marketing ──────────────────────────────────────────────────
  {
    slug: 'formation-copilot-marketing',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Marketing',
    metierSlug: 'marketing',
    hubSlug: 'formation-microsoft-copilot',
    priority: false,
    metaTitle: 'Formation Copilot Marketing | Masteria',
    metaDesc: "Formation Microsoft Copilot pour les équipes marketing. Contenus Word, présentations PowerPoint, analyse de données. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot pour les équipes Marketing',
    intro: "Si votre équipe marketing travaille dans Microsoft 365, Copilot transforme chaque application en assistant IA. Rédigez des contenus dans Word, créez des présentations dans PowerPoint, analysez vos données dans Excel, sans jamais changer d'outil.",
    useCases: [
      { icon: '📄', title: 'Word : contenus marketing', desc: 'Rédigez articles, livres blancs, guides et contenus SEO directement dans Word.' },
      { icon: '🎨', title: 'PowerPoint : présentations', desc: 'Créez des decks de campagne et présentations client à partir d\'un brief.' },
      { icon: '📊', title: 'Excel : analyse de données', desc: 'Analysez vos performances marketing et créez des tableaux de bord.' },
      { icon: '📧', title: 'Outlook : emails marketing', desc: 'Rédigez des emails de campagne et newsletters directement dans Outlook.' },
      { icon: '👥', title: 'Teams : collaboration', desc: 'Synthétisez les réunions marketing et créez des comptes-rendus automatiques.' },
      { icon: '📱', title: 'Loop : gestion de projet', desc: 'Organisez vos campagnes et plannings contenu dans Microsoft Loop.' },
    ],
    program: [
      {
        title: 'Matin, Copilot pour la production de contenu',
        items: [
          'Copilot dans Word : rédiger, améliorer et structurer les contenus marketing',
          'Copilot dans PowerPoint : transformer un brief en présentation complète',
          'Adapter le ton et le style selon le canal et l\'audience',
          'Créer des templates de contenu réutilisables',
        ],
      },
      {
        title: 'Après-midi, Données, communication et collaboration',
        items: [
          'Copilot dans Excel : analyser les performances et créer des reportings',
          'Copilot dans Outlook : emails de campagne et communication client',
          'Copilot dans Teams : CR de réunions marketing automatiques',
          'Intégrer Copilot dans votre workflow éditorial',
        ],
      },
    ],
    faq: [
      { q: 'Quelle est la différence entre Copilot et ChatGPT pour le marketing ?', a: 'Copilot est intégré nativement dans Microsoft 365 : il peut lire vos fichiers Word, Excel et Teams existants et y générer du contenu. ChatGPT est plus flexible mais nécessite de copier/coller. Pour les équipes déjà sur Microsoft 365, Copilot offre une expérience plus fluide.' },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-copilot-assistante', 'formation-copilot-rh'],
  },

  // ── Copilot × RH ────────────────────────────────────────────────────────
  {
    slug: 'formation-copilot-rh',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Ressources Humaines',
    metierSlug: 'rh',
    hubSlug: 'formation-microsoft-copilot',
    priority: false,
    metaTitle: 'Formation Copilot RH | Masteria',
    metaDesc: "Formation Copilot pour les équipes RH. Offres d'emploi, onboarding, communication interne dans Microsoft 365. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot pour les équipes RH',
    intro: "Les équipes RH utilisent quotidiennement Word, Outlook, Teams et Excel. Microsoft Copilot s'intègre directement dans ces outils pour accélérer la rédaction de documents RH, l'organisation des entretiens et la communication avec les collaborateurs.",
    useCases: [
      { icon: '📝', title: "Offres d'emploi dans Word", desc: "Rédigez des offres attractives directement dans Word avec Copilot." },
      { icon: '👥', title: 'Entretiens via Teams', desc: 'Synthétisez automatiquement vos entretiens Teams avec actions et notes.' },
      { icon: '📋', title: 'Documents RH dans Word', desc: 'Contrats, fiches de poste, procédures : rédigés plus vite dans Word.' },
      { icon: '📊', title: 'Reporting RH dans Excel', desc: 'Tableaux de bord RH, analyse de données collaborateurs, visualisations.' },
      { icon: '📧', title: 'Communication dans Outlook', desc: 'Emails aux candidats, communications d\'équipe, annonces RH.' },
      { icon: '🤝', title: 'Onboarding dans Teams', desc: 'Préparez et animez les parcours d\'intégration via Teams.' },
    ],
    program: [
      {
        title: 'Matin, Recrutement et documents RH',
        items: [
          'Copilot dans Word : rédiger offres d\'emploi et fiches de poste',
          'Copilot dans Excel : analyser des CV et construire des grilles de sélection',
          'Copilot dans Outlook : communications candidats et emails de recrutement',
          'Automatiser la rédaction de contrats et documents administratifs',
        ],
      },
      {
        title: 'Après-midi, Onboarding, formation et communication',
        items: [
          'Copilot dans Teams : synthèse d\'entretiens et de réunions RH',
          'Créer des parcours d\'onboarding dans Teams et SharePoint',
          'Reporting RH dans Excel : tableaux de bord et analyses',
          'Communication interne RH : de l\'annonce à la note de direction',
        ],
      },
    ],
    faq: [
      { q: 'Copilot peut-il accéder à nos données RH dans notre SIRH ?', a: 'Copilot peut lire les données disponibles dans Microsoft 365 (SharePoint, Teams, Excel). Pour les connexions à un SIRH externe (SAP SuccessFactors, Workday), des connecteurs spécifiques existent selon les plateformes.' },
    ],
    relatedSpokes: ['formation-chatgpt-ressources-humaines', 'formation-copilot-assistante', 'formation-copilot-finance'],
  },

  // ── Copilot × Commercial ─────────────────────────────────────────────────
  {
    slug: 'formation-copilot-commercial',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Commercial',
    metierSlug: 'commercial',
    hubSlug: 'formation-microsoft-copilot',
    priority: false,
    metaTitle: 'Formation Copilot Commerciaux | Masteria',
    metaDesc: "Formation Copilot pour les équipes commerciales. Propositions dans Word, suivi Outlook, présentations PowerPoint. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot pour les équipes Commerciales',
    intro: "Les commerciaux Microsoft 365 disposent d'un assistant IA directement dans leurs outils. Copilot rédige vos propositions dans Word, prépare vos présentations dans PowerPoint, synthétise vos échanges Outlook et génère vos comptes-rendus de réunion Teams, pour passer plus de temps en face des clients.",
    useCases: [
      { icon: '📋', title: 'Propositions commerciales', desc: 'Rédigez des propositions complètes dans Word à partir de vos briefs.' },
      { icon: '🎯', title: 'Présentations clients', desc: 'Transformez votre proposition en deck PowerPoint percutant.' },
      { icon: '📧', title: 'Emails de prospection', desc: 'Rédigez des emails personnalisés dans Outlook plus rapidement.' },
      { icon: '📊', title: 'Suivi pipeline dans Excel', desc: 'Analysez votre pipeline et identifiez les opportunités prioritaires.' },
      { icon: '👥', title: 'CR de réunion clients', desc: 'Générez automatiquement les comptes-rendus de vos réunions Teams.' },
      { icon: '🔄', title: 'Séquences de relance', desc: 'Relances personnalisées et suivi client directement depuis Outlook.' },
    ],
    program: [
      {
        title: 'Matin, Prospection et propositions',
        items: [
          'Copilot dans Outlook : emails de prospection et relances personnalisées',
          'Copilot dans Word : propositions commerciales et devis',
          'Copilot dans PowerPoint : décks de présentation client',
          'Préparer des rendez-vous avec Copilot',
        ],
      },
      {
        title: 'Après-midi, Suivi, CRM et pilotage',
        items: [
          'Copilot dans Teams : CR de réunion client automatiques',
          'Copilot dans Excel : analyse pipeline et tableau de bord commercial',
          'Intégrer Copilot dans votre process CRM',
          'Kit de prompts commerciaux dans Microsoft 365',
        ],
      },
    ],
    faq: [
      { q: 'Copilot peut-il se connecter à notre CRM (Salesforce, Dynamics) ?', a: 'Copilot for Sales est une extension spécifique qui s\'intègre à Salesforce et Dynamics 365. Nous couvrons ces intégrations dans la formation intra-entreprise. En format inter, nous nous concentrons sur Microsoft 365 standard.' },
    ],
    relatedSpokes: ['formation-chatgpt-commercial', 'formation-copilot-assistante', 'formation-copilot-finance'],
  },

  // ── Copilot × Word-Excel ─────────────────────────────────────────────────
  {
    slug: 'formation-copilot-word-excel',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Word & Excel',
    metierSlug: 'word-excel',
    hubSlug: 'formation-microsoft-copilot',
    priority: false,
    metaTitle: 'Formation Copilot dans Word et Excel | Masteria',
    metaDesc: "Maîtrisez Copilot dans Word et Excel. Rédaction, analyse de données, formules, rapports. Formation pratique certifiée Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot dans Word et Excel',
    intro: "Word et Excel sont les outils les plus utilisés en entreprise. Microsoft Copilot les transforme radicalement : dans Word, il rédige, améliore et structure vos documents. Dans Excel, il analyse vos données, génère des formules et crée des visualisations, en langage naturel, sans expertise technique.",
    useCases: [
      { icon: '📄', title: 'Rédaction dans Word', desc: 'Créez des documents complets à partir d\'un brief ou d\'une idée.' },
      { icon: '✏️', title: 'Amélioration de documents', desc: 'Copilot révise, reformule et améliore vos documents existants.' },
      { icon: '📊', title: 'Analyse dans Excel', desc: 'Analysez vos données en posant des questions en français.' },
      { icon: '🔢', title: 'Formules Excel', desc: 'Créez des formules complexes en décrivant ce que vous voulez calculer.' },
      { icon: '📈', title: 'Visualisations', desc: 'Créez des graphiques adaptés à vos données et votre message.' },
      { icon: '📋', title: 'Rapports combinés', desc: 'Exportez vos analyses Excel en rapports narratifs dans Word.' },
    ],
    program: [
      {
        title: 'Matin, Copilot dans Word',
        items: [
          'Rédiger des documents à partir d\'un brief : rapports, procédures, guides',
          'Améliorer et restructurer des documents existants',
          'Synthétiser des documents longs avec Copilot',
          'Créer des modèles de documents intelligents',
        ],
      },
      {
        title: 'Après-midi, Copilot dans Excel',
        items: [
          'Analyser des données en posant des questions en langage naturel',
          'Générer des formules complexes avec Copilot',
          'Créer des tableaux croisés dynamiques et visualisations',
          'Générer des rapports et synthèses depuis Excel vers Word',
        ],
      },
    ],
    faq: [
      { q: 'Cette formation est-elle adaptée aux débutants sur Excel ?', a: 'Oui. Copilot rend Excel plus accessible : vous décrivez ce que vous voulez faire et Copilot génère les formules et analyses. Les débutants progressent plus vite, les experts vont encore plus loin.' },
    ],
    relatedSpokes: ['formation-copilot-finance', 'formation-copilot-assistante', 'formation-copilot-marketing'],
  },

  // ── Copilot × Management ─────────────────────────────────────────────────
  {
    slug: 'formation-copilot-management',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Management',
    metierSlug: 'management',
    hubSlug: 'formation-microsoft-copilot',
    priority: false,
    metaTitle: 'Formation Copilot Managers | Masteria',
    metaDesc: "Formation Copilot pour les managers. Réunions Teams, reporting Excel, communication Outlook, présentations. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot pour les Managers',
    intro: "Les managers naviguent entre réunions, reportings, communication d'équipe et présentations à la direction. Microsoft Copilot dans Teams synthétise vos réunions, Copilot dans Excel prépare vos reportings, Copilot dans Outlook gère votre communication, pour vous concentrer sur le management humain.",
    useCases: [
      { icon: '👥', title: 'CR de réunion Teams', desc: 'Synthèses automatiques de vos réunions Teams avec décisions et actions.' },
      { icon: '📊', title: 'Reporting Excel', desc: 'Créez vos tableaux de bord et synthèses de performance d\'équipe.' },
      { icon: '📧', title: 'Communication Outlook', desc: 'Emails d\'équipe, messages de direction et communication de changement.' },
      { icon: '🎯', title: 'Objectifs et évaluations', desc: 'Rédigez objectifs SMART et évaluations dans Word.' },
      { icon: '🎨', title: 'Présentations direction', desc: 'Slides PowerPoint de reporting à partir de vos données Excel.' },
      { icon: '📋', title: 'Plans d\'action', desc: 'Structurez vos plans d\'action et suivis de projet dans Teams.' },
    ],
    program: [
      {
        title: 'Matin, Réunions et communication d\'équipe',
        items: [
          'Copilot dans Teams : résumés automatiques et actions de réunion',
          'Copilot dans Outlook : emails d\'équipe efficaces',
          'Préparer les entretiens individuels et de feedback',
          'Communication de changement et messages difficiles',
        ],
      },
      {
        title: 'Après-midi, Reporting et pilotage',
        items: [
          'Copilot dans Excel : tableaux de bord et analyse performance équipe',
          'Copilot dans PowerPoint : slides de reporting pour la direction',
          'Copilot dans Word : objectifs, évaluations, plans de développement',
          'Gagner 5h par semaine : construire votre routine IA managériale',
        ],
      },
    ],
    faq: [
      { q: 'Copilot peut-il remplacer les réunions d\'équipe ?', a: 'Non. Copilot optimise la gestion des réunions en en réduisant le nombre (grâce aux synthèses) et en améliorant leur suivi (CR automatiques). Mais la relation managériale reste fondamentalement humaine.' },
    ],
    relatedSpokes: ['formation-chatgpt-management', 'formation-copilot-assistante', 'formation-copilot-rh'],
  },

  // ── Gemini × Marketing ───────────────────────────────────────────────────
  {
    slug: 'formation-gemini-marketing',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Marketing',
    metierSlug: 'marketing',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini Marketing | Masteria',
    metaDesc: "Formation Gemini pour les équipes marketing. Intégré dans Google Docs, Gmail, Slides et Sheets. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les équipes Marketing',
    intro: "Si votre équipe marketing travaille dans Google Workspace, Gemini est l'IA la plus naturelle à adopter. Intégré dans Docs, Gmail, Slides et Sheets, il génère du contenu, analyse des données et crée des visuels, sans quitter vos outils habituels.",
    useCases: [
      { icon: '📄', title: 'Contenus dans Google Docs', desc: 'Rédigez articles, briefs et guides directement dans Docs avec Gemini.' },
      { icon: '📊', title: 'Analyse dans Sheets', desc: 'Analysez vos performances marketing dans Google Sheets.' },
      { icon: '🎨', title: 'Présentations Slides', desc: 'Créez des présentations de campagne dans Google Slides.' },
      { icon: '📧', title: 'Emails Gmail', desc: 'Rédigez des emails de campagne et communications dans Gmail.' },
      { icon: '🖼️', title: 'Génération d\'images', desc: 'Créez des visuels marketing avec les capacités image de Gemini.' },
      { icon: '🔍', title: 'Recherche intégrée', desc: 'Gemini accède au web en temps réel pour enrichir vos contenus.' },
    ],
    program: [
      {
        title: 'Matin, Contenu et rédaction dans Google Workspace',
        items: [
          'Gemini dans Google Docs : rédiger, améliorer, restructurer',
          'Gemini dans Gmail : emails de campagne et communications',
          'Gemini dans Slides : présentations marketing et campagnes',
          'Génération d\'images et visuels avec Gemini',
        ],
      },
      {
        title: 'Après-midi, Données et workflow',
        items: [
          'Gemini dans Sheets : analyse de performances et reporting',
          'Intégrer Gemini dans votre workflow éditorial Google',
          'Accès temps réel au web : enrichir vos contenus avec l\'actualité',
          'Bibliothèque de prompts marketing Gemini',
        ],
      },
    ],
    faq: [
      { q: 'Gemini est-il meilleur que ChatGPT pour le marketing ?', a: 'Pas forcément "meilleur", mais plus intégré si vous travaillez dans Google Workspace. L\'avantage de Gemini est son accès natif à vos fichiers Google et au web en temps réel. ChatGPT reste plus polyvalent en standalone.' },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-copilot-marketing', 'formation-gemini-rh'],
  },

  // ── Gemini × RH ──────────────────────────────────────────────────────────
  {
    slug: 'formation-gemini-rh',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Ressources Humaines',
    metierSlug: 'rh',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini RH | Masteria',
    metaDesc: "Formation Gemini pour les équipes RH. Google Docs, Gmail, Meet, Sheets. Recrutement et onboarding assistés. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les équipes RH',
    intro: "Pour les équipes RH qui utilisent Google Workspace, Gemini transforme le quotidien : rédaction d'offres dans Docs, communication candidats dans Gmail, synthèse d'entretiens Meet, analyse dans Sheets. L'IA directement là où vous travaillez.",
    useCases: [
      { icon: '📝', title: "Offres dans Google Docs", desc: "Rédigez des offres attractives directement dans Google Docs avec Gemini." },
      { icon: '📧', title: "Emails candidats dans Gmail", desc: "Communications de recrutement personnalisées dans Gmail." },
      { icon: '👥', title: "Synthèse d'entretiens Meet", desc: "Résumés automatiques de vos entretiens Google Meet." },
      { icon: '📊', title: "Reporting RH dans Sheets", desc: "Tableaux de bord et analyses collaborateurs dans Google Sheets." },
      { icon: '📋', title: "Documents RH dans Docs", desc: "Fiches de poste, livrets d'accueil, procédures." },
      { icon: '🤝', title: "Onboarding dans Google", desc: "Parcours d'intégration dans Sites et Classroom Google." },
    ],
    program: [
      {
        title: 'Matin, Recrutement dans Google Workspace',
        items: [
          'Gemini dans Google Docs : offres d\'emploi et fiches de poste',
          'Gemini dans Gmail : emails de sourcing et communication candidats',
          'Gemini dans Meet : synthèse d\'entretiens automatique',
          'Créer des grilles d\'évaluation dans Sheets',
        ],
      },
      {
        title: 'Après-midi, RH opérationnel et onboarding',
        items: [
          'Gemini dans Docs : contrats, procédures et livrets d\'accueil',
          'Gemini dans Sheets : reporting RH et analyse de données',
          'Communication RH interne : annonces et notes de direction',
          'Intégrer Gemini dans votre workflow RH Google',
        ],
      },
    ],
    faq: [
      { q: 'Gemini a-t-il accès à nos données Google Workspace existantes ?', a: 'Oui, Gemini for Google Workspace peut accéder à vos fichiers Drive, emails Gmail et historiques Meet pour les synthétiser et les utiliser comme contexte. C\'est un avantage majeur pour les équipes RH avec des dossiers dans Drive.' },
    ],
    relatedSpokes: ['formation-chatgpt-ressources-humaines', 'formation-copilot-rh', 'formation-gemini-marketing'],
  },

  // ── Gemini × Finance ─────────────────────────────────────────────────────
  {
    slug: 'formation-gemini-finance',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Finance',
    metierSlug: 'finance',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini Finance | Masteria',
    metaDesc: "Formation Gemini pour les équipes finance. Analyse dans Google Sheets, synthèse Docs, reporting. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les équipes Finance',
    intro: "Pour les équipes finance travaillant dans Google Workspace, Gemini apporte l'IA directement dans Sheets, Docs et Gmail. Analysez vos données financières, rédigez vos rapports et communiquez avec les dirigeants, sans changer vos outils.",
    useCases: [
      { icon: '📊', title: 'Analyse dans Sheets', desc: 'Analysez vos données financières en posant des questions à Gemini.' },
      { icon: '📄', title: 'Rapports dans Docs', desc: 'Rédigez vos rapports et commentaires d\'analyse dans Google Docs.' },
      { icon: '📧', title: 'Communication dans Gmail', desc: 'Emails professionnels vers les dirigeants, banques et partenaires.' },
      { icon: '📋', title: 'Synthèses de documents', desc: 'Résumez contrats et rapports stockés dans votre Drive.' },
      { icon: '🎨', title: 'Présentations Slides', desc: 'Slides de reporting financier à partir de vos données Sheets.' },
      { icon: '🔍', title: 'Veille en temps réel', desc: 'Gemini accède au web pour enrichir vos analyses de données marché.' },
    ],
    program: [
      {
        title: 'Matin, Analyse et données dans Google Sheets',
        items: [
          'Gemini dans Sheets : analyser des données en langage naturel',
          'Générer des formules et visualisations automatiquement',
          'Identifier des tendances et anomalies dans vos données financières',
          'Créer des tableaux de bord et reportings dynamiques',
        ],
      },
      {
        title: 'Après-midi, Reporting et communication financière',
        items: [
          'Gemini dans Docs : rédiger rapports et notes de synthèse financière',
          'Synthétiser des documents longs depuis Drive',
          'Gemini dans Gmail : communication professionnelle finance',
          'Gemini dans Slides : présenter vos résultats à la direction',
        ],
      },
    ],
    faq: [
      { q: 'Gemini peut-il accéder à nos fichiers financiers dans Drive ?', a: 'Oui, Gemini for Workspace peut lire et analyser les fichiers de votre Drive (Sheets, Docs, PDF). C\'est particulièrement utile pour croiser des données financières entre plusieurs fichiers.' },
    ],
    relatedSpokes: ['formation-copilot-finance', 'formation-chatgpt-finance', 'formation-gemini-commercial'],
  },

  // ── Gemini × Commercial ──────────────────────────────────────────────────
  {
    slug: 'formation-gemini-commercial',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Commercial',
    metierSlug: 'commercial',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini Commerciaux | Masteria',
    metaDesc: "Formation Gemini pour les équipes commerciales. Propositions dans Docs, présentations Slides, emails Gmail. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les équipes Commerciales',
    intro: "Les commerciaux sur Google Workspace peuvent utiliser Gemini pour rédiger leurs propositions dans Docs, créer leurs présentations dans Slides et gérer leur prospection dans Gmail, avec l'avantage de Gemini : un accès temps réel au web pour enrichir leurs recherches prospects.",
    useCases: [
      { icon: '📋', title: 'Propositions dans Docs', desc: 'Propositions commerciales et devis rédigés dans Google Docs.' },
      { icon: '🎨', title: 'Décks dans Slides', desc: 'Présentations client percutantes générées dans Google Slides.' },
      { icon: '📧', title: 'Prospection Gmail', desc: 'Emails de prospection personnalisés directement dans Gmail.' },
      { icon: '🔍', title: 'Recherche prospects', desc: 'Gemini accède au web pour vous fournir des infos sur vos prospects.' },
      { icon: '👥', title: 'CR de réunion Meet', desc: 'Comptes-rendus de RDV client depuis Google Meet.' },
      { icon: '📊', title: 'Pipeline dans Sheets', desc: 'Analysez et pilotez votre pipeline commercial dans Sheets.' },
    ],
    program: [
      {
        title: 'Matin, Prospection et propositions',
        items: [
          'Gemini dans Gmail : emails de prospection et relances',
          'Gemini dans Docs : propositions commerciales et devis',
          'Gemini dans Slides : présentations client',
          'Recherche prospects avec Gemini et son accès web',
        ],
      },
      {
        title: 'Après-midi, Suivi et pilotage',
        items: [
          'Gemini dans Meet : CR de réunion client automatiques',
          'Gemini dans Sheets : analyse pipeline et indicateurs commerciaux',
          'Intégrer Gemini dans votre process commercial Google',
          'Kit de prompts commerciaux pour Google Workspace',
        ],
      },
    ],
    faq: [
      { q: 'Gemini peut-il se connecter à notre CRM Google ?', a: 'Gemini for Workspace s\'intègre avec des CRM comme HubSpot via des connecteurs. Pour Salesforce, des intégrations spécifiques existent. Nous abordons les possibilités d\'intégration selon votre stack commercial.' },
    ],
    relatedSpokes: ['formation-chatgpt-commercial', 'formation-copilot-commercial', 'formation-gemini-marketing'],
  },

  // ── Gemini × Communication ───────────────────────────────────────────────
  {
    slug: 'formation-gemini-communication',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Communication',
    metierSlug: 'communication',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini Communication | Masteria',
    metaDesc: "Formation Gemini pour les équipes communication. Contenus Docs, réseaux sociaux, visuels. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les équipes Communication',
    intro: "Pour les équipes communication sur Google Workspace, Gemini combine la puissance de l'IA générative avec l'accès temps réel au web et l'intégration native dans Docs, Slides et Gmail. Idéal pour produire des contenus actualisés et cohérents.",
    useCases: [
      { icon: '📰', title: 'Communiqués dans Docs', desc: 'Rédigez communiqués de presse et articles dans Google Docs.' },
      { icon: '📱', title: 'Contenus réseaux sociaux', desc: 'Planifiez et produisez vos contenus avec Gemini.' },
      { icon: '🖼️', title: 'Génération d\'images', desc: 'Créez des visuels avec les capacités image de Gemini.' },
      { icon: '🎨', title: 'Présentations Slides', desc: 'Décks de communication et présentations institutionnelles.' },
      { icon: '🔍', title: 'Veille en temps réel', desc: 'Gemini accède à l\'actualité pour enrichir vos contenus.' },
      { icon: '📧', title: 'Communication Gmail', desc: 'Emails institutionnels, RP et communication de crise.' },
    ],
    program: [
      {
        title: 'Matin, Production de contenu',
        items: [
          'Gemini dans Docs : communiqués, articles, tribunes',
          'Contenus réseaux sociaux : adapter le ton selon les plateformes',
          'Génération d\'images et visuels avec Gemini',
          'Intégrer l\'actualité en temps réel dans vos contenus',
        ],
      },
      {
        title: 'Après-midi, Communication institutionnelle et crise',
        items: [
          'Gemini dans Slides : présentations institutionnelles',
          'Gemini dans Gmail : RP, médias et communication de crise',
          'Communication interne dans Google Workspace',
          'Workflow éditorial Gemini pour votre équipe',
        ],
      },
    ],
    faq: [
      { q: 'Gemini génère-t-il des images libres de droits ?', a: 'Les images générées par Gemini sont créées à la demande et ne sont pas soumises aux droits d\'auteur classiques. Cependant, vérifiez les conditions d\'utilisation de Google pour un usage commercial, notamment pour les communications publiques.' },
    ],
    relatedSpokes: ['formation-chatgpt-communication', 'formation-gemini-marketing', 'formation-copilot-marketing'],
  },

  // ── Copilot × Communication ──────────────────────────────────────────────
  {
    slug: 'formation-copilot-communication',
    tool: 'Microsoft Copilot',
    toolSlug: 'copilot',
    toolColor: '#0078d4',
    toolColorLight: '#dbeafe',
    metier: 'Communication',
    metierSlug: 'communication',
    hubSlug: 'formation-microsoft-copilot',
    priority: false,
    metaTitle: 'Formation Copilot Communication | Masteria',
    metaDesc: "Formation Copilot pour les équipes communication. Communiqués dans Word, présentations PowerPoint, emails Outlook. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Microsoft Copilot pour les équipes Communication',
    intro: "Les équipes communication sur Microsoft 365 peuvent utiliser Copilot pour produire communiqués, présentations et contenus numériques directement dans leurs outils habituels. Word pour les textes, PowerPoint pour les visuels, Outlook pour les RP, l'IA s'intègre dans votre workflow éditorial sans rupture.",
    useCases: [
      { icon: '📄', title: 'Communiqués dans Word', desc: 'Rédigez communiqués de presse et articles institutionnels directement dans Word.' },
      { icon: '🎨', title: 'Présentations PowerPoint', desc: 'Décks institutionnels et présentations dirigeants générés depuis vos briefs.' },
      { icon: '📧', title: 'Relations presse Outlook', desc: 'Emailings RP, réponses aux journalistes, communications de crise.' },
      { icon: '📱', title: 'Contenus réseaux sociaux', desc: 'Posts adaptés par plateforme depuis vos contenus Word existants.' },
      { icon: '👥', title: 'CR de comités Teams', desc: 'Synthèses automatiques de vos comités de communication et briefs agence.' },
      { icon: '📊', title: 'Rapports d\'activité', desc: 'Rapports annuels et bilans communication dans Word avec données Excel.' },
    ],
    program: [
      {
        title: 'Matin, Production de contenu avec Copilot',
        items: [
          'Copilot dans Word : communiqués, tribunes et contenus longs',
          'Adapter le ton éditorial : presse, interne, digital, institutionnel',
          'Copilot dans PowerPoint : présentation et décks communication',
          'Cohérence de marque et charte éditoriale dans Copilot',
        ],
      },
      {
        title: 'Après-midi, Relations presse et communication de crise',
        items: [
          'Copilot dans Outlook : RP, réponses médias et newsletters',
          'Communication interne dans Teams et SharePoint',
          'Gestion de crise : répondre vite avec Copilot sans perdre en qualité',
          'Workflows éditoriaux et validation de contenu dans Microsoft 365',
        ],
      },
    ],
    faq: [
      { q: 'Copilot peut-il apprendre notre charte éditoriale ?', a: 'Vous pouvez intégrer votre charte éditoriale dans les instructions système de Copilot, ou l\'ajouter dans vos prompts. Plus vous lui donnez de contexte (ton, exemples de vos publications), plus il respectera votre style.' },
    ],
    relatedSpokes: ['formation-chatgpt-communication', 'formation-gemini-communication', 'formation-copilot-marketing'],
  },

  // ── Gemini × Management ──────────────────────────────────────────────────
  {
    slug: 'formation-gemini-management',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Management',
    metierSlug: 'management',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini Managers | Masteria',
    metaDesc: "Formation Gemini pour les managers. Réunions Meet, reporting Sheets, communication Gmail. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les Managers',
    intro: "Les managers sur Google Workspace peuvent s'appuyer sur Gemini pour gagner du temps sur les tâches administratives et se concentrer sur le pilotage de leurs équipes. Synthèse de réunions Meet, reporting dans Sheets, communication dans Gmail, Gemini s'intègre dans votre quotidien de manager sans effort.",
    useCases: [
      { icon: '👥', title: 'Synthèse de réunions Meet', desc: 'Comptes-rendus automatiques de vos réunions d\'équipe Google Meet.' },
      { icon: '📊', title: 'Reporting dans Sheets', desc: 'Tableaux de bord de suivi d\'équipe et de performance dans Google Sheets.' },
      { icon: '📧', title: 'Communication Gmail', desc: 'Emails d\'équipe, feedbacks et communications managériales dans Gmail.' },
      { icon: '📋', title: 'Documents de travail Docs', desc: 'Ordres du jour, comptes-rendus et plans d\'action dans Google Docs.' },
      { icon: '🎨', title: 'Présentations Slides', desc: 'Présentations de résultats et de bilans pour la direction.' },
      { icon: '🔍', title: 'Veille sectorielle', desc: 'Gemini accède au web pour enrichir vos analyses de marché et benchmarks.' },
    ],
    program: [
      {
        title: 'Matin, Pilotage d\'équipe avec Gemini',
        items: [
          'Gemini dans Meet : synthèse de réunions et extraction des décisions',
          'Gemini dans Docs : ordres du jour, comptes-rendus et plans d\'action',
          'Gemini dans Sheets : tableaux de bord équipe et suivi des objectifs',
          'Préparer et animer des réunions plus efficaces avec Gemini',
        ],
      },
      {
        title: 'Après-midi, Communication et reporting',
        items: [
          'Gemini dans Gmail : communications d\'équipe et feedbacks',
          'Gemini dans Slides : présentations de performance pour la direction',
          'Délégation et suivi de projets dans Google Workspace',
          'Veille sectorielle : rester informé sans perdre de temps',
        ],
      },
    ],
    faq: [
      { q: 'Gemini peut-il accéder aux fichiers partagés de mon équipe ?', a: 'Oui, Gemini for Workspace peut accéder aux Drive partagés et fichiers de votre équipe, selon vos droits. C\'est utile pour synthétiser des rapports d\'équipe ou analyser des données de performance consolidées.' },
    ],
    relatedSpokes: ['formation-chatgpt-management', 'formation-copilot-management', 'formation-gemini-commercial'],
  },

  // ── Gemini × Assistante ──────────────────────────────────────────────────
  {
    slug: 'formation-gemini-assistante',
    tool: 'Google Gemini',
    toolSlug: 'gemini',
    toolColor: '#ea4335',
    toolColorLight: '#fee2e2',
    metier: 'Assistanat de direction',
    metierSlug: 'assistante',
    hubSlug: 'formation-gemini-entreprise',
    priority: false,
    metaTitle: 'Formation Gemini Assistanat de direction | Masteria',
    metaDesc: "Formation Gemini pour assistants de direction : Gmail, Docs, Sheets, Calendar. Organisation et rédaction assistées. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Google Gemini pour les Assistants et assistantes de direction',
    intro: "Les assistants et assistantes de direction sur Google Workspace gèrent une charge de communication et d'organisation considérable. Gemini dans Gmail, Docs et Sheets vous aide à traiter les emails plus vite, rédiger des documents de qualité professionnelle et organiser l'agenda de la direction, tout en restant dans vos outils habituels.",
    useCases: [
      { icon: '📧', title: 'Gestion emails Gmail', desc: 'Triez, répondez et rédigez vos emails professionnels bien plus rapidement.' },
      { icon: '📄', title: 'Rédaction dans Docs', desc: 'Courriers, notes de synthèse, comptes-rendus, rédigés en quelques minutes.' },
      { icon: '📊', title: 'Tableaux dans Sheets', desc: 'Tableaux de bord, suivi de dossiers et reportings dans Google Sheets.' },
      { icon: '👥', title: 'CR de réunions Meet', desc: 'Comptes-rendus complets de vos réunions Google Meet automatiquement.' },
      { icon: '🗓️', title: 'Organisation Calendar', desc: 'Planification de réunions et gestion d\'agenda avec suggestions Gemini.' },
      { icon: '🎨', title: 'Présentations Slides', desc: 'Supports de présentation pour la direction dans Google Slides.' },
    ],
    program: [
      {
        title: 'Matin, Communication et rédaction avec Gemini',
        items: [
          'Gemini dans Gmail : traiter et rédiger des emails professionnels rapidement',
          'Gemini dans Docs : courriers, comptes-rendus et notes de synthèse',
          'Adapter le niveau de formalisme selon le destinataire',
          'Créer des modèles de documents réutilisables',
        ],
      },
      {
        title: 'Après-midi, Organisation et reporting',
        items: [
          'Gemini dans Meet : synthèses de réunions direction',
          'Gemini dans Sheets : tableaux de suivi et reporting',
          'Gemini dans Slides : présentation pour la direction',
          'Organisation de l\'agenda et coordination dans Google Workspace',
        ],
      },
    ],
    faq: [
      { q: 'Gemini peut-il accéder à l\'agenda Google Calendar de la direction ?', a: 'Gemini peut interagir avec Google Calendar pour proposer des créneaux et synthétiser l\'agenda. Les fonctionnalités d\'accès à l\'agenda varient selon la version de Gemini for Workspace de votre organisation.' },
    ],
    relatedSpokes: ['formation-chatgpt-assistante', 'formation-copilot-assistante', 'formation-gemini-rh'],
  },

  // ══ CLAUDE (ANTHROPIC) ════════════════════════════════════════════════════

  // ── Claude × Marketing ───────────────────────────────────────────────────
  {
    slug: 'formation-claude-marketing',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Marketing',
    metierSlug: 'marketing',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude Marketing | Masteria',
    metaDesc: "Formation Claude Anthropic pour les marketeurs. Rédaction longue, stratégie de contenu, analyse de marché. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les équipes Marketing',
    intro: "Claude d'Anthropic se distingue par sa capacité à produire des textes longs, cohérents et d'une qualité rédactionnelle supérieure. Pour les équipes marketing qui ont besoin de contenus substantiels, livres blancs, études de marché, stratégies de contenu détaillées, Claude est l'IA qui répond à l'exigence.",
    useCases: [
      { icon: '✍️', title: 'Contenus longs premium', desc: 'Livres blancs, guides, études de marché de plusieurs milliers de mots sans perte de cohérence.' },
      { icon: '🎯', title: 'Stratégie de contenu', desc: 'Élaborez des stratégies éditoriales complètes avec calendriers et angles différenciants.' },
      { icon: '🔍', title: 'Analyse de marché', desc: 'Synthèses de marchés, benchmark concurrentiel et analyse de positionnement.' },
      { icon: '📣', title: 'Copywriting nuancé', desc: 'Copies publicitaires et messages marketing qui conservent votre voix de marque.' },
      { icon: '📋', title: 'Briefs créatifs détaillés', desc: 'Briefs complets pour vos agences avec contexte, enjeux et contraintes.' },
      { icon: '📧', title: 'Séquences email longues', desc: 'Campagnes email multiétapes cohérentes sur l\'ensemble du parcours.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Rédaction avancée avec Claude',
        items: [
          'Comprendre les forces de Claude vs ChatGPT pour le marketing',
          'Rédiger des contenus longs sans perte de cohérence ni de qualité',
          'Encoder votre brand voice et vos guidelines dans Claude',
          'Documents : livres blancs, guides, études et contenus premium',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables marketing',
        items: [
          'Atelier : produire un contenu long (guide ou livre blanc) sur un brief réel',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : prompts trop vagues, ton incohérent, hallucinations',
          'Premiers prompts de marque Claude réutilisables par l\'équipe marketing',
        ],
      },
      {
        title: 'Jour 2 · Matin, Stratégie et analyse de marché',
        items: [
          'Élaborer une stratégie de contenu complète avec Claude',
          'Analyse concurrentielle et synthèse de marché',
          'Préparer des briefs agence et des cahiers des charges créatifs',
          'Workflows marketing avec Claude : intégration dans vos process',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude marketing partagée par l\'équipe',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi',
        ],
      },
    ],
    faq: [
      { q: 'Quelle différence entre Claude et ChatGPT pour le marketing ?', a: 'Claude se distingue par la qualité de ses textes longs (cohérence, style, profondeur) et sa précision dans le suivi d\'instructions complexes. ChatGPT est plus polyvalent et créatif. En marketing, Claude excelle pour les contenus premium et les stratégies détaillées ; ChatGPT pour la génération rapide et créative.' },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-copilot-marketing', 'formation-gemini-marketing'],
  },

  // ── Claude × Ressources Humaines ─────────────────────────────────────────
  {
    slug: 'formation-claude-ressources-humaines',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Ressources Humaines',
    metierSlug: 'ressources-humaines',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude RH | Masteria',
    metaDesc: "Formation Claude Anthropic pour les RH. Analyse de CV, rédaction RH, politique d'entreprise. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les équipes RH',
    intro: "Les équipes RH traitent quotidiennement de grandes quantités de documents : CV, contrats, politiques internes, rapports sociaux. Claude excelle dans l'analyse de documents longs et la rédaction de documents RH complexes, avec une attention particulière aux nuances qui comptent dans la gestion des personnes.",
    useCases: [
      { icon: '📄', title: 'Analyse de CV en masse', desc: 'Traitez des dizaines de CV en extrayant les informations pertinentes selon vos critères.' },
      { icon: '📋', title: 'Documents RH complexes', desc: 'Contrats, règlements intérieurs, politiques et procédures avec précision juridique.' },
      { icon: '✍️', title: 'Offres d\'emploi ciblées', desc: 'Offres attractives et inclusives, adaptées à chaque profil recherché.' },
      { icon: '📊', title: 'Rapports sociaux', desc: 'Bilan social, rapport égalité professionnelle, synthèses et rédaction assistées.' },
      { icon: '👥', title: 'Communication RH sensible', desc: 'Annonces de réorganisation, messages délicats rédigés avec le bon ton.' },
      { icon: '🎓', title: 'Supports de formation', desc: 'Modules de formation interne et parcours d\'onboarding complets.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Recrutement et analyse documentaire',
        items: [
          'Analyser des pools de candidatures avec Claude',
          'Rédiger des offres d\'emploi ciblées et inclusives',
          'Synthétiser des entretiens et créer des grilles d\'évaluation',
          'Traiter des dossiers complexes en préservant la confidentialité',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables RH',
        items: [
          'Atelier : produire une offre d\'emploi et une fiche de poste à partir de vos documents',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : confidentialité, biais, données personnelles',
          'Premiers prompts Claude RH réutilisables par l\'équipe',
        ],
      },
      {
        title: 'Jour 2 · Matin, Rédaction RH et communication',
        items: [
          'Contrats, avenants et documents administratifs : rédaction assistée',
          'Politiques et procédures RH : structuration et mise à jour',
          'Communication interne délicate : ton juste et messages clairs',
          'Supports de formation et onboarding avec Claude',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude RH partagée par l\'équipe',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi',
        ],
      },
    ],
    faq: [
      { q: 'Claude peut-il traiter des données RH confidentielles ?', a: 'Il est recommandé d\'anonymiser les données personnelles avant de les soumettre à Claude (ou tout autre LLM). Utilisez Claude.ai for Work ou l\'API Anthropic avec les garanties de confidentialité business pour les données sensibles.' },
    ],
    relatedSpokes: ['formation-chatgpt-ressources-humaines', 'formation-copilot-rh', 'formation-gemini-rh'],
  },

  // ── Claude × Commercial ──────────────────────────────────────────────────
  {
    slug: 'formation-claude-commercial',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Commercial',
    metierSlug: 'commercial',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude Commerciales | Masteria',
    metaDesc: "Formation Claude Anthropic pour les commerciaux. Propositions longues, argumentaires, analyse prospect. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les équipes Commerciales',
    intro: "Les commerciaux qui répondent à des appels d'offres complexes ou qui rédigent des propositions de plusieurs dizaines de pages trouvent dans Claude un allié de choix. Sa capacité à maintenir la cohérence sur de longs documents et à structurer des argumentaires convaincants en fait un outil puissant pour les cycles de vente longs.",
    useCases: [
      { icon: '📋', title: 'Propositions longues et complexes', desc: 'Propositions commerciales de 20, 50, 100 pages, cohérentes du début à la fin.' },
      { icon: '🎯', title: 'Argumentaires personnalisés', desc: 'Adaptez votre pitch à chaque prospect en analysant leurs documents et besoins.' },
      { icon: '🔍', title: 'Analyse de prospects', desc: 'Synthétisez les rapports, communiqués et documents publics de vos cibles.' },
      { icon: '📧', title: 'Séquences de nurturing', desc: 'Séquences d\'emails personnalisées sur tout le cycle de vente.' },
      { icon: '⚖️', title: 'Réponses aux objections', desc: 'Préparez des contre-arguments détaillés et structurés pour chaque objection.' },
      { icon: '📊', title: 'Analyse de contrats clients', desc: 'Revue rapide des CGV clients et identification des points de négociation.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Propositions et argumentaires avec Claude',
        items: [
          'Forces de Claude pour les documents commerciaux longs',
          'Structurer et rédiger des propositions commerciales complètes',
          'Adapter le discours commercial à chaque type d\'interlocuteur',
          'Analyser les documents d\'un prospect pour personnaliser l\'approche',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables commerciaux',
        items: [
          'Atelier : produire un email de prospection et un pitch personnalisé sur un prospect réel',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : ton trop générique, manque de personnalisation',
          'Premiers prompts Claude commerciaux réutilisables par l\'équipe',
        ],
      },
      {
        title: 'Jour 2 · Matin, Prospection et cycle de vente',
        items: [
          'Séquences de prospection et nurturing avec Claude',
          'Préparer des réponses aux objections et contre-argumentaires',
          'Réponses aux appels d\'offres et dossiers de candidature',
          'Analyser des contrats clients avec Claude',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude commerciaux partagée par l\'équipe',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi',
        ],
      },
    ],
    faq: [
      { q: 'Claude est-il meilleur que ChatGPT pour les appels d\'offres ?', a: 'Pour les réponses longues (>10 pages), Claude est généralement préférable : il maintient mieux la cohérence et le fil directeur sur de longs documents. ChatGPT est plus adapté pour les propositions courtes et créatives. Nos formateurs vous apprennent à utiliser les deux en complémentarité.' },
    ],
    relatedSpokes: ['formation-chatgpt-commercial', 'formation-copilot-commercial', 'formation-gemini-commercial'],
  },

  // ── Claude × Finance ─────────────────────────────────────────────────────
  {
    slug: 'formation-claude-finance',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Finance',
    metierSlug: 'finance',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude Finance | Masteria',
    metaDesc: "Formation Claude Anthropic pour la finance. Analyse de données, rapports financiers, synthèse de documents complexes. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les équipes Finance',
    intro: "Les équipes finance manipulent des rapports, des contrats et des données complexes. Claude se distingue par sa capacité à analyser des documents financiers longs, à synthétiser des rapports annuels entiers et à rédiger des notes d'analyse de qualité professionnelle, avec la rigueur que requiert le secteur financier.",
    useCases: [
      { icon: '📊', title: 'Synthèse de rapports financiers', desc: 'Résumez des rapports annuels, due diligences et mémos financiers volumineux.' },
      { icon: '📄', title: 'Rédaction de notes d\'analyse', desc: 'Notes de synthèse, commentaires de gestion et analyses financières détaillées.' },
      { icon: '🔍', title: 'Revue de contrats financiers', desc: 'Analysez CGV, contrats de prêt et engagements financiers pour identifier les risques.' },
      { icon: '📈', title: 'Commentaires de résultats', desc: 'Rédigez les commentaires de vos tableaux de bord et reportings de gestion.' },
      { icon: '📧', title: 'Communication financière', desc: 'Emails et courriers vers les banques, investisseurs et commissaires aux comptes.' },
      { icon: '🎨', title: 'Présentations de résultats', desc: 'Structurez vos présentations de résultats pour les comités de direction.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Analyse documentaire et synthèse financière',
        items: [
          'Soumettre et analyser des rapports financiers longs à Claude',
          'Extraire les KPIs et indicateurs clés d\'un document financier',
          'Identifier les risques et anomalies dans des corpus de documents',
          'Comparer des données financières entre plusieurs périodes',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables finance',
        items: [
          'Atelier : synthétiser un rapport financier réel et produire un commentaire narratif',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : imprécisions, confidentialité des chiffres, hallucinations',
          'Premiers prompts Claude finance réutilisables par l\'équipe',
        ],
      },
      {
        title: 'Jour 2 · Matin, Rédaction et communication financière',
        items: [
          'Rédiger des notes d\'analyse et commentaires de gestion',
          'Préparer les présentations de résultats pour la direction',
          'Communication financière externe : banques et investisseurs',
          'Intégrer Claude dans votre workflow de reporting mensuel',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude finance partagée par l\'équipe',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi',
        ],
      },
    ],
    faq: [
      { q: 'Claude peut-il lire des fichiers Excel ou PDF financiers ?', a: 'Claude peut analyser des PDF et des données tabulaires que vous copiez-collez ou uploadez. Pour une intégration directe avec vos fichiers Excel, utilisez l\'API Claude avec des connecteurs adaptés. En formation, nous vous apprenons les meilleures méthodes pour chaque cas d\'usage.' },
    ],
    relatedSpokes: ['formation-chatgpt-finance', 'formation-copilot-finance', 'formation-gemini-finance'],
  },

  // ── Claude × Communication ───────────────────────────────────────────────
  {
    slug: 'formation-claude-communication',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Communication',
    metierSlug: 'communication',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude Communication | Masteria',
    metaDesc: "Formation Claude Anthropic pour les communicants. Communiqués longs, stratégie éditoriale, gestion de crise. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les équipes Communication',
    intro: "Les équipes communication qui gèrent des publications importantes, rapports annuels, livres blancs institutionnels, stratégies de communication complexes, trouvent dans Claude un partenaire d'une qualité rédactionnelle exceptionnelle. Claude produit des textes longs cohérents, nuancés et adaptés aux exigences de la communication corporate.",
    useCases: [
      { icon: '📄', title: 'Rapports et publications institutionnels', desc: 'Rapports annuels, RSE, livres blancs, cohérents du début à la fin.' },
      { icon: '📢', title: 'Stratégie de communication', desc: 'Plans de communication complets avec axes, messages clés et calendriers.' },
      { icon: '🚨', title: 'Gestion de crise', desc: 'Communiqués de crise, Q&A et messages de réassurance sous contrainte de temps.' },
      { icon: '📱', title: 'Contenus multicanaux', desc: 'Déclinaison d\'un message sur tous les canaux en préservant la cohérence.' },
      { icon: '🎨', title: 'Discours et prises de parole', desc: 'Discours de dirigeants et prises de parole publique avec le bon registre.' },
      { icon: '🔍', title: 'Analyse de réputation', desc: 'Synthétisez les retombées presse et analysez votre image avec Claude.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Production de contenu premium',
        items: [
          'Claude pour la communication corporate : forces et cas d\'usage',
          'Rédiger des publications longues cohérentes (rapport, livre blanc)',
          'Conserver le ton institutionnel et la voix de marque sur tout un document',
          'Décliner un message sur plusieurs canaux et formats',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables communication',
        items: [
          'Atelier : produire un communiqué institutionnel et un post corporate sur un brief réel',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : ton corporate incohérent, registres mal calibrés',
          'Premiers prompts Claude communication réutilisables par l\'équipe',
        ],
      },
      {
        title: 'Jour 2 · Matin, Stratégie et communication de crise',
        items: [
          'Construire une stratégie de communication complète avec Claude',
          'Communication de crise : réactivité et précision avec Claude',
          'Discours dirigeants et communications institutionnelles',
          'Analyse de réputation et veille médiatique assistées',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude communication partagée par l\'équipe',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi',
        ],
      },
    ],
    faq: [
      { q: 'Claude est-il plus adapté que ChatGPT pour la communication institutionnelle ?', a: 'Pour les textes longs et formels (rapport annuel, discours institutionnel), Claude produit généralement une meilleure qualité rédactionnelle et une plus grande cohérence stylistique. ChatGPT est préférable pour les contenus courts et créatifs (posts, accroches). Les deux sont complémentaires.' },
    ],
    relatedSpokes: ['formation-chatgpt-communication', 'formation-copilot-communication', 'formation-gemini-communication'],
  },

  // ── Claude × Management ──────────────────────────────────────────────────
  {
    slug: 'formation-claude-management',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Management',
    metierSlug: 'management',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude Managers | Masteria',
    metaDesc: "Formation Claude Anthropic pour les managers. Rapports de management, analyse RH, communication d'équipe. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les Managers',
    intro: "Les managers qui pilotent des équipes ont besoin d'un outil capable de les aider à analyser des informations complexes, rédiger des documents RH précis et communiquer avec clarté. Claude apporte une profondeur d'analyse et une qualité de rédaction qui font la différence dans les décisions managériales importantes.",
    useCases: [
      { icon: '📊', title: 'Analyse de performance d\'équipe', desc: 'Synthétisez les données de performance et identifiez les tendances clés.' },
      { icon: '📋', title: 'Entretiens annuels', desc: 'Préparez et rédigez des évaluations annuelles équilibrées et constructives.' },
      { icon: '✍️', title: 'Plans de développement', desc: 'Plans de formation et développement personnalisés pour chaque collaborateur.' },
      { icon: '📧', title: 'Communication managériale', desc: 'Messages délicats, recadrages et communications d\'équipe avec le bon ton.' },
      { icon: '🎯', title: 'Rapports de direction', desc: 'Synthèses opérationnelles et rapports pour vos N+1 et comités de direction.' },
      { icon: '🔍', title: 'Analyse de situations complexes', desc: 'Claude aide à structurer le raisonnement sur des problèmes managériaux difficiles.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Pilotage et analyse avec Claude',
        items: [
          'Claude pour le management : quand et comment l\'utiliser',
          'Analyser des données RH et de performance avec Claude',
          'Préparer des entretiens annuels et des plans de développement',
          'Structurer des rapports et synthèses pour la direction',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables managériaux',
        items: [
          'Atelier : préparer un entretien 1-1 et produire un feedback structuré sur un cas réel',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : feedback trop générique, manque de concret',
          'Premiers prompts Claude managériaux réutilisables par l\'équipe',
        ],
      },
      {
        title: 'Jour 2 · Matin, Communication et leadership',
        items: [
          'Rédiger des communications d\'équipe sensibles avec Claude',
          'Préparer des prises de parole et réunions d\'équipe',
          'Traiter des situations RH complexes avec l\'aide de Claude',
          'Limites de l\'IA en management : maintenir le jugement humain',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude managériaux partagée par l\'équipe',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi',
        ],
      },
    ],
    faq: [
      { q: 'L\'IA peut-elle vraiment aider dans des situations RH délicates ?', a: 'Claude peut vous aider à structurer votre pensée, trouver les bons mots et anticiper les réactions, mais la décision et la relation humaine restent votre responsabilité. En formation, on insiste sur l\'usage de Claude comme aide à la réflexion, pas comme substitut au jugement managérial.' },
    ],
    relatedSpokes: ['formation-chatgpt-management', 'formation-copilot-management', 'formation-gemini-management'],
  },

  // ── Claude × Assistante ──────────────────────────────────────────────────
  {
    slug: 'formation-claude-assistante',
    tool: 'Claude (Anthropic)',
    toolSlug: 'claude',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Assistanat de direction',
    metierSlug: 'assistante',
    hubSlug: 'formation-claude-ia',
    priority: false,
    metaTitle: 'Formation Claude Assistanat de direction | Masteria',
    metaDesc: "Formation Claude Anthropic pour assistants et assistantes de direction. Courriers complexes, synthèses, organisation. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Claude pour les Assistants et assistantes de direction',
    intro: "Les assistants et assistantes de direction rédigent des documents qui engagent la direction : courriers officiels, notes de synthèse, comptes-rendus de comités. Claude est l'outil idéal pour produire ces documents avec la qualité et le niveau de formalisme qu'ils requièrent, rapidement et sans faute.",
    useCases: [
      { icon: '📄', title: 'Courriers officiels', desc: 'Courriers formels, lettres de direction et correspondances officielles de qualité.' },
      { icon: '📋', title: 'Notes de synthèse', desc: 'Synthétisez des dossiers complexes en notes exécutives accessibles.' },
      { icon: '👥', title: 'Comptes-rendus de comités', desc: 'CR de comités de direction, conseils d\'administration et réunions stratégiques.' },
      { icon: '📊', title: 'Rapports de synthèse', desc: 'Consolidez des informations issues de multiples sources en rapports clairs.' },
      { icon: '🗓️', title: 'Notes de briefing', desc: 'Briefings de préparation pour les réunions et déplacements de la direction.' },
      { icon: '🔍', title: 'Recherche et synthèse d\'informations', desc: 'Collectez et synthétisez des informations sur des sujets variés pour la direction.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Rédaction professionnelle avec Claude',
        items: [
          'Claude pour les assistants et assistantes : qualité rédactionnelle et formalisme',
          'Courriers, lettres et correspondances officielles de direction',
          'Notes de synthèse et comptes-rendus de comités',
          'Adapter le niveau de langue selon le destinataire et le contexte',
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables assistanat',
        items: [
          'Atelier : rédiger un compte-rendu de réunion et un courrier officiel sur un cas réel',
          'Revue croisée des productions entre participants et formateur',
          'Correction des erreurs classiques : manque de contexte, formulations ambiguës, ton mal calibré',
          'Premiers prompts Claude assistanat réutilisables au quotidien',
        ],
      },
      {
        title: 'Jour 2 · Matin, Organisation et synthèse d\'informations',
        items: [
          'Synthétiser des dossiers complexes et des rapports volumineux',
          'Préparer des briefings et notes de préparation pour la direction',
          'Organiser et consolider des informations issues de sources multiples',
          'Workflows pratiques : intégrer Claude dans votre quotidien',
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          'Construire votre bibliothèque de prompts Claude assistanat partagée',
          'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité',
          'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1',
          'Plan d\'action 30 jours : intégration dans vos rituels et votre organisation',
        ],
      },
    ],
    faq: [
      { q: 'Claude est-il meilleur que ChatGPT pour les courriers formels ?', a: 'Claude est souvent préféré pour les documents formels car il produit un style plus soutenu, fait moins d\'erreurs de registre et respecte mieux les conventions formelles françaises. Pour des communications rapides et informelles, les deux se valent.' },
    ],
    relatedSpokes: ['formation-chatgpt-assistante', 'formation-copilot-assistante', 'formation-gemini-assistante'],
  },

  // ══ MISTRAL AI ════════════════════════════════════════════════════════════

  // ── Mistral × Marketing ──────────────────────────────────────────────────
  {
    slug: 'formation-mistral-marketing',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Marketing',
    metierSlug: 'marketing',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral Marketing | Masteria',
    metaDesc: "Formation Mistral AI pour les marketeurs. Contenus en français, campagnes, hébergement souverain. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Marketing',
    intro: "Mistral AI est l'IA française par excellence : ses modèles ont été entraînés avec un soin particulier pour la langue française, et ses contenus sonnent naturellement hexagonaux. Pour les équipes marketing qui produisent des contenus en français et pour un public français, Mistral offre une qualité linguistique et culturelle difficile à égaler avec les modèles américains.",
    useCases: [
      { icon: '✍️', title: 'Contenus en français natif', desc: 'Posts, articles et campagnes avec des tournures et références culturelles françaises.' },
      { icon: '📣', title: 'Copywriting localisé', desc: 'Accroches et messages publicitaires adaptés aux codes et références du marché français.' },
      { icon: '📋', title: 'Briefs et plannings éditoriaux', desc: 'Briefs créatifs et plannings cohérents avec votre ligne éditoriale française.' },
      { icon: '🔍', title: 'Analyse de marché français', desc: 'Synthèses de tendances et études de marché ancrées dans le contexte français.' },
      { icon: '🎯', title: 'SEO francophone', desc: 'Optimisation pour les recherches françaises avec les bons champs lexicaux.' },
      { icon: '🔒', title: 'RGPD et souveraineté', desc: 'Traitez vos données marketing sur une IA européenne, conforme au RGPD par conception.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Production de contenus marketing avec Mistral',
        items: [
          "Découvrir Le Chat et les modèles Mistral : forces sur le français",
          "Rédiger des contenus marketing en français naturel et culturellement adapté",
          "Encoder votre brand voice pour des productions cohérentes",
          "Décliner un message sur plusieurs canaux et formats",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables marketing',
        items: [
          "Atelier : produire un post LinkedIn et une newsletter en français hexagonal sur un brief réel",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : tournures calquées de l'anglais, ton incohérent",
          "Premiers prompts Mistral marketing réutilisables par l'équipe",
        ],
      },
      {
        title: 'Jour 2 · Matin, Stratégie, analyse et souveraineté',
        items: [
          "Construire une stratégie de contenu appuyée sur Mistral",
          "Analyser des données de marché et des retours clients en français",
          "Comparer Mistral à ChatGPT sur les tâches marketing courantes",
          "RGPD, confidentialité et hébergement UE : bonnes pratiques",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral marketing partagée par l'équipe",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans les rituels et KPI de suivi",
        ],
      },
    ],
    faq: [
      { q: "Mistral est-il meilleur que ChatGPT pour rédiger en français ?", a: "Sur les tournures idiomatiques et les références culturelles françaises, Mistral produit souvent des textes plus naturels que les modèles américains, qui peuvent sonner légèrement traduits. Sur les tâches génériques, les deux outils sont très proches. La formation vous apprend à identifier les cas où Mistral apporte un vrai différentiel." },
    ],
    relatedSpokes: ['formation-chatgpt-marketing', 'formation-claude-marketing', 'formation-gemini-marketing'],
  },

  // ── Mistral × Ressources Humaines ────────────────────────────────────────
  {
    slug: 'formation-mistral-ressources-humaines',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Ressources Humaines',
    metierSlug: 'ressources-humaines',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral RH | Masteria',
    metaDesc: "Formation Mistral AI pour les RH. Offres, analyse CV, documents RH en IA européenne. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes RH',
    intro: "Les équipes RH traitent des données personnelles sensibles au quotidien : CV, dossiers candidats, évaluations. Mistral AI, hébergée en Europe et conforme RGPD par conception, permet aux RH d'exploiter l'IA sans sortir les données personnelles du périmètre européen, un enjeu central pour les DPO et les directions juridiques.",
    useCases: [
      { icon: '📝', title: 'Offres d\'emploi en français', desc: 'Offres attractives avec un français soigné et inclusif.' },
      { icon: '🔎', title: 'Analyse de CV en local', desc: 'Analyse assistée de candidatures avec des modèles hébergés en Europe.' },
      { icon: '📋', title: 'Documents RH types', desc: 'Fiches de poste, procédures, règlements intérieurs en français professionnel.' },
      { icon: '🤝', title: 'Onboarding', desc: 'Parcours d\'intégration et livrets d\'accueil complets.' },
      { icon: '📢', title: 'Communication interne', desc: 'Annonces RH et communications délicates rédigées avec le bon ton.' },
      { icon: '🔒', title: 'Conformité RGPD', desc: 'Traitement des données personnelles sur une infrastructure européenne.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Recrutement et analyse documentaire',
        items: [
          "Mistral AI pour les RH : pourquoi le choix européen fait sens",
          "Rédiger des offres d'emploi et messages de sourcing en français naturel",
          "Anonymisation et analyse de CV dans le respect du RGPD",
          "Préparer des grilles d'entretien structurées",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables RH',
        items: [
          "Atelier : produire une offre d'emploi et une fiche de poste à partir de vos documents",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : RGPD, biais, données personnelles hors UE",
          "Premiers prompts Mistral RH réutilisables par l'équipe",
        ],
      },
      {
        title: 'Jour 2 · Matin, Rédaction RH et conformité',
        items: [
          "Produire fiches de poste, procédures et documents RH",
          "Rédiger des communications internes sensibles",
          "Cadrage RGPD : ce qui change avec une IA hébergée en Europe",
          "Déploiement On-premise de Mistral : cas d'usage et arbitrages",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral RH partagée par l'équipe",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans les rituels et KPI de suivi",
        ],
      },
    ],
    faq: [
      { q: "Mistral est-il plus adapté au RGPD que ChatGPT ou Claude ?", a: "Mistral AI est une société française avec hébergement en Europe et une approche RGPD native. Les versions entreprise de ChatGPT et Claude offrent également des garanties fortes, mais Mistral a l'avantage supplémentaire de la souveraineté européenne et d'options de déploiement on-premise sur vos propres serveurs. La formation couvre les critères de choix selon votre contexte." },
    ],
    relatedSpokes: ['formation-chatgpt-ressources-humaines', 'formation-claude-ressources-humaines', 'formation-copilot-rh'],
  },

  // ── Mistral × Commercial ─────────────────────────────────────────────────
  {
    slug: 'formation-mistral-commercial',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Commercial',
    metierSlug: 'commercial',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral Commerciales | Masteria',
    metaDesc: "Formation Mistral AI pour les commerciaux. Prospection en français, propositions, CRM souverain. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Commerciales',
    intro: "Pour les équipes commerciales qui prospectent sur le marché français, Mistral AI produit des emails, des propositions et des argumentaires avec une qualité de français qui fait la différence. Combinée à la souveraineté européenne des données prospects, c'est la solution pour vendre en France en respectant la confidentialité des informations clients.",
    useCases: [
      { icon: '📧', title: 'Emails de prospection français', desc: 'Emails qui sonnent naturellement français, loin du style traduit.' },
      { icon: '📄', title: 'Propositions commerciales', desc: 'Propositions structurées en français professionnel et conforme à vos codes.' },
      { icon: '🔄', title: 'Séquences de relance', desc: 'Multi-touchpoints emails et LinkedIn calibrés pour le marché français.' },
      { icon: '📋', title: 'Préparation de RDV', desc: 'Fiches prospect et plans de découverte adaptés au contexte français.' },
      { icon: '📝', title: 'Comptes-rendus CRM', desc: 'CR structurés pour HubSpot, Salesforce ou CRM souverains (Axonaut, Sellsy).' },
      { icon: '💬', title: 'Réponses aux objections', desc: 'Bibliothèque de réponses adaptées aux objections typiques des acheteurs français.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Prospection avec Mistral',
        items: [
          "Mistral AI pour les commerciaux : qualité du français et souveraineté",
          "Rédiger des emails de prospection qui obtiennent des réponses",
          "Construire des séquences multicanal sur le marché français",
          "Préparer des RDV avec fiches prospect complètes",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables commerciaux',
        items: [
          "Atelier : produire un email de prospection et un pitch personnalisé sur un prospect réel",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : ton trop générique, manque de personnalisation",
          "Premiers prompts Mistral commerciaux réutilisables par l'équipe",
        ],
      },
      {
        title: 'Jour 2 · Matin, Cycle de vente et CRM',
        items: [
          "Produire des propositions commerciales de qualité en français",
          "Comptes-rendus de RDV et mise à jour CRM en un temps record",
          "Bibliothèque d'objections : construire le capital de l'équipe",
          "Confidentialité des données prospects : les bons réflexes",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral commerciaux partagée par l'équipe",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans les rituels et KPI de suivi",
        ],
      },
    ],
    faq: [
      { q: "Mistral s'intègre-t-il avec les CRM comme Salesforce ou HubSpot ?", a: "Mistral AI propose une API compatible avec les principaux CRM du marché, et des intégrations natives existent pour HubSpot, Pipedrive et des CRM européens (Axonaut, Sellsy, Sellsy). La formation présente le workflow pratique : générer dans Le Chat, copier dans le CRM, ou exploiter l'API pour l'automatisation." },
    ],
    relatedSpokes: ['formation-chatgpt-commercial', 'formation-claude-commercial', 'formation-copilot-commercial'],
  },

  // ── Mistral × Finance ────────────────────────────────────────────────────
  {
    slug: 'formation-mistral-finance',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Finance',
    metierSlug: 'finance',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral Finance | Masteria',
    metaDesc: "Formation Mistral AI pour la finance. Reporting, analyses, documents réglementaires en IA européenne. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Finance',
    intro: "Les équipes finance manipulent des données hautement confidentielles : résultats, prévisions, dossiers M&A. Mistral AI, avec son hébergement européen et ses options de déploiement on-premise, offre aux DAF et contrôleurs un assistant IA performant sans sortir les données financières du périmètre de l'entreprise.",
    useCases: [
      { icon: '📊', title: 'Commentaires de clôture', desc: 'Rédigez des commentaires de P&L et tableaux de bord en français soigné.' },
      { icon: '📈', title: 'Reporting narratif', desc: 'Transformez vos tableaux Excel en rapports de gestion mensuels et trimestriels.' },
      { icon: '📄', title: 'Synthèse de documents réglementaires', desc: 'Résumez liasses fiscales, rapports annuels et documents de conformité française.' },
      { icon: '🎯', title: 'Communication financière', desc: 'Documents pour banques, actionnaires et commissaires aux comptes.' },
      { icon: '🔍', title: 'Veille réglementaire', desc: 'Synthèses de normes comptables françaises (PCG) et évolutions fiscales.' },
      { icon: '🔒', title: 'Confidentialité', desc: 'Traitement des données financières sensibles sur infrastructure européenne.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Analyse et reporting financier',
        items: [
          "Mistral AI pour la finance : arbitrages entre cloud US et souveraineté",
          "Interpréter des tableaux de bord et rédiger des commentaires de gestion",
          "Produire des rapports mensuels et trimestriels structurés",
          "Synthétiser des documents réglementaires et des rapports longs",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables finance',
        items: [
          "Atelier : synthétiser un rapport financier réel et produire un commentaire de gestion narratif",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : imprécisions, confidentialité des chiffres, hallucinations",
          "Premiers prompts Mistral finance réutilisables par l'équipe",
        ],
      },
      {
        title: 'Jour 2 · Matin, Communication et cadre réglementaire',
        items: [
          "Communication financière : banques, actionnaires, CAC",
          "Veille sur les évolutions comptables et fiscales françaises",
          "Confidentialité des données financières et on-premise",
          "Intégration de Mistral dans votre processus de reporting",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral finance partagée par l'équipe",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans les rituels et KPI de suivi",
        ],
      },
    ],
    faq: [
      { q: "Mistral peut-il être déployé on-premise pour garantir la confidentialité ?", a: "Oui. Mistral AI propose des options de déploiement on-premise ou en cloud privé pour les entreprises ayant des exigences strictes de confidentialité (finance, santé, défense). C'est un vrai différentiel par rapport aux acteurs américains. La formation présente les modalités et cas d'usage adaptés à ce mode de déploiement." },
    ],
    relatedSpokes: ['formation-chatgpt-finance', 'formation-claude-finance', 'formation-copilot-finance'],
  },

  // ── Mistral × Communication ──────────────────────────────────────────────
  {
    slug: 'formation-mistral-communication',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Communication',
    metierSlug: 'communication',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral Communication | Masteria',
    metaDesc: "Formation Mistral AI pour les communicants. Communiqués, RP, communication de crise en français naturel. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Communication',
    intro: "La communication institutionnelle exige une maîtrise fine du français, des nuances culturelles et des codes professionnels. Mistral AI produit des textes qui sonnent naturellement hexagonaux, un atout pour les directions de la communication qui veulent éviter le style \"traduit\" des modèles américains.",
    useCases: [
      { icon: '📢', title: 'Communiqués de presse', desc: 'CP structurés au format français, prêts pour votre fichier média.' },
      { icon: '📄', title: 'Rapports et publications', desc: 'Rapports annuels, RSE et publications institutionnelles en français soigné.' },
      { icon: '🚨', title: 'Communication de crise', desc: 'Messages de réassurance et Q&A sous contrainte de temps, en français mesuré.' },
      { icon: '📱', title: 'Contenus multicanaux', desc: 'Déclinez un message sur tous les canaux en conservant la cohérence.' },
      { icon: '🎨', title: 'Discours et prises de parole', desc: 'Discours de dirigeants avec le registre français institutionnel approprié.' },
      { icon: '🔒', title: 'Confidentialité des dossiers sensibles', desc: 'Crises et dossiers confidentiels traités sur une IA européenne.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Production de contenu corporate',
        items: [
          "Mistral AI pour la communication : forces sur le français institutionnel",
          "Rédiger des communiqués de presse et publications longues",
          "Conserver la voix institutionnelle sur l'ensemble d'un document",
          "Décliner un message sur plusieurs canaux",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables communication',
        items: [
          "Atelier : produire un communiqué institutionnel et un post corporate sur un brief réel",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : ton corporate incohérent, registres mal calibrés",
          "Premiers prompts Mistral communication réutilisables par l'équipe",
        ],
      },
      {
        title: 'Jour 2 · Matin, Stratégie et communication de crise',
        items: [
          "Construire une stratégie de communication complète avec Mistral",
          "Communication de crise : réactivité et précision",
          "Discours dirigeants et prises de parole institutionnelles",
          "Confidentialité des dossiers sensibles : bonnes pratiques",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral communication partagée par l'équipe",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans les rituels et KPI de suivi",
        ],
      },
    ],
    faq: [
      { q: "Mistral produit-il vraiment un meilleur français que ChatGPT ?", a: "Sur les tournures institutionnelles et les registres soutenus du français, Mistral produit souvent des textes plus naturels que ChatGPT, qui peut glisser vers des formulations calquées de l'anglais. L'écart s'est réduit avec GPT-4, mais Mistral garde un avantage sur les contenus où la qualité du français fait partie du message." },
    ],
    relatedSpokes: ['formation-chatgpt-communication', 'formation-claude-communication', 'formation-gemini-communication'],
  },

  // ── Mistral × Management ─────────────────────────────────────────────────
  {
    slug: 'formation-mistral-management',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Management',
    metierSlug: 'management',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral Managers | Masteria',
    metaDesc: "Formation Mistral AI pour les managers. Réunions, reporting, communication d'équipe. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les Managers',
    intro: "Les managers rédigent une grande quantité de documents en français : comptes-rendus, synthèses, communications d'équipe, évaluations. Mistral AI offre la qualité linguistique dont ces documents ont besoin, combinée à une garantie de confidentialité européenne pour les données sensibles de management (évaluations, plans de développement, décisions RH).",
    useCases: [
      { icon: '📊', title: 'Rapports de management', desc: 'Synthèses opérationnelles et rapports pour N+1 et comités de direction.' },
      { icon: '📋', title: 'Entretiens annuels', desc: 'Préparation et rédaction d\'évaluations annuelles équilibrées.' },
      { icon: '✍️', title: 'Plans de développement', desc: 'Plans de formation et de montée en compétences personnalisés.' },
      { icon: '📧', title: 'Communication managériale', desc: 'Messages délicats, recadrages et communications d\'équipe avec le bon ton.' },
      { icon: '🎯', title: 'Objectifs SMART', desc: 'Formulation d\'objectifs clairs, mesurables et motivants pour vos équipes.' },
      { icon: '🔒', title: 'Données RH sensibles', desc: 'Traitement des évaluations et données d\'équipe sur une IA européenne.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Pilotage et rédaction manager',
        items: [
          "Mistral AI pour les managers : gains quotidiens et cadre d'usage",
          "Rédiger des rapports de management clairs et synthétiques",
          "Préparer et rédiger des évaluations annuelles structurées",
          "Objectifs SMART et plans de développement",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables managériaux',
        items: [
          "Atelier : préparer un entretien 1-1 et produire un feedback structuré sur un cas réel",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : feedback trop générique, manque de concret",
          "Premiers prompts Mistral managériaux réutilisables par l'équipe",
        ],
      },
      {
        title: 'Jour 2 · Matin, Communication et situations sensibles',
        items: [
          "Communication d'équipe : annonces, changements, reconnaissance",
          "Messages délicats et situations difficiles : trouver le juste ton",
          "Confidentialité des données RH : les bons réflexes",
          "Limites de l'IA en management : préserver le jugement humain",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral managériaux partagée par l'équipe",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans les rituels et KPI de suivi",
        ],
      },
    ],
    faq: [
      { q: "Peut-on saisir des données d'évaluation d'équipe dans Mistral sans risque ?", a: "Mistral AI propose des offres entreprise avec garanties de confidentialité (données non utilisées pour entraîner les modèles, hébergement UE, DPA). Pour les données RH les plus sensibles, on privilégie les noms anonymisés ou le déploiement on-premise. La formation couvre les bonnes pratiques selon le niveau de sensibilité." },
    ],
    relatedSpokes: ['formation-chatgpt-management', 'formation-claude-management', 'formation-copilot-management'],
  },

  // ── Mistral × Assistante ─────────────────────────────────────────────────
  {
    slug: 'formation-mistral-assistante',
    tool: 'Mistral AI',
    toolSlug: 'mistral',
    toolColor: '#fa500a',
    toolColorLight: '#fed7aa',
    metier: 'Assistanat de direction',
    metierSlug: 'assistante',
    hubSlug: 'formation-mistral-ai',
    priority: false,
    metaTitle: 'Formation Mistral Assistanat de direction | Masteria',
    metaDesc: "Formation Mistral AI pour assistants de direction : courriers, synthèses, organisation en français soigné. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les Assistants et assistantes de direction',
    intro: "Les assistants et assistantes de direction rédigent les documents qui portent la signature de la direction : courriers officiels, notes de synthèse, comptes-rendus de comités. Mistral AI offre une qualité de français institutionnel qui convient parfaitement à ces productions, tout en garantissant la confidentialité des dossiers de direction grâce à son hébergement européen.",
    useCases: [
      { icon: '📄', title: 'Courriers officiels', desc: 'Courriers de direction en français soutenu et conforme aux conventions françaises.' },
      { icon: '📋', title: 'Notes de synthèse', desc: 'Synthèses de dossiers complexes pour préparer les décisions de la direction.' },
      { icon: '👥', title: 'Comptes-rendus de comités', desc: 'CR de comités de direction, CA et réunions stratégiques rédigés avec rigueur.' },
      { icon: '📊', title: 'Rapports de synthèse', desc: 'Consolidation d\'informations issues de multiples sources.' },
      { icon: '🗓️', title: 'Notes de briefing', desc: 'Briefings de préparation pour réunions, déplacements et rendez-vous.' },
      { icon: '🔒', title: 'Confidentialité directoriale', desc: 'Traitement des dossiers sensibles de direction sur une IA européenne.' },
    ],
    program: [
      {
        title: 'Jour 1 · Matin, Rédaction et correspondance',
        items: [
          "Mistral AI pour assistants et assistantes : qualité du français et formalisme",
          "Courriers, lettres et correspondances officielles",
          "Notes de synthèse et comptes-rendus de comités",
          "Adapter le niveau de langue selon le destinataire",
        ],
      },
      {
        title: 'Jour 1 · Après-midi, Atelier : premiers livrables assistanat',
        items: [
          "Atelier : rédiger un compte-rendu de réunion et un courrier officiel sur un cas réel",
          "Revue croisée des productions entre participants et formateur",
          "Correction des erreurs classiques : manque de contexte, formulations ambiguës, ton mal calibré",
          "Premiers prompts Mistral assistanat réutilisables au quotidien",
        ],
      },
      {
        title: 'Jour 2 · Matin, Organisation et préparation',
        items: [
          "Synthétiser dossiers complexes et rapports volumineux",
          "Préparer des briefings et notes pour la direction",
          "Confidentialité des dossiers sensibles : bonnes pratiques",
          "Construire un workflow quotidien efficace avec Le Chat",
        ],
      },
      {
        title: 'Jour 2 · Après-midi, Déploiement et plan d\'action',
        items: [
          "Construire votre bibliothèque de prompts Mistral assistanat partagée",
          "Définir les règles d'usage, les garde-fous qualité et la politique de confidentialité",
          "Identifier les 3 cas d'usage prioritaires qui génèrent le plus de gains en semaine 1",
          "Plan d'action 30 jours : intégration dans vos rituels et votre organisation",
        ],
      },
    ],
    faq: [
      { q: "Mistral convient-il aux documents formels que je prépare pour la direction ?", a: "Oui, et c'est même l'un de ses points forts. La qualité du français produit par Mistral, notamment sur les registres soutenus et institutionnels, est particulièrement adaptée aux documents de direction. Combinée à la souveraineté européenne des données, c'est un choix cohérent pour ce type de production." },
    ],
    relatedSpokes: ['formation-chatgpt-assistante', 'formation-claude-assistante', 'formation-copilot-assistante'],
  },

  // ══ SEO ══════════════════════════════════════════════════════════════════

  // ── ChatGPT × SEO ────────────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-seo',
    tool: 'ChatGPT', toolSlug: 'chatgpt', toolColor: '#10a37f', toolColorLight: '#d1fae5',
    metier: 'SEO', metierSlug: 'seo', hubSlug: 'formation-chatgpt', priority: false,
    metaTitle: 'Formation ChatGPT SEO | Masteria',
    metaDesc: 'Formation ChatGPT pour les équipes SEO. Rédaction de contenus optimisés, recherche sémantique, balises méta. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les équipes SEO',
    intro: "ChatGPT est devenu incontournable pour les équipes SEO qui doivent produire des volumes de contenu optimisé. Rédaction de briefs, création de contenus longs, génération de balises méta, recherche sémantique, maillage interne : cette formation vous donne les techniques pour multiplier votre production sans sacrifier la pertinence.",
    useCases: [
      { icon: '✍️', title: 'Contenus longs optimisés', desc: 'Articles, guides, pages piliers de 1 000 à 5 000 mots avec la bonne densité sémantique.' },
      { icon: '🔍', title: 'Recherche de mots-clés', desc: 'Exploration sémantique, identification d\'intentions de recherche et de clusters thématiques.' },
      { icon: '🏷️', title: 'Balises méta & titres', desc: 'Title, description, H1-H2 générés et optimisés pour des dizaines de pages en quelques minutes.' },
      { icon: '🔗', title: 'Maillage interne', desc: 'Stratégie de liens internes et textes d\'ancrage adaptés à votre architecture de site.' },
      { icon: '📋', title: 'Briefs SEO éditoriaux', desc: 'Briefs complets pour vos rédacteurs : angle, mots-clés, structure, ton, longueur cible.' },
      { icon: '📊', title: 'Analyse de la SERP', desc: 'Synthétisez les contenus des 10 premiers résultats pour trouver l\'angle différenciant.' },
    ],
    program: [
      { title: 'Matin, Stratégie de contenu SEO avec ChatGPT', items: ['Comprendre l\'intention de recherche avec ChatGPT', 'Recherche de mots-clés et clusters sémantiques', 'Rédiger des briefs SEO complets et actionnables', 'Structure et architecture de contenu optimisée'] },
      { title: 'Après-midi, Production et optimisation', items: ['Rédiger des contenus longs SEO de qualité', 'Générer des balises méta pour des lots de pages', 'Optimiser des contenus existants avec ChatGPT', 'Construire une stratégie de maillage interne'] },
    ],
    faq: [{ q: 'Le contenu généré par ChatGPT est-il pénalisé par Google ?', a: 'Google pénalise les contenus créés uniquement pour manipuler son classement, pas l\'IA en soi. Un contenu utile, original et bien structuré, même aidé par l\'IA, peut très bien se classer. La formation insiste sur la supervision humaine : ChatGPT accélère, vous validez et enrichissez.' }],
    relatedSpokes: ['formation-copilot-seo', 'formation-gemini-seo', 'formation-claude-seo'],
  },

  // ── Copilot × SEO ────────────────────────────────────────────────────────
  {
    slug: 'formation-copilot-seo',
    tool: 'Microsoft Copilot', toolSlug: 'copilot', toolColor: '#0078d4', toolColorLight: '#dbeafe',
    metier: 'SEO', metierSlug: 'seo', hubSlug: 'formation-microsoft-copilot', priority: false,
    metaTitle: 'Formation Copilot SEO | Masteria',
    metaDesc: 'Formation Copilot pour les équipes SEO. Rédaction dans Word, analyse dans Excel, reporting SEO. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Microsoft Copilot pour les équipes SEO',
    intro: "Pour les équipes SEO sur Microsoft 365, Copilot s'intègre dans Word pour la rédaction de contenus, dans Excel pour l'analyse de données SEO et dans Outlook pour la coordination éditoriale. Produisez vos contenus directement dans vos outils habituels, sans jongler entre applications.",
    useCases: [
      { icon: '✍️', title: 'Rédaction dans Word', desc: 'Articles, landing pages et contenus optimisés directement dans Word avec Copilot.' },
      { icon: '📊', title: 'Analyse SEO dans Excel', desc: 'Analyser des exports Search Console, Semrush ou Ahrefs dans Excel avec Copilot.' },
      { icon: '📋', title: 'Briefs éditoriaux', desc: 'Briefs SEO complets rédigés dans Word pour vos équipes de rédaction.' },
      { icon: '🏷️', title: 'Lots de balises méta', desc: 'Générez des balises méta pour des listes de pages directement dans Excel.' },
      { icon: '📧', title: 'Coordination éditoriale', desc: 'Emails de coordination avec les rédacteurs et plannings éditoriaux dans Outlook.' },
      { icon: '📑', title: 'Rapports SEO', desc: 'Rédigez vos rapports SEO mensuels depuis vos données Excel directement dans Word.' },
    ],
    program: [
      { title: 'Matin, Rédaction SEO avec Copilot dans Word', items: ['Copilot dans Word : rédiger des contenus SEO optimisés', 'Structurer les articles avec les bons H2/H3 et la densité cible', 'Optimiser des contenus existants avec Copilot', 'Générer des variations et reformulations de contenus'] },
      { title: 'Après-midi, Analyse et reporting SEO dans Excel', items: ['Copilot dans Excel : analyser des exports d\'outils SEO', 'Identifier les opportunités de mots-clés depuis vos données', 'Reporting SEO : de l\'analyse brute au rapport synthétique', 'Coordination éditoriale avec Copilot dans Outlook'] },
    ],
    faq: [{ q: 'Copilot peut-il lire mes exports Semrush ou Google Search Console ?', a: 'Oui, Copilot dans Excel peut analyser vos fichiers CSV/Excel exportés de Semrush, Ahrefs ou Search Console. Il vous aide à interpréter les données en langage naturel et à identifier les priorités d\'action.' }],
    relatedSpokes: ['formation-chatgpt-seo', 'formation-gemini-seo', 'formation-claude-seo'],
  },

  // ── Gemini × SEO ─────────────────────────────────────────────────────────
  {
    slug: 'formation-gemini-seo',
    tool: 'Google Gemini', toolSlug: 'gemini', toolColor: '#ea4335', toolColorLight: '#fee2e2',
    metier: 'SEO', metierSlug: 'seo', hubSlug: 'formation-gemini-entreprise', priority: false,
    metaTitle: 'Formation Gemini SEO | Masteria',
    metaDesc: 'Formation Gemini pour les équipes SEO. Rédaction dans Docs, analyse dans Sheets, données Search Console. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Google Gemini pour les équipes SEO',
    intro: "Gemini est l'outil SEO naturel des équipes Google Workspace : il accède aux données Google Search Console, s'intègre dans Docs pour la rédaction et dans Sheets pour l'analyse. Sa connexion native à la recherche Google en fait un outil idéal pour comprendre l'intention de recherche en temps réel.",
    useCases: [
      { icon: '✍️', title: 'Rédaction dans Google Docs', desc: 'Contenus SEO optimisés directement dans Docs avec accès web temps réel.' },
      { icon: '🔍', title: 'Intention de recherche', desc: 'Gemini accède au web pour analyser les résultats de recherche actuels.' },
      { icon: '📊', title: 'Analyse dans Sheets', desc: 'Analyse de données Search Console et exports d\'outils SEO dans Sheets.' },
      { icon: '🏷️', title: 'Balises méta en masse', desc: 'Génération de balises pour des listes de pages dans Google Sheets.' },
      { icon: '📋', title: 'Briefs éditoriaux dans Docs', desc: 'Briefs SEO complets pour vos rédacteurs directement dans Google Docs.' },
      { icon: '📑', title: 'Rapports SEO', desc: 'Rapports mensuels en combinant Sheets pour les données et Docs pour la synthèse.' },
    ],
    program: [
      { title: 'Matin, Stratégie et rédaction SEO avec Gemini', items: ['Gemini et l\'accès temps réel au web : avantage pour le SEO', 'Analyser l\'intention de recherche et la SERP avec Gemini', 'Rédiger des contenus SEO dans Google Docs', 'Générer des briefs éditoriaux complets'] },
      { title: 'Après-midi, Analyse et optimisation dans Google Workspace', items: ['Sheets : analyser des données Search Console et SEO', 'Génération de balises méta pour des catalogues de pages', 'Optimiser des contenus existants stockés dans Drive', 'Automatiser le reporting SEO mensuel'] },
    ],
    faq: [{ q: 'Gemini a-t-il accès aux données de Google Search Console ?', a: 'Gemini peut analyser les fichiers que vous exportez de Search Console et importez dans Sheets. Des connecteurs directs sont en cours de développement chez Google. La formation vous enseigne les meilleures pratiques pour intégrer vos données SEO dans l\'écosystème Gemini.' }],
    relatedSpokes: ['formation-chatgpt-seo', 'formation-copilot-seo', 'formation-claude-seo'],
  },

  // ── Claude × SEO ─────────────────────────────────────────────────────────
  {
    slug: 'formation-claude-seo',
    tool: 'Claude (Anthropic)', toolSlug: 'claude', toolColor: '#d97706', toolColorLight: '#fef3c7',
    metier: 'SEO', metierSlug: 'seo', hubSlug: 'formation-claude-ia', priority: false,
    metaTitle: 'Formation Claude SEO | Masteria',
    metaDesc: 'Formation Claude Anthropic pour les équipes SEO : contenus longs premium, analyse sémantique, stratégie de contenu. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Claude pour les équipes SEO',
    intro: "Pour les équipes SEO qui misent sur des contenus longs et approfondis, Claude est l'outil de référence. Sa capacité à produire des guides de 3 000 à 10 000 mots sans perte de cohérence, à analyser des corpus de contenus concurrents et à structurer des stratégies éditoriales complexes en fait un allié pour le SEO de qualité.",
    useCases: [
      { icon: '✍️', title: 'Contenus longs premium', desc: 'Guides complets, études, comparatifs de 3 000 à 10 000 mots sans décrochage de qualité.' },
      { icon: '🔍', title: 'Analyse sémantique profonde', desc: 'Identifiez les thèmes, sous-thèmes et angles à couvrir pour dominer un sujet.' },
      { icon: '📋', title: 'Stratégie de cocon sémantique', desc: 'Construisez l\'architecture complète de vos cocons avec les angles de chaque page.' },
      { icon: '🏷️', title: 'Optimisation de contenus existants', desc: 'Analysez et améliorez vos contenus actuels pour les pages qui sous-performent.' },
      { icon: '📊', title: 'Analyse concurrentielle', desc: 'Synthétisez les contenus des concurrents et identifiez les angles à exploiter.' },
      { icon: '🎯', title: 'E-E-A-T et autorité', desc: 'Structurez vos contenus pour démontrer expertise, autorité et fiabilité selon Google.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Rédaction SEO longue avec Claude', items: ['Pourquoi Claude excelle pour les contenus SEO longs', 'Structurer un guide complet : plan, sous-titres, FAQ intégrée', 'Maintenir la qualité sur des documents de 5 000+ mots', 'Intégrer le balisage sémantique et le vocabulaire du sujet'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables SEO', items: ['Atelier : produire un brief SEO complet et un article pilier de 1 500+ mots', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : densité keyword, maillage, structure Hn', 'Premiers prompts Claude SEO réutilisables par l\'équipe éditoriale'] },
      { title: 'Jour 2 · Matin, Stratégie de contenu et analyse', items: ['Construire un cocon sémantique complet avec Claude', 'Analyser les contenus concurrents pour trouver les angles manquants', 'Optimiser les pages existantes : audit et réécriture ciblée', 'E-E-A-T : structurer vos contenus pour gagner en autorité'] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Claude SEO partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi'] },
    ],
    faq: [{ q: 'Claude est-il meilleur que ChatGPT pour les contenus SEO longs ?', a: 'Pour les contenus de 3 000 mots et plus, Claude maintient mieux la cohérence, évite les répétitions et conserve le fil narratif. ChatGPT est préférable pour les contenus courts et créatifs. La formation vous apprend à choisir l\'outil selon la longueur et le type de contenu.' }],
    relatedSpokes: ['formation-chatgpt-seo', 'formation-copilot-seo', 'formation-gemini-seo'],
  },

  // ── Mistral × SEO ────────────────────────────────────────────────────────
  {
    slug: 'formation-mistral-seo',
    tool: 'Mistral AI', toolSlug: 'mistral', toolColor: '#fa500a', toolColorLight: '#fed7aa',
    metier: 'SEO', metierSlug: 'seo', hubSlug: 'formation-mistral-ai', priority: false,
    metaTitle: 'Formation Mistral SEO | Masteria',
    metaDesc: "Formation Mistral AI pour les équipes SEO. Rédaction française native, champs lexicaux, maillage. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes SEO',
    intro: "Pour les équipes SEO qui produisent des contenus en français et ciblent des requêtes francophones, Mistral AI offre un avantage distinctif : la qualité naturelle du français produit, les champs lexicaux authentiquement hexagonaux et une meilleure adaptation aux intentions de recherche des internautes français.",
    useCases: [
      { icon: '✍️', title: 'Contenus SEO français natifs', desc: 'Articles, guides et pages piliers avec un français qui sonne naturellement hexagonal.' },
      { icon: '🔍', title: 'Champs lexicaux français', desc: 'Vocabulaire et tournures correspondant réellement à ce que tapent vos cibles françaises.' },
      { icon: '🏷️', title: 'Balises méta & titres', desc: 'Title, description et H1 optimisés pour les SERP françaises.' },
      { icon: '🔗', title: 'Maillage interne', desc: 'Stratégie de liens internes et ancres adaptées à votre architecture.' },
      { icon: '📋', title: 'Briefs SEO', desc: 'Briefs éditoriaux complets pour vos rédacteurs français.' },
      { icon: '📊', title: 'Analyse de SERP FR', desc: 'Synthèses des concurrents sur les SERP françaises pour trouver l\'angle différenciant.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Stratégie de contenu SEO français avec Mistral', items: ['Comprendre les avantages de Mistral sur les requêtes francophones', "Recherche de mots-clés et intentions de recherche en français", 'Rédiger des briefs SEO complets et actionnables', 'Architecture de contenu et cocons sémantiques'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables SEO', items: ['Atelier : produire un brief SEO complet et un article pilier de 1 500+ mots en français hexagonal', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : densité keyword, maillage, structure Hn, tournures calquées', 'Premiers prompts Mistral SEO réutilisables par l\'équipe éditoriale'] },
      { title: 'Jour 2 · Matin, Production et optimisation', items: ['Rédaction de contenus longs SEO en français soigné', 'Balises méta pour des lots de pages', 'Optimisation de contenus existants avec Mistral', 'Stratégie de maillage interne'] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Mistral SEO partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi'] },
    ],
    faq: [{ q: "Mistral a-t-il vraiment un avantage SEO sur les marchés francophones ?", a: "Sur les requêtes francophones, Mistral produit des contenus avec des tournures et un vocabulaire plus naturellement français. Pour le SEO local France, Belgique francophone, Suisse romande et Québec, c'est un vrai atout. La formation vous montre comment évaluer l'écart qualitatif sur vos propres requêtes." }],
    relatedSpokes: ['formation-chatgpt-seo', 'formation-copilot-seo', 'formation-gemini-seo'],
  },

  // ══ SERVICE CLIENT ════════════════════════════════════════════════════════

  // ── ChatGPT × Service Client ─────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-service-client',
    tool: 'ChatGPT', toolSlug: 'chatgpt', toolColor: '#10a37f', toolColorLight: '#d1fae5',
    metier: 'Service Client', metierSlug: 'service-client', hubSlug: 'formation-chatgpt', priority: false,
    metaTitle: 'Formation ChatGPT Service Client | Masteria',
    metaDesc: 'Formation ChatGPT pour les équipes service client. Réponses aux tickets, scripts agents, gestion des escalades. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les équipes Service Client',
    intro: "Les équipes service client traitent des centaines de demandes similaires chaque jour. ChatGPT permet de répondre plus vite, avec plus de cohérence et un meilleur niveau de qualité, tout en libérant les agents pour les cas complexes et les interactions à forte valeur relationnelle.",
    useCases: [
      { icon: '💬', title: 'Réponses aux tickets', desc: 'Rédigez des réponses personnalisées à partir de modèles en quelques secondes.' },
      { icon: '📋', title: 'Scripts d\'agents', desc: 'Créez et améliorez les scripts pour les canaux voix, chat et email.' },
      { icon: '🔄', title: 'Gestion des réclamations', desc: 'Répondre avec empathie et efficacité aux réclamations difficiles.' },
      { icon: '📚', title: 'Base de connaissances', desc: 'Alimentez et enrichissez votre FAQ et base de connaissances agents.' },
      { icon: '📊', title: 'Analyse des verbatims', desc: 'Synthétisez les retours clients et identifiez les motifs de contact récurrents.' },
      { icon: '🎯', title: 'Formation interne agents', desc: 'Créez des supports de formation et des jeux de rôle pour onboarder les nouveaux agents.' },
    ],
    program: [
      { title: 'Matin, Réponses et scripts avec ChatGPT', items: ['Créer une bibliothèque de réponses types personnalisables', 'Adapter le ton selon le canal et le profil client', 'Rédiger des scripts d\'agents pour les cas courants', 'Gérer les réclamations et situations émotionnelles avec ChatGPT'] },
      { title: 'Après-midi, Analyse et amélioration continue', items: ['Analyser des verbatims et identifier les tendances', 'Alimenter et enrichir la base de connaissances', 'Créer des supports de formation pour les équipes', 'Gouvernance : définir les bons usages IA en service client'] },
    ],
    faq: [{ q: 'ChatGPT peut-il répondre directement aux clients à notre place ?', a: 'Non, et la formation insiste sur ce point. ChatGPT est un outil d\'aide à la rédaction pour les agents, pas un chatbot autonome. Chaque réponse doit être relue et validée par un agent avant envoi. L\'objectif est d\'accélérer les agents, pas de les remplacer.' }],
    relatedSpokes: ['formation-copilot-service-client', 'formation-gemini-service-client', 'formation-claude-service-client'],
  },

  // ── Copilot × Service Client ─────────────────────────────────────────────
  {
    slug: 'formation-copilot-service-client',
    tool: 'Microsoft Copilot', toolSlug: 'copilot', toolColor: '#0078d4', toolColorLight: '#dbeafe',
    metier: 'Service Client', metierSlug: 'service-client', hubSlug: 'formation-microsoft-copilot', priority: false,
    metaTitle: 'Formation Copilot Service Client | Masteria',
    metaDesc: 'Formation Copilot pour les équipes service client. Réponses Outlook, synthèse Teams, documentation Word. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Microsoft Copilot pour les équipes Service Client',
    intro: "Les équipes service client sur Microsoft 365 peuvent utiliser Copilot pour accélérer leur traitement des demandes dans Outlook, synthétiser les échanges Teams avec les clients et documenter les solutions dans OneNote et Word, directement depuis leurs outils quotidiens.",
    useCases: [
      { icon: '📧', title: 'Réponses clients dans Outlook', desc: 'Rédigez des réponses personnalisées aux tickets emails directement dans Outlook.' },
      { icon: '👥', title: 'Synthèse d\'appels Teams', desc: 'Comptes-rendus automatiques de vos appels clients avec les actions à suivre.' },
      { icon: '📋', title: 'Documentation dans Word', desc: 'Procédures, scripts et bases de connaissances agents rédigés dans Word.' },
      { icon: '📊', title: 'Analyse dans Excel', desc: 'Analysez vos KPIs service client et identifiez les motifs de contact récurrents.' },
      { icon: '📝', title: 'Notes dans OneNote', desc: 'Prise de notes et résumés d\'interactions clients dans OneNote.' },
      { icon: '🔄', title: 'Rapports de service', desc: 'Rapports d\'activité hebdomadaires et mensuels du service client.' },
    ],
    program: [
      { title: 'Matin, Traitement des demandes avec Copilot', items: ['Copilot dans Outlook : répondre aux emails clients plus rapidement', 'Adapter le ton de réponse selon le canal et le motif', 'Copilot dans Teams : synthétiser les appels et réunions clients', 'Créer des modèles de réponses dans Outlook'] },
      { title: 'Après-midi, Documentation et analyse', items: ['Word : créer et mettre à jour les procédures et scripts agents', 'Excel : analyser les KPIs et tendances du service client', 'OneNote : organisation des notes d\'interaction', 'Reporting service client avec Copilot'] },
    ],
    faq: [{ q: 'Copilot peut-il lire l\'historique de nos échanges Teams avec les clients ?', a: 'Oui, Copilot peut accéder aux conversations Teams auxquelles vous participez et en faire des synthèses. C\'est particulièrement utile pour les comptes-rendus d\'appels clients et le suivi des engagements pris.' }],
    relatedSpokes: ['formation-chatgpt-service-client', 'formation-gemini-service-client', 'formation-claude-service-client'],
  },

  // ── Gemini × Service Client ──────────────────────────────────────────────
  {
    slug: 'formation-gemini-service-client',
    tool: 'Google Gemini', toolSlug: 'gemini', toolColor: '#ea4335', toolColorLight: '#fee2e2',
    metier: 'Service Client', metierSlug: 'service-client', hubSlug: 'formation-gemini-entreprise', priority: false,
    metaTitle: 'Formation Gemini Service Client | Masteria',
    metaDesc: 'Formation Gemini pour les équipes service client. Réponses Gmail, synthèse Meet, documentation Docs. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Google Gemini pour les équipes Service Client',
    intro: "Les équipes service client sur Google Workspace utilisent Gmail, Meet et Docs au quotidien. Gemini s'intègre dans ces outils pour accélérer les réponses, synthétiser les appels et documenter les procédures, sans quitter l'environnement Google.",
    useCases: [
      { icon: '📧', title: 'Réponses dans Gmail', desc: 'Rédigez des réponses aux tickets clients directement dans Gmail avec Gemini.' },
      { icon: '👥', title: 'Synthèse d\'appels Meet', desc: 'Résumés automatiques de vos appels clients Google Meet avec les actions.' },
      { icon: '📋', title: 'Documentation dans Docs', desc: 'Procédures agents, scripts et FAQ rédigés dans Google Docs.' },
      { icon: '📊', title: 'Analyse dans Sheets', desc: 'KPIs, volumes de contacts et motifs d\'appel analysés dans Sheets.' },
      { icon: '📑', title: 'Rapports d\'activité', desc: 'Rapports de service client dans Docs à partir des données Sheets.' },
      { icon: '🔍', title: 'Recherche de solutions', desc: 'Gemini accède au web pour trouver des solutions aux problèmes complexes.' },
    ],
    program: [
      { title: 'Matin, Gestion des demandes avec Gemini', items: ['Gemini dans Gmail : répondre aux demandes clients efficacement', 'Gérer le ton selon le motif : réclamation, info, demande technique', 'Gemini dans Meet : synthèse d\'appels et suivi des engagements', 'Créer des modèles de réponses dans Gmail'] },
      { title: 'Après-midi, Documentation et amélioration continue', items: ['Gemini dans Docs : créer et maintenir la base de connaissances', 'Sheets : analyser les volumes et motifs de contact', 'Rapports service client dans Google Workspace', 'Intégrer Gemini dans le workflow quotidien du service'] },
    ],
    faq: [{ q: 'Gemini peut-il synthétiser des échanges Gmail anciens avec un client ?', a: 'Oui, Gemini for Workspace peut accéder à votre historique Gmail et en faire des synthèses. C\'est très utile pour préparer un rappel client ou retrouver rapidement le contexte d\'un dossier complexe.' }],
    relatedSpokes: ['formation-chatgpt-service-client', 'formation-copilot-service-client', 'formation-claude-service-client'],
  },

  // ── Claude × Service Client ──────────────────────────────────────────────
  {
    slug: 'formation-claude-service-client',
    tool: 'Claude (Anthropic)', toolSlug: 'claude', toolColor: '#d97706', toolColorLight: '#fef3c7',
    metier: 'Service Client', metierSlug: 'service-client', hubSlug: 'formation-claude-ia', priority: false,
    metaTitle: 'Formation Claude Service Client | Masteria',
    metaDesc: 'Formation Claude Anthropic pour le service client. Réponses nuancées, gestion des escalades, analyse verbatims. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Claude pour les équipes Service Client',
    intro: "Claude se distingue dans le service client par la qualité émotionnelle de ses réponses : il gère les situations difficiles avec plus de nuance, adapte son ton avec précision et produit des réponses qui ressemblent moins à des gabarits. Pour les équipes qui gèrent des réclamations sensibles ou des clients exigeants, Claude est l'outil de choix.",
    useCases: [
      { icon: '💬', title: 'Réclamations difficiles', desc: 'Réponses empathiques et constructives pour les situations clients tendues.' },
      { icon: '🎯', title: 'Personnalisation fine', desc: 'Adapter précisément le ton, le registre et le contenu à chaque profil client.' },
      { icon: '📋', title: 'Scripts nuancés', desc: 'Scripts d\'agents qui sonnent naturels et non comme des réponses automatiques.' },
      { icon: '📊', title: 'Analyse de verbatims', desc: 'Analyser de grands volumes d\'avis clients et identifier les thèmes récurrents.' },
      { icon: '📚', title: 'Base de connaissances', desc: 'Rédiger des articles de knowledge base complets et bien structurés.' },
      { icon: '🔄', title: 'Gestion des escalades', desc: 'Préparer les éléments clés pour les escalades : résumé, historique, proposition.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Réponses de qualité avec Claude', items: ['Pourquoi Claude est adapté aux interactions client sensibles', 'Gérer les réclamations et l\'insatisfaction avec empathie', 'Adapter le ton avec précision : de l\'informel au formel', 'Créer des scripts qui sonnent naturels et humains'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables service client', items: ['Atelier : rédiger des réponses types à 5 tickets clients complexes fournis par le formateur', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : ton trop formel, manque d\'empathie, formulations passives', 'Premiers prompts Claude service client réutilisables par l\'équipe'] },
      { title: 'Jour 2 · Matin, Analyse et documentation', items: ['Analyser des verbatims clients avec Claude', 'Identifier les motifs de contact et les irritants récurrents', 'Rédiger des articles de base de connaissances complets', 'Préparer et documenter les escalades complexes'] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Claude service client partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi'] },
    ],
    faq: [{ q: 'Claude est-il vraiment meilleur que ChatGPT pour les réclamations ?', a: 'Claude tend à produire des réponses plus nuancées sur les sujets émotionnels et à mieux calibrer le registre de politesse selon le contexte. ChatGPT est très efficace pour les cas standards. La formation vous apprend à utiliser chacun selon le type d\'interaction.' }],
    relatedSpokes: ['formation-chatgpt-service-client', 'formation-copilot-service-client', 'formation-gemini-service-client'],
  },

  // ── Mistral × Service Client ─────────────────────────────────────────────
  {
    slug: 'formation-mistral-service-client',
    tool: 'Mistral AI', toolSlug: 'mistral', toolColor: '#fa500a', toolColorLight: '#fed7aa',
    metier: 'Service Client', metierSlug: 'service-client', hubSlug: 'formation-mistral-ai', priority: false,
    metaTitle: 'Formation Mistral Service Client | Masteria',
    metaDesc: "Formation Mistral AI pour les équipes service client. Réponses en français natif, scripts, souveraineté. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Service Client',
    intro: "Pour les équipes service client qui interagissent en français avec des clients français, Mistral AI produit des réponses qui sonnent humaines et naturelles, là où les modèles américains peuvent parfois trahir leur origine par des tournures calquées. Combinée à la souveraineté européenne des données clients, c'est le choix pertinent pour les services clients français.",
    useCases: [
      { icon: '💬', title: 'Réponses aux tickets', desc: 'Réponses en français naturel, loin du style traduit ou robotique.' },
      { icon: '📋', title: 'Scripts d\'agents', desc: 'Scripts voix, chat et email qui conservent un ton humain et français.' },
      { icon: '🔄', title: 'Réclamations', desc: 'Réponses empathiques calibrées pour la culture client française.' },
      { icon: '📚', title: 'Base de connaissances', desc: 'FAQ et knowledge base rédigés en français accessible et précis.' },
      { icon: '📊', title: 'Analyse des verbatims', desc: 'Synthèse des retours clients français et identification des motifs récurrents.' },
      { icon: '🔒', title: 'Données clients en UE', desc: 'Traitement des interactions sur une infrastructure européenne.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Réponses et scripts avec Mistral', items: ['Bibliothèque de réponses types personnalisables en français naturel', 'Adapter le ton selon le canal et le profil client', "Scripts d'agents pour les cas courants", 'Gérer les réclamations et situations émotionnelles'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables service client', items: ['Atelier : rédiger des réponses types à 5 tickets clients complexes fournis par le formateur', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : ton trop formel, manque d\'empathie, tournures robotiques', 'Premiers prompts Mistral service client réutilisables par l\'équipe'] },
      { title: 'Jour 2 · Matin, Analyse et amélioration continue', items: ['Analyse de verbatims et tendances du service', 'Enrichissement de la base de connaissances', 'Supports de formation pour les nouveaux agents', 'Confidentialité des données clients : bonnes pratiques'] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Mistral service client partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans les rituels et KPI de suivi'] },
    ],
    faq: [{ q: "Mistral est-il adapté à une hotline client française ?", a: "Oui, et c'est même un cas d'usage où Mistral se distingue. La qualité du français et la cohérence culturelle apportent un vrai plus dans les interactions clients francophones. La formation présente aussi les limites : toute réponse générée doit être relue par un agent avant envoi." }],
    relatedSpokes: ['formation-chatgpt-service-client', 'formation-copilot-service-client', 'formation-claude-service-client'],
  },

  // ══ INFORMATIQUE / DSI ════════════════════════════════════════════════════

  // ── ChatGPT × Informatique ───────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-informatique',
    tool: 'ChatGPT', toolSlug: 'chatgpt', toolColor: '#10a37f', toolColorLight: '#d1fae5',
    metier: 'Informatique / DSI', metierSlug: 'informatique', hubSlug: 'formation-chatgpt', priority: false,
    metaTitle: 'Formation ChatGPT IT & DSI | Masteria',
    metaDesc: 'Formation ChatGPT pour les équipes informatiques. Génération de code, documentation technique, analyse de logs. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les équipes Informatique / DSI',
    intro: "Les équipes IT sont en première ligne des enjeux IA : utilisateurs eux-mêmes, mais aussi garants du déploiement sécurisé pour toute l'entreprise. Cette formation couvre les usages pratiques de ChatGPT (code, documentation, analyse) et le cadrage stratégique que la DSI doit maîtriser.",
    useCases: [
      { icon: '💻', title: 'Génération de code', desc: 'Générez, déboguez et refactorisez du code dans les langages courants.' },
      { icon: '📄', title: 'Documentation technique', desc: 'Spécifications, commentaires de code, wikis techniques rédigés en minutes.' },
      { icon: '🔍', title: 'Analyse de logs', desc: 'Analysez des logs d\'erreur et identifiez les causes racines plus rapidement.' },
      { icon: '📋', title: 'Cahiers des charges', desc: 'CDC fonctionnels et techniques à partir de vos spécifications métier.' },
      { icon: '🛡️', title: 'Gouvernance IA', desc: 'Définissez la politique d\'usage IA de votre entreprise avec ChatGPT.' },
      { icon: '🔄', title: 'Scripts d\'automatisation', desc: 'Scripts Python, PowerShell, Bash pour automatiser vos tâches répétitives.' },
    ],
    program: [
      { title: 'Matin, ChatGPT pour le développement et la documentation', items: ['Générer et déboguer du code : Python, SQL, JavaScript, PowerShell', 'Expliquer, commenter et documenter du code existant', 'Rédiger des spécifications techniques et fonctionnelles', 'Analyser des logs et messages d\'erreur avec ChatGPT'] },
      { title: 'Après-midi, Gouvernance et déploiement IA', items: ['Évaluer les risques de sécurité de l\'usage IA en entreprise', 'Définir une politique d\'usage IA et des guidelines internes', 'Accompagner la transformation IA des équipes métier', 'Choisir les bons outils IA selon les cas d\'usage et la sécurité'] },
    ],
    faq: [{ q: 'Le code généré par ChatGPT est-il fiable ?', a: 'ChatGPT est un assistant de développement, pas un développeur autonome. Le code généré doit toujours être relu, testé et validé. La formation insiste sur les bonnes pratiques : review systématique, tests, et compréhension du code avant intégration.' }],
    relatedSpokes: ['formation-vibe-coding', 'formation-claude-code', 'formation-claude-informatique'],
  },

  // ── Copilot × Informatique ───────────────────────────────────────────────
  {
    slug: 'formation-copilot-informatique',
    tool: 'Microsoft Copilot', toolSlug: 'copilot', toolColor: '#0078d4', toolColorLight: '#dbeafe',
    metier: 'Informatique / DSI', metierSlug: 'informatique', hubSlug: 'formation-microsoft-copilot', priority: false,
    metaTitle: 'Formation Copilot IT & DSI | Masteria',
    metaDesc: 'Formation Copilot pour les DSI. Documentation Word, analyse Excel, pilotage de projets IT. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Microsoft Copilot pour les équipes Informatique / DSI',
    intro: "Pour les DSI déployant Microsoft 365, Copilot est à la fois un outil à maîtriser et à déployer. Cette formation traite les deux angles : les usages pratiques de Copilot pour les équipes IT (documentation, reporting, analyse) et les enjeux de gouvernance, sécurité et déploiement à l'échelle de l'organisation.",
    useCases: [
      { icon: '📄', title: 'Documentation dans Word', desc: 'Spécifications, procédures, guides d\'utilisation rédigés dans Word.' },
      { icon: '📊', title: 'Reporting IT dans Excel', desc: 'Tableaux de bord de parc informatique, KPIs IT, analyses de coûts.' },
      { icon: '👥', title: 'Réunions de projet dans Teams', desc: 'Synthèses automatiques de réunions de projet et suivi des actions.' },
      { icon: '📧', title: 'Communication IT dans Outlook', desc: 'Emails techniques, communications de maintenance et notes d\'information.' },
      { icon: '🛡️', title: 'Politique de sécurité', desc: 'Rédaction des politiques de sécurité et gouvernance IA dans Word.' },
      { icon: '📋', title: 'Cahiers des charges', desc: 'CDC et spécifications de projets informatiques dans Word.' },
    ],
    program: [
      { title: 'Matin, Usages Copilot pour les équipes IT', items: ['Copilot pour la documentation technique : Word et SharePoint', 'Reporting IT et tableaux de bord dans Excel avec Copilot', 'Gestion de projet IT : réunions Teams et suivi des actions', 'Communication interne IT : Outlook et newsletters'] },
      { title: 'Après-midi, Déploiement et gouvernance Copilot', items: ['Architecture de déploiement Copilot dans Microsoft 365', 'Sécurité et protection des données sensibles avec Copilot', 'Définir les politiques d\'usage pour les utilisateurs', 'Formation et change management pour les équipes métier'] },
    ],
    faq: [{ q: 'Comment la DSI peut-elle contrôler l\'usage de Copilot par les équipes ?', a: 'Microsoft 365 offre des outils de gouvernance granulaires : licences par utilisateur, politiques de données sensitives (Microsoft Purview), journalisation des usages. La formation couvre ces aspects pour les administrateurs et les DSI.' }],
    relatedSpokes: ['formation-chatgpt-informatique', 'formation-gemini-informatique', 'formation-claude-informatique'],
  },

  // ── Gemini × Informatique ────────────────────────────────────────────────
  {
    slug: 'formation-gemini-informatique',
    tool: 'Google Gemini', toolSlug: 'gemini', toolColor: '#ea4335', toolColorLight: '#fee2e2',
    metier: 'Informatique / DSI', metierSlug: 'informatique', hubSlug: 'formation-gemini-entreprise', priority: false,
    metaTitle: 'Formation Gemini IT & DSI | Masteria',
    metaDesc: 'Formation Gemini pour les DSI. Documentation Docs, scripts, pilotage de projets IT dans Google Workspace. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Google Gemini pour les équipes Informatique / DSI',
    intro: "Pour les organisations sur Google Workspace, Gemini est l'outil IA à déployer et à maîtriser. Cette formation couvre les usages pratiques pour les équipes IT (documentation, scripts, reporting dans Sheets) et les enjeux de gouvernance et de déploiement de Gemini à l'échelle de l'organisation.",
    useCases: [
      { icon: '📄', title: 'Documentation dans Docs', desc: 'Spécifications techniques, procédures et guides dans Google Docs.' },
      { icon: '💻', title: 'Scripts et automatisations', desc: 'Scripts Google Apps Script, Python et Bash avec l\'aide de Gemini.' },
      { icon: '📊', title: 'Reporting IT dans Sheets', desc: 'Tableaux de bord de parc, KPIs et analyses de données IT dans Sheets.' },
      { icon: '👥', title: 'Réunions de projet Meet', desc: 'Synthèses des réunions de projet et suivi des actions via Google Meet.' },
      { icon: '🛡️', title: 'Politique de sécurité', desc: 'Rédaction des politiques de sécurité et gouvernance IA dans Docs.' },
      { icon: '🔍', title: 'Veille technologique', desc: 'Gemini accède au web pour une veille technologique et sécurité en temps réel.' },
    ],
    program: [
      { title: 'Matin, Usages Gemini pour les équipes IT', items: ['Gemini dans Docs : documentation technique et spécifications', 'Sheets : reporting IT et analyse de données avec Gemini', 'Google Apps Script et automatisations avec l\'aide de Gemini', 'Meet : synthèse de réunions de projet et suivi d\'actions'] },
      { title: 'Après-midi, Déploiement et gouvernance Gemini', items: ['Architecture de déploiement Gemini for Google Workspace', 'Sécurité, protection des données et DLP dans Google Workspace', 'Définir les politiques d\'usage pour les collaborateurs', 'Change management et adoption : former les équipes métier'] },
    ],
    faq: [{ q: 'Comment la DSI contrôle-t-elle l\'accès à Gemini dans Google Workspace ?', a: 'Google Workspace Admin Console permet de contrôler l\'activation de Gemini par unité organisationnelle, de définir les politiques de données et de consulter les journaux d\'utilisation. La formation couvre ces fonctions d\'administration pour les DSI.' }],
    relatedSpokes: ['formation-chatgpt-informatique', 'formation-copilot-informatique', 'formation-claude-informatique'],
  },

  // ── Claude × Informatique ────────────────────────────────────────────────
  {
    slug: 'formation-claude-informatique',
    tool: 'Claude (Anthropic)', toolSlug: 'claude', toolColor: '#d97706', toolColorLight: '#fef3c7',
    metier: 'Informatique / DSI', metierSlug: 'informatique', hubSlug: 'formation-claude-ia', priority: false,
    metaTitle: 'Formation Claude IT & DSI | Masteria',
    metaDesc: 'Formation Claude Anthropic pour les DSI. Code complexe, architecture, documentation technique approfondie. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Claude pour les équipes Informatique / DSI',
    intro: "Claude est reconnu parmi les développeurs pour la qualité de son code et sa capacité à raisonner sur des architectures complexes. Pour les équipes IT qui traitent du code legacy, des architectures multi-couches ou de la documentation technique dense, Claude offre un niveau d'analyse et de génération supérieur.",
    useCases: [
      { icon: '💻', title: 'Code complexe et legacy', desc: 'Analyser, refactoriser et documenter du code complexe ou hérité.' },
      { icon: '🏗️', title: 'Architecture technique', desc: 'Discuter d\'architecture, comparer des approches et documenter les décisions.' },
      { icon: '📄', title: 'Documentation exhaustive', desc: 'Documentations techniques complètes, ADR, READMEs et wikis.' },
      { icon: '🔍', title: 'Review de code', desc: 'Analyse approfondie du code pour identifier les bugs, risques et améliorations.' },
      { icon: '📋', title: 'Spécifications longues', desc: 'Cahiers des charges et spécifications techniques de grande envergure.' },
      { icon: '🛡️', title: 'Audit de sécurité assisté', desc: 'Identification des vulnérabilités et revue de sécurité du code.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Développement et architecture avec Claude', items: ['Claude pour le code : forces vs ChatGPT, Copilot GitHub', 'Analyser et refactoriser du code legacy complexe', 'Raisonner sur l\'architecture : trade-offs et décisions techniques', 'Review de code approfondie et identification de vulnérabilités'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables IT', items: ['Atelier : analyser un incident réel et rédiger un rapport post-mortem structuré', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : manque de détails techniques, confidentialité du code', 'Premiers prompts Claude IT réutilisables par l\'équipe dev'] },
      { title: 'Jour 2 · Matin, Documentation et gouvernance', items: ['Rédiger des documentations techniques complètes et des ADR', 'Cahiers des charges et spécifications de projets complexes', 'Évaluation et comparaison d\'outils IA pour les équipes de développement', 'Intégrer Claude dans les workflows de développement (IDE, API)'] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Claude IT partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité du code', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans les workflows CI/CD et rituels de dev'] },
    ],
    faq: [{ q: 'Claude est-il meilleur que GitHub Copilot pour le développement ?', a: 'Ils sont complémentaires : GitHub Copilot s\'intègre dans l\'IDE pour l\'autocomplétion temps réel, Claude excelle pour les tâches de haut niveau (architecture, review, documentation longue, refactorisation de fichiers entiers). La formation vous apprend à combiner les deux dans votre workflow.' }],
    relatedSpokes: ['formation-vibe-coding', 'formation-claude-code', 'formation-chatgpt-informatique'],
  },

  // ── Mistral × Informatique ───────────────────────────────────────────────
  {
    slug: 'formation-mistral-informatique',
    tool: 'Mistral AI', toolSlug: 'mistral', toolColor: '#fa500a', toolColorLight: '#fed7aa',
    metier: 'Informatique / DSI', metierSlug: 'informatique', hubSlug: 'formation-mistral-ai', priority: false,
    metaTitle: 'Formation Mistral IT & DSI | Masteria',
    metaDesc: "Formation Mistral AI pour les DSI. Modèles open source, déploiement on-premise, API souveraine. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Informatique / DSI',
    intro: "Pour les DSI, Mistral AI présente un profil unique : modèles ouverts (Mistral 7B, Mixtral) disponibles en open source, options de déploiement on-premise, API souveraine hébergée en Europe. C'est la solution qui concilie puissance technique et conformité pour les organisations soumises à des exigences de sécurité et de souveraineté.",
    useCases: [
      { icon: '💻', title: 'Génération de code', desc: 'Assistant de développement avec les modèles Mistral (Codestral, Mistral Large).' },
      { icon: '📄', title: 'Documentation technique', desc: 'Spécifications, ADR, README et wikis rédigés en français soigné.' },
      { icon: '🏗️', title: 'Architecture et revue de code', desc: 'Analyse d\'architecture et review de code avec des modèles performants.' },
      { icon: '🛡️', title: 'Modèles open source', desc: 'Déployez des modèles Mistral sur vos propres serveurs pour un contrôle total.' },
      { icon: '⚙️', title: 'API et intégrations', desc: 'Intégrez Mistral dans vos outils internes via l\'API La Plateforme.' },
      { icon: '🔒', title: 'Souveraineté numérique', desc: 'Architecture IA conforme aux exigences françaises et européennes de souveraineté.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Développement et usages IT avec Mistral', items: ['Mistral AI pour l\'IT : Codestral, Mistral Large et les modèles ouverts', "Génération, review et documentation de code", "Analyse d'architecture et aide à la décision technique", "API La Plateforme : intégrer Mistral dans vos outils internes"] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables IT', items: ['Atelier : analyser un incident réel et rédiger un rapport post-mortem avec Codestral/Mistral Large', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : manque de détails techniques, confidentialité du code', 'Premiers prompts Mistral IT réutilisables par l\'équipe dev'] },
      { title: 'Jour 2 · Matin, Déploiement et gouvernance', items: ['Déploiement on-premise et cloud privé : cas d\'usage et modalités', "Modèles ouverts (Mistral 7B, Mixtral) : avantages et limites", "Sécurité, confidentialité et souveraineté numérique", "Politique d'usage IA pour les équipes métier"] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Mistral IT partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité du code', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans les workflows CI/CD et rituels de dev'] },
    ],
    faq: [{ q: "Peut-on vraiment déployer Mistral on-premise sur nos propres serveurs ?", a: "Oui, c'est un vrai différentiel de Mistral. Les modèles ouverts (Mistral 7B, Mixtral) peuvent être déployés sur votre infrastructure, et Mistral propose des licences commerciales pour ses modèles plus performants avec déploiement on-premise. La formation présente les options et les critères de choix selon vos contraintes." }],
    relatedSpokes: ['formation-chatgpt-informatique', 'formation-copilot-informatique', 'formation-claude-informatique'],
  },

  // ══ ÉQUIPES PÉDAGOGIQUES ══════════════════════════════════════════════════

  // ── ChatGPT × Pédagogique ────────────────────────────────────────────────
  {
    slug: 'formation-chatgpt-pedagogique',
    tool: 'ChatGPT', toolSlug: 'chatgpt', toolColor: '#10a37f', toolColorLight: '#d1fae5',
    metier: 'Équipes Pédagogiques', metierSlug: 'pedagogique', hubSlug: 'formation-chatgpt', priority: false,
    metaTitle: 'Formation ChatGPT Pédagogiques | Masteria',
    metaDesc: 'Formation ChatGPT pour formateurs et ingénieurs pédagogiques : conception de modules, évaluations, individualisation. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation ChatGPT pour les équipes Pédagogiques',
    intro: "Formateurs, responsables pédagogiques, ingénieurs de formation : l'IA transforme la conception et l'animation des parcours. ChatGPT permet de créer des modules de formation complets en quelques heures, de générer des évaluations pertinentes et d'individualiser les parcours selon les profils apprenants.",
    useCases: [
      { icon: '📚', title: 'Modules de formation', desc: 'Créez des modules complets avec objectifs, contenus, activités et évaluations.' },
      { icon: '✅', title: 'Évaluations et QCM', desc: 'Générez des questions variées et pertinentes sur n\'importe quel sujet.' },
      { icon: '🎯', title: 'Objectifs pédagogiques', desc: 'Formulez des objectifs selon Bloom et les référentiels de compétences.' },
      { icon: '📋', title: 'Supports de cours', desc: 'Présentations, fiches mémo, guides apprenants et cahiers d\'exercices.' },
      { icon: '👤', title: 'Personnalisation des parcours', desc: 'Adaptez les contenus et la progression selon le profil et le niveau apprenant.' },
      { icon: '🔄', title: 'Scénarisation pédagogique', desc: 'Construisez des scénarios d\'apprentissage actifs et engageants.' },
    ],
    program: [
      { title: 'Matin, Conception de formations avec ChatGPT', items: ['Créer des objectifs pédagogiques selon la taxonomie de Bloom', 'Structurer un module de formation complet avec ChatGPT', 'Générer des contenus : textes, exemples, cas pratiques, analogies', 'Créer des supports apprenants : fiches, guides, exercices'] },
      { title: 'Après-midi, Évaluations et individualisation', items: ['Générer des QCM, études de cas et situations problèmes', 'Adapter les contenus selon le niveau et le profil apprenant', 'Créer des parcours différenciés pour des audiences mixtes', 'Intégrer ChatGPT dans votre processus d\'ingénierie pédagogique'] },
    ],
    faq: [{ q: 'ChatGPT peut-il remplacer l\'ingénieur pédagogique ?', a: 'Non, et la formation le dit clairement. ChatGPT accélère la production et génère des brouillons, mais la valeur ajoutée de l\'ingénieur pédagogique reste entière : analyse des besoins, design du parcours, adaptation au contexte, validation pédagogique et animation. ChatGPT est un outil de productivité, pas de substitution.' }],
    relatedSpokes: ['formation-copilot-pedagogique', 'formation-gemini-pedagogique', 'formation-claude-pedagogique'],
  },

  // ── Copilot × Pédagogique ────────────────────────────────────────────────
  {
    slug: 'formation-copilot-pedagogique',
    tool: 'Microsoft Copilot', toolSlug: 'copilot', toolColor: '#0078d4', toolColorLight: '#dbeafe',
    metier: 'Équipes Pédagogiques', metierSlug: 'pedagogique', hubSlug: 'formation-microsoft-copilot', priority: false,
    metaTitle: 'Formation Copilot Pédagogiques | Masteria',
    metaDesc: 'Formation Copilot pour les formateurs. Supports dans PowerPoint, contenus dans Word, suivi Teams. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Microsoft Copilot pour les équipes Pédagogiques',
    intro: "Les équipes pédagogiques sur Microsoft 365 peuvent utiliser Copilot pour créer leurs supports dans PowerPoint, rédiger leurs guides apprenants dans Word et coordonner leurs formations dans Teams, directement dans leurs outils habituels, sans changer de workflow.",
    useCases: [
      { icon: '🎨', title: 'Supports dans PowerPoint', desc: 'Présentations de formation, diaporamas et supports visuels avec Copilot.' },
      { icon: '📄', title: 'Guides apprenants dans Word', desc: 'Cahiers d\'exercices, livrets, fiches mémo rédigés dans Word.' },
      { icon: '✅', title: 'Évaluations dans Word', desc: 'Questionnaires, QCM et études de cas créés directement dans Word.' },
      { icon: '👥', title: 'Animation avec Teams', desc: 'Sondages en direct, organisation de breakout rooms, synthèses de sessions.' },
      { icon: '📊', title: 'Suivi dans Excel', desc: 'Tableau de suivi des apprenants, résultats et progression dans Excel.' },
      { icon: '📧', title: 'Communication avec les apprenants', desc: 'Emails de convocation, rappels et communication pédagogique dans Outlook.' },
    ],
    program: [
      { title: 'Matin, Conception de contenus avec Copilot', items: ['Copilot dans PowerPoint : créer des présentations de formation complètes', 'Copilot dans Word : guides, cahiers d\'exercices et évaluations', 'Générer des QCM et questions d\'évaluation dans Word', 'Créer des ressources pédagogiques différenciées'] },
      { title: 'Après-midi, Animation et suivi de formation', items: ['Copilot dans Teams : animer, sonder et synthétiser les sessions', 'Excel : tableau de bord de suivi des apprenants', 'Outlook : communication pédagogique personnalisée', 'Construire un dispositif de formation hybride sur Microsoft 365'] },
    ],
    faq: [{ q: 'Copilot dans PowerPoint peut-il créer une présentation de formation complète ?', a: 'Copilot peut générer une présentation structurée depuis un prompt décrivant le sujet, le niveau et les objectifs. Vous obtenez un plan et des slides de base que vous finalisez. La formation vous apprend à faire des briefs efficaces pour obtenir des résultats directement utilisables.' }],
    relatedSpokes: ['formation-chatgpt-pedagogique', 'formation-gemini-pedagogique', 'formation-claude-pedagogique'],
  },

  // ── Gemini × Pédagogique ─────────────────────────────────────────────────
  {
    slug: 'formation-gemini-pedagogique',
    tool: 'Google Gemini', toolSlug: 'gemini', toolColor: '#ea4335', toolColorLight: '#fee2e2',
    metier: 'Équipes Pédagogiques', metierSlug: 'pedagogique', hubSlug: 'formation-gemini-entreprise', priority: false,
    metaTitle: 'Formation Gemini Pédagogiques | Masteria',
    metaDesc: 'Formation Gemini pour les formateurs. Supports dans Slides, contenus dans Docs, suivi dans Classroom. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Google Gemini pour les équipes Pédagogiques',
    intro: "Les équipes pédagogiques sur Google Workspace utilisent Gemini pour créer leurs supports dans Slides, rédiger leurs contenus dans Docs et organiser leurs parcours dans Google Classroom. Avec l'accès natif au web, Gemini enrichit les contenus avec des exemples et ressources actualisées.",
    useCases: [
      { icon: '🎨', title: 'Supports dans Google Slides', desc: 'Présentations de formation et diaporamas créés avec Gemini dans Slides.' },
      { icon: '📄', title: 'Contenus dans Google Docs', desc: 'Guides, fiches, cas pratiques et ressources pédagogiques dans Docs.' },
      { icon: '✅', title: 'Évaluations dans Docs & Forms', desc: 'QCM, questionnaires et études de cas dans Google Docs et Forms.' },
      { icon: '🎓', title: 'Google Classroom', desc: 'Organisation des parcours, devoirs et ressources dans Classroom.' },
      { icon: '📊', title: 'Suivi dans Sheets', desc: 'Tableau de bord de suivi apprenants et résultats dans Google Sheets.' },
      { icon: '🔍', title: 'Ressources actualisées', desc: 'Gemini accède au web pour enrichir les contenus avec des exemples récents.' },
    ],
    program: [
      { title: 'Matin, Conception pédagogique avec Gemini', items: ['Gemini dans Docs : concevoir des modules et guides apprenants', 'Gemini dans Slides : créer des présentations de formation', 'Générer des évaluations dans Docs et Google Forms', 'Utiliser la recherche web de Gemini pour enrichir les contenus'] },
      { title: 'Après-midi, Déploiement et suivi dans Google Workspace', items: ['Google Classroom : organiser et déployer des parcours de formation', 'Sheets : suivi de la progression et des résultats apprenants', 'Meet : animer des formations synchrones et synthétiser les échanges', 'Personnaliser les parcours selon les profils dans l\'écosystème Google'] },
    ],
    faq: [{ q: 'Google Classroom peut-il être utilisé pour des formations en entreprise ?', a: 'Oui, Google Classroom (disponible dans Workspace for Education et certaines versions entreprise) peut être utilisé pour des parcours de formation internes. Pour les entreprises sans licence éducation, des outils comme Google Sites et Drive peuvent remplir un rôle similaire.' }],
    relatedSpokes: ['formation-chatgpt-pedagogique', 'formation-copilot-pedagogique', 'formation-claude-pedagogique'],
  },

  // ── Claude × Pédagogique ─────────────────────────────────────────────────
  {
    slug: 'formation-claude-pedagogique',
    tool: 'Claude (Anthropic)', toolSlug: 'claude', toolColor: '#d97706', toolColorLight: '#fef3c7',
    metier: 'Équipes Pédagogiques', metierSlug: 'pedagogique', hubSlug: 'formation-claude-ia', priority: false,
    metaTitle: 'Formation Claude Pédagogiques | Masteria',
    metaDesc: 'Formation Claude Anthropic pour formateurs : conception avancée, évaluations complexes, individualisation des parcours. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation Claude pour les équipes Pédagogiques',
    intro: "Pour les ingénieurs pédagogiques qui conçoivent des formations complexes, Claude est l'outil de référence. Sa capacité à structurer de longs programmes, à produire des contenus d'apprentissage de qualité professionnelle et à raisonner sur les approches pédagogiques en fait un partenaire de conception exceptionnel.",
    useCases: [
      { icon: '🏗️', title: 'Architecture de formation', desc: 'Concevez des dispositifs complets multi-modules avec cohérence et progression.' },
      { icon: '📚', title: 'Contenus d\'apprentissage longs', desc: 'Manuels, e-learning complets, références pédagogiques de plusieurs milliers de mots.' },
      { icon: '✅', title: 'Évaluations sophistiquées', desc: 'Mises en situation, études de cas complexes, rubriques d\'évaluation détaillées.' },
      { icon: '👤', title: 'Personnalisation avancée', desc: 'Parcours différenciés élaborés selon plusieurs profils et niveaux apprenants.' },
      { icon: '🔬', title: 'Analyse pédagogique', desc: 'Analyser des besoins, évaluer des dispositifs et identifier les axes d\'amélioration.' },
      { icon: '📋', title: 'Référentiels de compétences', desc: 'Construire ou décliner des référentiels et des progressions de compétences.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Ingénierie pédagogique avancée avec Claude', items: ['Claude pour la conception pédagogique : forces et limites', 'Construire l\'architecture d\'un dispositif de formation complet', 'Rédiger des objectifs pédagogiques et des progressions détaillées', 'Concevoir des contenus d\'apprentissage longs et cohérents'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables pédagogiques', items: ['Atelier : concevoir une séquence pédagogique complète sur un sujet réel de votre catalogue', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : objectifs flous, évaluations inadaptées, progression incohérente', 'Premiers prompts Claude pédagogiques réutilisables par l\'équipe'] },
      { title: 'Jour 2 · Matin, Évaluation et individualisation', items: ['Créer des évaluations sophistiquées : situations, cas, rubriques', 'Personnaliser les parcours selon des profils apprenants multiples', 'Analyser un dispositif existant et proposer des améliorations', 'Intégrer Claude dans votre processus complet d\'ingénierie pédagogique'] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Claude pédagogiques partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans vos processus de conception'] },
    ],
    faq: [{ q: 'Claude peut-il vraiment concevoir une formation complète ?', a: 'Claude peut produire une architecture complète, des objectifs, des contenus, des activités et des évaluations cohérentes, mais la valeur pédagogique vient de l\'expertise et du jugement de l\'ingénieur pédagogique. La formation vous apprend à utiliser Claude comme accélérateur, pas comme substitut à l\'expertise métier.' }],
    relatedSpokes: ['formation-chatgpt-pedagogique', 'formation-copilot-pedagogique', 'formation-gemini-pedagogique'],
  },

  // ── Mistral × Pédagogique ────────────────────────────────────────────────
  {
    slug: 'formation-mistral-pedagogique',
    tool: 'Mistral AI', toolSlug: 'mistral', toolColor: '#fa500a', toolColorLight: '#fed7aa',
    metier: 'Équipes Pédagogiques', metierSlug: 'pedagogique', hubSlug: 'formation-mistral-ai', priority: false,
    metaTitle: 'Formation Mistral Pédagogiques | Masteria',
    metaDesc: "Formation Mistral AI pour les formateurs. Conception de modules, évaluations, parcours en français soigné. Certifié Qualiopi, finançable OPCO.",
    h1: 'Formation Mistral AI pour les équipes Pédagogiques',
    intro: "Pour les équipes pédagogiques qui conçoivent des formations en français, Mistral AI est un atout : la qualité du français produit, la connaissance du système éducatif français et des référentiels nationaux, et la souveraineté des données apprenants en font un outil de choix pour les organismes de formation et les services internes de formation des entreprises françaises.",
    useCases: [
      { icon: '📚', title: 'Modules en français', desc: 'Contenus pédagogiques rédigés dans un français soigné et accessible.' },
      { icon: '✅', title: 'Évaluations et QCM', desc: 'Questions, études de cas et mises en situation adaptées au contexte français.' },
      { icon: '🎯', title: 'Objectifs pédagogiques', desc: 'Objectifs Bloom et référentiels compétences adaptés à vos dispositifs.' },
      { icon: '📋', title: 'Supports apprenants', desc: 'Présentations, fiches mémo et cahiers d\'exercices.' },
      { icon: '👤', title: 'Personnalisation des parcours', desc: 'Parcours différenciés selon les profils apprenants.' },
      { icon: '🔒', title: 'Données apprenants en UE', desc: 'Traitement des productions apprenantes sur une IA européenne.' },
    ],
    program: [
      { title: 'Jour 1 · Matin, Conception pédagogique avec Mistral', items: ['Objectifs pédagogiques selon Bloom et référentiels français', "Structurer un module complet avec Mistral", 'Contenus, exemples et cas pratiques ancrés dans le contexte français', 'Supports apprenants : fiches, guides, exercices'] },
      { title: 'Jour 1 · Après-midi, Atelier : premiers livrables pédagogiques', items: ['Atelier : concevoir une séquence pédagogique complète sur un sujet réel de votre catalogue', 'Revue croisée des productions entre participants et formateur', 'Correction des erreurs classiques : objectifs flous, évaluations inadaptées, progression incohérente', 'Premiers prompts Mistral pédagogiques réutilisables par l\'équipe'] },
      { title: 'Jour 2 · Matin, Évaluations et individualisation', items: ['QCM, études de cas et mises en situation', 'Adapter les contenus selon niveaux et profils', 'Parcours différenciés pour audiences mixtes', "Confidentialité des productions apprenantes"] },
      { title: 'Jour 2 · Après-midi, Déploiement et plan d\'action', items: ['Construire votre bibliothèque de prompts Mistral pédagogiques partagée par l\'équipe', 'Définir les règles d\'usage, les garde-fous qualité et la politique de confidentialité', 'Identifier les 3 cas d\'usage prioritaires qui génèrent le plus de gains en semaine 1', 'Plan d\'action 30 jours : intégration dans vos processus de conception'] },
    ],
    faq: [{ q: "Mistral connaît-il les référentiels français (RNCP, Qualiopi) ?", a: "Mistral a été entraîné avec un corpus francophone significatif, ce qui lui donne une connaissance correcte des référentiels français. Pour les sujets très techniques (codes RNCP précis, exigences Qualiopi), il faut toujours vérifier les sorties : les référentiels évoluent et aucun LLM n'est à jour à 100%. La formation couvre ces points." }],
    relatedSpokes: ['formation-chatgpt-pedagogique', 'formation-copilot-pedagogique', 'formation-claude-pedagogique'],
  },

  // ═════════════════════════════════════════════════════════════════════════
  // ── Multi-outils × Métiers (10 nouvelles fiches, avril 2026) ────────────
  // ═════════════════════════════════════════════════════════════════════════

  // ── Multi-outils × Achats ───────────────────────────────────────────────
  {
    slug: 'formation-ia-achats',
    duration: '1j',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'Achats', metierSlug: 'achats', hubSlug: 'formation-intelligence-artificielle', priority: true,
    metaTitle: 'Formation IA pour la direction Achats | Masteria',
    metaDesc: "Formation IA pour les acheteurs : sourcing, analyse de propositions, négociation, suivi fournisseurs. 1 jour, certifié Qualiopi, finançable OPCO.",
    h1: "Formation IA pour la direction Achats / Procurement",
    intro: "Sourcing, analyse de propositions commerciales, préparation de négociation, suivi des SLA, conformité CSRD : la fonction Achats est un terrain de jeu idéal pour l'IA générative. Cette formation 1 jour donne aux acheteurs une méthode pour gagner 30 à 50 % de temps sur les tâches d'analyse documentaire et de préparation, tout en sécurisant les usages.",
    useCases: [
      { icon: '🔍', title: 'Sourcing fournisseurs', desc: "Identifier en 30 minutes 5 fournisseurs qualifiés sur un marché de niche." },
      { icon: '📑', title: "Analyse d'offres", desc: "Comparer 3 propositions et produire une note d'arbitrage en 1 heure." },
      { icon: '📝', title: 'Cahiers des charges', desc: "Rédiger ou relire un cahier des charges en gardant un haut niveau de précision." },
      { icon: '🤝', title: 'Préparation de négociation', desc: "BATNA, scénarios, positions : préparer un rendez-vous en 30 minutes." },
      { icon: '📊', title: 'Suivi qualité & SLA', desc: "Dashboards Excel + Copilot pour détecter les dérives plus tôt." },
      { icon: '🌍', title: 'CSRD & devoir de vigilance', desc: "Analyser des documents fournisseurs (RSE, audit) en quelques minutes." },
    ],
    program: [
      { title: "Matin, Boîte à outils IA pour acheteurs", items: ["Cartographier ses tâches d'acheteur : où l'IA aide vraiment", 'ChatGPT, Copilot, Perplexity : qui fait quoi en Achats', 'Confidentialité et données fournisseurs : règles d\'or', 'Construire ses prompts métier'] },
      { title: 'Après-midi, Cas pratiques sur dossiers réels', items: ['Sourcer 5 fournisseurs pertinents en 30 minutes', "Comparer 3 propositions et produire une note d'arbitrage", 'Préparer un renouvellement de contrat', 'Construire un dashboard fournisseur dans Excel avec Copilot'] },
    ],
    faq: [
      { q: "Est-ce que l'IA peut remplacer un acheteur ?", a: "Non. La négociation, la relation fournisseur et l'arbitrage stratégique restent humains. L'IA prend en charge l'analyse et la préparation, qui représentent 40 à 60 % du temps d'un acheteur." },
      { q: "Peut-on coller des cahiers des charges confidentiels ?", a: "Pas dans la version gratuite. Avec ChatGPT Enterprise, Copilot ou Mistral entreprise, vos données ne servent pas à entraîner les modèles. Cette règle est rappelée en formation." },
      { q: "Pourquoi former si on a déjà Ivalua ou Coupa ?", a: "Parce que 60 à 80 % du travail acheteur se fait hors plateforme : Word, Excel, mails, recherche web. Là où ChatGPT et Copilot apportent les gains les plus rapides." },
      { q: "Combien ça coûte ?", a: "1 980 €/jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-ia-ecrits-pro', 'formation-ia-analyse-donnees'],
  },

  // ── Multi-outils × Veille (transversal / Marketing) ─────────────────────
  {
    slug: 'formation-ia-veille',
    duration: '1j',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'Marketing', metierSlug: 'marketing', hubSlug: 'formation-intelligence-artificielle', priority: false,
    metaTitle: "Formation veille avec l'IA (1 jour) | Masteria",
    metaDesc: "Formation 1 jour pour structurer sa veille avec l'IA : Perplexity, ChatGPT, agrégateurs, alertes, synthèses. OPCO, Qualiopi.",
    h1: "Organiser sa veille avec l'IA",
    intro: "La veille est le métier dans lequel l'IA générative apporte les gains les plus immédiats. Tout le monde fait de la veille, peu la font bien, presque personne ne la fait avec l'IA en 2026. Cette formation 1 jour donne une méthode complète pour produire chaque semaine une synthèse exploitable par le management.",
    useCases: [
      { icon: '📡', title: 'Capter les bonnes sources', desc: "Feedly, Google Alertes, agrégateurs RSS : un flux fiable en 1h." },
      { icon: '🎯', title: 'Filtrer 90 % du bruit', desc: "ChatGPT et Claude pour qualifier rapidement les signaux faibles." },
      { icon: '✍️', title: 'Synthèse hebdomadaire', desc: "Une note exploitable de 1-2 pages produite en 30 minutes." },
      { icon: '📤', title: 'Diffusion ciblée', desc: "Newsletter, canal Slack/Teams, mémo dirigeant : faire que la veille serve." },
      { icon: '🔬', title: 'Recherche approfondie', desc: "Perplexity Pro pour creuser un sujet pointu en 20 minutes." },
      { icon: '🛡️', title: 'Anti-hallucinations', desc: "4 contre-mesures pour vérifier ce que l'IA produit." },
    ],
    program: [
      { title: 'Matin, Structurer sa veille', items: ['Diagnostiquer sa veille actuelle : sources, fréquence, restitution', 'Choisir 5 à 10 sources fiables sur son secteur', 'Mettre en place un agrégateur (Feedly ou alternative)', 'Qualifier ses signaux faibles avec ChatGPT'] },
      { title: 'Après-midi, Automatiser et restituer', items: ["Construire un prompt de synthèse hebdomadaire", "Utiliser Perplexity pour creuser un sujet en 20 minutes", "Mettre en forme une note de veille pour le COMEX", "Diffuser en interne : newsletter, Slack, mémo"] },
    ],
    faq: [
      { q: "Quels outils utiliser ?", a: "Le combo gagnant 2026 : Feedly (capture) + ChatGPT/Claude (filtrage et synthèse) + Perplexity (recherche approfondie). Ces 3 outils couvrent 80 % des cas." },
      { q: "Faut-il payer Perplexity ?", a: "La version gratuite suffit pour 80 % des cas. Perplexity Pro (20 €/mois) débloque la recherche approfondie : très rentable pour un veilleur professionnel." },
      { q: "Comment éviter les hallucinations ?", a: "Croisez 2 sources sur les sujets à enjeu (ChatGPT + Perplexity, ou Claude + Perplexity). La formation enseigne 4 contre-mesures pour minimiser le risque." },
      { q: "Combien ça coûte ?", a: "1 980 €/jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-ia-ecrits-pro', 'formation-multi-outils-marketing', 'formation-sprint-ia-veille'],
  },

  // ── Multi-outils × Analyse de données (Finance) ─────────────────────────
  {
    slug: 'formation-ia-analyse-donnees',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'Finance', metierSlug: 'finance', hubSlug: 'formation-intelligence-artificielle', priority: false,
    metaTitle: "Formation analyse de données IA : Excel + ChatGPT | Masteria",
    metaDesc: "Formation 2 jours pour analyser des données avec Excel, Copilot et ChatGPT. Tableaux croisés, scripts, dashboards. OPCO, Qualiopi.",
    h1: "Analyser ses données avec l'IA, Excel + ChatGPT",
    intro: "Pas besoin d'être data scientist pour analyser des données en 2026. Avec Excel, Copilot et ChatGPT, n'importe quel cadre peut produire un tableau croisé, une analyse de tendance et un graphique exploitable en 2 heures. Cette formation 2 jours est conçue pour des profils non-data : contrôle de gestion, marketing, RH, commercial.",
    useCases: [
      { icon: '📊', title: 'Tableaux croisés en 10 min', desc: "Copilot dans Excel pour les pivots et formules en langage naturel." },
      { icon: '🧹', title: 'Nettoyage de données', desc: "Détection d'anomalies et standardisation automatique." },
      { icon: '📈', title: 'Visualisations', desc: "Demander à ChatGPT le bon graphique pour le bon insight." },
      { icon: '📑', title: 'Rapports narratifs', desc: "Transformer des chiffres bruts en analyse écrite et exploitable." },
      { icon: '📋', title: 'Dashboards', desc: "Power BI ou Looker Studio simples, calibrés pour des non-experts." },
      { icon: '🔍', title: 'Cohort & anomalies', desc: "Détecter les écarts budgétaires et les comportements inhabituels." },
    ],
    program: [
      { title: 'Jour 1, Excel + Copilot pour les non-experts', items: ['Bonnes pratiques de structuration de données', 'Tableaux croisés dynamiques en 10 minutes avec Copilot', 'Formules avancées générées en langage naturel', 'Nettoyage automatique avec Copilot'] },
      { title: 'Jour 2, ChatGPT pour analyser et raconter', items: ['Analyser un fichier CSV avec ChatGPT (Advanced Data Analysis)', "Faire générer des visualisations adaptées", "Faire raconter une histoire à ses données : insight, narratif, recommandation", "Créer un dashboard simple sous Power BI ou Looker Studio"] },
    ],
    faq: [
      { q: "Faut-il savoir coder ?", a: "Non. Tout passe par le langage naturel : on demande, ChatGPT et Copilot exécutent." },
      { q: "Faut-il Microsoft Copilot ?", a: "C'est un gros plus. Le Jour 2 fonctionne sans (ChatGPT seul), mais le Jour 1 perd 30 % de son intérêt sans Copilot dans Excel." },
      { q: "Différence avec une formation Power BI ?", a: "Power BI est un outil de dashboarding. Cette formation est plus large : structurer, analyser, raconter, restituer. Power BI peut être un module complémentaire." },
      { q: "Données confidentielles ?", a: "Avec ChatGPT Enterprise / Copilot, oui. Avec ChatGPT gratuit, non. La formation rappelle ces règles le matin du Jour 1." },
      { q: "Combien ça coûte ?", a: "3 960 € pour 2 jours (soit 1 980 €/jour), en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-copilot-finance', 'formation-multi-outils-finance', 'formation-sprint-ia-excel'],
  },

  // ── Multi-outils × Créativité (Marketing) ───────────────────────────────
  {
    slug: 'formation-ia-creativite',
    duration: '1j',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'Marketing', metierSlug: 'marketing', hubSlug: 'formation-intelligence-artificielle', priority: false,
    metaTitle: "Formation créativité avec l'IA (1 jour) | Masteria",
    metaDesc: "Formation 1 jour pour utiliser l'IA en idéation, brainstorming, naming, copywriting créatif. ChatGPT, Claude. OPCO, Qualiopi.",
    h1: "Booster sa créativité avec l'IA",
    intro: "L'IA générative ne tue pas la créativité, elle la décuple, à condition de savoir prompter. Beaucoup d'équipes utilisent ChatGPT pour brainstormer et obtiennent... des idées plates. Cette formation 1 jour donne 6 méthodes éprouvées pour transformer ChatGPT et Claude en partenaires d'idéation, de naming, de campagnes et de copywriting.",
    useCases: [
      { icon: '💡', title: 'Brainstorming structuré', desc: "6 méthodes (contraintes, angles opposés, persona, SCAMPER, analogies, itératif)." },
      { icon: '🏷️', title: 'Naming', desc: "Trouver un nom de produit en 30 minutes au lieu d'1 mois." },
      { icon: '🎬', title: 'Concepts campagnes', desc: "Générer 3 angles radicalement différents pour une campagne." },
      { icon: '🎙️', title: 'Pitchs et storytelling', desc: "Reformuler un pitch en 5 versions, varier le ton et l'angle." },
      { icon: '🧑‍🎨', title: 'Copywriting créatif', desc: "Headlines, accroches, slogans, taglines à fort impact." },
      { icon: '🪞', title: 'Critique constructive', desc: "Faire jouer 5 personas critiques sur un projet en cours." },
    ],
    program: [
      { title: "Matin, Méthodes de prompting créatif", items: ["Pourquoi ChatGPT donne des idées plates par défaut", 'Les 6 méthodes de brainstorming IA', "Choisir entre ChatGPT, Claude et Mistral selon le besoin", "Imposer son style : ton, registre, vocabulaire métier"] },
      { title: 'Après-midi, Cas pratiques', items: ['Trouver un nom de produit en 30 minutes', 'Construire une campagne avec 3 angles opposés', 'Générer un pitch en 5 versions', 'Faire jouer 5 personas critiques sur un projet'] },
    ],
    faq: [
      { q: "Réservée aux créatifs ?", a: "Non. Marketing, communication, RH, R&D, innovation, dirigeants : tous ceux qui produisent des idées au quotidien." },
      { q: "L'IA va-t-elle voler les idées ?", a: "Non si on utilise ChatGPT/Claude Pro ou Enterprise. Sur les versions gratuites, ne jamais coller un projet stratégique confidentiel." },
      { q: "Quelle IA est la plus créative ?", a: "Claude (Anthropic) est souvent jugé plus subtil que ChatGPT pour le brainstorming et le copywriting. ChatGPT reste excellent et plus polyvalent." },
      { q: "Combien ça coûte ?", a: "1 980 €/jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-claude-marketing', 'formation-multi-outils-marketing', 'formation-ia-ecrits-pro'],
  },

  // ── Multi-outils × Écrits pro (Communication) ───────────────────────────
  {
    slug: 'formation-ia-ecrits-pro',
    duration: '1j',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'Communication', metierSlug: 'communication', hubSlug: 'formation-intelligence-artificielle', priority: false,
    metaTitle: "Formation écrits professionnels avec l'IA | Masteria",
    metaDesc: "Formation 1 jour pour rédiger plus vite et mieux avec ChatGPT et Copilot : mails, rapports, comptes-rendus, propositions. OPCO, Qualiopi.",
    h1: "Optimiser ses écrits professionnels avec l'IA",
    intro: "30 à 50 % du temps des cadres se passe à l'écrit. L'IA générative permet de diviser ce temps par deux, sans perdre en qualité — à condition d'éviter le « ChatGPT-style » lisse et générique reconnaissable à 100 mètres. Cette formation 1 jour apprend à garder son ton tout en gagnant un temps fou sur mails, comptes-rendus, rapports et propositions.",
    useCases: [
      { icon: '✉️', title: 'Mails pro', desc: "Commercial, RH, interne : 70 % de temps gagné sur la rédaction." },
      { icon: '📝', title: 'Comptes-rendus', desc: "Enregistrement → CR structuré en 80 % moins de temps." },
      { icon: '📊', title: 'Rapports & notes', desc: "Rapport de 5 pages structuré en 30 minutes au lieu de 2 h." },
      { icon: '💼', title: 'Propositions commerciales', desc: "Proposition sur mesure d'1h au lieu d'une demi-journée." },
      { icon: '🎙️', title: 'Articles / newsletters', desc: "Rédaction longue : 60 % de temps gagné, sans perte de style." },
      { icon: '🛡️', title: 'Anti-ChatGPT-style', desc: "Imposer son ton, intégrer ses tics, contrôler le registre." },
    ],
    program: [
      { title: "Matin, Bases du prompting pour la rédaction", items: ["Donner du contexte à l'IA : qui parle, à qui, pourquoi", "Imposer son ton et son vocabulaire métier", "Faire reformuler, raccourcir, structurer un texte existant", "Détecter et éviter le ChatGPT-style"] },
      { title: 'Après-midi, Cas pratiques', items: ["Mail commercial difficile (relance, refus, négociation)", "Compte-rendu de réunion à partir d'un enregistrement", "Rapport de 5 pages structuré en 30 minutes", "Proposition commerciale sur mesure en 1 heure"] },
    ],
    faq: [
      { q: "Style très spécifique (médical) ?", a: "C'est un avantage : plus le style est codifié, mieux l'IA le reproduit. La formation inclut un module sur la réplication de styles métiers." },
      { q: "Comment éviter le ChatGPT-style ?", a: "C'est précisément ce qu'enseigne le matin : prompts d'imitation, intégration de tics personnels, contrôle du registre. Mails IA indétectables à la fin de la journée." },
      { q: "Faut-il Microsoft Copilot ?", a: "Pas obligatoire. ChatGPT seul couvre 80 % des cas. Copilot ajoute la fluidité d'avoir l'IA directement dans Outlook, Word et Teams." },
      { q: "Combien ça coûte ?", a: "1 980 €/jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-multi-outils-communication', 'formation-ia-creativite', 'formation-sprint-ia-prompts'],
  },

  // ── Multi-outils × Plan compétences DRH (RH) ────────────────────────────
  {
    slug: 'formation-ia-drh-plan-competences',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'Ressources Humaines', metierSlug: 'ressources-humaines', hubSlug: 'formation-intelligence-artificielle', priority: true,
    metaTitle: "Formation DRH plan de compétences IA (2 jours) | Masteria",
    metaDesc: "Formation 2 jours pour DRH : construire un plan de développement compétences IA, cartographie, parcours, financement, mesure. OPCO, Qualiopi.",
    h1: "Plan de développement des compétences IA pour DRH",
    intro: "Le DRH est en première ligne sur la transformation IA. Pourtant peu sont armés pour bâtir un vrai plan de développement des compétences IA, financé, mesurable et acceptable. Cette formation 2 jours donne une méthode complète : cartographie, parcours différenciés, financement OPCO, articulation avec l'AI Act et mesure d'impact.",
    useCases: [
      { icon: '🗺️', title: 'Cartographie des compétences', desc: "Référentiel à 4 niveaux (sensibilisé, utilisateur, expert, pilote)." },
      { icon: '🎯', title: 'Populations cibles', desc: "Top management, managers, métiers, IT : à qui quoi quand." },
      { icon: '💰', title: 'Financement', desc: "OPCO, ProA, Pro-Transition, FNE : quel dispositif pour quel cas." },
      { icon: '🛣️', title: 'Parcours différenciés', desc: "Sensibilisation, métier, expert, pilote : 4 parcours types." },
      { icon: '⚖️', title: 'AI Act article 4', desc: "Obligation de littératie IA : implications pratiques pour le RH." },
      { icon: '📊', title: "Mesure d'impact", desc: "Opérationnel, business, stratégique : 3 niveaux de KPI." },
    ],
    program: [
      { title: "Jour 1, Cartographie et cadrage", items: ["Référentiel de compétences IA à 4 niveaux", "Cartographier ses populations cibles", "Aligner le plan IA avec la stratégie business", "Conformité AI Act : qui doit être formé en 2026 et 2027"] },
      { title: 'Jour 2, Financement, déploiement, mesure', items: ['Financements OPCO et plan de développement', "Construire des parcours différenciés (4 niveaux, 4 publics)", "Communication interne : annoncer le plan IA", "Mesurer l'impact : taux de complétion, satisfaction, ROI", "Articulation CPF, ProA, Pro-Transition, FNE"] },
    ],
    faq: [
      { q: "Faut-il déjà connaître l'IA ?", a: "Non. La formation est dimensionnée pour un DRH non-utilisateur. Les bases sont posées le matin du Jour 1." },
      { q: "Comment financer un plan IA ?", a: "OPCO en majorité (jusqu'à 100 % pour les TPE/PME), CPF (formations certifiantes éligibles), ProA et Pro-Transition pour les reconversions, FNE-Formation pour les entreprises en mutation. La formation détaille chaque dispositif." },
      { q: "Quelle obligation AI Act pour les RH ?", a: "L'article 4 impose que toute personne utilisant un système d'IA dispose d'un niveau de littératie IA suffisant. Cela ouvre une responsabilité de l'employeur, détaillée dans la formation." },
      { q: "Comment mesurer l'impact ?", a: "3 niveaux : opérationnel (gain de temps, qualité), business (ROI, satisfaction), stratégique (capacité IA de l'entreprise). Le Jour 2 fournit des grilles concrètes." },
      { q: "Combien ça coûte ?", a: "3 960 € pour 2 jours (soit 1 980 €/jour), en intra-entreprise (jusqu'à 12 DRH/RRH) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-multi-outils-ressources-humaines'],
  },

  // ═════════════════════════════════════════════════════════════════════════
  // ── Sprint IA × 6 formats courts (3 h) ──────────────────────────────────
  // ═════════════════════════════════════════════════════════════════════════

  // ── Sprint IA × Sensibilisation ─────────────────────────────────────────
  {
    slug: 'formation-sprint-ia-sensibilisation',
    tool: 'Sprint IA', toolSlug: 'sprint-ia', toolColor: '#F97316', toolColorLight: '#FED7AA',
    metier: 'Tous publics', metierSlug: 'transverse', hubSlug: 'formation-sprint-ia', priority: true,
    metaTitle: "Sprint IA Sensibilisation (3 h) | Masteria",
    metaDesc: "Sprint IA Sensibilisation : 3 heures pour acculturer une équipe à l'IA générative. Format webinar ou présentiel. OPCO, Qualiopi.",
    h1: "Sprint IA Sensibilisation, 3 heures pour acculturer vos équipes",
    intro: "Sprint IA Sensibilisation est le format de masse Masteria : 3 heures, ciblé, pratique, conçu pour acculturer rapidement plusieurs centaines de collaborateurs sans bloquer leur agenda. C'est le bon point d'entrée pour une convention annuelle, une association professionnelle, une communauté métier interne ou un déploiement IA d'entreprise à grande échelle.",
    useCases: [
      { icon: '🌐', title: 'Acculturation grande échelle', desc: "200 à 2 000 collaborateurs en quelques semaines avec sessions enchaînées." },
      { icon: '🎤', title: 'Convention annuelle', desc: "Un format prêt-à-livrer de 3 h pour une plénière de séminaire d'entreprise." },
      { icon: '🤝', title: 'Communauté métier', desc: "Format adapté à une association professionnelle, un club CFO, un club RH." },
      { icon: '📱', title: 'Manipulation guidée', desc: "Chaque participant teste ChatGPT et Copilot en direct sur ses cas." },
      { icon: '⚖️', title: 'AI Act flash', desc: "5 minutes pour comprendre les obligations 2026 et le cadre de conformité." },
      { icon: '🔄', title: 'Sessions répliquables', desc: "Packages dégressifs à partir de 5 sessions pour les déploiements." },
    ],
    program: [
      { title: '1ère heure, Comprendre l\'IA générative en 2026', items: ["Panorama : ChatGPT, Copilot, Gemini, Claude, Mistral", "Ce que l'IA peut faire / ne peut pas faire dans le travail pro", "Confidentialité, RGPD, AI Act : règles d'or"] },
      { title: '2e et 3e heures, Premières manipulations + Q&A', items: ["Atelier : chaque participant prompte sur ses propres cas", "Bibliothèque de 10 prompts à emporter", "Q&A et plan d'action individuel : 3 cas d'usage à tester la semaine prochaine"] },
    ],
    faq: [
      { q: "3 heures suffisent pour une vraie sensibilisation ?", a: "Oui pour un objectif d'acculturation : comprendre, manipuler, repartir avec 3 cas d'usage à tester. Pour une transformation profonde, enchaîner avec une formation 1 ou 2 jours." },
      { q: "Format webinar ou présentiel ?", a: "Les deux. Webinar pour 30 à 50 participants avec Q&A structuré. Présentiel ou distanciel interactif pour 12 à 15 (manipulation possible)." },
      { q: "Est-ce finançable OPCO ?", a: "Oui, comme toute formation Masteria (organisme certifié Qualiopi). Le format court n'a aucune incidence négative sur le financement." },
      { q: "Combien ça coûte ?", a: "1 980 €/session, en intra-entreprise (jusqu'à 12 participants, 3 h) comme en accompagnement individuel. Packages dégressifs à partir de 5 sessions pour les déploiements grande échelle. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-sprint-ia-prompts', 'formation-intelligence-artificielle'],
  },

  // ── Sprint IA × Prompts ─────────────────────────────────────────────────
  {
    slug: 'formation-sprint-ia-prompts',
    tool: 'Sprint IA', toolSlug: 'sprint-ia', toolColor: '#F97316', toolColorLight: '#FED7AA',
    metier: 'Tous publics', metierSlug: 'transverse', hubSlug: 'formation-sprint-ia', priority: true,
    metaTitle: "Sprint IA Prompts (3 h) | Masteria",
    metaDesc: "Sprint IA Prompts : 3 heures pour passer de prompts à 1 ligne à des prompts structurés et performants. ChatGPT, Copilot. OPCO.",
    h1: "Sprint IA Prompts, 3 heures pour écrire des prompts qui marchent",
    intro: "Sprint IA Prompts cible les collaborateurs qui utilisent déjà ChatGPT ou Microsoft Copilot mais sans méthode. Ils écrivent des prompts à 1 ligne, obtiennent des résultats moyens, et s'en contentent. En 3 heures, ils passent à des prompts structurés (méthode CRTF : Contexte, Rôle, Tâche, Format) et produisent des résultats utilisables sans retouche.",
    useCases: [
      { icon: '✍️', title: 'Méthode CRTF', desc: "Contexte, Rôle, Tâche, Format : la structure universelle d'un bon prompt." },
      { icon: '🎯', title: 'Prompts métier', desc: "10 prompts adaptés au métier des participants, prêts à l'emploi." },
      { icon: '🔁', title: 'Prompts itératifs', desc: "Critique, raffinage, reformulation : faire mieux à la 3e tentative." },
      { icon: '🎨', title: 'Prompts de style', desc: "Imposer un ton, un registre, des tics de style pour rester soi-même." },
      { icon: '🛡️', title: 'Garde-fous', desc: "Éviter les hallucinations : contraintes, sources, vérification." },
      { icon: '📚', title: 'Bibliothèque', desc: "Chacun repart avec sa bibliothèque de prompts personnels." },
    ],
    program: [
      { title: '1ère heure, Méthode CRTF', items: ["Anatomie d'un prompt qui marche", "Méthode CRTF : Contexte, Rôle, Tâche, Format", "Détecter et corriger un mauvais prompt"] },
      { title: '2e et 3e heures, Atelier prompts métier', items: ["Construire 5 prompts adaptés à son métier", "Prompts itératifs : critique et raffinage", "Constituer sa bibliothèque personnelle de prompts"] },
    ],
    faq: [
      { q: "Pré-requis ?", a: "Avoir déjà ouvert ChatGPT ou Copilot au moins une fois. Pas besoin d'être expert : c'est justement le but du Sprint." },
      { q: "Marche pour Copilot autant que ChatGPT ?", a: "Oui. La méthode CRTF est universelle. La bibliothèque produite est adaptée à l'outil utilisé par les participants." },
      { q: "Format présentiel ou distanciel ?", a: "Les deux fonctionnent. Le distanciel marche très bien pour ce format court car les ateliers sont individuels avec partage." },
      { q: "Combien ça coûte ?", a: "1 980 €/session, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Packages dégressifs à partir de 5 sessions. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-prompt-engineering', 'formation-sprint-ia-sensibilisation', 'formation-ia-ecrits-pro'],
  },

  // ── Sprint IA × Excel ───────────────────────────────────────────────────
  {
    slug: 'formation-sprint-ia-excel',
    tool: 'Sprint IA', toolSlug: 'sprint-ia', toolColor: '#F97316', toolColorLight: '#FED7AA',
    metier: 'Finance', metierSlug: 'finance', hubSlug: 'formation-sprint-ia', priority: true,
    metaTitle: "Sprint IA Excel (3 h) | Masteria",
    metaDesc: "Sprint IA Excel : 3 heures pour utiliser l'IA dans Excel — tableaux croisés, analyses, formules en langage naturel. OPCO, Qualiopi.",
    h1: "Sprint IA Excel, 3 heures pour booster Excel avec l'IA",
    intro: "Sprint IA Excel s'adresse aux populations finance, contrôle de gestion, RH et achats — là où Excel est l'outil central. En 3 heures, les participants passent de pilotes Excel manuels à utilisateurs IA autonomes : tableaux croisés en 10 minutes, formules en langage naturel, détection d'anomalies, mini-dashboards. ROI direct : 1 à 2 heures gagnées par jour. Adaptable selon votre stack (Microsoft Copilot pour Excel ou ChatGPT + Excel).",
    useCases: [
      { icon: '📊', title: 'Tableaux croisés', desc: "Pivots et analyses en langage naturel, 10× plus vite." },
      { icon: '🧮', title: 'Formules', desc: "Demander la formule au lieu de la chercher : SOMMEPROD, RECHERCHEX, etc." },
      { icon: '🔍', title: "Détection d'anomalies", desc: "Repérer un écart budgétaire ou une saisie incohérente en 1 clic." },
      { icon: '📈', title: 'Visualisations', desc: "Le bon graphique pour le bon insight, généré automatiquement." },
      { icon: '🧹', title: 'Nettoyage de données', desc: "Standardiser, dédoublonner, normaliser sans script." },
      { icon: '📋', title: 'Mini-dashboards', desc: "Premier dashboard mensuel construit pendant le Sprint." },
    ],
    program: [
      { title: '1ère heure, Bases IA dans Excel', items: ["Choisir son IA pour Excel : Microsoft Copilot natif vs ChatGPT côté à côte", "Premiers prompts : analyse, formule, graphique", "Confidentialité des données financières"] },
      { title: '2e et 3e heures, Atelier sur fichiers réels', items: ["Tableau croisé en 10 minutes", "Détection d'anomalies budgétaires", "Premier mini-dashboard mensuel", "Bibliothèque de prompts Excel à emporter"] },
    ],
    faq: [
      { q: "Faut-il avoir Microsoft 365 Copilot ?", a: "Non, le Sprint s'adapte à votre stack. Avec Copilot dans Excel (env. 30 €/mois/utilisateur), tout se passe nativement. Sans Copilot, on travaille avec ChatGPT côté à côte d'Excel : 90 % des cas d'usage restent couverts." },
      { q: "Niveau Excel requis ?", a: "Niveau intermédiaire : tableaux croisés, fonctions de base. Le Sprint ne forme pas à Excel, il forme à l'IA appliquée à Excel." },
      { q: "Sur ses propres fichiers ?", a: "Oui, c'est le mode opératoire. Chaque participant apporte un fichier Excel professionnel et l'utilise pendant l'atelier." },
      { q: "Combien ça coûte ?", a: "1 980 €/session, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Packages dégressifs à partir de 5 sessions. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-copilot-finance', 'formation-ia-analyse-donnees', 'formation-sprint-ia-prompts'],
  },

  // ── Sprint IA × Managers ────────────────────────────────────────────────
  {
    slug: 'formation-sprint-ia-managers',
    tool: 'Sprint IA', toolSlug: 'sprint-ia', toolColor: '#F97316', toolColorLight: '#FED7AA',
    metier: 'Management', metierSlug: 'management', hubSlug: 'formation-sprint-ia', priority: true,
    metaTitle: "Sprint IA Managers (3 h) | Masteria",
    metaDesc: "Sprint IA Managers : 3 heures pour donner aux managers les bons réflexes pour piloter une équipe utilisatrice d'IA. OPCO, Qualiopi.",
    h1: "Sprint IA Managers, 3 heures pour piloter une équipe IA",
    intro: "Sprint IA Managers est le format court pour aligner toute la ligne managériale en quelques semaines. Il complète parfaitement la formation 2 jours « Manager avec l'IA » lorsqu'il faut toucher 50 à 200 managers en cascade. Objectif : donner les 5 réflexes du manager augmenté + le cadre de conformité (RGPD, AI Act, PI, secret pro).",
    useCases: [
      { icon: '👤', title: 'Exemplarité', desc: "Le manager utilise ChatGPT/Copilot devant son équipe, sans honte." },
      { icon: '🎯', title: 'Cartographie des usages', desc: "Identifier où l'IA aide vraiment dans son équipe." },
      { icon: '🎯', title: 'Objectifs IA', desc: "Inscrire un objectif IA dans les entretiens annuels." },
      { icon: '📊', title: 'Mesure', desc: "Suivre le gain de temps moyen, pas le nombre de prompts." },
      { icon: '🛡️', title: 'Cadre conformité', desc: "Charte IA d'équipe : ce qui est OK, ce qui ne l'est pas." },
      { icon: '🗣️', title: 'Conduite du changement', desc: "4 profils de résistance et leviers à activer." },
    ],
    program: [
      { title: "1ère heure, Le manager utilisateur", items: ["ChatGPT et Copilot dans le quotidien du manager", "Synthèse, point d'équipe, arbitrage en 5 minutes", "Donner l'exemple : pourquoi c'est décisif"] },
      { title: "2e et 3e heures, Le manager pilote", items: ["Cartographier les usages IA dans son équipe", "Fixer un objectif IA dans les entretiens annuels", "Conformité : 5 règles à connaître", "Plan d'action 30 jours"] },
    ],
    faq: [
      { q: "Différence avec la formation 2 jours ?", a: "Le Sprint donne les bons réflexes. La formation 2 jours forme en profondeur. On peut les combiner : 2 jours pour les 20 managers clés, Sprint 3 h pour les 200 autres." },
      { q: "Format présentiel ou distanciel ?", a: "Les deux fonctionnent. Pour les managers de proximité dispersés géographiquement, le distanciel est souvent plus efficace pour atteindre toute la ligne." },
      { q: "Combien de managers par session ?", a: "12 à 15 maximum pour conserver l'interaction. Pour des déploiements à 100+ managers, on enchaîne 8 à 10 sessions sur 3 à 4 semaines." },
      { q: "Combien ça coûte ?", a: "1 980 €/session, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Packages dégressifs à partir de 5 sessions pour les déploiements managériaux. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-multi-outils-management'],
  },

  // ── Sprint IA × Veille ──────────────────────────────────────────────────
  {
    slug: 'formation-sprint-ia-veille',
    tool: 'Sprint IA', toolSlug: 'sprint-ia', toolColor: '#F97316', toolColorLight: '#FED7AA',
    metier: 'Communication', metierSlug: 'communication', hubSlug: 'formation-sprint-ia', priority: false,
    metaTitle: "Sprint IA Veille (3 h) | Masteria",
    metaDesc: "Sprint IA Veille : 3 heures pour automatiser sa veille avec ChatGPT et Perplexity. Communication, R&D, marketing. OPCO.",
    h1: "Sprint IA Veille, 3 heures pour automatiser sa veille",
    intro: "Sprint IA Veille s'adresse aux profils communication, R&D, marketing, business development qui veulent professionnaliser leur veille avec l'IA, sans s'engager dans une formation longue. En 3 heures, on met en place un combo Feedly + ChatGPT + Perplexity et on produit la première synthèse hebdomadaire pendant le Sprint.",
    useCases: [
      { icon: '📡', title: 'Sources fiables', desc: "5 à 10 sources pertinentes identifiées pendant le Sprint." },
      { icon: '🎯', title: 'Filtrage automatique', desc: "Qualifier les signaux faibles avec ChatGPT en 5 minutes." },
      { icon: '🔬', title: 'Recherche approfondie', desc: "Perplexity Pro pour creuser un sujet en 20 minutes." },
      { icon: '✍️', title: 'Synthèse hebdo', desc: "Produire une note exploitable de 1-2 pages en 30 minutes." },
      { icon: '📤', title: 'Diffusion', desc: "Newsletter, canal Slack, mémo dirigeant : la veille qui sert." },
      { icon: '🛡️', title: 'Anti-hallucinations', desc: "4 contre-mesures pour vérifier ce que l'IA produit." },
    ],
    program: [
      { title: "1ère heure, Outils et méthode", items: ["Feedly : sources et flux", "ChatGPT et Claude : filtrage et synthèse", "Perplexity : recherche approfondie", "Anti-hallucinations : règles d'or"] },
      { title: "2e et 3e heures, Atelier veille", items: ["Sélectionner ses 5-10 sources fiables", "Construire son prompt de synthèse hebdomadaire", "Produire la première note de veille pendant le Sprint", "Diffuser : newsletter / Slack / mémo"] },
    ],
    faq: [
      { q: "Faut-il payer Perplexity Pro ?", a: "La version gratuite suffit pour 80 % des cas. Pro (20 €/mois) débloque la recherche approfondie : très rentable pour un veilleur professionnel." },
      { q: "Repart-on avec une vraie synthèse ?", a: "Oui. C'est même l'objectif : la première synthèse de veille est produite pendant le Sprint, sur un sujet réel choisi par le participant." },
      { q: "Combien ça coûte ?", a: "1 980 €/session, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Packages dégressifs à partir de 5 sessions. 100 % finançable OPCO." },
      { q: "Différence avec la formation Veille 1 jour ?", a: "Le Sprint donne le combo et la première synthèse. La journée complète va plus loin : automatisation, dashboards, articulation avec stratégie marketing." },
    ],
    relatedSpokes: ['formation-ia-veille', 'formation-sprint-ia-prompts', 'formation-multi-outils-marketing'],
  },

  // ── Sprint IA × AI Act ──────────────────────────────────────────────────
  {
    slug: 'formation-sprint-ia-ai-act',
    tool: 'Sprint IA', toolSlug: 'sprint-ia', toolColor: '#F97316', toolColorLight: '#FED7AA',
    metier: 'Tous publics', metierSlug: 'transverse', hubSlug: 'formation-sprint-ia', priority: true,
    metaTitle: "Sprint IA AI Act (3 h) — Conformité IA Act flash | Masteria",
    metaDesc: "Sprint IA AI Act : 3 h pour comprendre l'AI Act, l'article 4, les classifications de risque et le calendrier 2026. Qualiopi, OPCO.",
    h1: "Sprint IA AI Act, 3 heures pour la conformité IA Act",
    intro: "Sprint IA AI Act est le format flash signé Masteria pour mettre toute une organisation en conformité avec le règlement européen sur l'intelligence artificielle (AI Act). En 3 heures, les participants comprennent le périmètre du règlement, les classifications de risque, l'article 4 sur la littératie IA, le calendrier 2026 / 2027 et les obligations concrètes pour leur métier. Cible : DSI, DPO, juristes, RH, managers, dirigeants. Combinable avec Sprint IA Sensibilisation pour couvrir l'obligation de littératie IA à l'échelle d'une entreprise.",
    useCases: [
      { icon: '⚖️', title: "Article 4 : littératie IA", desc: "L'obligation de niveau de connaissances suffisant pour toute personne utilisant un système d'IA, applicable depuis février 2025." },
      { icon: '🚦', title: 'Classifications de risque', desc: "Risque inacceptable, risque élevé, risque limité, risque minimal : ce qui change pour vos cas d'usage." },
      { icon: '📅', title: 'Calendrier 2026 / 2027', desc: "Les échéances clés à anticiper, en particulier sur les systèmes à haut risque et les modèles à usage général." },
      { icon: '🛡️', title: 'Gouvernance interne', desc: "Charte IA, registre des usages, points de contrôle DPO / DSI : les briques minimales à mettre en place." },
      { icon: '🏛️', title: 'Articulation RGPD', desc: "Comment l'AI Act s'empile avec le RGPD, la directive NIS 2 et les obligations sectorielles existantes." },
      { icon: '✅', title: 'Plan de conformité', desc: "Repartir avec un mini plan d'action 90 jours pour aligner ses pratiques IA sur le règlement." },
    ],
    program: [
      { title: '1ère heure, Comprendre l\'AI Act', items: ["Périmètre du règlement européen sur l'IA", "Acteurs concernés : fournisseur, déployeur, importateur, distributeur", "Article 4 : l'obligation de littératie IA en pratique", "Calendrier d'entrée en vigueur 2025, 2026, 2027"] },
      { title: '2e heure, Classifications et obligations', items: ["Les 4 niveaux de risque illustrés par des cas concrets", "Systèmes interdits et systèmes à haut risque : ce qui change", "Modèles à usage général (GPAI) et obligations associées", "Articulation avec le RGPD, NIS 2 et la régulation sectorielle"] },
      { title: '3e heure, Plan de conformité', items: ["Cartographier ses usages IA actuels et futurs", "Évaluer la classification AI Act pour chaque cas d'usage", "Construire une charte IA d'entreprise minimaliste mais opposable", "Articuler avec la formation des collaborateurs (article 4)", "Plan d'action 90 jours, 6 mois, 12 mois"] },
    ],
    faq: [
      { q: "Pour qui ce Sprint AI Act ?", a: "DSI, DPO, juristes, responsables conformité, RH, managers et dirigeants qui doivent piloter la conformité IA Act dans leur périmètre. Aucun prérequis juridique : la formation explique les notions clés à partir d'exemples concrets." },
      { q: "Qu'est-ce que l'article 4 sur la littératie IA ?", a: "L'article 4 de l'AI Act impose à toute organisation utilisant un système d'IA de garantir que ses collaborateurs disposent d'un niveau de connaissances suffisant. Il s'agit d'une obligation de moyens, pas de résultat, mais qui ouvre la responsabilité de l'employeur. Sprint IA AI Act + Sprint IA Sensibilisation couvrent ensemble cette obligation." },
      { q: "Comment articuler avec le RGPD ?", a: "L'AI Act et le RGPD se cumulent : un système d'IA traitant des données personnelles doit respecter les deux. Le Sprint explique comment construire un dossier de conformité unifié plutôt que deux silos parallèles." },
      { q: "Combien ça coûte ?", a: "1 980 €/session, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Packages dégressifs à partir de 5 sessions, particulièrement pertinent pour cascader la conformité dans une grande organisation. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-ai-act', 'formation-sprint-ia-sensibilisation', 'formation-sprint-ia-managers'],
  },

  // ── Claude Code × Développement ──────────────────────────────────────────
  {
    slug: 'formation-claude-code',
    tool: 'Claude Code',
    toolSlug: 'claude-code',
    toolColor: '#d97706',
    toolColorLight: '#fef3c7',
    metier: 'Développement & IT',
    metierSlug: 'informatique',
    hubSlug: 'formation-claude-ia',
    priority: true,
    datePublished: '2026-06-16',
    updatedAt: '2026-07-01',
    updatedLabel: 'Programme à jour · juillet 2026',
    metaTitle: 'Formation Claude Code · Qualiopi · OPCO | Masteria',
    metaDesc: "Formation Claude Code pour développeurs : refactoring, tests, CI/CD et MCP avec l'agent de codage d'Anthropic. 2 jours sur votre codebase. Qualiopi, OPCO.",
    h1: 'Formation Claude Code : le développement assisté par agents IA',
    intro: "Claude Code est l'outil de développement agentique d'Anthropic : un agent qui lit votre codebase, modifie plusieurs fichiers, exécute les tests et prépare les pull requests, depuis le terminal, l'IDE ou le CI. Cette formation Claude Code de 2 jours, construite sur votre propre code, apprend à vos développeurs à déléguer des tâches d'ingénierie complètes sans perdre le contrôle : conventions d'équipe, permissions, revue systématique.",
    audience: [
      { title: 'Développeurs et tech leads', desc: "Vous codez au quotidien et voulez passer de l'autocomplétion à la délégation de tâches entières : bug fix, refactoring, tests, migrations. La formation se fait sur votre stack et vos dépôts réels." },
      { title: 'CTO, DSI et engineering managers', desc: "Vous évaluez l'impact des agents de codage sur la vélocité et la qualité. Vous repartez avec des règles d'équipe (permissions, revue, CI), des métriques d'adoption et un plan de déploiement progressif." },
      { title: 'Équipes data, SRE et plateformes', desc: "Scripts, pipelines, infrastructure as code, documentation technique : les agents excellent sur ces tâches outillées. Vous apprenez à les cadrer pour vos environnements sensibles." },
    ],
    useCases: [
      { icon: '🛠️', title: 'Refactoring de code legacy', desc: "Moderniser un module entier avec tests de non-régression écrits d'abord, puis refactoring supervisé." },
      { icon: '🧪', title: 'Tests automatisés', desc: 'Générer des suites de tests unitaires et d\'intégration qui couvrent les cas limites réels.' },
      { icon: '🔍', title: 'Revue de code assistée', desc: 'Pré-analyser chaque pull request : bugs, sécurité, conventions, avant la revue humaine.' },
      { icon: '🚚', title: 'Migrations cadrées', desc: 'Monter de version un framework ou migrer une API sur des dizaines de fichiers de façon systématique.' },
      { icon: '📚', title: 'Documentation technique', desc: 'Générer et maintenir README, docs d\'architecture et commentaires à partir du code réel.' },
      { icon: '🤖', title: 'Automatisation CI/CD', desc: 'Mode headless dans GitHub Actions : tri d\'issues, revues automatiques, correctifs proposés.' },
    ],
    modules: [
      { day: 1, title: 'Module 1, Comprendre le développement agentique', duration: '1h30', description: "Situer Claude Code dans le paysage des outils IA pour développeurs et comprendre ce qu'un agent change par rapport à l'autocomplétion.", items: ["Assistant vs agent : ce que Claude Code fait qu'un Copilot classique ne fait pas", "Architecture : terminal, extension IDE (VS Code, JetBrains), mode headless", "Démonstration en direct sur un de vos dépôts : exploration, question, premier correctif", "Où l'agent excelle, où il échoue : construire la bonne intuition dès le départ"], exercise: "Chaque participant fait analyser un dépôt réel par Claude Code et obtient une explication d'architecture exploitable." },
      { day: 1, title: 'Module 2, Prise en main : terminal, IDE, permissions', duration: '2h', description: "Installer, configurer et réaliser ses premières tâches supervisées en sécurité.", items: ['Installation et authentification (abonnement Claude ou API)', 'Navigation dans une codebase : questions, recherche, compréhension de code hérité', 'Modes de permission : lecture seule, validation action par action, exécution cadrée', 'Premier bug fix complet : reproduction, correctif, test, commit'], exercise: 'Corriger un bug réel de votre backlog, du ticket au commit, en validant chaque étape.' },
      { day: 1, title: 'Module 3, CLAUDE.md et conventions d\'équipe', duration: '2h', description: "Encoder les standards de votre équipe pour des résultats constants d'un développeur à l'autre.", items: ['Écrire un CLAUDE.md efficace : stack, conventions, commandes, pièges du projet', 'Prompts de tâche efficaces : contexte, contraintes, critères d\'acceptation', 'Slash commands personnalisées pour vos workflows récurrents', 'Partage des configurations dans le dépôt : une seule source de vérité d\'équipe'], exercise: 'Rédiger le CLAUDE.md de votre projet principal et le tester sur 3 tâches types.' },
      { day: 1, title: 'Module 4, Workflows quotidiens : feature, fix, revue', duration: '1h30', description: 'Intégrer l\'agent dans le cycle de développement réel, de l\'issue à la pull request.', items: ['Développer une petite feature de bout en bout avec tests', 'Git assisté : commits structurés, branches, description de PR', 'Revue de code assistée : checklist sécurité, conventions, régressions', 'Quand reprendre la main : les signaux qui imposent une intervention humaine'], exercise: 'Livrer une pull request complète (code, tests, description) sur votre dépôt d\'entraînement.' },
      { day: 2, title: 'Module 5, Refactoring et migrations sur codebase réelle', duration: '2h', description: 'Traiter les chantiers que les équipes repoussent depuis des mois.', items: ['Stratégie filet de sécurité : caractériser par les tests avant de refactorer', 'Refactoring multi-fichiers supervisé sur du code legacy réel', 'Migration de version cadrée (framework, librairie, API) en lots vérifiables', 'Gérer les grandes codebases : contexte, sous-tâches, points de contrôle'], exercise: 'Refactorer un module legacy de votre codebase avec tests de non-régression écrits d\'abord.' },
      { day: 2, title: 'Module 6, Automatisation : CI, hooks et mode headless', duration: '2h', description: "Passer de l'usage interactif à l'automatisation contrôlée dans vos pipelines.", items: ['Mode headless : lancer des tâches scriptées et récupérer des sorties structurées', 'Intégration GitHub Actions : revue automatique de PR, tri d\'issues', 'Hooks : garde-fous automatiques avant et après chaque action de l\'agent', 'Sous-agents et parallélisation pour les tâches larges (audits, sweeps)'], exercise: 'Mettre en place une revue automatique de pull request sur un dépôt pilote.' },
      { day: 2, title: 'Module 7, MCP : connecter vos outils internes', duration: '1h30', description: "Étendre l'agent à votre écosystème : tickets, bases de données, documentation interne.", items: ['Comprendre le Model Context Protocol (MCP), le standard ouvert d\'intégration', 'Connecter un serveur MCP existant : tickets, base de données, navigateur', 'Cas concrets : reproduire un bug depuis un ticket, requêter une base en lecture', 'Risques et garde-fous : périmètre, secrets, environnements de production'], exercise: 'Brancher un serveur MCP et résoudre une tâche qui traverse deux outils.' },
      { day: 2, title: 'Module 8, Gouvernance, sécurité et plan d\'adoption', duration: '1h30', description: "Déployer à l'échelle de l'équipe avec des règles claires et des résultats mesurables.", items: ['Code propriétaire et confidentialité : ce qui sort, ce qui ne sort pas, options entreprise', 'Politique de permissions par environnement (dev, staging, production)', 'Métriques d\'adoption utiles : temps de cycle, taux de PR assistées, qualité', 'Plan 30 jours : projets pilotes, champions, montée en charge progressive'], exercise: 'Chaque participant repart avec une charte d\'usage et un plan d\'adoption pour son équipe.' },
    ],
    objectives: [
      'Déléguer à Claude Code des tâches complètes (bug fix, feature, refactoring) avec validation à chaque étape',
      "Encoder les conventions de l'équipe dans un CLAUDE.md pour des résultats constants entre développeurs",
      'Mettre en place une revue de code assistée et des automatisations CI en mode headless',
      'Connecter les outils internes via MCP en maîtrisant périmètre et sécurité',
      "Déployer l'agent dans l'équipe avec une charte d'usage, des permissions adaptées et des métriques de suivi",
    ],
    faq: [
      { q: 'Quelle différence entre Claude et Claude Code ?', a: "Claude est l'assistant conversationnel généraliste d'Anthropic. Claude Code est l'outil de développement agentique construit sur les mêmes modèles : il travaille directement dans votre dépôt, lit les fichiers, exécute des commandes, lance les tests et prépare les commits. L'un répond, l'autre agit sur votre code." },
      { q: 'Quels sont les prérequis pour suivre la formation ?', a: "Être développeur ou travailler au quotidien dans le code (data engineer, SRE, QA automation). La formation se fait en conditions réelles : terminal, Git, votre stack. Aucune connaissance préalable de Claude Code ou des agents IA n'est nécessaire." },
      { q: 'Claude Code vs GitHub Copilot ou Cursor : pourquoi former sur Claude Code ?', a: "Les trois outils convergent vers l'agentique, et la méthode enseignée (cadrage, permissions, revue, conventions) se transpose. Claude Code est utilisé comme support car c'est la référence du développement agentique en 2026 : autonomie sur des tâches longues, mode headless pour le CI et standard ouvert MCP. Une déclinaison Copilot ou Cursor est possible en intra." },
      { q: 'Notre code est confidentiel : quelles garanties ?', a: "Le sujet est traité en module 8 : politiques de rétention d'Anthropic (pas d'entraînement sur les données des offres Team et Enterprise), permissions par environnement, exclusion des secrets, et règles internes à définir. La formation peut se faire sur un dépôt d'entraînement si votre politique l'exige." },
      { q: 'Faut-il des licences pour la formation ?', a: "Chaque participant a besoin d'un accès Claude (abonnement avec Claude Code inclus ou clé API fournie par votre entreprise). Nous vous aidons en amont à choisir la formule adaptée et à dimensionner les coûts d'usage, qui restent marginaux face au temps de développement gagné." },
      { q: 'Comment se former à Claude Code en entreprise ?', a: "Masteria propose une formation Claude Code de 2 jours, en intra-entreprise (jusqu'à 12 participants) ou en accompagnement individuel, en présentiel ou à distance. C'est une formation IA spécialisée pour développeurs, pas une sensibilisation généraliste : le programme se déroule sur votre propre codebase et chaque participant livre des tâches réelles (bug fix, refactoring, tests, revue de code assistée). Formation certifiée Qualiopi et finançable OPCO." },
    ],
    relatedSpokes: ['formation-vibe-coding', 'formation-claude-informatique', 'formation-prompt-engineering'],
  },

  // ── Vibe Coding × Développement & IT ─────────────────────────────────────
  {
    slug: "formation-vibe-coding",
    tool: "Vibe Coding",
    toolSlug: "vibe-coding",
    toolColor: "#2563EB",
    toolColorLight: "#dbeafe",
    metier: "Développement & IT",
    metierSlug: "informatique",
    hubSlug: "formation-multi-outils",
    priority: true,
    datePublished: "2026-07-01",
    updatedAt: "2026-07-01",
    updatedLabel: "Programme à jour · juillet 2026",
    metaTitle: "Formation Vibe Coding · Qualiopi · OPCO | Masteria",
    metaDesc: "Formation vibe coding pour non-développeurs : créez une app avec Lovable, Bolt et Cursor. 2 jours, prototype réel, sécurité, RGPD. Qualiopi, OPCO.",
    h1: "Formation vibe coding : construire une application en décrivant votre besoin à l'IA",
    intro: "Le vibe coding consiste à créer une application en décrivant son besoin en langage naturel à une IA qui génère le code à votre place, terme introduit par Andrej Karpathy en février 2025 et élu mot de l'année 2025 par le Collins English Dictionary. Cette formation vibe coding de 2 jours s'adresse aux profils métier (product, marketing, ops, fondateurs) qui veulent produire des prototypes, des MVP et des outils internes sans passer par l'IT. Vous partez d'une idée et vous repartez avec votre propre application construite pendant la session, sur les outils de référence (Lovable, Bolt.new, Cursor, v0, Replit). Le vibe coding reste un accélérateur de prototypage qui exige méthode, revue et cadrage RGPD, et c'est exactement ce que Masteria vous apprend à maîtriser.",
    audience: [
      { title: "Fondateurs et porteurs de projet", desc: "Vous voulez valider une idée, sortir un MVP ou une démo cliquable pour convaincre en interne ou lever, sans mobiliser une équipe de développeurs. Vous apprenez à passer de l'intention au produit qui tourne en quelques heures." },
      { title: "Product, marketing, ops et citizen developers", desc: "Vous n'êtes pas développeur mais vous avez des besoins concrets : un outil interne, une automatisation, un tableau de bord, un formulaire. Vous apprenez à vous les fabriquer vous-même, en cadrant les risques de sécurité et de données." },
      { title: "Responsables innovation et transformation", desc: "Vous voulez outiller vos équipes métier tout en évitant le shadow IT. Vous repartez avec des règles d'usage claires : quels outils, quelles données autorisées, quand passer la main à un développeur." },
    ],
    useCases: [
      { icon: "💻", title: "Prototype de A à Z", desc: "Transformer une idée en application cliquable (interface, données, déploiement) en décrivant le besoin en français." },
      { icon: "🎯", title: "MVP pour valider une idée", desc: "Sortir un produit minimum viable pour tester un marché ou convaincre avant d'investir dans du développement." },
      { icon: "🛠️", title: "Outil interne métier", desc: "Se fabriquer un calculateur, un tableau de bord ou un formulaire sans attendre un sprint de l'équipe IT." },
      { icon: "🔁", title: "Itérer par le test", desc: "Corriger et faire évoluer l'app en décrivant le problème ou en collant l'erreur, plutôt qu'en lisant chaque ligne." },
      { icon: "🧩", title: "Choisir le bon outil", desc: "Savoir quand utiliser Lovable, Bolt.new, Cursor, v0 ou Replit selon le besoin et le niveau technique visé." },
      { icon: "⚖️", title: "Sécurité et RGPD", desc: "Repérer les failles fréquentes, protéger les secrets et les données personnelles, savoir quand faire relire par un développeur." },
    ],
    modules: [
      { day: 1, title: "Module 1, Comprendre le vibe coding et choisir son outil", duration: "1h30", description: "Poser une définition claire du vibe coding, comprendre d'où vient la pratique et savoir quel outil correspond à quel besoin.", items: ["Définition et paternité du terme (Karpathy, février 2025) : décrire en langage naturel, juger sur le résultat observé", "La boucle du vibe coding : intention, génération, test, correction par prompt", "Panorama comparé des outils : Lovable, Bolt.new, Cursor, v0, Replit (profil visé, cas d'usage, type de sortie, limite principale)", "Choisir selon le besoin : prototype d'interface, outil interne, MVP full-stack, niveau technique requis"], exercise: "Chaque participant décrit son projet et sélectionne l'outil adapté à partir d'une grille de comparaison remise en séance, puis génère sa première page fonctionnelle en la décrivant en français." },
      { day: 1, title: "Module 2, Premier projet généré de bout en bout", duration: "2h", description: "Passer d'une idée floue à une première application qui tourne, en apprenant à décrire un besoin exploitable par l'IA.", items: ["Cadrer un cahier des charges en langage naturel : objectif, écrans, données, comportement attendu", "Générer l'échafaudage complet (interface, logique, données) et le faire tourner", "Le vibe check : juger l'application sur son comportement observé plutôt que sur le code ligne à ligne", "Versionner pour pouvoir revenir en arrière : la sauvegarde minimale avant d'itérer"], exercise: "Construire de zéro un premier prototype fonctionnel à partir de son propre besoin métier et le faire tourner en séance." },
      { day: 1, title: "Module 3, Itérer et déboguer par le test", duration: "2h", description: "Faire évoluer et corriger son application sans lire le code ligne à ligne, en pilotant l'IA par le comportement observé.", items: ["Décomposer une demande en petites étapes vérifiables plutôt qu'un gros prompt fourre-tout", "Corriger par prompt : décrire le problème ou coller le message d'erreur pour guider l'IA, puis relancer", "Fixer des règles de projet (type .cursorrules) pour des résultats plus constants d'une itération à l'autre", "Reconnaître la boucle improductive qui tourne en rond et savoir repartir d'une base propre"], exercise: "Ajouter deux fonctionnalités à son prototype et corriger trois anomalies uniquement par itérations de prompts et tests." },
      { day: 1, title: "Module 4, Construire un outil interne métier", duration: "1h30", description: "Bâtir un outil interne réutilisable qui réponde à un vrai besoin d'équipe que l'IT ne fournira pas à court terme.", items: ["Identifier un besoin métier adapté au vibe coding (calculateur, tableau de bord, formulaire, automatisation)", "Connecter des données simples et structurer une interface utilisable par des collègues", "Plateformes gouvernées orientées outils internes (type Retool, DronaHQ) : quand privilégier un cadre encadré", "Documenter et partager l'outil pour qu'un collègue puisse le reprendre et le faire évoluer"], exercise: "Chaque participant livre un outil interne connecté à un jeu de données, directement utilisable dans son service." },
      { day: 2, title: "Module 5, Qualité, sécurité et dette technique", duration: "2h", description: "Comprendre les risques réels du code généré vite et acquérir les réflexes de sécurité indispensables en entreprise.", items: ["Sécurité : les études (Veracode 2025) montrent que la sûreté du code généré ne progresse pas au rythme de sa capacité fonctionnelle", "Gestion des secrets : ne jamais coller d'identifiants dans un prompt, cloisonner les données", "Dette technique : pourquoi le code produit vite duplique et devient difficile à faire évoluer", "RGPD et données personnelles : ce qui peut entrer dans un prompt, ce qui ne doit jamais y entrer"], exercise: "Auditer son propre prototype avec une grille sécurité et RGPD, puis corriger les points bloquants et lister ce qui doit être relu par un développeur." },
      { day: 2, title: "Module 6, Les limites : quand ne pas vibe-coder", duration: "1h30", description: "Savoir reconnaître les situations où le vibe coding n'est pas adapté et où il faut passer la main.", items: ["Les 80 % faciles qui cachent 20 % coûteux : le point de rupture entre prototype et production", "Systèmes critiques, réglementés ou destinés à durer : pourquoi ils sortent du périmètre du vibe coding", "Le code qu'on ne comprend pas : coût réel du diagnostic quand un incident survient", "Quand passer la main à un développeur : signaux clairs et critères de décision"], exercise: "Classer une liste de besoins réels en trois catégories : vibe-codable, à cadrer, à confier à un développeur." },
      { day: 2, title: "Module 7, Déployer et partager son prototype", duration: "1h30", description: "Publier un prototype et le faire tester par de vrais utilisateurs, en connaissant précisément les limites de ce qui est livré.", items: ["Options de déploiement intégrées aux outils (Bolt.new, v0, Replit) et leurs différences", "Publier une version testable, partager un lien et récupérer des retours d'utilisateurs réels", "Gérer les variables d'environnement et la configuration sans exposer de secrets", "Coûts d'usage et de déploiement : anticiper la facture des itérations (outils facturés aux tokens)"], exercise: "Déployer son application, la partager pour un premier test utilisateur en séance et rédiger la fiche des limites et prochaines étapes." },
      { day: 2, title: "Module 8, Du prototype à la production et gouvernance d'équipe", duration: "1h30", description: "Transformer une pratique individuelle en capacité maîtrisée à l'échelle de l'équipe, sans shadow IT.", items: ["Pourquoi un prototype n'est pas un produit : tests, montée en charge, conformité, observabilité", "Charte d'usage : outils autorisés, données permises, limites du prototype, données interdites en prompt", "Circuit de relecture : quand et comment faire sécuriser un prototype par un développeur", "Cadrage financement et déploiement en France, Suisse et Belgique ; plan d'adoption sur 30 jours (projets pilotes, référents, montée en compétence)"], exercise: "Chaque participant repart avec une charte d'usage vibe coding et un plan d'adoption à 30 jours adaptés à son équipe." },
    ],
    objectives: [
      "Créer de zéro une application fonctionnelle en décrivant son besoin en langage naturel à l'IA",
      "Choisir l'outil adapté à chaque besoin parmi Lovable, Bolt.new, Cursor, v0 et Replit",
      "Piloter la génération et le débogage par l'itération de prompts et le test, sans lire le code ligne à ligne",
      "Repérer les limites du code généré (sécurité, RGPD, dette technique) et savoir quand faire relire par un développeur",
      "Déployer un prototype, le faire tester et cadrer les usages vibe coding de son équipe avec une charte pour éviter le shadow IT",
    ],
    faq: [
      { q: "Comment se former au vibe coding ?", a: "Masteria propose une formation vibe coding de 2 jours, en intra-entreprise jusqu'à 12 participants ou en accompagnement individuel, en présentiel ou à distance. Chaque participant construit sa propre application de zéro pendant la session, sur les outils de référence (Lovable, Bolt.new, Cursor, v0, Replit), et apprend à sécuriser ce qu'il produit. Formation certifiée Qualiopi et finançable OPCO." },
      { q: "Le vibe coding, c'est quoi exactement ?", a: "Le vibe coding consiste à créer une application en décrivant son besoin en langage naturel à une IA qui génère le code, terme introduit par Andrej Karpathy en février 2025. On pilote le résultat par l'usage et le test plutôt qu'en relisant chaque ligne, et on corrige par prompts successifs. Il s'agit d'un accélérateur de prototypage rapide qui exige tout de même cadrage, revue et respect du RGPD pour donner des résultats fiables en entreprise." },
      { q: "Faut-il savoir coder pour suivre cette formation ?", a: "Non. La formation est conçue pour des profils non-développeurs : product managers, marketeurs, ops, fondateurs, chefs de projet. Vous partez de zéro et le langage utilisé pour piloter l'IA est le français. La compétence enseignée consiste à savoir décrire son besoin, itérer et juger le résultat. Si vous codez déjà en production, notre formation Claude Code sera plus adaptée à vos enjeux." },
      { q: "Quels outils apprend-on : Lovable, Bolt ou Cursor ?", a: "Les cinq outils de référence sont couverts et comparés : Lovable et Bolt.new pour construire une app en chattant, v0 pour aller vers un cadre gouverné proche de la production, Replit pour construire et héberger au même endroit (idéal pour débuter sans installer d'environnement), et Cursor pour les participants les plus à l'aise techniquement qui veulent aller plus loin (édition multi-fichiers, règles de projet). Un module entier est dédié au choix de l'outil selon votre besoin et votre niveau, avec une grille de comparaison remise en séance." },
      { q: "La formation vibe coding est-elle finançable (Qualiopi, OPCO) ?", a: "Oui. Masteria est un organisme de formation certifié Qualiopi, ce qui ouvre la prise en charge par les OPCO pour les entreprises en France. Le tarif est de 1 980 € HT par jour, en intra comme en individuel. Pour les clients en Suisse et en Belgique, nous adaptons le montage financier au dispositif local, sans promesse d'OPCO hors France." },
      { q: "Quelle différence entre le vibe coding et la formation Claude Code ?", a: "Le vibe coding vise à construire vite en pilotant l'IA au ressenti : prototypes, MVP, outils internes, pour un public large souvent non-développeur. Notre formation Claude Code s'adresse aux développeurs professionnels qui délèguent des tâches d'ingénierie à un agent tout en gardant le contrôle : code de production, revue systématique, tests, CI/CD, sur leur propre codebase. Vous partez de zéro en code ? C'est cette page. Vous codez déjà en production ? Voir la formation Claude Code." },
    ],
    relatedSpokes: ["formation-claude-code", "formation-prompt-engineering", "formation-copilot-informatique"],
  },

  // ── Prompt Engineering × Tous métiers ────────────────────────────────────
  {
    slug: 'formation-prompt-engineering',
    tool: 'Prompt Engineering',
    toolSlug: 'prompt-engineering',
    toolColor: '#2563EB',
    toolColorLight: '#dbeafe',
    metier: 'Tous métiers',
    metierSlug: 'transverse',
    hubSlug: 'formation-multi-outils',
    priority: true,
    duration: '1j',
    metaTitle: 'Formation Prompt Engineering · Qualiopi | Masteria',
    metaDesc: "Formation prompt engineering pour vos équipes : méthode, techniques avancées, bibliothèques de prompts. 1 jour pratique, tous outils IA. Qualiopi, OPCO.",
    h1: 'Formation Prompt Engineering : des prompts professionnels, des résultats fiables',
    intro: "Le prompt engineering est la compétence qui détermine 80 % de la qualité de ce que vos équipes obtiennent de ChatGPT, Claude, Copilot, Gemini ou Mistral. Cette formation d'1 jour leur donne une méthode complète : structurer un prompt professionnel, fiabiliser les réponses, construire la bibliothèque de prompts de l'équipe. Ateliers sur vos cas réels, quel que soit l'outil déjà déployé chez vous.",
    audience: [
      { title: 'Équipes déjà utilisatrices d\'IA', desc: "Vos collaborateurs utilisent ChatGPT ou Copilot mais les résultats sont irréguliers : trop génériques, à reprendre, parfois faux. La méthode transforme ces usages intuitifs en pratique outillée et reproductible." },
      { title: 'Référents IA et formateurs internes', desc: "Vous diffusez les usages IA en interne. Vous repartez avec une grille de conception de prompts, des gabarits réutilisables et de quoi animer vos propres ateliers d'équipe." },
      { title: 'Métiers experts (juridique, finance, RH, technique)', desc: "Vos tâches exigent de la précision et un droit à l'erreur faible. Vous apprenez les techniques qui réduisent les hallucinations et imposent un format de sortie vérifiable." },
    ],
    useCases: [
      { icon: '🧱', title: 'Prompts structurés', desc: 'Rôle, contexte, contraintes, format, exemples : la structure qui change tout, applicable à tout outil.' },
      { icon: '🎯', title: 'Réponses fiables', desc: "Techniques anti-hallucination : ancrage sur documents, demande de sources, auto-vérification." },
      { icon: '📚', title: 'Bibliothèque d\'équipe', desc: 'Standardiser les 20 prompts qui couvrent 80 % des besoins récurrents du service.' },
      { icon: '🔁', title: 'Prompts système', desc: 'Encoder le ton, les règles et le contexte de l\'entreprise une fois pour toutes.' },
      { icon: '🧩', title: 'Tâches complexes', desc: 'Décomposer un livrable en étapes chaînées plutôt que tout demander en une fois.' },
      { icon: '⚖️', title: 'Multi-outils', desc: 'Adapter le même prompt à ChatGPT, Claude, Gemini, Copilot ou Mistral selon leurs forces.' },
    ],
    modules: [
      { day: 1, title: 'Module 1, Les fondamentaux : anatomie d\'un prompt fiable', duration: '1h45', description: "Comprendre pourquoi un prompt fonctionne ou échoue, et acquérir la structure de référence.", items: ["Comment un LLM « lit » votre prompt : ce que change le contexte, l'ordre, la formulation", 'La structure RCCFE : rôle, contexte, contraintes, format, exemples', 'Les 7 erreurs qui produisent des réponses génériques ou fausses', 'Atelier : réécrire 3 prompts réels de votre quotidien et comparer les sorties'], exercise: 'Chaque participant transforme un prompt vague de son quotidien en prompt structuré et mesure la différence.' },
      { day: 1, title: 'Module 2, Techniques avancées de fiabilisation', duration: '1h45', description: "Les techniques qui font passer d'une réponse correcte à une réponse exploitable telle quelle.", items: ['Few-shot : guider par l\'exemple pour imposer un style ou un format exact', 'Raisonnement pas à pas et décomposition des tâches complexes', "Ancrage documentaire : faire répondre à partir de VOS documents, pas de la mémoire du modèle", "Auto-critique et double passage : faire vérifier la réponse avant de la livrer"], exercise: "Construire un prompt d'analyse ancré sur un document interne, avec format de sortie imposé et vérification." },
      { day: 1, title: 'Module 3, Prompts système et bibliothèques d\'équipe', duration: '1h45', description: 'Passer de la performance individuelle à la pratique collective standardisée.', items: ["Prompts système : encoder l'entreprise, le ton, les règles, les interdits", 'Gabarits paramétrables : un prompt, des variables, dix usages', 'Organiser, versionner et partager la bibliothèque (Notion, SharePoint, outil interne)', 'Adapter les prompts aux spécificités de ChatGPT, Claude, Gemini, Copilot et Mistral'], exercise: "Construire les 10 premiers prompts de la bibliothèque de votre équipe, testés et documentés." },
      { day: 1, title: 'Module 4, Atelier sur vos cas réels et garde-fous', duration: '1h45', description: 'Appliquer la méthode sur vos vraies tâches et cadrer les usages.', items: ['Atelier intensif : chaque participant traite 2 tâches réelles de son poste', 'Données sensibles : ce qui peut entrer dans un prompt, ce qui ne doit jamais y entrer', 'Vérification et responsabilité : qui relit, qui valide, qui signe', "Plan d'action 30 jours : intégrer les prompts dans les rituels de l'équipe"], exercise: "Chaque participant repart avec ses prompts opérationnels et un plan d'usage personnel à 30 jours." },
    ],
    objectives: [
      'Structurer un prompt professionnel (rôle, contexte, contraintes, format, exemples) sur n\'importe quel outil IA',
      'Appliquer les techniques avancées : few-shot, décomposition, ancrage documentaire, auto-vérification',
      "Réduire les hallucinations et imposer des formats de sortie directement exploitables",
      "Construire et faire vivre la bibliothèque de prompts de l'équipe",
      'Identifier les limites : données sensibles, vérification, cas où l\'IA ne doit pas être utilisée',
    ],
    faq: [
      { q: 'La formation est-elle liée à un outil en particulier ?', a: "Non. La méthode s'applique à ChatGPT, Claude, Microsoft Copilot, Gemini et Mistral. Les ateliers se font sur l'outil déployé dans votre entreprise, et les différences entre outils sont traitées explicitement dans le module 3." },
      { q: 'Quel niveau faut-il pour suivre ?', a: "Avoir déjà utilisé un assistant IA, même occasionnellement, suffit. La formation ne demande aucune compétence technique : le prompt engineering est une compétence de formulation et de méthode, pas de programmation." },
      { q: 'Quelle différence avec une formation ChatGPT ou Copilot classique ?', a: "Une formation outil couvre l'écosystème d'un produit (fonctionnalités, intégrations, cas métier). Cette formation creuse LA compétence transversale qui conditionne la qualité des résultats sur tous les outils. Les deux se complètent : beaucoup de clients enchaînent formation outil puis prompt engineering pour les référents." },
      { q: 'Le prompt engineering sert-il encore avec les modèles récents ?', a: "Oui, et de plus en plus. Les modèles récents comprennent mieux les demandes vagues, mais l'écart entre un prompt moyen et un prompt expert reste majeur dès que la tâche est précise : format imposé, ton de marque, données internes, raisonnement multi-étapes. C'est exactement le périmètre des usages professionnels." },
      { q: 'Combien coûte la formation ?', a: "1 980 € la journée, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel sur mesure. Certifiée Qualiopi, finançable par votre OPCO jusqu'à 100 %." },
    ],
    relatedSpokes: ['formation-claude-code', 'formation-vibe-coding', 'formation-chatgpt-marketing'],
  },

  // ── IA × Dirigeants ──────────────────────────────────────────────────────
  {
    slug: 'formation-ia-dirigeants',
    tool: 'IA',
    toolSlug: 'ia-strategie',
    toolColor: '#2563EB',
    toolColorLight: '#dbeafe',
    metier: 'Dirigeants & COMEX',
    metierSlug: 'management',
    priority: true,
    duration: '1j',
    metaTitle: 'Formation IA dirigeants : COMEX & CODIR | Masteria',
    metaDesc: "Formation IA pour dirigeants, COMEX et CODIR : enjeux stratégiques, ROI, gouvernance, AI Act, feuille de route 90 jours. Confidentiel. Qualiopi, OPCO.",
    h1: 'Formation IA pour dirigeants : décider et piloter à l\'ère de l\'IA générative',
    intro: "Une journée conçue pour les comités de direction : comprendre ce que l'IA générative change réellement pour votre activité, arbitrer les investissements, cadrer les risques et repartir avec une feuille de route à 90 jours. Format confidentiel en intra, exemples adaptés à votre secteur, zéro jargon technique. Animée par le fondateur de Masteria, qui forme des COMEX de PME, ETI et groupes depuis 2022.",
    audience: [
      { title: 'CEO, DG et membres de COMEX', desc: "Vous devez arbitrer des investissements IA sans repère fiable entre les promesses des éditeurs et la réalité opérationnelle. La journée vous donne une grille de lecture concrète, fondée sur des déploiements réels." },
      { title: 'CODIR de PME et ETI', desc: "Vos équipes utilisent déjà l'IA, souvent sans cadre. Vous structurez la démarche : priorités, gouvernance, budget formation, communication interne, sans sur-investir." },
      { title: 'Directions de transformation et CDO', desc: "Vous portez le sujet IA en interne et devez embarquer le reste du comité. Le format COMEX partagé aligne tout le monde sur le même niveau d'information et de vocabulaire en une journée." },
    ],
    useCases: [
      { icon: '🧭', title: 'Vision claire du paysage', desc: "Capacités réelles et limites des outils en 2026, démonstrations en direct sur des cas de direction." },
      { icon: '💶', title: 'Arbitrages d\'investissement', desc: 'Lire un business case IA : coûts complets, gains réalistes, signaux d\'alerte.' },
      { icon: '🗺️', title: 'Feuille de route 90 jours', desc: 'Prioriser 3 cas d\'usage à fort impact et les conditions de leur réussite.' },
      { icon: '🛡️', title: 'Gouvernance et risques', desc: 'Charte IA, données sensibles, obligations AI Act : ce que le dirigeant doit cadrer lui-même.' },
      { icon: '🤝', title: 'Conduite du changement', desc: 'Embarquer managers et équipes : champions, formation en cascade, gestion des craintes.' },
      { icon: '📊', title: 'Pilotage par la valeur', desc: 'Les 5 indicateurs qui mesurent vraiment l\'adoption et le retour sur investissement.' },
    ],
    modules: [
      { day: 1, title: 'Module 1, Le paysage IA 2026 sans jargon', duration: '1h45', description: "Construire une vision juste de ce que les modèles savent faire, démontrée sur des cas de direction.", items: ["ChatGPT, Claude, Copilot, Gemini, Mistral : qui fait quoi, pour quel type d'entreprise", 'Démonstrations en direct : analyse de rapport, préparation de comité, note stratégique', "Ce que l'IA ne sait pas faire en 2026 : limites réelles, hallucinations, dépendances", "Agents IA : ce qui change quand l'IA agit au lieu de répondre"], exercise: 'Chaque dirigeant fait traiter en direct un document réel de son activité (anonymisé si besoin).' },
      { day: 1, title: 'Module 2, Cas d\'usage par direction et lecture du ROI', duration: '1h45', description: 'Passer des généralités aux gisements de valeur propres à votre organisation.', items: ['Cartographie des cas d\'usage par fonction : finance, RH, commercial, opérations, juridique', 'Retours chiffrés de déploiements réels en PME et ETI françaises', "Lire un business case IA : coûts cachés (formation, adoption, gouvernance), gains réalistes", 'Identifier vos 3 cas d\'usage prioritaires en séance'], exercise: 'Le comité construit sa matrice impact/effort sur ses propres processus.' },
      { day: 1, title: 'Module 3, Risques, gouvernance et obligations AI Act', duration: '1h45', description: "Cadrer ce qui relève de la responsabilité directe de la direction générale.", items: ["Données sensibles et confidentialité : ce que vos équipes envoient déjà aux modèles sans cadre", "Charte IA d'entreprise : les 10 décisions à trancher au niveau direction", "AI Act : calendrier réel, obligation de formation des collaborateurs (article 4), sanctions", 'Risques concurrentiels : ce que font déjà vos concurrents et le coût de l\'attentisme'], exercise: "Auto-diagnostic de maturité et d'exposition aux risques de votre organisation, restitué en séance." },
      { day: 1, title: 'Module 4, Votre feuille de route 90 jours', duration: '1h45', description: 'Transformer la journée en plan d\'exécution daté, avec responsables et indicateurs.', items: ['Séquencer : quick wins 30 jours, déploiements 90 jours, chantiers structurants', "Organisation : sponsor, champions métier, formation en cascade des équipes", 'Budget : ordres de grandeur licences, formation, accompagnement, et financements OPCO', 'Les 5 indicateurs de pilotage à mettre au tableau de bord du comité'], exercise: 'Chaque comité repart avec sa feuille de route 90 jours formalisée et présentable en interne.' },
    ],
    objectives: [
      "Évaluer ce que l'IA générative change concrètement pour votre secteur et votre modèle d'affaires",
      'Arbitrer un investissement IA avec une grille de lecture complète : coûts réels, gains réalistes, risques',
      "Cadrer la gouvernance : charte IA, données sensibles, obligations AI Act au niveau direction",
      'Repartir avec une feuille de route 90 jours priorisée, budgétée et présentable au conseil',
    ],
    faq: [
      { q: 'En quoi ce format diffère-t-il d\'une formation IA classique ?', a: "Tout est pensé pour un public de direction : pas de manipulation d'outil prolongée, mais des démonstrations, des arbitrages et des décisions. Le livrable est une feuille de route, pas une bibliothèque de prompts. Le niveau de confidentialité est adapté aux sujets de comité." },
      { q: 'Le contenu est-il adapté à notre secteur ?', a: "Oui, c'est la condition d'efficacité du format. Avant la session, un échange de cadrage identifie votre secteur, vos enjeux et 2 ou 3 documents types. Les démonstrations et cas d'usage de la journée sont construits dessus." },
      { q: 'Quel format : présentiel, distanciel, résidentiel ?', a: "Le format de référence est une journée en présentiel dans vos locaux ou en lieu tiers (format séminaire). Une version distancielle en 2 demi-journées existe. Beaucoup de clients l'intègrent à un séminaire stratégique annuel." },
      { q: 'Combien de participants maximum ?', a: "Jusqu'à 12 participants pour préserver les échanges entre pairs, ce qui couvre la plupart des COMEX et CODIR. Au-delà (top 30, top 50), nous construisons un dispositif en cascade : journée COMEX puis sessions managers." },
      { q: 'Est-ce finançable par notre OPCO ?', a: "Oui. La formation est certifiée Qualiopi et donc finançable par votre OPCO au titre du plan de développement des compétences, y compris pour les dirigeants salariés. 1 980 € la journée en intra. Nous gérons le dossier de prise en charge." },
    ],
    relatedSpokes: ['formation-ai-act', 'formation-sprint-ia-managers', 'formation-multi-outils-management'],
  },

  // ── AI Act × Conformité ──────────────────────────────────────────────────
  {
    slug: 'formation-ai-act',
    tool: 'AI Act',
    toolSlug: 'ai-act',
    toolColor: '#2563EB',
    toolColorLight: '#dbeafe',
    metier: 'Conformité & Gouvernance',
    metierSlug: 'transverse',
    priority: true,
    duration: '1j',
    metaTitle: 'Formation AI Act : conformité IA · Qualiopi | Masteria',
    metaDesc: "Formation AI Act 1 jour : obligations réelles, cartographie des risques, article 4, plan de conformité et gouvernance IA. Qualiopi, finançable OPCO.",
    h1: 'Formation AI Act : mettez votre entreprise en conformité avec le règlement européen',
    intro: "Le règlement européen sur l'IA (AI Act, souvent écrit « IA Act ») s'applique par paliers depuis février 2025 : pratiques interdites, obligation de maîtrise de l'IA pour les collaborateurs (article 4), puis obligations renforcées sur les systèmes à haut risque en 2026 et 2027. Cette formation d'1 jour transforme le texte en plan de conformité opérationnel : cartographie de vos usages, obligations réelles selon votre rôle, gouvernance, registre et formation des équipes.",
    audience: [
      { title: 'DPO, juristes et responsables conformité', desc: "Vous devez articuler AI Act et RGPD sans doubler les dispositifs. La formation détaille les obligations par rôle (fournisseur, déployeur) et la construction d'un dossier de conformité unifié." },
      { title: 'DSI et responsables IA', desc: "Vous tenez l'inventaire des systèmes et outils IA, officiels ou non. Vous apprenez à cartographier, classifier par niveau de risque et documenter sans paralyser les usages." },
      { title: 'DRH et directions générales', desc: "L'article 4 vous concerne directement : l'obligation de formation des collaborateurs est en vigueur depuis février 2025. Vous repartez avec un plan de mise en conformité formation, finançable OPCO." },
    ],
    useCases: [
      { icon: '🗂️', title: 'Inventaire de vos systèmes IA', desc: "Recenser les usages réels, y compris l'IA embarquée dans vos logiciels métier et le shadow IT." },
      { icon: '🚦', title: 'Classification par risque', desc: 'Appliquer la pyramide du règlement : interdit, haut risque, risque limité, risque minimal.' },
      { icon: '🎓', title: 'Obligation de formation (art. 4)', desc: 'Construire le dispositif de maîtrise de l\'IA exigé pour toute organisation utilisatrice.' },
      { icon: '📋', title: 'Registre et documentation', desc: 'Mettre en place le registre des systèmes et la documentation attendue en cas de contrôle.' },
      { icon: '⚖️', title: 'Articulation RGPD', desc: 'Un dossier de conformité unifié plutôt que deux silos juridiques parallèles.' },
      { icon: '🛡️', title: 'Gouvernance durable', desc: 'Charte IA, comité de gouvernance, processus d\'homologation des nouveaux usages.' },
    ],
    modules: [
      { day: 1, title: 'Module 1, Comprendre le règlement et son calendrier', duration: '1h45', description: "Acquérir la logique du texte pour savoir ce qui s'applique à vous, et quand.", items: ["La logique par niveaux de risque : ce que le règlement interdit, encadre ou laisse libre", 'Calendrier réel : février 2025 (interdictions, article 4), août 2025 (modèles), 2026-2027 (haut risque)', 'Qui est concerné : fournisseur, déployeur, importateur, et ce que ça change pour une PME', "Sanctions : jusqu'à 35 M€ ou 7 % du chiffre d'affaires mondial selon les manquements"], exercise: 'Quiz de positionnement : situer votre entreprise dans le règlement (rôles, échéances applicables).' },
      { day: 1, title: 'Module 2, Cartographier vos systèmes et classifier les risques', duration: '1h45', description: 'Passer du texte à votre réalité : inventaire et classification de VOS usages.', items: ["Méthode d'inventaire : usages officiels, IA embarquée dans les logiciels métier, shadow IT", 'Atelier de classification sur cas concrets : RH et recrutement, scoring, marketing, chatbots', 'Zoom haut risque : RH, éducation, crédit, infrastructures, et les exigences associées', "Transparence : quand faut-il dire qu'un contenu ou une interaction vient d'une IA"], exercise: 'Construire la première version de la cartographie IA de votre entreprise, classée par risque.' },
      { day: 1, title: 'Module 3, Vos obligations opérationnelles, dont l\'article 4', duration: '1h45', description: 'Détailler ce que vous devez faire concrètement, fonction par fonction.', items: ["Article 4 : l'obligation de maîtrise de l'IA des collaborateurs, en vigueur depuis février 2025", 'Construire le plan de formation conforme : qui former, à quoi, avec quelle preuve', "Obligations du déployeur : usage conforme, supervision humaine, surveillance et signalement", 'Documentation et registre : modèles de documents et niveau de détail attendu'], exercise: "Rédiger la trame du plan de formation article 4 de votre organisation (publics, contenus, preuves)." },
      { day: 1, title: 'Module 4, Plan de conformité et gouvernance', duration: '1h45', description: "Repartir avec un dispositif complet, daté et soutenable dans la durée.", items: ['Charte IA : règles d\'usage, données autorisées, validation humaine, outils approuvés', "Gouvernance : comité IA, processus d'homologation des nouveaux usages, revue périodique", 'Articulation AI Act et RGPD : un dossier unifié, AIPD et documentation croisées', 'Feuille de route 90 jours : actions, responsables, échéances réglementaires'], exercise: 'Chaque participant repart avec son plan de conformité 90 jours et les gabarits de documents.' },
    ],
    objectives: [
      "Situer précisément votre entreprise dans le règlement : rôle, systèmes concernés, échéances applicables",
      'Cartographier et classifier vos usages IA par niveau de risque, y compris le shadow IT',
      "Mettre en œuvre l'article 4 : un plan de formation des collaborateurs conforme et documenté",
      'Construire la gouvernance durable : charte, registre, comité, articulation avec le RGPD',
    ],
    faq: [
      { q: "L'AI Act concerne-t-il vraiment les PME qui ne font qu'utiliser ChatGPT ?", a: "Oui. Toute organisation qui utilise des systèmes d'IA est « déployeur » au sens du règlement. À minima, l'article 4 (maîtrise de l'IA des collaborateurs) s'applique depuis le 2 février 2025, et les obligations de transparence concernent les contenus générés. Les obligations lourdes restent toutefois concentrées sur les systèmes à haut risque." },
      { q: "La formation des collaborateurs est-elle vraiment obligatoire ?", a: "L'article 4 impose de garantir un « niveau suffisant de maîtrise de l'IA » aux personnes qui utilisent des systèmes d'IA pour votre compte. C'est une obligation de moyens : il faut un dispositif proportionné et documenté (formations, chartes, preuves). Cette journée vous donne le plan ; nos formations métier constituent ensuite la mise en œuvre, finançable OPCO." },
      { q: 'Quelles sont les sanctions encourues ?', a: "Le plafond atteint 35 M€ ou 7 % du chiffre d'affaires mondial pour les pratiques interdites, et 15 M€ ou 3 % pour la plupart des autres manquements. Les autorités de surveillance nationales montent en puissance sur 2026 : le risque réel à court terme est surtout réputationnel et commercial (appels d'offres, clients grands comptes qui auditent leurs fournisseurs)." },
      { q: 'Faut-il être juriste pour suivre la formation ?', a: "Non. La formation est conçue pour des profils mixtes (conformité, DSI, RH, direction) et explique chaque notion juridique à partir de cas concrets. Les juristes y trouvent la traduction opérationnelle ; les opérationnels, la compréhension du cadre." },
      { q: 'Quelle différence avec votre Sprint IA AI Act de 3 heures ?', a: "Le Sprint de 3 h sensibilise et donne les réflexes essentiels, idéal pour toucher largement les équipes. Cette journée complète outille les responsables de la conformité : cartographie, plan article 4, gouvernance, gabarits de documents. Beaucoup de clients combinent les deux : la journée pour le noyau conformité, le Sprint en cascade pour les équipes." },
    ],
    relatedSpokes: ['formation-gouvernance-ia', 'formation-sprint-ia-ai-act', 'formation-ia-dirigeants'],
  },

  // ── Gouvernance IA × Pilotage ────────────────────────────────────────────
  {
    slug: 'formation-gouvernance-ia',
    tool: 'Gouvernance IA',
    toolSlug: 'gouvernance-ia',
    toolColor: '#2563EB',
    toolColorLight: '#dbeafe',
    metier: 'DPO, DSI & Direction',
    metierSlug: 'transverse',
    priority: true,
    duration: '1j',
    datePublished: '2026-07-02',
    metaTitle: 'Formation gouvernance IA : registre, charte, comité | Masteria',
    metaDesc: "Formation gouvernance IA 1 jour : registre des usages, charte et politique IA, comité, gouvernance des données. Conformité IA en entreprise. Qualiopi, OPCO.",
    h1: "Formation gouvernance IA : installez le dispositif qui encadre vos usages",
    intro: "Cette formation d'1 jour outille l'équipe qui pilote l'IA dans votre organisation : construire le registre des usages, écrire la charte et la politique IA, installer le comité de gouvernance et organiser la gouvernance des données. Elle complète notre formation AI Act : le règlement y sert de socle, résumé en début de journée, et le cœur du programme porte sur le dispositif qui maintient la conformité IA de l'entreprise dans la durée. Vous repartez avec des gabarits directement réutilisables : trame de registre, charte, feuille de route 90 jours.",
    audience: [
      { title: 'DPO, juristes et responsables conformité', desc: "Vous portez déjà le RGPD et l'AI Act s'ajoute à votre périmètre. La journée vous donne les outils du quotidien : registre des usages, processus de validation des nouveaux usages, preuves à conserver pour démontrer la conformité IA de l'entreprise." },
      { title: 'DSI, RSSI et responsables data', desc: "Les outils d'IA entrent par les métiers, avec ou sans validation. Vous apprenez à recenser ces usages, shadow IT compris, à définir les règles de circulation des données et à arbitrer les demandes d'outils avec des critères explicites." },
      { title: 'Directions générales et référents IA', desc: "Vous devez décider ce qui est autorisé, encadré ou interdit, puis faire vivre ces règles. La journée structure le comité de gouvernance, ses rituels et ses indicateurs, pour garder la visibilité sur des usages qui se multiplient." },
    ],
    useCases: [
      { icon: '🗺️', title: 'Registre des usages IA', desc: "Construire l'inventaire vivant : usages, propriétaires, données mobilisées, niveau de risque." },
      { icon: '📜', title: 'Charte et politique IA', desc: "Rédiger des règles lisibles : outils approuvés, données autorisées, validation humaine." },
      { icon: '🧭', title: 'Comité de gouvernance IA', desc: "Composer l'instance, définir ses rituels et son processus d'arbitrage des nouveaux usages." },
      { icon: '🔐', title: 'Gouvernance des données', desc: 'Cadrer ce qui peut circuler vers quels outils : minimisation, cloisonnement, traçabilité des flux.' },
      { icon: '👁️', title: 'Supervision humaine', desc: 'Placer les points de contrôle humain sur les décisions sensibles et documenter les revues.' },
      { icon: '📈', title: 'Pilotage dans la durée', desc: 'Suivre des indicateurs simples : couverture du registre, incidents, conformité des nouveaux usages.' },
    ],
    modules: [
      { day: 1, title: 'Module 1, Le cadre de la gouvernance IA', duration: '1h45', description: "Poser le vocabulaire, le périmètre et les responsabilités avant d'outiller.", items: ["Ce que recouvre la gouvernance de l'IA : registre, politique, comité, supervision, données", "Le socle réglementaire en langage clair : AI Act (niveaux de risque, échéances) et RGPD", 'Qui fait quoi : direction, DPO, DSI, métiers, et les responsabilités de chacun', 'Les six briques du dispositif et leur ordre de mise en place selon votre maturité'], exercise: "Autodiagnostic de maturité : chaque participant situe son organisation sur les six briques du dispositif de gouvernance." },
      { day: 1, title: 'Module 2, Le registre des usages comme outil de pilotage', duration: '1h45', description: "Passer de l'inventaire ponctuel au référentiel vivant qui structure les décisions.", items: ["Méthode de recensement : usages déclarés, IA embarquée dans les logiciels métier, shadow IT", "La fiche d'usage : finalité, propriétaire, données mobilisées, niveau de risque, statut", 'Prioriser : quels usages traiter en premier, lesquels surveiller, lesquels fermer', 'Faire vivre le registre : qui le met à jour, à quel rythme, déclenché par quels événements'], exercise: 'Construire la première version du registre sur les usages réels des participants, avec la trame fournie.' },
      { day: 1, title: 'Module 3, Charte, politique IA et gouvernance des données', duration: '1h45', description: 'Écrire des règles que les équipes liront et appliqueront.', items: ["Structure d'une charte IA efficace : autorisé, encadré, interdit, et le circuit de validation", 'Politique de données : ce qui peut sortir vers quels outils, minimisation, cloisonnement', 'Adapter les règles aux populations : métiers, développeurs, direction, prestataires', 'Diffuser et faire adopter : formation des équipes, rappels intégrés aux outils, points relais'], exercise: 'Rédiger la trame de charte IA de votre organisation à partir du gabarit, en traitant vos cas limites.' },
      { day: 1, title: 'Module 4, Comité de gouvernance et pilotage dans la durée', duration: '1h45', description: "Installer l'instance qui arbitre et le rythme qui maintient le dispositif.", items: ['Composer le comité : membres, mandat, fréquence, articulation avec les instances existantes', "Le processus d'homologation d'un nouvel usage : demande, instruction, décision, suivi", "Indicateurs de pilotage : couverture du registre, délais d'homologation, incidents", 'Feuille de route 90 jours : lancer le dispositif avec des jalons visibles'], exercise: 'Chaque participant repart avec sa feuille de route 90 jours : premières actions, responsables, jalons.' },
    ],
    objectives: [
      'Construire le registre des usages IA de votre organisation et le maintenir dans le temps',
      'Rédiger une charte et une politique IA claires, adaptées à vos populations et à vos données',
      'Installer un comité de gouvernance qui arbitre les nouveaux usages avec un processus explicite',
      "Piloter la conformité IA de l'entreprise avec des indicateurs simples et une feuille de route 90 jours",
    ],
    faq: [
      { q: 'Quelle différence avec la formation AI Act ?', a: "La formation AI Act part du règlement : obligations, calendrier, article 4, plan de conformité. Cette journée part du dispositif : registre, charte, comité, gouvernance des données, indicateurs. Le règlement y est résumé en début de journée comme socle, puis tout le temps est consacré à construire et animer la gouvernance. Les deux se combinent bien : AI Act pour les responsables de la conformité, gouvernance IA pour l'équipe qui pilote les usages au quotidien." },
      { q: "Faut-il déjà avoir des usages d'IA en place ?", a: "C'est le cas le plus fréquent et le plus utile : les exercices s'appuient sur vos usages réels pour construire le registre et la charte. Une organisation qui démarre en tire aussi profit : elle installe le cadre avant que les usages ne se multiplient, ce qui évite de courir après le shadow IT ensuite." },
      { q: 'Qui doit participer à cette formation ?', a: "Le noyau qui portera le dispositif : DPO ou responsable conformité, DSI ou responsable data, et un représentant de la direction ou le référent IA. Les binômes et trinômes d'une même organisation sont idéaux : le registre, la charte et la feuille de route se construisent en séance, à plusieurs voix. Jusqu'à 12 participants." },
      { q: 'La formation est-elle finançable par notre OPCO ?', a: "Oui. La formation est certifiée Qualiopi et finançable par votre OPCO au titre du plan de développement des compétences. Le tarif est de 1 980 € HT la journée, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Nous gérons le dossier de prise en charge." },
      { q: 'Quel lien avec votre offre de conseil en gouvernance IA ?', a: "La formation rend votre équipe autonome pour construire et faire vivre le dispositif. Le conseil en gouvernance IA, décrit sur notre page dédiée, va plus loin : nous auditons, cadrons et installons le dispositif avec vous. Beaucoup d'organisations combinent les deux : le conseil pour poser le socle, la formation pour transférer la maîtrise aux équipes. À noter : la formation est finançable OPCO, le conseil ne l'est pas." },
    ],
    relatedSpokes: ['formation-ai-act', 'formation-ia-dirigeants', 'formation-sprint-ia-ai-act'],
  },

  // ── IA × QSE ─────────────────────────────────────────────────────────────
  {
    slug: 'formation-ia-qse',
    duration: '1j',
    tool: 'Multi-outils IA', toolSlug: 'multi-outils', toolColor: '#6366f1', toolColorLight: '#e0e7ff',
    metier: 'QSE', metierSlug: 'qse', hubSlug: 'formation-intelligence-artificielle', priority: true,
    datePublished: '2026-07-02',
    metaTitle: 'Formation IA pour responsable QSE / HSE | Masteria',
    metaDesc: "Formation IA pour responsable QSE : veille réglementaire, document unique, procédures, analyses d'accidents, audits. 1 jour, certifié Qualiopi, finançable OPCO.",
    h1: 'Formation IA pour responsables QSE / HSE',
    intro: "Veille réglementaire, document unique, procédures, analyses d'accidents, audits internes, reporting : le quotidien QSE repose sur des écrits normés et de l'analyse documentaire, le terrain où l'IA générative fait gagner le plus de temps. Cette formation d'1 jour donne aux responsables QSE et HSE une méthode et des prompts métier éprouvés, avec les règles de confidentialité qui s'imposent sur les données de santé et de sécurité.",
    useCases: [
      { icon: '📜', title: 'Veille réglementaire HSE', desc: "Suivre les évolutions du code du travail, des régimes ICPE et des normes ISO, et produire une synthèse d'impact pour votre site." },
      { icon: '🗂️', title: 'Document unique & risques', desc: 'Préparer et mettre à jour le DUERP : formulations, cotations, plans d\'action associés.' },
      { icon: '📝', title: 'Procédures & modes opératoires', desc: 'Rédiger ou réviser une procédure claire à partir de notes terrain et de photos d\'atelier.' },
      { icon: '🔎', title: "Analyses d'accidents", desc: "Structurer un arbre des causes et rédiger le compte rendu d'analyse d'un accident ou presqu'accident." },
      { icon: '✅', title: 'Audits & non-conformités', desc: "Préparer les grilles d'audit interne et formuler des fiches de non-conformité exploitables." },
      { icon: '📊', title: 'Reporting QSE & CSRD', desc: 'Transformer les données sécurité et environnement en synthèses lisibles pour la direction.' },
    ],
    program: [
      { title: 'Matin, Boîte à outils IA pour la QSE', items: ["Cartographier ses tâches QSE : où l'IA aide vraiment", 'ChatGPT, Copilot, Gemini, Claude, Mistral : qui fait quoi pour la qualité, la sécurité et l\'environnement', "Confidentialité : données de santé, d'accidents et d'audit, les règles avant de commencer", 'Construire ses prompts métier QSE : procédures, veille, analyses'] },
      { title: 'Après-midi, Cas pratiques sur vos documents', items: ['Produire une synthèse de veille réglementaire ciblée sur votre secteur', 'Mettre à jour une section du document unique à partir de notes terrain', "Analyser un presqu'accident : arbre des causes et compte rendu", "Préparer un audit interne : grille, questions, fiche de non-conformité"] },
    ],
    faq: [
      { q: "Peut-on utiliser l'IA sur des données d'accidents du travail ?", a: "Avec des précautions strictes : les données de santé sont des données sensibles au sens du RGPD. La formation pose les règles : anonymisation avant tout traitement, offre entreprise avec accord de traitement des données, jamais de données nominatives dans un outil grand public. Les cas pratiques travaillent sur des données anonymisées." },
      { q: 'La formation couvre-t-elle les normes ISO 9001, 14001 et 45001 ?', a: "Oui, les cas pratiques s'appuient sur les processus de ces référentiels : préparation d'audits internes, revues de direction, gestion des non-conformités et des actions correctives. L'IA accélère la préparation documentaire, l'auditeur garde la main sur l'évaluation." },
      { q: 'Quels outils sont utilisés pendant la journée ?', a: "La formation suit notre méthode multi-outils : ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI sont comparés sur vos cas QSE, puis la journée se concentre sur les outils disponibles dans votre environnement. Vous repartez avec des critères de choix clairs." },
      { q: 'Combien ça coûte ?', a: "1 980 €/jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. 100 % finançable OPCO." },
    ],
    relatedSpokes: ['formation-ia-achats', 'formation-ia-analyse-donnees', 'formation-ia-ecrits-pro'],
  },

]

// Merge enriched data into base spokes by slug
const ALL_ENRICHED = [...CHATGPT_SPOKES, ...COPILOT_SPOKES, ...GEMINI_SPOKES, ...CLAUDE_SPOKES, ...MISTRAL_SPOKES, ...MULTI_OUTILS_SPOKES]
// Les multi-outils n'existent pas dans BASE_SPOKES : on les ajoute directement
const ALL_BASE_SPOKES = [...BASE_SPOKES, ...MULTI_OUTILS_SPOKES]
export const SPOKES = ALL_BASE_SPOKES.map(spoke => {
  const enriched = ALL_ENRICHED.find(e => e.slug === spoke.slug)
  if (!enriched) return { ...spoke, testimonials: TESTIMONIALS[spoke.slug] ?? [] }
  return {
    ...spoke,
    // Prefer enriched SEO content when defined (shorter titles, better GEO-formatted intro)
    metaTitle: enriched.metaTitle ?? spoke.metaTitle,
    metaDesc: enriched.metaDesc ?? spoke.metaDesc,
    h1: enriched.h1 ?? spoke.h1,
    intro: enriched.intro ?? spoke.intro,
    // Enrich with modules, audience, objectives
    modules: enriched.modules,
    audience: enriched.audience,
    objectives: enriched.objectives,
    // prefer enriched faq (longer, more detailed) over base faq
    faq: enriched.faq ?? spoke.faq,
    // prefer enriched useCases if they exist as plain strings, keep base icon-based ones otherwise
    useCasesRaw: enriched.useCases,
    testimonials: TESTIMONIALS[spoke.slug] ?? [],
  }
})

// Helper functions
export function getSpokeBySlug(slug) {
  return SPOKES.find(s => s.slug === slug);
}

export function getHubById(id) {
  return HUBS.find(h => h.id === id);
}

export function getSpokesByTool(toolSlug) {
  return SPOKES.filter(s => s.toolSlug === toolSlug);
}

export function getSpokesByMetier(metierSlug) {
  // 'rh' et 'ressources-humaines' sont synonymes dans les données
  const norm = s => (s === 'rh' ? 'ressources-humaines' : s)
  return SPOKES.filter(s => norm(s.metierSlug) === norm(metierSlug))
}

