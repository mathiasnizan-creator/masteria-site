import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Scale, Cpu, Workflow, Database, Server, Users, ShieldCheck,
  FileText, ListChecks, Map as MapIcon, XCircle, Presentation,
  Gauge, Calendar, MapPin, Check, Landmark, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import CaseStudyCards from '../components/CaseStudyCards'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page de conversion high-ticket — mission de conseil « Audit IA » (slug /audit-ia).
 * Cible l'intention TRANSACTIONNELLE de la requête « audit ia » (480/mois, KD 16),
 * dont la SERP est tenue par des pages de service (Mister IA, PredexIA, Vaultinum).
 * L'intention informationnelle reste à l'article /blog/audit-ia-entreprise-methode-prix
 * (guide : méthode, normes, prix vérifiés), qui renvoie ici pour la mission.
 * Position dans l'offre : entre le /diagnostic-ia (1 journée) et le programme de
 * transformation — c'est la colonne « Audit IA complet » du tableau de /diagnostic-ia.
 *
 * INTÉGRITÉ (alignée sur l'article, ne pas dévier) : trois types d'audit distincts ;
 * le règlement européen n'impose PAS d'audit externe à la majorité des systèmes à
 * haut risque (auto-évaluation documentée, annexe VI) ; AUCUNE conformité AI Act
 * n'est certifiable à ce jour (pas de norme harmonisée citée au JOUE à l'été 2026).
 * Pas de prix inventé, pas de fourchette de marché non sourcée. Le conseil n'est pas
 * finançable par votre OPCO (réservé à la formation) — toujours formulé ainsi.
 * CONSIGNE Mathias 2026-08-10 : ne JAMAIS nommer Bpifrance / Diag Data IA (ni
 * aucun audit subventionné concurrent) sur les pages du site — ça envoie les
 * prospects faire leur audit ailleurs. Les dispositifs publics se présentent en
 * termes génériques (« selon votre profil et votre région ») et se détaillent au
 * cadrage. En DEVIS, les mobiliser reste un levier (mémoire financement conseil).
 *
 * ENRICHISSEMENT 2026-09-03 (Semrush FR) : « audit intelligence artificielle »
 * (110, KD 14, CPC 4,05), « audit ia entreprise » (70, KD 4), « audit ia pour
 * entreprises » (70, KD 9). Réponse : section « Par taille d'entreprise » (PME,
 * ETI, groupe multi-entités) + 2 FAQ, sans prix ni durée chiffrée nouvelle.
 *
 * Design premium cabinet identique à /diagnostic-ia : kickers, icônes lucide,
 * cartes radius 16, réponses directes citables en gras, accent #2563EB, une ancre
 * sombre pivot, CTA final sombre. Pas d'OPCO/Qualiopi en bandeau (offre conseil).
 */

const SLUG = 'audit-ia'
/* Entité écrite partout de la même façon (GEO : ancrage d'entité cohérent). */
const ENTITY = "Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit IA d'entreprise : maturité, conformité, plan d'action | Masteria"
const META_DESC = "Audit IA d'entreprise par un cabinet spécialisé en intelligence artificielle : maturité, processus, conformité RGPD et AI Act, feuille de route chiffrée. Cadrage gratuit."
const KEYWORDS = "audit ia, audit ia entreprise, audit ia pour entreprises, audit ia pme, audit ia eti, audit intelligence artificielle, cabinet d'audit ia, audit de maturité ia, audit des processus ia, audit de conformité ia"

/* ───────── Styles partagés (calque /diagnostic-ia) ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
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
  { icon: Calendar, label: 'De quelques jours à quelques semaines' },
  { icon: FileText, label: 'Feuille de route chiffrée' },
  { icon: ShieldCheck, label: 'Livrable exploitable sans nous' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "État des lieux complet : maturité, processus, données, outils, organisation, conformité" },
  { label: 'Durée', value: "De quelques jours à quelques semaines selon le périmètre ; cadrage préalable gratuit" },
  { label: 'Livrable', value: "Rapport de maturité, cas d'usage priorisés, feuille de route chiffrée, actions écartées avec leur motif" },
  { label: 'Référentiels', value: "ISO/IEC 42001 et 23894, cadre de gestion des risques du NIST, RGPD, règlement européen sur l'IA" },
  { label: 'Prix', value: "Forfait fixé après un cadrage gratuit qui délimite le périmètre ; jamais de pack vendu à l'aveugle" },
  { label: 'Et après', value: "Mise en œuvre par nos équipes ou par les vôtres : le livrable se suffit à lui-même" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Les trois types d'audit (cartes) ───────── */

