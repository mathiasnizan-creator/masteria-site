import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Scale, Search, ShieldCheck, FileText, ListChecks, XCircle, Presentation,
  Calendar, MapPin, Check, Landmark, Building2, Ban, GraduationCap, Eye, Lock, ClipboardList, Gauge,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import CaseStudyCards from '../components/CaseStudyCards'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page de conversion — mission « Audit de conformité IA » (slug /audit-conformite-ai-act).
 * Cible les requêtes « audit de conformité ia » (50/mois), « audit ia act » (30/mois),
 * « audit conformité ia » : intention juridique, distincte de /audit-ia (maturité +
 * opportunité) et de /gouvernance-ia (dispositif dans la durée). Répartition arrêtée
 * le 2026-09-03 (cluster audit IA) : une requête = une page.
 *
 * INTÉGRITÉ (alignée sur /audit-ia et le guide blog, ne pas dévier) :
 * - Calendrier post-Omnibus (règlement (UE) 2026/1744 du 8 juillet 2026) : haut risque
 *   annexe III reporté au 2 décembre 2027, annexe I au 2 août 2028. Applicables
 *   aujourd'hui : pratiques interdites et littératie (2 février 2025), modèles GPAI
 *   (2 août 2025), transparence art. 50 (2 août 2026).
 * - Le règlement n'impose PAS d'audit externe à la majorité des systèmes à haut risque
 *   (contrôle interne, annexe VI). AUCUNE conformité AI Act certifiable (pas de norme
 *   harmonisée citée au JOUE à l'été 2026). Masteria ne certifie rien et ne donne pas
 *   d'avis juridique : elle objective et prépare.
 * - Conseil non finançable par votre OPCO ; jamais nommer un dispositif public concurrent.
 */

const SLUG = 'audit-conformite-ai-act'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit de conformité IA : RGPD et AI Act, écarts et plan daté | Masteria"
const META_DESC = "Audit de conformité IA : inventaire des systèmes, qualification par niveau de risque AI Act, écarts RGPD, obligations déjà applicables et plan de mise en conformité daté. Cadrage gratuit."
const KEYWORDS = "audit de conformité ia, audit ia act, audit conformité ia, audit ai act, conformité ai act entreprise, audit rgpd ia, mise en conformité ia"

/* ───────── Styles partagés (calque /audit-ia) ───────── */

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
  { icon: FileText, label: 'Plan de mise en conformité daté' },
  { icon: ShieldCheck, label: 'Aucune certification promise' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Inventaire des systèmes d'IA en service, qualification par niveau de risque, écarts RGPD et AI Act, plan de mise en conformité" },
  { label: 'Cadre', value: "Règlement (UE) 2024/1689 tel que modifié par le règlement (UE) 2026/1744 ; RGPD ; recommandations de la CNIL sur l'IA" },
  { label: 'Applicable', value: "Aujourd'hui : pratiques interdites, littératie IA, transparence. Haut risque : 2 décembre 2027 (annexe III) et 2 août 2028 (annexe I)" },
  { label: 'Livrable', value: "Registre des systèmes, matrice de risque, écarts hiérarchisés, plan daté avec porteur, kit documentaire, restitution en direction" },
  { label: 'Ce que nous ne faisons pas', value: "Certifier une conformité (rien n'est certifiable au titre du règlement IA à ce jour) ni rendre un avis juridique" },
  { label: 'Prix', value: "Forfait fixé après un cadrage gratuit qui délimite le périmètre : entités, systèmes, traitements" },
]

/* ───────── Ce que la loi impose aujourd'hui / demain (cartes) ───────── */

const OBLIGATIONS = [
  {
    id: 'pratiques-interdites',
    icon: Ban,
    title: 'Pratiques interdites',
    quand: 'Applicable depuis le 2 février 2025',
    desc: "Notation sociale, manipulation subliminale, reconnaissance des émotions au travail et dans l'enseignement, identification biométrique à distance hors exceptions. L'audit vérifie qu'aucun usage en service, même expérimental, ne relève de l'article 5.",
  },
  {
    id: 'litteratie',
    icon: GraduationCap,
    title: 'Littératie IA',
    quand: 'Applicable depuis le 2 février 2025',
    desc: "L'article 4 demande à toute organisation qui utilise des systèmes d'IA d'assurer un niveau suffisant de maîtrise à son personnel et à ses prestataires. L'audit mesure la couverture réelle : qui utilise quoi, qui a été formé, ce qui est documenté.",
  },
  {
    id: 'transparence',
    icon: Eye,
    title: 'Transparence',
    quand: 'Applicable depuis le 2 août 2026',
    desc: "Un agent conversationnel s'annonce comme tel, un contenu généré ou manipulé diffusé au public se signale (article 50). Le marquage lisible par machine est toléré jusqu'au 2 décembre 2026. L'audit passe en revue vos chatbots, vos contenus publiés et vos processus éditoriaux.",
  },
  {
    id: 'haut-risque',
    icon: Scale,
    title: 'Systèmes à haut risque',
    quand: 'Reporté au 2 décembre 2027 et au 2 août 2028',
    desc: "Tri de candidatures, évaluation de salariés, scoring de crédit, accès à des services essentiels : les usages de l'annexe III. Les obligations sont reportées, pas supprimées. L'audit les identifie maintenant, pour que la documentation, la supervision humaine et la journalisation soient en place à l'échéance.",
  },
]

/* ───────── Conformité vs maturité vs gouvernance (tableau citable) ───────── */

const COMPARATIF = [
  {
    critere: 'Question posée',
    maturite: "Où en sommes-nous, que peut-on automatiser, dans quel ordre ?",
    conformite: "Sommes-nous en règle, et que devons-nous corriger avant quelle date ?",
    gouvernance: "Comment rester en règle dans la durée, avec quelles instances ?",
  },
  {
    critere: 'Objet',
    maturite: "Processus, données, outils, organisation, opportunités",
    conformite: "Systèmes d'IA en service, traitements de données, obligations applicables",
    gouvernance: "Charte, comité, registre vivant, procédure de validation des usages",
  },
  {
    critere: 'Livrable',
    maturite: "Rapport de maturité et feuille de route chiffrée",
    conformite: "Registre, matrice de risque, écarts hiérarchisés, plan de mise en conformité daté",
    gouvernance: "Dispositif installé et documents d'usage",
  },
  {
    critere: 'Durée',
    maturite: "De quelques jours à quelques semaines",
    conformite: "De quelques jours à quelques semaines, selon le nombre de systèmes",
    gouvernance: "Plusieurs mois, par paliers",
  },
  {
    critere: 'Quand la choisir',
    maturite: "Avant d'investir, pour prioriser",
    conformite: "Avant un contrôle, un appel d'offres, une échéance réglementaire, ou après une alerte interne",
    gouvernance: "Après l'audit, pour tenir le cap",
  },
]

/* ───────── Ce que l'audit vérifie (6 chantiers) ───────── */

const CHANTIERS = [
  {
    icon: Search,
    title: "Inventaire des systèmes d'IA",
    desc: "Tout ce qui est en service : outils souscrits par la DSI, fonctions IA activées dans vos logiciels métier et vos suites bureautiques, comptes personnels utilisés par les équipes. Sans inventaire, aucune qualification n'est possible, et l'inventaire réserve toujours des surprises.",
  },
  {
    icon: Gauge,
    title: 'Qualification par niveau de risque',
    desc: "Chaque usage est classé selon les quatre niveaux du règlement : interdit, haut risque, risque limité, risque minimal. La qualification tient à l'usage, pas à l'outil : le même assistant est à risque minimal pour rédiger un courrier et à haut risque pour trier des candidatures.",
  },
  {
    icon: Lock,
    title: 'Écarts RGPD',
    desc: "Base légale, information des personnes, sous-traitance et transferts, durées de conservation, décisions automatisées de l'article 22, analyse d'impact quand elle est requise. En 2026, les contrôles de la CNIL viennent de là, pas du règlement IA.",
  },
  {
    icon: GraduationCap,
    title: 'Littératie et supervision humaine',
    desc: "Qui a été formé, sur quoi, avec quelle trace. Qui supervise les sorties des systèmes, avec quel pouvoir de les écarter. L'article 4 s'applique déjà ; l'article 14 sur la supervision humaine s'appliquera aux systèmes à haut risque.",
  },
  {
    icon: Eye,
    title: 'Transparence et contenus générés',
    desc: "Chatbots publics, contenus marketing, images et vidéos générées, courriers automatisés : ce qui doit être annoncé, marqué ou signalé au titre de l'article 50, et ce qui est effectivement fait dans vos processus de publication.",
  },
  {
    icon: ClipboardList,
    title: 'Documentation et traçabilité',
    desc: "Ce que vous pouvez produire aujourd'hui si on vous le demande : documentation des systèmes, journaux, contrats fournisseurs, politique d'usage. C'est le socle de l'auditabilité, exigée demain pour le haut risque et utile dès maintenant pour tout litige.",
  },
]

/* ───────── La méthode en 6 temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Entités, systèmes et traitements dans le périmètre, ce qui motive la demande (contrôle, appel d'offres, alerte interne, échéance), format attendu par la direction et par le DPO. Échange gratuit, qui fixe le devis.",
  },
  {
    num: '02',
    title: 'Inventaire',
    desc: "Recensement des systèmes d'IA en service, y compris les fonctions activées dans vos logiciels existants et les usages nés hors de tout cadre. Questionnaire aux responsables, puis vérification sur les postes et les contrats.",
  },
  {
    num: '03',
    title: 'Qualification',
    desc: "Pour chaque système : rôle de votre organisation (fournisseur, déployeur, importateur), niveau de risque, données traitées, décisions produites. Les usages à haut risque ressortent avec leur échéance et leurs obligations futures.",
  },
  {
    num: '04',
    title: 'Contrôle des obligations applicables',
    desc: "Pratiques interdites, littératie, transparence, RGPD : point par point, ce qui est fait, ce qui est documenté, ce qui manque. Chaque écart reçoit un niveau de gravité et un délai de correction raisonnable.",
  },
  {
    num: '05',
    title: 'Revue des fournisseurs',
    desc: "Clauses contractuelles, hébergement, réutilisation de vos données pour l'entraînement, journaux disponibles, engagements de conformité des éditeurs. Une part des écarts se règle par un avenant ou un changement de plan, pas par un projet interne.",
  },
  {
    num: '06',
    title: 'Plan de mise en conformité et restitution',
    desc: "Actions datées, avec un porteur nommé et un ordre de traitement : ce qui se corrige sous trente jours, ce qui se prépare pour 2027, ce qui relève de votre conseil juridique. Restitution en direction, avec le DPO et la DSI.",
  },
]

/* ───────── Le livrable (6 cartes) ───────── */

const LIVRABLE = [
  {
    icon: ListChecks,
    title: "Un registre des systèmes d'IA",
    desc: "Chaque système en service avec son usage, ses données, son fournisseur, son niveau de risque et votre rôle réglementaire. Le registre reste à vous et se met à jour à chaque nouvel usage : c'est la pièce que tout le reste suppose.",
  },
  {
    icon: Gauge,
    title: 'Une matrice de risque',
    desc: "Les usages positionnés par niveau de risque au sens du règlement et par exposition RGPD, avec les échéances qui s'y attachent. Une lecture d'une page pour la direction, argumentée en annexe pour le DPO.",
  },
  {
    icon: XCircle,
    title: 'Les écarts, hiérarchisés',
    desc: "Chaque écart constaté avec sa gravité, l'obligation concernée, l'article cité, la preuve attendue et le délai de correction. Aucun écart inventé pour vendre la suite : les points conformes sont écrits comme tels.",
  },
  {
    icon: FileText,
    title: 'Un plan de mise en conformité daté',
    desc: "Par action : un porteur, une échéance, une condition de réussite. Trois horizons : les corrections immédiates, la préparation des échéances 2027 et 2028, et les points à porter à votre conseil juridique.",
  },
  {
    icon: ClipboardList,
    title: 'Un kit documentaire',
    desc: "Trames prêtes à adapter : mentions de transparence pour vos chatbots et contenus, procédure de validation d'un nouvel usage, fiche de supervision humaine, attestation de littératie. De quoi produire une preuve quand on vous la demande.",
  },
  {
    icon: Presentation,
    title: 'Une restitution en direction',
    desc: "Le rapport se présente et se discute avec la direction, le DPO et la DSI. La séance sert à arbitrer : ce qu'on corrige, ce qu'on arrête, ce qu'on assume en connaissance de cause. Le support fait partie du livrable.",
  },
]

/* ───────── Garde-fous ───────── */

const GARDE_FOUS = [
  "Aucune certification promise : rien n'est certifiable au titre du règlement IA à ce jour, et nous vous l'écrivons",
  "Aucune obligation inventée : le rapport cite l'article et la date d'application de chaque point relevé",
  "Pas d'avis juridique : sur les questions d'interprétation, nous travaillons avec votre conseil, jamais à sa place",
  "Le plan est exécutable par votre DPO, votre DSI ou un autre prestataire : il ne dépend pas de nous",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit de conformité IA ?",
    a: "C'est la vérification de la situation de votre organisation au regard des textes qui encadrent l'intelligence artificielle : le règlement européen sur l'IA, le RGPD et les recommandations de la CNIL. La mission inventorie les systèmes d'IA en service, qualifie chacun par niveau de risque, contrôle les obligations déjà applicables, relève les écarts et produit un plan de mise en conformité daté. Elle se distingue de l'audit de maturité, qui cherche les opportunités, et de la gouvernance, qui installe un dispositif dans la durée.",
  },
  {
    q: "L'AI Act oblige-t-il mon entreprise à faire un audit ?",
    a: "Non. Le règlement n'impose pas d'audit externe à la plupart des systèmes à haut risque : il prévoit une évaluation de conformité par contrôle interne, documentée par l'entreprise elle-même. Ces obligations sont en outre reportées au 2 décembre 2027 pour l'annexe III et au 2 août 2028 pour l'annexe I, depuis le règlement (UE) 2026/1744 du 8 juillet 2026. Ce qui s'applique déjà : les pratiques interdites et la littératie IA depuis le 2 février 2025, la transparence de l'article 50 depuis le 2 août 2026. Un audit objective votre situation face à ces obligations ; la loi ne l'exige pas et nous ne vous dirons jamais le contraire.",
  },
  {
    q: "Quelles obligations s'appliquent vraiment à une PME qui utilise ChatGPT ou Copilot ?",
    a: "L'usage bureautique, rédiger un courrier, résumer un document, préparer un tableau, relève du risque minimal : aucune obligation spécifique du règlement IA, en dehors de la littératie de l'article 4 et du RGPD pour les données personnelles saisies. Le risque monte avec l'usage : trier des candidatures ou évaluer des salariés avec le même outil relève du haut risque. L'audit sert précisément à repérer ces usages, souvent nés dans les équipes sans que la direction le sache.",
  },
  {
    q: "Pouvez-vous certifier notre conformité au règlement IA ?",
    a: "Non, et personne ne le peut à ce jour : aucune norme harmonisée n'a été citée au Journal officiel de l'Union européenne au titre du règlement IA, la présomption de conformité n'existe donc pas encore. La seule certification disponible dans le domaine est ISO/IEC 42001, sur le système de management de l'IA, délivrée par un organisme accrédité, distinct du cabinet qui vous conseille. Nous vous préparons à cette certification si c'est votre objectif, et nous vous disons quand elle ne vous servirait à rien.",
  },
  {
    q: "Quelle différence entre cet audit et un audit RGPD ?",
    a: "L'audit RGPD porte sur les traitements de données personnelles, quel que soit l'outil. L'audit de conformité IA porte sur les systèmes d'IA, quelle que soit la donnée, et croise les deux cadres : un même usage peut être conforme au RGPD et relever du haut risque au sens du règlement IA, ou l'inverse. En pratique, les écarts les plus fréquents en 2026 sont des écarts RGPD révélés par l'usage de l'IA : données saisies dans un outil grand public, absence d'information des personnes, sous-traitant hors contrat. Nous les traitons ensemble, avec votre DPO.",
  },
  {
    q: "Que risque-t-on en cas de manquement ?",
    a: "Le règlement IA prévoit des amendes administratives pouvant atteindre 35 millions d'euros ou 7 % du chiffre d'affaires mondial pour les pratiques interdites, et 15 millions d'euros ou 3 % pour les autres obligations, avec des plafonds adaptés pour les PME. Ces montants sont des maximums légaux, pas des prévisions. Le risque immédiat pour une entreprise française est ailleurs : un contrôle de la CNIL sur les données, une clause de conformité dans un appel d'offres, une question d'un client grand compte à laquelle personne ne sait répondre.",
  },
  {
    q: "Combien de temps dure la mission, et qui doit y participer ?",
    a: "De quelques jours à quelques semaines selon le nombre d'entités et de systèmes. Côté entreprise : un sponsor de direction, le DPO ou la personne qui en tient le rôle, un référent DSI, et les responsables des services qui utilisent l'IA. Les entretiens et la restitution se tiennent sur site ou à distance, sans effet sur le livrable. Masteria est basée à Lyon et intervient en France, en Suisse et en Belgique.",
  },
  {
    q: "L'audit de conformité peut-il être financé ?",
    a: "Le conseil n'est pas finançable par votre OPCO, qui couvre la formation. Selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil peuvent s'appliquer : nous faisons le point au cadrage. Le volet formation qui suit souvent l'audit, la littératie IA de l'article 4 notamment, est finançable par votre OPCO : Masteria est certifiée Qualiopi.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit de conformité IA — Masteria',
  alternateName: "Audit AI Act et RGPD des systèmes d'intelligence artificielle",
  description: "Audit de conformité IA : inventaire des systèmes d'IA en service, qualification par niveau de risque au sens du règlement européen sur l'IA, contrôle des obligations applicables (pratiques interdites, littératie, transparence, RGPD), écarts hiérarchisés et plan de mise en conformité daté. Aucune certification promise.",
  url: `https://www.master-ia.fr/${SLUG}`,
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  serviceType: 'Audit de conformité IA (AI Act et RGPD)',
  category: 'Conseil en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Directions générales, DPO, DSI, directions juridiques et RH · PME, ETI, grands groupes, secteur public',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit de conformité IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Inventaire et qualification des systèmes d'IA", description: "Registre des systèmes en service et classement par niveau de risque au sens du règlement (UE) 2024/1689." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contrôle des obligations applicables', description: "Pratiques interdites, littératie IA, transparence, RGPD : écarts constatés, gravité, article cité, délai de correction." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan de mise en conformité et restitution', description: "Actions datées avec porteur, kit documentaire, restitution en direction avec le DPO et la DSI." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Méthode de l'audit de conformité IA Masteria",
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
  '@id': `https://www.master-ia.fr/${SLUG}#article`,
  headline: "Audit de conformité IA : ce que la loi impose déjà, ce qui arrive en 2027, et le plan pour y être",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  about: ['Audit de conformité IA', 'AI Act', 'RGPD', "Règlement européen sur l'intelligence artificielle", 'Conseil en intelligence artificielle'],
}

const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `https://www.master-ia.fr/${SLUG}#lexique`,
  name: "Lexique de la conformité IA",
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Audit de conformité IA', description: "Vérification de la situation d'une organisation au regard du règlement européen sur l'IA et du RGPD : inventaire des systèmes, qualification par niveau de risque, écarts et plan de mise en conformité daté." },
    { '@type': 'DefinedTerm', name: 'Déployeur', description: "Au sens du règlement (UE) 2024/1689, toute organisation qui utilise un système d'IA sous sa propre autorité dans le cadre d'une activité professionnelle. La plupart des entreprises sont déployeurs, pas fournisseurs." },
    { '@type': 'DefinedTerm', name: 'Système à haut risque', description: "Système d'IA relevant de l'annexe I (produits réglementés) ou de l'annexe III (emploi, éducation, crédit, services essentiels, justice notamment). Obligations applicables à partir du 2 décembre 2027 et du 2 août 2028." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Niveau de compréhension et de maîtrise de l'IA que l'article 4 du règlement demande aux organisations d'assurer à leur personnel et à leurs prestataires, applicable depuis le 2 février 2025." },
    { '@type': 'DefinedTerm', name: 'Contrôle interne (annexe VI)', description: "Procédure d'évaluation de la conformité prévue pour la plupart des systèmes à haut risque de l'annexe III : l'organisation évalue et documente elle-même sa conformité, sans organisme notifié." },
    { '@type': 'DefinedTerm', name: 'Registre des systèmes d\'IA', description: "Inventaire tenu par l'organisation de chaque système d'IA en service, avec son usage, ses données, son fournisseur, son niveau de risque et le rôle réglementaire de l'organisation." },
  ],
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

const PAGE_CITATIONS = [
  { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2016/679 (RGPD)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679' },
  { name: "CNIL — Intelligence artificielle : recommandations et fiches pratiques", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "ISO/IEC 42001:2023 — Système de management de l'intelligence artificielle", url: 'https://www.iso.org/fr/standard/81230.html' },
]

export default function AuditConformiteAIActPage() {
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
    { name: 'Audit IA', slug: 'audit-ia' },
    { name: 'Audit de conformité IA', slug: SLUG },
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
        datePublished="2026-09-03"
        dateModified="2026-09-03"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd, termsJsonLd]}
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/audit-ia" style={{ color: '#94A3B8' }}>Audit IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Audit de conformité IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Mission de conseil · Audit de conformité IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Audit de conformité IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>RGPD et AI Act, les écarts réels et le plan pour les corriger</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit de conformité IA de Masteria inventorie les systèmes d'intelligence artificielle en service dans votre organisation, les qualifie par niveau de risque au sens du règlement européen, contrôle les obligations déjà applicables et vos traitements RGPD, puis livre <strong style={{ color: '#fff', fontWeight: 700 }}>les écarts hiérarchisés et un plan de mise en conformité daté</strong>. Sans certification promise, puisque rien n'est certifiable au titre du règlement IA à ce jour.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Trois obligations s'appliquent déjà : pratiques interdites et littératie IA depuis le 2 février 2025, transparence depuis le 2 août 2026. Les obligations sur les systèmes à haut risque sont reportées à décembre 2027 et août 2028. La mission sépare ce qui doit être corrigé maintenant de ce qui se prépare, et le dit dans cet ordre.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre audit de conformité
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le livrable
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
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

      {/* ── CE QUE LA LOI IMPOSE (éditorial asymétrique) ── */}
      <section id="obligations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le calendrier réel</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que vérifie un audit de conformité IA en 2026 ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Quatre blocs d'obligations, à des dates différentes. Trois s'appliquent déjà : les pratiques interdites et la littératie IA depuis le 2 février 2025, la transparence des contenus et des agents conversationnels depuis le 2 août 2026. Le quatrième, les systèmes à haut risque, est reporté au 2 décembre 2027 et au 2 août 2028 par le règlement (UE) 2026/1744. L'audit contrôle les trois premiers et prépare le quatrième.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le RGPD s'ajoute à ces quatre blocs, et c'est lui qui déclenche les contrôles aujourd'hui : données personnelles saisies dans un outil grand public, absence d'information des personnes, sous-traitant hors contrat. Pour le fond des textes et les normes publiées, lisez notre <Link to="/blog/audit-ia-entreprise-methode-prix" style={aStyle}>guide de l'audit IA</Link>.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {OBLIGATIONS.map((item) => (
                  <div key={item.id} id={item.id} style={{ ...cardStyle, padding: 24, scrollMarginTop: 96 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 13.5, color: c, fontWeight: 600, lineHeight: 1.5, margin: '0 0 8px' }}>{item.quand}</p>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Si votre question est « où en sommes-nous et que pouvons-nous automatiser », c'est un audit de maturité qu'il vous faut : notre <Link to="/audit-ia" style={aStyle}>audit IA d'entreprise</Link> couvre ce périmètre et intègre la conformité au passage. Cette page décrit la mission dédiée, quand la conformité est la question principale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFORMITÉ VS MATURITÉ VS GOUVERNANCE (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conformité, maturité ou gouvernance</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            L'audit de conformité est-il la bonne mission pour vous ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>L'audit de conformité convient quand la question est « sommes-nous en règle » : avant un contrôle, un appel d'offres qui exige des garanties, une échéance réglementaire, ou après une alerte interne. Si la question est « que peut-on faire avec l'IA », c'est l'audit de maturité. Si l'audit est fait et qu'il faut tenir dans la durée, c'est la gouvernance.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre audit de maturité, audit de conformité et mise en place de la gouvernance IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '18%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Audit de maturité</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '30%' }}>Audit de conformité IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Gouvernance de l'IA</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.maturite}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.conformite}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.gouvernance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Les deux autres missions ont leur page : l'<Link to="/audit-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>audit IA de maturité</Link> et la <Link to="/gouvernance-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>gouvernance de l'IA</Link>. Beaucoup d'organisations enchaînent les trois dans cet ordre, sur un an.
          </p>
        </div>
      </section>

      {/* ── CE QUE L'AUDIT VÉRIFIE (6 chantiers) ── */}
      <section id="chantiers" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le périmètre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que contrôle l'audit, point par point ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six chantiers : l'inventaire des systèmes d'IA en service, leur qualification par niveau de risque, les écarts RGPD, la littératie et la supervision humaine, la transparence des contenus générés, et la documentation que vous êtes capable de produire. Chaque chantier ressort avec ses écarts, l'article concerné et un délai de correction.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            {CHANTIERS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, padding: 28, background: '#0A0F1E', border: '1px solid #1E293B', marginTop: 24, display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Ce que la loi n'impose pas</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Aucun audit externe obligatoire pour la plupart des systèmes à haut risque : le règlement prévoit une évaluation par contrôle interne, documentée par l'entreprise. Aucun registre général des systèmes d'IA : l'enregistrement dans la base européenne vise les fournisseurs de systèmes à haut risque et les déployeurs qui sont des autorités publiques. Aucune certification possible à ce jour. Nous auditons pour que vous sachiez où vous en êtes, jamais en agitant une obligation qui n'existe pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE EN 6 TEMPS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>La méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule l'audit de conformité ?
          </h2>

          <p style={answerStyle}>
            <strong>Six temps : cadrage, inventaire, qualification, contrôle des obligations applicables, revue des fournisseurs, puis plan de mise en conformité et restitution. Le DPO et la DSI sont associés du début à la fin. Le référentiel appliqué est nommé dès le devis : règlement (UE) 2024/1689 et ses modifications, RGPD, recommandations de la CNIL, ISO/IEC 42001 quand une certification est visée.</strong>
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
            Avec quoi repartez-vous ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un registre des systèmes d'IA, une matrice de risque, la liste des écarts hiérarchisés avec l'article cité et le délai de correction, un plan de mise en conformité daté avec un porteur par action, un kit documentaire prêt à adapter, et une restitution en direction. Un dossier que votre DPO peut porter seul, ou confier à un autre prestataire.</strong>
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
              <Kicker>Nos garde-fous</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un audit de conformité qui invente des obligations vous coûte deux fois
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le marché de la conformité IA vend beaucoup de peur : questionnaires qui promettent une certification qui n'existe pas, dates d'application déjà périmées, registres obligatoires pour tout le monde. Vous payez l'audit, puis vous payez des corrections inutiles. Nos engagements se vérifient dans le rapport, ligne à ligne.
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
            Combien coûte un audit de conformité IA, et qui peut le financer ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La mission se chiffre au forfait, après un cadrage gratuit qui fixe le périmètre : entités, nombre de systèmes, profondeur du volet RGPD. Pour une organisation de taille moyenne qui utilise des outils du marché, l'ordre de grandeur est une poignée de jours d'expertise. Un devis plus lourd s'explique par un système développé en interne, plusieurs entités ou un usage à haut risque à préparer.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Building2 size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Notre façon de chiffrer</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le nombre de systèmes et de traitements fait le prix, pas la taille de l'entreprise. Une PME de quatre-vingts personnes avec un assistant bureautique et un chatbot public se traite vite ; une ETI qui a développé un outil de scoring interne demande davantage, et cela se lit dans le devis. Nous ne publions pas de fourchette de marché : aucune n'est vérifiable.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Les financements mobilisables</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le conseil n'est pas finançable par votre OPCO, qui couvre la formation. Selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil peuvent s'appliquer : nous faisons le point au cadrage. Le volet formation qui suit l'audit, la littératie IA de l'article 4 en particulier, reste finançable par votre OPCO : Masteria est certifiée Qualiopi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (preuve, méthode en six temps, résultats) ── */}
      <CaseStudyCards
        ids={['photovoltaique', 'industrie']}
        title="Deux missions où le cadre réglementaire a été posé, sans obligation inventée"
        intro="Le positionnement d'une PME au regard du règlement européen, le cadre AI Act et RGPD présenté à un comité de direction : la méthode en six temps et ses résultats."
      />

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Audit de conformité IA : les questions fréquentes
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
            L'audit de conformité est l'une des missions de notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link>. Il s'enchaîne avec la gouvernance, la charte d'usage et la <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link> de vos équipes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Audit IA d'entreprise", href: '/audit-ia', tag: 'Audit', desc: "La mission complète : maturité, processus, données, outils, organisation, avec la conformité intégrée." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Gouvernance', desc: "Après l'audit : comité, registre vivant, procédure de validation des usages, pour rester en règle dans la durée." },
              { label: "Auditabilité d'un système d'IA", href: '/blog/auditabilite-systeme-ia', tag: 'Guide', desc: "Ce que vous devez pouvoir prouver : journaux, documentation, supervision, et par où commencer." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Le document d'usage qui suit souvent l'audit : ce que les équipes peuvent faire, avec quels outils et quelles données." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Conformité', desc: "Les questions de données personnelles que soulève chaque usage d'IA générative, et comment les traiter." },
              { label: "Formation AI Act", href: '/formation-ai-act', tag: 'Formation', desc: "La littératie IA de l'article 4 pour vos équipes, finançable par votre OPCO." },
              { label: "Guide de l'audit IA", href: '/blog/audit-ia-entreprise-methode-prix', tag: 'Guide', desc: "Les trois types d'audit, ce que la loi impose vraiment, les normes publiées et les prix." },
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

      {/* ── QUI INTERVIENT (E-E-A-T) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui intervient</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un cabinet qui connaît les outils autant que les textes
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, audite, construit et forme, sans dépendre d'un éditeur. La conformité IA se joue dans les usages réels des équipes, pas seulement dans les textes : nos auditeurs forment et déploient ces outils toute l'année, ils savent où les écarts se logent. Sur les points d'interprétation juridique, nous travaillons avec votre conseil. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Mission de conseil</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Cadrons votre audit de conformité IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre contexte : les outils en service, ce qui motive la demande, l'échéance. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit, qui fixe le périmètre et vous dit déjà quelles obligations s'appliquent à vous aujourd'hui. Si un audit ne vous servirait à rien, nous vous le disons à ce moment-là.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un audit de conformité
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Aucune certification promise · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
