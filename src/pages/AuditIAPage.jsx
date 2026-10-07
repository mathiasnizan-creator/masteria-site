import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Scale, Cpu, Workflow, Database, Server, Users, ShieldCheck,
  FileText, ListChecks, Map as MapIcon, XCircle, Presentation,
  Gauge, Calendar, MapPin, Check, Landmark, Building2, Sun, Eye,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page de conversion de la mission de conseil « Audit IA » (slug /audit-ia).
 * Intention TRANSACTIONNELLE de « audit ia », « audit ia entreprise », « audit ia pour
 * entreprises », « audit intelligence artificielle ». Le guide informationnel reste
 * /blog/audit-ia-entreprise-methode-prix. Position dans l'offre : entre /diagnostic-ia
 * (format court, durée fixée au cadrage) et les missions de mise en œuvre.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre au moins 90 %, faits à jour au 7 octobre 2026) :
 * - plus de FounderNote ni de CaseStudyCards ni de formule d'entité commune : signature,
 *   équipe et études de cas écrites pour cette page ;
 * - règle « demande d'audit = audit seul » : le devis porte sur l'audit et sa restitution,
 *   la suite se chiffre après la restitution ;
 * - prix en fourchette large à plafond ouvert (quelques milliers d'euros, dizaines de
 *   milliers pour plusieurs entités ou pays) ; conseil pas finançable par votre OPCO ;
 *   aides publiques au conseil évoquées sans jamais nommer un dispositif ;
 * - AI Act : article 4 depuis le 2 février 2025, réécrit par l'Omnibus (règlement (UE)
 *   2026/1744) en obligation de moyens ; article 50 depuis le 2 août 2026 ; haut risque
 *   annexe III au 2 décembre 2027, annexe I au 2 août 2028 ; aucune certification AI Act.
 * - Études de cas : photovoltaique et conseil-financier (src/data/etudes-de-cas.js).
 */

const SLUG = 'audit-ia'
const RDV = '/contact?type=projet&rdv=30'
const DATE_MODIFIED = '2026-10-07'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit IA d'entreprise : maturité et plan d'action | Masteria"
const META_DESC = "Audit IA d'entreprise : processus, données, outils, compétences, RGPD et AI Act, puis une feuille de route chiffrée. Forfait fixé après le cadrage."
const KEYWORDS = "audit ia, audit ia entreprise, audit ia pour entreprises, audit ia pme, audit ia eti, audit intelligence artificielle, cabinet d'audit ia, audit de maturité ia, audit des processus ia, audit de conformité ia"

/* ───────── Styles ───────── */

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
  { icon: Calendar, label: "Quelques jours d'expertise, sur plusieurs semaines" },
  { icon: FileText, label: 'Un porteur et un budget pour chaque action' },
  { icon: ShieldCheck, label: 'Rapport utilisable sans nous' },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable) ───────── */

const EN_BREF = [
  { label: 'Objet', value: "Maturité, processus, données, logiciels, compétences et conformité de votre structure, passés en revue par un auditeur extérieur" },
  { label: 'Durée', value: "Quelques jours de travail d'auditeur, répartis sur plusieurs semaines pour caler les entretiens" },
  { label: 'Livrable', value: "Rapport de maturité, cas d'usage classés, feuille de route avec porteur et budget, projets écartés et leur motif" },
  { label: 'Référentiels', value: "ISO/IEC 42001 et ISO/IEC 23894, référentiel AI RMF du NIST, RGPD, AI Act dans sa version révisée en juillet 2026" },
  { label: 'Prix', value: "Forfait écrit une fois le périmètre arrêté : dès quelques milliers d'euros, davantage dès que plusieurs entités ou pays s'ajoutent" },
  { label: 'Ensuite', value: "Un second devis, bâti sur les priorités du rapport, couvre la mise en œuvre si vous la voulez ; vos équipes peuvent aussi la porter seules" },
  { label: 'Cabinet', value: "Masteria, que Mathias Nizan a créé à Lyon en 2022, sans attache avec un éditeur de logiciels" },
]

/* ───────── Les trois audits qui portent ce nom ───────── */

const TYPES_AUDIT = [
  {
    id: 'audit-maturite',
    icon: Search,
    title: "Audit de maturité et d'opportunité",
    question: "Où en sommes-nous, et par quoi commencer ?",
    desc: "Le plus demandé. Il recense les usages en place, repère les processus où part le plus d'heures, range chaque cas d'usage par valeur et par difficulté, puis chiffre une trajectoire. Cette page le décrit en détail.",
  },
  {
    id: 'audit-conformite',
    icon: Scale,
    title: 'Audit de conformité (RGPD, AI Act)',
    question: "Respectons-nous les textes qui s'appliquent déjà ?",
    desc: "Il dresse la liste des systèmes d'IA utilisés, leur attribue un niveau de risque et relève les écarts. En 2026, le RGPD pèse davantage que l'AI Act, dont les règles sur les usages classés à haut risque par l'annexe III attendent le 2 décembre 2027.",
  },
  {
    id: 'audit-algorithmique',
    icon: Cpu,
    title: 'Audit algorithmique',
    question: "Ce modèle précis donne-t-il des résultats justes et explicables ?",
    desc: "Une expertise technique sur un système désigné : performance mesurée, biais, explicabilité, qualité de la documentation. Nous la cadrons séparément, avec son propre périmètre et ses données d'essai.",
  },
]

