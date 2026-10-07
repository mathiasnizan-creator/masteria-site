import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, GraduationCap as Grad, ShieldCheck, Layers, ExternalLink,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation IA Qualiopi » (slug /formation-ia-qualiopi).
 * REFONTE 2026-08-10 : patron des money pages formation. Cible « formation ia
 * qualiopi » (170/mois, KD 6, intention I, Semrush 2026-08-10) : l'acheteur
 * cherche « une formation IA qui soit Qualiopi, donc finançable ». La page est
 * un guide-pivot : elle explique Qualiopi et le financement, prouve la
 * certification de Masteria (certificat, NDA, catégorie), puis ROUTE vers le
 * catalogue par métier et par outil.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de « +1 500 », groupe
 * de 12 participants au plus, FounderNote remplacé par une signature, sources
 * officielles écrites pour la page (section « Vérifier par vous-même »).
 *
 * INTÉGRITÉ : jamais « financement OPCO garanti » ni de pourcentage de prise en
 * charge ; l'OPCO décide selon ses règles et ses fonds. Jamais de CPF (pas de
 * certification RNCP). Identité légale : Mathias NIZAN, EI, NDA 84 69 23218 69,
 * certificat Qualiopi n° 725311-1 (Certifopac, 29/01/2026 au 28/01/2029).
 * Toute mention du NDA porte la formule légale « Cet enregistrement ne vaut pas
 * agrément de l'État ».
 *
 * ANTI-CANNIBALISATION : /financement-formation-ia = le guide FINANCEMENT
 * (dispositifs, montage du dossier) ; /quel-opco = l'outil ; CETTE page =
 * l'angle « Qualiopi » (ce que c'est, ce que ça garantit, ce que ça permet,
 * notre certification) + porte d'entrée catalogue.
 */

const SLUG = 'formation-ia-qualiopi'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA Qualiopi : garanties et financement | Masteria"
const META_DESC = "Formation IA Qualiopi : les garanties de la certification, le rôle de votre OPCO, plus de 100 programmes par métier et par outil, à 1 980 € HT/jour."
const KEYWORDS = "formation ia qualiopi, formation intelligence artificielle qualiopi, formation ia certifiée qualiopi, formation ia finançable opco, organisme formation ia qualiopi, formation ia opco"

