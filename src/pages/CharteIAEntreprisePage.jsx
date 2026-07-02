import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ScrollText, ListChecks, Workflow, GraduationCap, Scale,
  ShieldCheck, AlertTriangle, Target, FileText, Layers, Ban, Copy,
  RefreshCw, ExternalLink, BookOpen,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page money « charte IA d'entreprise » (slug /charte-ia-entreprise). Cible :
 * « charte ia », « charte utilisation ia », « charte ia entreprise »,
 * « charte éthique ia », « politique ia entreprise », « exemple charte ia ».
 *
 * THÈSE : la charte IA est le premier outil d'adoption de l'IA en entreprise.
 * Les équipes utilisent les outils quand les règles sont claires ; une charte
 * efficace décrit d'abord ce qui est autorisé et le circuit pour valider un
 * nouvel usage.
 *
 * INTÉGRITÉ : aucun cas client nommé, aucun chiffre de résultat inventé, aucun
 * fichier téléchargeable ni promesse de modèle à télécharger : les exemples de
 * formulation vivent dans la page. Faits sourcés uniquement : AI Act (Règlement
 * UE 2024/1689, EUR-Lex), article 4 littératie IA (2 février 2025), RGPD (CNIL).
 * Conseil non finançable OPCO ; la formation gouvernance IA (Qualiopi,
 * 1 980 € HT/jour) porte le volet finançable.
 *
 * Design : patron de /gouvernance-ia. Hero sombre #0A0F1E, accent unique
 * #2563EB, icônes lucide (zéro emoji), réponses directes citables, une seule
 * ancre sombre en milieu de page (tableau des 8 rubriques), grille éditoriale
 * asymétrique sticky, timeline à rail, FAQ avec maxHeight.
 */

const SLUG = 'charte-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Charte IA d'entreprise : exemples et méthode | Masteria"
const META_DESC = "Charte IA entreprise : les 8 rubriques d'une charte d'utilisation de l'IA, des exemples de formulation et la méthode pour la rédiger et la faire adopter."
const KEYWORDS = "charte ia, charte utilisation ia, charte ia entreprise, charte d'utilisation de l'ia, charte éthique ia, politique ia entreprise, exemple charte ia, rédiger une charte ia, charte ia d'entreprise, littératie ia, article 4 ai act"

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
  { icon: ScrollText,    label: "Charte d'utilisation de l'IA" },
  { icon: ListChecks,    label: '8 rubriques types' },
  { icon: Workflow,      label: 'Circuit de validation' },
  { icon: GraduationCap, label: 'Littératie IA (article 4 AI Act)' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "Document interne de deux à six pages qui fixe les règles d'usage de l'IA : outils approuvés, données autorisées, validation humaine, transparence, circuit pour les nouveaux usages" },
  { label: 'Rôle', value: "Premier levier d'adoption de l'IA : des règles claires font utiliser les outils approuvés ; dans le flou, les équipes passent par des comptes personnels" },
  { label: 'Obligatoire ?', value: "Pas en tant que telle. L'article 4 de l'AI Act impose la littératie IA depuis le 2 février 2025 ; la charte en est un vecteur documenté" },
  { label: 'Contenu type', value: "8 rubriques, du périmètre des outils à la gouvernance du document, avec un exemple de formulation pour chacune dans le tableau de cette page" },
  { label: 'Méthode', value: "5 étapes, du cadrage des usages réels à la revue périodique ; la rédaction part des pratiques constatées dans vos équipes" },
  { label: 'Accompagnement', value: "Masteria rédige la charte avec vous (conseil) et forme vos équipes avec la formation gouvernance IA (Qualiopi, finançable, 1 980 € HT par jour)" },
]

/* ───────── Charte / politique / dispositif (3 cartes de comparaison) ───────── */

