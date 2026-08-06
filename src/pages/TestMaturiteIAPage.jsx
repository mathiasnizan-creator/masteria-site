import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, Compass, Gauge, RefreshCw, Rocket, Sprout,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/*
 * « Test de maturité IA » — outil gratuit liable (autorité + leads diagnostic).
 * 8 questions fermées, score 0-24, 4 profils avec recommandations honnêtes.
 * INTÉGRITÉ : le test qualifie une situation, il ne promet aucun chiffre ;
 * les recommandations pointent vers les offres réelles (diagnostic, formation,
 * conseil). Les 4 profils sont rendus statiquement sous le questionnaire :
 * contenu crawlable et citable sans interaction (prerender + GEO).
 */

const c = '#2563EB'
const SECTION_PAD = 'clamp(56px, 8vw, 90px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 26 }

/* 8 dimensions, 4 réponses graduées (0 à 3 points). */
const QUESTIONS = [
  { q: "Aujourd'hui, vos équipes utilisent l'IA générative…", opts: ['Pas du tout, ou en cachette', 'Quelques personnes, à titre personnel', 'Une partie des équipes, sans cadre commun', 'Largement, avec des pratiques partagées'] },
  { q: 'Les comptes et outils IA de votre entreprise sont…', opts: ["Inexistants : chacun utilise des comptes gratuits personnels", 'Quelques abonnements payés individuellement', 'Des licences pro sur une partie des équipes', "Des licences d'entreprise déployées et administrées"] },
  { q: "La formation des équipes à l'IA…", opts: ["N'a pas commencé", 'Quelques autodidactes se débrouillent', 'Une première session a eu lieu', 'Un parcours structuré existe, par métier ou par niveau'] },
  { q: "Les cas d'usage IA de votre activité sont…", opts: ['Pas identifiés', 'Évoqués, jamais listés sérieusement', 'Cartographiés sur une ou deux équipes', 'Cartographiés et priorisés par valeur'] },
  { q: "Le cadre d'usage (charte, règles de confidentialité)…", opts: ["N'existe pas", 'En réflexion', 'Une charte existe, peu connue des équipes', 'Charte diffusée, appliquée et mise à jour'] },
  { q: 'La confidentialité des données dans les outils IA…', opts: ["Personne ne s'est posé la question", 'Des consignes orales, au cas par cas', 'Des règles écrites sur ce qui peut y entrer', 'Des règles écrites, outillées (comptes pro, données exclues de l\'entraînement)'] },
  { q: "Les gains apportés par l'IA…", opts: ['Aucune idée', 'Des impressions, rien de mesuré', 'Quelques mesures ponctuelles (temps gagné, volumes)', 'Un suivi régulier avec des indicateurs'] },
  { q: 'Le portage du sujet par la direction…', opts: ["Le sujet n'est pas à l'agenda", 'De la curiosité, pas de décision', 'Un budget ou un responsable identifié', 'Une feuille de route validée et suivie en comité'] },
]

