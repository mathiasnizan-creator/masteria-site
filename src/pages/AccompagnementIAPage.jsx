import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Route as RouteIcon, Users, GraduationCap,
  MapPin, Check, Landmark, HeartHandshake, BarChart3,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « accompagnement IA » (slug /accompagnement-ia) — cluster conseil.
 * Cible la grappe (Semrush 2026-08-10) : « accompagnement ia » (90, KD 22,
 * CPC 1,03), « accompagnement entreprises ia générative » (70), « agence
 * accompagnement ia » (70), + les intentions adoption pliées en sections :
 * « accompagnement au changement ia » (50, KD 10), « conduite du changement
 * ia » (50), « adoption ia entreprise » (50). SERP vérifiée le 2026-08-10 :
 * pages de service classées (Kayro, Sigma, TalenCo), 4 annonceurs,
 * economie.gouv en tête sur l'angle aides publiques ; l'AI Overview décrit
 * la séquence diagnostic → formation → déploiement → suivi.
 *
 * RÉPARTITION D'INTENTIONS (à ne pas casser) :
 *  - /conseil-intelligence-artificielle = l'expertise et la stratégie ;
 *  - /accompagnement-ia = CETTE page : la présence dans la durée, du cadrage
 *    à l'adoption par les équipes (le fil rouge qui relie diagnostic, audit,
 *    méthode, développement et formation) ;
 *  - /acculturation-ia = la montée en compétence collective (côté formation,
 *    OPCO/Qualiopi visibles) — page sœur créée le même jour.
 *
 * INTÉGRITÉ (ligne maison) : posture capacité, aucun cas client nommé, aucun
 * chiffre de résultat inventé, pas de prix ferme. Le conseil n'est pas
 * finançable par votre OPCO (réservé formation) ; le volet formation de
 * l'accompagnement l'est (Qualiopi). Aides publiques : formulation GÉNÉRIQUE
 * uniquement (« selon votre profil et votre région, détaillé au cadrage »).
 * CONSIGNE Mathias 2026-08-10 : ne JAMAIS nommer Bpifrance / Diag Data IA sur
 * le site — ça envoie les prospects faire leur audit ailleurs. En devis, les
 * dispositifs restent mobilisables (mémoire financement conseil).
 */

const SLUG = 'accompagnement-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Accompagnement IA : du cadrage à l'adoption | Masteria"
const META_DESC = "Accompagnement IA en entreprise : cadrage, choix des outils, déploiement, conduite du changement et formation des équipes. Présence dans la durée, cadrage gratuit."
const KEYWORDS = "accompagnement ia, accompagnement intelligence artificielle, accompagnement entreprises ia générative, agence accompagnement ia, accompagnement au changement ia, conduite du changement ia, adoption ia entreprise"

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

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: RouteIcon, label: 'Du cadrage à l\'adoption' },
  { icon: GraduationCap, label: 'Volet formation Qualiopi, finançable OPCO' },
  { icon: HeartHandshake, label: 'Un interlocuteur, dans la durée' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Une présence dans la durée : cadrer, choisir, déployer, conduire le changement, former, mesurer" },
  { label: 'Format', value: "Rythme adapté à votre organisation : points réguliers, jalons décisionnels, présence sur site ou à distance" },
  { label: 'Adoption', value: "Conduite du changement intégrée : communication, référents internes, formation par métier, mesure d'usage" },
  { label: 'Différence', value: "Le maillon formation est certifié Qualiopi et finançable par votre OPCO ; le conseil ne l'est pas" },
  { label: 'Prix', value: "Sur devis selon le périmètre et la durée ; premier échange de cadrage gratuit" },
  { label: 'Et après', value: "L'objectif est votre autonomie : des équipes formées et des usages qui tiennent sans nous" },
]

/* ───────── Les 4 phases (renvoient vers les pages existantes) ───────── */

