import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, FileText, MessagesSquare, Database, Search,
  Rocket, ShieldCheck, Scale, Cpu, Boxes, Check, Lock, AlertTriangle,
  GraduationCap, Compass, Layers, BookOpen, ExternalLink, Landmark, Factory,
  Sprout, Presentation,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « IA générative en entreprise » (slug /ia-generative-entreprise).
 * Mots-clés : « ia générative entreprise » (140, KD 24), « ia générative en
 * entreprise » (110, KD 25) ; tissés : « déploiement ia générative »,
 * « intégration ia générative », « mettre en place l'ia générative ».
 * Anti-cannibalisation : la tête reste « IA générative » (agence, cabinet et
 * développement appartiennent à d'autres pages). Les usages sont classés par
 * nature de travail ; le panorama par fonction vit sur /cas-usage-ia-entreprise.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards, de
 * FounderNote ni de chiffre Gartner ; modèles et AI Act datés au 7 octobre 2026
 * (fiche FAITS-OUTILS du 07/10, src/data/claude-facts.js) ; repères chiffrés
 * sourcés (Crédoc, OpenAI DevDay) ; cas cités en deux phrases avec lien.
 * Formation = offre secondaire ici.
 */

const SLUG = 'ia-generative-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "IA générative en entreprise : la déployer | Masteria"
const META_DESC = "IA générative en entreprise : usages, déploiement du prototype à la production, RGPD et AI Act, modèles au 7 octobre 2026. 30 min de cadrage offertes."

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

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

const HERO_CHIPS = [
  { icon: MessagesSquare, label: 'Usages par nature de travail' },
  { icon: Rocket,         label: 'Du prototype à la production' },
  { icon: ShieldCheck,    label: 'Relecture humaine' },
  { icon: Scale,          label: 'RGPD et AI Act à jour' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "Des modèles qui écrivent, résument, traduisent, analysent des chiffres ou programment à partir d'une demande formulée en langage courant" },
  { label: 'Où elle rapporte', value: "Les tâches fréquentes, documentées et faciles à relire : courrier, recherche documentaire, préparation de réunions, analyse de tableaux, supports, code" },
  { label: 'Déploiement', value: "Choisir un usage, le tester sur vos fichiers, l'installer dans vos logiciels, puis l'encadrer dans la durée" },
  { label: 'Garde-fous', value: "Version entreprise de l'outil, sources citées, relecture humaine de ce qui engage, règles RGPD et AI Act écrites" },
  { label: 'Modèles', value: "Claude, ChatGPT, Gemini, Mistral et Microsoft Copilot (anciennement Microsoft 365 Copilot) changent de version tous les deux ou trois mois ; repères datés du 7 octobre 2026 plus bas" },
  { label: 'Masteria', value: "Cabinet lyonnais spécialisé en IA depuis 2022 : conseil, construction d'outils et formation des équipes, sans lien avec un éditeur" },
]

/* ───────── Ce qu'elle apporte / ses limites ───────── */

const GAINS = [
  { icon: FileText, title: 'Écrire et reformuler', desc: "Un premier jet de note, de réponse ou de procédure en quelques secondes, dans le ton demandé. La personne garde le fond et corrige la forme ; elle ne part plus d'une page vide." },
  { icon: Search, title: 'Lire des volumes que personne ne lit', desc: "Cent pages de contrat, un an de comptes rendus, un dossier d'appel d'offres : le modèle en extrait ce qui compte et répond aux questions qu'on lui pose. Branché sur vos documents, il cite le passage d'où vient chaque réponse." },
  { icon: Database, title: 'Faire parler un tableau', desc: "Des questions posées en français sur un fichier Excel ou un export de logiciel, des graphiques, des formules proposées puis vérifiées. Plusieurs assistants livrent directement le classeur, le document ou la présentation." },
  { icon: Cpu, title: 'Programmer et automatiser', desc: "Des agents de code comme Claude Code ou Codex lisent un dépôt, proposent une modification et écrivent les tests ; un développeur relit avant de fusionner. Les mêmes modèles écrivent les petits scripts qui relient deux logiciels." },
]

const LIMITES = [
  { icon: AlertTriangle, title: 'Erreurs dites avec aplomb', desc: "Un modèle peut sortir une référence fausse, un chiffre faux ou une clause imaginaire sur le même ton qu'une réponse juste. Ancrer les réponses dans vos documents et faire relire ce qui engage réduit ce risque sans l'annuler." },
  { icon: Lock, title: 'Données confiées au mauvais compte', desc: "Sur les offres grand public, vos échanges peuvent nourrir l'entraînement des modèles, sauf si la personne coche le refus dans ses réglages. Les versions entreprise (ChatGPT Business, Claude Team, Gemini dans Workspace, Microsoft Copilot) excluent cet usage par défaut." },
  { icon: Scale, title: 'Obligations légales', desc: "Le RGPD entre en jeu au premier nom ou au premier numéro de téléphone saisi dans l'outil. L'AI Act ajoute des devoirs qui varient selon l'usage : faible pour un mail, lourd pour un tri de candidatures." },
]

/* ───────── Six usages qui reviennent partout (par nature de travail) ───────── */

const USAGES = [
  { icon: MessagesSquare, fn: 'Courrier entrant · relation client', desc: "Un brouillon de réponse rédigé à partir du message reçu et de l'historique du dossier, avec les formules habituelles de l'entreprise ; le conseiller relit, ajuste et envoie." },
  { icon: BookOpen, fn: 'Savoir interne · RH, qualité, juridique', desc: "Un assistant relié à vos procédures internes, à vos accords collectifs et à vos notes de service, qui répond en citant la page. Les questions répétées cessent de remonter au service expert." },
  { icon: Layers, fn: 'Réunions · direction et encadrement', desc: "Ordre du jour, note préparatoire, compte rendu de décisions et d'actions : l'outil met en forme, la personne qui anime tranche ce qui est retenu." },
  { icon: Database, fn: 'Chiffres · finance et contrôle de gestion', desc: "Un export interrogé en français, des écarts repérés, un commentaire de premier niveau ; le contrôleur vérifie les calculs avant diffusion." },
  { icon: Presentation, fn: 'Supports · marketing et formation', desc: "Une présentation montée sur votre modèle de diapositives depuis un document source, déclinée par public ou par langue, relue avant d'être projetée." },
  { icon: Cpu, fn: 'Code · équipes techniques', desc: "Revue de code, documentation d'un module ancien, tests manquants, scripts de reprise de données : l'agent prépare, le développeur valide." },
]

/* ───────── Comment la déployer (quatre étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: "Choisir l'usage à tester",
    desc: "Nous retenons une tâche fréquente, documentée et facile à vérifier, puis nous écrivons ce que serait un succès : temps rendu, qualité attendue, données autorisées. Un seul usage bien choisi apprend plus que dix pilotes lancés ensemble.",
  },
  {
    num: '02',
    title: 'Le tester sur vos fichiers',
    desc: "Un prototype tourne quelques semaines sur vos propres documents, avec les personnes qui feront la tâche. On y voit ce qui marche, ce qui se trompe et ce qu'il faudra brancher. Le prototype se juge sur ce relevé, jamais sur une démonstration.",
  },
  {
    num: '03',
    title: "L'installer dans vos logiciels",
    desc: "L'usage retenu passe dans l'outil d'entreprise que vos équipes ouvrent déjà, relié à vos sources, avec ses règles d'accès et ses points de relecture. Beaucoup de projets s'arrêtent à cette étape faute de responsable ; nous la traitons comme un chantier à part, avec ses dates.",
  },
  {
    num: '04',
    title: "L'encadrer dans la durée",
    desc: "Une charte d'usage, un référent, un suivi de la qualité des réponses et une formation des utilisateurs gardent l'usage fiable quand les modèles changent de version, ce qui arrive tous les deux ou trois mois.",
  },
]

/* ───────── Modèles au 7 octobre 2026 (sources : fiche FAITS-OUTILS du 07/10, claude-facts.js) ───────── */

const MODELES = [
  { fam: 'Claude (Anthropic)', desc: "Opus 5.5 (paru le 22 septembre 2026) sert par défaut ; Sonnet 5.5 (28 septembre) va plus vite, Fable 5.1 (1er septembre) tient les travaux longs. Les offres payantes acceptent un million de tokens dans une même conversation. Pas d'entraînement par défaut sur Team et Enterprise." },
  { fam: 'ChatGPT (OpenAI)', desc: "La conversation tourne sur GPT-5.6 ; les tâches longues de ChatGPT Work et le code de Codex passent par la famille GPT-6 ; la version 6.1 Sol y est arrivée le 29 septembre 2026. ChatGPT Business, l'ancienne offre Team, n'entraîne pas les modèles sur vos échanges par défaut." },
  { fam: 'Gemini (Google)', desc: "Inclus dans les éditions Google Workspace, en modes Rapide, Raisonnement et Pro (modèles Gemini 3.x). À partir de Business Standard, l'application accepte un contexte d'un million de tokens. Le bon choix quand l'entreprise vit déjà dans Gmail, Docs et Drive." },
  { fam: 'Mistral', desc: "Éditeur français. Son assistant s'appelle Vibe depuis mai 2026 et héberge les données dans l'Union européenne par défaut. Ses modèles actuels s'appellent Medium 3.5 et Small 4 ; Large 4, présenté le 6 octobre 2026, est en préversion par API, avec des poids ouverts annoncés pour le 27 octobre." },
  { fam: 'Microsoft Copilot', desc: "L'assistant de Microsoft fait tourner des modèles OpenAI et Anthropic. Dans l'Union européenne, les modèles Claude restent désactivés tant que l'administrateur ne les ouvre pas, parce qu'ils sortent du périmètre européen de stockage garanti par Microsoft (EU Data Boundary)." },
]

/* ───────── Comment Masteria intervient (trois leviers) ───────── */

const LEVIERS = [
  {
    icon: Compass,
    tag: 'Conseil',
    title: 'Décider quoi faire, et dans quel cadre',
    desc: "Nous classons vos usages possibles, nous recommandons un outil sans commission d'éditeur et nous écrivons les règles : données autorisées, relecture, conformité. La direction tranche sur des éléments vérifiables.",
    points: ['Usages classés par temps rendu et difficulté', 'Règles RGPD et AI Act écrites', "Choix d'outil argumenté"],
  },
  {
    icon: Boxes,
    tag: 'Construction',
    title: 'Fabriquer ce qui manque',
    desc: "Assistants configurés, compétences, branchements sur vos sources, agents : nous construisons du prototype jusqu'à la mise en service. Le code, les réglages et les données restent votre propriété.",
    points: ['Prototype testé sur vos fichiers', 'Raccordement à vos logiciels', 'Passation documentée'],
  },
  {
    icon: GraduationCap,
    tag: 'Formation',
    title: 'Rendre les utilisateurs autonomes',
    desc: "Une fois l'outil en service, nous formons les personnes qui s'en servent, sur leurs propres dossiers. Ces journées relèvent de notre certification Qualiopi.",
    points: ['Ateliers sur les dossiers de chaque métier', 'Bonnes pratiques de relecture', 'Référents capables de transmettre'],
  },
]

/* ───────── Repères chiffrés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    stat: '48 %',
    label: "de la population française âgée d'au moins 12 ans se servait de l'IA générative lors de l'enquête de juin 2025 ; la part n'atteignait que 20 % deux ans plus tôt",
    source: 'Crédoc, Baromètre du numérique 2026 (publié le 9 février 2026)',
  },
  {
    stat: '1,2 milliard',
    label: "d'utilisateurs chaque semaine pour ChatGPT, selon le chiffre montré par OpenAI à son DevDay du 29 septembre 2026",
    source: 'OpenAI, DevDay 2026, rapporté par Engadget',
  },
  {
    stat: '2 déc. 2027',
    label: "date à laquelle s'appliqueront les règles de l'AI Act pour les usages classés « à haut risque » par son annexe III (embauche, éducation, crédit)",
    source: 'Règlement (UE) 2026/1744, dit Omnibus',
  },
]

/* ───────── Définitions clés (ancrage d'entités, GEO) ───────── */

const GLOSSARY = [
  {
    term: 'IA générative',
    def: "Famille de systèmes d'IA qui créent un contenu nouveau (texte, image, code, tableau) à partir d'une demande, en s'appuyant sur des modèles entraînés sur d'immenses corpus.",
  },
  {
    term: 'LLM (grand modèle de langage)',
    def: "Le moteur de la plupart de ces outils : un modèle qui prédit la suite d'un texte mot après mot. Claude, GPT, Gemini et Mistral en sont des familles.",
  },
  {
    term: 'RAG (génération augmentée par la recherche)',
    def: "Méthode qui va chercher dans vos documents les passages utiles avant de répondre, pour que la réponse s'appuie sur eux et puisse les citer.",
  },
  {
    term: 'Hallucination',
    def: "Réponse fausse présentée avec assurance. Elle recule quand le modèle travaille sur des sources fiables et qu'une personne relit ce qui engage.",
  },
  {
    term: 'Compétence (skill)',
    def: "Procédure rédigée une fois dans un fichier SKILL.md, que l'assistant charge dès qu'une demande la concerne. Anthropic a ouvert ce format à tous le 18 décembre 2025 ; Google, Microsoft, OpenAI et Mistral l'ont adopté depuis.",
  },
  {
    term: 'Agent',
    def: "Système qui enchaîne lui-même plusieurs actions dans vos logiciels pour atteindre un objectif, sous des règles de validation humaine fixées à l'avance.",
  },
]

/* ───────── Sources de référence (liens d'autorité, aussi émis en JSON-LD) ───────── */

const PAGE_CITATIONS = [
  { name: "AI Act : règlement (UE) 2024/1689, texte publié sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2026/1744 modifiant l'AI Act, dit Omnibus", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Commission européenne : le cadre réglementaire de l'IA", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { name: "CNIL : ses recommandations sur l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── Deux missions citées (faits : src/data/etudes-de-cas.js et missions-formation.js) ───────── */

const CAS = [
  {
    href: '/etudes-de-cas-ia#conseil-financier',
    icon: Landmark,
    sector: 'Conseil financier au secteur public',
    text: "Quatre assistants écrivent les réponses aux marchés publics d'un cabinet de conseil financier qui compte vingt consultants environ, alimentés par les mémoires que les jurys avaient le mieux notés. Avant d'écrire, chacun questionne le consultant sur le client et les références à citer : le texte part du dossier, pas d'une trame vide.",
  },
  {
    href: '/etudes-de-cas-ia#industrie',
    icon: Factory,
    sector: 'Groupe industriel du packaging',
    text: "Le groupe a remplacé son assistant maison par Copilot. Ses 24 managers pilotes ont travaillé treize ateliers taillés dans les propres fichiers de l'entreprise (prix, coûts, base RH), avant l'ouverture aux sites américains et mexicains en octobre 2026.",
  },
  {
    href: '/etudes-de-cas-ia#mission-interprofession-agricole',
    icon: Sprout,
    sector: 'Interprofession agricole, septembre 2026',
    text: "Seize salariés ont construit un premier assistant, puis lui ont posé une question dont la réponse ne figurait nulle part dans ses documents, pour voir s'il avouait ne pas savoir. Ce test simple apprend plus sur les hallucinations qu'un exposé.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'IA générative en entreprise ?",
    a: "C'est l'usage, dans le travail quotidien d'une organisation, de modèles qui écrivent, résument, traduisent, analysent des chiffres ou programment à partir d'une demande en langage courant. Elle rapporte quand elle travaille sur les documents et dans les logiciels de l'entreprise, avec des règles sur les données et une relecture de ce qui engage. Masteria aide à choisir les usages, construit les outils qui manquent et forme les utilisateurs.",
  },
  {
    q: "Quels cas d'usage de l'IA générative reviennent le plus souvent ?",
    a: "Six familles reviennent partout : répondre au courrier entrant, retrouver une règle dans la documentation interne, préparer et résumer les réunions, analyser un tableau de chiffres, produire des supports dans vos gabarits, écrire et relire du code. Le meilleur départ reste une tâche fréquente et facile à vérifier. Une page dédiée les reprend fonction par fonction, du marketing à la direction.",
  },
  {
    q: "Comment déployer l'IA générative en entreprise ?",
    a: "En quatre étapes : choisir un usage et écrire ce que serait un succès, le tester quelques semaines sur vos fichiers avec les futurs utilisateurs, l'installer dans l'outil d'entreprise relié à vos sources, puis l'encadrer avec une charte, un référent et une formation. L'installation est l'étape la plus souvent négligée : un prototype réussi qui n'a pas de responsable ne sert personne.",
  },
  {
    q: "Quels risques et quelle conformité RGPD / AI Act ?",
    a: "Trois risques dominent : des erreurs énoncées avec aplomb, des données confiées à un compte grand public, des obligations légales ignorées. Le RGPD s'applique depuis le 25 mai 2018 à toute donnée personnelle. L'AI Act, dont l'entrée en vigueur remonte au 1er août 2024, attend depuis le 2 février 2025 que les entreprises aident leurs utilisateurs à maîtriser ces outils (article 4) et fixe depuis le 2 août 2026 des règles de transparence (article 50) ; les obligations des usages « à haut risque », comme le tri de candidatures, ont été reportées au 2 décembre 2027 par le règlement (UE) 2026/1744. Notre page sur la gouvernance de l'IA détaille le cadre à poser.",
  },
  {
    q: "Quel modèle d'IA générative choisir ?",
    a: "Le meilleur modèle n'existe que pour une tâche donnée. Au 7 octobre 2026, Claude (Opus 5.5, Sonnet 5.5) excelle sur les longs documents et le code, ChatGPT sur les images et les agents d'équipe, Gemini dans Google Workspace, Microsoft Copilot dans Outlook, Word et Teams, Mistral quand l'hébergement européen prime. Nous comparons sur vos propres fichiers, en pesant la qualité, le coût par siège, la gestion des données et les logiciels déjà en place. Les versions changent tous les deux ou trois mois : un choix se revoit chaque année.",
  },
  {
    q: "Combien coûte un projet d'IA générative en entreprise ?",
    a: "Deux postes s'additionnent. Les abonnements d'abord, de 15 € à 30 € environ par utilisateur et par mois pour les offres entreprise des grands assistants, d'après les grilles relevées le 7 octobre 2026. Le travail de mise en œuvre ensuite, chiffré au forfait une fois le périmètre connu : un prototype se compte en milliers d'euros, un outil raccordé à vos logiciels en dizaines de milliers, un déploiement multi-pays dépasse les 100 000 €. Les 30 minutes de cadrage sont offertes.",
  },
  {
    q: "L'IA générative remplace-t-elle les équipes ?",
    a: "Elle remplace des tâches, rarement des postes. Les minutes gagnées sur un premier jet, une recherche ou une mise en page vont à ce que le modèle fait mal : juger, négocier, décider, répondre de son travail. Les usages sérieux gardent une personne qui relit ce qui engage l'entreprise, parce que le modèle se trompe parfois sans le signaler.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "IA générative en entreprise (Masteria)",
  description: "Déploiement de l'IA générative en entreprise : choix des usages, prototype sur les fichiers du client, mise en service dans ses logiciels, cadre RGPD et AI Act, formation des utilisateurs.",
  url: 'https://www.master-ia.fr/ia-generative-entreprise',
  serviceType: "Déploiement et intégration de l'IA générative",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  brand: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/ia-generative-entreprise',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Déploiement de l'IA générative en entreprise",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Choix des usages", description: "Usages classés par temps rendu et difficulté, données autorisées, critère de succès écrit." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Prototype et mise en service", description: "Test sur les fichiers du client, installation dans ses logiciels, raccordement à ses sources, points de relecture." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Cadre RGPD et AI Act", description: "Charte d'usage, règles sur les données, relecture humaine, suivi de la qualité des réponses." } },
    ],
  },
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/ia-generative-entreprise#glossaire',
  name: "Glossaire de l'IA générative en entreprise",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
    inDefinedTermSet: 'https://www.master-ia.fr/ia-generative-entreprise#glossaire',
  })),
}

