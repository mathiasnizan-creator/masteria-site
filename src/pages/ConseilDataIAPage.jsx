import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Database, ShieldCheck, Search, BarChart3, Network,
  Workflow, Cpu, Server, Lock, FileText, Target, Layers, Gauge,
  MapPin, GraduationCap, BookOpen, ExternalLink, Scale, Sun, Factory, Landmark,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { CADRAGE_HREF, CADRAGE_LABEL } from '../data/offre-entree'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « conseil data & IA » (slug /conseil-data-ia). Comble un gap du
 * cluster conseil : « conseil en données et ia » (70, KD36), « conseil data & ia »
 * (50, KD12), « cabinet de conseil en data et ia » (50, KD29), « conseil en données
 * et ia ». Angle : les DONNÉES. Un agent, un RAG ou un modèle d'analyse ne tient
 * que si les données qu'il lit sont fiables et accessibles.
 *
 * POSITIONNEMENT : conseil + mise en œuvre, depuis l'identité cabinet IA. Masteria
 * cadre le socle de données (inventaire, gouvernance, qualité, préparation), puis
 * développe les solutions IA qui s'appuient dessus (RAG, agents, analyse).
 *
 * ENRICHISSEMENT 2026-09-03 (Semrush FR, export « conseil ») : grappe « data
 * management » : « data consulting » (320, KD 11), « agence conseil data » (170,
 * KD 12), « cabinet de conseil data management » (140, KD 11), « consultant big
 * data » (140, CPC 6), « conseil data management » (110, KD 7), « conseil big
 * data » (90), « conseil en gestion des données » (70), « gestion des données de
 * référence » (210, KD 15), « quelles données constituent le patrimoine
 * informationnel d'une entreprise » (140, KD 15).
 *
 * INTÉGRITÉ : aucun client nommé, aucun chiffre de résultat ni prix inventé. Le
 * conseil n'est pas finançable par l'OPCO ; seule la formation associée l'est.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards, de
 * FounderNote, d'OfficialSources ni de chiffre Anaconda (absent des chiffres
 * autorisés) ; AI Act au calendrier de l'Omnibus (2026/1744) ; trois cas cités
 * sous l'angle des données (src/data/etudes-de-cas.js, faits révisés le 05/10).
 */

const SLUG = 'conseil-data-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil data & IA : des données prêtes pour l'IA | Masteria"
const META_DESC = "Conseil data & IA et data management : inventaire des sources, règles de gouvernance, référentiels, données prêtes pour un RAG ou des agents. Cadrage offert."
const KEYWORDS = "conseil data ia, conseil data, data consulting, conseil data management, cabinet de conseil data management, agence conseil data, conseil big data, consultant big data, conseil en gestion des données, gestion des données de référence, patrimoine informationnel, gouvernance des données, qualité des données, audit data, préparation des données ia"

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

const HERO_BADGES = [
  { icon: Database,    label: 'Inventaire et gouvernance des données' },
  { icon: Search,      label: 'RAG branché sur vos documents' },
  { icon: ShieldCheck, label: 'RGPD et AI Act pris en compte' },
  { icon: MapPin,      label: 'Lyon · Europe · États-Unis · Inde' },
]

/* ───────── Prestations (6 cartes) ───────── */