const TYPES_AUDIT = [
  {
    id: 'audit-maturite',
    icon: Search,
    title: "Audit de maturité IA et d'opportunité",
    question: "Où en est-on, que peut-on automatiser, dans quel ordre ?",
    desc: "Audit de vos processus et de leur potentiel d'automatisation, inventaire des usages existants, portefeuille de cas d'usage priorisé par impact et par effort, feuille de route chiffrée. C'est la demande la plus fréquente, et le cœur de la mission Masteria.",
  },
  {
    id: 'audit-conformite',
    icon: Scale,
    title: 'Audit de conformité IA : RGPD et AI Act',
    question: "Sommes-nous en règle au regard du RGPD et du règlement IA ?",
    desc: "Inventaire des systèmes en service, qualification par niveau de risque, écarts et plan de mise en conformité. En 2026, il commence par le RGPD : c'est de là que viennent les contrôles de la CNIL, l'essentiel du règlement IA n'étant pas encore applicable.",
  },
  {
    id: 'audit-algorithmique',
    icon: Cpu,
    title: 'Audit algorithmique',
    question: "Ce modèle fonctionne-t-il correctement et sans biais ?",
    desc: "Évaluation technique d'un modèle précis : performance, biais, explicabilité, documentation. Une mission d'expertise à part, sur un système désigné, que nous cadrons séparément quand le besoin est là.",
  },
]

/* ───────── Diagnostic vs audit vs POC (tableau citable — GEO, colonne audit en avant) ───────── */

const COMPARATIF = [
  {
    critere: 'Objectif',
    test: "Situer votre niveau parmi quatre profils de maturité",
    diagnostic: "Cadrer les usages et prioriser les cas d'usage IA",
    audit: "Évaluer en profondeur la maturité, les données, la conformité et l'existant",
  },
  {
    critere: 'Durée',
    test: "Trois minutes, en ligne",
    diagnostic: "Une journée (préparation et restitution incluses)",
    audit: "De quelques jours à quelques semaines",
  },
  {
    critere: 'Qui le conduit',
    test: "Vous, seul, en huit questions",
    diagnostic: "Un consultant Masteria, avec vos équipes",
    audit: "Un auditeur Masteria : entretiens métier, DSI, direction",
  },
  {
    critere: 'Livrable',
    test: "Un score sur 24, un profil et vos priorités",
    diagnostic: "Feuille de route priorisée, estimations, premières actions",
    audit: "Rapport de maturité par dimension, feuille de route chiffrée, plan de conformité",
  },
  {
    critere: 'Prix',
    test: "Gratuit",
    diagnostic: "Forfait d'une journée",
    audit: "Forfait fixé après un cadrage gratuit",
  },
  {
    critere: 'Quand le choisir',
    test: "Avant tout échange, pour savoir où vous en êtes",
    diagnostic: "Vous voulez savoir par où commencer",
    audit: "Vous voulez une vision exhaustive et opposable avant d'industrialiser",
  },
]

/* ───────── Repères datés (faits sourcés, citables — GEO) ───────── */

const REPERES = [
  {
    icon: Scale,
    stat: '2 déc. 2027',
    label: "date d'application des obligations sur les systèmes d'IA à haut risque de l'annexe III (emploi, crédit, services essentiels), reportée depuis le 2 août 2026 par le règlement (UE) 2026/1744 du 8 juillet 2026",
    source: 'EUR-Lex, règlement (UE) 2024/1689 modifié',
  },
  {
    icon: Landmark,
    stat: '2 févr. 2025',
    label: "date depuis laquelle les pratiques interdites (article 5) et la littératie IA (article 4) s'appliquent à toute organisation qui utilise un système d'IA",
    source: 'EUR-Lex, règlement (UE) 2024/1689',
  },
  {
    icon: FileText,
    stat: '18 déc. 2023',
    label: "publication d'ISO/IEC 42001, seule norme certifiable sur le système de management de l'IA ; aucune norme harmonisée n'a été citée au Journal officiel de l'UE au titre du règlement IA à l'été 2026",
    source: 'ISO',
  },
  {
    icon: Gauge,
    stat: '≈ 3 %',
    label: "des heures de travail économisées par les utilisateurs d'assistants IA, mesuré au Danemark sur 25 000 travailleurs de 11 métiers exposés, enquêtes de novembre-décembre 2023 et 2024 appariées aux registres de salaires : l'écart entre outil déployé et gain constaté est ce que l'audit mesure",
    source: 'Humlum et Vestergaard, NBER, version de mars 2026',
  },
]

/* ───────── Ce que l'audit examine (5 dimensions) ───────── */

const DIMENSIONS = [
  {
    icon: Workflow,
    title: 'Processus et usages',
    desc: "Vos flux de travail réels, confrontés aux processus décrits : ce qui se prête à l'IA, ce qui relève d'un problème d'organisation, ce que les équipes utilisent déjà. L'inventaire inclut les outils adoptés sans validation de la DSI, la découverte principale de la plupart des audits.",
  },
  {
    icon: Database,
    title: 'Données',
    desc: "Disponibilité, qualité, droits d'usage. Un cas d'usage sans données exploitables reste une intention : l'audit vérifie ce point avant de vous laisser investir, et nomme les chantiers de données préalables quand il y en a.",
  },
  {
    icon: Server,
    title: 'Outils et architecture',
    desc: "Votre socle existant : suites bureautiques, métier, briques IA déjà souscrites, contraintes d'hébergement et de sécurité. La trajectoire s'appuie sur ce que vous avez, avant de recommander ce qui manque.",
  },
  {
    icon: Users,
    title: 'Organisation et compétences',
    desc: "Qui porte les usages, quel niveau de maîtrise dans les équipes, quelle gouvernance existe ou manque. La littératie IA est une obligation du règlement européen depuis février 2025 : l'audit mesure où vous en êtes.",
  },
  {
    icon: ShieldCheck,
    title: 'Conformité et risques',
    desc: "Traitements de données personnelles, décisions automatisées, exposition réglementaire, dépendance aux fournisseurs. Qualification par niveau de risque au sens du règlement européen sur l'IA, et écarts RGPD en premier : c'est là que se joue le risque de contrôle en 2026.",
  },
]

