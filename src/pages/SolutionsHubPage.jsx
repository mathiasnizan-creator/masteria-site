import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle,
  Plug, Cpu, KeyRound, Users, Wrench, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { SOLUTIONS } from '../data/solution-ia-data'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CadrageLink from '../components/CadrageLink'

/*
 * Hub « Solutions IA sur mesure » (slug /solutions-ia). Point d'entrée du cluster
 * bas de funnel : 7 pages par TYPE DE LIVRABLE. Intro citable + grille 7 cartes,
 * CTA vers /diagnostic-ia et /contact, liens /agence-developpement-ia et
 * /outils-ia-sur-mesure. JSON-LD ItemList + breadcrumbs.
 *
 * Design premium : hero sombre #0A0F1E, kickers #2563EB, icônes lucide
 * (zéro emoji), cartes radius 16, ancre sombre sur la matrice objectif→solution,
 * CTA final sombre #0A0F1E. Orienté CAPACITÉ, aucun cas client nommé. Code livré
 * au client. Pas d'OPCO sur le sur-mesure.
 *
 * Texte propre à la page (réécrit le 07/10/2026) : pas de bloc partagé (FounderNote,
 * CaseStudyCards, paragraphe commun « Qui intervient »). Les études de cas sont citées
 * en une ou deux phrases écrites pour ce hub, avec un lien vers leur ancre.
 */

const MODIFIED = '2026-10-07'

const c = '#2563EB'
const cLight = '#DBEAFE'
const SITE = 'https://www.master-ia.fr'

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }
const aStyle = { color: c, fontWeight: 600 }

const SLUG = 'solutions-ia'
const META_TITLE = 'Solutions IA sur mesure pour entreprises | Masteria'
const META_DESC =
  "Solutions IA sur mesure : copilote interne, assistant documentaire RAG, agent support, automatisation, chatbot, intégration LLM. Code livré au client."
const H1 = 'Solutions IA sur mesure pour entreprises'

const ICONS = {
  Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle, Plug,
}

const HERO_CHIPS = [
  { icon: Cpu, label: 'Claude, GPT ou Mistral selon la tâche' },
  { icon: Database, label: 'Recherche dans vos documents' },
  { icon: KeyRound, label: 'Code remis au client' },
  { icon: Users, label: 'Régie possible' },
]

/* Trois études de cas, citées en une ou deux phrases propres au hub (faits : src/data/etudes-de-cas.js). */
const CAS = [
  {
    id: 'distribution',
    secteur: 'Distribution IT B2B',
    titre: 'Onze compétences commerciales construites par les équipes',
    texte: "Chez un distributeur informatique B2B de 58 salariés, dix référents formés en deux jours, en juin 2026, ont conçu onze compétences Claude sur leurs propres tâches : cotation, relances, cahiers des charges, stocks. Leur diffusion aux autres collaborateurs est prévue d'octobre à décembre 2026.",
  },
  {
    id: 'photovoltaique',
    secteur: 'Distribution photovoltaïque',
    titre: "Trois assistants autour d'Odoo, choisis par un diagnostic de flux",
    texte: "Pour une équipe de trois personnes qui gère tout dans Odoo, le diagnostic a retenu trois assistants : la consultation des transporteurs, l'import des fichiers d'entrepôt, les lignes de devis tirées des demandes reçues. La formation sur site est prévue en octobre 2026.",
  },
  {
    id: 'conseil-financier',
    secteur: 'Conseil financier',
    titre: "Quatre assistants d'appels d'offres, un par famille de marchés",
    texte: "Un cabinet d'une vingtaine de consultants, à Paris et à Lyon, répond aux marchés publics avec quatre assistants nourris de ses meilleurs mémoires. Les consignes ont été écrites et testées avec les consultants en quatre ateliers de deux heures.",
  },
]

