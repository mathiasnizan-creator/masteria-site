import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Workflow, BadgeCheck, Wallet, MonitorSmartphone, Building2, Check,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import Pictogram from '../components/Pictogram'

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
  { icon: '\uD83D\uDCE5', title: "Tri et réponses d'emails", desc: "Classez, résumez et préparez automatiquement les réponses aux emails entrants selon des règles claires." },
  { icon: '\uD83D\uDD01', title: "Connexion de vos applications", desc: "Reliez vos outils entre eux avec Make, Zapier ou n8n et injectez de l'IA à chaque étape du flux." },
  { icon: '\uD83E\uDD16', title: "Création d'un agent IA", desc: "Concevez un GPT personnalisé ou un agent qui enchaîne plusieurs étapes pour atteindre un objectif." },
  { icon: '\uD83D\uDCCA', title: "Reporting industrialisé", desc: "Transformez des données brutes en rapport commenté, généré et diffusé automatiquement chaque semaine." },
  { icon: '\uD83E\uDDE9', title: "Automatisation Microsoft 365", desc: "Automatisez vos flux Outlook, Teams, Excel et SharePoint avec Copilot et Power Automate." },
  { icon: '\uD83D\uDEE1\uFE0F', title: "Supervision et conformité", desc: "Gardez un contrôle humain sur les décisions sensibles et mettez vos automatisations en conformité RGPD." },
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
  { q: "Faut-il savoir coder pour automatiser avec l'IA ?", a: "Non. La grande majorité des automatisations IA se construisent en no-code, par glisser-déposer, avec des outils comme Make, Zapier, n8n ou Power Automate. La formation est accessible à tous les profils métier, sans aucun prérequis en développement. Les deux premiers paliers décrits sur cette page, fonctions natives de vos outils puis plateformes d'orchestration, se pratiquent entièrement sans code ; seul le développement sur mesure mobilise un développeur." },
  { q: "Quelle différence entre IA générative et automatisation IA ?", a: "L'IA générative produit du contenu à la demande (un texte, une image, une analyse) lorsque vous la sollicitez. L'automatisation IA déclenche et enchaîne ces actions toute seule à partir d'un événement, par exemple résumer et classer chaque email entrant sans intervention. Les deux se combinent : l'automatisation orchestre, le modèle génératif exécute." },
  { q: "Quels outils d'automatisation IA pour une PME ?", a: "Pour une PME, on démarre souvent avec ChatGPT et des GPTs personnalisés pour les tâches rédactionnelles, Make ou Zapier pour connecter les applications, et Power Automate si l'entreprise est déjà équipée de Microsoft 365. La formation vous aide à choisir selon vos outils existants plutôt qu'à multiplier les abonnements." },
  { q: "L'automatisation IA va-t-elle supprimer des emplois ?", a: "L'automatisation IA prend en charge les tâches répétitives à faible valeur ajoutée et laisse aux équipes l'analyse, la relation et la décision. Les collaborateurs formés redéploient le temps gagné, qui se compte souvent en plusieurs heures par semaine, vers des missions à plus forte valeur." },
  { q: "Combien de temps pour former une équipe à l'automatisation IA ?", a: "Le programme de référence se déroule sur 2 jours (14 heures), avec construction de workflows et d'un agent sur vos vrais cas d'usage. Une version d'une journée est possible pour poser les bases et réaliser ses premiers automatismes. Le format s'adapte à votre niveau de maturité." },
  { q: "Combien de temps faut-il pour une première automatisation utile ?", a: "Une journée de formation en installe déjà. Dès le module 3, chaque participant construit un flux complet sur un cas apporté de son poste, comme le tri et le résumé des emails entrants vers un tableau de suivi. La deuxième journée consolide l'ensemble : agent supervisé, garde-fous, documentation et déploiement à l'équipe." },
  { q: "Que devient l'automatisation si l'outil change ?", a: "Le travail de fond survit au changement d'outil. Une procédure formalisée, avec son déclencheur, ses étapes, ses règles et ses points de validation, se transpose d'une plateforme à l'autre : la reconstruire dans un nouvel outil va vite quand la logique est documentée. La formation insiste sur la cartographie et la documentation autant que sur la prise en main des outils, précisément pour rendre vos automatisations transportables." },
  { q: "Formation ou prestation d'automatisation : comment choisir ?", a: "La formation rend votre équipe autonome sur les deux premiers paliers, fonctions natives et plateformes d'orchestration, appliqués à vos propres cas. La prestation prend le relais quand le flux est critique, volumineux ou qu'il doit écrire dans un logiciel métier : notre équipe conçoit alors l'automatisation pour vous, comme un projet cadré. Les deux se combinent bien, la formation permettant ensuite à vos équipes de faire vivre ce qui a été livré." },
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
  { icon: '\uD83C\uDFAF', title: "Spécialisés à 100 % sur l'IA", desc: "Masteria ne fait que ça. Chaque formateur automatise au quotidien dans des contextes professionnels réels. La différence se sent dans les cas choisis et les pièges anticipés." },
  { icon: '\uD83D\uDCC1', title: 'On travaille sur vos tâches', desc: "Zéro cas fictif. Chaque participant automatise ses propres tâches répétitives. Ce qu'on construit en formation tourne encore le lendemain au bureau." },
  { icon: '\uD83D\uDEE1\uFE0F', title: 'Automatisation sous contrôle', desc: "Nous intégrons systématiquement la supervision, la traçabilité et la conformité RGPD. Une automatisation maîtrisée, pas une boîte noire." },
  { icon: '\uD83D\uDCB3', title: 'Financement intégral possible', desc: "Notre certification Qualiopi rend la formation éligible au financement OPCO. Masteria prend en charge le montage du dossier de A à Z." },
]

