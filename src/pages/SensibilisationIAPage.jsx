import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Users, GraduationCap, MapPin, Check, Presentation, Lightbulb,
  ShieldCheck, Landmark, MessagesSquare, BarChart3, Layers, Eye, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page hub « sensibilisation IA » (slug /sensibilisation-ia), côté FORMATION.
 * Créée le 2026-09-04 (Semrush du 03/09 : « sensibilisation ia », 90/mois, KD 9).
 * Réécrite le 2026-10-07 en texte propre (exigence ≥ 90 % de 6-grammes uniques).
 *
 * ANGLE PROPRE À CETTE PAGE : la première prise de conscience, le moment où toute
 * l'entreprise voit la même chose au même moment. Les pages voisines ont leur angle :
 * /acculturation-ia = l'organisation par vagues sur un trimestre ; /atelier-intelligence-
 * artificielle = la pratique en petit groupe ; /conference-ia = l'intervention devant un
 * grand public interne ; /coaching-ia = l'individuel.
 *
 * DÉCISION DU 07/10 : le Sprint IA Sensibilisation est fusionné dans le hub
 * /formation-sprint-ia (redirection 308). Aucun lien vers l'ancienne URL.
 *
 * FAITS : tarifs du brief commun du 07/10 (Sprint 1 980 € HT la séance de 3 h, douze
 * personnes au plus ou une seule ; conférence au forfait, sur devis). AI Act : fiche de
 * faits du 07/10, section 7 (article 4 réécrit par le règlement (UE) 2026/1744, applicable
 * depuis le 27/07/2026 ; aucun certificat, registre interne). Cas cité : mission
 * « interprofession-agricole » de src/data/missions-formation.js. Aucun client nommé.
 * Voix : verdict d'abord, phrases complètes, pas de tiret cadratin, pas de « séminaire ».
 */

const SLUG = 'sensibilisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Sensibilisation IA en entreprise : trois formats | Masteria"
const META_DESC = "Sensibilisation IA : vos salariés voient l'assistant maison réussir, se tromper, et savent quelles données lui refuser. Conférence, Sprint 3 h, vagues."
const KEYWORDS = "sensibilisation ia, sensibilisation intelligence artificielle, sensibilisation ia entreprise, sensibilisation ia générative, sensibilisation ia salariés, programme de sensibilisation ia, littératie ia sensibilisation, sensibilisation ia collectivité"

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
  { icon: GraduationCap, label: 'Action de formation certifiée Qualiopi' },
  { icon: Users, label: "D'une équipe de vingt à un groupe entier" },
  { icon: Sparkles, label: "Avec l'outil déjà fourni à vos équipes" },
  { icon: MapPin, label: 'Sur site (France, Europe, États-Unis, Inde) ou en visio' },
]

const EN_BREF = [
  { label: 'Objectif', value: "Que chaque salarié sache, au sortir de la séance, à quoi sert l'assistant mis à sa disposition, où il se trompe et quelles informations ne doivent jamais y entrer" },
  { label: 'Formats', value: "Une conférence d'une ou deux heures pour un public nombreux, un Sprint de trois heures où douze personnes pratiquent, ou un programme par vagues pour tout l'effectif" },
  { label: 'Contenu', value: "Démonstrations sur vos propres pièces, erreurs typiques de l'outil, tri des données, réponses aux inquiétudes, trois usages à refaire dans la semaine" },
  { label: 'Cadre', value: "Le texte européen sur l'IA, modifié à l'été 2026, veut que l'employeur agisse pour la maîtrise de l'IA de ses équipes ; une séance datée compte parmi ces actions" },
  { label: 'Prix', value: "1 980 € HT la séance de Sprint (trois heures) ; forfait sur devis pour la conférence ; le programme additionne les deux" },
  { label: 'Ensuite', value: "Une charte d'une page, puis, pour les services qui s'en serviront tous les jours, une formation d'une ou deux journées par métier" },
]

/* ───────── Les trois formats ───────── */