/* ───────── Test, diagnostic ou audit (tableau citable) ───────── */

const COMPARATIF = [
  {
    critere: 'Objectif',
    test: "Vous situer parmi quatre profils de maturité",
    diagnostic: "Cadrer vos usages et désigner les cas à traiter en premier",
    audit: "Examiner en détail maturité, données, conformité et existant",
  },
  {
    critere: 'Durée',
    test: "Trois minutes, en ligne",
    diagnostic: "Brève, ajustée au périmètre arrêté lors du cadrage",
    audit: "Quelques jours d'expertise, sur plusieurs semaines",
  },
  {
    critere: 'Qui le conduit',
    test: "Vous-même, en huit questions",
    diagnostic: "Un consultant Masteria, avec vos équipes",
    audit: "Un auditeur Masteria, qui rencontre direction, DSI et métiers",
  },
  {
    critere: 'Livrable',
    test: "Score sur 24, profil de maturité, trois priorités",
    diagnostic: "Des priorités classées et les toutes premières actions",
    audit: "Un rapport par dimension, une feuille de route chiffrée, un plan de conformité",
  },
  {
    critere: 'Prix',
    test: "Gratuit",
    diagnostic: "Forfait annoncé pendant le cadrage",
    audit: "Forfait écrit après un cadrage (30 minutes offertes)",
  },
  {
    critere: 'Quand le choisir',
    test: "Avant d'en parler à quiconque",
    diagnostic: "Vous cherchez par où commencer",
    audit: "Vous voulez un constat complet et défendable avant d'engager des budgets",
  },
]

/* ───────── Repères datés (faits sourcés) ───────── */

const REPERES = [
  {
    icon: Landmark,
    stat: '2 févr. 2025',
    label: "Interdictions de l'article 5 et exigence de maîtrise de l'IA de l'article 4 : toute structure qui se sert d'un système d'IA est concernée depuis ce jour-là. L'Omnibus voté en 2026 a transformé l'article 4 en obligation de moyens.",
    source: 'EUR-Lex, règlement (UE) 2024/1689 modifié',
  },
  {
    icon: Eye,
    stat: '2 août 2026',
    label: "L'article 50 s'applique : un agent conversationnel annonce qu'il est une machine, un contenu généré diffusé au public se signale comme tel.",
    source: 'EUR-Lex, règlement (UE) 2024/1689',
  },
  {
    icon: Scale,
    stat: '2 déc. 2027',
    label: "Entrée en application des règles sur les usages que l'annexe III classe à haut risque (recrutement, crédit, accès aux services essentiels), après le report voté en juillet 2026. Pour les produits réglementés de l'annexe I, ce sera le 2 août 2028.",
    source: 'EUR-Lex, règlement (UE) 2026/1744 du 8 juillet 2026',
  },
  {
    icon: FileText,
    stat: '18 déc. 2023',
    label: "ISO publie ISO/IEC 42001, norme certifiable consacrée au management de l'IA. À l'été 2026, aucune norme harmonisée n'avait encore été publiée au Journal officiel de l'UE pour l'AI Act.",
    source: 'ISO ; Journal officiel de l’UE',
  },
  {
    icon: Gauge,
    stat: '≈ 3 %',
    label: "du temps de travail gagné grâce aux assistants IA, mesuré au Danemark : 25 000 salariés de 11 métiers exposés, interrogés fin 2023 puis fin 2024, réponses rapprochées des registres de salaires. L'audit mesure l'écart entre l'outil acheté et le temps rendu, chez vous.",
    source: 'Humlum et Vestergaard, NBER, document de travail 33777, version de mars 2026',
  },
]

/* ───────── Les cinq angles d'examen ───────── */

const DIMENSIONS = [
  {
    icon: Workflow,
    title: 'Processus et usages',
    desc: "L'audit compare les processus tels qu'ils sont écrits et tels qu'ils se pratiquent : ce que l'IA peut soulager, ce qui tient d'abord à l'organisation du travail, ce que les salariés font déjà avec des outils jamais validés par l'informatique. Ces usages hors cadre sont souvent la première découverte de la mission.",
  },
  {
    icon: Database,
    title: 'Données',
    desc: "Les données nécessaires existent-elles, sont-elles fiables, avez-vous le droit de les utiliser ainsi ? Un cas d'usage privé de données exploitables n'avance pas. L'audit le vérifie avant toute dépense et désigne, s'il le faut, le chantier de données à mener d'abord.",
  },
  {
    icon: Server,
    title: 'Outils et architecture',
    desc: "Suite bureautique, logiciels métier, abonnements IA déjà payés, règles d'hébergement et de sécurité : la feuille de route part de ce socle et n'ajoute un outil que lorsqu'un besoin précis le justifie.",
  },
  {
    icon: Users,
    title: 'Organisation et compétences',
    desc: "Qui porte les usages, quel niveau de maîtrise ont les équipes, quelles règles existent déjà. L'AI Act demande, à son article 4, des mesures de formation ; en vigueur depuis février 2025, ce texte est devenu en 2026 une obligation de moyens. L'audit recense les mesures prises.",
  },
  {
    icon: ShieldCheck,
    title: 'Conformité et risques',
    desc: "Fichiers contenant des données personnelles, décisions laissées à la machine, dépendance envers un fournisseur, textes applicables. Chaque usage reçoit le niveau de risque que lui attribue l'AI Act, et les écarts RGPD passent en tête de liste, puisque ce sont eux que la CNIL contrôle dès aujourd'hui.",
  },
]

