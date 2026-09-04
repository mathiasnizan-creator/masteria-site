import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Workflow, Users, MapPin, Check, Target, ClipboardCheck,
  Gauge, GraduationCap, ShieldCheck, Cpu, FileText, CalendarDays, AlertTriangle, MessagesSquare, Bot,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page hub « IA en gestion de projet » (slug /ia-gestion-de-projet), cluster
 * CONSEIL + SOLUTIONS. Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 :
 * grappe « cabinet de conseil en gestion de projet » (210, KD 6, commercial),
 * « consulting gestion de projet » (170, KD 14), « conseil en management de projet »
 * (90), « cabinet conseil management projet » (90), « conseil gestion de projet »
 * (90), « gestion de projet consultant » (90), « consultant management de projet »
 * (70), et les variantes IA : « gestion automatisée de projets » (90, KD 11),
 * « prompt ia gestion de projet » (70, KD 10), « reporting projet ia » (70, KD 13).
 *
 * POSITIONNEMENT HONNÊTE : Masteria n'est pas un cabinet de conseil en gestion de
 * projet (PMO, méthode, organisation) ; elle OUTILLE la fonction projet avec l'IA :
 * assistants, automatisations, agents, bibliothèque de prompts, formation. La page
 * le dit dès le hero et en FAQ, et capte la grappe par la comparaison.
 *
 * RÉPARTITION : /formation-ia-gestion-de-projet = la formation métier (2 j) ;
 * /methode-projet-ia = COMMENT MASTERIA conduit ses propres projets IA (autre sujet) ;
 * CETTE page = l'IA au service de VOS projets et de votre PMO.
 * INTÉGRITÉ : aucun gain chiffré, aucun client nommé, prix au forfait, formation
 * OPCO. Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'ia-gestion-de-projet'