const COMPARAISON = [
  {
    icon: ScrollText,
    title: "Charte IA, ou charte d'utilisation de l'IA",
    desc: "Le document opérationnel destiné à chaque collaborateur. Il liste les outils approuvés, les données autorisées et le circuit de validation des nouveaux usages. C'est le texte le plus court et le plus lu du dispositif : c'est lui que cette page détaille.",
  },
  {
    icon: FileText,
    title: 'Politique IA d’entreprise',
    desc: "Le document de niveau direction : engagements de l'organisation, principes, rôles et responsabilités, articulation avec la conformité (AI Act, RGPD). La charte IA en est la traduction concrète pour les équipes.",
  },
  {
    icon: Layers,
    title: 'Dispositif de gouvernance IA',
    desc: "L'ensemble du cadre : registre des usages, comité IA, processus de validation, supervision humaine. La charte IA en est la partie visible par les équipes ; le reste structure le pilotage dans la durée.",
  },
]

/* ───────── Notions voisines (affichées + reprises dans le DefinedTermSet) ───────── */

const NOTIONS = [
  {
    term: 'Charte éthique IA',
    def: "Texte de principes qui exprime les valeurs de l'organisation face à l'IA : respect des personnes, transparence, responsabilité, place de l'humain dans les décisions. Elle se combine souvent avec la charte d'utilisation de l'IA, plus opérationnelle.",
  },
  {
    term: 'Littératie IA',
    def: "Niveau de compréhension et de compétence des équipes sur les systèmes d'IA qu'elles utilisent. L'article 4 de l'AI Act (Règlement UE 2024/1689) impose aux organisations d'en assurer un niveau suffisant depuis le 2 février 2025.",
  },
]

/* ───────── Pourquoi une charte IA maintenant (4 cartes) ───────── */

const WHY = [
  {
    icon: Scale,
    title: "L'article 4 de l'AI Act impose la littératie IA",
    desc: "Depuis le 2 février 2025, le Règlement (UE) 2024/1689 demande aux organisations qui déploient de l'IA d'assurer un niveau suffisant de littératie IA à leurs équipes. Une charte IA rédigée, diffusée et expliquée constitue une pièce documentée de cette démarche.",
    source: 'EUR-Lex, Règlement (UE) 2024/1689',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689',
  },
  {
    icon: ShieldCheck,
    title: 'Le RGPD encadre déjà les données',
    desc: "Utiliser un outil d'IA sur des données personnelles reste un traitement au sens du RGPD, appliqué depuis le 25 mai 2018. La charte traduit ces obligations en consignes applicables : quelles données peuvent entrer dans un prompt, lesquelles restent hors des outils.",
    source: 'CNIL, intelligence artificielle',
    sourceUrl: 'https://www.cnil.fr/fr/intelligence-artificielle',
  },
  {
    icon: AlertTriangle,
    title: "Le shadow IT s'installe dans le vide",
    desc: "Quand l'entreprise ne dit rien, les équipes utilisent quand même l'IA, avec des comptes personnels et des données non contrôlées. La charte remplace ce vide par un cadre : des outils approuvés, des règles connues, un endroit où poser la question.",
  },
  {
    icon: Target,
    title: "L'adoption suit les règles claires",
    desc: "Une équipe qui sait ce qui est autorisé ose utiliser les outils. La charte IA d'entreprise agit comme un permis explicite : elle décrit d'abord ce qui est permis, puis le circuit pour faire valider le reste.",
  },
]

/* ───────── Les 8 rubriques types (tableau de l'ancre sombre) ───────── */

