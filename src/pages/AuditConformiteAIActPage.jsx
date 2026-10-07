import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Scale, Search, ShieldCheck, FileText, ListChecks, XCircle, Presentation,
  Calendar, MapPin, Check, Landmark, Building2, Ban, GraduationCap, Eye, Lock, ClipboardList, Gauge,
  Sun, Factory,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page de conversion de la mission « Audit de conformité IA » (slug /audit-conformite-ai-act).
 * Requêtes « audit de conformité ia », « audit ia act », « audit conformité ia » :
 * intention juridique, distincte de /audit-ia (maturité et opportunité) et de
 * /gouvernance-ia (dispositif durable). Une requête = une page (cluster du 2026-09-03).
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre au moins 90 %, calendrier vérifié au 7 octobre 2026,
 * fiche FAITS-OUTILS-2026-10-07 section 7) :
 * - règlement (UE) 2026/1744 du 8 juillet 2026, en vigueur le 27 juillet 2026 ;
 * - article 5 et article 4 depuis le 2 février 2025 ; article 4 réécrit en obligation de
 *   moyens (aucun certificat, aucun niveau individuel) ; nouvelle interdiction au 2 décembre 2026 ;
 * - article 50 depuis le 2 août 2026, marquage lisible par machine au 2 décembre 2026 pour
 *   les systèmes déjà sur le marché ; haut risque annexe III au 2 décembre 2027, annexe I au
 *   2 août 2028 ; aucune autorité française désignée n'est affirmée ;
 * - aucune certification AI Act ; pas d'audit externe imposé (contrôle interne, annexe VI) ;
 * - demande d'audit = audit seul, suite chiffrée après la restitution ; prix en fourchette
 *   large à plafond ouvert ; conseil pas finançable par votre OPCO, aucun dispositif nommé ;
 * - FounderNote et CaseStudyCards remplacés par du texte propre à la page (cas photovoltaique
 *   et industrie, faits de src/data/etudes-de-cas.js).
 */

const SLUG = 'audit-conformite-ai-act'
const RDV = '/contact?type=projet&rdv=30'
const DATE_MODIFIED = '2026-10-07'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit de conformité IA : AI Act et RGPD | Masteria"
const META_DESC = "Audit de conformité IA : systèmes recensés, risque qualifié selon l'AI Act, écarts RGPD, plan daté pour les corriger. Calendrier à jour au 7 octobre 2026."
const KEYWORDS = "audit de conformité ia, audit ia act, audit conformité ia, audit ai act, conformité ai act entreprise, audit rgpd ia, mise en conformité ia"

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
  { icon: Calendar, label: 'Calendrier AI Act vérifié le 7 octobre 2026' },
  { icon: FileText, label: 'Un porteur et une date par correction' },
  { icon: ShieldCheck, label: 'Aucune certification promise' },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Recenser vos systèmes d'IA, leur attribuer un niveau de risque, relever les écarts RGPD et AI Act, dater chaque correction" },
  { label: 'Textes', value: "AI Act, modifié par le règlement (UE) 2026/1744 ; RGPD ; publications de la CNIL sur l'IA" },
  { label: 'Déjà en vigueur', value: "Articles 5 et 4 (2 février 2025), puis article 50 sur la transparence (2 août 2026)" },
  { label: 'À préparer', value: "Haut risque : décembre 2027 (annexe III), août 2028 (annexe I)" },
  { label: 'Livrable', value: "Registre des systèmes, matrice de risque, écarts classés, plan daté avec porteurs, trames de documents, séance d'arbitrage" },
  { label: 'Hors mission', value: "Certifier le respect de l'AI Act (impossible à ce jour) ou rendre un avis d'avocat" },
  { label: 'Prix', value: "Forfait fixé au cadrage : dès quelques milliers d'euros, davantage avec un système maison ou plusieurs entités" },
]

/* ───────── Les quatre blocs d'obligations ───────── */

