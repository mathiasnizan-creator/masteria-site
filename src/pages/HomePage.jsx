import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  BadgeCheck, ShieldCheck, Layers, Phone, Mail,
  ArrowRight, ShoppingCart, Handshake, Code2, Plus, Clock, Globe,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolLogo from '../components/ToolLogo'
import CadrageLink from '../components/CadrageLink'
import EquipeMasteria from '../components/EquipeMasteria'
import ParcoursExpertises from '../components/ParcoursExpertises'
import AvisGoogle from '../components/AvisGoogle'
import { HUBS, METIERS } from '../data/catalog-meta'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page d'accueil, refondue le 02/10/2026 (audit conseil/dev, puis passe design) :
 * Masteria s'y présente comme un cabinet IA à trois métiers, dans cet ordre :
 * penser (audit, conseil), construire (outils et agents sur mesure), transmettre
 * (formation certifiée Qualiopi). Composition éditoriale : colonnes asymétriques,
 * filets, chiffres tirés des études de cas publiées. Fond clair, un seul accent
 * (le bleu #2563EB) ; l'orange #EA580C ne sert qu'aux boutons principaux, comme
 * sur l'ancienne home (Mathias, 02/10 : « trop bariolé entre le bleu et le orange »).
 * Logo Qualiopi : fichier officiel, largeur fixée et hauteur libre (jamais
 * déformé), 23 mm de large au minimum selon la charte, soit 87 px ou plus.
 * INTÉGRITÉ : tous les chiffres viennent de src/data/etudes-de-cas.js ou de faits
 * déjà publiés ; aucun nom de client.
 * TEXTE PROPRE (07/10/2026) : la méthode, la FAQ, les missions, le bloc équipe, le mot
 * du fondateur et la liste des métiers sont écrits ici pour la home, au lieu de
 * reprendre METHODE_COMMUNE, FAQ_GENERAL, les teasers des cas ou FounderNote, copiés
 * sur des dizaines de pages. Faits à jour au 7 octobre 2026 ; plus de « +1 500 ».
 */

const TOOL_HUBS = HUBS.filter(h => h.id !== 'metiers')

const c = '#2563EB'
const cLight = '#DBEAFE'
const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'
const o = '#EA580C' // orange : réservé aux boutons principaux, comme sur l'ancienne home
const BEIGE = '#F5F3EE'
const BLEU_FILET = '#BFDBFE' // filets des sections sur fond bleu clair
const SECTION_PAD = 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px)'
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900, letterSpacing: '-0.025em', color: INK, lineHeight: 1.12, margin: '0 0 18px' }
const leadStyle = { fontSize: 17, color: TEXT, lineHeight: 1.75, margin: 0 }

const METIER_ICONS = {
  marketing: Megaphone,
  'ressources-humaines': Users,
  finance: TrendingUp,
  commercial: Briefcase,
  juridique: Scale,
  communication: Radio,
  management: Target,
  assistante: CalendarCheck,
  seo: Search,
  'service-client': Headphones,
  informatique: Server,
  pedagogique: GraduationCap,
  achats: ShoppingCart,
  transverse: Layers,
}

/* Sous-titres courts des hubs formation, pour la liste de la home (noms d'outils au
   7 octobre 2026 : ChatGPT Business, Microsoft Copilot, Gemini Notebook, Vibe). Ils
   servent aussi de description aux cours du JSON-LD de la page. */
const TOOL_LIGNES = {
  chatgpt: 'Projets partagés, Skills et analyse de fichiers sur ChatGPT Business',
  copilot: 'Copilot dans Outlook, Teams, Excel, Word et PowerPoint',
  gemini: 'Gmail, Docs, Sheets et Gemini Notebook dans Google Workspace',
  claude: 'Documents longs, analyse fine, projets et artefacts',
  mistral: "Vibe, avec des données stockées dans l'UE sauf demande contraire",
  'sprint-ia': 'Ateliers de 3 h, de 12 à 500 collaborateurs',
  'multi-outils': "Tester cinq assistants sur vos cas avant d'en retenir un",
}

/* Métiers, regroupés par famille et nommés pour la home : la liste brute de
   catalog-meta.js est reprise telle quelle sur une quarantaine de pages. */
const METIERS_HOME = [
  ['commercial', 'Vente et prospection'],
  ['marketing', 'Marketing'],
  ['communication', 'Communication et relations presse'],
  ['seo', 'Référencement et contenus web'],
  ['service-client', 'Relation client'],
  ['commerce', 'Magasins et e-commerce'],
  ['ressources-humaines', 'RH et recrutement'],
  ['finance', 'Finance et contrôle de gestion'],
  ['comptabilite', 'Services comptables'],
  ['achats', 'Achats et fournisseurs'],
  ['juridique', 'Juristes'],
  ['assistante', 'Assistanat de direction'],
  ['management', 'Managers'],
  ['gestion-de-projet', 'Chefs de projet'],
  ['informatique', 'DSI et équipes IT'],
  ['qse', 'Qualité, sécurité, environnement'],
  ['pedagogique', 'Équipes de formation'],
  ['marche-public', "Appels d'offres publics"],
  ['immobilier', 'Agents immobiliers et syndics'],
  ['sante', 'Santé et médico-social'],
  ['assurance', 'Assureurs'],
  ['btp', 'BTP'],
  ['tourisme', 'Hôtellerie et tourisme'],
  ['transverse', 'Tous les collaborateurs'],
].map(([slug, label]) => ({ slug, label, desc: METIERS.find(m => m.slug === slug)?.desc }))

/* Bandeau sous le hero (Mathias, 02/10/2026) : deux reconnaissances (badge officiel
   Activateur France Num, logo Les Échos) et deux repères avec picto. Qualiopi n'y figure
   plus : la carte du hero le porte déjà. */
