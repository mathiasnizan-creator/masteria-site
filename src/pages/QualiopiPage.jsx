import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, ListChecks, Gauge, GraduationCap as Grad, FileText, ShieldCheck, Layers,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation IA Qualiopi » (slug /formation-ia-qualiopi).
 * REFONTE 2026-08-10 : remplace la page dédiée d'origine (259 lignes, hero clair,
 * 8 FAQ) par le patron des money pages formation. Cible « formation ia qualiopi »
 * (170/mois, KD 6, intention I — Semrush 2026-08-10) : l'acheteur cherche « une
 * formation IA qui soit Qualiopi, donc finançable ». La page est un guide-pivot :
 * elle explique Qualiopi et le financement, prouve la certification de Masteria
 * (NDA + catégorie), puis ROUTE vers le catalogue par métier et par outil.
 *
 * INTÉGRITÉ : plus jamais « financement OPCO garanti » ni « 100 % pris en
 * charge » (l'ancienne page le promettait) — la prise en charge dépend de
 * l'OPCO, de la branche, de l'effectif et des plafonds ; on dit « éligible »
 * et « selon votre OPCO ». Jamais de CPF (nos formations n'y sont pas
 * éligibles : pas de certification RNCP). Identité légale : Mathias NIZAN,
 * EI, NDA 84 69 23218 69 (mémoire identité légale / EI sur docs financeur).
 *
 * ANTI-CANNIBALISATION : /financement-formation-ia = le guide FINANCEMENT
 * (dispositifs, montage du dossier, CII/CIR pour le dev) ; /quel-opco =
 * l'outil ; CETTE page = l'angle « Qualiopi » (ce que c'est, ce que ça
 * garantit, ce que ça permet, notre certification) + porte d'entrée
 * catalogue. Les deux se renvoient sans se recouvrir.
 */

const SLUG = 'formation-ia-qualiopi'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA certifiée Qualiopi : catalogue et financement | Masteria"
const META_DESC = "Formation IA Qualiopi : ce que la certification garantit, ce qu'elle permet de financer (OPCO), et notre catalogue par métier et par outil, certifié Qualiopi. Devis sous 24 h."
const KEYWORDS = "formation ia qualiopi, formation intelligence artificielle qualiopi, formation ia certifiée qualiopi, formation ia finançable opco, organisme formation ia qualiopi, formation ia opco"

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
  { icon: Target, label: "Toutes nos formations sont certifiées Qualiopi" },
  { icon: MapPin, label: 'Présentiel & distanciel · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Qualiopi', value: "La certification qualité nationale des prestataires d'actions de formation, exigée pour accéder aux financements publics et mutualisés" },
  { label: 'Masteria', value: "Certifiée Qualiopi au titre des actions de formation, sous le numéro de déclaration d'activité 84 69 23218 69 (préfet de région Auvergne-Rhône-Alpes)" },
  { label: 'Ce que ça permet', value: "Rendre nos formations IA éligibles à la prise en charge par votre OPCO, selon votre branche, votre effectif et les plafonds en vigueur" },
  { label: 'Ce que ça ne permet pas', value: "Le CPF : nos formations ne sont pas inscrites au RNCP, donc non éligibles au compte personnel de formation" },
  { label: 'Catalogue', value: "Formations par métier (marketing, commercial, finance, RH, gestion de projet…), par outil (ChatGPT, Copilot, Claude, Gemini, Mistral) et thématiques (AI Act, dirigeants)" },
  { label: 'Tarif', value: "1 980 € HT par jour de formation en intra, pour le groupe ; devis et pièces du dossier OPCO sous 24 h" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: BadgeCheck,
    title: 'Ce que Qualiopi certifie réellement',
    desc: "Qualiopi atteste que l'organisme respecte le référentiel national qualité : information du public, adaptation des prestations aux bénéficiaires, moyens pédagogiques, qualification des formateurs, veille, prise en compte des appréciations. Elle est délivrée par un organisme certificateur accrédité et se contrôle par audits de surveillance. Elle certifie l'organisme et sa méthode, pas un niveau atteint par les stagiaires.",
  },
  {
    icon: Landmark,
    title: 'Ce que ça change pour votre financement',
    desc: "Sans Qualiopi, aucun financement public ou mutualisé n'est possible. Avec, nos formations sont éligibles à la prise en charge par votre OPCO au titre du plan de développement des compétences. Le montant dépend de votre OPCO, de votre branche, de votre effectif et des plafonds de l'année : nous ne promettons pas de taux, nous montons le dossier avec vous et vous orientons vers votre opérateur.",
  },
  {
    icon: ShieldCheck,
    title: 'Ce que ça ne fait pas',
    desc: "Qualiopi n'ouvre pas le CPF : le compte personnel de formation exige une certification inscrite au RNCP ou au répertoire spécifique, ce que nos formations courtes en entreprise ne sont pas. Elle ne garantit pas non plus une prise en charge à 100 % : cette décision appartient à l'OPCO. Un organisme qui vous promet l'un ou l'autre mérite une question de plus.",
  },
  {
    icon: Layers,
    title: 'Le catalogue certifié, par métier',
    desc: "Marketing, commercial, finance, ressources humaines, gestion de projet, communication, management, assistanat, service client, achats, QSE : chaque formation métier applique l'IA générative aux situations réelles de l'équipe, sur ses propres cas, avec un programme et une évaluation des acquis conformes au référentiel.",
  },
  {
    icon: Sparkles,
    title: 'Le catalogue certifié, par outil',
    desc: "ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, et le panorama multi-outils pour les organisations qui n'ont pas encore choisi : indépendants des éditeurs, nous formons sur l'outil que vos équipes utilisent, ou nous comparons sur vos cas d'usage avant de recommander.",
  },
  {
    icon: Grad,
    title: 'Les formations thématiques et sur mesure',
    desc: "AI Act et gouvernance, dirigeants et COMEX, acculturation d'entreprise, coaching individuel, sprints de trois heures : des formats pour chaque besoin, tous certifiés. Et quand aucune fiche ne correspond, nous construisons le programme sur mesure, dans le même cadre qualité et le même financement.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Un dossier OPCO monté avec vous',
    desc: "Programme détaillé, objectifs pédagogiques, modalités d'évaluation, convention, attestations : nous fournissons toutes les pièces au format attendu par votre OPCO, et nous vous accompagnons jusqu'au dépôt, avant le début de la formation.",
  },
  {
    title: 'Un tarif unique et lisible',
    desc: "1 980 € HT par jour de formation en intra-entreprise, pour le groupe jusqu'à dix participants, quel que soit le métier ou l'outil. Le même tarif en accompagnement individuel. Pas de grille opaque, pas de supplément selon le format.",
  },
  {
    title: 'Le métier avant l\'outil, l\'outil avant la théorie',
    desc: "Chaque formation part des situations réelles des participants : leurs documents, leurs processus, leurs campagnes, leurs dossiers. Le référentiel exige l'adaptation aux bénéficiaires ; nous en faisons notre méthode.",
  },
  {
    title: 'Un organisme spécialisé sur l\'IA depuis 2022',
    desc: "Plus de 1 500 professionnels formés, du COMEX aux équipes terrain, dans l'industrie, l'énergie, l'immobilier, le juridique ou le secteur public. Formateurs indépendants expérimentés et pédagogues, la force du réseau, mis à jour à chaque évolution des outils.",
  },
  {
    title: 'La certification vérifiable, pas déclarative',
    desc: "Notre numéro de déclaration d'activité et notre certification sont publics et vérifiables auprès des registres officiels. Nous les mettons sur chaque convention et chaque devis, parce que c'est ce que votre OPCO regarde en premier.",
  },
  {
    title: 'L\'honnêteté sur les limites',
    desc: "Pas de CPF, pas de taux de prise en charge garanti, pas de certification RNCP : nous le disons avant le devis. Ce que nous garantissons, c'est le cadre qualité, la conformité du dossier et une formation qui change les pratiques.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Étape 1',
    titre: "Du besoin au devis, en 24 heures",
    matin: [
      "Vous décrivez votre équipe, vos outils et vos enjeux ; un échange de cadrage gratuit précise le périmètre",
      "Nous identifions la formation du catalogue adaptée, ou nous construisons le programme sur mesure",
      "Devis sous 24 heures au tarif unique de 1 980 € HT par jour, avec le programme détaillé et les objectifs pédagogiques",
      "Nous vous orientons vers votre OPCO (notre outil Quel OPCO ? le trouve en deux minutes)",
    ],
    apresmidi: [
      "Convention de formation avec notre identité légale complète et notre certification, comme l'OPCO l'exige",
      "Pièces du dossier prêtes au format attendu : programme, modalités, évaluation, calendrier",
      "Dépôt de la demande de prise en charge avant le début de la formation, par vous ou avec notre aide",
      "Réponse de l'OPCO selon ses délais et ses règles ; nous ajustons si besoin (dates, format, périmètre)",
    ],
  },
  {
    jour: 'Étape 2',
    titre: "La formation, puis les preuves de réalisation",
    matin: [
      "Formation en présentiel dans vos locaux ou à distance, sur vos cas réels, avec le programme validé",
      "Émargement, positionnement en entrée, évaluation des acquis en sortie : le cadre qualité tenu du début à la fin",
      "Questionnaire de satisfaction à chaud, exigé par le référentiel et utile pour ajuster la suite",
      "Certificat de réalisation et attestation d'assiduité, pièces nécessaires au règlement par l'OPCO",
    ],
    apresmidi: [
      "Facturation conforme aux attentes de votre OPCO (subrogation possible selon les opérateurs)",
      "Livrables de la formation transmis aux participants (prompts, gabarits, cadre d'usage)",
      "Évaluation à froid quelques semaines plus tard : ce qui a pris dans les pratiques, ce qui reste à renforcer",
      "Suite possible : approfondissement outil, acculturation d'entreprise, coaching individuel",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Users, title: 'Responsables formation et RH', desc: "Vous devez financer la montée en compétence IA de vos équipes et sécuriser le dossier OPCO. Vous trouvez ici la preuve de certification, le tarif, les pièces, et le catalogue pour choisir la bonne formation par métier." },
  { icon: Target, title: 'Dirigeants de PME et de TPE', desc: "Vous voulez former vos équipes sans avancer plus que nécessaire. La certification rend nos formations éligibles à votre OPCO ; nous montons le dossier avec vous et nous vous disons honnêtement ce qui sera pris en charge." },
  { icon: Layers, title: 'Managers qui portent un projet de formation', desc: "Marketing, commercial, finance, projet : vous cherchez une formation IA appliquée à votre métier et finançable. Le catalogue par métier vous mène directement à la fiche qui vous concerne." },
  { icon: Landmark, title: 'Acheteurs formation et grands comptes', desc: "Vous consultez plusieurs organismes et vérifiez d'abord la certification, l'identité légale et la conformité du dossier. Tout est ici, vérifiable auprès des registres officiels." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une formation IA Qualiopi ?",
    a: "C'est une formation à l'intelligence artificielle dispensée par un organisme certifié Qualiopi, la certification qualité nationale des prestataires d'actions de formation. Concrètement, cela signifie deux choses : l'organisme respecte le référentiel national qualité (information, adaptation aux bénéficiaires, moyens, formateurs, évaluation, amélioration continue), et ses formations sont éligibles aux financements publics et mutualisés, en premier lieu la prise en charge par votre OPCO. Toutes les formations IA de Masteria sont dans ce cadre.",
  },
  {
    q: "Masteria est-il certifié Qualiopi ?",
    a: "Oui. Masteria est certifiée Qualiopi au titre des actions de formation, sous le numéro de déclaration d'activité 84 69 23218 69 enregistré auprès du préfet de la région Auvergne-Rhône-Alpes. La certification est délivrée par un organisme certificateur accrédité et vérifiable auprès des registres officiels. Elle figure, avec notre identité légale complète, sur chaque convention et chaque devis, parce que c'est la première chose que votre OPCO vérifie.",
  },
  {
    q: "Une formation IA Qualiopi est-elle prise en charge à 100 % ?",
    a: "Pas automatiquement, et méfiez-vous des organismes qui le garantissent. Qualiopi rend la formation éligible ; la décision et le montant de prise en charge appartiennent à votre OPCO, selon votre branche, votre effectif (les entreprises de moins de 50 salariés sont généralement mieux couvertes) et les plafonds de l'année. Nous montons le dossier avec vous pour maximiser la prise en charge, et nous vous disons avant le devis ce qui est probable. Notre guide du financement d'une formation IA détaille les dispositifs.",
  },
  {
    q: "Peut-on financer une formation IA Masteria avec le CPF ?",
    a: "Non. Le compte personnel de formation exige une certification inscrite au RNCP ou au répertoire spécifique ; nos formations courtes en entreprise délivrent une attestation et un certificat de réalisation dans le cadre Qualiopi, pas une certification professionnelle. Nos formations sont conçues pour les salariés et dirigeants financés par leur entreprise via l'OPCO. Pour un projet individuel, notre coaching IA peut être structuré en action de formation finançable OPCO ; le CPF reste exclu.",
  },
  {
    q: "Quelles formations IA Qualiopi proposez-vous ?",
    a: "Trois familles, toutes certifiées. Par métier : marketing, commercial, finance, ressources humaines, gestion de projet, communication, management, assistanat, service client, achats, QSE. Par outil : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, et un panorama multi-outils pour comparer. Thématiques et formats : AI Act et gouvernance, dirigeants et COMEX, acculturation d'entreprise, coaching individuel, sprints de trois heures. Et le sur mesure quand aucune fiche ne correspond, dans le même cadre.",
  },
  {
    q: "Combien coûte une formation IA Qualiopi chez Masteria ?",
    a: "1 980 € HT par jour de formation en intra-entreprise, pour le groupe (jusqu'à dix participants), quel que soit le métier ou l'outil ; le même tarif journalier en accompagnement individuel. Une formation métier de deux jours représente donc 3 960 € HT pour l'équipe, avant prise en charge par votre OPCO. Le devis, le programme et les pièces du dossier arrivent sous 24 heures ; en présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.",
  },
  {
    q: "Comment se passe la prise en charge OPCO, concrètement ?",
    a: "Vous nous décrivez le besoin, nous établissons devis et programme sous 24 heures. Nous fournissons la convention (avec notre identité légale et notre certification) et toutes les pièces au format attendu. Vous déposez la demande auprès de votre OPCO avant le début de la formation, seul ou avec notre aide ; certains OPCO acceptent la subrogation, c'est-à-dire de nous régler directement. Après la formation, émargements, évaluation et certificat de réalisation déclenchent le règlement. Notre outil Quel OPCO ? identifie votre opérateur en deux minutes.",
  },
  {
    q: "Quelle différence entre Qualiopi et une certification RNCP ?",
    a: "Qualiopi certifie l'organisme de formation et sa qualité de service ; une certification RNCP certifie une compétence acquise par le stagiaire, inscrite dans un répertoire national, et ouvre notamment le CPF. Une formation peut être Qualiopi sans être certifiante (c'est le cas de nos formations courtes en entreprise), et c'est suffisant pour le financement OPCO et le plan de développement des compétences. Si vous cherchez un diplôme ou un titre, il vous faut un parcours long, ce que nous ne proposons pas.",
  },
  {
    q: "Formez-vous en Suisse et en Belgique ? Le financement y est-il le même ?",
    a: "Nous formons en France, en Suisse et en Belgique, en présentiel ou à distance. Qualiopi et les OPCO sont des dispositifs français : ils s'appliquent aux entreprises françaises. En Suisse et en Belgique, le cadre de financement diffère (fonds de branche, chèques-formation régionaux selon les régions belges) et se vérifie au cas par cas ; nous ne promettons aucune prise en charge hors de France sans l'avoir vérifiée avec vous.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formations IA certifiées Qualiopi — Masteria',
  description: "Catalogue de formations à l'intelligence artificielle générative certifiées Qualiopi (actions de formation, NDA 84 69 23218 69) : par métier (marketing, commercial, finance, RH, gestion de projet, communication, management, assistanat, service client, achats, QSE), par outil (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, multi-outils) et thématiques (AI Act, dirigeants, acculturation, coaching). Éligibles à la prise en charge OPCO. Intra-entreprise, présentiel ou distanciel, Europe, États-Unis, Inde.",
  level: 'Tous niveaux',
  teaches: [
    "Appliquer l'IA générative aux situations réelles de son métier",
    "Maîtriser l'outil déployé dans son entreprise (ChatGPT, Copilot, Claude, Gemini ou Mistral)",
    "Formuler des demandes efficaces, vérifier les réponses, protéger les données",
    "Installer des usages durables avec un cadre d'usage et une bibliothèque de prompts",
  ],
  about: 'Formation professionnelle à l\'intelligence artificielle générative',
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique.',
  audience: 'Salariés, managers et dirigeants d\'entreprises et d\'organisations',
  locationName: 'Masteria — intra-entreprise, présentiel (Europe, États-Unis, Inde) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Parcours d'une formation IA Qualiopi chez Masteria, du devis aux preuves de réalisation",
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
  '@id': 'https://www.master-ia.fr/formation-ia-qualiopi#article',
  headline: "Formation IA Qualiopi : ce que la certification garantit, et notre catalogue certifié",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2025-06-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-qualiopi#webpage' },
  about: [
    { '@type': 'Thing', name: 'Qualiopi', sameAs: 'https://fr.wikipedia.org/wiki/Qualiopi' },
    { '@type': 'Thing', name: 'Formation professionnelle', sameAs: 'https://fr.wikipedia.org/wiki/Formation_professionnelle' },
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

export default function QualiopiPage() {
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
    { name: "Formation IA Qualiopi", slug: SLUG },
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
        datePublished="2025-06-10"
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA Qualiopi</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <BadgeCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Certification · Qualiopi
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA Qualiopi :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce que la certification garantit, et notre catalogue certifié</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une formation IA Qualiopi est dispensée par un organisme certifié selon le référentiel national qualité, ce qui la rend <strong style={{ color: '#fff', fontWeight: 700 }}>éligible à la prise en charge par votre OPCO</strong>. Masteria est certifiée Qualiopi au titre des actions de formation (NDA 84 69 23218 69) : toutes nos formations IA, par métier, par outil ou thématiques, sont dans ce cadre, au tarif unique de 1 980 € HT par jour en intra.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Cette page dit ce que Qualiopi garantit et ce qu'elle ne garantit pas (ni le CPF, ni un taux de prise en charge), prouve notre certification de façon vérifiable, puis vous mène à la formation qui correspond à votre équipe. Le dossier OPCO se monte avec nous, avant le début de la formation.
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
              <Kicker>Ce qu'il faut savoir</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que garantit une formation IA certifiée Qualiopi ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Qualiopi certifie l'organisme et sa méthode selon le référentiel national qualité, et rend ses formations éligibles aux financements publics et mutualisés, l'OPCO en premier lieu. Elle ne garantit ni le CPF (réservé aux certifications RNCP) ni un taux de prise en charge, qui dépend de votre OPCO. Chez Masteria, toutes les formations IA sont dans ce cadre : par métier, par outil, thématiques et sur mesure.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour le détail des dispositifs et le montage du dossier, voyez notre guide <Link to="/financement-formation-ia" style={aStyle}>financer une formation IA</Link> ; pour trouver votre opérateur, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link>.
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
          <Kicker>Pourquoi Masteria</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vous gagnez à choisir un organisme IA certifié Qualiopi
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six choses : un dossier OPCO monté avec vous jusqu'au dépôt, un tarif unique et lisible, des formations qui partent de votre métier et de vos cas réels, un organisme spécialisé sur l'IA depuis 2022, une certification vérifiable auprès des registres officiels, et l'honnêteté sur les limites du financement avant le devis.</strong>
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
            Un mot d'honnêteté : Qualiopi est une condition nécessaire, pas une garantie de résultat pédagogique. Ce qui fait qu'une formation change les pratiques, c'est le travail sur les cas réels des participants et le suivi des usages ensuite. La certification encadre ; la méthode fait la différence.
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
            Comment se déroule une formation IA Qualiopi chez Masteria ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Étape 1 : du besoin au devis en 24 heures, l'orientation vers votre OPCO, la convention et les pièces du dossier, le dépôt avant le début. Étape 2 : la formation sur vos cas réels avec le cadre qualité tenu (émargement, évaluation, satisfaction), puis les preuves de réalisation qui déclenchent le règlement, et l'évaluation à froid. Un parcours balisé, du premier échange au certificat.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le calendrier dépend surtout de votre OPCO : comptez ses délais d'instruction entre le dépôt et l'accord, et prévoyez le dépôt avant la date de formation. Nous vous aidons à caler les dates en conséquence.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse cette page ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À ceux qui doivent financer et sécuriser une formation IA : responsables formation et RH, dirigeants de PME et TPE, managers qui portent un projet pour leur équipe, acheteurs formation de grands comptes qui vérifient d'abord la certification et l'identité légale. Vous trouvez ici la preuve, le tarif, la méthode et le catalogue.</strong>
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
                Ce que nous ne vous promettons pas, et pourquoi
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Trois promesses circulent chez les organismes de formation et nous ne les faisons pas. « Prise en charge à 100 % garantie » : la décision appartient à votre OPCO, selon votre branche, votre effectif et les plafonds ; nous montons le dossier pour maximiser, sans garantir. « Éligible CPF » : nos formations courtes en entreprise ne sont pas inscrites au RNCP, donc non éligibles ; nous le disons d'emblée. « Certifiante » : nous délivrons une attestation et un certificat de réalisation dans le cadre Qualiopi, pas un titre professionnel. Ce que nous garantissons : la certification vérifiable, la conformité du dossier, l'identité légale complète sur chaque document, et une formation qui part de vos cas réels. Pour cadrer les usages qui suivront, voyez notre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Prise en charge : éligible, jamais « garantie »', 'CPF : non éligible, dit avant le devis', 'Attestation Qualiopi, pas de titre RNCP', 'Identité légale et certification sur chaque document'].map(pt => (
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
            <strong>1 980 € HT par jour de formation en intra-entreprise, pour le groupe (jusqu'à dix participants), quel que soit le métier ou l'outil ; le même tarif en accompagnement individuel. Certifiées Qualiopi, nos formations sont éligibles à la prise en charge par votre OPCO au titre du plan de développement des compétences, selon votre branche et votre effectif ; nous montons le dossier avec vous. Devis sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable, l'animation de la formation en présentiel ou à distance, les supports, les livrables (prompts, gabarits, cadre d'usage selon la formation), l'évaluation des acquis, le certificat de réalisation et toutes les pièces du dossier OPCO. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA Qualiopi : les questions fréquentes</h2>
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
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Par métier', desc: "Contenu, SEO, campagnes, analyse : l'IA sur vos campagnes réelles, 2 jours." },
              { label: 'Formation IA commercial', href: '/formation-ia-commercial', tag: 'Par métier', desc: "Prospection, préparation de RDV, propositions, CRM : l'IA sur tout le cycle de vente, 2 jours." },
              { label: 'Formation IA finance', href: '/formation-ia-finance', tag: 'Par métier', desc: "Excel, reporting, clôture, contrôle de gestion : l'IA sur vos vrais dossiers, 2 jours." },
              { label: 'Formation IA gestion de projet', href: '/formation-ia-gestion-de-projet', tag: 'Par métier', desc: "Cadrage, comptes rendus, reporting, risques : l'IA du cadrage au reporting, 2 jours." },
              { label: 'Toutes les formations par métier', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "RH, communication, management, assistanat, service client, achats, QSE et les autres." },
              { label: 'Formation ChatGPT', href: '/formation-chatgpt', tag: 'Par outil', desc: "L'outil le plus répandu, par métier et par niveau." },
              { label: 'Formation Microsoft Copilot', href: '/formation-microsoft-copilot', tag: 'Par outil', desc: "Copilot dans Microsoft 365 : Word, Excel, Outlook, Teams, agents." },
              { label: 'Financer une formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences, montage du dossier : le guide complet." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA Qualiopi</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Trouvons la formation IA certifiée qui correspond à votre équipe</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre équipe, vos outils et votre enjeu. Nous revenons vers vous sous 24 heures avec la formation adaptée (ou un programme sur mesure), le devis au tarif unique et les pièces du dossier OPCO. Vous saurez avant de signer ce qui est probable côté prise en charge.
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