const OBLIGATIONS = [
  {
    id: 'pratiques-interdites',
    icon: Ban,
    title: 'Pratiques interdites (article 5)',
    quand: 'Applicable au 2 février 2025',
    desc: "Techniques de manipulation, exploitation des vulnérabilités, notation sociale, reconnaissance des émotions au travail ou à l'école, identification biométrique à distance en temps réel hors exceptions. Le 2 décembre 2026, s'y ajouteront les systèmes conçus pour fabriquer des images intimes non consenties ou des contenus pédocriminels. L'audit vérifie qu'aucun usage, même à l'essai, ne tombe sous ce texte.",
  },
  {
    id: 'litteratie',
    icon: GraduationCap,
    title: "Article 4 : maîtrise de l'IA",
    quand: "Depuis février 2025 ; texte réécrit par l'Omnibus",
    desc: "Dans sa rédaction issue du règlement (UE) 2026/1744, l'article 4 demande aux fournisseurs et aux utilisateurs professionnels de prendre des mesures qui aident leur personnel à développer sa compréhension et sa pratique de l'IA. Il s'agit d'une obligation de moyens, sans certificat ni niveau individuel à atteindre. L'audit regarde qui se sert de quoi, qui a été formé et quelle trace en reste.",
  },
  {
    id: 'transparence',
    icon: Eye,
    title: 'Transparence (article 50)',
    quand: 'Applicable au 2 août 2026',
    desc: "Un agent conversationnel indique qu'il est une IA ; un contenu généré ou retouché, diffusé au public, se signale. Pour un système commercialisé avant le 2 août 2026, le marquage lisible par machine doit être en place le 2 décembre 2026, une obligation qui pèse sur le fournisseur. L'audit passe en revue vos chatbots, vos publications et vos circuits de validation éditoriale.",
  },
  {
    id: 'haut-risque',
    icon: Scale,
    title: 'Systèmes à haut risque',
    quand: 'Reportés : décembre 2027, puis août 2028',
    desc: "Tri de CV, évaluation du personnel, notation de crédit, accès à des services essentiels : ces usages de l'annexe III restent encadrés, avec un calendrier décalé. L'audit les repère dès maintenant, pour que documentation, contrôle humain et journaux soient prêts le jour venu.",
  },
]

/* ───────── Conformité, maturité, gouvernance (tableau citable) ───────── */

const COMPARATIF = [
  {
    critere: 'Question posée',
    maturite: "Que peut-on automatiser, et dans quel ordre ?",
    conformite: "Sommes-nous en règle, et que corriger avant quelle date ?",
    gouvernance: "Comment rester en règle mois après mois ?",
  },
  {
    critere: 'Objet',
    maturite: "Processus, données, outils, organisation, opportunités",
    conformite: "Systèmes d'IA en service, traitements de données, textes applicables",
    gouvernance: "Charte, comité, registre tenu à jour, validation des nouveaux usages",
  },
  {
    critere: 'Livrable',
    maturite: "Rapport de maturité et feuille de route chiffrée",
    conformite: "Registre, matrice de risque, écarts classés, plan de correction daté",
    gouvernance: "Dispositif en place et documents d'usage",
  },
  {
    critere: 'Durée',
    maturite: "Quelques jours de travail, étalés sur des semaines",
    conformite: "Quelques jours à plusieurs semaines, selon le nombre de systèmes",
    gouvernance: "Plusieurs mois, par étapes",
  },
  {
    critere: 'Quand la choisir',
    maturite: "Avant d'investir, pour fixer les priorités",
    conformite: "Avant un contrôle, un appel d'offres ou une échéance, ou après un incident",
    gouvernance: "Une fois l'audit rendu, pour tenir dans la durée",
  },
]

/* ───────── Les six contrôles ───────── */

const CHANTIERS = [
  {
    icon: Search,
    title: "Recenser les systèmes d'IA",
    desc: "Abonnements souscrits par l'informatique, fonctions d'IA apparues avec une mise à jour de logiciel, comptes gratuits ouverts par les salariés. Sans cette liste, aucun niveau de risque ne peut être attribué, et elle réserve en général des surprises.",
  },
  {
    icon: Gauge,
    title: 'Attribuer un niveau de risque',
    desc: "Chaque usage est placé sur l'échelle à quatre niveaux du texte européen : pratique interdite, haut risque, risque limité, risque minimal. Le classement dépend de l'usage : le même assistant relève du risque minimal pour rédiger un courrier, du haut risque pour trier des candidatures.",
  },
  {
    icon: Lock,
    title: 'Relever les écarts RGPD',
    desc: "Base légale, information des personnes, contrats de sous-traitance et transferts hors UE, durées de conservation, décisions automatisées (article 22), analyse d'impact quand elle s'impose. En 2026, c'est sur ces points que la CNIL contrôle.",
  },
  {
    icon: GraduationCap,
    title: 'Formation et contrôle humain',
    desc: "Qui a été formé, à quoi, avec quelle trace. Qui relit les résultats des systèmes et peut les écarter. L'article 4 s'applique déjà ; l'article 14, consacré au contrôle humain, visera les systèmes à haut risque.",
  },
  {
    icon: Eye,
    title: 'Transparence des contenus',
    desc: "Chatbots ouverts au public, visuels et vidéos générés, campagnes marketing, courriers automatisés : ce qui doit être annoncé ou marqué en vertu de l'article 50, et ce que vos circuits de publication font aujourd'hui.",
  },
  {
    icon: ClipboardList,
    title: 'Documentation et traces',
    desc: "Ce que vous pourriez produire si on vous le demandait demain : fiches des systèmes, journaux, contrats fournisseurs, politique d'usage. Ce socle prépare les obligations du haut risque et vous sert dès aujourd'hui si un litige survient.",
  },
]

