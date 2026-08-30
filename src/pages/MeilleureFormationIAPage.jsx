import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, GraduationCap, ShieldCheck, Target, AlertTriangle, BookOpen } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleure formation IA » : guide de choix 2026, angle TRANSMETTRE.
 * Thèse de la page (valeur réelle + positionnement) : la plupart des formations
 * IA se terminent sans rien changer au travail réel, faute de cadre, de contenu
 * sur mesure ou de suivi après la session. La meilleure formation IA est celle
 * qui réunit les trois : le cadre (Qualiopi, financement), le contenu (construit
 * sur le poste réel), le suivi (ancrage de la pratique). Masteria tient les
 * trois. Troisième volet du trio avec /meilleur-cabinet-conseil-ia (penser) et
 * /meilleure-agence-ia (construire) ; distincte du catalogue
 * /formation-intelligence-artificielle (offre, non superlatif). Intégrité :
 * aucun classement nominatif, aucun chiffre ni cas client inventé. Accent bleu
 * #2563EB. Comparatif d'acteurs réels du marché à faire valider par Mathias
 * avant mise en prod (exactitude des noms).
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'meilleure-formation-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Meilleure formation IA : comment choisir en 2026 | Masteria'
const META_DESC = "Meilleure formation IA : les critères qui comptent vraiment, le paysage des organismes de formation, les tarifs 2026 et comment choisir sans se tromper."
const KEYWORDS = 'meilleure formation ia, meilleures formations ia, meilleure formation intelligence artificielle, formation ia entreprise, organisme de formation ia, formation ia qualiopi, formation ia opco, comparatif formation ia, formation ia lyon'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

/* Les trois exigences — le cœur de la page (valeur + positionnement) */
const PILLARS = [
  {
    icon: ShieldCheck,
    tag: 'Le cadre',
    title: 'Ce que Qualiopi garantit, et ce qu\'elle ne garantit pas',
    body: "La certification Qualiopi conditionne l'accès aux financements : OPCO, plan de développement des compétences, certains dispositifs publics. Un organisme non certifié reste libre de proposer une bonne formation, mais elle restera entièrement à la charge de l'entreprise. Qualiopi audite un processus (évaluation des besoins, qualification des formateurs, mesure de la satisfaction), pas le contenu pédagogique lui-même. Un organisme Qualiopi peut livrer une session médiocre. Un organisme non Qualiopi peut livrer une excellente session, à vos frais.",
    masteria: "Chez Masteria : certifié Qualiopi, formations finançables par votre OPCO ou votre plan de développement des compétences, avec un audit des besoins réels avant chaque session.",
  },
  {
    icon: Target,
    tag: 'Le contenu',
    title: 'Un programme construit sur le poste réel, pas sur l\'outil en général',
    body: "Une formation générique enseigne à utiliser ChatGPT en général. Une formation utile enseigne à s'en servir pour rédiger une fiche de poste, préparer un entretien budgétaire ou répondre à un appel d'offres, selon le métier formé. Les participants qui ont travaillé sur leurs propres dossiers pendant la session continuent d'appliquer ce qu'ils ont appris une fois de retour au poste. Ceux qui ont suivi une démonstration générique oublient en quelques semaines.",
    masteria: "Chez Masteria : audit des besoins avant chaque session, contenu construit sur vos dossiers et vos outils réels, formateur qui pratique ces outils dans son propre travail.",
  },
  {
    icon: GraduationCap,
    tag: 'Le suivi',
    title: 'Ce qui se passe après la session compte autant que la session',
    body: "Une journée de formation sans suivi produit un pic d'enthousiasme qui retombe en quelques semaines : rien n'organise la reprise des nouveaux réflexes une fois revenu au poste. Un bon organisme prévoit un point après la session, remet des ressources réutilisables plutôt qu'un support archivé, et reste joignable quand une question se pose sur un cas concret.",
    masteria: "Chez Masteria : kit de prompts et de ressources propre à chaque métier remis en fin de session, suivi à 30 jours inclus pour mesurer l'adoption réelle.",
  },
]