const PHASES = [
  {
    num: '01',
    title: 'Cadrer : où l\'IA crée de la valeur chez vous',
    desc: "État des lieux de vos usages, de vos processus et de vos contraintes, priorisation par impact et par effort. Selon la profondeur voulue, cette phase prend la forme de notre diagnostic d'une journée ou d'un audit complet.",
    links: [
      { label: 'Diagnostic IA (1 journée)', href: '/diagnostic-ia' },
      { label: 'Audit IA complet', href: '/audit-ia' },
    ],
  },
  {
    num: '02',
    title: 'Choisir et déployer les bons outils',
    desc: "Choix des outils adaptés à vos métiers et à vos contraintes de données (nous sommes indépendants des éditeurs), configuration, intégrations et développements sur mesure quand le besoin le justifie. Le déploiement suit un ordre : d'abord les cas qui prouvent la valeur.",
    links: [
      { label: 'Quel outil IA choisir', href: '/quel-outil-ia' },
      { label: 'Développement sur mesure', href: '/agence-developpement-ia' },
    ],
  },
  {
    num: '03',
    title: 'Conduire le changement et former',
    desc: "C'est le maillon où la plupart des projets IA meurent. Communication qui donne du sens, réseau de référents internes, formation par métier sur les cas réels des équipes, cadre d'usage clair (charte, RGPD, AI Act). Notre volet formation est certifié Qualiopi et finançable par votre OPCO.",
    links: [
      { label: 'Acculturation IA', href: '/acculturation-ia' },
      { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise' },
    ],
  },
  {
    num: '04',
    title: 'Ancrer et mesurer l\'adoption',
    desc: "Suivi des usages réels, retours d'expérience, ajustements, extension aux cas suivants. L'accompagnement se pilote sur des indicateurs d'adoption, pas sur un sentiment : qui utilise quoi, sur quels processus, avec quel gain constaté par les équipes.",
    links: [
      { label: 'Gouvernance de l\'IA', href: '/gouvernance-ia' },
    ],
  },
]

/* ───────── Conduite du changement (4 leviers) ───────── */

const CHANGEMENT = [
  {
    icon: Users,
    title: 'Un réseau de référents internes',
    desc: "Nous identifions et formons des référents IA dans vos équipes : les collègues vers qui on se tourne au quotidien, qui font remonter les cas d'usage et entretiennent la dynamique après notre passage. C'est le levier d'ancrage le plus efficace que nous connaissions.",
  },
  {
    icon: HeartHandshake,
    title: 'Une communication qui donne du sens',
    desc: "Les résistances à l'IA sont rationnelles : peur du remplacement, crainte de la surveillance, lassitude des outils imposés. On ne les traite pas par l'enthousiasme forcé : on explique ce que l'outil change pour chacun, ce qu'il ne fera pas, et qui décide de quoi.",
  },
  {
    icon: GraduationCap,
    title: 'Une formation par métier, sur vos cas réels',
    desc: "Une démonstration générique ne change pas les pratiques. Chaque équipe est formée sur ses propres situations de travail : les documents, les processus et les outils qu'elle manipule vraiment. C'est ce qui transforme la curiosité en réflexe quotidien.",
  },
  {
    icon: BarChart3,
    title: "Une adoption qui se mesure",
    desc: "Taux d'usage par équipe, cas d'usage actifs, temps gagné déclaré, questions remontées aux référents : l'adoption se suit avec des indicateurs simples, revus à intervalle régulier. Ce qui ne se mesure pas s'éteint en trois mois.",
  },
]

/* ───────── Pourquoi les projets IA échouent (5 causes, citable) ───────── */

const ECHECS = [
  {
    num: '1',
    title: "L'outil avant l'usage",
    cause: "Des licences achetées à l'échelle avant de savoir qui s'en servira, pour quoi faire. Six mois plus tard, les tableaux de bord d'usage font mal, et l'IA passe pour un échec alors que c'est le déploiement qui en est un.",
    parade: "L'accompagnement inverse l'ordre : d'abord le cadrage des usages qui créent de la valeur, ensuite l'outillage dimensionné sur ces usages.",
  },
  {
    num: '2',
    title: 'Le POC éternel',
    cause: "Un prototype convaincant, une démonstration applaudie, puis rien : pas de responsable de l'industrialisation, pas de budget de passage à l'échelle, pas de plan d'intégration au quotidien des équipes.",
    parade: "Chaque phase de l'accompagnement se termine par une décision explicite : on industrialise, on ajuste ou on arrête. Un POC sans suite décidée est un POC raté, même réussi techniquement.",
  },
  {
    num: '3',
    title: 'Personne ne porte le sujet',
    cause: "Sans sponsor de direction ni relais de terrain, le sujet IA appartient à tout le monde, donc à personne. Les initiatives individuelles s'essoufflent, les questions restent sans réponse, les pratiques divergent.",
    parade: "Le dispositif d'accompagnement installe les deux étages : un sponsor qui arbitre, des référents formés qui font vivre le sujet au quotidien.",
  },
  {
    num: '4',
    title: 'La formation générique qui ne change rien',
    cause: "Une journée de sensibilisation sur des exemples hors sol, un quiz, un certificat. Deux semaines après, aucun usage n'a bougé : les équipes n'ont pas vu leur métier dans ce qu'on leur a montré.",
    parade: "La formation de l'accompagnement part des cas réels de chaque équipe, ses documents et ses processus, et se mesure sur les usages installés, jamais sur la satisfaction en sortie de salle.",
  },
  {
    num: '5',
    title: "L'adoption jamais mesurée",
    cause: "Sans indicateurs, l'échec est invisible jusqu'au renouvellement des licences. On découvre alors que 15 personnes sur 200 utilisent l'outil, sans savoir ni pourquoi ni depuis quand.",
    parade: "La mesure d'adoption fait partie du dispositif dès le premier jour : taux d'usage, cas actifs, temps gagné déclaré, questions remontées. Ce qui dérive se voit, donc se corrige.",
  },
]

/* ───────── Un accompagnement type, trimestre par trimestre ───────── */

const TRIMESTRES = [
  {
    periode: 'Premier trimestre',
    title: 'Cadrer et prouver',
    desc: "Cadrage des usages (diagnostic ou audit selon la profondeur), choix des outils, conférence de lancement pour embarquer largement, et un ou deux cas d'usage déployés en pilote sur une équipe volontaire. Objectif : une première preuve de valeur visible en interne, sur laquelle tout le reste s'appuie.",
  },
  {
    periode: 'Deuxième trimestre',
    title: 'Déployer et former',
    desc: "Extension aux équipes prioritaires par vagues : formation sur les cas réels de chacune, installation des référents internes, cadre d'usage posé (charte, données, conformité). Les premiers indicateurs d'adoption tournent et orientent les ajustements.",
  },
  {
    periode: 'Troisième trimestre',
    title: 'Ancrer et transmettre',
    desc: "Montée en autonomie : les référents prennent le relais du quotidien, les cas suivants s'industrialisent, la gouvernance se stabilise. Notre présence s'espace volontairement ; elle se prolonge ensuite par des points d'ancrage à la demande, pas par une dépendance.",
  },
]

/* ───────── Comparatif conseil / accompagnement / acculturation ───────── */

const COMPARATIF = [
  {
    critere: 'Objectif',
    conseil: "Éclairer une décision : stratégie, cas d'usage, feuille de route",
    accompagnement: "Faire aboutir la transformation, du cadrage à l'adoption",
    acculturation: "Faire comprendre et utiliser l'IA par toutes les équipes",
  },
  {
    critere: 'Durée',
    conseil: "Missions cadrées : de quelques jours à quelques semaines",
    accompagnement: "Dans la durée : plusieurs mois, à un rythme adapté",
    acculturation: "Un programme : conférences, ateliers et parcours répartis",
  },
  {
    critere: 'Livrable',
    conseil: "Rapport, feuille de route, arbitrages documentés",
    accompagnement: "Des outils en production et des équipes qui s'en servent",
    acculturation: "Des équipes formées, des référents, un langage commun",
  },
  {
    critere: 'Financement',
    conseil: "Non finançable par votre OPCO ; dispositifs publics selon profil",
    accompagnement: "Volet formation finançable OPCO ; volet conseil non",
    acculturation: "Formation certifiée Qualiopi, finançable par votre OPCO",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "En quoi consiste un accompagnement IA ?",
    a: "C'est une présence dans la durée, qui couvre les quatre maillons d'une adoption réussie : cadrer les usages qui créent de la valeur chez vous, choisir et déployer les bons outils, conduire le changement auprès des équipes (communication, référents, formation), puis mesurer l'adoption et ajuster. La différence avec une mission de conseil ponctuelle tient dans ce dernier kilomètre : l'accompagnement ne s'arrête pas à la recommandation, il reste jusqu'à ce que les usages tiennent dans le quotidien des équipes.",
  },
  {
    q: "Quelle est la différence entre conseil IA et accompagnement IA ?",
    a: "Le conseil éclaire une décision : audit, stratégie, feuille de route, arbitrages. Il se termine par un livrable. L'accompagnement prend la suite et porte la transformation dans la durée : déploiement des outils, conduite du changement, formation des équipes, mesure de l'adoption. Beaucoup de nos accompagnements commencent par une mission de conseil courte (un diagnostic d'une journée ou un audit) qui fixe le cap ; l'accompagnement transforme ensuite ce cap en usages réels.",
  },
  {
    q: "Comment se conduit le changement autour de l'IA ?",
    a: "Avec quatre leviers, dans cet ordre d'importance : un réseau de référents internes formés, qui portent le sujet au quotidien ; une communication honnête qui explique ce que l'outil change pour chacun et ce qu'il ne fera pas ; une formation par métier sur les cas réels des équipes, jamais sur des démonstrations génériques ; et des indicateurs d'adoption suivis dans le temps. Les résistances à l'IA sont rationnelles : elles se traitent par la clarté et la preuve d'utilité, pas par l'injonction.",
  },
  {
    q: "Comment mesure-t-on l'adoption de l'IA par les équipes ?",
    a: "Avec des indicateurs simples, relevés à intervalle régulier : taux d'utilisation par équipe, nombre de cas d'usage actifs, temps gagné déclaré par les utilisateurs, volume et nature des questions remontées aux référents. On y ajoute des retours qualitatifs en atelier : ce qui marche, ce qui bloque, ce qui manque. Un usage qui n'est pas mesuré s'éteint en quelques mois ; un usage mesuré s'améliore, parce que les blocages remontent et se traitent.",
  },
  {
    q: "Combien de temps dure un accompagnement IA ?",
    a: "Plusieurs mois dans la plupart des cas, à un rythme adapté à votre organisation : des jalons denses au démarrage (cadrage, premiers déploiements, premières formations), puis un rythme de croisière fait de points réguliers, d'ateliers et de mesures d'adoption. La bonne durée est celle qui rend l'accompagnement inutile : notre objectif contractuel est votre autonomie, avec des référents internes qui prennent le relais.",
  },
  {
    q: "Combien coûte un accompagnement IA ?",
    a: "Sur devis, selon le périmètre (nombre d'équipes, de sites, de cas d'usage) et la durée. Le premier échange de cadrage est gratuit et sans engagement. Deux repères pour budgéter : le volet formation de l'accompagnement est finançable par votre OPCO, Masteria étant certifiée Qualiopi ; et selon votre profil et votre région, des dispositifs publics de soutien au conseil peuvent alléger le reste. Nous faisons le point sur les financements mobilisables dès le cadrage.",
  },
  {
    q: "Peut-on faire financer un accompagnement IA ?",
    a: "En partie. Le volet conseil et déploiement n'est pas finançable par votre OPCO, qui couvre la formation : tout le volet formation de l'accompagnement (parcours par métier, acculturation des équipes) l'est en revanche, Masteria étant certifiée Qualiopi. Côté dispositifs publics, des aides au conseil et à la transformation numérique existent selon votre taille, votre secteur et votre région. Le tour des financements applicables à votre situation se fait au cadrage, c'est compris dedans.",
  },
  {
    q: "Travaillez-vous avec un outil IA en particulier ?",
    a: "Non, et c'est un point de méthode : nous accompagnons les entreprises sur l'IA générative dans son ensemble, indépendants des éditeurs et multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). Le choix se fait sur vos critères : métiers concernés, contraintes de données et de sécurité, écosystème logiciel existant, budget. Quand un outil est déjà déployé chez vous, l'accompagnement part de l'existant plutôt que de tout remplacer. Notre recommandation est argumentée et jamais commissionnée.",
  },
  {
    q: "Nous avons déjà déployé un outil d'IA et il n'a pas pris : que faire ?",
    a: "C'est la situation de départ la plus fréquente de nos accompagnements, et elle se rattrape. Le schéma classique : l'outil a été déployé avant les usages, la formation a été générique, personne ne porte le sujet et rien ne se mesure. On reprend dans l'ordre : un cadrage court pour identifier les usages à valeur pour vos équipes, une relance ciblée sur une ou deux équipes volontaires avec une formation sur leurs cas réels, des référents pour tenir la dynamique, et des indicateurs pour objectiver la reprise. Relancer un outil déjà payé coûte bien moins cher que l'abandonner et recommencer dans deux ans.",
  },
  {
    q: "Faut-il associer le CSE et les équipes à la démarche ?",
    a: "Oui, et tôt. Sur le plan légal d'abord : le code du travail prévoit l'information et la consultation du CSE sur l'introduction de nouvelles technologies, et l'IA en relève pleinement ; un déploiement qui l'ignore s'expose à repartir de zéro. Sur le plan pratique ensuite : les craintes des équipes (remplacement, surveillance, charge) sont rationnelles et s'adressent de front, pas par une communication descendante. Nous aidons à préparer ces échanges : ce que l'outil fera, ce qu'il ne fera pas, ce qui est mesuré et ce qui ne l'est pas. Un déploiement co-construit avec les représentants du personnel avance plus vite qu'un déploiement subi.",
  },
  {
    q: "Comment gérez-vous un accompagnement multi-sites ?",
    a: "Par vagues, avec un site pilote. Le pilote essuie les plâtres et fournit la preuve interne : des collègues, pas des consultants, racontent ce qui a changé pour eux. Les vagues suivantes réutilisent ce qui est validé (cas d'usage, supports, cadre) en l'adaptant aux spécificités locales, et chaque site a son référent. Le distanciel couvre bien le suivi et une partie des formations ; les lancements de site gagnent à se faire sur place. Ce fonctionnement par vagues lisse aussi le budget et la charge des équipes centrales.",
  },
  {
    q: "L'accompagnement convient-il à une PME ?",
    a: "Oui, il se dimensionne. Une PME n'a pas besoin d'un dispositif de grand groupe : un cadrage court, un ou deux cas d'usage bien choisis, une formation des équipes concernées et un référent interne suffisent souvent à installer des usages durables. Une ETI ou un grand groupe demandera un dispositif plus structuré (plusieurs métiers, gouvernance, charte, réseau de référents). Dans les deux cas, le principe reste le même : partir du réel, prouver la valeur, ancrer.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Accompagnement IA — Masteria',
  alternateName: "Accompagnement à l'adoption de l'intelligence artificielle",
  description: "Accompagnement IA en entreprise dans la durée : cadrage des usages, choix et déploiement des outils, conduite du changement (référents internes, communication, formation par métier certifiée Qualiopi), mesure de l'adoption. De la décision aux usages qui tiennent.",
  url: 'https://www.master-ia.fr/accompagnement-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/accompagnement-ia#webpage' },
  serviceType: "Accompagnement à l'adoption de l'IA",
  category: 'Conseil et accompagnement en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'PME, ETI et grands groupes · directions générales et métier',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accompagnement IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cadrage et priorisation des usages', description: "Diagnostic ou audit selon la profondeur : processus, données, contraintes, cas d'usage priorisés par impact et par effort." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Choix et déploiement des outils', description: "Sélection indépendante des éditeurs, configuration, intégrations et développements sur mesure quand le besoin le justifie." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conduite du changement et formation', description: "Réseau de référents internes, communication, formation par métier certifiée Qualiopi et finançable OPCO, cadre d'usage RGPD et AI Act." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Mesure de l'adoption", description: "Indicateurs d'usage par équipe, retours d'expérience, ajustements et extension aux cas suivants." } },
    ],
  },
}

