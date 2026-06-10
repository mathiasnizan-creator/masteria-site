import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Workflow, BadgeCheck, Wallet, MonitorSmartphone, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page formation « automatisation IA » — réplique la structure des pages
 * formation (SpokePage) : hero + tarifs, chiffres clés, audience, cas d'usage,
 * programme J1/J2, CTA milieu, objectifs, tarifs, formateur, pourquoi Masteria,
 * FAQ, formations associées, CTA. Cible le mot-clé « formation automatisation ia ».
 * Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'formation-automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation automatisation IA | Workflows, agents & no-code | Masteria"
const META_DESC = "Formation automatisation IA : automatisez vos tâches et workflows avec l'IA (agents, Make, Power Automate). Certifié Qualiopi, finançable OPCO."
const H1 = "Formation automatisation IA"
const INTRO = "L'automatisation par l'intelligence artificielle permet de déléguer les tâches répétitives (saisie, relances, reporting, tri d'emails) à des agents et des workflows intelligents. Cette formation apprend à vos équipes à repérer ces tâches, à les automatiser avec les bons outils et à le faire en sécurité, sans écrire une ligne de code."

const HERO_BADGES = [
  { icon: BadgeCheck,         label: 'Certifié Qualiopi' },
  { icon: Wallet,             label: 'Finançable OPCO' },
  { icon: MonitorSmartphone,  label: 'Présentiel & distanciel' },
  { icon: Building2,          label: 'Intra ou accompagnement individuel' },
]

const AUDIENCE = [
  { title: 'Managers et responsables de service', desc: "Vous voulez libérer du temps à votre équipe en automatisant les tâches répétitives, sans dépendre de la DSI ni d'un développeur." },
  { title: 'Profils opérationnels (marketing, commercial, RH, finance)', desc: "Vous passez trop de temps sur des tâches manuelles à faible valeur : tri d'emails, relances, reporting, mises à jour de fichiers. L'automatisation IA vous les enlève." },
  { title: 'Assistant(e)s et fonctions support', desc: "Vous orchestrez des flux d'information entre plusieurs outils et personnes. Vous apprenez à les automatiser et à les fiabiliser." },
  { title: 'DSI, référents IA et chefs de projet', desc: "Vous cadrez le déploiement de l'IA dans l'entreprise et cherchez à industrialiser des automatisations sûres, documentées et conformes." },
]

const USE_CASES = [
  { icon: '📥', title: "Tri et réponses d'emails", desc: "Classez, résumez et préparez automatiquement les réponses aux emails entrants selon des règles claires." },
  { icon: '🔁', title: "Connexion de vos applications", desc: "Reliez vos outils entre eux avec Make, Zapier ou n8n et injectez de l'IA à chaque étape du flux." },
  { icon: '🤖', title: "Création d'un agent IA", desc: "Concevez un GPT personnalisé ou un agent qui enchaîne plusieurs étapes pour atteindre un objectif." },
  { icon: '📊', title: "Reporting industrialisé", desc: "Transformez des données brutes en rapport commenté, généré et diffusé automatiquement chaque semaine." },
  { icon: '🧩', title: "Automatisation Microsoft 365", desc: "Automatisez vos flux Outlook, Teams, Excel et SharePoint avec Copilot et Power Automate." },
  { icon: '🛡️', title: "Supervision et conformité", desc: "Gardez un contrôle humain sur les décisions sensibles et mettez vos automatisations en conformité RGPD." },
]

