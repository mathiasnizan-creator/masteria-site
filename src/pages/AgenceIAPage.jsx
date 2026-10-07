import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Bot, Building2, Check, Compass, Cpu, Factory,
  Globe, GraduationCap, Handshake, Landmark, MapPin, MonitorSmartphone,
  Radar, ShieldCheck, Sun, Target, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Agence IA » NATIONALE : cible « agence ia », « agence ia france »,
 * « agence conseil ia entreprise », « agents ia », « agent ia sur mesure »,
 * « création d'agent ia ». Google la montre aussi sur les requêtes lyonnaises
 * (« agence ia lyon », « agents ia lyon ») : le texte assume l'ancrage lyonnais
 * et renvoie vers /agence-ia-lyon (template AgenceGeoPage), sans la recopier.
 * Cœur d'offre : conseil et développement d'agents et d'outils sur mesure ;
 * automatisation, gouvernance et formation complètent.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards ni
 * de FounderNote, cas cités en une ou deux phrases avec lien vers leur ancre,
 * offre d'entrée « 30 minutes de cadrage offertes », prix en fourchettes larges.
 * Design premium cabinet : kickers, icônes lucide (zéro emoji), cartes radius 16,
 * CTA final sombre. Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'agence-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = 'Agence IA : conseil et agents IA sur mesure | Masteria'
const META_DESC = "Agence IA née à Lyon en 2022 : conseil, création d'agents IA sur mesure, automatisation, formation. Missions en France, Europe, États-Unis et Inde."
const KEYWORDS = "agence ia, agence intelligence artificielle, agence ia france, agence ia lyon, agents ia, agent ia sur mesure, création d'agent ia, agence conseil ia, agence conseil ia entreprise"