/* ───────── Les six étapes ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Nous fixons le périmètre, les entités concernées, ce qui reste hors sujet et la forme de restitution attendue par la direction. Nous vous offrons cet échange de 30 minutes, et le devis en découle.",
  },
  {
    num: '02',
    title: 'Inventaire des systèmes',
    desc: "Tout ce qui tourne : outils officiels, options d'IA allumées dans les logiciels du quotidien, outils adoptés par les équipes sans validation informatique. L'inventaire ouvre la mission parce qu'il surprend presque toujours la direction.",
  },
  {
    num: '03',
    title: 'Entretiens métier',
    desc: "Un processus documenté ne ressemble jamais tout à fait au processus vécu. Nous rencontrons celles et ceux qui exécutent ces tâches chaque jour, en plus de leurs responsables, pour confronter les deux versions.",
  },
  {
    num: '04',
    title: 'État des données',
    desc: "Pour chaque cas d'usage envisagé, nous vérifions la disponibilité, la qualité et les droits d'usage des données nécessaires. Les projets voués à l'échec pour une raison connue d'avance sortent de la liste à cette étape.",
  },
  {
    num: '05',
    title: 'Qualification des risques',
    desc: "Traitement d'informations personnelles, décision sans intervention humaine, obligations légales, dépendance à un prestataire unique : chaque système et chaque cas d'usage reçoit un niveau de risque et la liste de ses prérequis de conformité.",
  },
  {
    num: '06',
    title: 'Feuille de route et restitution',
    desc: "Chaque action reçoit un porteur, une enveloppe budgétaire et une échéance. Le rapport désigne les trois actions à engager dans les 90 jours et les cas écartés avec leur motif. La mission se termine devant la direction.",
  },
]

/* ───────── Le dossier remis (6 pièces) ───────── */

const LIVRABLE = [
  {
    icon: Gauge,
    title: 'Un rapport de maturité, dimension par dimension',
    desc: "Processus, données, outils, organisation, conformité : votre situation notée et argumentée, à une date donnée. Le document sert de point de comparaison quand vous referez l'exercice l'année suivante.",
  },
  {
    icon: ListChecks,
    title: "Des cas d'usage classés",
    desc: "Chaque cas est placé selon sa valeur et son effort, avec les données qu'il suppose et ses risques. Vous voyez ce qui se lance maintenant, ce qui patiente un trimestre, ce qui sort de la liste, avec la raison de chaque choix.",
  },
  {
    icon: MapIcon,
    title: 'Une feuille de route chiffrée',
    desc: "Pour chaque action, un porteur, une enveloppe et une date. Les trois premières tiennent dans les 90 jours qui suivent la restitution, pour que le rapport débouche sur des décisions datées.",
  },
  {
    icon: Scale,
    title: 'Un plan pour vous mettre en règle',
    desc: "Les écarts au RGPD comme au règlement européen sur l'IA, classés par gravité, chacun avec sa correction. Le rapport n'annonce aucune certification : le respect de l'AI Act ne se certifie pas à ce jour, et nous l'écrivons noir sur blanc.",
  },
  {
    icon: XCircle,
    title: 'Les projets écartés, et pourquoi',
    desc: "Un audit qui recommande tout ressemble à un devis. Le rapport nomme ce que nous vous conseillons de ne pas lancer : données trop pauvres, valeur trop faible, risque disproportionné, calendrier inadapté.",
  },
  {
    icon: Presentation,
    title: 'Une restitution devant la direction',
    desc: "Nous présentons le rapport aux décideurs et en discutons avec eux, pour transformer un constat en arbitrages. Le support de cette séance vous est remis avec le reste du dossier.",
  },
]

/* ───────── Garde-fous ───────── */

const GARDE_FOUS = [
  "Le rapport nomme les projets à ne pas lancer et le motif de chaque refus",
  "Le devis porte sur l'audit seul ; la mise en œuvre se chiffre après la restitution, si vous la demandez",
  "La feuille de route reste exécutable sans nous, par vos salariés comme par un tiers",
  "Aucune certification annoncée : aucun organisme ne délivre aujourd'hui de certificat AI Act",
]

/* ───────── Par taille d'entreprise ───────── */

