import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Compass, Code2, GraduationCap, ShieldCheck, BookOpen, Users, Target, FolderSearch } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Consultant IA » : GUIDE MÉTIER à double tunnel.
 * Intention dominante sur « consultant ia » = métier et emploi (rôle,
 * compétences, salaire, TJM, comment le devenir), avec un second public qui
 * veut en faire intervenir un. La page sert les deux :
 *   - « je veux DEVENIR consultant IA » → formations Masteria ;
 *   - « je veux FAIRE INTERVENIR un consultant IA » → conseil Masteria.
 * Distincte de /meilleur-cabinet-conseil-ia (choix d'un cabinet), de
 * /chief-ai-officer (rôle de direction) et de /conseil-intelligence-artificielle
 * (offre). Réécrite le 07/10/2026 pour le texte propre : missions, compétences,
 * repères datés (Crédoc, AI Act après l'omnibus), trois missions résumées avec
 * leur ancre, sources rédigées pour la page. Salaires et TJM : ordres de
 * grandeur repris de la version précédente, sans source publiée (à trancher).
 * Jamais Gartner. Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'consultant-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-07-30'
const DATE_MODIFIED = '2026-10-07'
const RDV_URL = '/contact?type=projet&rdv=30'

const META_TITLE = 'Consultant IA : métier, compétences, TJM, salaire | Masteria'
const META_DESC = "Consultant IA : missions, compétences attendues, salaire et TJM observés en 2026, comment le devenir et comment en recruter un pour votre entreprise."
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

/* Les cinq missions d'un consultant IA */
const MISSIONS = [
  { icon: Compass, title: 'Observer le travail et les données', body: "Il passe du temps avec les équipes, lit leurs fichiers et leurs procédures, repère les tâches répétitives et l'IA déjà utilisée sans cadre. Toute recommandation part de ce relevé." },
  { icon: Target, title: "Retenir les cas d'usage qui valent l'effort", body: "Chaque idée passe deux questions : combien d'heures ou d'euros peut-elle rendre, et que demande-t-elle en données, en outils et en habitudes à changer ? La direction reçoit une liste courte, avec la raison de chaque refus." },
  { icon: Code2, title: "Choisir l'outil le plus simple qui suffit", body: "Assistant du marché, modèle branché sur vos documents par RAG (une recherche dans vos sources avant chaque réponse), agent capable d'agir dans vos logiciels : il retient la solution la plus légère qui fera l'affaire, sans dépendre d'un éditeur." },
  { icon: ShieldCheck, title: "Écrire des règles qu'un salarié peut suivre", body: "Charte d'usage, registre, liste des données interdites, relecture humaine des réponses qui engagent l'entreprise : il traduit le RGPD et l'AI Act en consignes applicables sans juriste à côté de soi." },
  { icon: GraduationCap, title: 'Accompagner les débuts et former des relais', body: "Il suit les premières semaines d'usage, corrige ce qui coince et forme des référents capables de reprendre le flambeau. Sa mission est réussie le jour où l'équipe se passe de lui." },
]

/* Les quatre familles de compétences (jauge à trois niveaux d'usage) */
const SKILLS = [
  { fam: 'Socle technique', level: 3, detail: "Modèles de langage et leurs limites, écriture de prompts, RAG, agents, connexion aux logiciels par API ou par MCP (un standard ouvert pour brancher un assistant sur d'autres outils)." },
  { fam: 'Lecture du métier client', level: 3, detail: "Analyse des processus, chiffrage du temps rendu, priorisation, conduite du changement, aisance avec un directeur financier comme avec un technicien." },
  { fam: 'Droit et sécurité', level: 2, detail: "RGPD, AI Act et son calendrier, confidentialité des données confiées aux fournisseurs de modèles, classement des usages selon leur niveau de risque." },
  { fam: 'Pédagogie', level: 2, detail: "Expliquer sans jargon, animer un atelier, convaincre un comité, former des référents qui transmettront à leur tour." },
]

/* Salaires et TJM : ordres de grandeur du marché français, sans valeur de grille */
const TARIFS = [
  { profil: 'Salarié débutant (0 à 2 ans)', montant: '38 000 à 45 000 € brut / an', note: "Souvent un profil data, développeur ou métier qui s'est spécialisé dans l'IA." },
  { profil: 'Salarié confirmé (3 à 6 ans)', montant: '50 000 à 70 000 € brut / an', note: 'Missions menées seul, expertise reconnue sur un domaine ou un secteur.' },
  { profil: "Salarié senior ou responsable d'équipe", montant: '70 000 à 100 000 € et plus', note: "Encadrement et profils rares ; les montants hauts se rencontrent surtout en Île-de-France." },
  { profil: 'Indépendant, au taux journalier', montant: '500 à 1 500 € / jour', highlight: true, note: "La séniorité et la rareté de la spécialité fixent le prix ; les experts de l'IA générative à grande échelle dépassent ce plafond." },
  { profil: 'Consultant facturé par un cabinet', montant: '1 000 à 2 000 € / jour', note: "Le tarif couvre une équipe, une méthode, la continuité en cas d'absence et des garanties inscrites au contrat." },
]

/* Trois façons de faire intervenir un consultant IA */
const HIRE = [
  { voie: 'Indépendant', cout: 'Au taux journalier', force: 'Souplesse et coût maîtrisé sur une mission courte', limite: "Un seul profil ; disponibilité et continuité dépendent de lui", when: "Relire une feuille de route, animer un atelier, auditer un outil : une intervention courte." },
  { voie: 'Cabinet spécialisé IA', cout: 'Forfait ou taux journalier', force: 'Une équipe, une méthode, la continuité, du cadrage à la formation', limite: "Plus cher qu'un indépendant à la journée", highlight: true, when: "Un chantier qui concerne plusieurs services, dure plusieurs mois ou doit aboutir à des outils et à une formation." },
  { voie: 'Poste interne', cout: 'Salaire et charges', force: 'Présence continue, connaissance fine de la maison', limite: 'Profil rare, long à recruter et difficile à garder', when: "Des projets IA nombreux et continus, qui occupent quelqu'un à plein temps." },
]

/* ── Repères citables (GEO) ── */
const MARKET_STATS = [
  { value: '48 %', label: "des personnes de 12 ans et plus vivant en France se servaient de l'IA générative en juin 2025, contre 20 % en 2023. Les usages précèdent les règles, et les entreprises cherchent quelqu'un pour les encadrer.", source: 'Crédoc, Baromètre du numérique 2026' },
  { value: '2 févr. 2025', label: "L'AI Act commence à demander aux entreprises d'agir pour que leurs équipes maîtrisent l'IA (article 4). Dans sa version modifiée par l'omnibus de juillet 2026, ce passage fixe une obligation de moyens, que consultants et formateurs aident à remplir.", source: 'Règlement (UE) 2024/1689', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '2 août 2026', label: "L'information des personnes qui échangent avec une IA devient obligatoire (article 50). Un consultant doit savoir dire lesquels des usages de son client sont concernés.", source: 'Règlement (UE) 2024/1689', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
]

const GLOSSARY = [
  { term: 'Consultant IA', def: "Professionnel qui aide une organisation à adopter l'intelligence artificielle : observation des usages, sélection des usages utiles et des outils, règles, formation. Il exerce en indépendant, dans un cabinet ou comme salarié." },
  { term: 'TJM (taux journalier moyen)', def: "Prix d'une journée de travail facturée par un indépendant ou un cabinet. Il ne renseigne pas sur le nombre de jours nécessaires : comparez toujours le coût total d'une mission." },
  { term: 'Expert IA', def: "Terme voisin, à l'accent plus technique : modèles, architecture, mise en production. Le consultant insiste davantage sur le choix des usages et sur l'accompagnement des équipes." },
  { term: 'Portage salarial', def: "Formule qui permet d'exercer en indépendant tout en restant salarié d'une société de portage, qui facture le client et reverse une rémunération." },
]

/* Trois missions vues sous l'angle du travail du consultant (faits relus dans
 * src/data/etudes-de-cas.js le 07/10/2026). */
const CASES = [
  {
    anchor: 'conseil-financier',
    tag: 'Ateliers',
    text: "Pour une vingtaine de conseillers financiers du secteur public, la mission s'est déroulée en quatre séances de deux heures : les prompts des assistants qui préparent les réponses aux appels d'offres publics ont été rédigés puis éprouvés avec eux, sur des dossiers récents.",
    link: 'Voir comment les ateliers se sont déroulés',
  },
  {
    anchor: 'photovoltaique',
    tag: 'Entretiens',
    text: "Pour une PME qui vend du matériel solaire, trois entretiens (direction, commercial, opérations) et l'analyse des fichiers de travail ont permis de décrire quatre flux puis de ranger douze gisements de temps par gain attendu et par difficulté sur trois mois.",
    link: 'Lire le diagnostic par flux',
  },
  {
    anchor: 'distribution',
    tag: 'Référents',
    text: "Chez un distributeur informatique de 58 salariés, dix référents ont suivi deux jours de formation en juin 2026, puis conçu onze compétences Claude avec nous. Ce sont ces référents qui accompagneront leurs collègues entre octobre et décembre 2026.",
    link: 'Découvrir le rôle des dix référents',
  },
]

/* Sources de la page (remplacent le bloc commun OfficialSources) */
const SOURCES = [
  { name: "L'APEC, observatoire de l'emploi des cadres", note: 'études de rémunération et offres publiées, pour vérifier un salaire avant de le proposer.', url: 'https://www.apec.fr/' },
  { name: "L'AI Act (règlement 2024/1689) sur EUR-Lex", note: "les articles 4 et 50 que tout consultant doit savoir appliquer aux usages d'un client.", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { name: "La CNIL et l'intelligence artificielle", note: 'les recommandations françaises dès que des données personnelles passent par un modèle.', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'France Num, le portail public du numérique pour les TPE et PME', note: "des ressources gratuites pour les petites entreprises qui démarrent avec l'IA.", url: 'https://www.francenum.gouv.fr/' },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'un consultant IA ?",
    a: "Un consultant IA, ou consultant en intelligence artificielle, aide une organisation à tirer parti de l'IA. Il observe le travail des équipes, retient les usages qui valent l'effort, choisit les outils sans dépendre d'un éditeur, rédige une charte qui respecte le RGPD comme l'AI Act, puis accompagne et forme les personnes concernées. Il exerce en indépendant, au sein d'un cabinet ou comme salarié d'une entreprise. Le code n'occupe qu'une petite part de son temps : son travail consiste à faire adopter l'IA par des équipes.",
  },
  {
    q: 'Que fait un consultant en intelligence artificielle au quotidien ?',
    a: "Sa semaine alterne des entretiens et des ateliers avec les métiers, l'analyse des tâches et des fichiers, le chiffrage du temps que chaque usage peut rendre, des essais d'outils sur les documents du client, la rédaction des règles d'usage et l'accompagnement des premières semaines d'utilisation. Un consultant utile passe autant de temps à écouter les utilisateurs qu'à tester la technologie.",
  },
  {
    q: 'Quelles compétences faut-il pour devenir consultant IA ?',
    a: "Quatre familles se combinent. Un socle technique : modèles de langage, prompts, RAG, agents, connexions par API ou par MCP. La lecture du métier client : processus, chiffrage, priorisation, conduite du changement. Le droit et la sécurité : RGPD, AI Act, confidentialité des données. La pédagogie : expliquer, animer, convaincre, former. Les clients retiennent surtout la capacité à rattacher chaque outil à une tâche précise et au temps qu'il fera gagner.",
  },
  {
    q: "Quel est le salaire d'un consultant IA en France ?",
    a: "Sur le marché français, les fourchettes habituelles placent un consultant IA salarié débutant entre 38 000 et 45 000 € brut par an, gagne 50 000 à 70 000 € une fois confirmé, et dépasse 70 000 € comme senior ou responsable d'équipe, au-delà de 100 000 € pour les profils les plus rares, surtout en Île-de-France. Ces montants varient selon la formation, le secteur et la région ; vérifiez-les sur les études de rémunération de l'APEC avant de vous positionner.",
  },
  {
    q: 'Quel TJM pour un consultant IA indépendant ?',
    a: "Un indépendant facture le plus souvent entre 500 et 1 500 € la journée en France, selon sa séniorité et la rareté de sa spécialité ; les experts de l'IA générative déployée à grande échelle vont au-delà. Un cabinet facture plutôt de 1 000 à 2 000 € par jour, parce que le prix couvre une équipe, une méthode et des garanties. Comparez toujours le coût total d'une mission plutôt que le seul taux journalier.",
  },
  {
    q: 'Peut-on devenir consultant IA sans être développeur ?',
    a: "Oui. Beaucoup de consultants viennent du conseil, de la gestion de projet ou d'un métier précis (finance, ressources humaines, marketing, juridique). Ils doivent acquérir le socle technique utile au conseil : savoir ce qu'un modèle de langage fait bien et mal, écrire des prompts solides, comprendre le RAG et les agents sans forcément les coder. Une formation structurée, suivie de missions sur des dossiers concrets, raccourcit beaucoup ce chemin.",
  },
  {
    q: 'Peut-on devenir consultant IA en reconversion ?',
    a: "C'est un chemin fréquent. Une personne qui connaît déjà un métier part avec un avantage : elle sait quelles tâches font perdre du temps et quelles erreurs coûtent cher. Il lui reste à apprendre les outils, l'écriture de prompts, le choix des cas d'usage et le cadre légal, puis à se constituer un premier portfolio, souvent dans son propre service. La double culture, un métier et l'IA, intéresse beaucoup les clients.",
  },
  {
    q: 'Consultant IA indépendant ou cabinet : que choisir pour votre entreprise ?',
    a: "Un indépendant suffit pour une intervention ponctuelle : relire une feuille de route, animer un atelier, auditer un outil. Vous dépendez alors d'une seule personne et de son agenda. Un cabinet devient préférable quand le projet touche plusieurs services, s'étale sur plusieurs mois ou doit aboutir à des outils en service et à une formation des équipes.",
  },
  {
    q: 'Consultant IA ou expert IA : quelle différence ?',
    a: "Les deux titres se recouvrent largement. « Expert IA » met souvent en avant la technique : modèles, architecture, mise en production. « Consultant IA » insiste sur le choix des usages, les règles et l'accompagnement des équipes. Les meilleurs profils tiennent les deux bouts : ils comprennent la technique et savent la traduire en résultats pour une organisation.",
  },
  {
    q: 'Faut-il un diplôme pour être consultant IA ?',
    a: "Aucun diplôme n'est exigé par la loi. Les clients regardent d'abord les dossiers menés et les résultats obtenus. Une formation reconnue rassure et accélère l'apprentissage, mais un portfolio de missions documentées pèse souvent plus lourd qu'un titre.",
  },
  {
    q: 'Comment bien recruter un consultant IA ?',
    a: "Demandez-lui de raconter une mission menée jusqu'à l'usage, avec ce qui a été écarté et pourquoi. Vérifiez qu'il prévoit de rendre vos équipes autonomes, qu'il n'est rémunéré par aucun éditeur, et qu'il connaît les échéances de l'AI Act. Appelez un ancien client. Méfiez-vous d'un consultant qui promet que l'OPCO paiera sa mission : votre OPCO finance des formations, jamais du conseil.",
  },
  {
    q: 'Masteria met-il des consultants IA à disposition ?',
    a: "Masteria intervient comme cabinet : un consultant pilote votre mission, épaulé selon les besoins par des développeurs et des formateurs, sous la responsabilité de Mathias Nizan. Le cabinet forme aussi les personnes qui veulent devenir consultant ou monter en compétence, avec des formations certifiées Qualiopi. Pour un projet, le cadrage démarre par 30 minutes offertes.",
  },
  {
    q: 'Un consultant IA peut-il intervenir à distance ?',
    a: "Oui, pour une bonne part du travail : suivi, ateliers courts, revue des outils, formation en classe virtuelle. Les entretiens de départ et les ateliers de décision se tiennent mieux sur place. Masteria, basé à Lyon, intervient sur place à Paris comme dans les autres régions, et accompagne aussi des entreprises installées hors de France, notamment aux États-Unis et en Inde.",
  },
]

/* ───────── JSON-LD ───────── */

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Vocabulaire du métier de consultant IA',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Consultant IA : le métier, les compétences et ce qu\'il gagne en 2026',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Consultant en intelligence artificielle', 'Métier de l\'IA', 'Conseil en IA'],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: SOURCES.map(s => s.url),
}

function Meter({ level, label }) {
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'utilisée chaque jour' : 'selon les missions'}`} style={{ display: 'inline-flex', gap: 4 }}>
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
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
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
              Fiche métier · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Consultant IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le métier, ses compétences et ce qu'il gagne en 2026</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Fiche rédigée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige une équipe de consultants IA indépendants · mise à jour le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, définition */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>Un consultant IA aide une organisation à tirer parti de l'intelligence artificielle</strong> : il observe le travail des équipes, retient les usages qui valent l'effort, choisit les outils sans dépendre d'un éditeur, écrit les règles d'usage et forme les personnes concernées. Le code n'occupe qu'une petite part de son temps ; l'essentiel consiste à faire adopter l'IA par des équipes.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Cette fiche s'adresse à deux lecteurs : la personne qui envisage d'exercer ce métier, et la direction qui veut en faire intervenir un. Vous y trouverez ses missions, les compétences attendues, les salaires et taux journaliers observés en 2026, le chemin pour y arriver et la manière de bien recruter.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#devenir" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Se former au métier
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <a href="#recruter" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Faire appel à un consultant
            </a>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Le métier', "Observer le travail, retenir les usages utiles, choisir les outils, écrire les règles d'usage, former les équipes."],
                ['Compétences', "Une base technique (modèles de langage, RAG, prompts), le sens du métier client, la connaissance du RGPD et de l'AI Act, de la pédagogie."],
                ['Salaire', "De 38 000 € brut par an au début jusqu'à 100 000 € et davantage pour les seniors les plus rares, selon les repères observés en France."],
                ['Taux journalier', "À partir d'environ 500 € la journée pour un indépendant ; davantage quand la mission passe par un cabinet."],
                ['Devenir ou recruter ?', "Pour le devenir : une formation, puis des missions sur des dossiers concrets. Pour en faire intervenir un : un indépendant, un cabinet ou un poste interne, selon la durée du besoin."],
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
            ['#metier', 'Missions'],
            ['#competences', 'Compétences'],
            ['#tarif', 'Salaire et TJM'],
            ['#devenir', 'Devenir consultant'],
            ['#recruter', 'Recruter'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LE MÉTIER : missions ── */}
      <section id="metier" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Les missions</div>
          <h2 style={h2Style}>Que fait un consultant en intelligence artificielle ?</h2>
          <p style={leadStyle}>
            Le consultant IA traduit une technologie qui change chaque trimestre en décisions qu'une organisation peut tenir. Cinq missions reviennent dans presque toutes ses interventions, de la PME de dix personnes au groupe international.
          </p>
          <p style={mutedStyle}>
            La technique occupe une part de son temps. Le reste se passe en entretiens, en arbitrages et aux côtés des équipes pendant leurs premières semaines d'usage.
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

      {/* ── COMPÉTENCES (tableau à jauges) ── */}
      <section id="competences" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Les compétences</div>
          <h2 style={h2Style}>Les compétences d'un consultant IA</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Un bon consultant IA combine quatre familles de compétences.</strong>{' '}
            Les profils les plus recherchés savent relier une possibilité technique à un gain précis dans le quotidien d'une équipe, puis faire adopter l'outil par ses utilisateurs.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Trois points : une compétence sollicitée chaque jour. Deux points : une compétence importante, mobilisée selon les missions.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <caption style={srOnlyStyle}>Les quatre familles de compétences d'un consultant IA, leur poids au quotidien et leur contenu</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Poids au quotidien</th>
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

      {/* ── SALAIRE ET TJM (ancre sombre) ── */}
      <section id="tarif" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Rémunération 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Salaire et TJM d'un consultant IA en 2026</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un consultant IA salarié gagne de 38 000 € brut par an en début de carrière jusqu'à 100 000 € et davantage pour les seniors les plus recherchés. Un indépendant facture le plus souvent à partir de 500 € la journée, un cabinet à partir de 1 000 €.</strong>{' '}
            Ces montants sont des repères observés en France, sans valeur de grille officielle : la séniorité, le secteur et la région les font varier.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Plus la spécialité est rare, plus le prix monte : les profils capables de généraliser l'IA générative à tout un groupe ou de superviser des modèles en production (ce qu'on appelle le MLOps) restent les plus chers. Avant de fixer un salaire, comparez avec les études de rémunération de l'APEC.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Ordres de grandeur 2026 des salaires et taux journaliers d'un consultant IA en France</caption>
              <thead>
                <tr>
                  {['Situation', 'Ordre de grandeur', 'À savoir'].map(h => (
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
                On y vient par la technique, par le conseil ou par un métier qu'on connaît de l'intérieur. Les clients jugent ensuite sur des dossiers menés jusqu'au bout.
              </p>
            </div>
            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 18 }}>
                  {[
                    ['Partir de ce que vous savez déjà', "Un développeur maîtrise la technique, une cheffe de projet sait conduire un changement, un contrôleur de gestion connaît les processus de son domaine. Chacun part avec un atout et une lacune à combler."],
                    ['Acquérir le socle IA', "Les assistants du marché et leurs offres d'entreprise, l'écriture de prompts, le choix des cas d'usage, les bases du RAG et des agents, le RGPD et le règlement européen sur l'IA. Ce socle va plus loin que l'usage d'un seul outil."],
                    ['Pratiquer sur des dossiers concrets', "Aux yeux d'un client, un portfolio de missions pèse plus qu'un diplôme. Commencez par les tâches de votre propre service, notez ce que vous avez changé et mesuré, puis proposez une première mission courte."],
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
                    <strong>Se former avec Masteria :</strong> nos formations certifiées Qualiopi couvrent ce socle. Partez du{' '}
                    <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue des formations en intelligence artificielle</Link>, approfondissez l'<Link to="/formation-prompt-engineering" style={{ color: c, fontWeight: 600 }}>écriture de prompts</Link>{' '}
                    et, pour les profils techniques, <Link to="/formation-claude-code" style={{ color: c, fontWeight: 600 }}>Claude Code</Link>. La journée est facturée 1 980 € HT, pour un groupe interne ou une personne seule ; pour un salarié, l'OPCO de la branche examine le dossier en appliquant ses propres règles, dans la limite de ses fonds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAIRE INTERVENIR UN CONSULTANT : trois voies ── */}
      <section id="recruter" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Recruter un consultant</div>
          <h2 style={h2Style}>Indépendant, cabinet ou poste interne : comment faire appel à un consultant IA</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Trois voies s'offrent à vous : un indépendant, un cabinet, ou un poste créé dans l'entreprise.</strong>{' '}
            Elles diffèrent par le coût, la souplesse, les garanties et ce qu'elles laissent à vos équipes une fois la mission finie.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            La durée du besoin tranche le plus souvent : quelques semaines pour un indépendant, plusieurs mois et plusieurs services pour un cabinet, des projets sans fin prévue pour un poste.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>Trois façons de faire intervenir un consultant IA comparées sur le coût, l'atout, la limite et le besoin type</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Voie</th>
                  <th scope="col" style={thStyle}>Facturation</th>
                  <th scope="col" style={thStyle}>Atout</th>
                  <th scope="col" style={thStyle}>Limite</th>
                  <th scope="col" style={thStyle}>Besoin type</th>
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
                            Le format de Masteria
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
            <strong>Masteria</strong> vous apporte une équipe : un consultant pilote la mission, épaulé selon les besoins par des développeurs et des formateurs du cabinet. Si votre besoin reste flou, le{' '}
            <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link> le précise en peu de temps ; le détail de nos{' '}
            <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>missions de conseil en IA</Link>{' '}
            et le guide pour{' '}
            <Link to="/meilleur-cabinet-conseil-ia" style={{ color: c, fontWeight: 600 }}>choisir le meilleur cabinet IA</Link>{' '}
            complètent la lecture. Si le sujet est de confier la direction de l'IA à quelqu'un, voyez le rôle de{' '}
            <Link to="/chief-ai-officer" style={{ color: c, fontWeight: 600 }}>Chief AI Officer</Link>.
          </p>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="Trois faits datés qui nourrissent la demande de consultants IA" />
          <p style={answerStyle}>
            Les usages se sont répandus avant les règles, et le droit européen demande désormais aux entreprises de s'en occuper. Le vocabulaire du métier suit, tel qu'on le lit dans les offres de mission.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
                ) : (
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: '#6B7280' }}>Source : {s.source}</span>
                )}
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Vocabulaire</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Quatre termes à connaître</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Ils reviennent dès qu'on publie, cherche ou négocie une mission de consultant IA.
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
            </div>
          </div>
        </div>
      </section>

      {/* ── TROIS MISSIONS VUES DEPUIS LE TRAVAIL DU CONSULTANT ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={FolderSearch} kicker="Sur le terrain" title="Le travail d'un consultant IA, vu dans trois de nos missions" />
          <p style={{ ...mutedStyle, margin: '0 0 32px' }}>
            Atelier, entretien, formation de référents : trois gestes du métier, observés chez des clients anonymisés à leur demande.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CASES.map(k => (
              <div key={k.anchor} style={{ ...cardStyle, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...kickerStyle, fontSize: 12, marginBottom: 12 }}>{k.tag}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{k.text}</p>
                <Link to={`/etudes-de-cas-ia#${k.anchor}`} style={{ color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {k.link}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 820, fontStyle: 'italic' }}>
            « Un bon consultant IA sait expliquer à une comptable ce que l'IA va changer dans sa semaine, puis vérifier un mois plus tard que c'est arrivé. »{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600, fontStyle: 'normal' }}>Mathias Nizan</Link>, fondateur de Masteria
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Treize questions sur le métier de consultant IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre parcours ou votre projet soulève une autre question ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Écrivez-nous
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

      {/* ── CTA FINALE DOUBLE (se former / faire intervenir) ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Deux suites possibles</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Devenir consultant IA, ou en faire intervenir un
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Vous voulez acquérir le socle du métier ? Nos formations certifiées Qualiopi le couvrent, en groupe interne ou en individuel. Vous avez un projet à cadrer ? Un consultant du cabinet en parle avec vous pendant 30 minutes de cadrage offertes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Voir les formations
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Réserver 30 minutes de cadrage
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Formation : devis sur demande depuis la page contact · Projet : échange en visio, créneau proposé sous 24 heures
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui sont nos consultants ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Nos consultants</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des consultants indépendants, choisis pour chaque mission et pilotés par le fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Les consultants IA qui interviennent pour Masteria exercent en indépendants ; Mathias Nizan les choisit selon le secteur et le sujet de chaque mission, et en garde la responsabilité. Aucun d'eux n'est payé par un éditeur pour recommander un outil. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions documentées</Link> et les <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>articles qui citent le cabinet</Link> en donnent un aperçu.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 10', 'consultants IA indépendants'],
              ['≈ 5', 'développeurs en appui'],
              ['≈ 20', 'formateurs pour les équipes'],
              ['Lyon, 2022', 'France · Europe · États-Unis · Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES (rédigées pour la page, à la place du bloc commun) ── */}
      <section aria-labelledby="sources-consultant-ia" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-consultant-ia" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Pour vérifier et aller plus loin
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Les références qu'un futur consultant, comme une entreprise qui recrute, gagne à consulter. Le Baromètre du numérique du Crédoc (février 2026) est publié avec l'Arcep, l'Arcom, le CGE et l'ANCT.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