/* Sources d'autorité citées par la page (WebPage.citation + liens visibles). */
const PAGE_CITATIONS = [
  { name: "AI Act : le règlement (UE) 2024/1689 dans sa version publiée sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2026/1744, qui a repoussé les échéances « haut risque » (annexe III portée à décembre 2027)", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Dossier de la CNIL consacré à l'intelligence artificielle et aux données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ── Design system local : kickers, titres, cartes, pastilles d'icônes ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

const HERO_BADGES = [
  { icon: BadgeCheck, label: 'Qualiopi · actions de formation' },
  { icon: Building2, label: 'Née à Lyon en 2022' },
  { icon: Globe, label: 'Europe · États-Unis · Inde' },
  { icon: MonitorSmartphone, label: 'Sur site ou en visio' },
]

const KEY_FIGURES = [
  { num: '2022', label: 'création du cabinet, à Lyon' },
  { num: '≈ 10', label: 'consultants IA mobilisables' },
  { num: '≈ 5', label: "développeurs d'agents et d'outils" },
  { num: '≈ 20', label: 'formateurs pour vos équipes' },
]

const OFFERS = [
  {
    icon: Compass,
    title: 'Conseil en stratégie IA',
    href: '/conseil-intelligence-artificielle',
    cta: 'Voir notre conseil en IA',
    desc: "Nous partons de vos flux de travail pour repérer les tâches où l'IA libère des heures, puis nous les classons selon l'effort qu'elles demandent et le gain qu'on en attend. La feuille de route qui en sort est datée, avec les outils à retenir et les règles d'usage à poser.",
    points: ['Lecture des flux et des usages en place', 'Priorités classées par effort et par gain', 'Feuille de route datée, outils choisis'],
  },
  {
    icon: Cpu,
    title: 'Agents et outils IA sur mesure',
    href: '/agence-developpement-ia',
    cta: 'Voir le développement sur mesure',
    desc: "Le cœur de l'agence. Nous concevons des agents qui lisent une demande, consultent votre ERP ou votre CRM et préparent la réponse, des copilotes internes et des interfaces dédiées à un métier. Chaque prototype se teste sur vos propres fichiers avant la mise en production, et chaque livraison arrive documentée.",
    points: ['Agents reliés à vos logiciels métier', 'Prototype éprouvé sur vos fichiers', 'Mise en production documentée'],
  },
  {
    icon: Workflow,
    title: 'Automatisation des tâches répétitives',
    href: '/agence-automatisation-ia',
    cta: "Voir l'agence d'automatisation",
    desc: "Relances, ressaisies, consultations de fournisseurs, rapports de la semaine : nous relions vos outils existants pour que ces tâches se préparent seules, avec une validation humaine là où une erreur coûterait cher. Le temps passé se relève avant et après, tâche par tâche.",
    points: ['Repérage des tâches qui reviennent', 'Enchaînements entre vos outils actuels', 'Temps relevé avant et après'],
  },
  {
    icon: ShieldCheck,
    title: "Cadre d'usage et conformité",
    href: '/gouvernance-ia',
    cta: 'Voir la gouvernance IA',
    desc: "Une charte que les équipes comprennent, un référent qui administre les comptes, un registre des usages tenu à jour, et une lecture de vos obligations RGPD et AI Act. Exemple : l'article 50 de la réglementation européenne exige, depuis le 2 août 2026, qu'un utilisateur sache quand il parle à une machine.",
    points: ['Charte et référent IA nommé', 'Registre des usages à jour', 'Obligations RGPD et AI Act lues pour vous'],
  },
  {
    icon: GraduationCap,
    title: 'Formation des futurs utilisateurs',
    href: '/formation-intelligence-artificielle',
    cta: 'Voir les formations IA',
    desc: "Nous formons sur les assistants que vous avez retenus (ChatGPT, Claude, Gemini, Microsoft Copilot, Mistral) et sur les agents livrés, pour un groupe interne (douze participants maximum) ou pour une seule personne, à 1 980 € HT par journée. Qualiopi certifie Masteria dans la catégorie « actions de formation » : l'opérateur de compétences (OPCO) de votre branche est donc en mesure de financer ce volet, à hauteur de ce que ses règles et ses fonds permettent.",
    points: ["Intra (12 personnes au plus) ou individuel", '1 980 € HT par jour, 3 960 € HT pour deux', "Financement OPCO possible, suivant la branche"],
  },
]

/* Ce qui se fait sur place et ce qui se fait à distance (remplace les cartes secteurs). */
const ON_SITE = [
  { icon: Compass, title: 'Cadrage en atelier, chez vous', desc: "La direction et les salariés concernés se retrouvent autour du travail à outiller. On décide ensemble ce que l'agent fera et ce qui restera entre des mains humaines." },
  { icon: Radar, title: 'Observation au poste', desc: "Regarder une cotation se faire, étape par étape, révèle ce que les entretiens oublient : la ressaisie, le fichier annexe, l'aller-retour avec l'entrepôt." },
  { icon: Cpu, title: 'Développement et tests, à distance', desc: "L'agent se construit chez nous et s'éprouve sur vos fichiers. Un point en visio à chaque livraison vous permet de valider l'étape avant la suivante." },
  { icon: GraduationCap, title: 'Passation sur site', desc: "Les futurs utilisateurs prennent l'outil en main avec nous, sur leurs propres dossiers. Un référent interne repart avec la documentation et la charge de le faire évoluer." },
]

const FIRST_STEPS = [
  { num: '1', title: 'Vous nous écrivez', desc: "Le formulaire de contact demande l'essentiel : votre activité, la tâche qui vous coûte du temps, les logiciels déjà en place. Nous vous proposons ensuite un créneau." },
  { num: '2', title: '30 minutes de cadrage, offertes', desc: "En visio ou au téléphone, nous repérons ce qui pèse le plus chez vous : un agent à construire, une stratégie à poser, une automatisation, une formation, ou plusieurs de ces chantiers. Vous repartez en sachant par quoi commencer." },
  { num: '3', title: 'Une proposition au forfait', desc: "Contenu, livrables, dates, prix et éventuels déplacements : tout est écrit noir sur blanc. Si un Diagnostic IA doit venir d'abord, on fixe sa durée et son forfait pendant cet échange." },
  { num: '4', title: 'Le premier atelier', desc: "La mission s'ouvre sur l'atelier de cadrage. La documentation et la formation des utilisateurs figurent dès le départ dans le planning, pour que la compétence reste chez vous à la fin." },
]

const SPECIALIST_POINTS = [
  { icon: Target, title: 'Un seul sujet depuis 2022', desc: "Depuis sa création, Masteria s'occupe d'intelligence artificielle et de rien d'autre. Une ESN généraliste répartit ses équipes entre des dizaines de technologies et affecte souvent ses profils IA selon le planning du moment." },
  { icon: Radar, title: "Des choix d'outils datés", desc: "Les assistants changent de nom, de prix et de capacités en l'espace de quelques mois : Mistral AI a rebaptisé le sien Vibe le 28 mai 2026. Nous datons nos recommandations et les revoyons à chaque mission, en restant libres face aux éditeurs." },
  { icon: GraduationCap, title: 'Une mission qui a une fin', desc: "La régie vit de la durée des missions. Notre modèle repose sur la livraison de l'outil puis sur la passation : documentation, référent formé, utilisateurs formés. Au départ de l'agence, vos équipes savent corriger et étendre ce qui a été construit." },
  { icon: Handshake, title: 'Un interlocuteur du début à la fin', desc: "Mathias Nizan pilote chaque mission. Les arbitrages se prennent en quelques jours, et le programme suit votre situation plutôt qu'un catalogue." },
]

/* Comparatif 4 voies (snippet SEO + citation GEO) */
const COMPARISON_TABLE = [
  { critere: "Profondeur en IA", agence: "L'IA est son seul métier ; recommandations indépendantes des éditeurs", esn: "Une technologie parmi d'autres ; profils affectés selon le planning", freelance: 'Pointue, portée par une seule personne', interne: 'À recruter, sur un marché où ces profils sont rares' },
  { critere: 'Mise en route', agence: 'Quelques jours après la signature de la proposition', esn: "Plus longue : référencement, contrat cadre, appel d'offres interne", freelance: 'Immédiate si la personne est libre', interne: "Plusieurs mois entre l'offre d'emploi et la prise de poste" },
  { critere: 'Autonomie en fin de mission', agence: 'Prévue au contrat : documentation, référent, formation des utilisateurs', esn: 'Rare : la régie prolonge la présence du prestataire', freelance: 'Dépend de la personne et de sa disponibilité', interne: "Acquise, une fois l'équipe constituée" },
  { critere: 'Budget', agence: "Forfait écrit après cadrage ; formation finançable par l'OPCO selon ses règles", esn: 'Engagements longs et coûts de coordination', freelance: 'Taux journalier attractif, pilotage à votre charge', interne: 'Salaires chargés, année après année' },
  { critere: 'Pertinent pour', agence: 'Directions métier, PME et ETI qui attendent un outil en service et des équipes autonomes', esn: "Grands chantiers d'infrastructure, renfort de capacité", freelance: 'Une tâche courte et bien délimitée', interne: 'Des usages à fort volume, une fois la trajectoire connue' },
]

/* Études de cas citées pour cette page (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026). */
const AGENCY_CASES = [
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    figure: '11',
    figureLabel: 'compétences Claude construites avec dix référents',
    text: "En juin 2026, après deux jours de formation, dix référents ont conçu avec nous des compétences Claude (des savoir-faire empaquetés que l'assistant applique à une tâche) : préparer une cotation à partir d'un courriel client, relancer les devis, répondre aux cahiers des charges. Le reste de l'entreprise suivra, avec un déploiement programmé d'octobre à décembre 2026.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: 'Conseil financier au secteur public',
    figure: '4',
    figureLabel: 'assistants, chacun calé sur une famille de marchés publics',
    text: "Les consultants les ont bâtis avec nous lors de quatre séances de deux heures, à partir des mémoires techniques les mieux notés du cabinet. Avant de rédiger, chaque assistant questionne le consultant : ce que le cabinet a déjà fait pour ce client, ce qu'attend l'acheteur public, quelles références mettre en avant.",
  },
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · équipe de trois',
    figure: '3',
    figureLabel: 'assistants à construire, un porteur pour chacun',
    text: "Le diagnostic, restitué aux dirigeants en septembre 2026, retient trois chantiers autour d'Odoo, le logiciel de gestion (ERP) de l'entreprise : consulter les transporteurs, importer les réceptions d'entrepôt, préparer devis et relances. Deux jours de formation sur place, dans l'entreprise, suivront en octobre 2026.",
  },
  {
    id: 'industrie',
    icon: Factory,
    sector: 'Packaging · groupe industriel international',
    figure: '24',
    figureLabel: 'managers pilotes, sur treize ateliers bâtis avec les fichiers du groupe',
    text: "Cinq sessions de deux jours se sont tenues de juillet à septembre 2026, deux d'entre elles en anglais, avec des assistants personnalisés dans Copilot. Octobre 2026 emmène le dispositif aux États-Unis et au Mexique ; l'Inde suivra en décembre.",
  },
]

