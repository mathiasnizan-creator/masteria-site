import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, ShieldCheck, FileText, ListChecks, XCircle, Presentation,
  Calendar, MapPin, Check, Landmark, Building2, Users, Database, Server, HeartHandshake,
  Lock, ClipboardList, Map as MapIcon, GraduationCap, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page sectorielle — « Audit IA médico-social » (slug /audit-ia-medico-social).
 * Cible la grappe « audit ia médico-social / audit maturité ia médico-social /
 * audit ia esms » (≈ 50/mois cumulés, difficulté nulle, aucune page dédiée sur le
 * marché au 2026-09-03). Déclinaison sectorielle de /audit-ia : même méthode, même
 * livrable, périmètre et vocabulaire propres au secteur (usager, DUI, HDS, secret
 * professionnel, évaluation HAS, CNR de l'ARS).
 *
 * INTÉGRITÉ : usages non cliniques uniquement ; l'IA n'évalue pas un usager et ne
 * décide de rien ; aucune donnée d'usager identifiante saisie pendant l'audit ;
 * jamais d'ANFH pour une association (fonction publique hospitalière seulement) ;
 * conseil non finançable par l'OPCO ; ne pas nommer de dispositif public concurrent.
 */

const SLUG = 'audit-ia-medico-social'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit IA médico-social : usages, données d'usagers, cadre | Masteria"
const META_DESC = "Audit IA pour établissements et services médico-sociaux : usages réels des équipes, données d'usagers et DUI, hébergement HDS, RGPD et AI Act, plan d'outillage et de formation par métier. Cadrage gratuit."
const KEYWORDS = "audit ia médico-social, audit ia medico social, audit maturité ia médico-social, audit ia esms, audit ia association médico-sociale, audit ia ime, audit ia ehpad, intelligence artificielle médico-social"

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
  { icon: Lock, label: "Aucune donnée d'usager saisie pendant l'audit" },
  { icon: FileText, label: 'Rapport lisible par un conseil d\'administration' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Pour qui', value: "Associations gestionnaires et établissements : IME, IEM, SESSAD, ESAT, foyers, MAS, FAM, EHPAD, services à domicile, protection de l'enfance" },
  { label: 'Mission', value: "Usages réels de l'IA dans les services, données d'usagers et dossier informatisé, outils et hébergement, organisation, conformité RGPD et AI Act" },
  { label: 'Périmètre', value: "Les usages non cliniques et non décisionnels : écrits, coordination, qualité, communication avec les familles, fonctions support. L'IA n'évalue pas un usager et ne décide de rien" },
  { label: 'Livrable', value: "Cartographie des usages par service, cadre d'usage, plan d'outillage, plan de formation par métier, écarts de conformité, dossier argumenté pour vos financeurs" },
  { label: 'Durée', value: "De quelques jours à quelques semaines selon le nombre d'établissements ; cadrage préalable gratuit" },
  { label: 'Prix', value: "Forfait fixé après cadrage ; le volet formation qui suit est finançable par votre OPCO, Masteria est certifiée Qualiopi" },
]

/* ───────── Usages rencontrés × niveau de risque (tableau citable) ───────── */

const USAGES = [
  {
    usage: "Compte rendu de réunion d'équipe, note de synthèse, courrier administratif",
    risque: 'Risque minimal',
    verdict: "Autorisé dans un outil cadré, sans nom d'usager ni élément identifiant. C'est le premier gain de temps du secteur, et le premier usage déjà pratiqué sans cadre.",
  },
  {
    usage: "Aide à la rédaction d'un projet personnalisé à partir des notes de l'équipe",
    risque: 'Données sensibles (RGPD art. 9)',
    verdict: "Possible uniquement avec anonymisation stricte ou dans un outil hébergé en conformité HDS, sous procédure écrite. Interdit sur un compte personnel.",
  },
  {
    usage: "Traduction d'un document en facile à lire et à comprendre (FALC) pour les familles",
    risque: 'Risque minimal',
    verdict: "Autorisé et recommandé : relecture humaine obligatoire, le document final reste signé par le professionnel.",
  },
  {
    usage: "Préparation de l'évaluation HAS : trames, preuves, rapport d'activité",
    risque: 'Risque minimal',
    verdict: "Autorisé sur des documents internes non nominatifs. L'IA structure et reformule ; les constats restent ceux de l'équipe.",
  },
  {
    usage: "Notation, orientation ou évaluation d'un usager assistée par l'IA",
    risque: 'Haut risque (annexe III)',
    verdict: "Hors périmètre. Un système qui évalue une personne pour l'accès à une prestation relève du haut risque, et un usager n'est pas un dossier à trier. Nous ne le cadrons pas.",
  },
  {
    usage: "Tri de candidatures ou évaluation des salariés par un outil d'IA",
    risque: 'Haut risque (annexe III)',
    verdict: "Obligations reportées à décembre 2027, pas supprimées. L'audit le signale, et propose des usages RH à risque minimal : fiches de poste, annonces, trames d'entretien.",
  },
]

/* ───────── Ce que l'audit examine (6 dimensions) ───────── */

const DIMENSIONS = [
  {
    icon: Users,
    title: 'Les usages réels dans les services',
    desc: "Éducateurs, secrétariats, cadres, fonctions support : qui utilise déjà quoi, sur quel compte, avec quelles données. Dans le secteur, l'IA arrive par les téléphones personnels avant d'arriver par la direction. L'audit le constate sans sanctionner, pour proposer l'alternative cadrée.",
  },
  {
    icon: Database,
    title: "Les données d'usagers et le dossier informatisé",
    desc: "Où vivent les données : dossier de l'usager informatisé, exports, fichiers bureautiques, messageries. Ce qui peut alimenter un usage d'IA une fois anonymisé, ce qui ne doit jamais en sortir. Le programme ESMS numérique a mis les données dans un logiciel ; l'audit vérifie qu'elles y restent.",
  },
  {
    icon: Server,
    title: "Les outils et l'hébergement",
    desc: "Suites bureautiques, logiciel de dossier, outils d'IA souscrits ou activés par défaut, comptes gratuits. Pour toute donnée de santé, l'hébergement doit être certifié HDS : l'audit vérifie chaque outil au regard de ce qu'on y met réellement.",
  },
  {
    icon: GraduationCap,
    title: "L'organisation et les compétences",
    desc: "Turn-over, encadrement intermédiaire, temps de formation disponible, référent numérique existant ou non. La littératie IA est une obligation du règlement européen depuis février 2025 ; dans un secteur qui recrute en continu, elle se construit en plan, pas en session unique.",
  },
  {
    icon: ShieldCheck,
    title: 'La conformité RGPD et AI Act',
    desc: "Données de santé et données de mineurs ou de personnes vulnérables, secret professionnel et partage d'informations, analyse d'impact quand elle est requise, qualification des usages par niveau de risque. Le DPO, souvent mutualisé au siège, est associé à chaque étape.",
  },
  {
    icon: ClipboardList,
    title: 'La qualité et la preuve',
    desc: "Le référentiel d'évaluation de la HAS demande des preuves écrites, datées, tracées. L'audit regarde comment l'IA peut soulager la production de ces écrits sans en abaisser la valeur, et comment tracer ce qui a été assisté.",
  },
]

/* ───────── La méthode en 6 temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage avec la direction et le DPO',
    desc: "Établissements et services dans le périmètre, ce qui motive la demande (projet associatif, dossier de financement, alerte interne, demande des équipes), format attendu par le CODIR et le conseil d'administration. Échange gratuit, qui fixe le devis.",
  },
  {
    num: '02',
    title: 'Tournée des services',
    desc: "Entretiens avec les professionnels qui écrivent chaque jour : éducateurs, chefs de service, secrétariats, psychologues, fonctions support. Les usages réels de l'IA se découvrent là, pas dans les organigrammes. Sur site ou à distance, selon les établissements.",
  },
  {
    num: '03',
    title: 'Inventaire des outils et des comptes',
    desc: "Ce qui est souscrit, ce qui est activé par défaut dans vos logiciels, ce qui est utilisé sur des comptes personnels. Chaque outil est confronté à la donnée qu'on y met et à son hébergement.",
  },
  {
    num: '04',
    title: 'État des données',
    desc: "Dossier de l'usager informatisé, exports, fichiers bureautiques, messageries : disponibilité, qualité, droits d'usage. Ce qui peut alimenter un usage une fois anonymisé, ce qui ne doit jamais sortir du logiciel métier.",
  },
  {
    num: '05',
    title: 'Qualification des usages et des écarts',
    desc: "Chaque usage rencontré ou souhaité ressort avec son niveau de risque, ses conditions et ses écarts RGPD. Les usages hors périmètre sont écrits comme tels, avec leur motif, pour que la question ne revienne pas tous les six mois.",
  },
  {
    num: '06',
    title: 'Plan et restitution',
    desc: "Cadre d'usage, plan d'outillage, plan de formation par métier, actions de conformité datées avec un porteur. Restitution au CODIR, et sur demande au conseil d'administration ou aux instances représentatives du personnel.",
  },
]

/* ───────── Le livrable (6 cartes) ───────── */

const LIVRABLE = [
  {
    icon: MapIcon,
    title: 'Une cartographie des usages par service',
    desc: "Service par service : ce qui est déjà pratiqué, ce qui est souhaité, ce qui est permis, sous conditions ou exclu. Une lecture d'une page par établissement, argumentée en annexe.",
  },
  {
    icon: ListChecks,
    title: "Un cadre d'usage prêt à diffuser",
    desc: "Ce que les équipes peuvent faire, avec quels outils, avec quelles données, et ce qu'elles ne font pas. Rédigé pour être lu par un éducateur en fin de journée, pas seulement par un juriste. La base de votre charte IA.",
  },
  {
    icon: Server,
    title: "Un plan d'outillage",
    desc: "Le ou les outils cadrés qui remplacent les comptes personnels, avec le niveau d'hébergement requis selon les données, l'ordre de déploiement et un ordre de grandeur budgétaire par licence. Indépendant des éditeurs.",
  },
  {
    icon: GraduationCap,
    title: 'Un plan de formation par métier',
    desc: "Qui former, à quoi, dans quel ordre, avec quelle trace pour la littératie IA. Pensé pour un secteur qui recrute en continu : un socle court pour tous, des approfondissements par fonction, un parcours d'arrivée.",
  },
  {
    icon: Scale,
    title: 'Les écarts de conformité, hiérarchisés',
    desc: "RGPD, secret professionnel, règlement IA : chaque écart avec sa gravité, le texte concerné et un délai de correction. Les points conformes sont écrits comme tels.",
  },
  {
    icon: Landmark,
    title: 'Un dossier pour vos financeurs',
    desc: "Un état des lieux argumenté et chiffré, dans le format qu'attendent une ARS ou un conseil départemental : constats, objectifs, actions, budget. Réutilisable dans une demande de crédits non reconductibles ou une négociation de CPOM.",
  },
]

/* ───────── Garde-fous ───────── */

const GARDE_FOUS = [
  "L'IA n'évalue pas un usager et ne décide de rien : ces usages sont exclus du périmètre, et écrits comme tels",
  "Aucune donnée d'usager identifiante n'est saisie dans un outil d'IA pendant l'audit, par nous ni par vos équipes",
  "Le rapport se lit en conseil d'administration : constats, décisions, budget, sans jargon technique",
  "Aucun catalogue d'outils imposé : le plan d'outillage part de ce que vous avez déjà, le code et les documents vous appartiennent",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit IA dans le médico-social ?",
    a: "C'est un état des lieux de l'intelligence artificielle dans une association ou un établissement médico-social : les usages déjà pratiqués par les équipes, souvent sur des comptes personnels, les données d'usagers concernées, les outils et leur hébergement, l'organisation et la conformité RGPD et AI Act. Il débouche sur un cadre d'usage, un plan d'outillage, un plan de formation par métier et un dossier argumenté pour vos financeurs. Le périmètre reste non clinique et non décisionnel : l'IA aide à écrire, coordonner, expliquer ; elle n'évalue pas une personne.",
  },
  {
    q: "Nos équipes utilisent déjà ChatGPT sur leur téléphone. Est-ce un problème ?",
    a: "C'est la situation la plus fréquente, et le premier point que l'audit traite. Le problème tient à la donnée, pas à l'outil : un compte rendu sans nom ni élément identifiant ne pose pas de difficulté ; des notes sur un jeune saisies dans un compte gratuit sont une donnée de santé sortie de votre responsabilité. L'audit fait remonter ces usages sans sanctionner, puis met en place l'alternative : un outil cadré, une règle simple sur les données, une formation courte. Les équipes gardent le gain de temps, l'établissement reprend la maîtrise.",
  },
  {
    q: "Peut-on utiliser l'IA sur des données d'usagers ?",
    a: "Sur des données anonymisées, oui, dans un outil cadré et sous procédure écrite. Sur des données identifiantes, seulement dans un outil dont l'hébergement est certifié pour les données de santé et dont le contrat exclut la réutilisation de vos données, avec le DPO dans la boucle et une analyse d'impact quand elle est requise. En pratique, la plupart des gains du secteur se font sans donnée identifiante : comptes rendus, trames, courriers, documents FALC, préparation de l'évaluation. L'audit trace la ligne pour votre établissement.",
  },
  {
    q: "L'IA peut-elle aider à rédiger les projets personnalisés ?",
    a: "Elle peut aider à structurer et reformuler, à partir des notes de l'équipe, à deux conditions : l'anonymisation ou un outil conforme HDS, et une relecture par le professionnel qui signe. Le projet personnalisé reste l'acte de l'équipe pluridisciplinaire et de la personne accompagnée. Ce que l'IA ne fait pas : proposer des objectifs à partir d'un profil, comparer des usagers, suggérer une orientation. Ces usages relèvent du haut risque au sens du règlement européen, et ils ne correspondent pas à ce que vous êtes.",
  },
  {
    q: "Que prévoit le règlement européen sur l'IA pour notre secteur ?",
    a: "Deux choses s'appliquent déjà : la littératie IA depuis le 2 février 2025, qui vous demande d'assurer un niveau de maîtrise suffisant à vos salariés, et les pratiques interdites. Les obligations sur les systèmes à haut risque, dont l'évaluation de l'accès à des prestations et le tri de candidatures, sont reportées au 2 décembre 2027. Le RGPD s'applique pleinement dès maintenant, et c'est lui qui compte en cas de contrôle : données de santé, données de mineurs et de personnes vulnérables, secret professionnel. L'audit hiérarchise dans cet ordre.",
  },
  {
    q: "Quel financement pour un audit IA dans une association médico-sociale ?",
    a: "Le conseil n'est pas finançable par l'OPCO, qui couvre la formation. Certaines agences régionales de santé financent des dépenses ponctuelles de transformation sur crédits non reconductibles, et un état des lieux argumenté peut s'inscrire dans une demande ou dans une négociation de CPOM : cela se vérifie avec votre délégation départementale, et le rapport est conçu pour ce format. Le volet formation qui suit l'audit est finançable par votre OPCO, l'OPCO Santé pour la plupart des associations, l'ANFH pour les établissements publics. Masteria est certifiée Qualiopi.",
  },
  {
    q: "Combien de temps dure l'audit, et pour combien d'établissements ?",
    a: "De quelques jours à quelques semaines selon le nombre d'établissements et de services. Une association avec trois établissements sur un même département se traite en quelques jours d'expertise, étalés pour caler les entretiens ; un groupe régional multi-activités demande davantage, et le devis l'explique ligne à ligne. Les entretiens se tiennent sur site ou à distance, sans effet sur le livrable. Masteria est basée à Lyon et intervient en France, en Suisse et en Belgique.",
  },
  {
    q: "Et après l'audit ?",
    a: "Trois suites possibles, cumulables : la formation des équipes par métier, finançable par votre OPCO ; le déploiement de l'outil cadré retenu, avec ou sans nous ; la gouvernance, pour tenir le cadre dans la durée malgré le turn-over. Le rapport est exploitable sans nous : vos équipes ou un autre prestataire peuvent le porter. Donner suite reste votre choix, et c'est écrit dans le contrat.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit IA médico-social — Masteria',
  alternateName: "Audit de maturité IA pour établissements et services médico-sociaux",
  description: "Audit IA pour associations gestionnaires et établissements médico-sociaux : usages réels de l'IA dans les services, données d'usagers et dossier informatisé, outils et hébergement HDS, organisation, conformité RGPD et AI Act. Livrable : cartographie des usages, cadre d'usage, plan d'outillage, plan de formation par métier, écarts de conformité, dossier pour les financeurs.",
  url: `https://www.master-ia.fr/${SLUG}`,
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  serviceType: 'Audit de maturité et de conformité IA, secteur médico-social',
  category: 'Conseil en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: "Directions générales et directions d'établissement du médico-social, associations gestionnaires, fédérations",
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit IA médico-social',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Cartographie des usages de l'IA par service", description: "Usages pratiqués et souhaités, qualifiés par niveau de risque et par donnée concernée." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Cadre d'usage et plan d'outillage", description: "Règles d'usage par métier, outil cadré et niveau d'hébergement requis selon les données." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan de formation et dossier pour les financeurs', description: "Plan de formation par métier au titre de la littératie IA, état des lieux chiffré au format attendu par l'ARS ou le département." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Méthode de l'audit IA médico-social Masteria",
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
  headline: "Audit IA médico-social : reprendre la main sur des usages déjà là, sans exposer les usagers",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  about: ['Audit IA médico-social', 'Intelligence artificielle médico-social', 'ESMS', 'RGPD données de santé', 'Conseil en intelligence artificielle'],
}

const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `https://www.master-ia.fr/${SLUG}#lexique`,
  name: "Lexique de l'IA dans le médico-social",
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Audit IA médico-social', description: "État des lieux des usages de l'intelligence artificielle dans une association ou un établissement médico-social, des données d'usagers concernées, des outils et de la conformité, conclu par un cadre d'usage, un plan d'outillage et un plan de formation par métier." },
    { '@type': 'DefinedTerm', name: 'ESSMS', description: "Établissements et services sociaux et médico-sociaux : IME, IEM, SESSAD, ESAT, foyers, MAS, FAM, EHPAD, services à domicile, protection de l'enfance, entre autres." },
    { '@type': 'DefinedTerm', name: "Dossier de l'usager informatisé (DUI)", description: "Logiciel métier qui centralise les informations relatives à la personne accompagnée. Les données qu'il contient ne doivent pas être saisies dans un outil d'IA non conforme." },
    { '@type': 'DefinedTerm', name: 'Hébergement HDS', description: "Certification française des hébergeurs de données de santé à caractère personnel, requise pour tout outil dans lequel des données de santé identifiantes sont traitées." },
    { '@type': 'DefinedTerm', name: 'FALC', description: "Facile à lire et à comprendre : méthode de rédaction accessible aux personnes en situation de handicap intellectuel, usage à forte valeur et à faible risque de l'IA générative, sous relecture humaine." },
    { '@type': 'DefinedTerm', name: 'Crédits non reconductibles (CNR)', description: "Crédits ponctuels attribués par une agence régionale de santé pour des dépenses non pérennes, dans lesquels un projet de transformation peut s'inscrire selon les priorités de l'agence." },
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
  { name: "Agence du Numérique en Santé — Certification des hébergeurs de données de santé (HDS)", url: 'https://esante.gouv.fr/produits-services/hds' },
]

