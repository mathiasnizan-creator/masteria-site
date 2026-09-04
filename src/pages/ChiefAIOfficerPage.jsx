import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Workflow, Users, MapPin, Check, Target, Briefcase,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Database, Cpu, Eye, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Chief AI Officer » (slug /chief-ai-officer), cluster CONSEIL.
 * Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « chief ai officer »
 * (210/mois, KD 15, CPC 2,22 $, intention commerciale). Deux publics sur la même
 * requête : les directions qui se demandent s'il faut créer le poste, et les
 * profils qui s'y intéressent. La page sert les deux (rôle, missions, profil,
 * rattachement) et vend UNE offre : le Chief AI Officer à temps partagé, format
 * de notre accompagnement dans la durée.
 *
 * INTÉGRITÉ : aucun salaire chiffré (aucune grille vérifiable et datée ; on le
 * dit), aucun client nommé, aucun prix ni volume de jours contractuel, jamais
 * Bpifrance. Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'chief-ai-officer'
const ENTITY = "Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Chief AI Officer : rôle, missions et option à temps partagé | Masteria"
const META_DESC = "Chief AI Officer : ce que fait le rôle, à qui il se rattache, quand le créer, quel profil recruter. Et l'alternative : un Chief AI Officer à temps partagé, assuré par un cabinet spécialisé IA. Cadrage gratuit."
const KEYWORDS = "chief ai officer, chief ai officer à temps partagé, chief ai officer externalisé, caio, directeur de l'intelligence artificielle, responsable ia entreprise, fiche de poste chief ai officer, recruter un chief ai officer, chief ai officer pme eti"

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
  { icon: Briefcase, label: 'Le rôle, ses missions, son rattachement' },
  { icon: Users, label: 'Interne ou à temps partagé' },
  { icon: Compass, label: 'Cabinet spécialisé IA depuis 2022' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Le rôle', value: "Le Chief AI Officer porte la stratégie, la gouvernance et le déploiement de l'IA dans l'entreprise, et en répond devant la direction générale" },
  { label: 'Missions', value: "Portefeuille de cas d'usage, gouvernance et conformité, données et outils avec la DSI, compétences avec les RH, mesure et budget, veille" },
  { label: 'Rattachement', value: "À la direction générale, avec un mandat écrit et un budget ; jamais un poste technique caché dans la DSI" },
  { label: 'Quand', value: "Quand les usages se dispersent entre plusieurs directions, que les budgets s'engagent sans arbitrage et que la conformité devient une question" },
  { label: 'Alternative', value: "Un Chief AI Officer à temps partagé : quelques jours par mois, un mandat, un comité, et une sortie préparée (recrutement ou relais interne)" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Missions ───────── */

const MISSIONS = [
  { icon: Target, title: "Stratégie et portefeuille de cas d'usage", desc: "Fixer le cap avec la direction, tenir le portefeuille des cas d'usage, arbitrer ce qui se lance, ce qui attend et ce qui s'arrête. Le CAIO est le point où les demandes des directions rencontrent un budget et une priorité." },
  { icon: Scale, title: 'Gouvernance et conformité', desc: "Registre des usages, politique et charte IA, comité, lecture du règlement européen et du RGPD, supervision humaine sur les décisions sensibles. Le CAIO est responsable de ce dispositif, pas seulement de son existence sur le papier." },
  { icon: Database, title: 'Données et outils, avec la DSI', desc: "Choisir les outils et les modèles, poser les règles de données, cadrer les intégrations au système d'information. La DSI garde l'infrastructure et la sécurité ; le CAIO garde le pourquoi et le pour qui." },
  { icon: GraduationCap, title: 'Compétences et adoption, avec les RH', desc: "Programme d'acculturation, formations par métier, référents internes, évolution des rôles quand l'IA fait une partie du travail. Le CAIO tient le plan de compétences IA avec la DRH." },
  { icon: Gauge, title: 'Mesure et budget', desc: "Une chaîne de conversion par cas d'usage, un budget consolidé (licences, projets, formation), un reporting à la direction sur le travail rendu plutôt que sur le taux d'adoption. Ce qui n'est pas mesuré n'est pas arbitrable." },
  { icon: Eye, title: 'Veille et arbitrage des éditeurs', desc: "Suivre ce qui change chez les éditeurs et dans la réglementation, tester avant d'acheter, résister aux offres qui arrivent chaque semaine. Le CAIO protège l'entreprise du bruit autant qu'il lui ouvre des options." },
]

/* ───────── Interne vs temps partagé (tableau sombre) ───────── */

const TABLE = [
  { critere: 'Délai', sans: 'Un recrutement de plusieurs mois, sur un profil rare', avec: 'Un démarrage en quelques semaines' },
  { critere: 'Engagement', sans: 'Un poste plein temps, à justifier dès la première année', avec: 'Quelques jours par mois, ajustables, une sortie préparée' },
  { critere: 'Indépendance', sans: 'Marqué par ses outils et ses choix passés', avec: 'Indépendant des éditeurs, multi-outils par métier' },
  { critere: 'Exécution', sans: 'Doit trouver des prestataires pour construire', avec: 'Adossé à un cabinet qui construit et forme' },
  { critere: 'Transmission', sans: 'Le savoir reste dans le poste', avec: 'Forme un relais interne, aide à recruter le titulaire' },
]

/* ───────── Signaux ───────── */

const SIGNAUX = [
  { icon: Workflow, title: 'Les usages se dispersent', desc: "Le marketing a son outil, la finance ses macros, la production ses essais, et personne ne sait ce qui est utilisé, avec quelles données. C'est le premier signal : le sujet a besoin d'un propriétaire." },
  { icon: Gauge, title: "Les budgets s'engagent sans arbitrage", desc: "Des licences achetées par direction, des projets lancés en parallèle, des prestataires différents. Sans portefeuille ni priorité, l'entreprise paie plusieurs fois la même chose." },
  { icon: Scale, title: 'La conformité devient une question', desc: "Un client, un auditeur ou le comité demande où en est l'entreprise vis-à-vis du règlement européen et du RGPD. Il faut quelqu'un qui réponde, et qui tienne le registre." },
  { icon: Users, title: 'Les directions attendent une réponse', desc: "Les directeurs métier demandent quoi faire, la DSI demande un cadre, la DRH demande un plan de compétences. Quand la question remonte de partout, le rôle manque." },
]

/* ───────── Méthode temps partagé ───────── */

const METHODE = [
  { periode: 'Mois 1', title: 'Mandat, état des lieux, gouvernance', desc: "Le mandat écrit avec la direction générale (périmètre, budget, comité), l'inventaire des usages et des outils, le registre, la charte, le comité IA constitué. Le CAIO à temps partagé a une lettre de mission, pas seulement un contrat de prestation." },
  { periode: 'Mois 2-3', title: 'Portefeuille et premières vagues', desc: "Le portefeuille de cas d'usage priorisé avec les directions, les premières vagues lancées (processus outillés, formations), la chaîne de mesure posée. Le comité se réunit chaque mois et arbitre sur des chiffres." },
  { periode: 'Rythme mensuel', title: 'Pilotage, arbitrage, reporting', desc: "Quelques jours par mois : comité, revue du portefeuille, arbitrages, reporting à la direction, veille et tests d'outils. Les directions ont un interlocuteur ; la DSI et la DRH ont un partenaire." },
  { periode: 'La sortie', title: 'Recrutement ou relais interne', desc: "Le format est fait pour s'arrêter : quand le rôle mérite un plein temps, nous aidons à écrire la fiche de poste, à évaluer les candidats et à passer le relais. Quand un référent interne suffit, nous le formons. Le dispositif reste." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Nommer le DSI Chief AI Officer par défaut', desc: "Le DSI a déjà un métier, et l'IA touche d'abord le travail des métiers. Lui confier le rôle en plus produit un CAIO qui gère des licences. Le rôle se rattache à la direction générale, la DSI en est le partenaire." },
  { title: 'Recruter un data scientist pour un rôle de direction', desc: "Le CAIO arbitre, gouverne, convainc des directeurs et rend compte à un comité. Un excellent profil technique sans expérience de direction y échoue, et l'entreprise conclut que le rôle ne sert à rien." },
  { title: 'Le CAIO sans mandat ni budget', desc: "Un titre, pas de lettre de mission, pas de budget, pas de comité : le rôle devient un conseiller que personne n'écoute. Le mandat écrit est la condition, en interne comme à temps partagé." },
  { title: "L'évangéliste sans mesure", desc: "Des conférences internes, de l'enthousiasme, aucun tableau de bord. Au bout d'un an, la direction demande ce que l'IA a rendu et personne ne sait. La mesure fait partie du rôle dès le premier mois." },
  { title: 'Le poste sans sortie', desc: "À temps partagé, un CAIO qui ne prépare pas son remplacement crée une dépendance. Le format est fait pour s'arrêter : recrutement d'un titulaire ou relais interne formé, avec un dispositif qui tient sans nous." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un Chief AI Officer ?",
    a: "Le Chief AI Officer, ou directeur de l'intelligence artificielle, est le dirigeant qui porte la stratégie, la gouvernance et le déploiement de l'IA dans l'entreprise, et qui en répond devant la direction générale. Ses missions : tenir le portefeuille des cas d'usage et l'arbitrer, installer la gouvernance et la conformité (registre, charte, comité, règlement européen), cadrer les données et les outils avec la DSI, conduire les compétences et l'adoption avec les RH, mesurer et consolider le budget, suivre les éditeurs et la réglementation. Le rôle est apparu dans les grands groupes et se diffuse dans les ETI ; dans une PME, il est tenu par le dirigeant avec un référent, ou par un cabinet à temps partagé.",
  },
  {
    q: "À qui se rattache le Chief AI Officer ?",
    a: "À la direction générale, avec un mandat écrit, un budget et un comité. C'est la condition pour qu'il arbitre entre des directions qui ne dépendent pas de lui. Rattaché à la DSI, il devient un responsable des outils ; rattaché à la direction de l'innovation, un évangéliste sans levier. Il travaille au quotidien avec la DSI (infrastructure, sécurité, intégration), la DRH (compétences, rôles) et les directions métier (cas d'usage), sans se substituer à aucune d'elles.",
  },
  {
    q: "Une PME ou une ETI a-t-elle besoin d'un Chief AI Officer ?",
    a: "Une PME, rarement en tant que poste : le dirigeant tient le rôle de sponsor, un référent interne tient le quotidien, et un cabinet cadre les processus à outiller. C'est le format de notre conseil IA pour PME. Une ETI, souvent, dès que les usages se dispersent entre plusieurs directions, que les budgets s'engagent sans arbitrage et que la conformité devient une question. Le poste plein temps n'est pas toujours justifié d'emblée : un Chief AI Officer à temps partagé permet d'installer le dispositif, puis de décider sur pièces s'il faut recruter.",
  },
  {
    q: "Quelle différence entre Chief AI Officer, DSI et Chief Data Officer ?",
    a: "Le DSI tient le système d'information : infrastructure, applications, sécurité, intégration. Le Chief Data Officer tient les données : qualité, gouvernance, référentiels, plateformes. Le Chief AI Officer tient l'usage de l'IA dans le travail : cas d'usage, gouvernance des systèmes d'IA, compétences, mesure. Les trois se recouvrent sur les outils et les données, et doivent travailler ensemble ; dans une ETI, le CAIO et le CDO sont parfois la même personne, ce qui fonctionne si le rôle reste rattaché à la direction générale.",
  },
  {
    q: "Combien gagne un Chief AI Officer ?",
    a: "Nous ne publions pas de chiffre. Les grilles qui circulent varient du simple au triple selon la taille de l'entreprise, le pays, le rattachement et l'expérience, et la plupart ne précisent ni la période de collecte ni l'échantillon. Ce que nous pouvons dire : c'est une rémunération de direction, comparable à celle d'un directeur des systèmes d'information ou d'un directeur de la transformation à périmètre équivalent, et le profil est rare, donc cher et sujet au débauchage. C'est précisément ce qui fait l'intérêt du temps partagé pour une ETI qui démarre.",
  },
  {
    q: "Qu'est-ce qu'un Chief AI Officer à temps partagé ?",
    a: "C'est le rôle de Chief AI Officer tenu par un intervenant externe, quelques jours par mois, avec un mandat écrit de la direction générale, un comité et un budget, comme un titulaire interne. Chez Masteria, il est assuré par Mathias Nizan ou par un consultant senior du réseau, adossé au cabinet pour construire les solutions et former les équipes. Le format est conçu pour s'arrêter : quand le rôle mérite un plein temps, nous aidons à recruter le titulaire ; quand un référent interne suffit, nous le formons. Le dispositif (gouvernance, portefeuille, mesure) reste à l'entreprise.",
  },
  {
    q: "Combien de jours par mois représente le temps partagé ?",
    a: "Cela dépend du nombre de directions concernées et du rythme des vagues. Le premier trimestre est plus dense : mandat, état des lieux, gouvernance, portefeuille, premières vagues. Ensuite, le rythme de croisière tient en quelques jours par mois : comité, revue du portefeuille, arbitrages, reporting, veille. Le volume se fixe au cadrage, s'ajuste par trimestre, et se facture au forfait mensuel. Nous refusons les engagements pluriannuels signés d'avance.",
  },
  {
    q: "Un intervenant externe peut-il vraiment porter un rôle de direction ?",
    a: "Oui, à trois conditions, les mêmes que pour un titulaire. Un mandat écrit de la direction générale, qui dit le périmètre, le budget et ce que le CAIO peut décider seul. Un comité où siègent les directions concernées, la DSI et la DRH, qui arbitre sur des chiffres. Et une présence régulière, pas seulement des livrables : le CAIO à temps partagé participe aux comités de direction sur son sujet. Sans ces conditions, ni un externe ni un interne ne porte le rôle ; avec elles, l'externe apporte en plus l'indépendance vis-à-vis des éditeurs et un cabinet derrière lui.",
  },
  {
    q: "Comment se termine une mission de Chief AI Officer à temps partagé ?",
    a: "Par une décision de l'entreprise, préparée dès le début. Trois sorties possibles : le recrutement d'un titulaire, que nous aidons à définir (fiche de poste, périmètre, rattachement) et à évaluer, avec une passation ; un relais interne, un référent ou un directeur qui reprend le rôle avec le dispositif installé et une formation ; ou la poursuite du temps partagé à rythme réduit, quand l'entreprise n'a pas la taille pour un plein temps. Dans tous les cas, la gouvernance, le portefeuille et la mesure restent chez vous.",
  },
  {
    q: "Quel profil recruter pour un Chief AI Officer interne ?",
    a: "Un profil de direction avant un profil technique. Ce qui compte : avoir conduit une transformation dans une organisation comparable, comprendre ce que les outils d'IA produisent réellement (sans les développer soi-même), savoir arbitrer entre des directions, tenir une gouvernance et rendre compte à un comité. La compétence technique s'achète ou se délègue ; la capacité à faire changer le travail des métiers, non. Nous aidons les entreprises à écrire la fiche de poste et à évaluer les candidats, souvent à l'issue d'une mission à temps partagé qui a précisé ce dont le rôle a besoin chez elles.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chief AI Officer à temps partagé (Masteria)',
  alternateName: 'Chief AI Officer externalisé',
  description: "Le rôle de Chief AI Officer tenu à temps partagé par un cabinet spécialisé IA : mandat de la direction générale, gouvernance et conformité, portefeuille de cas d'usage, données et outils avec la DSI, compétences avec les RH, mesure et budget, sortie préparée par recrutement ou relais interne.",
  url: 'https://www.master-ia.fr/chief-ai-officer',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/chief-ai-officer#webpage' },
  serviceType: "Direction de l'intelligence artificielle à temps partagé",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'ETI et groupes, PME en croissance' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Missions du Chief AI Officer à temps partagé',
    itemListElement: MISSIONS.map(m => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.title, description: m.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/chief-ai-officer#termes',
  name: 'Chief AI Officer : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Chief AI Officer (CAIO)', description: "Dirigeant qui porte la stratégie, la gouvernance et le déploiement de l'intelligence artificielle dans l'entreprise, rattaché à la direction générale, responsable du portefeuille de cas d'usage, de la conformité, des compétences et de la mesure." },
    { '@type': 'DefinedTerm', name: 'Chief AI Officer à temps partagé', description: "Rôle de Chief AI Officer tenu par un intervenant externe quelques jours par mois, avec un mandat écrit, un comité et un budget, et une sortie préparée par recrutement d'un titulaire ou relais interne." },
    { '@type': 'DefinedTerm', name: 'Portefeuille de cas d\'usage IA', description: "Liste priorisée des usages de l'IA de l'entreprise, avec leur statut, leur propriétaire, leur budget et leur mesure, arbitrée par un comité." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/chief-ai-officer#article',
  headline: "Chief AI Officer : le rôle, ses missions, et l'option à temps partagé",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/chief-ai-officer#webpage' },
  about: [
    { '@type': 'Thing', name: 'Chief AI Officer', sameAs: 'https://en.wikipedia.org/wiki/Chief_AI_officer' },
    { '@type': 'Thing', name: 'Gouvernance', sameAs: 'https://fr.wikipedia.org/wiki/Gouvernance' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
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

export default function ChiefAIOfficerPage() {
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
    { name: 'Chief AI Officer', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Chief AI Officer</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil · Chief AI Officer
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Chief AI Officer :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le rôle, ses missions, et l'option à temps partagé</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le Chief AI Officer est le dirigeant qui porte la stratégie, la gouvernance et le déploiement de l'intelligence artificielle dans l'entreprise, et qui en répond devant la direction générale. <strong style={{ color: '#fff', fontWeight: 700 }}>Quand le poste plein temps n'est pas encore justifié, {ENTITY.split(',')[0]} tient le rôle à temps partagé</strong> : un mandat, un comité, quelques jours par mois, et une sortie préparée.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le rôle est apparu dans les grands groupes et se diffuse dans les ETI. La question n'est plus de savoir s'il faut quelqu'un qui tienne le sujet, mais qui, avec quel mandat, et à quel coût. Cette page répond aux deux : ce que fait un Chief AI Officer, et comment l'avoir sans recruter tout de suite.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Parler du rôle chez vous
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#missions" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les missions
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

      {/* ── MISSIONS (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le rôle</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que fait un Chief AI Officer ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six missions, tenues ensemble : le portefeuille de cas d'usage, la gouvernance et la conformité, les données et les outils avec la DSI, les compétences avec les RH, la mesure et le budget, la veille et l'arbitrage des éditeurs. Le CAIO est le point où les demandes des directions rencontrent une priorité et un budget.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le dispositif qu'il tient est décrit sur notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> ; le cap qu'il porte, sur <Link to="/conseil-strategie-ia" style={aStyle}>conseil en stratégie IA</Link>.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {MISSIONS.map((item, i) => (
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
                      <ShieldCheck size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Ce que le Chief AI Officer n'est pas</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Ni un DSI bis, ni un data scientist en chef, ni un évangéliste. Il ne développe pas, il n'administre pas les serveurs, il ne fait pas de conférences pour le plaisir : il arbitre, gouverne, mesure et rend compte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUAND CRÉER LE RÔLE ── */}
      <section id="quand" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Quand</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quand une entreprise a-t-elle besoin d'un Chief AI Officer ?
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Quand le sujet n'a plus de propriétaire : les usages se dispersent entre les directions, les budgets s'engagent sans arbitrage, la conformité devient une question et les directions attendent une réponse. Avant ces signaux, un dirigeant sponsor et un référent suffisent ; c'est le format de notre <Link to="/conseil-ia-pme" style={aStyle}>conseil IA pour PME</Link>.</strong>
          </p>
          <CardGrid items={SIGNAUX} min={260} />
        </div>
      </section>

      {/* ── INTERNE vs TEMPS PARTAGÉ (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Interne ou à temps partagé</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Recruter un Chief AI Officer ou le prendre à temps partagé ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Recruter, quand le rôle est déjà un plein temps et que l'entreprise sait ce qu'elle attend de lui. Le prendre à temps partagé, quand il faut installer le dispositif d'abord et décider ensuite sur pièces. Les deux se succèdent souvent : le temps partagé précise le poste, puis aide à le pourvoir.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre Chief AI Officer interne et Chief AI Officer à temps partagé" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Chief AI Officer interne</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Chief AI Officer à temps partagé</th>
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
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le temps partagé n'est pas un conseil de plus : c'est un rôle, avec un mandat et un comité. Il s'inscrit dans notre <Link to="/accompagnement-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>accompagnement IA</Link> dans la durée.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE TEMPS PARTAGÉ ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Le temps partagé</Kicker>
          <h2 style={h2Style}>
            Comment fonctionne un Chief AI Officer à temps partagé ?
          </h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Comme un titulaire : un mandat écrit de la direction générale, un comité, un budget, une présence régulière. Un premier trimestre dense pour installer le dispositif et lancer les premières vagues, puis quelques jours par mois de pilotage, et une sortie préparée dès le départ.</strong>
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
            Le rôle est tenu par Mathias Nizan ou par un consultant senior du réseau Masteria, adossé au cabinet pour construire les solutions et former les équipes. Le volume de jours et le forfait mensuel se fixent au cadrage, gratuit, et s'ajustent par trimestre.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les cinq erreurs autour du poste de Chief AI Officer
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Nommer le DSI par défaut, recruter un profil technique pour un rôle de direction, donner un titre sans mandat ni budget, laisser l'évangéliste sans mesure, et créer un poste sans sortie. Cinq erreurs qui font conclure, à tort, que le rôle ne sert à rien.</strong>
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

      {/* ── PROFIL ET RECRUTEMENT ── */}
      <section id="profil" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Recruter</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quel profil pour un Chief AI Officer interne ?
          </h2>
          <p style={answerStyle}>
            <strong>Un profil de direction avant un profil technique : quelqu'un qui a conduit une transformation dans une organisation comparable, qui comprend ce que les outils produisent réellement, qui sait arbitrer entre des directions et rendre compte à un comité. La compétence technique se délègue ; la capacité à changer le travail des métiers, non.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: ClipboardCheck, title: 'La fiche de poste, en cinq lignes', desc: "Rattachement à la direction générale ; mandat sur le portefeuille, la gouvernance, les compétences et la mesure ; budget consolidé ; comité présidé ; reporting trimestriel à la direction sur le travail rendu. Tout le reste est du détail que le premier trimestre précise." },
              { icon: Cpu, title: 'Les compétences qui comptent', desc: "Conduite de transformation, lecture des processus métier, compréhension pratique des outils d'IA générative et de leurs limites, gouvernance et conformité, arbitrage budgétaire, pédagogie envers un comité. Le développement et la data science sont des compétences d'équipe, pas du titulaire." },
              { icon: Users, title: 'Ce que nous apportons au recrutement', desc: "À l'issue d'une mission à temps partagé, l'entreprise sait ce dont le rôle a besoin chez elle : nous aidons à écrire la fiche de poste, à évaluer les candidats sur des cas réels et à organiser la passation. Nous ne sommes pas un cabinet de recrutement ; nous connaissons le poste de l'intérieur." },
            ].map(card => {
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
            Sur la rémunération, nous ne publions pas de chiffre : les grilles qui circulent varient du simple au triple et précisent rarement leur période de collecte ou leur échantillon. C'est une rémunération de direction, comparable à celle d'un DSI ou d'un directeur de la transformation à périmètre équivalent. Pour le métier voisin de consultant, voyez notre page <Link to="/consultant-ia" style={aStyle}>consultant IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Chief AI Officer : les questions fréquentes
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

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Le dispositif que le Chief AI Officer tient, le cap qu'il porte, et les formats qui l'entourent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Dispositif', desc: "Registre, charte, comité, conformité, monitoring : ce que le CAIO installe et tient." },
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Le cap', desc: "Diagnostic de maturité, cas d'usage priorisés, feuille de route : le portefeuille de départ." },
              { label: 'Conseil en transformation IA', href: '/conseil-transformation-ia', tag: 'Organisation', desc: "Processus reconçus, rôles, modèle opérationnel cible : le programme que le CAIO pilote." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "La présence continue dont le temps partagé est un format : cadrage, outils, adoption, mesure." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Comité exécutif', desc: "La matinée qui aligne le comité avant de créer le rôle ou de confier le mandat." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "Pour le dirigeant qui tient lui-même le rôle de sponsor dans une PME ou une ETI." },
              { label: 'Conseil IA pour PME', href: '/conseil-ia-pme', tag: 'PME', desc: "Quand un sponsor et un référent suffisent : le format court, sans créer de poste." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'État des lieux', desc: "L'inventaire complet des usages, données, outils et conformité par lequel un CAIO commence souvent." },
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

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Chief AI Officer à temps partagé</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Donnons un propriétaire au sujet
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre organisation, les directions concernées et ce qui remonte aujourd'hui sans réponse. Nous revenons vers vous sous 24 heures avec un format : mission à temps partagé, mandat proposé, ou aide au recrutement d'un titulaire.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cabinet spécialisé IA depuis 2022 · Lyon, France, Suisse, Belgique
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
              ['FR · CH · BE', 'sur site ou à distance'],
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
