import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Workflow, Users, MapPin, Check, Target, Building2,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Server, Cpu, Wallet,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « conseil IA pour PME et TPE » (slug /conseil-ia-pme), cluster CONSEIL.
 * Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « conseil pme » (170,
 * KD 13, commercial), « conseil si pme » (90, KD 5), « conseil aux pme » (70),
 * « conseil gestion pme » (70), « conseil pme rhone alpes » (70, KD 7), « conseil
 * en stratégie pme » (50), « conseil tpe » (50, commercial).
 *
 * RÉPARTITION D'INTENTIONS : /conseil-intelligence-artificielle = le cabinet et
 * ses quatre pôles, tous formats ; CETTE page = le format PME/TPE : une journée
 * de diagnostic, deux ou trois processus, un dirigeant qui décide, un budget
 * maîtrisé, et l'ancrage Auvergne-Rhône-Alpes. Les requêtes « conseil gestion /
 * financier pme » sont hors métier : dit explicitement (carte « ce que nous ne
 * faisons pas »).
 *
 * INTÉGRITÉ : aucun client nommé, aucun chiffre de résultat ni prix inventé,
 * jamais Bpifrance sur le site (dispositifs publics en termes génériques),
 * financement : conseil hors OPCO, formation OPCO ou fonds selon statut, sans
 * détail juridique. Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'conseil-ia-pme'
const ENTITY = "Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil IA pour PME et TPE : un cabinet à votre taille | Masteria"
const META_DESC = "Conseil IA pour PME et TPE : un diagnostic d'une journée, deux ou trois processus outillés, le dirigeant et les équipes formés, un suivi léger. Cabinet spécialisé IA à Lyon, Auvergne-Rhône-Alpes et toute la France. Cadrage gratuit."
const KEYWORDS = "conseil ia pme, conseil pme, conseil aux pme, conseil tpe, conseil si pme, conseil en stratégie pme, conseil pme rhone alpes, cabinet conseil pme lyon, conseil intelligence artificielle pme, accompagnement ia pme, conseil ia tpe"

