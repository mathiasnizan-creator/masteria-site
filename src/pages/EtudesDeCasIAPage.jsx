import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Bot, Factory, Landmark, ShieldCheck, Lock, Quote } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Études de cas IA » — la PREUVE (E-E-A-T + conversion).
 * Trois déploiements RÉELS, anonymisés à la demande des clients (secteur + taille,
 * jamais de nom). INTÉGRITÉ ABSOLUE : chaque chiffre vient des dossiers réels
 * (fiches de satisfaction, comptes rendus, dispositifs livrés). Aucun chiffre
 * inventé, aucun verbatim fabriqué. Les clients peuvent être mis en relation en
 * privé, sous NDA. Accent bleu #2563EB, gabarit money pages.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'etudes-de-cas-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Études de cas IA : 3 déploiements réels | Masteria'
const META_DESC = "Études de cas IA anonymisées : assistants Claude en production, équipes formées, résultats mesurés. Distribution B2B, industrie, conseil financier."
const KEYWORDS = 'étude de cas ia, études de cas ia entreprise, cas client ia, exemple déploiement ia entreprise, assistants ia entreprise, retour d\'expérience ia, projet ia entreprise exemple, adoption ia entreprise'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }

/* ── Les trois cas (faits réels, anonymisés) ── */
const CASES = [
  {
    id: 'distribution',
    icon: Bot,
    kicker: 'Cas 01 · Distribution B2B',
    who: 'Distributeur IT B2B, filiale française d\'un groupe européen · force commerciale de 58 personnes',
    title: 'Des assistants Claude au service des équipes commerciales',
    stats: [
      ['58', 'commerciaux formés : toute la force de vente'],
      ['10', 'référents « équipe élite »'],
      ['11', 'assistants Claude métier'],
      ['6', 'sessions de 2 jours'],
    ],
    defi: "Gagner en force de frappe sans grossir les effectifs. Le temps commercial utile est absorbé par des tâches répétitives : cotations, relances, réponses aux cahiers des charges, prospection, analyse de stock. L'objectif : donner aux 58 commerciaux la productivité d'une équipe bien plus large, sur les outils existants (ERP, base articles, CRM).",
    reponse: "Cadrage des cas d'usage avec la direction. Une session de deux jours pour former les 10 référents de l'équipe élite, puis cinq sessions de deux jours pour le reste des équipes. Chaque référent conçoit une compétence Claude branchée sur ses données ; la direction valide, l'organisation déploie.",
    livrables: ['Cotation à partir d\'un mail client', 'Relances de devis (en production)', 'Substitution vers les marques propres', 'Réponses aux cahiers des charges depuis l\'ERP', 'Prospection et réactivation clients', 'Pilotage stocks, livraisons et marge'],
    resultat: "Les 58 commerciaux sont formés, en six sessions de deux jours : les 10 référents de l'équipe élite d'abord, puis toutes les équipes de vente. Les premiers assistants sont en production, et 58 personnes assistées par Claude visent la force de frappe d'une équipe de 70, sans recrutement.",
  },
  {
    id: 'industrie',
    icon: Factory,
    kicker: 'Cas 02 · Industrie · Déploiement international',
    who: 'Groupe industriel international du packaging, plusieurs milliers de salariés dans le monde',
    title: "Un parcours Copilot pour les managers, premier palier d'un déploiement international",
    stats: [
      ['89,8 %', 'de satisfaction (session pilote)'],
      ['11 / 11', 'recommandent la formation'],
      ['~30', 'formés au premier palier : comité de direction + managers pilotes'],
      ['5', 'fonctions couvertes : direction, finance, commerce, opérations, RH'],
    ],
    defi: "Les équipes IT du groupe ont retenu Microsoft 365 Copilot, avec un déploiement prévu à l'échelle du groupe, à l'international. L'enjeu : réussir le premier palier français avant cette généralisation, sur deux niveaux : décider et cadrer côté comité de direction, mettre en pratique côté managers pilotes, avec un critère strict pour ces derniers : repartir avec des usages applicables à leur poste dès le retour au bureau, pas une démonstration de fonctionnalités.",
    reponse: "Une journée de sensibilisation stratégique pour le comité de direction (directeurs fonctionnels), puis un parcours de deux jours par groupe de managers pilotes, en ateliers pratiques (Excel, Outlook, PowerPoint, Word, création d'assistants). Chaque atelier est construit sur des jeux de données et des fichiers réels du groupe, dans son environnement Microsoft 365. Session pilote mesurée, puis vagues suivantes.",
    livrables: ['Ateliers Excel sur données réelles', 'Traitement du flux Outlook', 'Production PowerPoint et Word assistée', 'Création d\'assistants personnalisés', 'Veille concurrentielle outillée', 'Vision stratégique posée au comité de direction'],
    resultat: "Session pilote mesurée à chaud : 89,8 % de satisfaction moyenne, 11 participants sur 11 qui recommandent la formation, et 4,9/5 sur l'utilité concrète au poste. Les ateliers sur fichiers réels sont reconduits pour les vagues suivantes : le dispositif validé en France sert de socle au déploiement international du groupe.",
    verbatim: { text: "Beaucoup de nouvelles choses à mettre en pratique pour analyser des fichiers ou mettre en place un assistant basé sur les best practices existantes.", role: 'Une manager, fiche de satisfaction de la session pilote' },
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    kicker: 'Cas 03 · Conseil financier',
    who: 'Cabinet indépendant de conseil financier auprès du secteur public, deux implantations en France',
    title: 'Un assistant Claude par équipe, du consultant à la comptabilité',
    stats: [
      ['4', 'équipes outillées : consultants, administration, marketing, comptabilité'],
      ['6', 'assistants Claude déployés'],
      ['100 %', 'des fonctions du cabinet couvertes'],
      ['1er', "cas d'usage : les appels d'offres"],
    ],
    defi: "Le cabinet conseille le secteur public sur des sujets exigeants : ingénierie financière, dette, contrats publics. Le temps des consultants part en grande partie dans les appels d'offres et la production de notes. Autour d'eux, l'administration, le marketing et la comptabilité font tourner le cabinet. L'enjeu : faire gagner du temps à chaque équipe sans rien céder sur la rigueur ni la confidentialité.",
    reponse: "Un assistant Claude par équipe, nourri des documents réels du cabinet : trames et mémoires d'appels d'offres pour les consultants, dossiers et marchés pour l'administration, références pour le marketing, facturation pour la comptabilité. Les équipes sont formées dans un cadre strict : confidentialité des données, sources citées, validation humaine systématique.",
    livrables: ['Consultants : réponse aux appels d\'offres', 'Consultants : analyse financière', 'Administration : dossiers et marchés', 'Marketing : références et offres', 'Comptabilité : facturation et suivi', 'Base documentaire métier partagée'],
    resultat: "Les consultants concentrent leur temps sur l'analyse plutôt que sur la mise en forme des réponses. Chaque fonction du cabinet dispose de son assistant Claude sur ses propres documents, la rigueur et l'indépendance du cabinet restant au cœur du dispositif.",
  },
]

