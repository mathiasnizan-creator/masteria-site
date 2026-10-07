import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, ScrollText, ListChecks, Users, Eye,
  Scale, Map, Layers, Workflow, Lock, Gauge, Check, BookOpen,
  ExternalLink, AlertTriangle, GraduationCap, ClipboardCheck, CalendarDays,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « gouvernance de l'IA » (slug /gouvernance-ia). Cible : « gouvernance ia »,
 * « gouvernance de l'intelligence artificielle », « conformité ia », « ai act entreprise »,
 * « mise en conformité ia », « politique ia entreprise », « comité ia », « monitoring ia »,
 * « outil de gouvernance des modèles », « calendrier ai act ».
 *
 * ANGLE PROPRE (07/10/2026) : l'organisation et les rôles. Qui décide d'un usage, qui en
 * répond, qui le contrôle. Les pages voisines gardent leur angle : /charte-ia-entreprise
 * (le document), /ia-et-rgpd (les données personnelles), /ia-responsable (éthique et
 * impact), /formation-ai-act (la formation au règlement).
 *
 * POSITIONNEMENT : conseil au forfait, pas finançable par l'OPCO. La formation (AI Act,
 * gouvernance IA) porte le volet finançable.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards, de FounderNote
 * ni d'OfficialSources ; statistique Gartner et « +1 500 » retirés. Calendrier AI Act
 * vérifié au 07/10/2026 : règlement (UE) 2024/1689 modifié par le règlement (UE) 2026/1744
 * (en vigueur le 27/07/2026), article 50 depuis le 02/08/2026, annexe III au 02/12/2027,
 * annexe I au 02/08/2028 ; Q&R CNIL mises à jour le 17/08/2026 ; Q&R Commission sur la
 * maîtrise de l'IA du 27/07/2026 ; contrôles CNIL 2026 annoncés le 03/04/2026.
 */

const SLUG = 'gouvernance-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "Gouvernance de l'IA & conformité AI Act | Masteria"
const META_DESC = "Gouvernance de l'IA : rôles, registre des usages, comité, supervision et calendrier AI Act vérifié au 7 octobre 2026. 30 minutes de cadrage offertes."
const KEYWORDS = "gouvernance ia, monitoring ia, outil de gouvernance des modèles, gouvernance des modèles ia, supervision des systèmes ia, gouvernance de l'intelligence artificielle, conformité ia entreprise, conformité ia, ai act entreprise, ia act, mise en conformité ia, gouvernance de l'ia, gouvernance de l'ia en entreprise, gouvernance des données pour l'ia, mise en œuvre de la gouvernance de l'ia, politique ia entreprise, comité ia, référent ia, dispositif de gouvernance ia, calendrier ai act, calendrier ia act"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

