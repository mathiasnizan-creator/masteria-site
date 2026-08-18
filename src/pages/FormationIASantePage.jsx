import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, HeartPulse, ClipboardCheck as Clip, FileText, Users2, ScrollText, ShieldCheck as Shield, Stethoscope,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
  ShieldCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA santé » (slug /formation-ia-sante).
 * CRÉATION 2026-08-10. Cible « formation ia santé » (70/mois, KD 19, CPC
 * 1,81 $, intention C — Semrush 2026-08-10) et ses variantes « formation ia
 * établissement de santé », « formation ia hôpital », « formation ia cabinet
 * médical », « ia secteur médico-social ».
 *
 * ANTI-CANNIBALISATION : /ia-sante-pharma = CONSEIL et dev pour le secteur ;
 * CETTE page = la FORMATION des équipes de santé et médico-sociales, sur les
 * usages NON cliniques (administratif, qualité, coordination, communication,
 * documentation) — l'IA n'est pas un dispositif médical ici et la page ne
 * vend jamais de diagnostic assisté.
 *
 * CADRE STRICT (le plus sensible du site) : données de santé = catégorie
 * particulière RGPD ; secret médical ; hébergement HDS pour toute donnée de
 * santé à caractère personnel ; aucune donnée patient identifiante dans un
 * outil non certifié ; anonymisation ; l'IA prépare des écrits, elle ne
 * décide de rien de clinique. FINANCEMENT (mémoire secteur public
 * hospitalier) : hôpital public = ANFH + plan de formation, JAMAIS OPCO ;
 * privé et libéral = OPCO (OPCO Santé) ou FAF selon statut ; toujours
 * « selon votre statut, vérifié au cadrage ». Programme 1 jour (2 possibles).
 */