const MODULES = [
  { day: 1, title: "Module 1, Fondamentaux de l'automatisation IA", duration: '2h', description: "Comprendre ce qu'est une automatisation IA et quand l'utiliser sans se mettre en danger.", items: ['Déclencheurs, actions et logique de chaîne', "Différence entre IA générative, automatisation IA et RPA", 'Ce que sont les agents IA et le no-code', 'Limites, risques et garde-fous'], exercise: "Cartographier une première chaîne d'automatisation à partir d'un cas apporté par le participant." },
  { day: 1, title: 'Module 2, Cartographier ses tâches automatisables', duration: '2h', description: "Identifier les tâches à plus fort retour sur investissement.", items: ['Méthode de priorisation : fréquence, temps consommé, niveau de risque', "Repérer les tâches répétitives dans son quotidien", 'Estimer le temps récupérable', 'Choisir les premiers cas d\'usage'], exercise: "Construire la cartographie des tâches automatisables de son poste et sélectionner 3 priorités." },
  { day: 1, title: 'Module 3, Premiers workflows no-code', duration: '2h', description: "Construire une automatisation de bout en bout sans coder.", items: ['Prise en main de Make et Zapier', "Lire, résumer, classer puis notifier", 'Connecter une boîte mail à une tâche et à un tableau', 'Tester et corriger un workflow'], exercise: "Automatiser le tri et le résumé d'emails entrants vers un tableau de suivi." },
  { day: 1, title: 'Module 4, GPTs et assistants personnalisés', duration: '1h', description: "Créer un assistant IA réutilisable par toute l'équipe.", items: ['Concevoir un GPT personnalisé', 'Donner du contexte et des instructions durables', 'Réutiliser et partager ses assistants'], exercise: "Créer un assistant IA dédié à une tâche récurrente de son service." },
  { day: 2, title: 'Module 5, Automatiser dans son environnement', duration: '2h', description: "Automatiser au sein de la suite bureautique de l'entreprise.", items: ['Power Automate avec Microsoft 365', 'Automatiser Outlook, Teams, Excel et SharePoint', "Cas équivalents sur Google Workspace", 'Choisir le bon outil selon son contexte'], exercise: "Construire un flux Power Automate qui déclenche une action depuis un email ou un formulaire." },
  { day: 2, title: 'Module 6, Concevoir un agent IA supervisé', duration: '2h', description: "Faire enchaîner plusieurs étapes à l'IA tout en gardant la main.", items: ['Décomposer un objectif en étapes', "Enchaîner recherche, rédaction et action", 'Définir les points de validation humaine', 'Tester un agent sur un cas réel'], exercise: "Construire un agent qui qualifie une demande entrante et prépare une réponse à valider." },
  { day: 2, title: 'Module 7, Fiabiliser et sécuriser', duration: '2h', description: "Mettre ses automatisations sous contrôle.", items: ['Contrôle humain sur les décisions sensibles', 'Journalisation et traçabilité des actions', "Confidentialité, RGPD et hébergement des données", "Obligations clés de l'AI Act"], exercise: "Auditer un de ses workflows et y ajouter les garde-fous manquants." },
  { day: 2, title: "Module 8, Déployer à l'échelle de l'équipe", duration: '1h', description: "Passer d'une automatisation isolée à une pratique d'équipe.", items: ['Documenter et nommer ses automatisations', 'Définir qui supervise quoi', 'Construire un kit de modèles réutilisables'], exercise: "Rédiger la fiche de gouvernance d'une automatisation prête à déployer." },
]

const OBJECTIVES = [
  "Identifier et prioriser les tâches automatisables à plus fort retour sur investissement",
  "Construire un workflow d'automatisation IA de bout en bout en no-code",
  "Concevoir et superviser un agent IA sur un cas réel de son métier",
  "Connecter ses applications avec Make, Zapier, n8n ou Power Automate",
  "Sécuriser ses automatisations : contrôle humain, confidentialité, RGPD et AI Act",
  "Documenter et déployer ses automatisations pour toute l'équipe",
]

const FAQ = [
  { q: "Faut-il savoir coder pour automatiser avec l'IA ?", a: "Non. La grande majorité des automatisations IA se construisent en no-code, par glisser-déposer, avec des outils comme Make, Zapier, n8n ou Power Automate. La formation est accessible à tous les profils métier, sans aucun prérequis en développement." },
  { q: "Quelle différence entre IA générative et automatisation IA ?", a: "L'IA générative produit du contenu à la demande (un texte, une image, une analyse) lorsque vous la sollicitez. L'automatisation IA déclenche et enchaîne ces actions toute seule à partir d'un événement, par exemple résumer et classer chaque email entrant sans intervention. Les deux se combinent : l'automatisation orchestre, le modèle génératif exécute." },
  { q: "Quels outils d'automatisation IA pour une PME ?", a: "Pour une PME, on démarre souvent avec ChatGPT et des GPTs personnalisés pour les tâches rédactionnelles, Make ou Zapier pour connecter les applications, et Power Automate si l'entreprise est déjà équipée de Microsoft 365. La formation vous aide à choisir selon vos outils existants plutôt qu'à multiplier les abonnements." },
  { q: "L'automatisation IA va-t-elle supprimer des emplois ?", a: "L'automatisation IA prend en charge les tâches répétitives à faible valeur ajoutée et laisse aux équipes l'analyse, la relation et la décision. Les collaborateurs formés redéploient le temps gagné, qui se compte souvent en plusieurs heures par semaine, vers des missions à plus forte valeur." },
  { q: "Combien de temps pour former une équipe à l'automatisation IA ?", a: "Le programme de référence se déroule sur 2 jours (14 heures), avec construction de workflows et d'un agent sur vos vrais cas d'usage. Une version d'une journée est possible pour poser les bases et réaliser ses premiers automatismes. Le format s'adapte à votre niveau de maturité." },
  { q: "La formation automatisation IA est-elle finançable et certifiée Qualiopi ?", a: "Oui. Masteria est certifié Qualiopi, ce qui rend la formation finançable par votre OPCO ou via le plan de développement des compétences. Nous accompagnons gratuitement le montage du dossier de prise en charge." },
]