const AUTOMATION_CASES = [
  { icon: '\uD83D\uDCE1', title: 'La veille récurrente livrée chaque semaine', desc: "Surveiller vos sources (presse spécialisée, concurrents, réglementation), écarter le bruit, puis livrer une synthèse hiérarchisée chaque semaine dans la boîte mail ou le canal de l'équipe. Le lecteur garde la décision de ce qui mérite une action." },
  { icon: '\uD83D\uDCC8', title: 'Le rapport périodique pré-rempli', desc: "Partir de l'export de votre outil (ventes, production, support), calculer les indicateurs et pré-remplir le commentaire dans votre gabarit. Le responsable relit les chiffres, ajuste l'analyse et diffuse : la lecture finale reste la sienne." },
  { icon: '\uD83D\uDCEC', title: 'Le tri des demandes entrantes', desc: "Classer chaque demande reçue par nature et par urgence, la résumer, rassembler les éléments du dossier et préparer un brouillon de réponse. La relecture humaine avant toute réponse est une étape du flux à part entière." },
  { icon: '\uD83D\uDCC4', title: 'Les documents répétitifs depuis un gabarit', desc: "Générer comptes rendus, courriers types, fiches ou réponses à questionnaires depuis un gabarit approuvé, alimenté par les données du dossier. Le contenu s'adapte à chaque cas, la structure reste conforme à vos modèles." },
  { icon: '\uD83D\uDD17', title: 'Du document entrant au brouillon de réponse', desc: "Une facture, une réclamation ou une candidature arrive ; les champs utiles sont extraits, rapprochés du dossier existant, et un brouillon de réponse ou de saisie attend la validation d'un humain avant d'aller plus loin." },
]