/* ───────── Six temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Entités, systèmes et traitements concernés, élément déclencheur (contrôle, appel d'offres, incident, échéance), attentes de la direction et du DPO. Le cadrage commence par 30 minutes offertes, qui servent à fixer le devis.",
  },
  {
    num: '02',
    title: 'Recensement',
    desc: "Questionnaire adressé aux responsables de service, puis vérification sur les postes, dans les consoles d'administration et dans les contrats. Les fonctions d'IA activées sans décision explicite entrent dans la liste.",
  },
  {
    num: '03',
    title: 'Qualification',
    desc: "Pour chaque système : le rôle de votre organisation (fournisseur, déployeur, importateur), le niveau de risque, les données traitées, les décisions produites. Les usages à haut risque ressortent avec leur échéance et leurs obligations à venir.",
  },
  {
    num: '04',
    title: 'Contrôle des obligations en vigueur',
    desc: "Article 5, article 4, article 50 et RGPD, point par point : ce qui est fait, ce qui est documenté, ce qui manque. Chaque écart reçoit une gravité et un délai de correction réaliste.",
  },
  {
    num: '05',
    title: 'Revue des fournisseurs',
    desc: "Clauses des contrats, lieu d'hébergement, usage de vos données pour l'entraînement des modèles de l'éditeur, journaux accessibles, engagements pris par écrit. Une partie des écarts se règle par un avenant ou un changement d'offre, sans projet interne.",
  },
  {
    num: '06',
    title: 'Plan et restitution',
    desc: "Des actions datées, chacune avec son porteur : ce qui se corrige sous trente jours, ce qui se prépare pour 2027 et 2028, ce qui relève de votre avocat. La restitution réunit la direction, le DPO et la DSI.",
  },
]

/* ───────── Les pièces remises ───────── */

const LIVRABLE = [
  {
    icon: ListChecks,
    title: "Un registre de vos systèmes d'IA",
    desc: "Pour chaque système en service : l'usage, les données traitées, le fournisseur, le niveau de risque, votre rôle au regard du texte. Le registre vous appartient et s'enrichit à chaque nouvel usage : toutes les autres pièces en dépendent.",
  },
  {
    icon: Gauge,
    title: 'Une matrice de risque',
    desc: "Les usages placés selon leur niveau de risque AI Act et leur exposition RGPD, avec les dates qui s'y rattachent. Une page pour la direction, une annexe argumentée pour le DPO.",
  },
  {
    icon: XCircle,
    title: 'Des écarts classés par gravité',
    desc: "Chaque écart avec l'obligation concernée, l'article cité, la preuve attendue et le délai pour corriger. Ce qui est conforme est noté comme conforme : aucun écart n'est grossi pour vendre une suite.",
  },
  {
    icon: FileText,
    title: 'Un plan de correction daté',
    desc: "Chaque action reçoit un porteur, une date et un critère de réussite, sur trois horizons : les corrections immédiates, la préparation de 2027 et 2028, les questions à confier à votre avocat.",
  },
  {
    icon: ClipboardList,
    title: 'Des trames de documents',
    desc: "Mentions de transparence pour vos chatbots et contenus, procédure de validation d'un nouvel usage, fiche de contrôle humain, registre des formations suivies. De quoi fournir une preuve le jour où on vous la demande.",
  },
  {
    icon: Presentation,
    title: "Une séance d'arbitrage",
    desc: "Le rapport est présenté à la direction, au DPO et à la DSI. La séance sert à décider : ce qui se corrige, ce qui s'arrête, ce qui s'assume en connaissance de cause. Son support vous reste.",
  },
]

