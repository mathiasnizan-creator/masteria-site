import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList, BadgeCheck, Wallet, MonitorSmartphone, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page formation « IA gestion de projet » — réplique la structure des pages
 * formation (SpokePage / AutomatisationIAPage) : hero + tarifs, chiffres clés,
 * audience, cas d'usage, programme J1/J2, CTA milieu, objectifs, tarifs,
 * formateur, pourquoi Masteria, FAQ, formations associées, CTA.
 * Cible le mot-clé « formation ia gestion de projet » (KD 11, 140/mois).
 * Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'formation-ia-gestion-de-projet'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA gestion de projet | Chefs de projet & PMO | Masteria"
const META_DESC = "Formation IA gestion de projet : automatisez cadrage, planning, CR de COPIL et reporting avec ChatGPT, Copilot ou Claude. Qualiopi, finançable OPCO."
const H1 = "Formation IA gestion de projet"
const INTRO = "L'IA libère 4 à 7 heures par semaine à un chef de projet expérimenté. Cadrage, planning, comptes rendus de COPIL, reporting hebdo, analyse des risques : la production documentaire qui occupe la moitié de l'agenda peut être assistée par ChatGPT, Claude, Copilot ou Gemini. Cette formation apprend à vos équipes projet à les intégrer dans leur cycle réel, sans prérequis technique."

const HERO_BADGES = [
  { icon: BadgeCheck,         label: 'Certifié Qualiopi' },
  { icon: Wallet,             label: 'Finançable OPCO' },
  { icon: MonitorSmartphone,  label: 'Présentiel & distanciel' },
  { icon: Building2,          label: 'Intra ou accompagnement individuel' },
]

const AUDIENCE = [
  { title: 'Chefs de projet MOA et MOE', desc: "Vous pilotez des projets de bout en bout. Vous voulez libérer du temps sur les livrables documentaires (cadrage, CR, reporting) pour le réinvestir sur l'arbitrage et les parties prenantes." },
  { title: 'PMO et directeurs de programme', desc: "Vous industrialisez les pratiques projet de plusieurs équipes. Vous apprenez à construire une bibliothèque de prompts mutualisée et à mesurer le gain de temps réel." },
  { title: 'Product Owners et Scrum Masters', desc: "Vous gérez backlog, user stories et cérémonies Agile. L'IA accélère la rédaction des stories, la préparation des sprints et les comptes rendus de rétrospective." },
  { title: 'Managers transverses', desc: "Vous pilotez des projets sans être chef de projet à plein temps. Le programme vous donne les bons réflexes IA pour produire vos livrables projet en deux fois moins de temps." },
]

const USE_CASES = [
  { icon: '📝', title: "Cadrage et cahier des charges", desc: "Transformez un brief de quelques lignes en expression de besoin structurée, puis itérez avec ChatGPT ou Claude pour affiner le périmètre." },
  { icon: '📅', title: "Estimation et planning", desc: "Décomposez un livrable en lots avec les bonnes hypothèses d'effort, générez une trame chargeable dans MS Project, Asana ou Jira." },
  { icon: '🎙️', title: "Comptes rendus de COPIL", desc: "60 minutes de réunion transcrites en 5 minutes de synthèse structurée : actions, décisions, risques, prête à circuler." },
  { icon: '📊', title: "Reporting hebdo de projet", desc: "Générez automatiquement le flash projet à partir de vos données d'avancement et de votre matrice de risques." },
  { icon: '⚠️', title: "Analyse des risques", desc: "Première lecture d'un référentiel de risques par l'IA, propositions de mitigations à challenger par le PMO." },
  { icon: '💬', title: "Communication parties prenantes", desc: "Adaptez le ton et le niveau de détail au sponsor, à la MOE et aux partenaires sans tout réécrire trois fois." },
]