const PROFILS = [
  {
    min: 0, max: 6, icon: Sprout, name: 'Découverte', range: '0 à 6 points',
    desc: "L'IA reste un sujet individuel, sans cadre ni impulsion. C'est le point de départ le plus courant, et le plus risqué : les usages existent déjà, mais en dehors de tout contrôle (comptes personnels, données non protégées).",
    recos: ["Poser un premier cadre simple : quels outils, quelles données, ce qui est interdit", "Acculturer large avant d'équiper : une sensibilisation courte pour toute l'équipe", "Identifier 3 cas d'usage à fort volume pour prouver la valeur rapidement"],
    cta: { label: 'Commencer par un Sprint IA de sensibilisation', href: '/formation-ia-debutant' },
  },
  {
    min: 7, max: 12, icon: Compass, name: 'Exploration', range: '7 à 12 points',
    desc: "Des pionniers avancent, l'entreprise regarde. La valeur apparaît par endroits mais rien ne se capitalise : chacun réinvente ses prompts, les pratiques ne circulent pas, la conformité reste floue.",
    recos: ['Cartographier les cas d\'usage par métier et les prioriser par valeur', "Former les équipes clés sur leurs vrais fichiers, pas sur des exemples génériques", "Écrire la charte d'usage et choisir les comptes professionnels adaptés"],
    cta: { label: 'Cadrer avec un diagnostic IA', href: '/diagnostic-ia' },
  },
  {
    min: 13, max: 18, icon: Gauge, name: 'Structuration', range: '13 à 18 points',
    desc: "Le socle existe : des licences, une charte, des équipes formées. L'enjeu bascule vers la profondeur des usages, la mesure des gains et l'industrialisation de ce qui marche (assistants partagés, automatisations).",
    recos: ["Mesurer : temps gagné, volumes traités, qualité, sur 2 ou 3 processus", 'Passer des usages individuels aux actifs partagés (assistants, bibliothèques de prompts)', 'Former les managers au pilotage des usages, pas seulement aux outils'],
    cta: { label: 'Structurer avec le conseil IA', href: '/conseil-intelligence-artificielle' },
  },
  {
    min: 19, max: 24, icon: Rocket, name: 'Déploiement', range: '19 à 24 points',
    desc: "L'IA est un chantier piloté : feuille de route, indicateurs, gouvernance. Les gains viennent maintenant du sur-mesure : agents connectés à votre système d'information, automatisations de bout en bout, et montée en compétence continue.",
    recos: ["Développer les agents et outils propres à vos processus (RAG, intégrations SI)", 'Auditer la conformité AI Act et la gouvernance des données en continu', 'Installer une veille et un programme de formation permanent par vagues'],
    cta: { label: 'Construire sur mesure avec notre agence', href: '/agence-developpement-ia' },
  },
]

