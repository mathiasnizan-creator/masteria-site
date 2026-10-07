import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, FileText, ListChecks, XCircle,
  Calendar, MapPin, Check, Landmark, Building2, Users, Database, Server, HeartHandshake,
  Lock, ClipboardList, Map as MapIcon, GraduationCap, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page sectorielle « Audit IA médico-social » (slug /audit-ia-medico-social).
 * Grappe « audit ia médico-social », « audit maturité ia médico-social », « audit ia esms ».
 * Déclinaison sectorielle de /audit-ia : même méthode, même livrable, périmètre et
 * vocabulaire du secteur (usager, DUI, HDS, secret professionnel, évaluation HAS, CNR).
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre au moins 90 %, faits au 7 octobre 2026) :
 * - financement selon le secteur : association privée = CNR de l'ARS d'abord, puis OPCO Santé
 *   pour la formation ; établissement public = ANFH pour la formation ; montants TTC ;
 *   conseil pas finançable par votre OPCO ; aucun dispositif public de conseil nommé ;
 * - AI Act : article 4 depuis le 2 février 2025, réécrit par le règlement (UE) 2026/1744 en
 *   obligation de moyens (aucun certificat) ; article 50 depuis le 2 août 2026 ; haut risque
 *   annexe III au 2 décembre 2027 ;
 * - demande d'audit = audit seul, suite chiffrée après la restitution ; prix en fourchette
 *   large à plafond ouvert, en TTC ;
 * - usages non cliniques uniquement ; l'IA n'évalue pas un usager ; FounderNote remplacé.
 */

const SLUG = 'audit-ia-medico-social'
const RDV = '/contact?type=projet&rdv=30'
const DATE_MODIFIED = '2026-10-07'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit IA médico-social : usages, données, cadre | Masteria"
const META_DESC = "Audit IA pour établissements médico-sociaux : usages des équipes, données d'usagers, hébergement HDS, RGPD et AI Act, plans d'outillage et de formation."
const KEYWORDS = "audit ia médico-social, audit ia medico social, audit maturité ia médico-social, audit ia esms, audit ia association médico-sociale, audit ia ime, audit ia ehpad, intelligence artificielle médico-social"

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
  { icon: Calendar, label: "Durée ajustée au nombre d'établissements" },
  { icon: Lock, label: "Aucune donnée d'usager confiée à une IA pendant l'audit" },
  { icon: FileText, label: "Rapport lisible en conseil d'administration" },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Pour qui', value: "Associations gestionnaires et établissements : IME, IEM, SESSAD, ESAT, foyers, MAS, FAM, EHPAD, services à domicile, protection de l'enfance" },
  { label: 'Objet', value: "Usages de l'IA déjà installés dans les équipes, données d'usagers et dossier informatisé, outils et hébergement, organisation, conformité RGPD et AI Act" },
  { label: 'Limite', value: "Usages non cliniques et non décisionnels : écrits, coordination, qualité, échanges avec les familles, fonctions support. L'IA n'évalue personne et ne tranche rien" },
  { label: 'Livrable', value: "Carte des usages par service, cadre d'usage, plan d'outillage, plan de formation par métier, écarts de conformité, dossier pour vos financeurs" },
  { label: 'Durée', value: "Quelques jours d'expertise, davantage avec plusieurs établissements ; la première demi-heure de cadrage est offerte" },
  { label: 'Prix', value: "Montant arrêté au cadrage, à partir de quelques milliers d'euros TTC, affiché HT et TTC ; une demande de crédits non reconductibles à l'ARS peut le couvrir" },
]

/* ───────── Usages rencontrés et niveau de risque (tableau citable) ───────── */

