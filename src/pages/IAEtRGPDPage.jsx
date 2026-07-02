import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, Scale, Filter, Info, UserCheck, Clock, Lock,
  ScrollText, Workflow, FileSearch, Landmark, ExternalLink, GraduationCap,
  BookOpen,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page money « IA et RGPD » (slug /ia-et-rgpd). Cible les requêtes Semrush :
 * « ia et rgpd », « ia rgpd », « rgpd et ia », « rgpd ia »,
 * « outil ia conforme rgpd », « cnil ia », « aipd ia ».
 *
 * THÈSE : le RGPD n'interdit aucun outil d'IA en soi ; il exige de savoir
 * quelles données partent où et sous quelles garanties. La conformité dépend
 * surtout de l'offre souscrite (grand public ou entreprise), du contrat de
 * traitement des données (DPA) et du paramétrage.
 *
 * INTÉGRITÉ : aucun cas client, aucun chiffre inventé. Le tableau des cinq
 * grands outils reste factuel et neutre : aucun classement, aucune note,
 * uniquement des faits stables et de notoriété publique, avec renvoi vers les
 * pages officielles des éditeurs. Le conseil data & IA (audit des flux) est
 * une prestation de service non finançable OPCO ; seules les formations
 * (Qualiopi) sont finançables.
 *
 * Design premium identique à /gouvernance-ia : hero sombre #0A0F1E, icônes
 * lucide (zéro emoji), kickers, réponses directes citables (GEO), accent
 * #2563EB uniquement, une seule ancre sombre au milieu de page (tableau des
 * outils), patron éditorial asymétrique sticky, timeline à rail.
 */

const SLUG = 'ia-et-rgpd'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "IA et RGPD : conformité des usages et outils IA | Masteria"
const META_DESC = "IA et RGPD : principes à respecter, AIPD, outils IA conformes en offre entreprise (DPA, paramétrage), méthode de mise en conformité et repères CNIL."
const KEYWORDS = "ia et rgpd, ia rgpd, rgpd et ia, rgpd ia, intelligence artificielle et rgpd, outil ia conforme rgpd, outils ia conformes rgpd, cnil ia, aipd ia, rgpd intelligence artificielle, dpa intelligence artificielle, conformité rgpd ia, chatgpt rgpd, copilot rgpd, gemini rgpd, claude rgpd, mistral rgpd"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
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
  { icon: Scale,      label: 'RGPD & bases légales' },
  { icon: Workflow,   label: 'Cartographie des flux de données' },
  { icon: FileSearch, label: 'AIPD & registre des traitements' },
  { icon: ScrollText, label: 'Charte & politique de données' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'La règle', value: "Le RGPD encadre tout traitement de données personnelles, y compris par un outil d'IA : base légale, finalité, minimisation, information des personnes, sécurité" },
  { label: 'Le point clé', value: "Aucun outil n'est conforme « en soi » : la conformité dépend de l'offre souscrite (grand public ou entreprise), du DPA signé avec l'éditeur et du paramétrage" },
  { label: 'AIPD', value: "Analyse d'impact requise quand le traitement présente un risque élevé pour les droits et libertés des personnes, un cas fréquent sur les projets d'IA" },
  { label: 'Ce que nous faisons', value: "Conseil data & IA : audit des flux, qualification des traitements, mise en conformité (prestation de service, non finançable OPCO). Formations certifiées Qualiopi, finançables" },
  { label: 'Sources', value: "CNIL (dossier intelligence artificielle), RGPD (Règlement UE 2016/679), AI Act (Règlement UE 2024/1689)" },
  { label: 'Zone', value: "Lyon, France, Suisse, Belgique · distanciel et présentiel" },
]

/* ───────── Principes RGPD appliqués à l'IA (6 cartes) ───────── */

