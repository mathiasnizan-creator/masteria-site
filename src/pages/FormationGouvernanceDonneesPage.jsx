import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Database, Users, GraduationCap, MapPin, Check, Layers, Landmark,
  ShieldCheck, FileText, ListChecks, Gauge, Workflow, ClipboardCheck, Sun,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page formation « gouvernance des données » (slug /formation-gouvernance-donnees),
 * côté FORMATION (Qualiopi, OPCO visibles). Créée le 2026-09-04 depuis l'analyse
 * Semrush du 03/09 : « formation data gouvernance » (170, KD 13, CPC 3,66),
 * « gestion des données de référence » (210, KD 15), « tutoriel de gouvernance des
 * données » (140, KD 13), « quelles données constituent le patrimoine informationnel
 * d'une entreprise » (140, KD 15).
 *
 * RÉPARTITION D'INTENTIONS :
 *  - /formation-data-ia = analyser ses données avec l'IA (métier, 2 jours) ;
 *  - /formation-gouvernance-ia = gouvernance des systèmes d'IA (AI Act, registre) ;
 *  - CETTE page = gouverner et fiabiliser les DONNÉES : patrimoine informationnel,
 *    rôles, qualité, données de référence, RGPD, préparation pour l'IA ;
 *  - /conseil-data-ia = la mission de conseil qui fait le travail à votre place.
 *
 * Réécrite le 07/10/2026 (texte propre, faits à jour) : title ramené sous 60
 * caractères, meta sous 155, H1 sous 70 ; deux cas cités avec lien vers leur
 * ancre (photovoltaique, conseil-financier) ; FounderNote et OfficialSources
 * remplacés par une signature et des sources propres à la page.
 * INTÉGRITÉ : tarif = grille unique Masteria (1 980 € HT/jour intra, groupe
 * jusqu'à 12), pas de CPF, aucun client nommé, aucun chiffre de résultat.
 * Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'formation-gouvernance-donnees'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation gouvernance des données et qualité | Masteria'
const META_DESC = "Formation gouvernance des données en 2 jours : cartographier le patrimoine informationnel, nommer les rôles, fiabiliser la qualité et les référentiels."
const KEYWORDS = "formation gouvernance des données, formation data gouvernance, formation data governance, gestion des données de référence, patrimoine informationnel entreprise, tutoriel gouvernance des données, qualité des données formation, formation data management"

/* ───────── Styles ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }
const srcLinkStyle = { color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }

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
  { icon: GraduationCap, label: 'Qualiopi · actions de formation' },
  { icon: Database, label: 'Sur les données de votre entreprise' },
  { icon: Users, label: 'Data, SI, DAF, DPO, qualité, métiers' },
  { icon: MapPin, label: 'Sur site ou en visio, en France et au-delà' },
]

const EN_BREF = [
  { label: 'Durée', value: "Deux journées, quatorze heures, en intra ; une version d'un jour limitée à la carte et aux règles pour un périmètre resserré" },
  { label: 'Pour qui', value: "Responsables data ou SI, DAF, DPO, responsables qualité, managers propriétaires d'un référentiel, futurs référents data" },
  { label: 'Objectif', value: "Sortir avec une carte du patrimoine informationnel, des responsables nommés, des règles écrites et un plan à trois mois" },
  { label: 'Outils', value: "Vos logiciels actuels (ERP, CRM, dossiers partagés, tableur) et les assistants IA du marché pour accélérer l'inventaire et les contrôles" },
  { label: 'Prérequis', value: "Aucun : la formation s'adresse à des non-spécialistes qui portent la responsabilité des données" },
  { label: 'Tarif', value: "1 980 € HT par jour, groupe de douze au plus ; devis le lendemain du cadrage" },
]

/* ───────── Pourquoi ───────── */

const POURQUOI = [
  { icon: FileText, title: "Personne n'a la carte complète des données", desc: "Données des logiciels, documents, mails, données techniques, données personnelles, savoir-faire jamais écrit : chaque équipe connaît sa part, personne ne voit l'ensemble. Le premier jour dessine cette carte, source par source." },
  { icon: Layers, title: 'Une fiche client, trois versions', desc: "Le logiciel commercial, l'ERP et un fichier Excel racontent trois histoires différentes. Sans données de référence gouvernées, chaque analyse et chaque assistant IA produisent des résultats faux avec aplomb. La formation apprend à désigner une source unique et ses règles." },
  { icon: ShieldCheck, title: 'Le RGPD reste dans le bureau des juristes', desc: "Bases légales, durées de conservation, données sensibles : les règles existent, rarement traduites en gestes pour les équipes. La formation les rend concrètes, avec le DPO quand l'entreprise en a un." },
  { icon: Workflow, title: "Les projets d'IA trébuchent sur les données", desc: "Un assistant documentaire ou un agent vaut ce que valent les données qu'on lui confie. La formation prépare ce socle : ce qui est exploitable dès maintenant, ce qui demande un tri, ce qui ne doit pas sortir." },
]

/* ───────── Programme ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Comprendre et cartographier',
    resume: "Du patrimoine informationnel aux rôles et à la qualité mesurée, sur les données des participants.",
    matin: [
      { t: 'Gouverner ses données : les mots utiles', d: "Gouvernance, propriétaire, référentiel, qualité, cycle de vie : les définitions dont vous aurez besoin, sans plus. Ce qu'une PME doit tenir, ce qu'une ETI ajoute, ce qu'un grand groupe fait et qui ne vous concerne pas." },
      { t: 'Le patrimoine informationnel, famille par famille', d: "Données des logiciels métier, documents, échanges, données techniques, savoir-faire jamais écrit et, partout, données personnelles : chaque participant fait l'inventaire des siennes." },
      { t: 'Qui décide, qui saisit, qui contrôle', d: "Propriétaire, référent, DPO, DSI : trois rôles suffisent souvent. La formation les attribue sur vos données, sans organigramme théorique." },
      { t: 'Atelier : la carte de votre patrimoine', d: "Équipe par équipe, une carte source par source : emplacement, responsable, usage, niveau de sensibilité. Elle reste à l'entreprise." },
    ],
    apresmidi: [
      { t: 'Mesurer la qualité', d: "Complétude, exactitude, fraîcheur, unicité, cohérence : cinq critères, des contrôles simples dans vos outils et un score à suivre dans le temps." },
      { t: 'Les données de référence', d: "Client, produit, fournisseur, site, article : pourquoi tout se dérègle quand elles divergent, et comment fixer une source unique avec ses règles de création et de modification." },
      { t: 'Le RGPD traduit en gestes', d: "Base légale, finalité, durée de conservation, données sensibles : des règles d'équipe concrètes. Ce qui n'entre jamais dans un outil, ce qu'on anonymise d'abord, ce qu'on documente." },
      { t: "Atelier : diagnostic qualité d'un référentiel", d: "Chaque participant mesure la qualité d'un référentiel de l'entreprise (clients, produits, fournisseurs) avec l'aide d'un assistant IA, puis note les trois écarts à corriger en priorité." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Outiller, préparer pour l'IA, planifier",
    resume: "Du catalogue de données au plan à trois mois, en passant par la préparation pour l'IA.",
    matin: [
      { t: 'Un catalogue de données sans plateforme', d: "Le catalogue tenu dans un outil que vous possédez déjà : sources, responsables, définitions, règles, date de revue. Quand une plateforme de gouvernance devient utile, et quand un document partagé suffit." },
      { t: 'Les données de référence au quotidien', d: "Création d'une fiche, validation, dédoublonnage, revue périodique : une gestion des données de référence à la taille de l'entreprise, dans son logiciel principal." },
      { t: "Les assistants IA pour l'inventaire et les contrôles", d: "Repérer des doublons, proposer des définitions, contrôler un export, rédiger une règle : ce que les assistants du marché font bien, et les vérifications qui restent humaines." },
      { t: 'Atelier : votre catalogue, première version', d: "Chaque équipe catalogue ses dix sources principales, avec responsables et règles écrites." },
    ],
    apresmidi: [
      { t: "Des données prêtes pour l'IA", d: "Ce qu'un assistant documentaire, un agent ou une analyse attendent : des données accessibles, propres, cloisonnées selon les droits. Le tri entre exploitable aujourd'hui, à ranger d'abord, à laisser de côté." },
      { t: 'Données et IA : deux gouvernances liées', d: "Comment le registre des usages IA s'appuie sur le catalogue de données ; ce que la protection des données et l'AI Act demandent de documenter, sans sur-interprétation." },
      { t: 'Faire vivre la gouvernance', d: "Un rythme de revue, une page d'indicateurs, le rôle du référent data, ce qui remonte au comité et ce qui reste dans l'équipe." },
      { t: 'Plan à trois mois', d: "Trois chantiers pour l'équipe : quel référentiel, quelle règle, quel contrôle, avec un porteur et une échéance pour chacun. La liste sert de base au point de suivi." },
    ],
  },
]

/* ───────── Ce que vous construisez ───────── */

const LIVRABLES = [
  { icon: FileText, title: 'La carte du patrimoine informationnel', desc: "Source par source : emplacement, responsable, usage, sensibilité. Souvent la première vue d'ensemble que l'entreprise a de ses données." },
  { icon: ListChecks, title: 'Le catalogue, première version', desc: "Les dix sources principales, avec définitions, responsables, règles et dates de revue, dans un outil déjà en place." },
  { icon: Gauge, title: 'Un diagnostic qualité chiffré', desc: "Le score d'un référentiel de l'entreprise, ses trois écarts prioritaires et les contrôles à rejouer chaque mois." },
  { icon: ClipboardCheck, title: 'Les règles et le plan à trois mois', desc: "Une page de règles (ce qu'on peut verser dans un outil, ce qu'on anonymise, qui valide) et trois chantiers confiés chacun à un porteur." },
]

/* ───────── Cas publiés (faits de src/data/etudes-de-cas.js) ───────── */

const CAS = [
  {
    icon: Sun,
    secteur: 'Distribution photovoltaïque · équipe de trois',
    texte: "Chez ce distributeur où tout passe par Odoo et par deux personnes, le diagnostic de septembre 2026 a évalué la maturité sur six dimensions, données comprises. Le cap fixé : remplacer la mémoire de chacun par une mémoire commune, où l'on retrouve catalogue, références, trames et transporteurs, puis passer des abonnements individuels à des comptes d'équipe administrés, déclarés au registre RGPD.",
    href: '/etudes-de-cas-ia#photovoltaique',
    lien: 'Lire le cas photovoltaïque',
  },
  {
    icon: Landmark,
    secteur: 'Cabinet de conseil financier · Paris et Lyon',
    texte: "Avant de construire ses assistants d'appels d'offres, le cabinet a classé par priorité les documents à verser dans leur base : trames de mémoires, analyses de dossiers de consultation, méthodologies, mémoires les mieux notés par les jurys, références. Un guide d'utilisation désigne ensuite le responsable de chaque mise à jour.",
    href: '/etudes-de-cas-ia#conseil-financier',
    lien: 'Lire le cas du cabinet',
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: 'Que sait-on faire à l\'issue d\'une formation gouvernance des données ?', a: "Prendre en main la responsabilité des données de l'entreprise sans être informaticien. Le premier jour : définir ce que gouverner veut dire, cartographier le patrimoine informationnel, nommer les rôles, mesurer la qualité, gérer les données de référence, traduire le RGPD en gestes. Le second : bâtir un catalogue sans plateforme, faire vivre les référentiels, se servir des assistants IA pour l'inventaire et les contrôles, préparer les données pour les projets d'IA, écrire le plan à trois mois. Tous les exercices portent sur vos propres sources." },
  { q: "Quelles données constituent le patrimoine informationnel d'une entreprise ?", a: "On les range en six familles. D'abord les données structurées que tiennent vos logiciels : fichier clients, commandes, factures, stocks, salaires. Puis les documents (contrats, procédures, propositions, plans) et les échanges (messagerie, demandes de support, comptes rendus). Viennent ensuite les données techniques, issues de capteurs, de machines ou de journaux informatiques, puis les données personnelles, qui traversent toutes ces familles et relèvent du RGPD. La sixième famille est le savoir-faire que les anciens n'ont jamais écrit. La formation dresse cet inventaire pour votre entreprise, source par source, avec responsable, usage et sensibilité." },
  { q: 'Gestion des données de référence : de quoi s\'agit-il ?', a: "Pour chaque donnée que plusieurs logiciels partagent (client, produit, fournisseur, site, article), il s'agit de choisir la source qui fait foi, de nommer un responsable, d'écrire comment on crée et modifie une fiche, et de contrôler le tout à intervalles réguliers. Quand la fiche client existe en trois versions, chaque analyse et chaque outil d'IA se trompent avec assurance. Inutile, pour une PME ou une ETI, d'acheter un logiciel dédié : une liste de référence tenue dans votre logiciel central, des règles écrites et une revue périodique suffisent. La formation fait construire ce circuit sur un référentiel de l'entreprise." },
  { q: "Cette formation est-elle un tutoriel de gouvernance des données ?", a: "Elle va plus loin qu'un tutoriel, qui décrit une méthode générale : pendant deux jours, la méthode s'applique à vos données, avec un formateur qui fait ce travail en mission. Vous repartez avec votre carte, votre catalogue, votre diagnostic qualité et votre plan. Pour lire d'abord la démarche, la page conseil data et IA en présente les notions." },
  { q: "Faut-il être informaticien ou data scientist pour suivre ?", a: "Non, le programme vise d'autres profils : les personnes qui répondent des données sans en être les techniciennes. Responsable SI ou data d'une PME, DAF, DPO, responsable qualité, managers propriétaires d'un référentiel, futurs référents data : aucun prérequis technique, et les manipulations se font dans vos outils habituels et avec des assistants IA du marché." },
  { q: "Quelle différence avec la formation data IA et la formation gouvernance IA ?", a: "Trois sujets voisins. La formation data IA entraîne les équipes métier à analyser leurs fichiers avec l'IA : exports, tableaux, reporting. La formation gouvernance IA encadre les systèmes d'IA eux-mêmes : registre des usages, charte, AI Act. Celle-ci porte sur les données : patrimoine, rôles, qualité, référentiels, RGPD, préparation pour l'IA. Elle vient souvent en premier, parce que ni l'analyse ni l'IA ne sont fiables sur des données mal tenues." },
  { q: "Travaille-t-on sur nos propres données ?", a: "Oui, c'est la règle. Chaque participant apporte ses sources : un export du CRM, un référentiel produits, un dossier partagé, une liste de fournisseurs. La cartographie, le diagnostic qualité, le catalogue et les règles se construisent dessus. Toute donnée personnelle est rendue anonyme en amont si besoin, et le travail se fait dans vos outils, sans que les données quittent l'entreprise." },
  { q: 'Sur combien de jours, et sous quelle forme ?', a: "Deux jours, quatorze heures, en intra, dans vos locaux ou en visio, jusqu'à douze participants par groupe. Une version d'un jour couvre un périmètre resserré, la carte du patrimoine et les règles d'équipe, sans le catalogue ni la préparation pour l'IA. Le format se décide au cadrage, dont les trente premières minutes vous sont offertes, selon vos logiciels et le niveau des participants." },
  { q: "Combien coûte la formation gouvernance des données ?", a: "Le prix est de 1 980 € HT la journée, payé une fois pour tout le groupe (douze participants au plus), donc 3 960 € HT pour le parcours de deux jours. Pour une session dans vos locaux hors de la région lyonnaise, les frais de voyage sont refacturés à leur coût, sans marge ; la visio n'en entraîne aucun. Le devis vous parvient le lendemain du cadrage." },
  { q: "Notre OPCO peut-il prendre la formation en charge ?", a: "Il le peut, suivant ses critères et l'enveloppe dont il dispose. La certification Qualiopi de Masteria couvre ses actions de formation : la session s'inscrit donc dans votre plan de formation, le dossier (programme, objectifs, modalités d'évaluation) se monte avec nous, et la décision revient à l'opérateur. Pas de CPF ici. Pour savoir de quel opérateur vous dépendez, essayez notre outil Quel OPCO ?" },
  { q: "Et si nos données demandent un vrai chantier avant la formation ?", a: "La formation le fera apparaître, et c'est utile. Quand la carte montre des données éparpillées, des référentiels contradictoires ou des accès à revoir, elle s'arrête sur un plan réaliste, et notre conseil data et IA peut faire le travail avec vous : audit, gouvernance, préparation des données pour l'IA. Cette mission de conseil, chiffrée au forfait, n'est pas finançable par votre OPCO ; c'est la formation qui donne ensuite à vos équipes les moyens de tenir ce que la mission met en place." },
]

/* ───────── JSON-LD ───────── */

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Formation gouvernance des données (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/formation-gouvernance-donnees',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  educationalLevel: 'Débutant à intermédiaire',
  teaches: ['Patrimoine informationnel', 'Rôles et responsabilités data', 'Qualité des données', 'Gestion des données de référence', 'RGPD appliqué aux données', "Préparation des données pour l'IA"],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['onsite', 'online'],
    courseWorkload: 'PT14H',
    instructor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  },
  offers: {
    '@type': 'Offer',
    price: '1980',
    priceCurrency: 'EUR',
    description: "Journée de formation en intra, 1 980 € HT, groupe limité à douze",
    availability: 'https://schema.org/InStock',
  },
}

const programJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Programme de la formation gouvernance des données',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [...day.matin, ...day.apresmidi].map((it, i) => ({ '@type': 'ListItem', position: di * 8 + i + 1, name: `${day.jour} : ${it.t}`, description: it.d }))),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-gouvernance-donnees#article',
  headline: 'Formation gouvernance des données : qualité et référentiels fiables',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-gouvernance-donnees#webpage' },
  about: [
    { '@type': 'Thing', name: 'Gouvernance des données', sameAs: 'https://fr.wikipedia.org/wiki/Gouvernance_des_donn%C3%A9es' },
    { '@type': 'Thing', name: 'Gestion des données de référence', sameAs: 'https://fr.wikipedia.org/wiki/Gestion_des_donn%C3%A9es_de_r%C3%A9f%C3%A9rence' },
    { '@type': 'Thing', name: 'Qualité des données', sameAs: 'https://fr.wikipedia.org/wiki/Qualit%C3%A9_des_donn%C3%A9es' },
  ],
}

/* Sources : WebPage.citation + section visible. */
const PAGE_CITATIONS = [
  { name: "RGPD : le règlement (UE) 2016/679 dans sa version officielle (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
  { name: "CNIL : intelligence artificielle et protection des données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "AI Act : règlement 2024/1689, obligations de documentation (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Qualiopi : la marque de certification des organismes de formation, ministère du Travail", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function FormationGouvernanceDonneesPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: 'Formation gouvernance des données', slug: SLUG },
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
        datePublished="2026-09-04"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[courseJsonLd, programJsonLd, articleJsonLd]}
      />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation gouvernance des données</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Formation · Gouvernance et qualité des données · 2 jours</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Formation gouvernance des données :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>qualité et référentiels fiables</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Conçu par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · contenu revu le 7 octobre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation gouvernance des données apprend en deux jours à des responsables non techniciens à <strong style={{ color: '#fff', fontWeight: 700 }}>dresser la carte du patrimoine informationnel, attribuer un responsable à chaque source, mesurer la qualité, tenir les données de référence et préparer les données pour l'IA</strong>, à partir des fichiers et des logiciels de l'entreprise. Elle entre dans le champ de la certification Qualiopi du cabinet.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Elle vise celles et ceux qui répondent des données sans en être les techniciens : responsable SI ou data, DAF, DPO, responsable qualité, managers propriétaires d'un référentiel. Aucun prérequis technique : à la fin du second jour, vous avez votre carte, votre catalogue, un diagnostic qualité chiffré et un plan à trois mois.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Préparer la formation avec nous
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Parcourir les deux journées</a>
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Repères</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── POURQUOI (éditorial asymétrique) ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le point de départ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Pourquoi former vos équipes à la gouvernance des données ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Dans beaucoup d'entreprises, les données n'ont pas de responsable désigné, la même fiche client existe en plusieurs versions et le RGPD reste une affaire de juristes ; les projets d'IA butent ensuite sur ce socle. Deux jours suffisent à poser une carte, des rôles, des règles et un plan que l'équipe tient seule par la suite.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Une fois les données en ordre, la <Link to="/formation-data-ia" style={aStyle}>formation data IA</Link> apprend aux équipes métier à les analyser ; pour encadrer les systèmes d'IA eux-mêmes, voyez la <Link to="/formation-gouvernance-ia" style={aStyle}>formation gouvernance IA</Link>.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {POURQUOI.map((item, i) => (
                <div key={i} style={{ ...cardStyle, padding: 24 }}>
                  <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME (ancre sombre) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Deux jours : cartographier, mesurer la qualité, préparer pour l'IA</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le premier jour sert à comprendre et à cartographier : patrimoine informationnel, rôles, qualité mesurée, données de référence, RGPD en gestes. Le second sert à outiller : catalogue sans plateforme, référentiels au quotidien, assistants IA pour l'inventaire, préparation des données, plan à trois mois.</strong>
          </p>
          <div style={{ display: 'grid', gap: 22 }}>
            {PROGRAMME.map(day => (
              <div key={day.jour} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(22px, 3.5vw, 32px)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA' }}>{day.jour}</span>
                  <h3 style={{ ...h3Style, fontSize: 19, color: '#F8FAFC' }}>{day.titre}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#94A3B8', margin: '0 0 20px' }}>{day.resume}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(18px, 3vw, 32px)' }}>
                  {[['Matin', day.matin], ['Après-midi', day.apresmidi]].map(([label, items]) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>{label}</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                        {items.map(item => (
                          <li key={item.t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 99, background: '#60A5FA', flexShrink: 0, marginTop: 8 }} />
                            <div>
                              <div style={{ fontSize: 14.5, fontWeight: 700, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif', marginBottom: 3 }}>{item.t}</div>
                              <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 800 }}>
            Le cadrage ajuste le contenu à vos outils, à vos sources et au niveau de départ ; sa première demi-heure ne vous est pas facturée. La version d'un jour s'arrête à la carte et aux règles ; celle de deux jours va jusqu'au catalogue, à la préparation pour l'IA et au plan.
          </p>
        </div>
      </section>

      {/* ── LIVRABLES ── */}
      <section id="livrables" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que vous construisez</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Quatre livrables qui restent à l'entreprise</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Chaque atelier produit une pièce de votre gouvernance, construite sur vos données. À la fin du second jour, la carte, le catalogue, le diagnostic qualité et le plan existent.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 24, marginTop: 12 }}>
            {LIVRABLES.map(card => {
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
            Si la carte révèle un chantier trop lourd pour l'équipe seule, notre <Link to="/conseil-data-ia" style={aStyle}>conseil data et IA</Link> prend le relais en mission : audit, gouvernance, préparation des données pour les projets d'IA.
          </p>
        </div>
      </section>

      {/* ── CAS PUBLIÉS ── */}
      <section id="exemples" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>En mission</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Deux entreprises qui ont remis leurs données en ordre avant l'IA</h2>
          <p style={answerStyle}>
            <strong>Dans les deux cas, le travail sur les données a précédé les assistants : savoir où se trouve l'information, qui la tient à jour, ce qui peut entrer dans un outil. Les récits complets sont publiés, anonymisés, dans nos études de cas.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.href} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <IconTile icon={cas.icon} />
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.35 }}>{cas.secteur}</div>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px', flex: 1 }}>{cas.texte}</p>
                <Link to={cas.href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  {cas.lien}
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Prix et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Deux jours à 1 980 € HT chacun, pour tout le groupe</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Une journée de cette formation coûte 1 980 € HT, facturés une fois pour un groupe qui peut compter jusqu'à douze personnes, soit 3 960 € HT pour le parcours complet ; la version d'un jour « carte et règles » se décide au cadrage. Une session sur site hors de la région lyonnaise ajoute les frais de trajet et d'hébergement, refacturés sans marge ; à distance, rien ne s'ajoute. Comme Masteria est certifiée Qualiopi, la formation peut être soumise à l'OPCO dont vous relevez, qui tranche selon ses propres règles et son budget ; le dossier se prépare avec nous. Le CPF n'intervient pas, et une société implantée à Genève ou à Bruxelles, faute d'OPCO, reçoit son devis en euros HT. L'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> vous dit de quel opérateur vous dépendez ; la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> détaille chaque dispositif.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['1 980 € HT par jour, douze personnes au plus', 'Deux jours conseillés : catalogue, référentiels et plan compris', 'Dossier OPCO préparé avec vous', 'Devis le lendemain du cadrage'].map(pt => (
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

      {/* ── QUI FORME ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui anime</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>Des formateurs qui remettent des données en ordre pendant leurs missions</h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan, fondateur du cabinet lyonnais, anime lui-même la formation ou passe la main à un formateur indépendant du réseau Masteria, qui prépare le reste de l'année le socle de données de projets d'IA. Ce qu'ils enseignent, ils le pratiquent en mission, et ils racontent en salle ce qu'ils ont vu échouer. Le cabinet ne vend aucune plateforme de gouvernance : vous repartez sans abonnement à souscrire.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[['4', 'livrables construits sur vos données'], ['5', 'critères de qualité mesurés'], ['10', 'sources au catalogue dès le jour 2'], ['3 mois', "pour le premier plan d'action"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Gouvernance des données : les questions des responsables data</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Une question sur votre propre patrimoine de données ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-la, la réponse suit sous 24 heures
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Avant, après</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Avant et après la gouvernance des données</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Gouverner les données vient avant l'analyse, la gouvernance de l'IA et les projets qui s'appuient dessus.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation data IA', href: '/formation-data-ia', tag: 'Analyser', desc: "Analyser ses fichiers avec l'IA sans coder : exports, tableaux, reporting, contrôle des chiffres." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Systèmes IA', desc: "Registre des usages, charte, comité, AI Act : encadrer les systèmes d'IA eux-mêmes." },
              { label: 'Conseil data et IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "Quand le chantier dépasse la formation : audit, gouvernance, référentiels, préparation pour l'IA." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Cadre', desc: "Le dispositif d'ensemble : registre, politique IA, comité, suivi, conformité." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Les données personnelles face aux assistants : réglages, précautions, place du DPO." },
              { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Projet', desc: "Ce que permet un fonds documentaire bien tenu : des réponses sourcées sur vos propres documents." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Équipes', desc: "Faire progresser toutes les équipes, y compris sur le bon usage des données dans les assistants." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'OPCO', desc: "Les dispositifs de prise en charge et le dossier à préparer, opérateur par opérateur." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Ouvrir<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
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
            Les ateliers de cette formation reprennent la méthode que Mathias Nizan applique dans les diagnostics du cabinet, avant chaque projet d'IA ; il en a revu le contenu le 7 octobre 2026. Son itinéraire figure sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation gouvernance des données</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Donnez un propriétaire à vos données</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Indiquez-nous vos outils, vos sources principales et les personnes concernées. Le lendemain, vous recevez une proposition de format (un ou deux jours), la liste des données à préparer et le devis, avec le dossier OPCO.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Préparer la formation
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Deux jours · Qualiopi · dossier OPCO · sur site ou à distance</p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (section propre à la page, remplace OfficialSources) ── */}
      <section aria-labelledby="sources-gouvernance-donnees" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-gouvernance-donnees" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes qui encadrent vos données
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Protection des données personnelles, règlement européen sur l'IA et certification de la formation :
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={srcLinkStyle}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