/* Sources officielles citées par la page (JSON-LD WebPage.citation + section visible). */
const SOURCES = [
  { name: 'Qualiopi, la marque de certification qualité des prestataires de formation (Ministère du Travail)', short: 'Ministère du Travail', desc: "La page officielle de la marque Qualiopi : qui doit être certifié, pour quelles actions, avec quel référentiel.", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: 'Les onze OPCO et leur rôle, page du Ministère du Travail', short: 'Ministère du Travail', desc: "Le rôle des onze OPCO et leur place dans le financement de la formation des salariés.", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
  { name: 'Registre des organismes de formation déclarés, jeu de données public sur data.gouv.fr', short: 'data.gouv.fr', desc: "Le registre où figurent la déclaration d'activité de Masteria et sa certification Qualiopi.", url: 'https://www.data.gouv.fr/datasets/liste-publique-des-organismes-de-formation-l-6351-7-1-du-code-du-travail' },
  { name: "Fiche MASTERIA à l'Annuaire des entreprises de l'État (SIREN 919 252 403)", short: 'annuaire-entreprises.data.gouv.fr', desc: "La fiche légale de Masteria, entreprise individuelle, avec son SIRET.", url: 'https://annuaire-entreprises.data.gouv.fr/entreprise/919252403' },
]

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
  { icon: GraduationCap, label: 'Qualiopi · catégorie actions de formation' },
  { icon: Sparkles, label: 'Claude · ChatGPT · Copilot · Gemini · Mistral' },
  { icon: Target, label: 'Un catalogue de plus de 100 programmes' },
  { icon: MapPin, label: 'Intra ou individuel · sur site ou à distance' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Qualiopi', value: "La marque nationale de certification qualité des organismes de formation, obligatoire depuis le 1er janvier 2022 pour accéder aux fonds publics et mutualisés" },
  { label: 'Masteria', value: "Certifopac a certifié Masteria sur la catégorie « actions de formation », pour trois ans à compter du 29 janvier 2026 (certificat n° 725311-1)" },
  { label: 'Ce que ça permet', value: "Présenter la formation à votre OPCO pour une prise en charge, qu'il accorde selon ses règles et ses fonds" },
  { label: 'Ce que ça ne permet pas', value: "Le CPF : il ne finance que des titres inscrits au RNCP ou au Répertoire spécifique, catégorie dont nos sessions courtes ne relèvent pas" },
  { label: 'Catalogue', value: "Plus de 100 programmes : par métier (marketing, finance, RH, achats…), par outil (Mistral, Claude, Gemini, ChatGPT, Copilot) et par thème (AI Act, dirigeants)" },
  { label: 'Tarif', value: "Un jour de session : 1 980 € HT, en intra (jusqu'à douze stagiaires) ou en individuel. Deux jours : 3 960 € HT" },
]

/* ───────── Ce qu'il faut savoir (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: BadgeCheck,
    title: 'Ce que Qualiopi contrôle',
    desc: "Le référentiel national qualité compte sept critères : l'information donnée au public, l'analyse du besoin, l'adaptation au public, les moyens pédagogiques, la qualification des formateurs, la veille, le traitement des avis et des réclamations. Un audit initial, puis un contrôle de surveillance au milieu du cycle de trois ans, en vérifient les preuves. La certification juge l'organisme et sa méthode ; elle ne note pas les stagiaires.",
  },
  {
    icon: Landmark,
    title: 'Ce que ça change pour le financement',
    desc: "Sans certification, aucun fonds public ou mutualisé ne peut payer la formation. Avec elle, votre OPCO peut la financer au titre du PDC, le plan de développement des compétences de votre entreprise. Le montant dépend de sa grille, des fonds disponibles cette année, de l'effectif et de la branche de votre entreprise ; nous préparons le dossier sans annoncer de taux.",
  },
  {
    icon: ShieldCheck,
    title: 'Ce que la certification ne promet pas',
    desc: "Le CPF exige un titre ou un certificat inscrit au RNCP ou au Répertoire spécifique, et une formation courte en entreprise n'y figure pas. Qualiopi ne fixe pas non plus combien l'OPCO paiera, une décision qui lui revient. Un organisme qui vous garantit l'un ou l'autre mérite une question de plus.",
  },
  {
    icon: Layers,
    title: 'Le catalogue par métier',
    desc: "Marketing, commercial, finance, ressources humaines, achats, QSE, gestion de projet, juridique, assistanat : chaque programme métier part des documents et des situations de l'équipe, avec des objectifs écrits et, pour chacun, une question qui en vérifie l'acquisition.",
  },
  {
    icon: Sparkles,
    title: 'Le catalogue par outil',
    desc: "Claude, Microsoft Copilot (anciennement Microsoft 365 Copilot), ChatGPT, Gemini, l'assistant Vibe de Mistral, ou un panorama multi-outils pour une organisation encore indécise. Masteria ne dépend d'aucun éditeur : nous formons sur l'outil déjà déployé, ou comparons plusieurs outils sur vos cas avant de recommander.",
  },
  {
    icon: Grad,
    title: 'Les formats thématiques et sur mesure',
    desc: "AI Act et gouvernance, comité de direction, acculturation, coaching individuel, Sprint IA de trois heures : chaque format suit le même cadre qualité. Quand aucun programme ne correspond, nous écrivons le vôtre, avec les mêmes pièces pour l'OPCO.",
  },
]

/* ───────── Les atouts (6, citables) ───────── */

const ATOUTS = [
  {
    title: 'Le dossier OPCO préparé avec vous',
    desc: "Programme, objectifs, modalités d'évaluation, convention, feuilles d'émargement : chaque pièce arrive au format que votre opérateur attend, et nous restons disponibles jusqu'au dépôt, avant le premier jour de formation.",
  },
  {
    title: 'Un prix lisible',
    desc: "Le prix ne change ni avec le métier ni avec l'outil : un jour de session vaut 1 980 € HT, pour une équipe de douze au plus réunie en intra comme pour une seule personne. Deux jours reviennent à 3 960 € HT.",
  },
  {
    title: "Le métier d'abord, l'outil ensuite",
    desc: "Chaque session part de ce que les participants traitent au quotidien : leurs dossiers, leurs tableaux, leurs mails. Le référentiel demande d'adapter la formation à son public ; nous en avons fait la méthode.",
  },
  {
    title: "Une spécialité unique, l'IA",
    desc: "L'intelligence artificielle est le seul sujet de Masteria depuis sa fondation, à Lyon, en 2022. Une vingtaine de formateurs indépendants animent les sessions, sur des supports mis à jour au fil des versions des outils.",
  },
  {
    title: 'Une certification que vous vérifiez',
    desc: "La déclaration d'activité et le certificat figurent dans le registre public des organismes de formation et sur chaque convention. Votre OPCO les contrôle en premier ; vous pouvez le faire avant lui.",
  },
  {
    title: 'Les limites dites avant le devis',
    desc: "Pas de CPF, aucun taux de prise en charge promis, aucun titre RNCP. Nous nous engageons sur le cadre qualité, sur un dossier conforme et sur une formation construite à partir de votre travail.",
  },
]

/* ───────── Le parcours en deux étapes (deux colonnes par étape) ───────── */

const PROGRAMME = [
  {
    jour: 'Étape 1',
    titre: 'Avant la formation : du besoin au dossier déposé',
    colA: 'Avec vous',
    colB: 'Pour votre OPCO',
    matin: [
      "Vous décrivez l'équipe, ses outils et ce qu'elle doit savoir faire ; un premier échange fixe le périmètre",
      "Nous retenons un programme du catalogue, ou nous écrivons le vôtre",
      "Le devis arrive sous 24 heures, avec le programme détaillé et ses objectifs évaluables",
      "Nous vous indiquons votre OPCO ; l'outil Quel OPCO ? le retrouve aussi à partir de votre secteur",
    ],
    apresmidi: [
      "Une convention qui porte l'identité légale complète de l'organisme et sa certification",
      "Les pièces au format attendu : programme, modalités d'évaluation, calendrier",
      "La demande de prise en charge déposée avant le premier jour, par vous ou avec notre aide",
      "Selon la réponse de l'OPCO, nous ajustons les dates, le format ou le périmètre",
    ],
  },
  {
    jour: 'Étape 2',
    titre: 'Pendant et après : la session, puis les preuves',
    colA: 'Pendant la session',
    colB: 'Après la session',
    matin: [
      "La session a lieu chez vous ou en visioconférence, à partir des dossiers de vos équipes",
      "Un positionnement en entrée situe chaque participant ; un questionnaire des acquis clôt la session",
      "Les feuilles d'émargement sont signées par demi-journée",
      "Un questionnaire de satisfaction recueille l'avis de chacun à chaud",
    ],
    apresmidi: [
      "Le certificat de réalisation et les émargements partent à l'OPCO ; certains pratiquent la subrogation, c'est-à-dire qu'ils paient directement l'organisme",
      "Les participants gardent les livrables : prompts, gabarits, cadre d'usage",
      "Une évaluation à froid, quelques semaines plus tard, mesure ce qui est resté dans les pratiques",
      "Une suite reste possible : approfondissement par outil, acculturation d'autres équipes, coaching individuel",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Users, title: 'Responsables formation et RH', desc: "Vous devez faire monter vos équipes en compétence sur l'IA et présenter un dossier solide à l'OPCO. Vous trouvez ici la preuve de certification, le prix, la liste des pièces et le catalogue par métier." },
  { icon: Target, title: 'Dirigeants de PME et de TPE', desc: "Vous voulez former l'équipe sans avancer plus que nécessaire. La certification permet une demande à votre OPCO ; nous montons le dossier avec vous et vous disons franchement ce qui a des chances d'être pris en charge." },
  { icon: Layers, title: 'Managers qui portent un projet de formation', desc: "Marketing, commercial, finance, gestion de projet : vous cherchez une formation IA appliquée à votre fonction et finançable. Les pages métier vous mènent au programme qui vous concerne." },
  { icon: Landmark, title: 'Acheteurs formation et grands comptes', desc: "Vous comparez plusieurs organismes et contrôlez d'abord la certification, l'identité légale et la conformité du dossier. Chaque élément se vérifie sur un registre public, sans passer par nous." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une formation IA Qualiopi ?",
    a: "Une formation à l'intelligence artificielle dispensée par un organisme certifié Qualiopi, la marque qui atteste du respect du référentiel national qualité. Deux conséquences pour vous : l'organisme a prouvé à un auditeur sa façon d'informer, d'adapter, d'évaluer et de s'améliorer, et sa formation peut être présentée à votre OPCO pour une prise en charge. Chez Masteria, chaque programme du catalogue entre dans ce cadre.",
  },
  {
    q: "Masteria est-il certifié Qualiopi ?",
    a: "Oui, pour la catégorie « actions de formation ». Certifopac a délivré à Masteria le certificat n° 725311-1, émis le 29 janvier 2026 pour trois ans ; vous pouvez le télécharger en PDF depuis cette page. Le numéro de déclaration d'activité et les liens vers les registres publics figurent sur la page À propos, dans le bloc « Organisme vérifiable ».",
  },
  {
    q: "Une formation IA Qualiopi est-elle prise en charge en totalité ?",
    a: "Pas automatiquement. La certification rend la demande possible ; votre OPCO en fixe le montant selon sa grille, votre branche, votre effectif et les fonds de l'année. Pour ce type de financement, les structures de moins de cinquante salariés sont en général les mieux servies. Nous préparons le dossier et vous disons, avant le devis, ce qui paraît probable ; notre guide du financement détaille les dispositifs.",
  },
  {
    q: "Peut-on financer une formation IA Masteria avec le CPF ?",
    a: "Non. Le compte personnel de formation, ou CPF, ne paie que des titres et certificats inscrits au RNCP ou au Répertoire spécifique, et nos formations courtes en entreprise n'en font pas partie. Elles se terminent par une attestation et un certificat de réalisation, dans le cadre Qualiopi. Elles sont pensées pour des salariés et des dirigeants dont l'entreprise finance la formation, avec l'appui de son OPCO.",
  },
  {
    q: "Quelles formations IA Qualiopi proposez-vous ?",
    a: "Plus de 100 programmes, en trois familles. Par métier : marketing, commercial, finance, ressources humaines, achats, QSE, gestion de projet, juridique ou assistanat, entre autres. Par outil : Gemini, Claude, Microsoft Copilot, Mistral, ChatGPT, ou un panorama multi-outils. Par thème ou par format : AI Act et gouvernance, comité de direction, acculturation, coaching individuel, Sprint IA de trois heures. Un programme sur mesure entre dans le même cadre.",
  },
  {
    q: "Combien coûte une formation IA Qualiopi chez Masteria ?",
    a: "La journée de session est à 1 980 € HT, sur n'importe quel sujet, pour un groupe intra de douze participants au maximum ou pour une seule personne. Deux journées pour toute l'équipe font 3 960 € HT, avant une éventuelle prise en charge par votre OPCO. Pour une session loin de Lyon, le déplacement du formateur est refacturé au réel. Le devis et le programme vous parviennent en moins de 24 heures.",
  },
  {
    q: "Comment se passe la prise en charge OPCO, concrètement ?",
    a: "Vous décrivez le besoin ; le devis et le programme suivent sous 24 heures. Nous fournissons la convention, avec notre identité légale et notre certificat, et les pièces au format attendu. Vous déposez la demande, seul ou avec notre aide, avant que la session commence ; certains opérateurs pratiquent la subrogation et règlent directement l'organisme. Après la session, les émargements, l'évaluation et le certificat de réalisation déclenchent le paiement. L'outil Quel OPCO ? vous aide à trouver votre opérateur.",
  },
  {
    q: "Quelle différence entre Qualiopi et une certification RNCP ?",
    a: "Qualiopi porte sur l'organisme et la qualité de son service. Une certification RNCP porte sur une compétence acquise par la personne, enregistrée dans un répertoire national, et ouvre notamment le CPF. Une formation peut être dispensée par un organisme Qualiopi sans être certifiante, comme nos formations courtes en entreprise, et rester éligible au financement de l'OPCO. Pour obtenir un diplôme ou un titre, il faut un parcours long, que Masteria ne propose pas.",
  },
  {
    q: "Formez-vous en Suisse et en Belgique ?",
    a: "Oui, à Genève, à Bruxelles et ailleurs, sur site ou à distance, comme en France et jusqu'aux États-Unis et en Inde. Qualiopi et les OPCO sont des dispositifs français : aucun OPCO n'existe à Genève ni à Bruxelles, et nos devis y sont libellés en euros HT. Des aides locales existent parfois ; elles se vérifient au cas par cas, et nous n'en promettons aucune sans l'avoir vérifiée avec vous.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formations IA certifiées Qualiopi · Masteria',
  description: "Catalogue de plus de 100 formations à l'intelligence artificielle générative, dispensées par un organisme certifié Qualiopi (certificat n° 725311-1, catégorie actions de formation) : par métier, par outil (ChatGPT, Gemini, Claude, Mistral, Microsoft Copilot) et par thème (AI Act, dirigeants, acculturation, coaching). Un OPCO peut financer ces formations, selon ses critères et dans la limite de ses fonds. Intra-entreprise ou individuel, sur site ou à distance, en France comme hors de France, Europe, Inde et États-Unis compris.",
  level: 'Tous niveaux',
  teaches: [
    "Appliquer l'IA générative aux dossiers de son propre métier",
    "Maîtriser l'outil déployé dans son entreprise (Gemini, Mistral, Claude, Copilot ou ChatGPT)",
    "Formuler des demandes précises, vérifier les réponses, protéger les données",
    "Installer des usages durables avec un cadre d'usage et une bibliothèque de prompts",
  ],
  about: "Formation professionnelle à l'intelligence artificielle générative",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique.',
  audience: "Salariés, managers et dirigeants d'entreprises et d'organisations",
  locationName: 'Masteria : intra-entreprise, dans les locaux du client ou en visioconférence',
}
/* Parcours en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Parcours d'une formation IA Qualiopi chez Masteria, du besoin aux preuves de réalisation",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((j, ji) => [
    { '@type': 'ListItem', position: ji * 2 + 1, name: `${j.jour} · ${j.colA} · ${j.titre}`, description: j.matin.join(' ; ') },
    { '@type': 'ListItem', position: ji * 2 + 2, name: `${j.jour} · ${j.colB} · ${j.titre}`, description: j.apresmidi.join(' ; ') },
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
  dateModified: '2026-10-07',
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

function DayBlock({ jour, titre, colA, colB, matin, apresmidi, isDesktop }) {
  const col = { flex: 1, minWidth: 0 }
  const list = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }
  const li = { fontSize: 14.5, color: '#374151', lineHeight: 1.65, display: 'flex', gap: 9, alignItems: 'flex-start' }
  const colTitle = { fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }
  return (
    <div style={{ ...cardStyle, padding: 'clamp(22px, 3vw, 30px)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{jour}</span>
        <h3 style={{ ...h3Style, fontSize: 18 }}>{titre}</h3>
      </div>
      <div style={{ display: 'flex', gap: isDesktop ? 28 : 20, flexDirection: isDesktop ? 'row' : 'column' }}>
        <div style={col}>
          <div style={colTitle}>{colA}</div>
          <ul style={list}>{matin.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
        <div style={col}>
          <div style={colTitle}>{colB}</div>
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
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={SOURCES.map(({ name, url }) => ({ name, url }))}
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
            Rédigé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui conçoit les parcours du catalogue · actualisé le 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une formation IA Qualiopi est dispensée par un organisme dont un auditeur a validé les méthodes au regard du référentiel national qualité, ce qui permet de <strong style={{ color: '#fff', fontWeight: 700 }}>la présenter à votre OPCO pour une prise en charge</strong>. Masteria est certifié sur la catégorie « actions de formation » : ses programmes IA, par métier, par outil ou par thème, entrent tous dans ce cadre et sont facturés 1 980 € HT le jour de session.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Vous trouverez plus bas ce que Qualiopi garantit, ce qu'elle laisse de côté (le CPF, un taux de financement), les preuves de notre certification et le chemin vers le programme qui convient à votre équipe. Le dossier OPCO se prépare avec nous, avant le premier jour de formation.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le parcours
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

      {/* ── CE QU'IL FAUT SAVOIR (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce qu'il faut savoir</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que garantit une formation IA certifiée Qualiopi ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Qualiopi atteste qu'un organisme respecte le référentiel national qualité, sept critères vérifiés par un certificateur accrédité. C'est la condition pour que votre OPCO examine une demande de prise en charge. La certification n'ouvre pas le CPF et ne fixe aucun taux de financement. Chez Masteria, chaque programme, par métier, par outil ou sur mesure, entre dans ce cadre.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le montage financier est détaillé dans notre guide <Link to="/financement-formation-ia" style={aStyle}>financer une formation IA</Link> ; pour connaître votre opérateur, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> le retrouve à partir de votre secteur.
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

      {/* ── POURQUOI MASTERIA ── */}
      <section id="atouts" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pourquoi Masteria</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vous gagnez à choisir un organisme IA certifié Qualiopi
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un dossier OPCO préparé avec vous jusqu'au dépôt, un prix journalier unique, des programmes construits sur les cas de vos équipes, un organisme dont l'IA est le seul sujet depuis 2022, une certification que vous pouvez contrôler vous-même, et des limites dites avant le devis.</strong>
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
            Qualiopi garantit un processus ; l'effet sur les pratiques dépend d'autre chose. Une formation change le travail quand elle s'appuie sur les dossiers des participants et quand l'usage est suivi après la session. C'est pourquoi chaque formation Masteria prévoit une évaluation à froid quelques semaines plus tard.
          </p>
        </div>
      </section>

      {/* ── LE PARCOURS EN DEUX ÉTAPES (ancre sombre, pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le parcours</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se déroule une formation IA Qualiopi chez Masteria ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Avant la formation, votre besoin devient un devis sous 24 heures, puis un dossier déposé auprès de votre OPCO. Pendant et après, la session se déroule sur vos dossiers avec le cadre qualité tenu, les preuves de réalisation déclenchent le règlement, et une évaluation à froid mesure ce qui reste.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le délai le plus long est souvent l'instruction par l'OPCO. Déposez la demande bien avant la date de session ; nous calons le calendrier avec vous en conséquence.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui cette page est-elle utile ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À toute personne qui doit financer et sécuriser une formation IA : responsables formation et RH, dirigeants de PME et de TPE, managers qui portent un projet pour leur équipe, acheteurs de grands comptes qui contrôlent d'abord la certification et l'identité légale. Elle réunit la preuve, le prix, la méthode et le catalogue.</strong>
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

      {/* ── CADRE : CE QUE NOUS NE PROMETTONS PAS (E-E-A-T + réassurance) ── */}
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
                Trois promesses circulent chez certains organismes, et vous ne les lirez pas ici. Une prise en charge totale garantie : seul votre OPCO décide, selon ses règles et ses fonds. Une éligibilité au CPF : aucune de nos sessions n'est inscrite au RNCP, et nous le disons dès le premier échange. Une formation « certifiante » : vous recevez une attestation et un certificat de réalisation, et aucun titre professionnel n'est délivré. Nous tenons en revanche la certification vérifiable, la conformité du dossier, l'identité légale complète sur chaque document et une formation construite sur vos dossiers. Pour encadrer les usages qui suivront, voyez notre modèle de <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Prise en charge : à demander, jamais promise', 'CPF : exclu, et dit avant le devis', 'Attestation et certificat de réalisation, sans titre RNCP', 'Identité légale et certificat sur chaque document'].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIX & PRISE EN CHARGE ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Prix et prise en charge</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Ce que coûte une formation IA Qualiopi chez Masteria, et qui peut la payer</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une journée de session coûte 1 980 € HT, pour un groupe intra de douze stagiaires tout au plus ou en individuel ; deux journées, 3 960 € HT. Votre OPCO peut la financer selon ses règles et dans la limite de ses fonds ; le dossier se prépare avec nous, et vous avez le devis dans les 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que le prix inclut</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                L'analyse du besoin, l'animation dans vos locaux ou en visioconférence, les supports remis, les livrables (prompts, modèles de documents, cadre d'usage), le questionnaire des acquis, le certificat de réalisation et toutes les pièces du dossier OPCO. Au-delà de Lyon, les frais de déplacement du formateur, depuis sa ville, s'ajoutent au réel.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le rôle de votre OPCO</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Pour ce plan de formation, les fonds mutualisés des OPCO vont en règle générale aux employeurs de moins de 50 salariés ; pour les effectifs plus importants, tout dépend des accords de votre branche et des versements volontaires. Retrouvez votre opérateur avec <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> et le détail des dispositifs dans <Link to="/financement-formation-ia" style={aStyle}>financer sa formation IA</Link>. À Genève et à Bruxelles, où rien n'équivaut à un OPCO, nos devis sont libellés en euros HT. Le CPF reste exclu.
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
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Votre question porte sur un cas particulier (branche, effectif, pays) ? Écrivez-nous, la réponse arrive sous 24 heures.</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Poser votre question
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
          <Kicker>Les pages à lire ensuite</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Choisir un programme, puis le financer</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Les pages métier montrent le programme de deux jours appliqué à une fonction ; les pages outil vont plus loin sur l'assistant que votre équipe utilise déjà.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Par métier', desc: "Campagnes, contenus, référencement, analyse : deux jours sur les dossiers de votre équipe marketing." },
              { label: 'Formation IA commercial', href: '/formation-ia-commercial', tag: 'Par métier', desc: "Prospection, préparation des rendez-vous, propositions et suivi dans le CRM, en deux jours." },
              { label: 'Formation IA finance', href: '/formation-ia-finance', tag: 'Par métier', desc: "Excel, reporting, clôture, contrôle de gestion : deux jours sur vos propres fichiers." },
              { label: 'Formation IA gestion de projet', href: '/formation-ia-gestion-de-projet', tag: 'Par métier', desc: "Cadrage, comptes rendus, suivi des risques et reporting : deux jours pour les chefs de projet." },
              { label: 'Toutes les formations par métier', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Ressources humaines, communication, management, assistanat, service client, achats, QSE et d'autres fonctions." },
              { label: 'Formation ChatGPT', href: '/formation-chatgpt', tag: 'Par outil', desc: "L'assistant le plus répandu, par métier et par niveau, avec les réglages de l'offre ChatGPT Business." },
              { label: 'Formation Microsoft Copilot', href: '/formation-microsoft-copilot', tag: 'Par outil', desc: "Copilot au quotidien dans Outlook, Teams, Word et Excel, et les agents qui s'y ajoutent." },
              { label: 'Financer une formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences, montage du dossier : le guide du financement." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Voir la page<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan, fondateur de Masteria, dessine les parcours du catalogue et répond de leur conformité au référentiel. Il a actualisé cette page le 7 octobre 2026 ; sa vision et son rôle sont présentés sur <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA Qualiopi</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Trouvons la formation IA certifiée qui correspond à votre équipe</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez votre équipe, ses outils et ce qu'elle doit savoir faire. Sous 24 heures, vous recevez la formation proposée (ou un programme écrit pour vous), le devis et les pièces du dossier OPCO, avec notre avis sur la prise en charge probable.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Organisme certifié Qualiopi · devis sous 24 heures · sur site ou à distance</p>
          </div>
        </div>
      </section>

      {/* ── VÉRIFIER PAR VOUS-MÊME (sources officielles propres à la page) ── */}
      <section aria-labelledby="verifier-sources" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="verifier-sources" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Vérifier par vous-même
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Les règles de Qualiopi et des OPCO, puis la situation légale de Masteria, se contrôlent sur des sites publics, extérieurs au nôtre. Le certificat se télécharge aussi <a href="/assets/qualiopi-certificat-masteria.pdf" style={aStyle}>en PDF</a>.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {SOURCES.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {s.short}
                  <ExternalLink size={13} strokeWidth={2.2} aria-hidden="true" />
                </a>
                <span style={{ color: '#6B7280' }}> : {s.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
