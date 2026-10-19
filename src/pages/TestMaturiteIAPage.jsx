import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, Compass, Gauge, RefreshCw, Rocket, Sprout,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/*
 * « Test de maturité IA » — outil gratuit liable (autorité + leads diagnostic).
 * 8 questions fermées, score 0-24, 4 profils avec recommandations honnêtes.
 * INTÉGRITÉ : le test qualifie une situation, il ne promet aucun chiffre ;
 * les recommandations pointent vers les offres réelles (diagnostic, formation,
 * conseil). Les 4 profils sont rendus statiquement sous le questionnaire :
 * contenu crawlable et citable sans interaction (prerender + GEO).
 */

const c = '#2563EB'
const SECTION_PAD = 'clamp(56px, 8vw, 90px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 26 }

/* 8 dimensions, 4 réponses graduées (0 à 3 points). */
const QUESTIONS = [
  { q: "Aujourd'hui, vos équipes utilisent l'IA générative…", opts: ['Pas du tout, ou en cachette', 'Quelques personnes, à titre personnel', 'Une partie des équipes, sans cadre commun', 'Largement, avec des pratiques partagées'] },
  { q: 'Les comptes et outils IA de votre entreprise sont…', opts: ["Inexistants : chacun utilise des comptes gratuits personnels", 'Quelques abonnements payés individuellement', 'Des licences pro sur une partie des équipes', "Des licences d'entreprise déployées et administrées"] },
  { q: "La formation des équipes à l'IA…", opts: ["N'a pas commencé", 'Quelques autodidactes se débrouillent', 'Une première session a eu lieu', 'Un parcours structuré existe, par métier ou par niveau'] },
  { q: "Les cas d'usage IA de votre activité sont…", opts: ['Pas identifiés', 'Évoqués, jamais listés sérieusement', 'Cartographiés sur une ou deux équipes', 'Cartographiés et priorisés par valeur'] },
  { q: "Le cadre d'usage (charte, règles de confidentialité)…", opts: ["N'existe pas", 'En réflexion', 'Une charte existe, peu connue des équipes', 'Charte diffusée, appliquée et mise à jour'] },
  { q: 'La confidentialité des données dans les outils IA…', opts: ["Personne ne s'est posé la question", 'Des consignes orales, au cas par cas', 'Des règles écrites sur ce qui peut y entrer', 'Des règles écrites, outillées (comptes pro, données exclues de l\'entraînement)'] },
  { q: "Les gains apportés par l'IA…", opts: ['Aucune idée', 'Des impressions, rien de mesuré', 'Quelques mesures ponctuelles (temps gagné, volumes)', 'Un suivi régulier avec des indicateurs'] },
  { q: 'Le portage du sujet par la direction…', opts: ["Le sujet n'est pas à l'agenda", 'De la curiosité, pas de décision', 'Un budget ou un responsable identifié', 'Une feuille de route validée et suivie en comité'] },
]

/* Les 4 niveaux du test. « signes » = repères observables pour se situer sans
 * le test ; « recos » = ce que l'on fait à ce niveau (affiché aussi dans le
 * résultat). Rendus statiquement dans #profils. */
