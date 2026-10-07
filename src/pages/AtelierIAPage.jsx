import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Lightbulb, Users, GraduationCap, MapPin, Check, Sparkles, Scale,
  Landmark, Compass, FileSpreadsheet, Wrench, Radar, Factory, Briefcase,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « atelier intelligence artificielle » (slug /atelier-intelligence-artificielle),
 * côté FORMATION. Créée le 2026-09-04 (Semrush du 03/09 : « atelier intelligence
 * artificielle », 70/mois, KD 7, intention commerciale).
 * Réécrite le 2026-10-07 en texte propre (exigence ≥ 90 % de 6-grammes uniques).
 *
 * ANGLE PROPRE À CETTE PAGE : la pratique en petit groupe, chacun sur ses dossiers.
 * Voisines : /sensibilisation-ia (première prise de conscience), /acculturation-ia
 * (organisation par vagues), /conference-ia (grand public interne), /coaching-ia (individuel).
 *
 * DÉCISION DU 07/10 : les Sprints Sensibilisation, Prompts et Managers sont fusionnés
 * dans /formation-sprint-ia (redirection 308). Les cartes sont donc réorganisées : une
 * carte vers le hub Sprint, qui présente ces trois formats de fond ; une carte par Sprint
 * qui garde sa page (AI Act, Excel, Veille) ; deux ateliers construits sur mesure (métier,
 * cas d'usage avec la direction). Aucun lien vers une page fusionnée (scratchpad/fusions.json).
 *
 * FAITS : tarifs du brief commun du 07/10 (Sprint 1 980 € HT la séance de 3 h ; formation
 * 1 980 € HT la journée, douze personnes au plus). AI Act : fiche de faits du 07/10,
 * section 7. Cas : « conseil-financier » et « industrie » de src/data/etudes-de-cas.js.
 * Le tarif dégressif de l'ancienne version est retiré (absent des faits du 07/10).
 */

const SLUG = 'atelier-intelligence-artificielle'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Atelier intelligence artificielle en petit groupe | Masteria"
const META_DESC = "Atelier intelligence artificielle : douze personnes au plus, chacune sur ses dossiers, 3 h ou une journée. Sprints IA, atelier métier, cas d'usage."
const KEYWORDS = "atelier intelligence artificielle, atelier ia, atelier ia entreprise, atelier ia générative, atelier découverte ia, atelier prompts, atelier chatgpt entreprise, workshop ia, atelier cas d'usage ia"

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
  { icon: GraduationCap, label: 'Organisme Qualiopi · demande OPCO possible' },
  { icon: Users, label: 'Groupes de douze, un écran par personne' },
  { icon: Sparkles, label: "L'assistant déjà installé chez vous" },
  { icon: MapPin, label: 'Sur place (Europe · États-Unis · Inde) ou à distance' },
]

const EN_BREF = [
  { label: 'Durée', value: "Trois heures pour un Sprint, une demi-journée ou une journée pour un atelier construit sur mesure" },
  { label: 'Groupe', value: "Douze personnes au maximum, chacune avec un ordinateur et un accès à l'assistant de l'entreprise" },
  { label: 'Principe', value: "Les participants manipulent pendant au moins les deux tiers du temps, sur des documents qu'ils ont apportés" },
  { label: 'Ateliers', value: "Trois Sprints de fond (découverte, méthode de demande, managers), trois Sprints thématiques (AI Act, Excel, veille), l'atelier métier et l'atelier cas d'usage" },
  { label: 'Prix', value: "1 980 € HT la séance pour le groupe, qu'elle dure trois heures ou une journée" },
  { label: 'Financement', value: "Organisme certifié Qualiopi (catégorie actions de formation) : votre OPCO peut être sollicité" },
]

/* ───────── Les ateliers : un hub Sprint, trois Sprints avec leur page, deux ateliers sur mesure ───────── */