const TAILLES = [
  {
    icon: Users,
    title: 'PME : quelques processus, examinés à fond',
    desc: "Sans DSI étoffée ni programme IA, une PME veut savoir où part le temps : devis, relances, administratif, production de documents. L'audit se concentre sur trois à cinq processus, sur les outils que les salariés utilisent déjà sans règle et sur les données disponibles. Le dirigeant repart avec un plan qu'il peut piloter seul : un premier cas à lancer, ce qu'il faut écarter, le budget de chaque étape.",
  },
  {
    icon: Building2,
    title: 'ETI : relier des initiatives dispersées',
    desc: "Dans une ETI, chaque direction a souvent commencé de son côté : un outil au marketing, des macros à la finance, des essais en production. L'audit recense ces initiatives, mesure la maturité direction par direction, aligne données et outils, puis propose une gouvernance légère : des référents, des règles d'usage, un arbitrage des priorités, un volet conformité.",
  },
  {
    icon: Landmark,
    title: 'Groupe multi-entités : une grille commune pour comparer',
    desc: "Pour un groupe ou un réseau de sites, chaque entité passe par la même grille. Le rapport sépare les cas d'usage à mutualiser des cas locaux, et ce qui revient au siège (données de référence, outils, conformité) de ce qui reste aux filiales. Le devis justifie le périmètre entité par entité, et la restitution se tient devant le comité de direction.",
  },
]

/* ───────── Études de cas (faits de src/data/etudes-de-cas.js) ───────── */

const CAS = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · PME',
    figure: '12',
    figureLabel: 'gisements de temps repérés, dont 3 chantiers retenus',
    text: "Trois personnes gèrent toute l'activité dans Odoo et voulaient vendre davantage sans recruter. Trois entretiens et la description de quatre flux de travail ont abouti à un plan sur 90 jours, remis aux dirigeants en septembre 2026. L'équipe sera formée deux jours sur site en octobre, puis un premier relevé des gains suivra un mois plus tard.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: 'Conseil financier · secteur public',
    figure: '4',
    figureLabel: "assistants pour répondre aux marchés publics, chacun dédié à une famille",
    text: "Fort d'une vingtaine de consultants, ce cabinet a d'abord fait examiner ses pratiques de rédaction : comment naissent ses mémoires techniques, quelles familles de marchés reviennent, ce qu'un outil devait faire. Le cahier de cadrage issu de ce travail a fixé l'architecture des quatre assistants, bâtis ensuite avec les consultants lors de quatre ateliers, de deux heures chacun.",
  },
]