const MODULES = [
  { day: 1, title: "Module 1, Fondamentaux de l'IA pour le chef de projet", duration: '2h', description: "Maîtriser le terrain avant de l'utiliser sur des projets clients.", items: ['Modèles génératifs, hallucinations, biais et fuite de données', 'Cartographie des outils : ChatGPT, Claude, Copilot, Gemini, Mistral', "Quand utiliser l'IA et quand garder la main : arbitrage, négociation, décision", 'Sécurité données client, RGPD et obligations AI Act pour les chefs de projet'], exercise: "Sélectionner l'outil IA adapté à 3 cas réels du quotidien projet du participant." },
  { day: 1, title: 'Module 2, Bibliothèque de prompts gestion de projet', duration: '2h', description: "Construire les prompts qui vont servir tous les jours.", items: ['Structure d\'un prompt projet : contexte, contraintes, format de sortie attendu', 'Templates : cadrage, CR de COPIL, reporting, analyse de risques, communication', 'Construire sa bibliothèque de prompts personnelle et la versionner', "Partager une bibliothèque mutualisée à l'équipe projet"], exercise: "Construire 5 prompts opérationnels sur ses livrables récurrents et tester leur robustesse." },
  { day: 1, title: 'Module 3, Comptes rendus et reporting automatisés', duration: '2h', description: "Industrialiser la production documentaire du pilotage.", items: ['Transcrire et synthétiser une réunion (Teams, Meet, Zoom)', 'Générer un CR de COPIL structuré : actions, décisions, risques', "Rédiger un flash projet hebdo à partir des données d'avancement", 'Industrialiser le reporting parties prenantes avec Power Automate ou Make'], exercise: "Produire un CR de COPIL et un flash projet hebdo à partir d'une réunion réelle." },
  { day: 1, title: 'Module 4, Communication parties prenantes', duration: '1h', description: "Adapter chaque message au bon interlocuteur en une fraction du temps.", items: ['Rédiger emails et notes adaptés au sponsor, à la MOE et aux partenaires', 'Reformuler un message technique pour un public business', 'Préparer une réunion de pilotage avec ordre du jour et points de vigilance'], exercise: "Rédiger 3 communications projet pour 3 profils de parties prenantes différents." },
  { day: 2, title: 'Module 5, Cadrage et livrables de démarrage', duration: '2h', description: "Produire les livrables d'amorçage projet avec assistance IA.", items: ['Cahier des charges et expression de besoin', 'Charte projet et note de cadrage', 'Plan d\'assurance qualité (PAQ) et plan de communication', 'Itérer en sparring partner avec ChatGPT ou Claude jusqu\'au livrable signable'], exercise: "Rédiger l'expression de besoin d'un projet réel avec assistance IA, du brief au livrable." },
  { day: 2, title: 'Module 6, Estimation et construction du planning', duration: '2h', description: "Construire un planning défendable plus vite, sans perdre en sérieux.", items: ['Décomposer un livrable en lots : WBS assistée', "Aide à l'estimation : charge, durée, dépendances", 'Génération d\'une trame de planning chargeable dans MS Project, Asana ou Jira', "Itérer sur le planning avec l'IA en sparring partner sur les hypothèses"], exercise: "Construire le planning d'un projet de 2 mois avec assistance IA et challenger ses propres hypothèses." },
  { day: 2, title: 'Module 7, Analyse des risques et pilotage', duration: '2h', description: "Mettre l'IA en mode sparring sur le risque projet.", items: ['Première lecture du référentiel de risques et identification des angles morts', 'Proposer des mitigations à challenger par le PMO', 'Construire la matrice probabilité × impact assistée', 'Définir indicateurs de pilotage et fréquence de mesure'], exercise: "Analyser les risques d'un projet en cours et faire challenger son analyse par l'IA." },
  { day: 2, title: "Module 8, Gouvernance et déploiement équipe projet", duration: '1h', description: "Passer de l'usage individuel à la pratique d'équipe.", items: ['Documenter et versionner ses prompts', 'Définir qui supervise quoi (qualité, sécurité, conformité)', 'Construire une bibliothèque partagée pour toute l\'équipe projet', "Mesurer le gain de temps réel et arbitrer les prochains cas d'usage"], exercise: "Rédiger la charte d'usage IA de votre équipe projet et son plan de déploiement." },
]

const OBJECTIVES = [
  "Identifier les phases du cycle projet où l'IA libère le plus de temps",
  "Construire sa bibliothèque de prompts gestion de projet et la partager à l'équipe",
  "Produire automatiquement les comptes rendus de COPIL et le reporting hebdo",
  "Rédiger les livrables de cadrage (cahier des charges, charte, PAQ) avec assistance IA",
  "Construire un planning projet assisté par l'IA et challenger ses propres hypothèses",
  "Analyser les risques projet et structurer le pilotage du déploiement IA dans l'équipe",
]

