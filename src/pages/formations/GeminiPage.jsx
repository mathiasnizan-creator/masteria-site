import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck, Wallet, MonitorSmartphone, Building2, Check } from 'lucide-react'
import SEOHead from '../../components/SEOHead'
import Pictogram from '../../components/Pictogram'

const COLOR = '#ea4335'
const COLOR_LIGHT = '#fee2e2'

const MODULES = [
  {
    title: "Module 1, Comprendre l'écosystème Gemini de Google",
    duration: '1 h 30',
    intro: "Avant de commencer à utiliser Gemini, il faut savoir à quoi on a affaire. Gemini.google.com, Gemini for Workspace, NotebookLM, Google AI Studio : ce ne sont pas les mêmes outils et ils ne servent pas aux mêmes choses. Ce module clarifie le terrain.",
    items: [
      "Les différences entre Gemini 2.0 Flash et Gemini 2.5 Pro : quand utiliser l'un plutôt que l'autre",
      "Comment Google traite vos données dans Gemini for Workspace (RGPD, politique de non-utilisation pour l'entraînement des modèles)",
      "Les limites à connaître : inexactitudes factuelles, données en temps réel, informations sensibles",
    ],
    outcome: "Choisir le bon outil Gemini selon leur besoin. Répondre aux questions de leur DSI sur la confidentialité des données.",
  },
  {
    title: 'Module 2, Formuler des demandes qui donnent de bons résultats',
    duration: '2 h',
    intro: "La qualité d'une réponse Gemini dépend presque entièrement de la façon dont on lui pose la question. Ce module est celui qui change le plus les habitudes.",
    items: [
      "La structure d'une demande efficace : rôle, contexte, tâche, format, contraintes",
      "Demandes simples et demandes enchaînées : quand utiliser l'une plutôt que l'autre",
      "Demander à Gemini de se corriger, de proposer des variantes, de raisonner par étapes",
      "Adapter les instructions selon son métier",
      "40 prompts professionnels prêts à l'emploi (inclus dans le support de formation)",
    ],
    exercise: "Chaque participant rédige 5 demandes liées à ses propres tâches et les teste en direct.",
  },
  {
    title: 'Module 3, Gemini dans Gmail et Google Meet',
    duration: '1 h 30',
    intro: "Gmail est l'endroit où le gain de temps est le plus rapide à mesurer. Ce module travaille sur les e-mails réels des participants.",
    items: [
      'Résumer un fil de discussion en quelques secondes',
      "Rédiger une réponse à partir d'une instruction courte",
      "Ajuster le ton d'un message sans le réécrire entièrement",
      'Utiliser le panneau latéral Gemini pendant la rédaction',
      'Configurer les résumés automatiques de réunions Meet',
    ],
    situation: "Un responsable commercial gère 80 e-mails par jour. Après ce module, il traite les deux tiers en deux fois moins de temps grâce aux résumés et aux réponses assistées.",
  },
  {
    title: 'Module 4, Gemini dans Google Docs',
    duration: '1 h 30',
    intro: "Google Docs est l'outil de rédaction central de l'écosystème Google. Ce module l'utilise comme terrain d'entraînement principal.",
    items: [
      "Générer un premier jet à partir d'un brief ou d'une liste de points",
      'Reformuler, développer ou condenser un texte existant',
      'Changer le registre d\'un document : rapport formel, note interne, message client',
      'Comparer deux versions d\'un texte et choisir la meilleure',
      'Créer des modèles de documents réutilisables pour toute l\'équipe',
      'Traduire et adapter un contenu pour un public international',
    ],
    exercise: "Transformer cinq points épars en une note de synthèse de deux pages, puis en un e-mail client de 150 mots.",
  },
  {
    title: 'Module 5, Gemini dans Google Sheets',
    duration: '1 h 30',
    intro: "Sheets est souvent redouté des collaborateurs qui ne viennent pas d'une culture chiffres. Gemini change ça.",
    items: [
      'Générer des formules en langage naturel : "calcule la moyenne des trois meilleurs mois"',
      'Analyser et interpréter un tableau de données',
      "Créer un tableau structuré à partir d'une description textuelle",
      'Nettoyer des données : doublons, formats incohérents, valeurs manquantes',
      'Faire commenter un graphique par Gemini',
    ],
    situation: "Une responsable RH analyse les résultats de son enquête satisfaction en moins de 15 minutes, sans toucher à une seule formule.",
  },
  {
    title: 'Module 6, Gemini dans Google Slides',
    duration: '1 h',
    intro: "Préparer une présentation prend du temps. Ce module réduit ce temps de façon significative.",
    items: [
      "Générer le plan d'une présentation à partir d'un sujet ou d'un document existant",
      "Rédiger le contenu de chaque slide à partir d'une instruction",
      'Générer des images IA directement dans Slides',
      "Améliorer la cohérence visuelle et éditoriale d'une présentation existante",
    ],
    exercise: "Créer une présentation de 10 slides à partir d'un document en moins de 20 minutes.",
  },
  {
    title: 'Module 7, NotebookLM : travailler avec ses propres documents',
    duration: '1 h',
    intro: "NotebookLM est peu connu. C'est regrettable, parce que c'est l'un des outils les plus utiles de l'écosystème Google pour les équipes qui travaillent avec beaucoup de documents internes.",
    items: [
      "Ce qui distingue NotebookLM de Gemini standard : il ne répond qu'à partir des sources que vous lui donnez",
      'Importer ses propres documents (rapports, contrats, études) et poser des questions sur leur contenu',
      'Générer des résumés audio à partir de documents pour les écouter en déplacement',
      'Créer des cartes mentales et des synthèses automatiques',
      "Cas d'usage concrets : veille concurrentielle, onboarding de nouveaux collaborateurs, documentation interne",
    ],
  },
  {
    title: 'Module 8, Agents Gemini et automatisation (niveau avancé)',
    duration: '1 h 30',
    badge: 'Inclus en formule 2 jours',
    intro: "Un agent IA Gemini, c'est un assistant configuré une fois pour accomplir une série de tâches précises sans intervention humaine à chaque étape. Ce module apprend à en construire un sans écrire une ligne de code.",
    items: [
      'Créer un agent personnalisé dans Gemini for Workspace',
      'Connecter Gemini à ses outils métiers (Google Drive, Salesforce, SAP, Microsoft 365)',
      'Automatiser des tâches récurrentes : traitement de formulaires, génération de rapports, premières réponses clients',
      'Gouvernance et contrôle : droits d\'accès, traçabilité, gestion des données sensibles',
    ],
  },
]

