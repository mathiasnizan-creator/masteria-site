import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Compass, Users, ListChecks, Scale, ShieldCheck, Flag, Handshake, BookOpen, FolderSearch } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleur cabinet IA » : guide de choix 2026, angle CABINET (conseil,
 * stratégie, gouvernance). Réécrite le 07/10/2026 pour le texte propre :
 * six critères propres au conseil, chacun avec son test (distincts des six
 * critères d'agence de /meilleure-agence-ia), familles d'acteurs, panorama de
 * noms sans classement, honoraires à plafond ouvert, trois missions résumées
 * avec leur ancre, sources rédigées pour la page.
 * Décision du 02/10 : ni title, ni H1, ni description ne contiennent
 * « cabinet (de) conseil IA » ; l'intro lie « cabinet conseil IA » vers
 * /conseil-intelligence-artificielle. Jamais Gartner, aucun chiffre client
 * absent de src/data/etudes-de-cas.js. Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'meilleur-cabinet-conseil-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-06-16'
const DATE_MODIFIED = '2026-10-07'
const RDV_URL = '/contact?type=projet&rdv=30'

const META_TITLE = 'Meilleur cabinet IA : comparatif et critères 2026 | Masteria'
const META_DESC = "Choisir un cabinet IA en 2026 : six critères vérifiables, qui fait quoi en France, honoraires observés et questions à poser au premier rendez-vous."
const KEYWORDS = 'meilleur cabinet ia, meilleur cabinet conseil ia, meilleur cabinet de conseil en intelligence artificielle, comparatif cabinets ia, choisir un cabinet ia, cabinet ou consultant ia, honoraires conseil ia, tjm consultant ia, classement cabinets ia'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

/* Six critères pour juger un cabinet IA (conseil, stratégie, gouvernance).
 * Chacun se termine par un test faisable avant la signature. */
const CRITERIA = [
  {
    icon: Users,
    tag: 'Terrain',
    title: "Il interroge d'abord les équipes qui font tourner l'entreprise",
    body: "Un diagnostic utile se construit avec la direction, puis en entretien avec les personnes qui saisissent les devis, traitent les réclamations ou préparent la paie. Ces entretiens font apparaître les ressaisies, les tableurs que personne n'ose supprimer et les outils d'IA déjà ouverts sur des comptes personnels. Une feuille de route écrite après deux réunions de direction décrit votre organisation telle qu'on l'a racontée au cabinet.",
    test: 'Demandez la liste des personnes qu\'il interrogera et le temps prévu avec chacune.',
  },
  {
    icon: ListChecks,
    tag: 'Arbitrage',
    title: "Il écrit noir sur blanc ce qu'il vous déconseille",
    body: "Toute direction arrive avec une liste d'idées. Le cabinet les classe selon le temps ou l'argent qu'elles rendent et selon la difficulté de les mettre en œuvre dans les trois mois, puis il écarte les autres par écrit, motif à l'appui. Un rapport qui retient chaque idée de la réunion de lancement rassure tout le monde et ne tranche rien.",
    test: "Demandez un exemple anonymisé de cas d'usage qu'il a écarté chez un client, avec la raison.",
  },
  {
    icon: Scale,
    tag: 'Indépendance',
    title: "Il n'a aucun logiciel à placer chez vous",
    body: "Un cabinet partenaire d'un éditeur, payé sur les licences ou revendeur d'une plateforme finit par recommander ce qu'il distribue. Le risque grandit en 2026, puisque Microsoft, Google, OpenAI, Anthropic et Mistral vendent tous des offres d'entreprise aux fonctions voisines. Un conseil libre compare ces outils sur vos documents et vos contraintes de données, puis assume un choix motivé.",
    test: 'Faites écrire dans la proposition s\'il touche une commission, une remise ou un statut de partenaire chez un éditeur.',
  },
  {
    icon: ShieldCheck,
    tag: 'Règles',
    title: "Il sait dater ce que l'AI Act exige de vous",
    body: "Au 7 octobre 2026, trois échéances pèsent sur les entreprises utilisatrices. L'AI Act, à son article 4, s'applique depuis février 2025 et leur demande de veiller à ce que leurs équipes sachent se servir de l'IA. L'obligation de prévenir les personnes qui dialoguent avec une IA (article 50) court depuis août 2026. Les règles des systèmes classés à haut risque, comme le tri de CV, attendront décembre 2027, report décidé par l'omnibus 2026/1744. Le cabinet traduit ces textes en charte d'usage, en registre et en consignes de relecture humaine adaptées à vos cas.",
    test: "Demandez-lui lesquels de vos usages tombent sous l'article 50, et pour quelle raison.",
  },
  {
    icon: Flag,
    tag: 'Porteurs',
    title: 'Chaque recommandation porte un nom, une date et un indicateur',
    body: "« Mettre en place une gouvernance » ne se réalise jamais. « La responsable administrative relit les réponses de l'assistant avant envoi à partir du 1er décembre, et l'on compte les corrections chaque mois » se réalise. Une bonne feuille de route se lit comme un planning : qui fait quoi, pour quand, et à quel signe on saura que c'est fait.",
    test: 'Ouvrez un livrable anonymisé qu\'il vous montre, prenez une recommandation au hasard et cherchez son porteur.',
  },
  {
    icon: Handshake,
    tag: 'Suite',
    title: 'Il sait ce qui se passe le lendemain de la restitution',
    body: "Beaucoup de feuilles de route s'arrêtent entre la présentation au comité et le premier outil en service. Le cabinet solide sait construire les assistants qu'il recommande, ou nomme dès sa proposition l'équipe qui s'en chargera, et prévoit la formation des personnes concernées. Il organise aussi son départ : vos référents doivent pouvoir avancer sans lui.",
    test: 'Demandez ce qu\'il fera la semaine qui suit la validation de la feuille de route.',
  },
]

/* Familles d'acteurs lues sur trois savoir-faire (jauge à trois niveaux) */
const LANDSCAPE = [
  { type: 'Grand cabinet de stratégie', strat: 3, tech: 1, form: 1, when: "Un programme de groupe, plusieurs pays, un conseil d'administration à convaincre." },
  { type: 'Cabinet de transformation numérique', strat: 2, tech: 2, form: 1, when: "L'IA s'insère dans une refonte plus large de l'organisation ou du système d'information." },
  { type: 'Studio data et IA', strat: 1, tech: 3, form: 1, when: 'Un modèle prédictif ou un produit IA exigeant à concevoir pour vos propres clients.' },
  { type: 'ESN ou régie technique', strat: 1, tech: 3, form: 1, when: 'Des renforts techniques sur plusieurs trimestres, encadrés par votre DSI.' },
  { type: 'Cabinet spécialisé qui conseille, construit et forme', strat: 3, tech: 3, form: 3, highlight: true, when: 'Des usages installés dans les équipes, et une organisation capable de poursuivre seule.' },
]

/* Panorama de noms par famille : exemples connus, sans note ni hiérarchie. */
const MARKET_ACTORS = [
  { cat: 'Stratégie, réseaux mondiaux', names: 'McKinsey (QuantumBlack), BCG (BCG X), Bain', best: "Programmes de transformation pour tout un groupe, dialogue avec le comité exécutif.", fit: 'Groupes internationaux.' },
  { cat: 'Big Four (audit et conseil)', names: 'Deloitte, EY, KPMG, PwC', best: 'Gouvernance, maîtrise des risques et conduite du changement sur de grands périmètres.', fit: 'ETI et grands groupes, souvent déjà clients de leur audit.' },
  { cat: 'Conseil et services numériques français', names: 'Capgemini Invent, Wavestone, Sia Partners, Onepoint', best: "Conseil opérationnel et raccordement aux systèmes d'information en place.", fit: 'Grandes entreprises et ETI françaises.' },
  { cat: 'Spécialistes data et IA', names: 'Artefact, Ekimetrics', best: 'Science des données, modèles prédictifs, cas d\'usage analytiques.', fit: 'Directions data et marketing déjà outillées.' },
  { cat: 'Intégrateurs et ESN', names: 'Sopra Steria, Accenture, Devoteam', best: "Développement et intégration à grande échelle, régie sur le système d'information.", fit: 'DSI qui pilotent de gros chantiers.' },
  { cat: 'Cabinets spécialisés IA de taille moyenne', names: "Structures resserrées, centrées sur l'IA (la famille de Masteria)", best: 'Une même équipe conseille, développe les outils et forme, au contact des métiers.', fit: 'PME, ETI et directions métier qui veulent devenir autonomes.' },
]

/* Honoraires 2026 : ordres de grandeur du marché français, plafonds ouverts. */
const BUDGETS = [
  { mission: 'Diagnostic ou audit de maturité IA', range: 'Dès 5 000 €', note: "Une entreprise sur un site, avec quelques entretiens, reste en bas de fourchette ; un groupe multi-sites atteint plusieurs dizaines de milliers d'euros." },
  { mission: 'Stratégie et feuille de route', range: 'Dès 15 000 €', note: "Le nombre de directions associées et la précision du chiffrage font l'écart. Un programme de groupe dépasse 100 000 €." },
  { mission: 'Gouvernance, AI Act et RGPD', range: 'Dès 8 000 €', note: "Charte, registre des usages, classement des cas selon l'AI Act, clauses avec les fournisseurs de modèles." },
  { mission: 'Outil IA construit après la mission', range: 'Quelques milliers à plus de 100 000 €', note: "Comptez quelques milliers d'euros pour une maquette ; la brancher sur vos logiciels porte la facture à plusieurs dizaines de milliers ; un déploiement de groupe va au-delà." },
  { mission: 'Consultant senior au temps passé', range: '800 à 1 500 € / jour et plus', note: "Ordre de grandeur pour un profil expérimenté facturé à la journée, hors frais de déplacement." },
  { mission: 'Formation des équipes (par jour)', range: '1 980 € HT', note: "Tarif Masteria par journée, qu'il s'agisse d'un groupe interne (douze stagiaires au plus) ou d'une seule personne. L'OPCO de votre branche décide de la prise en charge selon ses règles et ses fonds." },
]

const ENGAGEMENT = [
  { name: 'Forfait', desc: "Prix, livrables et calendrier figurent au contrat avant le démarrage. Le cabinet porte le risque de dépassement, et votre direction financière lit le budget d'un coup d'œil." },
  { name: 'Temps passé (régie)', desc: "Des consultants facturés à la journée, utiles quand le périmètre bouge encore. Exigez un plafond de jours et un point d'étape chaque mois." },
  { name: 'Suivi mensuel', desc: "Après le lancement de la feuille de route, quelques jours par mois pour arbitrer, mesurer et corriger. Prévoyez-le au budget dès la première proposition." },
]

/* ── Repères citables (GEO) : échéances réglementaires sourcées, vocabulaire ── */
const MARKET_STATS = [
  { value: '2 févr. 2025', label: "L'article 4 entre en application : chaque entreprise doit se soucier de la compétence de ses équipes face à l'IA. Depuis l'omnibus du 27 juillet 2026, le texte attend des entreprises des actions pour faire progresser cette compétence chez leur personnel : une obligation de moyens, sans certificat à fournir.", source: 'Règlement (UE) 2024/1689', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '2 août 2026', label: "L'article 50 et ses règles de transparence s'appliquent : une personne qui converse avec un assistant doit savoir qu'elle s'adresse à une IA, et certains contenus générés doivent être signalés comme tels.", source: 'Règlement (UE) 2024/1689', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '2 déc. 2027', label: "Les systèmes que l'annexe III range parmi les hauts risques, comme le tri de candidatures ou l'évaluation des salariés, devront respecter leurs règles à partir de cette date. Le report vient de l'omnibus adopté en juillet 2026.", source: 'Règlement (UE) 2026/1744', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra' },
]

const GLOSSARY = [
  { term: 'Cabinet IA', def: "Prestataire de conseil spécialisé en intelligence artificielle : il diagnostique les usages, classe les cas d'usage, pose les règles et écrit la feuille de route. Certains construisent ensuite les outils retenus et forment les équipes qui s'en serviront." },
  { term: 'Diagnostic de maturité', def: "Lecture de la situation de départ sur plusieurs dimensions (usages, compétences, données, règles, sécurité), pour savoir par où commencer et ce qui manque avant de lancer un chantier." },
  { term: "Portefeuille de cas d'usage", def: "Liste classée des usages envisagés, chacun avec le bénéfice espéré, sa difficulté, son porteur et son statut : lancé, en attente ou écarté." },
  { term: "Charte d'usage", def: "Document court qui dit quels outils sont autorisés, quelles données peuvent y entrer et quelles réponses une personne doit relire avant de s'en servir." },
]

/* Sources de la page (remplacent le bloc commun OfficialSources) */
const SOURCES = [
  { name: "L'AI Act (règlement 2024/1689) sur EUR-Lex", note: "les articles 4 (maîtrise de l'IA) et 50 (transparence) cités dans les critères.", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { name: 'Le règlement omnibus 2026/1744 sur EUR-Lex', note: "le texte qui décale à décembre 2027 l'entrée en application des règles sur les usages sensibles de l'annexe III.", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra' },
  { name: 'Les pages IA de la CNIL', note: "ce que l'autorité française attend quand une IA traite des données personnelles.", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "La politique européenne de l'IA, par la Commission", note: "le calendrier des textes d'application vu depuis Bruxelles.", url: 'https://digital-strategy.ec.europa.eu/fr/policies/european-approach-artificial-intelligence' },
  { name: 'Qualiopi : la fiche officielle du ministère du Travail', note: "les contrôles qu'elle impose aux organismes qui forment, sans rien dire de la qualité du conseil.", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

/* Trois missions de conseil résumées pour cette page, reliées à leur ancre de
 * /etudes-de-cas-ia (faits relus dans src/data/etudes-de-cas.js le 07/10/2026). */
const CASES = [
  {
    anchor: 'photovoltaique',
    criterion: 'Critère 5 · Porteurs',
    text: "Une équipe de trois personnes vend du matériel solaire depuis trois entrepôts, vers la France et l'étranger. Notre diagnostic a décrit quatre flux de travail, relevé douze gisements de temps et retenu trois chantiers, chacun confié à un porteur ; en septembre 2026, la direction avait à choisir l'outil commun, les chantiers à lancer et la charte à signer.",
    link: 'Le diagnostic photovoltaïque en détail',
  },
  {
    anchor: 'industrie',
    criterion: 'Critère 6 · Suite',
    text: "Dans un groupe industriel de l'emballage présent sur plusieurs continents, 24 managers pilotes ont suivi deux sessions de deux jours, dans treize ateliers construits à partir de leurs propres fichiers, puis le comité de direction a consacré une matinée aux décisions à prendre. Le parcours part en octobre 2026 vers l'Amérique du Nord (États-Unis, Mexique), en décembre vers l'Inde.",
    link: 'Le déploiement industriel en détail',
  },
  {
    anchor: 'conseil-financier',
    criterion: 'Critère 2 · Arbitrage',
    text: "Une vingtaine de consultants spécialisés dans la finance des collectivités ont d'abord fait analyser sa façon de rédiger ses mémoires techniques. L'architecture retenue par leur cabinet répartit quatre assistants entre deux pôles d'expertise, un par famille de marchés, pour ne jamais mélanger leurs logiques de réponse.",
    link: 'Quatre assistants pour les marchés publics, en détail',
  },
]

const FAQ = [
  {
    q: 'Quel est le meilleur cabinet IA en France en 2026 ?',
    a: "Personne ne décerne officiellement ce titre, et les palmarès en ligne mêlent annonces payées et autoportraits. Le meilleur cabinet pour vous passe les six tests de ce guide au niveau de votre projet : il interroge vos équipes, écrit ce qu'il écarte, n'a rien à revendre, connaît le calendrier de l'AI Act, donne un porteur à chaque recommandation et sait ce qui suit la restitution. Rencontrez-en trois de la bonne famille et comparez leurs réponses écrites.",
  },
  {
    q: "Quel est le rôle d'un cabinet de conseil en IA ?",
    a: "Il aide une direction à décider ce qu'elle fait de l'IA. Il lit les usages et les données, classe les cas d'usage selon ce qu'ils rapportent et ce qu'ils coûtent à mettre en œuvre, pose les règles (charte, registre, conformité) et rédige une feuille de route chiffrée avec un porteur par chantier. Les cabinets spécialisés poursuivent souvent par la construction des outils retenus et la formation des équipes.",
  },
  {
    q: 'Cabinet IA ou consultant indépendant : comment choisir ?',
    a: "Un consultant seul convient à une demande courte et bien bornée : un avis d'expert, un audit, un atelier de direction. Un cabinet prend l'avantage quand plusieurs directions sont concernées, que la mission s'étale sur des mois ou qu'il faut transformer la recommandation en outil, puis en formation. Le métier et les tarifs des indépendants sont détaillés sur notre page consacrée au consultant IA.",
  },
  {
    q: 'Quel budget prévoir pour une mission de conseil en IA ?',
    a: "En France, en 2026, un diagnostic court se chiffre en milliers d'euros ; pour une stratégie avec feuille de route, comptez à partir de 15 000 € ; un programme de groupe dépasse 100 000 €. Un consultant senior facturé à la journée coûte le plus souvent plus de 800 €. Masteria chiffre le conseil au forfait, après le cadrage ; former vos équipes revient à 1 980 € HT la journée.",
  },
  {
    q: 'Par quelles étapes passe une mission de conseil en IA ?',
    a: "Elle s'ouvre sur un cadrage avec la direction (périmètre, décision attendue à la fin), continue par des entretiens avec les équipes et la lecture de leurs fichiers de travail, puis par le tri des cas d'usage et l'écriture des règles. La restitution présente des choix à trancher et une feuille de route datée. Pour une PME, l'ensemble tient souvent en quelques semaines ; un groupe demande davantage.",
  },
  {
    q: "Quels livrables exiger d'un cabinet IA ?",
    a: "Au minimum : un relevé des usages et des tâches répétitives, les cas d'usage classés avec ceux qui sont écartés et leur motif, une charte et un registre des usages conformes au RGPD comme à l'AI Act, un plan daté qui confie chaque chantier à une personne nommée, avec un indicateur. Exigez aussi les supports de restitution dans un format que vos équipes peuvent modifier.",
  },
  {
    q: 'Faut-il un cabinet spécialisé en IA ou un cabinet généraliste ?',
    a: "Quand l'IA est le cœur du projet, choisissez un spécialiste : les outils bougent chaque trimestre. le 11 décembre 2026, OpenAI retire ses GPTs personnalisés, et Google remplace les Gems par des compétences depuis le 5 octobre 2026 ; un cabinet qui ne suit pas ces changements recommandera des outils en fin de vie. Un généraliste convient quand l'IA n'est qu'un volet d'une réorganisation plus large, à condition de s'adjoindre un spécialiste.",
  },
  {
    q: 'Votre OPCO peut-il payer une mission de conseil en IA ?',
    a: "Non : une mission de conseil n'est pas finançable par votre OPCO, qui paie des actions de formation assurées par un organisme certifié Qualiopi. Quand une mission mêle conseil et formation, seule la part formation entre dans son champ, selon les règles et les moyens de l'OPCO dont vous dépendez. En Suisse et en Belgique, l'OPCO n'existe pas : la proposition est établie en euros HT.",
  },
  {
    q: 'Que vaut la certification Qualiopi chez un cabinet IA ?',
    a: "Délivrée après audit par un organisme accrédité, elle atteste la qualité du processus de formation d'un prestataire et conditionne le financement par les OPCO. Elle ne mesure ni la valeur de son conseil ni son niveau technique. Masteria détient Qualiopi pour ses formations uniquement ; jugez notre conseil sur les six tests de ce guide et sur nos études de cas.",
  },
  {
    q: 'Comment vérifier qu\'un cabinet a déjà mené des missions comparables ?',
    a: "Demandez deux études de cas anonymisées proches de votre secteur ou de votre taille, avec les décisions prises, les outils livrés et le travail restant. Demandez aussi à échanger avec un client. Une liste de logos ou des citations sans contexte ne vous donne aucun moyen de vérifier.",
  },
  {
    q: 'Faut-il un cabinet à Lyon, à Paris, ou peut-on travailler à distance ?',
    a: "Les entretiens et la restitution gagnent à se tenir sur place ; le suivi comme une partie des ateliers se tiennent sans difficulté en visio. Vérifiez que la proposition chiffre les déplacements. Masteria, installé à Lyon, se déplace dans toute la France et accompagne des clients installés hors de France, de l'Europe à l'Inde en passant par les États-Unis.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, cabinet IA indépendant installé à Lyon',
  description: META_DESC,
  url: FULL_URL,
  serviceType: ['Conseil en IA', 'Stratégie IA', 'Gouvernance IA', 'Développement de solutions IA', 'Formation IA'],
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  provider: { '@id': `${SITE}/#organization` },
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Vocabulaire des propositions d'un cabinet IA",
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Meilleur cabinet IA en 2026 : six critères et leurs tests',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Choix d\'un cabinet IA', 'Conseil en IA', 'Gouvernance de l\'IA'],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: SOURCES.map(s => s.url),
}

/* ItemList : les six critères, séquence citable (GEO). */
const criteriaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Six critères pour choisir un cabinet IA en 2026',
  itemListElement: CRITERIA.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, description: p.test })),
}

function CoverMeter({ level, label }) {
  // level: 3 = métier de base, 2 = partiel, 1 = d'appoint
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'métier de base' : level === 2 ? 'partiel' : "d'appoint"}`} style={{ display: 'inline-flex', gap: 4 }}>
      {[1, 2, 3].map(i => (
        <span key={i} aria-hidden="true" style={{ width: 9, height: 9, borderRadius: '50%', background: i <= level ? c : '#D1D5DB', display: 'inline-block' }} />
      ))}
    </span>
  )
}

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
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

function SectionHeader({ icon: Icon, kicker, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
      <div style={{ ...iconBoxStyle, marginTop: 4 }}>
        <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ ...kickerStyle, marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ ...h2Style, margin: 0 }}>{title}</h2>
      </div>
    </div>
  )
}

export default function MeilleurCabinetConseilIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'Meilleur cabinet IA', slug: SLUG },
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
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
        extraJsonLd={[serviceJsonLd, definedTermSetJsonLd, articleJsonLd, criteriaJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Meilleur cabinet IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de décision · octobre 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Meilleur cabinet IA en 2026&nbsp;:
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>celui dont les décisions tiennent six mois plus tard</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Guide signé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria à Lyon · actualisé le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, la thèse de la page */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un cabinet IA vous vend une décision : quels usages lancer, dans quel ordre, avec quelles règles et quel budget. La valeur de cette décision se mesure six mois plus tard, quand les équipes s'en servent ou l'ont oubliée. <strong style={{ color: '#fff', fontWeight: 700 }}>Le meilleur cabinet IA part de votre travail quotidien, écrit ce qu'il écarte, cadre le droit applicable et reste présent jusqu'à ce que ses recommandations entrent dans le quotidien des équipes</strong>, en construisant les outils ou en formant vos équipes si la mission l'exige.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Vous cherchez un <Link to="/conseil-intelligence-artificielle" style={{ color: '#93C5FD', fontWeight: 600 }}>cabinet conseil IA</Link> pour cadrer vos usages, ou vous hésitez avec un <Link to="/consultant-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>consultant indépendant</Link> ? Ce guide propose six critères vérifiables dès le premier rendez-vous, situe les familles d'acteurs et les noms qu'on y croise, donne les honoraires observés en 2026 et répond aux questions des directions avant la signature. Les cabinets nommés servent d'exemples de leur famille et ne reçoivent aucune note.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#competences" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lire les six critères
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Réserver 30 minutes de cadrage
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Ce qui se juge', "La qualité des arbitrages : ce que le cabinet recommande, ce qu'il écarte et pourquoi, et ce que deviennent ses recommandations une fois la mission terminée."],
                ['Cabinet ou consultant seul ?', "Un consultant indépendant suffit pour un avis ou un audit court. Un cabinet devient utile quand plusieurs directions sont concernées, que la mission dure ou que la recommandation doit déboucher sur un outil et une formation."],
                ['Un palmarès officiel ?', "Personne n'en publie en France. Les classements qui circulent sont payés ou recopient ce que les cabinets disent d'eux-mêmes."],
                ['Le faux pas le plus cher', "Signer une feuille de route que personne ne porte chez vous : elle dort dans un dossier partagé et le budget est perdu."],
                ['Honoraires observés', "Quelques milliers d'euros pour un diagnostic court, des dizaines de milliers pour une stratégie d'ETI, plus de 100 000 € pour un programme de groupe."],
                ['Et Masteria ?', "Un cabinet lyonnais consacré à la seule IA : il conseille, développe les outils retenus et forme les équipes, sans rien devoir aux éditeurs de logiciels."],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré (SEO/GEO : jump-to links + cibles d'ancre pour sitelinks) ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#competences', 'Six critères'],
            ['#paysage', "Familles d'acteurs"],
            ['#acteurs', 'Qui fait quoi'],
            ['#honoraires', 'Honoraires 2026'],
            ['#faq', 'Questions'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── SIX CRITÈRES ET LEURS TESTS (le cœur) ── */}
      <section id="competences" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Six critères</div>
          <h2 style={h2Style}>Six critères pour choisir un cabinet IA, chacun avec son test</h2>
          <p style={leadStyle}>
            Un cabinet IA livre rarement du code la première semaine. Il livre une lecture de votre organisation et des choix argumentés. Ces critères portent donc sur sa manière de travailler, et chacun se vérifie avant la signature par un test simple.
          </p>
          <p style={mutedStyle}>
            Les trois premiers jugent la qualité du conseil lui-même, les trois suivants ce qu'il en restera chez vous après la mission.
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {CRITERIA.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.tag} style={{ ...cardStyle, padding: 'clamp(24px, 3vw, 34px)', display: 'grid', gridTemplateColumns: isDesktop ? '52px 1fr' : '1fr', gap: isDesktop ? 24 : 16, borderTop: `3px solid ${c}` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{`0${i + 1} · ${p.tag}`}</span>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>{p.body}</p>
                    <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                      <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                      <strong style={{ color: c }}>Le test : </strong>{p.test}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin se résume déjà à un outil précis à faire construire ? Le guide de la{' '}
            <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA</Link>{' '}
            applique une grille pensée pour le développement. Les organismes de formation se comparent dans le guide de la{' '}
            <Link to="/meilleure-formation-ia" style={{ color: c, fontWeight: 600 }}>meilleure formation IA</Link>, et les cinq familles de prestataires dans celui du{' '}
            <Link to="/prestataire-ia" style={{ color: c, fontWeight: 600 }}>prestataire IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LES FAMILLES D'ACTEURS (tableau à jauges) ── */}
      <section id="paysage" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Familles d'acteurs</div>
          <h2 style={h2Style}>Cinq familles de cabinets, et ce que chacune sait faire</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Le conseil en IA réunit cinq familles qui exercent des métiers différents : grands cabinets de stratégie, cabinets de transformation numérique, studios data, ESN, et cabinets spécialisés qui conseillent, construisent et forment.</strong>{' '}
            Avant de comparer deux noms, vérifiez qu'ils appartiennent à la famille qui correspond à votre besoin principal.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Le tableau situe chaque famille sur trois savoir-faire : conseiller la direction, construire les outils, former les équipes. Trois points désignent un métier de base, un seul point un savoir-faire d'appoint.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Cinq familles de cabinets intervenant sur l'IA, situées sur le conseil, la construction d'outils et la formation, avec le contexte où chacune convient
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Conseil</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Construction</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Formation</th>
                  <th scope="col" style={thStyle}>À retenir quand</th>
                </tr>
              </thead>
              <tbody>
                {LANDSCAPE.map((row, i) => {
                  const td = { padding: '18px', verticalAlign: 'middle', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={row.type} style={row.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: row.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 220 }}>
                        {row.type}
                        {row.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            La famille de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.strat} label="Conseil" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.tech} label="Construction" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.form} label="Formation" /></td>
                      <td style={{ ...td, fontSize: 13.5, color: '#374151', lineHeight: 1.65, minWidth: 240 }}>{row.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Pour voir comment s'écrit une feuille de route chez nous, lisez la page{' '}
            <Link to="/conseil-strategie-ia" style={{ color: c, fontWeight: 600 }}>conseil en stratégie IA</Link>{' '}
            ; les usages propres à votre métier sont rangés dans{' '}
            <Link to="/ia-secteurs" style={{ color: c, fontWeight: 600 }}>l'IA par secteur d'activité</Link>.
          </p>
        </div>
      </section>

      {/* ── NOMS DU MARCHÉ (panorama factuel, sans classement) ── */}
      <section id="acteurs" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Noms du marché</div>
          <h2 style={h2Style}>Qui fait quoi dans le conseil en IA en France</h2>
          <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Les noms ci-dessous illustrent chaque famille ; ils ne forment ni un classement ni une recommandation.</strong>{' '}
            Ils indiquent où regarder, avant de soumettre chacun aux six tests du début de ce guide.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Liste incomplète, établie d'après l'offre publique de ces cabinets en octobre 2026. Leurs périmètres évoluent vite : vérifiez sur leur site ce qu'ils proposent aujourd'hui, et demandez qui travaillera sur votre dossier.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Panorama sans classement des cabinets intervenant sur l'IA en France, par famille, avec leur point fort et leur client type
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille</th>
                  <th scope="col" style={thStyle}>Noms souvent cités</th>
                  <th scope="col" style={thStyle}>Point fort</th>
                  <th scope="col" style={thStyle}>Client type</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_ACTORS.map((a, i) => {
                  const td = { padding: '18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.65, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  const last = i === MARKET_ACTORS.length - 1
                  return (
                    <tr key={a.cat} style={last ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: last ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 180 }}>{a.cat}</th>
                      <td style={{ ...td, minWidth: 200, color: last ? c : '#374151', fontWeight: last ? 600 : 400 }}>{a.names}</td>
                      <td style={{ ...td, minWidth: 220 }}>{a.best}</td>
                      <td style={{ ...td, minWidth: 180 }}>{a.fit}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>Masteria</strong> se range dans la dernière ligne. Nous avons travaillé aussi bien pour une PME de trois salariés organisée autour de son ERP que pour un groupe industriel qui forme ses managers pays après pays : la taille du dispositif suit celle de l'entreprise.
          </p>
        </div>
      </section>

      {/* ── HONORAIRES ET CONTRATS (ancre sombre) ── */}
      <section id="honoraires" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Honoraires 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte une mission de conseil en IA en 2026 ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La première étape, un diagnostic court, se compte en milliers d'euros ; une stratégie ou un cadre de gouvernance pour une ETI se chiffre en dizaines de milliers ; un programme de groupe dépasse 100 000 €.</strong>{' '}
            Le développement des outils recommandés et la formation s'y ajoutent, selon ce que la mission retient.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ces fourchettes donnent des ordres de grandeur du marché français en 2026, larges à dessein : le nombre de directions, de sites et d'entretiens pèse plus lourd que la technologie. Masteria facture ses missions de conseil au forfait, chiffré une fois le cadrage terminé. Le guide du{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>prix d'un projet IA</Link>{' '}
            décompose chaque poste.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 36 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Ordres de grandeur 2026 des honoraires de conseil en IA en France, par type de mission</caption>
              <thead>
                <tr>
                  {['Mission', 'Ordre de grandeur', 'Ce qui fait varier le prix'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => (
                  <tr key={b.mission}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{b.mission}</th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{b.range}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 800, color: '#F8FAFC', margin: '0 0 18px' }}>Trois façons de contractualiser une mission</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16, marginBottom: 28 }}>
            {ENGAGEMENT.map(e => (
              <div key={e.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{e.name}</div>
                <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>Ce que votre OPCO peut financer :</strong> la formation, quand l'organisme qui la délivre détient la certification Qualiopi. Ni le conseil ni la construction d'outils n'entrent dans son champ. Si une proposition présente un diagnostic ou une feuille de route comme « pris en charge », faites préciser par écrit qui paierait, et sur quelle base. Pour une entreprise de Genève ou de Bruxelles, hors du système des OPCO, nous établissons le devis en euros, hors taxes.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="Trois échéances que votre cabinet doit citer sans hésiter" />
          <p style={answerStyle}>
            Elles viennent de l'AI Act et décident de ce que votre charte, votre registre et vos outils devront prévoir. Le cadre complet est repris sur notre page{' '}
            <Link to="/gouvernance-ia" style={{ color: c, fontWeight: 600 }}>gouvernance de l'IA en entreprise</Link>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Vocabulaire</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Quatre mots qui reviennent dans chaque proposition</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Les connaître permet de comparer deux devis de cabinet sans se laisser impressionner par le jargon.
              </p>
            </div>
            <div>
              <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={g.term} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTERIA : sa place parmi les cabinets ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre place sur ce marché</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Où se situe Masteria parmi ces cabinets</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Conseil · outils · formation
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Vous voulez plutôt comparer les assistants eux-mêmes, de Claude à Gemini en passant par ChatGPT ou Vibe ? Le{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>comparatif des assistants IA</Link>{' '}
                les place côte à côte.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Masteria est né à Lyon en 2022, à l'initiative de Mathias Nizan, avec une seule spécialité : l'intelligence artificielle. Le cabinet ne revend aucune licence et ne perçoit rien des éditeurs : quand nous recommandons un outil plutôt qu'un autre, c'est après l'avoir essayé sur vos documents et vos contraintes de données.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 14 }}>
                  {[
                    ['Conseil', "diagnostic par flux de travail, classement des cas d'usage, charte et registre conformes au RGPD et à l'AI Act, feuille de route avec un porteur par chantier. Une prestation au forfait, que votre OPCO ne finance pas."],
                    ['Construction', "assistants, agents et automatisations développés sur vos fichiers et reliés à vos logiciels ; le code, les prompts et la documentation vous appartiennent."],
                    ['Formation', "certifiée Qualiopi au titre des actions de formation : plus de 100 programmes, facturés 1 980 € HT la journée, en groupe interne ou pour une personne seule. Votre OPCO de branche examine la prise en charge à l'aune de ses propres règles et des fonds disponibles."],
                  ].map(([t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <BadgeCheck size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}><strong style={{ color: '#0A0A0A' }}>{t} : </strong>{d}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Pour chaque mission, Mathias Nizan compose l'équipe parmi environ dix consultants, cinq développeurs et vingt formateurs indépendants, et suit le dossier jusqu'au bout. Les Échos ont cité le cabinet, et France Num l'a retenu comme Activateur.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 20px' }}>
                  Si votre besoin relève d'un grand cabinet de stratégie ou d'une ESN, nous vous le dirons au premier rendez-vous. Pour commencer petit, le{' '}
                  <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>{' '}
                  est une intervention courte, dont la durée et le prix sont arrêtés pendant le cadrage ; l'<Link to="/audit-ia" style={{ color: c, fontWeight: 600 }}>audit IA</Link> va plus loin quand il faut tout inventorier. Nos{' '}
                  <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>missions de conseil en intelligence artificielle</Link>{' '}
                  détaillent la méthode pas à pas.
                </p>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: 0, paddingTop: 16, borderTop: '1px solid #E5E7EB', fontStyle: 'italic' }}>
                  « Ces six tests valent pour tous les cabinets, le nôtre compris. Si l'un d'eux nous met en difficulté, vous le verrez dès le premier rendez-vous. Mieux vaut l'apprendre avant la signature. »{' '}
                  <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600, fontStyle: 'normal' }}>Mathias Nizan</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TROIS MISSIONS DE CONSEIL (remplace les cartes communes) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={FolderSearch} kicker="Missions de conseil" title="Trois missions où le conseil a débouché sur des décisions" />
          <p style={{ ...mutedStyle, margin: '0 0 32px' }}>
            Les clients sont anonymisés à leur demande ; chaque mission est racontée en entier, chiffres compris, sur la page des études de cas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CASES.map(k => (
              <div key={k.anchor} style={{ ...cardStyle, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...kickerStyle, fontSize: 12, marginBottom: 12 }}>{k.criterion}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{k.text}</p>
                <Link to={`/etudes-de-cas-ia#${k.anchor}`} style={{ color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {k.link}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Onze questions de direction avant de choisir un cabinet IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Une question de votre comité manque à la liste ?</p>
              <Link to="/contact?type=projet" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Envoyez-la-nous
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier rendez-vous offert</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Faites passer les six tests à Masteria
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
              Expliquez en quelques lignes où en est votre entreprise avec l'IA et ce que votre direction doit trancher. En 30 minutes, nous vous disons si notre profil convient, ce qu'une mission couvrirait et, si une autre famille d'acteurs vous correspond mieux, laquelle.
            </p>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange en visio, offert · un créneau proposé dans les 24 heures qui suivent votre message
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui vous conseille ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui vous conseille</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un fondateur présent sur chaque mission, des indépendants choisis pour elle
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan compose l'équipe d'une mission de conseil selon les directions à rencontrer, les outils en jeu et les effectifs à former. Aucun éditeur ne rémunère le cabinet. La <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> et les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas détaillées</Link> permettent de vérifier ce que nous avançons.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 10', 'consultants IA à mobiliser'],
              ['≈ 5', 'développeurs pour construire'],
              ['≈ 20', 'formateurs pour transmettre'],
              ['Depuis 2022', 'Lyon · Europe · États-Unis · Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES (rédigées pour la page, à la place du bloc commun) ── */}
      <section aria-labelledby="sources-cabinet-ia" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-cabinet-ia" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes cités dans ce guide
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Utiles pour relire la proposition d'un cabinet ou préparer la consultation que vous allez lancer.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