/* Paysage des organismes : qui couvre laquelle des trois exigences (meter 3 niveaux) */
const LANDSCAPE = [
  { type: 'MOOC et plateforme e-learning', cadre: 1, contenu: 1, suivi: 1, when: 'Découvrir seul, à budget minimal, sans contrainte de calendrier.' },
  { type: 'Bootcamp reconversion data / IA', cadre: 2, contenu: 1, suivi: 2, when: 'Changer complètement de métier vers la data ou le développement.' },
  { type: 'Executive education (grande école)', cadre: 2, contenu: 2, suivi: 1, when: "Donner à un comité de direction une vision stratégique de l'IA." },
  { type: 'Organisme généraliste multi-thématique', cadre: 3, contenu: 1, suivi: 1, when: 'Ajouter un module IA à un catalogue déjà référencé chez un grand compte.' },
  { type: 'Organisme spécialisé IA en entreprise', cadre: 3, contenu: 3, suivi: 3, highlight: true, when: 'Faire changer une pratique métier dès la semaine suivant la session.' },
]

/* Comparatif factuel d'acteurs réels du marché (panorama, PAS un classement). Neutre,
 * descriptif, sans jugement de valeur : conforme au cadre de la publicité comparative
 * et au parti pris d'intégrité (aucune note, aucune hiérarchie). À valider avant prod. */
const MARKET_ACTORS = [
  { cat: 'MOOC et plateformes e-learning', names: 'OpenClassrooms, Coursera, LinkedIn Learning', best: 'Modules de découverte à bas coût, grands catalogues accessibles seul.', fit: 'Sensibilisation individuelle, budget serré.' },
  { cat: 'Bootcamps reconversion data / IA', names: 'Jedha, DataScientest, Le Wagon', best: 'Parcours longs et certifiants vers un métier data, IA ou développement.', fit: 'Reconversion professionnelle complète.' },
  { cat: 'Executive education (grandes écoles)', names: 'HEC Executive Education, CentraleSupélec Exed, Mines Paris PSL Executive Education', best: "Vision stratégique de l'IA pour un comité de direction, réseau académique.", fit: 'Programmes dirigeants, budgets de formation cadre.' },
  { cat: 'Organismes de formation généralistes', names: 'Cegos, Orsys, M2i, Comundi', best: 'Larges catalogues multi-thématiques incluant des modules IA, logistique inter-entreprise rodée.', fit: 'Grands comptes avec un fournisseur déjà référencé.' },
  { cat: 'Organismes spécialisés IA en entreprise', names: 'Structures plus petites et spécialisées (catégorie de Masteria)', best: 'Audit des besoins, contenu sur mesure par métier, formateur en activité, suivi après la session.', fit: 'PME, ETI et directions métier visant un changement de pratique mesurable.' },
]

/* Les 4 étapes pour choisir, du cadrage à la décision. Section à valeur ajoutée
 * (méthode concrète) qui répond à la thèse de la page. */
const PROCESS = [
  { step: 'Cadrer le besoin', goal: "Identifier le métier ou l'équipe à former et ce que « ça a marché » voudrait dire trois mois après.", deliver: 'Une liste des cas d\'usage réels à couvrir, remontée par les équipes elles-mêmes.', duration: '2 à 3 jours', watch: "Consulter uniquement la direction, jamais les équipes formées, produit un programme qui manque sa cible." },
  { step: 'Présélectionner 2 à 3 organismes', goal: 'Repérer, dans le paysage des organismes, la famille qui correspond à votre situation, puis contacter 2 ou 3 acteurs de cette famille.', deliver: 'Une short-list argumentée, avec pour chacun un programme reçu et un formateur identifié par son nom.', duration: '1 semaine', watch: 'Un organisme qui refuse de nommer le formateur avant la signature mérite une question de plus.' },
  { step: 'Demander une preuve, pas une brochure', goal: "Vérifier ce que l'organisme avance : attestation Qualiopi à jour, référence vérifiable dans un secteur proche, exemple de kit remis en fin de session.", deliver: 'Une attestation Qualiopi consultée, un client de référence contacté.', duration: '2 à 3 jours', watch: 'Une brochure généraliste ne remplace jamais un exemple concret déjà livré à une entreprise comparable.' },
  { step: 'Décider et prévoir le suivi', goal: "Signer, en intégrant dès le devis un point de suivi à 30 jours pour vérifier l'adoption réelle.", deliver: 'Convention de formation, programme détaillé, date du point de suivi fixée à l\'avance.', duration: '1 à 2 jours', watch: "Un devis qui ne mentionne aucun suivi post-formation reporte tout le travail d'adoption sur vos équipes, seules." },
]