const FAQ = [
  { q: 'Comment le score est-il calculé ?', a: "Huit questions couvrent les dimensions qui déterminent la maturité IA d'une organisation : usages réels, outillage, formation, cas d'usage, cadre, confidentialité, mesure et portage par la direction. Chaque réponse vaut de 0 à 3 points, soit un score sur 24, rattaché à l'un des quatre profils. Le test qualifie une situation en 3 minutes ; il ne remplace pas un audit." },
  { q: 'Mes réponses sont-elles enregistrées ?', a: 'Non. Le test fonctionne entièrement dans votre navigateur : aucune réponse ne quitte votre poste, aucun compte ni email n\'est demandé pour voir le résultat.' },
  { q: 'Que faire de mon résultat ?', a: "Chaque profil vient avec trois priorités concrètes et l'offre Masteria correspondante : sensibilisation pour le profil Découverte, diagnostic pour l'Exploration, conseil pour la Structuration, développement sur mesure pour le Déploiement. Le premier échange de cadrage est gratuit." },
  { q: 'Le test vaut-il pour une PME comme pour un grand groupe ?', a: "Oui, les dimensions évaluées sont les mêmes ; seule l'ampleur des réponses change. Une PME de 30 personnes atteint le profil Structuration avec des moyens légers, là où un groupe devra outiller chaque direction. Les recommandations s'adaptent lors du cadrage." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4, fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <ChevronDown size={18} strokeWidth={2} style={{ flexShrink: 0, color: '#6B7280', marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function TestMaturiteIAPage() {
  const [answers, setAnswers] = useState({})
  const done = Object.keys(answers).length === QUESTIONS.length
  const score = Object.values(answers).reduce((a, b) => a + b, 0)
  const profil = done ? PROFILS.find(p => score >= p.min && score <= p.max) : null

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Diagnostic IA', slug: 'diagnostic-ia' },
    { name: 'Test de maturité IA', slug: 'test-maturite-ia' },
  ]

  return (
    <>
      <SEOHead
        title="Test de maturité IA : où en est votre entreprise ? | Masteria"
        description="Évaluez la maturité IA de votre entreprise en 3 minutes : 8 questions, un score sur 24, votre profil parmi 4 niveaux et les priorités pour avancer."
        slug="test-maturite-ia"
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        keywords="test maturité ia, maturité ia entreprise, évaluer maturité intelligence artificielle, audit ia gratuit, niveau ia entreprise"
        datePublished="2026-08-06"
        dateModified="2026-08-06"
        speakable={['#geo-summary', '#profils']}
        citations={[
          { name: 'Règlement (UE) 2024/1689 — AI Act', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          { name: 'CNIL — Intelligence artificielle', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
        ]}
      />

      {/* ── HERO sombre compact ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(48px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/diagnostic-ia" style={{ color: '#5B6679' }}>Diagnostic IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Test de maturité</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Gauge size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Outil gratuit · 3 minutes</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 22, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 780 }}>
            Test de maturité IA&nbsp;: où en est votre entreprise&nbsp;?
          </h1>
          <p id="geo-summary" style={{ fontSize: 'clamp(16px, 2.2vw, 18.5px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: 0, maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Huit questions sur vos usages, votre outillage, votre cadre et votre pilotage. À la clé : un score sur 24, votre profil parmi quatre niveaux de maturité, et les trois priorités qui font passer au niveau suivant. Aucune réponse ne quitte votre navigateur.
          </p>
        </div>
      </section>

      {/* ── LE TEST ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {QUESTIONS.map((item, qi) => (
            <fieldset key={qi} style={{ border: 'none', padding: 0, margin: '0 0 28px' }}>
              <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 12, lineHeight: 1.4 }}>
                {qi + 1}. {item.q}
              </legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 8 }}>
                {item.opts.map((opt, oi) => {
                  const selected = answers[qi] === oi
                  return (
                    <label key={oi} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer',
                      border: `2px solid ${selected ? c : '#E5E7EB'}`, background: selected ? '#F8FAFF' : '#fff',
                      borderRadius: 10, padding: '11px 14px', fontSize: 14, color: '#374151', lineHeight: 1.5,
                    }}>
                      <input
                        type="radio" name={`q${qi}`} checked={selected}
                        onChange={() => setAnswers(a => ({ ...a, [qi]: oi }))}
                        style={{ marginTop: 3, accentColor: c }}
                      />
                      {opt}
                    </label>
                  )
                })}
              </div>
            </fieldset>
          ))}

          {/* Résultat */}
          <div aria-live="polite">
            {done && profil && (
              <div style={{ border: `2px solid ${c}`, borderRadius: 16, padding: 'clamp(22px, 3vw, 32px)', background: '#F8FAFF' }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 8 }}>Votre résultat</div>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', margin: '0 0 4px' }}>
                  {score} / 24 : profil {profil.name}
                </p>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>{profil.desc}</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Vos trois priorités</p>
                <ul style={{ margin: '0 0 18px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {profil.recos.map(r => <li key={r} style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{r}</li>)}
                </ul>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to={profil.cta.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                    {profil.cta.label} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <button onClick={() => setAnswers({})} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 20px', fontSize: 14, fontWeight: 600, color: '#374151', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    <RefreshCw size={14} aria-hidden="true" /> Recommencer
                  </button>
                </div>
              </div>
            )}
            {!done && (
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0 }}>
                {Object.keys(answers).length} / {QUESTIONS.length} réponses — le résultat s'affiche ici dès la dernière réponse.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── LES 4 PROFILS (contenu statique citable) ── */}
      <section id="profils" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La grille de lecture</div>
          <h2 style={h2Style}>Les quatre niveaux de maturité IA</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 760 }}>
            La maturité IA d'une entreprise ne se mesure pas au nombre d'abonnements : elle tient à huit dimensions, des usages réels au portage par la direction. Quatre profils résument les situations que nous observons en mission.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 18 }}>
            {PROFILS.map(({ icon: Icon, name, range, desc }) => (
              <div key={name} style={cardStyle}>
                <div style={{ width: 44, height: 44, background: '#DBEAFE', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 2px' }}>{name}</h3>
                <p style={{ fontSize: 12.5, color: c, fontWeight: 700, margin: '0 0 10px' }}>{range}</p>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '22px 0 0' }}>
            Pour transformer le score en plan d'action chiffré : le <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link> cadre vos cas d'usage, votre gouvernance et votre feuille de route en quelques jours.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes</h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>
    </>
  )
}