const PRINCIPES = [
  {
    icon: Scale,
    title: 'Base légale et finalité',
    desc: "Chaque usage d'IA qui traite des données personnelles repose sur une base légale (intérêt légitime, contrat, consentement) et sert une finalité déterminée, explicite et documentée. Un assistant déployé « pour tout faire » n'a pas de finalité au sens du RGPD : le registre précise qui utilise quoi, pour quoi faire.",
  },
  {
    icon: Filter,
    title: 'Minimisation des données',
    desc: "Seules les données nécessaires à la finalité entrent dans l'outil. Concrètement : pas de fichier client complet dans un prompt quand un extrait anonymisé suffit, pas de données sensibles hors des outils validés pour les recevoir.",
  },
  {
    icon: Info,
    title: 'Information des personnes',
    desc: "Clients, salariés et candidats dont les données sont traitées par un outil d'IA en sont informés : mentions d'information, politique de confidentialité, communication interne. La transparence fait partie des obligations du règlement.",
  },
  {
    icon: UserCheck,
    title: "Droits d'accès et d'opposition",
    desc: "Les personnes conservent leurs droits sur les données traitées par l'IA : accès, rectification, effacement, opposition. L'organisation doit pouvoir répondre à une demande d'exercice de droits même quand les données ont transité par un outil tiers.",
  },
  {
    icon: Clock,
    title: 'Durée de conservation',
    desc: "Les données envoyées à un outil d'IA ont une durée de vie : historique des conversations, journaux, données de contexte. Les réglages de rétention des offres entreprise permettent de la maîtriser ; ils font partie du paramétrage de conformité.",
  },
  {
    icon: Lock,
    title: 'Sécurité des traitements',
    desc: "Chiffrement, contrôle des accès, cloisonnement des espaces de travail : la sécurité exigée par l'article 32 du RGPD s'applique aux flux qui partent vers l'outil d'IA comme aux données qui en reviennent.",
  },
]

/* ───────── Tableau des outils (factuel et neutre : aucun classement) ───────── */

const OUTILS_TABLE = [
  {
    outil: 'ChatGPT (OpenAI)',
    forts: "Offre entreprise avec accord de traitement des données (DPA) ; vos données ne servent pas à entraîner les modèles par défaut. Réglages d'administration et de rétention des conversations.",
    verifier: "L'offre réellement utilisée par vos équipes, la version grand public gratuite offrant moins de garanties que l'offre entreprise. La signature du DPA et les réglages de rétention appliqués à votre espace.",
    lienLabel: 'Enterprise privacy (OpenAI)',
    lienUrl: 'https://openai.com/enterprise-privacy/',
  },
  {
    outil: 'Microsoft Copilot',
    forts: "S'inscrit dans le périmètre contractuel Microsoft 365 : le DPA et les engagements de traitement des données du contrat existant couvrent Copilot, entraînement des modèles sur vos contenus exclu par défaut.",
    verifier: "La distinction entre Copilot Microsoft 365 et les versions grand public. Le périmètre des droits d'accès internes, qui conditionne les contenus que l'outil peut lire pour chaque utilisateur.",
    lienLabel: 'Microsoft Trust Center',
    lienUrl: 'https://www.microsoft.com/fr-fr/trust-center',
  },
  {
    outil: 'Google Gemini',
    forts: "S'inscrit dans le périmètre contractuel Google Workspace, avec accord de traitement des données ; dans ce cadre, les contenus de votre domaine ne sont pas utilisés pour entraîner les modèles.",
    verifier: "La distinction entre Gemini activé par une licence Google Workspace et l'application grand public. Les conditions applicables aux services activés pour votre domaine.",
    lienLabel: 'Sécurité Google Workspace',
    lienUrl: 'https://workspace.google.com/security/',
  },
  {
    outil: 'Claude (Anthropic)',
    forts: "Offre entreprise avec accord de traitement des données (DPA), sans entraînement des modèles sur vos données par défaut. Administration centralisée des espaces de travail.",
    verifier: "L'offre exacte souscrite, la signature du DPA pour votre organisation et les réglages de rétention appliqués aux espaces de travail.",
    lienLabel: 'Trust Center (Anthropic)',
    lienUrl: 'https://trust.anthropic.com',
  },
  {
    outil: 'Mistral AI',
    forts: "Acteur européen avec hébergement en Europe. Offre entreprise avec accord de traitement des données (DPA) et mêmes garanties de non-entraînement par défaut.",
    verifier: "L'offre souscrite et les conditions d'hébergement qui s'y rattachent, précisées dans le contrat et la documentation de l'éditeur.",
    lienLabel: 'Conditions et DPA (Mistral AI)',
    lienUrl: 'https://mistral.ai/terms',
  },
]