const RELATED = [
  { label: "Formation multi-outils IA", href: "/formation-multi-outils", tag: "Comparatif", desc: "Comparer ChatGPT, Copilot, Gemini, Claude et Mistral sur vos cas réels." },
  { label: "Formation IA générative", href: "/formation-intelligence-artificielle-generative", tag: "Éditorial", desc: "Maîtriser les modèles qui produisent textes, images et analyses." },
  { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot", tag: "Outil", desc: "Automatiser avec Power Automate dans Microsoft 365." },
  { label: "Quel est le meilleur agent IA ?", href: "/meilleur-agent-ia", tag: "Comparatif", desc: "Le panorama des agents IA pour automatiser des tâches." },
]

const TRAINER = {
  name: 'Mathias Nizan',
  role: 'Fondateur & formateur principal, Masteria',
  quote: "L'intelligence artificielle ne remplace pas les humains. Elle décuple leur potentiel.",
  credentials: ['Expert IA certifié', '+1 500 professionnels formés', 'Fondateur Masteria', 'Certification Qualiopi'],
  bio: "Mathias Nizan a fondé Masteria en 2022 après 10 ans passés à accompagner des entreprises sur leurs enjeux digitaux. Il conçoit et anime des formations à l'automatisation par l'IA : workflows no-code, agents et intégration de l'IA dans les outils métier. Pour ce programme, il s'appuie sur des déploiements réels chez des PME et ETI, avec une exigence constante de sécurité et de conformité.",
}

const WHY_MASTERIA = [
  { icon: '🎯', title: "Spécialisés à 100 % sur l'IA", desc: "Masteria ne fait que ça. Chaque formateur automatise au quotidien dans des contextes professionnels réels. La différence se sent dans les cas choisis et les pièges anticipés." },
  { icon: '📁', title: 'On travaille sur vos tâches', desc: "Zéro cas fictif. Chaque participant automatise ses propres tâches répétitives. Ce qu'on construit en formation tourne encore le lendemain au bureau." },
  { icon: '🛡️', title: 'Automatisation sous contrôle', desc: "Nous intégrons systématiquement la supervision, la traçabilité et la conformité RGPD. Une automatisation maîtrisée, pas une boîte noire." },
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

export default function AutomatisationIAPage() {
  const modulesJ1 = MODULES.filter(m => m.day === 1)
  const modulesJ2 = MODULES.filter(m => m.day === 2)

  const courseData = {
    name: H1,
    description: META_DESC,
    level: 'Tous niveaux',
    duration: 'PT14H',
    timeRequired: 'PT14H',
    price: '1980',
    audience: 'Professionnels en entreprise (B2B)',
    tool: 'Make, Zapier, n8n, Power Automate, GPTs',
    teaches: OBJECTIVES,
    objectives: OBJECTIVES,
    modules: MODULES,
    about: "Formation à l'automatisation des tâches et des workflows par l'IA en entreprise",
    prerequisites: 'Aucun prérequis technique. Maîtrise des outils bureautiques courants.',
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formations IA', slug: 'formation-intelligence-artificielle' },
    { name: 'Automatisation IA', slug: SLUG },
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
            <span style={{ color: c, fontWeight: 600 }}>Automatisation IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Workflow size={16} strokeWidth={2.2} />
              Automatisation IA
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
            La formation <strong>automatisation IA</strong> proposée par Masteria est un programme de <strong>2 jours (14 h)</strong> certifié Qualiopi, dispensé en présentiel ou distanciel. Tarif&nbsp;: <strong>1 980 €/jour</strong>, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel sur mesure. Financement OPCO 100&nbsp;%. Vos équipes repartent avec leurs premiers workflows opérationnels.
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
          { num: '+6 h', label: 'gagnées par semaine' },
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
            Cette formation est conçue pour les professionnels qui veulent automatiser des tâches concrètes, pas suivre une initiation théorique.
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
            Ce que vous allez automatiser
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            Des cas d'usage concrets, travaillés sur vos propres tâches pendant les 2 jours.
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
            14h de formation effective. Chaque module alterne démonstration en direct et exercice sur vos vraies tâches.
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
              Prêt à automatiser les tâches de votre équipe&nbsp;?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24h · Programme adapté à votre contexte · Finançable OPCO
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
                {['2 jours consécutifs ou espacés · 1-to-1', 'Programme co-construit sur vos automatisations', 'Présentiel ou distanciel', 'Suivi entre les sessions'].map(item => (
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
                {['Réservé à votre équipe', '2 jours sur mesure, dans vos locaux', 'Automatisations construites sur vos outils', 'OPCO, plan de développement des compétences'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
            Masteria est certifié Qualiopi. Toutes nos formations sont finançables à 100 % via votre OPCO (Atlas, Afdas, Akto, Constructys, Opco 2i…). Notre équipe vous accompagne dans la constitution du dossier de A à Z. Chaque participant repart avec ses automatisations fonctionnelles et une bibliothèque de modèles prête à l'emploi.
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
            Pourquoi Masteria pour cette formation automatisation IA ?
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
            Questions fréquentes, Formation automatisation IA
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
            Compléter votre parcours ou former vos équipes sur un outil précis.
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
            Parlons de vos tâches à automatiser
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Dites-nous combien de personnes vous souhaitez former et les tâches qui vous coûtent le plus de temps. On revient vers vous sous 24 heures avec un programme adapté sur 2 jours.
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