const FAQ = [
  {
    q: "Faut-il déjà avoir un abonnement Google Workspace pour suivre la formation ?",
    a: "La plupart des fonctionnalités avancées de Gemini nécessitent un abonnement Google Workspace Business Standard ou supérieur. Si votre organisation utilise encore la version gratuite de Gmail, vous pouvez tout de même suivre la formation avec Gemini.google.com. Lors de l'appel de cadrage, votre formateur vous conseille sur l'abonnement adapté à la taille de votre équipe.",
  },
  {
    q: "Quelle est la différence entre Gemini et ChatGPT ?",
    a: "Les deux outils sont très proches en termes de capacités. Ce qui les distingue, c'est l'intégration : Gemini est directement dans Gmail, Google Docs, Sheets, Slides et Drive. Si votre équipe travaille dans l'environnement Google, Gemini s'intègre le plus naturellement dans ses habitudes. ChatGPT s'articule mieux avec Microsoft 365. Masteria forme à ces deux outils. Votre formateur peut vous aider à choisir selon votre organisation.",
  },
  {
    q: "La formation Google Gemini est-elle vraiment finançable OPCO ?",
    a: "Oui, intégralement. La certification Qualiopi de Masteria rend toutes nos formations éligibles au financement OPCO. Selon votre secteur, vous pouvez financer la totalité du coût via Atlas, Constructys, Uniformation, Opcommerce ou votre propre OPCO. Notre équipe vous accompagne dans la constitution du dossier de A à Z.",
  },
  {
    q: "Peut-on former plusieurs équipes de métiers différents ?",
    a: "Oui, et c'est souvent la meilleure façon de procéder. Masteria organise des sessions séparées par fonction : une pour les RH, une autre pour le marketing, une autre pour la finance. Chaque groupe travaille sur ses propres cas d'usage. Si vous avez plusieurs équipes à former, contactez-nous pour construire un plan de déploiement adapté à votre calendrier.",
  },
  {
    q: "Quelle durée choisir pour la formation Google Gemini ?",
    a: "Une journée couvre les modules 1 à 6, soit Gmail, Docs, Sheets, Slides et les bases du prompt. C'est suffisant pour une initiation complète et un usage autonome dès le lendemain. Deux jours permettent d'ajouter NotebookLM et les agents IA. Pour les équipes qui ont déjà utilisé Gemini, un format d'une journée centré sur les cas d'usage avancés de leur métier est également disponible.",
  },
  {
    q: "La formation est-elle disponible à distance ?",
    a: "Toutes nos formations Google Gemini sont disponibles en présentiel et en distanciel. Le format distanciel convient bien aux équipes dispersées géographiquement ou aux organisations en télétravail partiel. La qualité pédagogique ne change pas : les exercices sur les fichiers des participants fonctionnent aussi bien via partage d'écran.",
  },
  {
    q: "Combien de temps après la formation les équipes commencent-elles à utiliser Gemini au quotidien ?",
    a: "La plupart de nos participants utilisent Gemini dès le lendemain. Gmail et Docs produisent les résultats les plus immédiats. Nos participants nous rapportent un gain moyen de 1 h 30 par jour dans les deux premières semaines, essentiellement sur la rédaction et le traitement des e-mails.",
  },
]

