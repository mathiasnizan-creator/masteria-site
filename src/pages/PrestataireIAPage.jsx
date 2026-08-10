import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Handshake, Building2, GraduationCap,
  MapPin, Check, ListChecks, ShieldCheck, Landmark, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page hybride guide de choix + positionnement — « prestataire IA »
 * (slug /prestataire-ia). Cible la grappe (Semrush 2026-08-10) :
 * « prestataire ia » (90/mois, KD 30, CPC 9,18 $ !), « prestataire de
 * solution ia » (40), « prestataires solutions ia sur mesure » (40),
 * « prestataires accompagnement ia personnalisées » (30), « prestataires
 * si innovations ia 12 mois » (40). SERP vérifiée le 2026-08-10 : guide
 * Rouge Hexagone en tête, annuaires (entreprise-ia, cartographie France
 * Num : 972 acteurs), pages de service (Baker Tilly), annonceurs Keyrus.
 *
 * RÉPARTITION D'INTENTIONS (ne pas cannibaliser) :
 *  - /meilleure-agence-ia = comparer les AGENCES (classements, critères) ;
 *  - /meilleur-cabinet-conseil-ia = choisir un CABINET DE CONSEIL ;
 *  - /prestataire-ia = CETTE page : la typologie COMPLÈTE des prestataires
 *    (agence, cabinet, ESN/intégrateur, organisme de formation, indépendant),
 *    les critères transverses et les questions à poser. Elle renvoie aux
 *    deux pages « meilleur* » pour l'approfondissement par type.
 *
 * INTÉGRITÉ : guide honnête (on cite la cartographie France Num et les
 * annuaires, on ne prétend pas être neutres : bloc « qui sommes-nous pour
 * le dire » + FounderNote), aucun classement nominatif de concurrents,
 * aucun prix inventé (renvoi /prix-projet-ia), posture capacité.
 */

const SLUG = 'prestataire-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Prestataire IA : les 5 types et comment choisir | Masteria"
const META_DESC = "Prestataire IA : agence, cabinet de conseil, intégrateur, organisme de formation ou indépendant. Les critères qui comptent, les questions à poser, les pièges."
const KEYWORDS = "prestataire ia, prestataire intelligence artificielle, prestataire de solution ia, prestataires solutions ia sur mesure, prestataire accompagnement ia, choisir prestataire ia"

/* ───────── Styles partagés (calque cluster conseil) ───────── */

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

const HERO_BADGES = [
  { icon: Scale, label: '5 types de prestataires comparés' },
  { icon: ListChecks, label: 'Les questions à poser avant de signer' },
  { icon: ShieldCheck, label: 'Guide honnête : nous sommes juge et partie' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "Un prestataire IA est une structure ou un expert externe qui conçoit, déploie ou fait adopter l'intelligence artificielle dans votre organisation" },
  { label: 'Les 5 types', value: "Agence de développement, cabinet de conseil, ESN / intégrateur, organisme de formation, indépendant" },
  { label: 'Critères clés', value: "Cas démontrés sur votre métier, indépendance vis-à-vis des éditeurs, propriété et réversibilité, sécurité des données, capacité à former vos équipes" },
  { label: 'Où chercher', value: "La cartographie France Num recense les acteurs français ; les annuaires spécialisés complètent" },
  { label: 'Les pièges', value: "Le prestataire mono-outil commissionné, le rapport sans exécution, le projet qui ne forme personne, la dépendance sans réversibilité" },
  { label: 'Masteria', value: "Prestataire aux trois casquettes : conseil, développement sur mesure et formation certifiée Qualiopi" },
]

/* ───────── Les 5 types de prestataires (tableau citable) ───────── */

const TYPES = [
  {
    type: 'Agence de développement IA',
    livre: "Agents, outils sur mesure, intégrations, automatisations",
    quand: "Vous savez quoi construire et cherchez qui le construit bien",
  },
  {
    type: 'Cabinet de conseil IA',
    livre: "Stratégie, audit, feuille de route, gouvernance",
    quand: "La décision n'est pas prise ou l'organisation n'est pas prête",
  },
  {
    type: 'ESN / intégrateur SI',
    livre: "Intégration à grande échelle, régie, tierce maintenance",
    quand: "Grands comptes, SI complexe, trajectoire sur 12 mois et plus",
  },
  {
    type: 'Organisme de formation',
    livre: "Montée en compétence des équipes, acculturation, parcours métier",
    quand: "Le frein est humain : les outils sont là, les usages manquent",
  },
  {
    type: 'Indépendant / freelance',
    livre: "Expertise pointue, missions courtes et ciblées",
    quand: "Besoin précis, budget contenu, pilotage interne solide",
  },
]