const BANDEAU = [
  { id: 'francenum', href: 'https://www.francenum.gouv.fr/activateurs/masteria', label: 'Référencé pour accompagner les TPE et PME dans leur transition numérique' },
  { id: 'lesechos', to: '/presse', label: "Mathias Nizan y explique comment choisir un outil d'IA, métier par métier" },
  { id: 'programmes', Icon: GraduationCap, titre: 'Plus de 100 programmes', to: '/formation-intelligence-artificielle', label: 'de formation IA, par outil et par métier' },
  { id: 'international', Icon: Globe, titre: 'International', label: 'Des missions conduites en Europe, aux États-Unis comme en Inde' },
]

/* Logos clients, affichés à la demande de Mathias (02/10/2026). Hauteurs réglées à l'œil. */
const CLIENTS = [
  { name: 'Albéa', src: '/assets/clients/albea.png', webp: '/assets/clients/albea.webp', h: 34, w: 91 },
  { name: 'EET', src: '/assets/clients/eet.png', webp: '/assets/clients/eet.webp', h: 44, w: 67 },
  { name: 'Signarama', src: '/assets/clients/signarama.svg', h: 40, w: 91 },
]
const SECTEURS_LIGNE = "ainsi que des entreprises de toutes tailles, de la PME au groupe international, dans l'industrie, la distribution, l'énergie, l'immobilier, l'assurance, le conseil et la santé"

/* Offres conseil et développement, déclarées en ItemList (JSON-LD) ; les liens visibles
   sont portés par le parcours des expertises et la section « Explorer Masteria ». */
const SERVICES_CONSEIL_DEV = [
  ['Audit IA', '/audit-ia'],
  ['Diagnostic IA', '/diagnostic-ia'],
  ['Conseil en stratégie IA', '/conseil-strategie-ia'],
  ['Gouvernance et AI Act', '/gouvernance-ia'],
  ['Accompagnement IA', '/accompagnement-ia'],
  ['Agence de développement IA', '/agence-developpement-ia'],
  ['Outils IA sur mesure', '/outils-ia-sur-mesure'],
  ['Agents IA en entreprise', '/agents-ia-entreprise'],
  ["Agence d'automatisation IA", '/agence-automatisation-ia'],
  ['Solutions IA par type de livrable', '/solutions-ia'],
]

/* Méthode en six temps, écrite pour la home : mêmes étapes que METHODE_COMMUNE
   (data/etudes-de-cas.js), formulées autrement pour ne pas recopier le texte des
   études de cas et des pages agences. */
const METHODE_HOME = [
  { num: '01', title: 'Fixer le cadre avec la direction', desc: "Nous établissons avec vous pourquoi la demande arrive maintenant, ce qui entre dans le périmètre et ce qui en sort, et la décision que vous attendez au bout. Toute la mission se règle ensuite sur ce cadrage." },
  { num: '02', title: 'Regarder comment le travail se fait', desc: "Nous interrogeons les équipes qui font le travail au quotidien et décrivons chaque flux, tâche par tâche\u00a0: logiciels en place, ressaisies, usages de l'IA apparus sans règle." },
  { num: '03', title: 'Classer les gains possibles', desc: "Chaque gisement de temps, une tâche où l'IA peut vous rendre des heures, reçoit un volume déclaré, une difficulté, ses dépendances et une place dans les trois prochains mois. Ce que nous écartons reste noté, avec la raison." },
  { num: '04', title: 'Construire sur vos propres fichiers', desc: "Assistants, agents et ateliers partent de vos documents, de vos logiciels et de vos données. Chaque outil a un porteur, et une personne valide chaque décision qui engage l'entreprise." },
  { num: '05', title: 'Former chaque métier, écrire les règles', desc: "Chaque fonction s'entraîne sur ses propres cas. Une charte d'usage écrite, un référent dans l'équipe et des supports consultables après la session gardent la compétence chez vous." },
  { num: '06', title: 'Mesurer, puis lancer la vague suivante', desc: "Nous relevons les points de départ en séance et les revoyons à J+30. Le bilan, à chaud puis à froid, désigne ce qui mérite une deuxième vague." },
]

/* Bloc équipe : textes propres à la home, passés au composant partagé EquipeMasteria
   (ses textes par défaut restent ceux de /mathias-nizan). */
const EQUIPE_HOME = {
  titre: 'Votre projet réunit les profils dont il a besoin',
  intro: "Mathias Nizan dirige chaque mission de bout en bout. Il s'entoure d'indépendants expérimentés, appelés selon le besoin\u00a0: une dizaine de consultants IA, cinq développeurs spécialisés en IA environ et près de vingt formateurs. Chacun entre au moment où son métier sert le projet.",
  fondateurLigne: 'Fondateur · pilote de chaque mission',
  lignes: [
    "Ils conduisent les audits, construisent la stratégie et les règles de gouvernance, puis aident vos équipes à changer leur façon de travailler, dans toute la France.",
    "Ils conçoivent les agents (des assistants qui enchaînent seuls plusieurs tâches), les automatisations et les assistants qui lisent vos documents, puis les relient à votre CRM (le fichier clients) ou à votre ERP (le logiciel de gestion). Ils peuvent travailler dans vos locaux.",
    "Praticiens autant que pédagogues, ils animent les parcours par outil et par fonction, sur les dossiers de vos équipes.",
  ],
  tableauTitre: 'Les profils engagés selon le type de projet',
  legende: { coeur: 'rôle principal', appui: 'en renfort', absent: 'pas mobilisé' },
  caption: 'Rôle de chaque profil Masteria selon le type de projet',
  colonnes: ['Pilotage', 'Conseil', 'Développement', 'Formation'],
  projets: ['Audit, diagnostic ou conseil', 'Outil ou agent construit pour vous', 'Formation de vos équipes'],
  note: "Cette répartition est indicative et se fixe au cadrage. Vous n'avez qu'un interlocuteur\u00a0: Masteria signe le contrat, répartit le travail entre les intervenants et en répond.",
}