const RUBRIQUES = [
  {
    rubrique: 'Périmètre et outils approuvés',
    couvre: "À qui la charte s'applique, la liste des outils d'IA validés et les conditions d'accès (comptes entreprise, configurations).",
    exemple: "« La charte s'applique à tout collaborateur, y compris intérimaires et prestataires. Les outils d'IA approuvés figurent en annexe A ; tout usage professionnel passe par un compte entreprise. »",
  },
  {
    rubrique: 'Données autorisées et interdites',
    couvre: "Les catégories de données qui peuvent entrer dans un outil d'IA et celles qui en sont exclues, selon leur sensibilité et le RGPD.",
    exemple: "« Aucune donnée client identifiante, donnée de santé ou information couverte par le secret des affaires n'est saisie dans un outil d'IA, hors configuration validée par la DSI et le DPO. »",
  },
  {
    rubrique: 'Validation humaine',
    couvre: "La relecture et la responsabilité des contenus produits avec une IA, avant toute diffusion ou décision.",
    exemple: "« Tout contenu généré avec une IA est relu et validé par son auteur avant envoi à un client, publication ou décision. L'auteur reste responsable du contenu qu'il diffuse. »",
  },
  {
    rubrique: 'Transparence',
    couvre: "Quand et comment signaler qu'un contenu ou une interaction mobilise une IA, en interne et vers l'extérieur.",
    exemple: "« Lorsqu'un livrable client repose sur une assistance IA substantielle, la mention en est faite si le client le demande ou si le contrat l'exige. Les agents conversationnels destinés au public s'annoncent comme tels. »",
  },
  {
    rubrique: 'Propriété intellectuelle',
    couvre: "Les droits sur les contenus générés, le respect des droits de tiers et le sort des prompts professionnels.",
    exemple: "« Les contenus générés destinés à un usage commercial sont vérifiés au regard des droits de tiers avant réutilisation. Les prompts et contenus produits dans le cadre professionnel appartiennent à l'entreprise. »",
  },
  {
    rubrique: 'Signalement des incidents',
    couvre: "Le réflexe attendu en cas de fuite de données, de sortie erronée ou d'usage non conforme, et à qui s'adresser.",
    exemple: "« Toute saisie accidentelle de données confidentielles dans un outil d'IA est signalée au référent IA sous 24 heures. Le signalement de bonne foi n'expose à aucune sanction. »",
  },
  {
    rubrique: 'Formation des équipes',
    couvre: "La montée en compétences prévue pour répondre à l'exigence de littératie IA de l'article 4 de l'AI Act.",
    exemple: "« Chaque collaborateur suit une sensibilisation aux outils d'IA à son arrivée. Les référents IA suivent une formation approfondie, renouvelée chaque année. »",
  },
  {
    rubrique: 'Gouvernance et mise à jour',
    couvre: "Qui porte la charte, le circuit de validation des nouveaux usages et le rythme de révision du document.",
    exemple: "« Toute demande de nouvel outil ou de nouvel usage est adressée au référent IA, qui répond sous dix jours ouvrés. Le comité IA revoit la charte tous les six mois. »",
  },
]

/* ───────── Méthode de rédaction (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrer les usages réels',
    desc: "Recensez ce que les équipes font déjà avec l'IA, y compris avec des comptes personnels : outils utilisés, cas d'usage par métier, données concernées. Un questionnaire anonyme ou des entretiens courts suffisent. La charte se rédige à partir de cette photographie.",
  },
  {
    num: '02',
    title: "Écrire les règles, en ouvrant par l'autorisé",
    desc: "Rédigez rubrique par rubrique, en commençant par la liste des outils approuvés et des usages permis. Les interdictions viennent ensuite, ciblées et motivées. Un langage concret par métier remplace le vocabulaire juridique partout où c'est possible.",
  },
  {
    num: '03',
    title: 'Définir le circuit de validation',
    desc: "Nommez un référent IA, fixez un délai de réponse et décrivez le chemin d'une demande : qui propose, qui instruit, qui tranche. Ce circuit absorbe les nouveaux outils au fil de l'eau et évite que la charte soit contournée dès le premier besoin non prévu.",
  },
  {
    num: '04',
    title: 'Faire adopter le document',
    desc: "Présentez la charte en équipe avec des cas concrets tirés du cadrage, recueillez une signature ou un accusé de lecture, intégrez le document au parcours d'arrivée des nouveaux collaborateurs. Cette diffusion documentée alimente votre conformité à l'article 4 de l'AI Act.",
  },
  {
    num: '05',
    title: 'Faire vivre la charte',
    desc: "Programmez une revue périodique (tous les six mois est un rythme courant), mettez les annexes à jour à chaque outil validé et suivez deux indicateurs simples : les demandes reçues par le référent IA et les incidents signalés. Une charte qui ne bouge plus a cessé de servir.",
  },
]

/* ───────── Les erreurs qui rendent une charte inutile (4 cartes) ───────── */