const HUB_FAQ = [
  {
    q: "Qu'appelle-t-on une solution IA sur mesure ?",
    a: "Une application d'IA développée pour un usage précis de votre entreprise, reliée à vos données et à vos logiciels, là où un produit du marché propose le même service à tous ses clients. Copilote interne, assistant documentaire, agent de support ou chatbot : chaque solution est conçue avec vos équipes, installée dans votre environnement, puis remise avec son code.",
  },
  {
    q: 'Quel budget prévoir pour une solution IA sur mesure ?',
    a: "Le développement se chiffre au forfait, une fois le cadrage fait. Un prototype ciblé ou un chatbot sur un contenu restreint démarre à quelques milliers d'euros ; une solution en production, reliée à vos données et à vos logiciels, se compte en dizaines de milliers d'euros ; un déploiement à grande échelle ou en régie dépasse 100 000 € et peut aller jusqu'à plusieurs centaines de milliers d'euros. Le devis suit un périmètre écrit, et les 30 premières minutes de cadrage sont offertes.",
  },
  {
    q: 'Qui détient le code des solutions développées ?',
    a: "Votre entreprise. Le code écrit pour votre projet vous revient, au même titre que vos données, avec sa documentation. Vos équipes peuvent le maintenir, le confier à un autre prestataire ou nous en laisser l'exploitation : aucun abonnement à une plateforme fermée ne vous lie.",
  },
  {
    q: 'Comment savoir quelle solution correspond à mon besoin ?',
    a: "En partant du résultat recherché. Retrouver une information dans des documents oriente vers l'assistant documentaire, alléger le service client vers l'agent de support, supprimer une ressaisie vers l'automatisation documentaire. Beaucoup de projets combinent deux ou trois briques ; le cadrage fixe l'ordre de construction avant tout chiffrage.",
  },
  {
    q: 'Solution sur mesure ou outil du marché : comment trancher ?',
    a: "Un outil du marché bien configuré suffit souvent pour rédiger, résumer ou chercher dans les fichiers bureautiques. Le sur-mesure se justifie quand l'outil doit lire un logiciel métier, appliquer des règles propres à l'entreprise ou tourner dans un environnement que vous choisissez. Nous le disons au cadrage, et Masteria ne revend aucune licence. Pour un outil pensé autour d'un poste de travail, voyez aussi nos outils IA par métier.",
  },
  {
    q: 'Combien de temps faut-il pour obtenir un premier prototype ?',
    a: "Quelques semaines le plus souvent. Le cadrage tient en une à deux semaines, puis la maquette tourne sur vos données. Le calendrier dépend surtout de l'accès aux données et de la disponibilité d'un référent métier ; le critère qui décidera de la suite est écrit avant de commencer.",
  },
  {
    q: 'Où vont nos données pendant et après le projet ?',
    a: "Elles restent sous votre contrôle. Les solutions s'appuient sur des offres professionnelles qui n'entraînent pas les modèles sur vos échanges, les accès se limitent aux documents utiles, et l'hébergement suit vos exigences, dans l'Union européenne si nécessaire. Ce cadre s'écrit au cadrage avec votre DSI ou votre délégué à la protection des données, et figure dans la documentation livrée.",
  },
  {
    q: 'Faut-il une équipe technique chez nous ?',
    a: "Non, mais il faut un responsable. Une PME sans informaticien confie souvent l'exploitation à Masteria ou à son prestataire habituel ; une entreprise dotée d'une DSI reprend le code et la documentation. Dans les deux cas, une personne du métier décide des évolutions et relit les réponses que les utilisateurs signalent.",
  },
  {
    q: "Le développement d'une solution peut-il être financé par l'OPCO ?",
    a: "Non : le conseil et le développement ne sont pas finançables par votre OPCO, qui ne prend en charge que des actions de formation. La formation des futurs utilisateurs peut l'être, puisque Masteria est certifié Qualiopi à ce titre, selon les règles et les fonds de votre branche.",
  },
  {
    q: 'Qui fait fonctionner la solution après sa mise en service ?',
    a: "Au choix : vos équipes, avec le code et la documentation remis, ou Masteria, dans un contrat d'exploitation dimensionné à l'usage (surveillance, corrections, évolutions). Dans les deux cas, un responsable est nommé chez vous dès le cadrage, car un outil sans propriétaire s'abandonne vite.",
  },
]