/* ───────── La méthode en 6 temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Périmètre, entités concernées, ce qui est explicitement hors sujet, format de restitution attendu par la direction. Ce premier échange est gratuit : il fixe le devis, jamais l'inverse.",
  },
  {
    num: '02',
    title: 'Inventaire des systèmes',
    desc: "Tout ce qui est en service, y compris les outils utilisés par les équipes sans validation de la direction informatique. Cet inventaire réserve presque toujours des surprises, et c'est précisément pour cela qu'il ouvre la mission.",
  },
  {
    num: '03',
    title: 'Entretiens métier',
    desc: "Les processus décrits dans les documents et les processus réels diffèrent toujours. Les entretiens confrontent les deux, avec les personnes qui vivent les flux au quotidien, pas seulement leurs responsables.",
  },
  {
    num: '04',
    title: 'État des données',
    desc: "Disponibilité, qualité, droits d'usage des données que chaque cas d'usage suppose. Cette étape écarte d'office les projets qui échoueraient pour une raison connue d'avance.",
  },
  {
    num: '05',
    title: 'Qualification des risques',
    desc: "Données personnelles, décision automatisée, exposition réglementaire, dépendance à un fournisseur. Chaque système et chaque cas d'usage ressort avec son niveau de risque et ses prérequis de conformité.",
  },
  {
    num: '06',
    title: 'Priorisation et feuille de route',
    desc: "Pour chaque action : un responsable, un ordre de grandeur budgétaire, une échéance. Le rapport nomme les trois actions à lancer dans les quatre-vingt-dix jours, et les cas d'usage écartés avec leur motif. Restitution en direction pour finir.",
  },
]

/* ───────── Le livrable (6 cartes) ───────── */

const LIVRABLE = [
  {
    icon: Gauge,
    title: 'Un rapport de maturité par dimension',
    desc: "Où vous en êtes sur les processus, les données, les outils, l'organisation et la conformité. Un état des lieux daté et argumenté, qui sert de référence pour mesurer le chemin parcouru un an plus tard.",
  },
  {
    icon: ListChecks,
    title: "Un portefeuille de cas d'usage priorisé",
    desc: "Chaque cas positionné par impact et par effort, avec ses prérequis de données et ses risques. Vous savez quoi lancer, quoi reporter et quoi écarter, et surtout pourquoi.",
  },
  {
    icon: MapIcon,
    title: 'Une feuille de route chiffrée',
    desc: "Par action : un responsable, un ordre de grandeur budgétaire, une échéance. Les trois premières actions tiennent dans les quatre-vingt-dix jours. Un rapport qui s'arrête à l'état des lieux n'a aucune valeur d'usage.",
  },
  {
    icon: Scale,
    title: 'Un plan de mise en conformité',
    desc: "Les écarts RGPD et règlement IA constatés, hiérarchisés par risque, avec les actions correctives. Sans certification prétendue : aucune conformité au règlement IA n'est certifiable à ce jour, et nous vous l'écrivons.",
  },
  {
    icon: XCircle,
    title: 'Les actions écartées, avec leur motif',
    desc: "Un audit qui recommande tout est un devis déguisé. Le rapport liste ce que nous vous déconseillons de lancer et pourquoi : données insuffisantes, valeur trop faible, risque disproportionné, mauvais moment.",
  },
  {
    icon: Presentation,
    title: 'Une restitution en direction',
    desc: "Le rapport se présente et se discute : une séance de restitution avec les décideurs, pour transformer l'état des lieux en arbitrages. Le support de restitution fait partie du livrable.",
  },
]

/* ───────── Garde-fous (réassurance) ───────── */