const ATELIERS = [
  { icon: Lightbulb, title: 'Les trois Sprints de fond (3 h)', desc: "Découvrir l'IA générative quand on part de zéro, apprendre une méthode de demande quand on a déjà l'outil sans en tirer grand-chose, ou réunir des managers autour des règles de leur service : ces trois Sprints de trois heures sont décrits côte à côte, avec un conseil pour choisir.", href: '/formation-sprint-ia', cta: 'Comparer les Sprints IA' },
  { icon: Scale, title: 'Le Sprint AI Act (3 h)', desc: "Pour les fonctions juridiques, qualité ou direction : situer l'entreprise comme fournisseur ou déployeur, lire l'article 4 tel que l'Omnibus l'a réécrit, la transparence due depuis août 2026, et le calendrier du haut risque, décalé à fin 2027.", href: '/formation-sprint-ia-ai-act', cta: 'Voir le Sprint IA AI Act' },
  { icon: FileSpreadsheet, title: 'Le Sprint Excel (3 h)', desc: "Un classeur que les participants ouvrent chaque semaine sert de matière : formules proposées par l'assistant, tableau croisé décrit en français, graphique de suivi, et les vérifications à faire avant de transmettre le moindre total.", href: '/formation-sprint-ia-excel', cta: 'Voir le Sprint IA Excel' },
  { icon: Radar, title: 'Le Sprint Veille (3 h)', desc: "Chacun choisit un sujet à surveiller, sélectionne ses sources et règle une recherche que l'assistant relance seul chaque semaine. La séance se termine sur une première note dont chaque lien a été ouvert et contrôlé.", href: '/formation-sprint-ia-veille', cta: 'Voir le Sprint IA Veille' },
  { icon: Wrench, title: "L'atelier métier (demi-journée à une journée)", desc: "Une équipe et ses livrables : devis, comptes rendus de chantier, réponses aux réclamations, fiches produit. L'atelier part de ces pièces et des modèles maison, puis laisse à l'équipe des demandes prêtes à resservir. Il ouvre souvent une formation complète par métier.", href: '/formation-intelligence-artificielle', cta: 'Parcourir les formations par métier' },
  { icon: Compass, title: "L'atelier cas d'usage, réservé à la direction (demi-journée)", desc: "La direction et quelques responsables listent les tâches où le temps s'évapore, puis les classent selon ce que l'IA peut en reprendre et ce qui reste de la responsabilité humaine. Ils repartent avec trois cas à lancer et la liste de ceux qu'ils écartent. Il précède souvent un diagnostic.", href: '/diagnostic-ia', cta: 'Voir le Diagnostic IA' },
]

/* ───────── Conférence / atelier / formation ───────── */

const TABLE = [
  { critere: 'Durée', conf: 'Une à deux heures', atelier: 'Trois heures, une demi-journée ou une journée', form: 'Une ou deux journées, parfois davantage' },
  { critere: 'Nombre de personnes', conf: "De vingt à plusieurs centaines", atelier: 'Douze au maximum, un poste chacun', form: 'Douze au maximum, réunis par métier' },
  { critere: 'Rôle des participants', conf: "Regarder, écouter, poser des questions", atelier: 'Manipuler leurs propres documents', form: "Manipuler, s'entraîner, passer une évaluation" },
  { critere: 'Ce qui reste après', conf: 'Un vocabulaire partagé et des idées d\'usage', atelier: 'Deux ou trois usages en place et une règle écrite', form: 'Des compétences vérifiées et un plan à trente jours' },
  { critere: 'Moment idéal', conf: "Le lancement, devant toute l'entreprise", atelier: 'Les semaines suivantes, service par service', form: "Pour les postes qui s'en serviront tous les jours" },
]

/* ───────── Déroulé ───────── */