/* Article : auteur (Mathias Nizan) et dates (E-E-A-T, fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/ia-generative-entreprise#article',
  headline: "IA générative en entreprise : de l'essai au déploiement encadré",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-15',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/ia-generative-entreprise#webpage' },
  about: ['IA générative', "Déploiement de l'IA en entreprise", 'RGPD', 'AI Act'],
}

const extraJsonLd = [serviceJsonLd, definedTermSetJsonLd, articleJsonLd]

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {/* Réponse TOUJOURS rendue dans le DOM (repli CSS via maxHeight) pour l'indexation */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function IAGenerativeEntreprisePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'IA générative en entreprise', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished="2026-06-15"
        dateModified="2026-10-07"
        citations={PAGE_CITATIONS}
        extraJsonLd={extraJsonLd}
        keywords="ia générative entreprise, ia générative en entreprise, déploiement ia générative, intégration ia générative, ia générative pour les entreprises, solutions ia générative entreprise, mettre en place l'ia générative, RGPD, AI Act"
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#5B6679' }}>Conseil en IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">IA générative en entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Le guide du dirigeant
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA générative en entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>de l'essai au déploiement encadré</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié et fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · modèles, prix et AI Act revus le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>L'IA générative rédige, résume, traduit, analyse un tableau ou écrit du code à partir d'une demande en langage courant. Dans une entreprise, elle rapporte quand elle travaille sur vos documents et dans vos logiciels, avec des règles sur les données et une relecture de ce qui engage.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Ce guide dit ce qu'elle sait faire, où elle se trompe, comment la déployer en quatre étapes et quel modèle choisir au 7 octobre 2026. Masteria, que Mathias Nizan a ouvert à Lyon en 2022, choisit les usages avec vous, construit les outils, puis apprend à leurs utilisateurs à s'en servir.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deploiement" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les quatre étapes du déploiement
            </a>
          </div>

          {/* tags */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>À retenir</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── DÉFINITION (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Définition</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                L'IA générative en entreprise, c'est un modèle mis au travail sur vos dossiers
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>On parle d'IA générative en entreprise quand des modèles capables de produire du texte, du code, des images ou des tableaux sont branchés sur le travail d'une organisation. Leur valeur dépend de trois choses : les documents auxquels ils ont accès, les logiciels dans lesquels ils agissent, les règles qui encadrent leur usage.</strong>
              </p>
            </div>

            <div style={{ color: '#374151', fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 20 }}>
                Toute entreprise peut ouvrir un abonnement à ChatGPT, Claude ou Gemini en dix minutes. L'accès a cessé d'être un sujet. Ce qui sépare un essai sans lendemain d'un usage installé, c'est le travail fait autour : choisir les bonnes tâches, relier l'outil aux bons fichiers, apprendre aux équipes à relire.
              </p>
              <p style={{ marginBottom: 20 }}>
                Sous le capot, un grand modèle de langage (LLM, le moteur qui prédit la suite d'un texte) reçoit votre demande et le contexte qu'on lui fournit. Ce contexte peut être un fichier joint, un dossier partagé ou une base documentaire interrogée à la volée, la technique dite RAG. Plus il est précis, plus la réponse colle à votre réalité et peut citer ses sources.
              </p>
              <p style={{ marginBottom: 0 }}>
                Le modèle propose, une personne décide : cette règle tient pour tout ce qui part chez un client, engage un budget ou touche un salarié. Les exemples par service se trouvent dans <Link to="/cas-usage-ia-entreprise" style={aStyle}>notre panorama des usages, service par service</Link>, les outils types sur la page de nos <Link to="/solutions-ia" style={aStyle}>solutions IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QU'ELLE APPORTE ET SES LIMITES ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Apports et limites</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que l'IA générative sait faire pour vous, et là où elle trébuche
          </h2>

          <p style={answerStyle}>
            <strong>Elle accélère l'écriture, la lecture de gros volumes, l'analyse de tableaux et la programmation. Elle se trompe parfois sans prévenir, ne connaît de votre entreprise que ce qu'on lui montre et ne décide de rien : ses apports supposent vos documents et une relecture.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Taire les limites prépare une déception au premier bilan. Les deux colonnes suivantes se lisent ensemble.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 44 }}>
            {GAINS.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 26 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 16 }}>Trois limites à connaître avant de commencer</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {LIMITES.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 24, borderLeft: `3px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <item.icon size={20} strokeWidth={2.2} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 15.5 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX USAGES PAR NATURE DE TRAVAIL ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Usages transverses</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Six usages de l'IA générative reviennent dans toutes les entreprises
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Répondre au courrier, interroger le savoir interne, préparer les réunions, faire parler les chiffres, produire des supports, écrire du code. Commencez par celui qui revient le plus souvent dans la semaine de vos équipes et qui se vérifie le plus facilement.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {USAGES.map(item => (
                  <div key={item.fn} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <IconTile icon={item.icon} />
                      <h3 style={{ ...h3Style, fontSize: 15.5 }}>{item.fn}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Quand une tâche demande d'enchaîner plusieurs actions dans vos logiciels, l'usage prend la forme d'un <Link to="/agents-ia-entreprise" style={aStyle}>agent IA d'entreprise</Link>. Les déclinaisons métier par métier sont rassemblées dans nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>exemples d'usages par service</Link>, et les outils prêts à adapter dans nos <Link to="/solutions-ia" style={aStyle}>solutions IA types</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT LA DÉPLOYER (ancre sombre) ── */}
      <section id="deploiement" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Déploiement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Déployer l'IA générative en entreprise prend quatre étapes
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Choisir un usage, le tester sur vos fichiers, l'installer dans vos logiciels, l'encadrer dans la durée. La troisième étape décide du sort du projet : un prototype applaudi qui n'a ni responsable ni place dans les outils du quotidien s'éteint en quelques mois.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 12, lineHeight: 1.7, maxWidth: 880 }}>
            Mettre en place l'IA générative ressemble davantage à un projet d'organisation qu'à un achat de logiciel. Le budget le plus sous-estimé est rarement celui des licences : c'est le temps passé à relier l'outil à vos données et à former ceux qui s'en servent.
          </p>

          <div style={{ position: 'relative', marginTop: 40, maxWidth: 880 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#1E293B' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: '#60A5FA', fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 17, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '36px 0 0', maxWidth: 880 }}>
            Pour choisir le premier usage, le <Link to="/diagnostic-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>Diagnostic IA</Link> fait l'affaire : une intervention courte, calibrée lors du cadrage. Pour une feuille de route à l'échelle de la direction, voyez notre <Link to="/conseil-intelligence-artificielle" style={{ color: '#60A5FA', fontWeight: 600 }}>conseil en intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── RISQUES ET GARDE-FOUS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>RGPD et AI Act</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Deux textes encadrent l'IA générative : le RGPD et l'AI Act
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Le RGPD protège les données personnelles depuis le 25 mai 2018. L'AI Act, qui s'applique par étapes depuis son entrée en vigueur le 1er août 2024 et que l'Omnibus a modifié en juillet 2026, ajoute des devoirs gradués selon l'usage : formation des utilisateurs, transparence sur les contenus générés, exigences fortes pour les usages « à haut risque ».</strong>
              </p>
            </div>

            <div style={{ color: '#374151', fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 20 }}>
                Les précautions se prennent avant le premier incident. Pour limiter les erreurs, on donne au modèle des sources fiables et on fait relire tout ce qui sort de l'entreprise. Pour protéger les données, on choisit une offre entreprise, on décide quelles informations peuvent y entrer et qui y accède.
              </p>
              <p style={{ marginBottom: 20 }}>
                Côté AI Act, trois dates comptent au 7 octobre 2026. L'article 4 vaut depuis le 2 février 2025 : l'entreprise doit aider ses salariés à maîtriser les outils qu'ils utilisent ; l'Omnibus en a fait une obligation de moyens. Depuis le 2 août 2026, l'article 50 oblige à avertir l'utilisateur qu'il converse avec une machine, et à signaler les hypertrucages ainsi que certains textes générés publiés pour informer le public. Les usages classés « à haut risque » (annexe III), tels le tri de candidatures ou l'évaluation de salariés, attendront le 2 décembre 2027 : l'Omnibus, règlement (UE) 2026/1744, a repoussé cette échéance.
              </p>
              <p style={{ marginBottom: 0 }}>
                Une charte d'usage, un registre des outils et des usages, et une règle de relecture par type de document traduisent ces textes en consignes que chacun comprend. Notre page sur la <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> détaille ce cadre, et celle sur l'<Link to="/ia-et-rgpd" style={aStyle}>IA et le RGPD</Link> les règles propres aux données personnelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODÈLES AU 7 OCTOBRE 2026 ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Modèles au 7 octobre 2026</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq familles de modèles se partagent le marché, et aucune ne gagne partout
          </h2>

          <p style={answerStyle}>
            <strong>Claude, ChatGPT, Gemini, Mistral et Microsoft Copilot se valent sur l'essentiel et se distinguent à l'usage : volume de documents accepté, intégration à vos logiciels, hébergement des données, prix par siège. Nous comparons sur vos fichiers et ne touchons aucune commission d'éditeur.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Les fiches ci-dessous datent du 7 octobre 2026. Une nouvelle version sort chez l'un ou l'autre éditeur presque chaque mois : un choix d'outil se réexamine au moins une fois par an.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {MODELES.map(m => (
              <div key={m.fam} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Cpu size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 15.5 }}>{m.fam}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            Pour une comparaison détaillée par usage, notre page <Link to="/quel-outil-ia" style={aStyle}>quel outil d'IA choisir</Link> confronte les assistants tâche par tâche.
          </p>
        </div>
      </section>

      {/* ── COMMENT MASTERIA INTERVIENT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Notre rôle</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Masteria décide avec vous, construit, puis forme
          </h2>

          <p style={answerStyle}>
            <strong>Trois métiers dans un même cabinet : le conseil pour choisir les usages et poser les règles, la construction pour fabriquer et installer les outils, la formation pour rendre les utilisateurs autonomes. Le code et les réglages livrés vous appartiennent.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Selon votre point de départ, un seul levier suffit ou les trois s'enchaînent.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {LEVIERS.map((card, i) => (
              <div key={card.title} style={{ ...cardStyle, padding: 30, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                  <span style={{ background: i === 0 ? c : cLight, color: i === 0 ? '#fff' : c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>
                      <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Sur cette page, la formation arrive en dernier, une fois l'outil en service. L'essentiel du travail consiste à faire d'une idée un outil utilisé chaque jour, ce que décrivent notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en IA</Link> et notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── REPÈRES, DÉFINITIONS ET SOURCES (SEO, GEO) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Repères chiffrés</Kicker>
          <h2 style={h2Style}>
            Trois chiffres situent l'IA générative en 2026
          </h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, maxWidth: 820, marginBottom: 32 }}>
            <strong style={{ color: '#0A0A0A' }}>Les salariés s'en servent déjà, souvent avec leurs comptes personnels ; la loi européenne fixe le calendrier.</strong>{' '}
            Chaque repère est daté et sourcé.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginBottom: 40 }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>Source : {s.source}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', margin: '0 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Six mots à connaître
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', margin: '44px 0 16px' }}>
            Textes officiels cités
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {PAGE_CITATIONS.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BUDGET ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Budget</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Un projet d'IA générative se paie en abonnements et en mise en œuvre
          </h2>

          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Les abonnements entreprise des grands assistants coûtent de 15 € à 30 € environ par utilisateur et par mois (grilles du 7 octobre 2026). La mise en œuvre se chiffre au forfait : en milliers d'euros pour un prototype, en dizaines de milliers pour un outil raccordé à vos logiciels, au-delà de 100 000 € pour un déploiement sur plusieurs sites.</strong>
          </p>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Ces fourchettes restent larges, parce que deux projets qui portent le même nom n'ont parfois rien en commun. Le détail de ce qui fait varier la facture figure dans notre guide du <Link to="/prix-projet-ia" style={aStyle}>prix d'un projet IA</Link>. Une demi-heure de cadrage, offerte, suffit à placer votre projet dans ces fourchettes.
          </p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>L'IA générative à l'œuvre chez trois clients</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Un cabinet de conseil, un industriel, une interprofession : trois façons d'ancrer un modèle dans les documents de l'organisation. Les clients restent anonymes à leur demande.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {CAS.map(({ href, icon: Icon, sector, text }) => (
              <article key={href} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Lire le récit de la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Sept questions sur l'IA générative en entreprise
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                La vôtre n'y figure pas ? Posez-la par écrit, nous répondons sous 24 heures.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyer ma question
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
          <Kicker>Pour continuer</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Sept pages pour passer de la lecture à l'action
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Des exemples, des règles, un budget : de quoi préparer votre premier usage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Panorama des usages par service', href: '/cas-usage-ia-entreprise', tag: 'Exemples', desc: "Huit services passés en revue, trois usages pour chacun, et les briques techniques qui les portent." },
              { label: 'Solutions IA', href: '/solutions-ia', tag: 'Outils types', desc: "Des outils déjà conçus, à ajuster à votre activité plutôt qu'à inventer." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Aller plus loin', desc: "Quand l'IA enchaîne elle-même des actions dans vos logiciels, et les règles que cela impose." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Cadre', desc: "Rôles, registre, relecture et conformité pour que l'usage reste maîtrisé." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Modèle', desc: "Les rubriques d'une charte d'utilisation, avec des formulations à reprendre." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Premier pas', desc: "Repérer le bon premier usage avant d'investir, sur une durée convenue ensemble." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Ce que la loi demande dès qu'une donnée personnelle passe par un assistant." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Consulter
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Je relis ce guide chaque fois qu'un éditeur change de modèle ou que le droit européen bouge ; la dernière révision date du 7 octobre 2026. Depuis la création de Masteria en 2022, j'ai vu l'IA générative passer de la curiosité au poste de travail, et le même constat revient : les entreprises qui en tirent quelque chose ont d'abord choisi leurs usages. Mon parcours figure sur <Link to="/mathias-nizan" style={aStyle}>ma page de fondateur</Link>.
          </p>
          <p style={{ fontSize: 14, color: '#6B7280', margin: 0, fontWeight: 600 }}>Mathias Nizan, fondateur de Masteria</p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (#0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Choisissons ensemble votre premier usage
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez la tâche que vous aimeriez confier à l'IA générative, les logiciels concernés et vos contraintes de données. En une demi-heure, nous regardons si elle s'y prête, ce qu'il faudrait tester d'abord et dans quel cadre.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '16px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #2A3650' }}>
                Découvrir le Diagnostic IA
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Visio ou téléphone · Claude, ChatGPT, Gemini, Mistral, Copilot comparés sans parti pris · clients français et internationaux
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Derrière ce guide</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des praticiens qui déploient ces outils chaque semaine
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria ne travaille que sur l'intelligence artificielle. Pour chaque projet, Mathias Nizan constitue l'équipe utile parmi un réseau d'indépendants : une vingtaine de formateurs, une dizaine de consultants spécialisés et cinq développeurs environ. Aucun éditeur ne finance nos recommandations. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail daté et sourcé.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['5', 'familles de modèles suivies au mois le mois'],
              ['2022', 'année où le cabinet a ouvert, à Lyon'],
              ['Les Échos', 'ont cité Mathias Nizan sur le choix des outils'],
              ['Inde', 'et États-Unis : nos missions hors d\'Europe'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