const LIVRABLES = [
  {
    icon: Gauge,
    title: 'Inventaire de vos sources',
    desc: "Nous recensons vos sources de données, leur état et la façon d'y accéder. Pour chaque cas d'usage visé, l'inventaire sépare ce qu'un modèle peut lire tel quel, ce qu'il faut remettre en forme et ce qui manque encore.",
  },
  {
    icon: ShieldCheck,
    title: 'Gouvernance et qualité',
    desc: "Un catalogue des données, un propriétaire pour chacune, des règles de qualité, une analyse RGPD et une lecture de l'AI Act. Ce cadre rend vos données traçables et sûres à confier à un système d'IA.",
  },
  {
    icon: Layers,
    title: "Préparation pour l'IA",
    desc: "Nettoyage, structuration, suppression des doublons, mise en forme des contenus et des bases. C'est l'étape qui transforme une démonstration séduisante en usage sur lequel une équipe peut compter.",
  },
  {
    icon: Database,
    title: 'RAG sur vos documents',
    desc: "On interroge vos documents et vos bases en français courant, et chaque réponse cite sa source. Le RAG (génération augmentée par la recherche) oblige le modèle à s'appuyer sur vos textes avant de répondre.",
  },
  {
    icon: BarChart3,
    title: 'Analyse et tableaux de bord assistés',
    desc: "Rapports, analyses et assistants de données qui rendent vos chiffres lisibles et interrogeables par les équipes métier. L'IA signale les écarts et les tendances ; la décision reste à vos responsables.",
  },
  {
    icon: Network,
    title: 'Flux et architecture',
    desc: "Connecteurs, chaînes de traitement et circulation des données entre vos logiciels, avec un hébergement européen quand vos exigences le demandent. La tuyauterie qui alimente vos outils d'IA sans ressaisie ni cloisonnement.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cartographier le patrimoine',
    desc: "Nous mesurons votre point de départ : sources, qualité, accès, règles existantes et conformité. Chaque constat est rattaché au cas d'usage IA que vous visez, pour savoir ce qui bloque et ce qui ne gêne personne.",
  },
  {
    num: '02',
    title: 'Classer les chantiers',
    desc: "Les chantiers de données sont rangés selon leur effet sur vos projets d'IA et leur difficulté. Vous savez ce qu'il faut traiter d'abord pour débloquer le premier cas qui rapporte.",
  },
  {
    num: '03',
    title: 'Poser les règles',
    desc: "Catalogue, propriétaires, contrôles de qualité, analyse RGPD, lecture de l'AI Act. La donnée devient traçable et défendable : un usage de l'IA appuyé sur elle se justifie devant un auditeur comme devant un client.",
  },
  {
    num: '04',
    title: 'Rendre les données lisibles par l\'IA',
    desc: "Nous préparons et structurons les données, installons les connecteurs et, si le cas l'exige, le RAG. Les fichiers passent d'un état brut à un état que vos outils d'IA exploitent sans contresens.",
  },
  {
    num: '05',
    title: 'Brancher les usages et mesurer',
    desc: "Les cas d'usage (RAG, agents, analyses) sont raccordés au socle préparé, et la justesse de leurs réponses est contrôlée. Le travail sur les données vaut par ce qu'il rend possible ensuite.",
  },
]

/* ───────── Données laissées en l'état vs cadrées pour l'IA ───────── */

const TABLE = [
  {
    critere: 'Qualité',
    sans: 'Doublons, champs vides, formats qui changent d\'un fichier à l\'autre',
    avec: 'Données nettoyées, structurées et vérifiées',
  },
  {
    critere: 'Accès',
    sans: 'Informations éparpillées entre logiciels, impossibles à relier',
    avec: "Sources raccordées, interrogeables par l'IA",
  },
  {
    critere: 'Gouvernance',
    sans: 'Personne ne sait qui possède quoi ; le RGPD reste un point d\'interrogation',
    avec: 'Catalogue, propriétaires et conformité écrits',
  },
  {
    critere: "Avec l'IA",
    sans: 'RAG approximatif, réponses sur lesquelles on ne peut pas s\'appuyer',
    avec: 'Réponses sourcées, agents et analyses dignes de confiance',
  },
]

/* ───────── Pourquoi un cabinet IA pour la data ───────── */

const WHY = [
  { icon: Target, title: "Chaque chantier sert un cas d'usage", desc: "Nous ne traitons jamais la donnée pour elle-même : chaque chantier est relié à un usage précis de l'IA. Votre budget va à ce qui débloque un agent, un RAG ou une analyse, et non à un grand projet de données sans débouché." },
  { icon: Workflow, title: 'Préparer, puis exploiter', desc: "Cabinet et atelier de développement, nous allons au-delà du constat : nous préparons les données puis construisons les outils qui les utilisent, sans transmettre le dossier à un intégrateur." },
  { icon: Cpu, title: 'Le RAG et les modèles, notre quotidien', desc: "Recherche documentaire augmentée, vectorisation, choix des modèles, garde-fous : c'est notre métier depuis 2022. Nous savons quelles données préparer, et de quelle façon, pour qu'un modèle les lise correctement." },
  { icon: Lock, title: 'Conformité dès la conception', desc: "RGPD, cloisonnement des données sensibles, hébergement dans l'Union européenne si nécessaire : la conformité oriente l'architecture du socle dès le premier jour, au lieu d'arriver en couche finale." },
]

/* ───────── Data management (grappe « conseil data management », « données de référence ») ───────── */