/* ───────── FAQ (une seule, JSON-LD identique au visible) ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit IA en entreprise ?",
    a: "Un audit IA en entreprise fait le point sur l'intelligence artificielle dans votre organisation et se termine par un plan d'action. Le mot couvre trois missions. L'audit de maturité cherche où vous en êtes, ce que vous pouvez automatiser et dans quel ordre. L'audit de conformité vérifie que vous respectez le RGPD et le règlement européen sur l'IA. L'audit algorithmique teste la justesse des résultats d'un modèle donné. Notre mission réunit les deux premières ; un modèle précis s'audite dans une mission séparée. Le premier échange sert à nommer l'audit qu'il vous faut.",
  },
  {
    q: "Combien coûte un audit IA ?",
    a: "Le prix est un forfait, établi après les 30 minutes de cadrage offertes, quand on sait combien d'entités, de processus et de systèmes examiner. Pour une PME et un périmètre resserré, comptez quelques milliers d'euros ; plusieurs filiales ou plusieurs pays font monter la facture à plusieurs dizaines de milliers d'euros, sans plafond fixé à l'avance. Le devis couvre l'audit et sa restitution. Former, construire ou gouverner vient ensuite, chiffré à part, à partir des priorités du rapport.",
  },
  {
    q: "Combien de temps dure un audit IA ?",
    a: "Comptez quelques jours de travail d'auditeur pour une entreprise de quelques centaines de salariés au périmètre net, répartis sur plusieurs semaines afin d'organiser les entretiens et la restitution. Un groupe de plusieurs entités ou pays demande davantage, et le devis explique pourquoi. Si votre question tient en un cadrage court, le diagnostic IA y répond plus vite.",
  },
  {
    q: "Quelle est la différence entre le diagnostic IA et l'audit IA ?",
    a: "Le diagnostic reste bref ; sa durée dépend du périmètre arrêté avec vous, et il désigne les cas d'usage à traiter d'abord. L'audit descend plus bas : maturité, processus, données, logiciels et conformité, avec un rapport complet et une feuille de route chiffrée. Choisissez le diagnostic pour démarrer vite, l'audit quand vous voulez un constat exhaustif avant d'industrialiser ou quand la conformité fait partie de la question. Les deux s'enchaînent bien : un diagnostic peut délimiter un audit ciblé.",
  },
  {
    q: "Faut-il faire auditer ses systèmes d'IA pour respecter l'AI Act ?",
    a: "Non, dans la grande majorité des cas. Les usages que l'annexe III classe à haut risque (embauche, enseignement, prêts, assurance, justice) relèvent pour la plupart d'un contrôle interne : l'entreprise évalue elle-même sa situation et en garde la trace écrite, sans organisme extérieur imposé. Ces règles entreront en application en décembre 2027 pour les usages de l'annexe III, en août 2028 pour ceux de l'annexe I. Sont déjà en vigueur l'interdiction de certaines pratiques et l'exigence de maîtrise de l'IA, applicables au 2 février 2025, ainsi que l'obligation de transparence de l'article 50, entrée en application le 2 août 2026. Un audit externe vous prépare à ces échéances ; aucune loi ne vous l'impose, et nous ne prétendrons jamais l'inverse.",
  },
  {
    q: "Masteria peut-il certifier que nous respectons l'AI Act ?",
    a: "Non. À l'été 2026, aucune norme harmonisée liée à l'AI Act n'avait été publiée au Journal officiel de l'UE : la présomption de conformité qu'apporterait une telle norme reste donc hors d'atteinte. Dans ce domaine, on peut se faire certifier ISO/IEC 42001, qui atteste la façon dont une organisation pilote ses systèmes d'IA ; un organisme accrédité la délivre sur un périmètre déclaré. Un cabinet qui conseille ne certifie pas, car les règles d'impartialité séparent les deux métiers. Si votre objectif est ISO/IEC 42001, nous vous y préparons, et l'organisme qui certifie reste un tiers.",
  },
  {
    q: "Une PME a-t-elle intérêt à commander un audit intelligence artificielle ?",
    a: "Oui, s'il est taillé à sa mesure. Passer en revue tous ses systèmes serait disproportionné pour une PME. Elle doit savoir quels processus l'IA peut alléger d'abord, quels outils ses salariés utilisent déjà sans règle et quelles données sont exploitables. L'audit se limite alors à quelques processus et produit un plan que le dirigeant pilote seul. Quand un format plus court suffit, le cadrage le dit et vous oriente vers le diagnostic IA.",
  },
  {
    q: "Comment l'audit IA s'adapte-t-il à une ETI ou à un groupe multi-entités ?",
    a: "Le périmètre et la grille changent d'échelle. Dans une ETI, l'audit recense les initiatives de chaque direction, note leur maturité et propose une gouvernance commune : référents, règles d'usage, priorités arbitrées, conformité. Dans un groupe, chaque entité passe par la même grille pour être comparée aux autres ; le rapport distingue les cas mutualisables des cas locaux, et ce qui relève du siège (données de référence, outils, conformité) de ce qui reste aux filiales. Le forfait dépend du nombre de filiales et de processus retenus.",
  },
  {
    q: "Qui participe côté entreprise, et la mission se fait-elle sur site ?",
    a: "Il faut un sponsor à la direction, un référent informatique ou données pour les questions techniques, et les opérationnels qui pratiquent les processus au quotidien : leurs entretiens font la qualité de l'audit. Le temps demandé à chacun reste limité et se planifie dès le cadrage. Nos auditeurs partent de Lyon et se déplacent en France, en Europe, en Inde et aux États-Unis ; entretiens et restitution se tiennent chez vous ou à distance, avec le même livrable.",
  },
  {
    q: "Un audit IA peut-il être financé ?",
    a: "Prestation de conseil, l'audit est payé par l'entreprise : il n'est pas finançable par votre OPCO, dont le budget va à la formation. Il existe des aides publiques au conseil, accordées selon l'effectif, l'activité et la région ; le cadrage passe en revue celles qui vous concernent. Si une formation suit l'audit, l'OPCO dont relève votre entreprise peut la prendre en charge si ses critères et son budget le permettent : Qualiopi, que Masteria détient au titre des actions de formation, rend ce financement possible.",
  },
  {
    q: "Et si l'audit conclut qu'il ne faut rien lancer ?",
    a: "Le rapport le dit et l'explique, ce qui vous évite des dépenses inutiles. Il arrive aussi que l'audit lui-même soit superflu : premier cas d'usage déjà identifié, problème qui tient aux données plus qu'à l'IA, décision déjà prise, structure trop petite pour l'exercice. Le cadrage repère ces situations et vous oriente alors vers un diagnostic IA ou un cadrage court.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit IA, Masteria',
  alternateName: "Audit d'intelligence artificielle en entreprise",
  description: "Audit IA d'entreprise mené par Masteria (Lyon) : processus et usages, données, logiciels, organisation et compétences, respect du RGPD et du règlement européen sur l'IA. Le dossier remis comprend un rapport de maturité, des cas d'usage classés, une feuille de route chiffrée, un plan de correction des écarts et la liste motivée des projets écartés. Le devis porte sur l'audit seul ; la suite se chiffre après la restitution.",
  url: 'https://www.master-ia.fr/audit-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-ia#webpage' },
  serviceType: "Audit de maturité et de conformité IA",
  category: "Conseil en intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Directions générales, DSI, directions métier · PME, ETI et groupes',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Audit de maturité et d'opportunité", description: "Processus examinés, usages recensés, cas d'usage classés selon leur valeur et leur difficulté, trajectoire chiffrée." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit de conformité (RGPD, AI Act)', description: "Liste des systèmes d'IA utilisés, risque de chacun, manquements constatés et corrections proposées." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restitution et feuille de route', description: "Trois actions à engager dans les 90 jours, projets écartés avec leur motif, séance devant la direction." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les six étapes de l'audit IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/audit-ia#article',
  headline: "Audit IA : un constat complet, puis un plan d'action chiffré",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-ia#webpage' },
  about: ['Audit IA', 'Audit de maturité IA', 'Audit de conformité IA', 'Feuille de route IA', 'Conseil en intelligence artificielle'],
}

const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/audit-ia#lexique',
  name: "Lexique de l'audit IA",
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Audit IA', description: "Examen par un tiers des usages, des données, des outils, des compétences et des risques liés à l'intelligence artificielle dans une organisation, conclu par une feuille de route classée par priorité." },
    { '@type': 'DefinedTerm', name: 'Cartographie des usages IA', description: "Relevé des usages de l'IA dans les équipes, déclarés ou non, outil par outil et donnée par donnée ; l'audit s'appuie sur ce relevé." },
    { '@type': 'DefinedTerm', name: 'Shadow IA', description: "Outils d'IA adoptés hors de tout cadre : comptes personnels, versions gratuites, données de l'entreprise saisies sans accord. L'audit les fait apparaître sans sanction et propose une solution encadrée." },
    { '@type': 'DefinedTerm', name: 'Gouvernance IA', description: "Règles, rôles et instances qui encadrent l'usage de l'IA : charte, responsables des assistants, revue périodique, conformité à l'AI Act." },
    { '@type': 'DefinedTerm', name: "Maîtrise de l'IA (article 4)", description: "Exigence de l'AI Act en vigueur depuis février 2025, transformée en 2026 en obligation de moyens : fournisseurs et déployeurs soutiennent, par des mesures adaptées, la montée en compétence des personnes qui se servent des systèmes pour leur compte." },
    { '@type': 'DefinedTerm', name: 'Feuille de route IA', description: "Dernière pièce de l'audit : les actions classées par valeur et par effort, chacune avec ses prérequis (données, licences, formation), son porteur et son échéance." },
  ],
}

/* Sources de la page : WebPage.citation (JSON-LD) et bloc de sources visible. */
const PAGE_CITATIONS = [
  { name: "AI Act : texte du règlement (UE) 2024/1689 publié sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Omnibus numérique sur l'IA : règlement (UE) 2026/1744, qui décale une partie du calendrier", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Fiche ISO de la norme ISO/IEC 42001:2023 (management de l'IA)", url: 'https://www.iso.org/fr/standard/81230.html' },
  { name: "CNIL : ses publications sur l'IA et les données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Humlum et Vestergaard (NBER, document de travail 33777) : l'IA générative et le temps de travail au Danemark", url: 'https://www.nber.org/papers/w33777' },
]

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

export default function AuditIAPage() {
  const isDesktop = useIsDesktop()
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
        dateModified={DATE_MODIFIED}
        speakable={['#definition', '#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd, termsJsonLd]}
      />

      {/* ── HERO sombre ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Audit IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Mission de conseil · Audit IA d'entreprise
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 860 }}>
            Audit IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un constat complet, puis un plan d'action chiffré</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui conduit les audits du cabinet · Première version en août 2026, texte revu le 7 octobre 2026
          </p>

          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 760 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              Un audit IA d'entreprise relève ce que l'intelligence artificielle fait déjà, et pourrait faire, dans une organisation : usages des équipes, données disponibles, logiciels, compétences, exposition aux textes européens (RGPD, AI Act). Un regard extérieur évalue ces éléments puis les traduit en feuille de route classée par priorité. Le diagnostic, plus court, s'arrête aux priorités ; le test de maturité se remplit seul, sans auditeur.
            </p>
          </div>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Chez Masteria, l'audit IA examine votre organisation sous cinq angles : processus et usages, données, outils, organisation et compétences, respect du RGPD et du règlement européen sur l'IA. Il se conclut par <strong style={{ color: '#fff', fontWeight: 700 }}>un rapport de maturité et une feuille de route chiffrée</strong>, où figurent aussi les projets à ne pas lancer. Le devis couvre l'audit et sa restitution ; la suite se chiffre ensuite, si vous la voulez.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une direction le commande en général à un moment précis : plusieurs initiatives IA coexistent, un budget doit être arbitré, un client demande des garanties. L'audit pose alors un constat écrit et daté, que vous pouvez défendre devant un comité de direction ou un conseil d'administration. Si un diagnostic plus court répond à votre question, vous l'entendrez dès le premier échange.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le dossier remis
            </a>
          </div>

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

          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'audit en sept lignes</div>
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

      {/* ── LES TROIS AUDITS ── */}
      <section id="types" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Trois missions, un même nom</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quel audit IA vous faut-il ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Trois missions portent ce nom : l'audit de maturité et d'opportunité, l'audit de conformité, l'audit algorithmique. Leur objet diffère, leur livrable aussi. Un prestataire sérieux vous demande d'abord laquelle vous attendez ; chez Masteria, cette question ouvre chaque cadrage.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La plupart des directions veulent les deux premières ensemble : savoir où elles en sont et quoi automatiser, en traitant le volet réglementaire au fil de l'examen. C'est le périmètre par défaut de notre audit. Le cadre légal, les normes et les repères de prix publics sont détaillés dans notre <Link to="/blog/audit-ia-entreprise-methode-prix" style={aStyle}>guide complet de l'audit IA</Link>. La question réglementaire seule a sa mission, l'<Link to="/audit-conformite-ai-act" style={aStyle}>audit de conformité IA</Link> ; les associations et établissements du secteur trouveront leur version sur la page <Link to="/audit-ia-medico-social" style={aStyle}>audit IA médico-social</Link>.
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
                Une quatrième acception circule : mesurer si ChatGPT ou Perplexity citent votre marque dans leurs réponses. Elle relève du marketing et dispose de sa propre mission, l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEST, DIAGNOSTIC OU AUDIT (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Test, diagnostic ou audit</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Trois formats, du plus léger au plus approfondi : lequel correspond à votre situation ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>En trois minutes et sans frais, le test de maturité IA vous classe parmi quatre profils. Le diagnostic IA, intervention courte, choisit les premiers cas d'usage. L'audit IA passe en revue maturité, données, conformité et trajectoire, sur plusieurs semaines. Pendant le cadrage, dont les 30 minutes sont offertes, nous vous orientons vers le format qui suffit, même s'il coûte moins cher.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Test de maturité IA, diagnostic IA et audit IA comparés critère par critère" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
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
            Pour une première photographie, faites le <Link to="/test-maturite-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>test de maturité IA</Link> ; pour savoir par où commencer, demandez un <Link to="/diagnostic-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>diagnostic IA</Link>. Une partie de nos audits démarre sur un périmètre que le diagnostic a fait apparaître. Un cas d'usage déjà choisi se valide par un prototype, qui relève du développement et se chiffre à part.
          </p>
        </div>
      </section>

      {/* ── LES CINQ ANGLES D'EXAMEN ── */}
      <section id="dimensions" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que l'audit examine</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que couvre un audit IA d'entreprise ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>L'examen porte sur cinq angles : les processus et les usages (outils adoptés sans l'accord de la DSI compris), les données, les outils et l'architecture, l'organisation et les compétences, le respect des deux textes européens qui comptent ici, RGPD et AI Act. Pour chacun, le rapport donne une note, la justifie et propose des actions.</strong>
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
            <div style={{ ...cardStyle, padding: 28, background: '#0A0F1E', border: '1px solid #1E293B' }}>
              <div style={{ marginBottom: 16 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Landmark size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                </div>
              </div>
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>La loi ne vous oblige pas à cet audit</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Dans la majorité des usages classés à haut risque, une évaluation interne documentée suffit, et l'échéance tombe en décembre 2027 pour l'annexe III, en août 2028 pour l'annexe I. Nous auditons pour éclairer une décision ; aucune obligation imaginaire ne sert d'argument de vente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAR TAILLE D'ENTREPRISE ── */}
      <section id="tailles" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Selon la taille de l'organisation</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Audit IA pour entreprises de toute taille : PME, ETI, groupe
          </h2>
          <p style={answerStyle}>
            <strong>La grille reste la même d'une PME de quarante salariés à un groupe de dix filiales ; le nombre de processus examinés et la profondeur changent.</strong> Le périmètre se décide pendant le cadrage, il est écrit dans le devis et c'est lui qui fixe le forfait.
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

      {/* ── REPÈRES DATÉS ── */}
      <section id="reperes" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Repères au 7 octobre 2026</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quatre dates et un chiffre pour situer votre audit
          </h2>
          <p style={{ ...answerStyle }}>
            <strong>Les obligations de l'AI Act arrivent à des dates différentes selon l'usage, et les gains mesurés par les études sérieuses restent modestes à l'échelle d'un salarié. L'audit replace ces deux constats dans votre organisation, service par service.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))', gap: 20, marginTop: 12 }}>
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
            Les références complètes sont listées en bas de page. Notre page <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link> réunit une vingtaine de mesures de productivité, chacune présentée avec sa méthode et sa période de collecte.
          </p>
        </div>
      </section>

      {/* ── LES SIX ÉTAPES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Déroulé de la mission</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six étapes, du cadrage à la restitution
          </h2>

          <p style={answerStyle}>
            <strong>Cadrage, inventaire, entretiens métier, état des données, qualification des risques, feuille de route : chaque étape alimente une partie du rapport. Les référentiels appliqués (ISO/IEC 42001 et 23894, cadre du NIST, RGPD, AI Act) figurent dans le devis, avec leur version.</strong>
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

      {/* ── LE DOSSIER REMIS ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que contient le dossier remis à la direction
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six pièces composent le livrable : le rapport de maturité par dimension, les cas d'usage classés, la feuille de route chiffrée (porteur, budget et échéance de chaque action), le plan de mise en conformité, la liste des projets écartés avec leur motif, le support de restitution. L'ensemble se lit et s'exécute sans nous.</strong>
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

      {/* ── GARDE-FOUS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Nos engagements</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Nous auditons et nous construisons : le conflit d'intérêts est encadré par écrit
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Masteria audite, construit des outils et forme des équipes. Un cabinet qui vend aussi la réalisation a intérêt à trouver du travail dans son propre rapport ; nous le reconnaissons, et le contrat l'encadre. Exigez ces quatre engagements de tout prestataire, nous compris.
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

      {/* ── PRIX ET FINANCEMENT ── */}
      <section id="prix" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Prix et financement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Combien coûte un audit IA, et qui peut le financer ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>L'audit se facture au forfait, dès que le cadrage a délimité ce qu'il faut examiner. Un audit resserré sur une PME commence à quelques milliers d'euros ; une organisation de plusieurs entités ou pays atteint plusieurs dizaines de milliers d'euros, sans plafond fixé d'avance. Chaque ligne du devis se justifie par le périmètre.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Building2 size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce qui fait le prix</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Quatre paramètres : le nombre d'entités, de processus et de systèmes, et la profondeur du volet conformité. Aucun pack ne se vend sans cadrage. Seul l'audit figure au devis : former les équipes, construire un outil ou installer une gouvernance se chiffre après la restitution, à partir des priorités du rapport, et seulement si vous le demandez.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Financer l'audit</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Une mission de conseil comme celle-ci se paie sur le budget de l'entreprise : elle n'est pas finançable par votre OPCO, réservé à la formation. Certaines aides publiques au conseil, selon l'effectif, l'activité ou la région, peuvent en revanche s'appliquer : le cadrage le vérifie. Une formation décidée après la restitution peut être prise en charge par l'OPCO de la branche, dans la limite de son règlement et de son budget.
              </p>
            </div>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour situer l'audit dans le budget d'ensemble d'une démarche IA, développement compris, lisez nos repères sur le <Link to="/prix-projet-ia" style={aStyle}>prix d'un projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (texte propre à la page) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux missions où le constat écrit a précédé la décision
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Un diagnostic par flux de travail dans une PME, un cadrage des pratiques de rédaction dans un cabinet de conseil : dans les deux cas, l'état des lieux est venu avant tout outil. Nos clients restent anonymes, et ce qui n'a pas encore eu lieu s'écrit au futur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
              <article key={id} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
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
                  Le récit complet de la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Audit IA : les réponses aux questions des directions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre situation sort de ces cas ? Décrivez-la par écrit, ou gardez la question pour le cadrage.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrire à l'auditeur
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
            Les pages liées à l'audit IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            L'audit compte parmi les missions de notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en IA</Link>, qui cadre, construit et forme ; la <Link to="/formation-intelligence-artificielle" style={aStyle}>formation des équipes</Link> se décide souvent après la restitution.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Format court', desc: "La porte d'entrée la plus rapide : priorités et premières actions, avant un audit ciblé si le besoin se confirme." },
              { label: "Guide complet de l'audit IA", href: '/blog/audit-ia-entreprise-methode-prix', tag: 'Guide', desc: "Les trois familles d'audit, le cadre légal, les normes publiées et les repères de prix, en version longue." },
              { label: "Stratégie IA d'entreprise : le guide", href: '/blog/strategie-ia-entreprise-guide', tag: 'Guide', desc: "Le contenu d'une stratégie IA, une méthode en cinq étapes et les chiffres à connaître avant de la rédiger." },
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Conseil', desc: "Quand la direction veut transformer la feuille de route en trajectoire d'entreprise, arbitrée en comité exécutif." },
              { label: 'Audit de conformité IA', href: '/audit-conformite-ai-act', tag: 'Conformité', desc: "La mission consacrée à la question réglementaire : RGPD, AI Act, écarts classés et plan daté." },
              { label: 'Audit IA médico-social', href: '/audit-ia-medico-social', tag: 'Secteur', desc: "La version pour associations et établissements : données d'usagers, dossier informatisé, hébergement HDS, financeurs." },
              { label: "Auditabilité d'un système d'IA", href: '/blog/auditabilite-systeme-ia', tag: 'Guide', desc: "Journaux, documentation, supervision humaine : les preuves à pouvoir produire sur un système d'IA." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Gouvernance', desc: "Faire vivre le plan de conformité : comité, charte, règles RGPD et AI Act, revue périodique." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Souvent le premier document rédigé après un audit : ce que les équipes ont le droit de faire avec l'IA." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les ordres de grandeur de la suite : prototype, agent, outil développé sur mesure." },
              { label: "Méthode et modèles d'engagement", href: '/methode-projet-ia', tag: 'Méthode', desc: "Forfait, régie, accompagnement : les formats de travail proposés une fois le rapport rendu." },
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
                    Ouvrir la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUI CONDUIT L'AUDIT ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les auditeurs</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un fondateur qui conduit chaque audit, une équipe composée selon le périmètre
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Mathias Nizan dirige chaque audit. Selon ce qu'il faut examiner, il fait appel aux consultants IA du réseau (une dizaine), à des développeurs (cinq environ) quand l'architecture doit être lue de près, et à des formateurs (une vingtaine) pour évaluer les compétences des équipes. Tous sont indépendants. Masteria n'est lié à aucun éditeur, si bien que l'outil recommandé dépend de vos contraintes. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent des missions datées.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['≈ 10', 'consultants IA dans le réseau'],
                ['≈ 5', 'développeurs pour lire une architecture'],
                ['≈ 20', 'formateurs pour évaluer les compétences'],
                ['Aucun', "lien commercial avec un éditeur d'IA"],
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

      {/* ── SIGNATURE (remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            En 2022, à Lyon, Mathias Nizan lançait Masteria ; il répond lui-même de chaque rapport d'audit remis à une direction. Relue par lui le 7 octobre 2026, cette page renvoie à <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link> pour son parcours.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Cadrons votre audit IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous combien de salariés et de filiales compte votre structure, et ce qui motive la demande. En 30 minutes, nous nommons l'audit adapté, délimitons le périmètre et repérons les aides possibles. Si un audit n'a pas d'utilité pour vous, vous le saurez à ce moment-là.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Audits menés depuis Lyon, en France comme en Europe, en Inde ou aux États-Unis · devis limité à l'audit et à sa restitution
            </p>
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