const PAGE_KEYWORDS = [
  'solutions IA sur mesure', 'solution IA entreprise', 'développement IA sur mesure',
  'copilote IA', 'assistant documentaire IA', 'RAG entreprise', 'agent IA support client',
  'agent IA commercial', 'chatbot IA sur mesure', 'intégration LLM', 'Masteria',
].join(', ')

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE}/${SLUG}#itemlist`,
  name: 'Solutions IA sur mesure · Masteria',
  description: META_DESC,
  numberOfItems: SOLUTIONS.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: SOLUTIONS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE}/${s.slug}`,
    item: {
      '@type': 'Service',
      name: s.name,
      description: s.cardSummary,
      url: `${SITE}/${s.slug}`,
      serviceType: s.name,
      provider: { '@id': `${SITE}/#organization` },
    },
  })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${SITE}/${SLUG}#article`,
  headline: H1,
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-06-13',
  dateModified: MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${SITE}/${SLUG}#webpage` },
  about: ['Solutions IA sur mesure', 'Développement IA en entreprise', 'RAG (retrieval-augmented generation)', 'Intégration de LLM'],
}

export default function SolutionsHubPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (grille 7 solutions + FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Solutions IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={PAGE_KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={HUB_FAQ}
        datePublished="2026-06-13"
        dateModified={MODIFIED}
        extraJsonLd={[itemListJsonLd, articleJsonLd]}
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#5B6679' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Solutions IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wrench size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Développement sur mesure
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Solutions IA sur mesure
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>pour entreprises</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · revu le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria développe sept familles de solutions IA pour les entreprises : copilote interne, assistant documentaire, agent de support client, automatisation documentaire, agent commercial, chatbot de site et intégration d'un modèle de langage dans vos applications. Chacune est reliée à vos données, installée dans vos outils et <strong style={{ color: '#fff', fontWeight: 700 }}>remise avec son code</strong>.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Chaque fiche décrit ce que fait le livrable, la façon dont nous le construisons, son coût et ses pièges. Masteria travaille sur l'IA depuis 2022, sans lien commercial avec les éditeurs, et vous remet tout ce qu'elle développe pour vous.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <a href="#solutions" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les sept livrables
            </a>
          </div>

          {/* tags de compétences — chips sombres */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE 7 SOLUTIONS (éditorial asymétrique) ── */}
      <section id="solutions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Sept livrables</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quelle solution IA correspond à votre besoin ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Sept familles couvrent l'essentiel des projets que nous menons : copilote interne, assistant documentaire, agent de support, automatisation documentaire, agent commercial, chatbot et intégration d'un modèle de langage. Un même besoin en associe souvent deux ou trois.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Chaque carte ouvre une fiche complète : usages, méthode, approche technique, budget, exemples par secteur. Un premier échange de 30 minutes, offert, sert à fixer le périmètre avant tout chiffrage.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
                {SOLUTIONS.map(s => {
                  const Icon = ICONS[s.icon] || Bot
                  return (
                    <Link key={s.slug} to={`/${s.slug}`} style={{ textDecoration: 'none' }}>
                      <div
                        style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                      >
                        <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 16 }}>
                          <Icon size={22} strokeWidth={2} style={{ color: c }} />
                        </div>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                          {s.name}
                        </h3>
                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 16px' }}>{s.cardSummary}</p>
                        <span style={{ marginTop: 'auto', fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          Lire la fiche du livrable
                          <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATRICE DE DÉCISION : OBJECTIF → SOLUTION (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Par objectif</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Partez du résultat que vous attendez
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>À chaque objectif courant correspond une famille de solution. Quand plusieurs objectifs se combinent, le cadrage décide par lequel commencer.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Matrice objectif métier vers la solution IA adaptée" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 460 }}>
              <caption style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                Objectif de l'entreprise et livrable correspondant, avec le lien vers sa fiche.
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', textTransform: 'uppercase', letterSpacing: '0.04em', width: '58%' }}>Votre objectif</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', textTransform: 'uppercase', letterSpacing: '0.04em', width: '42%' }}>La solution adaptée</th>
                </tr>
              </thead>
              <tbody>
                {SOLUTIONS.map((s, i) => (
                  <tr key={s.slug} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '16px 18px', fontSize: 14.5, color: '#F8FAFC', fontWeight: 600, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.55 }}>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <Target size={17} strokeWidth={2.2} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        <span>{s.goal}</span>
                      </span>
                    </th>
                    <td style={{ padding: '16px 18px', fontSize: 14, lineHeight: 1.5, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>
                      <Link to={`/${s.slug}`} style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>{s.name}</span>
                        <ArrowRight size={15} strokeWidth={2.4} style={{ flexShrink: 0, color: '#60A5FA' }} aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DÉVELOPPEURS EN RÉGIE (bandeau filet-latéral) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={kickerStyle}>Deux façons de travailler</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un forfait par projet, ou des développeurs détachés dans vos équipes
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La plupart de ces solutions se livrent au forfait, avec un périmètre et des livrables écrits. Quand le code doit rester dans votre périmètre, ou que vous devez accélérer sans recruter, nous détachons aussi un ou plusieurs développeurs IA dans vos équipes, chez vous ou à distance, en régie ou en équipe dédiée. Ils documentent au fil de l'eau, et vos équipes reprennent la main à la fin.
              </p>
              <Link to="/methode-projet-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Lire la méthode de projet
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE / RESSOURCES (cartes filet-supérieur) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Pages liées</div>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Le développement sur mesure vu sous d'autres angles
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Les sept fiches décrivent des livrables. Ces pages présentent notre équipe de développement, nos automatisations et les budgets constatés sur le marché.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Build', desc: "Notre équipe de développement : agents, automatisations, applications et intégrations, remis avec leur code." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Des outils construits autour d'un poste de travail, pour un métier et ses données." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Repérer, prototyper puis déployer les automatisations d'un service, avec ceux qui y travaillent." },
              { label: "Cas d'usage de l'IA en entreprise", href: '/cas-usage-ia-entreprise', tag: 'Exemples', desc: "Des exemples classés par fonction, pour rattacher chaque livrable à une tâche précise." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'GenAI', desc: "Les modèles de langage en entreprise, du premier usage au déploiement encadré." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les fourchettes par type de projet et les modes de facturation, expliqués." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Ouvrir la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (trois missions citées en quelques phrases, lien vers l'ancre) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Missions récentes</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois solutions construites avec les équipes qui s'en servent
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Ces missions sont anonymisées à la demande des clients. Chacune montre un livrable de cette page à l'œuvre : des compétences pour une équipe commerciale, des assistants autour d'un ERP, des assistants d'appels d'offres.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {CAS.map(k => (
              <article key={k.id} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.secteur}</span>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{k.titre}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{k.texte}</p>
                <Link to={`/etudes-de-cas-ia#${k.id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Le détail de la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Les questions que l'on nous pose avant un projet
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre situation sort de ces cas ?
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrivez-la-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {HUB_FAQ.map((item, i) => (
                <div key={i} style={{ borderTop: i === 0 ? '1px solid #E5E7EB' : 'none', borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: '0 0 10px' }}>{item.q}</h3>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Vous hésitez entre plusieurs livrables ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Réservez 30 minutes de cadrage, offertes, ou décrivez votre situation par écrit. Vous recevez sous 24 heures une première lecture du périmètre et la liste des points à vérifier ; le code de ce que nous construirons ensuite vous appartiendra.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </CadrageLink>
              <Link to="/contact?type=projet" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #2A3650' }}>
                Contacter notre équipe
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Forfait ou régie · Code remis au client · Modèles choisis tâche par tâche
            </p>
          </div>
        </div>
      </section>

      {/* ── LE DÉROULÉ (hub, condensé) ── */}
      <section style={{ padding: 'clamp(56px, 8vw, 88px) 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 14 }}>Notre méthode</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, color: '#0A0A0A', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2, maxWidth: 880 }}>
            Les cinq étapes d'un projet de solution IA, du cadrage à l'exploitation
          </h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: '3px solid #2563EB', borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }}>
            <strong>Chaque projet passe par cinq étapes : un cadrage qui choisit le cas d'usage, une maquette ou un POC (une preuve de concept) sur vos données, une décision prise sur un critère écrit à l'avance, la construction et l'intégration, puis l'exploitation avec un responsable nommé. Un POC qui manque son critère s'arrête là, et cet arrêt vous coûte quelques milliers d'euros au lieu d'un déploiement manqué.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 210px), 1fr))', gap: 16 }}>
            {[
              ['01 · Cadrage', "Le cas d'usage retenu pour sa valeur et son effort, les données et les licences disponibles, le critère de réussite écrit."],
              ['02 · POC', "Une maquette sur vos données, utilisée par de futurs utilisateurs : leurs retours décident de la suite."],
              ['03 · Décision', "Industrialiser, ajuster ou arrêter, au vu du critère mesuré pendant le POC."],
              ['04 · Construction', "Développement, raccordement au SI en lecture d'abord, droits d'accès, recette avec vos équipes."],
              ['05 · Exploitation', "Surveillance, corrections, évolutions, un responsable désigné chez vous ; le code et la documentation vous appartiennent."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 14, padding: 20 }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.7, margin: '24px 0 0', maxWidth: 860 }}>
            Chaque étape est détaillée sur la page <Link to="/methode-projet-ia" style={{ color: '#2563EB', fontWeight: 600 }}>méthode de projet IA</Link>, et les budgets observés sur la page <Link to="/prix-projet-ia" style={{ color: '#2563EB', fontWeight: 600 }}>combien coûte un projet IA</Link>. Le devis vient après le cadrage.
          </p>
        </div>
      </section>

      {/* ── LES ERREURS ── */}
      <section style={{ padding: 'clamp(56px, 8vw, 88px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 14 }}>Les pièges</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, color: '#0A0A0A', margin: '0 0 24px', letterSpacing: '-0.02em', lineHeight: 1.2, maxWidth: 880 }}>
            Quatre erreurs qui font échouer un projet de solution IA
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: 18 }}>
            {[
              ["Choisir l'outil avant l'usage", "Une plateforme achetée avant d'avoir choisi le cas produit une démonstration que personne n'utilise. Nous partons du travail d'une équipe, et l'outil se choisit ensuite."],
              ['Découvrir les données trop tard', "Documents dispersés, versions contradictoires, droits flous : ces problèmes retardent la plupart des projets. Nous les examinons au cadrage, avant d'écrire du code."],
              ['Industrialiser sur une impression', "Sans critère mesuré pendant le POC, l'enthousiasme d'une démonstration décide à la place des chiffres, et le déploiement s'arrête quelques mois plus tard."],
              ["Oublier l'exploitation", "Un outil sans responsable, sans surveillance et sans budget d'évolution se dégrade vite. L'exploitation se prépare dès le cadrage."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#fff', border: '1px solid #E5E7EB', borderTop: '3px solid #2563EB', borderRadius: 14, padding: 22 }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un fondateur, des développeurs et des consultants indépendants
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan a fondé Masteria à Lyon en 2022 et suit chaque projet de solution. Il compose l'équipe de chacun parmi un réseau d'indépendants, dont une dizaine de consultants et cinq développeurs IA environ. Aucune licence à revendre : le choix du modèle et de l'hébergement suit vos contraintes. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['2022', 'création de Masteria à Lyon'],
              ['≈ 5', 'développeurs IA mobilisables'],
              ['Aucune', 'licence revendue'],
              ['Code remis', 'propriété du client'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources lean />
    </>
  )
}
