import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Workflow, Users, MapPin, Target, Briefcase,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Database, Cpu, Eye, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Chief AI Officer » (slug /chief-ai-officer), cluster CONSEIL.
 * Créée le 2026-09-04 (Semrush du 03/09 : « chief ai officer », 210/mois,
 * KD 15). Deux publics sur la même requête : les directions qui se demandent
 * s'il faut créer le poste, et les profils qui s'y intéressent. La page sert les
 * deux (rôle, missions, profil, rattachement) et présente UNE offre : le Chief
 * AI Officer à temps partagé, forme de notre accompagnement dans la durée.
 *
 * Réécrite le 07/10/2026 pour le texte propre : FounderNote et OfficialSources
 * remplacés par des blocs écrits pour la page, échéances de l'AI Act après
 * l'omnibus 2026/1744 (art. 4 depuis le 02/02/2025, art. 50 depuis le
 * 02/08/2026, annexe III au 02/12/2027), faits outils de la fiche du 07/10.
 * INTÉGRITÉ : aucun salaire chiffré (aucune grille vérifiable et datée ; on le
 * dit), aucun client nommé, aucun prix ni volume de jours contractuel. Voix :
 * verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'chief-ai-officer'
const ENTITY = "Masteria, cabinet IA lyonnais dirigé par son fondateur, Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-09-04'
const DATE_MODIFIED = '2026-10-07'
const RDV_URL = '/contact?type=projet&rdv=30'