const DATA_MANAGEMENT = [
  {
    icon: Database,
    title: 'Données de référence : une seule fiche par client et par produit',
    desc: "Clients, produits, fournisseurs, sites, articles : ces fiches circulent entre tous vos logiciels. Quand un même client existe en trois versions (gestion commerciale, logiciel de relation client, tableur), l'IA répond faux avec aplomb. Gérer les données de référence, c'est désigner une source unique, un propriétaire et des règles de mise à jour avant de lancer l'IA.",
  },
  {
    icon: Layers,
    title: 'La gestion des données au quotidien',
    desc: "Qui possède telle donnée, qui peut la modifier, combien de temps on la conserve, comment on mesure sa qualité : la gouvernance tranche ces questions une fois pour toutes. Nous la dimensionnons à votre entreprise ; trois rôles clairs et un catalogue à jour valent mieux qu'un comité qui ne se réunit jamais.",
  },
  {
    icon: Server,
    title: 'Big data ou données dispersées ?',
    desc: "La plupart des PME et des ETI souffrent de dispersion bien plus que de volume : des informations utiles, réparties entre logiciels, boîtes mail et dossiers partagés. Un conseil big data répond par une plateforme ; nous commençons par un inventaire, et nous ne recommandons une plateforme que si un cas d'usage la justifie.",
  },
  {
    icon: FileText,
    title: 'Le patrimoine informationnel sur une carte',
    desc: "Bases des logiciels métier, contrats et procédures, mails et tickets, mesures de production, données personnelles, savoir-faire des anciens : voilà ce qui forme le patrimoine informationnel de votre société. Nous le cartographions par source, par sensibilité et par intérêt pour l'IA ; l'ordre des chantiers en découle.",
  },
]