const FORMATS = [
  { icon: Presentation, title: 'La conférence de sensibilisation', desc: "Une ou deux heures, un public de toute taille, un intervenant qui fait la démonstration sur vos documents pendant que la salle observe et questionne. C'est le format pour qu'un grand nombre de personnes entende le même message le même jour.", href: '/conference-ia', cta: 'Découvrir la conférence IA' },
  { icon: Lightbulb, title: 'Le Sprint de trois heures', desc: "Au plus douze participants, installés chacun à un poste où l'outil de l'employeur est ouvert. Le formateur explique le fonctionnement de l'outil, puis chacun l'essaie sur une tâche de son poste. Le format Sensibilisation est présenté avec les autres Sprints IA, déroulé type de la séance compris.", href: '/formation-sprint-ia', cta: 'Voir les formats de Sprint IA' },
  { icon: Layers, title: 'Le programme par vagues', desc: "Quand plusieurs centaines de salariés sont concernés : une conférence d'ouverture, des Sprints répartis par site ou par service, un référent par équipe et un relevé des usages un mois plus tard. Ce programme ouvre une démarche d'acculturation plus large.", href: '/acculturation-ia', cta: "Lire la page acculturation IA" },
]

/* ───────── Ce que contient une sensibilisation ───────── */

const CONTENU = [
  { icon: Eye, title: "L'outil au travail, sur vos pièces", desc: "Un compte rendu condensé en dix lignes, une réponse à un client mécontent, un tableau commenté : l'intervenant traite devant le groupe des documents de l'entreprise, anonymisés et remis à l'avance. Chacun voit ce que l'assistant produit sur un dossier qu'il connaît." },
  { icon: ShieldCheck, title: "Les erreurs qu'il commet avec aplomb", desc: "Un modèle de langage prédit la suite la plus probable d'un texte : il écrit bien et invente parfois une date, un article de loi ou un chiffre sans le signaler. La séance montre trois erreurs de ce genre en direct, puis la manière de les repérer." },
  { icon: Scale, title: 'Les informations qui restent dehors', desc: "Données de santé, salaires, fichiers clients, contrats en négociation : la séance trace la frontière entre ce qui peut aller dans l'assistant professionnel, ce qui exige un compte d'entreprise et ce qui n'entre dans aucun outil. Cinq règles, écrites au tableau." },
  { icon: MessagesSquare, title: 'Les inquiétudes, dites à voix haute', desc: "Mon poste va-t-il disparaître, la direction lit-elle mes demandes, peut-on se fier au résultat ? Ces questions occupent les têtes pendant toute la séance si personne ne les traite. Nous leur réservons un temps, avec des réponses précises, même quand elles dérangent." },
  { icon: BarChart3, title: 'Trois gestes pour la semaine suivante', desc: "Chaque participant note trois usages qu'il refera dans les cinq jours ouvrés, sur l'outil fourni par l'employeur, avec la règle attachée à chacun. Sans ce dernier quart d'heure, la séance reste un bon souvenir sans effet sur le travail." },
]

/* ───────── Programme par vagues (timeline) ───────── */