/* ───────── Les critères de choix (6 cartes) ───────── */

const CRITERES = [
  {
    icon: ListChecks,
    title: 'Des cas démontrés sur votre type de besoin',
    desc: "Pas un portfolio de logos : des cas d'usage expliqués, avec le problème de départ, ce qui a été construit et ce qui a changé. Un prestataire sérieux sait raconter trois missions comparables à la vôtre, et vous dit aussi ce qui a été difficile.",
  },
  {
    icon: Scale,
    title: "L'indépendance vis-à-vis des éditeurs",
    desc: "Demandez si le prestataire est commissionné ou partenaire exclusif d'un éditeur. Une recommandation mono-outil n'est pas forcément mauvaise, mais vous devez savoir d'où elle parle. Les besoins réels sont souvent multi-outils.",
  },
  {
    icon: ShieldCheck,
    title: 'La propriété et la réversibilité',
    desc: "Qui possède le code, les prompts, les configurations et les données à la fin ? Un livrable qui ne fonctionne qu'avec son auteur n'est pas un livrable. La réversibilité s'écrit au contrat, avant de commencer.",
  },
  {
    icon: Building2,
    title: 'La sécurité et la conformité',
    desc: "Où passent vos données, quelles offres entreprise sont utilisées, comment le RGPD et le règlement européen sur l'IA sont traités. Un prestataire qui élude ces questions vous expose à sa place.",
  },
  {
    icon: GraduationCap,
    title: 'La capacité à former vos équipes',
    desc: "Un outil déployé sans montée en compétence meurt en trois mois. Vérifiez que le prestataire forme (et comment c'est financé) ou qu'il s'articule avec un organisme qui le fait. C'est le critère le plus oublié des appels d'offres.",
  },
  {
    icon: Handshake,
    title: 'La présence après la mise en production',
    desc: "Qui répond quand ça dérive, qui fait évoluer, qui mesure l'adoption ? Clarifiez le modèle d'engagement dans la durée : forfait, régie, accompagnement. Le projet ne s'arrête pas à la recette.",
  },
]

/* ───────── Les questions à poser (liste citable) ───────── */