const ERREURS = [
  {
    icon: Ban,
    title: 'Tout interdire',
    desc: "La charte défensive qui interdit l'essentiel produit l'effet inverse de son objectif : les usages continuent avec des comptes personnels, hors de tout contrôle. Décrivez d'abord ce qui est autorisé ; l'interdiction devient une exception motivée, comprise et respectée.",
  },
  {
    icon: Copy,
    title: 'Recopier un modèle générique',
    desc: "Un modèle trouvé en ligne parle d'outils que vos équipes n'utilisent pas et ignore leurs cas d'usage. Personne ne s'y reconnaît, le document est classé. Les exemples de formulation de cette page se travaillent en atelier avec vos métiers avant d'entrer dans votre charte.",
  },
  {
    icon: Workflow,
    title: 'Oublier le circuit de validation',
    desc: "Une liste de règles figées laisse le collaborateur qui découvre un outil utile face à un mur. Il l'utilisera quand même. Le circuit de validation (un référent identifié, un délai de réponse connu) transforme la charte en outil de travail quotidien.",
  },
  {
    icon: RefreshCw,
    title: 'Ne jamais mettre à jour',
    desc: "Une charte qui cite des outils abandonnés perd sa crédibilité, et avec elle toutes ses règles. Fixez un rythme de revue et un responsable ; la mise à jour des annexes (outils, données) peut suivre un circuit allégé pour rester au rythme des usages.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Une charte IA est-elle obligatoire ?',
    a: "Non, aucun texte n'impose la charte IA en tant que telle. L'article 4 de l'AI Act (Règlement UE 2024/1689) impose en pratique, depuis le 2 février 2025, que les organisations qui déploient des systèmes d'IA assurent un niveau suffisant de littératie IA à leurs équipes. Une charte d'utilisation de l'IA rédigée, diffusée et expliquée aux équipes constitue un vecteur documenté de cette obligation : elle montre que l'entreprise a formalisé des règles et les a portées à la connaissance de chacun. Le RGPD, de son côté, encadre les traitements de données personnelles, ce que la charte traduit en consignes opérationnelles. Les entreprises la rédigent aussi parce qu'elle accélère l'adoption : les équipes utilisent les outils quand les règles sont claires.",
  },
  {
    q: 'Quelle différence entre charte IA et charte éthique IA ?',
    a: "La charte IA, ou charte d'utilisation de l'IA, est un document opérationnel : elle dit quels outils utiliser, avec quelles données, sous quelle validation et par quel circuit faire approuver un nouvel usage. La charte éthique IA se situe en amont : elle exprime les principes de l'organisation (respect des personnes, transparence, responsabilité, place de l'humain dans les décisions). Beaucoup d'entreprises réunissent les deux dans un même document, avec une page de principes suivie des règles concrètes. Si vous devez choisir un point de départ, commencez par la charte d'utilisation : les équipes attendent des règles applicables avant des principes généraux.",
  },
  {
    q: 'Qui doit rédiger la charte IA ?',
    a: "Un binôme fonctionne bien : un porteur côté direction (DSI, juridique ou direction générale selon la taille de l'entreprise) et des contributeurs côté métiers, qui apportent les usages réels. Le DPO est associé pour le volet données personnelles. La rédaction par une seule fonction produit des textes déséquilibrés : le juridique seul écrit une charte défensive que les équipes contournent, le métier seul néglige les obligations. Un accompagnement extérieur apporte les formulations éprouvées et la connaissance des outils ; la validation finale reste interne, parce que la charte engage l'organisation.",
  },
  {
    q: 'Charte IA et RGPD : quel lien ?',
    a: "Utiliser un outil d'IA sur des données personnelles constitue un traitement au sens du RGPD, appliqué depuis le 25 mai 2018. La charte IA traduit cette réalité en consignes que chacun peut appliquer : quelles catégories de données peuvent entrer dans un prompt, lesquelles sont interdites, quels outils disposent d'une configuration validée (hébergement, contrat, non-réutilisation des données pour l'entraînement des modèles). Les recommandations de la CNIL sur l'intelligence artificielle alimentent utilement cette rubrique. La charte complète le registre des traitements et les analyses d'impact : elle en est la déclinaison lisible pour les équipes.",
  },
  {
    q: "Quelle longueur pour une charte IA d'entreprise ?",
    a: "De deux à six pages pour le corps du document, avec les listes d'outils et de catégories de données en annexes. Au-delà, le texte cesse d'être lu et perd son effet sur les usages. Les annexes se mettent à jour par un circuit allégé, ce qui évite de refaire valider tout le document à chaque changement d'outil. Une structure courante : une page de principes, les huit rubriques en trois à quatre pages, puis les annexes. La concision est un choix de conception : chaque règle conservée doit pouvoir être citée de mémoire par un collaborateur.",
  },
  {
    q: 'Faut-il faire signer la charte IA aux salariés ?',
    a: "La signature individuelle ou l'accusé de lecture donnent une valeur probante à la diffusion : l'entreprise peut montrer que chaque collaborateur a eu connaissance des règles, ce qui compte pour la littératie IA de l'article 4 de l'AI Act comme en cas d'incident. Pour rendre la charte opposable en matière disciplinaire, la voie classique passe par le règlement intérieur, avec sa procédure propre (consultation du CSE comprise) ; votre conseil juridique tranchera selon votre contexte. Une signature recueillie en silence produit peu d'effet sur les usages ; une présentation en équipe, avec des cas concrets, change les pratiques.",
  },
]

