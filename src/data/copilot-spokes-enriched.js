// Copilot spokes, programmes 2 jours enrichis (E-E-A-T, modules détaillés, FAQ)
export const COPILOT_SPOKES = [
  // ─── MARKETING ───────────────────────────────────────────────────────────────
  {
    id: 'formation-copilot-marketing',
    tool: 'Copilot',
    metier: 'Marketing',
    slug: 'formation-copilot-marketing',
    title: 'Formation Microsoft Copilot pour le Marketing',
    shortTitle: 'Copilot Marketing',
    metaTitle: 'Formation Microsoft Copilot Marketing | Masteria, Certifié Qualiopi',
    metaDescription:
      'Utilisez Microsoft 365 Copilot pour créer contenus, analyses et campagnes marketing en moitié moins de temps. Formation 2 jours, certifiée Qualiopi, finançable OPCO.',
    priority: true,
    color: '#2563EB',
    audience: [
      {
        title: 'Responsables & chefs de projet marketing',
        description:
          "Vous pilotez des campagnes multicanal et manquez de temps pour produire des contenus de qualité. Copilot vous libère des tâches répétitives pour vous concentrer sur la stratégie.",
      },
      {
        title: 'Chargés de communication & community managers',
        description:
          "Vous produisez quotidiennement posts, newsletters et reportings. Copilot dans Teams, Word et Outlook vous permet de multiplier votre output sans sacrifier la cohérence de marque.",
      },
      {
        title: 'Directeurs marketing PME/ETI',
        description:
          "Avec une petite équipe, vous faites tout : stratégie, contenu, analyse. Copilot joue le rôle d'un assistant senior disponible 24h/24 pour documenter, rédiger et synthétiser.",
      },
    ],
    useCases: [
      'Rédiger 5 variantes de post LinkedIn pour un lancement produit en 10 minutes',
      'Synthétiser 50 retours clients en 3 insights actionnables dans Word',
      'Transformer un brief PDF en plan de campagne structuré via Copilot dans Teams',
      'Générer un tableau de bord performance mensuel depuis les données Excel',
      'Créer une présentation PowerPoint de pitch complète à partir de notes brutes',
      'Automatiser les compte-rendus de réunion marketing dans Teams',
    ],
    objectives: [
      'Maîtriser Copilot dans l\'écosystème Microsoft 365 (Word, Excel, PowerPoint, Teams, Outlook)',
      'Créer des prompts marketing efficaces adaptés à chaque canal de communication',
      'Produire contenus, briefs et reportings en deux fois moins de temps',
      'Intégrer Copilot dans les workflows marketing existants sans disruption',
      'Maintenir la cohérence de marque et le ton éditorial avec l\'assistance IA',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot dans l\'écosystème Microsoft 365 Marketing',
        duration: '1h30',
        description:
          "Panorama de Copilot intégré à chaque outil M365. Comprendre comment Copilot accède à vos fichiers OneDrive, emails et calendriers pour devenir votre assistant marketing contextuel.",
        items: [
          'Architecture Copilot M365 : qui voit quoi, quelles données sont utilisées',
          'Activation et configuration pour une équipe marketing',
          'Différences clés Copilot vs ChatGPT : travail sur VOS fichiers vs internet',
          'Premiers prompts marketing dans Word et Teams',
        ],
        exercise:
          "Connecter Copilot à votre OneDrive et générer un résumé de vos 3 derniers briefs marketing réels.",
      },
      {
        day: 1,
        title: 'Création de contenu avec Word & Copilot',
        duration: '2h',
        description:
          "Rédiger articles de blog, fiches produit, newsletters et posts réseaux sociaux directement dans Word avec Copilot. Techniques de prompt pour maintenir le ton de marque.",
        items: [
          'Prompts de création : article, fiche produit, email de nurturing',
          'Reformuler, allonger, raccourcir : les 5 commandes essentielles',
          'Injecter le style de marque : exemple de prompt système marketing',
          'Décliner un contenu en 5 formats depuis un seul brief Word',
        ],
        exercise:
          "À partir d'un brief produit réel (votre fichier), générer 3 variantes de post LinkedIn et un email promotionnel en 20 minutes.",
      },
      {
        day: 1,
        title: 'Analyse de données marketing avec Excel Copilot',
        duration: '1h30',
        description:
          "Exploiter Copilot dans Excel pour analyser performances campagnes, identifier tendances et générer des insights sans toucher à une formule. Du tableau brut au rapport actionnable.",
        items: [
          'Interroger un tableau de données en langage naturel',
          'Créer graphiques et synthèses automatiquement',
          'Détecter les anomalies et tendances dans les KPIs campagnes',
          'Générer des recommandations depuis les données historiques',
        ],
        exercise:
          "Analyser votre tableau de résultats campagne mensuel : 5 insights en 15 minutes avec Copilot Excel.",
      },
      {
        day: 1,
        title: 'Présentations et réunions marketing avec PowerPoint & Teams',
        duration: '1h',
        description:
          "Créer des présentations marketing percutantes et automatiser les compte-rendus de réunion. Copilot dans PowerPoint génère slides et design à partir de vos notes.",
        items: [
          'Générer une présentation PowerPoint depuis un document Word ou prompt',
          'Copilot dans Teams : transcription et résumé automatique des réunions',
          'Créer des to-do lists marketing depuis un compte-rendu de réunion',
          'Partager et co-éditer avec Copilot en contexte d\'équipe',
        ],
        exercise:
          "Transformer votre dernier compte-rendu de réunion en liste d'actions prioritaires et en slides de synthèse.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Workflows avancés : campagnes multicanal avec Copilot',
        duration: '2h',
        description:
          "Construire un workflow complet de campagne depuis le brief jusqu'à l'exécution multicanal. Copilot comme chef d'orchestre entre vos outils M365.",
        items: [
          'Workflow brief → plan de campagne → contenus → reporting en M365',
          'Copilot dans Outlook : gérer les briefs clients, rédiger des propositions',
          'Créer un calendrier éditorial structuré depuis un objectif marketing',
          'Templates de prompts réutilisables pour chaque type de campagne',
        ],
        exercise:
          "Construire le workflow complet d'un lancement produit (brief → contenus → reporting) avec Copilot, sur votre prochain projet réel.",
      },
      {
        day: 2,
        title: 'Prompts avancés pour le marketing',
        duration: '1h30',
        description:
          "Maîtriser les techniques de prompting avancées pour obtenir des résultats marketing professionnels : personas, ton de marque, formats spécifiques, itération rapide.",
        items: [
          'Prompt engineering marketing : structure persona + contexte + format + contrainte',
          'Créer sa bibliothèque de prompts marketing réutilisables dans M365',
          'Itération rapide : affiner en 3 tours pour un résultat publication-ready',
          'Éviter les erreurs : hallucinations, dilution de marque, tonalité incorrecte',
        ],
        exercise:
          "Construire et tester 5 prompts métier personnalisés pour vos cas d'usage marketing récurrents.",
      },
      {
        day: 2,
        title: 'Veille, synthèse et intelligence marketing',
        duration: '1h30',
        description:
          "Utiliser Copilot pour transformer la veille concurrentielle, les retours clients et les études en insights actionnables. Synthétiser l'information rapidement.",
        items: [
          'Synthétiser des rapports PDF, études de marché et NPS avec Copilot',
          'Créer des fiches concurrentielles depuis des documents réels',
          'Transformer 100 verbatims clients en insights structurés',
          'Construire un dashboard veille hebdomadaire automatisé',
        ],
        exercise:
          "Analyser 20 retours clients réels et générer une fiche insights prête pour le COMEX en 30 minutes.",
      },
      {
        day: 2,
        title: 'Intégration & gouvernance : déployer Copilot dans l\'équipe marketing',
        duration: '1h',
        description:
          "Structurer l'usage de Copilot au sein de l'équipe : bonnes pratiques, limites, gouvernance des données. Plan d'action individuel pour les 30 premiers jours.",
        items: [
          'Règles de gouvernance : données confidentielles, droits d\'auteur, validation',
          'Former ses collègues : créer des guides de prompts pour l\'équipe',
          'Mesurer le ROI de Copilot : temps gagné, volume produit, qualité',
          'Plan d\'action 30 jours : 3 cas d\'usage à implémenter immédiatement',
        ],
        exercise:
          "Chaque participant repart avec son plan d'action personnalisé et ses 5 prompts marketing validés.",
      },
    ],
    faq: [
      {
        q: 'Faut-il avoir une licence Microsoft 365 Copilot pour suivre cette formation ?',
        a: "Oui, Microsoft 365 Copilot est une licence supplémentaire (environ 30 €/mois/utilisateur). Masteria peut vous aider à évaluer si l'investissement est pertinent avant la formation. En intra-entreprise, nous pouvons organiser la formation en utilisant les licences existantes de votre entreprise.",
      },
      {
        q: 'Quelle est la différence entre cette formation et une formation ChatGPT pour le marketing ?',
        a: "Copilot est intégré directement dans Microsoft 365 : il accède à VOS fichiers OneDrive, vos emails, vos réunions Teams. ChatGPT nécessite de copier-coller le contenu manuellement. Copilot est donc plus adapté aux équipes qui vivent dans Word, Excel, PowerPoint et Outlook au quotidien.",
      },
      {
        q: 'Nos données marketing sont-elles sécurisées avec Copilot ?',
        a: "Oui. Microsoft 365 Copilot utilise uniquement les données auxquelles vous avez accès dans votre tenant M365, hébergées dans votre environnement Microsoft. Vos données ne sont pas utilisées pour entraîner les modèles IA. La formation inclut un module de gouvernance sur ce sujet.",
      },
      {
        q: 'La formation est-elle adaptée aux PME qui ont peu de ressources marketing ?',
        a: "Absolument. Copilot est particulièrement utile dans les PME où une personne gère à la fois la stratégie, la création de contenu et l'analyse. C'est précisément pour ce profil que la formation a été conçue : maximiser l'impact avec des ressources limitées.",
      },
      {
        q: 'Peut-on financer cette formation via notre OPCO ?',
        a: "Oui, cette formation est finançable via les OPCO (Opérateurs de Compétences) dans le cadre du plan de développement des compétences. Masteria est certifié Qualiopi, ce qui est obligatoire pour accéder à ces financements. Contactez-nous pour un devis adapté à votre situation.",
      },
    ],
  },

  // ─── RESSOURCES HUMAINES ─────────────────────────────────────────────────────
  {
    id: 'formation-copilot-rh',
    tool: 'Copilot',
    metier: 'Ressources Humaines',
    slug: 'formation-copilot-rh',
    title: 'Formation Microsoft Copilot pour les RH',
    shortTitle: 'Copilot RH',
    metaTitle: 'Formation Microsoft Copilot RH | Masteria, Certifié Qualiopi',
    metaDescription:
      'Optimisez recrutement, formation et gestion administrative RH avec Microsoft 365 Copilot. Formation 2 jours pratique, certifiée Qualiopi, finançable OPCO.',
    priority: false,
    color: '#7C3AED',
    audience: [
      {
        title: 'Responsables RH et DRH',
        description:
          "Vous pilotez des processus RH complexes avec des équipes réduites. Copilot vous aide à industrialiser la production de documents, analyser les données sociales et préparer vos comités RH.",
      },
      {
        title: 'Chargés de recrutement & talent acquisition',
        description:
          "Vous rédigez des dizaines d'offres, analysez des centaines de CV et maintenez des candidats engagés. Copilot automatise la partie rédactionnelle et analytique pour que vous vous concentriez sur le contact humain.",
      },
      {
        title: 'Gestionnaires de formation & développement RH',
        description:
          "Vous construisez des plans de formation, suivez des KPIs et rédigez des cahiers des charges. Copilot dans Excel et Word vous fait gagner plusieurs heures par semaine sur ces livrables.",
      },
    ],
    useCases: [
      'Rédiger une offre d\'emploi optimisée depuis une fiche de poste en 5 minutes',
      'Analyser 200 CV dans Excel pour identifier les profils prioritaires',
      'Préparer les entretiens annuels avec des questions personnalisées par collaborateur',
      'Synthétiser un accord collectif ou convention collective en points clés',
      'Créer un livret d\'accueil complet pour les nouveaux arrivants',
      'Automatiser les compte-rendus de réunions RH dans Teams',
    ],
    objectives: [
      'Automatiser la rédaction de documents RH récurrents (offres, contrats, procédures)',
      'Utiliser Copilot dans Excel pour analyser données sociales et KPIs RH',
      'Optimiser les processus de recrutement avec des prompts adaptés',
      'Créer des supports de formation et d\'onboarding plus rapidement',
      'Intégrer Copilot dans les outils M365 utilisés quotidiennement par les RH',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot M365 pour les RH : panorama et premiers pas',
        duration: '1h30',
        description:
          "Comprendre comment Copilot s'intègre dans l'environnement M365 des RH. Configuration, sécurité des données RH sensibles, premiers prompts RH dans Word et Teams.",
        items: [
          'Copilot dans le quotidien RH : Word, Excel, Outlook, Teams, SharePoint',
          'Sécurité et confidentialité des données RH dans M365 Copilot',
          'Premiers prompts RH : rédiger, synthétiser, analyser',
          'Différence entre Copilot et les outils IA généralistes pour les RH',
        ],
        exercise:
          "Configurer Copilot avec votre OneDrive RH et générer un résumé d'une politique interne réelle.",
      },
      {
        day: 1,
        title: 'Recrutement assisté par Copilot',
        duration: '2h',
        description:
          "Accélérer toutes les étapes du recrutement : offres, tri de candidatures, préparation d'entretiens, messages aux candidats. Copilot comme assistant recruteur senior.",
        items: [
          'Rédiger des offres d\'emploi attractives et inclusives depuis une fiche de poste',
          'Créer une grille d\'évaluation entretien personnalisée par poste',
          'Rédiger les messages de suivi candidat pour chaque étape du process',
          'Analyser un pool de candidats dans Excel pour prioriser les profils',
        ],
        exercise:
          "Rédiger une offre d'emploi complète et une grille d'entretien pour un poste réel de votre entreprise en 25 minutes.",
      },
      {
        day: 1,
        title: 'Documentation RH et gestion administrative',
        duration: '1h30',
        description:
          "Industrialiser la production de documents RH récurrents : contrats, procédures, notes internes, comptes-rendus. Copilot dans Word comme ghostwriter RH.",
        items: [
          'Templates de prompts pour les documents RH courants',
          'Mettre à jour des procédures internes depuis une nouvelle réglementation',
          'Synthétiser accords collectifs, CCN et documents légaux en points clés',
          'Créer des FAQ employés depuis les questions récurrentes',
        ],
        exercise:
          "Mettre à jour une procédure RH réelle (ex. procédure d'onboarding) en intégrant les dernières évolutions légales.",
      },
      {
        day: 1,
        title: 'Réunions et communication RH avec Teams & Outlook',
        duration: '1h',
        description:
          "Automatiser les compte-rendus de réunion, préparer les comités RH et structurer les communications internes avec Copilot dans Teams et Outlook.",
        items: [
          'Transcription et résumé automatique des réunions Teams RH',
          'Créer des to-do lists et décisions depuis un compte-rendu',
          'Préparer un comité RH avec Copilot : agenda, points clés, données sociales',
          'Rédiger des communications internes sensibles (annonces, changements org)',
        ],
        exercise:
          "Transformer votre dernier compte-rendu de réunion RH en décisions structurées et plan d'actions assigné.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Analyse de données sociales avec Excel Copilot',
        duration: '2h',
        description:
          "Exploiter Copilot dans Excel pour analyser turnover, absentéisme, satisfaction, pyramide des âges. Du tableau de bord statique à l'analyse dynamique en langage naturel.",
        items: [
          'Interroger votre bilan social en langage naturel',
          'Créer des visualisations RH automatiquement depuis les données brutes',
          'Identifier les tendances et alertes dans les KPIs sociaux',
          'Préparer le bilan social et les rapports légaux plus rapidement',
        ],
        exercise:
          "Analyser votre tableau de données RH (absentéisme, turnover) et générer 5 insights pour le CODIR en 20 minutes.",
      },
      {
        day: 2,
        title: 'Onboarding, formation et développement des compétences',
        duration: '1h30',
        description:
          "Créer des parcours d'onboarding, supports de formation et plans de développement individuels avec Copilot. Personnalisation à grande échelle.",
        items: [
          'Créer un livret d\'accueil complet personnalisé par service ou poste',
          'Concevoir des quiz et supports e-learning depuis du contenu existant',
          'Rédiger des plans de développement individuels depuis les entretiens annuels',
          'Construire un catalogue de formation interne structuré',
        ],
        exercise:
          "Créer le livret d'accueil d'un nouveau poste dans votre entreprise avec sommaire, fiches pratiques et contacts clés.",
      },
      {
        day: 2,
        title: 'Entretiens annuels et performance avec Copilot',
        duration: '1h30',
        description:
          "Préparer et exploiter les entretiens annuels d'évaluation avec Copilot. De la préparation des grilles à la synthèse des résultats pour le plan de formation.",
        items: [
          'Générer des questions d\'entretien annuel personnalisées par collaborateur',
          'Synthétiser les résultats de campagne d\'entretiens en insights RH',
          'Rédiger des synthèses d\'évaluation équitables et constructives',
          'Identifier les besoins en formation depuis les résultats d\'entretiens',
        ],
        exercise:
          "Préparer 3 entretiens annuels complets (grille + questions) pour des profils réels de votre équipe.",
      },
      {
        day: 2,
        title: 'Déploiement et gouvernance RH de Copilot',
        duration: '1h',
        description:
          "Implémenter Copilot dans l'équipe RH durablement : bonnes pratiques, gestion des données sensibles, plan de formation des collaborateurs RH.",
        items: [
          'Données RH et RGPD : quelles précautions avec Copilot',
          'Créer un guide de bonnes pratiques pour l\'équipe RH',
          'Mesurer le gain de temps et le ROI de Copilot en RH',
          'Plan d\'action 30 jours : prioriser les 3 processus à automatiser en premier',
        ],
        exercise:
          "Chaque participant repart avec un plan d'action RH personnalisé et sa bibliothèque de prompts validés.",
      },
    ],
    faq: [
      {
        q: 'Copilot peut-il accéder aux données RH confidentielles de nos employés ?',
        a: "Copilot dans M365 accède uniquement aux fichiers auxquels vous avez vous-même accès. Il ne contourne aucune permission SharePoint ou OneDrive. La formation inclut un module dédié à la gouvernance des données RH sensibles et aux bonnes pratiques de sécurité.",
      },
      {
        q: 'Cette formation est-elle adaptée aux RH qui ne sont pas à l\'aise avec la technologie ?',
        a: "Oui, c'est précisément pour ce public que la formation a été conçue. Copilot dans M365 s'utilise en langage naturel dans des outils que les RH connaissent déjà (Word, Excel, Outlook). Aucune compétence technique n'est requise.",
      },
      {
        q: 'Peut-on utiliser Copilot pour automatiser des décisions RH (recrutement, licenciement) ?',
        a: "Non, et la formation insiste sur ce point. Copilot est un outil d'aide à la décision, pas un décisionnaire. Les décisions RH restent de la responsabilité humaine. La formation vous aide à utiliser Copilot pour préparer ces décisions, pas pour les automatiser.",
      },
      {
        q: 'La formation couvre-t-elle l\'aspect RGPD et conformité ?',
        a: "Oui, nous consacrons un module entier à la gouvernance des données RH avec Copilot : quelles données peuvent être traitées, comment configurer les permissions, quelles précautions prendre avec les données personnelles des employés.",
      },
      {
        q: 'Combien de temps faut-il pour voir un ROI concret de Copilot en RH ?',
        a: "Les participants constatent généralement un gain de temps dès la première semaine sur la rédaction d'offres et la préparation de documents. Une étude McKinsey estime que les professionnels RH peuvent gagner 2 à 4 heures par semaine avec les outils IA. La formation inclut des méthodes pour mesurer ce gain dans votre contexte.",
      },
    ],
  },

  // ─── COMMERCIAL ──────────────────────────────────────────────────────────────
  {
    id: 'formation-copilot-commercial',
    tool: 'Copilot',
    metier: 'Commercial',
    slug: 'formation-copilot-commercial',
    title: 'Formation Microsoft Copilot pour les Commerciaux',
    shortTitle: 'Copilot Commercial',
    metaTitle: 'Formation Microsoft Copilot Commercial & Vente | Masteria, Certifié Qualiopi',
    metaDescription:
      'Accélérez votre cycle de vente avec Microsoft 365 Copilot : propositions, relances, préparations de rendez-vous. Formation 2 jours, certifiée Qualiopi, finançable OPCO.',
    priority: true,
    color: '#059669',
    audience: [
      {
        title: 'Commerciaux terrain et account managers',
        description:
          "Vous passez trop de temps sur la rédaction d'emails, propositions et comptes-rendus de RDV. Copilot vous rend ces heures pour que vous les consacriez à la relation client.",
      },
      {
        title: 'Directeurs commerciaux et managers des ventes',
        description:
          "Vous animez une équipe et produisez des reportings, prévisions et analyses de pipeline. Copilot dans Excel et PowerPoint vous permet de préparer vos revues commerciales en deux fois moins de temps.",
      },
      {
        title: 'Chargés d\'affaires et business developers',
        description:
          "Vous prospectez et qualifiez de nouvelles opportunités. Copilot vous aide à personnaliser vos approches, préparer vos pitchs et structurer vos propositions commerciales rapidement.",
      },
    ],
    useCases: [
      'Préparer un RDV client en 5 minutes avec contexte, enjeux et questions personnalisées',
      'Rédiger une proposition commerciale de 10 pages depuis un brief en 20 minutes',
      'Automatiser les relances email personnalisées par séquence',
      'Analyser le pipeline commercial et identifier les deals à risque dans Excel',
      'Créer une présentation de pitch adapté à chaque prospect dans PowerPoint',
      'Synthétiser les notes de réunion et automatiser les next steps dans Outlook',
    ],
    objectives: [
      'Utiliser Copilot pour accélérer chaque étape du cycle de vente',
      'Créer des propositions commerciales personnalisées plus rapidement',
      'Automatiser les communications client récurrentes avec Copilot dans Outlook',
      'Analyser et piloter le pipeline commercial avec Copilot Excel',
      'Créer des présentations commerciales percutantes avec Copilot PowerPoint',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot dans l\'environnement commercial M365',
        duration: '1h30',
        description:
          "Découvrir comment Copilot s'intègre dans les outils du commercial : Outlook pour la communication, Teams pour les réunions, Word pour les propositions, Excel pour le pipeline.",
        items: [
          'Panorama Copilot M365 vu du commercial : quels outils, quels gains',
          'Accès aux données client dans Copilot : emails, réunions, fichiers',
          'Premiers prompts commerciaux : préparer un RDV, rédiger un email',
          'Copilot vs outils CRM IA : complémentarité et limites',
        ],
        exercise:
          "Utiliser Copilot dans Outlook pour synthétiser l'historique email d'un client réel et préparer le prochain RDV.",
      },
      {
        day: 1,
        title: 'Communication client avec Outlook & Teams Copilot',
        duration: '2h',
        description:
          "Automatiser et personnaliser toutes les communications commerciales : emails de prospection, relances, confirmations de RDV, suivi post-meeting.",
        items: [
          'Rédiger des emails de prospection personnalisés à grande échelle',
          'Créer des séquences de relance adaptées à chaque étape du funnel',
          'Synthétiser les threads email pour reprendre le contexte en 30 secondes',
          'Compte-rendus de RDV automatiques depuis Teams avec next steps',
        ],
        exercise:
          "Rédiger une séquence de 3 emails (prospection, relance J+7, relance J+14) pour un segment client réel.",
      },
      {
        day: 1,
        title: 'Propositions commerciales avec Word Copilot',
        duration: '1h30',
        description:
          "Créer des propositions commerciales professionnelles et personnalisées rapidement. Copilot dans Word comme assistant commercial senior pour structurer, rédiger et argumenter.",
        items: [
          'Structure d\'une proposition commerciale gagnante : les 7 sections clés',
          'Générer une proposition depuis un brief de réunion ou email client',
          'Personnaliser les arguments selon le secteur et les enjeux du prospect',
          'Adapter le ton selon le décideur : DG, DAF, DSI, opérationnel',
        ],
        exercise:
          "Créer une proposition commerciale complète pour une opportunité réelle en cours, en utilisant l'historique email comme contexte.",
      },
      {
        day: 1,
        title: 'Préparation et pitch avec PowerPoint Copilot',
        duration: '1h',
        description:
          "Créer des présentations commerciales percutantes et personnalisées rapidement. Copilot dans PowerPoint génère structure, contenu et design depuis votre brief.",
        items: [
          'Générer une présentation de pitch depuis un Word ou un prompt',
          'Personnaliser le pitch selon le profil prospect et ses enjeux',
          'Créer des slides ROI et business case convaincants',
          'Itérer rapidement : modifier angles et messages sans repartir de zéro',
        ],
        exercise:
          "Créer un pitch deck de 10 slides pour un prospect réel en 25 minutes avec Copilot PowerPoint.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Analyse du pipeline et prévisions avec Excel Copilot',
        duration: '2h',
        description:
          "Piloter le pipeline commercial avec Copilot Excel : identifier les deals à risque, préparer les prévisions et les revues commerciales en analysant vos données réelles.",
        items: [
          'Interroger votre CRM exporté en Excel avec Copilot en langage naturel',
          'Identifier les deals stagnants et priorités d\'action',
          'Créer des tableaux de prévisions de vente automatisés',
          'Préparer une revue commerciale hebdomadaire en 20 minutes',
        ],
        exercise:
          "Analyser votre pipeline Excel réel : top opportunités, deals à risque, prévision mensuelle avec insights Copilot.",
      },
      {
        day: 2,
        title: 'Intelligence client et personnalisation avancée',
        duration: '1h30',
        description:
          "Utiliser Copilot pour mieux connaître et comprendre ses clients. Synthétiser les données client disponibles dans M365 pour des approches ultra-personnalisées.",
        items: [
          'Synthétiser l\'historique complet d\'un compte (emails, réunions, docs)',
          'Créer des fiches de préparation client personnalisées avant chaque RDV',
          'Identifier les signaux d\'intention et timing optimal de relance',
          'Personnaliser les propositions selon les problématiques spécifiques détectées',
        ],
        exercise:
          "Créer une fiche de préparation complète pour votre prochain RDV client stratégique en utilisant toutes les données M365 disponibles.",
      },
      {
        day: 2,
        title: 'Prompts commerciaux avancés et bibliothèque de prompts',
        duration: '1h30',
        description:
          "Maîtriser le prompting pour des résultats commerciaux professionnels. Construire sa bibliothèque de prompts réutilisables pour chaque situation de vente.",
        items: [
          'Prompt engineering pour le commercial : structure, persona client, contexte',
          'Créer des prompts selon chaque étape du cycle de vente',
          'Bibliothèque de prompts : organisation et partage avec l\'équipe commerciale',
          'Éviter les pièges : propositions trop génériques, argumentaires hors sujet',
        ],
        exercise:
          "Construire sa bibliothèque personnelle de 8 prompts commerciaux couvrant les 8 situations de vente les plus fréquentes.",
      },
      {
        day: 2,
        title: 'Déploiement équipe commerciale et mesure du ROI',
        duration: '1h',
        description:
          "Structurer l'adoption de Copilot dans l'équipe commerciale. Mesurer concrètement le temps gagné et l'impact sur le pipeline. Plan d'action immédiat.",
        items: [
          'Identifier les 3 processus commerciaux à automatiser en priorité',
          'Former ses collègues : partager prompts et bonnes pratiques',
          'Indicateurs de performance Copilot : temps de rédaction, volume propositions',
          'Plan d\'action 30 jours avec objectifs mesurables',
        ],
        exercise:
          "Chaque participant repart avec son plan d'action commercial Copilot et sa bibliothèque de prompts personnalisée.",
      },
    ],
    faq: [
      {
        q: 'Copilot peut-il remplacer notre CRM pour le suivi commercial ?',
        a: "Non, Copilot est un assistant de productivité, pas un CRM. Il complète votre CRM en vous aidant à rédiger, analyser et préparer plus vite. Il accède à vos données M365 (emails, réunions, fichiers) mais n'a pas accès direct à Salesforce, HubSpot ou Dynamics sans intégration spécifique.",
      },
      {
        q: 'Copilot peut-il personnaliser les propositions commerciales automatiquement pour chaque prospect ?',
        a: "Oui, c'est l'un des cas d'usage les plus puissants. En fournissant à Copilot le contexte du prospect (emails échangés, enjeux, secteur), il peut générer une proposition personnalisée en quelques minutes. La formation vous apprend à structurer ce contexte efficacement.",
      },
      {
        q: 'Est-ce que la formation convient aux commerciaux non-techniques ?',
        a: "Absolument. Copilot s'utilise en français naturel dans les outils que les commerciaux connaissent déjà. Aucune compétence technique n'est requise. La formation commence par les bases et progresse à votre rythme.",
      },
      {
        q: 'Quelle est la différence entre Copilot et une solution comme Gong ou Salesforce Einstein ?',
        a: "Copilot est intégré à votre suite Microsoft 365 existante sans coût d'intégration supplémentaire. Gong et Salesforce Einstein sont des solutions spécialisées pour l'analyse de conversations ou le CRM. Copilot est plus généraliste mais couvre 80% des besoins de productivité commerciale.",
      },
      {
        q: 'Combien de temps par semaine peut-on espérer gagner en tant que commercial ?',
        a: "Microsoft estime à 4-6 heures par semaine le gain de productivité moyen pour les commerciaux utilisant Copilot. Nos participants constatent des gains rapides sur la rédaction de propositions (-60% de temps) et la préparation de RDV (-70%). Le ROI dépend de votre niveau d'adoption.",
      },
    ],
  },

  // ─── WORD & EXCEL ─────────────────────────────────────────────────────────────
  {
    id: 'formation-copilot-word-excel',
    tool: 'Copilot',
    metier: 'Word & Excel',
    slug: 'formation-copilot-word-excel',
    title: 'Formation Microsoft Copilot pour Word et Excel',
    shortTitle: 'Copilot Word & Excel',
    metaTitle: 'Formation Copilot Word et Excel | Masteria, Certifié Qualiopi',
    metaDescription:
      'Maîtrisez Microsoft 365 Copilot dans Word et Excel pour rédiger, analyser et synthétiser 3× plus vite. Formation 2 jours, certifiée Qualiopi, finançable OPCO.',
    priority: false,
    color: '#DC2626',
    audience: [
      {
        title: 'Cadres et managers utilisateurs quotidiens de Word et Excel',
        description:
          "Vous passez plusieurs heures par jour dans Word et Excel pour rédiger rapports, analyser données et produire présentations. Copilot multiplie votre productivité sur ces outils que vous maîtrisez déjà.",
      },
      {
        title: 'Assistants, chargés de mission et office managers',
        description:
          "Vous produisez une grande variété de documents et de tableaux pour vos directions. Copilot vous aide à aller plus vite sur la mise en forme, la rédaction et l'analyse sans formation technique préalable.",
      },
      {
        title: 'Contrôleurs de gestion et analystes financiers',
        description:
          "Vous exploitez de gros volumes de données dans Excel et rédigez des commentaires dans Word. Copilot vous permet d'interroger vos données en langage naturel et de générer des synthèses automatiquement.",
      },
    ],
    useCases: [
      'Rédiger un rapport de 20 pages depuis des notes brutes en 1 heure',
      'Interroger un tableau Excel de 10 000 lignes en langage naturel',
      'Synthétiser un document de 50 pages en 3 points clés en 2 minutes',
      'Créer des formules Excel complexes en décrivant le résultat attendu',
      'Reformuler un document juridique en langage accessible',
      'Générer des graphiques et analyses depuis des données brutes',
    ],
    objectives: [
      'Exploiter Copilot dans Word pour rédiger, reformuler et synthétiser tout type de document',
      'Analyser et interroger des données Excel complexes sans connaissance avancée des formules',
      'Automatiser la création de graphiques, tableaux croisés et rapports',
      'Combiner Word et Excel avec Copilot pour des workflows document-data intégrés',
      'Créer sa bibliothèque de prompts pour les documents récurrents dans son métier',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot dans Word : rédiger et synthétiser',
        duration: '2h',
        description:
          "Maîtriser Copilot dans Word pour rédiger des documents professionnels de qualité à partir de sources brutes (notes, emails, PDF) et synthétiser de longs documents rapidement.",
        items: [
          'Générer un document structuré depuis des notes brutes ou un brief',
          'Synthétiser un long document en résumé exécutif en 2 minutes',
          'Reformuler : simplifier, formaliser, adapter au public cible',
          'Compléter, développer et enrichir un document existant',
        ],
        exercise:
          "Créer un rapport de synthèse de 5 pages depuis vos notes de réunion réelles.",
      },
      {
        day: 1,
        title: 'Copilot dans Word : édition avancée et mise en forme',
        duration: '1h30',
        description:
          "Techniques avancées d'édition avec Copilot : réécriture de sections, cohérence de ton, titres et structure, vérification de cohérence. Word comme outil de production documentaire assisté.",
        items: [
          'Réécrire une section en changeant le ton (formel, synthétique, persuasif)',
          'Vérifier la cohérence et la complétude d\'un document',
          'Créer des titres et une table des matières automatiquement',
          'Comparer deux versions d\'un document et identifier les différences clés',
        ],
        exercise:
          "Réécrire un rapport existant pour un public CODIR : plus synthétique, plus orienté décision.",
      },
      {
        day: 1,
        title: 'Introduction à Copilot dans Excel',
        duration: '1h30',
        description:
          "Premiers pas avec Copilot dans Excel. Comprendre comment interroger des données en langage naturel, créer des formules et générer des visualisations sans expertise technique.",
        items: [
          'Interface Copilot dans Excel : chat contextuel sur vos tableaux',
          'Interroger un tableau en langage naturel : somme, filtres, tris',
          'Créer des formules complexes en décrivant le résultat souhaité',
          'Générer des graphiques adaptés automatiquement',
        ],
        exercise:
          "Interroger votre tableau Excel de données réelles : 5 questions en langage naturel, 5 réponses instantanées.",
      },
      {
        day: 1,
        title: 'Analyse de données et tableaux de bord avec Excel Copilot',
        duration: '1h',
        description:
          "Créer des analyses et tableaux de bord professionnels rapidement avec Copilot Excel. Du tableau brut à l'insight actionnable sans manipulations manuelles.",
        items: [
          'Identifier tendances, anomalies et valeurs remarquables automatiquement',
          'Créer un tableau de bord depuis des données brutes',
          'Générer des commentaires et synthèses textuels depuis les données',
          'Préparer des graphiques pour présentation en 10 minutes',
        ],
        exercise:
          "Créer un tableau de bord complet avec 4 indicateurs clés depuis votre tableau de données réel.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Excel Copilot avancé : formules, TCD et automatisation',
        duration: '2h',
        description:
          "Exploiter les capacités avancées de Copilot Excel : tableaux croisés dynamiques assistés, formules complexes générées par IA, et automatisation de tâches répétitives.",
        items: [
          'Créer des tableaux croisés dynamiques avec Copilot en décrivant l\'analyse souhaitée',
          'Générer des formules avancées (INDEX/EQUIV, RECHERCHEX, LAMBDA) par description',
          'Nettoyage de données : déduplication, standardisation, corrections automatiques',
          'Automatiser des rapports récurrents avec Copilot',
        ],
        exercise:
          "Créer un TCD et une analyse croisée sur votre fichier Excel le plus complexe en 30 minutes.",
      },
      {
        day: 2,
        title: 'Workflow intégré Word-Excel avec Copilot',
        duration: '1h30',
        description:
          "Combiner Copilot dans Word et Excel pour des workflows document-data professionnels : rapport d'analyse, commentaires de données, documents basés sur des tableaux.",
        items: [
          'Transformer des données Excel en texte de rapport dans Word automatiquement',
          'Insérer et commenter des tableaux Excel dans Word avec Copilot',
          'Créer un rapport d\'analyse complet (données + commentaires + graphiques) en 1h',
          'Workflow reporting : de la donnée brute au document finalisé',
        ],
        exercise:
          "Créer un rapport mensuel complet (1 tableau Excel → 5 pages Word avec graphiques et commentaires).",
      },
      {
        day: 2,
        title: 'Cas d\'usage métier avancés',
        duration: '1h30',
        description:
          "Appliquer Copilot Word et Excel à des cas d'usage métier complexes spécifiques à votre secteur et fonction. Atelier pratique sur vos documents réels.",
        items: [
          'Analyser et commenter un budget prévisionnel avec Copilot',
          'Rédiger des notes de synthèse depuis des comptes-rendus multiples',
          'Créer des tableaux de comparaison et matrices de décision',
          'Traiter des données structurées complexes : RH, finance, commercial',
        ],
        exercise:
          "Chaque participant choisit son cas d'usage métier le plus impactant et le traite de A à Z avec Copilot.",
      },
      {
        day: 2,
        title: 'Bibliothèque de prompts et plan d\'action',
        duration: '1h',
        description:
          "Construire sa bibliothèque personnelle de prompts Word et Excel, optimisée pour ses cas d'usage récurrents. Plan d'action pour les 30 premiers jours.",
        items: [
          'Identifier ses 5 cas d\'usage Word et 5 cas d\'usage Excel les plus fréquents',
          'Rédiger et tester des prompts optimisés pour chaque cas',
          'Organiser sa bibliothèque de prompts dans OneNote ou SharePoint',
          'Plan d\'action 30 jours : adoption progressive et mesure du gain',
        ],
        exercise:
          "Chaque participant repart avec sa bibliothèque de 10 prompts validés et son plan d'adoption.",
      },
    ],
    faq: [
      {
        q: 'Faut-il savoir utiliser Excel pour suivre cette formation ?',
        a: "Un niveau intermédiaire est recommandé (maîtrise des bases : tableaux, formules simples, filtres). Copilot n'élimine pas la compréhension des données, il facilite leur manipulation. La formation est conçue pour des utilisateurs réguliers d'Excel, pas des débutants complets.",
      },
      {
        q: 'Copilot dans Excel peut-il écrire des macros VBA ?',
        a: "Copilot peut générer du code VBA simple et expliquer des macros existantes. Cependant, notre formation se concentre sur l'analyse de données et la création de formules en langage naturel, qui couvre 90% des besoins des utilisateurs professionnels sans nécessiter de programmation.",
      },
      {
        q: 'Quelle taille de fichier Excel Copilot peut-il traiter ?',
        a: "Copilot fonctionne bien sur des fichiers allant jusqu'à plusieurs dizaines de milliers de lignes. Les performances varient selon la complexité et la taille des données. La formation inclut des bonnes pratiques pour optimiser l'usage de Copilot sur de gros volumes.",
      },
      {
        q: 'Copilot peut-il analyser des documents Word en PDF ?',
        a: "Copilot dans Word peut analyser les documents Word natifs (.docx). Pour les PDF, il faut d'abord les convertir en Word ou utiliser Copilot dans Edge/Bing pour analyser les PDF. La formation couvre les workflows pour traiter différents formats de fichiers.",
      },
      {
        q: 'Cette formation est-elle différente d\'une formation Excel avancée classique ?',
        a: "Oui, complètement. Une formation Excel avancée vous apprend des formules complexes à maîtriser. Cette formation vous apprend à décrire ce que vous voulez en français et laisser Copilot créer les formules. L'approche est radicalement différente : orientée résultat et gain de temps immédiat.",
      },
    ],
  },

  // ─── MANAGEMENT ──────────────────────────────────────────────────────────────
  {
    id: 'formation-copilot-management',
    tool: 'Copilot',
    metier: 'Management',
    slug: 'formation-copilot-management',
    title: 'Formation Microsoft Copilot pour les Managers',
    shortTitle: 'Copilot Management',
    metaTitle: 'Formation Microsoft Copilot pour les Managers | Masteria, Certifié Qualiopi',
    metaDescription:
      'Utilisez Microsoft 365 Copilot pour piloter votre équipe, préparer vos comités et gagner du temps sur la communication managériale. Formation 2 jours, certifiée Qualiopi.',
    priority: false,
    color: '#D97706',
    audience: [
      {
        title: 'Managers opérationnels et chefs de service',
        description:
          "Vous managez une équipe de 5 à 30 personnes et passez trop de temps en réunions et à rédiger des comptes-rendus, reportings et communications. Copilot vous rend du temps pour le management de terrain.",
      },
      {
        title: 'Directeurs de BU et responsables de département',
        description:
          "Vous pilotez des indicateurs, préparez des comités de direction et gérez des projets transverses. Copilot dans Excel et PowerPoint vous aide à préparer vos prises de décision plus rapidement.",
      },
      {
        title: 'Chefs de projet et coordinateurs',
        description:
          "Vous coordonnez plusieurs équipes et projets simultanément. Copilot dans Teams et Outlook vous aide à synthétiser l'information, suivre les actions et communiquer efficacement.",
      },
    ],
    useCases: [
      'Synthétiser automatiquement les réunions d\'équipe avec actions assignées',
      'Préparer un CODIR en 30 minutes depuis les données et notes disponibles',
      'Rédiger les communications d\'équipe : emails, notes internes, annonces',
      'Analyser les KPIs d\'équipe et préparer les points 1:1 avec les collaborateurs',
      'Créer des présentations de résultats trimestriels dans PowerPoint',
      'Synthétiser les rapports d\'activité de chaque membre de l\'équipe',
    ],
    objectives: [
      'Gagner du temps sur les réunions, comptes-rendus et communication managériale',
      'Utiliser Copilot pour piloter l\'activité de l\'équipe avec des données claires',
      'Préparer les instances de gouvernance (CODIR, point équipe) plus efficacement',
      'Créer des communications managériales impactantes et cohérentes',
      'Intégrer Copilot dans la routine managériale quotidienne',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot pour le manager au quotidien',
        duration: '1h30',
        description:
          "Comment Copilot transforme le quotidien managérial dans M365. Panorama des gains possibles et configuration pour un usage optimal dans le contexte du management d'équipe.",
        items: [
          'Cartographie des tâches managériales automatisables avec Copilot',
          'Configuration Copilot pour accéder au contexte équipe (Teams, emails, fichiers)',
          'Premiers prompts managériaux : synthèse, action, communication',
          'Gestion du temps : identifier où Copilot a le plus d\'impact pour vous',
        ],
        exercise:
          "Identifier vos 5 tâches managériales les plus chronophages et évaluer le potentiel Copilot pour chacune.",
      },
      {
        day: 1,
        title: 'Réunions et communication d\'équipe avec Teams & Outlook',
        duration: '2h',
        description:
          "Transformer la gestion des réunions : transcription automatique, comptes-rendus structurés, suivi des actions. Communication d'équipe plus efficace avec Copilot dans Outlook.",
        items: [
          'Compte-rendu automatique des réunions Teams avec actions et décisions',
          'Créer des ordres du jour structurés depuis les sujets en suspens',
          'Rédiger les communications d\'équipe : annonces, notes, feedback collectif',
          'Synthétiser une semaine d\'emails importants en 5 minutes',
        ],
        exercise:
          "Utiliser Copilot pour créer le compte-rendu de votre dernière réunion d'équipe avec actions assignées et deadlines.",
      },
      {
        day: 1,
        title: 'Pilotage de l\'activité avec Excel Copilot',
        duration: '1h30',
        description:
          "Analyser les KPIs d'équipe, suivre l'avancement des projets et préparer les reportings avec Copilot Excel. Du tableau de suivi au reporting CODIR en quelques minutes.",
        items: [
          'Interroger le tableau de suivi d\'activité en langage naturel',
          'Identifier les retards, risques et points d\'attention dans le planning',
          'Créer des reportings managériaux synthétiques automatiquement',
          'Préparer les éléments chiffrés pour un CODIR ou un point hiérarchique',
        ],
        exercise:
          "Analyser votre tableau de suivi d'activité réel et générer un point de situation pour votre N+1.",
      },
      {
        day: 1,
        title: 'Présentation et reporting avec PowerPoint Copilot',
        duration: '1h',
        description:
          "Créer des présentations managériales professionnelles rapidement. Copilot dans PowerPoint comme outil de mise en forme et structuration des résultats d'équipe.",
        items: [
          'Transformer un rapport Word ou Excel en présentation PowerPoint structurée',
          'Créer des slides de bilan trimestriel ou rapport d\'activité',
          'Adapter le niveau de détail selon l\'audience (équipe vs CODIR vs DG)',
          'Itérer rapidement sur le message et la mise en forme',
        ],
        exercise:
          "Créer une présentation de bilan mensuel d'équipe en 20 minutes depuis vos données réelles.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Management individuel et développement des collaborateurs',
        duration: '2h',
        description:
          "Utiliser Copilot pour préparer les entretiens 1:1, les entretiens annuels et les plans de développement. Management personnalisé à grande échelle.",
        items: [
          'Préparer les entretiens 1:1 avec analyse des performances individuelles',
          'Rédiger des feedback constructifs et équilibrés avec Copilot',
          'Créer des plans de développement personnalisés depuis les entretiens',
          'Suivre les actions de développement dans le temps',
        ],
        exercise:
          "Préparer les 3 prochains entretiens 1:1 avec analyses individuelles et questions personnalisées.",
      },
      {
        day: 2,
        title: 'Gestion de projet et coordination avec Copilot',
        duration: '1h30',
        description:
          "Coordonner des projets transverses plus efficacement avec Copilot. Suivi des jalons, communication entre parties prenantes, synthèse de l'avancement.",
        items: [
          'Créer un plan de projet structuré depuis un brief ou une note d\'orientation',
          'Synthétiser l\'avancement de plusieurs projets en un point de situation',
          'Rédiger les communications projet : kick-off, points d\'étape, clôture',
          'Identifier les risques et dépendances depuis les notes et réunions',
        ],
        exercise:
          "Créer le plan d'action d'un projet réel en cours avec jalons, responsables et communications associées.",
      },
      {
        day: 2,
        title: 'Communication managériale avancée',
        duration: '1h30',
        description:
          "Maîtriser l'art de la communication managériale assistée par Copilot : adapter le ton, gérer les situations difficiles, communiquer le changement.",
        items: [
          'Rédiger des annonces de changement organisationnel impactantes',
          'Communiquer des décisions difficiles avec tact et clarté',
          'Adapter le message selon le public : équipe, hiérarchie, pairs',
          'Gérer les communications en situation de crise ou de tension',
        ],
        exercise:
          "Rédiger une communication de changement réelle (réorganisation, nouveau process) avec plusieurs variantes selon l'audience.",
      },
      {
        day: 2,
        title: 'Routines managériales et plan d\'adoption',
        duration: '1h',
        description:
          "Intégrer Copilot dans la routine managériale hebdomadaire. Plan d'adoption pour les 30 premiers jours et mesure de l'impact sur le temps disponible.",
        items: [
          'Définir sa routine Copilot : quand, quoi, comment au quotidien',
          'Créer ses templates de prompts managériaux récurrents',
          'Embarquer son équipe dans l\'usage de Copilot',
          'Mesurer le temps gagné et l\'impact sur la qualité managériale',
        ],
        exercise:
          "Chaque participant repart avec sa routine managériale Copilot définie et ses 5 prompts managériaux essentiels.",
      },
    ],
    faq: [
      {
        q: 'Copilot peut-il remplacer les outils de gestion de projet comme Asana ou Monday ?',
        a: "Non, Copilot est un assistant de productivité dans M365, pas un outil de gestion de projet dédié. Il peut vous aider à créer des plans, rédiger des communications et synthétiser des réunions, mais le suivi de projet structuré reste plus efficace dans des outils dédiés. La formation vous montre comment les compléter.",
      },
      {
        q: 'Est-ce que Copilot aide vraiment à réduire le nombre de réunions ?',
        a: "Copilot peut réduire la durée et la fréquence de certaines réunions de suivi en automatisant les compte-rendus et le suivi des actions. Microsoft rapporte que les équipes utilisant Copilot réduisent de 30% le temps passé en réunions de suivi. La formation vous montre comment restructurer vos rituels managériaux.",
      },
      {
        q: 'La formation est-elle adaptée aux managers peu à l\'aise avec la technologie ?',
        a: "Oui. Copilot s'utilise dans des outils que les managers connaissent déjà (Teams, Outlook, Excel). L'interface est en langage naturel. Aucune compétence technique n'est nécessaire, et la formation est conçue pour progresser à votre rythme.",
      },
      {
        q: 'Peut-on utiliser Copilot pour les entretiens annuels sans risque de biais ?',
        a: "Copilot vous aide à préparer et structurer les entretiens, il ne remplace pas votre jugement. La formation inclut un module sur l'utilisation éthique de Copilot dans le management, notamment pour garantir l'équité des évaluations et éviter de déléguer des décisions RH à l'IA.",
      },
      {
        q: 'La formation est-elle personnalisable selon notre organisation ?',
        a: "Oui, la formation intra-entreprise est systématiquement personnalisée. Nous utilisons vos outils réels, vos processus managériaux et vos cas d'usage spécifiques. Avant la formation, Masteria réalise un entretien de cadrage pour adapter le programme à votre contexte.",
      },
    ],
  },

  // ─── FINANCE ─────────────────────────────────────────────────────────────────
  {
    id: 'formation-copilot-finance',
    tool: 'Copilot',
    metier: 'Finance',
    slug: 'formation-copilot-finance',
    title: 'Formation Microsoft Copilot pour la Finance',
    shortTitle: 'Copilot Finance',
    metaTitle: 'Formation Microsoft Copilot Finance & Contrôle de Gestion | Masteria, Certifié Qualiopi',
    metaDescription:
      'Utilisez Microsoft 365 Copilot pour accélérer vos analyses financières, reportings et budgets. Formation 2 jours pour les équipes finance, certifiée Qualiopi, finançable OPCO.',
    priority: true,
    color: '#0891B2',
    audience: [
      {
        title: 'Contrôleurs de gestion et analystes financiers',
        description:
          "Vous produisez des reportings réguliers et analysez de gros volumes de données dans Excel. Copilot vous permet d'interroger vos données en langage naturel et de générer vos commentaires d'analyse 3× plus vite.",
      },
      {
        title: 'Directeurs financiers et DAF',
        description:
          "Vous préparez des CODIR, des présentations de résultats et des analyses stratégiques. Copilot vous aide à synthétiser rapidement les données financières et à structurer vos prises de parole.",
      },
      {
        title: 'Comptables et responsables comptables',
        description:
          "Vous produisez des bilans, rapprochements et notes de synthèse régulièrement. Copilot dans Word et Excel vous aide à aller plus vite sur la partie rédactionnelle et analytique de ces tâches.",
      },
    ],
    useCases: [
      'Analyser un tableau de résultats de 50 000 lignes en posant des questions en français',
      'Rédiger les commentaires du reporting mensuel en 30 minutes au lieu de 2h',
      'Créer un tableau de bord financier complet depuis des données brutes',
      'Générer une note de synthèse sur les écarts budgétaires automatiquement',
      'Préparer une présentation de résultats CODIR depuis les données Excel',
      'Synthétiser un business plan ou dossier financier de 100 pages en points clés',
    ],
    objectives: [
      'Analyser et interroger des données financières complexes avec Copilot Excel',
      'Accélérer la rédaction des commentaires et synthèses financières avec Word',
      'Créer des tableaux de bord et visualisations financières automatiquement',
      'Préparer les présentations financières CODIR avec Copilot PowerPoint',
      'Automatiser les workflows de reporting récurrents',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot M365 pour la finance : configuration et panorama',
        duration: '1h30',
        description:
          "Comprendre les capacités de Copilot dans le contexte financier. Configuration pour l'accès aux données financières M365. Sécurité et conformité pour les données sensibles.",
        items: [
          'Panorama Copilot finance : Excel, Word, PowerPoint, Teams, Outlook',
          'Sécurité des données financières dans Copilot M365',
          'Premiers prompts financiers : analyse, synthèse, commentaire',
          'Limites de Copilot en finance : ce qu\'il sait et ne sait pas faire',
        ],
        exercise:
          "Connecter Copilot à vos fichiers financiers OneDrive et poser les 5 premières questions sur vos données réelles.",
      },
      {
        day: 1,
        title: 'Analyse de données financières avec Excel Copilot',
        duration: '2h',
        description:
          "Exploiter Copilot Excel pour analyser P&L, bilans, flux de trésorerie et données comptables. De l'interrogation en langage naturel à l'insight financier actionnable.",
        items: [
          'Interroger un P&L ou tableau de résultats en langage naturel',
          'Calculer automatiquement ratios, écarts et évolutions',
          'Identifier anomalies, tendances et alertes dans les données financières',
          'Créer des analyses comparatives (réalisé vs budget, N vs N-1)',
        ],
        exercise:
          "Analyser votre dernier reporting mensuel réel : 5 insights en langage naturel avec Copilot Excel en 20 minutes.",
      },
      {
        day: 1,
        title: 'Tableaux de bord et visualisations financières',
        duration: '1h30',
        description:
          "Créer des tableaux de bord financiers professionnels automatiquement depuis les données brutes. Copilot génère les graphiques, KPIs et mises en forme adaptés.",
        items: [
          'Créer un tableau de bord financier complet depuis un tableau brut',
          'Générer les graphiques adaptés à chaque type de données financières',
          'Tableaux croisés dynamiques créés en langage naturel',
          'Préparer un dashboard CODIR mensuel en 30 minutes',
        ],
        exercise:
          "Créer un tableau de bord complet pour votre prochaine présentation financière depuis vos données réelles.",
      },
      {
        day: 1,
        title: 'Commentaires et synthèses financières avec Word',
        duration: '1h',
        description:
          "Accélérer la rédaction des commentaires d'analyse financière avec Copilot dans Word. Du tableau de données Excel aux commentaires de reporting en quelques minutes.",
        items: [
          'Générer des commentaires de résultats depuis les données et les écarts',
          'Structurer une note de synthèse financière professionnelle',
          'Adapter le niveau de détail selon le lecteur (DAF, DG, conseil)',
          'Reformuler et améliorer des commentaires financiers existants',
        ],
        exercise:
          "Rédiger les commentaires de votre reporting mensuel depuis le tableau Excel en 20 minutes avec Copilot.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Budget et prévisions avec Copilot Excel',
        duration: '2h',
        description:
          "Construire et analyser des budgets, forecasts et simulations financières avec Copilot Excel. De la construction budgétaire à l'analyse des scénarios.",
        items: [
          'Construire une structure budgétaire depuis des données historiques',
          'Créer des scénarios de simulation financière automatiquement',
          'Analyser les écarts budget/réalisé avec commentaires automatiques',
          'Construire un forecast glissant depuis les données actuelles',
        ],
        exercise:
          "Construire un budget prévisionnel à 12 mois ou analyser les écarts de votre budget actuel avec Copilot.",
      },
      {
        day: 2,
        title: 'Reporting CODIR et présentations financières avec PowerPoint',
        duration: '1h30',
        description:
          "Transformer les données et analyses financières en présentations CODIR percutantes avec Copilot PowerPoint. Du tableau Excel à la slide en quelques minutes.",
        items: [
          'Transformer un reporting Excel en présentation PowerPoint structurée',
          'Créer des slides de résultats financiers avec le bon niveau de synthèse',
          'Générer des slides de Business Review mensuelle ou trimestrielle',
          'Adapter la présentation selon le public (CODIR, CA, banquiers)',
        ],
        exercise:
          "Créer une présentation de résultats financiers CODIR complète depuis votre Excel de reporting.",
      },
      {
        day: 2,
        title: 'Synthèse documentaire financière : business plans et dossiers',
        duration: '1h30',
        description:
          "Utiliser Copilot pour analyser et synthétiser des dossiers financiers complexes : business plans, dossiers de financement, rapports annuels, études sectorielles.",
        items: [
          'Synthétiser un business plan de 100 pages en 5 points clés',
          'Créer une fiche d\'analyse financière de dossier de financement',
          'Comparer plusieurs scénarios financiers dans un document synthèse',
          'Extraire les données financières clés d\'un rapport annuel',
        ],
        exercise:
          "Analyser un dossier financier réel (business plan, dossier crédit) et produire une fiche de synthèse décisionnelle.",
      },
      {
        day: 2,
        title: 'Workflows finance automatisés et plan d\'adoption',
        duration: '1h',
        description:
          "Construire des workflows de reporting automatisés avec Copilot. Mesurer le ROI de Copilot en finance. Plan d'action pour les 30 premiers jours.",
        items: [
          'Automatiser le workflow reporting mensuel de bout en bout',
          'Créer des templates de prompts pour les analyses récurrentes',
          'Mesurer le gain de temps sur le cycle de clôture',
          'Plan d\'action : les 3 quick wins finance à implémenter immédiatement',
        ],
        exercise:
          "Chaque participant formalise son workflow de reporting automatisé et repart avec sa bibliothèque de prompts finance.",
      },
    ],
    faq: [
      {
        q: 'Copilot peut-il accéder à notre ERP ou logiciel comptable ?',
        a: "Copilot M365 accède aux données dans votre environnement Microsoft 365 : fichiers OneDrive, SharePoint, emails. Il n'a pas accès direct à SAP, Sage, Cegid ou autres ERP. Cependant, vous pouvez exporter vos données ERP en Excel et les analyser avec Copilot, ce que la formation couvre en détail.",
      },
      {
        q: 'Les données financières confidentielles sont-elles sécurisées avec Copilot ?',
        a: "Oui, Microsoft 365 Copilot est hébergé dans votre tenant Microsoft, respecte vos permissions SharePoint/OneDrive et est conforme RGPD. Vos données financières ne quittent pas votre environnement Microsoft. La formation inclut un module sur la gouvernance des données sensibles.",
      },
      {
        q: 'Copilot peut-il remplacer un analyste financier ?',
        a: "Non. Copilot automatise les tâches répétitives : mise en forme, calculs, rédaction de commentaires standards. L'analyse stratégique, l'interprétation contextuelle et les recommandations restent de la responsabilité de l'analyste. Copilot lui fait gagner du temps pour se concentrer sur ces tâches à haute valeur ajoutée.",
      },
      {
        q: 'La formation convient-elle aux comptables ou uniquement aux contrôleurs de gestion ?',
        a: "La formation est adaptée aux deux profils. Les modules Excel et Word sont pertinents pour la comptabilité (bilans, rapprochements, notes). Les modules reporting et budget sont plus orientés contrôle de gestion. En intra-entreprise, nous personnalisons le contenu selon le mix de votre équipe.",
      },
      {
        q: 'Copilot peut-il créer des formules Excel complexes que je ne sais pas écrire ?',
        a: "Oui, c'est l'un des apports les plus immédiats pour les équipes finance. En décrivant le résultat souhaité en français, Copilot génère la formule correspondante (RECHERCHEX, INDEX/EQUIV, formules de tableau dynamique, etc.). La formation inclut une session dédiée à la génération de formules par description.",
      },
    ],
  },

  // ─── ASSISTANTE ──────────────────────────────────────────────────────────────
  {
    id: 'formation-copilot-assistante',
    tool: 'Copilot',
    metier: 'Assistante de Direction',
    slug: 'formation-copilot-assistante',
    title: 'Formation Microsoft Copilot pour les Assistantes de Direction',
    shortTitle: 'Copilot Assistante',
    metaTitle: 'Formation Microsoft Copilot Assistante de Direction | Masteria, Certifié Qualiopi',
    metaDescription:
      'Maîtrisez Microsoft 365 Copilot pour les assistantes de direction : gestion des emails, organisation, rédaction et suivi de projets. Formation 2 jours, certifiée Qualiopi.',
    priority: false,
    color: '#BE185D',
    audience: [
      {
        title: 'Assistantes de direction et executive assistants',
        description:
          "Vous gérez l'agenda, la communication et l'organisation d'un ou plusieurs dirigeants. Copilot dans Outlook et Teams vous permet de gagner des heures sur la gestion des emails, la prise de rendez-vous et la préparation des réunions.",
      },
      {
        title: 'Assistantes polyvalentes et de département',
        description:
          "Vous produisez une grande variété de documents, gérez des projets transverses et assurez la coordination administrative. Copilot dans Word et Excel vous aide à livrer plus en moins de temps.",
      },
      {
        title: 'Office managers et responsables administratifs',
        description:
          "Vous assurez le bon fonctionnement des opérations administratives et coordonnez plusieurs équipes. Copilot vous aide à industrialiser la production documentaire et à fluidifier la communication interne.",
      },
    ],
    useCases: [
      'Synthétiser 50 emails en 5 minutes pour un brief matinal au dirigeant',
      'Rédiger des comptes-rendus de réunion complets automatiquement dans Teams',
      'Préparer un voyage d\'affaires complet (itinéraire, logistique, briefing)',
      'Créer des supports de présentation pour le dirigeant depuis ses notes',
      'Rédiger des courriers et emails professionnels dans le style de la direction',
      'Organiser et synthétiser l\'information pour la prise de décision du dirigeant',
    ],
    objectives: [
      'Maîtriser Copilot dans Outlook et Teams pour optimiser la communication et l\'organisation',
      'Utiliser Copilot dans Word pour produire tous types de documents professionnels rapidement',
      'Exploiter Copilot Excel pour les tableaux de suivi et analyses administratives',
      'Créer des présentations professionnelles avec Copilot PowerPoint',
      'Intégrer Copilot dans les routines quotidiennes d\'assistance',
    ],
    modules: [
      // JOUR 1
      {
        day: 1,
        title: 'Copilot M365 pour l\'assistante : panorama et configuration',
        duration: '1h30',
        description:
          "Découvrir comment Copilot transforme le quotidien de l'assistante dans M365. Configuration pour accéder au contexte de la direction : calendriers, emails, fichiers partagés.",
        items: [
          'Panorama Copilot pour l\'assistante : Outlook, Teams, Word, Excel, PowerPoint',
          'Accès aux données de la direction : ce que Copilot peut consulter',
          'Confidentialité et bonnes pratiques pour les informations sensibles',
          'Premiers prompts : synthèse d\'emails, résumé de réunion, rédaction rapide',
        ],
        exercise:
          "Configurer Copilot et générer un résumé de la semaine email de la direction en 5 minutes.",
      },
      {
        day: 1,
        title: 'Gestion des emails et communication avec Outlook Copilot',
        duration: '2h',
        description:
          "Transformer la gestion des emails avec Copilot dans Outlook. Triage, synthèse, rédaction et suivi des emails de la direction et de la structure.",
        items: [
          'Synthétiser les emails prioritaires de la journée en brief matinal',
          'Rédiger des réponses professionnelles dans le ton de la direction',
          'Préparer des emails complexes : demandes, relances, coordinationstitutions',
          'Gérer les threads longs : reprendre le contexte en 30 secondes',
        ],
        exercise:
          "Préparer le brief email matinal du dirigeant (priorités, actions, réponses à traiter) depuis sa boîte réelle.",
      },
      {
        day: 1,
        title: 'Réunions et organisation avec Teams & Calendrier',
        duration: '1h30',
        description:
          "Automatiser les tâches liées aux réunions : préparation, transcription, compte-rendu, suivi des actions. Copilot dans Teams comme assistant de réunion permanent.",
        items: [
          'Compte-rendu automatique des réunions Teams avec décisions et actions',
          'Préparer l\'ordre du jour depuis les sujets en attente',
          'Synthétiser les réunions passées pour préparer les suivantes',
          'Rédiger les invitations et communications autour des réunions',
        ],
        exercise:
          "Transformer le dernier compte-rendu de réunion en liste d'actions assignées avec dates limites.",
      },
      {
        day: 1,
        title: 'Rédaction de documents avec Word Copilot',
        duration: '1h',
        description:
          "Produire tous types de documents professionnels rapidement avec Copilot dans Word : courriers, notes, rapports, procédures, comptes-rendus.",
        items: [
          'Rédiger des courriers officiels et notes internes dans le style de la direction',
          'Créer des comptes-rendus structurés depuis des notes brutes',
          'Adapter le ton selon le destinataire : interne, client, institutionnel',
          'Mettre en forme et finaliser des documents rapidement',
        ],
        exercise:
          "Rédiger 3 courriers types (relance, confirmation, présentation) dans le style de votre direction.",
      },
      // JOUR 2
      {
        day: 2,
        title: 'Tableaux de suivi et reporting avec Excel Copilot',
        duration: '2h',
        description:
          "Créer et analyser des tableaux de bord, tableaux de suivi et reporting administratifs avec Copilot Excel. Du budget de département aux tableaux de suivi de projets.",
        items: [
          'Créer des tableaux de bord de suivi administratif automatiquement',
          'Analyser des budgets et notes de frais en langage naturel',
          'Synthétiser des données de plusieurs sources en un tableau consolidé',
          'Préparer les reportings récurrents plus rapidement',
        ],
        exercise:
          "Créer un tableau de bord de suivi d'activité ou de budget pour la direction depuis vos données réelles.",
      },
      {
        day: 2,
        title: 'Présentations professionnelles avec PowerPoint Copilot',
        duration: '1h30',
        description:
          "Créer des présentations professionnelles pour la direction avec Copilot PowerPoint. Transformer les notes et données du dirigeant en présentations claires et impactantes.",
        items: [
          'Générer une présentation complète depuis les notes du dirigeant',
          'Créer des slides de réunion client ou CODIR rapidement',
          'Adapter le design et le niveau de détail selon l\'occasion',
          'Finaliser et harmoniser des présentations déjà existantes',
        ],
        exercise:
          "Créer une présentation de 10 slides depuis les notes de votre dernière réunion stratégique.",
      },
      {
        day: 2,
        title: 'Gestion de projets transverses avec Copilot',
        duration: '1h30',
        description:
          "Coordonner des projets administratifs et transverses plus efficacement avec Copilot. Suivi des actions, communication entre parties prenantes, synthèse de l'avancement.",
        items: [
          'Créer un plan d\'action depuis une note d\'orientation ou réunion de kick-off',
          'Suivre l\'avancement des actions et relancer les retardataires',
          'Synthétiser l\'avancement de plusieurs projets en point de situation',
          'Rédiger les communications projet : kick-off, points d\'étape, clôture',
        ],
        exercise:
          "Créer le plan d'action d'un projet administratif réel avec assignations, dates et communications.",
      },
      {
        day: 2,
        title: 'Routines quotidiennes et bibliothèque de prompts',
        duration: '1h',
        description:
          "Construire sa routine Copilot quotidienne et sa bibliothèque de prompts personnalisée pour tous les documents et tâches récurrentes de l'assistante.",
        items: [
          'Définir sa routine Copilot : matin, journée, fin de journée',
          'Créer ses prompts pour les 10 tâches les plus récurrentes',
          'Organiser ses templates dans OneNote ou SharePoint',
          'Plan d\'action 30 jours : adoption progressive et mesure du gain',
        ],
        exercise:
          "Chaque participante repart avec sa routine Copilot définie et sa bibliothèque de 10 prompts personnalisés.",
      },
    ],
    faq: [
      {
        q: 'Copilot peut-il accéder aux emails et calendrier du dirigeant que j\'assiste ?',
        a: "Copilot peut accéder aux ressources M365 pour lesquelles vous avez des droits délégués (accès délégué à la boîte mail, au calendrier). Si votre dirigeant vous a accordé l'accès délégué dans Outlook, Copilot peut vous aider à gérer ces ressources. La formation explique la configuration de ces accès.",
      },
      {
        q: 'Cette formation est-elle adaptée aux assistantes qui utilisent déjà bien M365 ?',
        a: "Oui, la formation suppose une maîtrise des bases de M365 (Outlook, Word, Excel). Elle vous apprend à exploiter Copilot pour aller beaucoup plus vite sur des tâches que vous maîtrisez déjà. Plus vous êtes à l'aise avec M365, plus vous gagnerez en efficacité avec Copilot.",
      },
      {
        q: 'Les comptes-rendus de réunion générés par Copilot sont-ils conformes et fiables ?',
        a: "Copilot génère des comptes-rendus de bonne qualité mais ils nécessitent une relecture et validation humaine. La formation vous apprend à structurer les prompts pour obtenir des comptes-rendus précis et à valider les informations critiques. Copilot vous fait gagner 80% du temps, les 20% restants sont votre vérification.",
      },
      {
        q: 'Peut-on utiliser Copilot pour gérer plusieurs dirigeants ou départements ?',
        a: "Oui, Copilot est particulièrement utile quand vous gérez plusieurs responsables. En quelques prompts, vous pouvez synthétiser les emails de plusieurs boîtes, préparer plusieurs briefings matinaux et coordonner des agendas multiples. La formation inclut des cas pratiques de gestion multi-périmètres.",
      },
      {
        q: 'Copilot peut-il rédiger dans le style personnel de mon dirigeant ?',
        a: "Copilot peut reproduire un style de communication si vous lui fournissez des exemples (emails précédents, documents existants) et des instructions précises sur le ton souhaité. La formation vous apprend à créer des prompts avec contexte de style pour maintenir la cohérence de la communication de la direction.",
      },
    ],
  },
];