/* Les 4 phases en ItemList (séquence citable — GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les 4 phases de l'accompagnement IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PHASES.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les termes de l'accompagnement (distincts de ceux portés
   par /acculturation-ia — un seul balisage par entité sur le site). */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/accompagnement-ia#termes',
  name: "Accompagnement IA : les termes de la démarche",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Accompagnement IA',
      description: "Prestation continue qui couvre les quatre maillons d'une adoption de l'IA en entreprise : cadrage des usages, choix et déploiement des outils, conduite du changement (communication, référents, formation) et mesure de l'adoption dans la durée.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Conduite du changement IA',
      description: "Ensemble des actions qui font passer une organisation de l'outil déployé à l'outil utilisé : communication qui donne du sens, réseau de référents internes, formation par métier sur les cas réels et traitement des résistances.",
    },
    {
      '@type': 'DefinedTerm',
      name: "Adoption de l'IA",
      description: "Degré d'usage réel des outils d'IA par les équipes, mesuré par des indicateurs simples : taux d'utilisation par équipe, cas d'usage actifs, temps gagné déclaré, questions remontées aux référents.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO).
   `about` en entités liées à Wikipédia (sameAs) : désambiguïsation pour les
   moteurs génératifs et le Knowledge Graph. URLs vérifiées le 2026-08-10. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/accompagnement-ia#article',
  headline: "Accompagnement IA : du premier cadrage à l'adoption par vos équipes",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/accompagnement-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Accompagnement IA', description: "Prestation continue d'adoption de l'intelligence artificielle en entreprise" },
    { '@type': 'Thing', name: 'Conduite du changement', sameAs: 'https://fr.wikipedia.org/wiki/Conduite_du_changement' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
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

/* Sources d'autorité de la page : émises en WebPage.citation (JSON-LD) et
   affichées dans le bloc « Sources et références officielles ». */
const PAGE_CITATIONS = [
          { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
        ]

export default function AccompagnementIAPage() {
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
    { name: 'Accompagnement IA', slug: SLUG },
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
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Accompagnement IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Dans la durée · Accompagnement IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Accompagnement IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>du premier cadrage à l'adoption par vos équipes</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'accompagnement IA de Masteria couvre les quatre maillons d'une adoption réussie : <strong style={{ color: '#fff', fontWeight: 700 }}>cadrer les usages, choisir et déployer les outils, conduire le changement, mesurer l'adoption</strong>. Une présence dans la durée, avec un volet formation certifié Qualiopi et finançable par votre OPCO, jusqu'à ce que les usages tiennent sans nous.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            La plupart des projets IA ne meurent pas sur la technique : ils meurent au dernier kilomètre, quand les outils sont là et que personne ne s'en sert. C'est précisément ce maillon que notre accompagnement sécurise, de l'IA générative aux agents, en combinant conseil, déploiement et formation sous un même toit. Cabinet et agence d'accompagnement à la fois, indépendants des éditeurs.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre accompagnement
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#phases" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les 4 phases
            </a>
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

      {/* ── LES 4 PHASES (timeline avec renvois) ── */}
      <section id="phases" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Les 4 phases</Kicker>
          <h2 style={h2Style}>
            Que couvre un accompagnement IA complet ?
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Un accompagnement IA complet couvre quatre phases : le cadrage des usages (diagnostic ou audit), le choix et le déploiement des outils, la conduite du changement avec la formation des équipes, puis la mesure de l'adoption. Chaque phase produit un résultat vérifiable avant de passer à la suivante.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PHASES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === PHASES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 10px', maxWidth: 740 }}>{step.desc}</p>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    {step.links.map(l => (
                      <Link key={l.href} to={l.href} style={{ ...aStyle, fontSize: 13.5, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        {l.label}
                        <ArrowRight size={13} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDUITE DU CHANGEMENT (ancre sombre — pivot) ── */}
      <section id="changement" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conduite du changement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            L'accompagnement au changement, le maillon qui décide de tout
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>L'accompagnement au changement autour de l'IA repose sur quatre leviers : un réseau de référents internes, une communication qui donne du sens, une formation par métier sur les cas réels, et une mesure d'adoption suivie dans le temps. Les résistances sont rationnelles : elles se traitent par la clarté et la preuve d'utilité, pas par l'injonction.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {CHANGEMENT.map(card => {
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
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            La montée en compétence collective a sa démarche propre, l'<Link to="/acculturation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>acculturation IA</Link> : conférences, ateliers et parcours par métier, certifiés Qualiopi et finançables par votre OPCO.
          </p>
        </div>
      </section>

      {/* ── POURQUOI LES PROJETS IA ÉCHOUENT (citable + E-E-A-T terrain) ── */}
      <section id="echecs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={h2Style}>
            Pourquoi les projets IA échouent, et ce qui l'évite
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Cinq causes reviennent dans la quasi-totalité des projets IA qui échouent : l'outil acheté avant l'usage, le POC jamais industrialisé, l'absence de porteur interne, la formation générique qui ne change rien, et l'adoption jamais mesurée. Aucune n'est technique. C'est précisément ce que l'accompagnement traite.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '0 0 28px' }}>
            Nous observons ces cinq schémas depuis 2022, en formant et en accompagnant plus de 1 500 professionnels, du COMEX aux équipes terrain, dans l'industrie, l'énergie, l'immobilier, le juridique ou le secteur public. Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> en montrent l'envers : ce qui se passe quand ces cinq points sont traités.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ECHECS.map(item => (
              <div key={item.num} style={{ ...cardStyle, padding: '22px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 99, background: cLight, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.num}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>{item.cause}</p>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: c }}>La parade :</strong> {item.parade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UN ACCOMPAGNEMENT TYPE (posture capacité) ── */}
      <section id="deroule-type" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>À quoi ça ressemble</Kicker>
          <h2 style={h2Style}>
            Un accompagnement type, trimestre par trimestre
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Un accompagnement représentatif s'étale sur trois trimestres : cadrer et prouver la valeur sur un pilote, déployer et former par vagues avec les référents, puis ancrer et transmettre jusqu'à l'autonomie. Le rythme s'ajuste à chaque organisation ; la logique, elle, ne change pas : chaque trimestre livre un résultat visible.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 12 }}>
            {TRIMESTRES.map(t => (
              <div key={t.periode} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 8 }}>{t.periode}</div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Ce déroulé est représentatif, pas contractuel : une PME sur un périmètre net va plus vite, un groupe multi-sites étale davantage. Le rythme exact se pose au cadrage, avec les jalons de décision.
          </p>
        </div>
      </section>

      {/* ── CONSEIL VS ACCOMPAGNEMENT VS ACCULTURATION (tableau citable) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Bien choisir</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Conseil, accompagnement ou acculturation : de quoi avez-vous besoin ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le conseil éclaire une décision et se termine par un livrable. L'accompagnement porte la transformation dans la durée, jusqu'aux usages installés. L'acculturation fait monter toutes les équipes en compétence. Les trois se combinent, et le volet formation est le seul finançable par votre OPCO.</strong>
          </p>

          <div style={{ border: '1px solid #E5E7EB', borderRadius: 16, overflowX: 'auto', background: '#fff' }}>
            <table aria-label="Comparatif entre conseil IA, accompagnement IA et acculturation IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '19%' }}>Critère</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '27%' }}>Conseil IA</th>
                  <th scope="col" style={{ background: cLight, textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: c, borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '27%' }}>Accompagnement IA</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '27%' }}>Acculturation IA</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#0A0A0A', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.conseil}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#0A0A0A', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: '#EFF6FF' }}>{row.accompagnement}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.acculturation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, marginTop: 20, maxWidth: 880 }}>
            Les trois entrées mènent au même endroit : des usages qui tiennent. Commencez par le <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil</Link> si la décision n'est pas prise, par l'<Link to="/acculturation-ia" style={aStyle}>acculturation</Link> si vos équipes partent de zéro, par l'accompagnement si vous voulez les deux, tenus dans la durée.
          </p>
        </div>
      </section>

      {/* ── AIDES & FINANCEMENT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Aides et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Ce qui se finance dans un accompagnement IA
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le volet formation est finançable par votre OPCO : Masteria est certifiée Qualiopi, et la conduite du changement passe en grande partie par la formation des équipes. Le volet conseil et déploiement n'est pas finançable par votre OPCO ; selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil et à la transformation numérique peuvent s'appliquer. Nous faisons le point sur les financements mobilisables dès le cadrage, c'est compris dedans.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Formation des équipes : OPCO (Qualiopi)',
                  'Dispositifs publics selon votre profil et votre secteur',
                  'Aides régionales selon votre territoire',
                  'Tour des dispositifs fait au cadrage, sans surcoût',
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
                Accompagnement IA : les questions fréquentes
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
            L'accompagnement relie les briques du dispositif : cadrage, outils, changement, formation, gouvernance.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Formation', desc: "La montée en compétence collective : conférences, ateliers et parcours métier, finançables OPCO." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour les dirigeants et profils clés : le tête-à-tête sur leurs cas réels, au rythme de leur agenda." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Le cadrage en une journée qui ouvre la plupart de nos accompagnements." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'Conseil', desc: "L'état des lieux complet quand la direction veut une vision exhaustive avant d'engager." },
              { label: 'Méthode & modèles d\'engagement', href: '/methode-projet-ia', tag: 'Méthode', desc: "Forfait, régie ou accompagnement : comment nous contractualisons la présence dans la durée." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Gouvernance', desc: "Le cadre d'usage qui sécurise l'adoption : ce que les équipes peuvent faire, et comment." },
              { label: 'Prix d\'un projet IA', href: '/prix-projet-ia', tag: 'Budget', desc: "Les ordres de grandeur pour anticiper le budget des outils et développements." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Accompagnement IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de votre trajectoire IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous où vous en êtes : rien n'est lancé, des outils sont là mais peu utilisés, ou un projet patine. Nous revenons vers vous sous 24 heures avec une proposition de cadrage adaptée à votre situation, financements mobilisables compris. L'objectif final ne change pas : des équipes autonomes.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un accompagnement IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Multi-outils, indépendants des éditeurs · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