/* ───────── Glossaire (DefinedTermSet, ancrage d'entités) ───────── */

const GLOSSARY = [
  {
    term: 'Charte IA',
    def: "Document interne qui fixe les règles d'usage de l'intelligence artificielle dans une organisation : outils approuvés, données autorisées et interdites, validation humaine, transparence, propriété intellectuelle, signalement des incidents et circuit de validation des nouveaux usages.",
  },
  {
    term: 'Politique IA',
    def: "Document de niveau direction qui pose les engagements, les principes, les rôles et les responsabilités de l'organisation en matière d'intelligence artificielle. La charte IA en est la déclinaison opérationnelle pour les équipes.",
  },
  {
    term: 'Charte éthique IA',
    def: "Texte de principes qui exprime les valeurs de l'organisation face à l'IA : respect des personnes, transparence, responsabilité, place de l'humain dans les décisions. Elle se combine souvent avec la charte d'utilisation de l'IA, plus opérationnelle.",
  },
  {
    term: 'Littératie IA',
    def: "Niveau de compréhension et de compétence des équipes sur les systèmes d'IA qu'elles utilisent. L'article 4 de l'AI Act (Règlement UE 2024/1689) impose aux organisations d'en assurer un niveau suffisant depuis le 2 février 2025.",
  },
]

/* ───────── JSON-LD ───────── */