const FAQ = [
  { q: "À qui s'adresse cette formation IA gestion de projet ?", a: "Aux chefs de projet (MOA, MOE, technique, métier), PMO, product owners, scrum masters, directeurs de programme et managers transverses qui pilotent des projets. Aucun prérequis technique ou IA n'est nécessaire. Les profils qui ne sont pas chefs de projet à plein temps (managers, directeurs d'équipe, consultants) en tirent autant de bénéfice que les profils dédiés." },
  { q: "Quel gain de temps réel sur la gestion de projet ?", a: "Sur les retours de nos clients, l'IA libère 4 à 7 heures par semaine pour un chef de projet expérimenté. Les postes les plus impactés : comptes rendus de réunion (gain ×4 à ×6), reporting hebdomadaire (gain ×3), rédaction de livrables de cadrage (gain ×2). Sur le cœur du métier (arbitrages, négociation avec les parties prenantes, animation d'équipe), l'IA agit comme un copilote qui rend du temps utile." },
  { q: "Quel outil IA choisir pour la gestion de projet : ChatGPT, Copilot ou Claude ?", a: "Si vos chefs de projet vivent dans Microsoft 365 (Teams, Outlook, Excel, MS Project), Microsoft Copilot s'impose par son intégration native : transcription Teams, CR automatiques, analyses Excel. ChatGPT est plus polyvalent et permet d'industrialiser vos templates de cadrage via des GPT personnalisés. Claude est le meilleur sur les projets à fort volume documentaire : appels d'offres, dossiers d'architecture, due diligence. La formation peut couvrir un seul outil ou comparer les trois sur vos cas réels." },
  { q: "Quelle différence avec la formation IA Management ?", a: "La formation IA Management couvre les usages de pilotage et de communication d'équipe : préparation de réunions, feedback, communication interne, prise de décision managériale. La formation IA Gestion de projet est plus opérationnelle sur le cycle projet : cadrage, planning, livrables, reporting, COPIL, risques. Un chef de projet manager peut suivre les deux. La page Formation IA Management détaille le programme complémentaire." },
  { q: "Cette formation couvre-t-elle la conduite d'un projet d'IA en entreprise ?", a: "Non, ce sont deux sujets distincts. Le programme présenté ici apprend à utiliser l'IA générative dans le pilotage de projets classiques. Pour piloter un projet de déploiement d'IA (sélection des cas d'usage, MLOps, AI Act, conduite du changement, mesure d'impact), Masteria propose un Sprint IA dédié à la conduite de projet IA, qui combine cadrage stratégique et gouvernance." },
  { q: "La formation IA gestion de projet est-elle finançable et certifiée Qualiopi ?", a: "Oui. Masteria est certifié Qualiopi, ce qui rend la formation finançable par votre OPCO ou via le plan de développement des compétences. Nous accompagnons gratuitement le montage du dossier de prise en charge. Format standard : 2 jours (14 heures), avec une variante 1 jour pour l'initiation et 3 jours pour les équipes PMO qui veulent un programme avancé." },
]