const PROFILS = [
  {
    min: 0, max: 6, icon: Sprout, name: 'Découverte', range: '0 à 6 points',
    desc: "L'IA reste un sujet individuel, sans cadre ni impulsion. C'est le point de départ le plus courant, et le plus risqué : les usages existent déjà, mais en dehors de tout contrôle (comptes personnels, données non protégées).",
    signes: [
      "Des salariés se servent d'assistants d'IA avec leur adresse personnelle, sans que l'entreprise le sache.",
      "Personne ne peut dresser la liste des outils d'IA utilisés dans les équipes.",
      'Aucune règle écrite ne dit ce qui peut être copié dans un assistant.',
      'Le sujet revient en réunion sans décision ni responsable désigné.',
    ],
    recos: ["Poser un premier cadre simple : quels outils, quelles données, ce qui est interdit", "Acculturer large avant d'équiper : une sensibilisation courte pour toute l'équipe", "Identifier 3 cas d'usage à fort volume pour prouver la valeur rapidement"],
    cta: { label: 'Commencer par un Sprint IA de sensibilisation', href: '/formation-ia-debutant' },
  },
  {
    min: 7, max: 12, icon: Compass, name: 'Exploration', range: '7 à 12 points',
    desc: "Des pionniers avancent, l'entreprise regarde. La valeur apparaît par endroits mais rien ne se capitalise : chacun réinvente ses prompts, les pratiques ne circulent pas, la conformité reste floue.",
    signes: [
      'Quelques pionniers obtiennent des résultats et les montrent à leurs collègues.',
      'Des abonnements sont réglés équipe par équipe, parfois en notes de frais.',
      'Une première formation a eu lieu, sans suite programmée.',
      "Les idées de cas d'usage circulent à l'oral et ne figurent sur aucune liste.",
      "La confidentialité se règle au cas par cas, selon la personne à qui l'on pose la question.",
    ],
    recos: ['Cartographier les cas d\'usage par métier et les prioriser par valeur', 'Former les équipes clés sur leurs propres fichiers et leurs dossiers en cours', "Écrire la charte d'usage et choisir les comptes professionnels adaptés"],
    cta: { label: 'Cadrer avec un diagnostic IA', href: '/diagnostic-ia' },
  },
  {
    min: 13, max: 18, icon: Gauge, name: 'Structuration', range: '13 à 18 points',
    desc: "Le socle existe : des licences, une charte, des équipes formées. L'enjeu bascule vers la profondeur des usages, la mesure des gains et l'industrialisation de ce qui marche (assistants partagés, automatisations).",
    signes: [
      "L'entreprise a choisi ses outils et paie des licences professionnelles qu'elle administre.",
      "Une charte d'usage existe et chaque nouvel arrivant la reçoit.",
      "Les cas d'usage sont recensés par métier et rangés par priorité.",
      'Des assistants et des bibliothèques de prompts circulent entre collègues.',
      "Les gains sont estimés à l'oral ; peu d'indicateurs les suivent.",
    ],
    recos: ["Mesurer : temps gagné, volumes traités, qualité, sur 2 ou 3 processus", 'Passer des usages individuels aux actifs partagés (assistants, bibliothèques de prompts)', 'Former les managers à piloter les usages de leur équipe, au-delà de la prise en main des outils'],
    cta: { label: 'Structurer avec le conseil IA', href: '/conseil-intelligence-artificielle' },
  },
  {
    min: 19, max: 24, icon: Rocket, name: 'Déploiement', range: '19 à 24 points',
    desc: "L'IA est un chantier piloté : feuille de route, indicateurs, gouvernance. Les gains viennent maintenant du sur-mesure : agents connectés à votre système d'information, automatisations de bout en bout, et montée en compétence continue.",
    signes: [
      'Une feuille de route IA est validée, puis revue en comité à date fixe.',
      'Des indicateurs suivent le temps gagné ou les volumes traités sur plusieurs processus.',
      'Des agents ou des automatisations sont reliés aux logiciels métier : CRM, ERP, gestion documentaire.',
      "La liste des systèmes d'IA en service est tenue à jour, avec leur niveau de risque au sens de l'AI Act.",
      'La formation continue par vagues, au rythme des nouveaux outils.',
    ],
    recos: ["Développer les agents et outils propres à vos processus (RAG, intégrations SI)", 'Auditer la conformité AI Act et la gouvernance des données en continu', 'Installer une veille et un programme de formation permanent par vagues'],
    cta: { label: 'Construire sur mesure avec notre agence', href: '/agence-developpement-ia' },
  },
]