const QUESTIONS = [
  "Sur quels cas comparables au nôtre avez-vous travaillé, et qu'est-ce qui a été difficile ?",
  "Êtes-vous partenaire ou commissionné par un éditeur ? Lequel ?",
  "Qui possède le code, les prompts et les configurations à la fin de la mission ?",
  "Comment nos données sont-elles traitées, et avec quelles offres entreprise ?",
  "Qui forme nos équipes, et ce volet est-il finançable par notre OPCO ?",
  "Que se passe-t-il après la mise en production : qui maintient, qui mesure, à quel coût ?",
  "Que nous déconseillez-vous de lancer, et pourquoi ?",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un prestataire IA ?",
    a: "C'est une structure ou un expert externe qui apporte à votre organisation des compétences en intelligence artificielle : cadrage stratégique, conception et développement de solutions, intégration au système d'information, formation des équipes ou gouvernance. Le terme recouvre cinq familles aux métiers différents : les agences de développement, les cabinets de conseil, les ESN et intégrateurs, les organismes de formation et les indépendants. Le bon choix dépend de votre besoin réel : construire, décider, intégrer à l'échelle, former, ou une expertise ponctuelle.",
  },
  {
    q: "Quel type de prestataire IA choisir ?",
    a: "Partez du frein réel. Si la décision n'est pas prise (quoi faire, dans quel ordre, avec quel budget), un cabinet de conseil ou un diagnostic court. Si vous savez quoi construire, une agence de développement. Si l'enjeu est l'intégration à un SI complexe sur douze mois ou plus, une ESN ou un intégrateur. Si les outils sont là et que les usages manquent, un organisme de formation. Si le besoin est pointu et cadré, un indépendant. Beaucoup de projets combinent plusieurs types ; certains prestataires, dont Masteria, couvrent plusieurs casquettes sous un même toit, ce qui évite les frictions entre intervenants.",
  },
  {
    q: "Où trouver des prestataires IA en France ?",
    a: "La cartographie de France Num, portée par le ministère de l'Économie, recense plusieurs centaines d'acteurs français de l'IA et permet de filtrer par besoin : c'est le point de départ le plus neutre. Les annuaires spécialisés privés complètent, avec la prudence d'usage sur les classements sponsorisés. Ensuite, rien ne remplace deux ou trois échanges de cadrage : la plupart des prestataires sérieux, nous compris, offrent ce premier échange, et la façon dont ils le mènent vous en dit plus qu'un annuaire.",
  },
  {
    q: "Combien coûte un prestataire IA ?",
    a: "Tout dépend du type de prestation : une mission de conseil cadrée, un développement sur mesure, une intégration à l'échelle et un parcours de formation ne se chiffrent pas pareil. Méfiez-vous des fourchettes publiées sans méthode ni périmètre : elles viennent de sites qui vendent la prestation. Pour vous repérer, nous publions nos ordres de grandeur par type de projet sur la page prix d'un projet IA. Un devis sérieux découle toujours d'un périmètre écrit, jamais l'inverse.",
  },
  {
    q: "Quelles questions poser avant de signer avec un prestataire IA ?",
    a: "Sept questions font le tri : les cas comparables déjà traités (avec les difficultés rencontrées), les liens avec les éditeurs (partenariats, commissions), la propriété du code et des configurations à la fin, le traitement de vos données et la conformité, la formation de vos équipes et son financement, le modèle d'engagement après la mise en production, et ce qu'il vous déconseille de lancer. Cette dernière question est la plus révélatrice : un prestataire qui recommande tout vend un devis, pas un conseil.",
  },
  {
    q: "Prestataire de solutions IA sur mesure : que vérifier de plus ?",
    a: "Trois points spécifiques au sur-mesure. La réversibilité d'abord : le code, les prompts et l'architecture doivent vous appartenir et être documentés pour qu'une autre équipe puisse reprendre. La maintenance ensuite : les modèles évoluent tous les trimestres, un outil sur mesure sans plan de maintenance se dégrade vite. L'intégration enfin : la valeur d'une solution sur mesure vient de sa connexion à vos systèmes réels (CRM, ERP, documents), vérifiez que le prestataire l'a déjà fait sur des environnements comparables au vôtre.",
  },
  {
    q: "Qu'est-ce qu'un accompagnement IA personnalisé par un prestataire ?",
    a: "C'est une présence dans la durée plutôt qu'une mission ponctuelle : le prestataire cadre vos usages, déploie les outils, conduit le changement auprès des équipes et mesure l'adoption, à un rythme adapté à votre organisation. C'est le format le plus adapté quand le frein est autant humain que technique. Chez Masteria, ce format est décrit sur la page accompagnement IA, avec ses quatre phases et ce qui est finançable dedans.",
  },
  {
    q: "Prestataire IA, éditeur ou fournisseur de modèles : quelle différence ?",
    a: "Trois étages qu'il vaut mieux ne pas confondre en rédigeant un appel d'offres. Les fournisseurs de modèles (OpenAI, Anthropic, Google, Mistral) entraînent et exposent les modèles d'IA : vous ne les mandatez pas pour un projet, vous consommez leurs services. Les éditeurs intègrent ces modèles dans des logiciels prêts à l'emploi (Microsoft avec Copilot, les éditeurs métier). Le prestataire IA, lui, est la structure de services qui travaille pour vous : il choisit, assemble, développe, intègre et forme, en s'appuyant sur les deux étages précédents. Cette page traite du troisième étage ; pour choisir l'outil, voyez notre comparateur d'outils IA.",
  },
  {
    q: "Pourquoi lire un guide du choix de prestataire écrit par un prestataire ?",
    a: "Bonne question, et la réponse honnête est : en le sachant. Masteria est prestataire IA (conseil, développement, formation), ce guide n'est donc pas neutre. Nous l'assumons avec deux garde-fous : les critères et les questions listés ici se posent à tout prestataire, nous compris, et nous vous renvoyons vers la cartographie publique France Num pour comparer. Si nos réponses à ces questions vous conviennent, le premier échange de cadrage est gratuit ; sinon, le guide reste utilisable avec n'importe qui d'autre.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Masteria — Prestataire IA',
  alternateName: "Prestataire en intelligence artificielle",
  description: "Prestataire IA aux trois casquettes : cabinet de conseil (diagnostic, audit, stratégie, gouvernance), agence de développement de solutions IA sur mesure (agents, outils, intégrations) et organisme de formation certifié Qualiopi (acculturation, parcours par métier). Indépendant des éditeurs, France, Suisse, Belgique.",
  url: 'https://www.master-ia.fr/prestataire-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/prestataire-ia#webpage' },
  serviceType: 'Prestations en intelligence artificielle',
  category: 'Conseil, développement et formation IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conseil et cadrage', description: "Diagnostic, audit, stratégie et gouvernance de l'IA." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solutions IA sur mesure', description: "Agents, outils métier, intégrations et automatisations, avec propriété et réversibilité contractuelles." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formation et accompagnement personnalisé', description: "Acculturation, parcours par métier et accompagnement dans la durée, volet formation certifié Qualiopi finançable OPCO." } },
    ],
  },
}