const GARDE_FOUS = [
  "Le rapport liste les actions à ne pas lancer et les cas d'usage écartés, avec leur motif",
  "Le livrable est exploitable par vos équipes ou par un autre prestataire : il ne dépend pas de nous",
  "L'audit et la mise en œuvre sont contractuellement séparés : donner suite reste votre choix",
  "Aucune « certification » promise : rien n'est certifiable au titre du règlement IA à ce jour",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit IA en entreprise ?",
    a: "C'est un état des lieux de l'intelligence artificielle dans votre organisation, qui débouche sur un plan d'action. Le terme recouvre trois missions distinctes : l'audit de maturité et d'opportunité (où en est-on, que peut-on automatiser, dans quel ordre), l'audit de conformité (sommes-nous en règle au regard du RGPD et du règlement européen sur l'IA) et l'audit algorithmique (ce modèle précis fonctionne-t-il correctement et sans biais). La mission Masteria couvre les deux premiers ensemble ; l'audit algorithmique d'un modèle désigné se cadre à part. Le premier échange sert justement à nommer l'audit dont vous avez besoin.",
  },
  {
    q: "Combien coûte un audit IA ?",
    a: "La mission se chiffre au forfait, après un cadrage gratuit qui fixe le périmètre : nombre d'entités, de processus et de systèmes examinés. Nous ne publions pas de fourchette de marché, car aucune n'est vérifiable : les chiffres qui circulent en ligne viennent de cabinets qui vendent la prestation, sans méthode ni échantillon. L'ordre de grandeur honnête d'un audit de maturité pour une organisation de taille moyenne : une poignée de jours d'expertise, pas un chantier de plusieurs mois. Un devis plus lourd doit s'expliquer ligne à ligne par son périmètre, multi-entités ou multi-pays par exemple.",
  },
  {
    q: "Combien de temps dure un audit IA ?",
    a: "De quelques jours à quelques semaines selon le périmètre, entretiens et restitution compris. Comptez quelques jours d'expertise pour une organisation de taille moyenne sur un périmètre net, étalés sur quelques semaines pour caler les entretiens ; un audit multi-entités ou multi-pays prend davantage, et cela se justifie ligne à ligne dans le devis. Si votre besoin tient en une journée de cadrage, c'est notre diagnostic IA qu'il vous faut, pas un audit.",
  },
  {
    q: "Quelle est la différence entre le diagnostic IA et l'audit IA ?",
    a: "Le diagnostic est une intervention d'une journée : il cadre vos usages et priorise les cas d'usage pour savoir par où commencer. L'audit évalue en profondeur votre maturité, vos processus, vos données, vos outils et votre conformité, sur plusieurs jours ou semaines, et débouche sur un rapport complet et une feuille de route chiffrée. Le diagnostic est le point d'entrée le plus rapide ; l'audit convient quand vous voulez une vision exhaustive avant d'industrialiser, ou quand la conformité fait partie de la question. Un diagnostic peut précéder un audit ciblé sur les cas retenus.",
  },
  {
    q: "Le règlement européen sur l'IA impose-t-il de faire auditer nos systèmes ?",
    a: "Non, pas dans la majorité des cas. Pour la plupart des systèmes à haut risque de l'annexe III (emploi, éducation, crédit, assurance, justice notamment), le règlement prévoit une procédure de contrôle interne : l'entreprise évalue elle-même sa conformité et documente cette évaluation, sans organisme externe obligatoire. Ces obligations sont en outre reportées au 2 décembre 2027 et au 2 août 2028 selon les catégories. Restent applicables aujourd'hui : les pratiques interdites, la littératie IA et la transparence de l'article 50. Un audit externe objective votre situation et prépare ces échéances ; la loi ne l'impose pas, et nous ne vous dirons jamais le contraire pour vendre la mission.",
  },
  {
    q: "Pouvez-vous certifier notre conformité au règlement IA ?",
    a: "Non, et personne ne le peut à ce jour : aucune norme harmonisée n'a été citée au Journal officiel de l'Union européenne au titre du règlement IA, la présomption de conformité n'est donc pas disponible. La seule certification existante dans le domaine est ISO/IEC 42001, sur le système de management de l'IA, délivrée par un organisme accrédité sur un périmètre déclaré. Un cabinet de conseil ne certifie pas : les règles d'impartialité interdisent à un certificateur de conseiller le client qu'il certifie. Nous vous préparons à une certification si c'est votre objectif, et l'organisme accrédité reste distinct de nous.",
  },
  {
    q: "Un audit intelligence artificielle a-t-il un sens pour une PME ?",
    a: "Oui, à condition de le dimensionner. Une PME n'a pas besoin d'un audit exhaustif de ses systèmes : elle a besoin de savoir quels processus l'IA peut soulager en premier, quels outils ses équipes utilisent déjà sans cadre, et quelles données sont réellement mobilisables. L'audit se resserre alors sur quelques processus et débouche sur un plan que le dirigeant peut porter seul. Quand la question tient en une journée, nous le disons au cadrage et nous orientons vers le diagnostic IA plutôt que vers l'audit.",
  },
  {
    q: "Comment l'audit IA s'adapte-t-il à une ETI ou à un groupe multi-entités ?",
    a: "Par le périmètre et par la grille. Dans une ETI, l'audit cartographie les initiatives déjà lancées direction par direction, mesure la maturité de chacune et propose une gouvernance commune : référents, cadre d'usage, priorités arbitrées, conformité. Dans un groupe multi-entités, il applique la même grille à chaque entité pour les comparer, distingue les cas d'usage mutualisables des cas locaux, et sépare ce qui relève du siège (données de référence, outils, conformité) de ce qui reste aux filiales. Le nombre d'entités et de processus fixe le forfait, ligne à ligne.",
  },
  {
    q: "Qui participe côté entreprise, et la mission se fait-elle sur site ?",
    a: "Un sponsor côté direction, un référent DSI ou données pour les questions techniques, et les opérationnels qui vivent les processus au quotidien : ce sont les entretiens métier qui font la qualité de l'audit. Le volume de temps demandé à chacun reste limité et se planifie au cadrage. Masteria est basée à Lyon et intervient dans toute la France, en Suisse et en Belgique ; les entretiens et la restitution se tiennent sur site ou à distance, au choix, sans effet sur le livrable.",
  },
  {
    q: "Un audit IA peut-il être financé ?",
    a: "Le conseil n'est pas finançable par votre OPCO, qui couvre la formation. En revanche, selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil et à la transformation numérique peuvent s'appliquer : nous faisons le point sur ceux qui sont mobilisables dans votre situation lors du cadrage, c'est compris dedans. Et si un volet formation accompagne la mission, celui-ci est finançable par votre OPCO : Masteria est certifiée Qualiopi.",
  },
  {
    q: "Et si l'audit conclut qu'il ne faut rien lancer ?",
    a: "Alors le rapport le dit, et il vous explique pourquoi : c'est une conclusion utile, qui vous évite des dépenses stériles. Il existe aussi des situations où l'audit lui-même est inutile : premier cas d'usage déjà connu, problème qui relève des données et non de l'IA, décision déjà prise, organisation trop petite pour l'exercice. Nous les vérifions dès le cadrage gratuit, et nous vous réorientons vers un diagnostic d'une journée ou un cadrage court quand c'est la bonne réponse. Un audit vendu à quelqu'un qui n'en a pas besoin est une dépense inutile, et cela se voit toujours à la fin.",
  },
]