const ENTITY = "Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "IA en gestion de projet : PMO augmenté, reporting automatisé, prompts | Masteria"
const META_DESC = "IA en gestion de projet : ce qu'un cabinet IA change pour vos chefs de projet et votre PMO : assistants sur vos gabarits, reporting automatisé depuis vos outils, agents de compte rendu, bibliothèque de prompts, formation. Cadrage gratuit."
const KEYWORDS = "ia gestion de projet, gestion automatisée de projets, reporting projet ia, prompt ia gestion de projet, pmo augmenté ia, cabinet de conseil en gestion de projet ia, consulting gestion de projet ia, conseil en management de projet ia, automatisation gestion de projet, agent ia chef de projet"

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
  { icon: Workflow, label: 'Sur vos outils : Jira, Planner, Monday, Notion, Teams' },
  { icon: Users, label: 'Chefs de projet, PMO, directions de programme' },
  { icon: Compass, label: 'Cabinet spécialisé IA depuis 2022' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

const EN_BREF = [
  { label: 'Ce que nous faisons', value: "Outiller la fonction projet avec l'IA : assistants sur vos gabarits, reporting automatisé depuis vos outils, agents de compte rendu, bibliothèque de prompts, formation des chefs de projet" },
  { label: 'Ce que nous ne faisons pas', value: "Le conseil en gestion de projet classique : méthode, organisation du PMO, pilotage de vos projets à votre place. Nous travaillons avec le cabinet qui le fait, ou avec votre PMO" },
  { label: 'Trois niveaux', value: "Assistants configurés, automatisations branchées sur vos outils, agents ; toujours avec un chef de projet qui relit et arbitre" },
  { label: 'Livrables', value: "Des outils qui tournent sur un projet pilote, une bibliothèque de prompts d'équipe, un cadre de confidentialité, des chefs de projet formés" },
  { label: 'Prix', value: "Forfait par étape après un cadrage gratuit ; le conseil et la construction ne sont pas finançables par l'OPCO, la formation l'est" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Ce que l'IA change ───────── */

const USAGES = [
  { icon: FileText, title: 'Le cadrage, écrit et challengé plus vite', desc: "Une note de cadrage produite depuis les échanges de lancement et votre gabarit, avec les trous transformés en questions au sponsor plutôt qu'en hypothèses inventées. Le chef de projet valide ; il ne part plus d'une page blanche." },
  { icon: CalendarDays, title: 'Le découpage avant la planification', desc: "Lots, tâches, dépendances, chemin critique proposés depuis le périmètre, sans dates ni charges chiffrées : la structure vient de l'IA, l'estimation reste à l'équipe qui engage sa parole." },
  { icon: MessagesSquare, title: 'Les comptes rendus et le COPIL dans l\'heure', desc: "Notes brutes ou transcription transformées en décisions, actions avec responsable et échéance, points ouverts, puis en support de comité. Sans reformulation des débats, sans décision ajoutée." },
  { icon: Gauge, title: 'Le reporting projet automatisé', desc: "Le flash hebdomadaire produit depuis l'export de votre outil de suivi, comparé à la semaine précédente, chaque affirmation rattachée à une donnée. Le chef de projet relit et corrige ce que l'outil ne peut pas savoir." },
  { icon: AlertTriangle, title: 'Les risques et les arbitrages préparés', desc: "Risques par analogie avec des projets comparables, plans de mitigation, notes d'arbitrage en trois options avec impacts pour le comité. Le chef de projet distingue ce qui vient de sa note de ce qui vient de l'expérience générale du modèle." },
  { icon: Bot, title: 'Les relances et la communication sans ressaisie', desc: "Un agent qui relance les actions en retard, prépare les messages aux parties prenantes selon l'audience et consolide les points d'avancement de plusieurs lots. Il propose, le chef de projet envoie." },
]

/* ───────── Cabinet classique vs PMO augmenté (tableau sombre) ───────── */

const TABLE = [
  { critere: 'Objet', sans: 'La méthode, l\'organisation du PMO, le pilotage de vos projets', avec: "L'outillage de la fonction projet : ce que l'IA prend, ce que l'humain garde" },
  { critere: 'Qui fait le travail', sans: 'Des consultants dans vos équipes, souvent longtemps', avec: 'Vos chefs de projet, outillés et formés ; nous construisons et transmettons' },
  { critere: 'Livrables', sans: 'Gouvernance, processus, tableaux de bord, PMO installé', avec: 'Assistants sur vos gabarits, automatisations sur vos outils, agents, bibliothèque, chefs de projet formés' },
  { critere: 'Horizon', sans: 'Plusieurs mois de mission', avec: 'Un projet pilote outillé en quelques semaines, puis extension au PMO' },
  { critere: 'Ce qui ne change pas', sans: 'Les estimations et les arbitrages restent aux personnes', avec: 'Les estimations et les arbitrages restent aux personnes' },
]

/* ───────── Trois niveaux d'outillage ───────── */

const NIVEAUX = [
  { icon: Cpu, title: '1. Les assistants configurés', desc: "Un assistant par usage, dans votre outil d'IA d'entreprise, encodé avec vos gabarits, votre vocabulaire projet et vos règles : cadrage, compte rendu, flash, arbitrage. Le premier niveau, en place en quelques jours, et la bibliothèque de prompts qui va avec.", href: '/bibliotheque-de-prompts', cta: 'Voir la bibliothèque de prompts' },
  { icon: Workflow, title: '2. Les automatisations branchées sur vos outils', desc: "Le reporting généré chaque vendredi depuis Jira, Planner, Monday ou Notion ; les comptes rendus produits depuis les réunions enregistrées ; les relances des actions en retard. Des scénarios sur vos outils, avec une validation humaine avant tout envoi.", href: '/automatisation-ia', cta: "Voir l'automatisation IA" },
  { icon: Bot, title: '3. Les agents du PMO', desc: "Un agent de reporting qui consolide plusieurs projets, un agent de compte rendu branché sur la messagerie et l'outil de suivi, un agent de veille sur les jalons. Réservé aux PMO qui pilotent un portefeuille, quand les deux premiers niveaux tiennent.", href: '/agents-ia-entreprise', cta: 'Voir les agents IA' },
]

/* ───────── Méthode ───────── */

const METHODE = [
  { periode: 'Semaine 1', title: 'Cadrage sur un projet pilote', desc: "Un projet en cours, ses gabarits, ses outils, ses rituels. Où le temps se perd : cadrage, comptes rendus, reporting, relances. Le cadre de confidentialité (projets clients, données personnelles, version entreprise de l'outil) est posé le premier jour." },
  { periode: 'Semaines 2-4', title: 'Assistants et bibliothèque', desc: "Les assistants configurés sur vos gabarits, testés par les chefs de projet du pilote, corrigés, puis déposés dans une bibliothèque d'équipe. La formation des chefs de projet se fait sur ces assistants, sur leurs livrables réels." },
  { periode: 'Mois 2', title: 'Automatisations du reporting et des comptes rendus', desc: "Le flash automatisé depuis l'outil de suivi, les comptes rendus depuis les réunions, les relances. Chaque scénario s'arrête sur une validation humaine avant ce qui engage. Mesure : temps rendu par chef de projet, délais de production du reporting." },
  { periode: 'Mois 3', title: 'Extension au PMO et transmission', desc: "Les autres projets adoptent les outils du pilote ; le PMO reçoit les agents de consolidation quand ils se justifient ; un référent interne tient la bibliothèque et les scénarios. Nous transmettons, et nous restons disponibles." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: "Laisser l'IA estimer", desc: "Une charge ou une date proposée par un modèle est plausible et fausse avec la même assurance. L'IA structure, découpe, compare ; l'estimation et l'engagement restent aux personnes qui connaissent l'équipe." },
  { title: 'Automatiser un reporting sur des données de suivi fausses', desc: "Un flash automatisé depuis un outil que personne ne met à jour produit un rapport faux chaque vendredi, plus vite. Le premier chantier est souvent la discipline de saisie, pas l'automatisation." },
  { title: 'Ajouter un outil au lieu de brancher les vôtres', desc: "Une plateforme de gestion de projet « avec IA » de plus, que les équipes n'ouvrent pas. L'IA se branche sur Jira, Planner, Monday, Notion ou Teams, là où les chefs de projet sont déjà." },
  { title: 'Oublier la confidentialité des projets', desc: "Un cahier des charges client collé dans un outil grand public, une transcription de COPIL envoyée à un service gratuit : le premier accident arrive avant la première réussite. Le cadre se pose le premier jour, avec la version entreprise de l'outil." },
  { title: 'Former sans gabarits', desc: "Une formation à l'IA générique pour les chefs de projet produit des enthousiastes sans méthode. La formation se fait sur les assistants configurés, les gabarits et les livrables réels de l'équipe." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Êtes-vous un cabinet de conseil en gestion de projet ?", a: "Non. Un cabinet de conseil en gestion de projet ou en management de projet travaille sur la méthode, l'organisation du PMO, la gouvernance et le pilotage de vos projets, parfois à votre place. Nous ne faisons pas ce métier. Nous outillons la fonction projet avec l'IA : assistants configurés sur vos gabarits, reporting automatisé depuis vos outils, agents de compte rendu, bibliothèque de prompts, formation des chefs de projet. Quand un cabinet PMO est déjà en mission chez vous, nous travaillons à partir de ses processus ; nous ne les redessinons pas." },
  { q: "Qu'est-ce qu'un PMO augmenté par l'IA ?", a: "Un bureau des projets dont les tâches répétitives et documentaires sont prises par des assistants, des automatisations et des agents : le reporting consolidé produit depuis les outils de suivi, les comptes rendus générés depuis les réunions, les relances des actions en retard, la préparation des arbitrages en trois options. Le PMO garde ce qui compte : les estimations, les arbitrages, la relation avec les parties prenantes, et la vérification de ce que l'IA a produit. L'augmentation se mesure sur le temps rendu et sur le délai de production du reporting." },
  { q: "Peut-on automatiser la gestion de projet ?", a: "Une partie, celle qui est répétitive et documentaire ; pas le pilotage. La gestion automatisée de projets telle qu'elle est réaliste aujourd'hui couvre la génération des comptes rendus depuis les réunions enregistrées, le reporting depuis l'outil de suivi, les relances, la consolidation de plusieurs lots, la préparation des supports de comité. Elle se branche sur vos outils par des assistants configurés ou des scénarios d'automatisation, avec une validation humaine avant tout ce qui engage. Ce qui reste au chef de projet : décider, estimer, arbitrer, et vérifier." },
  { q: "Comment produire un reporting projet avec l'IA ?", a: "En partant des données de suivi, jamais d'un texte à réécrire. Le flux : exporter ou connecter les données réelles (avancement par lot, charge, jalons, risques ouverts), produire une synthèse selon votre gabarit de flash (faits, écarts, décisions attendues) comparée à la semaine précédente, puis faire relire par le chef de projet ce que l'outil ne peut pas savoir. Automatisé, le flash arrive chaque vendredi dans la messagerie ou l'outil de suivi, en brouillon, avec les graphiques prévu et réalisé. La condition : des données de suivi tenues à jour ; c'est souvent le premier chantier." },
  { q: "Quels prompts IA utiliser en gestion de projet ?", a: "Peu, et toujours à partir d'un livrable réel et d'un gabarit : produire une note de cadrage depuis les échanges de lancement, découper un périmètre en lots avec dépendances sans dates, transformer des notes en compte rendu avec décisions et actions, rédiger le flash depuis l'export de suivi, lister les risques par analogie, préparer un arbitrage en trois options. Notre bibliothèque de prompts publique en donne six pour la gestion de projet, avec la raison de chaque construction ; la mission et la formation les adaptent à vos gabarits et les déposent dans une bibliothèque d'équipe." },
  { q: "Sur quels outils de gestion de projet travaillez-vous ?", a: "Sur les vôtres. Jira, Microsoft Planner et Project, Monday, Notion, Asana, Trello, un tableur partagé pour les petites structures ; Teams, Outlook ou Gmail pour la messagerie et les réunions. L'IA d'entreprise que vous avez déployée (Copilot, ChatGPT, Claude, Gemini ou Mistral en version entreprise) porte les assistants ; un orchestrateur comme n8n ou Make porte les automatisations quand l'outil ne le fait pas nativement. Nous n'imposons aucune plateforme et nous ne vendons aucune licence." },
  { q: "L'IA peut-elle planifier ou estimer un projet ?", a: "Elle peut proposer un découpage et des dépendances, et comparer avec des projets analogues ; elle ne doit pas fixer une charge ni une date. Un modèle produit une estimation plausible avec la même assurance qu'une estimation juste, et personne ne sait sur quoi elle repose. Nous configurons les assistants pour qu'ils refusent de chiffrer, et nous formons les chefs de projet à s'en servir pour structurer avant d'estimer eux-mêmes. C'est aussi ce que demandent les méthodes, Agile comprises." },
  { q: "Comment gérez-vous la confidentialité des projets ?", a: "Le cadre est posé le premier jour : version entreprise de l'outil d'IA, données non utilisées pour l'entraînement des modèles, périmètres d'accès, règles pour les projets clients et les données personnelles, ce qui s'anonymise avant. Les automatisations tournent sur vos comptes et vos outils ; les agents lisent ce que le chef de projet a le droit de lire, pas plus. Pour les environnements qui l'exigent, un déploiement souverain ou sur site est possible." },
  { q: "Combien coûte l'outillage IA de la fonction projet ?", a: "Au forfait, par étape, après un cadrage gratuit : le projet pilote avec ses assistants et sa bibliothèque a son prix, les automatisations et l'extension au PMO se chiffrent ensuite selon le périmètre. Le conseil et la construction ne sont pas finançables par l'OPCO ; la formation des chefs de projet, certifiée Qualiopi, l'est. Vous décidez de chaque étape sur le résultat de la précédente." },
  { q: "Cela concerne-t-il une PME sans PMO ?", a: "Oui, à son échelle. Une PME qui mène des projets sans bureau dédié gagne d'abord sur les comptes rendus, le reporting au dirigeant et les relances : deux assistants et une automatisation, sur son outil actuel, tenus par le chef de projet le plus à l'aise. Les agents de consolidation attendent qu'il y ait un portefeuille à consolider. Le cadrage, gratuit, dit ce qui vaut la peine chez vous." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IA en gestion de projet, PMO augmenté (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/ia-gestion-de-projet',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#webpage' },
  serviceType: "Outillage de la fonction projet par l'intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }],
  audience: { '@type': 'BusinessAudience', audienceType: 'Chefs de projet, PMO, directions de programme' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Niveaux d'outillage IA de la fonction projet",
    itemListElement: NIVEAUX.map(n => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n.title, description: n.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#termes',
  name: 'IA en gestion de projet : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: "PMO augmenté par l'IA", description: "Bureau des projets dont les tâches répétitives et documentaires (reporting, comptes rendus, relances, consolidation) sont prises par des assistants, des automatisations et des agents, les estimations et les arbitrages restant aux personnes." },
    { '@type': 'DefinedTerm', name: 'Gestion automatisée de projets', description: "Automatisation, branchée sur les outils de suivi et de messagerie, des tâches documentaires de la conduite de projet, avec validation humaine avant tout ce qui engage." },
    { '@type': 'DefinedTerm', name: 'Reporting projet IA', description: "Flash ou rapport d'avancement produit depuis les données de l'outil de suivi selon un gabarit, comparé à la période précédente, relu par le chef de projet avant diffusion." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#article',
  headline: "IA en gestion de projet : outiller la fonction projet, sans laisser l'IA estimer",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#webpage' },
  about: [
    { '@type': 'Thing', name: 'Gestion de projet', sameAs: 'https://fr.wikipedia.org/wiki/Gestion_de_projet' },
    { '@type': 'Thing', name: 'Bureau des projets', sameAs: 'https://fr.wikipedia.org/wiki/Bureau_des_projets' },
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

export default function IAGestionDeProjetPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'IA en gestion de projet', slug: SLUG },
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>IA en gestion de projet</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClipboardCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Conseil et solutions · Gestion de projet</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            IA en gestion de projet :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>outiller la fonction projet, sans laisser l'IA estimer</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'IA en gestion de projet prend les tâches répétitives et documentaires de la conduite de projet : <strong style={{ color: '#fff', fontWeight: 700 }}>cadrage, comptes rendus, reporting, relances, préparation des arbitrages</strong>, par des assistants configurés sur vos gabarits, des automatisations branchées sur vos outils et des agents pour le PMO. Les estimations et les décisions restent aux personnes. {ENTITY.split(',')[0]} construit cet outillage, et forme les chefs de projet dessus.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Nous ne sommes pas un cabinet de conseil en gestion de projet : nous ne redessinons pas votre méthode et nous ne pilotons pas vos projets à votre place. Nous outillons ceux qui le font, à partir de leurs gabarits, de leurs outils et de leurs rituels, sur un projet pilote d'abord.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer un projet pilote
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#usages" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Ce que l'IA change</a>
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
                  <dt style={{ flex: '0 0 150px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CE QUE L'IA CHANGE (éditorial asymétrique) ── */}
      <section id="usages" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Activité par activité</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Que change l'IA dans la gestion de projet ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six activités où le chef de projet passe la moitié de son temps à produire des documents : le cadrage, le découpage, les comptes rendus, le reporting, les risques et arbitrages, la communication. L'IA y prend la mise en forme et la première analyse ; le chef de projet garde l'estimation, la décision et la vérification.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Ces six activités sont aussi le programme de notre <Link to="/formation-ia-gestion-de-projet" style={aStyle}>formation IA gestion de projet</Link>, sur les projets réels des participants.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {USAGES.map((item, i) => (
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

      {/* ── CABINET CLASSIQUE vs PMO AUGMENTÉ (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Deux métiers</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Cabinet de conseil en gestion de projet ou cabinet IA : lequel vous faut-il ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un cabinet de conseil en gestion de projet organise la fonction projet ; un cabinet IA l'outille. Si votre méthode et votre PMO tiennent mais que vos chefs de projet passent leurs journées à produire des documents, c'est de l'outillage dont vous avez besoin. Si la méthode elle-même flotte, commencez par le cabinet PMO ; nous viendrons après, ou avec lui.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre cabinet de conseil en gestion de projet et outillage IA de la fonction projet" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Cabinet de conseil en gestion de projet</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>PMO augmenté par l'IA (Masteria)</th>
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
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Pour la façon dont Masteria conduit ses propres projets IA chez ses clients, c'est un autre sujet : notre <Link to="/methode-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>méthode projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── TROIS NIVEAUX ── */}
      <section id="niveaux" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>L'outillage</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Trois niveaux d'outillage, dans cet ordre</h2>
          <p style={answerStyle}>
            <strong>Des assistants configurés sur vos gabarits d'abord, en place en quelques jours ; des automatisations branchées sur vos outils ensuite, pour le reporting et les comptes rendus ; des agents enfin, pour un PMO qui pilote un portefeuille. Chaque niveau tient sur le précédent, et chacun s'arrête sur une validation humaine avant ce qui engage.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {NIVEAUX.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{card.desc}</p>
                  <Link to={card.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700 }}>
                    {card.cta}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>Comment outille-t-on une fonction projet en un trimestre ?</h2>
          <p style={{ ...answerStyle, maxWidth: 'none', background: '#fff' }}>
            <strong>Un projet pilote, ses gabarits et ses outils ; des assistants et une bibliothèque le premier mois, avec la formation des chefs de projet ; les automatisations du reporting et des comptes rendus le deuxième ; l'extension au PMO et la transmission le troisième. Le cadre de confidentialité se pose le premier jour.</strong>
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
            La mesure suit le temps rendu par chef de projet et le délai de production du reporting, relevés avant et après ; la chaîne de conversion est décrite sur <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Les cinq erreurs de l'IA en gestion de projet</h2>
          <p style={answerStyle}>
            <strong>Laisser l'IA estimer, automatiser un reporting sur des données fausses, ajouter un outil au lieu de brancher les vôtres, oublier la confidentialité des projets, former sans gabarits. Cinq erreurs vues en formant des chefs de projet depuis 2022, et qui se corrigent au cadrage.</strong>
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
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Les chefs de projet formés sur leurs propres livrables</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La <Link to="/formation-ia-gestion-de-projet" style={aStyle}>formation IA gestion de projet</Link>, deux jours en intra, travaille sur les projets en cours des participants : cadrage, découpage, comptes rendus, reporting, risques, communication et Agile, avec une bibliothèque de prompts d'équipe en sortie. Elle se suffit à elle-même quand les gabarits existent ; elle prolonge la mission quand les assistants ont été configurés. Certifiée Qualiopi et finançable par votre OPCO ; le conseil et la construction restent des prestations de service.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Sur les projets en cours des participants', 'Six activités, du cadrage au reporting', 'Bibliothèque de prompts d\'équipe en sortie', 'Formation Qualiopi, finançable OPCO'].map(pt => (
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>IA en gestion de projet : les questions fréquentes</h2>
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
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>La formation, les prompts, les briques d'outillage et les missions voisines.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA gestion de projet', href: '/formation-ia-gestion-de-projet', tag: 'Formation', desc: "Deux jours sur les projets réels des participants, du cadrage au reporting, avec bibliothèque en sortie." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Prompts', desc: "Six prompts de gestion de projet, avec la raison de chaque construction, parmi plus de cent par métier." },
              { label: 'Automatisation IA', href: '/automatisation-ia', tag: 'Guide', desc: "Ce qu'on automatise, avec quels outils, en cinq étapes : le reporting projet en est un cas d'école." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Des agents branchés sur vos outils de suivi et votre messagerie, avec validation humaine." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Orchestration', desc: "Pour que votre PMO construise et tienne lui-même ses scénarios d'automatisation." },
              { label: 'Formation IA management', href: '/formation-ia-management', tag: 'Managers', desc: "Pour les managers qui pilotent des équipes augmentées : cadre, arbitrage, réunions." },
              { label: 'Conseil en transformation IA', href: '/conseil-transformation-ia', tag: 'Organisation', desc: "Quand la fonction projet elle-même doit changer : processus reconçus, rôles, pilotage du programme." },
              { label: 'Méthode projet IA', href: '/methode-projet-ia', tag: 'Chez nous', desc: "Comment Masteria conduit ses propres projets IA : forfait, régie, équipe dédiée." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>IA en gestion de projet</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Rendons des heures à vos chefs de projet</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous vos outils de suivi, vos rituels et le projet que vous prendriez comme pilote. Nous revenons vers vous sous 24 heures avec le premier niveau d'outillage recommandé, ce qu'il faut préparer, et le devis par étape.
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
              {ENTITY} n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues, dont d'anciens chefs de projet et PMO. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[['Depuis 2022', 'spécialisé uniquement IA'], ['+1 500', 'professionnels formés'], ['Indépendant', 'des éditeurs de solutions'], ['FR · CH · BE', 'sur site ou à distance']].map(([k, v]) => (
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