/* Études de cas, en liste discrète plus bas dans la page. Une ligne écrite pour la
   home par cas (faits de data/etudes-de-cas.js, révisés le 05/10/2026), lien vers
   l'ancre du cas. Ce qui est à venir s'écrit au futur ou « prévu ». */
const CAS_HOME = [
  {
    id: 'industrie',
    secteur: 'Packaging · groupe international',
    titre: 'Microsoft Copilot déployé par paliers, des managers pilotes aux sites étrangers',
    ligne: "De juillet à septembre 2026, les managers ont suivi cinq sessions de deux jours, deux d'entre elles en anglais, et le comité de direction a eu sa matinée stratégique. Les sites américains et mexicains sont prévus en octobre 2026, les sites indiens en décembre.",
  },
  {
    id: 'photovoltaique',
    secteur: 'Énergie solaire · PME de distribution',
    titre: 'Vendre davantage avec la même équipe de trois personnes, en suivant un plan sur 90 jours',
    ligne: "Trois entretiens et quatre flux cartographiés ont fait ressortir douze gisements de temps, dont trois chantiers prioritaires restitués en septembre 2026 à la direction. La formation sur site, sur deux jours, aura lieu en octobre, avant une première mesure des gains.",
  },
  {
    id: 'conseil-financier',
    secteur: 'Conseil financier · marchés publics',
    titre: "Des assistants qui interrogent le consultant avant d'écrire un mémoire",
    ligne: "Un assistant pour chaque famille de marchés publics, quatre en tout, conçus avec les consultants au fil de quatre ateliers de deux heures et alimentés par les mémoires notés le plus haut par les jurys et par les références du cabinet.",
  },
  {
    id: 'distribution',
    secteur: 'Distribution informatique · 58 salariés',
    titre: "Dix référents formés à Claude, avant un déploiement dans toute l'entreprise",
    ligne: "Formés en deux jours en juin 2026, les référents ont conçu avec Masteria onze compétences Claude (des procédures que l'assistant applique de lui-même), notamment pour la cotation, les stocks, les relances de devis et les cahiers des charges à remplir. Les autres collaborateurs y auront accès d'octobre à décembre 2026, au fil du déploiement.",
  },
]

/* Par où commencer : l'offre d'entrée, identique sur tout le site (data/offre-entree.js). */
const ETAPES = [
  { n: '1', badge: 'Offert', title: '30 minutes de cadrage', desc: "Un échange en visio ou au téléphone\u00a0: vous décrivez votre activité et vos attentes envers l'IA, nous vous indiquons le premier pas utile." },
  { n: '2', badge: 'Au forfait', title: 'Le Diagnostic IA', desc: "Des ateliers avec vos équipes repèrent les usages utiles, les classent selon leur effet et l'effort qu'ils demandent, puis les chiffrent dans une feuille de route. Durée et forfait se fixent au cadrage." },
  { n: '3', badge: 'Sur devis', title: 'Le projet', desc: "La feuille de route indique la suite\u00a0: un audit plus poussé, un outil à construire, un accompagnement ou une formation. Le code et les livrables restent votre propriété." },
]

const ENGAGEMENTS = [
  { Icon: Handshake, title: 'Indépendant des éditeurs', desc: "Aucune commission d'éditeur\u00a0: l'outil conseillé dépend de votre cas, de votre budget et de vos contraintes." },
  { Icon: Code2, title: 'Le code vous appartient', desc: 'Code source, prompts, documentation\u00a0: tout vous est remis à la livraison.' },
  { Icon: Users, title: 'Ceux qui construisent forment', desc: "Les personnes qui ont bâti l'outil apprennent à vos équipes à l'utiliser, pour que l'usage dure après le pilote." },
  { Icon: ShieldCheck, title: 'Conformité dès le cadrage', desc: "La protection des données personnelles (RGPD) et les règles de l'AI Act sont examinées dès le premier atelier. Un accord de confidentialité est signé si vous le souhaitez." },
]

/* FAQ de la home, écrite pour elle (07/10/2026) : conseil et développement d'abord,
   puis la formation. Elle remplace FAQ_GENERAL (screens2.jsx), copiée sur plus de cent
   pages. Le JSON-LD FAQPage reprend ce tableau tel quel (SEOHead, faqItems). */
const FAQ_HOME = [
  { q: "Combien coûte un projet d'IA avec Masteria\u00a0?", a: "Les 30 minutes de cadrage sont offertes. Le Diagnostic IA est un forfait\u00a0: sa durée et son prix se fixent pendant ce cadrage, d'après votre périmètre. Un audit ou un développement se chiffre sur devis, au forfait\u00a0: un prototype démarre à quelques milliers d'euros, un outil en production se compte en dizaines de milliers, et un grand déploiement commence au-delà de 100 000 € et peut monter, selon son ampleur, à plusieurs centaines de milliers. Ces prestations ne sont pas finançables par votre OPCO. Côté formation, le tarif est simple\u00a0: 1 980 € HT la journée\u00a0; l'OPCO de votre branche décide de sa prise en charge selon ses règles et ses fonds." },
  { q: 'Qui est propriétaire des outils que Masteria développe\u00a0?', a: "Vous. Code source, documentation, prompts et livrables vous reviennent en fin de projet. Vos équipes apprennent à se servir de l'outil, et vous restez libres de le faire évoluer seuls ou avec un autre prestataire." },
  { q: 'En combien de temps un premier outil est-il utilisable\u00a0?', a: "Une première version qui rend déjà service, ou un simple prototype, demande quelques semaines. Le délai tient à la complexité du cas et à l'état de vos données. Le cas prioritaire est livré en premier, puis l'outil s'étend aux suivants." },
  { q: 'Faut-il commencer par un audit ou par une formation\u00a0?', a: "Le cadrage de 30 minutes sert à trancher. Si vous ne savez pas encore où l'IA vous ferait gagner du temps, commencez par le Diagnostic IA, qui le montre flux par flux. Si les usages sont connus et que vos équipes doivent apprendre, la formation peut démarrer tout de suite." },
  { q: 'Que couvre votre certification Qualiopi\u00a0?', a: "La formation. Le certificat Qualiopi de Masteria couvre une seule catégorie, les actions de formation, et c'est lui qui permet à votre OPCO d'étudier une prise en charge. L'audit, le conseil et le développement d'outils sortent de ce périmètre\u00a0: ils se règlent au forfait, sans financement de l'OPCO." },
  { q: "Comment l'OPCO finance-t-il une formation\u00a0?", a: "L'opérateur de compétences (OPCO) de votre branche finance la formation selon ses règles et ses fonds\u00a0: mieux vaut l'interroger avant de fixer les dates. Nous préparons le programme, la convention de formation et le devis qu'il demande, et nous suivons avec vous le dossier. Pour une formation à Genève ou à Bruxelles, le système des OPCO ne s'applique pas\u00a0: le devis se fait en euros HT." },
  { q: 'Faut-il un niveau technique pour suivre une formation\u00a0?', a: "Aucun. Savoir se servir d'un ordinateur suffit. Un questionnaire de positionnement mesure le niveau de chacun avant la session\u00a0; les exercices partent ensuite des tâches de son métier." },
  { q: 'Où et sous quel format intervenez-vous\u00a0?', a: "Dans vos locaux partout en France, ou en classe virtuelle à distance. À l'étranger, nos missions vont de l'Europe aux États-Unis et jusqu'en Inde, en français ou en anglais\u00a0: deux sessions pour un groupe industriel se sont tenues en anglais en septembre 2026." },
  { q: 'Sous quel délai une formation peut-elle commencer\u00a0?', a: "Une à deux semaines pour un accompagnement individuel. Pour une session intra-entreprise, prévoyez deux à quatre semaines\u00a0: le temps de construire le programme sur vos dossiers et de caler les dates." },
]