const USAGES = [
  {
    usage: "Compte rendu de réunion de service, note de synthèse, courrier administratif",
    risque: 'Risque minimal',
    verdict: "Permis dans un outil encadré, sans nom ni détail qui identifie un usager. C'est le premier gain de temps du secteur, et souvent le premier usage pratiqué hors cadre.",
  },
  {
    usage: "Aide à la rédaction d'un projet personnalisé, en partant des notes prises par l'équipe",
    risque: 'Données sensibles (article 9 du RGPD)',
    verdict: "Possible seulement après anonymisation stricte, ou dans un outil hébergé chez un prestataire certifié HDS, selon une procédure écrite. Exclu sur un compte personnel.",
  },
  {
    usage: "Traduction d'un document en FALC (facile à lire et à comprendre) pour les familles",
    risque: 'Risque minimal',
    verdict: "Permis et encouragé, avec une relecture humaine : le professionnel signe la version finale.",
  },
  {
    usage: "Préparation de l'évaluation HAS : trames, preuves, rapport d'activité",
    risque: 'Risque minimal',
    verdict: "Permis sur des documents internes sans données nominatives. L'IA structure et reformule ; les constats restent ceux de l'équipe.",
  },
  {
    usage: "Notation, orientation ou évaluation d'un usager confiée à l'IA",
    risque: 'Haut risque (annexe III)',
    verdict: "Hors périmètre. Évaluer une personne pour l'accès à une prestation relève du haut risque, et une personne accompagnée ne se trie pas comme un dossier. Nous ne cadrons pas cet usage.",
  },
  {
    usage: "Tri de candidatures ou évaluation des salariés par un outil d'IA",
    risque: 'Haut risque (annexe III)',
    verdict: "Règles applicables le 2 décembre 2027, reportées sans être supprimées. L'audit le signale et propose des usages RH à risque minimal : fiches de poste, annonces, trames d'entretien.",
  },
]

/* ───────── Six dimensions ───────── */

const DIMENSIONS = [
  {
    icon: Users,
    title: 'Ce que les services font déjà',
    desc: "Éducateurs, secrétariats, cadres, fonctions support : qui se sert de quoi, sur quel compte, avec quelles données. L'IA arrive souvent par les téléphones personnels avant d'arriver par la direction. L'audit le constate sans sanction, pour proposer une solution encadrée.",
  },
  {
    icon: Database,
    title: "Les données d'usagers et le dossier informatisé",
    desc: "Où vivent les informations : dossier de l'usager informatisé, exports, fichiers bureautiques, messageries. Ce qui peut nourrir un usage une fois anonymisé, ce qui ne doit jamais quitter le logiciel métier. Le programme ESMS numérique a fait entrer les données dans un logiciel ; l'audit vérifie qu'elles y restent.",
  },
  {
    icon: Server,
    title: 'Les outils et leur hébergement',
    desc: "Suite bureautique, logiciel de dossier, outils d'IA souscrits ou activés d'office, comptes gratuits. Une donnée de santé exige un hébergeur certifié HDS : chaque outil est confronté à ce qu'on y dépose.",
  },
  {
    icon: GraduationCap,
    title: "L'organisation et les compétences",
    desc: "Rotation des équipes, encadrement intermédiaire, temps de formation disponible, présence ou non d'un référent numérique. Côté réglementation, l'article 4 de l'AI Act réclame des actions de formation ; réécrit en 2026 en obligation de moyens, ce texte appelle, dans un secteur qui recrute sans cesse, un plan suivi d'année en année au lieu d'une session isolée.",
  },
  {
    icon: ShieldCheck,
    title: 'Le RGPD et l’AI Act',
    desc: "Données de santé, données de mineurs ou de personnes vulnérables, secret professionnel et partage d'informations, analyse d'impact lorsque le RGPD l'exige, classement de chaque usage selon son risque. Le DPO, souvent mutualisé au siège, suit chaque étape.",
  },
  {
    icon: ClipboardList,
    title: 'La qualité et la preuve',
    desc: "Le référentiel d'évaluation de la HAS attend des preuves écrites, datées, traçables. L'audit regarde comment l'IA peut alléger la production de ces écrits sans en réduire la valeur, et comment signaler ce que l'IA a aidé à produire.",
  },
]