/* ───────── Méthode de mise en conformité (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Recenser les usages et les données',
    desc: "Inventaire des outils d'IA utilisés, y compris ceux adoptés par les équipes hors du cadre officiel, et des données qui y circulent : clients, salariés, candidats, partenaires. Cette cartographie des flux révèle souvent des usages que la direction ne connaissait pas.",
  },
  {
    num: '02',
    title: 'Qualifier chaque traitement',
    desc: "Pour chaque usage : base légale, finalité, catégories de données, destinataires, durée de conservation. Les traitements à risque élevé déclenchent une AIPD. Cette qualification alimente le registre des traitements exigé par le RGPD.",
  },
  {
    num: '03',
    title: "Choisir l'offre et le paramétrage",
    desc: "Sélection de l'offre adaptée aux données en jeu (offre entreprise avec DPA dès que des données personnelles circulent), signature du contrat de traitement des données, réglages de rétention, d'accès et de cloisonnement. C'est l'étape qui rend un outil conforme pour vos usages.",
  },
  {
    num: '04',
    title: 'Encadrer par la charte et la politique de données',
    desc: "La charte IA fixe ce que chacun peut mettre dans quel outil ; la politique de données précise les règles de circulation vers les fournisseurs. Les équipes savent quoi faire et la conformité tient au quotidien.",
  },
  {
    num: '05',
    title: 'Documenter et réviser',
    desc: "Registre à jour, AIPD conservées, information des personnes vérifiable. Les usages d'IA évoluent vite : une revue périodique intègre les nouveaux outils, les nouveaux usages des équipes et les changements de conditions des éditeurs.",
  },
]

/* ───────── Ce que dit la CNIL (3 cartes sourcées) ───────── */

const CNIL_CARDS = [
  {
    icon: Landmark,
    title: 'La CNIL publie des recommandations sur l’IA',
    desc: "Le dossier intelligence artificielle de la CNIL rassemble fiches pratiques et recommandations pour appliquer le RGPD aux systèmes d'IA : constitution des bases de données d'entraînement, information des personnes, exercice des droits.",
    source: 'CNIL, dossier intelligence artificielle',
    sourceUrl: 'https://www.cnil.fr/fr/intelligence-artificielle',
  },
  {
    icon: ShieldCheck,
    title: "Le RGPD s'applique à l'IA depuis 2018",
    desc: "En application depuis le 25 mai 2018, le RGPD encadre tout traitement de données personnelles, y compris quand ce traitement passe par un système d'IA, un modèle ou un outil tiers.",
    source: 'CNIL',
    sourceUrl: 'https://www.cnil.fr/fr/intelligence-artificielle',
  },
  {
    icon: Scale,
    title: "L'AI Act complète le RGPD",
    desc: "L'AI Act (Règlement UE 2024/1689) complète le RGPD, chacun couvre son périmètre : l'AI Act classe les systèmes d'IA par niveau de risque, le RGPD encadre les traitements de données personnelles.",
    source: 'EUR-Lex, Règlement (UE) 2024/1689',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689',
  },
]

/* ───────── Définitions clés (ancrage d'entités, aligné sur le DefinedTermSet) ───────── */