/* Les questions à poser en ItemList (liste citable — GEO). */
const questionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Les 7 questions à poser à un prestataire IA avant de signer',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: QUESTIONS.map((q, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: q,
  })),
}

/* DefinedTermSet : la typologie des prestataires (entités citables). */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/prestataire-ia#termes',
  name: 'Prestataires IA : la typologie',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Prestataire IA',
      description: "Structure ou expert externe qui apporte des compétences en intelligence artificielle à une organisation : conseil, développement, intégration, formation ou gouvernance.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'ESN / intégrateur IA',
      description: "Entreprise de services du numérique qui intègre l'IA à un système d'information existant, souvent en régie et à l'échelle de grands comptes, sur des trajectoires de douze mois et plus.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Réversibilité',
      description: "Capacité contractuelle et technique à reprendre ou transférer une solution IA (code, prompts, configurations, documentation) sans dépendre du prestataire qui l'a construite.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/prestataire-ia#article',
  headline: 'Prestataire IA : les 5 types, les critères qui comptent et les questions à poser',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/prestataire-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Prestataire IA', description: "Structure externe apportant des compétences en intelligence artificielle" },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Entreprise de services du numérique', sameAs: 'https://fr.wikipedia.org/wiki/Entreprise_de_services_du_num%C3%A9rique' },
  ],
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