const DEROULE = [
  { num: '01', title: 'Un quart d\'heure de repères', desc: "Ce que l'assistant réussit, où il se trompe, les règles de l'entreprise sur les données, et les gestes que la séance va installer. Les explications s'arrêtent là : la salle est venue pour pratiquer." },
  { num: '02', title: 'Un premier document traité ensemble', desc: "Chacun ouvre l'assistant sur la même pièce, le formateur montre une demande, puis chacun écrit la sienne. Les résultats sont comparés à l'écran, les erreurs repérées, les demandes reprises une à une." },
  { num: '03', title: 'Deux tâches personnelles, en autonomie', desc: "Les participants passent à leurs propres dossiers pendant que le formateur fait le tour des postes. C'est le temps le plus long de la séance, et celui où les gestes s'ancrent, parce que la tâche appartient à celui qui la mène." },
  { num: '04', title: 'Une mise en commun et un plan pour lundi', desc: "Les demandes qui ont réussi sont rassemblées dans un fichier partagé par l'équipe, chacun note deux usages à refaire dès le lundi, et une règle de cinq lignes clôt la séance." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Travailler sur des exemples fournis', desc: "Quand les cas viennent du formateur, personne ne reconnaît son travail et rien ne reste. Chaque participant apporte deux pièces de son poste, anonymisées si besoin, remises avant la séance." },
  { title: 'Remplir la salle', desc: "Au-delà de douze, le formateur ne passe plus derrière chaque écran et une partie du groupe regarde l'autre faire. Pour un grand effectif, la bonne réponse est une conférence suivie de plusieurs ateliers." },
  { title: "Découvrir les accès le matin même", desc: "Comptes non activés, version grand public à la place de la version professionnelle, réseau qui bloque l'outil : la première heure part en dépannage. Un essai d'accès une semaine avant, avec votre service informatique, évite ce scénario." },
  { title: 'Démontrer plus que pratiquer', desc: "Trois heures de démonstrations et un quart d'heure d'exercices produisent une salle impressionnée et des habitudes inchangées. Nous réservons au moins deux heures sur trois aux participants." },
  { title: "Laisser l'équipe seule ensuite", desc: "Sans fichier de demandes partagé, sans règle écrite ni interlocuteur pour les questions, les usages s'effacent en quelques semaines. Fixez la suite avant l'atelier, même réduite à un simple point d'étape le mois suivant." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Atelier intelligence artificielle : de quoi parle-t-on en entreprise ?", a: "C'est une séance de trois heures à une journée, en petit groupe, pendant laquelle chacun se sert d'un assistant d'IA générative sur ses propres documents : un devis à relancer, un compte rendu à condenser, un tableau à commenter, une procédure à réécrire. Le formateur explique peu et corrige beaucoup. Chez Masteria, l'atelier se termine par un fichier de demandes partagé et une règle d'usage ; les ateliers de trois heures portent le nom de Sprint IA." },
  { q: "Quels ateliers IA proposez-vous ?", a: "Six familles. Trois Sprints de fond, présentés ensemble : la découverte pour un public qui démarre, la méthode de demande pour ceux qui ont déjà l'outil, et la séance des managers. Trois Sprints thématiques avec leur propre programme : AI Act, Excel et veille. L'atelier métier, d'une demi-journée à une journée, construit sur les livrables d'une équipe. Enfin, la séance cas d'usage réunit la direction pour choisir où commencer. La combinaison la plus fréquente est un Sprint de découverte par service, puis un atelier métier pour les services en première ligne." },
  { q: "Combien de participants par atelier ?", a: "Douze au plus, chacun à son poste, pour que le formateur puisse relire la demande de chaque personne. Entre six et huit, l'atelier gagne en profondeur ; au-delà de douze, il glisse vers la démonstration. Une personne seule peut aussi suivre un Sprint, au même prix. Pour un effectif important, les séances s'enchaînent par service ou par site, parfois après une conférence en plénière." },
  { q: "Atelier IA ou conférence IA : que choisir ?", a: "La conférence convient à une assemblée nombreuse qui a besoin de comprendre : une à deux heures, des démonstrations, un vocabulaire commun. L'atelier quand un groupe doit savoir faire en sortant : trois heures à une journée, douze personnes, chacune sur ses dossiers. Les deux se complètent, la conférence lançant le mouvement et les ateliers l'installant service par service. Un public déjà convaincu peut passer directement à l'atelier." },
  { q: "Atelier IA ou formation IA : comment les distinguer ?", a: "L'atelier installe deux ou trois usages en une séance. La formation fait progresser chaque métier pendant un à deux jours, avec des exercices corrigés et une évaluation des acquis exigée par Qualiopi. L'atelier convient pour démarrer, pour un besoin précis ou pour un grand nombre de personnes ; la formation, pour les postes où l'IA restera ouverte du matin au soir. L'atelier métier d'une journée se situe à la frontière et ouvre souvent un parcours complet." },
  { q: "Sur quels outils travaille-t-on pendant l'atelier ?", a: "Sur l'outil auquel vos salariés ont accès, en version professionnelle : Claude, Gemini, ChatGPT, Vibe de Mistral AI ou Microsoft Copilot (anciennement Microsoft 365 Copilot). Si aucun n'est déployé, l'atelier fait tourner plusieurs assistants sur un même exercice, ce qui aide la direction à choisir. Masteria n'est lié à aucun éditeur. Un essai d'accès une semaine avant, avec votre service informatique, garantit que chaque poste fonctionne le jour venu." },
  { q: "Faut-il apporter ses propres documents ?", a: "Oui, c'est ce qui rend l'atelier utile. Chaque participant prépare deux ou trois pièces de sa semaine : un courrier à un client insatisfait, des notes de réunion, une offre chiffrée, un fichier de suivi. Les noms et les données confidentielles sont retirés avant, selon une consigne d'une page que nous fournissons. Un atelier bâti sur des exemples génériques s'oublie dans la semaine." },
  { q: "Combien coûte un atelier IA ?", a: "1 980 € HT la séance, quel que soit l'effectif jusqu'à douze, que l'atelier dure trois heures ou une journée : la version longue ajoute des cas et du temps de pratique, sans supplément de prix. Si l'atelier se tient chez vous, le trajet du formateur s'ajoute au prix coûtant ; en visio, ce poste disparaît. Le devis suit l'échange de cadrage, dans les 24 heures." },
  { q: "L'OPCO peut-il financer un atelier IA ?", a: "Oui, sous conditions. Chaque atelier possède les attributs d'une formation : objectifs, programme, émargement et attestation, et la certification Qualiopi de Masteria couvre la catégorie « actions de formation ». Votre opérateur de compétences étudie ensuite la demande et fixe lui-même le montant pris en charge ; nous préparons les pièces à vos côtés. Les droits CPF ne peuvent pas être mobilisés. Le simulateur Quel OPCO ? vous oriente en quelques clics." },
  { q: "Peut-on organiser un atelier IA à distance ?", a: "Oui, en classe virtuelle, aux mêmes conditions : douze participants au plus, chacun avec son assistant ouvert et ses documents prêts, un formateur qui reprend les écrans partagés. Le Sprint Excel, le Sprint Veille et la méthode de demande s'y prêtent bien ; l'atelier cas d'usage gagne à réunir la direction dans une même pièce. Les entreprises à plusieurs sites mêlent souvent une conférence à distance et des ateliers sur place." },
  { q: "Que devient l'atelier une fois terminé ?", a: "Les usages tiennent si quelque chose les entretient : le fichier de demandes partagé, la règle d'usage écrite, un référent pour les questions et un bilan trente jours plus tard. Nous proposons ce point sans l'imposer. Pour une équipe qui veut aller plus loin, une formation par métier ou une démarche d'acculturation prend la suite." },
]

/* ───────── Cas cités (études de cas, faits du 05/10) ───────── */

const CAS = [
  { id: 'conseil-financier', icon: Briefcase, titre: "Des consultants bâtissent leurs assistants d'appels d'offres en atelier", texte: "Dans un cabinet qui conseille les collectivités sur leurs financements, les consultants ont rédigé puis éprouvé, au fil de quatre séances de deux heures, les consignes de quatre assistants dédiés chacun à une famille de marchés publics, à partir de dossiers de consultation récents." },
  { id: 'industrie', icon: Factory, titre: 'Treize ateliers construits sur les fichiers d\'un groupe industriel', texte: "Pour les managers pilotes d'un groupe international du packaging, les exercices reprennent des fichiers internes : tarifs, volumes, coûts et effectifs dans Excel, diaporamas aux couleurs maison, et même un assistant qui remplit une fiche fournisseur depuis un message reçu." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Ateliers intelligence artificielle en entreprise (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/atelier-intelligence-artificielle',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/atelier-intelligence-artificielle#webpage' },
  serviceType: "Atelier pratique d'intelligence artificielle générative",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }, { '@type': 'Country', name: 'États-Unis' }, { '@type': 'Country', name: 'Inde' }],
  audience: { '@type': 'EducationalAudience', educationalRole: 'Équipes opérationnelles, managers, directions', audienceType: 'B2B' },
  offers: { '@type': 'Offer', price: '1980', priceCurrency: 'EUR', description: "1 980 € HT par séance de trois heures ou d'une journée, groupe plafonné à douze", availability: 'https://schema.org/InStock' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Ateliers IA proposés par Masteria",
    itemListElement: ATELIERS.map(a => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: a.title, description: a.desc } })),
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les quatre temps d'un atelier IA de trois heures",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, description: s.desc })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/atelier-intelligence-artificielle#article',
  headline: "Atelier intelligence artificielle : douze personnes, chacune sur ses dossiers",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/atelier-intelligence-artificielle#webpage' },
  about: [
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Atelier (formation)', sameAs: 'https://fr.wikipedia.org/wiki/Atelier_(r%C3%A9union)' },
  ],
}