/* ───────── Engagements ───────── */

const GARDE_FOUS = [
  "Aucune certification promise, et la raison écrite dans le rapport",
  "Chaque écart relevé cite son article et sa date d'application",
  "Aucun avis d'avocat : sur l'interprétation, nous travaillons avec votre conseil",
  "Le devis couvre l'audit seul ; une suite éventuelle se chiffre après la restitution",
]

/* ───────── Études de cas (faits de src/data/etudes-de-cas.js) ───────── */

const CAS = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · PME',
    figure: '6',
    figureLabel: 'dimensions de maturité examinées, sécurité et gouvernance comprises',
    text: "Des comptes personnels servaient déjà quand la mission a commencé. Le diagnostic remis en septembre 2026 a situé l'entreprise face aux deux textes européens qui la concernent, et prévoit des comptes collectifs gérés par l'entreprise, dont les échanges ne servent pas à entraîner les modèles, avec une ligne au registre RGPD. Une charte doit être signée avant la formation d'octobre, avec un référent IA et un point mensuel.",
  },
  {
    id: 'industrie',
    icon: Factory,
    sector: 'Industrie · groupe international',
    figure: '4',
    figureLabel: 'décisions mises sur la table du comité de direction',
    text: "Lors d'une matinée en anglais, le comité de direction de ce groupe international du packaging a travaillé le cadre réglementaire européen avant de généraliser Microsoft Copilot. Il est reparti avec quatre arbitrages à rendre : quelles données tenir à l'écart, comment auditer les accès, quel premier agent tester, comment financer l'adoption. Le dispositif part aux États-Unis et au Mexique en octobre 2026, puis en Inde en décembre.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit de conformité IA ?",
    a: "C'est l'examen de votre situation face aux textes qui encadrent l'intelligence artificielle : le règlement européen sur l'IA, le RGPD, les publications de la CNIL. La mission recense les systèmes d'IA en service, attribue à chacun un niveau de risque, contrôle les obligations déjà en vigueur, relève les écarts et livre un plan daté pour les corriger. L'audit de maturité cherche des opportunités, la gouvernance installe un dispositif durable ; celui-ci répond à la question de savoir si vous êtes en règle.",
  },
  {
    q: "Mon entreprise est-elle obligée de faire auditer ses usages de l'IA ?",
    a: "Non. Dans la majorité des cas à haut risque, le texte s'en remet à un contrôle interne : l'entreprise mène l'évaluation et en conserve la preuve. Le règlement (UE) 2026/1744, adopté le 8 juillet 2026, a de plus repoussé ces obligations au 2 décembre 2027 (annexe III) et au 2 août 2028 (annexe I). S'appliquent aujourd'hui les articles 5 et 4 (février 2025) et l'article 50 (août 2026). Un audit objective votre position ; aucun texte ne vous y oblige, et nous ne prétendrons pas le contraire.",
  },
  {
    q: "Une PME équipée de ChatGPT ou de Copilot a-t-elle des obligations ?",
    a: "Rédiger un courrier, résumer un compte rendu, préparer un tableau : ces usages de bureau relèvent du risque minimal et n'entraînent aucune exigence spécifique du règlement européen, hormis l'effort de formation demandé par l'article 4. Le RGPD entre en jeu à la première donnée personnelle saisie. Le risque grimpe avec l'usage : trier des CV ou évaluer des salariés avec ce même outil fait basculer l'usage dans le haut risque. L'audit sert à repérer ces usages, souvent nés dans un service sans que la direction le sache.",
  },
  {
    q: "Que demande l'article 4 depuis l'Omnibus ?",
    a: "Le règlement (UE) 2026/1744, entré en vigueur le 27 juillet 2026, a réécrit l'article 4 : fournisseurs et déployeurs prennent des mesures pour aider les personnes qui se servent de leurs systèmes à acquérir les compétences utiles. L'obligation porte sur les moyens ; le texte ne fixe aucun niveau individuel et n'exige aucun certificat. Conserver la liste des formations suivies reste le moyen le plus simple de montrer ce qui a été fait. L'audit vérifie cette trace et signale les formations manquantes.",
  },
  {
    q: "Existe-t-il une certification de conformité à l'AI Act ?",
    a: "Pas à ce jour. Au cours de l'été 2026, le Journal officiel de l'UE ne référençait encore aucune norme harmonisée pour ce règlement ; sans elle, pas de présomption de conformité. Reste ISO/IEC 42001, une norme de management : elle certifie les règles et les rôles qu'une organisation s'est donnés autour de l'IA, et un organisme accrédité la délivre, distinct du cabinet qui conseille. Nous accompagnons cette démarche quand vous la visez, et nous disons quand elle n'aurait aucune utilité pour vous.",
  },
  {
    q: "Quelle différence entre cet audit et un audit RGPD ?",
    a: "L'audit RGPD part des traitements de données personnelles, quel que soit l'outil. L'audit de conformité IA part des systèmes d'IA, quelle que soit la donnée, et croise les deux textes : un usage peut respecter le RGPD et relever du haut risque selon le règlement européen, ou l'inverse. En 2026, les écarts les plus fréquents sont des écarts RGPD révélés par l'IA : données saisies dans un service grand public, personnes non informées, sous-traitant sans contrat. Nous les traitons ensemble, avec votre DPO.",
  },
  {
    q: "Que risque-t-on en cas de manquement ?",
    a: "Pour une pratique interdite, l'amende administrative peut atteindre 35 millions d'euros ou, si ce montant est supérieur, 7 % de son chiffre d'affaires mondial annuel ; pour la plupart des autres manquements, le plafond tombe à 15 millions d'euros ou 3 % du même chiffre. Une PME se voit appliquer le plus faible des deux montants. Ce sont des maximums, que l'on ne peut pas lire comme des prévisions. Pour une entreprise française, le risque le plus proche vient d'ailleurs : un contrôle de la CNIL sur les données, une clause de conformité dans un appel d'offres, la question d'un grand client à laquelle personne ne sait répondre.",
  },
  {
    q: "Combien de temps dure la mission, et qui doit y participer ?",
    a: "De quelques jours à plusieurs semaines, selon le nombre d'entités et de systèmes. Côté entreprise : un sponsor à la direction, le DPO ou la personne qui en tient le rôle, un référent informatique, les responsables des services qui utilisent l'IA. Les entretiens et la séance finale se tiennent sur place ou en visio ; le dossier reste le même. Masteria intervient depuis Lyon dans toute la France et à l'étranger (Europe, Inde, États-Unis).",
  },
  {
    q: "L'audit de conformité peut-il être financé ?",
    a: "Il n'est pas finançable par votre OPCO : seule la formation l'est. En fonction de la taille de l'entreprise, de son secteur et de son implantation, des aides publiques au conseil peuvent jouer ; le cadrage fait le point. La formation qui suit souvent l'audit peut en revanche être financée par l'OPCO de votre branche, dans les limites fixées par celui-ci : Masteria possède la certification Qualiopi au titre des actions de formation.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit de conformité IA, Masteria',
  alternateName: "Audit AI Act et RGPD des systèmes d'intelligence artificielle",
  description: "Audit de conformité IA : recensement des systèmes d'IA en service, niveau de risque attribué selon l'AI Act, contrôle des obligations en vigueur (pratiques interdites, maîtrise de l'IA, transparence, RGPD), écarts classés par gravité et plan de correction daté. Aucune certification promise ; devis limité à l'audit.",
  url: `https://www.master-ia.fr/${SLUG}`,
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  serviceType: 'Audit de conformité IA (AI Act et RGPD)',
  category: 'Conseil en intelligence artificielle',
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
    name: 'Directions générales, DPO, DSI, directions juridiques et RH · PME, ETI, groupes, secteur public',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit de conformité IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Recensement et qualification des systèmes d'IA", description: "Registre des systèmes en service, chacun classé selon les quatre niveaux de risque du règlement (UE) 2024/1689." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contrôle des obligations en vigueur', description: "Articles 5, 4 et 50, RGPD : écarts relevés, gravité, article cité, délai de correction." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan de correction et séance d’arbitrage', description: "Actions datées avec porteur, trames de documents, restitution devant la direction, le DPO et la DSI." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les six temps de l'audit de conformité IA Masteria",
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
  headline: "Audit de conformité IA : ce qui s'applique déjà, ce qui arrive en 2027 et 2028, et le plan pour être prêt",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-03',
  dateModified: DATE_MODIFIED,
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
    { '@type': 'DefinedTerm', name: 'Audit de conformité IA', description: "Examen de la situation d'une organisation face à l'AI Act et au RGPD : systèmes recensés, niveau de risque attribué, écarts relevés, plan de correction daté." },
    { '@type': 'DefinedTerm', name: 'Déployeur', description: "Au sens du règlement (UE) 2024/1689, organisation qui utilise un système d'IA sous sa propre autorité dans un cadre professionnel. La plupart des entreprises sont déployeurs et non fournisseurs." },
    { '@type': 'DefinedTerm', name: 'Système à haut risque', description: "Système d'IA visé par l'annexe I (produits réglementés) ou l'annexe III (embauche, enseignement, crédit, services essentiels, justice, entre autres). Obligations applicables le 2 décembre 2027 (annexe III) et le 2 août 2028 (annexe I)." },
    { '@type': 'DefinedTerm', name: "Maîtrise de l'IA, article 4 de l'AI Act", description: "Obligation de moyens applicable depuis février 2025 et réécrite par le règlement (UE) 2026/1744 : fournisseurs et déployeurs aident leur personnel à se former à l'IA, sans certificat exigé." },
    { '@type': 'DefinedTerm', name: 'Contrôle interne (annexe VI)', description: "Procédure qui s'applique à la majorité des usages à haut risque listés à l'annexe III : l'organisation évalue et documente elle-même sa conformité, sans organisme notifié." },
    { '@type': 'DefinedTerm', name: "Registre des systèmes d'IA", description: "Liste tenue par l'organisation : chaque système d'IA, ce qu'il fait, les données qu'il voit, qui le fournit, son niveau de risque, le rôle réglementaire de l'organisation." },
  ],
}