const SLUG = 'formation-ia-sante'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA santé : usages administratifs, qualité, coordination | Masteria"
const META_DESC = "Formation IA santé pour établissements et cabinets : comptes rendus non cliniques, qualité et certification, coordination, communication, documentation, dans le cadre du secret médical et de l'hébergement HDS. Qualiopi."
const KEYWORDS = "formation ia santé, formation ia établissement de santé, formation ia hôpital, formation intelligence artificielle santé, formation ia médico-social, formation ia cabinet médical, ia secrétariat médical"

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
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Sparkles, label: 'ChatGPT · Copilot · Claude · Gemini · Mistral' },
  { icon: Target, label: "Usages non cliniques · Cadre HDS et secret médical" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "1 jour (7 h) en intra ; format 2 jours possible avec ateliers approfondis par service" },
  { label: 'Pour qui', value: "Directions et cadres d'établissements de santé et médico-sociaux, qualité et gestion des risques, secrétariats médicaux, coordination, communication, cabinets et maisons de santé, associations et fédérations" },
  { label: 'Périmètre', value: "Les usages non cliniques : écrits administratifs, qualité et certification, coordination, communication, documentation, veille. Pas de diagnostic ni de décision clinique assistée" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, avec le cadre HDS et anonymisation pour toute donnée de santé" },
  { label: 'Livrables', value: "Bibliothèque de prompts par service, gabarits outillés (procédure, courrier, note, support), cadre d'usage données de santé et secret médical" },
  { label: 'Financement', value: "Certifiée Qualiopi : ANFH et plan de formation pour l'hôpital public, OPCO Santé ou FAF pour le privé et le libéral, selon votre statut vérifié au cadrage" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: FileText,
    title: 'Écrits administratifs et secrétariats',
    desc: "Courriers aux patients et aux familles (non médicaux), convocations, réponses aux demandes, notes internes, comptes rendus de réunion : la production écrite qui charge les secrétariats et les cadres, traitée plus vite et plus clairement. Toujours sans donnée patient identifiante dans un outil non certifié HDS : la formation l'apprend d'abord.",
  },
  {
    icon: Clip,
    title: 'Qualité, gestion des risques, certification',
    desc: "Procédures et protocoles rédigés ou révisés à partir de notes, analyses d'événements indésirables structurées (à partir de faits anonymisés), préparation des audits et de la certification, plans d'action, comptes rendus de CREX et de RMM anonymisés. La démarche qualité gagne en rigueur documentaire et en réactivité.",
  },
  {
    icon: Users2,
    title: 'Coordination et parcours',
    desc: "Synthèses de réunions de coordination, préparation de staffs non cliniques, communication entre services, documents de parcours et d'orientation à destination des usagers, réponses aux partenaires (ville, médico-social, autorités). L'IA rédige et structure ; les décisions de prise en charge restent aux soignants.",
  },
  {
    icon: ScrollText,
    title: 'Documentation, veille et réglementaire',
    desc: "Synthèse d'une recommandation, d'un texte réglementaire ou d'une instruction, note d'impact pour la direction, préparation d'une réponse à une autorité, veille sur les évolutions du secteur. À valider contre les sources officielles (HAS, ministère, ARS) avant diffusion : l'IA aide à comprendre et formuler, elle ne fait pas autorité.",
  },
  {
    icon: HeartPulse,
    title: 'Communication et information des usagers',
    desc: "Livrets d'accueil, affiches, contenus web, réponses aux questions fréquentes, supports en langage clair et accessibles (facile à lire et à comprendre), déclinaisons multilingues à faire valider. L'information des patients et des familles gagne en clarté et en homogénéité.",
  },
  {
    icon: Shield,
    title: 'Le cadre : données de santé, secret, HDS',
    desc: "Le sujet le plus sensible du secteur, traité en premier et en atelier : ce qu'est une donnée de santé à caractère personnel, le secret médical, l'obligation d'hébergement HDS, l'anonymisation avant tout traitement, les offres entreprise et les déploiements dédiés, ce qu'on ne confie jamais. Vous repartez avec un cadre écrit, défendable devant votre DPO et votre direction.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Des secrétariats et des cadres soulagés de la charge d\'écrit',
    desc: "Courriers, convocations, notes, comptes rendus : la production écrite non clinique se fait en un temps réduit et avec plus de clarté. Le temps rendu va à l'accueil, à la coordination et aux équipes.",
  },
  {
    title: 'Une démarche qualité plus réactive et plus rigoureuse',
    desc: "Procédures à jour, analyses d'événements structurées, préparation d'audit et de certification outillée : la qualité redevient un levier plutôt qu'une course documentaire avant l'échéance.",
  },
  {
    title: 'Une information des usagers claire et homogène',
    desc: "Livrets, affiches, contenus, langage clair, accessibilité : l'établissement parle d'une seule voix, compréhensible par tous, sans mobiliser des semaines de rédaction.",
  },
  {
    title: 'Une veille et une réglementation enfin tenables',
    desc: "Recommandations, instructions, textes : ce que personne n'a le temps de lire est digéré et restitué pour votre établissement, à valider contre les sources officielles.",
  },
  {
    title: 'Un cadre qui protège l\'établissement et les patients',
    desc: "Données de santé, secret médical, HDS, anonymisation : la formation pose le cadre le plus strict du site, écrit et applicable, pour que les usages soient défendables devant le DPO, la direction et les autorités.",
  },
  {
    title: 'Un financement adapté à votre statut',
    desc: "Hôpital public, établissement privé, cabinet libéral, structure médico-sociale : les dispositifs diffèrent (ANFH, OPCO Santé, FAF), et nous montons le dossier dans le bon cadre, vérifié avant le devis.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Le cadre d'abord, puis les usages non cliniques sur vos documents",
    matin: [
      "Comprendre ce que les modèles font et ne font pas en santé : capacités, limites, et ce que la formation ne couvre pas (aucun usage clinique ou diagnostique)",
      "Le cadre en atelier : données de santé, secret médical, hébergement HDS, anonymisation, offres entreprise et déploiements dédiés, ce qu'on ne confie jamais",
      "Panorama des outils : ChatGPT, Copilot, Claude, Gemini, Mistral ; ce que votre DSI a validé, ce qui reste interdit",
      "La méthode de la demande efficace, appliquée aux écrits du secteur : contexte, format, langage clair, exemples, itération",
    ],
    apresmidi: [
      "Atelier écrits administratifs : courrier non médical, convocation, note interne, compte rendu de réunion, à partir de vos gabarits et de cas anonymisés",
      "Atelier qualité : réviser une procédure à partir de notes, structurer l'analyse d'un événement indésirable anonymisé, préparer un plan d'action",
      "Atelier information des usagers : livret, affiche ou page web en langage clair et accessible, à faire valider",
      "Atelier veille : synthétiser une recommandation ou une instruction et préparer la note d'impact ; plan d'action personnel et évaluation des acquis",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Landmark, title: 'Directions et cadres d\'établissements', desc: "Direction, cadres de santé et administratifs, cadres de pôle : fixer le cadre d'usage, arbitrer les outils, outiller les services. La formation vous donne la lecture d'ensemble et le cadre écrit, dans le respect du secret médical et de l'HDS." },
  { icon: Clip, title: 'Qualité, gestion des risques, certification', desc: "Procédures, événements indésirables, audits, certification, plans d'action : les usages qui rendent la démarche qualité plus réactive et plus rigoureuse, avec l'anonymisation en préalable." },
  { icon: FileText, title: 'Secrétariats médicaux et services administratifs', desc: "Courriers non médicaux, convocations, réponses, notes, comptes rendus : la charge d'écrit qui pèse sur les secrétariats, traitée plus vite, sans jamais mettre de donnée patient identifiante dans un outil non certifié." },
  { icon: Stethoscope, title: 'Cabinets, maisons de santé, médico-social', desc: "Structures de ville et médico-sociales : information des usagers, coordination, documentation, réglementaire, sur des usages non cliniques et dans un cadre adapté à votre taille et à votre statut." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA santé ?",
    a: "À utiliser l'intelligence artificielle générative sur les usages non cliniques d'un établissement de santé, d'un cabinet ou d'une structure médico-sociale : écrits administratifs et secrétariats, démarche qualité et certification (procédures, analyses d'événements anonymisés, audits), coordination et parcours, information des usagers en langage clair, documentation et veille réglementaire. Et, en premier, le cadre : données de santé, secret médical, hébergement HDS, anonymisation, ce qu'on ne confie jamais. La formation ne couvre aucun usage clinique ou diagnostique.",
  },
  {
    q: "La formation aborde-t-elle l'IA pour le diagnostic ou la décision médicale ?",
    a: "Non, et c'est un choix assumé. Les usages cliniques de l'IA (aide au diagnostic, imagerie, aide à la prescription) relèvent de dispositifs médicaux encadrés, évalués et déployés dans un cadre réglementaire propre ; ils ne s'apprennent pas en une journée avec un outil généraliste, et nous ne les vendons pas. Cette formation couvre tout ce qui entoure le soin : l'écrit administratif, la qualité, la coordination, l'information des usagers, la documentation, la veille. C'est là que l'IA générative fait gagner du temps sans risque clinique.",
  },
  {
    q: "Peut-on utiliser ChatGPT ou Copilot avec des données de patients ?",
    a: "Pas avec des données identifiantes dans un outil non certifié HDS, et la formation en fait la règle numéro un. Les données de santé à caractère personnel sont une catégorie particulière au sens du RGPD, couvertes par le secret médical, et leur hébergement exige un prestataire certifié HDS. En pratique : anonymisation systématique avant tout traitement (aucun nom, date de naissance, numéro, élément permettant d'identifier), usage d'offres entreprise ou de déploiements dédiés validés par votre DSI et votre DPO pour ce qui reste, et jamais de version gratuite. Sur des documents anonymisés ou non nominatifs (procédures, livrets, notes, textes), les usages sont larges et sûrs.",
  },
  {
    q: "L'IA peut-elle rédiger des comptes rendus médicaux ?",
    a: "Ce n'est pas l'objet de cette formation. Les comptes rendus cliniques relèvent d'outils dédiés (dictée et structuration médicales) déployés dans un cadre HDS et validés par l'établissement ; leur usage se forme avec l'éditeur et la DSI. Ce que la formation couvre : les comptes rendus non cliniques (réunions, instances, coordination, CREX et RMM anonymisés), les courriers non médicaux, les notes et procédures. La frontière est posée dès le cadrage, et rappelée dans le cadre d'usage livré.",
  },
  {
    q: "Comment la formation est-elle financée pour un hôpital public ?",
    a: "Par le plan de formation de l'établissement et l'ANFH, l'organisme paritaire de la fonction publique hospitalière ; jamais par un OPCO, qui ne concerne pas l'hôpital public. Nous fournissons la convention, le programme et les pièces dans les formes attendues par l'ANFH et par votre direction des ressources humaines ou de la formation. Pour un établissement privé ou une structure médico-sociale privée, c'est votre OPCO (OPCO Santé pour la plupart des conventions du secteur) ; pour un professionnel libéral, un fonds d'assurance formation selon votre statut. Le bon cadre se vérifie au cadrage, avant le devis.",
  },
  {
    q: "La formation convient-elle à un cabinet médical ou une maison de santé ?",
    a: "Oui, en version d'une journée adaptée à la taille : information des patients en langage clair, courriers non médicaux, organisation, veille, coordination avec la ville et le médico-social, avec le cadre données de santé et secret médical posé pour une petite structure. Le financement passe par votre OPCO ou votre fonds d'assurance formation selon le statut des participants (salariés, libéraux), ce que nous vérifions avant le devis.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre établissement a validés. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral. En santé, la question n'est pas seulement l'outil mais son cadre de déploiement : offre entreprise ou déploiement dédié validé par la DSI et le DPO, hébergement HDS pour toute donnée de santé, souveraineté quand elle est exigée. La formation part de ce que vous avez le droit d'utiliser, et le cadre d'usage livré le formalise.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est d'une journée (7 heures) en intra, en présentiel dans l'établissement ou à distance, pour un groupe de 4 à 10 personnes des fonctions concernées. Un format de deux jours ajoute des ateliers approfondis par service (qualité, secrétariats, communication, direction). Pour un groupe hospitalier ou une fédération, la formation se déploie par vagues d'établissements ou de services, avec des livrables communs.",
  },
  {
    q: "Combien coûte la formation IA santé ?",
    a: "Le tarif intra est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : la journée représente 1 980 € HT, le format deux jours 3 960 € HT. Certifiée Qualiopi, la formation relève de l'ANFH et du plan de formation pour l'hôpital public, de votre OPCO pour le privé, d'un fonds d'assurance formation pour le libéral. Nous établissons le devis dans les formes attendues par votre financeur, sous 24 heures. La formation n'est pas éligible au CPF.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA santé — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée aux usages non cliniques des établissements de santé, cabinets et structures médico-sociales : écrits administratifs et secrétariats, qualité, gestion des risques et certification, coordination et parcours, information des usagers en langage clair, documentation et veille réglementaire, dans le cadre des données de santé, du secret médical et de l'hébergement HDS. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 1 jour en intra (2 jours possibles), présentiel ou distanciel. Certifiée Qualiopi.",
  level: 'Tous niveaux',
  teaches: [
    "Appliquer le cadre données de santé, secret médical et HDS aux usages de l'IA générative",
    "Produire les écrits administratifs non cliniques plus vite et plus clairement",
    "Outiller la démarche qualité : procédures, analyses d'événements anonymisés, préparation d'audit",
    "Rédiger l'information des usagers en langage clair et accessible",
    "Synthétiser recommandations et textes réglementaires et les valider contre les sources officielles",
  ],
  about: 'Intelligence artificielle générative appliquée aux usages non cliniques du secteur de la santé',
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique. Exercice dans un établissement, un cabinet ou une structure de santé ou médico-sociale.',
  audience: 'Directions et cadres d\'établissements, qualité et gestion des risques, secrétariats, coordination, communication, cabinets et médico-social',
  locationName: 'Masteria — intra-établissement, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation IA santé Masteria (1 jour)",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((j, ji) => [
    { '@type': 'ListItem', position: ji * 2 + 1, name: `${j.jour} · Matin — ${j.titre}`, description: j.matin.join(' ; ') },
    { '@type': 'ListItem', position: ji * 2 + 2, name: `${j.jour} · Après-midi — ${j.titre}`, description: j.apresmidi.join(' ; ') },
  ]),
}