const PAGE_CITATIONS = [
  { name: "Ministère du Travail : à quoi sert la certification Qualiopi d'un organisme de formation", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: "Ministère du Travail : rôle des OPCO dans le financement de la formation des salariés", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
  { name: "Le texte officiel de l'AI Act, que le Sprint AI Act fait lire aux participants", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
]

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function AtelierIAPage() {
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
    { name: 'Atelier intelligence artificielle', slug: SLUG },
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
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd]}
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Atelier intelligence artificielle</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lightbulb size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Formation · Ateliers IA</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Atelier intelligence artificielle :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>douze personnes, chacune sur ses dossiers</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · en ligne depuis septembre 2026, ateliers réorganisés le 7 octobre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un atelier intelligence artificielle Masteria réunit au plus douze personnes pendant trois heures à une journée, et <strong style={{ color: '#fff', fontWeight: 700 }}>chacune passe l'essentiel du temps à traiter ses propres documents avec l'assistant de l'entreprise, sous l'œil d'un formateur qui corrige</strong>. Six familles d'ateliers : trois Sprints de fond, les Sprints AI Act, Excel et Veille, l'atelier métier et l'atelier cas d'usage. L'OPCO de votre branche peut en financer une partie.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une conférence fait comprendre et une formation fait acquérir des compétences ; l'atelier fait faire, et vite. Il tient sa promesse à deux conditions : les participants gardent la main sur le clavier au moins deux heures sur trois, et chacun travaille sur une tâche qui l'attend au bureau.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Programmer un atelier
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#ateliers" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Parcourir les ateliers</a>
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

      {/* ── LES ATELIERS (éditorial asymétrique) ── */}
      <section id="ateliers" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les ateliers</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Quel atelier IA pour quel besoin ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Tous suivent la même règle : douze personnes au plus, un poste par personne, des documents apportés par les participants. Les trois Sprints de fond ouvrent le sujet, les Sprints AI Act, Excel et Veille traitent un thème précis, l'atelier métier part des livrables d'une équipe, et l'atelier cas d'usage aide la direction à choisir ses priorités.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les six formats de trois heures sont réunis sous le nom de <Link to="/formation-sprint-ia" style={aStyle}>Sprint IA</Link>. Quand un public nombreux doit d'abord comprendre avant de pratiquer, une <Link to="/conference-ia" style={aStyle}>conférence IA en entreprise</Link> ouvre la série.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {ATELIERS.map((item, i) => (
                <div key={i} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px', flex: 1 }}>{item.desc}</p>
                  <Link to={item.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700 }}>
                    {item.cta}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFÉRENCE / ATELIER / FORMATION (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le bon format</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Conférence, atelier ou formation : lequel choisir ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Tout dépend de ce que les participants doivent savoir faire en sortant. Regarder et comprendre : la conférence. Refaire seul deux ou trois tâches dès le lendemain : l'atelier. Maîtriser l'outil dans tout son métier, évaluation à l'appui : la formation. Une démarche d'acculturation enchaîne souvent les trois.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif conférence, atelier et formation IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  {['Critère', 'Conférence', 'Atelier', 'Formation'].map((h, i) => (
                    <th key={h} scope="col" style={{ background: i === 2 ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: i === 2 ? '#60A5FA' : '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: i === 0 ? '22%' : '26%' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.conf}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.atelier}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DÉROULÉ ── */}
      <section id="deroule" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Le déroulé</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Comment se déroule un atelier IA de trois heures ?</h2>
          <p style={answerStyle}>
            <strong>Un quart d'heure de repères, un premier document traité ensemble, puis deux tâches personnelles menées en autonomie, qui occupent la plus grande part de la séance, et une mise en commun pour finir. Une journée complète suit le même plan, avec davantage de dossiers et une mise en commun plus longue.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 12 }}>
            {DEROULE.map(step => (
              <div key={step.num} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Trois choses nous sont nécessaires avant la séance : un échange de cadrage avec la personne qui organise, deux documents par participant, et un essai des accès avec votre service informatique une semaine plus tôt.
          </p>
        </div>
      </section>

      {/* ── DEUX EXEMPLES (études de cas) ── */}
      <section id="exemples" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Deux missions où l'atelier a servi à construire</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un atelier bien préparé sert aussi à fabriquer : des consignes d'assistant, des modèles de demande, un premier outil. Dans les deux cas ci-dessous, ce que les participants ont produit en séance est resté en service après le départ du formateur.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {CAS.map(({ id, icon: Icon, titre, texte }) => (
              <div key={id} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 16 }}>{titre}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>{texte}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ ...aStyle, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Ouvrir le cas complet
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>À éviter</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Ce qui fait échouer un atelier IA</h2>
          <p style={answerStyle}>
            <strong>Des exemples fournis à la place des dossiers des participants, une salle trop pleine, des accès qui ne marchent pas le jour venu, trop de démonstration, et rien de prévu après. Nous croisons ces cinq écueils depuis 2022 ; tous se corrigent pendant la préparation.</strong>
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

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Un prix par séance, le même pour trois heures ou une journée</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Chaque atelier est facturé 1 980 € HT la séance, que la salle compte douze participants ou un seul. Que la séance dure trois heures ou une journée, le prix reste identique : la version longue apporte davantage de cas traités. Monté comme une action de formation brève, l'atelier ouvre droit à une demande de financement : l'OPCO dont dépend votre entreprise l'accepte en tout ou partie, d'après ses barèmes et ses réserves, et nous vous aidons à la constituer. Le compte personnel de formation (CPF) n'intervient pas. Pour connaître votre opérateur, essayez le simulateur <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['1 980 € HT par séance de groupe', 'Trois heures ou une journée, même prix', 'Demande OPCO montée ensemble', 'Devis envoyé sous 24 heures'].map(pt => (
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Atelier IA : les réponses aux questions pratiques</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Il vous manque une information ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Contactez l'équipe
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Avant et après un atelier</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Les formats qui le précèdent, ceux qui le prolongent, et les ressources qui en sortent.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Sprint IA', href: '/formation-sprint-ia', tag: 'Trois heures', desc: "Les six formats courts réunis sur une page, avec le déroulé type d'une séance." },
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Avant', desc: "Pour une salle nombreuse qui doit comprendre avant de manipuler." },
              { label: 'Sensibilisation IA', href: '/sensibilisation-ia', tag: 'Premier contact', desc: "Les trois manières d'ouvrir le sujet devant toute une entreprise." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Toute l\'organisation', desc: "Les ateliers inscrits dans un trimestre, avec référents et indicateurs." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Après', desc: "Une ou deux journées par métier, pour les équipes qui veulent aller au bout." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Ressource', desc: "Des demandes classées par métier, à reprendre après l'atelier." },
              { label: 'Formation IA débutant', href: '/formation-ia-debutant', tag: 'Premiers pas', desc: "Pour les personnes à qui un Sprint de découverte ne suffira pas." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Comparatif', desc: "Départager les assistants avant d'ouvrir les comptes de toute une équipe." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Règles', desc: "La règle d'usage remise à la fin de l'atelier, et comment l'étoffer." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Voir<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan, fondateur lyonnais de Masteria en 2022, anime une partie des ateliers ; les autres reviennent à l'un des vingt formateurs indépendants environ qui travaillent avec lui, choisis selon le métier des participants et la langue de la séance. Il a réorganisé cette page le 7 octobre 2026, après la fusion de trois Sprints ; <Link to="/mathias-nizan" style={aStyle}>son profil</Link> détaille son parcours.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Atelier intelligence artificielle</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Mettez vos équipes au clavier</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Précisez-nous qui participe, l'outil installé et ce que chacun doit savoir faire à la sortie. Nous vous proposons l'atelier adapté, la liste des documents à préparer et un devis indiquant la part que l'OPCO peut examiner.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un atelier IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Plus de 100 programmes au catalogue · animation possible en anglais · sur site ou en visio</p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (propres à la page) ── */}
      <section aria-labelledby="sources-atelier" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-atelier" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Pour vérifier ce que nous avançons</h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>Les pages officielles sur la certification, le financement par les OPCO et le règlement européen traité dans le Sprint AI Act.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