/* ───────── Six temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage avec la direction et le DPO',
    desc: "Établissements et services concernés, élément déclencheur (projet associatif, demande de financement, incident, attente des équipes), format attendu par le CODIR et le conseil d'administration. La première demi-heure, offerte, sert à fixer le devis.",
  },
  {
    num: '02',
    title: 'Rencontre des services',
    desc: "Entretiens avec celles et ceux qui écrivent tous les jours : éducateurs, chefs de service, secrétariats, psychologues, fonctions support. C'est là que les usages se découvrent, bien plus que dans l'organigramme. Sur place ou à distance, selon les établissements.",
  },
  {
    num: '03',
    title: 'Inventaire des outils et des comptes',
    desc: "Ce qui est souscrit, ce qui s'est activé seul dans vos logiciels, ce qui tourne sur des comptes personnels. Chaque outil est rapproché de la donnée qu'on y dépose et de son hébergement.",
  },
  {
    num: '04',
    title: 'État des données',
    desc: "Dossier de l'usager informatisé, exports, fichiers bureautiques, messageries : disponibilité, qualité, droits d'usage. Ce qui peut servir une fois anonymisé, ce qui doit rester dans le logiciel métier.",
  },
  {
    num: '05',
    title: 'Qualification des usages et des écarts',
    desc: "Chaque usage rencontré ou souhaité reçoit un niveau de risque, ses conditions et ses écarts RGPD. Les usages exclus sont écrits avec leur motif, pour que la question ne ressurgisse pas à chaque semestre.",
  },
  {
    num: '06',
    title: 'Plan et restitution',
    desc: "Cadre d'usage, plan d'outillage, plan de formation par métier, actions de conformité datées avec un porteur. Restitution au CODIR, puis, si vous le souhaitez, au conseil d'administration ou aux représentants du personnel.",
  },
]

/* ───────── Six documents ───────── */

const LIVRABLE = [
  {
    icon: MapIcon,
    title: 'Une carte des usages, service par service',
    desc: "Ce qui se pratique déjà, ce qui est souhaité, ce qui est permis, permis sous conditions ou exclu. Une page par établissement, argumentée en annexe.",
  },
  {
    icon: ListChecks,
    title: "Un cadre d'usage prêt à diffuser",
    desc: "Les gestes permis, les outils autorisés, les données qui ne sortent pas, en quelques pages. Rédigé pour qu'un éducateur le lise en fin de journée sans juriste à ses côtés ; il servira de base à votre charte IA.",
  },
  {
    icon: Server,
    title: "Un plan d'outillage",
    desc: "Le ou les outils encadrés qui remplacent les comptes personnels, le niveau d'hébergement exigé selon les données, l'ordre de déploiement et un ordre de grandeur budgétaire TTC par licence. Sans attache avec un éditeur.",
  },
  {
    icon: GraduationCap,
    title: 'Un plan de formation par métier',
    desc: "Qui former, à quoi, dans quel ordre, avec quelle trace pour répondre à l'article 4. Pensé pour un secteur qui recrute toute l'année : un socle court commun, des approfondissements par fonction, un module d'accueil des nouveaux arrivants.",
  },
  {
    icon: Scale,
    title: 'Des écarts de conformité classés',
    desc: "RGPD, secret professionnel, AI Act : chaque écart avec sa gravité, le texte concerné et le temps laissé pour corriger. Les points déjà en règle figurent aussi dans le rapport.",
  },
  {
    icon: Landmark,
    title: 'Un dossier pour vos financeurs',
    desc: "Un état des lieux argumenté et chiffré en TTC, au format attendu par une ARS ou un conseil départemental : constats, objectifs, actions, budget. Réutilisable dans une demande de crédits non reconductibles ou dans la négociation d'un CPOM.",
  },
]