const RELATED = [
  { label: "Formation IA Management", href: "/formation-ia-management", tag: "Métier", desc: "Pour les managers : pilotage d'équipe, prise de décision, communication interne." },
  { label: "Formation automatisation IA", href: "/formation-automatisation-ia", tag: "Outil", desc: "Industrialiser le reporting et les workflows projet avec Make, Power Automate." },
  { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot", tag: "Outil", desc: "L'outil le plus intégré pour les chefs de projet sur Microsoft 365." },
  { label: "Formation multi-outils IA", href: "/formation-multi-outils", tag: "Comparatif", desc: "Comparer ChatGPT, Copilot, Gemini, Claude et Mistral sur vos projets réels." },
]

const TRAINER = {
  name: 'Mathias Nizan',
  role: 'Fondateur & formateur principal, Masteria',
  quote: "L'intelligence artificielle ne remplace pas les humains. Elle décuple leur potentiel.",
  credentials: ['Expert IA certifié', '+1 500 professionnels formés', 'Fondateur Masteria', 'Certification Qualiopi'],
  bio: "Mathias Nizan a fondé Masteria en 2022 après 10 ans passés à accompagner des entreprises sur leurs enjeux digitaux. Il conçoit et anime les formations IA de Masteria pour les directions projet, PMO et équipes Agile. Pour ce programme, il s'appuie sur des déploiements réels en PME et ETI, avec une exigence de qualité documentaire et de sécurité des données client.",
}

const WHY_MASTERIA = [
  { icon: '🎯', title: "Spécialisés à 100 % sur l'IA", desc: "Masteria ne fait que ça. Chaque formateur utilise l'IA au quotidien dans des contextes professionnels réels, y compris en pilotage de projet." },
  { icon: '📁', title: 'On travaille sur vos projets', desc: "Zéro cas fictif. Chaque participant produit ses propres livrables projet avec assistance IA. Ce qu'on construit en formation sert encore le lendemain." },
  { icon: '⏱️', title: 'Gain de temps mesurable', desc: "On chronomètre la production d'un CR ou d'un cadrage avant et après formation. Les retours clients montrent 4 à 7 heures gagnées par semaine pour un chef de projet expérimenté." },
  { icon: '💳', title: 'Financement intégral possible', desc: "Notre certification Qualiopi rend la formation éligible au financement OPCO. Masteria prend en charge le montage du dossier de A à Z." },
]

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function GestionDeProjetIAPage() {
  const modulesJ1 = MODULES.filter(m => m.day === 1)
  const modulesJ2 = MODULES.filter(m => m.day === 2)

  const courseData = {
    name: H1,
    description: META_DESC,
    level: 'Tous niveaux',
    duration: 'PT14H',
    timeRequired: 'PT14H',
    price: '1980',
    audience: 'Chefs de projet, PMO, product owners, managers transverses (B2B)',
    tool: 'ChatGPT, Claude, Microsoft Copilot, Gemini, Mistral, MS Project, Asana, Jira',
    teaches: OBJECTIVES,
    objectives: OBJECTIVES,
    modules: MODULES,
    about: "Formation à l'usage de l'IA générative dans le cycle de pilotage projet : cadrage, planning, COPIL, reporting, risques",
    prerequisites: 'Aucun prérequis technique ou IA. Maîtrise des outils bureautiques courants.',
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formations IA', slug: 'formation-intelligence-artificielle' },
    { name: 'IA gestion de projet', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        courseData={courseData}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#6B7280' }}>Formations IA</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>IA gestion de projet</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <ClipboardList size={16} strokeWidth={2.2} />
              IA gestion de projet
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              2 jours · 14h
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680, fontWeight: 500 }}>
            La formation <strong>IA gestion de projet</strong> proposée par Masteria est un programme de <strong>2 jours (14 h)</strong> certifié Qualiopi, dispensé en présentiel ou distanciel. Tarif&nbsp;: <strong>1 980 €/jour</strong>, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel sur mesure. Financement OPCO 100&nbsp;%. Vos chefs de projet, PMO et product owners repartent avec leur bibliothèque de prompts opérationnels.
          </p>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            {INTRO}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${c}30` }}>
              Contacter notre équipe →
            </Link>
            <a href="#tarifs" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir les tarifs
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: '40px', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap', borderBottom: '1px solid #E5E7EB' }}>
        {[
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '100 %', label: 'finançable via votre OPCO' },
          { num: '+5 h', label: 'gagnées par semaine en pilotage' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#4B5563', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── À QUI S'ADRESSE ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            À qui s'adresse cette formation ?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            Le programme est conçu pour les professionnels qui pilotent des projets et veulent produire leurs livrables documentaires deux fois plus vite.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {AUDIENCE.map((profile, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 28, border: `2px solid ${cLight}`, borderLeftColor: c, borderLeftWidth: 4 }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{profile.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS D'USAGE ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Ce que vos chefs de projet vont savoir faire
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            Six cas d'usage concrets travaillés pendant les 2 jours, sur vos propres projets.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {USE_CASES.map((uc, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{uc.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{uc.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME (modules J1/J2) ── */}
      <section style={{ padding: '80px 40px', background: '#F5F3EE', color: '#0A0A0A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Programme, 2 jours de formation pratique
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 56 }}>
            14h de formation effective. Chaque module alterne démonstration en direct et exercice sur vos vrais projets.
          </p>

          {[{ label: 'Jour 1', modules: modulesJ1 }, { label: 'Jour 2', modules: modulesJ2 }].map(day => (
            <div key={day.label} style={{ marginBottom: 56 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <div style={{ background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, padding: '6px 18px', borderRadius: 99 }}>{day.label}</div>
                <div style={{ flex: 1, height: 1, background: '#F3F4F6' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {day.modules.map((mod, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 28, border: `1px solid #E5E7EB`, borderLeftColor: c, borderLeftWidth: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{mod.title}</h3>
                      {mod.duration && (
                        <span style={{ background: '#F3F4F6', color: '#6B7280', padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{mod.duration}</span>
                      )}
                    </div>
                    {mod.description && (
                      <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{mod.description}</p>
                    )}
                    {mod.items?.length > 0 && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: mod.exercise ? 16 : 0 }}>
                        {mod.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151' }}>
                            <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {mod.exercise && (
                      <div style={{ background: `${c}18`, border: `1px solid ${c}40`, borderRadius: 8, padding: '12px 16px', marginTop: 16 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: c, display: 'block', marginBottom: 4 }}>EXERCICE CONCRET</span>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{mod.exercise}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Prêt à former vos chefs de projet et votre PMO&nbsp;?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24h · Programme adapté à vos projets · Finançable OPCO
            </p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: c, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Contacter notre équipe →
          </Link>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 32 }}>
            Ce que vos équipes savent faire à l'issue des 2 jours
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {OBJECTIVES.map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 26, height: 26, background: c, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <span style={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>✓</span>
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Modalités et tarifs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>ACCOMPAGNEMENT INDIVIDUEL</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>/ jour</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>Soit 3 960 € pour 2 jours · 1-to-1</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['2 jours consécutifs ou espacés · 1-to-1', 'Programme co-construit sur vos projets', 'Présentiel ou distanciel', 'Suivi entre les sessions'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>INTRA-ENTREPRISE</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>/ jour</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>Soit 3 960 € pour 2 jours (jusqu'à 12 participants)</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Réservé à votre équipe projet', '2 jours sur mesure, dans vos locaux', "Bibliothèque de prompts construite sur vos projets", 'OPCO, plan de développement des compétences'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
            Masteria est certifié Qualiopi. Toutes nos formations sont finançables à 100 % via votre OPCO (Atlas, Afdas, Akto, Constructys, Opco 2i…). Notre équipe vous accompagne dans la constitution du dossier de A à Z. Chaque participant repart avec sa bibliothèque de prompts gestion de projet et un plan de mise en pratique sur ses projets réels.
          </p>
        </div>
      </section>

      {/* ── FORMATEUR (E-E-A-T) ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Un mot du fondateur
          </h2>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/assets/mathias-nizan@120.jpg"
                srcSet="/assets/mathias-nizan@120.jpg 1x, /assets/mathias-nizan@240.jpg 2x"
                alt="Mathias Nizan, fondateur de Masteria, expert en formation IA"
                width="100" height="100"
                loading="lazy" decoding="async"
                style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{TRAINER.name}</h3>
              <p style={{ fontSize: 14, color: c, fontWeight: 600, margin: '0 0 16px' }}>{TRAINER.role}</p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>{TRAINER.bio}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {TRAINER.credentials.map(cred => (
                  <span key={cred} style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>{cred}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Pourquoi Masteria pour cette formation IA gestion de projet ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
            {WHY_MASTERIA.map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <blockquote style={{ borderLeft: `4px solid ${c}`, paddingLeft: 24, margin: 0 }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 700, color: '#0A0A0A', fontStyle: 'italic', marginBottom: 8 }}>
              "{TRAINER.quote}"
            </p>
            <cite style={{ fontSize: 14, color: '#6B7280', fontStyle: 'normal' }}>{TRAINER.name}, fondateur de Masteria</cite>
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Questions fréquentes, Formation IA gestion de projet
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Formations associées
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32 }}>
            Compléter votre parcours ou former vos équipes sur un outil ou un métier précis.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {RELATED.map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 10, padding: 22, border: `2px solid ${c}20`, transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${c}20`}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: '0 0 10px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700 }}>En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', marginTop: 24 }}>
            Explorer{' '}
            <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>toutes les formations IA par métier</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de votre équipe projet
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Dites-nous combien de chefs de projet vous souhaitez former et les livrables qui consomment le plus de temps dans vos projets actuels. On revient vers vous sous 24 heures avec un programme adapté sur 2 jours.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Formation certifiée Qualiopi · Finançable OPCO · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
