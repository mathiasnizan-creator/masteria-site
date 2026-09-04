import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Users, MapPin, Check, Target, Eye, FileText, Network,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Cpu, Compass, Radar,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « consultant visibilité IA » (slug /consultant-visibilite-ia), cluster
 * CONSEIL / GEO. Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 :
 * « consultant visibilité ia » (70/mois, KD 8, CPC 2,58 $, pertinence 74).
 *
 * RÉPARTITION D'INTENTIONS dans le cluster GEO :
 *  - /audit-geo-ia = la MISSION d'état des lieux (taux de citation, part de voix) ;
 *  - /agence-seo-ia = le SERVICE continu, SEO augmenté + GEO ;
 *  - CETTE page = la PERSONNE : ce que fait un consultant visibilité IA, comment
 *    le choisir, ce qu'il ne peut pas promettre, et notre format d'intervention.
 *
 * INTÉGRITÉ : aucun taux de citation ni chiffre de résultat inventé, aucune
 * promesse de position dans les moteurs de réponse, aucun outil tiers nommé
 * comme partenaire, prix au forfait après audit. Datation : toute mesure de
 * citation est rattachée au modèle interrogé et à la période. Voix : verdict
 * d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'consultant-visibilite-ia'
const ENTITY = "Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Consultant visibilité IA : être cité par ChatGPT, Perplexity, Gemini | Masteria"
const META_DESC = "Consultant visibilité IA : ce qu'il mesure, ce qu'il change dans vos contenus et votre site pour être cité par ChatGPT, Perplexity, Gemini et les AI Overviews, comment le choisir, et ce qu'il ne peut pas promettre. Cadrage gratuit."
const KEYWORDS = "consultant visibilité ia, consultant geo, consultant generative engine optimization, expert visibilité ia, consultant référencement ia, consultant aio, consultant llmo, visibilité chatgpt entreprise, être cité par chatgpt"

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
  { icon: Radar, label: 'Mesure de citation datée, par modèle' },
  { icon: Search, label: 'SEO et GEO tenus ensemble' },
  { icon: Compass, label: 'Cabinet spécialisé IA depuis 2022' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

const EN_BREF = [
  { label: 'Le rôle', value: "Le consultant visibilité IA mesure si et comment les moteurs de réponse (ChatGPT, Perplexity, Gemini, AI Overviews) citent votre entreprise, puis change ce qui doit l'être pour qu'ils la citent mieux" },
  { label: 'Missions', value: "Mesure de citation, analyse des sources et des entités, contenus citables, accès des robots et structure du site, autorité et mentions, suivi dans le temps" },
  { label: 'Ce qu\'il ne promet pas', value: "Une position ou une citation garantie : les moteurs de réponse changent chaque mois et personne ne les contrôle" },
  { label: 'Format', value: "Un audit GEO pour commencer, puis un accompagnement par trimestre ; un consultant senior, adossé au cabinet" },
  { label: 'Prix', value: "Forfait par phase après un cadrage gratuit ; le conseil n'est pas finançable par l'OPCO, la formation associée l'est" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Missions ───────── */

const MISSIONS = [
  { icon: Radar, title: 'Mesurer la citation, modèle par modèle', desc: "Un panel de questions que vos clients posent réellement, interrogé sur ChatGPT, Perplexity, Gemini et les AI Overviews de Google, à une date donnée, avec la version du modèle notée. Qui est cité, avec quelle source, dans quel ordre, face à quels concurrents. Sans cette mesure datée, tout le reste est de l'opinion." },
  { icon: Eye, title: 'Comprendre pourquoi vous êtes cité, ou pas', desc: "Les moteurs de réponse citent ce qu'ils peuvent lire, comprendre et attribuer : des entités claires, des sources reprises ailleurs, des pages qui répondent directement. Le consultant remonte de chaque réponse aux sources qu'elle utilise, et compare avec ce que votre site offre." },
  { icon: FileText, title: 'Rendre vos contenus citables', desc: "Réponses directes en tête de page, définitions autonomes, chiffres sourcés et datés, auteur identifié, structure lisible par une machine. Le consultant réécrit avec vous les pages qui comptent, sans transformer le site en foire aux questions." },
  { icon: Network, title: 'Ouvrir le site aux robots des IA', desc: "Accès des robots des éditeurs, données structurées, vitesse, canonique, contenu rendu côté serveur : la partie technique conditionne tout le reste. Le consultant vérifie ce que chaque robot voit, et corrige avec votre équipe ou votre prestataire." },
  { icon: Target, title: 'Construire l\'autorité et les mentions', desc: "Les moteurs de réponse recoupent : une entreprise citée par des médias, des annuaires de référence, des pages tierces cohérentes est reprise plus volontiers. Le consultant identifie les mentions qui manquent et celles qui sont fausses, et organise la correction." },
  { icon: Gauge, title: 'Suivre dans le temps, et rendre compte', desc: "La même mesure, rejouée chaque mois, sur le même panel : taux de citation, part de voix, sources utilisées, changements de modèle. Un rapport court, daté, qui dit ce qui a bougé et pourquoi, et ce qu'on fait le mois suivant." },
]

/* ───────── SEO classique vs visibilité IA ───────── */

const TABLE = [
  { critere: 'Objectif', sans: 'Une position dans une liste de dix liens', avec: 'Une citation dans une réponse rédigée, avec la source' },
  { critere: 'Signaux qui comptent', sans: 'Mots-clés, liens entrants, technique', avec: 'Entités claires, sources reprises, réponses directes, autorité recoupée' },
  { critere: 'Mesure', sans: 'Suivi de positions, trafic organique', avec: 'Taux de citation par question, par modèle, à une date donnée' },
  { critere: 'Livrable', sans: 'Audit, mots-clés, netlinking', avec: "Audit GEO, contenus citables, corrections d'accès, plan de mentions" },
  { critere: 'Horizon', sans: 'Des mois pour bouger une position', avec: 'Des semaines pour être cité, et une veille permanente sur les modèles' },
]

/* ───────── Méthode ───────── */

const METHODE = [
  { periode: 'Semaine 1', title: "L'audit GEO", desc: "Le panel de questions réelles de vos clients, la mesure de citation sur chaque moteur avec le modèle et la date, la part de voix face aux concurrents, l'analyse des sources utilisées, l'accès de vos pages aux robots. Restitution : où vous en êtes, pourquoi, et les cinq chantiers qui comptent." },
  { periode: 'Semaines 2-4', title: 'Contenus citables et corrections techniques', desc: "Les pages qui portent vos réponses sont réécrites ou créées avec vous : réponse directe, définitions, chiffres sourcés, auteur. Les blocages techniques (accès des robots, données structurées, rendu) sont corrigés avec votre équipe." },
  { periode: 'Mois 2-3', title: 'Autorité, mentions, cohérence', desc: "Les mentions qui manquent (médias, annuaires de référence, fiches) sont obtenues ou corrigées, l'identité de l'entreprise est rendue cohérente partout où les moteurs la lisent. C'est le travail lent ; il conditionne la citation durable." },
  { periode: 'Chaque mois', title: 'La mesure rejouée', desc: "Le même panel, les mêmes moteurs, la version du modèle notée : ce qui a bougé, ce qui a reculé, ce qui vient d'un changement de modèle plutôt que de votre site. Un rapport court, et le chantier du mois suivant." },
]

/* ───────── Choisir ───────── */

const CHOISIR = [
  { icon: ClipboardCheck, title: 'Une mesure reproductible, datée, par modèle', desc: "Demandez comment la citation est mesurée : quel panel de questions, quels moteurs, quelle version, quelle date. Un consultant qui montre une capture d'écran sans méthode vend une anecdote." },
  { icon: ShieldCheck, title: 'Aucune promesse de position', desc: "Personne ne garantit une citation dans ChatGPT ou une place dans un AI Overview : les modèles changent chaque mois et les éditeurs ne publient pas leurs règles. Un consultant qui promet un résultat chiffré d'avance ne mesure pas honnêtement." },
  { icon: Search, title: 'Le SEO maîtrisé, pas renié', desc: "Les moteurs de réponse s'appuient largement sur ce que le référencement classique rend lisible : structure, autorité, accès. Un consultant visibilité IA qui méprise le SEO manque la moitié du sujet." },
  { icon: FileText, title: 'Le travail sur vos contenus réels', desc: "La citation vient de pages précises, écrites pour répondre. Un consultant qui livre un rapport sans toucher une page, ou qui propose de générer cent articles, ne fera pas bouger la mesure." },
  { icon: Cpu, title: 'Une compréhension des modèles', desc: "Ce que les moteurs de réponse lisent, comment ils attribuent une source, pourquoi ils inventent parfois : un consultant qui ne comprend pas le fonctionnement des modèles optimise à l'aveugle." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Générer du contenu en masse', desc: "Cent pages produites par l'IA pour être citées par l'IA : les moteurs de réponse les reconnaissent et les ignorent, et Google les déclasse. Une page qui répond vraiment vaut plus que cent qui remplissent." },
  { title: 'Croire une capture d\'écran', desc: "Un prompt, une réponse favorable, une capture : ce n'est pas une mesure. La même question posée le lendemain, sur un autre modèle ou depuis un autre compte, donne autre chose. Seul un panel rejoué dans le temps compte." },
  { title: 'Oublier la technique', desc: "Un site qui bloque les robots des éditeurs, rend son contenu en JavaScript côté client ou multiplie les pages en doublon ne sera pas cité, quel que soit le contenu. La vérification technique vient en premier." },
  { title: 'Promettre le numéro un sur ChatGPT', desc: "Il n'y a pas de numéro un : chaque réponse est générée, varie selon la formulation, le modèle, le contexte de l'utilisateur. Une promesse de rang est le signe d'une méthode absente." },
  { title: 'Mesurer sans dater ni nommer le modèle', desc: "Un taux de citation sans version de modèle ni période de collecte ne se compare à rien. Nous datons chaque mesure et notons le modèle, et nous refusons de citer des études qui ne le font pas." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Qu'est-ce qu'un consultant visibilité IA ?", a: "C'est un consultant qui mesure si les moteurs de réponse (ChatGPT, Perplexity, Gemini, les AI Overviews de Google) citent votre entreprise quand vos clients leur posent leurs questions, qui comprend pourquoi, et qui change ce qui doit l'être : les contenus qui portent vos réponses, l'accès de votre site aux robots des éditeurs, la cohérence de votre identité et de vos mentions sur le web. On parle aussi de consultant GEO, pour Generative Engine Optimization, ou AIO. Chez Masteria, ce rôle est tenu par un consultant senior adossé à un cabinet qui ne fait que de l'IA, et il commence par un audit GEO daté." },
  { q: "Quelle différence avec un consultant SEO ?", a: "Le consultant SEO vise une position dans une liste de liens ; le consultant visibilité IA vise une citation dans une réponse rédigée, avec la source. Les signaux se recoupent en partie (structure, autorité, accès technique), mais la mesure change : on ne suit plus des positions, on rejoue un panel de questions sur chaque moteur, à une date donnée, avec la version du modèle. Les deux métiers se complètent ; un consultant visibilité IA qui ignore le SEO manque la moitié du sujet, et l'inverse est vrai. Notre agence SEO IA tient les deux ensemble." },
  { q: "Pouvez-vous garantir que ChatGPT citera notre entreprise ?", a: "Non, et personne ne le peut. Les moteurs de réponse génèrent chaque réponse, changent de modèle sans prévenir, et les éditeurs ne publient pas leurs règles d'attribution. Ce que nous garantissons : une mesure honnête et datée, un travail sur les vraies causes (contenus, technique, mentions), et un rapport mensuel qui dit ce qui a bougé et pourquoi. Un consultant qui promet une citation ou un rang d'avance ne mesure pas, ou ne mesurera plus après avoir signé." },
  { q: "Comment mesurez-vous la visibilité dans les IA ?", a: "Avec un panel de questions que vos clients posent réellement, construit avec vous, interrogé sur chaque moteur de réponse à une date donnée, en notant la version du modèle. Pour chaque réponse : votre entreprise est-elle citée, avec quelle source, dans quel ordre, face à quels concurrents. Le panel est rejoué chaque mois, à l'identique, ce qui permet de distinguer un progrès dû à votre site d'un changement de modèle. Nous ne publions jamais un taux de citation sans le modèle et la période ; c'est la règle que nous appliquons aussi aux études que nous citons." },
  { q: "Combien coûte un consultant visibilité IA ?", a: "Au forfait, par phase : l'audit GEO a son prix fixe, annoncé après un cadrage gratuit qui fixe le panel et les moteurs ; l'accompagnement se chiffre ensuite par trimestre selon le nombre de pages à travailler et de mentions à obtenir. Vous décidez de la suite sur les résultats de l'audit. Le conseil n'est pas finançable par votre OPCO ; le volet formation (rédiger pour être cité, mesurer soi-même) est certifié Qualiopi et finançable." },
  { q: "Combien de temps faut-il pour être cité par les IA ?", a: "Cela dépend de votre point de départ. Quand le site est accessible et que l'entreprise a déjà une autorité sur son marché, des pages réécrites pour répondre peuvent être reprises en quelques semaines. Quand l'accès des robots est bloqué ou que les mentions sont incohérentes, il faut d'abord corriger, et la citation suit sur un ou deux trimestres. Nous ne donnons pas de délai avant l'audit ; après, nous en donnons un, avec ses conditions." },
  { q: "Pour quelles entreprises ce travail a-t-il un sens ?", a: "Pour celles dont les clients posent leurs questions aux IA avant d'acheter : le B2B à cycle long, les services professionnels, la formation, le conseil, la santé, l'immobilier, les logiciels. Une PME peut être citée avant un grand groupe si ses pages répondent mieux et si son identité est cohérente. Le cadrage gratuit dit si vos questions clients passent déjà par les moteurs de réponse ; quand ce n'est pas le cas, nous le disons et nous orientons vers le SEO classique." },
  { q: "GEO, AIO, LLMO, AEO : est-ce la même chose ?", a: "Ce sont des noms voisins pour le même travail : être visible et cité dans les réponses générées par les IA. GEO (Generative Engine Optimization) est le terme le plus répandu ; AIO et LLMO insistent sur les modèles ; AEO (Answer Engine Optimization) vient du monde des assistants vocaux. Le vocabulaire changera encore ; la méthode, non : mesurer, comprendre, rendre citable, ouvrir l'accès, construire l'autorité, suivre." },
  { q: "Consultant freelance ou cabinet ?", a: "Un consultant indépendant compétent fait très bien ce travail sur un périmètre net. Le cabinet apporte deux choses en plus : la continuité (la mesure mensuelle ne dépend pas de la disponibilité d'une personne) et l'adossement à d'autres compétences, développement pour les corrections techniques, formation pour vos équipes, conseil IA pour le reste. Chez Masteria, le consultant visibilité IA est une personne nommée sur le devis, avec le cabinet derrière." },
  { q: "Pouvez-vous former nos équipes à faire ce travail elles-mêmes ?", a: "Oui, et c'est souvent la meilleure suite : après l'audit et les premières corrections, une formation apprend à vos équipes marketing ou communication à rédiger pour être cité, à rejouer la mesure et à lire les changements de modèle. Ce volet est certifié Qualiopi et finançable par votre OPCO. Nos formations IA SEO par outil couvrent la partie rédaction et référencement ; le cadrage dit ce qu'il faut ajouter pour la mesure." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Consultant visibilité IA (Masteria)',
  alternateName: 'Consultant GEO, Generative Engine Optimization',
  description: META_DESC,
  url: 'https://www.master-ia.fr/consultant-visibilite-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#webpage' },
  serviceType: 'Conseil en visibilité dans les moteurs de réponse IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }],
  audience: { '@type': 'BusinessAudience', audienceType: 'PME, ETI et groupes' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Missions du consultant visibilité IA',
    itemListElement: MISSIONS.map(m => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.title, description: m.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#termes',
  name: 'Visibilité IA : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Consultant visibilité IA', description: "Consultant qui mesure la citation d'une entreprise dans les moteurs de réponse (ChatGPT, Perplexity, Gemini, AI Overviews), en comprend les causes et agit sur les contenus, l'accès technique et l'autorité pour l'améliorer." },
    { '@type': 'DefinedTerm', name: 'GEO (Generative Engine Optimization)', description: "Ensemble des pratiques qui rendent une entreprise et ses contenus visibles et cités dans les réponses générées par les IA. Termes voisins : AIO, LLMO, AEO." },
    { '@type': 'DefinedTerm', name: 'Taux de citation', description: "Part des questions d'un panel pour lesquelles un moteur de réponse cite l'entreprise, mesurée à une date donnée avec la version du modèle notée." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#article',
  headline: "Consultant visibilité IA : ce qu'il mesure, ce qu'il change, ce qu'il ne promet pas",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Optimisation pour les moteurs de recherche', sameAs: 'https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

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

function CardGrid({ items, min = 260 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap: 24, marginTop: 12 }}>
      {items.map(card => {
        const Icon = card.icon
        return (
          <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
              <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
            </div>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function ConsultantVisibiliteIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence SEO IA', slug: 'agence-seo-ia' },
    { name: 'Consultant visibilité IA', slug: SLUG },
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
        dateModified="2026-09-04"
        speakable={['#geo-summary', '#en-bref']}
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
            <Link to="/agence-seo-ia" style={{ color: '#94A3B8' }}>Agence SEO IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Consultant visibilité IA</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Radar size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Conseil · Visibilité IA</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Consultant visibilité IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce qu'il mesure, ce qu'il change, ce qu'il ne promet pas</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un consultant visibilité IA mesure si ChatGPT, Perplexity, Gemini et les AI Overviews citent votre entreprise quand vos clients leur posent leurs questions, comprend pourquoi, et change ce qui doit l'être : <strong style={{ color: '#fff', fontWeight: 700 }}>vos contenus, l'accès de votre site aux robots, la cohérence de vos mentions</strong>. Chez {ENTITY.split(',')[0]}, il commence par un audit GEO daté, modèle par modèle.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le métier attire les promesses invérifiables : être numéro un sur ChatGPT, garantir une citation. Il n'y a ni numéro un ni garantie, seulement une mesure honnête, rejouée dans le temps, et un travail sur les vraies causes. C'est ce que cette page décrit, et ce que nous faisons.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un audit GEO
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#missions" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Voir les missions</a>
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
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── MISSIONS (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les missions</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Que fait un consultant visibilité IA ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six missions, dans cet ordre : mesurer la citation modèle par modèle, comprendre pourquoi vous êtes cité ou pas, rendre vos contenus citables, ouvrir le site aux robots des IA, construire l'autorité et les mentions, puis suivre dans le temps et rendre compte.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La première mission a sa propre page : l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO</Link>. L'ensemble, SEO compris, est porté par notre <Link to="/agence-seo-ia" style={aStyle}>agence SEO IA</Link>.
              </p>
            </div>
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
      </section>

      {/* ── SEO vs VISIBILITÉ IA (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Ce qui change</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Consultant SEO ou consultant visibilité IA : quelle différence ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le consultant SEO vise une position dans une liste de liens ; le consultant visibilité IA vise une citation dans une réponse rédigée. Les signaux se recoupent, la mesure change entièrement, et les deux métiers se complètent : un site que les moteurs de réponse citent est presque toujours un site que Google lit bien.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre consultant SEO classique et consultant visibilité IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Consultant SEO classique</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Consultant visibilité IA</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.sans}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>Comment travaille notre consultant visibilité IA ?</h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Un audit GEO la première semaine, des contenus citables et des corrections techniques le premier mois, l'autorité et les mentions sur les deux mois suivants, puis la même mesure rejouée chaque mois. Le consultant est une personne nommée sur le devis, adossée au cabinet.</strong>
          </p>
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0') }}>
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
            Le panel de questions, les moteurs interrogés et le rythme se fixent au cadrage, gratuit. Pour comprendre la démarche avant de nous appeler, notre guide <Link to="/blog/geo-referencement-ia-generative-entreprise" style={aStyle}>GEO : se rendre visible dans ChatGPT, Perplexity et Gemini</Link>.
          </p>
        </div>
      </section>

      {/* ── CHOISIR ── */}
      <section id="choisir" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Choisir</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Comment choisir un consultant visibilité IA ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Cinq critères, qui valent pour nous comme pour les autres : une mesure reproductible et datée par modèle, aucune promesse de position, le SEO maîtrisé, un travail sur vos contenus réels, et une compréhension du fonctionnement des modèles. Un consultant qui en manque un vend une anecdote.</strong>
          </p>
          <CardGrid items={CHOISIR} min={260} />
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Les cinq erreurs de la visibilité IA</h2>
          <p style={answerStyle}>
            <strong>Générer du contenu en masse, croire une capture d'écran, oublier la technique, promettre le numéro un sur ChatGPT, mesurer sans dater ni nommer le modèle. Cinq erreurs que nous voyons chez des entreprises qui ont déjà payé un premier prestataire, et qui coûtent plus cher que l'audit qui les aurait évitées.</strong>
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

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Le volet formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Vos équipes peuvent apprendre à rédiger pour être citées, et à mesurer</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Après l'audit et les premières corrections, une formation apprend à vos équipes marketing ou communication à écrire des pages que les moteurs de réponse reprennent, à rejouer la mesure de citation et à lire les changements de modèle. Ce volet est certifié Qualiopi et finançable par votre OPCO ; le conseil reste une prestation de service. Voir la <Link to="/formation-ia-seo" style={aStyle}>formation IA SEO</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Rédiger des réponses directes et des définitions citables', 'Rejouer le panel de mesure chaque mois', 'Lire un changement de modèle', 'Formation Qualiopi, finançable OPCO'].map(pt => (
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Consultant visibilité IA : les questions fréquentes</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
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
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Pour aller plus loin</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>La mission d'entrée, le service continu, les guides et la formation.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit GEO', href: '/audit-geo-ia', tag: "Point d'entrée", desc: "Taux de citation, part de voix, sources, accès des robots : l'état des lieux daté par lequel tout commence." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Service continu', desc: "Référencement augmenté par l'IA et visibilité dans les moteurs de réponse, tenus ensemble." },
              { label: 'Audit SEO IA', href: '/audit-seo-ia', tag: 'Les deux fronts', desc: "Google et les moteurs de réponse dans un même état des lieux." },
              { label: 'GEO : le guide', href: '/blog/geo-referencement-ia-generative-entreprise', tag: 'Guide', desc: "Se rendre visible dans ChatGPT, Perplexity et Gemini : la démarche expliquée." },
              { label: 'Référencement AIO : le guide', href: '/blog/referencement-aio-strategie-contenu-ia', tag: 'Guide', desc: "La stratégie de contenu pour les moteurs de réponse, page par page." },
              { label: 'Formation IA SEO', href: '/formation-ia-seo', tag: 'Formation', desc: "Rédiger et référencer à l'ère des moteurs de réponse, sur vos pages réelles." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "Contenu, campagnes, automatisation : la production qui alimente la visibilité." },
              { label: 'Consultant IA', href: '/consultant-ia', tag: 'Métier', desc: "Le métier de consultant en intelligence artificielle, au-delà de la visibilité." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>En savoir plus<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FounderNote />

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Consultant visibilité IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Sachons d'abord qui les IA citent sur votre marché</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous votre activité, vos concurrents et les questions que vos clients posent. Nous revenons vers vous sous 24 heures avec le panel proposé, les moteurs interrogés et le devis de l'audit GEO.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Cabinet spécialisé IA depuis 2022 · Lyon, France, Suisse, Belgique</p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>Un cabinet spécialisé IA, indépendant des éditeurs</h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              {ENTITY} n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs et des outils de mesure garantit une recommandation qui suit votre intérêt. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[['Depuis 2022', 'spécialisé uniquement IA'], ['+1 500', 'professionnels formés'], ['Indépendant', 'des éditeurs et des outils'], ['FR · CH · BE', 'sur site ou à distance']].map(([k, v]) => (
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