export default function AuditIAMedicoSocialPage() {
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
    { name: 'Audit IA médico-social', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Médico-social</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartHandshake size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Audit IA · Secteur médico-social
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Audit IA médico-social :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>reprendre la main sur des usages déjà là, sans exposer les usagers</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit IA médico-social de Masteria fait l'état des lieux de l'intelligence artificielle dans votre association ou votre établissement : les usages déjà pratiqués par les équipes, les données d'usagers concernées, les outils et leur hébergement, l'organisation et la conformité RGPD et AI Act. Vous repartez avec <strong style={{ color: '#fff', fontWeight: 700 }}>un cadre d'usage, un plan d'outillage et un plan de formation par métier</strong>, plus un dossier argumenté pour vos financeurs. Périmètre non clinique et non décisionnel : l'IA n'évalue pas un usager et ne décide de rien.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Dans le médico-social, l'IA est arrivée par les téléphones personnels des éducateurs et des secrétariats, pour gagner du temps sur les écrits. Le gain est réel, et la donnée d'usager saisie dans un compte gratuit est le risque numéro un du secteur. L'audit part de cette réalité, sans chasse aux sorcières, et installe l'alternative cadrée.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre audit
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
                  <dt style={{ flex: '0 0 100px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UN AUDIT PROPRE AU SECTEUR (éditorial asymétrique) ── */}
      <section id="secteur" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi un audit propre au secteur</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Ce qui change quand l'usager est au centre
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Trois différences avec un audit IA d'entreprise. La donnée : des informations de santé, de mineurs ou de personnes vulnérables, couvertes par le secret professionnel, qui ne doivent pas sortir du logiciel métier. La ligne rouge : l'IA n'évalue pas un usager et ne décide de rien, et le règlement européen classe ces usages à haut risque. Le financement : le conseil se monte avec l'ARS ou le département, pas avec un OPCO.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La méthode et le livrable sont ceux de notre <Link to="/audit-ia" style={aStyle}>audit IA d'entreprise</Link>. Le périmètre, le vocabulaire et les garde-fous sont ceux de vos établissements. Pour la formation des équipes, notre <Link to="/formation-ia-sante" style={aStyle}>formation IA santé et médico-social</Link> reprend le même cadre.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {[
                  { icon: Lock, title: 'La donnée avant l\'outil', desc: "Chaque usage est jugé sur ce qu'on y met. Un compte rendu anonyme et des notes sur un jeune ne sont pas le même usage, même dans le même outil. L'audit trace cette ligne service par service." },
                  { icon: XCircle, title: 'Une ligne rouge écrite', desc: "Noter, orienter, évaluer une personne : hors périmètre, et écrit comme tel dans le rapport, avec le texte qui le fonde. La question ne revient pas à chaque nouvel outil." },
                  { icon: Users, title: 'Des équipes qui tournent', desc: "Turn-over, remplacements, temps partiels : le cadre d'usage et la formation sont pensés pour être transmis à l'arrivée, pas délivrés une fois." },
                  { icon: Landmark, title: 'Un rapport pour vos financeurs', desc: "L'état des lieux est rédigé dans le format qu'attendent une ARS ou un département : constats, objectifs, actions, budget. Il sert deux fois." },
                ].map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USAGES × RISQUE (ancre sombre, tableau citable) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les usages que nous rencontrons</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Quels usages de l'IA sont possibles dans un établissement médico-social ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La plupart des gains du secteur se font sans donnée identifiante : comptes rendus, trames, courriers, documents en facile à lire et à comprendre, préparation de l'évaluation. Ces usages relèvent du risque minimal. Les usages sur données d'usagers exigent un outil conforme et une procédure. Les usages qui évaluent une personne sont hors périmètre.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Usages de l'IA rencontrés dans le médico-social, niveau de risque et verdict" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '34%' }}>Usage</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Niveau de risque</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '46%' }}>Ce que l'audit conclut</th>
                </tr>
              </thead>
              <tbody>
                {USAGES.map((row, i) => (
                  <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 600, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.usage}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.risque}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le niveau de risque est celui du règlement (UE) 2024/1689 ; la mention « données sensibles » renvoie à l'article 9 du RGPD. Pour les questions de conformité seules, voyez notre <Link to="/audit-conformite-ai-act" style={{ color: '#60A5FA', fontWeight: 600 }}>audit de conformité IA</Link>.
          </p>
        </div>
      </section>

      {/* ── CE QUE L'AUDIT EXAMINE (6 dimensions) ── */}
      <section id="dimensions" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le périmètre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que couvre l'audit IA d'une structure médico-sociale ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six dimensions : les usages réels dans les services, les données d'usagers et le dossier informatisé, les outils et leur hébergement, l'organisation et les compétences, la conformité RGPD et AI Act, la qualité et la preuve. Chaque dimension ressort notée, argumentée et assortie d'actions avec un porteur.</strong>
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
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>La méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule l'audit ?
          </h2>

          <p style={answerStyle}>
            <strong>Six temps : cadrage avec la direction et le DPO, tournée des services, inventaire des outils et des comptes, état des données, qualification des usages et des écarts, puis plan et restitution. Les entretiens se font avec les professionnels qui écrivent chaque jour, pas seulement avec l'encadrement. Aucune donnée d'usager identifiante n'est saisie dans un outil d'IA pendant la mission.</strong>
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
            <strong>Une cartographie des usages par service, un cadre d'usage prêt à diffuser, un plan d'outillage indépendant des éditeurs, un plan de formation par métier, les écarts de conformité hiérarchisés et un dossier au format attendu par vos financeurs. Un ensemble exploitable par vos équipes ou par un autre prestataire.</strong>
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
                Ce que nous nous interdisons dans un établissement médico-social
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Un cabinet qui audite puis forme et déploie a intérêt à trouver des usages. Dans votre secteur, cet intérêt se heurte à une limite que nous posons avant vous. Ces engagements figurent dans le contrat et se vérifient dans le rapport.
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
            Combien coûte l'audit, et comment le financer dans le médico-social ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La mission se chiffre au forfait, après un cadrage gratuit qui fixe le nombre d'établissements et de services. Le devis affiche le montant hors taxes et toutes taxes comprises, puisqu'une association ne récupère pas la TVA, et sa validité couvre le temps d'instruction d'une demande de financement.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Building2 size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Notre façon de chiffrer</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le nombre d'établissements et de services fait le prix. Une association de trois établissements sur un département se traite en quelques jours d'expertise ; un groupe régional multi-activités demande davantage, et le devis l'explique ligne à ligne. Quand une journée de diagnostic suffit, nous vous le disons au cadrage.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Les financements du secteur</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le conseil n'est pas finançable par l'OPCO. Certaines agences régionales de santé financent des dépenses ponctuelles de transformation sur crédits non reconductibles, et un état des lieux argumenté peut s'inscrire dans une demande ou dans une négociation de CPOM : le rapport est conçu pour ce format, la faisabilité se vérifie avec votre délégation départementale. Le volet formation qui suit est finançable par votre OPCO, l'OPCO Santé pour la plupart des associations, l'ANFH pour les établissements publics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Audit IA médico-social : les questions fréquentes
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
            L'audit s'inscrit dans le périmètre de notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link>, et se prolonge par la <Link to="/formation-ia-sante" style={aStyle}>formation IA santé et médico-social</Link> de vos équipes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Audit IA d'entreprise", href: '/audit-ia', tag: 'Audit', desc: "La mission de référence, dont cette page est la déclinaison sectorielle : méthode, livrable, garde-fous." },
              { label: 'Formation IA santé et médico-social', href: '/formation-ia-sante', tag: 'Formation', desc: "Les usages non cliniques de l'IA, dans le cadre du secret médical. Finançable par votre OPCO." },
              { label: 'Audit de conformité IA', href: '/audit-conformite-ai-act', tag: 'Conformité', desc: "Quand la question est « sommes-nous en règle » : RGPD, AI Act, écarts et plan daté." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Conformité', desc: "Les questions de données personnelles que soulève chaque usage d'IA générative." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Le document d'usage qui suit l'audit : ce que les équipes peuvent faire, avec quels outils et quelles données." },
              { label: 'IA dans la santé et la pharma', href: '/ia-sante-pharma', tag: 'Secteur', desc: "Le panorama des usages de l'IA dans le secteur sanitaire, au-delà du médico-social." },
              { label: 'Diagnostic IA en une journée', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Quand un seul établissement veut savoir par où commencer, avant un audit plus large." },
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
                Un cabinet indépendant des éditeurs, qui forme déjà le secteur
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, audite, construit et forme, sans dépendre d'un éditeur. Nous formons des équipes d'établissements de santé et médico-sociaux aux usages non cliniques de l'IA, et cette expérience de terrain nourrit l'audit : nous savons ce que les équipes font déjà et où la donnée fuit. L'indépendance vis-à-vis des éditeurs garantit un plan d'outillage qui suit votre intérêt. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
              Cadrons l'audit IA de vos établissements
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre association : établissements, services, ce qui motive la demande, une échéance de financement s'il y en a une. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit, qui fixe le périmètre et vous dit si une journée de diagnostic suffit.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un audit IA médico-social
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Devis HT et TTC · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