/* Article : auteur identifié (Mathias Nizan) et dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "Charte IA d'entreprise : ce qu'elle doit contenir et comment la faire adopter",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Charte IA', "Charte d'utilisation de l'IA", 'Politique IA d’entreprise', 'Littératie IA', 'AI Act'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire de la charte IA d'entreprise",
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

export default function CharteIAEntreprisePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Définition / Pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Charte IA d'entreprise", slug: SLUG },
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
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Charte IA d'entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ScrollText size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Charte IA & adoption de l'IA en entreprise
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Charte IA d'entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce qu'elle doit contenir et comment la faire adopter</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une charte IA d'entreprise fixe les règles d'usage de l'intelligence artificielle : outils approuvés, données autorisées, validation humaine et circuit pour les nouveaux usages. <strong style={{ color: '#fff', fontWeight: 700 }}>Des règles claires font utiliser les outils : la charte est le premier levier d'adoption de l'IA.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Cette page décrit le contenu type d'une charte d'utilisation de l'IA, avec un exemple de formulation pour chacune des huit rubriques, la méthode de rédaction en cinq étapes et les erreurs qui rendent le document inutile. Organisme certifié Qualiopi fondé à Lyon, Masteria rédige des chartes IA avec ses clients et forme les équipes à la gouvernance de l'IA.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Rédiger votre charte IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#contenu" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les 8 rubriques types
            </a>
          </div>

          {/* tags */}
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

      {/* ── QU'EST-CE QU'UNE CHARTE IA ? (éditorial asymétrique) ── */}
      <section id="definition" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Définition</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce qu'une charte IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une charte IA est un document interne, généralement de deux à six pages, qui fixe les règles d'usage de l'intelligence artificielle dans l'entreprise : outils approuvés, données autorisées et interdites, validation humaine des contenus, transparence, propriété intellectuelle et circuit pour faire valider un nouvel usage. Elle donne aux équipes un cadre explicite : chacun sait ce qu'il peut faire et à qui s'adresser pour le reste.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le terme recouvre des documents de nature différente. La comparaison ci-contre situe la charte IA parmi ses voisins, du texte de principes au dispositif complet de gouvernance.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {COMPARAISON.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Notions voisines : ancrage d'entités (charte éthique IA, littératie IA) */}
              <h3 style={{ ...h3Style, fontSize: 18, margin: '32px 0 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <BookOpen size={19} color={c} strokeWidth={2.2} aria-hidden="true" /> Deux notions voisines
              </h3>
              <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
                {NOTIONS.map((g, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>

              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                La charte est la pièce la plus visible d'un ensemble plus large. Pour le dispositif complet (registre des usages, comité IA, supervision humaine), voyez notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> ; pour les principes en amont, notre page <Link to="/ia-responsable" style={aStyle}>IA responsable</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UNE CHARTE IA MAINTENANT ? (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi maintenant</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi une charte IA maintenant ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Parce que l'article 4 de l'AI Act impose la littératie IA depuis le 2 février 2025, que le RGPD s'applique à tout traitement de données personnelles par un outil d'IA et que les usages non encadrés se développent déjà dans les équipes. Une charte IA claire transforme ces contraintes en cadre d'adoption.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={card.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: card.source ? '0 0 10px' : 0 }}>{card.desc}</p>
                    {card.source && (
                      <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                        Source : <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{card.source}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour la lecture complète du règlement et de ses échéances, voyez notre <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link> ; pour le volet données personnelles, notre page <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link> détaille ce que la CNIL attend des usages d'IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 8 RUBRIQUES TYPES (ancre sombre unique) ── */}
      <section id="contenu" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Contenu type</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Que doit contenir une charte IA d'entreprise ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une charte IA d'entreprise couvre huit rubriques : périmètre et outils approuvés, données autorisées et interdites, validation humaine, transparence, propriété intellectuelle, signalement des incidents, formation des équipes, gouvernance et mise à jour. La rubrique décisive est le circuit de validation des nouveaux usages : c'est elle qui garde la charte en prise avec les usages réels.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau détaille chaque rubrique avec un exemple de formulation prêt à discuter en atelier. Ces exemples se recopient librement ; leur valeur vient de l'adaptation à vos outils, à vos métiers et à votre contexte juridique.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Les huit rubriques types d'une charte IA d'entreprise, avec un exemple de formulation pour chacune" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Rubrique</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Ce qu'elle couvre</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '48%' }}>Exemple de formulation</th>
                </tr>
              </thead>
              <tbody>
                {RUBRIQUES.map((row, i) => (
                  <tr key={row.rubrique} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.rubrique}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.couvre}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#E2E8F0', lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.exemple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            Formulations données à titre d'exemple, à retravailler avec vos parties prenantes. Pour les obligations réglementaires, le texte de référence est le <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2, display: 'inline-flex', alignItems: 'center', gap: 5 }}>Règlement (UE) 2024/1689 sur EUR-Lex <ExternalLink size={13} strokeWidth={2.2} aria-hidden="true" /></a>.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE DE RÉDACTION (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment rédiger une charte IA ?
          </h2>

          <p style={answerStyle}>
            <strong>La rédaction d'une charte IA suit cinq étapes : cadrer les usages réels des équipes, écrire les règles en ouvrant par ce qui est autorisé, définir le circuit de validation des nouveaux usages, faire adopter le document, puis le faire vivre par des revues régulières. Comptez quelques semaines entre le cadrage et la diffusion, ateliers métiers compris.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le point de départ conditionne tout le reste : la charte part des usages réels des équipes, et les cinq étapes s'enchaînent avec les métiers autour de la table.
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
        </div>
      </section>

      {/* ── LES ERREURS QUI RENDENT UNE CHARTE INUTILE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Les pièges</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les erreurs qui rendent une charte inutile
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Quatre erreurs reviennent dans les chartes IA qui échouent : tout interdire, recopier un modèle générique, omettre le circuit de validation des nouveaux usages et laisser le document vieillir. Dans les quatre cas, la charte ne décrit plus la réalité des équipes et n'est plus appliquée.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7, maxWidth: 880 }}>
            Ces erreurs partagent une origine : une charte conçue d'abord pour protéger juridiquement l'entreprise. Les quatre correctifs tiennent en une page.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {ERREURS.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Une charte IA qui évite ces quatre pièges devient le point d'entrée naturel de la gouvernance : le registre des usages, le comité IA et la supervision humaine s'y raccordent. Notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> décrit ce dispositif complet.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Charte IA : les questions fréquentes
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

      {/* ── CONSEIL & FORMATION (bandeau) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Conseil et formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Rédiger votre charte IA avec Masteria
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Deux façons de travailler ensemble. En conseil, nous rédigeons la charte avec vous : cadrage des usages, ateliers avec les métiers, rédaction, présentation aux équipes ; cette prestation d'accompagnement reste hors du champ des financements OPCO. En formation, la journée gouvernance IA consacre son module 3 à la rédaction de la charte : vos équipes construisent leur propre document pendant la journée. Elle est certifiée Qualiopi et finançable, au tarif de 1 980 € HT par jour.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Rédiger votre charte avec nous
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-gouvernance-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir la formation gouvernance IA
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
            La charte IA s'inscrit dans un cadre plus large : gouvernance, conformité et formation des équipes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Conseil', desc: "Le dispositif complet dont la charte est la partie visible : audit, registre des usages, comité IA." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Formation', desc: "Une journée pour construire registre, charte et comité IA, avec un module dédié à la rédaction de la charte. Finançable OPCO." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "La maîtrise du Règlement (UE) 2024/1689 et de ses obligations, dont la littératie IA de l'article 4." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Conformité', desc: "Ce que le RGPD implique pour vos usages d'IA : bases légales, données autorisées, recommandations de la CNIL." },
              { label: 'IA responsable', href: '/ia-responsable', tag: 'Repères', desc: "Les principes d'une IA digne de confiance, dont la charte éthique IA est l'expression écrite." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, feuille de route et cadrage des usages IA au niveau de la direction." },
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Votre charte IA, rédigée avec vos équipes
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos usages d'IA et vos règles actuelles, écrites ou tacites. Sous 24 heures, vous recevez une proposition de cadrage : périmètre de la charte, parties prenantes à réunir, calendrier de rédaction et de diffusion. Vous saurez précisément quel document produire et comment le faire adopter.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Cadrer votre charte IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Conseil et formation Qualiopi · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