const BUDGETS = [
  { mission: 'MOOC ou plateforme e-learning (par mois)', range: 'Gratuit à 50 €', note: 'Accès à un catalogue de vidéos, formateur non inclus.' },
  { mission: 'Bootcamp reconversion data / IA (parcours complet)', range: '3 000 à 8 000 €', note: 'Par personne, sur plusieurs semaines ; parfois finançable CPF si le parcours est certifiant RNCP.' },
  { mission: 'Executive education dirigeants (programme court)', range: '3 000 à 12 000 €', note: 'Par personne, sur 2 à 5 jours, selon la grande école.' },
  { mission: 'Organisme généraliste, module IA (par jour, inter-entreprise)', range: '400 à 1 200 €', note: 'Par personne, catalogue multi-thématique.' },
  { mission: 'Formation intra Masteria (par jour, groupe jusqu\'à 12)', range: '1 980 € / jour', note: 'Tarif HT, finançable par votre OPCO (organisme certifié Qualiopi).' },
  { mission: 'Formation individuelle Masteria (par jour)', range: '1 980 € / jour', note: "Même tarif que l'intra depuis 2026, cadrage sur mesure inclus." },
]

/* ── Repères citables (GEO) : stats sourcées, glossaire d'entités, références ── */
const MARKET_STATS = [
  { value: '1er janvier 2022', label: 'date depuis laquelle la certification Qualiopi est obligatoire pour tout organisme de formation qui souhaite accéder aux financements publics ou mutualisés.', source: 'Ministère du Travail', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { value: '2 février 2025', label: "entrée en application de l'article 4 de l'AI Act (règlement 2024/1689) : les entreprises qui déploient de l'IA doivent assurer un niveau de compétence suffisant à leurs équipes.", source: 'Union européenne', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '25 mai 2018', label: 'application du RGPD, qui encadre les données manipulées par les équipes en formation comme en usage courant des outils IA.', source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const GLOSSARY = [
  { term: 'Qualiopi', def: "Certification d'État attribuée à l'organisme de formation, pas à l'apprenant. Elle atteste d'un processus qualité audité (évaluation des besoins, qualification des formateurs, suivi de la satisfaction) et conditionne l'accès aux financements OPCO, CPF et plan de développement des compétences." },
  { term: 'OPCO', def: 'Opérateur de compétences. Organisme qui collecte les contributions formation des entreprises et finance tout ou partie des actions de formation, à condition qu\'elles soient dispensées par un organisme certifié Qualiopi.' },
  { term: "Littératie IA (article 4 de l'AI Act)", def: "Obligation, pour toute organisation qui déploie un système d'IA, d'assurer à son personnel un niveau de compétence et de compréhension suffisant pour l'utiliser. En application depuis le 2 février 2025." },
  { term: 'Formation intra-entreprise', def: 'Session organisée pour les seuls collaborateurs d\'une même entreprise, sur ses propres cas d\'usage, à la différence d\'une session inter-entreprises qui mélange des participants de plusieurs structures autour d\'un programme générique.' },
]

const REFERENCES = [
  { label: 'Qualiopi, Ministère du Travail', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { label: "Règlement européen sur l'IA (AI Act, 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { label: 'Intelligence artificielle, CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: 'France Compétences (RNCP)', url: 'https://www.francecompetences.fr/' },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'une bonne formation IA en entreprise ?",
    a: "C'est une formation qui change une pratique de travail après la session, pas seulement une journée qui informe. Elle réunit trois éléments : un cadre Qualiopi qui ouvre le financement, un contenu construit sur les cas d'usage réels des participants, et un suivi organisé après la session pour vérifier que les nouveaux réflexes tiennent.",
  },
  {
    q: 'Quelle est la meilleure formation IA en 2026 ?',
    a: "Aucune autorité ne décerne ce titre et les classements en ligne sont déclaratifs ou sponsorisés. La meilleure formation pour vos équipes est celle qui réunit les trois exigences : un cadre Qualiopi qui ouvre le financement, un contenu construit sur vos cas d'usage réels, un suivi qui ancre la pratique après la session. Présélectionnez deux ou trois organismes du bon profil, demandez le nom du formateur et un exemple de kit remis en fin de session.",
  },
  {
    q: 'Formation IA, cabinet de conseil ou agence IA : quelle différence ?',
    a: "La formation transmet une compétence à vos équipes pour qu'elles utilisent les outils IA au quotidien. Le cabinet de conseil porte la stratégie et la gouvernance. L'agence IA construit des solutions sur mesure : agents, automatisations, applications. Un projet de transformation complet mobilise souvent les trois. Pour comparer les acteurs sous l'angle stratégie, consultez notre guide du meilleur cabinet de conseil en IA ; sous l'angle construction d'un outil, notre guide de la meilleure agence IA.",
  },
  {
    q: "Une formation IA est-elle obligatoire (article 4 de l'AI Act) ?",
    a: "Depuis le 2 février 2025, l'article 4 du règlement européen sur l'IA impose à toute organisation qui déploie des systèmes d'IA d'assurer à son personnel un niveau de compétence suffisant pour les utiliser. Le texte n'impose pas un format précis : une formation avec un organisme certifié Qualiopi, une session interne documentée ou un e-learning structuré peuvent y répondre, à condition d'être adaptés aux postes concernés et de laisser une trace.",
  },
  {
    q: 'Combien coûte une formation IA en entreprise ?',
    a: "Ordres de grandeur du marché français : gratuit à quelques dizaines d'euros par mois pour un MOOC, 3 000 à 8 000 € par personne pour un bootcamp de reconversion, 3 000 à 12 000 € pour un programme dirigeants en executive education, 400 à 1 200 € par jour et par personne pour un module généraliste en inter-entreprise. La formation intra ou individuelle chez Masteria est à 1 980 € HT par jour, finançable par votre OPCO.",
  },
  {
    q: 'Une formation IA gratuite (MOOC) suffit-elle ?',
    a: "Un MOOC gratuit convient à une découverte autonome, à son rythme. Il ne remplace pas une session avec un formateur en direct, sur les cas d'usage réels de l'équipe, avec un retour personnalisé. Pour une équipe en poste qui doit changer sa pratique, une formation encadrée reste nécessaire.",
  },
  {
    q: 'Peut-on financer une formation IA avec le CPF ?',
    a: "Rarement, pour les formations courtes centrées sur l'usage des outils. Le CPF ne finance que les parcours rattachés à une certification enregistrée au RNCP ou au RS, ce qui concerne surtout les bootcamps longs de reconversion vers un métier data ou développement. Vérifiez sur le site France Compétences que la certification annoncée existe réellement avant de vous engager sur cette base.",
  },
  {
    q: 'Formation intra ou formation individuelle : laquelle choisir ?',
    a: "L'intra rassemble une équipe entière sur ses propres cas d'usage et construit une pratique commune. L'individuel convient à un profil isolé ou à un dirigeant qui veut avancer à son rythme, avec un cadrage sur mesure. Chez Masteria, les deux formats sont au même tarif, 1 980 € HT par jour.",
  },
  {
    q: 'Combien de temps pour former une équipe à l\'IA ?',
    a: "Une journée suffit pour une initiation solide sur un outil. Deux jours permettent un programme multi-outils approfondi. Trois jours ajoutent le prompt engineering avancé et les cas d'usage détaillés par métier.",
  },
  {
    q: "Faut-il former toute l'entreprise d'un coup ou commencer par une équipe pilote ?",
    a: "Commencer par une équipe pilote est presque toujours le bon choix. Une première équipe formée sur ses cas d'usage réels produit des résultats concrets qui servent d'exemple, révèle les besoins propres à votre organisation avant un déploiement large, et crée des relais internes qui accélèrent l'adoption dans les autres services. Le déploiement à toute l'entreprise se construit ensuite sur ces premiers acquis.",
  },
  {
    q: "Comment mesurer le retour sur investissement d'une formation IA ?",
    a: "En définissant, avant la session, ce que « réussi » veut dire pour vous : temps gagné sur une tâche précise, volume traité, qualité d'un livrable, nombre de collaborateurs qui utilisent réellement l'outil un mois après. Un point de suivi à 30 jours permet de comparer ces indicateurs à la situation de départ. Sans critère fixé en amont, le retour sur investissement reste une impression ; avec, il devient une mesure.",
  },
  {
    q: "Une formation IA doit-elle porter sur un seul outil ou sur plusieurs ?",
    a: "Cela dépend de votre environnement de travail. Si vos équipes utilisent déjà une suite précise (Microsoft 365 avec Copilot, Google Workspace avec Gemini), une formation centrée sur cet outil s'intègre directement dans leur quotidien. Si le choix n'est pas arrêté, une formation multi-outils aide à comparer ChatGPT, Copilot, Gemini, Claude et Mistral et à décider en connaissance de cause. Le principe : la formation porte sur l'outil que vos équipes utiliseront vraiment après la session.",
  },
  {
    q: 'Formation IA pour PME ou pour un grand groupe : comment choisir ?',
    a: "Une PME a intérêt à un organisme proche du terrain, capable de cadrer vite et de former sur les cas d'usage réels d'une petite équipe. Un grand groupe a souvent besoin d'un organisme qui sait staffer plusieurs sessions en parallèle, s'articuler avec un plan de formation existant et respecter des exigences de confidentialité renforcées. Dans les deux cas, le contenu sur mesure et le suivi après la session restent les critères qui protègent l'investissement.",
  },
  {
    q: 'Faut-il suivre sa formation IA à Lyon, à Paris, ou est-ce possible à distance ?',
    a: "Les deux fonctionnent. La proximité aide pour la cohésion d'équipe et les ateliers pratiques ; le distanciel convient au suivi et aux sessions bien cadrées. Masteria est basé à Lyon et intervient dans toute la France, en Suisse et en Belgique, en présentiel comme à distance.",
  },
]

/* ───────── JSON-LD ───────── */

/* Course : représente l'offre de formation Masteria elle-même (contrairement aux
 * pages /meilleur-cabinet-conseil-ia et /meilleure-agence-ia, qui excluent courseData
 * — le conseil et le build ne sont pas des formations, celle-ci en est une). */
const courseData = {
  name: 'Formation intelligence artificielle en entreprise, Masteria',
  description: "Formation sur mesure aux outils d'intelligence artificielle générative (ChatGPT, Copilot, Gemini, Claude, Mistral), construite sur les cas d'usage réels de chaque métier.",
  price: '1980',
  audience: 'Professionnels en entreprise',
  level: 'Tous niveaux',
  about: "Choix et usage des outils d'intelligence artificielle générative en entreprise",
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire du financement et du choix d\'une formation IA',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Meilleure formation IA : comment choisir en 2026',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Formation IA en entreprise', 'Qualiopi', 'Financement de la formation professionnelle'],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: [
    'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689',
    'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation',
  ],
}

/* ItemList : séquence citable des 4 étapes (GEO). HowTo proscrit (Google l'a retiré). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Les 4 étapes pour choisir une formation IA en entreprise',
  itemListElement: PROCESS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.step, description: p.goal })),
}

function CoverMeter({ level, label }) {
  // level: 3 = maîtrisée, 2 = partielle, 1 = secondaire
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'maîtrisée' : level === 2 ? 'partielle' : 'secondaire'}`} style={{ display: 'inline-flex', gap: 4 }}>
      {[1, 2, 3].map(i => (
        <span key={i} aria-hidden="true" style={{ width: 9, height: 9, borderRadius: '50%', background: i <= level ? c : '#D1D5DB', display: 'inline-block' }} />
      ))}
    </span>
  )
}

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

function SectionHeader({ icon: Icon, kicker, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
      <div style={{ ...iconBoxStyle, marginTop: 4 }}>
        <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ ...kickerStyle, marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ ...h2Style, margin: 0 }}>{title}</h2>
      </div>
    </div>
  )
}

export default function MeilleureFormationIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation IA en entreprise', slug: 'formation-intelligence-artificielle' },
    { name: 'Meilleure formation IA', slug: SLUG },
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
        courseData={courseData}
        extraJsonLd={[definedTermSetJsonLd, articleJsonLd, processJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation IA en entreprise</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Meilleure formation IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de choix · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Meilleure formation IA en 2026
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>celle qui change votre pratique dès le lundi</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — la thèse de la page */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Il existe des centaines de formations IA en France, et la plupart partagent le même angle mort : la session se termine, l'enthousiasme retombe, et le lundi suivant personne n'a changé sa façon de travailler. <strong style={{ color: '#fff', fontWeight: 700 }}>La meilleure formation IA se reconnaît à son effet sur le terrain, un changement de pratique mesurable</strong> sur le poste réel de chacun. Le nombre de modules et le prix n'en disent rien.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Vous trouverez ici les trois exigences non négociables, un panorama factuel des organismes du marché, les tarifs 2026 et une méthode pour trancher en une semaine. Les classements de « la meilleure formation intelligence artificielle » ou des « meilleures formations IA » publiés en ligne sont déclaratifs ou sponsorisés ; ce panorama situe les familles d'organismes par catégorie, sans les noter ni en classer aucune.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#exigences" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Les 3 exigences non négociables
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parler de votre besoin
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Le vrai critère', "Une formation IA se juge sur ce qu'elle change dans le travail réel après la session, pas sur le nombre de modules du programme."],
                ['Existe-t-il un classement ?', 'Aucun classement officiel en France. Les palmarès en ligne sont déclaratifs ou sponsorisés.'],
                ["L'obligation à connaître", "Depuis le 2 février 2025, l'article 4 de l'AI Act impose aux entreprises qui utilisent l'IA d'assurer un niveau de compétence suffisant à leurs équipes."],
                ['Tarifs 2026', 'Formation intra ou individuelle chez Masteria : 1 980 € HT par jour. Organismes généralistes : de gratuit à plusieurs milliers d\'euros selon le format.'],
                ['Et Masteria ?', "Un organisme certifié Qualiopi, spécialisé uniquement sur l'IA, qui construit chaque session sur les cas d'usage réels de vos équipes."],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré (SEO/GEO : jump-to links + cibles d'ancre pour sitelinks) ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#exigences', 'Les 3 exigences'],
            ['#paysage', 'Paysage des organismes'],
            ['#methode', 'Méthode'],
            ['#tarifs', 'Tarifs 2026'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LE VRAI PROBLÈME (POV) ── */}
      <section id="probleme" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader icon={AlertTriangle} kicker="Le vrai problème" title="Pourquoi tant de formations IA ne changent rien au travail réel" />
          <p style={leadStyle}>
            La technologie n'est pas ce qui coince. Une session se prépare et se donne en quelques jours. Ce qui coince arrive après : les participants retournent à leur poste, l'enthousiasme retombe, et rien n'oblige à changer une habitude installée depuis des années.
          </p>
          <p style={answerStyle}>
            Trois pièges expliquent l'essentiel des sessions sans effet. Le programme reste générique et parle d'un cas d'usage abstrait plutôt que du travail réel de l'équipe formée. Le format choisi favorise le confort du calendrier plutôt que la pratique : une vidéo asynchrone regardée seul laisse peu de place à l'entraînement. Et rien n'est prévu après la session pour vérifier que les nouveaux réflexes tiennent au-delà de la première semaine.
          </p>
          <p style={mutedStyle}>
            Le bon réflexe : juger un organisme sur sa capacité à éviter ces trois pièges, avant même de regarder son catalogue ou son prix. C'est exactement ce que couvrent les trois exigences ci-dessous.
          </p>
        </div>
      </section>

      {/* ── LES TROIS EXIGENCES (le cœur) ── */}
      <section id="exigences" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Le vrai critère</div>
          <h2 style={h2Style}>Les trois exigences qu'une formation IA doit réunir</h2>
          <p style={leadStyle}>
            La plupart des organismes en tiennent une, parfois deux. Ceux qui tiennent les trois sont ceux dont les équipes appliquent encore ce qu'elles ont appris un mois après la session.
          </p>
          <p style={mutedStyle}>
            Le cadre, le contenu, le suivi. Voici ce que recouvre chacun, et pourquoi l'absence d'un seul fragilise tout le reste.
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.tag} style={{ ...cardStyle, padding: 'clamp(24px, 3vw, 34px)', display: 'grid', gridTemplateColumns: isDesktop ? '52px 1fr' : '1fr', gap: isDesktop ? 24 : 16, borderTop: `3px solid ${c}` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{`0${i + 1} · ${p.tag}`}</span>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>{p.body}</p>
                    <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                      <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                      {p.masteria}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LE PAYSAGE : QUI COUVRE QUOI (tableau meter, snippet magnet) ── */}
      <section id="paysage" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Le paysage des organismes</div>
          <h2 style={h2Style}>Qui couvre quoi : MOOC, bootcamp, executive education, organisme généraliste</h2>
          <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Cinq familles d'organismes se partagent le marché de la formation IA, et chacune répond à un objectif différent.</strong>{' '}
            Comparer un MOOC gratuit et un organisme spécialisé sur les mêmes critères n'a pas de sens : ils ne répondent pas au même besoin. Repérez d'abord la famille qui correspond à votre situation.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Le tableau lit chaque famille à travers les trois exigences : le cadre administratif, le contenu sur mesure, le suivi après la session.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Les familles d'organismes de formation IA lues à travers trois exigences (cadre, contenu, suivi) et le bon moment pour choisir chacune
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille d'organisme</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Cadre</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Contenu</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Suivi</th>
                  <th scope="col" style={thStyle}>Quand la choisir</th>
                </tr>
              </thead>
              <tbody>
                {LANDSCAPE.map((row, i) => {
                  const td = { padding: '18px', verticalAlign: 'middle', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={row.type} style={row.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: row.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 220 }}>
                        {row.type}
                        {row.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.cadre} label="Cadre" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.contenu} label="Contenu" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.suivi} label="Suivi" /></td>
                      <td style={{ ...td, fontSize: 13.5, color: '#374151', lineHeight: 1.65, minWidth: 240 }}>{row.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin porte plutôt sur la stratégie IA de votre organisation ? Notre guide{' '}
            <Link to="/meilleur-cabinet-conseil-ia" style={{ color: c, fontWeight: 600 }}>meilleur cabinet de conseil en IA</Link>{' '}
            compare les acteurs sous l'angle conseil. Pour un outil ou une application sur mesure,{' '}
            <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA</Link>{' '}
            détaille l'angle build. Pour le détail de nos programmes par outil, voyez le{' '}
            <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue des formations IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LES ORGANISMES DU MARCHÉ (comparatif factuel, noms réels, sans classement) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Les organismes du marché</div>
          <h2 style={h2Style}>La formation IA en France : qui fait quoi</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Plus haut, nous avons lu le marché par exigence. Voici les noms qui peuplent chaque famille.</strong>{' '}
            Ce tableau n'est ni un classement ni une recommandation : les organismes cités sont des exemples connus de leur catégorie, pour savoir vers qui regarder selon votre besoin.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Panorama non exhaustif. Vérifiez toujours la réalité du programme, le profil du formateur réellement staffé et les références avant de signer.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Panorama non classé des familles d'organismes de formation IA en France, avec des exemples reconnus, ce qu'ils font le mieux et le profil de client adapté
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Catégorie</th>
                  <th scope="col" style={thStyle}>Exemples d'organismes reconnus</th>
                  <th scope="col" style={thStyle}>Ce qu'ils font le mieux</th>
                  <th scope="col" style={thStyle}>Plutôt adapté à</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_ACTORS.map((a, i) => {
                  const td = { padding: '18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.65, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  const last = i === MARKET_ACTORS.length - 1
                  return (
                    <tr key={a.cat} style={last ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: last ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 180 }}>{a.cat}</th>
                      <td style={{ ...td, minWidth: 200, color: last ? c : '#374151', fontWeight: last ? 600 : 400 }}>{a.names}</td>
                      <td style={{ ...td, minWidth: 220 }}>{a.best}</td>
                      <td style={{ ...td, minWidth: 180 }}>{a.fit}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>Masteria</strong> appartient à la dernière famille, les organismes spécialisés qui construisent chaque session sur le métier réel des participants. Nous formons aussi bien des équipes en PME que des directions dans de grandes organisations, en adaptant le format à la taille et à la maturité de chaque structure.
          </p>
        </div>
      </section>

      {/* ── COMMENT CHOISIR EN PRATIQUE : LES 4 ÉTAPES (timeline) ── */}
      <section id="methode" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>Comment choisir en pratique : 4 étapes pour trancher en une semaine</h2>
          <p style={leadStyle}>
            Pas besoin d'un appel d'offres pour choisir une formation IA. Voici le chemin le plus court pour comparer les bons organismes et décider sans attendre le trimestre prochain.
          </p>
          <p style={mutedStyle}>
            Les durées sont indicatives. L'étape 2 est celle que la plupart des entreprises sautent, et c'est celle qui coûte le plus cher à sauter.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 19, top: 18, bottom: 18, width: 2, background: '#E5E7EB' }} />
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
              {PROCESS.map((p, i) => (
                <li key={p.step} style={{ position: 'relative', paddingLeft: 60 }}>
                  <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, width: 40, height: 40, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>{i + 1}</span>
                  <div style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.step}</h3>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: c, background: cLight, borderRadius: 99, padding: '4px 11px', whiteSpace: 'nowrap' }}>{p.duration}</span>
                    </div>
                    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{p.goal}</p>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 8px' }}><strong style={{ color: '#0A0A0A' }}>Livrable : </strong>{p.deliver}</p>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}><strong style={{ color: c }}>Point de vigilance : </strong><span style={{ color: '#374151' }}>{p.watch}</span></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── TARIFS 2026 (ancre sombre) ── */}
      <section id="tarifs" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Tarifs 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte une formation IA en 2026 (par format) ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Comptez de gratuit à quelques dizaines d'euros pour un MOOC, plusieurs milliers d'euros pour un bootcamp de reconversion certifiant, et 1 980 € HT par jour pour une formation intra ou individuelle chez Masteria.</strong>{' '}
            Seule la formation délivrée par un organisme certifié Qualiopi ouvre droit à un financement OPCO.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ordres de grandeur larges constatés sur le marché français, qui varient selon le format, la durée et le nombre de participants. Pour situer le coût d'un projet IA plus large que la formation, notre guide des{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>prix d'un projet IA</Link>{' '}
            détaille les postes de coût.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Tarifs constatés en 2026 par format de formation IA sur le marché français</caption>
              <thead>
                <tr>
                  {['Format', 'Tarif constaté', 'Précisions'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => (
                  <tr key={b.mission}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{b.mission}</th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{b.range}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>À savoir pour votre financement :</strong> la certification Qualiopi conditionne l'accès à l'OPCO et au plan de développement des compétences. Le CPF ne finance que les formations rattachées à une certification RNCP ou RS, ce qui exclut la plupart des formations courtes sur l'usage des outils IA au profit des bootcamps longs de reconversion. Un organisme qui promet un financement CPF sur une formation courte à l'usage des outils mérite une vérification attentive.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="La formation IA en quelques repères vérifiables" />
          <p style={answerStyle}>
            Deux dates pour situer l'obligation et le cadre, le vocabulaire qui revient dans tout choix de formation, et les sources officielles. Pour encadrer vos usages une fois vos équipes formées, notre guide{' '}
            <Link to="/gouvernance-ia" style={{ color: c, fontWeight: 600 }}>gouvernance de l'IA et AI Act</Link>{' '}
            détaille le cadre de conformité.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Définitions</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Le vocabulaire du financement</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Quatre notions reviennent dans tout choix de formation IA en entreprise.
              </p>
            </div>
            <div>
              <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={g.term} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '24px 0 12px', fontWeight: 700 }}>Sources et références officielles</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {REFERENCES.map(r => (
                  <li key={r.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, fontSize: 14.5, textDecoration: 'underline', textUnderlineOffset: 2, lineHeight: 1.6 }}>{r.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTERIA : le profil construit pour ce résultat ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre positionnement</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Pourquoi Masteria est construit pour ce résultat</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Qualiopi · Sur mesure · Suivi à 30 jours
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Votre question porte plutôt sur les modèles (ChatGPT, Claude, Gemini, Mistral) ? Voyez notre comparatif{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA</Link>.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Mathias Nizan a fondé Masteria à Lyon en 2022, uniquement sur l'intelligence artificielle. Nous construisons chaque session pour qu'elle change une pratique, pas pour qu'elle occupe une journée.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 14 }}>
                  {[
                    ['Le cadre', 'certifié Qualiopi, formations finançables par votre OPCO ou votre plan de développement des compétences.'],
                    ['Le contenu', 'audit des besoins avant chaque session, programme construit sur les dossiers réels de vos équipes, formateurs qui utilisent ces outils dans leur propre pratique.'],
                    ['Le suivi', 'kit de prompts et de ressources propre à chaque métier, suivi à 30 jours inclus pour mesurer l\'adoption.'],
                  ].map(([t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <BadgeCheck size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}><strong style={{ color: '#0A0A0A' }}>{t} : </strong>{d}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Nous restons indépendants des éditeurs : nos recommandations d'outils sont argumentées, jamais commissionnées. Interventions en France, en Suisse et en Belgique, en présentiel comme à distance. Mathias Nizan est cité par Les Échos sur le choix des modèles d'IA en entreprise.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  Nous formons aussi bien des équipes en PME que des directions dans de grandes organisations, du service opérationnel au comité de direction. Le format s'adapte à la taille et à la maturité de chaque structure. Pour voir le détail de nos programmes, consultez notre{' '}
                  <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue de formations IA</Link>, la page{' '}
                  <Link to="/financement-formation-ia" style={{ color: c, fontWeight: 600 }}>financement</Link> pour identifier les dispositifs mobilisables, ou jugez sur pièces avec nos{' '}
                  <Link to="/etudes-de-cas-ia" style={{ color: c, fontWeight: 600 }}>études de cas IA</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FONDATEUR (E-E-A-T) ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur le choix d'une formation IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Un avis franc sur votre besoin</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décrivez votre équipe, on vous propose un format
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
              En quelques lignes, dites-nous quel métier former et ce que vous voulez que ça change. Lors d'un échange de cadrage gratuit, nous vous proposons un format, ou vous orientons vers un autre profil d'organisme si le vôtre correspond mieux.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange gratuit et sans engagement · Réponse sous 24 h · Certifié Qualiopi
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