/* ───────── Études de cas citées sous l'angle des données (src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const DATA_CASES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · PME',
    text: "Ici, tout passe par Odoo, et le temps se perd autour : des numéros de série retapés à la main faute de lecteur capable d'ouvrir les fichiers d'entrepôt, des mails transformés ligne à ligne en devis. Le plan retient un assistant qui importe les réceptions d'entrepôt dans Odoo, et une base commune (catalogue, références, transporteurs) remplace les souvenirs de chacun.",
  },
  {
    id: 'industrie',
    icon: Factory,
    sector: 'Industrie · groupe international',
    text: "Les ateliers Excel partent de fichiers internes au groupe : tarifs, activité, coûts, données RH. Le périmètre de Copilot, l'assistant de Microsoft, a été fixé avant la formation : il n'accède qu'aux documents rangés dans OneDrive et SharePoint, et les serveurs de partage lui restent fermés. Tout cela se passe en pleine bascule vers S/4HANA, et des managers réclament déjà un module sur les données SAP.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: "Conseil financier · appels d'offres",
    text: "Avant d'écrire le moindre prompt, le cabinet a rassemblé sa base de connaissance : une fiche sur son histoire et ses expertises, puis une liste ordonnée de fichiers (trames de mémoires techniques, analyses de dossiers d'appel d'offres, mémoires ayant obtenu les meilleures notes, références détaillées). Les assistants tournent sur une offre professionnelle qui n'utilise pas ces fichiers pour entraîner les modèles.",
  },
]

const FAQ = [
  {
    q: "Que recouvre le conseil data & IA ?",
    a: "Le conseil data & IA, ou conseil en données et IA, aide une entreprise à inventorier, gouverner et préparer ses données pour que ses projets d'intelligence artificielle donnent des résultats fiables. Il couvre l'inventaire des sources, les règles de qualité et de gouvernance, la mise en forme des données à destination de l'IA, puis leur exploitation (RAG, agents, analyse). Chez Masteria, la même équipe passe ensuite à la réalisation : elle prépare le socle, puis développe les outils qui s'en servent.",
  },
  {
    q: "Pourquoi la qualité des données est-elle décisive pour l'IA ?",
    a: "Un modèle répond avec ce qu'on lui donne à lire. Branché sur des fiches incomplètes, un agent se trompe ; nourri de documents mal rangés, un RAG cite le mauvais passage ; appuyée sur des chiffres incohérents, une analyse conclut de travers, et le meilleur modèle n'y change rien. Les projets d'IA qui déçoivent butent le plus souvent sur leurs données, bien avant la technologie. Remettre le socle d'aplomb en amont reste la meilleure garantie d'un résultat fiable.",
  },
  {
    q: "Faut-il un data lake ou un gros projet data avant de faire de l'IA ?",
    a: "Rarement. Un grand chantier de données lancé sans cas d'usage précis coûte cher et rapporte peu. Nous procédons dans l'autre sens : choisir un cas d'usage prioritaire, repérer les seules données dont il a besoin, les préparer. Le socle se construit ensuite par étapes, un cas après l'autre, sans refonte massive préalable.",
  },
  {
    q: "Comment gérez-vous la conformité RGPD et l'AI Act sur les données ?",
    a: "Dès le cadrage. Nous repérons les données sensibles, fixons qui peut accéder à quoi, cloisonnons ce qui doit l'être et documentons chaque usage au regard des deux règlements européens, RGPD et AI Act. Si vos exigences l'imposent, les données restent hébergées dans l'Union européenne. Le but : un socle que l'IA peut exploiter sans exposer l'entreprise à un risque réglementaire ou à une fuite.",
  },
  {
    q: "Quelles données constituent le patrimoine informationnel d'une entreprise ?",
    a: "On peut les ranger en six familles. Les bases de vos logiciels de gestion : fiches clients, commandes, factures, niveaux de stock, bulletins de paie, dans la gestion commerciale, l'ERP ou l'outil RH. Les documents : contrats, procédures, offres, rapports, plans, souvent dans des dossiers partagés. Les échanges écrits : courriels, demandes d'assistance, comptes rendus, conversations internes. Les mesures techniques : capteurs, machines, journaux, relevés de production. Les données personnelles, présentes dans plusieurs des familles précédentes et soumises au RGPD. Enfin l'expérience des collaborateurs chevronnés, jamais consignée, que l'IA ne peut exploiter qu'une fois mise par écrit. Une mission de conseil data & IA commence par cartographier ces familles, source après source, avec leur état, leur sensibilité et leur intérêt pour un cas d'usage.",
  },
  {
    q: "Gérer les données de référence : de quoi parle-t-on, et pourquoi est-ce décisif pour l'IA ?",
    a: "Les données de référence sont les fiches que plusieurs logiciels partagent : client, produit, fournisseur, liste des sites ou des articles. Les gérer revient à choisir pour chacune une source unique, un propriétaire, des règles de création et de modification, puis à contrôler leur qualité à intervalle régulier. Pour l'IA, l'enjeu est direct : un agent qui trouve trois fiches contradictoires pour un même client, ou un RAG qui lit deux tarifs pour un produit, répond faux sans la moindre hésitation. Un outil spécialisé n'est pas toujours nécessaire ; dans une PME, une fiche maîtresse gérée dans votre logiciel central et quelques règles écrites suffisent souvent.",
  },
  {
    q: "Faut-il un consultant big data pour un projet d'IA ?",
    a: "Rarement, dans une PME ou une ETI. Le big data désigne des volumes, des vitesses et des variétés de données que les outils courants ne savent plus traiter : plateformes grand public, télécoms, industrie bardée de capteurs. La plupart des entreprises ont un autre problème, celui de données de taille raisonnable mais éparpillées, lacunaires ou contradictoires. Un consultant big data propose une architecture de plateforme ; le conseil data & IA propose un inventaire, des règles et une préparation ciblée sur le cas d'usage. Si votre volume justifie une plateforme, nous vous le disons et nous rédigeons le besoin avant que vous ne consultiez un intégrateur.",
  },
  {
    q: "Quel budget prévoir pour une mission data & IA ?",
    a: "Le prix est forfaitaire, et le devis arrive quand le périmètre est connu : un inventaire ponctuel, un chantier de gouvernance et la préparation complète des données d'un cas d'usage ne demandent pas le même effort. Le cadrage (30 minutes offertes) le précède ; il porte sur vos objectifs et sur la santé de vos fichiers. Un inventaire resserré se chiffre en milliers d'euros ; un socle mis en production se compte plutôt en dizaines de milliers. La formation qui accompagne la mission peut être financée ; le conseil, prestation de service, n'est pas finançable par votre OPCO.",
  },
  {
    q: "Intervenez-vous à Lyon et à distance ?",
    a: "Oui, des deux façons. Le cabinet a son siège à Lyon et mène des missions sur tout le territoire et hors de France, jusqu'aux États-Unis et en Inde. L'essentiel du travail sur les données se fait à distance, avec des accès que vous ouvrez et refermez ; le cadrage, les ateliers de gouvernance et la passation aux équipes peuvent avoir lieu dans vos locaux si vous le souhaitez.",
  },
  {
    q: "Qu'est-ce que le RAG et pourquoi a-t-il besoin de données préparées ?",
    a: "Le RAG (retrieval-augmented generation, ou génération augmentée par la recherche) relie un modèle de langage à vos documents et à vos bases : avant de répondre, le modèle recherche les passages pertinents dans vos données, puis rédige une réponse qui les cite. Sa justesse dépend donc de ce qu'il trouve. Documents mal structurés, doublons ou versions périmées produisent des réponses bancales. La préparation en amont conditionne un RAG sur lequel vos équipes peuvent compter.",
  },
  {
    q: "Combien de temps prend la préparation des données pour un projet IA ?",
    a: "Tout dépend de l'état de départ et du périmètre du cas d'usage. Un socle déjà propre et bien tenu devient exploitable en quelques semaines ; des données éparpillées, hétérogènes ou sans documentation demandent davantage. La préparation reste souvent l'étape la plus longue d'un projet d'IA. Notre approche limite ce poste en ne traitant que les données dont le premier usage a besoin ; la durée se précise au cadrage.",
  },
  {
    q: "Faut-il anonymiser les données avant de les utiliser avec l'IA ?",
    a: "Cela dépend de leur sensibilité et du cas d'usage. Les données personnelles relèvent du RGPD : les confier à un système d'IA suppose une base légale, une minimisation et, selon le cas, une anonymisation ou une pseudonymisation. Nous repérons ces données dès le cadrage, fixons les règles d'accès et de cloisonnement et retenons un hébergement européen quand la situation l'exige.",
  },
  {
    q: "Conseil data & IA ou ESN data : quelle différence ?",
    a: "Une ESN data met à disposition des compétences techniques (ingénieurs de données, data scientists) pour bâtir entrepôts, chaînes de traitement ou tableaux de bord, souvent sans partir de l'usage final. Un cabinet de conseil data & IA part du cas d'usage visé et ne prépare que les données qu'il réclame, ce qui évite les grands chantiers sans débouché. Masteria réunit les deux logiques : nous cadrons le socle en fonction de l'IA, puis nous développons nous-mêmes les outils qui l'exploitent.",
  },
]

/* ───────── Repères datés et sourcés (citables) ───────── */
/* Calendrier AI Act : brief du 07/10/2026 (Omnibus, règlement (UE) 2026/1744).
   Article 10 de l'AI Act : données et gouvernance des données des systèmes à haut risque. */