/* Comment se situer : cinq précautions, puis la preuve à chercher par dimension */
const ETAPES = [
  { t: 'Décrire la situation présente', d: "Une charte en projet compte comme une charte absente. Un outil commandé que les équipes n'ont pas encore ouvert n'entre pas dans le score. Le test relève le point de départ ; la cible trouvera sa place dans la feuille de route." },
  { t: 'Croiser trois regards', d: "Un membre de la direction, un manager et un utilisateur régulier répondent chacun de leur côté. Un écart entre leurs scores est une information en soi : une direction qui se voit en Structuration face à des équipes en Exploration a d'abord un problème de diffusion. Dans une organisation à plusieurs sites ou directions, passez le test pour chacune." },
  { t: 'Chercher la preuve', d: "Une licence se compte, une charte se montre, un gain se mesure. Le tableau ci-dessous indique la pièce à trouver pour chaque dimension ; une réponse que rien ne vient étayer redescend d'un cran." },
  { t: 'Partir de la dimension la plus basse', d: "Le score situe l'ensemble ; la prochaine action se choisit sur la dimension restée la plus faible. Une entreprise bien équipée qui n'a fixé aucune règle sur les données avance avec un risque qu'elle ne voit pas." },
  { t: 'Dater, puis recommencer', d: "Notez la date du résultat et refaites le test après chaque étape franchie : une formation, une charte diffusée, un nouvel outil. Deux scores datés racontent le chemin parcouru avec plus de netteté qu'une impression." },
]

const DIMENSIONS = [
  { dim: 'Usages réels', regard: "Qui se sert de l'IA, pour quelles tâches, à quel rythme", preuve: 'Les tâches que les équipes citent sans hésiter, et les personnes qui les pratiquent chaque semaine' },
  { dim: 'Comptes et outils', regard: "Comptes gratuits personnels, abonnements individuels ou licences gérées par l'entreprise", preuve: "La liste des outils que l'entreprise règle, comparée aux outils ouverts sur les postes" },
  { dim: 'Formation', regard: 'Ce que les équipes ont appris, et si le contenu colle à leur métier', preuve: "Une trace des formations suivies, qui documente aussi l'obligation de maîtrise de l'IA (article 4 du règlement européen)" },
  { dim: "Cas d'usage", regard: "Les situations de travail où l'IA apporte quelque chose", preuve: 'Une liste écrite où chaque cas a un responsable et un rang de priorité' },
  { dim: "Cadre d'usage", regard: 'Outils autorisés, usages proscrits, relecture humaine', preuve: 'Une charte que les salariés savent retrouver, et dont ils citent au moins une règle' },
  { dim: 'Données', regard: "Ce qui peut entrer dans un outil d'IA et ce qui doit rester dehors", preuve: "Des consignes par type de donnée (clients, salariés, finances) et des comptes qui excluent vos contenus de l'entraînement des modèles" },
  { dim: 'Mesure des gains', regard: "Ce que l'IA change en temps, en volume ou en qualité", preuve: 'Un indicateur relevé avant et après, sur un processus au moins' },
  { dim: 'Portage par la direction', regard: 'La place du sujet dans les décisions', preuve: 'Un responsable nommé, un budget, une feuille de route revue à échéance régulière' },
]

/* Lexique express (ancrage d'entités GEO → DefinedTermSet) */
const LEXIQUE = [
  { t: 'Maturité IA', d: "Le niveau d'intégration de l'IA dans une organisation, apprécié sur plusieurs dimensions : usages réels, outillage, formation, cadre d'usage, mesure des gains et portage par la direction. Un parc de licences sans usages ni règles reste un niveau bas." },
  { t: 'Charte IA', d: "Document interne qui fixe les règles d'usage de l'IA : outils autorisés, données interdites, validation humaine, cas d'usage encadrés. C'est la première brique de gouvernance, avant même le choix des outils." },
  { t: 'Littératie IA', d: "La capacité des équipes à comprendre et utiliser l'IA à bon escient. L'article 4 de l'AI Act en fait une obligation pour les entreprises qui déploient des systèmes d'IA, opposable depuis le 2 février 2025." },
  { t: 'Gouvernance IA', d: "L'ensemble des dispositifs qui pilotent les usages : registre des cas d'usage, comité, charte, conformité RGPD et AI Act, revue régulière des outils et des risques." },
]