const FAQ = [
  {
    q: 'Pourquoi vos études de cas IA sont-elles anonymisées ?',
    a: "Parce que nos clients considèrent leur avance sur l'IA comme un avantage concurrentiel et préfèrent ne pas communiquer publiquement dessus. Nous respectons ce choix : chaque cas est décrit par son secteur, sa taille et ses résultats réels, sans nommer l'entreprise. Tous les chiffres publiés viennent des dossiers de mission : fiches de satisfaction, comptes rendus, dispositifs livrés.",
  },
  {
    q: 'Peut-on vérifier ces références ou parler à vos clients ?',
    a: "Oui. Sur demande, dans le cadre d'une discussion commerciale avancée, nous organisons une mise en relation avec un client comparable à votre situation, sous accord de confidentialité. C'est la contrepartie de l'anonymat public : la vérification se fait en privé.",
  },
  {
    q: "Quels types d'entreprises accompagnez-vous ?",
    a: "Des PME de quelques dizaines de collaborateurs, des ETI et des groupes internationaux. Les trois cas présentés couvrent la distribution IT B2B (force commerciale de 58 personnes), l'industrie (groupe international) et le conseil (cabinet indépendant multi-équipes). Le dispositif s'adapte à la taille : équipe de référents internes chez le distributeur, déploiement par vagues chez l'industriel, un assistant par fonction au cabinet.",
  },
  {
    q: "Combien de temps faut-il pour déployer des assistants IA en entreprise ?",
    a: "Sur les cas présentés, le rythme type est : un cadrage des cas d'usage avec la direction, une première session de formation de deux jours, puis des assistants qui entrent en production au fil des semaines suivantes. Chez le distributeur, la couverture des 58 commerciaux a demandé six sessions de deux jours. Le calendrier exact dépend du nombre d'équipes et de la profondeur d'intégration aux outils existants.",
  },
  {
    q: 'Quels outils utilisez-vous : Claude, Copilot, ChatGPT ?',
    a: "Le choix découle du contexte, jamais l'inverse. Les assistants métier sur documents et données de l'entreprise s'appuient souvent sur Claude (Projects, compétences personnalisées). Quand les équipes vivent dans Microsoft 365, Copilot s'impose par son intégration native, comme pour le parcours managers du groupe industriel. Nous restons indépendants des éditeurs et formons aussi sur ChatGPT, Gemini et Mistral.",
  },
  {
    q: 'Ces dispositifs sont-ils finançables par un OPCO ?',
    a: "Le volet formation, oui : Masteria est certifié Qualiopi, les sessions sont finançables par votre OPCO ou votre plan de développement des compétences, à 1 980 € HT par jour en intra. La conception et le déploiement des assistants relèvent du conseil et du développement, qui ne sont pas éligibles OPCO. Nous ne promettons jamais l'inverse.",
  },
  {
    q: 'Comment garantissez-vous la confidentialité des données pendant ces missions ?',
    a: "Chaque mission démarre par un cadre d'usage écrit : offres entreprise dont les données ne servent pas à entraîner les modèles, règles sur les données sensibles, sources citées et validation humaine sur les livrables. C'est ce cadre qui a permis à un cabinet travaillant sur des contrats publics ou à un groupe industriel de déployer l'IA sans exposer leurs informations.",
  },
]