const META_TITLE = "Chief AI Officer : rôle, missions, temps partagé | Masteria"
const META_DESC = "Chief AI Officer : ce que fait le rôle, à qui il rend compte, quand le créer, quel profil recruter, et comment l'exercer à temps partagé avec un cabinet."
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
  { icon: Briefcase, label: 'Missions, rattachement, profil' },
  { icon: Users, label: 'Titulaire interne ou temps partagé' },
  { icon: Compass, label: 'Un cabinet IA en appui' },
  { icon: MapPin, label: 'Lyon · Europe · États-Unis · Inde' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Le rôle', value: "Le Chief AI Officer décide où l'IA sert l'entreprise, fixe les règles de son usage et rend compte des résultats à la direction générale" },
  { label: 'Missions', value: "Arbitrer la liste des usages, faire respecter les règles, choisir les outils avec la DSI, organiser les compétences avec les RH, mesurer et tenir le budget, surveiller le marché" },
  { label: 'Rattachement', value: "La direction générale, avec une lettre de mission et un budget ; un poste logé dans la DSI finit par gérer des licences" },
  { label: 'Quand le créer', value: "Quand plusieurs directions se servent de l'IA sans se concerter, que les dépenses s'additionnent sans arbitrage et que les questions de conformité arrivent" },
  { label: 'Alternative', value: "Le rôle tenu à temps partagé : quelques jours par mois, une lettre de mission, un comité, et une sortie prévue dès le départ" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Missions ───────── */

const MISSIONS = [
  { icon: Target, title: 'Arbitrer la liste des usages', desc: "Il tient la liste des usages de l'IA, de l'assistant de rédaction à l'agent qui agit dans un logiciel, et décide avec la direction de ce qui démarre, de ce qui attend et de ce qui s'arrête. Les demandes des directions passent toutes par lui pour recevoir une priorité et un budget." },
  { icon: Scale, title: 'Faire respecter les règles', desc: "Registre des usages, charte, comité, relecture humaine des décisions sensibles. Au 7 octobre 2026, cela suppose de connaître l'AI Act : formation des équipes à l'IA (article 4) depuis février 2025, transparence depuis août 2026, usages à haut risque à partir de décembre 2027. Il répond de l'application du dispositif au quotidien." },
  { icon: Database, title: 'Choisir les outils avec la DSI', desc: "Modèles, abonnements d'entreprise, règles sur les données, raccordement aux logiciels : il décide du pourquoi et du pour qui, la DSI garde l'infrastructure et la sécurité. Chaque nouvel outil reçoit leurs deux signatures." },
  { icon: GraduationCap, title: 'Organiser les compétences avec les RH', desc: "Acculturation, formations par métier, réseau de référents, évolution des postes quand l'IA prend en charge une partie des tâches. Il construit le plan de compétences IA avec la DRH, puis en suit l'avancement." },
  { icon: Gauge, title: 'Mesurer et tenir le budget', desc: "Un indicateur par usage, un budget unique qui réunit licences, projets et formation, un compte rendu à la direction sur le temps rendu et la qualité obtenue. Un usage sans mesure échappe à tout arbitrage." },
  { icon: Eye, title: 'Surveiller le marché et filtrer les offres', desc: "Il suit les annonces des éditeurs et les évolutions du droit, teste avant d'acheter et trie les sollicitations commerciales de la semaine. Le rythme est soutenu : les GPTs personnalisés de ChatGPT disparaissent le 11 décembre 2026, et chez Google les compétences prennent la place des Gems depuis le 5 octobre." },
]

/* ───────── Interne vs temps partagé (tableau sombre) ───────── */

const TABLE = [
  { critere: 'Délai de démarrage', sans: 'Plusieurs mois de recrutement, sur un profil rare', avec: 'Quelques semaines' },
  { critere: 'Engagement', sans: 'Un plein temps à justifier dès la première année', avec: 'Quelques jours par mois, révisables chaque trimestre, avec une sortie prévue' },
  { critere: 'Indépendance', sans: 'Marquée par ses outils et ses employeurs précédents', avec: 'Sans lien avec les éditeurs, outils choisis métier par métier' },
  { critere: 'Exécution', sans: 'Doit trouver des prestataires pour construire et former', avec: "S'appuie sur un cabinet qui construit et forme" },
  { critere: 'Transmission', sans: 'Le savoir part avec la personne', avec: 'Forme un relais interne ou aide à recruter le titulaire' },
]

/* ───────── Signaux ───────── */

const SIGNAUX = [
  { icon: Workflow, title: 'Chaque direction a son outil', desc: "Le marketing a ouvert un abonnement, la finance a écrit ses macros, la production teste un assistant, et personne ne sait quelles données circulent où. C'est le premier signe que le sujet attend un responsable." },
  { icon: Gauge, title: "Les dépenses s'additionnent sans arbitrage", desc: "Licences prises service par service, projets lancés en parallèle chez des prestataires différents : sans liste unique ni priorité, l'entreprise paie plusieurs fois le même besoin." },
  { icon: Scale, title: 'La conformité devient une question', desc: "Un client, un auditeur ou le conseil d'administration demande où en est l'entreprise face à ses obligations RGPD et AI Act. Il faut quelqu'un pour répondre, et pour tenir le registre." },
  { icon: Users, title: 'Les questions remontent de partout', desc: "Les directeurs métier demandent quoi faire, la DSI réclame un cadre, la DRH attend un plan de formation. Quand toutes ces demandes arrivent en même temps, le rôle manque." },
]

/* ───────── Méthode temps partagé ───────── */

const METHODE = [
  { periode: 'Mois 1', title: 'Lettre de mission, inventaire, règles', desc: "La lettre de mission signée avec la direction générale (périmètre, budget, comité), l'inventaire des usages et des outils, le registre, la charte et le comité constitué. L'intervenant à temps partagé reçoit un mandat écrit, au même titre qu'un titulaire." },
  { periode: 'Mois 2 et 3', title: 'Liste des usages et premières vagues', desc: "La liste des usages classée avec les directions, les premières vagues lancées (tâches outillées, formations), les indicateurs posés. Le comité se réunit chaque mois et tranche sur des chiffres." },
  { periode: 'Rythme de croisière', title: 'Piloter, arbitrer, rendre compte', desc: "Quelques jours par mois : comité, revue de la liste, arbitrages, compte rendu à la direction, veille et essais d'outils. Les directions ont un interlocuteur ; la DSI et la DRH, un partenaire." },
  { periode: 'La sortie', title: 'Recruter ou passer le relais', desc: "La formule est conçue pour s'arrêter. Quand le rôle mérite un plein temps, nous aidons à rédiger la fiche de poste, à évaluer les candidats et à organiser la passation. Quand un référent interne suffit, nous le formons. Le dispositif reste en place." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Confier le rôle au DSI par défaut', desc: "Le DSI a déjà un métier, et l'IA touche d'abord le travail des directions métier. Ajouter le rôle à sa fonction produit un responsable des licences. Le rôle se rattache à la direction générale ; la DSI devient son partenaire." },
  { title: 'Recruter un profil technique pour un poste de direction', desc: "Le Chief AI Officer arbitre, fixe des règles, convainc des directeurs et rend compte à un comité. Un excellent data scientist sans expérience de direction s'y épuise, et l'entreprise conclut à tort que le rôle ne sert à rien." },
  { title: 'Donner un titre sans mandat ni budget', desc: "Sans lettre de mission, sans budget et sans comité, le titulaire devient un conseiller que personne n'écoute. Le mandat écrit est la condition, en interne comme à temps partagé." },
  { title: "Remplacer la mesure par l'enthousiasme", desc: "Des conférences internes, des démonstrations, aucun tableau de bord : au bout d'un an, la direction demande ce que l'IA a rapporté et personne ne sait répondre. La mesure fait partie du rôle dès le premier mois." },
  { title: 'Créer un poste sans sortie', desc: "À temps partagé, un intervenant qui ne prépare pas sa succession installe une dépendance. La formule doit s'arrêter un jour : recrutement d'un titulaire ou relais interne formé, avec un dispositif qui tient sans nous." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un Chief AI Officer ?",
    a: "Le Chief AI Officer (CAIO), ou directeur de l'intelligence artificielle, est le dirigeant qui décide où l'IA sert l'entreprise, fixe les règles de son usage et rend compte des résultats à la direction générale. Il tient la liste des usages et l'arbitre, fait respecter les règles (registre, charte, comité, AI Act), choisit les outils avec la DSI, organise les compétences avec les RH, mesure et tient le budget, surveille le marché. Le rôle est né dans les grands groupes et gagne les ETI ; dans une PME, le dirigeant le tient avec un référent, ou le confie à un cabinet à temps partagé.",
  },
  {
    q: 'À qui le Chief AI Officer rend-il compte ?',
    a: "À la direction générale, avec une lettre de mission, un budget et un comité. C'est la condition pour arbitrer entre des directions qui ne dépendent pas de lui. Placé sous la DSI, il devient responsable des outils ; sous l'innovation, il anime sans pouvoir trancher. Au quotidien, il travaille avec la DSI (infrastructure, sécurité, raccordements), la DRH (compétences, évolution des postes) et les directions métier (usages), sans prendre leur place.",
  },
  {
    q: 'Faut-il un Chief AI Officer dans une PME ou une ETI ?',
    a: "Une PME, rarement sous forme de poste : le dirigeant porte le sujet, un référent interne s'occupe du quotidien et un cabinet aide à choisir les tâches à outiller ; c'est le format de notre conseil IA pour PME. Une ETI, souvent, dès que plusieurs directions s'équipent sans se concerter, que les dépenses s'additionnent sans arbitrage et que la conformité devient une question. Le plein temps ne se justifie pas toujours d'emblée : le temps partagé installe le dispositif, et la décision de recruter se prend ensuite sur pièces.",
  },
  {
    q: 'Chief AI Officer, DSI, Chief Data Officer : qui fait quoi ?',
    a: "Le DSI tient le système d'information : infrastructure, applications, sécurité, raccordements. Le Chief Data Officer tient les données : qualité, référentiels, gouvernance, plateformes. Le Chief AI Officer tient l'usage de l'IA dans le travail : liste des usages, règles applicables aux systèmes d'IA, compétences, mesure. Les trois se croisent sur les outils et les données ; dans une ETI, CAIO et CDO sont parfois une seule personne, ce qui fonctionne tant que le rôle reste rattaché à la direction générale.",
  },
  {
    q: 'Combien gagne un Chief AI Officer ?',
    a: "Nous ne publions pas de chiffre. Les grilles qui circulent varient du simple au triple selon l'effectif, le pays, le rattachement et l'expérience, et la plupart taisent leur période de relevé comme leur échantillon. Ce que nous pouvons dire : il s'agit d'une rémunération de direction, du niveau d'un DSI ou d'un directeur de la transformation au périmètre comparable, pour un profil rare, donc cher et convoité. D'où l'intérêt du temps partagé pour une ETI qui démarre.",
  },
  {
    q: "Qu'est-ce qu'un Chief AI Officer à temps partagé ?",
    a: "C'est le rôle de Chief AI Officer tenu par un intervenant extérieur quelques jours par mois, avec, comme un titulaire, une lettre de mission de la direction générale, un comité et un budget. Chez Masteria, il est tenu par Mathias Nizan lui-même ou par un consultant senior du réseau, appuyé par le cabinet pour construire les outils et former les équipes. La formule est faite pour s'arrêter : nous aidons à recruter le titulaire quand le rôle mérite un plein temps, ou nous formons un référent interne. Le dispositif (règles, liste des usages, mesure) reste chez vous.",
  },
  {
    q: 'Combien de jours par mois représente le temps partagé ?',
    a: "Le nombre dépend des directions concernées et du rythme des vagues. Le premier trimestre est plus chargé : lettre de mission, inventaire, règles, liste des usages, premières vagues. Le rythme de croisière tient ensuite en quelques jours par mois : comité, revue de la liste, arbitrages, compte rendu, veille. Le volume se fixe au cadrage, se révise chaque trimestre et se facture au forfait mensuel. Nous ne signons pas d'engagement pluriannuel d'avance.",
  },
  {
    q: 'Un intervenant extérieur peut-il tenir un rôle de direction ?',
    a: "Oui, aux mêmes conditions qu'un titulaire. Une lettre de mission de la direction générale qui fixe le périmètre, le budget et ce qu'il peut décider seul. Un comité où siègent les directions concernées, la DSI et la DRH, qui tranche sur des chiffres. Une présence régulière : l'intervenant à temps partagé participe aux comités de direction sur son sujet. Sans ces conditions, personne ne tient le rôle, ni dedans ni dehors ; avec elles, l'intervenant extérieur ajoute son absence de lien avec les éditeurs et un cabinet en appui.",
  },
  {
    q: 'Comment se termine une mission de Chief AI Officer à temps partagé ?',
    a: "Par une décision de l'entreprise, préparée dès le départ. Trois issues sont possibles : le recrutement d'un titulaire, dont nous aidons à définir le poste (fiche, périmètre, rattachement) et à évaluer les candidats, avec une passation ; un relais interne, un référent ou un directeur qui reprend le rôle avec le dispositif en place et une formation ; ou un temps partagé allégé, quand l'entreprise n'a pas la taille d'un plein temps. Dans tous les cas, règles, liste des usages et mesure restent chez vous.",
  },
  {
    q: 'Quel profil recruter pour un Chief AI Officer interne ?',
    a: "Un profil de direction avant un profil technique. Comptent d'abord : avoir conduit une transformation dans une organisation comparable, connaître les forces et les ratés des outils d'IA sans forcément les développer, arbitrer entre des directions, tenir des règles et rendre compte à un comité. La compétence technique s'achète ou se délègue ; la capacité à faire évoluer le travail des équipes, beaucoup moins. Nous aidons à écrire la fiche de poste et à évaluer les candidats, souvent après une mission à temps partagé qui a précisé le besoin.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chief AI Officer à temps partagé (Masteria)',
  alternateName: 'Chief AI Officer externalisé',
  description: "Le rôle de Chief AI Officer tenu à temps partagé par un cabinet IA : lettre de mission de la direction générale, règles et conformité, liste des usages arbitrée, outils choisis avec la DSI, compétences organisées avec les RH, mesure et budget, sortie préparée par recrutement ou relais interne.",
  url: 'https://www.master-ia.fr/chief-ai-officer',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/chief-ai-officer#webpage' },
  serviceType: "Direction de l'intelligence artificielle à temps partagé",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
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
  name: 'Le vocabulaire du rôle de Chief AI Officer',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Chief AI Officer (CAIO)', description: "Dirigeant rattaché à la direction générale qui décide où l'IA sert l'entreprise, fixe les règles de son usage, organise les compétences et rend compte des résultats." },
    { '@type': 'DefinedTerm', name: 'Chief AI Officer à temps partagé', description: "Rôle de Chief AI Officer tenu par un intervenant extérieur quelques jours par mois, avec lettre de mission, comité et budget, et une sortie prévue par recrutement d'un titulaire ou relais interne." },
    { '@type': 'DefinedTerm', name: 'Liste des usages IA', description: "Inventaire classé de tout ce que l'entreprise fait avec l'IA, chacun avec son responsable, son budget, son indicateur et son statut, arbitré par le comité IA." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/chief-ai-officer#article',
  headline: "Chief AI Officer : le rôle, ses missions et la formule à temps partagé",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/chief-ai-officer#webpage' },
  about: [
    { '@type': 'Thing', name: 'Chief AI Officer', sameAs: 'https://en.wikipedia.org/wiki/Chief_AI_officer' },
    { '@type': 'Thing', name: 'Gouvernance', sameAs: 'https://fr.wikipedia.org/wiki/Gouvernance' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* Sources de la page (remplacent le bloc commun OfficialSources) */
const SOURCES = [
  { name: 'Règlement (UE) 2024/1689 sur l\'IA, texte consolidé sur EUR-Lex', note: "le règlement dont le Chief AI Officer fait appliquer l'article 4, sur la maîtrise de l'IA, et l'article 50, sur la transparence.", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { name: 'Règlement (UE) 2026/1744, dit omnibus IA, sur EUR-Lex', note: "le texte qui fixe au 2 décembre 2027 l'application des obligations prévues pour les systèmes de l'annexe III, comme le tri de CV.", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra' },
  { name: 'CNIL : intelligence artificielle et données personnelles', note: "ce que l'autorité attend dès qu'un usage d'IA touche des données personnelles, à reporter dans le registre.", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

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
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        speakable={['#geo-summary', '#en-bref']}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
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
              Direction de l'IA · Chief AI Officer
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Chief AI Officer&nbsp;:
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le rôle, ses missions et la formule à temps partagé</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige Masteria · mis à jour le 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le Chief AI Officer est le dirigeant qui décide où l'intelligence artificielle sert l'entreprise, fixe les règles de son usage et en rend compte à la direction générale. <strong style={{ color: '#fff', fontWeight: 700 }}>Quand un plein temps ne se justifie pas encore, {ENTITY.split(',')[0]} tient ce rôle à temps partagé</strong> : une lettre de mission, un comité IA, une présence de quelques jours chaque mois, et une sortie prévue dès la signature.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le poste est né dans les grands groupes et gagne les ETI. Dans la plupart des entreprises, l'IA est déjà là, sans responsable : la vraie question porte sur qui tiendra le sujet, avec quel mandat et à quel coût. Cette page y répond de deux façons, en décrivant le rôle, puis la manière de l'exercer sans recruter tout de suite.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Parler du rôle chez vous
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#missions" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire les six missions
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
                <strong>Six missions, tenues ensemble : arbitrer la liste des usages, faire respecter les règles, choisir les outils avec la DSI, organiser les compétences avec les RH, mesurer et tenir le budget, surveiller le marché. C'est chez lui que les demandes des directions reçoivent une priorité et un budget.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le dispositif qu'il fait vivre est détaillé sur notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> ; la feuille de route qu'il porte, sur celle du <Link to="/conseil-strategie-ia" style={aStyle}>conseil en stratégie IA</Link>.
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
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Ce qui reste hors de son périmètre</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Le développement, l'administration des serveurs et l'animation de conférences reviennent à d'autres. Lui arbitre, fixe les règles, mesure et rend compte à la direction.
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
          <Kicker>Le bon moment</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quand une entreprise a-t-elle besoin d'un Chief AI Officer ?
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le jour où le sujet n'a plus de responsable : les directions avancent chacune de leur côté, les dépenses s'additionnent, la conformité devient une question et les demandes remontent de partout. Avant ces signaux, un dirigeant sponsor et un référent suffisent ; c'est le format de notre <Link to="/conseil-ia-pme" style={aStyle}>conseil IA pour PME</Link>.</strong>
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
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Titulaire ou temps partagé</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Recruter un Chief AI Officer ou le prendre à temps partagé ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Recrutez quand le rôle occupe déjà un plein temps et que vos attentes sont claires. Passez par le temps partagé quand il faut d'abord installer le dispositif, puis décider sur pièces. Les deux s'enchaînent souvent : le temps partagé précise le poste, puis aide à le pourvoir.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Chief AI Officer recruté en interne ou exercé à temps partagé : délai, engagement, indépendance, exécution, transmission" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Point de comparaison</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Titulaire recruté</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Temps partagé avec un cabinet</th>
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
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le temps partagé est un rôle de direction à part entière, avec une lettre de mission et un comité ; il prolonge notre <Link to="/accompagnement-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>accompagnement IA dans la durée</Link>.
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
            <strong>Comme un titulaire : une lettre de mission de la direction générale, un comité, un budget, une présence régulière. Un premier trimestre dense pour installer le dispositif et lancer les premières vagues, puis quelques jours par mois de pilotage, avec une sortie prévue dès la signature.</strong>
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
            Mathias Nizan tient le rôle lui-même ou le confie à un consultant senior du réseau Masteria, appuyé par le cabinet pour construire les outils et former les équipes. Le nombre de jours et le forfait mensuel se fixent au cadrage, puis se révisent chaque trimestre ; ce cadrage commence par 30 minutes offertes.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pièges courants</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq erreurs autour du poste de Chief AI Officer
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Confier le rôle au DSI par défaut, recruter un profil technique pour un poste de direction, donner un titre sans mandat, remplacer la mesure par l'enthousiasme, créer un poste sans sortie : cinq erreurs qui font conclure, à tort, que le rôle ne sert à rien.</strong>
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
            <strong>Un profil de direction avant un profil technique : quelqu'un qui a déjà conduit une transformation dans une organisation comparable, qui connaît les forces et les ratés des outils, qui arbitre entre des directions et rend compte à un comité. La technique se délègue ; la capacité à changer le travail des équipes, beaucoup moins.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: ClipboardCheck, title: 'La fiche de poste en cinq lignes', desc: "Rattachement à la direction générale ; mandat sur la liste des usages, les règles, les compétences et la mesure ; budget unique ; présidence du comité IA ; compte rendu trimestriel sur le temps rendu et la qualité. Le premier trimestre précise le reste." },
              { icon: Cpu, title: 'Les compétences qui comptent', desc: "Conduite du changement, lecture des processus métier, pratique des outils d'IA générative et de leurs limites, gouvernance et conformité, arbitrage budgétaire, aisance devant un comité. Le développement et la science des données relèvent de son équipe ou de ses prestataires." },
              { icon: Users, title: 'Ce que nous apportons au recrutement', desc: "Après une mission à temps partagé, l'entreprise sait ce que le rôle exige chez elle. Nous aidons à rédiger la fiche de poste, à évaluer les candidats sur des situations tirées de votre entreprise et à organiser la passation. Nous connaissons le poste de l'intérieur ; la recherche de candidats reste l'affaire de votre DRH ou d'un cabinet spécialisé." },
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
            Sur la rémunération, nous ne publions pas de chiffre : les grilles qui circulent varient du simple au triple et indiquent rarement leur période de relevé ou leur échantillon. Il s'agit d'une rémunération de direction, du niveau d'un DSI ou d'un directeur de la transformation au périmètre comparable. Le métier voisin de <Link to="/consultant-ia" style={aStyle}>consultant IA</Link> a sa propre page, salaires compris.
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
                Dix questions sur le rôle de Chief AI Officer
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre organisation pose une question que la liste ne couvre pas ?
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous
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
            Huit pages autour du rôle
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Le dispositif qu'il fait vivre, la feuille de route qu'il porte, et les formats qui l'entourent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Dispositif', desc: "Registre, charte, comité, conformité, suivi : ce que le CAIO installe et fait vivre." },
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Feuille de route', desc: "État des lieux, usages classés, feuille de route : la liste de départ du CAIO." },
              { label: 'Conseil en transformation IA', href: '/conseil-transformation-ia', tag: 'Organisation', desc: "Processus revus, rôles redéfinis, organisation cible : le programme qu'il pilote." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "La présence continue dont le temps partagé est une forme : cadrage, outils, adoption, mesure." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Comité exécutif', desc: "Une matinée pour aligner le comité avant de créer le poste ou de signer la lettre de mission." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "Pour le dirigeant de PME ou d'ETI qui porte lui-même le sujet." },
              { label: 'Conseil IA pour PME', href: '/conseil-ia-pme', tag: 'PME', desc: "Quand un dirigeant sponsor et un référent suffisent, sans créer de poste." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'État des lieux', desc: "L'inventaire des usages, des données, des outils et de la conformité, souvent la première commande d'un CAIO." },
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
                    Lire la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Chief AI Officer à temps partagé</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Donnons un responsable au sujet
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez votre organisation, les directions concernées et les questions restées sans réponse. Vous recevez dans les 24 heures une proposition de format : temps partagé avec lettre de mission, mission courte de cadrage, ou aide au recrutement d'un titulaire.
            </p>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Premier échange offert · en visio ou à Lyon · France, Europe, États-Unis, Inde
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui tient le rôle (remplace FounderNote et le bloc commun) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui tient le rôle</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Le fondateur ou un consultant senior, avec le cabinet en appui
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Le rôle à temps partagé est tenu par <Link to="/mathias-nizan" style={{ color: '#93C5FD', fontWeight: 600 }}>Mathias Nizan</Link>, qui dirige le cabinet, ou par un consultant senior qu'il choisit et supervise. Derrière eux, le cabinet mobilise ses développeurs pour construire les outils retenus et ses formateurs pour les équipes. Aucun éditeur ne rémunère Masteria. Nos <Link to="/etudes-de-cas-ia#industrie" style={{ color: '#93C5FD', fontWeight: 600 }}>missions documentées</Link>, dont une matinée de décision avec la direction d'un groupe industriel présent sur trois continents, et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['1', 'responsable nommé dans la lettre de mission'],
              ['Mensuel', 'comité IA et compte rendu à la direction'],
              ['0', 'lien commercial avec un éditeur'],
              ['2022', 'création du cabinet, à Lyon'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES (rédigées pour la page) ── */}
      <section aria-labelledby="sources-caio" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-caio" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes qu'un Chief AI Officer garde sous la main
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Les échéances citées sur cette page, vérifiées au 7 octobre 2026, viennent de ces textes officiels.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