const PROGRAMME = [
  { periode: 'Semaine 1', title: "L'encadrement voit la démonstration en premier", desc: "Une session courte réunit la direction et les managers : ce que l'outil fait sur leurs propres dossiers, les règles qu'ils devront faire respecter, les questions que leurs équipes leur poseront. Un manager qui a vu l'outil se tromper répond mieux à ces questions." },
  { periode: 'Semaines 2-3', title: "Une conférence d'ouverture pour tout l'effectif", desc: "Une plénière au siège, une session par site ou une diffusion à distance pour les agences. Chacun reçoit le même vocabulaire et les mêmes cinq règles ; les questions posées ce jour-là sont notées et orientent les Sprints suivants." },
  { periode: 'Semaines 3-8', title: 'Des Sprints de trois heures, service par service', desc: "Des groupes de douze, constitués par métier ou par site, pratiquent sur leur travail du moment. Ce qui marche dans une équipe sert d'exemple à la suivante, et les réticences entendues reçoivent une réponse avant la vague d'après." },
  { periode: 'Semaine 10', title: 'Une charte, des référents, un premier relevé', desc: "La charte tient sur une page, un référent par équipe recueille les questions, un questionnaire court mesure ce qui est devenu une habitude. La direction décide alors de s'arrêter là ou d'ouvrir des formations métier aux services les plus concernés." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Annoncer une séance de conformité', desc: "Une invitation qui parle de règlement européen et d'obligation remplit une salle de gens qui attendent la fin. Annoncez plutôt ce que la séance apporte à leur travail ; la trace utile pour l'article 4 vient en plus, avec l'émargement." },
  { title: 'Confier la séance à une vidéo en ligne', desc: "Quarante minutes de vidéo, un quiz, une attestation générée en fin de parcours : la case est cochée et personne n'a ouvert l'outil. La prise de conscience naît quand on voit l'assistant traiter un document de sa propre entreprise, puis se tromper dessus." },
  { title: 'Faire envie sans tracer de limite', desc: "Une séance enthousiaste qui oublie de parler des données envoie, dès le lundi suivant, des fichiers clients vers des comptes gratuits. Vingt minutes sur les cinq règles évitent cet accident, sans transformer la séance en cours de droit." },
  { title: 'Servir le même exposé à tous les publics', desc: "Un directeur financier, un chef d'atelier et une assistante commerciale n'attendent pas les mêmes exemples. La trame reste commune ; les pièces montrées et le niveau de détail changent selon la salle." },
  { title: 'Ne rien prévoir après la séance', desc: "Sans référent ni rendez-vous fixé, l'intérêt suscité s'éteint en trois semaines. Décidez la suite avant la première séance : une charte et un point à un mois suffisent souvent pour une petite structure." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Qu'est-ce qu'une sensibilisation à l'IA en entreprise ?", a: "C'est la première prise de contact organisée entre vos salariés et l'intelligence artificielle générative. En une à trois heures, elle montre ce que l'outil fourni par l'employeur produit sur des documents connus de tous, les erreurs qu'il commet, les informations qu'on ne lui confie jamais et les règles qui s'appliquent. Elle précède la formation, qui construit en un ou deux jours des compétences évaluées, métier par métier. Chez Masteria, chaque sensibilisation se termine par trois usages que chacun refera dans la semaine." },
  { q: "La sensibilisation à l'IA est-elle obligatoire ?", a: "Le texte européen sur l'IA (UE) 2024/1689 comporte, depuis le 2 février 2025, un article 4 consacré à la maîtrise de l'IA, que beaucoup appellent littératie IA. L'Omnibus de juillet 2026, règlement 2026/1744, en a changé la rédaction à compter du 27 de ce mois : l'employeur qui utilise l'IA agit pour que son personnel acquière cette maîtrise. L'obligation porte sur les moyens, ne fixe aucun seuil par salarié et n'exige aucun certificat. Une sensibilisation datée, avec émargement et attestation, est une mesure que vous inscrivez dans votre registre interne. Elle ne justifie aucune menace d'amende." },
  { q: "Quel format choisir : conférence, atelier ou programme ?", a: "Tout dépend du nombre de personnes et de ce qu'elles doivent faire en sortant. Pour une salle nombreuse à qui il faut d'abord expliquer, la conférence d'une ou deux heures. Pour un groupe de douze qui doit repartir en sachant se servir de l'outil, le Sprint de trois heures. Pour un effectif entier, le programme par vagues, qui combine les deux avec des référents. Les trois s'enchaînent souvent, dans cet ordre." },
  { q: "Combien de personnes peut-on sensibiliser ?", a: "La conférence accueille de vingt personnes à plusieurs centaines, et davantage à distance. Le Sprint plafonne à douze participants, le nombre au-delà duquel le formateur ne peut plus relire la demande de chacun. Pour un effectif de 300 salariés, un programme typique prévoit une conférence d'ouverture puis vingt-cinq Sprints répartis sur deux mois. Nos publics vont de la direction générale d'un industriel du packaging aux seize salariés d'une interprofession agricole." },
  { q: "Sur quels outils porte la sensibilisation ?", a: "Sur l'outil que vous avez mis entre les mains de vos équipes, dans la version achetée : Microsoft Copilot (anciennement Microsoft 365 Copilot), ChatGPT, Claude, Gemini ou Vibe de Mistral AI. Si aucun outil n'est encore choisi, la même tâche passe devant plusieurs assistants, et la direction dispose ainsi d'éléments pour décider. Masteria ne revend aucune licence et ne reçoit rien des éditeurs." },
  { q: "La sensibilisation tient-elle compte de notre activité ?", a: "La trame varie peu d'un client à l'autre ; les démonstrations, elles, sont construites sur vos pièces. Lors du cadrage, nous vous demandons quelques pièces anonymisées, trois à cinq : un mode opératoire, un modèle de lettre, un état mensuel, une proposition chiffrée. Le vocabulaire et les exemples suivent le public, d'une direction générale à une équipe de production." },
  { q: "Combien coûte une sensibilisation à l'IA ?", a: "Un Sprint de trois heures se facture 1 980 € HT, que douze personnes y assistent ou une seule. Pour la conférence, nous chiffrons un forfait équivalent à une demi-journée de l'intervenant, préparation des démonstrations comprise ; son montant est indiqué dans le devis. Un programme par vagues additionne ces briques. Le déplacement du formateur est facturé au prix coûtant ; à distance, il n'y en a pas." },
  { q: "L'OPCO peut-il prendre en charge une sensibilisation ?", a: "Oui, si elle suit le format d'une action de formation : objectifs écrits, programme, émargement, attestation. La certification Qualiopi de Masteria, délivrée au titre des actions de formation, ouvre l'examen d'une demande par l'OPCO dont relève votre entreprise, qui tranche d'après ses propres règles et l'argent disponible. Le CPF ne finance pas ces séances. Une conférence ouverte à un public extérieur à l'entreprise sort de ce cadre." },
  { q: "Faut-il sensibiliser les dirigeants à part ?", a: "Oui, et avant les équipes. Un dirigeant se demande quelles règles fixer, quel budget engager et quels risques accepter ; un opérateur se demande ce qui change dans sa journée. Une session courte pour la direction et l'encadrement, une ou deux semaines avant la conférence d'ouverture, permet aux managers de répondre aux questions de leurs équipes. Un comité qui doit arbitrer une feuille de route trouvera plutôt son format dans la matinée de formation IA COMEX." },
  { q: "Et après la sensibilisation, que prévoir ?", a: "Au minimum, une charte tenant sur une page, plus un rendez-vous le mois suivant pour voir quels usages ont pris. Souvent, des référents par équipe, puis une ou deux journées de formation dans les services qui utiliseront l'IA tous les jours : c'est le début d'une démarche d'acculturation. Nous recommandons une suite quand elle sert, et nous disons quand la sensibilisation suffit pour l'instant." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Sensibilisation IA en entreprise (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/sensibilisation-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/sensibilisation-ia#webpage' },
  serviceType: "Sensibilisation à l'intelligence artificielle générative",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }, { '@type': 'Country', name: 'États-Unis' }, { '@type': 'Country', name: 'Inde' }],
  audience: { '@type': 'EducationalAudience', educationalRole: "Dirigeants, managers, équipes opérationnelles", audienceType: 'B2B' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formats de sensibilisation IA',
    itemListElement: FORMATS.map(f => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: f.title, description: f.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/sensibilisation-ia#termes',
  name: 'Sensibilisation IA : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Sensibilisation IA', description: "Première rencontre organisée entre les salariés et l'IA générative : démonstrations sur des pièces internes, erreurs typiques, tri des données et règles d'usage, en une à trois heures." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Nom courant de la maîtrise de l'IA visée par l'article 4 du règlement européen : savoir utiliser un outil d'IA, en connaître les limites et juger ce qu'il produit. Obligation de moyens pour les entreprises utilisatrices." },
    { '@type': 'DefinedTerm', name: 'Programme par vagues', description: "Organisation d'une sensibilisation pour un effectif entier : conférence d'ouverture, Sprints de trois heures par service, référents et relevé des usages à un mois." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/sensibilisation-ia#article',
  headline: "Sensibilisation IA en entreprise : le jour où toute l'équipe voit l'outil travailler",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/sensibilisation-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Littératie IA', description: "Notion visée par l'article 4 du texte européen sur l'IA, dans sa version modifiée en 2026" },
  ],
}

const PAGE_CITATIONS = [
  { name: "Règlement 2024/1689 : le texte européen de référence sur l'IA, sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement 2026/1744, dit Omnibus IA : le texte qui a modifié l'article 4 (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Mission innovation du ministère de l'Économie : acculturer à l'IA en partant du réel", url: 'https://www.economie.gouv.fr/mission-innovation/acculturer-lia-partir-du-reel-experimenter-partager' },
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

export default function SensibilisationIAPage() {
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
    { name: 'Sensibilisation IA', slug: SLUG },
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Sensibilisation IA</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Formation · Sensibilisation IA</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Sensibilisation IA en entreprise :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le jour où toute l'équipe voit l'outil travailler</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur du cabinet · mis en ligne en septembre 2026, revu le 7 octobre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une sensibilisation IA est la première fois que vos salariés voient, ensemble, <strong style={{ color: '#fff', fontWeight: 700 }}>l'assistant de l'entreprise traiter un de leurs documents, se tromper sur un autre, et la frontière tracée entre ce qu'on peut lui confier et ce qui reste dehors</strong>. Elle prend la forme d'une conférence, d'un Sprint de trois heures ou d'un programme par vagues. Masteria est certifiée Qualiopi pour ses actions de formation.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Dans la plupart des entreprises, l'IA est déjà là : quelques curieux s'en servent sur des comptes personnels, beaucoup n'osent pas, et chacun s'en fait une idée différente. La sensibilisation remet chacun sur la même ligne de départ, avec les mêmes mots et les mêmes règles. Elle figure aussi parmi les actions qu'attend d'une entreprise utilisatrice le règlement européen sur l'IA, en son article 4.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Organiser une sensibilisation
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Comparer les trois formats</a>
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

      {/* ── LES TROIS FORMATS (éditorial asymétrique) ── */}
      <section id="formats" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les formats</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Quel format de sensibilisation IA pour quel public ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Le nombre de personnes décide. Une conférence fait passer un message à une salle entière, un Sprint de trois heures fait pratiquer douze personnes, un programme par vagues touche un effectif complet en quelques semaines. L'échange de cadrage sert à choisir, et souvent à combiner.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les salariés appelés à utiliser l'IA au quotidien poursuivent ensuite avec les <Link to="/formation-intelligence-artificielle" style={aStyle}>formations IA par métier</Link>, d'une ou deux journées.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {FORMATS.map((item, i) => (
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
              <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                <div style={{ marginBottom: 14 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>L'article 4 attend une première mesure</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                  Dans la version issue de l'Omnibus de l'été 2026, en vigueur le 27 juillet, l'article 4 demande à l'entreprise de former son personnel aux outils d'IA qu'elle lui met entre les mains. Une sensibilisation datée compte parmi ces mesures ; les salariés qui s'en servent tous les jours ont besoin, en plus, d'une vraie formation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENU (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le contenu</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Que contient une sensibilisation à l'IA qui laisse une trace ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Cinq moments reviennent dans chaque format : l'outil à l'œuvre sur vos documents, ses erreurs montrées en direct, les informations qu'on ne lui confie pas, les inquiétudes traitées à voix haute et trois gestes à refaire dans la semaine. Une séance qui en saute un se remarque le lundi suivant.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {CONTENU.map(item => {
              const Icon = item.icon
              return (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME PAR VAGUES ── */}
      <section id="programme" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Toute l'organisation</Kicker>
          <h2 style={h2Style}>Comment sensibiliser toute une entreprise à l'IA ?</h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>En dix semaines pour une entreprise de quelques centaines de salariés, et dans cet ordre : l'encadrement d'abord, une conférence d'ouverture ensuite, des Sprints service par service, puis une charte, des référents et un premier relevé. Une PME de trente personnes peut resserrer ce parcours sur deux ou trois semaines.</strong>
          </p>
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PROGRAMME.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === PROGRAMME.length - 1 ? '18px 0 0' : '18px 0') }}>
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
            Une interprofession agricole a suivi ce chemin en septembre 2026 pour seize salariés de niveau débutant : une première journée en plénière, consacrée à une méthode de demande et à la comparaison de six assistants sur des textes que la filière publie, puis deux journées d'atelier par métier. Le déroulé figure dans nos <Link to="/etudes-de-cas-ia#mission-interprofession-agricole" style={aStyle}>missions de formation récentes</Link>. Quand l'organisation veut aller au-delà, la démarche d'<Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> organise la suite sur un trimestre.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que nous évitons</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Cinq façons de gâcher une sensibilisation IA</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une invitation qui parle d'obligation, une vidéo à la place d'une démonstration, une séance sans limites tracées, le même exposé pour tous et rien de prévu ensuite. Nous les voyons revenir depuis 2022 ; chacune se règle pendant la préparation, avant que le premier participant entre dans la salle.</strong>
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
      <section id="tarif" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Deux briques chiffrées, que l'OPCO peut prendre en charge</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le Sprint de trois heures est facturé 1 980 € HT, pour un groupe complet comme pour une personne seule, soit 165 € HT par participant quand les douze places sont prises. La conférence se règle au forfait, établi sur une demi-journée de l'intervenant, construction des démonstrations comprise. Un programme par vagues additionne ces deux briques. Montée comme une action de formation, chaque séance peut être soumise à votre opérateur de compétences, seul juge de la prise en charge ; Masteria s'occupe du dossier à vos côtés. Aucune prise en charge n'est possible par le CPF. Pour savoir de quel opérateur vous dépendez, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> l'indique à partir de votre secteur d'activité.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Trois heures de Sprint : 1 980 € HT', 'Conférence : forfait indiqué au devis', 'Déplacement du formateur au coût réel', 'Dossier OPCO monté avec vous'].map(pt => (
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Sensibilisation IA : vos questions avant de vous lancer</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Une question reste sans réponse ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Les pages qui prolongent une sensibilisation</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Le détail de chaque format, la suite pour les équipes motivées et les règles à écrire.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Grand public interne', desc: "Le déroulé d'une intervention devant toute l'entreprise, temps par temps, et sa préparation." },
              { label: 'Sprints IA de trois heures', href: '/formation-sprint-ia', tag: 'Atelier court', desc: "Les six formats de Sprint, dont la Sensibilisation, avec leur prix et leur programme." },
              { label: 'Atelier intelligence artificielle', href: '/atelier-intelligence-artificielle', tag: 'Pratiquer', desc: "Des séances où chaque participant traite ses propres pièces, d'une matinée à une journée entière." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Sur un trimestre', desc: "La démarche qui suit pour une organisation entière : vagues, référents, mesure des usages." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Direction', desc: "La formation d'une matinée où le comité arbitre, avant que la sensibilisation s'ouvre aux équipes." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Règles', desc: "Ce que doit contenir la page de règles remise à la fin de chaque séance." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Réglementation', desc: "Le règlement européen expliqué en détail pour les personnes qui portent la conformité." },
              { label: 'Formation IA débutant', href: '/formation-ia-debutant', tag: 'Premiers pas', desc: "Pour les salariés peu à l'aise avec l'ordinateur, qui ont besoin de plus de temps." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Ouvrir la page<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
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
            Fondateur de Masteria, cabinet lyonnais né en 2022, Mathias Nizan anime lui-même une bonne part des sensibilisations ; une vingtaine de formateurs indépendants du réseau prennent le relais selon la région, la langue de la séance ou le calendrier. Cette page porte sa relecture du 7 octobre 2026, et <Link to="/mathias-nizan" style={aStyle}>sa page de présentation</Link> retrace son parcours.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Sensibilisation IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Faites partir toute l'équipe sur la même ligne</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Indiquez-nous le nombre de salariés concernés, l'assistant qu'ils ont entre les mains et l'échéance qui vous presse. Notre réponse arrive sous 24 heures : le format conseillé, un calendrier et un devis où figure la part que l'OPCO pourra étudier.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Parler de votre sensibilisation
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Masteria, Lyon · Europe · États-Unis · Inde · sur site ou en visio</p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (propres à la page) ── */}
      <section aria-labelledby="sources-sensibilisation" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-sensibilisation" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Les textes cités sur cette page</h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>Le règlement européen et sa réécriture de juillet 2026, la certification de Masteria et la fiche du ministère de l'Économie sur l'acculturation.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {[
              ...PAGE_CITATIONS,
              { name: "Qualiopi, la marque de certification des organismes de formation (ministère du Travail)", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
            ].map(s => (
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