const PAGE_CITATIONS = [
  { name: "Règlement (UE) 2024/1689, version publiée au Journal officiel (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2026/1744, dit Omnibus sur l'IA, publié sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "RGPD : règlement (UE) 2016/679 sur EUR-Lex", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679' },
  { name: "CNIL, dossier consacré à l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "ISO, fiche de la norme 42001:2023", url: 'https://www.iso.org/fr/standard/81230.html' },
]

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
        dateModified={DATE_MODIFIED}
        speakable={['#geo-summary', '#en-bref']}
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
            <Link to="/audit-ia" style={{ color: '#94A3B8' }}>Audit IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Audit de conformité IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Mission de conseil · AI Act et RGPD
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Audit de conformité IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>vos écarts AI Act et RGPD, et le plan daté pour les corriger</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Rédigé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · Mis en ligne en septembre 2026, calendrier revérifié le 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit de conformité IA recense les systèmes d'intelligence artificielle que votre organisation utilise, attribue à chacun le niveau de risque prévu par l'AI Act, contrôle les obligations déjà en vigueur et vos traitements de données personnelles, puis remet <strong style={{ color: '#fff', fontWeight: 700 }}>la liste des écarts, classés par gravité, et un plan daté pour les corriger</strong>. Aucune certification n'est promise : rien ne permet aujourd'hui de certifier le respect de l'AI Act.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Au 7 octobre 2026, trois blocs d'obligations sont opposables : depuis le 2 février 2025, certaines pratiques sont interdites et la maîtrise de l'IA est exigée ; depuis le 2 août 2026, la transparence l'est aussi. Le haut risque attend le 2 décembre 2027 (annexe III) et le 2 août 2028 (annexe I). La mission traite d'abord ce qui s'applique, puis prépare le reste, dans cet ordre.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les pièces remises
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>La mission en résumé</div>
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

      {/* ── LES QUATRE BLOCS D'OBLIGATIONS ── */}
      <section id="obligations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le calendrier au 7 octobre 2026</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que vérifie un audit de conformité IA en 2026 ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Quatre blocs d'obligations, quatre dates. Trois sont déjà opposables : les articles 5 et 4 s'appliquent depuis février 2025, l'article 50 depuis août 2026. Le quatrième, le haut risque, a été reporté par le règlement (UE) 2026/1744 au 2 décembre 2027 (usages de l'annexe III), puis au 2 août 2028 (produits de l'annexe I). L'audit contrôle les trois premiers et prépare le dernier.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le RGPD vient s'y ajouter, et c'est lui qui déclenche aujourd'hui les contrôles : fichiers clients copiés dans une version gratuite d'assistant, personnes concernées jamais informées, sous-traitant sans contrat. Le cadre complet, normes publiées comprises, est développé dans notre <Link to="/blog/audit-ia-entreprise-methode-prix" style={aStyle}>guide de l'audit IA</Link>.
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
                Vous cherchez plutôt les gains possibles de l'IA dans vos processus ? Il vous faut un audit de maturité : notre <Link to="/audit-ia" style={aStyle}>audit IA d'entreprise</Link> couvre ce terrain et traite la conformité en chemin. La mission décrite ici sert quand la conformité est la question centrale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFORMITÉ, MATURITÉ, GOUVERNANCE (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conformité, maturité ou gouvernance</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Conformité, maturité, gouvernance : laquelle traiter d'abord ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Choisissez l'audit de conformité quand il s'agit de savoir si vous êtes en règle : avant un contrôle, un appel d'offres qui exige des garanties, une échéance du calendrier européen, ou après un incident interne. Pour savoir ce que l'IA peut faire chez vous, l'audit de maturité convient mieux. Une fois l'audit rendu, la gouvernance vous permet de rester en règle dans la durée.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Audit de maturité, audit de conformité IA et gouvernance de l'IA comparés" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
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
            Les deux autres missions ont chacune leur page : l'<Link to="/audit-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>audit IA de maturité</Link> et la <Link to="/gouvernance-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>gouvernance de l'IA</Link>. Elles s'enchaînent souvent dans cet ordre : maturité, conformité, gouvernance.
          </p>
        </div>
      </section>

      {/* ── LES SIX CONTRÔLES ── */}
      <section id="chantiers" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Six contrôles</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que contrôle l'audit, point par point ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six contrôles : le recensement des systèmes, le niveau de risque de chacun, les écarts RGPD, la formation et le contrôle humain, la transparence des contenus, la documentation disponible. Chacun ressort avec ses écarts, l'article en cause et un délai de correction.</strong>
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
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Trois exigences que la loi ne contient pas</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Un système à haut risque n'exige pas, dans la majorité des cas, d'audit externe : l'AI Act se contente d'un contrôle interne documenté par l'entreprise. Aucun registre universel n'est imposé : l'inscription dans la base européenne concerne les fournisseurs de systèmes classés à haut risque et les déployeurs qui sont des autorités publiques. Aucune certification n'est possible à ce jour. Nous auditons pour que vous sachiez où vous en êtes, sans brandir une obligation inexistante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX TEMPS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Déroulé</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six temps, avec le DPO du début à la fin
          </h2>

          <p style={answerStyle}>
            <strong>Cadrage, recensement, qualification, contrôle des obligations en vigueur, revue des fournisseurs, plan et restitution. Le DPO et la DSI suivent chaque temps. Les textes de référence sont nommés dans le devis : AI Act et règlement modificatif de 2026, RGPD, publications de la CNIL, ISO/IEC 42001 si une certification est visée.</strong>
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

      {/* ── LES PIÈCES REMISES ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les pièces que votre DPO pourra produire demain
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un registre des systèmes, une matrice de risque, des écarts classés avec l'article cité et un délai, un plan daté avec un porteur par action, des trames de documents et une séance d'arbitrage. Votre DPO peut porter ce dossier seul, ou le confier à un autre prestataire.</strong>
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

      {/* ── ENGAGEMENTS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Nos engagements</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un audit qui invente des obligations vous fait payer deux fois
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La conformité IA attire les discours alarmistes : certifications qui n'existent pas, calendriers périmés, registres présentés comme obligatoires pour tous. On paie l'audit, puis des corrections inutiles. Nos engagements se contrôlent dans le rapport, ligne par ligne.
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
            Combien coûte un audit de conformité IA, et qui le finance ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le montant se décide une fois le cadrage terminé, quand on connaît les entités, le nombre de systèmes et l'ampleur du volet RGPD. Une PME qui utilise des outils du marché paie quelques milliers d'euros ; un groupe, ou une entreprise qui a développé son propre système de notation, monte à plusieurs dizaines de milliers, sans plafond défini d'avance.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Building2 size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce qui fait varier le prix</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le nombre de systèmes et de traitements pèse plus que l'effectif. Une PME de quatre-vingts personnes équipée d'un assistant bureautique et d'un chatbot public se traite vite ; une ETI qui a construit un outil de scoring interne demande davantage, et le devis le montre. Seul l'audit est chiffré : une mise en conformité accompagnée, si vous la souhaitez, fait l'objet d'un devis séparé après la restitution.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Les financements possibles</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                La mission relève du conseil ; elle n'est donc pas finançable par votre OPCO, lequel couvre la formation. Côté aides, certaines subventions publiques au conseil existent selon l'effectif, le secteur et la région ; le cadrage fait le tri. La formation souvent décidée après l'audit ouvre droit, elle, à un financement de l'OPCO compétent, dans les limites qu'il fixe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (texte propre à la page) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux missions où le cadre réglementaire a précédé l'outil
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Une PME qui sortait des comptes personnels, un comité de direction qui préparait un déploiement à l'international : dans les deux cas, la question réglementaire a été tranchée avant le choix de l'outil. Les clients restent anonymes ; ce qui reste à venir est écrit au futur.
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
                  Lire cette mission en entier
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
                Conformité de l'IA : les questions des DPO et des directions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un cas particulier, un texte dont la lecture vous échappe ? Envoyez-le, nous répondons par écrit.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyer votre question
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
          <Kicker>Pour continuer</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Autres pages sur la conformité de l'IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            L'audit de conformité fait partie des missions de notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link>. Il se prolonge souvent par la gouvernance, une charte d'usage et la <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link> des équipes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Audit IA d'entreprise", href: '/audit-ia', tag: 'Audit', desc: "Maturité, processus, données, outils et organisation, avec un volet réglementaire intégré à l'examen." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Gouvernance', desc: "Comité, registre tenu à jour, validation des nouveaux usages : rester en règle une fois l'audit rendu." },
              { label: "Auditabilité d'un système d'IA", href: '/blog/auditabilite-systeme-ia', tag: 'Guide', desc: "Journaux, documentation, contrôle humain : ce qu'il faudra pouvoir montrer, et par où commencer." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Le texte qui dit aux équipes quels outils et quelles données utiliser, souvent rédigé juste après l'audit." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Les questions de données personnelles soulevées par l'IA générative, usage par usage." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "Former vos équipes pour répondre à l'article 4, avec un financement possible par l'OPCO de votre branche." },
              { label: "Guide de l'audit IA", href: '/blog/audit-ia-entreprise-methode-prix', tag: 'Guide', desc: "Familles d'audit, obligations légales, normes publiées, repères de prix." },
              { label: 'Audit IA médico-social', href: '/audit-ia-medico-social', tag: 'Secteur', desc: "Données de santé, secret professionnel, hébergement HDS : la conformité vue depuis un établissement." },
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

      {/* ── QUI MÈNE L'AUDIT ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui mène l'audit</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des auditeurs qui déploient ces outils toute l'année
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Mathias Nizan pilote chaque audit de conformité. Selon les systèmes à examiner, il fait intervenir des consultants IA (une dizaine dans le réseau), des développeurs (cinq environ) pour lire un système construit en interne, et des formateurs (une vingtaine) quand il faut évaluer la formation des équipes ; tous sont indépendants. Ces intervenants installent et enseignent ces outils au quotidien et savent où se logent les écarts. Pour l'interprétation juridique, nous travaillons avec votre avocat ou votre juriste. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> donnent des exemples datés.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['≈ 10', 'consultants sollicités selon les systèmes'],
                ['≈ 5', 'développeurs pour les outils maison'],
                ['≈ 20', "formateurs à la maîtrise de l'IA"],
                ['Aucune', "certification promise sur l'AI Act"],
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
            Mathias Nizan, fondateur de Masteria, signe cette page ; il en a contrôlé chaque date le 7 octobre 2026, à la lumière du règlement (UE) 2026/1744. Son parcours est présenté sur <Link to="/mathias-nizan" style={aStyle}>sa page personnelle</Link>.
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
              Cadrons votre audit de conformité IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Listez les outils d'IA que vous savez en service, ce qui déclenche la demande et l'échéance qui vous presse. Pendant ces 30 minutes, le périmètre se fixe et vous repartez en sachant déjà quelles obligations vous visent aujourd'hui. Si un audit ne vous apporterait rien, nous le dirons pendant cet échange.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Calendrier AI Act vérifié le 7 octobre 2026 · devis limité à l'audit · missions menées depuis Lyon, en France et à l'étranger
            </p>
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
