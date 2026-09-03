import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Compass, Code2, GraduationCap, ShieldCheck, BookOpen, Users, Target } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import CaseStudyCards from '../components/CaseStudyCards'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Consultant IA » — GUIDE MÉTIER à double tunnel.
 * Intention SERP dominante sur « consultant ia » (720/mois) = métier/emploi
 * (fiche métier, compétences, salaire, comment le devenir), PAS commercial pur.
 * La page colle à cette intention pour être rankable, puis canalise :
 *   - « je veux DEVENIR consultant IA » → formations Masteria
 *   - « je veux RECRUTER un consultant IA » → conseil / cabinet Masteria
 * Capte aussi freelance ia (KD14), expert ia, consultant intelligence artificielle.
 * Distincte de /meilleur-cabinet-conseil-ia (choix d'un cabinet) et
 * /conseil-intelligence-artificielle (offre de conseil). Intégrité : ordres de
 * grandeur de marché, aucun chiffre client inventé. Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'consultant-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Consultant IA : métier, compétences, TJM et salaire | Masteria'
const META_DESC = "Consultant IA : rôle, compétences, TJM et salaire, comment le devenir ou en recruter un. Le guide du métier de consultant en intelligence artificielle."
const KEYWORDS = 'consultant ia, consultant intelligence artificielle, consultant en ia, expert ia, expert en intelligence artificielle, freelance ia, consultant ia freelance, devenir consultant ia, salaire consultant ia, tjm consultant ia, fiche métier consultant ia, prestataire ia'

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

/* Les missions d'un consultant IA (le cœur du métier) */
const MISSIONS = [
  { icon: Compass, title: 'Auditer les usages et les données', body: "Cartographier les processus, les outils et les données de l'organisation pour situer son point de départ et repérer où l'IA a un impact réel." },
  { icon: Target, title: 'Cadrer et prioriser les cas d\'usage', body: "Trier les idées par valeur et faisabilité, écarter les gadgets, et bâtir une feuille de route que la direction peut réellement tenir." },
  { icon: Code2, title: 'Choisir les outils et l\'architecture', body: "Sélectionner les modèles et l'architecture (LLM, RAG, agents, intégration au SI) de façon indépendante, selon le contexte et le budget." },
  { icon: ShieldCheck, title: 'Cadrer la gouvernance', body: "Poser les règles d'usage, la conformité RGPD et AI Act, la sécurité et la supervision humaine des sorties." },
  { icon: GraduationCap, title: 'Déployer et former les équipes', body: "Accompagner la mise en production et transmettre les compétences pour que les équipes deviennent autonomes." },
]

/* Les 4 familles de compétences (meter 3 niveaux d'importance) */
const SKILLS = [
  { fam: 'Compétences techniques', level: 3, detail: "Modèles de langage (LLM), prompt engineering, RAG, notions de data et de MLOps, intégration par API et MCP." },
  { fam: 'Conseil & métier', level: 3, detail: "Analyse de processus, calcul du ROI, priorisation des cas d'usage, conduite du changement." },
  { fam: 'Réglementaire & sécurité', level: 2, detail: "RGPD, AI Act, souveraineté et sécurité des données, classification des cas d'usage par niveau de risque." },
  { fam: 'Pédagogie & communication', level: 2, detail: "Vulgariser, convaincre une direction, former et embarquer les équipes sur le terrain." },
]

/* TJM & salaire — ordres de grandeur du marché français (aucun chiffre inventé) */
const TARIFS = [
  { profil: 'Consultant IA salarié — junior', montant: '38 000 à 45 000 € / an', note: "0 à 2 ans, souvent un profil data, développement ou métier en évolution." },
  { profil: 'Consultant IA salarié — confirmé', montant: '50 000 à 70 000 € / an', note: '3 à 6 ans, missions autonomes, expertise sur un domaine.' },
  { profil: 'Consultant IA salarié — senior / lead', montant: '70 000 à 100 000 € et plus', note: 'Expertise rare, encadrement, souvent en région parisienne.' },
  { profil: 'Consultant IA freelance (TJM)', montant: '500 à 1 500 € / jour', highlight: true, note: 'Selon la séniorité et la rareté de la compétence ; au-delà pour une expertise pointue (LLM, MLOps).' },
  { profil: 'Consultant IA via un cabinet', montant: '1 000 à 2 000 € / jour', note: "Facturation d'un cabinet : équipe, méthode, continuité et garanties au-delà d'un profil isolé." },
]

/* Recruter : freelance vs cabinet vs interne (tableau texte) */
const HIRE = [
  { voie: 'Freelance indépendant', cout: 'TJM à la journée', force: 'Souplesse, coût maîtrisé sur une mission courte', limite: 'Un seul profil, disponibilité et continuité variables', when: "Un besoin ponctuel, cadré, sur une compétence précise." },
  { voie: 'Cabinet de conseil IA', cout: 'Forfait ou TJM', force: 'Équipe, méthode, continuité, du cadrage à la formation', limite: 'Coût plus élevé qu\'un freelance', highlight: true, when: "Un projet qui engage plusieurs métiers, dure, ou doit être construit puis transmis." },
  { voie: 'Recrutement interne', cout: 'Salaire + charges', force: 'Pérennité, connaissance fine de l\'entreprise', limite: 'Profil rare, cher et long à trouver et à garder', when: "Des projets IA continus et nombreux qui justifient un poste à plein temps." },
]

/* ── Repères citables (GEO) ── */
const MARKET_STATS = [
  { value: '2 février 2025', label: "entrée en application de l'article 4 de l'AI Act : les organisations qui déploient de l'IA doivent assurer un niveau de compétence suffisant à leurs équipes, ce qui nourrit la demande de consultants et de formation.", source: 'Union européenne', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '≥ 30 %', label: "des projets d'IA générative seraient abandonnés après le POC, faute de cadrage : c'est précisément le rôle d'un consultant IA de sécuriser ce passage (prévision Gartner publiée en 2024).", source: 'Gartner, 2024', url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025' },
  { value: '25 mai 2018', label: "application du RGPD, socle de toute mission touchant aux données mobilisées par l'IA.", source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const GLOSSARY = [
  { term: 'Consultant IA', def: "Professionnel qui accompagne les organisations sur l'usage de l'intelligence artificielle : audit, cadrage des cas d'usage, choix des outils, gouvernance et formation. Il peut exercer en indépendant (freelance), au sein d'un cabinet de conseil ou en interne." },
  { term: 'TJM (taux journalier moyen)', def: "Tarif facturé par jour par un consultant indépendant ou un cabinet. Pour un consultant IA, il varie le plus souvent de 500 à 1 500 € selon la séniorité et la rareté de la compétence." },
  { term: 'Expert IA', def: "Terme souvent employé comme synonyme de consultant IA, avec un accent plus technique (modèles, architecture, MLOps). Un consultant met davantage l'accent sur la stratégie, le cadrage et la conduite du changement." },
  { term: 'Freelance / portage salarial', def: "Modes d'exercice indépendants. Le freelance facture en direct ; le portage salarial permet d'exercer en indépendant tout en bénéficiant du statut de salarié porté." },
]

const REFERENCES = [
  { label: "Marché de l'emploi des cadres, APEC", url: 'https://www.apec.fr/' },
  { label: "Règlement européen sur l'IA (AI Act, 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { label: 'Intelligence artificielle, CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: 'France Num — transformation numérique des TPE/PME', url: 'https://www.francenum.gouv.fr/' },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'un consultant IA ?",
    a: "Un consultant IA (ou consultant en intelligence artificielle) accompagne les organisations sur l'usage de l'IA : il audite les usages et les données, cadre et priorise les cas d'usage, choisit les outils de façon indépendante, structure la gouvernance (RGPD, AI Act) et forme les équipes. Il peut exercer en indépendant, comme expert conseil IA au sein d'un cabinet, ou en interne. Son rôle n'est pas de coder un modèle, mais de faire en sorte que l'IA produise un résultat utile et adopté sur le terrain.",
  },
  {
    q: "Que fait un consultant en intelligence artificielle au quotidien ?",
    a: "Ses journées alternent des ateliers avec les métiers pour comprendre les processus, l'analyse de la valeur et de la faisabilité des cas d'usage, la rédaction de feuilles de route, la sélection d'outils et d'architectures (LLM, RAG, agents), le cadrage RGPD et AI Act, et l'accompagnement des équipes lors du déploiement. Un bon consultant passe autant de temps à écouter les utilisateurs qu'à manipuler la technologie.",
  },
  {
    q: "Quelles compétences faut-il pour être consultant IA ?",
    a: "Quatre familles se combinent : des compétences techniques (LLM, prompt engineering, RAG, notions de data et de MLOps, intégration par API), des compétences de conseil et métier (analyse de processus, calcul du ROI, priorisation, conduite du changement), une maîtrise du cadre réglementaire (RGPD, AI Act, sécurité des données) et de la pédagogie (vulgariser, convaincre, former). C'est cette combinaison, plus que la seule technique, qui distingue un consultant utile.",
  },
  {
    q: "Quel est le salaire d'un consultant IA ?",
    a: "En France, un consultant IA salarié débute le plus souvent entre 38 000 et 45 000 € brut par an, passe à 50 000 à 70 000 € une fois confirmé, et dépasse 70 000 à 100 000 € en profil senior ou lead, davantage pour une expertise rare en région parisienne. Ce sont des ordres de grandeur de marché qui varient selon la formation, le secteur et la localisation.",
  },
  {
    q: "Quel TJM pour un consultant IA freelance ?",
    a: "Le taux journalier moyen d'un consultant IA freelance se situe le plus souvent entre 500 et 1 500 € en France, selon la séniorité et la rareté de la compétence, et davantage pour une expertise pointue (IA générative à l'échelle, MLOps). Un cabinet facture plutôt entre 1 000 et 2 000 € par jour, car le tarif couvre une équipe, une méthode et des garanties au-delà d'un profil isolé.",
  },
  {
    q: "Comment devenir consultant IA, même sans être développeur ?",
    a: "Le métier est accessible depuis plusieurs profils : développeurs, data scientists, mais aussi chefs de projet, consultants d'un autre domaine ou experts métier en reconversion. La clé est d'acquérir les quatre familles de compétences et de pratiquer sur des cas réels. Une formation structurée aux outils d'IA générative, au prompt engineering et au cadrage des cas d'usage accélère fortement la montée en compétence. Chez Masteria, nos parcours certifiés Qualiopi couvrent précisément ce socle.",
  },
  {
    q: "Peut-on devenir consultant IA en reconversion ?",
    a: "Oui, et c'est un chemin fréquent. Une personne qui connaît déjà un métier (marketing, finance, RH, juridique, opérations) part avec un avantage : elle comprend les vrais processus à améliorer. Il lui reste à acquérir le socle IA (outils, prompt engineering, cadrage, gouvernance) par la formation et la pratique. Cette double culture, métier plus IA, est très recherchée.",
  },
  {
    q: "Consultant IA freelance ou via un cabinet : que choisir pour mon entreprise ?",
    a: "Un freelance indépendant apporte de la souplesse et un coût maîtrisé pour une mission courte et bien cadrée, mais vous dépendez d'un seul profil et de sa disponibilité. Un cabinet de conseil IA mobilise une équipe, une méthode et une continuité, et couvre plusieurs compétences ensemble (stratégie, développement, formation). La règle simple : un freelance pour un besoin ponctuel et précis, un cabinet dès que le projet engage plusieurs métiers, s'inscrit dans la durée ou doit être construit puis transmis.",
  },
  {
    q: "Quelle différence entre un consultant IA et un expert IA ?",
    a: "Les deux termes se recoupent largement. « Expert IA » met souvent l'accent sur la maîtrise technique (modèles, architecture, MLOps). « Consultant IA » insiste davantage sur la stratégie, le cadrage des cas d'usage et la conduite du changement. Dans la pratique, un bon consultant IA réunit les deux dimensions : il comprend la technique et sait la traduire en valeur pour l'organisation.",
  },
  {
    q: "Faut-il un diplôme pour être consultant IA ?",
    a: "Aucun diplôme n'est légalement obligatoire pour exercer comme consultant IA. Ce qui compte est la maîtrise réelle des compétences et des réalisations concrètes. Une formation reconnue rassure les clients et accélère l'apprentissage, mais un portfolio de projets menés compte souvent davantage qu'un titre.",
  },
  {
    q: "Comment recruter un bon consultant IA ?",
    a: "Vérifiez trois choses : une réalisation déjà menée en production, pas seulement des slides ; la capacité à écarter un cas d'usage mal choisi plutôt que de vendre du volume ; et l'organisation d'un transfert de compétence vers vos équipes. Demandez des références joignables et la spécialisation réelle sur l'IA. Méfiez-vous d'un prestataire qui promet un financement OPCO sur du conseil pur, qui n'est pas finançable.",
  },
  {
    q: "Masteria propose-t-il des consultants IA ?",
    a: "Oui. Masteria est un cabinet de conseil et développement spécialisé en IA : vous n'engagez pas un consultant isolé mais une équipe qui couvre le cadrage stratégique, le développement des solutions et la formation. Nous formons aussi les personnes qui souhaitent devenir consultant ou monter en compétence sur l'IA, via des parcours certifiés Qualiopi. Le premier échange de cadrage est gratuit.",
  },
  {
    q: "Un consultant IA intervient-il à Paris, à Lyon ou à distance ?",
    a: "Les deux fonctionnent. La proximité aide pour les ateliers de cadrage et la conduite du changement ; le distanciel convient au suivi, à la formation et aux missions bien périmétrées. Masteria est basé à Lyon et intervient à Paris, dans toute la France, ainsi qu'en Suisse et en Belgique, en présentiel comme à distance.",
  },
]

/* ───────── JSON-LD ───────── */

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire du métier de consultant IA',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Consultant IA : métier, compétences, TJM et salaire',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Consultant en intelligence artificielle', 'Métier IA', 'Conseil en IA'],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: [
    'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689',
    'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025',
  ],
}

function Meter({ level, label }) {
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'essentiel' : 'important'}`} style={{ display: 'inline-flex', gap: 4 }}>
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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
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

export default function ConsultantIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'Consultant IA', slug: SLUG },
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
        extraJsonLd={[definedTermSetJsonLd, articleJsonLd]}
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Consultant IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide métier · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Consultant IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le métier, les compétences et le juste tarif</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — définition */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>Un consultant IA accompagne les organisations sur l'usage de l'intelligence artificielle</strong> : il audite les usages, cadre les cas d'usage à fort impact, choisit les outils, structure la gouvernance et forme les équipes. Son métier n'est pas de coder un modèle, mais de faire en sorte que l'IA produise un résultat utile et adopté.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Ce guide couvre le métier, les compétences, le salaire et le TJM en 2026, comment devenir consultant IA et comment en recruter un pour votre entreprise.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#devenir" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Se former au métier
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <a href="#recruter" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Recruter un consultant
            </a>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Le métier', "Auditer, cadrer les cas d'usage, choisir les outils, cadrer la gouvernance et former les équipes à l'IA."],
                ['Compétences clés', "Technique (LLM, RAG, prompt), conseil et métier, réglementaire (RGPD, AI Act) et pédagogie."],
                ['Salaire salarié', "Junior 38 000 à 45 000 €, confirmé 50 000 à 70 000 €, senior 70 000 à 100 000 € et plus par an."],
                ['TJM freelance', "500 à 1 500 € par jour selon la séniorité ; 1 000 à 2 000 € via un cabinet."],
                ['Devenir ou recruter ?', "Se former pour le devenir (formation certifiée Qualiopi) ; passer par un cabinet ou un freelance pour en recruter un."],
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
            ['#metier', 'Le métier'],
            ['#competences', 'Compétences'],
            ['#tarif', 'TJM & salaire'],
            ['#devenir', 'Devenir consultant'],
            ['#recruter', 'Freelance ou cabinet'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LE MÉTIER : missions ── */}
      <section id="metier" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Le métier</div>
          <h2 style={h2Style}>Que fait un consultant en intelligence artificielle ?</h2>
          <p style={leadStyle}>
            Le consultant IA fait le lien entre une technologie qui avance vite et des organisations qui doivent en tirer une valeur concrète. Cinq missions reviennent dans presque toutes ses interventions.
          </p>
          <p style={mutedStyle}>
            La technique n'est qu'une partie du métier. L'essentiel se joue dans le choix des bons cas d'usage et dans l'adoption par les équipes.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {MISSIONS.map((m, i) => {
              const Icon = m.icon
              return (
                <div key={m.title} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={21} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c }}>{`0${i + 1}`}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(16.5px, 2vw, 19px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{m.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{m.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES (tableau meter) ── */}
      <section id="competences" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Les compétences</div>
          <h2 style={h2Style}>Les compétences d'un consultant IA</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Un bon consultant IA combine quatre familles de compétences.</strong>{' '}
            Les meilleurs ne sont pas les plus techniques, mais ceux qui savent traduire la technologie en valeur pour l'organisation et embarquer les équipes.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Trois points signalent une compétence essentielle au quotidien, deux une compétence importante.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <caption style={srOnlyStyle}>Les quatre familles de compétences d'un consultant IA et leur importance</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille de compétences</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Importance</th>
                  <th scope="col" style={thStyle}>Ce qu'elle recouvre</th>
                </tr>
              </thead>
              <tbody>
                {SKILLS.map((s, i) => {
                  const td = { padding: '18px', verticalAlign: 'middle', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={s.fam}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#0A0A0A', textAlign: 'left', minWidth: 200 }}>{s.fam}</th>
                      <td style={{ ...td, textAlign: 'center' }}><Meter level={s.level} label={s.fam} /></td>
                      <td style={{ ...td, fontSize: 13.5, color: '#374151', lineHeight: 1.65, minWidth: 300 }}>{s.detail}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TJM & SALAIRE (ancre sombre) ── */}
      <section id="tarif" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Rémunération 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Salaire et TJM d'un consultant IA en 2026</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un consultant IA salarié gagne de 38 000 € par an en début de carrière à plus de 100 000 € en profil senior. En freelance, le TJM va de 500 à 1 500 €, et de 1 000 à 2 000 € via un cabinet.</strong>{' '}
            Ce sont des ordres de grandeur du marché français, qui varient selon la séniorité, le secteur et la localisation.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            La rareté de la compétence tire les tarifs vers le haut, en particulier sur l'IA générative à l'échelle et le MLOps.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Salaires et taux journaliers d'un consultant IA constatés en 2026 sur le marché français</caption>
              <thead>
                <tr>
                  {['Profil', 'Rémunération constatée', 'Précisions'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TARIFS.map((t, i) => (
                  <tr key={t.profil} style={t.highlight ? { background: 'rgba(37,99,235,0.1)' } : undefined}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{t.profil}</th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{t.montant}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 240 }}>{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DEVENIR CONSULTANT IA (tunnel formation) ── */}
      <section id="devenir" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Devenir consultant</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Comment devenir consultant IA</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le métier est accessible depuis plusieurs profils. Ce qui compte, c'est le socle de compétences et la pratique sur des cas réels.
              </p>
            </div>
            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 18 }}>
                  {[
                    ['Partir de votre profil', "Développeurs, data scientists, chefs de projet, experts métier en reconversion : chacun a un point de départ. Un profil métier comprend déjà les vrais processus à améliorer, ce qui est un atout."],
                    ['Acquérir le socle IA', "Outils d'IA générative, prompt engineering, cadrage des cas d'usage, notions de RAG et d'agents, gouvernance RGPD et AI Act. C'est le cœur du métier, au-delà d'un seul outil."],
                    ['Pratiquer sur des cas réels', "Un portfolio de projets menés compte souvent plus qu'un diplôme. Commencez sur vos propres cas d'usage ou ceux d'une première mission."],
                  ].map(([t, d], i) => (
                    <li key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                      <div>
                        <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{t}</div>
                        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div style={{ background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '16px 20px' }}>
                  <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0 }}>
                    <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                    <strong>Se former avec Masteria :</strong> nos parcours certifiés Qualiopi couvrent ce socle, à commencer par le{' '}
                    <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue de formations IA</Link>, le{' '}
                    <Link to="/formation-prompt-engineering" style={{ color: c, fontWeight: 600 }}>prompt engineering</Link>{' '}
                    et, pour les profils techniques, <Link to="/formation-claude-code" style={{ color: c, fontWeight: 600 }}>Claude Code</Link>. Finançables par votre OPCO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECRUTER : freelance vs cabinet vs interne (tunnel conseil + capte freelance ia) ── */}
      <section id="recruter" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Recruter un consultant</div>
          <h2 style={h2Style}>Freelance, cabinet ou interne : comment faire appel à un consultant IA</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Trois voies pour mobiliser un consultant IA : un freelance indépendant, un cabinet de conseil, ou un recrutement interne.</strong>{' '}
            Elles se départagent sur le coût, la souplesse, les garanties et l'autonomie qu'elles laissent à vos équipes.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Un consultant IA freelance convient à un besoin ponctuel ; pour un projet qui dure et engage plusieurs métiers, un cabinet apporte une équipe et une continuité.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>Comparatif des trois voies pour faire appel à un consultant IA : coût, force, limite et besoin adapté</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Voie</th>
                  <th scope="col" style={thStyle}>Coût</th>
                  <th scope="col" style={thStyle}>Force</th>
                  <th scope="col" style={thStyle}>Limite</th>
                  <th scope="col" style={thStyle}>Pour quel besoin</th>
                </tr>
              </thead>
              <tbody>
                {HIRE.map((h, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={h.voie} style={h.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '16px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: h.highlight ? c : '#0A0A0A', textAlign: 'left', minWidth: 160, lineHeight: 1.5 }}>
                        {h.voie}
                        {h.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de Masteria
                          </span>
                        )}
                      </th>
                      <td style={td}>{h.cout}</td>
                      <td style={{ ...td, minWidth: 200 }}>{h.force}</td>
                      <td style={{ ...td, minWidth: 180 }}>{h.limite}</td>
                      <td style={{ ...td, minWidth: 220 }}>{h.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Avec <strong>Masteria</strong>, vous n'engagez pas un consultant isolé mais une équipe qui couvre le cadrage, le développement et la formation. Pour situer votre besoin, commencez par notre{' '}
            <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>, voyez le détail de nos{' '}
            <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>missions de conseil</Link>, ou notre guide pour{' '}
            <Link to="/meilleur-cabinet-conseil-ia" style={{ color: c, fontWeight: 600 }}>choisir le bon cabinet de conseil en IA</Link>.
          </p>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="Le métier de consultant IA en quelques repères" />
          <p style={answerStyle}>
            Deux dates et un chiffre pour situer la demande, le vocabulaire du métier, et les sources officielles.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Définitions</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Le vocabulaire du métier</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Quatre notions reviennent dès qu'on parle de consultant IA.
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
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '24px 0 12px', fontWeight: 700 }}>Sources et références</p>
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

      {/* ── FONDATEUR (E-E-A-T) ── */}
      <FounderNote bg="#F9FAFB" />

      {/* ── ÉTUDES DE CAS (preuve, méthode en six temps, résultats) ── */}
      <CaseStudyCards
        ids={['conseil-financier', 'photovoltaique', 'industrie']}
        title="Ce qu'un consultant IA livre, sur trois missions documentées"
        intro="Des assistants d'appels d'offres co-construits avec des consultants, un diagnostic par flux dans une PME, un comité de direction accompagné jusqu'à l'international : la méthode en six temps et ses résultats."
      />

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur le métier de consultant IA</h2>
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

      {/* ── CTA FINALE DOUBLE (se former / recruter) ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Deux façons d'avancer</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Devenir consultant IA, ou en mobiliser un
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Vous voulez monter en compétence sur l'IA ? Nos formations certifiées Qualiopi couvrent le socle du métier. Vous avez un projet à cadrer et déployer ? Notre équipe de conseil s'en charge.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Voir les formations
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Parler à notre équipe
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange de cadrage gratuit · Réponse sous 24 h · Certifié Qualiopi
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Depuis 2022', 'spécialisé uniquement IA'],
              ['+1 500', 'professionnels formés'],
              ['Indépendant', 'des éditeurs de solutions'],
              ['FR · CH · BE', 'sur site ou à distance'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
