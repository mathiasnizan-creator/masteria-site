import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Database, Users, GraduationCap, MapPin, Check, Sparkles, Layers,
  ShieldCheck, Landmark, FileText, ListChecks, Gauge, Workflow, ClipboardCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
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
 *  - CETTE page = gouverner les DONNÉES : patrimoine informationnel, rôles,
 *    qualité, données de référence, RGPD, préparation pour l'IA ;
 *  - /conseil-data-ia = la mission de conseil qui fait le travail à votre place.
 *
 * INTÉGRITÉ : tarif = grille unique Masteria (1 980 € HT/jour intra, groupe
 * jusqu'à 12), pas de CPF, aucun client nommé, aucun chiffre de résultat.
 * Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'formation-gouvernance-donnees'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation gouvernance des données : rôles, qualité, référentiels | Masteria"
const META_DESC = "Formation gouvernance des données en 2 jours : cartographier le patrimoine informationnel, poser les rôles, mesurer la qualité, gérer les données de référence, préparer les données pour l'IA. Sur vos données réelles. Qualiopi, OPCO."
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
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Database, label: 'Sur vos données réelles, pas sur un cas d\'école' },
  { icon: Users, label: 'Responsables data, SI, DAF, DPO, managers métier' },
  { icon: MapPin, label: 'Intra, sur site ou à distance · France, Suisse, Belgique' },
]

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour « cartographie et règles » possible pour un périmètre resserré" },
  { label: 'Pour qui', value: "Responsables data ou SI, DAF, DPO, responsables qualité, managers métier propriétaires de données, futurs référents data" },
  { label: 'Objectif', value: "Repartir avec une cartographie du patrimoine informationnel, des rôles nommés, des règles écrites et un plan à trois mois" },
  { label: 'Outils', value: "Vos logiciels actuels (ERP, CRM, partages, tableur) et les assistants IA du marché pour accélérer l'inventaire et les contrôles" },
  { label: 'Prérequis', value: "Aucun prérequis technique : la formation est faite pour des non-spécialistes qui portent la responsabilité des données" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Pourquoi ───────── */

const POURQUOI = [
  { icon: FileText, title: 'Personne ne sait ce que contient le patrimoine informationnel', desc: "Données des logiciels, documents, mails, données techniques, données personnelles, savoir-faire non écrit : chaque équipe connaît sa part, personne n'a la carte. La première journée la dessine, source par source." },
  { icon: Layers, title: 'La même fiche client existe en trois versions', desc: "Le CRM, l'ERP et un tableur ne racontent pas la même histoire. Sans données de référence gouvernées, chaque analyse et chaque outil d'IA produit des résultats faux avec assurance. La formation apprend à fixer une source unique et ses règles." },
  { icon: ShieldCheck, title: 'Le RGPD est traité comme une affaire de juristes', desc: "Bases légales, durées de conservation, données sensibles : les règles existent, elles ne sont pas traduites en gestes pour les équipes. La formation les rend opérationnelles, avec le DPO quand il y en a un." },
  { icon: Workflow, title: "Les projets d'IA butent sur les données", desc: "Un assistant documentaire ou un agent ne vaut que ce que valent les données qu'on lui donne. La formation prépare le socle : ce qui est exploitable, ce qui demande un rangement, ce qui ne doit pas sortir." },
]

/* ───────── Programme ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Comprendre et cartographier',
    resume: "Du patrimoine informationnel aux rôles et à la qualité mesurée, sur les données réelles des participants.",
    matin: [
      { t: 'Ce que gouverner ses données veut dire', d: "Définitions utiles et rien de plus : gouvernance, propriétaire, référentiel, qualité, cycle de vie. Ce qu'une PME doit tenir, ce qu'une ETI doit ajouter, ce qu'un grand groupe fait et qui ne vous concerne pas." },
      { t: "Le patrimoine informationnel de l'entreprise", d: "Les six familles : données des logiciels métier, documents, échanges, données techniques, données personnelles, savoir-faire non écrit. Chaque participant inventorie les siennes." },
      { t: 'Les rôles : propriétaire, référent, DPO, DSI', d: "Qui décide, qui saisit, qui contrôle, qui répond aux questions. Trois rôles suffisent souvent ; la formation les nomme sur vos données, pas sur un organigramme théorique." },
      { t: 'Atelier : la carte de votre patrimoine', d: "Par équipe, une cartographie source par source : où c'est, qui en est responsable, à quoi ça sert, quel niveau de sensibilité. La carte part avec vous." },
    ],
    apresmidi: [
      { t: 'Mesurer la qualité des données', d: "Complétude, exactitude, fraîcheur, unicité, cohérence : cinq critères, des contrôles simples dans vos outils, et un score que l'on peut suivre dans le temps." },
      { t: 'Les données de référence', d: "Client, produit, fournisseur, site, article : ce que sont les données de référence, pourquoi elles cassent tout quand elles divergent, comment fixer une source unique et ses règles de création et de mise à jour." },
      { t: 'RGPD et données sensibles, en gestes', d: "Base légale, finalité, durée de conservation, données sensibles : traduit en règles d'équipe. Ce qui ne monte jamais dans un outil, ce qui s'anonymise avant, ce qu'on documente." },
      { t: "Atelier : le diagnostic qualité d'un référentiel", d: "Chaque participant mesure la qualité d'un référentiel réel (clients, produits, fournisseurs) avec l'aide d'un assistant IA, et écrit les trois écarts à corriger en premier." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Outiller, préparer pour l\'IA, planifier',
    resume: "Du catalogue à la préparation des données pour l'IA, jusqu'au plan d'action de l'équipe.",
    matin: [
      { t: 'Le catalogue de données, sans plateforme', d: "Un catalogue tenu dans un outil que vous avez déjà : sources, propriétaires, définitions, règles, date de revue. Quand une plateforme de gouvernance se justifie, et quand un document partagé suffit." },
      { t: 'Gérer les données de référence au quotidien', d: "Le circuit de création d'une fiche, la validation, la déduplication, la revue périodique. Une gestion des données de référence dimensionnée à votre taille, dans votre logiciel principal." },
      { t: "Les assistants IA au service de l'inventaire et des contrôles", d: "Repérer les doublons, proposer des définitions, contrôler un export, rédiger une règle : ce que les assistants du marché font bien, et les vérifications qui restent humaines." },
      { t: 'Atelier : votre catalogue, première version', d: "Chaque équipe construit son catalogue sur ses dix sources les plus importantes, avec les rôles et les règles écrits." },
    ],
    apresmidi: [
      { t: "Préparer les données pour l'IA", d: "Ce qu'un assistant documentaire, un agent ou une analyse attendent des données : accessibles, propres, cloisonnées par droits. Ce qui est exploitable aujourd'hui, ce qui demande un rangement, ce qui attend." },
      { t: "Gouvernance des données et gouvernance de l'IA", d: "Comment le registre des usages IA s'appuie sur le catalogue de données ; ce que le règlement européen sur l'IA et le RGPD demandent de documenter, sans sur-interprétation." },
      { t: 'Faire vivre la gouvernance', d: "Le rythme de revue, les indicateurs qui tiennent en une page, le rôle du référent data, ce qui se dit en comité et ce qui ne s'y dit pas." },
      { t: "Plan d'action à trois mois", d: "Les trois chantiers de l'équipe : quel référentiel, quelle règle, quel contrôle, qui les porte, à quelle échéance. La liste part avec vous et sert de base au point de suivi." },
    ],
  },
]

/* ───────── Ce que vous construisez ───────── */

const LIVRABLES = [
  { icon: FileText, title: 'La carte du patrimoine informationnel', desc: "Source par source : où, qui, pour quoi, quelle sensibilité. La première fois que l'entreprise se voit en entier." },
  { icon: ListChecks, title: 'Le catalogue, première version', desc: "Vos dix sources les plus importantes, avec définitions, propriétaires, règles et dates de revue, dans un outil que vous avez déjà." },
  { icon: Gauge, title: 'Un diagnostic qualité chiffré', desc: "Le score de qualité d'un référentiel réel, les trois écarts prioritaires, les contrôles à rejouer chaque mois." },
  { icon: ClipboardCheck, title: "Les règles d'équipe et le plan à trois mois", desc: "Une page de règles (ce qui monte dans un outil, ce qui s'anonymise, qui valide) et trois chantiers nommés avec leur porteur." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Qu'apprend-on dans une formation gouvernance des données ?", a: "À prendre la responsabilité des données de l'entreprise sans être informaticien. Jour 1 : comprendre ce que gouverner veut dire, cartographier le patrimoine informationnel, nommer les rôles, mesurer la qualité, gérer les données de référence, traduire le RGPD en gestes. Jour 2 : construire un catalogue sans plateforme, faire vivre les référentiels au quotidien, utiliser les assistants IA pour l'inventaire et les contrôles, préparer les données pour les projets d'IA, et écrire le plan d'action à trois mois. Tout se fait sur vos données réelles." },
  { q: "Quelles données constituent le patrimoine informationnel d'une entreprise ?", a: "Six familles. Les données structurées des logiciels métier : clients, commandes, factures, stocks, paie. Les documents : contrats, procédures, offres, plans. Les échanges : mails, tickets, comptes rendus. Les données techniques : capteurs, machines, logs. Les données personnelles, qui traversent les familles précédentes et relèvent du RGPD. Et le savoir-faire non écrit des personnes expérimentées. La formation les inventorie pour votre entreprise, source par source, avec leur propriétaire, leur usage et leur sensibilité." },
  { q: "Qu'est-ce que la gestion des données de référence ?", a: "C'est le fait de décider, pour chaque donnée partagée par plusieurs systèmes (client, produit, fournisseur, site, article), d'une source unique, d'un propriétaire, de règles de création et de mise à jour et d'un contrôle régulier. Quand la fiche client existe en trois versions, chaque analyse et chaque outil d'IA produit des résultats faux. Pour une PME ou une ETI, cette gestion n'exige pas d'outil dédié : un référentiel tenu dans le logiciel principal, des règles écrites et une revue périodique suffisent. La formation vous fait construire ce circuit sur un référentiel réel." },
  { q: "Cette formation est-elle un tutoriel de gouvernance des données ?", a: "C'est mieux qu'un tutoriel : un tutoriel explique une méthode en général ; la formation l'applique à vos données pendant deux jours, avec un formateur qui fait ce travail en mission. Vous repartez avec votre carte, votre catalogue, votre diagnostic qualité et votre plan, pas avec un modèle à adapter. Pour ceux qui veulent d'abord lire, notre page conseil data et IA décrit la démarche et les notions." },
  { q: "Faut-il être informaticien ou data scientist pour suivre ?", a: "Non, et ce n'est pas le public visé. La formation s'adresse à ceux qui portent la responsabilité des données sans en être les techniciens : responsable SI ou data d'une PME, DAF, DPO, responsable qualité, managers métier propriétaires d'un référentiel, futurs référents data. Aucun prérequis technique ; les manipulations se font dans vos outils habituels et avec des assistants IA du marché." },
  { q: "Quelle différence avec la formation data IA et la formation gouvernance IA ?", a: "Trois sujets voisins. La formation data IA apprend aux équipes métier à analyser leurs données avec l'IA : exports, tableaux, reporting. La formation gouvernance IA traite la gouvernance des systèmes d'IA : registre des usages, charte, règlement européen. La formation gouvernance des données, celle-ci, traite les données elles-mêmes : patrimoine, rôles, qualité, référentiels, RGPD, préparation pour l'IA. Elle précède souvent les deux autres : sans données gouvernées, ni l'analyse ni l'IA ne sont fiables." },
  { q: "La formation travaille-t-elle sur nos vraies données ?", a: "Oui, c'est la règle. Chaque participant apporte ses sources : un export du CRM, un référentiel produits, un dossier partagé, une liste de fournisseurs. Les ateliers (cartographie, diagnostic qualité, catalogue, règles) se font dessus. Les données personnelles sont anonymisées avant la session quand c'est nécessaire, et la formation se tient dans vos outils, sans que vos données sortent de l'entreprise." },
  { q: "Combien de temps dure la formation et en quel format ?", a: "Deux jours, soit quatorze heures, en intra-entreprise, sur site ou à distance, pour un groupe jusqu'à douze personnes. Une version d'une journée existe pour un périmètre resserré : cartographie du patrimoine et règles d'équipe, sans le catalogue ni la préparation pour l'IA. Le format se cale au cadrage, gratuit, selon vos outils et le niveau de départ des participants." },
  { q: "Combien coûte la formation gouvernance des données ?", a: "1 980 € HT par jour de formation en intra, pour l'ensemble du groupe jusqu'à douze participants, soit 3 960 € HT les deux jours, selon la grille unique de Masteria. Les frais de déplacement s'ajoutent au réel en dehors de Lyon ; le distanciel n'en comporte pas. Le devis arrive sous 24 heures après le cadrage." },
  { q: "La formation est-elle finançable par notre OPCO ?", a: "Oui. Masteria est certifiée Qualiopi : la formation entre dans le plan de développement des compétences et peut être prise en charge par votre OPCO, selon votre branche et vos droits. Nous préparons le dossier avec vous (programme, objectifs, modalités d'évaluation) et la décision reste à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil Quel OPCO ? répond en deux minutes." },
  { q: "Et si nos données demandent un vrai chantier avant la formation ?", a: "Alors la formation le révèle, et c'est utile. Quand la cartographie montre des données dispersées, des référentiels contradictoires ou des accès à revoir, la formation s'arrête à un plan d'action réaliste, et notre conseil data et IA prend le relais pour faire le travail avec vous : audit, gouvernance, préparation des données pour l'IA. Les deux se complètent ; la formation rend vos équipes capables de tenir ce que le conseil met en place." },
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
    description: "1 980 € HT par jour de formation en intra, pour le groupe (jusqu'à 12 participants)",
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
  headline: 'Formation gouvernance des données : gouverner son patrimoine informationnel avant l\'IA',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-gouvernance-donnees#webpage' },
  about: [
    { '@type': 'Thing', name: 'Gouvernance des données', sameAs: 'https://fr.wikipedia.org/wiki/Gouvernance_des_donn%C3%A9es' },
    { '@type': 'Thing', name: 'Gestion des données de référence', sameAs: 'https://fr.wikipedia.org/wiki/Gestion_des_donn%C3%A9es_de_r%C3%A9f%C3%A9rence' },
    { '@type': 'Thing', name: 'Qualité des données', sameAs: 'https://fr.wikipedia.org/wiki/Qualit%C3%A9_des_donn%C3%A9es' },
  ],
}

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
        dateModified="2026-09-04"
        speakable={['#geo-summary', '#en-bref']}
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
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Formation · Gouvernance des données · 2 jours</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Formation gouvernance des données :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>gouverner votre patrimoine informationnel avant l'IA</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation gouvernance des données de Masteria apprend en deux jours à <strong style={{ color: '#fff', fontWeight: 700 }}>cartographier le patrimoine informationnel, nommer les rôles, mesurer la qualité, gérer les données de référence et préparer les données pour l'IA</strong>, sur vos données réelles. Certifiée Qualiopi, finançable par votre OPCO.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Elle s'adresse à ceux qui portent la responsabilité des données sans en être les techniciens : responsable SI ou data, DAF, DPO, qualité, managers métier. Aucun prérequis technique ; vous repartez avec votre carte, votre catalogue, votre diagnostic qualité et un plan à trois mois.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Voir le programme</a>
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
              <Kicker>Pourquoi</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Pourquoi former vos équipes à la gouvernance des données ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que les données de l'entreprise n'ont pas de propriétaire, que la même fiche client existe en trois versions, que le RGPD reste une affaire de juristes et que les projets d'IA butent sur ce socle. Deux jours suffisent à poser une carte, des rôles, des règles et un plan que l'équipe tient ensuite seule.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour analyser les données une fois gouvernées, la <Link to="/formation-data-ia" style={aStyle}>formation data IA</Link> prend le relais ; pour gouverner les systèmes d'IA eux-mêmes, la <Link to="/formation-gouvernance-ia" style={aStyle}>formation gouvernance IA</Link>.
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
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Le programme des 2 jours : cartographier, outiller, préparer pour l'IA</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : comprendre et cartographier : le patrimoine informationnel, les rôles, la qualité mesurée, les données de référence, le RGPD en gestes. Jour 2 : outiller et préparer pour l'IA : le catalogue sans plateforme, les référentiels au quotidien, les assistants IA pour l'inventaire, la préparation des données, le plan à trois mois.</strong>
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
            Le programme s'ajuste au cadrage, gratuit : vos outils, vos sources, le niveau de départ. En un jour, on s'arrête à la carte et aux règles ; les deux jours vont jusqu'au catalogue, à la préparation pour l'IA et au plan.
          </p>
        </div>
      </section>

      {/* ── LIVRABLES ── */}
      <section id="livrables" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que vous construisez</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Quatre livrables qui partent avec vous</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La formation ne délivre pas un modèle à adapter : chaque atelier produit un élément de votre gouvernance, sur vos données. La carte, le catalogue, le diagnostic qualité et le plan à trois mois existent à la fin du deuxième jour.</strong>
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
            Quand la carte révèle un chantier trop lourd pour l'équipe seule, notre <Link to="/conseil-data-ia" style={aStyle}>conseil data et IA</Link> prend le relais : audit, gouvernance, préparation des données pour les projets d'IA.
          </p>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>1 980 € HT par jour de formation, pour le groupe</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La formation gouvernance des données suit la grille unique de Masteria : 1 980 € HT par jour en intra, pour l'ensemble du groupe (jusqu'à 12 participants), soit 3 960 € HT les 2 jours ; le format d'une journée « carte et règles » se cale au cadrage. Masteria est certifiée Qualiopi : la formation est finançable par votre OPCO dans le cadre du plan de développement des compétences, nous préparons le dossier avec vous et la décision reste à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {["1 980 € HT par jour, pour le groupe (jusqu'à 12 personnes)", '2 jours recommandés : catalogue, référentiels et plan compris', 'Qualiopi : finançable OPCO, dossier préparé ensemble', 'Devis sous 24 h après un cadrage gratuit'].map(pt => (
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui vous forme</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>Des formateurs qui gouvernent des données en mission</h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              La formation est animée par Mathias Nizan ou par un formateur du réseau Masteria, des indépendants expérimentés qui cadrent des socles data pour des projets d'IA le reste de l'année. Ce qu'ils enseignent, ils le font en mission ; ce qu'ils voient échouer en mission, ils le racontent en formation. Multi-outils et indépendants des éditeurs : aucune plateforme de gouvernance n'est vendue à la fin.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[['Depuis 2022', 'spécialisé uniquement IA'], ['+1 500', 'professionnels formés'], ['Qualiopi', 'formation finançable OPCO'], ['FR · CH · BE', 'sur site ou à distance']].map(([k, v]) => (
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation gouvernance des données : les questions fréquentes</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
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
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Pour aller plus loin</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>La gouvernance des données précède l'analyse, la gouvernance de l'IA et les projets qui s'appuient dessus.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation data IA', href: '/formation-data-ia', tag: 'Analyser', desc: "Analyser ses données avec l'IA sans coder : exports, tableaux, reporting, vérification des chiffres." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Systèmes IA', desc: "Registre des usages, charte, comité, règlement européen : gouverner les systèmes d'IA eux-mêmes." },
              { label: 'Conseil data et IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "Quand le chantier dépasse la formation : audit, gouvernance, données de référence, préparation pour l'IA." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Cadre', desc: "Le dispositif d'ensemble : registre, politique IA, comité, monitoring, conformité." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Ce qu'on peut confier aux outils, les réglages qui protègent vos données, le rôle du DPO." },
              { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Projet', desc: "Ce qu'un fonds documentaire gouverné rend possible : réponses sourcées sur vos documents." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Équipes', desc: "Le volet data et IA de l'acculturation : quelles données confier à l'IA, comment vérifier un chiffre." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'OPCO', desc: "Les dispositifs de prise en charge, opérateur par opérateur, et le dossier à préparer." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>En savoir plus<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FounderNote />

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
              Dites-nous vos outils, vos sources principales et qui participera. Nous revenons vers vous sous 24 heures avec le format (1 ou 2 jours), les données à préparer et le devis, prise en charge OPCO comprise.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Lyon, France, Suisse, Belgique</p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