/* Explorer Masteria (maillage interne) : intitulés et ordre propres à la home, pour ne
   pas reproduire mot pour mot les listes de liens des pages villes et agences. */
const EXPLORER = [
  { title: 'Conseil et audit', links: [
    ['Conseil en intelligence artificielle', '/conseil-intelligence-artificielle'],
    ['Audit IA', '/audit-ia'],
    ['Diagnostic IA', '/diagnostic-ia'],
    ['Accompagnement IA', '/accompagnement-ia'],
    ['Gouvernance IA', '/gouvernance-ia'],
    ['Études de cas IA', '/etudes-de-cas-ia'],
  ] },
  { title: 'Développement', links: [
    ['Outils IA sur mesure', '/outils-ia-sur-mesure'],
    ['Agents IA pour votre entreprise', '/agents-ia-entreprise'],
    ['Agence de développement IA', '/agence-developpement-ia'],
    ["Automatisation par l'IA", '/agence-automatisation-ia'],
    ['Agence IA à Lyon', '/agence-ia'],
    ["Prix d'un projet IA", '/prix-projet-ia'],
    ["Calculer le ROI de l'IA", '/roi-ia-entreprise'],
  ] },
  { title: 'Formation par outil', links: [
    ['Formation Microsoft Copilot', '/formation-microsoft-copilot'],
    ['Formation Claude IA', '/formation-claude-ia'],
    ['Formation ChatGPT', '/formation-chatgpt'],
    ['Formation Mistral AI', '/formation-mistral-ai'],
    ['Formation Google Gemini', '/formation-gemini-entreprise'],
  ] },
  { title: 'Formation par ville', links: [
    ['Formation IA à Lyon', '/formation-ia-lyon'],
    ['Formation IA à Paris', '/formation-ia-paris'],
    ['Formation IA à Marseille', '/formation-ia-marseille'],
    ['Formation IA à Genève', '/formation-ia-geneve'],
    ['Formation IA à Bruxelles', '/formation-ia-bruxelles'],
  ] },
]

/* Repères de la carte de contact finale. */
const REPERES_CONTACT = [
  { Icon: Code2, label: 'Le code vous appartient' },
  { Icon: BadgeCheck, label: 'Formation certifiée Qualiopi' },
  { Icon: Globe, label: 'Europe · États-Unis · Inde' },
]

/* ─── Éléments de composition ─── */

function Kicker({ children, color = c }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color, marginBottom: 16 }}>
      <span aria-hidden="true" style={{ width: 22, height: 2, background: color }} />
      {children}
    </div>
  )
}

/* Visuel d'une cellule du bandeau, sur une hauteur commune de 80 px. Logos officiels :
   largeur libre, hauteur fixée, jamais déformés. */
function VisuelBandeau({ item }) {
  if (item.id === 'francenum') {
    return (
      <picture style={{ display: 'block' }}>
        <source type="image/webp" srcSet="/assets/activateur-france-num.webp" />
        <img src="/assets/activateur-france-num.png" alt="Activateur France Num" width="580" height="528" loading="lazy" decoding="async" style={{ display: 'block', height: 80, width: 'auto' }} />
      </picture>
    )
  }
  if (item.id === 'lesechos') {
    return <img src="/assets/lesechos-logo.png" alt="Les Échos" width="251" height="64" loading="lazy" decoding="async" style={{ display: 'block', height: 46, width: 'auto' }} />
  }
  const { Icon } = item
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span aria-hidden="true" style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={24} strokeWidth={1.7} style={{ color: c }} />
      </span>
      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 900, color: INK, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{item.titre}</span>
    </span>
  )
}