/* ───────── Par taille d'entreprise (requête « audit ia pour entreprises ») ───────── */

const TAILLES = [
  {
    icon: Users,
    title: 'PME : un audit resserré, sur les processus qui comptent',
    desc: "Une PME n'a ni DSI étoffée ni programme IA : l'audit se concentre sur trois à cinq processus où le temps se perd (administratif, commercial, production documentaire), sur les outils déjà utilisés sans cadre par les équipes, et sur les données réellement disponibles. Le livrable tient en un plan d'action que le dirigeant peut porter seul, avec un premier cas d'usage à lancer et ce qu'il faut écarter.",
  },
  {
    icon: Building2,
    title: 'ETI : plusieurs métiers, une gouvernance à poser',
    desc: "Dans une ETI, les usages de l'IA existent déjà, dispersés entre les directions : le marketing a son outil, la finance ses macros, la production ses essais. L'audit intelligence artificielle cartographie ces initiatives, mesure la maturité par direction, met en cohérence les données et les outils, et propose une gouvernance légère : référents, cadre d'usage, arbitrage des priorités, conformité au règlement européen.",
  },
  {
    icon: Landmark,
    title: 'Groupe et multi-entités : comparer, prioriser, mutualiser',
    desc: "Pour un groupe ou une organisation multi-sites, l'audit compare les entités sur une grille commune, identifie les cas d'usage mutualisables et ceux qui restent locaux, et distingue ce qui relève du siège (données de référence, outils, conformité) de ce qui reste aux filiales. Le périmètre se justifie entité par entité au devis, et la restitution s'adresse au comité de direction.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit IA — Masteria',
  alternateName: "Audit d'intelligence artificielle en entreprise",
  description: "Audit IA en entreprise par " + ENTITY + " : évaluation de la maturité, des processus, des données, des outils et de la conformité RGPD et AI Act. Livrable : rapport de maturité, portefeuille de cas d'usage priorisé, feuille de route chiffrée, plan de mise en conformité et actions écartées motivées. Mission cadrée de quelques jours à quelques semaines.",
  url: 'https://www.master-ia.fr/audit-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-ia#webpage' },
  serviceType: "Audit de maturité et de conformité IA",
  category: "Conseil en intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'COMEX, DSI, directions métier · PME, ETI et grands groupes',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Audit de maturité et d'opportunité", description: "Cartographie des processus, inventaire des usages, portefeuille de cas d'usage priorisé par impact et par effort, feuille de route chiffrée." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit de conformité RGPD et AI Act', description: "Inventaire des systèmes d'IA en service, qualification par niveau de risque, écarts constatés et plan de mise en conformité." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restitution et feuille de route', description: "Rapport de maturité par dimension, actions écartées motivées, trois actions à lancer sous quatre-vingt-dix jours, restitution en direction." } },
    ],
  },
}

/* Méthode en ItemList (séquence citable — GEO ; HowTo volontairement évité,
   Google ayant retiré les rich results HowTo en 2023). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Méthode de l'audit IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/audit-ia#article',
  headline: "Audit IA : l'état des lieux complet, jusqu'au plan d'action",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-09-03',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-ia#webpage' },
  about: ['Audit IA', 'Audit de maturité IA', 'Audit de conformité IA', 'Feuille de route IA', 'Conseil en intelligence artificielle'],
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

/* ── GEO : lexique structuré de l'audit IA (DefinedTermSet) ── */
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/audit-ia#lexique',
  name: "Lexique de l'audit IA",
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Audit IA', description: "État des lieux structuré des usages, des outils, des données et des risques liés à l'intelligence artificielle dans une organisation, conclu par une feuille de route priorisée." },
    { '@type': 'DefinedTerm', name: 'Cartographie des usages IA', description: "Recensement des usages réels de l'IA dans les équipes, déclarés ou non, outil par outil et donnée par donnée ; c'est le socle factuel de l'audit." },
    { '@type': 'DefinedTerm', name: 'Shadow IA', description: "Usages d'outils d'IA nés hors de tout cadre : comptes personnels, versions gratuites, données d'entreprise saisies sans validation. L'audit les fait remonter sans les sanctionner, pour proposer l'alternative cadrée." },
    { '@type': 'DefinedTerm', name: 'Gouvernance IA', description: "Ensemble des règles, des rôles et des instances qui encadrent l'usage de l'IA : charte, propriété des assistants, revue périodique, conformité au règlement européen." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Niveau de compréhension et de maîtrise de l'IA que l'article 4 du règlement européen sur l'IA demande aux entreprises d'assurer pour toute personne qui utilise un système d'IA dans un cadre professionnel." },
    { '@type': 'DefinedTerm', name: 'Feuille de route IA', description: "Livrable final de l'audit : les chantiers priorisés par valeur et par effort, avec leurs prérequis (données, licences, formation) et leurs porteurs." },
  ],
}