export default function PrestataireIAPage() {
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
    { name: 'Prestataire IA', slug: SLUG },
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
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
          { name: "Cartographie des solutions IA françaises — France Num (ministère de l'Économie)", url: 'https://www.francenum.gouv.fr/intelligence-artificielle' },
        ]}
        extraJsonLd={[serviceJsonLd, questionsJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Prestataire IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Handshake size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de choix · Prestataire IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Prestataire IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>les 5 types, et comment choisir le vôtre</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un prestataire IA est une structure externe qui conçoit, déploie ou fait adopter l'intelligence artificielle chez vous. Le terme recouvre <strong style={{ color: '#fff', fontWeight: 700 }}>cinq familles aux métiers différents</strong> : agence de développement, cabinet de conseil, ESN / intégrateur, organisme de formation et indépendant. Ce guide donne les critères transverses, les questions à poser et les pièges, avant de dire où nous nous situons.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Transparence d'abord : Masteria est prestataire en intelligence artificielle, ce guide n'est donc pas neutre et vous le lirez en le sachant. Les critères qui suivent se posent à tout le monde, nous compris, et la cartographie publique France Num vous permet de comparer largement. Un guide honnête vaut mieux qu'une fausse neutralité.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <a href="#types" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Comparer les 5 types
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parler de votre besoin
            </Link>
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

      {/* ── LES 5 TYPES (tableau citable) ── */}
      <section id="types" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>La typologie</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quels sont les types de prestataires IA ?
          </h2>

          <p style={answerStyle}>
            <strong>Cinq familles de prestataires IA coexistent : l'agence de développement (elle construit), le cabinet de conseil (il éclaire la décision), l'ESN ou intégrateur (il déploie à l'échelle du SI), l'organisme de formation (il fait monter les équipes) et l'indépendant (expertise ciblée). Le bon choix part de votre frein réel, pas du prestataire le plus visible.</strong>
          </p>

          <div style={{ border: '1px solid #E5E7EB', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Typologie des prestataires IA : ce qu'ils livrent et quand les choisir" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '26%' }}>Type de prestataire</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Ce qu'il livre</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Quand le choisir</th>
                </tr>
              </thead>
              <tbody>
                {TYPES.map((row, i) => (
                  <tr key={row.type} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#0A0A0A', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.type}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.livre}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.quand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, marginTop: 20, maxWidth: 880 }}>
            Pour approfondir par type : notre guide du choix d'une <Link to="/meilleure-agence-ia" style={aStyle}>agence IA</Link> et celui du <Link to="/meilleur-cabinet-conseil-ia" style={aStyle}>cabinet de conseil en IA</Link> détaillent les critères propres à chaque famille. Pour explorer largement le marché français, la <a href="https://www.francenum.gouv.fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" style={aStyle}>cartographie France Num</a> recense les acteurs référencés.
          </p>
        </div>
      </section>

      {/* ── LES CRITÈRES (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les critères</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment choisir un prestataire IA ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Six critères transverses font le tri, quel que soit le type de prestataire : des cas démontrés sur votre type de besoin, l'indépendance vis-à-vis des éditeurs, la propriété et la réversibilité des livrables, la sécurité des données, la capacité à former vos équipes et la présence après la mise en production. Un prestataire sérieux répond aux six sans se dérober.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {CRITERES.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LES 7 QUESTIONS (liste citable) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Avant de signer</Kicker>
          <h2 style={h2Style}>
            Les 7 questions à poser à tout prestataire IA
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Posez ces sept questions à chaque prestataire consulté, nous compris. Les réponses vous en diront plus que n'importe quelle plaquette, et la septième (« que nous déconseillez-vous ? ») est la plus révélatrice : un prestataire qui recommande tout vend un devis, pas un conseil.</strong>
          </p>

          <ol style={{ margin: 0, padding: 0, listStyle: 'none', counterReset: 'q' }}>
            {QUESTIONS.map((q, i) => (
              <li key={i} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 22px', marginBottom: 12 }}>
                <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 99, background: cLight, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                <p style={{ margin: 0, fontSize: 15.5, color: '#0A0A0A', fontWeight: 600, lineHeight: 1.6, paddingTop: 5 }}>{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── OÙ SE SITUE MASTERIA (transparence) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Où nous nous situons</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Masteria : un prestataire aux trois casquettes
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Dans la typologie ci-dessus, Masteria cumule trois familles : cabinet de conseil (<Link to="/diagnostic-ia" style={aStyle}>diagnostic</Link>, <Link to="/audit-ia" style={aStyle}>audit</Link>, <Link to="/conseil-strategie-ia" style={aStyle}>stratégie</Link>), agence de développement de <Link to="/outils-ia-sur-mesure" style={aStyle}>solutions IA sur mesure</Link> (agents, outils, intégrations, avec propriété et réversibilité au contrat) et organisme de formation certifié Qualiopi (<Link to="/acculturation-ia" style={aStyle}>acculturation</Link>, parcours par métier, finançables OPCO). L'<Link to="/accompagnement-ia" style={aStyle}>accompagnement personnalisé</Link> relie les trois dans la durée. Nous répondons aux sept questions de ce guide au premier rendez-vous, cadrage gratuit compris.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Indépendants des éditeurs, multi-outils',
                  'Propriété et réversibilité contractuelles',
                  'Formation certifiée Qualiopi, finançable OPCO',
                  'Un interlocuteur du cadrage à l\'adoption',
                ].map(pt => (
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

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Prestataire IA : les questions fréquentes
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Approfondir le choix par type de prestataire, cadrer votre budget et jauger votre point de départ.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Meilleure agence IA', href: '/meilleure-agence-ia', tag: 'Guide', desc: "Choisir une agence : les critères, les signaux d'alerte et les questions propres au développement." },
              { label: 'Meilleur cabinet de conseil IA', href: '/meilleur-cabinet-conseil-ia', tag: 'Guide', desc: "Choisir un cabinet : les trois compétences à exiger et les pièges des missions de conseil." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les ordres de grandeur par type de projet, pour lire un devis en connaissance de cause." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "L'accompagnement personnalisé : cadrage, déploiement, conduite du changement, adoption." },
              { label: 'Solutions IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Ce que recouvre le développement sur mesure : copilotes, agents, RAG, automatisations." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Une journée pour cadrer vos usages avant de consulter des prestataires : le brief s'écrit tout seul." },
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
      <FounderNote />

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Et maintenant</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Posez-nous les 7 questions
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre besoin, nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit. Vous repartez avec nos réponses aux sept questions de ce guide, une lecture de votre besoin et, si un autre type de prestataire vous correspond mieux, nous vous le dirons.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Parler de votre besoin
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Conseil, développement et formation · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