const PAGE_CITATIONS = [
  { name: "L'AI Act au Journal officiel de l'Union : le règlement (UE) 2024/1689 sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Omnibus de juillet 2026, règlement (UE) 2026/1744 : article 4 réécrit, haut risque décalé", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "La CNIL répond aux questions sur le règlement IA (page revue le 17 août 2026)", url: 'https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil' },
  { name: "Maîtrise de l'IA : la foire aux questions de la Commission (27 juillet 2026)", url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers' },
  { name: "Les contrôles de la CNIL pour 2026, recrutement en tête", url: 'https://www.cnil.fr/fr/controles-prioritaires-2026' },
]

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
  { icon: Users,       label: 'Rôles et comité IA' },
  { icon: Map,         label: 'Registre des usages' },
  { icon: Scale,       label: 'AI Act post-Omnibus' },
  { icon: Eye,         label: 'Supervision et monitoring' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Objet', value: "Chaque usage d'IA de l'organisation, de l'assistant inclus dans la suite bureautique au modèle développé en interne, avec un propriétaire, des données connues et un niveau de risque" },
  { label: 'Rôles posés', value: "Une direction qui arbitre, un comité qui instruit, un référent IA chargé des demandes, un propriétaire par système, le DPO pour les données personnelles, la DSI pour les consoles" },
  { label: 'Textes suivis', value: "AI Act (règlement (UE) 2024/1689, dans sa version issue de l'Omnibus de juillet 2026) et RGPD, calendrier relu au 7 octobre 2026" },
  { label: 'Livrables', value: "Inventaire classé par risque, registre des usages, politique et charte, circuit de validation, plan de mise en conformité avec porteurs et échéances" },
  { label: 'Nature', value: "Mission de conseil au forfait, chiffrée après 30 minutes de cadrage offertes ; elle n'est pas finançable par votre OPCO" },
  { label: 'Zones', value: "France, Europe · États-Unis · Inde, dans vos locaux ou en visioconférence" },
]

/* ───────── Les six pièces du dispositif ───────── */

const PILIERS = [
  {
    icon: ClipboardCheck,
    title: 'Inventaire et audit de conformité',
    desc: "Nous recensons ce qui tourne déjà, comptes personnels compris, et confrontons chaque usage à l'AI Act et au RGPD. Le rapport sépare trois piles : ce qui est en règle, ce qui demande une correction, ce qui attend une décision de la direction.",
  },
  {
    icon: Map,
    title: 'Registre des usages',
    desc: "Une ligne par système : finalité, service, outil et offre souscrite, données, niveau de risque, propriétaire, date de la prochaine revue. Le registre dit qui répond de quoi ; le comité s'en sert comme d'un tableau de pilotage.",
  },
  {
    icon: ScrollText,
    title: 'Politique et charte',
    desc: "La politique engage la direction sur des principes et des responsabilités. La charte les traduit en consignes que chaque salarié peut appliquer devant son écran ; notre page dédiée à la charte IA détaille ses rubriques.",
  },
  {
    icon: Users,
    title: 'Comité et référent IA',
    desc: "Le comité réunit à date fixe la direction, les métiers, la DSI et le DPO. Le référent IA reçoit les demandes, prépare une fiche par dossier et annonce aux équipes un délai de réponse, pour que personne ne contourne la règle faute d'interlocuteur.",
  },
  {
    icon: Eye,
    title: 'Supervision humaine et traces',
    desc: "Pour chaque décision sensible, une personne nommée valide avant l'envoi ou l'action. Les usages à enjeu laissent une trace consultable : qui a demandé, qui a validé, avec quelle version du modèle et à quelle date.",
  },
  {
    icon: ShieldCheck,
    title: 'Données et éditeurs',
    desc: "Le registre des usages se raccorde au registre RGPD : base légale, catégories de données, contrat signé avec l'éditeur, lieu d'hébergement, réglage d'entraînement. Notre page IA et RGPD reprend ce volet article par article.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrer le périmètre et les interlocuteurs',
    desc: "Nous fixons avec vous les entités concernées, les métiers à entendre et la personne qui portera le dispositif côté direction. Ce cadrage décide aussi du niveau d'exigence : une PME qui utilise deux assistants du marché ne se gouverne pas comme un groupe qui entraîne ses propres modèles.",
  },
  {
    num: '02',
    title: 'Inventorier et classer',
    desc: "Entretiens avec les métiers, questionnaire anonyme sur les outils que chacun a ouverts, lecture des contrats des éditeurs. Chaque usage reçoit son niveau dans la grille de l'AI Act et sa qualification RGPD ; les écarts apparaissent ligne par ligne.",
  },
  {
    num: '03',
    title: 'Ouvrir le registre et nommer les propriétaires',
    desc: "L'inventaire devient un registre vivant, où chaque système a un propriétaire et une date de revue. Ce nom inscrit en face de l'outil change les comportements : quelqu'un sait qu'il en répond, et le comité sait qui interroger.",
  },
  {
    num: '04',
    title: 'Écrire les règles et installer le comité',
    desc: "Politique, charte, circuit de validation des nouveaux usages, points de supervision humaine. Le comité tient sa première séance avec nous, sur des demandes déjà en attente, pour que le circuit soit éprouvé avant d'être annoncé aux équipes.",
  },
  {
    num: '05',
    title: 'Planifier la mise en conformité et les revues',
    desc: "Le plan liste les actions, leurs porteurs et leurs échéances, calées sur le calendrier du règlement. Nous fixons le rythme des revues du registre et, si vous le souhaitez, assistons aux premières séances du comité jusqu'à ce que vos équipes le tiennent seules.",
  },
]

/* ───────── Classification des risques AI Act (ancre sombre) ───────── */

const RISK_TABLE = [
  {
    niveau: 'Risque inacceptable',
    statut: 'Interdit depuis le 2 février 2025',
    desc: "Notation sociale, manipulation qui exploite une vulnérabilité, reconnaissance des émotions au travail ou à l'école (hors raisons médicales ou de sécurité), bases faciales constituées par moissonnage d'images. Une interdiction supplémentaire vise à partir du 2 décembre 2026 les systèmes conçus pour fabriquer des images intimes non consenties ou des contenus pédocriminels.",
  },
  {
    niveau: 'Haut risque',
    statut: 'Obligations renforcées au 2 décembre 2027 (annexe III)',
    desc: "Recrutement et gestion du personnel, accès à l'éducation, octroi de crédit, accès aux services essentiels, entre autres. Le déployeur devra confier la supervision à des personnes compétentes, garder les journaux six mois au minimum et prévenir les représentants du personnel avant toute mise en service sur le lieu de travail. Les produits réglementés de l'annexe I suivent le 2 août 2028.",
  },
  {
    niveau: 'Risque limité',
    statut: 'Transparence depuis le 2 août 2026',
    desc: "Un agent conversationnel qui dialogue avec des personnes doit se présenter comme une IA ; un hypertrucage diffusé doit être signalé ; un texte généré publié pour tenir le public informé d'affaires d'intérêt public aussi, sauf relecture humaine sous responsabilité éditoriale.",
  },
  {
    niveau: 'Risque minimal',
    statut: 'Aucune obligation propre',
    desc: "Rédiger un mail, résumer un rapport, analyser un tableur avec un assistant du marché. Le règlement n'ajoute rien de spécifique ; l'article 4, qui vise la compétence du personnel en matière d'IA, le RGPD et vos règles internes continuent de jouer.",
  },
]

/* ───────── Calendrier d'application (vérifié au 07/10/2026) ───────── */

const CALENDRIER = [
  { date: '1ᵉʳ août 2024', desc: "Le règlement (UE) 2024/1689 commence à courir. Point de départ des délais : aucune obligation ne s'applique encore ce jour-là." },
  { date: '2 février 2025', desc: "Pratiques interdites (article 5) et maîtrise de l'IA des équipes (article 4). Côté gouvernance : une liste des usages proscrits et un plan de formation documenté." },
  { date: '2 août 2025', desc: "Règles des modèles d'IA à usage général, à la charge de leurs fournisseurs. Côté gouvernance : savoir quel modèle sert chaque ligne du registre." },
  { date: '27 juillet 2026', desc: "L'Omnibus (règlement (UE) 2026/1744) entre en vigueur. L'article 4 se lit désormais comme une obligation de moyens : aucun niveau individuel exigé, aucun certificat à produire." },
  { date: '2 août 2026', desc: "L'essentiel du règlement s'applique, hors reports, et avec lui l'article 50 : agents conversationnels annoncés, hypertrucages signalés." },
  { date: '2 décembre 2026', desc: "Les générateurs de contenus commercialisés avant le 2 août 2026 doivent marquer leurs sorties dans un format lisible par machine ; une interdiction nouvelle frappe les images intimes non consenties." },
  { date: '2 décembre 2027', desc: "Annexe III, celle des usages sensibles. Côté gouvernance : supervision humaine nommée, journaux conservés, représentants du personnel informés." },
  { date: '2 août 2028', desc: "Annexe I : l'IA embarquée dans des produits déjà soumis à une réglementation européenne, comme les machines, les jouets ou les dispositifs médicaux." },
]

/* ───────── Gouvernance des données pour l'IA (4 repères) ───────── */

const DATA_GOUV = [
  {
    icon: Scale,
    title: 'Une base légale par usage',
    desc: "Chaque ligne du registre qui touche des données personnelles renvoie à sa base légale (article 6 du RGPD) et à sa finalité. Tant qu'elle manque, l'usage reste au stade de l'essai.",
  },
  {
    icon: Gauge,
    title: 'Des corpus dont on connaît la source',
    desc: "Un assistant documentaire répond avec la qualité des documents qu'on lui confie. Le registre note l'origine de chaque corpus, le jour où il a été rafraîchi et la personne qui le tient propre.",
  },
  {
    icon: Lock,
    title: 'Ce qui ne sort jamais',
    desc: "La politique liste les catégories qui restent hors des outils non validés : santé, dossiers RH, secrets d'affaires, données clients identifiantes. Les consoles d'administration appliquent ces interdits quand l'éditeur le permet.",
  },
  {
    icon: Workflow,
    title: 'Le chemin vers chaque éditeur',
    desc: "Pour chaque outil : contrat de traitement signé, hébergement, réglage d'entraînement par défaut, sous-traitants ultérieurs. Ces conditions changent souvent ; le registre date chaque vérification.",
  },
]

/* ───────── Monitoring IA et outillage ───────── */

const MONITORING = [
  {
    icon: Eye,
    title: 'Ce que le monitoring IA surveille',
    desc: "Un système validé en janvier peut dériver en juin : nouvelle version du modèle, documents périmés, usage étendu à un autre service. Le monitoring suit la justesse des réponses sur un échantillon relu, les incidents signalés, les volumes et le coût, avec des indicateurs choisis pour chaque usage. Un assistant documentaire se juge sur ses sources, un agent sur les actions qu'il déclenche, un modèle prédictif sur l'écart entre ses prévisions et la réalité.",
  },
  {
    icon: ListChecks,
    title: 'Le registre décide de ce qu\'on surveille',
    desc: "Avant d'acheter un outil de gouvernance des modèles, relisez le registre : il dit quels systèmes comptent, à quel rythme les revoir et qui reçoit l'alerte. Un tableau de bord qui n'en découle pas finit sans lecteur, et l'alerte qu'il émet n'arrive chez personne.",
  },
  {
    icon: Gauge,
    title: 'Quel outil de gouvernance des modèles choisir ?',
    desc: "Trois paliers selon le volume et le risque. Un registre partagé et des revues planifiées suffisent à une PME qui utilise quelques assistants du marché. Une plateforme, souvent celle de votre fournisseur cloud, se justifie quand les modèles se multiplient et que la traçabilité doit sortir automatiquement. Une journalisation sur mesure par API convient aux systèmes développés chez vous. Masteria ne revend aucune plateforme.",
  },
  {
    icon: ScrollText,
    title: 'Traces et validation humaine',
    desc: "Conserver les échanges des usages sensibles, noter qui a validé quoi, déclencher une alerte quand un indicateur sort de sa plage. Dès décembre 2027, le règlement demandera aux déployeurs d'usages classés à haut risque de garder ces journaux six mois au moins ; prendre l'habitude aujourd'hui coûte peu et profite à tous les autres usages.",
  },
]

/* ───────── Pourquoi maintenant (4 raisons datées) ───────── */

const WHY = [
  { icon: CalendarDays, title: 'Trois paliers sont déjà en application', desc: "Février 2025 a ouvert le bal avec les interdictions et l'article 4 ; août 2025 a visé les fournisseurs de modèles à usage général ; août 2026 a rendu la transparence obligatoire. Une organisation qui n'a encore rien écrit rattrape trois échéances d'un coup." },
  { icon: Scale, title: 'Le haut risque a désormais une date', desc: "L'Omnibus, entré en vigueur le 27 juillet 2026, renvoie au 2 décembre 2027 les obligations de l'annexe III (recrutement, évaluation des salariés, crédit, éducation) et au 2 août 2028 celles de l'annexe I. Quatorze mois séparent cette page de la première échéance : le temps d'un inventaire, d'un registre et d'un comité rodé." },
  { icon: AlertTriangle, title: 'Les comptes personnels prennent de l\'avance', desc: "Quand la règle tarde, les salariés ouvrent des comptes gratuits et y déposent des documents de travail. Chaque mois sans cadre ajoute des usages invisibles qu'il faudra ensuite retrouver, un par un." },
  { icon: ShieldCheck, title: 'La CNIL contrôle en 2026', desc: "Le RGPD régit depuis le 25 mai 2018 toute donnée personnelle confiée à une IA. Publié le 3 avril 2026, le programme de contrôles de la CNIL place le recrutement en tête : décisions automatisées, information des candidats, durées de conservation." },
]

/* ───────── Ce que Masteria accompagne (3 temps) ───────── */

const ACCOMPAGNE = [
  {
    icon: ClipboardCheck,
    tag: 'Auditer',
    title: 'Audit de conformité IA',
    desc: "Un état des lieux daté : usages recensés, niveau de risque de chacun, écarts face à l'AI Act et au RGPD, décisions à soumettre à la direction. Il prépare la suite, ou suffit si votre exposition se révèle faible.",
    points: ['Inventaire, comptes personnels compris', 'Classement par niveau de risque', 'Écarts et décisions à prendre'],
  },
  {
    icon: Layers,
    tag: 'Concevoir',
    title: 'Conception du dispositif',
    desc: "Nous dessinons le dispositif à votre échelle : rôles, registre, politique, charte, circuit de validation. Une PME repart avec deux pages de charte et un référent ; un groupe, avec un comité central et un propriétaire par filiale.",
    points: ['Rôles et circuit de décision', 'Registre prêt à remplir', 'Politique et charte rédigées ensemble'],
  },
  {
    icon: Workflow,
    tag: 'Installer',
    title: 'Mise en place et premières séances',
    desc: "Nous accompagnons la mise en œuvre du plan, les premières séances du comité et les premières revues du registre. Le but est un dispositif que vos équipes tiennent sans nous au bout de quelques mois.",
    points: ['Plan daté avec porteurs', 'Premières séances du comité', 'Passation aux équipes internes'],
  },
]

/* ───────── Études de cas citées (faits de src/data/etudes-de-cas.js) ───────── */

const CAS = [
  {
    id: 'industrie',
    titre: "Un groupe industriel confie la politique d'usage à son Data manager",
    texte: "Dans un groupe international du packaging, Copilot s'est déployé par paliers : 24 managers pilotes, cinq sessions de juillet à fin septembre 2026, l'anglais étant la langue de deux d'entre elles, avant l'ouverture des sites mexicain et américain en octobre 2026 puis indien en décembre. La politique d'usage a un porteur, le Data manager du groupe, qui tient aussi la bibliothèque de prompts des pilotes ; le comité de direction est reparti de sa matinée stratégique avec ses décisions à prendre, dont les données exclues et l'audit des accès.",
  },
  {
    id: 'distribution',
    titre: 'Un distributeur IT nomme un propriétaire par compétence',
    texte: "Chez un distributeur de 58 salariés, dix référents formés en juin 2026 font vivre onze compétences Claude. La règle tient en quatre points écrits : la direction valide, un propriétaire est désigné, une revue revient chaque trimestre, chaque version est archivée. Les autres salariés doivent suivre entre octobre et décembre 2026.",
  },
  {
    id: 'conseil-financier',
    titre: 'Un cabinet de conseil écrit qui met à jour quoi',
    texte: "Un cabinet qui conseille le secteur public sur ses montages financiers, une vingtaine de personnes à Paris et à Lyon, a reçu avec ses assistants dédiés aux marchés publics un guide qui fixe les règles d'utilisation, la confidentialité des dossiers et le responsable de chaque mise à jour. Le dispositif évolue depuis sans Masteria.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "En quoi consiste la gouvernance de l'IA, sur le terrain ?",
    a: "Elle répartit par écrit les décisions autour de l'intelligence artificielle : qui autorise un nouvel usage, qui en répond au quotidien, qui le contrôle et selon quelles règles. Un dispositif de gouvernance réunit un inventaire des usages classés par risque, un registre où chaque système a un propriétaire, une politique et sa charte, un comité épaulé par un référent IA, des points de supervision humaine et un volet données relié au RGPD. Masteria l'installe en mission de conseil, de l'audit de départ jusqu'aux premières séances du comité.",
  },
  {
    q: "Mon entreprise est-elle concernée par l'AI Act ?",
    a: "Oui, dès que vos équipes utilisent un outil d'IA dans leur travail. Le règlement (UE) 2024/1689 vise les fournisseurs de systèmes d'IA et aussi leurs déployeurs, terme qui désigne les organisations qui s'en servent dans un cadre professionnel, y compris avec un assistant acheté sur étagère. Les obligations varient selon l'usage : l'article 4, consacré à la maîtrise de l'IA, concerne tout le monde, la transparence de l'article 50 touche les agents conversationnels et les contenus diffusés, le haut risque ne vise que certaines finalités comme le recrutement ou le crédit. L'inventaire de vos usages dit lesquelles s'appliquent chez vous.",
  },
  {
    q: "Gouvernance IA et conformité IA : où passe la frontière ?",
    a: "La conformité est un résultat : chaque usage respecte ce que l'AI Act et le RGPD exigent de lui, et vous pouvez le prouver. La gouvernance est l'organisation qui produit ce résultat et le maintient quand les outils changent : des rôles, un registre, un circuit de validation, des revues. Une conformité que personne n'entretient se périme au premier nouvel outil ; une gouvernance qui ne vise aucune obligation tourne à vide. Les deux se construisent dans la même mission.",
  },
  {
    q: "Par quoi commencer une mise en conformité AI Act ?",
    a: "Par l'inventaire. Recensez les outils et les usages, y compris les comptes ouverts par les salariés, puis classez chacun selon les quatre niveaux du règlement. Viennent ensuite les obligations propres à chaque ligne (transparence, supervision humaine, documentation), les écarts, et un plan daté qui confie chaque action à un porteur. En parallèle, vérifiez la base légale des traitements de données personnelles au sens du RGPD. Masteria mène ces étapes en audit, puis installe le registre et le comité qui tiendront le résultat.",
  },
  {
    q: "Faut-il choisir entre le conseil en gouvernance et la formation AI Act ?",
    a: "Non, ils se complètent et se financent différemment. Le conseil installe le dispositif pour l'organisation : audit, registre, politique, comité, plan de conformité ; réglé au forfait, ce conseil n'entre pas dans ce que l'OPCO prend en charge. À l'inverse, la formation AI Act apprend aux personnes qui tiendront ce dispositif à lire le règlement et à classer un usage ; couverte par la certification Qualiopi de Masteria, elle se soumet à l'OPCO de votre branche, seul juge d'après ses critères et son budget. Beaucoup d'organisations enchaînent les deux.",
  },
  {
    q: "Que couvre la gouvernance des données pour l'IA ?",
    a: "Elle suit les données consommées par chaque système d'IA : leur base légale et leur finalité au sens du RGPD, leur origine et leur fraîcheur, leur sensibilité, et le chemin qu'elles prennent vers l'éditeur (contrat, hébergement, réglage d'entraînement). En pratique, chaque ligne du registre des usages renvoie à une ligne du registre des traitements. Notre page IA et RGPD détaille la méthode ; le conseil data & IA prend le relais quand la qualité ou l'architecture des données posent problème.",
  },
  {
    q: "Quelles dates de l'AI Act retenir au 7 octobre 2026 ?",
    a: "Le texte court depuis le 1ᵉʳ août 2024. Trois paliers sont passés : interdictions et article 4 en février 2025, fournisseurs de modèles à usage général en août 2025, transparence de l'article 50 en août 2026. En vigueur depuis le 27 juillet 2026, l'Omnibus (règlement (UE) 2026/1744) a fait de l'article 4 une obligation de moyens et décalé le haut risque : annexe III le 2 décembre 2027, annexe I le 2 août 2028. Entre les deux, le 2 décembre 2026 clôt le sursis accordé aux générateurs déjà commercialisés pour marquer leurs contenus, et ajoute une interdiction sur les images intimes non consenties.",
  },
  {
    q: "Le secteur public est-il soumis aux mêmes règles ?",
    a: "Oui, et parfois à davantage. Administrations, collectivités, hôpitaux et établissements publics sont des déployeurs comme les entreprises. Beaucoup de leurs usages touchent des domaines classés à haut risque (accès aux prestations, éducation, emploi public), et l'article 27 leur demandera, quand l'annexe III s'appliquera en décembre 2027, d'étudier l'effet du système sur les droits fondamentaux avant sa mise en service. La gouvernance s'adapte aux instances existantes et aux contraintes de l'achat public.",
  },
  {
    q: "Que mesure un monitoring IA ?",
    a: "Quatre familles d'indicateurs couvrent la plupart des usages. La qualité : justesse des réponses sur un échantillon relu, part des sources correctes pour un assistant documentaire, erreurs signalées. La sécurité : données sensibles repérées dans les requêtes, accès anormaux, consignes contournées. L'usage : volumes par équipe, cas d'usage en service. Le coût : dépense par requête et par cas d'usage. Un modèle prédictif ajoute la dérive, l'écart entre ses prévisions et ce qui se produit. Le registre fixe, système par système, le rythme de lecture et la personne qui reçoit l'alerte.",
  },
  {
    q: "Un outil de gouvernance des modèles est-il indispensable ?",
    a: "Rarement. La conformité repose sur des rôles, un registre, des règles de validation, des revues et une documentation ; un outil automatise ce travail quand les systèmes se comptent par dizaines ou quand la traçabilité doit sortir à la demande, ce qui concerne surtout les modèles développés en interne et les futurs systèmes à haut risque. Une PME qui utilise trois assistants du marché tient sa gouvernance avec un tableur partagé et un comité trimestriel. Nous le disons quand c'est le cas : Masteria ne vend aucun logiciel.",
  },
  {
    q: "Combien de temps faut-il pour installer la gouvernance ?",
    a: "Tout dépend du nombre d'entités, du nombre d'usages déjà en place et de votre point de départ en conformité. L'audit et le premier inventaire se mènent en général en quelques semaines. Le registre, la charte et le comité suivent, puis le plan de conformité s'étale selon les échéances qui vous concernent, dont la plus proche pour le haut risque tombe le 2 décembre 2027. Nous estimons cet effort pendant la demi-heure de cadrage, avant tout devis.",
  },
  {
    q: "Qui doit porter la gouvernance de l'IA en interne ?",
    a: "Un membre de la direction la porte, parce que les arbitrages engagent l'organisation. Autour de lui, un référent IA reçoit les demandes et anime le registre, le DPO veille sur les données personnelles, la DSI règle les consoles des outils, et chaque système a un propriétaire métier qui en répond. Dans une PME, deux personnes cumulent souvent ces rôles ; dans un groupe, chaque filiale nomme les siens. Quand le poste de responsable de l'IA n'existe pas encore, notre page Chief AI Officer décrit les options, dont le temps partagé.",
  },
]

/* ───────── Repères datés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    icon: Scale,
    stat: '27 juillet 2026',
    label: "l'Omnibus devient applicable : article 4 réécrit, obligations du haut risque décalées à la fin 2027 pour l'annexe III et à l'été 2028 pour l'annexe I",
    source: 'EUR-Lex, règlement (UE) 2026/1744',
    sourceUrl: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj',
  },
  {
    icon: ShieldCheck,
    stat: '17 août 2026',
    label: "la CNIL actualise sa foire aux questions sur le règlement IA et y reporte le calendrier fixé par l'Omnibus",
    source: 'CNIL',
    sourceUrl: 'https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil',
  },
  {
    icon: AlertTriangle,
    stat: '3 avril 2026',
    label: "annonce des contrôles CNIL de l'année, dont le recrutement : décisions automatisées, information des candidats, durées de conservation",
    source: 'CNIL, contrôles 2026',
    sourceUrl: 'https://www.cnil.fr/fr/controles-prioritaires-2026',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: "Gouvernance de l'IA",
    def: "Partage écrit des décisions qu'une organisation prend sur ses usages d'intelligence artificielle : qui autorise un usage, qui en répond, qui le contrôle, selon quelles règles et à quel rythme de revue.",
  },
  {
    term: 'AI Act',
    def: "Nom courant du règlement européen (UE) 2024/1689 relatif à l'IA, qui court depuis le 1ᵉʳ août 2024 et a été retouché par l'Omnibus de juillet 2026. Il proportionne ce qu'il exige au risque que présente chaque usage, et vise les fournisseurs comme les déployeurs.",
  },
  {
    term: 'Conformité IA',
    def: "Situation d'une organisation qui satisfait, usage par usage, à ce que l'AI Act et le RGPD lui demandent, et peut le démontrer avec son registre, ses règles et ses traces.",
  },
  {
    term: 'Supervision humaine',
    def: "Contrôle exercé sur un système d'IA par une personne compétente, formée et nommée, qui peut en écarter le résultat. L'article 26 de l'AI Act en fera une obligation pour les déployeurs d'usages classés à haut risque.",
  },
  {
    term: 'Registre des usages IA',
    def: "Tableau tenu à jour qui décrit chaque système d'IA de l'organisation : finalité, service, outil et offre, données, niveau de risque, propriétaire, date de la prochaine revue.",
  },
  {
    term: 'Propriétaire d\'un système',
    def: "Personne inscrite au registre qui répond d'un système d'IA : elle suit ses indicateurs, signale ses incidents au référent et demande sa revue quand l'usage change.",
  },
  {
    term: "Gouvernance des données pour l'IA",
    def: "Volet de la gouvernance qui suit les données consommées par chaque système : base légale, origine, sensibilité, contrat et hébergement chez l'éditeur. Il raccorde le registre des usages IA à celui des traitements.",
  },
  {
    term: 'Comité de gouvernance IA',
    def: "Instance qui instruit les demandes de nouveaux usages, arbitre les risques et relit le registre à date fixe. Elle associe en général la direction, des responsables métier, la DSI, le juridique et le DPO.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "Gouvernance de l'IA et mise en conformité AI Act, par Masteria",
  description: "Mission de conseil qui installe la gouvernance de l'intelligence artificielle : inventaire et audit de conformité AI Act et RGPD, registre des usages avec un propriétaire par système, politique et charte, comité et référent IA, supervision humaine, monitoring et gouvernance des données.",
  url: 'https://www.master-ia.fr/gouvernance-ia',
  serviceType: "Gouvernance et conformité de l'intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/gouvernance-ia',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Missions de gouvernance et de conformité IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit de conformité IA', description: "État des lieux daté des usages d'IA, classés par niveau de risque, avec les écarts constatés face à l'AI Act et au RGPD." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registre des usages IA', description: "Une ligne par système, avec son propriétaire, ses données, son niveau de risque et sa date de revue." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Politique et charte IA', description: "Engagements de la direction et consignes d'usage rédigés avec les métiers." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comité et référent IA', description: "Composition, circuit de validation des nouveaux usages, délai de réponse et premières séances accompagnées." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supervision humaine et monitoring', description: "Validation humaine des décisions sensibles, traces conservées et indicateurs suivis système par système." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Gouvernance des données pour l'IA", description: "Base légale, origine, sensibilité des données et conditions de chaque éditeur, reliées au registre RGPD." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "Gouvernance de l'IA : qui décide, qui contrôle et qui répond de vos usages",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-06-15',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ["Gouvernance de l'intelligence artificielle", 'Conformité AI Act', 'Comité IA', "Gouvernance des données pour l'IA", 'RGPD'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire de la gouvernance de l'IA",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
  })),
}

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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function GouvernanceIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Piliers / Pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Gouvernance de l'IA", slug: SLUG },
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
        datePublished="2026-06-15"
        dateModified="2026-10-07"
        extraJsonLd={[serviceJsonLd, definedTermSetJsonLd, articleJsonLd]}
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Gouvernance de l'IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil · rôles, registre et conformité de l'IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Gouvernance de l'IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>qui décide, qui contrôle et qui répond de vos usages</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui conduit les missions de gouvernance de Masteria · calendrier AI Act relu le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La gouvernance de l'IA répartit les rôles autour de chaque usage d'intelligence artificielle : une direction qui arbitre, un référent qui instruit les demandes, un propriétaire qui répond de chaque système, un registre qui garde la trace. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria l'installe avec vous, du premier inventaire au comité qui la fait vivre.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            L'AI Act a rendu le sujet concret. Les interdictions et l'article 4 sont opposables depuis février 2025, l'obligation de transparence depuis août 2026, et les usages sensibles de l'annexe III entreront dans le régime du haut risque le 2 décembre 2027. Cabinet lyonnais créé en 2022 et indépendant des éditeurs, nous taillons le dispositif à votre organisation : deux pages de règles et un référent pour une PME, un comité et des propriétaires par filiale pour un groupe.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#piliers" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les six pièces du dispositif
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 132px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES SIX PIÈCES DU DISPOSITIF (éditorial asymétrique) ── */}
      <section id="piliers" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le dispositif</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que met-on derrière la gouvernance de l'IA en entreprise ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>La gouvernance de l'IA en entreprise met un nom en face de chaque décision : autoriser un usage, le surveiller, en répondre. Elle repose sur six pièces, de l'inventaire audité au volet données relié au RGPD, en passant par le registre, la charte, le comité et la supervision humaine.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                L'ordre d'assemblage dépend de votre point de départ. Une PME de trente personnes commence souvent par la charte et le référent ; un groupe multi-sites commence par l'inventaire, parce que personne ne sait combien d'outils tournent déjà dans ses filiales.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PILIERS.map((item, i) => (
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
                Le contenu de la charte est détaillé sur notre page <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>, le volet données personnelles sur <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link>. Si vous ignorez encore par où commencer, le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> mesure votre maturité, règles d'usage comprises, avant toute mission plus longue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MAINTENANT (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le calendrier presse</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi installer la gouvernance de l'IA dès 2026 ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Trois paliers de l'AI Act sont déjà en application, le haut risque arrive le 2 décembre 2027 et la CNIL contrôle cette année les outils de recrutement. Une gouvernance posée maintenant se construit au calme ; posée à l'automne 2027, elle se bâtira sous la pression de l'échéance.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={card.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Les personnes qui tiendront le dispositif apprennent à lire le règlement dans notre <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link>. Pour relier la gouvernance à vos choix de direction et à votre feuille de route, voyez le <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule la mise en œuvre de la gouvernance de l'IA ?
          </h2>

          <p style={answerStyle}>
            <strong>La mise en œuvre de la gouvernance de l'IA avance en cinq étapes : cadrer le périmètre, inventorier et classer les usages, ouvrir le registre avec un propriétaire par système, écrire les règles et installer le comité, puis planifier la mise en conformité et les revues. Chaque étape s'achève sur une décision prise par votre direction.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            L'ordre a une raison. On ne nomme pas de propriétaire pour un outil qu'on n'a pas recensé, et un comité privé de registre débat dans le vide.
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

      {/* ── CLASSIFICATION DES RISQUES AI ACT (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Classification AI Act</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment l'AI Act classe-t-il les systèmes d'IA par risque ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>L'AI Act range chaque usage d'IA dans l'un de quatre niveaux : interdit, haut risque, transparence, risque minimal. Le niveau dépend de ce qu'on confie au système. Le même assistant reste au risque minimal quand il rédige un compte rendu et entre dans le haut risque s'il sert à trier des candidatures.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau reprend le texte de 2024 dans sa rédaction issue de l'Omnibus. Pendant l'audit, chaque ligne de votre inventaire est rapprochée de ces quatre niveaux et de vos traitements de données au sens du RGPD.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Les quatre niveaux de risque de l'AI Act, avec leur date d'application" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Niveau de risque</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Régime et date</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '56%' }}>Exemples et conséquences pour vous</th>
                </tr>
              </thead>
              <tbody>
                {RISK_TABLE.map((row, i) => (
                  <tr key={row.niveau} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.niveau}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.statut}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            Ce tableau simplifie le texte pour donner des repères. Une finalité précise peut faire passer un usage d'une ligne à l'autre ; en cas de doute, l'audit tranche avec le texte officiel et, pour les usages RH, avec votre conseil juridique.
          </p>

          {/* Calendrier d'application par paliers (GEO citable) */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#F8FAFC', margin: '52px 0 10px', letterSpacing: '-0.01em' }}>
            Le calendrier de l'AI Act, vu depuis votre dispositif
          </h3>
          <p style={{ color: '#B4C0D3', fontSize: 15, margin: '0 0 22px', lineHeight: 1.7, maxWidth: 880 }}>
            À chaque date correspond une pièce de la gouvernance à tenir prête. Ces échéances ont été relues le 7 octobre 2026 sur le texte de l'Omnibus et sur la page de questions-réponses que la CNIL a actualisée le 17 août 2026.
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflow: 'hidden' }}>
            {CALENDRIER.map((row, i) => (
              <div key={row.date} style={{ display: 'flex', gap: 18, flexWrap: 'wrap', padding: '15px 20px', background: 'rgba(255,255,255,0.03)', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                <span style={{ flex: '0 0 130px', fontFamily: 'Nunito, sans-serif', fontSize: 14.5, fontWeight: 800, color: '#60A5FA' }}>{row.date}</span>
                <span style={{ flex: 1, minWidth: 240, fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.6 }}>{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOUVERNANCE DES DONNÉES POUR L'IA ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Gouvernance des données</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Qu'est-ce que la gouvernance des données pour l'IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La gouvernance des données pour l'IA rattache chaque usage du registre aux données qu'il consomme : leur base légale, leur origine, leur sensibilité et le chemin qu'elles prennent jusqu'à l'éditeur. Elle fait la jonction entre le registre des usages IA et le registre des traitements que le RGPD impose.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7, maxWidth: 880 }}>
            Un copilote branché sur la messagerie, un agent relié au CRM, un modèle ajusté sur vos procédures : chacun pose les mêmes questions sur des données différentes. Quatre repères suffisent à la gouvernance ; la méthode RGPD complète, articles à l'appui, figure sur notre page <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {DATA_GOUV.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Quand la qualité ou l'architecture des données freinent les projets, notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link> reprend le chantier. Pour un exemple détaillé des garanties d'un assistant d'IA générative en entreprise, lisez notre analyse de la <Link to="/securite-claude-entreprise" style={aStyle}>sécurité de Claude en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── CE QUE MASTERIA ACCOMPAGNE (auditer / concevoir / installer) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Notre accompagnement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment Masteria vous accompagne sur la gouvernance IA
          </h2>

          <p style={answerStyle}>
            <strong>Masteria intervient en conseil, au forfait, sur trois temps : auditer votre situation, concevoir le dispositif, puis l'installer jusqu'aux premières séances du comité. La montée en compétences des équipes passe par des formations distinctes, certifiées Qualiopi.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Nous choisissons ensemble le point d'entrée pendant une demi-heure d'échange offerte. Le forfait vient ensuite, sur devis : quelques milliers d'euros suffisent quand l'audit porte sur un périmètre restreint ; un dispositif complet couvrant plusieurs entités se chiffre en dizaines de milliers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginBottom: 32 }}>
            {ACCOMPAGNE.map((card, i) => (
              <div key={card.title} style={{ ...cardStyle, padding: 32, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
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

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Le conseil sort du champ de l'OPCO ; seule la <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link> relève de la certification Qualiopi de Masteria (catégorie « actions de formation ») et ouvre une demande de prise en charge, que l'OPCO de votre branche instruit d'après ses critères et son budget. Pour l'audit seul, centré sur le règlement, voyez aussi notre <Link to="/audit-conformite-ai-act" style={aStyle}>audit de conformité AI Act</Link>.
          </p>
        </div>
      </section>

      {/* ── MONITORING IA & OUTILLAGE (« monitoring ia », « outil de gouvernance des modèles ») ── */}
      <section id="monitoring" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Monitoring et outillage</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Monitoring IA et outils de gouvernance des modèles : la surveillance après le cadrage
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le monitoring IA suit dans le temps ce que vos systèmes produisent ; un outil de gouvernance des modèles automatise ce suivi quand le volume l'exige.</strong> Nous dimensionnons l'un et l'autre à partir de votre registre, sans plateforme à vous vendre.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24, marginTop: 12 }}>
            {MONITORING.map(card => {
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
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Les indicateurs se choisissent au moment de concevoir le dispositif, et le comité les relit à chaque séance. Pour un système développé sur mesure, la journalisation fait partie du projet lui-même : notre <Link to="/methode-projet-ia" style={aStyle}>méthode projet IA</Link> la prévoit dès la conception.
          </p>
        </div>
      </section>

      {/* ── CONTEXTE & REPÈRES : faits datés + définitions + sources (SEO + GEO) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Repères datés</Kicker>
          <h2 style={h2Style}>
            Deux règlements encadrent la gouvernance de l'IA
          </h2>

          <p style={answerStyle}>
            <strong>L'AI Act, retouché par l'Omnibus signé le 8 juillet 2026, classe les usages d'IA selon le risque qu'ils font courir aux personnes. Le RGPD, dont l'application remonte au 25 mai 2018, régit les données personnelles qu'ils traitent. La CNIL contrôle le second et publie déjà sa lecture du premier.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Les textes fixent le minimum. Une gouvernance utile répond aussi à une question de gestion : quels usages méritent une revue mensuelle, et lesquels peuvent tourner sous une règle simple relue une fois par an.
          </p>

          {/* Repères datés et sourcés, citables par les moteurs de réponse */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 32px' }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={s.icon} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                  Source : <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.source}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Définitions clés, ancrage d'entités */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '8px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Le vocabulaire de la gouvernance
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Textes et lectures officielles, liens suivis */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Textes et lectures officielles consultés pour cette page
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {PAGE_CITATIONS.map(r => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 4 }} aria-hidden="true" /> {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SUR LE TERRAIN (cas anonymisés, remplace CaseStudyCards) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois organisations, trois façons de répartir les rôles
          </h2>
          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Nos études de cas anonymisées montrent la gouvernance là où elle se joue : dans le nom écrit à côté de chaque outil et dans la règle qui dit qui le fait évoluer.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.id} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ ...h3Style, fontSize: 16 }}>{cas.titre}</h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>{cas.texte}</p>
                <Link to={`/etudes-de-cas-ia#${cas.id}`} style={{ ...aStyle, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Lire l'étude de cas
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Après la mission</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Deux formations transmettent le dispositif à ceux qui le tiendront
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Cette page décrit une mission de conseil. Quand vos équipes doivent faire vivre seules le registre et le comité, deux formations couvertes par la certification Qualiopi de Masteria (catégorie « actions de formation ») prennent le relais, facturées 1 980 € HT par journée, en intra ou en individuel : la formation AI Act, qui apprend à lire le règlement et à classer un usage, et la formation gouvernance IA, qui construit en une journée le registre, la trame de charte et le fonctionnement du comité. Leur prise en charge relève de l'OPCO de votre branche, qui l'accorde d'après ses critères et son budget.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/formation-ai-act" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Voir la formation AI Act
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-gouvernance-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Programme de la formation gouvernance IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
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
                Gouvernance de l'IA : vos questions, nos réponses
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre organisation pose un cas particulier, une filiale à l'étranger ou un usage RH ?
              </p>
              <Link to={RDV} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Exposez-le pendant le cadrage offert
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
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les pages qui prolongent la gouvernance
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Chacune traite une pièce du dispositif sous son propre angle : le document, les données, l'éthique, la formation, les rôles.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Document', desc: "Huit rubriques, une formulation proposée pour chacune, et la méthode pour que les salariés lisent le texte jusqu'au bout." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Articles du RGPD appliqués aux assistants, analyse d'impact, garanties de cinq éditeurs relues au 7 octobre 2026." },
              { label: 'IA responsable', href: '/ia-responsable', tag: 'Éthique', desc: "Des principes aux preuves : supervision, biais, impacts sur les personnes, normes ISO/IEC 42001 et 42005." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "Le règlement expliqué en sept heures, vos usages classés, la trame d'un plan de conformité en main." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Formation', desc: "Une journée où vos équipes montent elles-mêmes leur registre, leur charte et leur comité." },
              { label: 'Audit de conformité AI Act', href: '/audit-conformite-ai-act', tag: 'Audit', desc: "Inventaire des systèmes, niveaux de risque, écarts et plan daté, quand l'audit seul suffit." },
              { label: 'Chief AI Officer', href: '/chief-ai-officer', tag: 'Rôle', desc: "Qui porte la gouvernance quand le poste n'existe pas encore, y compris en temps partagé." },
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Données', desc: "Qualité, architecture et conformité des données sur lesquelles reposent vos systèmes." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Point d'entrée", desc: "Mesurer votre maturité avant d'engager une mission, règles d'usage et sécurité comprises." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'Audit', desc: "État des lieux global : usages, données, écarts réglementaires et feuille de route chiffrée." },
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Stratégie', desc: "Choisir les cas d'usage qui méritent un dispositif avant de bâtir le dispositif lui-même." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Ce qu'un agent qui agit dans vos logiciels exige en supervision et en traces." },
              { label: "Rendre un système d'IA auditable : le guide", href: '/blog/auditabilite-systeme-ia', tag: 'Article', desc: "Journaux, versions, preuves : ce qu'il faut conserver pour qu'un contrôle se passe bien." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Des systèmes construits avec leurs garde-fous, leur journalisation et leur propriétaire désigné." },
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
                  <ArrowRight size={15} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
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
            Mathias Nizan mène lui-même les missions de gouvernance du cabinet, de l'inventaire jusqu'à la première séance du comité. Il a revu cette page le 7 octobre 2026, dates de l'Omnibus comprises ; son parcours est retracé sur <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link>.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Mettons un nom en face de chacun de vos usages d'IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous quels outils tournent chez vous et qui s'en occupe aujourd'hui. En une demi-heure, par visioconférence ou par téléphone, nous situons votre exposition à l'AI Act et au RGPD et le premier chantier à ouvrir. Cette lecture vous appartient, avec ou sans Masteria pour la suite.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Conseil au forfait · inventaire, registre, comité · AI Act et RGPD · France, Europe, États-Unis, Inde
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe de la mission ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe de la mission</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des consultants réunis pour votre dispositif, sous la conduite du fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              C'est à Lyon, en 2022, que Mathias Nizan a créé Masteria, une entreprise individuelle tournée vers la seule intelligence artificielle. Pour une mission de gouvernance, il réunit selon le besoin des consultants IA (une dizaine dans son réseau), des développeurs quand il faut instrumenter le suivi (cinq environ) et des formateurs (une vingtaine), tous indépendants. Masteria ne dépend d'aucun éditeur, si bien que l'outil de suivi se choisit d'après votre registre. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples datés.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['2022', 'création du cabinet, à Lyon'],
              ['≈ 10', 'consultants IA indépendants'],
              ['France Num', 'Masteria y est Activateur'],
              ['3 continents', 'Europe, États-Unis, Inde'],
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