const MARKET_STATS = [
  {
    icon: ShieldCheck,
    stat: '25 mai 2018',
    label: "date d'application du RGPD, qui encadre aussi les données personnelles lues ou produites par un assistant ou un agent",
    source: 'CNIL',
  },
  {
    icon: Scale,
    stat: '2 août 2026',
    label: "les obligations de transparence (article 50) deviennent applicables : un système qui converse avec le public doit se présenter comme une machine",
    source: 'Règlement (UE) 2024/1689',
  },
  {
    icon: Layers,
    stat: 'Décembre 2027',
    label: "échéance repoussée pour les usages de la liste « haut risque » (annexe III) ; ils devront alors respecter, entre autres, l'article 10 sur la qualité des données",
    source: 'Règlement (UE) 2026/1744',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: 'RAG (retrieval-augmented generation)',
    def: "Méthode qui relie un modèle de langage à vos documents et à vos bases : il recherche d'abord les passages utiles dans vos fichiers, puis rédige une réponse qui les cite.",
  },
  {
    term: 'Gouvernance des données',
    def: "Les règles qui rendent les données traçables et sûres : catalogue, propriétaires, contrôles de qualité, respect des textes européens (RGPD, AI Act).",
  },
  {
    term: 'Préparation des données',
    def: "Nettoyage, structuration, suppression des doublons et mise en forme des contenus pour qu'un modèle puisse les lire sans contresens.",
  },
  {
    term: 'Qualité des données',
    def: "Mesure de la complétude, de la cohérence, de la fraîcheur et de l'homogénéité des informations. Elle borne la qualité de toute réponse de l'IA.",
  },
  {
    term: 'Vectorisation (embeddings)',
    def: "Conversion de textes en suites de nombres qui permettent à l'IA de retrouver un passage d'après son sens, même sans les mots exacts. Brique technique du RAG.",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "L'AI Act (règlement n° 2024/1689) dans sa version officielle, sur EUR-Lex", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Le règlement 2026/1744 et son nouveau calendrier du haut risque", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { label: "Les pages de la CNIL consacrées à l'IA et aux données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Conseil data & IA, Masteria',
  description: "Conseil data & IA pour les entreprises : inventaire du patrimoine de données, gouvernance et qualité, préparation des données pour l'IA, RAG, analyse assistée et architecture des flux. Du cadrage jusqu'aux outils d'IA en service.",
  url: 'https://www.master-ia.fr/conseil-data-ia',
  serviceType: 'Conseil en données et intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de conseil data & IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventaire des sources de données', description: "Recensement des sources, de leur état et de leur accès, rattaché aux cas d'usage IA." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gouvernance et qualité des données', description: "Catalogue, propriétaires, contrôles de qualité, conformité RGPD et AI Act." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Préparation des données pour l'IA", description: "Nettoyage, structuration et mise en forme pour que les modèles lisent les données sans contresens." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG sur vos documents', description: "Réponses sourcées, appuyées sur vos documents et vos bases." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analyse et tableaux de bord assistés par IA', description: "Rapports et analyses interrogeables par les équipes métier." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conseil en data management et données de référence', description: "Gestion des données de référence, gouvernance dimensionnée, cartographie du patrimoine informationnel." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-data-ia#article',
  headline: "Conseil data & IA : des données prêtes pour l'intelligence artificielle",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-14',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-data-ia#webpage' },
  about: ['Conseil data & IA', 'Data management', 'Gouvernance des données', 'Gestion des données de référence', 'Qualité des données', 'Patrimoine informationnel', 'RAG (retrieval-augmented generation)'],
}