const GLOSSARY = [
  {
    term: 'RGPD',
    def: "Règlement général sur la protection des données (Règlement UE 2016/679), en application depuis le 25 mai 2018. Il encadre tout traitement de données personnelles dans l'Union européenne, y compris par un système d'IA.",
  },
  {
    term: 'AIPD',
    def: "Analyse d'impact relative à la protection des données. Obligatoire quand un traitement est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes, un cas fréquent sur les projets d'IA.",
  },
  {
    term: 'DPA (accord de traitement des données)',
    def: "Data Processing Agreement : le contrat prévu par l'article 28 du RGPD entre le responsable de traitement et son sous-traitant. Avec un éditeur d'IA, il fixe le sort des données envoyées à l'outil : usages autorisés, sécurité, sous-traitants ultérieurs, sort des données en fin de contrat.",
  },
  {
    term: 'Base légale',
    def: "Fondement juridique qui autorise un traitement de données personnelles : consentement, contrat, obligation légale, intérêt légitime, mission d'intérêt public ou sauvegarde des intérêts vitaux. Tout usage d'IA sur des données personnelles en requiert une.",
  },
  {
    term: 'Minimisation',
    def: "Principe du RGPD qui limite la collecte et le traitement aux données nécessaires à la finalité poursuivie. Appliqué à l'IA : seules les données utiles à la tâche entrent dans le prompt ou dans l'outil.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'ChatGPT est-il conforme au RGPD ?',
    a: "La réponse dépend de l'offre. En offre entreprise, OpenAI propose un accord de traitement des données (DPA) et s'engage par défaut à ne pas entraîner ses modèles sur les données clients ; correctement paramétrée, cette offre s'utilise en conformité avec le RGPD pour des traitements qualifiés. La version grand public gratuite offre moins de garanties : elle convient à des usages sur des contenus dépourvus de données personnelles ou confidentielles. La question à se poser en pratique : quelle offre vos équipes utilisent-elles réellement, avec quel paramétrage et pour quelles données ?",
  },
  {
    q: 'Peut-on mettre des données clients dans une IA ?',
    a: "Oui, sous conditions. Le traitement doit être qualifié (base légale, finalité, information des clients concernés), l'outil utilisé dans une offre entreprise couverte par un DPA, et le principe de minimisation respecté : seules les données nécessaires à la tâche entrent dans l'outil. À l'inverse, coller un fichier client dans la version grand public gratuite d'un assistant IA expose l'organisation : aucune garantie contractuelle n'encadre alors le sort de ces données. La charte IA fixe ces règles pour les équipes, outil par outil.",
  },
  {
    q: "Faut-il informer les salariés quand l'entreprise déploie une IA ?",
    a: "Oui, à deux titres. Comme personnes concernées : quand l'outil traite leurs données (messagerie, documents RH, évaluation), le RGPD impose de les informer de la finalité, de la base légale et de leurs droits. Comme utilisateurs : la charte IA leur précise ce qu'ils peuvent mettre dans quel outil et selon quelles règles. Quand l'IA sert à évaluer ou à surveiller l'activité, les obligations se renforcent : information individuelle préalable et consultation des instances représentatives du personnel.",
  },
  {
    q: "Qu'est-ce qu'un DPA (accord de traitement des données) ?",
    a: "Le DPA (Data Processing Agreement) est le contrat prévu par l'article 28 du RGPD entre un responsable de traitement et son sous-traitant. Avec un éditeur d'IA, il précise ce que l'éditeur peut faire des données envoyées à l'outil : finalités autorisées, mesures de sécurité, sous-traitants ultérieurs, sort des données en fin de contrat, engagement sur l'entraînement des modèles. Les cinq grands éditeurs en proposent un dans leurs offres entreprise. Avant tout déploiement sur des données personnelles, vérifiez qu'il est signé et qu'il couvre vos usages.",
  },
  {
    q: "L'AIPD est-elle obligatoire pour tout projet d'IA ?",
    a: "Non. L'AIPD est obligatoire quand le traitement est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes. La CNIL publie les critères qui déclenchent l'obligation (données sensibles, grande échelle, évaluation ou notation, décision automatisée, croisement de fichiers) : en réunir deux suffit généralement. Un assistant qui reformule des textes internes anonymes n'en relève pas ; un outil qui trie des candidatures ou évalue des clients, presque toujours. En cas de doute, menez l'analyse : elle documente votre démarche et sécurise le projet.",
  },
  {
    q: "Quel rôle pour le DPO dans les projets d'IA ?",
    a: "Le DPO (délégué à la protection des données) est associé dès le cadrage : il qualifie les traitements, pilote les AIPD, vérifie les DPA des éditeurs et tient le registre. Sur les projets d'IA, son rôle s'étend au suivi dans le temps : conditions des éditeurs qui évoluent, nouveaux usages des équipes, croisement avec l'AI Act. Dans les organisations qui n'ont pas désigné de DPO, ces missions reviennent au responsable de traitement ; un appui externe ponctuel permet de les tenir. Notre conseil data & IA travaille en binôme avec le DPO quand il existe.",
  },
]

/* ───────── JSON-LD ───────── */

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "IA et RGPD : mettre vos usages et vos outils d'intelligence artificielle en conformité",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['RGPD', 'Intelligence artificielle', 'AIPD', "Conformité des outils d'IA", 'CNIL'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire IA et RGPD",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
  })),
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
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