const PITFALLS = [
  { num: 'Erreur 1', title: 'Automatiser un processus flou', desc: "Quand personne ne sait décrire les étapes, les exceptions et les responsables, l'automatisation reproduit le désordre en plus rapide. On formalise la procédure d'abord, on automatise ensuite ; c'est le travail de cartographie du module 2." },
  { num: 'Erreur 2', title: "Aucune relecture sur ce qui part à l'extérieur", desc: "Relire un brouillon avant envoi prend quelques instants ; une réponse erronée partie chez un client se rattrape mal. Tout ce qui sort (email, devis, réponse à un candidat) passe par une validation humaine inscrite comme une étape du flux." },
  { num: 'Erreur 3', title: "L'automatisation orpheline", desc: "Un flux dont l'auteur a quitté l'entreprise continue de tourner et personne n'ose y toucher. Chaque automatisation reçoit un propriétaire nommé, une fiche qui documente déclencheur, étapes et accès, et une date de revue ; le module 8 installe cette gouvernance." },
  { num: 'Erreur 4', title: 'Ne jamais mesurer le temps gagné', desc: "Sans mesure, pas d'arbitrage : impossible de dire quels flux maintenir, étendre ou arrêter. On note le temps que prend la tâche manuelle avant d'automatiser, on mesure après, et la revue périodique tranche sur des faits plutôt que sur des impressions." },
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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
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
                <div style={{ marginBottom: 12 }}><Pictogram emoji={uc.icon} tile size={26} /></div>
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

      {/* ── CE QU'ON AUTOMATISE VRAIMENT ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Ce qu'on automatise vraiment (et ce qu'on n'automatise pas)
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720, lineHeight: 1.7 }}>
            Cinq chaînes reviennent dans la grande majorité des entreprises. Leur point commun : un déclencheur clair, des étapes qu'on sait décrire et une relecture humaine placée au bon endroit. Ce sont elles que vous construisez pendant la formation, sur vos propres cas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
            {AUTOMATION_CASES.map((ac, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ marginBottom: 12 }}><Pictogram emoji={ac.icon} tile size={26} /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{ac.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{ac.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#0A0F1E', borderRadius: 12, padding: '28px 32px', marginBottom: 28 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 10 }}>La limite</div>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#F8FAFC', margin: '0 0 10px' }}>Tout ce qui engage reste à l'humain</h3>
            <p style={{ fontSize: 14.5, color: '#94A3B8', lineHeight: 1.75, margin: 0 }}>
              L'envoi d'un message, la validation d'un montant, une décision qui concerne une personne : ces gestes restent hors du flux automatique, quel que soit l'outil. Quant à l'écriture dans un logiciel métier (CRM, ERP, comptabilité, paie), elle demande des accès, des tests et une responsabilité claire : un projet d'intégration à part entière, chiffré et cadré comme tel. Cette frontière est posée dès le module 1, et chaque automatisation construite pendant les 2 jours la respecte.
            </p>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
            La première chaîne est détaillée pas à pas dans notre guide pour{' '}
            <Link to="/automatiser-sa-veille-ia" style={{ color: c, fontWeight: 600 }}>automatiser sa veille IA</Link>. Pour replacer l'ensemble dans une démarche complète, du cadrage au déploiement, notre{' '}
            <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>guide de l'automatisation IA en entreprise</Link>{' '}
            déroule la méthode que nous appliquons en formation.
          </p>
        </div>
      </section>

      {/* ── PALIERS D'AUTOMATISATION ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Choisir son niveau d'automatisation
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720, lineHeight: 1.7 }}>
            Trois paliers couvrent l'essentiel des besoins. La règle enseignée en formation tient en une phrase : le bon palier est le plus simple qui tient le besoin. On monte d'un palier parce que le flux l'exige, jamais par attrait pour l'outil.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>1</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Les fonctions natives des outils déjà en place</h3>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Avant d'ajouter un abonnement, on inventorie ce que vos licences couvrent déjà. ChatGPT Business inclut des tâches planifiées, créées en une phrase et limitées à une exécution par heure, et des agents d'espace de travail dont les exécutions sont décomptées en crédits, donc à budgéter. Côté Google, Workspace Studio construit des automatisations sans code à travers Gmail, Docs, Sheets et Drive. Vibe (anciennement Le Chat) propose des Workflows et des Tâches planifiées. Sous Microsoft 365, Power Automate relie Outlook, Teams, Excel et SharePoint. Ce palier suffit quand le besoin vit dans un environnement unique ; notre page sur les{' '}
                <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>{' '}
                compare ces briques en détail.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>2</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Les plateformes d'orchestration</h3>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Quand le flux traverse plusieurs applications, une boîte mail, un tableur, un CRM consulté en lecture, un outil de gestion de projet, on passe par une plateforme d'orchestration comme Make, Zapier ou n8n. Elle écoute un événement déclencheur, enchaîne des étapes dans vos applications et appelle un modèle d'IA au milieu du flux pour lire, résumer, classer ou rédiger. Chaque étape reste visible, testable et modifiable par un profil métier formé. C'est le palier construit au module 3, puis fiabilisé au module 7.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>3</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Le développement sur mesure</h3>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Quand le flux est critique, parce qu'il touche la facturation, des données clients ou une obligation réglementaire, quand les volumes dépassent ce qu'une plateforme absorbe proprement, ou quand il faut écrire dans un logiciel métier, on sort du no-code. Copilot Studio, côté Microsoft, bascule dans cette catégorie dès que l'agent écrit dans le système d'information : c'est un projet, avec son cadrage, ses tests et son budget. Notre{' '}
                <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>agence d'automatisation IA</Link>{' '}
                conçoit et opère ces flux ; pour un besoin que les plateformes du marché ne couvrent pas, nos{' '}
                <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link>{' '}
                prennent le relais.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
            En formation, chaque participant positionne ses cas prioritaires sur ces trois paliers avant de construire : c'est l'objet du module 2. Ce classement décide de l'outil, du niveau de garde-fous et du temps à investir sur chaque flux.
          </p>
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
                  <Check size={14} color="#fff" strokeWidth={3} aria-hidden="true" />
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
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={16} color={c} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }} /><span>{item}</span>
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
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={16} color={c} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }} /><span>{item}</span>
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
                <div style={{ marginBottom: 12 }}><Pictogram emoji={card.icon} tile size={26} /></div>
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

      {/* ── ERREURS DES PROJETS D'AUTOMATISATION ── */}
      <section style={{ padding: '80px 40px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Les erreurs des projets d'automatisation
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720, lineHeight: 1.7 }}>
            Quatre erreurs expliquent la plupart des automatisations abandonnées en entreprise. Chacune a sa parade, et le programme les traite l'une après l'autre.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {PITFALLS.map(pf => (
              <div key={pf.num} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{pf.num}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{pf.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{pf.desc}</p>
              </div>
            ))}
          </div>
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

      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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

      <FounderNote />

      <OfficialSources />
    </>
  )
}