/* ───────── Composants ───────── */

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

export default function ConseilDataIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Prestations / Pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Conseil data & IA', slug: SLUG },
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
        datePublished="2026-06-14"
        dateModified="2026-10-07"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conseil data & IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil data & intelligence artificielle
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Conseil data & IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des données prêtes pour l'intelligence artificielle</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Rédaction : <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui cadre nos missions sur les données · dernière révision le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le conseil data & IA, ou conseil en données et IA, aide une entreprise à inventorier, gouverner et préparer ses données pour que ses projets d'intelligence artificielle tiennent dans la durée. Sans données fiables et accessibles, un agent, un RAG ou un modèle d'analyse ne dépasse pas le stade de la démonstration. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria remet votre socle de données en ordre, puis développe les outils d'IA qui s'en servent.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Un outil d'IA ne fait jamais mieux que les fichiers qu'on lui confie, et c'est presque toujours là que les projets calent. Depuis 2022, année où Mathias Nizan a ouvert le cabinet à Lyon, nous rattachons chaque chantier de données à un cas d'usage précis : préparer ce qui sert, écrire les règles, puis construire les outils qui exploitent le tout.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les six prestations
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
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

      {/* ── PRESTATIONS (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce que nous faisons</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Six prestations composent une mission de conseil data & IA
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une mission de conseil data & IA réunit l'inventaire de vos sources, la gouvernance et la qualité, la préparation des fichiers pour les modèles, le RAG, l'analyse assistée et l'architecture des flux. L'objectif ne varie pas : des données fiables, accessibles, et lisibles par vos outils d'intelligence artificielle.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Ces six prestations reviennent dans la plupart de nos missions et se combinent selon votre situation : certains clients partent de l'inventaire, d'autres veulent d'abord des règles, d'autres encore ont choisi un cas d'usage que leurs données empêchent d'avancer.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {LIVRABLES.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Le socle prêt, trois réalisations prennent le relais : l'<Link to="/assistant-documentaire-ia" style={aStyle}>assistant documentaire IA</Link> et l'<Link to="/integration-llm-rag" style={aStyle}>intégration d'un LLM avec RAG</Link> rendent vos documents interrogeables, et notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> fabrique les outils qui s'appuient dessus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail, rail étroit) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Cinq étapes</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule une mission data & IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Cinq étapes se suivent : cartographier le patrimoine de données, classer les chantiers, poser les règles de gouvernance et de qualité, rendre les données lisibles par l'IA, puis brancher les usages et contrôler leurs réponses. Chaque étape répond à un cas d'usage nommé.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le point de départ est toujours un usage de l'IA, jamais la donnée en soi : c'est ce qui écarte les grands chantiers sans lendemain et concentre la dépense là où elle débloque un résultat.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONNÉES BRUTES vs PRÊTES POUR L'IA (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les données d'abord</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Données laissées en l'état ou cadrées pour l'IA : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La réussite d'un projet d'IA se joue d'abord sur ses données. Éparpillées, lacunaires ou sans règles, elles donnent des résultats peu fiables, quel que soit le modèle choisi. Nettoyées, raccordées et gouvernées, elles permettent à un RAG, à un agent ou à une analyse de livrer ce qu'on attend d'eux.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau compare, critère par critère, des données laissées telles quelles et un socle préparé pour l'IA.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre données laissées en l'état et données cadrées pour l'IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Données laissées en l'état</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Données cadrées pour l'IA</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.sans}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UN CABINET IA POUR LA DATA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi confier vos données à un cabinet IA plutôt qu'à une ESN data ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Parce que nous rattachons chaque chantier de données à un usage précis de l'IA, et que nous allons jusqu'à l'outil : nous préparons les données, puis nous développons ce qui les exploite. L'IA est notre unique métier depuis 2022 ; nous savons quelles données préparer, et de quelle manière, pour qu'un modèle les lise correctement.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Les données forment un volet d'une démarche plus large : la vue d'ensemble se trouve sur notre page <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link>, et le <Link to="/diagnostic-ia" style={aStyle}>Diagnostic IA</Link> situe votre point de départ en peu de temps. Les règles qui encadrent vos données rejoignent celles qui encadrent vos systèmes d'IA : nos repères sur la <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA et l'AI Act</Link> complètent cette page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA MANAGEMENT (données de référence, gouvernance, big data, patrimoine informationnel) ── */}
      <section id="data-management" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Data management</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Conseil en data management : remettre d'aplomb les données de référence avant l'IA
          </h2>

          <p style={answerStyle}>
            <strong>Le data management regroupe les décisions qui rendent vos données fiables, accessibles et gouvernées : données de référence, propriétaires, qualité, durée de conservation.</strong> Tout projet d'IA suppose ce socle en place, et il l'est rarement. Notre conseil en data management le construit à votre taille, toujours rattaché à un cas d'usage IA précis, sans programme de données déconnecté du terrain.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24, marginTop: 12 }}>
            {DATA_MANAGEMENT.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ ...cardStyle, background: '#F9FAFB', padding: 'clamp(24px, 3.5vw, 36px)', marginTop: 40, maxWidth: 880 }}>
            <h3 style={{ ...h3Style, marginBottom: 10 }}>Data consulting, agence conseil data, cabinet de data management : trois noms pour une même question</h3>
            <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: '0 0 12px' }}>
              Les étiquettes changent, la question du client reste la même : mes données sont-elles prêtes pour ce que je veux en faire&nbsp;? Un cabinet de data consulting vend du diagnostic et des règles de gouvernance. Une agence conseil data y ajoute souvent la réalisation technique. Un cabinet de data management se consacre aux référentiels et à leur qualité dans le temps.
            </p>
            <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: 0 }}>
              Masteria couvre les trois, avec un point de départ différent : le cas d'usage IA, et lui seul, désigne les données à traiter. Pour apprendre à vos équipes à lire et vérifier ce que l'IA tire de ces données, le volet données de notre <Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> et la <Link to="/formation-data-ia" style={aStyle}>formation data et IA</Link> prennent le relais.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#fff', paddingTop: 0 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Après la mission</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Vos équipes peuvent apprendre à interroger leurs données avec l'IA
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                En complément de la mission, nous formons vos équipes, techniques comme métier, à questionner leurs données avec l'IA, à vérifier un chiffre produit par un assistant et à faire vivre les règles de gouvernance. Comptez 1 980 € HT par journée, en groupe interne ou pour une personne seule. Qualiopi atteste la qualité des actions de formation de Masteria : en France, votre OPCO peut donc financer ce volet selon ses règles et ses fonds. L'inventaire, la gouvernance et la préparation des données relèvent de la prestation de service et restent à votre charge.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir le catalogue des formations IA
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEXTE & REPÈRES : éditorial + dates sourcées + définitions (SEO + GEO) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Repères datés</Kicker>
          <h2 style={h2Style}>
            Pourquoi la donnée décide du sort des projets d'IA
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les projets d'IA qui échouent butent presque toujours sur leurs données avant de buter sur la technique. Un agent qui lit des fiches incomplètes, un RAG nourri de documents en désordre, une analyse fondée sur des chiffres incohérents donnent des résultats douteux, quel que soit le modèle.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Nous traitons donc la donnée comme un préalable. Préparer le socle, le gouverner et le mettre en règle avec le RGPD comme avec l'AI Act constitue le chemin le moins risqué pour fiabiliser un projet d'IA, puis l'étendre à toute l'entreprise. Trois dates encadrent ce travail au 7 octobre 2026.
          </p>

          {/* Repères datés sourcés, citables par les moteurs de réponse */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 32px' }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={s.icon} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>Source : {s.source}</p>
              </div>
            ))}
          </div>

          {/* Définitions clés, ancrage d'entités */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '8px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Le vocabulaire d'une mission sur les données
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence, liens d'autorité suivis */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Les textes qui font foi
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (angle données, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois missions où les données ont dicté l'ordre des travaux
          </h2>
          <p style={{ color: '#374151', fontSize: 15.5, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Un distributeur dont les stocks vivent dans Odoo et dans des fichiers d'entrepôt, un industriel dont les managers travaillent sur des extractions dans Excel, un cabinet qui devait d'abord rassembler ses meilleurs mémoires : à chaque fois, le travail a commencé par les fichiers. Les trois clients restent anonymes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {DATA_CASES.map(({ id, icon: Icon, sector, text }) => (
              <article key={id} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Le récit complet de la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Conseil data & IA : les réponses aux questions courantes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vos données soulèvent une question absente de cette liste&nbsp;? Envoyez-la, en précisant l'usage de l'IA envisagé.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Poser une question sur vos données
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>À lire ensuite</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Des données préparées aux outils qui les exploitent
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Solutions, formations et guides en lien direct avec vos données.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Intégration LLM / RAG', href: '/integration-llm-rag', tag: 'RAG', desc: "Relier un modèle à vos bases pour obtenir des réponses qui citent leurs sources." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Usages', desc: "Assistants et contenus générés qui s'appuient sur vos propres informations une fois celles-ci fiabilisées." },
              { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Solution', desc: "Questionner votre fonds documentaire en langage courant, dès que le socle est prêt." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Formation', desc: "Le module données de l'acculturation : ce qu'on peut confier à l'IA, comment contrôler un chiffre qu'elle avance." },
              { label: 'Formation gouvernance des données', href: '/formation-gouvernance-donnees', tag: 'Formation', desc: "Deux jours pour dresser la carte de vos informations, nommer les responsables et tenir les référentiels." },
              { label: 'Formation data et IA', href: '/formation-data-ia', tag: 'Formation', desc: "Explorer ses tableaux et ses bases avec l'IA, sans écrire une ligne de code." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Guide', desc: "Les règles de protection des données appliquées à l'IA, l'analyse d'impact et les garanties à exiger de chaque outil." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "La vue d'ensemble de nos missions, dont celle-ci n'est qu'un volet." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "La conception des outils d'IA qui puisent dans vos données préparées." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Des agents qui lisent vos bases et agissent dans vos logiciels métier." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Un premier passage en revue de vos pratiques, données comprises." },
              { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Ce que les données et l'IA changent, secteur d'activité par secteur d'activité." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Visibilité', desc: "Pour que vos contenus, une fois structurés, soient repris par les moteurs de recherche et les assistants." },
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
                    Lire la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan cadre lui-même les missions sur les données et valide l'inventaire avant tout développement. Cette page a été revue par ses soins le 7 octobre 2026 ; <Link to="/mathias-nizan" style={aStyle}>son profil</Link> retrace son parcours.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Un premier échange</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de vos données et de l'usage que vous en attendez
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez le cas d'usage visé et l'état de vos fichiers. Le cadrage (30 minutes offertes) nous en donne une première lecture ; une proposition chiffrée suit. Un chantier de données n'a de valeur qu'à travers les usages d'IA qu'il ouvre.
            </p>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Inventaire, règles, RAG, outils · cabinet né à Lyon, présent bien au-delà
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe des missions data ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Les personnes derrière la mission</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des consultants pour le cadrage, des développeurs pour le socle
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est née à Lyon en 2022 de la volonté de Mathias Nizan de travailler uniquement sur l'intelligence artificielle. Sur une mission de données, il mène le cadrage et s'appuie, selon l'ampleur du chantier, sur une partie des quelque dix consultants et cinq développeurs indépendants qui composent le réseau ; une vingtaine de formateurs prennent le relais pour les équipes. Le cabinet ne perçoit rien des éditeurs, et l'outil retenu découle de vos données. Exemples à l'appui dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> ; articles réunis dans la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>rubrique presse</Link>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs pour les connecteurs'],
              ['≈ 10', 'consultants pour les ateliers'],
              ['UE', "hébergement possible des données"],
              ['RAG', 'expertise maison depuis 2022'],
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