export default function IAEtRGPDPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Principes / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Gouvernance de l'IA", slug: 'gouvernance-ia' },
    { name: 'IA et RGPD', slug: SLUG },
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
        datePublished="2026-07-02"
        dateModified="2026-07-02"
        extraJsonLd={[articleJsonLd, definedTermSetJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/gouvernance-ia" style={{ color: '#94A3B8' }}>Gouvernance de l'IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>IA et RGPD</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conformité RGPD de vos usages d'IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA et RGPD
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>mettre vos usages et vos outils en conformité</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable (accroche) */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le RGPD n'interdit aucun outil d'intelligence artificielle. Il impose de savoir quelles données partent où, sous quelles garanties contractuelles et pour quelle finalité. La conformité d'un usage d'IA se joue dans l'offre souscrite, le contrat de traitement des données et le paramétrage. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria audite vos flux et forme vos équipes.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Copilotes bureautiques, assistants IA, agents connectés au CRM : chaque usage fait circuler des données, parfois personnelles, vers un fournisseur. Cette page traite l'intelligence artificielle et le RGPD sous l'angle opérationnel : les principes appliqués à vos usages, ce qui rend les outils IA conformes au RGPD en offre entreprise, et la méthode de mise en conformité, avec les repères publiés par la CNIL.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Auditer vos usages d'IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#outils" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Quel outil est conforme ?
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 132px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── PRINCIPES RGPD APPLIQUÉS À L'IA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Principes RGPD appliqués à l'IA</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Utiliser l'IA est-il compatible avec le RGPD ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Oui, à condition de traiter chaque usage d'IA comme un traitement de données. Dès qu'un outil d'IA reçoit des données de clients, de salariés ou de candidats, le RGPD s'applique : l'usage doit reposer sur une base légale, servir une finalité déterminée et offrir des garanties de sécurité proportionnées.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six principes du règlement structurent la conformité d'un usage d'IA. Ils s'appliquent au copilote bureautique comme à l'agent connecté à vos systèmes, en interne comme chez vos sous-traitants.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRINCIPES.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Ces principes se déclinent outil par outil et usage par usage. Notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link> audite vos flux de données et met chaque traitement en conformité ; la <Link to="/charte-ia-entreprise" style={aStyle}>charte IA</Link> traduit ensuite ces règles en consignes claires pour les équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AIPD ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Analyse d'impact</Kicker>
          <h2 style={h2Style}>
            Quand faut-il une AIPD pour un projet d'IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une AIPD (analyse d'impact relative à la protection des données) est requise quand le traitement est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes. Pour un projet d'IA, ce seuil est vite atteint : données sensibles ou traitées à grande échelle, évaluation ou notation de personnes, décision automatisée, croisement de bases de données.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 18px' }}>
            La CNIL publie la liste des critères qui déclenchent l'obligation. Un outil qui reformule des notes internes sans données personnelles reste en dessous du seuil ; un outil de tri de candidatures ou de scoring client le franchit presque toujours. L'AIPD décrit le traitement, évalue sa nécessité et sa proportionnalité, identifie les risques pour les personnes et les mesures prévues pour les réduire. Menée en amont avec le DPO, elle évite de découvrir un blocage après le déploiement.
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Le croisement avec l'AI Act renforce l'exercice : un usage classé à haut risque par le règlement européen sur l'IA (recrutement, accès à des services essentiels, éducation) coche presque toujours les critères de l'AIPD côté RGPD. Les deux analyses se mènent utilement ensemble ; nos audits de flux incluent cette qualification, traitement par traitement.
          </p>
        </div>
      </section>

      {/* ── OUTILS IA CONFORMES RGPD (ancre sombre pivot, la seule de la page) ── */}
      <section id="outils" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Outils IA conformes RGPD</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Quel outil d'IA est conforme au RGPD ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Aucun outil d'IA n'est conforme au RGPD « en soi ». La conformité tient à l'offre souscrite (grand public ou entreprise), au contrat de traitement des données (DPA) signé avec l'éditeur et au paramétrage retenu. Les cinq grands éditeurs proposent une offre entreprise avec DPA et engagement de non-entraînement des modèles sur les données clients par défaut ; les versions grand public gratuites offrent moins de garanties.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau résume, pour chaque outil, les garanties disponibles en offre entreprise, les points à vérifier avant de souscrire et la page officielle où le faire. Il ne classe pas les éditeurs : à ce niveau de généralité, les cinq répondent aux exigences du RGPD dès lors que l'offre, le contrat et le paramétrage suivent.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Garanties de traitement des données des cinq grands outils d'IA en offre entreprise" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '16%' }}>Outil</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Points forts côté données en offre entreprise</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Ce qu'il faut vérifier avant de souscrire</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Où le vérifier</th>
                </tr>
              </thead>
              <tbody>
                {OUTILS_TABLE.map((row, i) => (
                  <tr key={row.outil} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.outil}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#E2E8F0', lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.forts}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.verifier}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, lineHeight: 1.65, verticalAlign: 'top' }}>
                      <a href={row.lienUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 6 }}>
                        <ExternalLink size={14} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                        {row.lienLabel}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            Synthèse indicative vérifiée en juillet 2026 : les conditions évoluent, référez-vous au contrat et à la documentation de l'éditeur.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE DE MISE EN CONFORMITÉ (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment mettre vos usages d'IA en conformité RGPD ?
          </h2>

          <p style={answerStyle}>
            <strong>La mise en conformité RGPD des usages d'IA suit cinq étapes : recenser les usages et les données qui y circulent, qualifier chaque traitement (base légale, finalité, AIPD quand le risque est élevé), choisir l'offre et le paramétrage adaptés, encadrer les pratiques par une charte et une politique de données, puis documenter et réviser à mesure que les usages évoluent.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            L'ordre compte : le choix de l'offre et du paramétrage découle de la qualification des traitements. Recenser d'abord évite de sécuriser un périmètre incomplet.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '36px 0 0' }}>
            Masteria mène cette démarche dans le cadre de son <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link>. Pour situer votre point de départ, le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> cadre la maturité de l'organisation, conformité des données comprise. Le dispositif d'ensemble (registre, comité, politique IA) relève de la <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link>.
          </p>
        </div>
      </section>

      {/* ── CE QUE DIT LA CNIL (cartes sourcées + définitions clés) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Repères réglementaires</Kicker>
          <h2 style={h2Style}>
            Ce que dit la CNIL sur l'IA
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La CNIL publie des recommandations sur l'application du RGPD aux systèmes d'intelligence artificielle : fiches pratiques, dossier dédié et réponses aux questions des responsables de traitement. Le RGPD s'applique à tout traitement de données personnelles, y compris par un système d'IA, depuis le 25 mai 2018.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 40px' }}>
            {CNIL_CARDS.map((card, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{card.desc}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                  Source : <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{card.source}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Définitions clés : ancrage d'entités (aligné sur le DefinedTermSet JSON-LD) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '8px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Définitions clés
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence : liens d'autorité suivis (SEO + GEO) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Sources de référence
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {[
              { label: 'Intelligence artificielle et RGPD — recommandations de la CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
              { label: 'RGPD — texte officiel (EUR-Lex, Règlement 2016/679)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679' },
              { label: 'AI Act — texte officiel (EUR-Lex, Règlement 2024/1689)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
            ].map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                IA et RGPD : les questions fréquentes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
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

      {/* ── BANDEAU : conseil (non finançable) + formations (Qualiopi, finançables) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Conseil et formation, distincts</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                L'audit met vos flux en conformité, la formation rend vos équipes autonomes
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La mise en conformité décrite sur cette page relève de notre conseil data & IA : audit des flux de données, qualification des traitements, AIPD, choix des offres et du paramétrage. C'est une prestation de service, non finançable par l'OPCO. La montée en compétences de vos équipes passe par nos formations certifiées Qualiopi, finançables : formation AI Act pour le cadre réglementaire, formations aux outils pour des usages quotidiens respectueux du RGPD.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/conseil-data-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir le conseil data & IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-ai-act" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir la formation AI Act
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Explorer nos autres expertises sur les données, la conformité et les outils d'IA.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "L'audit des flux de données et la mise en conformité RGPD de vos usages d'IA, traitement par traitement." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Conseil', desc: "Le dispositif d'ensemble : registre des usages, politique IA, comité de gouvernance et conformité AI Act." },
              { label: 'Charte IA en entreprise', href: '/charte-ia-entreprise', tag: 'Cadre interne', desc: "Le document qui fixe ce que chacun peut mettre dans quel outil et traduit le RGPD en consignes claires." },
              { label: 'Sécurité de Claude en entreprise', href: '/securite-claude-entreprise', tag: 'Outils', desc: "Les garanties de sécurité et de traitement des données d'un outil d'IA générative, étudiées en détail." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "La montée en compétences de vos équipes sur le règlement européen, certifiée Qualiopi et finançable." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Le point de départ qui cadre votre maturité IA, conformité et gouvernance des données comprises." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Mettez vos usages d'IA en conformité RGPD
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos outils d'IA en place et les données qu'ils touchent. Nous revenons vers vous sous 24 heures avec une première lecture de vos flux : offres à vérifier, traitements à qualifier, AIPD éventuelles, priorités. Vous repartez avec une vision claire de vos chantiers de conformité.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Auditer vos usages d'IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Audit des flux, AIPD, DPA · RGPD & AI Act · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