/* ───────── JSON-LD ───────── */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Études de cas IA en entreprise : trois déploiements réels',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ["Étude de cas IA", "Déploiement d'assistants IA en entreprise", "Formation IA en entreprise"],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}

const casesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Études de cas IA Masteria : trois déploiements en entreprise",
  numberOfItems: CASES.length,
  itemListElement: CASES.map((k, i) => ({ '@type': 'ListItem', position: i + 1, name: k.title, description: k.who })),
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color: c, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function CaseSection({ k, index, isDesktop }) {
  const Icon = k.icon
  const dark = index % 2 === 1
  const bg = dark ? '#0A0F1E' : (index % 2 === 0 && index > 0 ? '#F9FAFB' : '#fff')
  const ink = dark ? '#F8FAFC' : '#0A0A0A'
  const body = dark ? '#B4C0D3' : '#374151'
  const cardBg = dark ? 'rgba(255,255,255,0.03)' : '#fff'
  const cardBorder = dark ? '1px solid #1E293B' : '1px solid #E5E7EB'
  return (
    <section id={k.id} style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: bg, overflow: 'hidden' }}>
      {dark && <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />}
      {dark && <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />}
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
          <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: dark ? 'rgba(37,99,235,0.16)' : cLight, border: dark ? '1px solid rgba(37,99,235,0.35)' : 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={18} strokeWidth={2.2} style={{ color: dark ? '#60A5FA' : c }} />
          </span>
          <span style={{ ...kickerStyle, marginBottom: 0, color: dark ? '#60A5FA' : c }}>{k.kicker}</span>
        </div>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: dark ? '#94A3B8' : '#6B7280', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k.who}</p>
        <h2 style={{ ...h2Style, color: ink }}>{k.title}</h2>

        {/* chiffres réels */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 14, margin: '28px 0 36px' }}>
          {k.stats.map(([v, l]) => (
            <div key={l} style={{ background: cardBg, border: cardBorder, borderRadius: 14, padding: '18px 20px' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: dark ? '#60A5FA' : c, letterSpacing: '-0.02em' }}>{v}</div>
              <div style={{ fontSize: 13.5, color: body, lineHeight: 1.5, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={isDesktop ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' } : {}}>
          <div>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: ink, margin: '0 0 10px' }}>Le défi</h3>
            <p style={{ fontSize: 15, color: body, lineHeight: 1.75, margin: '0 0 22px' }}>{k.defi}</p>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: ink, margin: '0 0 10px' }}>La réponse Masteria</h3>
            <p style={{ fontSize: 15, color: body, lineHeight: 1.75, margin: 0 }}>{k.reponse}</p>
          </div>
          <div style={!isDesktop ? { marginTop: 26 } : {}}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: ink, margin: '0 0 12px' }}>Ce qui a été déployé</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gap: 9 }}>
              {k.livrables.map(l => (
                <li key={l} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: body, lineHeight: 1.6 }}>
                  <BadgeCheck size={16} strokeWidth={2.4} style={{ color: dark ? '#60A5FA' : c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
            <div style={{ background: dark ? 'rgba(37,99,235,0.12)' : '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: dark ? '#93C5FD' : c, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Résultat</div>
              <p style={{ fontSize: 14.5, color: dark ? '#E2E8F0' : '#0A0A0A', lineHeight: 1.7, margin: 0 }}>{k.resultat}</p>
            </div>
            {k.verbatim && (
              <blockquote style={{ margin: '20px 0 0', padding: '16px 20px', background: cardBg, border: cardBorder, borderRadius: 14 }}>
                <Quote size={16} style={{ color: dark ? '#60A5FA' : c, marginBottom: 6 }} aria-hidden="true" />
                <p style={{ fontSize: 14.5, color: ink, fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 8px' }}>« {k.verbatim.text} »</p>
                <footer style={{ fontSize: 13, color: body }}>{k.verbatim.role}</footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function EtudesDeCasIAPage() {
  const isDesktop = useIsDesktop()
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Études de cas IA', slug: SLUG },
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
        datePublished="2026-07-30"
        dateModified="2026-07-30"
        extraJsonLd={[articleJsonLd, casesJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Études de cas IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Références · Déploiements réels
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Études de cas IA en entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>trois déploiements réels, résultats mesurés</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en juillet 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La force commerciale d'un distributeur IT B2B (58 commerciaux), un groupe industriel international et un cabinet de conseil financier : <strong style={{ color: '#fff', fontWeight: 700 }}>trois organisations qui ont mis l'IA en production avec Masteria</strong>, des assistants Claude aux parcours Copilot, avec des équipes formées et des résultats mesurés à chaud.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 700 }}>
            Nos clients considèrent leur avance sur l'IA comme un avantage concurrentiel et ne communiquent pas publiquement dessus. Ces études de cas sont donc anonymisées : secteur, taille et chiffres réels, sans les noms. La mise en relation avec un client reste possible en privé, sous accord de confidentialité.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#distribution" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lire les 3 études de cas
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parler de votre projet
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Distribution IT B2B', "58 commerciaux formés (toute la force de vente), 10 référents « équipe élite », 11 assistants Claude métier, les premiers déjà en production."],
                ['Industrie (groupe international)', "Parcours managers Copilot sur fichiers réels, premier palier d'un déploiement international : 89,8 % de satisfaction en session pilote, 11 sur 11 recommandent."],
                ['Conseil financier (secteur public)', "6 assistants Claude couvrant les 4 équipes du cabinet, à commencer par la réponse aux appels d'offres."],
                ['Pourquoi anonymisées ?', "À la demande des clients, qui ne communiquent pas sur leur avance IA. Références vérifiables en privé, sous NDA."],
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

      {/* ── SOMMAIRE ancré ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#distribution', 'Cas 01 · Distribution'],
            ['#industrie', 'Cas 02 · Industrie'],
            ['#conseil-financier', 'Cas 03 · Conseil financier'],
            ['#cadre', 'Notre cadre'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LES 3 CAS ── */}
      {CASES.map((k, i) => <CaseSection key={k.id} k={k} index={i} isDesktop={isDesktop} />)}

      {/* ── NOTRE CADRE (discrétion + méthode commune) ── */}
      <section id="cadre" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Notre cadre</div>
          <h2 style={h2Style}>Ce que ces trois missions ont en commun</h2>
          <p style={leadStyle}>
            Trois secteurs, trois tailles d'organisation, un même fil conducteur : partir des documents et des tâches réels des équipes, former les personnes qui feront vivre le dispositif, et mesurer le résultat.
          </p>
          <p style={mutedStyle}>
            Et une règle que nous assumons : la discrétion. Nos clients gardent leur avance pour eux, nous gardons leurs noms pour nous.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {[
              { icon: BadgeCheck, t: 'Sur les vrais dossiers', d: "Chaque atelier et chaque assistant est construit sur les fichiers, données et documents réels de l'entreprise, jamais sur des exemples génériques." },
              { icon: ShieldCheck, t: 'Un cadre de confidentialité écrit', d: "Offres entreprise sans entraînement sur vos données, règles d'usage, sources citées, validation humaine : le cadre est posé avant le premier prompt." },
              { icon: Lock, t: 'Anonymat public, vérification privée', d: "Les cas sont anonymisés à la demande des clients. En discussion avancée, nous organisons une mise en relation sous accord de confidentialité." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                <div style={{ width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '30px 0 0', maxWidth: 860 }}>
            Envie du même type de dispositif ? Voyez comment nous déployons des <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>, nos <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>solutions IA sur mesure</Link>, ou commencez par un <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>. Pour la montée en compétence des équipes, le <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue de formations IA</Link> couvre tous les outils.
          </p>
        </div>
      </section>

      {/* ── FONDATEUR (E-E-A-T) ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>Questions fréquentes sur nos études de cas IA</h2>
          {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre cas, maintenant</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Et si la prochaine étude de cas, c'était vous ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre contexte en quelques lignes. Lors d'un échange de cadrage gratuit, nous vous disons quel dispositif correspond à votre situation, avec la même discrétion que pour nos clients actuels.
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