const FAQ = [
  {
    q: 'Comment choisir une agence IA en 2026 ?',
    a: "Aucun classement officiel n'existe. Quatre critères départagent les candidats : la part de l'IA dans leur activité, des missions comparables décrites avec leurs dates, l'autonomie de vos équipes prévue au contrat, et un contrôle exercé par un organisme indépendant. Masteria n'a pas d'autre métier que l'IA depuis 2022, publie quatre études de cas anonymisées, inscrit la passation dans chaque proposition et détient la certification Qualiopi (catégorie « actions de formation »). Notre guide sur la meilleure agence IA détaille la grille complète.",
  },
  {
    q: 'Combien coûte une agence IA ?',
    a: "Le prix suit ce que l'on construit. Chez Masteria, les 30 minutes de cadrage sont offertes ; ensuite, chaque mission de conseil comme de développement reçoit un prix forfaitaire écrit. Comptez quelques milliers d'euros au minimum pour un prototype ou un petit périmètre, des dizaines de milliers pour un agent en production, et plus de 100 000 € dès qu'un déploiement couvre plusieurs sites ou pays ; les plus gros budgets se chiffrent en centaines de milliers. Une journée de formation est facturée 1 980 € HT, deux journées 3 960 € HT. Conseil et développement : pas finançables par votre OPCO. La formation peut l'être, selon les règles et les fonds de votre branche.",
  },
  {
    q: 'Agence IA ou recrutement interne ?',
    a: "Les deux se combinent bien. Un profil IA confirmé met plusieurs mois à se recruter, et son coût annuel chargé dépasse souvent le budget d'une première mission complète. L'agence démarre en quelques jours avec des méthodes déjà rodées. Dans une PME comme dans une ETI, le chemin le plus sûr consiste à confier le cadrage et les premiers agents à l'agence, puis à internaliser au rythme où un référent se forme. Chaque mission Masteria prévoit cette passation.",
  },
  {
    q: 'Où intervenez-vous ?',
    a: "Masteria est installée à Lyon, sur la presqu'île, et ses consultants travaillent sur site partout en France. Hors de France, nous intervenons à Genève, à Bruxelles et ailleurs en Europe, ainsi qu'en Inde et aux États-Unis. Si votre société se trouve dans la métropole lyonnaise, notre page agence IA à Lyon décrit les ateliers tenus dans vos locaux. Les frais de trajet sont chiffrés dans la proposition, et chaque mission peut aussi se dérouler à distance.",
  },
  {
    q: 'Quelle différence entre une agence IA et un cabinet de conseil IA ?',
    a: "Dans l'usage courant, une agence IA construit : agents, outils, automatisations, branchements sur vos logiciels. Un cabinet de conseil IA travaille plutôt en amont, sur la stratégie, le choix des outils et la gouvernance. Beaucoup de structures font désormais les deux. Masteria porte les deux casquettes et y ajoute celle d'organisme de formation : le conseil fixe la feuille de route, l'agence construit, la formation donne à vos équipes leur autonomie.",
  },
  {
    q: 'Travaillez-vous avec les PME ?',
    a: "Oui. Trois de nos quatre études de cas concernent des structures de taille modeste : une équipe de trois personnes, un cabinet d'une vingtaine de consultants, une filiale de 58 salariés. Pour une PME, deux ou trois tâches bien outillées et une équipe formée suffisent à mesurer un premier gain : notre cas de distribution photovoltaïque prévoit 90 jours entre la décision et le premier bilan. Le premier rendez-vous, une demi-heure de cadrage, ne vous coûte rien ; viennent ensuite des missions courtes au forfait. Côté formation, l'OPCO dont relève votre branche peut prendre en charge les journées, dans le respect de ses règles. Les directions de grands groupes trouvent le même socle, à leur échelle.",
  },
  {
    q: 'Pouvez-vous créer un agent IA sur mesure pour notre entreprise ?',
    a: "Oui : c'est même le centre de gravité de notre agence. Un agent IA est un programme qui s'appuie sur un modèle de langage pour enchaîner des actions : lire une demande, chercher dans vos données, préparer une réponse ou une mise à jour. Nous le construisons en quatre temps. Le cadrage fixe la tâche et les données autorisées. Un prototype est éprouvé sur vos fichiers. L'agent est ensuite relié à vos logiciels par leurs API (les portes d'entrée techniques d'un logiciel) ou par MCP (un standard ouvert pour brancher un assistant sur vos outils). Il passe enfin en production ; une personne valide chaque action qui engage votre société. Un prototype coûte quelques milliers d'euros ou plus ; un agent en service se compte en dizaines de milliers.",
  },
  {
    q: 'Combien de temps dure un projet avec une agence IA ?',
    a: "Le calendrier dépend du périmètre et s'écrit dans la proposition. Un cadrage stratégique tient en quelques semaines, un premier prototype d'agent aussi ; l'intégration complète et la mise en production s'étalent ensuite selon le nombre de logiciels à relier. La durée d'un Diagnostic IA se fixe pendant le cadrage. Nous préférons des missions courtes, découpées en livraisons utilisables, avec un point de décision à chaque étape.",
  },
  {
    q: "Avec quels modèles et outils d'IA travaillez-vous ?",
    a: "Aucun éditeur ne nous lie, et le modèle se choisit au cas par cas : Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google), Microsoft Copilot, Vibe et les modèles de Mistral AI, ou un modèle à poids ouverts, installable sur vos propres serveurs. Le choix tient à la sensibilité des données, aux logiciels déjà en place, au budget et aux contraintes de conformité. Pour un développement, nous combinons la recherche dans vos documents (RAG), des agents dotés d'outils et des connecteurs ; vos données peuvent rester hébergées dans l'Union européenne si le projet l'exige.",
  },
  {
    q: 'Agence IA ou freelance IA : que choisir ?',
    a: "Un freelance convient à une tâche courte et bien délimitée, qui repose sur une seule compétence. Une agence réunit plusieurs profils (consultant, développeur, formateur), garde le même interlocuteur du début à la fin et suit une méthode éprouvée. Pour un agent relié à votre système d'information ou un déploiement qui doit rendre plusieurs équipes autonomes, l'agence couvre mieux les risques. Pour un script ou une consigne isolée, un freelance fera l'affaire.",
  },
  {
    q: 'Êtes-vous une agence IA française ?',
    a: "Oui. Mathias Nizan a créé Masteria en 2022, à Lyon. Nos contrats relèvent du droit français, et vos données peuvent être traitées dans l'Union européenne quand le projet l'impose. Pour une équipe située hors de France, nous adaptons la facturation au pays concerné et ne promettons aucun financement qui n'y existerait pas : l'OPCO, par exemple, reste un dispositif français.",
  },
  {
    q: "Accompagnez-vous les entreprises sur l'ensemble du projet, du conseil au développement ?",
    a: "Oui. Une même équipe cadre la stratégie et la gouvernance, construit les agents, les outils et les automatisations, puis forme les utilisateurs. Vous gardez un interlocuteur, Mathias Nizan, du cadrage à la passation, au lieu de coordonner un cabinet de conseil, un studio de développement et un organisme de formation. Les décisions prises au cadrage restent visibles jusqu'à la mise en service de l'outil.",
  },
]

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.master-ia.fr/agence-ia#localbusiness',
  name: 'Masteria',
  description: META_DESC,
  url: 'https://www.master-ia.fr/agence-ia',
  image: 'https://www.master-ia.fr/assets/logo-square.png',
  telephone: '+33667754128',
  priceRange: '€€',
  foundingDate: '2022',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "17 rue d'Algérie",
    postalCode: '69001',
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.764, longitude: 4.8357 },
  areaServed: [
    { '@type': 'City', name: 'Lyon' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  knowsAbout: [
    'Intelligence artificielle générative',
    'Conseil et stratégie IA',
    "Développement d'outils et d'agents IA sur mesure",
    'Automatisation des processus',
    'Agents IA',
    "Formation professionnelle à l'IA",
    'Gouvernance et conformité IA (RGPD, AI Act)',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Certification Qualiopi (actions de formation), NDA 84 69 23218 69',
  },
  parentOrganization: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* DefinedTermSet : définitions citables (GEO) des entités centrales de la page.
   Reprend en données structurées ce que la page explique déjà en prose. */
const DEFINITIONS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/agence-ia#glossaire',
  name: 'Glossaire : agence IA, agent IA, cabinet de conseil IA, passation',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Agence IA',
      description: "Prestataire qui construit pour une entreprise des agents, des outils et des automatisations fondés sur l'intelligence artificielle, les relie à ses logiciels et forme ses utilisateurs, le plus souvent après un cadrage stratégique.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Agent IA',
      description: "Programme qui s'appuie sur un modèle de langage pour enchaîner des actions dans les logiciels d'une entreprise (lire une demande, chercher une information, préparer une réponse), sous le contrôle d'une personne pour les actions qui comptent.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Cabinet de conseil IA',
      description: "Structure qui intervient avant la construction : lecture des flux de travail, choix des usages et des outils, gouvernance des données. Beaucoup de prestataires mêlent aujourd'hui conseil et développement.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Passation',
      description: "Étape de fin de mission où le prestataire remet la documentation, forme un référent interne et les utilisateurs, pour que l'entreprise sache faire évoluer seule les outils livrés.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-ia#article',
  headline: "Agence IA : des agents sur mesure, du cadrage jusqu'à l'autonomie des équipes",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-12',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-ia#webpage' },
  about: ['Agence IA', 'Agents IA sur mesure', 'Conseil en intelligence artificielle', 'Automatisation des processus'],
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

export default function AgenceIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Offres / Ancrage / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'À propos de Masteria', slug: 'centre-formation-ia-entreprise' },
    { name: 'Agence IA', slug: SLUG },
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
        citations={PAGE_CITATIONS}
        datePublished="2026-06-12"
        dateModified="2026-10-07"
        extraJsonLd={[LOCAL_BUSINESS_JSONLD, DEFINITIONS_JSONLD, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 6vw, 64px) 24px clamp(64px, 8vw, 88px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/centre-formation-ia-entreprise" style={{ color: '#5B6679' }}>À propos de Masteria</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Agence IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Agence IA · née à Lyon · missions sur trois continents
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agence IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des agents IA sur mesure, cadrés avec vous et transmis à vos équipes</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Rédigé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur du cabinet · actualisé le 7 octobre 2026
          </p>

          {/* GEO : réponse directe pour citation LLM, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria est une agence IA française que Mathias Nizan a fondée en 2022, à Lyon. <strong style={{ color: '#fff', fontWeight: 700 }}>Nous concevons des agents et des outils d'intelligence artificielle taillés pour le métier de chaque client</strong>, après un cadrage qui fixe la tâche à confier, les données autorisées et la part de contrôle humain. Le conseil en amont, l'automatisation des processus et la formation des utilisateurs complètent ce travail, sur site comme à distance, de la métropole lyonnaise jusqu'aux États-Unis et à l'Inde.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Une mission d'agence part toujours d'une tâche précise : la cotation qui attend dans une boîte mail, le mémoire d'appel d'offres rédigé de zéro, les transporteurs qu'on consulte à la main avant chaque livraison. Nous la décrivons avec ceux qui l'accomplissent chaque jour, nous construisons l'agent qui la prépare, puis nous apprenons à vos équipes à le corriger et à l'étendre. Quand la mission s'achève, l'outil, sa documentation et la compétence restent chez vous.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#offres" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parcourir les cinq offres
            </a>
          </div>

          {/* chips */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
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
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: '44px 24px', display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap', borderBottom: '1px solid #E5E7EB' }}>
        {KEY_FIGURES.map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── LES OFFRES (éditorial asymétrique) ── */}
      <section id="offres" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Cinq offres, un même fil</div>
              <h2 style={h2Style}>Que construit une agence IA pour une entreprise ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none' }}>
                <strong style={{ color: '#0A0A0A' }}>Une agence IA transforme une tâche coûteuse en outil qui tourne : elle cadre le besoin, construit l'agent ou l'automatisation, l'installe dans vos logiciels et forme les personnes qui s'en serviront.</strong>{' '}
                Chez Masteria, le développement d'agents et le conseil forment le cœur de l'offre. La gouvernance, l'automatisation et la formation s'y ajoutent selon votre point de départ.
              </p>
              <p style={{ ...mutedStyle, maxWidth: 'none', margin: 0 }}>
                Chaque mission donne lieu à une proposition au forfait, que vous signez seulement quand son contenu, ses livrables, ses dates et son montant vous conviennent.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 24 }}>
                {OFFERS.map(({ icon: Icon, title, href, cta, desc, points }) => (
                  <div key={href} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ ...iconBoxStyle, marginBottom: 18 }}>
                      <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 10, letterSpacing: '-0.01em' }}>{title}</h3>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {points.map(pt => (
                        <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link to={href} style={{ marginTop: 'auto', color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      {cta}
                      <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `4px solid ${c}`, borderRadius: 12, padding: '20px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  <strong style={{ color: '#0A0A0A' }}>Une seule équipe, de la première question à l'outil en service.</strong>{' '}
                  Mathias Nizan pilote chaque mission du cadrage à la passation, si bien que les arbitrages du départ suivent le projet jusqu'à la mise en production. Le détail technique se lit sur nos pages{' '}
                  <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link> et{' '}
                  <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link>. Pour faire circuler une tâche d'un logiciel à l'autre, lisez la page{' '}
                  <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation IA</Link> ; pour des assistants qui agissent dans votre système d'information, celle consacrée aux{' '}
                  <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANCRAGE LYONNAIS (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Lyon, puis partout</div>
              <h2 style={h2Style}>Une agence IA née à Lyon, au travail là où sont vos équipes</h2>
              <p style={{ ...answerStyle, maxWidth: 'none' }}>
                <strong style={{ color: '#0A0A0A' }}>Née à Lyon en 2022, Masteria y a gardé son adresse, au 17 rue d'Algérie, sur la presqu'île. Ses consultants se déplacent chez vous partout en France et, quand le projet le demande, au-delà des frontières : Europe, États-Unis, Inde.</strong>{' '}
                Trois moments gagnent à se vivre dans la même pièce : l'atelier de cadrage, l'observation du travail au poste et la passation. Le développement et les tests avancent à distance.
              </p>
              <p style={{ ...mutedStyle, maxWidth: 'none', margin: 0 }}>
                Si votre entreprise est dans la métropole lyonnaise, la page <Link to="/agence-ia-lyon" style={{ color: c, fontWeight: 600 }}>agence IA à Lyon</Link> décrit notre façon d'intervenir sur place. D'autres pages présentent nos missions à <Link to="/agence-ia-paris" style={{ color: c, fontWeight: 600 }}>Paris</Link>, <Link to="/agence-ia-marseille" style={{ color: c, fontWeight: 600 }}>Marseille</Link>, <Link to="/agence-ia-annecy" style={{ color: c, fontWeight: 600 }}>Annecy</Link> et <Link to="/agence-ia-geneve" style={{ color: c, fontWeight: 600 }}>Genève</Link>.
              </p>
            </div>

            <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24, marginBottom: 48 }}>
            <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={iconBoxStyle}>
                <MapPin size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Le cabinet : 17 rue d'Algérie, 69001 Lyon</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                  La préfecture de région Auvergne-Rhône-Alpes a enregistré Masteria comme organisme de formation, avec le numéro de déclaration 84 69 23218 69. Ce numéro figure sur chacune de nos conventions de formation.
                </p>
              </div>
            </div>
            <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={iconBoxStyle}>
                <Building2 size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Des missions hors de France, en français ou en anglais</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                  Pour un groupe industriel du packaging, deux des cinq sessions menées de juillet à septembre 2026 se sont déroulées en anglais. Hors de France, aucun OPCO n'intervient : le prix s'entend hors taxes et la facturation suit le pays concerné.
                </p>
              </div>
            </div>
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', marginBottom: 20, letterSpacing: '-0.01em' }}>
            Ce qui se fait chez vous, ce qui se fait à distance
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20, marginBottom: 40 }}>
            {ON_SITE.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{title}</h4>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={iconBoxStyle}>
              <Globe size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                Des déplacements chiffrés avant la signature
              </h3>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Quand une étape se tient sur place, le trajet et l'hébergement figurent sur une ligne à part de la proposition. Si vos équipes préfèrent la visio, chaque mission et chaque formation peuvent aussi se tenir à distance ; programme et livrables restent identiques.
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIER ÉCHANGE (timeline à rail, rail étroit) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={kickerStyle}>Avant de signer</div>
          <h2 style={h2Style}>Comment démarre une mission avec notre agence IA ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Le point de départ : 30 minutes de cadrage offertes, au téléphone ou en visio.</strong>{' '}
            Elles servent à repérer votre besoin principal avant de parler de prix. Une proposition écrite et forfaitaire suit, et rien ne démarre sans votre accord.
          </p>
          <p style={mutedStyle}>
            Entre votre premier message et le premier atelier, comptez quatre étapes.
          </p>
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {FIRST_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === FIRST_STEPS.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 16, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 32, color: c, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Réserver 30 minutes de cadrage
            <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── AGENCE SPÉCIALISÉE VS ESN (ancre sombre, pivot preuve) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Agence spécialisée ou ESN</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Pourquoi confier un projet d'IA à une agence spécialisée plutôt qu'à votre ESN ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une agence spécialisée passe ses journées sur les modèles, les agents et leurs usages métier : elle sait ce qui a changé ce mois-ci et ce qui casse une fois en production.</strong>{' '}
            Votre ESN reste le bon interlocuteur pour un chantier d'infrastructure ou un renfort de développeurs à la journée. Pour choisir les cas d'usage, construire un agent et faire adopter l'outil, la spécialisation raccourcit le chemin.
          </p>
          <p style={{ color: '#B4C0D3', fontSize: 15, lineHeight: 1.7, margin: '0 0 40px', maxWidth: 880 }}>
            Beaucoup d'entreprises confient d'abord l'IA à leur prestataire informatique habituel. L'intégration technique se passe bien ; ce sont les choix d'usage et l'appropriation de l'outil par les équipes qui calent le plus souvent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24, marginBottom: 56 }}>
            {SPECIALIST_POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 28 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparatif 4 voies : citable par les IA (GEO) + featured snippet (SEO) */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
            Quatre façons de mener un projet d'IA, comparées
          </h3>
          <p style={{ color: '#B4C0D3', fontSize: 15, lineHeight: 1.7, margin: '0 0 24px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Pour un projet qui touche plusieurs services, l'agence spécialisée réunit l'expertise, une mise en route rapide et la passation ; l'ESN sert les grands chantiers techniques, le freelance une mission courte, l'équipe interne des usages déjà installés à grande échelle.</strong>{' '}
            Le tableau compare les quatre options sur cinq critères.
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 32 }}>
            <table aria-label="Comparatif entre agence spécialisée en IA, ESN généraliste, freelance et équipe interne" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 820 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '13px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.35, width: '15%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '13px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.35, width: '25%' }}>Agence spécialisée en IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '13px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.35 }}>ESN généraliste</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '13px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.35 }}>Freelance</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '13px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.35 }}>Équipe interne</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '13px 16px', fontSize: 13, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.6 }}>{row.critere}</th>
                    <td style={{ padding: '13px 16px', fontSize: 13.5, color: '#fff', fontWeight: 500, lineHeight: 1.6, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.agence}</td>
                    <td style={{ padding: '13px 16px', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.6, verticalAlign: 'top' }}>{row.esn}</td>
                    <td style={{ padding: '13px 16px', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.6, verticalAlign: 'top' }}>{row.freelance}</td>
                    <td style={{ padding: '13px 16px', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.6, verticalAlign: 'top' }}>{row.interne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            La gouvernance profite elle aussi de la spécialisation. Le règlement européen sur l'IA en donne la mesure : l'article 4 (maîtrise de l'IA par les équipes) s'applique depuis le 2 février 2025, l'article 50 (transparence envers les utilisateurs) depuis le 2 août 2026, et les usages à haut risque listés à l'annexe III attendront décembre 2027, date fixée par le règlement (UE) 2026/1744. Suivre ce calendrier pour tous nos clients nous évite de le redécouvrir à chaque projet. Notre page{' '}
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#60A5FA', fontWeight: 600 }}>conseil en intelligence artificielle</Link>{' '}
            décrit le cadrage, et la page{' '}
            <Link to="/gouvernance-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>gouvernance de l'IA</Link>{' '}
            la manière d'encadrer les usages dans la durée.
          </p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: SECTION_PAD, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Études de cas</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Ce que l'agence a construit pour quatre clients en 2026</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Compétences Claude, assistants d'appels d'offres, agents autour d'un ERP, assistants dans Copilot : chaque outil est parti des fichiers du client et des personnes qui allaient s'en servir. Nos clients ont demandé à rester anonymes ; ce qui reste à faire s'écrit au futur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {AGENCY_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
              <article key={id} style={{ background: '#fff', border: '1px solid #E5E7EB', borderTop: `3px solid ${c}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{figure}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.45, marginTop: 4 }}>{figureLabel}</div>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Lire ce cas en détail
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            La méthode suivie et les résultats de chaque mission, missions de formation comprises, sont réunis sur notre page <Link to="/etudes-de-cas-ia" style={{ color: c, fontWeight: 600 }}>études de cas IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur notre agence IA</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question manque à la liste ? Gardez-la pour les 30 minutes de cadrage, ou envoyez-la par écrit.
              </p>
              <Link to="/contact?type=projet" style={{ color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Écrire à l'agence
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              <div>
                {FAQ.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} color={c} />
                ))}
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', marginTop: 28, lineHeight: 1.75 }}>
                Pour départager plusieurs prestataires, notre guide{' '}
                <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>choisir la meilleure agence IA</Link> propose une grille de comparaison. Le terrain se lit sur nos pages{' '}
                <Link to="/ia-secteurs" style={{ color: c, fontWeight: 600 }}>IA par secteur d'activité</Link>,{' '}
                <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>solutions IA classées par usage</Link> et{' '}
                <Link to="/methode-projet-ia" style={{ color: c, fontWeight: 600 }}>méthode d'un projet IA</Link>. Pour situer les usages, voyez{' '}
                <Link to="/ia-generative-entreprise" style={{ color: c, fontWeight: 600 }}>l'IA générative en entreprise</Link> et nos{' '}
                <Link to="/cas-usage-ia-entreprise" style={{ color: c, fontWeight: 600 }}>exemples d'usages par service</Link> ; pour le budget,{' '}
                <Link to="/prix-projet-ia" style={{ color: c, fontWeight: 600 }}>combien coûte un projet IA</Link>. Le{' '}
                <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>Diagnostic IA</Link> pose le périmètre avant un engagement plus long. Pour des équipes à former dans la région lyonnaise, la page{' '}
                <Link to="/formation-ia-lyon" style={{ color: c, fontWeight: 600 }}>formation IA à Lyon</Link> décrit les sessions en entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan pilote lui-même chaque mission de l'agence, du cadrage à la passation, depuis la création du cabinet à Lyon en 2022. Il signe cette page, actualisée le 7 octobre 2026 ; son parcours est présenté sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE (bandeau sombre, charte #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décrivez la tâche que vous voulez confier à un agent
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Racontez-nous ce que fait l'équipe aujourd'hui, les logiciels en jeu et l'endroit où le temps se perd. Nous en parlons pendant 30 minutes, en visio ou au téléphone, et vous repartez avec une première orientation, que la suite se fasse avec nous ou non.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Agence IA née à Lyon · agents sur mesure, conseil, automatisation, formation · missions en France comme à l'étranger
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe de l'agence (fondateur + intervenants, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe derrière l'agence</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un fondateur aux commandes, une équipe composée pour chaque projet
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan a créé Masteria pour travailler sur un seul sujet, l'intelligence artificielle, et il garde la main sur chaque mission. Selon le projet, il s'entoure de consultants IA (une dizaine), de développeurs (cinq environ) et de formateurs (une vingtaine), tous indépendants et retenus pour le besoin du client. L'agence ne dépend d'aucun éditeur : le choix d'un outil suit votre contexte. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples datés.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Lyon', 'ville de création, en 2022'],
              ['Indépendante', "de tout éditeur d'IA"],
              ['Activateur', 'du programme France Num'],
              ['100+', 'programmes de formation au catalogue'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