/* ───────── Styles partagés ───────── */

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
  { icon: Building2, label: 'TPE, PME et petites ETI' },
  { icon: Compass, label: "Diagnostic d'une journée pour commencer" },
  { icon: Wallet, label: 'Forfaits par étape, budget maîtrisé' },
  { icon: MapPin, label: 'Lyon · Auvergne-Rhône-Alpes · toute la France' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Pour qui', value: "Dirigeants de TPE, de PME et de petites ETI, de 5 à 250 personnes, avec ou sans service informatique" },
  { label: 'Mission', value: "Un diagnostic d'une journée, deux ou trois processus outillés, le dirigeant et les équipes formés, un suivi trimestriel léger" },
  { label: 'Ce qui change', value: "Pas de programme de grand groupe : des décisions rapides, un premier gain en quelques semaines, un budget par étape" },
  { label: 'SI existant', value: "Nous cadrons l'IA dans vos outils et vos données actuels, avec votre prestataire informatique, sans les remplacer" },
  { label: 'Prix', value: "Forfait par étape après un cadrage gratuit ; le conseil n'est pas finançable par l'OPCO, la formation l'est" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Prestations ───────── */

const PRESTATIONS = [
  {
    icon: ClipboardCheck,
    title: "Le diagnostic IA d'une journée",
    desc: "Une journée sur site ou à distance : vos processus, vos outils, ce que les équipes font déjà avec l'IA, où le temps se perd. Vous repartez avec trois cas d'usage priorisés, ce qu'il faut écarter, et un ordre de grandeur de budget. Pour beaucoup de PME, c'est le seul conseil dont elles ont besoin avant d'agir.",
  },
  {
    icon: Server,
    title: 'Le cadrage SI et IA',
    desc: "Une PME a un système d'information, souvent tenu par un prestataire : messagerie, suite bureautique, logiciel de gestion, partages de fichiers. Nous cadrons l'IA dedans : quel outil, dans quelle version, avec quels réglages de données, quels accès, quelle règle d'usage. Avec votre prestataire informatique, jamais contre lui.",
  },
  {
    icon: Workflow,
    title: 'Deux ou trois processus outillés',
    desc: "Le devis, la réponse aux clients, la saisie administrative, la relance, le compte rendu : nous choisissons les processus où l'IA rend le plus d'heures, et nous les outillons, par un assistant configuré, une automatisation ou un agent branché sur vos logiciels. Un premier processus en production en quelques semaines.",
  },
  {
    icon: GraduationCap,
    title: 'Le dirigeant et les équipes formés',
    desc: "Dans une PME, le dirigeant est le premier utilisateur et le premier sponsor. Nous le formons d'abord, souvent en accompagnement individuel, puis les équipes sur leurs cas. Ce volet est certifié Qualiopi et finançable, selon votre statut, par votre OPCO ou votre fonds de formation.",
  },
  {
    icon: Gauge,
    title: 'Un suivi trimestriel léger',
    desc: "Un point par trimestre : ce qui a pris, ce qui bloque, le prochain processus à outiller, les nouveaux outils à considérer ou à ignorer. Une demi-journée, pas un comité. C'est ce qui évite que la démarche s'arrête au premier succès.",
  },
]

/* ───────── Grand compte vs PME (tableau sombre) ───────── */

const TABLE = [
  { critere: 'Point de départ', sans: 'Un audit de plusieurs semaines, multi-entités', avec: "Un diagnostic d'une journée, sur vos processus réels" },
  { critere: 'Décision', sans: 'Comité, arbitrages, budget annuel', avec: 'Le dirigeant décide, souvent le jour même' },
  { critere: 'Premier résultat', sans: 'Après une phase de cadrage de plusieurs mois', avec: 'Un processus outillé en quelques semaines' },
  { critere: 'Équipe de conseil', sans: 'Une équipe de consultants, une pyramide', avec: 'Un intervenant senior, le réseau à la demande' },
  { critere: 'Budget', sans: 'Programme pluriannuel engagé d\'avance', avec: 'Forfait par étape, la suivante décidée sur le résultat' },
]

/* ───────── Méthode ───────── */

const METHODE = [
  { periode: 'Jour 1', title: 'Le diagnostic', desc: "Une journée avec le dirigeant et les personnes clés : processus, outils, données, usages déjà présents. Restitution le jour même : trois cas priorisés, ce qu'on écarte, l'ordre de grandeur de budget, et si le sujet relève plutôt de la formation seule." },
  { periode: 'Semaines 2-4', title: 'Cadrage SI et premier processus', desc: "Choix de l'outil dans votre système d'information, réglages de données et d'accès avec votre prestataire informatique, règle d'usage en une page, puis conception du premier processus avec les personnes qui le vivent." },
  { periode: 'Mois 2-3', title: 'Mise en production et formation', desc: "Le premier processus tourne, le dirigeant est formé, puis les équipes sur leurs cas. Un deuxième ou troisième processus s'enchaîne si le premier tient. La mesure se fait sur le temps rendu et sur ce que vous en faites." },
  { periode: 'Chaque trimestre', title: 'Le point de suivi', desc: "Une demi-journée : ce qui a pris, ce qui bloque, le prochain processus, les outils à considérer ou à ignorer. La démarche appartient à l'entreprise ; nous restons disponibles, sans abonnement imposé." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Copier le grand groupe', desc: "Un programme, un comité, un schéma directeur : la PME s'épuise en cadrage et ne met rien en production. La bonne échelle : une journée de diagnostic, un processus, un résultat, puis le suivant." },
  { title: 'Acheter des licences pour tout le monde', desc: "Trente comptes payants distribués sans cas d'usage ni règle : cinq personnes s'en servent, souvent mal. Commencez par les processus et les personnes qui gagnent le plus, puis étendez." },
  { title: 'Confier le sujet au prestataire informatique seul', desc: "Votre prestataire sécurise les outils et les accès ; il ne connaît pas vos processus métier et n'a pas vocation à les redessiner. L'IA se cadre avec lui, elle se décide avec vous." },
  { title: 'Commencer par le chatbot client', desc: "Le premier cas visible est rarement le plus rentable, et c'est celui qui expose le plus l'entreprise. Les gains d'une PME sont d'abord internes : devis, administratif, réponses, comptes rendus." },
  { title: 'Attendre des données parfaites', desc: "Une PME n'aura jamais un entrepôt de données. L'IA générative travaille sur ce que vous avez : des mails, des documents, un logiciel de gestion. Le cadrage dit ce qui est exploitable aujourd'hui, et ce qui demande un rangement minimal." },
]

/* ───────── Rhône-Alpes ───────── */

const REGION = [
  { icon: MapPin, title: 'Basés à Lyon, sur site en région', desc: "L'équipe est installée à Lyon. Le diagnostic et les formations se font sur site dans toute la métropole et en Auvergne-Rhône-Alpes : Grenoble, Saint-Étienne, Annecy, Chambéry, Valence, Bourg-en-Bresse, Clermont-Ferrand, en déplacements planifiés." },
  { icon: Users, title: 'Un réseau de formateurs en région', desc: "Pour les formations en plusieurs sessions ou sur plusieurs sites, des formateurs indépendants expérimentés, sélectionnés sur leur pratique, interviennent près de chez vous avec la trame Masteria." },
  { icon: Cpu, title: 'Le tissu PME de la région', desc: "Industrie et sous-traitance, BTP, négoce, services aux entreprises, agroalimentaire, santé : les PME de la région ont des processus concrets et des équipes réduites. C'est précisément le format de conseil que nous avons construit." },
]

/* ───────── Pourquoi Masteria ───────── */

const WHY = [
  { icon: Cpu, title: "Un cabinet qui ne fait que de l'IA", desc: "Pas de conseil en gestion, en finance ou en organisation générale : de l'intelligence artificielle appliquée à votre travail, depuis 2022. Nous savons ce que les outils font vraiment et ce qu'une PME peut leur confier." },
  { icon: Workflow, title: 'Nous conseillons et nous construisons', desc: "Quand un processus demande un assistant configuré, une automatisation ou un agent, nous le réalisons. Le diagnostic ne reste pas un document ; il devient un outil qui tourne." },
  { icon: Target, title: 'Un format à la taille de la PME', desc: "Une journée, un processus, un forfait par étape, un intervenant senior. Vous décidez de la suite sur le résultat, jamais sur un engagement pluriannuel." },
  { icon: ShieldCheck, title: 'Indépendant des éditeurs', desc: "Aucune licence à vendre : nous recommandons l'outil déjà dans votre suite quand il suffit, et nous le disons quand il ne suffit pas." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que le conseil IA pour une PME ?",
    a: "C'est un accompagnement dimensionné à une entreprise de 5 à 250 personnes : un diagnostic d'une journée qui dit où l'IA rend du temps chez vous, un cadrage de l'outil dans votre système d'information existant, deux ou trois processus outillés et mis en production, le dirigeant et les équipes formés sur leurs cas, puis un suivi trimestriel léger. Il se distingue du conseil aux grands comptes par l'échelle : pas de programme ni de comité, des décisions rapides, un forfait par étape et un premier résultat en quelques semaines. Masteria le mène depuis Lyon, en Auvergne-Rhône-Alpes et dans toute la France.",
  },
  {
    q: "À partir de quelle taille d'entreprise le conseil IA a-t-il un sens ?",
    a: "Dès qu'il y a des processus répétitifs et quelqu'un pour décider. Une entreprise de cinq personnes avec des devis, des mails clients et de l'administratif a de quoi gagner plusieurs heures par semaine et par personne ; le conseil s'y résume souvent à une journée de diagnostic et à une formation du dirigeant. En dessous, pour un indépendant seul, l'accompagnement individuel ou la formation suffisent, et nous vous le dirons. Au-dessus de 250 personnes, le format évolue vers l'audit et le programme, avec des directions à aligner.",
  },
  {
    q: "Accompagnez-vous les TPE ?",
    a: "Oui, avec un format encore plus court : une demi-journée de diagnostic, souvent à distance, puis une formation du dirigeant en accompagnement individuel sur ses propres cas, et un ou deux processus outillés avec les outils déjà en place. Une TPE n'a pas besoin de conseil au sens classique ; elle a besoin de savoir quoi faire lundi, avec quel outil et quelle règle. Le financement de la formation dépend du statut du dirigeant : OPCO pour une entreprise avec des salariés, fonds de formation pour un indépendant ; nous vous orientons au cadrage.",
  },
  {
    q: "Combien coûte le conseil IA pour une PME ?",
    a: "Au forfait, par étape : le diagnostic d'une journée a son prix fixe, annoncé sur devis après un échange gratuit de trente minutes ; le cadrage et chaque processus outillé se chiffrent ensuite selon leur périmètre, et vous décidez de la suite sur le résultat de l'étape précédente. Nous ne vendons pas de programme pluriannuel à une PME. Les frais de déplacement s'ajoutent au réel en dehors de Lyon ; le distanciel n'en comporte pas.",
  },
  {
    q: "Le conseil IA est-il finançable pour une PME ?",
    a: "Le conseil lui-même n'est pas finançable par votre OPCO, qui couvre la formation. En revanche, le volet formation (dirigeant, équipes) est certifié Qualiopi et pris en charge par votre OPCO quand vous avez des salariés, ou par le fonds de formation du dirigeant selon son statut. Selon votre région et votre secteur, des dispositifs publics de soutien au conseil et à la transformation numérique des PME existent ; nous faisons le point sur ceux qui sont mobilisables dans votre situation lors du cadrage, c'est compris dedans.",
  },
  {
    q: "Faites-vous du conseil SI pour PME ?",
    a: "Sur la partie qui concerne l'IA, oui. Nous cadrons l'outil d'IA dans votre système d'information : quelle suite, quelle version entreprise, quels réglages pour que vos données ne servent pas à entraîner un modèle, quels accès, comment brancher un agent sur votre logiciel de gestion. Nous travaillons avec votre prestataire informatique, qui garde la main sur l'infrastructure, la sécurité et les licences. Nous ne remplaçons pas un prestataire SI et nous ne faisons ni infogérance, ni réseau, ni migration.",
  },
  {
    q: "Intervenez-vous en Auvergne-Rhône-Alpes ?",
    a: "C'est notre région d'origine. L'équipe est basée à Lyon et intervient sur site dans toute la métropole et en Auvergne-Rhône-Alpes : Grenoble, Saint-Étienne, Annecy, Chambéry, Valence, Bourg-en-Bresse, Clermont-Ferrand. Le diagnostic et les formations se font sur place ; le cadrage, la construction des outils et le suivi se font largement à distance. Pour les PME hors région, le même format s'applique, avec le distanciel en premier et des déplacements planifiés pour les temps clés.",
  },
  {
    q: "Combien de temps faut-il pour voir un premier résultat ?",
    a: "Quelques semaines. Le diagnostic prend une journée ; le premier processus outillé est en production entre deux et six semaines plus tard selon sa complexité et la disponibilité de vos équipes ; la formation du dirigeant se cale dans le même temps. Le résultat se mesure sur ce processus : temps rendu, erreurs évitées, délai raccourci. C'est ce résultat qui décide du processus suivant, pas un plan écrit d'avance.",
  },
  {
    q: "Par quel processus une PME doit-elle commencer ?",
    a: "Par celui qui coûte le plus d'heures répétitives à des personnes qualifiées, et qui n'engage pas l'entreprise vis-à-vis de l'extérieur. Dans la plupart des PME, ce sont les devis et propositions, les réponses aux clients par mail, la saisie et le classement administratifs, les comptes rendus et les relances. Le chatbot public ou l'outil visible depuis l'extérieur viennent plus tard, quand les équipes maîtrisent l'IA en interne. Le diagnostic tranche sur vos chiffres, pas sur une idée reçue.",
  },
  {
    q: "Nous n'avons pas de données structurées : est-ce un problème ?",
    a: "Non, pour l'IA générative. Elle travaille sur ce qu'une PME possède déjà : des mails, des documents, des devis passés, un logiciel de gestion, des fichiers partagés. Le cadrage dit ce qui est exploitable aujourd'hui, ce qui demande un rangement minimal (un dossier propre, une fiche client à jour) et ce qui relève d'un vrai chantier de données, rare à cette échelle. Attendre des données parfaites est l'erreur la plus courante : elle reporte indéfiniment un gain accessible.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conseil IA pour PME et TPE (Masteria)',
  alternateName: 'Conseil en intelligence artificielle pour petites et moyennes entreprises',
  description: "Conseil IA pour PME et TPE : diagnostic d'une journée, cadrage de l'IA dans le système d'information existant, deux ou trois processus outillés, formation du dirigeant et des équipes, suivi trimestriel. Cabinet spécialisé IA basé à Lyon, Auvergne-Rhône-Alpes et toute la France.",
  url: 'https://www.master-ia.fr/conseil-ia-pme',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-ia-pme#webpage' },
  serviceType: 'Conseil en intelligence artificielle pour PME',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'TPE, PME et petites ETI', numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 250 } },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de conseil IA pour PME',
    itemListElement: PRESTATIONS.map(p => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.title, description: p.desc } })),
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'La méthode de conseil IA pour PME Masteria',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({ '@type': 'ListItem', position: i + 1, name: `${step.periode} : ${step.title}`, description: step.desc })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-ia-pme#article',
  headline: 'Conseil IA pour PME et TPE : un cabinet à la taille de votre entreprise',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-ia-pme#webpage' },
  about: [
    { '@type': 'Thing', name: 'Petite ou moyenne entreprise', sameAs: 'https://fr.wikipedia.org/wiki/Petite_ou_moyenne_entreprise' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Auvergne-Rhône-Alpes', sameAs: 'https://fr.wikipedia.org/wiki/Auvergne-Rh%C3%B4ne-Alpes' },
  ],
}