/* Sources d'autorité de la page : émises en WebPage.citation (JSON-LD) et
   affichées dans le bloc « Sources et références officielles ». */
const PAGE_CITATIONS = [
  { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "ISO/IEC 42001:2023 — Système de management de l'intelligence artificielle", url: 'https://www.iso.org/fr/standard/81230.html' },
  { name: "CNIL — Intelligence artificielle : recommandations et fiches pratiques", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Humlum & Vestergaard — Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI, NBER Working Paper 33777", url: 'https://www.nber.org/papers/w33777' },
]

export default function AuditIAPage() {
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
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Audit IA', slug: SLUG },
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
        datePublished="2026-08-10"
        dateModified="2026-09-03"
        speakable={['#definition', '#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd, termsJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Audit IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Mission de conseil · Audit IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 860 }}>
            Audit IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>l'état des lieux complet, jusqu'au plan d'action</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026, mis à jour en septembre 2026
          </p>

          {/* GEO : définition autonome (54 mots), citable hors contexte */}
          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 760 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              Un audit IA est l'état des lieux structuré de l'intelligence artificielle dans une organisation : usages réels, données, outils, organisation et conformité, évalués par un tiers indépendant et conclus par une feuille de route priorisée. Il se distingue du diagnostic d'une journée par sa profondeur, et du test de maturité par la présence d'un auditeur.
            </p>
          </div>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit IA de {ENTITY.split(',')[0]}, un audit d'intelligence artificielle mené par un cabinet indépendant, évalue en profondeur votre entreprise sur cinq dimensions : processus, données, outils, organisation et conformité RGPD et AI Act. Vous repartez avec un <strong style={{ color: '#fff', fontWeight: 700 }}>rapport de maturité et une feuille de route chiffrée</strong>, qui nomme aussi les actions à ne pas lancer. Une mission cadrée, de quelques jours à quelques semaines selon le périmètre.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            C'est la mission qui précède l'industrialisation : quand un cadrage d'une journée ne suffit plus et que la direction veut une vision exhaustive, documentée et opposable, avant d'engager des budgets. Conduite par un cabinet spécialisé sur l'intelligence artificielle depuis 2022, qui audite, construit et forme, et qui vous le dit quand un audit ne servirait à rien.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre audit IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le livrable
            </a>
          </div>

          {/* chips de réassurance */}
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

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 100px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES TROIS AUDITS (éditorial asymétrique) ── */}
      <section id="types" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>De quel audit parle-t-on</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quel audit IA vous faut-il ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>« Audit IA » recouvre trois missions distinctes : l'audit de maturité et d'opportunité, l'audit de conformité et l'audit algorithmique. Elles n'ont ni le même objet, ni le même livrable. Un prestataire qui ne vous demande pas laquelle vous voulez ne sait pas ce qu'il vend : chez Masteria, c'est la première question du cadrage.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Dans la plupart des demandes, le besoin combine les deux premières : comprendre où vous en êtes et ce que vous pouvez automatiser, en intégrant la conformité au passage plutôt qu'après coup. C'est le périmètre standard de notre mission. Pour le fond réglementaire (ce que la loi impose vraiment, les normes publiées, les prix vérifiables), lisez notre <Link to="/blog/audit-ia-entreprise-methode-prix" style={aStyle}>guide complet de l'audit IA</Link>. Quand la conformité est la question principale, la mission dédiée est notre <Link to="/audit-conformite-ai-act" style={aStyle}>audit de conformité IA</Link> ; pour une association ou un établissement médico-social, voyez notre <Link to="/audit-ia-medico-social" style={aStyle}>audit IA médico-social</Link>.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {TYPES_AUDIT.map((item, i) => (
                  <div key={i} id={item.id} style={{ ...cardStyle, padding: 24, scrollMarginTop: 96 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 13.5, color: c, fontWeight: 600, lineHeight: 1.5, margin: '0 0 8px' }}>{item.question}</p>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Un quatrième usage du mot circule, sans rapport avec cette page : l'audit de visibilité dans les moteurs génératifs, qui mesure si votre marque est citée par ChatGPT ou Perplexity. Ce besoin a sa mission dédiée, notre <Link to="/audit-geo-ia" style={aStyle}>audit GEO IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEST VS DIAGNOSTIC VS AUDIT (ancre sombre — pivot, tableau citable GEO) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Test, diagnostic ou audit</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            L'audit est-il la bonne mission pour vous ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Trois niveaux, du plus léger au plus profond. Le test de maturité IA situe votre profil en trois minutes, gratuitement. Le diagnostic IA cadre vos usages et priorise vos cas en une journée. L'audit IA évalue en profondeur maturité, données, conformité et trajectoire, sur plusieurs jours ou semaines. Le cadrage gratuit sert à choisir la bonne mission, y compris quand c'est la moins chère.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre test de maturité IA, diagnostic IA et audit IA complet" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Test de maturité IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Diagnostic IA</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '30%' }}>Audit IA complet</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.test}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.diagnostic}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.audit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Commencez par le <Link to="/test-maturite-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>test de maturité IA</Link> si vous voulez une première photographie, ou par le <Link to="/diagnostic-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>diagnostic IA d'une journée</Link> : beaucoup de nos audits commencent là, sur un périmètre que le diagnostic a fait émerger. Quand un cas d'usage est déjà identifié, un POC le valide en conditions réelles : c'est un projet de développement, pas un audit.
          </p>
        </div>
      </section>

      {/* ── CE QUE L'AUDIT EXAMINE (5 dimensions) ── */}
      <section id="dimensions" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le périmètre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que couvre un audit IA d'entreprise ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>L'audit examine cinq dimensions : vos processus et usages (y compris les outils adoptés sans validation de la DSI), vos données, vos outils et votre architecture, votre organisation et vos compétences, et votre conformité RGPD et AI Act. Chaque dimension ressort notée, argumentée et assortie d'actions.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            {DIMENSIONS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
            {/* Carte contexte réglementaire : pas une dimension, un repère honnête */}
            <div style={{ ...cardStyle, padding: 28, background: '#0A0F1E', border: '1px solid #1E293B' }}>
              <div style={{ marginBottom: 16 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Landmark size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                </div>
              </div>
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Ce que la loi impose vraiment</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Le règlement européen n'impose pas d'audit externe à la majorité des systèmes à haut risque : il prévoit une auto-évaluation documentée, reportée à fin 2027 ou 2028 selon les catégories. Nous auditons pour éclairer vos décisions, jamais en agitant une obligation qui n'existe pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REPÈRES DATÉS (faits sourcés, citables — GEO) ── */}
      {/* ── PAR TAILLE D'ENTREPRISE ── */}
      <section id="tailles" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Par taille d'entreprise</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Audit IA pour entreprises de toute taille : PME, ETI, groupe
          </h2>
          <p style={answerStyle}>
            <strong>Le même audit intelligence artificielle ne s'applique pas à une PME de quarante personnes et à un groupe de dix entités : la grille est commune, le périmètre et la profondeur changent.</strong> C'est au cadrage gratuit que se décide ce qui est examiné, et c'est ce périmètre, écrit, qui fixe le forfait.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {TAILLES.map(card => {
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
        </div>
      </section>

      <section id="reperes" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Repères datés</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quatre dates et un chiffre qui cadrent un audit IA en 2026
          </h2>
          <p style={{ ...answerStyle }}>
            <strong>Les obligations du règlement européen s'appliquent à des dates différentes selon l'usage, et l'écart entre un outil déployé et un gain mesuré reste étroit : c'est ce double constat que l'audit documente pour votre organisation, date par date et service par service.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 12 }}>
            {REPERES.map((r, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={r.icon} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{r.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{r.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>Source : {r.source}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '20px 0 0', maxWidth: 880 }}>
            Les références complètes figurent en bas de page. Pour les mesures d'effet sur la productivité, la méthode et la période de collecte sont indiquées avec chaque chiffre : notre page sur le <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link> en rassemble une vingtaine, avec ce que chacune mesure et ne mesure pas.
          </p>
        </div>
      </section>

      {/* ── LA MÉTHODE EN 6 TEMPS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>La méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule l'audit ?
          </h2>

          <p style={answerStyle}>
            <strong>La mission suit six temps : cadrage, inventaire des systèmes, entretiens métier, état des données, qualification des risques, puis priorisation et feuille de route. Chaque temps produit un élément du rapport final, restitué en direction. Le référentiel appliqué est nommé et daté dès le devis : ISO/IEC 42001 et 23894, cadre du NIST, RGPD et règlement européen selon le périmètre.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE LIVRABLE ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Avec quoi repartez-vous concrètement ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Vous repartez avec un rapport de maturité par dimension, un portefeuille de cas d'usage priorisé, une feuille de route chiffrée (responsable, budget, échéance pour chaque action), un plan de mise en conformité, la liste des actions écartées avec leur motif, et une restitution en direction. Un document exploitable par vos équipes ou par un autre prestataire.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            {LIVRABLE.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GARDE-FOUS (réassurance, conflit d'intérêts assumé) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Nos garde-fous</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un cabinet qui audite et vend la mise en œuvre vous doit des garde-fous
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Masteria audite, puis construit et forme. Cette position appelle une remarque honnête : un cabinet qui diagnostique et vend ensuite la réalisation a intérêt à trouver du travail. Plutôt que de l'ignorer, nous l'encadrons contractuellement. Ces garde-fous se demandent à tout prestataire, y compris à nous.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {GARDE_FOUS.map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIX & FINANCEMENT ── */}
      <section id="prix" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Prix et financement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Combien coûte un audit IA, et qui peut le financer ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La mission se chiffre au forfait, après un cadrage gratuit qui fixe le périmètre. Aucune fourchette de marché publiée n'est vérifiable : l'ordre de grandeur honnête d'un audit de maturité pour une organisation de taille moyenne est une poignée de jours d'expertise, pas un chantier de plusieurs mois. Un devis plus lourd s'explique ligne à ligne par son périmètre.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Building2 size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Notre façon de chiffrer</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le périmètre se fixe avant le devis : entités, processus, systèmes, profondeur du volet conformité. Nous ne vendons pas de pack à l'aveugle et nous ne publions pas de fourchette de marché : celles qui circulent en ligne viennent de cabinets qui vendent la prestation, sans méthode ni échantillon. Quand un diagnostic d'une journée suffit, nous vous le disons au cadrage.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Les financements mobilisables</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le conseil n'est pas finançable par votre OPCO, qui couvre la formation. En revanche, selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil et à la transformation numérique peuvent s'appliquer : nous faisons le point sur ceux qui sont mobilisables dans votre situation lors du cadrage. Le volet formation d'une mission reste, lui, finançable par votre OPCO : Masteria est certifiée Qualiopi.
              </p>
            </div>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour situer l'audit dans le budget global d'une démarche IA (développement compris), consultez nos repères sur le <Link to="/prix-projet-ia" style={aStyle}>prix d'un projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (preuve, méthode en six temps, résultats) ── */}
      <CaseStudyCards
        ids={['photovoltaique', 'industrie']}
        title="Deux missions de conseil, de l'état des lieux au plan d'action"
        intro="Un distributeur photovoltaïque diagnostiqué par flux de travail, un groupe industriel accompagné du comité de direction aux sites internationaux : la même méthode en six temps, avec ses résultats pour les équipes et pour l'organisation."
      />

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Audit IA : les questions fréquentes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
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
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            L'audit s'inscrit dans le périmètre complet de notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link> : cadrage, gouvernance, développement et <Link to="/formation-intelligence-artificielle" style={aStyle}>formation des équipes</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Diagnostic IA en une journée', href: '/diagnostic-ia', tag: 'Offre d\'entrée', desc: "Le point d'entrée le plus rapide : cadrage et priorisation en une journée, avant un audit ciblé si besoin." },
              { label: "Guide complet de l'audit IA", href: '/blog/audit-ia-entreprise-methode-prix', tag: 'Guide', desc: "Les trois types d'audit, ce que la loi impose vraiment, les normes publiées et le seul prix public vérifiable." },
              { label: "Stratégie IA d'entreprise : le guide", href: '/blog/strategie-ia-entreprise-guide', tag: 'Guide', desc: "Ce que contient une stratégie IA, la méthode en cinq étapes et les chiffres à connaître avant de l'écrire." },
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Conseil', desc: "Après l'audit : la trajectoire d'entreprise, les arbitrages COMEX et la feuille de route stratégique." },
              { label: 'Audit de conformité IA', href: '/audit-conformite-ai-act', tag: 'Conformité', desc: "Quand la question est « sommes-nous en règle » : RGPD, AI Act, écarts hiérarchisés et plan daté." },
              { label: 'Audit IA médico-social', href: '/audit-ia-medico-social', tag: 'Secteur', desc: "La déclinaison pour les associations et établissements médico-sociaux : usagers, DUI, HDS, financeurs." },
              { label: "Auditabilité d'un système d'IA", href: '/blog/auditabilite-systeme-ia', tag: 'Guide', desc: "Ce que vous devez pouvoir prouver sur un système d'IA : journaux, documentation, supervision." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Conformité', desc: "Prolonger le plan de conformité dans la durée : comité, charte d'usage, RGPD et AI Act." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Le premier livrable de gouvernance qui suit souvent l'audit : cadrer les usages des équipes." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les ordres de grandeur pour la suite : ce que coûtent un POC, un agent, un outil sur mesure." },
              { label: 'Méthode & modèles d\'engagement', href: '/methode-projet-ia', tag: 'Méthode', desc: "Comment nous travaillons après l'audit : forfait, régie ou accompagnement conseil." },
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
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui intervient</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Pourquoi un cabinet d'audit IA indépendant
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                {ENTITY}, audite, construit et forme, sans dépendre d'un éditeur. Un cabinet d'audit IA généraliste ou lié à un éditeur a intérêt à conclure que la solution qu'il vend est la bonne. Les audits Masteria sont menés par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Depuis 2022', 'spécialisé uniquement IA'],
                ['+1 500', 'professionnels formés'],
                ['Indépendant', 'des éditeurs de solutions'],
                ['FR · CH · BE', 'sur site ou à distance'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Mission de conseil</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Cadrons votre audit IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre contexte : taille, entités, ce qui motive la demande. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit, qui nomme l'audit dont vous avez besoin, fixe le périmètre et identifie les financements mobilisables. Si un audit ne vous servirait à rien, nous vous le disons à ce moment-là.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un audit IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Livrable exploitable sans nous · {ENTITY} · France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