function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ borderTop: `1px solid ${LINE}` }}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} style={{ borderBottom: `1px solid ${LINE}` }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, lineHeight: 1.4 }}>{item.q}</span>
              <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${isOpen ? c : LINE}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 220ms, border-color 220ms', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                <Plus size={16} strokeWidth={2.2} style={{ color: isOpen ? c : MUTED }} />
              </span>
            </button>
            {/* Réponse toujours présente dans le DOM (lisible par les moteurs), repliée en CSS. */}
            <div aria-hidden={!isOpen} style={{ maxHeight: isOpen ? 600 : 0, overflow: 'hidden', transition: 'max-height 320ms ease' }}>
              <p style={{ fontSize: 15.5, color: TEXT, lineHeight: 1.75, margin: '0 0 24px', maxWidth: 720 }}>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function HomePage() {
  const isDesktop = useIsDesktop()

  /* ── JSON-LD pour SEO & AI overviews ───────────────────────────── */
  // Note: Organization, WebSite, Person et FAQPage sont déjà injectés par SEOHead
  // (via jsonLdOrg / jsonLdWebsite / jsonLdPerson / faqItems). On garde ici
  // les deux ItemList propres à la page d'accueil : les services, puis les formations.
  const jsonLdServiceList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Audit, conseil et développement IA',
    itemListElement: SERVICES_CONSEIL_DEV.map(([name, href], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name,
        url: `https://www.master-ia.fr${href}`,
        provider: { '@id': 'https://www.master-ia.fr/#organization' },
      },
    })),
  }
  const jsonLdCourseList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Formations IA',
    itemListElement: TOOL_HUBS.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        // Nom et description tirés de la liste visible de la home : les metaDesc du
        // catalogue portaient encore « +1 500 formés » et d'anciens noms d'outils.
        name: `Formation ${h.tool}`,
        description: `${TOOL_LIGNES[h.id] || 'Programmes par outil et par métier'}. Formation certifiée Qualiopi, en intra ou en individuel.`,
        url: `https://www.master-ia.fr/${h.slug}`,
        provider: { '@type': 'Organization', name: 'Masteria' },
      },
    })),
  }

  const btnPrimary = { display: 'inline-flex', alignItems: 'center', gap: 9, background: o, color: '#fff', padding: '15px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15.5, fontWeight: 800, boxShadow: '0 8px 22px -8px rgba(234,88,12,0.55)' }
  const btnGhost = { display: 'inline-flex', alignItems: 'center', gap: 8, color: INK, background: '#fff', padding: '15px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: `1px solid ${LINE}` }

  return (
    <>
      <SEOHead
        title="Masteria, cabinet IA à Lyon : audit, conseil, outils et formation"
        description="Cabinet IA à Lyon : audit IA, conseil, développement d'outils et d'agents sur mesure, formation de vos équipes certifiée Qualiopi. Devis sous 24 h."
        slug=""
        keywords="cabinet IA Lyon, audit IA, conseil IA, développement IA sur mesure, agents IA entreprise, formation IA entreprise, formation ChatGPT, formation Copilot, Qualiopi"
        faqItems={FAQ_HOME}
        speakable={['#definition']}
        extraJsonLd={[jsonLdServiceList, jsonLdCourseList]}
      />

      {/* ════════════════════════ HERO clair ════════════════════════
          Un seul bloc de lecture à gauche (titre, définition, actions) et, à droite,
          la carte Qualiopi. Bleu = seul accent ; l'orange est réservé aux boutons.
          Suivent le bandeau des reconnaissances, puis le parcours des expertises
          (qui remplace depuis le 03/10/2026 le bandeau « équipes augmentées par l'IA »). */}
      <section style={{ position: 'relative', background: '#FAFAF7', color: INK, overflow: 'hidden', borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', padding: 'clamp(40px, 5.5vw, 72px) clamp(18px, 4vw, 32px) clamp(40px, 5vw, 64px)', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) 380px' : '1fr', gap: isDesktop ? 'clamp(40px, 5vw, 72px)' : 32, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(32px, 3.9vw, 50px)', fontWeight: 900, lineHeight: 1.05, margin: 0, color: INK, letterSpacing: '-0.035em' }}>
              Cabinet spécialisé en intelligence artificielle
              <br />
              <span style={{ color: c, fontWeight: 800 }}>audit, conseil, outils sur mesure et formation</span>
            </h1>

            {/* GEO : définition citable (formule d'entité canonique) */}
            <p id="definition" style={{ fontSize: 'clamp(16px, 1.6vw, 18.5px)', fontWeight: 500, color: TEXT, lineHeight: 1.65, margin: '24px 0 30px', maxWidth: 640 }}>
              Masteria est un cabinet spécialisé en intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Nous auditons vos processus, construisons vos <strong style={{ color: INK, fontWeight: 700 }}>outils et agents IA</strong>, puis formons vos équipes à s'en servir au quotidien.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <CadrageLink style={{ ...btnPrimary, padding: '14px 24px', fontSize: 15.5 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </CadrageLink>
              <Link to="/formation-intelligence-artificielle" style={{ ...btnGhost, padding: '14px 22px' }}>
                Nos formations <ArrowRight size={15} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Organisme de formation certifié Qualiopi. Charte de la marque : logo officiel
              jamais déformé (largeur fixée, hauteur libre), 23 mm de large au minimum (ici
              168 px, environ 44 mm), fond blanc, marge au moins égale à la hauteur du Q,
              mention de la catégorie d'action toujours lisible à côté du logo. */}
          <Link to="/formation-ia-qualiopi" style={{ display: 'block', background: '#fff', border: `1px solid ${LINE}`, borderRadius: 18, padding: isDesktop ? '28px 30px' : '24px 22px', textDecoration: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 18px 40px -28px rgba(15,23,42,0.28)' }}>
            <picture style={{ display: 'block', width: 168, marginBottom: 20 }}>
              <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
              <img src="/assets/qualiopi-logo.png" alt="Qualiopi, processus certifié, République française" width="842" height="509" decoding="async" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </picture>
            <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 17.5, fontWeight: 800, color: INK, lineHeight: 1.3, marginBottom: 8 }}>
              Organisme de formation certifié Qualiopi
            </span>
            <span style={{ display: 'block', fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginBottom: 18 }}>
              La certification qualité a été délivrée au titre de la catégorie d'action suivante&nbsp;: actions de formation.
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 700, color: c }}>
              Formations finançables par votre OPCO <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      {/* ════════════════════════ RECONNAISSANCES ET CLIENTS ════════════════════════ */}
      <section aria-label="Reconnaissances et clients" style={{ background: '#fff', borderBottom: `1px solid ${LINE}`, padding: 'clamp(32px, 4.5vw, 48px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(4, minmax(0, 1fr))' : 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', rowGap: 30 }}>
            {BANDEAU.map((item, i) => {
              const inner = (
                <>
                  <div style={{ height: 80, display: 'flex', alignItems: 'center', marginBottom: 14 }}>
                    <VisuelBandeau item={item} />
                  </div>
                  <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.55 }}>{item.label}</div>
                </>
              )
              const cell = { display: 'block', textDecoration: 'none', padding: isDesktop ? `0 28px 0 ${i === 0 ? 0 : 28}px` : '0 16px 0 0', borderLeft: isDesktop && i > 0 ? `1px solid ${LINE}` : 'none' }
              if (item.href) return <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" style={cell} aria-label="Masteria sur France Num, page activateur (nouvel onglet)">{inner}</a>
              if (item.to) return <Link key={item.id} to={item.to} style={cell}>{inner}</Link>
              return <div key={item.id} style={cell}>{inner}</div>
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: isDesktop ? 40 : 22, flexWrap: 'wrap', marginTop: 32, paddingTop: 26, borderTop: `1px solid ${LINE}` }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED }}>Ils nous font confiance</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center', gap: isDesktop ? 48 : 28, flexWrap: 'wrap' }}>
              {CLIENTS.map(cl => (
                <li key={cl.name}>
                  <picture>
                    {cl.webp && <source type="image/webp" srcSet={cl.webp} />}
                    <img
                      src={cl.src} alt={cl.name} width={cl.w} height={cl.h} loading="lazy" decoding="async"
                      style={{ height: cl.h, width: 'auto', display: 'block', filter: 'grayscale(1)', opacity: 0.7, transition: 'filter 200ms, opacity 200ms' }}
                      onMouseEnter={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1' }}
                      onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1)'; e.currentTarget.style.opacity = '0.7' }}
                    />
                  </picture>
                </li>
              ))}
            </ul>
            <span style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, flex: '1 1 260px' }}>{SECTEURS_LIGNE}</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════ PARCOURS DES EXPERTISES (ancre sombre) ════════════════════════ */}
      <ParcoursExpertises />

      {/* ════════════════════════ MÉTHODE EN SIX TEMPS ════════════════════════ */}
      <section style={{ background: '#EFF6FF', padding: SECTION_PAD, borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr', gap: 'clamp(16px, 4vw, 64px)', alignItems: 'end', marginBottom: 48 }}>
            <div>
              <Kicker>Notre méthode</Kicker>
              <h2 style={{ ...h2Style, margin: 0 }}>Six temps, les mêmes sur chaque mission</h2>
            </div>
            <p style={leadStyle}>
              Du diagnostic court au déploiement sur plusieurs continents, chaque mission suit cet ordre. Les résultats se comparent d'une mission à l'autre, et la suite se décide sur des faits mesurés.
            </p>
          </div>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', borderTop: `1px solid ${BLEU_FILET}`, borderLeft: isDesktop ? `1px solid ${BLEU_FILET}` : 'none' }}>
            {METHODE_HOME.map(m => (
              <li key={m.num} style={{ padding: 'clamp(22px, 3vw, 32px)', borderRight: isDesktop ? `1px solid ${BLEU_FILET}` : 'none', borderBottom: `1px solid ${BLEU_FILET}` }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', border: `1.5px solid ${c}`, color: c, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 900, marginBottom: 16, fontVariantNumeric: 'tabular-nums' }}>{m.num}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: INK, margin: '0 0 8px' }}>{m.title}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════════════════════ L'ÉQUIPE ════════════════════════ */}
      <EquipeMasteria bg="#fff" {...EQUIPE_HOME} />

      {/* ════════════════════════ PAR OÙ COMMENCER (fond beige) ════════════════════════ */}
      <section style={{ position: 'relative', background: BEIGE, padding: SECTION_PAD, overflow: 'hidden' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr', gap: 'clamp(16px, 4vw, 64px)', alignItems: 'end', marginBottom: 56 }}>
            <div>
              <Kicker>Par où commencer</Kicker>
              <h2 style={{ ...h2Style, margin: 0 }}>Trente minutes pour savoir par où commencer</h2>
            </div>
            <p style={leadStyle}>
              La plupart de nos clients arrivent avec la même intuition&nbsp;: l'IA peut leur faire gagner du temps, reste à savoir où. Le premier échange sert à le trouver.
            </p>
          </div>

          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 56px', display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr', gap: isDesktop ? 32 : 28, position: 'relative' }}>
            {isDesktop && <span aria-hidden="true" style={{ position: 'absolute', top: 23, left: 24, right: '33%', height: 2, borderRadius: 2, background: '#D1D5DB' }} />}
            {ETAPES.map(({ n, badge, title, desc }, i) => (
              <li key={n} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{ width: 48, height: 48, borderRadius: '50%', background: i === 0 ? c : '#fff', border: `1.5px solid ${i === 0 ? c : '#D1D5DB'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 900, color: i === 0 ? '#fff' : c, position: 'relative', zIndex: 1, boxShadow: i === 0 ? '0 8px 20px -8px rgba(37,99,235,0.55)' : 'none' }}>{n}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? '#1D4ED8' : MUTED, background: i === 0 ? cLight : '#fff', border: `1px solid ${i === 0 ? '#BFDBFE' : LINE}`, borderRadius: 99, padding: '4px 11px', position: 'relative', zIndex: 1 }}>{badge}</span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 21, fontWeight: 800, color: INK, margin: '0 0 10px' }}>{title}</h3>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.7, margin: 0, maxWidth: 340 }}>{desc}</p>
              </li>
            ))}
          </ol>

          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', borderTop: '1px solid #DDD9CF', borderBottom: '1px solid #DDD9CF', marginBottom: 40 }}>
            {ENGAGEMENTS.map(({ Icon, title, desc }, i) => (
              <div key={title} style={{ padding: '24px 22px', paddingLeft: isDesktop && i > 0 ? 22 : 0, borderLeft: isDesktop && i > 0 ? '1px solid #DDD9CF' : 'none' }}>
                <Icon size={20} strokeWidth={1.8} style={{ color: c, marginBottom: 12 }} aria-hidden="true" />
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 6 }}>{title}</div>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <CadrageLink style={btnPrimary}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <Link to="/diagnostic-ia" style={btnGhost}>
              Le Diagnostic IA en détail
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FORMATION ════════════════════════ */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 400px) 1fr' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'start' }}>
            <div style={isDesktop ? { position: 'sticky', top: 130 } : undefined}>
              <Kicker>Former vos équipes</Kicker>
              <h2 style={h2Style}>Tous les LLM du marché, plus de 100 programmes</h2>
              <p style={{ ...leadStyle, marginBottom: 24 }}>
                Nous formons vos équipes aux grands modèles de langage (les LLM, ces moteurs qui font tourner les assistants d'IA)&nbsp;: Microsoft Copilot, ChatGPT, Claude, Gemini chez Google et Vibe chez Mistral AI. Chaque programme se décline par outil ou par métier et part des dossiers de vos collaborateurs. Vous choisissez le lieu, vos locaux ou la visio, et le format&nbsp;: douze participants au plus en intra, ou un seul participant en individuel.
              </p>
              <div style={{ padding: '22px 24px', border: `1px solid ${LINE}`, borderRadius: 14, background: '#fff', marginBottom: 26 }}>
                {/* Logo à la même taille que dans le hero (168 px) : à 120 px, Mathias le jugeait illisible (05/10/2026). */}
                <picture style={{ display: 'block', width: 168, marginBottom: 14 }}>
                  <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
                  <img src="/assets/qualiopi-logo.png" alt="Certification Qualiopi des actions de formation de Masteria" width="842" height="509" loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: 'auto' }} />
                </picture>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.6, margin: 0 }}>
                  Certification qualité délivrée pour une catégorie d'action&nbsp;: actions de formation. Votre OPCO décide du financement selon ses règles et ses fonds.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                  Tout le catalogue <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/contact?type=formation" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: INK, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                  Demander un devis de formation <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>Par outil</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', border: `1px solid ${LINE}`, borderRadius: 18, overflow: 'hidden' }}>
                {TOOL_HUBS.map((h, i) => (
                  <li key={h.id} style={{ borderTop: i > 0 ? `1px solid ${LINE}` : 'none' }}>
                    <Link to={`/${h.slug}`} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 16, alignItems: 'center', padding: '16px 20px', textDecoration: 'none', background: '#fff', transition: 'background 160ms' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
                    >
                      <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: '#F3F4F6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ToolLogo tool={h.id} size={24} color={h.id === 'copilot' ? undefined : h.color} />
                      </span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK }}>Formation {h.tool}</span>
                        <span style={{ display: 'block', fontSize: 13.5, color: MUTED, lineHeight: 1.45, marginTop: 2 }}>{TOOL_LIGNES[h.id] || h.pitch}</span>
                      </span>
                      <ArrowRight size={17} strokeWidth={2.2} style={{ color: '#9CA3AF' }} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>Par métier</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {METIERS_HOME.map(m => {
                  const Icon = METIER_ICONS[m.slug]
                  return (
                    <li key={m.slug}>
                      <Link to={`/formation-ia-${m.slug}`} title={m.desc} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 14px', border: `1px solid ${LINE}`, borderRadius: 99, fontSize: 14, fontWeight: 600, color: INK, textDecoration: 'none', background: '#fff' }}>
                        {Icon ? <Icon size={15} strokeWidth={1.8} style={{ color: MUTED }} aria-hidden="true" /> : null}
                        {m.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Avis Google (note de la fiche, avis qui défilent) : remplacent les témoignages rédigés */}
          <div style={{ marginTop: 'clamp(56px, 7vw, 80px)', paddingTop: 32, borderTop: `1px solid ${LINE}` }}>
            <AvisGoogle variant="bloc" />
          </div>
        </div>
      </section>

      {/* ════════════════════════ MISSIONS RÉCENTES (liste discrète) ════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 8vw, 96px) clamp(18px, 4vw, 32px)', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 360px) 1fr' : '1fr', gap: 'clamp(28px, 5vw, 88px)' }}>
          <div>
            <Kicker>Références</Kicker>
            <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 2.8vw, 34px)' }}>Quelques missions récentes</h2>
            <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.7, margin: '0 0 18px' }}>
              Nos clients restent anonymes sur ce site. Les secteurs, les tailles et les chiffres viennent des dossiers de chaque mission&nbsp;; sur demande, nous organisons un échange privé avec eux, sous accord de confidentialité.
            </p>
            <Link to="/etudes-de-cas-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
              Toutes les études de cas <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${LINE}` }}>
            {CAS_HOME.map(k => (
              <li key={k.id} style={{ borderBottom: `1px solid ${LINE}` }}>
                <Link to={`/etudes-de-cas-ia#${k.id}`} style={{ display: 'grid', gridTemplateColumns: isDesktop ? '190px 1fr 20px' : '1fr', gap: isDesktop ? 28 : 6, alignItems: 'baseline', padding: '22px 0', textDecoration: 'none' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: MUTED, lineHeight: 1.5 }}>{k.secteur}</span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: INK, lineHeight: 1.4 }}>{k.titre}</span>
                    <span style={{ display: 'block', fontSize: 14, color: MUTED, lineHeight: 1.65, marginTop: 6 }}>{k.ligne}</span>
                  </span>
                  {isDesktop && <ArrowRight size={16} strokeWidth={2.2} style={{ color: '#9CA3AF', alignSelf: 'center' }} aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════ LE FONDATEUR (fond beige) ════════════════════════ */}
      <section style={{ background: BEIGE, padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? '380px 1fr' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ maxWidth: isDesktop ? 'none' : 320 }}>
            <picture>
              <source type="image/webp" srcSet="/assets/mathias-nizan.webp" />
              <img
                src="/assets/mathias-nizan.jpg"
                alt="Mathias Nizan, fondateur de Masteria"
                width="400" height="500"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block', borderRadius: 22, boxShadow: '0 30px 60px -24px rgba(10,15,30,0.35)' }}
              />
            </picture>
          </div>
          <div>
            <Kicker>La conviction de Mathias Nizan</Kicker>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 800, color: INK, lineHeight: 1.3, margin: '0 0 28px', letterSpacing: '-0.015em' }}>
              « L'intelligence artificielle ne remplace pas les humains. Elle <span style={{ color: c }}>décuple leur potentiel</span>. »
            </p>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, margin: '0 0 14px', maxWidth: 640 }}>
              Un outil d'IA vaut ce qu'en font les personnes qui l'utilisent. L'abonnement s'achète en un après-midi&nbsp;; l'usage s'installe quand chacun voit ce que l'outil change dans son métier, sur ses propres fichiers.
            </p>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, margin: '0 0 30px', maxWidth: 640 }}>
              En 2022, à Lyon, j'ai fondé <strong style={{ color: INK }}>Masteria</strong> pour relier la technologie et les équipes&nbsp;: nous examinons votre façon de travailler, nous construisons les outils qui vous manquent, puis nous formons celles et ceux qui s'en serviront.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', paddingTop: 22, borderTop: `1px solid ${LINE}` }}>
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK }}>Mathias Nizan</div>
                <div style={{ fontSize: 14, color: MUTED, marginTop: 2 }}>Fondateur de Masteria · Lyon</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED }}>
                  Cité dans <img src="/assets/lesechos-logo.png" alt="Les Échos" height="16" loading="lazy" style={{ height: 16, width: 'auto' }} />
                </span>
                <Link to="/mathias-nizan" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                  Son parcours <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FAQ (éditorial) ════════════════════════ */}
      <section id="faq" style={{ background: '#fff', padding: SECTION_PAD, borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 360px) 1fr' : '1fr', gap: 'clamp(32px, 6vw, 88px)' }}>
          <div style={isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : undefined}>
            <Kicker>Questions fréquentes</Kicker>
            <h2 style={h2Style}>Ce que nos clients demandent avant de démarrer</h2>
            <p style={{ ...leadStyle, fontSize: 15.5, marginBottom: 20 }}>
              Votre question manque&nbsp;? Apportez-la au cadrage de 30 minutes, Mathias Nizan y répond de vive voix.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              Réserver 30 minutes de cadrage <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
          </div>
          <FaqAccordion items={FAQ_HOME} />
        </div>
      </section>

      {/* ════════════════════════ EXPLORER MASTERIA (maillage interne SEO) ════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(56px, 8vw, 88px) clamp(18px, 4vw, 32px)', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: INK, margin: '0 0 32px' }}>Explorer Masteria</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {EXPLORER.map(col => (
              <div key={col.title}>
                <h3 style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, margin: '0 0 16px' }}>{col.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link to={href} style={{ color: TEXT, textDecoration: 'none', fontSize: 14.5, fontWeight: 500 }}
                        onMouseEnter={e => { e.currentTarget.style.color = INK }}
                        onMouseLeave={e => { e.currentTarget.style.color = TEXT }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CTA FINAL (carte sombre sur fond clair) ════════════════════════
          Comme sur les pages d'offre : une section pleine largeur sombre se confondait
          avec le pied de page, sombre lui aussi. */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 8vw, 96px) clamp(18px, 4vw, 32px)', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', background: '#0A0F1E', borderRadius: 24, padding: 'clamp(32px, 5vw, 64px)', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) 420px' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center' }}>
          <div>
            <Kicker color="#60A5FA">Contact</Kicker>
            <h2 style={{ ...h2Style, color: '#fff' }}>Parlons de votre projet IA</h2>
            <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 560 }}>
              Racontez-nous votre activité et ce qui vous prend du temps. En trente minutes, nous voyons avec vous s'il faut commencer par un audit, un diagnostic, un outil sur mesure ou une formation. Cet échange est offert.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {REPERES_CONTACT.map(({ Icon, label }) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#E2E8F0', background: 'rgba(255,255,255,0.05)', border: '1px solid #1E293B', borderRadius: 99, padding: '7px 14px' }}>
                  <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 22, padding: 'clamp(24px, 3vw, 32px)', boxShadow: '0 30px 70px -30px rgba(0,0,0,0.6)' }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: INK, marginBottom: 6 }}>Prendre rendez-vous</div>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: '0 0 20px' }}>Avec Mathias Nizan, en visio ou au téléphone.</p>
            <CadrageLink style={{ ...btnPrimary, width: '100%', justifyContent: 'center', boxSizing: 'border-box', marginBottom: 20 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 18, borderTop: `1px solid ${LINE}` }}>
              <a href="tel:+33667754128" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: INK, fontSize: 14.5, fontWeight: 600, textDecoration: 'none' }}>
                <Phone size={16} strokeWidth={2} style={{ color: c }} aria-hidden="true" /> 06 67 75 41 28
              </a>
              <a href="mailto:mathias.nizan@master-ia.fr" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: INK, fontSize: 14.5, fontWeight: 600, textDecoration: 'none' }}>
                <Mail size={16} strokeWidth={2} style={{ color: c }} aria-hidden="true" /> mathias.nizan@master-ia.fr
              </a>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: MUTED, fontSize: 13.5 }}>
                <Clock size={16} strokeWidth={2} style={{ color: c }} aria-hidden="true" /> Réponse sous 24 h ouvrées
              </span>
            </div>
            <Link to="/contact?type=formation" style={{ display: 'block', marginTop: 18, fontSize: 13.5, color: c, fontWeight: 700, textDecoration: 'none' }}>
              Un besoin de formation ? Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