/* ───────── Composants ───────── */

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

function CardGrid({ items, min = 260 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap: 24, marginTop: 12 }}>
      {items.map(card => {
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
  )
}

export default function ConseilIAPMEPage() {
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
    { name: 'Conseil IA pour PME', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conseil IA pour PME</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil · PME et TPE
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Conseil IA pour PME et TPE :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un cabinet à la taille de votre entreprise</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le conseil IA pour PME de {ENTITY.split(',')[0]} tient en quatre temps : <strong style={{ color: '#fff', fontWeight: 700 }}>un diagnostic d'une journée, deux ou trois processus outillés dans vos logiciels actuels, le dirigeant et les équipes formés, un suivi trimestriel léger</strong>. Depuis Lyon, en Auvergne-Rhône-Alpes et dans toute la France.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une PME n'a pas besoin d'un programme de grand groupe. Elle a besoin de savoir où l'IA lui rend des heures, avec quel outil, dans quelle règle, et d'un premier résultat en quelques semaines. C'est ce format que nous avons construit, avec un forfait par étape et un dirigeant qui décide de la suite sur le résultat.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un diagnostic
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Ce que nous faisons
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
                  <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── PRESTATIONS (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Nos prestations</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que fait un cabinet de conseil IA pour une PME ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq choses, dans cet ordre : un diagnostic d'une journée, le cadrage de l'IA dans votre système d'information, deux ou trois processus outillés, la formation du dirigeant puis des équipes, et un point par trimestre. Chaque étape a son forfait ; vous décidez de la suivante sur le résultat.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour une organisation plus grande, avec plusieurs directions à aligner, voyez notre <Link to="/audit-ia" style={aStyle}>audit IA</Link> et notre <Link to="/conseil-transformation-ia" style={aStyle}>conseil en transformation IA</Link>.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRESTATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Target size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Ce que nous ne faisons pas</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Ni conseil en gestion, ni conseil financier, ni juridique, ni infogérance : votre expert-comptable, votre avocat et votre prestataire informatique gardent leur rôle. Nous faisons l'IA appliquée à votre travail, et nous travaillons avec eux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRAND COMPTE vs PME (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>La bonne échelle</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Conseil aux PME ou conseil aux grands comptes : ce qui change vraiment
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La PME a un avantage que le grand groupe n'a pas : la décision est à portée de main. Un conseil dimensionné pour elle exploite cet avantage au lieu de le neutraliser sous un programme. Une journée, un processus, un résultat, la suite.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre conseil aux grands comptes et conseil aux PME" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Conseil aux grands comptes</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Conseil IA pour PME</th>
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

      {/* ── MÉTHODE (timeline) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule le conseil IA dans une PME ?
          </h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Un diagnostic d'une journée, un cadrage SI et un premier processus dans le mois qui suit, la mise en production et la formation sur le deuxième et le troisième mois, puis un point par trimestre. Le calendrier se cale sur la disponibilité de vos équipes, pas sur un plan de programme.</strong>
          </p>
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0') }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.periode}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 740 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Le diagnostic d'une journée a sa propre page : <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link>. Pour mesurer ce que l'IA rend, la chaîne de conversion est décrite sur <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les cinq erreurs des PME qui se lancent dans l'IA
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Copier le grand groupe, acheter des licences pour tout le monde, confier le sujet au prestataire informatique seul, commencer par le chatbot client, attendre des données parfaites. Cinq erreurs que nous voyons depuis 2022 dans les PME de la région et d'ailleurs, et qui ont toutes une parade simple.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: '3px solid #DC2626' }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RHÔNE-ALPES ── */}
      <section id="region" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Auvergne-Rhône-Alpes</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Conseil IA pour les PME de Lyon et de la région Auvergne-Rhône-Alpes
          </h2>
          <p style={answerStyle}>
            <strong>Masteria est basée à Lyon et intervient sur site dans toute la région : le diagnostic et les formations se font chez vous, le cadrage et la construction des outils largement à distance. Pour les PME hors région, le même format s'applique, distanciel en premier et déplacements planifiés pour les temps clés.</strong>
          </p>
          <CardGrid items={REGION} min={280} />
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Nos pages locales : <Link to="/agence-ia-lyon" style={aStyle}>agence IA à Lyon</Link>, <Link to="/agence-ia-annecy" style={aStyle}>agence IA à Annecy</Link>, <Link to="/formation-ia-grenoble" style={aStyle}>formation IA à Grenoble</Link>.
          </p>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi un cabinet IA plutôt qu'un cabinet de conseil aux PME généraliste ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px', background: '#fff' }}>
                <strong>Parce que l'IA se joue dans le détail de ce que les outils produisent et de ce qu'un processus peut leur confier. Un cabinet qui ne fait que cela depuis 2022, qui construit les outils et forme les équipes, tient ce détail. Un généraliste tient le plan.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> montrent le format en situation, dans des entreprises de toutes tailles.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {WHY.map(card => {
                const Icon = card.icon
                return (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                      <h3 style={{ ...h3Style, fontSize: 15.5 }}>{card.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                )
              })}
            </div>
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
              <Kicker>Le volet formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Le dirigeant d'abord, puis les équipes sur leurs cas
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Dans une PME, le dirigeant est le premier utilisateur : notre <Link to="/formation-ia-dirigeants" style={aStyle}>formation IA pour dirigeants</Link> ou un <Link to="/coaching-ia" style={aStyle}>coaching IA individuel</Link> l'installent en quelques séances. Les équipes suivent, par métier, sur leurs propres livrables. Ce volet est certifié Qualiopi et finançable, selon votre statut, par votre OPCO ou votre fonds de formation ; le conseil et la construction des outils restent des prestations de service. Pour identifier votre opérateur, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Dirigeant formé en individuel sur ses cas', 'Équipes formées par métier, sur site ou à distance', 'Formation certifiée Qualiopi', 'Prise en charge OPCO ou fonds selon statut'].map(pt => (
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

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Conseil IA pour PME : les questions fréquentes
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
            Le point d'entrée, les formats plus larges, les outils que nous construisons et la formation du dirigeant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Point d'entrée", desc: "La journée qui cadre vos usages et priorise les cas : le premier pas de toute PME." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'Plus large', desc: "Quand plusieurs directions sont concernées : maturité, données, outils, conformité, feuille de route." },
              { label: 'Conseil en transformation IA', href: '/conseil-transformation-ia', tag: 'Organisation', desc: "Quand l'organisation elle-même doit changer : processus reconçus, rôles, pilotage du programme." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "Le programme qui installe le dirigeant comme premier utilisateur et premier sponsor." },
              { label: 'Automatisation IA', href: '/automatisation-ia', tag: 'Processus', desc: "Ce qu'on automatise en premier dans une PME, avec quels outils et à quel coût." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Outils', desc: "Des agents branchés sur vos logiciels de gestion et votre messagerie, à l'échelle d'une PME." },
              { label: 'Agence IA à Lyon', href: '/agence-ia-lyon', tag: 'Local', desc: "Notre implantation lyonnaise : conseil, développement et formation pour les entreprises de la métropole." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Cabinet', desc: "L'ensemble de nos missions de conseil, tous formats et toutes tailles d'entreprise." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
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

      <FounderNote />

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conseil IA pour PME</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Commençons par une journée chez vous
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous votre activité, votre effectif et les outils que vous utilisez. Nous revenons vers vous sous 24 heures avec une date de diagnostic, son forfait, et ce que nous pensons pouvoir trouver chez vous.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un diagnostic IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cabinet spécialisé IA depuis 2022 · Lyon, Auvergne-Rhône-Alpes, toute la France
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              {ENTITY} n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Depuis 2022', 'spécialisé uniquement IA'],
              ['+1 500', 'professionnels formés'],
              ['Indépendant', 'des éditeurs de solutions'],
              ['Lyon', 'et toute la France'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