/* ───────── Engagements ───────── */

const GARDE_FOUS = [
  "L'IA n'évalue pas un usager et ne décide de rien : ces usages sont exclus, et le rapport le dit",
  "Aucune donnée identifiante d'usager n'entre dans un outil d'IA pendant l'audit, ni de notre fait ni de celui de vos équipes",
  "Le rapport se lit en conseil d'administration : constats, décisions, budget TTC, sans jargon",
  "Seul l'audit est facturé ; formation et déploiement se chiffrent après la restitution",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit IA dans le médico-social ?",
    a: "C'est le bilan de l'intelligence artificielle dans une structure médico-sociale, association gestionnaire ou établissement : ce que les équipes pratiquent, fréquemment depuis des comptes personnels, les données d'usagers concernées, les outils et leur hébergement, l'organisation, le respect des règles sur les données et sur l'IA. Il aboutit à un cadre d'usage, un plan d'outillage, un plan de formation pensé métier par métier et un dossier argumenté pour vos financeurs. Le périmètre reste non clinique et non décisionnel : l'IA aide à écrire, à coordonner, à expliquer ; elle n'évalue personne.",
  },
  {
    q: "Nos équipes se servent déjà de ChatGPT sur leur téléphone : faut-il s'en inquiéter ?",
    a: "C'est la situation la plus courante, et l'audit la traite en premier. Tout se joue sur la donnée : un compte rendu sans nom ni détail identifiant ne pose pas de difficulté, alors que des notes sur un jeune saisies dans un compte gratuit sont une donnée de santé sortie de votre responsabilité. L'audit fait remonter ces usages sans sanction, puis installe l'alternative : un outil encadré, une règle simple sur les données, une formation courte. Les équipes gardent le temps gagné ; l'établissement reprend la main.",
  },
  {
    q: "L'IA peut-elle traiter des données d'usagers ?",
    a: "Sur des données anonymisées, oui, dans un outil encadré et selon une procédure écrite. Sur des données identifiantes, uniquement dans un outil dont l'hébergeur détient la certification HDS et dont le contrat interdit de réemployer vos informations, avec le DPO dans la boucle et une analyse d'impact si le RGPD la requiert. Dans les faits, la plupart des gains du secteur se passent de données identifiantes : comptes rendus, trames, courriers, documents FALC, préparation de l'évaluation. L'audit trace la frontière pour votre établissement.",
  },
  {
    q: "L'IA peut-elle aider à rédiger les projets personnalisés ?",
    a: "Elle peut structurer et reformuler à partir de ce que l'équipe a noté, à deux conditions : l'anonymisation ou un outil hébergé chez un prestataire certifié HDS, et la relecture du professionnel qui signe. Le projet personnalisé reste l'œuvre de l'équipe pluridisciplinaire et de la personne accompagnée. L'IA ne propose pas d'objectifs à partir d'un profil, ne compare pas les usagers, ne suggère pas d'orientation : ces usages relèvent du haut risque selon l'AI Act, et ils trahiraient votre mission.",
  },
  {
    q: "Que prévoit l'AI Act pour notre secteur ?",
    a: "Deux blocs s'appliquent depuis le 2 février 2025. Le premier interdit certaines pratiques ; le second, l'article 4, réécrit par l'Omnibus (règlement (UE) 2026/1744) en obligation de moyens, vous demande d'agir pour former vos salariés à l'IA, sans certificat exigé. Depuis le 2 août 2026, l'article 50 impose en plus la transparence si vous diffusez au public un chatbot ou des contenus générés. Quant aux règles du haut risque, qui visent notamment l'évaluation de l'accès à des prestations et le tri de candidatures, elles attendent décembre 2027. Le RGPD, lui, s'applique pleinement, et c'est lui qui compte en cas de contrôle.",
  },
  {
    q: "Quel financement pour un audit IA dans une association médico-sociale ?",
    a: "Commencez par l'ARS : certaines agences financent des dépenses ponctuelles de transformation sur crédits non reconductibles, et un état des lieux argumenté peut entrer dans une demande ou dans la négociation d'un CPOM. Votre délégation départementale confirme ce qui est possible, et le rapport est conçu pour ce format, montants TTC compris. L'audit, prestation de conseil, n'est pas finançable par votre OPCO, à l'inverse de la formation qui le suit : la plupart des associations relèvent pour elle de l'OPCO Santé, dans la limite de ses règles et de son budget, et les établissements publics de l'ANFH. Masteria détient Qualiopi au titre des actions de formation, condition de ce financement.",
  },
  {
    q: "Combien de temps dure l'audit, et pour combien d'établissements ?",
    a: "Pour une association de trois établissements dans un même département, comptez quelques jours d'expertise, répartis sur plusieurs semaines le temps d'organiser les rencontres ; un groupe régional aux activités multiples demande davantage, et le devis l'explique ligne à ligne. Les entretiens ont lieu dans vos murs ou en visio ; le livrable reste le même. Nos intervenants rayonnent depuis Lyon sur tout le territoire.",
  },
  {
    q: "Et après l'audit ?",
    a: "Trois suites possibles, cumulables, chiffrées après la restitution : la formation des équipes par métier, avec un financement possible par votre OPCO ; le déploiement de l'outil encadré retenu, avec ou sans nous ; la gouvernance, pour tenir le cadre malgré la rotation des équipes. Le rapport s'utilise sans nous, et donner suite reste votre choix, écrit au contrat.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit IA médico-social, Masteria',
  alternateName: "Audit de maturité IA pour établissements et services médico-sociaux",
  description: "Audit IA pour associations gestionnaires et établissements médico-sociaux : usages des équipes, données d'usagers et dossier informatisé, outils et hébergement HDS, organisation, conformité RGPD et AI Act. Livrable : carte des usages, cadre d'usage, plan d'outillage, plan de formation par métier, écarts de conformité, dossier chiffré en TTC pour les financeurs. Usages non cliniques uniquement.",
  url: `https://www.master-ia.fr/${SLUG}`,
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  serviceType: 'Audit IA sectoriel (médico-social) : maturité et conformité',
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
    name: "Directions générales et directions d'établissement du médico-social, associations gestionnaires, fédérations",
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit IA médico-social',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Carte des usages de l'IA par service", description: "Usages pratiqués et souhaités, classés par niveau de risque et par type de donnée." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Cadre d'usage et plan d'outillage", description: "Règles d'usage par métier, outil encadré et niveau d'hébergement exigé selon les données." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan de formation et dossier pour les financeurs', description: "Plan de formation par métier pour répondre à l'article 4 du règlement européen, état des lieux chiffré en TTC au format attendu par l'ARS ou le département." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Déroulé de l'audit IA médico-social Masteria",
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
  dateModified: DATE_MODIFIED,
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
    { '@type': 'DefinedTerm', name: 'Audit IA médico-social', description: "Bilan des usages de l'IA dans une structure médico-sociale, des données d'usagers en jeu, des outils et de la conformité, conclu par un cadre d'usage, un plan d'outillage et un plan de formation par métier." },
    { '@type': 'DefinedTerm', name: 'ESSMS', description: "Établissements et services sociaux et médico-sociaux : IME, IEM, SESSAD, ESAT, foyers, MAS, FAM, EHPAD, services à domicile, protection de l'enfance, entre autres." },
    { '@type': 'DefinedTerm', name: "Dossier de l'usager informatisé (DUI)", description: "Logiciel métier qui réunit les informations sur la personne accompagnée. Ces informations ne doivent pas être copiées dans un outil d'IA dont l'hébergement n'est pas adapté." },
    { '@type': 'DefinedTerm', name: 'Hébergement HDS', description: "Certification française que doit détenir l'hébergeur de données de santé identifiantes confiées par un établissement ; tout outil d'IA qui reçoit ces données est concerné." },
    { '@type': 'DefinedTerm', name: 'FALC', description: "Facile à lire et à comprendre : méthode de rédaction accessible aux personnes en situation de handicap intellectuel ; usage utile et peu risqué de l'IA générative, sous relecture humaine." },
    { '@type': 'DefinedTerm', name: 'Crédits non reconductibles (CNR)', description: "Crédits ponctuels qu'une agence régionale de santé attribue pour des dépenses non pérennes ; un projet de transformation peut s'y inscrire selon les priorités de l'agence." },
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
  { name: "Texte officiel de l'AI Act sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "RGPD, règlement (UE) 2016/679 : article 9 sur les données sensibles", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679' },
  { name: "CNIL : intelligence artificielle et données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Agence du Numérique en Santé : la certification HDS des hébergeurs", url: 'https://esante.gouv.fr/produits-services/hds' },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Médico-social</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartHandshake size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Audit IA · Associations et établissements médico-sociaux
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Audit IA médico-social :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>reprendre la main sur des usages déjà là, sans exposer les usagers</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · Publié en septembre 2026, revu le 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit IA médico-social de Masteria dresse le bilan de l'intelligence artificielle dans votre association ou votre établissement : ce que les équipes pratiquent déjà, les données d'usagers en jeu, les outils et leur hébergement, l'organisation, la conformité aux textes (RGPD, AI Act). Vous recevez <strong style={{ color: '#fff', fontWeight: 700 }}>un cadre d'usage, un plan d'outillage et un plan de formation par métier</strong>, ainsi qu'un dossier argumenté pour l'ARS ou le département. Le périmètre reste non clinique : l'IA n'évalue pas un usager et ne décide de rien.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Dans le secteur, l'IA est entrée par les téléphones des éducateurs et des secrétariats, pour alléger les écrits. Le temps gagné compte, et des notes sur un usager tapées dans un compte gratuit constituent le premier risque. L'audit part de ce constat sans chercher de coupable, puis met en place une solution encadrée.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les six documents remis
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'essentiel</div>
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

      {/* ── CE QUI CHANGE DANS LE SECTEUR ── */}
      <section id="secteur" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce qui change dans le secteur</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Ce qui change quand l'usager est au centre
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Trois écarts avec un audit IA d'entreprise. La donnée d'abord : informations de santé, de mineurs ou de personnes vulnérables, couvertes par le secret professionnel, qui doivent rester dans le logiciel métier. La limite ensuite : l'IA n'évalue pas un usager et ne décide de rien, et le texte européen sur l'IA range parmi le haut risque l'évaluation de l'accès à des prestations essentielles. Le financement enfin : le conseil se finance auprès de l'ARS, sur crédits non reconductibles, et la formation par l'OPCO Santé.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La méthode et le livrable reprennent ceux de notre <Link to="/audit-ia" style={aStyle}>audit IA d'entreprise</Link>. Le périmètre, le vocabulaire et les garde-fous viennent de vos établissements. Pour les équipes, notre <Link to="/formation-ia-sante" style={aStyle}>formation IA santé et médico-social</Link> applique le même cadre.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {[
                  { icon: Lock, title: "La donnée juge l'usage", desc: "Chaque usage s'apprécie selon ce qu'on y met. Un compte rendu anonyme et des notes sur un jeune accueilli n'ont rien de comparable, même dans le même outil. L'audit trace cette frontière service par service." },
                  { icon: XCircle, title: 'Une limite écrite noir sur blanc', desc: "Noter, orienter ou évaluer une personne accompagnée sort du périmètre, et le rapport l'écrit avec le texte qui le justifie. La question n'a plus à revenir à chaque nouvel outil." },
                  { icon: Users, title: 'Des équipes qui changent', desc: "Remplacements, temps partiels, départs : le cadre d'usage et la formation sont conçus pour se transmettre à chaque arrivée d'un professionnel." },
                  { icon: Landmark, title: 'Un rapport qui sert deux fois', desc: "L'état des lieux suit le format qu'attendent une ARS ou un conseil départemental : constats, objectifs, actions, budget TTC. Il éclaire la direction et nourrit une demande de financement." },
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

      {/* ── USAGES ET RISQUE (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Usages rencontrés</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Quels usages de l'IA sont possibles dans un établissement médico-social ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Les gains les plus nets du secteur se passent de toute donnée identifiante : comptes rendus, trames, courriers, documents FALC, préparation de l'évaluation. Ils relèvent du risque minimal. Les usages qui touchent aux données d'usagers demandent un outil conforme et une procédure. Ceux qui évaluent une personne sortent du périmètre.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Usages de l'IA observés dans le médico-social, niveau de risque et conclusion de l'audit" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '34%' }}>Usage</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Niveau de risque</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '46%' }}>Conclusion de l'audit</th>
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
            Les niveaux de risque suivent le règlement européen sur l'IA (2024/1689) ; la mention « données sensibles » renvoie à l'article 9 du RGPD. Si seule la conformité vous occupe, voyez notre <Link to="/audit-conformite-ai-act" style={{ color: '#60A5FA', fontWeight: 600 }}>audit de conformité IA</Link>.
          </p>
        </div>
      </section>

      {/* ── SIX DIMENSIONS ── */}
      <section id="dimensions" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le périmètre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que couvre l'audit IA d'une structure médico-sociale ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six dimensions : les usages des services, les données d'usagers et le dossier informatisé, les outils et l'hébergement, l'organisation et les savoir-faire, la conformité RGPD et AI Act, la qualité et la preuve. Chacune reçoit une note, des arguments et des actions confiées à un porteur.</strong>
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

      {/* ── SIX TEMPS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Déroulé</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six temps, des entretiens de terrain à la restitution
          </h2>

          <p style={answerStyle}>
            <strong>Cadrage avec la direction et le DPO, rencontre des services, inventaire des outils et des comptes, état des données, qualification des usages et des écarts, plan et restitution. Les entretiens se font avec les professionnels qui écrivent au quotidien, en plus de l'encadrement. Pendant toute la mission, aucune donnée identifiante d'usager n'entre dans un outil d'IA.</strong>
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

      {/* ── SIX DOCUMENTS ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six documents, chacun pour un lecteur : direction, équipes, financeurs
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La carte des usages, service par service ; un cadre d'usage prêt à diffuser ; un plan d'outillage sans attache avec un éditeur ; un plan de formation par métier ; des écarts de conformité classés ; un dossier au format de vos financeurs. Ils restent utilisables sans nous, par vos équipes comme par un autre intervenant.</strong>
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
                Ce que nous nous interdisons dans un établissement médico-social
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Un cabinet qui audite puis forme et déploie a intérêt à trouver des usages. Dans votre secteur, cet intérêt bute sur une limite que nous posons avant vous. Ces engagements sont inscrits au contrat et se contrôlent dans le rapport.
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
            Combien coûte l'audit, et comment le financer dans le médico-social ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le montant se décide au cadrage, selon le nombre d'établissements et de services. Un audit centré sur un établissement commence à quelques milliers d'euros TTC ; une association de plusieurs établissements ou un groupe régional se chiffre en dizaines de milliers d'euros TTC, sans plafond fixé d'avance. Le devis affiche le HT et le TTC, puisqu'une association ne récupère pas la TVA, et sa validité couvre le temps d'instruction d'une demande de crédits.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Building2 size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce qui fait le prix</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le nombre d'établissements et de services compte davantage que le nombre de salariés. Une association de trois établissements dans un même département se traite en quelques jours d'expertise ; un groupe régional aux activités multiples réclame plus de temps, ce que le devis détaille ligne à ligne. Quand un diagnostic plus court suffit, le cadrage vous le dit. Seul l'audit est chiffré : formation et déploiement viennent après la restitution, si vous les demandez.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Financer l'audit dans le secteur</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Pour une association privée, la première piste est l'ARS : certaines agences financent des dépenses ponctuelles de transformation sur crédits non reconductibles, et le rapport est rédigé pour entrer dans une telle demande ou dans un CPOM ; votre délégation départementale confirme ce qui est possible. Cette prestation de conseil n'est pas finançable par votre OPCO, contrairement à la formation qui suit l'audit : la plupart des associations la financent avec l'OPCO Santé, les établissements publics avec l'ANFH.
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
                Audit IA médico-social : les questions des directions d'établissement
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un cas qui ne figure pas ici, ou un financeur qui attend une réponse précise ? Écrivez-nous.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrire votre situation
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
          <Kicker>À consulter</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pages utiles aux établissements
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Cette mission relève de notre activité de <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link>, et la <Link to="/formation-ia-sante" style={aStyle}>formation IA santé et médico-social</Link> en prend souvent le relais auprès des équipes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Audit IA d'entreprise", href: '/audit-ia', tag: 'Audit', desc: "La mission de référence, dont cette page adapte la méthode et le livrable au secteur." },
              { label: 'Formation IA santé et médico-social', href: '/formation-ia-sante', tag: 'Formation', desc: "Une journée sur les usages non cliniques, dans le cadre du secret professionnel, avec un financement possible par votre OPCO." },
              { label: 'Audit de conformité IA', href: '/audit-conformite-ai-act', tag: 'Conformité', desc: "Quand la seule question est d'être en règle : RGPD, AI Act, écarts et plan daté." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Ce que l'IA générative change pour les données personnelles, cas par cas." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Le texte d'usage qui découle souvent de l'audit : outils permis, données exclues." },
              { label: "L'IA en santé et dans la pharma", href: '/ia-sante-pharma', tag: 'Secteur', desc: "Les usages de l'IA côté sanitaire, au-delà du médico-social." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Format court', desc: "Pour un seul établissement qui veut savoir par où commencer avant un audit plus large." },
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
                    Accéder à la page
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
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui conduit l'audit</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un cabinet indépendant des éditeurs, avec un cadre écrit pour le secteur
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Mathias Nizan pilote chaque audit médico-social. Selon la taille de l'association, il associe à la mission des consultants IA (le réseau en compte une dizaine) et des formateurs (une vingtaine environ), chargés de mesurer les savoir-faire et de bâtir le plan de formation ; tous sont indépendants. Le cadre appliqué (usages non cliniques, données de santé, hébergement HDS, secret professionnel) est celui de notre formation IA santé, conçue pour les établissements sanitaires et médico-sociaux. Masteria reste indépendant des éditeurs : le plan d'outillage suit vos contraintes et votre budget. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> présentent des missions datées.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Non clinique', 'le seul périmètre que nous auditons'],
                ['HDS', 'exigé pour toute donnée de santé identifiante'],
                ['HT et TTC', 'les deux montants sur chaque devis'],
                ['≈ 20', 'formateurs pour le plan par métier'],
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
            Mathias Nizan, fondateur de Masteria, signe ce texte destiné aux directions d'établissement ; il l'a revu le 7 octobre 2026, après la réécriture de l'article 4 par l'Omnibus européen sur l'IA. Son parcours est présenté sur <Link to="/mathias-nizan" style={aStyle}>sa page</Link>.
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
              Cadrons l'audit IA de vos établissements
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Présentez votre association : établissements, services, raison de la demande, et l'échéance d'une demande de financement s'il y en a une. Le temps d'un premier échange de 30 minutes, nous délimitons la mission et vous disons si un diagnostic plus léger suffirait.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Devis HT et TTC · usages non cliniques uniquement · interventions depuis Lyon, partout en France
            </p>
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