const RELATED = [
  { slug: 'formation-gemini-marketing', label: 'Gemini pour le Marketing', desc: 'Briefs de campagne, idées de contenu, analyse de performances avec NotebookLM.' },
  { slug: 'formation-gemini-ressources-humaines', label: 'Gemini pour les RH', desc: 'Rédaction de fiches de poste, tri de candidatures, préparation d\'entretiens.' },
  { slug: 'formation-gemini-finance', label: 'Gemini pour la Finance', desc: 'Rapports Sheets automatisés, analyse de documents comptables, synthèses financières.' },
  { slug: 'formation-gemini-commercial', label: 'Gemini pour les Commerciaux', desc: 'Argumentaires de vente, propositions personnalisées, préparation des rendez-vous clients.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span style={{ fontSize: 20, color: COLOR, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function GeminiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Formation Google Gemini en entreprise',
    description: "Formation certifiée Qualiopi pour maîtriser Google Gemini et l'IA intégrée à Google Workspace. Conçue pour les équipes marketing, RH, finance et commercial.",
    url: 'https://www.master-ia.fr/formation-gemini-entreprise',
    provider: { '@type': 'Organization', name: 'Masteria', url: 'https://www.master-ia.fr' },
    educationalLevel: 'Débutant à intermédiaire',
    teaches: 'Utilisation professionnelle de Google Gemini et Google Workspace IA',
    courseMode: ['onsite', 'online'],
    inLanguage: 'fr',
    hasCourseInstance: [
      { '@type': 'CourseInstance', courseMode: 'onsite', name: 'Formation intra-entreprise', offers: { '@type': 'Offer', price: '1980', priceCurrency: 'EUR' } },
      { '@type': 'CourseInstance', courseMode: 'online', name: 'Accompagnement individuel sur mesure', offers: { '@type': 'Offer', price: '1980', priceCurrency: 'EUR' } },
    ],
  }

  return (
    <>
      <SEOHead
        title="Formation Google Gemini en entreprise | Masteria, Qualiopi"
        description="Vos équipes maîtrisent Google Gemini et Workspace IA en 1 à 2 jours. Formation certifiée Qualiopi, 100 % finançable OPCO. Présentiel et distanciel partout en France."
        slug="formation-gemini-entreprise"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO clair */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 80, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#6B7280' }}>Formations IA</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: COLOR, fontWeight: 600 }}>Google Gemini</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: COLOR_LIGHT, color: COLOR, padding: '6px 16px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 24 }}>
            <Pictogram emoji="💎" size={15} color={COLOR} /> Google Gemini
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            Formation Google Gemini<br />en entreprise
          </h1>

          <p style={{ fontSize: 18, color: '#4B5563', lineHeight: 1.75, marginBottom: 40, maxWidth: 680 }}>
            Vos équipes utilisent déjà Gmail, Google Docs et Google Sheets. Cette formation leur apprend à y intégrer Gemini concrètement, sur leurs propres fichiers, avec un formateur dédié à leur métier. Certifiée Qualiopi, finançable à 100 % via votre OPCO.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: COLOR, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${COLOR}30` }}>
              Contacter notre équipe →
            </Link>
            <a href="#tarifs" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir les tarifs
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: BadgeCheck,        label: 'Certifié Qualiopi' },
              { icon: Wallet,            label: 'Finançable OPCO' },
              { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
              { icon: Building2,         label: 'Intra ou accompagnement individuel' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} style={{ color: COLOR }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '40px', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
        {[
          { num: '+1 500', label: 'professionnels formés à l\'IA' },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '100 %', label: 'finançable via votre OPCO' },
          { num: '+6 h', label: 'gagnées par semaine' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* INTRODUCTION */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 32 }}>
            Pourquoi former vos équipes à Google Gemini ?
          </h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 20 }}>
            Gemini est présent dans Gmail, Google Docs, Google Sheets, Google Slides et Google Meet depuis plus d'un an. La plupart des collaborateurs qui travaillent avec ces outils ne s'en servent presque pas. Pas parce qu'ils ne sont pas intéressés. Parce que personne ne leur a montré ce que ça change vraiment dans leur travail.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 20, fontWeight: 600 }}>
            C'est exactement ce que fait cette formation.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.85 }}>
            En une ou deux journées, vos équipes apprennent à utiliser Gemini sur leurs propres fichiers, dans leurs propres outils, pour leurs propres tâches. Pas une démonstration vue sur un écran de formateur. Leurs e-mails, leurs rapports, leurs tableaux Sheets. Ils repartent avec 40 prompts prêts à l'emploi et un usage qu'ils réutilisent dès le lendemain matin.
          </p>
        </div>
      </section>

      {/* À QUI S'ADRESSE */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            À qui s'adresse la formation Google Gemini ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '🏢',
                title: 'Les équipes qui travaillent déjà avec Google Workspace',
                desc: "Votre organisation utilise Gmail, Google Docs ou Google Drive ? Gemini est déjà dans ces outils. Vos collaborateurs ont juste besoin d'apprendre à s'en servir. Cette formation est la suite naturelle de ce qu'ils font déjà tous les jours.",
              },
              {
                icon: '📊',
                title: 'Les managers qui veulent piloter l\'adoption IA',
                desc: "Comprendre ce que Gemini sait faire, identifier les trois ou quatre tâches où le gain de temps est immédiat, savoir quoi demander à son OPCO. Cette formation donne les moyens de décider et d'embarquer une équipe, pas juste de suivre.",
              },
              {
                icon: '👔',
                title: 'Les fonctions support et métiers',
                desc: "Marketing, RH, finance, communication, assistanat de direction, commercial. Chaque métier a ses propres cas d'usage. Le formateur adapte le programme à la fonction de chaque groupe. Une session RH et une session finance ne se ressemblent pas.",
              },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB' }}>
                <div style={{ marginBottom: 12 }}><Pictogram emoji={c.icon} tile size={26} /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', marginTop: 24, fontStyle: 'italic' }}>
            Aucune connaissance en IA requise. Savoir utiliser Gmail et Google Docs suffit.
          </p>
        </div>
      </section>

      {/* PROGRAMME */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Programme de la formation Google Gemini entreprise
          </h2>
          <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 48, lineHeight: 1.7 }}>
            La formation dure 1 à 2 jours selon le niveau et les besoins de votre équipe. Chaque module alterne une partie théorique courte, une démonstration en direct et un exercice sur les vrais fichiers des participants.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {MODULES.map((mod, i) => (
              <div key={i} style={{ borderLeft: `4px solid ${COLOR}`, paddingLeft: 28, paddingTop: 4 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{mod.title}</h3>
                  <span style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{mod.duration}</span>
                  {mod.badge && <span style={{ background: '#F3F4F6', color: '#6B7280', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 99 }}>{mod.badge}</span>}
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 14 }}>{mod.intro}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {mod.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151' }}>
                      <span style={{ color: COLOR, fontWeight: 700, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {mod.outcome && (
                  <p style={{ fontSize: 13, color: '#374151', background: COLOR_LIGHT, borderRadius: 6, padding: '8px 14px', margin: 0 }}>
                    <strong>Après ce module :</strong> {mod.outcome}
                  </p>
                )}
                {mod.exercise && (
                  <p style={{ fontSize: 13, color: '#374151', background: '#F0FDF4', borderRadius: 6, padding: '8px 14px', margin: 0 }}>
                    <strong>Exercice :</strong> {mod.exercise}
                  </p>
                )}
                {mod.situation && (
                  <p style={{ fontSize: 13, color: '#374151', background: '#FEF9C3', borderRadius: 6, padding: '8px 14px', margin: 0 }}>
                    <strong>Situation concrète :</strong> {mod.situation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 32 }}>
            Ce que vos équipes savent faire à la fin de la formation
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Utilise Gemini seul dans tous ses outils Google Workspace au quotidien',
              'Formule des demandes précises adaptées à son métier et obtient des résultats utilisables',
              'Gagne en moyenne 1 h 30 par jour sur les tâches de rédaction, d\'analyse et de synthèse',
              'Choisit entre Gemini, NotebookLM et Google AI Studio selon ce qu\'il cherche à faire',
              'Sait expliquer la politique de confidentialité des données à son responsable ou à son DSI',
            ].map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 26, height: 26, background: COLOR, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Check size={14} color="#fff" strokeWidth={3} />
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Modalités et tarifs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 32 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: `2px solid ${COLOR}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLOR, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>INTRA-ENTREPRISE</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 4 }}>1 980 €</div>
              <div style={{ fontSize: 14, color: '#6B7280', marginBottom: 16 }}>/ jour (jusqu'à 12 participants)</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Réservé à votre équipe', '1 ou 2 jours', 'Dans vos locaux ou distanciel', 'OPCO, plan de développement des compétences'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <Check size={15} color={COLOR} strokeWidth={3} style={{ flexShrink: 0, marginTop: 2 }} />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#F9FAFB', borderRadius: 12, padding: 32, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>ACCOMPAGNEMENT INDIVIDUEL</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 4 }}>1 980 €</div>
              <div style={{ fontSize: 14, color: '#6B7280', marginBottom: 16 }}>/ jour (coaching 1-to-1)</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Programme sur mesure', 'Rythme adapté', 'Présentiel ou distanciel', 'Suivi entre les sessions'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <Check size={15} color={COLOR} strokeWidth={3} style={{ flexShrink: 0, marginTop: 2 }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, maxWidth: 700 }}>
            Masteria est certifié Qualiopi pour les actions de formation. Toutes nos formations sont finançables à 100 % via votre OPCO. Notre équipe vous accompagne dans la constitution du dossier. Chaque participant repart avec un support de formation complet et les 40 prompts professionnels prêts à l'emploi.
          </p>
        </div>
      </section>

      {/* POURQUOI MASTERIA */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Pourquoi Masteria pour la formation Google Gemini ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
            {[
              { icon: '🎯', title: 'Nos formateurs utilisent Gemini tous les jours', desc: "Masteria est spécialisé à 100 % sur l'IA. Nos formateurs utilisent Gemini dans leur propre travail avant de l'enseigner. La différence se sent dans les exemples qu'ils choisissent et les pièges qu'ils vous évitent." },
              { icon: '📁', title: 'On travaille sur vos fichiers, pas sur des cas fictifs', desc: "Chaque session s'appuie sur les documents réels de vos participants : leurs e-mails, leurs rapports, leurs tableaux. Ce que vos collaborateurs apprennent le matin, ils le réutilisent l'après-midi." },
              { icon: '👥', title: 'Le programme s\'adapte au métier de chaque groupe', desc: "Un groupe RH et un groupe commercial ne reçoivent pas la même formation. Les cas d'usage, les exercices et les prompts sont construits autour de leurs vraies missions. C'est ce qui explique nos 98 % de satisfaction." },
              { icon: '💳', title: 'Le financement ne doit pas être un obstacle', desc: "Notre certification Qualiopi rend toutes nos formations éligibles au financement OPCO. Selon votre secteur, vous pouvez couvrir l'intégralité du coût. On s'occupe du dossier avec vous." },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ marginBottom: 12 }}><Pictogram emoji={c.icon} tile size={26} /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <blockquote style={{ borderLeft: `4px solid ${COLOR}`, paddingLeft: 24, margin: 0 }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 700, color: '#0A0A0A', fontStyle: 'italic', marginBottom: 8 }}>
              "L'intelligence artificielle ne remplace pas les humains. Elle décuple leur potentiel."
            </p>
            <cite style={{ fontSize: 14, color: '#6B7280', fontStyle: 'normal' }}>Mathias Nizan, fondateur de Masteria</cite>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Questions fréquentes sur la formation Google Gemini en entreprise
          </h2>
          <div>
            {FAQ.map((item, i) => <FAQItem key={i} {...item} />)}
          </div>
        </div>
      </section>

      {/* MAILLAGE INTERNE */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Formation Google Gemini par métier
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32 }}>
            Cette page présente le programme transversal. Si votre équipe a un métier précis, les formations suivantes sont construites autour de ses cas d'usage spécifiques.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
            {RELATED.map(r => (
              <Link key={r.slug} to={`/${r.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 10, padding: 20, border: `2px solid ${COLOR}20`, transition: 'border-color 0.2s' }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{r.label}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 10 }}>{r.desc}</p>
                  <span style={{ color: COLOR, fontSize: 13, fontWeight: 700 }}>Voir le programme →</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280' }}>
            Vous utilisez d'autres outils IA ? Masteria forme également vos équipes à{' '}
            <Link to="/formation-chatgpt" style={{ color: '#10a37f', fontWeight: 600 }}>ChatGPT</Link>
            {' '}et à{' '}
            <Link to="/formation-microsoft-copilot" style={{ color: '#0078d4', fontWeight: 600 }}>Microsoft Copilot</Link>.
          </p>
        </div>
      </section>

      {/* CTA FINALE */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de votre équipe
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Dites-nous combien de personnes vous souhaitez former, leurs métiers et leur niveau actuel avec Gemini. On revient vers vous sous 24 heures avec un programme adapté.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: '#2563EB', color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Formation certifiée Qualiopi · Finançable OPCO · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>
    </>
  )
}
