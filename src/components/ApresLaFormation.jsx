import { Link } from 'react-router-dom'
import { ArrowRight, FileSearch, Wrench, Code2, ClipboardCheck } from 'lucide-react'
import CadrageLink from './CadrageLink'

/*
 * « Après la formation » : pont des pages formation (outil × métier, hubs, métiers)
 * et du blog vers les offres conseil et développement. Chaque page formation
 * attire un public qui maîtrise déjà l'outil : l'étape suivante est souvent un
 * outil construit pour son équipe. L'idée d'outil est donnée à titre d'exemple,
 * par métier ; les liens portent les ancres exactes des pages d'offre.
 */

const c = '#2563EB'

/* Exemple d'outil à construire, par métier (slugs de catalog-meta et alias). */
const IDEES = {
  marketing: "un assistant qui rédige vos contenus à votre charte et les décline par canal",
  'ressources-humaines': "un assistant RH branché sur vos procédures, vos accords et votre convention collective",
  rh: "un assistant RH branché sur vos procédures, vos accords et votre convention collective",
  finance: "un agent qui prépare vos clôtures et commente les écarts de votre reporting",
  comptabilite: "un agent qui rapproche les pièces et prépare les écritures récurrentes",
  commercial: "un agent devis relié à votre CRM et à votre catalogue",
  commerce: "un assistant qui répond aux questions clients à partir de votre catalogue",
  juridique: "un assistant d'analyse de contrats qui relève les clauses à surveiller",
  communication: "un assistant qui prépare vos communiqués et vos éléments de langage",
  management: "un tableau de bord qui synthétise chaque semaine l'activité de l'équipe",
  assistante: "un agent qui trie la boîte mail, prépare les réunions et rédige les comptes rendus",
  seo: "un agent qui audite vos pages et propose des contenus optimisés",
  'service-client': "un assistant branché sur votre base de connaissances pour répondre plus vite",
  informatique: "des agents connectés à votre système d'information par des connecteurs MCP",
  pedagogique: "un assistant qui conçoit vos supports, vos exercices et vos évaluations",
  achats: "un agent qui compare les offres fournisseurs et prépare vos négociations",
  qse: "un assistant qui tient votre veille réglementaire et prépare vos audits",
  'gestion-de-projet': "un agent qui consolide l'avancement et prépare les comités de pilotage",
  'marche-public': "un assistant d'appels d'offres nourri de vos meilleurs mémoires techniques",
  immobilier: "un assistant qui rédige vos annonces et prépare vos dossiers de vente",
  sante: "un assistant documentaire qui respecte vos exigences de confidentialité",
  assurance: "un agent qui pré-instruit les dossiers et repère les pièces manquantes",
  btp: "un assistant qui prépare vos réponses aux appels d'offres et vos comptes rendus de chantier",
  tourisme: "un assistant qui construit vos propositions de séjour et répond aux demandes",
}
const IDEE_PAR_DEFAUT = "un assistant ou un agent qui travaille sur vos propres documents"

const OFFRES = [
  { Icon: FileSearch, label: "Diagnostic IA d'une journée", to: '/diagnostic-ia', desc: "Repérer les tâches à confier à l'IA en priorité" },
  { Icon: Wrench, label: 'Outils IA sur mesure', to: '/outils-ia-sur-mesure', desc: 'Assistants et agents branchés sur vos documents' },
  { Icon: Code2, label: 'Agence de développement IA', to: '/agence-developpement-ia', desc: 'Applications et intégrations, le code vous appartient' },
  { Icon: ClipboardCheck, label: 'Audit IA', to: '/audit-ia', desc: 'État des lieux complet, conformité AI Act et RGPD comprise' },
]

export default function ApresLaFormation({ metierSlug, outil, intro, kicker = 'Après la formation' }) {
  const idee = IDEES[metierSlug] || IDEE_PAR_DEFAUT
  const texte = intro || (outil
    ? `Vos équipes maîtrisent ${outil}. L'étape suivante, c'est souvent ${idee}. Masteria cadre le besoin, construit l'outil et le relie à vos données et à vos logiciels.`
    : `Une fois les équipes formées, l'étape suivante, c'est souvent ${idee}. Masteria cadre le besoin, construit l'outil et le relie à vos données et à vos logiciels.`)

  return (
    <section aria-labelledby="apres-la-formation" style={{ padding: 'clamp(48px, 7vw, 80px) clamp(18px, 4vw, 40px)', background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(24px, 4vw, 56px)', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 14 }}>
            <span aria-hidden="true" style={{ width: 22, height: 2, background: c }} /> {kicker}
          </div>
          <h2 id="apres-la-formation" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 14px' }}>
            Un outil construit pour votre équipe
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 22px' }}>{texte}</p>
          <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 20px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
            Réserver 30 minutes de cadrage <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </CadrageLink>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: '#fff', border: '1px solid #DBEAFE', borderRadius: 16, overflow: 'hidden' }}>
          {OFFRES.map(({ Icon, label, to, desc }, i) => (
            <li key={to} style={{ borderTop: i > 0 ? '1px solid #E5E7EB' : 'none' }}>
              <Link to={to} style={{ display: 'grid', gridTemplateColumns: '38px 1fr auto', gap: 14, alignItems: 'center', padding: '16px 18px', textDecoration: 'none' }}>
                <span aria-hidden="true" style={{ width: 38, height: 38, borderRadius: 10, background: '#DBEAFE', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} strokeWidth={2} style={{ color: c }} />
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A' }}>{label}</span>
                  <span style={{ display: 'block', fontSize: 13.5, color: '#6B7280', lineHeight: 1.45, marginTop: 2 }}>{desc}</span>
                </span>
                <ArrowRight size={16} strokeWidth={2.2} style={{ color: '#9CA3AF' }} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