/* Article : auteur + dates (E-E-A-T + fraîcheur GEO), entités liées. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-ia-sante#article',
  headline: "Formation IA santé : les usages non cliniques de l'IA générative, dans le cadre du secret médical et de l'HDS",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-sante#webpage' },
  about: [
    { '@type': 'Thing', name: 'Santé', sameAs: 'https://fr.wikipedia.org/wiki/Sant%C3%A9' },
    { '@type': 'Thing', name: 'Secret médical', sameAs: 'https://fr.wikipedia.org/wiki/Secret_m%C3%A9dical' },
    { '@type': 'Thing', name: 'Hébergeur de données de santé', sameAs: 'https://fr.wikipedia.org/wiki/H%C3%A9bergeur_de_donn%C3%A9es_de_sant%C3%A9' },
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

function DayBlock({ jour, titre, matin, apresmidi, isDesktop }) {
  const col = { flex: 1, minWidth: 0 }
  const list = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }
  const li = { fontSize: 14.5, color: '#374151', lineHeight: 1.65, display: 'flex', gap: 9, alignItems: 'flex-start' }
  return (
    <div style={{ ...cardStyle, padding: 'clamp(22px, 3vw, 30px)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{jour}</span>
        <h3 style={{ ...h3Style, fontSize: 18 }}>{titre}</h3>
      </div>
      <div style={{ display: 'flex', gap: isDesktop ? 28 : 20, flexDirection: isDesktop ? 'row' : 'column' }}>
        <div style={col}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>Matin</div>
          <ul style={list}>{matin.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
        <div style={col}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>Après-midi</div>
          <ul style={list}>{apresmidi.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}

export default function FormationIASantePage() {
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
    { name: "Formation IA santé", slug: SLUG },
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
        courseData={COURSE_DATA}
        datePublished="2026-08-10"
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
          { name: 'Qualiopi, marque de certification qualité des prestataires de formation — travail-emploi.gouv.fr', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
        ]}
        extraJsonLd={[programmeJsonLd, articleJsonLd]}
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA santé</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartPulse size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation secteur · Santé & médico-social
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA santé :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>les usages non cliniques de l'IA, dans le cadre du secret médical</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA santé de Masteria apprend aux équipes des établissements de santé, des cabinets et des structures médico-sociales à mettre l'intelligence artificielle générative au service des usages non cliniques : <strong style={{ color: '#fff', fontWeight: 700 }}>écrits administratifs, qualité et certification, coordination, information des usagers, documentation et veille</strong>, dans le cadre strict des données de santé, du secret médical et de l'hébergement HDS. Une journée, multi-outils, certifiée Qualiopi, financée selon votre statut (ANFH, OPCO, FAF).
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            La santé est le secteur où l'IA générative peut le plus soulager la charge d'écrit qui pèse sur les soignants, les secrétariats et les cadres, et celui où le cadre est le plus strict. La formation commence donc par le cadre (aucune donnée patient identifiante dans un outil non certifié, anonymisation, HDS) avant d'ouvrir les usages, tous non cliniques : elle n'enseigne ni diagnostic ni décision médicale assistés.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le programme
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

      {/* ── CE QUE L'IA CHANGE PAR MISSION (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Activité par activité</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que change l'IA dans le travail non clinique d'un établissement de santé ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche cinq activités non cliniques du secteur : les écrits administratifs et les secrétariats, la qualité et la certification, la coordination et les parcours, la documentation et la veille, l'information des usagers. Dans chacune, elle rédige, structure et clarifie ; le soin, le diagnostic et la décision restent aux professionnels de santé. Le sixième volet, traité en premier, est le cadre : données de santé, secret médical, HDS.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre ces volets avec un poids ajusté à votre structure au cadrage. Pour des solutions IA sur mesure dans la santé et la pharma (conseil, développement), voyez notre page <Link to="/ia-sante-pharma" style={aStyle}>IA pour la santé et la pharma</Link>.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {MISSIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES ATOUTS DE L'IA POUR LA FINANCE ── */}
      <section id="atouts" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que vous y gagnez</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les atouts de l'IA générative pour un établissement de santé
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains : des secrétariats et des cadres soulagés de la charge d'écrit, une démarche qualité plus réactive et plus rigoureuse, une information des usagers claire et homogène, une veille réglementaire enfin tenable, un cadre qui protège l'établissement et les patients, et un financement adapté à votre statut (ANFH, OPCO Santé, FAF).</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ATOUTS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Un mot d'honnêteté qui rend ces gains durables : l'IA peut inventer une recommandation ou confondre des textes. Donnez-lui le document source, demandez la référence de chaque point repris, validez contre la HAS, le ministère ou l'ARS avant diffusion, et n'y mettez jamais de donnée patient identifiante : le reste, elle le fait remarquablement bien.
          </p>
        </div>
      </section>

      {/* ── PROGRAMME 2 JOURS (ancre sombre — pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Programme de la formation IA santé sur 1 jour
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Matin : ce que les modèles font et ne font pas en santé (et ce que la formation ne couvre pas), le cadre en atelier (données de santé, secret médical, HDS, anonymisation, outils validés), le panorama des outils, la méthode de la demande efficace. Après-midi : quatre ateliers sur vos documents anonymisés, écrits administratifs, qualité, information des usagers, veille, puis votre plan d'action et l'évaluation des acquis.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            En format 2 jours, la seconde journée approfondit par service : qualité et gestion des risques, secrétariats, communication, direction et instances, avec les gabarits de chaque service outillés et la bibliothèque de prompts de l'établissement.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA santé ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Aux fonctions non cliniques et d'encadrement du secteur : directions et cadres d'établissements de santé et médico-sociaux, qualité et gestion des risques, secrétariats médicaux et services administratifs, coordination et communication, cabinets, maisons de santé et structures médico-sociales, associations et fédérations. Sans prérequis technique. Les usages cliniques ne sont pas couverts.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, marginTop: 12 }}>
            {PROFILS.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CADRE : RGPD, DROITS, MARQUE (E-E-A-T + réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Le cadre, traité de front</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Données de santé, secret médical, HDS : ce que la formation pose en premier
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le secteur manipule ce que le droit protège le plus : des données de santé à caractère personnel, catégorie particulière au sens du RGPD, couvertes par le secret médical et soumises à l'obligation d'hébergement HDS. La formation commence par là et le formalise avec vous : ce qu'est une donnée de santé identifiante, l'anonymisation systématique avant tout traitement, les offres entreprise et déploiements dédiés validés par la DSI et le DPO, ce qu'on ne confie jamais à un outil non certifié, et où s'arrête l'assistance (l'IA rédige et structure des écrits non cliniques ; le soin, le diagnostic et la décision restent aux professionnels de santé). Ce cadre est un livrable, écrit et applicable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'établissement</Link>. Nous formons des équipes du secteur de la santé et du médico-social depuis 2022 : les mêmes questions reviennent, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Aucune donnée patient identifiante dans un outil non certifié HDS', 'Anonymisation systématique avant tout traitement', 'Usages non cliniques uniquement : ni diagnostic ni décision médicale', 'Validation contre la HAS, le ministère et l\'ARS avant diffusion'].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIF & FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Tarif et financement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Combien coûte la formation, et comment la financer ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>1 980 € HT la journée de formation en intra, pour le groupe (jusqu'à 10 participants) ; 3 960 € HT le format deux jours. Certifiée Qualiopi, la formation relève de l'ANFH et du plan de formation pour l'hôpital public, de votre OPCO (OPCO Santé selon la convention) pour le privé et le médico-social privé, d'un fonds d'assurance formation pour le libéral : le bon cadre se vérifie au cadrage, et le devis est établi dans les formes attendues par votre financeur, sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable avec vos éléments (gabarits, procédures, cas anonymisés, outils validés par votre DSI), l'animation de la journée en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts par service, gabarits outillés, cadre d'usage données de santé), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>La prise en charge OPCO</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Masteria est certifiée Qualiopi : la formation est éligible au financement OPCO, selon votre branche et votre effectif. Nous fournissons programme, convention et pièces du dossier ; le dépôt se fait avant le début de la formation. Identifiez votre opérateur avec <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> et le détail des dispositifs sur <Link to="/financement-formation-ia" style={aStyle}>financer sa formation IA</Link>. Pas d'éligibilité CPF.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA santé : les questions fréquentes</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour aller plus loin</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Approfondir par outil, ou élargir</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La formation métier compare les outils ; les formations par outil approfondissent celui que votre équipe a retenu.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'IA pour la santé et la pharma', href: '/ia-sante-pharma', tag: 'Secteur', desc: "Conseil et développement de solutions IA pour les acteurs de la santé et de la pharma." },
              { label: 'Formation IA pour responsable QSE', href: '/formation-ia-qse', tag: 'Métier voisin', desc: "Qualité, sécurité, environnement : la démarche qualité outillée par l'IA, avec le cadre données de santé sur les accidents." },
              { label: 'Formation IA assistanat', href: '/formation-ia-assistante', tag: 'Métier voisin', desc: "Pour les secrétariats et assistants : courriers, agendas, comptes rendus, organisation avec l'IA." },
              { label: 'Formation IA écrits professionnels', href: '/formation-ia-ecrits-pro', tag: 'Compétence', desc: "Rédiger mieux et plus vite : notes, courriers, comptes rendus, synthèses, langage clair." },
              { label: 'Formation IA communication', href: '/formation-ia-communication', tag: 'Métier voisin', desc: "L'information et la communication institutionnelle avec l'IA : contenus, supports, relations presse." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Cadre', desc: "Les principes RGPD appliqués à l'IA, l'analyse d'impact et les garanties à vérifier outil par outil." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Ce que le règlement européen impose à vos usages de l'IA, avec la santé parmi les domaines à haut risque à connaître." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Établissement', desc: "Quand c'est tout l'établissement ou le groupe qu'il faut embarquer, par vagues de services." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA santé</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons vos équipes non cliniques, dans le bon cadre</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre structure (établissement public ou privé, cabinet, médico-social), les services concernés, vos outils validés et votre statut. Nous revenons vers vous sous 24 heures avec un programme ajusté, le cadre d'usage adapté et le devis dans les formes attendues par votre financeur (ANFH, OPCO, FAF).
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Présentiel & distanciel</p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