const FAQ = [
  { q: "Qu'est-ce que la maturité IA d'une entreprise ?", a: "La maturité IA décrit jusqu'où une entreprise a fait passer l'intelligence artificielle des essais individuels au travail courant. Elle s'apprécie sur huit dimensions : usages, outils, formation, cas d'usage, cadre, données, mesure des gains et portage par la direction. Une entreprise qui a acheté des licences pour tous peut rester à un niveau bas si personne ne sait ce qu'il a le droit d'y saisir." },
  { q: 'Quels sont les quatre niveaux de maturité IA ?', a: "Découverte : l'IA reste une affaire individuelle, sans cadre. Exploration : des pionniers avancent, mais leurs acquis ne se transmettent pas. Structuration : outils choisis, charte, équipes formées ; la question devient la mesure des gains. Déploiement : feuille de route suivie, indicateurs, agents reliés au système d'information. Le test vous place dans l'un d'eux selon votre score sur 24." },
  { q: "Comment évaluer la maturité IA de son entreprise ?", a: "Faites passer le test de cette page à trois personnes (un dirigeant, un manager, un utilisateur régulier) pour croiser les regards. Vérifiez ensuite chaque réponse par une pièce : licence, charte, liste de cas d'usage, indicateur. Pour un constat écrit que vous pourrez présenter en comité, un audit de maturité IA conduit par un intervenant extérieur ajoute les entretiens et l'examen des outils et des données." },
  { q: 'Comment le score est-il calculé ?', a: "Huit questions couvrent les dimensions qui déterminent la maturité IA d'une organisation : usages réels, outillage, formation, cas d'usage, cadre, confidentialité, mesure et portage par la direction. Chaque réponse vaut de 0 à 3 points, soit un score sur 24, rattaché à l'un des quatre profils. Le test qualifie une situation en 3 minutes ; il ne remplace pas un audit." },
  { q: "Combien de temps faut-il pour passer au niveau suivant ?", a: "Cela dépend du point de départ et des moyens engagés. L'ordre de grandeur se compte en trimestres : poser un cadre et former une première équipe se fait en quelques semaines ; structurer la mesure et les actifs partagés demande un ou deux trimestres ; le déploiement outillé (agents, intégrations) est un chantier continu. Le portage par la direction pèse davantage que la taille de l'entreprise." },
  { q: 'Faut-il viser le niveau Déploiement ?', a: "Le bon niveau dépend de votre activité. Une PME de services peut tirer l'essentiel de la valeur d'un socle de Structuration : outils choisis, charte appliquée, équipes formées, quelques assistants partagés. Les agents reliés au système d'information se justifient quand un processus à fort volume les rend rentables, et le chiffrage de ce processus vient avant le développement." },
  { q: 'Ce test remplace-t-il un audit de maturité IA ?', a: "Non. Le test photographie la situation en 8 questions déclaratives ; un audit examine les processus, les données, les outils et les usages réels sur pièces et sur entretiens. Utilisez le test pour situer le point de départ et cadrer la discussion, le diagnostic IA pour choisir les premiers cas d'usage, l'audit de maturité IA pour un constat complet suivi d'une feuille de route." },
  { q: 'Mes réponses sont-elles enregistrées ?', a: 'Non. Le test fonctionne entièrement dans votre navigateur : aucune réponse ne quitte votre poste, aucun compte ni email n\'est demandé pour voir le résultat.' },
  { q: 'Que faire de mon résultat ?', a: "Chaque profil vient avec trois priorités concrètes et l'offre Masteria correspondante : sensibilisation pour le profil Découverte, diagnostic pour l'Exploration, conseil pour la Structuration, développement sur mesure pour le Déploiement. Les 30 premières minutes de cadrage sont offertes." },
  { q: 'Le test vaut-il pour une PME comme pour un grand groupe ?', a: "Oui, les dimensions évaluées sont les mêmes ; seule l'ampleur des réponses change. Une PME de 30 personnes atteint le profil Structuration avec des moyens légers, là où un groupe devra outiller chaque direction. Les recommandations s'adaptent lors du cadrage." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4, fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <ChevronDown size={18} strokeWidth={2} style={{ flexShrink: 0, color: '#6B7280', marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Maillage croisé entre les outils gratuits du site */
const AUTRES_OUTILS = [
  { href: '/quel-opco', label: 'Quel est mon OPCO ? (simulateur)' },
  { href: '/quel-outil-ia', label: 'Quel outil IA pour votre métier ?' },
  { href: '/bibliotheque-de-prompts', label: 'Bibliothèque de 112 prompts' },
]

const PAGE_URL = 'https://www.master-ia.fr/test-maturite-ia'

/* Entité outil gratuit (rich result Software + signal GEO « outil ») */
const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#app`,
  name: 'Test de maturité IA',
  url: PAGE_URL,
  description: "Auto-évaluation gratuite de la maturité IA d'une entreprise : 8 questions, un score sur 24, un profil parmi 4 niveaux et les priorités pour progresser. Aucune donnée collectée.",
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  inLanguage: 'fr-FR',
}

const definedTermsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${PAGE_URL}#lexique`,
  name: 'Lexique de la maturité IA',
  hasDefinedTerm: LEXIQUE.map(({ t, d }) => ({ '@type': 'DefinedTerm', name: t, description: d })),
}

/* Grille des niveaux (ItemList citable) */
const niveauxJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#profils`,
  name: 'Les quatre niveaux de maturité IA',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROFILS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${p.name} (${p.range})`,
    description: p.desc,
  })),
}

export default function TestMaturiteIAPage() {
  const [answers, setAnswers] = useState({})
  const done = Object.keys(answers).length === QUESTIONS.length
  const score = Object.values(answers).reduce((a, b) => a + b, 0)
  const profil = done ? PROFILS.find(p => score >= p.min && score <= p.max) : null

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Diagnostic IA', slug: 'diagnostic-ia' },
    { name: 'Test de maturité IA', slug: 'test-maturite-ia' },
  ]

  return (
    <>
      <SEOHead
        title="Audit de maturité IA gratuit : test et grille des 4 niveaux | Masteria"
        description="Maturité IA d'une entreprise : définition, 4 niveaux et leurs signes observables, test gratuit en 8 questions, actions à mener à chaque niveau."
        slug="test-maturite-ia"
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        keywords="maturité ia, maturité ia entreprise, audit de maturité ia, niveaux de maturité ia, grille de maturité ia, test maturité ia, évaluer maturité intelligence artificielle, test maturité ia gratuit"
        datePublished="2026-08-06"
        dateModified="2026-10-19"
        speakable={['#definition', '#geo-summary', '#profils']}
        citations={[
          { name: 'Règlement (UE) 2024/1689 (AI Act)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          { name: 'CNIL, Intelligence artificielle', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
        ]}
        extraJsonLd={[webAppJsonLd, definedTermsJsonLd, niveauxJsonLd]}
      />

      {/* ── HERO sombre compact ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(48px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/diagnostic-ia" style={{ color: '#5B6679' }}>Diagnostic IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Test de maturité</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Gauge size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Outil gratuit · 3 minutes</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 780 }}>
            Audit de maturité IA gratuit&nbsp;: où en est votre entreprise&nbsp;?
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 20px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en octobre 2026
          </p>

          {/* Définition citable (GEO, speakable) : répond à « maturité IA » */}
          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 740 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              La maturité IA d'une entreprise désigne la place que l'intelligence artificielle a prise dans son fonctionnement ordinaire. Elle se lit sur huit dimensions : usages des équipes, comptes et outils, formation, cas d'usage repérés, règles d'usage, protection des données, mesure des gains, engagement de la direction. Quatre niveaux la résument, de la découverte au déploiement.
            </p>
          </div>

          <p id="geo-summary" style={{ fontSize: 'clamp(16px, 2.2vw, 18.5px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Huit questions sur vos usages, votre outillage, votre cadre et votre pilotage. À la clé : un score sur 24, votre profil parmi quatre niveaux de maturité, et les trois priorités qui font passer au niveau suivant. Aucune réponse ne quitte votre navigateur.
          </p>

          {/* Sommaire ancré « Sur cette page » (sitelinks + navigation) */}
          <nav aria-label="Sur cette page" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
            {[['Le test', '#test'], ['Les 4 niveaux', '#profils'], ['Se situer', '#se-situer'], ['Test ou audit', '#audit-maturite'], ['Lexique', '#lexique'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', textDecoration: 'none', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 12px' }}>
                {label}
              </a>
            ))}
          </nav>

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(18px, 3vw, 24px)', maxWidth: 720 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 12 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {[
                ['Format', '8 questions fermées, 3 minutes, sans compte ni email'],
                ['Résultat', 'Score sur 24, profil parmi 4 niveaux, 3 priorités concrètes'],
                ['Confidentialité', 'Aucune réponse ne quitte votre navigateur'],
                ['Et après', 'Un diagnostic IA transforme le score en feuille de route'],
              ].map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '8px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 13.5, color: '#94A3B8', lineHeight: 1.55 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LE TEST ── */}
      <section id="test" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {QUESTIONS.map((item, qi) => (
            <fieldset key={qi} style={{ border: 'none', padding: 0, margin: '0 0 28px' }}>
              <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 12, lineHeight: 1.4 }}>
                {qi + 1}. {item.q}
              </legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 8 }}>
                {item.opts.map((opt, oi) => {
                  const selected = answers[qi] === oi
                  return (
                    <label key={oi} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer',
                      border: `2px solid ${selected ? c : '#E5E7EB'}`, background: selected ? '#F8FAFF' : '#fff',
                      borderRadius: 10, padding: '11px 14px', fontSize: 14, color: '#374151', lineHeight: 1.5,
                    }}>
                      <input
                        type="radio" name={`q${qi}`} checked={selected}
                        onChange={() => setAnswers(a => ({ ...a, [qi]: oi }))}
                        style={{ marginTop: 3, accentColor: c }}
                      />
                      {opt}
                    </label>
                  )
                })}
              </div>
            </fieldset>
          ))}

          {/* Résultat */}
          <div aria-live="polite">
            {done && profil && (
              <div style={{ border: `2px solid ${c}`, borderRadius: 16, padding: 'clamp(22px, 3vw, 32px)', background: '#F8FAFF' }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 8 }}>Votre résultat</div>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', margin: '0 0 4px' }}>
                  {score} / 24 : profil {profil.name}
                </p>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>{profil.desc}</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Vos trois priorités</p>
                <ul style={{ margin: '0 0 18px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {profil.recos.map(r => <li key={r} style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{r}</li>)}
                </ul>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to={profil.cta.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                    {profil.cta.label} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <button onClick={() => setAnswers({})} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 20px', fontSize: 14, fontWeight: 600, color: '#374151', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    <RefreshCw size={14} aria-hidden="true" /> Recommencer
                  </button>
                </div>
              </div>
            )}
            {!done && (
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0 }}>
                {Object.keys(answers).length} / {QUESTIONS.length} réponses. Le résultat s'affiche ici dès la dernière réponse.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── LES 4 PROFILS (contenu statique citable) ── */}
      <section id="profils" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La grille de lecture</div>
          <h2 style={h2Style}>Les quatre niveaux de maturité IA et leurs signes observables</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 760 }}>
            Chaque niveau correspond à une plage du score du test. Les signes listés sous chacun permettent aussi de vous situer sans passer le test : retenez le niveau dont vous reconnaissez le plus de signes, puis regardez ce que l'on y fait pour monter d'un cran.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 18 }}>
            {PROFILS.map(({ icon: Icon, name, range, desc, signes, recos, cta }) => (
              <div key={name} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, flexShrink: 0, background: '#DBEAFE', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 2px' }}>{name}</h3>
                    <p style={{ fontSize: 12.5, color: c, fontWeight: 700, margin: 0 }}>{range}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>{desc}</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>Signes observables</p>
                <ul style={{ margin: '0 0 16px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {signes.map(s => <li key={s} style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{s}</li>)}
                </ul>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>Ce que l'on fait à ce niveau</p>
                <ul style={{ margin: '0 0 18px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {recos.map(r => <li key={r} style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{r}</li>)}
                </ul>
                <Link to={cta.href} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                  {cta.label} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '24px 0 0', maxWidth: 820 }}>
            À tout niveau, un regard extérieur peut confirmer le classement. L'<Link to="/audit-ia" style={{ color: c, fontWeight: 600 }}>audit de maturité IA</Link> vérifie vos réponses en entretien et sur pièces, puis les traduit en feuille de route ; le <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>, sur un format court, désigne les premiers cas d'usage à traiter.
          </p>
        </div>
      </section>

      {/* ── SE SITUER ── */}
      <section id="se-situer" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={kickerStyle}>Méthode</div>
          <h2 style={h2Style}>Comment situer votre entreprise</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 26px', maxWidth: 760 }}>
            Un score n'aide à décider que s'il décrit l'entreprise telle qu'elle tourne aujourd'hui. Cinq précautions rendent l'exercice fiable, avec ou sans le test.
          </p>
          <ol style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ETAPES.map(({ t, d }, i) => (
              <li key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 99, background: '#DBEAFE', color: c, fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{i + 1}</span>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px' }}>La preuve à chercher pour chaque dimension</h3>
          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 14 }}>
            <table aria-label="Les huit dimensions de la maturité IA, ce que l'on regarde et la preuve à chercher" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  {["Dimension", "Ce que l'on regarde", 'La preuve à chercher'].map((h, i) => (
                    <th key={h} scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '12px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', width: i === 0 ? '22%' : '39%' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DIMENSIONS.map(({ dim, regard, preuve }, i) => (
                  <tr key={dim} style={{ borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                    <th scope="row" style={{ textAlign: 'left', padding: '12px 16px', fontSize: 14, fontWeight: 700, color: '#0A0A0A', verticalAlign: 'top' }}>{dim}</th>
                    <td style={{ padding: '12px 16px', fontSize: 14, color: '#374151', lineHeight: 1.6, verticalAlign: 'top' }}>{regard}</td>
                    <td style={{ padding: '12px 16px', fontSize: 14, color: '#374151', lineHeight: 1.6, verticalAlign: 'top' }}>{preuve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DU TEST À L'AUDIT DE MATURITÉ IA ── */}
      <section id="audit-maturite" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={kickerStyle}>Aller plus loin</div>
          <h2 style={h2Style}>Du test en ligne à l'audit de maturité IA</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 26px', maxWidth: 780 }}>
            Le test repose sur vos déclarations. Un audit de maturité IA les confronte au terrain : un intervenant extérieur rencontre les personnes concernées, ouvre les outils et lit les règles en vigueur avant de conclure.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 18, marginBottom: 26 }}>
            {[
              { titre: 'Ce que donne le test', items: ['Un score sur 24 et un niveau parmi quatre', 'Trois priorités pour passer au niveau suivant', 'Une base commune pour ouvrir la discussion en comité de direction', 'Des réponses déclaratives, que personne ne vient contrôler'] },
              { titre: "Ce qu'ajoute un audit de maturité IA", items: ['Des entretiens avec la direction, les managers et les métiers', 'L\'examen des comptes ouverts, des outils installés et des règles écrites', "Un état des données que l'IA pourrait exploiter, et de celles à protéger", 'Une feuille de route écrite action par action, avec un porteur pour chacune'] },
            ].map(({ titre, items }) => (
              <div key={titre} style={cardStyle}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>{titre}</h3>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {items.map(it => <li key={it} style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 820 }}>
            L'audit devient utile à partir du niveau Exploration, quand il existe des usages à trier, des abonnements à rationaliser et des règles à écrire. Au niveau Découverte, une sensibilisation des équipes apporte davantage, car il y a encore peu à examiner. Pour l'audit comme pour le diagnostic, durée et forfait sont fixés au cadrage, selon le périmètre retenu.
          </p>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 820 }}>
            Vous dirigez un établissement ou un service médico-social ? L'<Link to="/audit-ia-medico-social" style={{ color: c, fontWeight: 600 }}>audit IA médico-social</Link> tient compte des données d'usagers et des attentes de l'ARS ou du conseil départemental.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/audit-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
              Découvrir l'audit IA <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#0A0A0A', border: '1px solid #E5E7EB', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 600 }}>
              Le diagnostic IA, format court <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEXIQUE EXPRESS (DefinedTermSet) ── */}
      <section id="lexique" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>Lexique express</div>
          <h2 style={h2Style}>Les 4 notions derrière le score</h2>
          <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)' }}>
            <dl style={{ margin: 0 }}>
              {LEXIQUE.map(({ t, d }, i) => (
                <div key={t} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{t}</dt>
                  <dd style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '16px 0 0' }}>
            83 autres termes de l'IA en entreprise dans notre <Link to="/glossaire-ia" style={{ color: c, fontWeight: 600 }}>glossaire IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes</h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── AUTRES OUTILS GRATUITS ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>
            Nos autres outils gratuits
          </h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {AUTRES_OUTILS.map(o => (
              <Link key={o.href} to={o.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 15px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                {o.label} <ArrowRight size={13} color="#6B7280" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
