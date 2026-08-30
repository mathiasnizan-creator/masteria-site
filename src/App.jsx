import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  Mail, MapPin, Clock, BadgeCheck, Wallet, Users as UsersIcon,
  ArrowRight, Sparkles, Send, CheckCircle2, Calendar, Building2,
  Compass, GraduationCap, Handshake, Target, ShieldCheck, Heart,
  Lightbulb, Rocket, Phone, Zap, Check,
} from 'lucide-react';

// LinkedIn SVG (pas d'icône officielle dans lucide-react)
const Linkedin = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-label="LinkedIn" role="img" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { MasteriaHeader, MasteriaFooter, FadeIn, PrimaryBtn, SecBtn, TrainingCard, StatsBar } from './components/components';
import { ToolLogo } from './components/ToolLogo';
import { useIsMobile } from './hooks/useMediaQuery';
import { FAQSection, FormatTabs, SidebarFormatPicker, FAQ_GENERAL, FAQ_FORMATIONS, FAQ_CONTACT } from './components/screens2';
import SEOHead from './components/SEOHead';
import { HUBS, METIERS } from './data/catalog-meta';
import HomePage from './pages/HomePage';
// Pages secondaires lazy-loadées pour réduire le bundle initial (perf LCP/TBT)
const HubPage = lazy(() => import('./pages/HubPage'));
const SpokePage = lazy(() => import('./pages/SpokePage'));
const MetiersHubPage = lazy(() => import('./pages/MetiersHubPage'));
/* Pages métier : une page-route par métier (src/pages/metiers/<slug>.jsx = template MetierPage
   + données de ce seul métier), chargée à la demande → un chunk léger par page. */
const METIER_SLUGS = ['marketing','ressources-humaines','commercial','finance','communication','management','assistante','seo','service-client','informatique','pedagogique','achats','qse','gestion-de-projet','marche-public','immobilier','commerce','sante','juridique','comptabilite','assurance','btp','tourisme','transverse'];
const METIER_MODULES = import.meta.glob('./pages/metiers/*.jsx');
const METIER_PAGES = Object.fromEntries(METIER_SLUGS.map(s => [s, lazy(METIER_MODULES[`./pages/metiers/${s}.jsx`])]));
const ConseilIAPage = lazy(() => import('./pages/ConseilIAPage'));
const ConseilStrategieIAPage = lazy(() => import('./pages/ConseilStrategieIAPage'));
const ConseilDataIAPage = lazy(() => import('./pages/ConseilDataIAPage'));
const AutomatisationIAGuidePage = lazy(() => import('./pages/AutomatisationIAGuidePage'));
const AgenceAutomatisationIAPage = lazy(() => import('./pages/AgenceAutomatisationIAPage'));
const AgentsIAEntreprisePage = lazy(() => import('./pages/AgentsIAEntreprisePage'));
const AgenceIAPage = lazy(() => import('./pages/AgenceIAPage'));
const MeilleureAgenceIAPage = lazy(() => import('./pages/MeilleureAgenceIAPage'));
const MeilleurCabinetConseilIAPage = lazy(() => import('./pages/MeilleurCabinetConseilIAPage'));
const MeilleureFormationIAPage = lazy(() => import('./pages/MeilleureFormationIAPage'));
const ConsultantIAPage = lazy(() => import('./pages/ConsultantIAPage'));
const EtudesDeCasIAPage = lazy(() => import('./pages/EtudesDeCasIAPage'));
const PressePage = lazy(() => import('./pages/PressePage'));
const QuelOpcoPage = lazy(() => import('./pages/QuelOpcoPage'));
const TestMaturiteIAPage = lazy(() => import('./pages/TestMaturiteIAPage'));
const QuelOutilIAPage = lazy(() => import('./pages/QuelOutilIAPage'));
const BibliothequePromptsPage = lazy(() => import('./pages/BibliothequePromptsPage'));
const AgenceDeveloppementIAPage = lazy(() => import('./pages/AgenceDeveloppementIAPage'));
const AutomatiserVeilleIAPage = lazy(() => import('./pages/AutomatiserVeilleIAPage'));
const OutilsVeilleIAPage = lazy(() => import('./pages/OutilsVeilleIAPage'));
const VeilleConcurrentielleIAPage = lazy(() => import('./pages/VeilleConcurrentielleIAPage'));
const AgenceGeoPage = lazy(() => import('./pages/AgenceGeoPage'));
const AgenceIAMarketingPage = lazy(() => import('./pages/AgenceIAMarketingPage'));
const AgenceSeoIAPage = lazy(() => import('./pages/AgenceSeoIAPage'));
const OutilsIASurMesurePage = lazy(() => import('./pages/OutilsIASurMesurePage'));
const SecteursHubPage = lazy(() => import('./pages/SecteursHubPage'));
const SecteurIAPage = lazy(() => import('./pages/SecteurIAPage'));
const SolutionsHubPage = lazy(() => import('./pages/SolutionsHubPage'));
const SolutionIAPage = lazy(() => import('./pages/SolutionIAPage'));
const DiagnosticIAPage = lazy(() => import('./pages/DiagnosticIAPage'));
const AuditIAPage = lazy(() => import('./pages/AuditIAPage'));
const AuditSeoIAPage = lazy(() => import('./pages/AuditSeoIAPage'));
const AuditGeoIAPage = lazy(() => import('./pages/AuditGeoIAPage'));
const AccompagnementIAPage = lazy(() => import('./pages/AccompagnementIAPage'));
const AcculturationIAPage = lazy(() => import('./pages/AcculturationIAPage'));
const FormationIAEntreprisePage = lazy(() => import('./pages/FormationIAEntreprisePage'));
const PrestataireIAPage = lazy(() => import('./pages/PrestataireIAPage'));
const CoachingIAPage = lazy(() => import('./pages/CoachingIAPage'));
const FormationAIActPage = lazy(() => import('./pages/FormationAIActPage'));
const FormationAgentsIAPage = lazy(() => import('./pages/FormationAgentsIAPage'));
const FormationIAComexPage = lazy(() => import('./pages/FormationIAComexPage'));
const FormationN8nPage = lazy(() => import('./pages/FormationN8nPage'));
const FormationMakePage = lazy(() => import('./pages/FormationMakePage'));
const FormationZapierPage = lazy(() => import('./pages/FormationZapierPage'));
const FormationCseIaPage = lazy(() => import('./pages/FormationCseIaPage'));
const FormationDataIaPage = lazy(() => import('./pages/FormationDataIaPage'));
const MethodeProjetIAPage = lazy(() => import('./pages/MethodeProjetIAPage'));
const PrixProjetIAPage = lazy(() => import('./pages/PrixProjetIAPage'));
const GouvernanceIAPage = lazy(() => import('./pages/GouvernanceIAPage'));
const CharteIAEntreprisePage = lazy(() => import('./pages/CharteIAEntreprisePage'));
const IAResponsablePage = lazy(() => import('./pages/IAResponsablePage'));
const IAEtRGPDPage = lazy(() => import('./pages/IAEtRGPDPage'));
const CasUsageIAEntreprisePage = lazy(() => import('./pages/CasUsageIAEntreprisePage'));
const IAGenerativeEntreprisePage = lazy(() => import('./pages/IAGenerativeEntreprisePage'));
const SECTEUR_SLUGS = ['ia-banque-assurance','ia-industrie','ia-sante-pharma','ia-juridique','ia-retail-ecommerce','ia-logistique-transport','ia-immobilier-btp','ia-secteur-public','ia-services-conseil','ia-tourisme-hotellerie','ia-agroalimentaire','ia-tech-saas'];
const SOLUTION_SLUGS = ['copilote-ia-interne','assistant-documentaire-ia','agent-support-client-ia','automatisation-documentaire-ia','agent-commercial-ia','chatbot-ia-sur-mesure','integration-llm-rag'];
const GeoPage = lazy(() => import('./pages/GeoPage'));
const GeoIAGenericPage = lazy(() => import('./pages/GeoIAGenericPage'));
const TopicLandingPage = lazy(() => import('./pages/TopicLandingPage'));
const AutomatisationIAPage = lazy(() => import('./pages/AutomatisationIAPage'));
const QualiopiPage = lazy(() => import('./pages/QualiopiPage'));
const FinancementPage = lazy(() => import('./pages/FinancementPage'));
const DebutantPage = lazy(() => import('./pages/DebutantPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const ComparisonPage = lazy(() => import('./pages/ComparisonPage'));
const ComparisonsHubPage = lazy(() => import('./pages/ComparisonsHubPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));
const VeillePage = lazy(() => import('./pages/VeillePage'));
const VeillePublicationsPage = lazy(() => import('./pages/VeillePublicationsPage'));
const VeilleAProposPage = lazy(() => import('./pages/VeilleAProposPage'));
const VeilleEditionPage = lazy(() => import('./pages/VeilleEditionPage'));
const MentionsLegalesPage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.MentionsLegalesPage })));
const PolitiqueConfidentialitePage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.PolitiqueConfidentialitePage })));
const CompetencesClaudeEET = lazy(() => import('./pages/CompetencesClaudeEET'));
const ArtefactsClaudeEntreprise = lazy(() => import('./pages/ArtefactsClaudeEntreprise'));
const SecuriteClaudeEntreprise = lazy(() => import('./pages/SecuriteClaudeEntreprise'));
import { SPOKE_SLUGS } from './data/spoke-slugs';
import { getAllGeoCombinations, GEO_DESTINATIONS, geoIaSlug } from './data/geo-data';

const TRAININGS = [
  { id: 'ia-initiation', tag: 'Fondamentaux', title: "Les fondamentaux de l'IA générative", desc: "Comprendre ce que les modèles font vraiment et installer les premiers usages sur votre outil : ChatGPT, Copilot, Claude, Gemini ou Mistral.", price: '1 980 €', unit: '/ jour', color: '#DBEAFE', duration: '1 jour', level: 'Débutant',
    objectives: ["Comprendre ce que fait un modèle d'IA générative, et ce qu'il ne sait pas faire", "Formuler une demande complète et relire une réponse avec méthode", "Installer deux ou trois usages concrets sur son propre poste, le jour même", "Connaître le cadre : données confidentielles, vérification, règles d'usage"],
    program: [{ title: 'Matin, Comprendre', items: ["Ce qu'est un modèle de langage, démontré en direct sur vos outils", 'Capacités réelles et limites : hallucinations, sources, données', 'Panorama de votre environnement : ChatGPT, Copilot, Claude, Gemini, Mistral', 'La méthode de la demande efficace : contexte, tâche, format'] }, { title: 'Après-midi, Pratiquer', items: ['Ateliers sur vos documents : synthèse, rédaction, préparation de réunion', "Relecture et vérification : ce qu'on contrôle avant d'utiliser une réponse", "Le cadre d'usage : ce qui peut entrer dans l'outil, ce qui reste hors champ", "Plan d'action personnel : les usages à installer dans la semaine"] }] },
  { id: 'prompt-engineering', tag: 'Prompt engineering', title: 'Prompt engineering : la méthode complète', desc: "Structurer des prompts professionnels, fiabiliser les réponses et construire la bibliothèque de prompts de l'équipe, quel que soit l'outil.", price: '1 980 €', unit: '/ jour', color: '#FEF3C7', duration: '1 jour', level: 'Intermédiaire',
    objectives: ['Structurer un prompt professionnel : rôle, contexte, contraintes, format, exemples', 'Appliquer les techniques avancées : exemples guidés, décomposition, ancrage sur vos documents', 'Imposer des formats de sortie directement exploitables et réduire les erreurs', "Construire la bibliothèque de prompts partagée de l'équipe"],
    program: [{ title: 'Matin, La méthode', items: ["Anatomie d'un prompt fiable : ce qui change la qualité d'une réponse", 'Techniques avancées : exemples guidés, raisonnement par étapes, auto-vérification', 'Ancrage documentaire : faire répondre à partir de vos documents, jamais de mémoire', 'Atelier : réécrire trois prompts réels de son quotidien'] }, { title: 'Après-midi, La pratique en équipe', items: ["Prompts système : encoder le ton, les règles et le contexte de l'entreprise", "Gabarits paramétrables et bibliothèque partagée de l'équipe", 'Adapter le même prompt à ChatGPT, Claude, Copilot, Gemini ou Mistral', "Atelier final sur vos cas réels et plan d'usage à 30 jours"] }] },
  { id: 'marketing-ia', tag: 'Marketing', title: "L'IA pour les équipes marketing", desc: "Contenus, campagnes, visuels et analyses sur vos outils réels, dans votre ton de marque, avec un cadre de relecture clair.", price: '1 980 €', unit: '/ jour', color: '#DCFCE7', duration: '1 jour', level: 'Tous niveaux',
    objectives: ['Produire des contenus fidèles au ton de la marque : articles, posts, emails, pages', 'Outiller le SEO : briefs, plans de pages, réécritures, questions des clients', 'Analyser les données marketing : campagnes, audiences, verbatims clients', "Poser le cadre : relecture, droits d'usage des visuels, données clients"],
    program: [{ title: 'Matin, Contenus & marque', items: ['Le ton de marque encodé une fois pour toutes : instructions et exemples maison', 'Production éditoriale : articles, posts, emails, déclinaisons multicanal', 'SEO assisté : briefs, structures de pages, intentions de recherche', 'Atelier sur vos contenus réels, dans vos gabarits'] }, { title: 'Après-midi, Campagnes & visuels', items: ["Analyse de campagnes et de verbatims clients avec l'IA", 'Personnalisation et segmentation : ce qui marche, ce qui déçoit', "Visuels : la génération d'images intégrée à vos outils, et ses règles d'usage", "Plan d'action : la bibliothèque de prompts marketing de l'équipe"] }] },
  { id: 'rh-ia', tag: 'Ressources humaines', title: "L'IA pour les ressources humaines", desc: "Recrutement, entretiens, documents RH et formation interne : des usages installés sur vos cas réels, avec le cadre juridique posé.", price: '1 980 €', unit: '/ jour', color: '#F3E8FF', duration: '1 jour', level: 'Tous niveaux',
    objectives: ['Rédiger offres, fiches de poste et documents RH dans les règles de la maison', 'Préparer entretiens et campagnes : trames, synthèses, comptes rendus', "Outiller la formation interne et les parcours d'intégration", 'Connaître le cadre : RGPD, non-discrimination, usages RH encadrés par le règlement européen'],
    program: [{ title: 'Matin, Recrutement & documents', items: ['Offres et fiches de poste : rédaction structurée, relecture, déclinaisons', 'Préparer un entretien : trame, questions, synthèse après échange', "Le cadre d'abord : données candidats, RGPD, et ce que l'AI Act encadre côté RH", 'Atelier sur vos documents réels'] }, { title: 'Après-midi, RH du quotidien', items: ["Communication interne : notes, FAQ, supports d'annonce", 'Intégration et formation interne : parcours, quiz, supports outillés', "Assistants RH d'équipe : instructions, documents de référence, limites", "Plan d'action : les usages RH à installer, qui relit quoi"] }] },
  { id: 'appels-offres', tag: "Appels d'offres", title: "Répondre aux appels d'offres avec l'IA", desc: "Analyser un dossier de consultation, bâtir le mémoire technique dans votre trame et constituer la bibliothèque de réponses, sans rien inventer.", price: '1 980 €', unit: '/ jour', color: '#FFE4E6', duration: '1 jour', level: 'Intermédiaire',
    objectives: ['Dépouiller un dossier de consultation : exigences, critères, pièces attendues', 'Objectiver la décision de répondre avec une grille go/no-go outillée', 'Rédiger le mémoire technique dans votre trame, à partir de vos références réelles', "Constituer la bibliothèque de réponses et de preuves de l'entreprise"],
    program: [{ title: 'Matin, Analyser & décider', items: ["Lire un dossier de consultation avec l'IA : règlement, CCTP, critères de notation", 'La grille go/no-go : décider de répondre sur des faits', "Cartographier les exigences : ce qu'il faudra prouver, pièce par pièce", 'Atelier sur un de vos dossiers réels'] }, { title: 'Après-midi, Rédiger & capitaliser', items: ['Le mémoire technique : votre trame, vos références, zéro invention', 'Adapter la réponse aux critères de notation du dossier', 'La bibliothèque de réponses : références, méthodologies, preuves à jour', "Relecture et contrôle : ce qu'on vérifie avant de déposer"] }] },
  { id: 'intra', tag: 'Intra-entreprise', title: 'La formation sur mesure en intra', desc: "Un programme construit au cadrage sur les cas réels de vos équipes, dans vos locaux ou à distance, jusqu'à 12 participants.", price: '1 980 €', unit: '/ jour / groupe', color: '#F0F0F0', duration: 'Sur mesure', level: 'Tous niveaux',
    objectives: ["Un programme construit au cadrage sur vos cas d'usage et vos outils", 'Des ateliers sur les documents réels de chaque équipe', "Jusqu'à 12 participants par session, dans vos locaux ou à distance", "Des livrables qui restent : prompts, gabarits, règles d'usage, référents"],
    program: [{ title: 'Phase 1, Cadrage', items: ["Échange avec la direction et les managers : cas d'usage, licences, niveaux", 'Choix du format : sprint de 3 h, journée socle, 2 jours métier, parcours', 'Construction du programme sur vos processus réels', 'Cadre de confidentialité posé avant la session'] }, { title: 'Phase 2, Formation & suite', items: ['Animation dans vos locaux ou à distance, les mains sur vos outils', 'Livrables rangés dans vos espaces : prompts, gabarits, assistants', 'Évaluation des acquis et attestations de réalisation', 'Suite proposée : référents, vagues suivantes, approfondissements'] }] },
];

function FormationsScreen() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Tout');
  const categories = ['Tout', 'Fondamentaux', 'Prompt engineering', 'Marketing', 'Ressources humaines', "Appels d'offres", 'Intra-entreprise'];
  const filtered = filter === 'Tout' ? TRAININGS : TRAININGS.filter(t => t.tag === filter);
  return (
    <div style={{ padding: '64px 32px 96px' }}>
      <SEOHead
        title="Toutes nos formations IA | Masteria, Certifié Qualiopi"
        description="Intra-entreprise ou accompagnement individuel sur mesure, en présentiel ou à distance. Certifiées Qualiopi, finançables via votre OPCO."
        slug="formations"
        noindex={true}
      />
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Catalogue</div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>Toutes nos formations</h1>
          <p style={{ fontSize: 16, color: '#717171', maxWidth: 560, lineHeight: 1.65, marginBottom: 28 }}>Intra-entreprise ou accompagnement individuel sur mesure, en présentiel ou à distance. Certifiées Qualiopi, finançables via votre OPCO.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: filter === c ? 700 : 500, background: filter === c ? '#1C1C1C' : '#F0F0F0', color: filter === c ? '#fff' : '#4A4A4A', border: 'none', borderRadius: 999, padding: '7px 16px', cursor: 'pointer', transition: 'all 150ms' }}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <Link to="/formation-intelligence-artificielle" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 12, padding: '16px 20px', textDecoration: 'none', marginBottom: 32 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#111' }}>Le catalogue complet : plus de 100 formations par outil et par métier</div>
            <div style={{ fontSize: 13, color: '#1E40AF' }}>ChatGPT, Copilot, Claude, Gemini, Mistral · 24 métiers · filtrable en temps réel</div>
          </div>
          <span style={{ fontSize: 16, color: '#2563EB', fontWeight: 700 }}>→</span>
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
          {filtered.map(t => <TrainingCard key={t.id} {...t} onClick={() => navigate(`/formations/${t.id}`)} />)}
        </div>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Formations thématiques</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['Agents IA', '/formation-agents-ia'],
              ['Automatisation IA', '/formation-automatisation-ia'],
              ['n8n', '/formation-n8n'],
              ['Make', '/formation-make'],
              ['Zapier', '/formation-zapier'],
              ['Prompt engineering', '/formation-prompt-engineering'],
              ['Vibe coding', '/formation-vibe-coding'],
              ['Claude Code', '/formation-claude-code'],
              ['AI Act', '/formation-ai-act'],
              ['CSE & IA', '/formation-cse-ia'],
              ['Data & IA', '/formation-data-ia'],
              ['IA COMEX', '/formation-ia-comex'],
              ['Dirigeants & CODIR', '/formation-ia-dirigeants'],
              ['IA en entreprise', '/formation-ia-entreprise'],
              ['Acculturation IA', '/acculturation-ia'],
            ].map(([l, path]) => (
              <Link key={path} to={path} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#1C1C1C', background: '#F0F0F0', borderRadius: 999, padding: '8px 16px', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
        <FadeIn>
          <div style={{ background: '#F8F8F8', borderRadius: 14, padding: '24px 28px', display: 'flex', gap: 18, alignItems: 'center' }}>
            <div style={{ width: 42, height: 42, background: '#1C1C1C', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}><Check size={16} color="#fff" strokeWidth={3} /></span>
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#111', marginBottom: 4 }}>100% finançable via votre OPCO</div>
              <div style={{ fontSize: 13, color: '#717171', lineHeight: 1.6 }}>Masteria est certifié Qualiopi. Toutes nos formations peuvent être prises en charge par votre OPCO. Nous vous accompagnons dans les démarches administratives.</div>
            </div>
          </div>
        </FadeIn>
        <FormatTabs onContact={() => navigate('/contact')} />
        <FAQSection items={FAQ_FORMATIONS} title="Vos questions sur nos formations" bg="#F8F8F8" />
      </div>
    </div>
  );
}

function FormationDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const f = TRAININGS.find(t => t.id === id);
  const [tab, setTab] = useState('programme');

  if (!f) {
    return (
      <div style={{ padding: '120px 32px', textAlign: 'center' }}>
        <h1>Formation introuvable</h1>
        <Link to="/formations" style={{ color: '#2563EB' }}>Retour aux formations</Link>
      </div>
    );
  }

  const related = TRAININGS.filter(t => t.id !== f.id).slice(0, 3);
  return (
    <div style={{ padding: '48px 32px 96px' }}>
      <SEOHead
        title={`${f.title} | Masteria, Certifié Qualiopi`}
        description={f.desc}
        slug={`formations/${f.id}`}
        courseData={{ name: f.title, description: f.desc }}
        noindex={true}
      />
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <button onClick={() => navigate('/formations')} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#6B7280', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 32, padding: 0, display: 'flex', alignItems: 'center', gap: 6 }}>← Retour aux formations</button>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', padding: '4px 14px', background: f.color, borderRadius: 999, marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1C1C1C' }}>{f.tag}</span>
            </div>
            <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 16 }}>{f.title}</h1>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
              {[`Durée : ${f.duration}`, `Niveau : ${f.level}`, 'Présentiel ou distanciel', 'Certifié Qualiopi'].map((m, i) => (
                <span key={i} style={{ fontSize: 12, color: '#4A4A4A', background: '#F5F5F5', padding: '5px 12px', borderRadius: 999 }}>{m}</span>
              ))}
            </div>
            <p style={{ fontSize: 16, color: '#4A4A4A', lineHeight: 1.7, marginBottom: 36 }}>{f.desc}</p>
            <div style={{ display: 'flex', borderBottom: '2px solid #F0F0F0', marginBottom: 28 }}>
              {[['programme', 'Programme'], ['objectifs', 'Objectifs']].map(([key, label]) => (
                <button key={key} onClick={() => setTab(key)}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: tab === key ? '#111' : '#6B7280', background: 'none', border: 'none', borderBottom: tab === key ? '2px solid #111' : '2px solid transparent', marginBottom: -2, padding: '8px 18px 10px', cursor: 'pointer' }}>
                  {label}
                </button>
              ))}
            </div>
            {tab === 'programme' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {f.program.map((bloc, i) => (
                  <div key={i} style={{ background: '#F8F8F8', borderRadius: 10, padding: '20px 22px' }}>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 12 }}>{bloc.title}</div>
                    {bloc.items.map((item, j) => (
                      <div key={j} style={{ fontSize: 13, color: '#4A4A4A', padding: '6px 0', borderBottom: j < bloc.items.length - 1 ? '1px solid #EBEBEB' : 'none', display: 'flex', gap: 8 }}>
                        <span style={{ color: '#C0C0C0', flexShrink: 0 }}>•</span>{item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {tab === 'objectifs' && (
              <div>
                {f.objectives.map((obj, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid #F0F0F0' }}>
                    <div style={{ width: 24, height: 24, background: '#1C1C1C', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>{i + 1}</span>
                    </div>
                    <span style={{ fontSize: 15, color: '#2A2A2A', lineHeight: 1.55 }}>{obj}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ position: 'sticky', top: 96 }}>
            <SidebarFormatPicker onContact={() => navigate('/contact')} />
          </div>
        </div>
        <FAQSection items={[...FAQ_FORMATIONS.slice(0,3), ...FAQ_GENERAL.slice(2,4)]} title="Questions sur cette formation" bg="#F8F8F8" />
        <div style={{ marginTop: 64 }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 24 }}>Autres formations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {related.map(t => <TrainingCard key={t.id} {...t} onClick={() => navigate(`/formations/${t.id}`)} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutScreen() {
  return (
    <div>
      <SEOHead
        title="Masteria, centre de formation IA pour entreprises | À propos"
        description="Centre de formation IA pour entreprises et cabinet de conseil, certifié Qualiopi, fondé à Lyon en 2022 par Mathias Nizan. Plus de 1 500 professionnels formés en France, Suisse et Belgique. L'IA accessible, concrète et utile."
        slug="centre-formation-ia-entreprise"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'À propos', slug: 'centre-formation-ia-entreprise' },
        ]}
      />

      {/* HERO clair */}
      <section style={{
        position: 'relative', background: '#FAFAF7', color: '#0A0A0A',
        padding: 'clamp(80px, 12vw, 130px) 32px 90px', textAlign: 'center', overflow: 'hidden',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 900,
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#DBEAFE', border: '1px solid #BFDBFE',
            color: '#2563EB',
            padding: '6px 16px', borderRadius: 99, fontSize: 13, fontWeight: 700,
            marginBottom: 24,
          }}>
            <Sparkles size={14} /> À propos de Masteria
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.03em',
            marginBottom: 22, color: '#0A0A0A',
          }}>
            Cabinet de conseil <span style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>et centre de formation</span><br />dédié à l'IA en entreprise
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: '#4B5563', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
            Fondé en 2022 par Mathias Nizan, Masteria accompagne les entreprises dans la transformation de leurs métiers par l'intelligence artificielle, avec une conviction : l'IA doit rester au service des humains.
          </p>
        </div>
      </section>

      {/* DOUBLE IDENTITÉ */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Notre positionnement</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Deux expertises complémentaires,<br />une même mission
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 660, margin: '0 auto', lineHeight: 1.7 }}>
              Nous sommes l'un des rares acteurs à combiner conseil stratégique et formation certifiée Qualiopi. Cette double casquette nous permet de vous accompagner de la vision à l'exécution, puis de rendre vos équipes totalement autonomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <FadeIn>
              <div style={{
                background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                border: '1px solid #BFDBFE', borderRadius: 18, padding: 32, height: '100%',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <Compass size={24} color="#fff" strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>Cabinet de conseil IA</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, marginBottom: 18 }}>
                  Audit, stratégie, gouvernance, accompagnement opérationnel : nous aidons PME, ETI et grands groupes à cadrer leur démarche IA, à prototyper rapidement et à déployer avec méthode.
                </p>
                <Link to="/conseil-intelligence-artificielle" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#2563EB', textDecoration: 'none', fontSize: 14, fontWeight: 700,
                }}>
                  Découvrir nos missions de conseil <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div style={{
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                border: '1px solid #A7F3D0', borderRadius: 18, padding: 32, height: '100%',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <GraduationCap size={24} color="#fff" strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>Centre de formation Qualiopi</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, marginBottom: 18 }}>
                  Formations ChatGPT, Copilot, Gemini, Claude et programmes par métier. Certifié Qualiopi, finançable à 100 % via votre OPCO. +1 500 professionnels formés avec 98 % de satisfaction.
                </p>
                <Link to="/formation-intelligence-artificielle" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#059669', textDecoration: 'none', fontSize: 14, fontWeight: 700,
                }}>
                  Voir les formations <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MOT DU FONDATEUR */}
      <section style={{ padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 32px)', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(28px, 5vw, 56px)', alignItems: 'center' }}>
          <FadeIn delay={100}>
            <div style={{ aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.18)', background: '#E5E7EB' }}>
              <img
                src="/assets/mathias-nizan.jpg"
                alt="Mathias Nizan, fondateur de Masteria, expert en formation et conseil IA"
                width="400" height="500"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Le mot du fondateur</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 800, color: '#111', letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.3 }}>
              « L'intelligence artificielle ne remplace pas les humains.<br />Elle <span style={{ color: '#2563EB' }}>décuple leur potentiel</span>. »
            </h2>
            <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, marginBottom: 14 }}>Je suis convaincu que l'IA ne doit pas être réservée à une élite technologique. Elle peut, et doit, devenir un levier de transformation pour tous les professionnels, quels que soient leur métier ou leur niveau de départ.</p>
            <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, marginBottom: 14 }}>C'est pour cela que j'ai fondé <strong>Masteria</strong>, un cabinet de conseil et centre de formation IA dédié à l'accompagnement des entreprises. Notre mission est claire : rendre l'intelligence artificielle accessible, concrète et directement utile sur le terrain.</p>
            <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, marginBottom: 14 }}>Chaque accompagnement et chaque programme que nous concevons vise à donner du pouvoir d'agir aux équipes, à simplifier le quotidien, à accélérer la prise de décision, à créer de la valeur.</p>
            <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, marginBottom: 20 }}>Chez Masteria, nous croyons en une intelligence artificielle <strong>éthique, utile et profondément humaine</strong>. Nous mettons toute notre énergie à concevoir des formations qui vous donnent les clés pour intégrer l'IA dans votre métier de façon concrète, durable et réellement impactante.</p>
            <div style={{ paddingTop: 16, borderTop: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#111' }}>Mathias Nizan</div>
              <div style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>Fondateur de Masteria · 10+ ans en transformation digitale</div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* CHIFFRES CLÉS */}
      <StatsBar />

      {/* BANDEAU QUALIOPI */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
          borderRadius: 20, border: '1px solid #A7F3D0',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(20px, 4vw, 40px)',
        }}>
          <img
            src="/assets/qualiopi-logo.png"
            alt="Certification Qualiopi, Masteria centre de formation certifié"
            width="120" height="90"
            loading="lazy" decoding="async"
            style={{ height: 90, width: 'auto', flexShrink: 0 }}
          />
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#059669', marginBottom: 8 }}>
              Organisme certifié
            </div>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, marginBottom: 8, letterSpacing: '-0.01em' }}>
              Toutes nos formations sont certifiées Qualiopi
            </h3>
            <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
              Gage de qualité reconnu par l'État, condition indispensable au financement de vos formations via votre OPCO.
            </p>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section style={{ padding: '96px 32px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: 10 }}>Notre approche</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: 14 }}>
              Du diagnostic à l'autonomie de vos équipes
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
              Nous travaillons avec vous en 3 temps, pensés pour créer de la valeur rapidement et durablement.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                n: '01', Icon: Compass,
                title: 'Nous comprenons',
                desc: "Audit de vos processus, entretiens avec vos équipes, cartographie des cas d'usage à plus fort ROI. Tout part d'une compréhension profonde de votre contexte.",
              },
              {
                n: '02', Icon: Target,
                title: 'Nous co-construisons',
                desc: "Stratégie, gouvernance, prototypes opérationnels : nous produisons avec vous, jamais pour vous. Vos équipes sont parties prenantes à chaque étape.",
              },
              {
                n: '03', Icon: Rocket,
                title: 'Nous transférons',
                desc: "Formations certifiées Qualiopi, bibliothèque de prompts, coaching post-mission : nous faisons en sorte que vous n'ayez plus besoin de nous.",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ background: '#fff', borderRadius: 16, padding: 30, border: '1px solid #E5E7EB', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: '#2563EB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 14px -4px rgba(37,99,235,0.45)',
                    }}>
                      <s.Icon size={24} color="#fff" strokeWidth={2} />
                    </div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 32, fontWeight: 900, color: '#E5E7EB' }}>{s.n}</div>
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section style={{ padding: '96px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 10 }}>Nos valeurs</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
              Ce qui nous guide au quotidien
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
            {[
              { Icon: Heart,       title: 'Humain d\'abord',     desc: "L'IA est un outil au service des personnes. Nous plaçons systématiquement l'humain au centre de nos interventions." },
              { Icon: Lightbulb,   title: 'Accessibilité',       desc: "L'IA doit être comprise par tous, pas seulement par une élite. Nous expliquons, nous démystifions, nous rendons simple." },
              { Icon: Handshake,   title: 'Concrétude',          desc: "Pas de théorie hors-sol : chaque mission et chaque formation débouche sur des applications immédiatement utiles." },
              { Icon: ShieldCheck, title: 'Éthique & sécurité',  desc: "RGPD, confidentialité, prévention des dérives : nous cadrons chaque usage pour une IA maîtrisée et responsable." },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ background: '#F9FAFB', borderRadius: 14, padding: 26, border: '1px solid #E5E7EB', height: '100%' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: '#2563EB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                    boxShadow: '0 4px 14px -4px rgba(37,99,235,0.45)',
                  }}>
                    <v.Icon size={22} color="#fff" strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / HISTOIRE */}
      <section style={{ padding: '96px 32px', background: '#F5F3EE', color: '#0A0A0A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: 10 }}>Notre histoire</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
              De l'intuition à une référence de la formation IA
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { year: '2020', title: 'Le déclic', desc: "Consultant en transformation digitale depuis 10 ans, Mathias Nizan se spécialise sur l'IA générative. Les premiers modèles GPT laissent entrevoir un basculement majeur." },
              { year: '2022', title: 'Naissance de Masteria', desc: "Masteria est fondé sur une conviction : l'IA doit être accessible à tous les professionnels. Les premiers clients grands comptes font confiance au cabinet." },
              { year: '2024', title: '+1 500 professionnels formés', desc: "Masteria accompagne des PME, ETI et grands groupes en France, Suisse et Belgique. 98 % de taux de satisfaction, +6h gagnées par semaine par collaborateur formé." },
              { year: '2025', title: 'Cabinet conseil + formation', desc: "Le positionnement hybride se consolide : audit stratégique, accompagnement opérationnel et transfert de compétences par la formation." },
              { year: '2026', title: 'Certification Qualiopi', desc: "Masteria devient organisme de formation certifié Qualiopi. Les formations sont désormais finançables via OPCO." },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20,
                  padding: '18px 20px',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderLeft: '3px solid #2563EB',
                  borderRadius: '0 10px 10px 0',
                }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: '#1D4ED8' }}>{t.year}</div>
                  <div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{t.title}</div>
                    <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: '64px 32px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Certifications & labels</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 800, color: '#111', marginBottom: 32 }}>Une qualité reconnue</h2>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Certifié Qualiopi', 'Finançable OPCO', 'France · Suisse · Belgique'].map((c, i) => (
                <div key={i} style={{ padding: '13px 22px', background: '#F5F5F5', borderRadius: 10, fontSize: 14, fontWeight: 600, color: '#1C1C1C' }}>{c}</div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_GENERAL} title="Questions fréquentes sur Masteria" bg="#F9FAFB" />

      {/* CTA FINAL */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1E3A8A 100%)',
        color: '#fff', padding: '96px 32px', textAlign: 'center', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 620, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: '#fff' }}>
            Travaillons ensemble
          </h2>
          <p style={{ fontSize: 16, color: '#D1D5DB', marginBottom: 32, lineHeight: 1.7 }}>
            Que vous cherchiez un audit stratégique, un accompagnement opérationnel ou un programme de formation pour vos équipes, nous construisons la mission adaptée à vos enjeux.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0A0A0A',
              padding: '15px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 800,
              boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            }}>
              Contacter notre équipe <ArrowRight size={16} />
            </Link>
            <Link to="/conseil-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)', color: '#fff',
              padding: '15px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.14)',
            }}>
              Découvrir le conseil IA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactScreen() {
  const isMobile = useIsMobile();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demandeType, setDemandeType] = useState('formation'); // 'formation' | 'projet'
  const [format, setFormat] = useState('inter');
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedMetiers, setSelectedMetiers] = useState([]);
  const [selectedBesoins, setSelectedBesoins] = useState([]);

  const toggleBesoin = (value) => setSelectedBesoins(prev =>
    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
  );
  const BESOINS = [
    { value: 'conseil-audit', label: 'Conseil / audit IA', Icon: Compass },
    { value: 'automatisation', label: 'Automatisation de processus', Icon: Zap },
    { value: 'outil-application', label: "Développement d'outil ou d'application", Icon: Rocket },
    { value: 'agent-ia', label: "Développement d'agent IA", Icon: Target },
    { value: 'a-definir', label: 'Je ne sais pas encore', Icon: Lightbulb },
  ];
  const besoinsLabel = (vals) => vals.map(v => BESOINS.find(b => b.value === v)?.label || v);

  const toggleTool = (value) => setSelectedTools(prev =>
    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
  );
  const toggleMetier = (value) => setSelectedMetiers(prev =>
    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
  );

  const toolsLabel = (vals) => vals.map(v => {
    if (v === 'sur-mesure') return 'Sur mesure';
    if (v === 'ne-sais-pas') return 'À conseiller';
    const hub = HUBS.find(h => h.slug === v);
    if (hub?.id === 'sprint-ia') return 'Ateliers (Sprint IA · 3 h)';
    return hub?.tool || v;
  });
  const metiersLabel = (vals) => vals.map(v => METIERS.find(m => m.slug === v)?.label || v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData(e.target);
      // Type de demande (onglet actif) en champ caché transmis à Formspree
      data.set('type_demande', demandeType === 'projet' ? 'Conseil & projet sur mesure' : 'Formation');
      if (demandeType === 'formation') {
        // Ajouter les sélections dynamiques (pas dans des vrais inputs)
        data.set('outils_ia', selectedTools.length ? toolsLabel(selectedTools).join(', ') : 'Non précisé');
        data.set('metiers', selectedMetiers.length ? metiersLabel(selectedMetiers).join(', ') : 'Équipe mixte');
        data.set('format', format);
      } else {
        data.set('besoin', selectedBesoins.length ? besoinsLabel(selectedBesoins).join(', ') : 'À cadrer ensemble');
      }
      const res = await fetch('https://formspree.io/f/xzdyjbyn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
      } else {
        const body = await res.json().catch(() => ({}));
        console.error('Formspree error:', res.status, body);
        alert(`Erreur ${res.status} : ${body.error || 'envoi impossible'}. Merci de réessayer dans quelques instants.`);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert("Impossible d'envoyer le formulaire. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const inp = {
    width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 14,
    padding: '12px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10,
    color: '#0A0A0A', outline: 'none', background: '#fff',
    transition: 'border-color 150ms, box-shadow 150ms', boxSizing: 'border-box',
  };
  const lbl = { display: 'block', fontSize: 13, fontWeight: 700, color: '#0A0A0A', marginBottom: 6 };
  const grp = { marginBottom: 18 };
  const focus = e => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.12)'; };
  const blur  = e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; };


  return (
    <>
      <SEOHead
        title="Contact & devis : formation ou projet IA | Masteria"
        description="Contactez Masteria pour un devis : formation IA, conseil et audit, ou développement sur mesure. Réponse sous 24 h. France, Suisse, Belgique."
        slug="contact"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Contact', slug: 'contact' },
        ]}
      />

      {/* ════════════════════════ HERO clair ════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#FAFAF7', color: '#0A0A0A',
        padding: '72px 32px 60px',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: -100, left: '20%', width: 460, height: 460,
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1px solid #E5E7EB',
            borderRadius: 99, padding: '7px 16px', marginBottom: 20,
          }}>
            <Sparkles size={14} color="#D97706" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: '#374151' }}>
              Devis gratuit · Réponse sous 24 h ouvrées
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900,
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 18,
            color: '#0A0A0A',
          }}>
            Parlons de votre projet <span style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>IA</span>
          </h1>
          <p style={{
            fontSize: 17, color: '#4B5563', lineHeight: 1.65,
            maxWidth: 640, margin: '0 auto',
          }}>
            Formation de vos équipes, conseil et audit, ou développement sur mesure (automatisations, outils, agents IA). Décrivez votre besoin : nous revenons vers vous sous 24 h avec une proposition et un devis adaptés.
          </p>
          <div style={{
            display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap',
            marginTop: 28, fontSize: 13, color: '#6B7280',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <BadgeCheck size={15} color="#059669" /> Certifié Qualiopi
            </span>
            {demandeType === 'formation' && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Wallet size={15} color="#2563EB" /> Finançable OPCO
              </span>
            )}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={15} color="#D97706" /> France · Suisse · Belgique
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <UsersIcon size={15} color="#7C3AED" /> +1 500 professionnels formés
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACT + FORMULAIRE ════════════════════════ */}
      <div style={{ background: '#F9FAFB', padding: 'clamp(40px, 6vw, 64px) clamp(18px, 4vw, 32px) clamp(56px, 8vw, 96px)' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(260px, 340px) 1fr',
          gap: 'clamp(24px, 4vw, 40px)',
        }}>
          {/* ── Colonne gauche : infos de contact ── */}
          <div>
            <div style={{
              background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB',
              padding: 28, marginBottom: 20,
            }}>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800,
                color: '#0A0A0A', marginBottom: 20,
              }}>
                Nous contacter directement
              </h2>
              {[
                { Icon: Phone,    label: 'Téléphone', value: '06 67 75 41 28', href: 'tel:+33667754128' },
                { Icon: MapPin,   label: 'Adresse',   value: "17 rue d'Algérie, 69001 Lyon" },
                { Icon: Clock,    label: 'Délai de réponse', value: 'Sous 24 h ouvrées' },
                { Icon: Calendar, label: 'Modalités', value: 'Présentiel ou distanciel · France, Suisse, Belgique' },
              ].map((c, i, arr) => {
                const content = (
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: '#2563EB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px -4px rgba(37,99,235,0.4)',
                    }}>
                      <c.Icon size={17} color="#fff" strokeWidth={2} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 3 }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: 14, color: '#0A0A0A', fontWeight: 600, wordBreak: 'break-word' }}>
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <div key={i} style={{
                    padding: '14px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none',
                  }}>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        {content}
                      </a>
                    ) : content}
                  </div>
                );
              })}
            </div>

            {/* Carte réassurance financement */}
            <div style={{
              background: '#fff', border: '1px solid #E5E7EB',
              borderRadius: 16, padding: 24,
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#ECFDF5', border: '1px solid #A7F3D0',
                borderRadius: 8, padding: '6px 10px', marginBottom: 14,
                fontSize: 12, fontWeight: 700, color: '#059669',
              }}>
                <BadgeCheck size={13} /> 100 % finançable OPCO
              </div>
              <h3 style={{
                fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800,
                color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em',
              }}>
                Formation certifiée Qualiopi
              </h3>
              <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                Nos formations sont éligibles à une prise en charge par votre OPCO. Nous vous accompagnons dans les démarches administratives pour simplifier votre dossier.
              </p>
            </div>
          </div>

          {/* ── Colonne droite : formulaire ── */}
          <div style={{
            background: '#fff', borderRadius: 16,
            border: '1px solid #E5E7EB',
            padding: 'clamp(28px, 4vw, 44px)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.04)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '56px 0' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
                }}>
                  <CheckCircle2 size={36} color="#fff" strokeWidth={2.5} />
                </div>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', marginBottom: 10, letterSpacing: '-0.01em' }}>
                  Merci pour votre demande !
                </h2>
                <p style={{ fontSize: 15, color: '#4B5563', marginBottom: 32, lineHeight: 1.6, maxWidth: 420, margin: '0 auto 32px' }}>
                  Nous revenons vers vous sous <strong>24 h ouvrées</strong> avec une proposition adaptée à vos besoins.
                </p>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setSent(false)} style={{
                    background: '#F3F4F6', color: '#0A0A0A', border: 'none',
                    padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14,
                    cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  }}>
                    Nouvelle demande
                  </button>
                  <Link to="/" style={{
                    background: '#0A0A0A', color: '#fff',
                    padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14,
                    textDecoration: 'none',
                  }}>
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 20 }}>
                  <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: '#0A0A0A', marginBottom: 6, letterSpacing: '-0.01em' }}>
                    Demande de devis personnalisé
                  </h2>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.5 }}>
                    Quelques informations suffisent, nous nous chargeons du reste.
                  </p>
                </div>

                {/* Sélecteur d'onglet : Formation / Conseil & projet sur mesure */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
                  background: '#F3F4F6', border: '1px solid #E5E7EB',
                  borderRadius: 12, padding: 5, marginBottom: 24,
                }}>
                  {[
                    { id: 'formation', label: 'Formation', sub: 'Monter vos équipes en compétences', Icon: GraduationCap },
                    { id: 'projet', label: 'Conseil & projet sur mesure', sub: 'Audit, automatisation, outil, agent IA', Icon: Compass },
                  ].map(t => {
                    const active = demandeType === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setDemandeType(t.id)}
                        aria-pressed={active}
                        style={{
                          background: active ? '#fff' : 'transparent',
                          border: active ? '1.5px solid #2563EB' : '1.5px solid transparent',
                          borderRadius: 9, padding: '11px 14px',
                          cursor: 'pointer', textAlign: 'left',
                          fontFamily: 'DM Sans, sans-serif',
                          boxShadow: active ? '0 2px 8px rgba(37,99,235,0.10)' : 'none',
                          transition: 'all 150ms',
                        }}
                      >
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          fontSize: 13.5, fontWeight: 800,
                          color: active ? '#2563EB' : '#374151',
                        }}>
                          <t.Icon size={16} color={active ? '#2563EB' : '#6B7280'} strokeWidth={2.2} />
                          {t.label}
                        </span>
                        <span style={{ display: 'block', fontSize: 11.5, color: '#6B7280', marginTop: 3, lineHeight: 1.35 }}>
                          {t.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Étape 1 : identité */}
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 14 }}>
                  1 · Vos coordonnées
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  <div style={grp}>
                    <label style={lbl}>Prénom *</label>
                    <input name="prenom" style={inp} placeholder="Sophie" required onFocus={focus} onBlur={blur} />
                  </div>
                  <div style={grp}>
                    <label style={lbl}>Nom *</label>
                    <input name="nom" style={inp} placeholder="Martin" required onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  <div style={grp}>
                    <label style={lbl}>Email professionnel *</label>
                    <input name="email" type="email" style={inp} placeholder="contact@entreprise.fr" required onFocus={focus} onBlur={blur} />
                  </div>
                  <div style={grp}>
                    <label style={lbl}>Téléphone</label>
                    <input name="telephone" type="tel" style={inp} placeholder="+33 6 12 34 56 78" onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  <div style={grp}>
                    <label style={lbl}>Entreprise *</label>
                    <input name="entreprise" style={inp} placeholder="Nom de votre entreprise" required onFocus={focus} onBlur={blur} />
                  </div>
                  <div style={grp}>
                    <label style={lbl}>Votre fonction</label>
                    <input name="fonction" style={inp} placeholder="Ex : DRH, Directeur Marketing…" onFocus={focus} onBlur={blur} />
                  </div>
                </div>

                {/* Étape 2 — FORMATION : visible sur l'onglet Formation */}
                {demandeType === 'formation' && (
                <>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginTop: 12, marginBottom: 14 }}>
                  2 · Votre projet de formation
                </div>

                {/* Sélecteur 2 axes : OUTIL */}
                <div style={grp}>
                  <label style={lbl}>
                    Outil(s) IA <span style={{ fontWeight: 500, color: '#6B7280' }}>(plusieurs possibles)</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8 }}>
                    {[
                      ...HUBS.filter(h => h.id !== 'metiers').map(h => ({
                        value: h.slug,
                        label: h.id === 'sprint-ia' ? 'Ateliers (Sprint IA · 3 h)' : h.tool,
                        color: h.color,
                        logo: h.id,
                      })),
                      { value: 'sur-mesure', label: 'Sur mesure', color: '#F97316', icon: Sparkles },
                      { value: 'ne-sais-pas', label: 'À conseiller', color: '#6B7280', icon: Lightbulb },
                    ].map(t => {
                      const active = selectedTools.includes(t.value);
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => toggleTool(t.value)}
                          style={{
                            background: active ? `${t.color}12` : '#fff',
                            border: `1.5px solid ${active ? t.color : '#E5E7EB'}`,
                            borderRadius: 10, padding: '10px 12px',
                            cursor: 'pointer', textAlign: 'left',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: 13, fontWeight: active ? 800 : 600,
                            color: active ? t.color : '#0A0A0A',
                            display: 'flex', alignItems: 'center', gap: 10,
                            transition: 'all 150ms',
                          }}
                        >
                          <span style={{
                            width: 24, height: 24, flexShrink: 0,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {t.logo
                              ? <ToolLogo tool={t.logo} size={22} />
                              : <t.icon size={18} color={active ? t.color : '#6B7280'} strokeWidth={2} />
                            }
                          </span>
                          <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {t.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sélecteur 2 axes : MÉTIER */}
                <div style={grp}>
                  <label style={lbl}>
                    Thématique(s) / Métier(s){' '}
                    <span style={{ fontWeight: 500, color: '#6B7280' }}>
                      (plusieurs possibles, laisser vide = équipe mixte)
                    </span>
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    <button
                      type="button"
                      onClick={() => setSelectedMetiers([])}
                      style={{
                        background: selectedMetiers.length === 0 ? '#0A0A0A' : '#fff',
                        color: selectedMetiers.length === 0 ? '#fff' : '#475569',
                        border: selectedMetiers.length === 0 ? 'none' : '1px solid #E5E7EB',
                        borderRadius: 999,
                        padding: '7px 14px',
                        fontSize: 12.5,
                        fontWeight: selectedMetiers.length === 0 ? 700 : 500,
                        fontFamily: 'DM Sans, sans-serif',
                        cursor: 'pointer',
                        transition: 'all 150ms',
                      }}
                    >
                      Équipe mixte
                    </button>
                    {METIERS.map(m => {
                      const active = selectedMetiers.includes(m.slug);
                      return (
                        <button
                          key={m.slug}
                          type="button"
                          onClick={() => toggleMetier(m.slug)}
                          style={{
                            background: active ? '#0A0A0A' : '#fff',
                            color: active ? '#fff' : '#475569',
                            border: active ? 'none' : '1px solid #E5E7EB',
                            borderRadius: 999,
                            padding: '7px 14px',
                            fontSize: 12.5,
                            fontWeight: active ? 700 : 500,
                            fontFamily: 'DM Sans, sans-serif',
                            cursor: 'pointer',
                            transition: 'all 150ms',
                          }}
                        >
                          {m.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Récap de la sélection */}
                  {(selectedTools.length > 0 || selectedMetiers.length > 0) && (
                    <div style={{
                      marginTop: 12,
                      padding: '10px 14px',
                      background: '#F9FAFB',
                      border: '1px dashed #D1D5DB',
                      borderRadius: 10,
                      fontSize: 13,
                      color: '#374151',
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: 1.5,
                    }}>
                      <span style={{ color: '#6B7280', marginRight: 6 }}>Votre demande :</span>
                      <strong style={{ color: '#0A0A0A' }}>
                        {selectedTools.length > 0
                          ? `Formation ${toolsLabel(selectedTools).join(' + ')}`
                          : 'Outil à définir'}
                        {selectedMetiers.length > 0 && ` · pour ${metiersLabel(selectedMetiers).join(', ')}`}
                      </strong>
                    </div>
                  )}
                </div>

                <div style={grp}>
                  <label style={lbl}>Format</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 8 }}>
                    {[
                      { id: 'individuel',  title: 'Accompagnement individuel', sub: '1 participant · sur mesure' },
                      { id: 'intra',    title: 'Intra-entreprise',  sub: '12 participants max' },
                      { id: 'sur-mesure', title: 'Sur mesure',      sub: 'Programme dédié' },
                    ].map(f => {
                      const active = format === f.id;
                      return (
                        <button key={f.id} type="button" onClick={() => setFormat(f.id)} style={{
                          background: active ? '#EFF6FF' : '#fff',
                          border: `1.5px solid ${active ? '#2563EB' : '#E5E7EB'}`,
                          borderRadius: 10, padding: '12px 14px',
                          cursor: 'pointer', textAlign: 'left',
                          fontFamily: 'DM Sans, sans-serif',
                          transition: 'all 150ms',
                        }}>
                          <div style={{ fontSize: 13, fontWeight: 800, color: active ? '#2563EB' : '#0A0A0A' }}>
                            {f.title}
                          </div>
                          <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>
                            {f.sub}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  <div style={grp}>
                    <label style={lbl}>Nombre de participants</label>
                    <select name="nb_participants" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
                      {['1–5 personnes', '6–10 personnes', '11–20 personnes', '20+ personnes', 'Je ne sais pas encore'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div style={grp}>
                    <label style={lbl}>Délai souhaité</label>
                    <select name="delai" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
                      {['Dans le mois', 'Dans les 3 mois', 'Dans les 6 mois', 'Pas de date fixée'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                </>
                )}

                {/* Étape 2 — CONSEIL & PROJET SUR MESURE : visible sur l'onglet Projet */}
                {demandeType === 'projet' && (
                <>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginTop: 12, marginBottom: 14 }}>
                  2 · Votre besoin
                </div>

                {/* Type de besoin (choix multiples) */}
                <div style={grp}>
                  <label style={lbl}>
                    Type de besoin{' '}
                    <span style={{ fontWeight: 500, color: '#6B7280' }}>(plusieurs possibles)</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
                    {BESOINS.map(b => {
                      const active = selectedBesoins.includes(b.value);
                      return (
                        <button
                          key={b.value}
                          type="button"
                          onClick={() => toggleBesoin(b.value)}
                          aria-pressed={active}
                          style={{
                            background: active ? '#DBEAFE' : '#fff',
                            border: `1.5px solid ${active ? '#2563EB' : '#E5E7EB'}`,
                            borderRadius: 10, padding: '11px 14px',
                            cursor: 'pointer', textAlign: 'left',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: 13, fontWeight: active ? 800 : 600,
                            color: active ? '#2563EB' : '#0A0A0A',
                            display: 'flex', alignItems: 'center', gap: 10,
                            transition: 'all 150ms',
                          }}
                        >
                          <span style={{
                            width: 24, height: 24, flexShrink: 0,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <b.Icon size={18} color={active ? '#2563EB' : '#6B7280'} strokeWidth={2} />
                          </span>
                          <span style={{ minWidth: 0 }}>{b.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Description du projet */}
                <div style={grp}>
                  <label style={lbl}>Description du projet *</label>
                  <textarea
                    name="description_projet"
                    style={{ ...inp, resize: 'vertical' }}
                    rows={4}
                    placeholder="Contexte, objectif visé, processus ou outils concernés, systèmes en place (CRM, ERP, données), contraintes éventuelles…"
                    required={demandeType === 'projet'}
                    onFocus={focus}
                    onBlur={blur}
                  />
                </div>

                {/* Budget + échéance */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  <div style={grp}>
                    <label style={lbl}>Budget indicatif <span style={{ fontWeight: 400, color: '#6B7280' }}>(optionnel)</span></label>
                    <select name="budget" defaultValue="À définir" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
                      {['Moins de 10 k€', '10 – 30 k€', '30 – 80 k€', 'Plus de 80 k€', 'À définir'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div style={grp}>
                    <label style={lbl}>Échéance <span style={{ fontWeight: 400, color: '#6B7280' }}>(optionnel)</span></label>
                    <select name="echeance" defaultValue="Pas de date fixée" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
                      {['Dès que possible', 'Sous 1 à 3 mois', 'Sous 3 à 6 mois', 'Pas de date fixée'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                </>
                )}

                <div style={grp}>
                  <label style={lbl}>Message <span style={{ fontWeight: 400, color: '#6B7280' }}>(optionnel)</span></label>
                  <textarea name="message" style={{ ...inp, resize: 'vertical' }} rows={4} placeholder="Décrivez votre contexte : outils déjà utilisés, objectifs, enjeux métiers spécifiques…" onFocus={focus} onBlur={blur} />
                </div>

                <div style={grp}>
                  <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: '#4B5563', lineHeight: 1.55, cursor: 'pointer' }}>
                    <input type="checkbox" required style={{ marginTop: 3, accentColor: '#2563EB' }} />
                    <span>J'accepte que Masteria traite mes données pour me recontacter. <Link to="/" style={{ color: '#2563EB', textDecoration: 'underline' }}>Politique de confidentialité</Link></span>
                  </label>
                </div>

                <button type="submit" disabled={loading} style={{
                  width: '100%',
                  background: loading ? '#93C5FD' : 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
                  color: '#fff', border: 'none',
                  padding: '16px 28px', borderRadius: 12,
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 800,
                  cursor: loading ? 'wait' : 'pointer',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
                  transition: 'transform 150ms, box-shadow 150ms',
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.4)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.3)'; }}
                >
                  {loading ? 'Envoi en cours…' : <><Send size={16} /> Envoyer ma demande</>}
                </button>

                <div style={{
                  marginTop: 16, display: 'flex', gap: 16, justifyContent: 'center',
                  flexWrap: 'wrap', fontSize: 12, color: '#6B7280',
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <Clock size={12} /> Réponse sous 24 h
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <CheckCircle2 size={12} /> Gratuit et sans engagement
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ════════════════════════ FAQ (en bas seulement) ════════════════════════ */}
      <FAQSection items={FAQ_CONTACT} title="Questions fréquentes avant de nous contacter" bg="#fff" />
    </>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '120px 32px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <SEOHead title="Page introuvable | Masteria" description="Cette page n'existe pas." noindex={true} />
      <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 48, fontWeight: 900, marginBottom: 16 }}>404</h1>
      <p style={{ color: '#717171', marginBottom: 32 }}>Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" style={{ color: '#2563EB', fontWeight: 600 }}>Retour à l'accueil →</Link>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Si l'URL contient une ancre (#section), laisser le navigateur gérer
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

/* Amélioration UX du cluster conseil/dev — CÔTÉ CLIENT uniquement (n'altère pas le HTML
 * prérendu ni le SEO) : élévation premium des cartes au survol + apparition en fondu des
 * sections au scroll. Appliqué via le DOM pour couvrir toutes les pages du cluster sans
 * toucher à leurs styles inline. Respecte prefers-reduced-motion. */
function ClusterUX() {
  const { pathname } = useLocation();
  useEffect(() => {
    const slug = pathname.replace(/^\//, '');
    const isCluster =
      /^\/(conseil|agence|outils-ia|automatisation-ia|agents-ia|diagnostic-ia|methode-projet-ia|ia-|solutions-ia)/.test(pathname)
      || SOLUTION_SLUGS.includes(slug);
    if (!isCluster) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let onScroll;
    const reveal = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('main section.u-reveal:not(.is-revealed)').forEach((sec) => {
        if (sec.getBoundingClientRect().top < vh * 0.9) sec.classList.add('is-revealed');
      });
    };
    const apply = () => {
      const main = document.querySelector('main');
      if (!main || main.querySelectorAll('section').length < 2) return false;
      // (a) Cartes : élévation premium au survol (enfants des grilles, coins arrondis + bordure/ombre)
      main.querySelectorAll('div').forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.display !== 'grid') return;
        if (cs.gridTemplateColumns.split(' ').filter(Boolean).length < 2) return;
        for (const child of el.children) {
          const card = child.tagName === 'A' ? child.firstElementChild : child;
          if (!card || card.nodeType !== 1 || card.classList.contains('u-lift')) continue;
          const ccs = getComputedStyle(card);
          const rounded = parseInt(ccs.borderTopLeftRadius, 10) >= 12;
          const edged = parseFloat(ccs.borderTopWidth) >= 1 || ccs.boxShadow !== 'none';
          if (rounded && edged) card.classList.add('u-lift');
        }
      });
      // (b) Fondu au scroll : marque les sections sous la ligne de flottaison, révèle au scroll.
      // Listener de scroll (et non IntersectionObserver) : fiable, et aucune section révélable
      // ne reste cachée (celles non révélées sont toujours hors-écran).
      if (!reduce) {
        const vh = window.innerHeight;
        main.querySelectorAll('section').forEach((sec) => {
          if (sec.getBoundingClientRect().top > vh * 0.92) sec.classList.add('u-reveal');
        });
        reveal();
        onScroll = () => reveal();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        // Filets : révèle aussi peu après le montage (mise en page tardive)
        setTimeout(reveal, 400);
        setTimeout(reveal, 1200);
      }
      return true;
    };
    let tries = 0, timer;
    const tick = () => { if (!apply() && tries++ < 25) timer = setTimeout(tick, 80); };
    timer = setTimeout(tick, 50);
    return () => {
      clearTimeout(timer);
      if (onScroll) { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); }
    };
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <ClusterUX />
      <MasteriaHeader />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <main id="contenu">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formations" element={<FormationsScreen />} />
        <Route path="/formations/:id" element={<FormationDetailScreen />} />
        <Route path="/centre-formation-ia-entreprise" element={<AboutScreen />} />
        <Route path="/conseil-intelligence-artificielle" element={<ConseilIAPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/veille-ia" element={<VeillePage />} />
        {/* Les segments statiques doivent primer sur le paramètre :date. */}
        <Route path="/veille-ia/publications" element={<VeillePublicationsPage />} />
        <Route path="/veille-ia/a-propos" element={<VeilleAProposPage />} />
        <Route path="/veille-ia/:date" element={<VeilleEditionPage />} />

        {/* Veille IA en anglais. Mêmes composants, prop lang : les libellés
            viennent de data/veille-i18n.js et les données de veille-data/en/.
            Les hreflang croisés relient chaque page à sa jumelle française. */}
        <Route path="/en/ai-watch" element={<VeillePage lang="en" />} />
        <Route path="/en/ai-watch/publications" element={<VeillePublicationsPage lang="en" />} />
        <Route path="/en/ai-watch/:date" element={<VeilleEditionPage lang="en" />} />
        <Route path="/contact" element={<ContactScreen />} />
        {/* Hub pages */}
        {/* Hub pages — URLs canoniques */}
        <Route path="/formation-chatgpt" element={<HubPage />} />
        <Route path="/formation-claude-ia" element={<HubPage />} />
        <Route path="/formation-mistral-ai" element={<HubPage />} />
        <Route path="/formation-microsoft-copilot" element={<HubPage />} />
        <Route path="/formation-gemini-entreprise" element={<HubPage />} />
        <Route path="/formation-sprint-ia" element={<HubPage />} />
        <Route path="/formation-multi-outils" element={<HubPage />} />
        {/* Pages géo : 4 outils × 8 villes */}
        {getAllGeoCombinations().map(({ slug }) => (
          <Route key={slug} path={`/${slug}`} element={<GeoPage />} />
        ))}
        {/* Pages géo génériques : /formation-ia-{ville} */}
        {GEO_DESTINATIONS.map(dest => (
          <Route key={geoIaSlug(dest.slug)} path={`/${geoIaSlug(dest.slug)}`} element={<GeoIAGenericPage />} />
        ))}
        {/* Pages éditoriales transversales (CPF, distanciel, IA générative) */}
        {['formation-intelligence-artificielle-cpf','formation-intelligence-artificielle-distanciel','formation-intelligence-artificielle-generative'].map(s => (
          <Route key={s} path={`/${s}`} element={<TopicLandingPage />} />
        ))}
        <Route path="/formation-automatisation-ia" element={<AutomatisationIAPage />} />
        <Route path="/formation-ia-qualiopi" element={<QualiopiPage />} />
        <Route path="/financement-formation-ia" element={<FinancementPage />} />
        {/* Clusters conseil / automatisation / agents / agence (juin 2026) */}
        <Route path="/conseil-strategie-ia" element={<ConseilStrategieIAPage />} />
        <Route path="/conseil-data-ia" element={<ConseilDataIAPage />} />
        <Route path="/automatisation-ia" element={<AutomatisationIAGuidePage />} />
        <Route path="/agence-automatisation-ia" element={<AgenceAutomatisationIAPage />} />
        <Route path="/agents-ia-entreprise" element={<AgentsIAEntreprisePage />} />
        <Route path="/agence-ia" element={<AgenceIAPage />} />
        <Route path="/meilleure-agence-ia" element={<MeilleureAgenceIAPage />} />
        <Route path="/meilleur-cabinet-conseil-ia" element={<MeilleurCabinetConseilIAPage />} />
        <Route path="/meilleure-formation-ia" element={<MeilleureFormationIAPage />} />
        <Route path="/consultant-ia" element={<ConsultantIAPage />} />
        <Route path="/etudes-de-cas-ia" element={<EtudesDeCasIAPage />} />
        <Route path="/presse" element={<PressePage />} />
        <Route path="/quel-opco" element={<QuelOpcoPage />} />
        <Route path="/test-maturite-ia" element={<TestMaturiteIAPage />} />
        <Route path="/quel-outil-ia" element={<QuelOutilIAPage />} />
        <Route path="/bibliotheque-de-prompts" element={<BibliothequePromptsPage />} />
        <Route path="/agence-developpement-ia" element={<AgenceDeveloppementIAPage />} />
        <Route path="/automatiser-sa-veille-ia" element={<AutomatiserVeilleIAPage />} />
        <Route path="/outils-veille-ia" element={<OutilsVeilleIAPage />} />
        <Route path="/veille-concurrentielle-ia" element={<VeilleConcurrentielleIAPage />} />
        <Route path="/agence-ia-marketing" element={<AgenceIAMarketingPage />} />
        <Route path="/agence-seo-ia" element={<AgenceSeoIAPage />} />
        <Route path="/audit-seo-ia" element={<AuditSeoIAPage />} />
        <Route path="/audit-geo-ia" element={<AuditGeoIAPage />} />
        <Route path="/agence-ia-lyon" element={<AgenceGeoPage />} />
        <Route path="/agence-ia-annecy" element={<AgenceGeoPage />} />
        <Route path="/agence-ia-paris" element={<AgenceGeoPage />} />
        <Route path="/agence-ia-geneve" element={<AgenceGeoPage />} />
        <Route path="/agence-ia-marseille" element={<AgenceGeoPage />} />
        {/* Cluster secteurs + solutions + offres (juin 2026) */}
        <Route path="/ia-secteurs" element={<SecteursHubPage />} />
        {SECTEUR_SLUGS.map(s => (
          <Route key={s} path={`/${s}`} element={<SecteurIAPage />} />
        ))}
        <Route path="/solutions-ia" element={<SolutionsHubPage />} />
        {SOLUTION_SLUGS.map(s => (
          <Route key={s} path={`/${s}`} element={<SolutionIAPage />} />
        ))}
        <Route path="/diagnostic-ia" element={<DiagnosticIAPage />} />
        <Route path="/audit-ia" element={<AuditIAPage />} />
        <Route path="/accompagnement-ia" element={<AccompagnementIAPage />} />
        <Route path="/acculturation-ia" element={<AcculturationIAPage />} />
        <Route path="/formation-ia-entreprise" element={<FormationIAEntreprisePage />} />
        <Route path="/prestataire-ia" element={<PrestataireIAPage />} />
        <Route path="/coaching-ia" element={<CoachingIAPage />} />
        <Route path="/methode-projet-ia" element={<MethodeProjetIAPage />} />
        <Route path="/prix-projet-ia" element={<PrixProjetIAPage />} />
        <Route path="/gouvernance-ia" element={<GouvernanceIAPage />} />
        <Route path="/charte-ia-entreprise" element={<CharteIAEntreprisePage />} />
        <Route path="/ia-responsable" element={<IAResponsablePage />} />
        <Route path="/ia-et-rgpd" element={<IAEtRGPDPage />} />
        <Route path="/cas-usage-ia-entreprise" element={<CasUsageIAEntreprisePage />} />
        <Route path="/ia-generative-entreprise" element={<IAGenerativeEntreprisePage />} />
        <Route path="/outils-ia-sur-mesure" element={<OutilsIASurMesurePage />} />
        <Route path="/formation-intelligence-artificielle" element={<MetiersHubPage />} />
        <Route path="/formation-ia-debutant" element={<DebutantPage />} />
        <Route path="/glossaire-ia" element={<GlossaryPage />} />
        <Route path="/quelle-est-la-meilleure-ia" element={<ComparisonsHubPage />} />
        <Route path="/chatgpt-vs-claude" element={<ComparisonPage slug="chatgpt-vs-claude" />} />
        <Route path="/copilot-vs-chatgpt" element={<ComparisonPage slug="copilot-vs-chatgpt" />} />
        <Route path="/meilleure-ia-entreprise-2026" element={<ComparisonPage slug="meilleure-ia-entreprise-2026" />} />
        <Route path="/meilleure-ia-pour-coder" element={<ComparisonPage slug="meilleure-ia-pour-coder" />} />
        <Route path="/meilleur-agent-ia" element={<ComparisonPage slug="meilleur-agent-ia" />} />
        <Route path="/mistral-vs-chatgpt" element={<ComparisonPage slug="mistral-vs-chatgpt" />} />
        <Route path="/gemini-vs-copilot" element={<ComparisonPage slug="gemini-vs-copilot" />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/competences-claude-eet" element={<CompetencesClaudeEET />} />
        <Route path="/artefacts-claude-entreprise" element={<ArtefactsClaudeEntreprise />} />
        <Route path="/securite-claude-entreprise" element={<SecuriteClaudeEntreprise />} />

        <Route path="/formation-ai-act" element={<FormationAIActPage />} />
        <Route path="/formation-agents-ia" element={<FormationAgentsIAPage />} />
        <Route path="/formation-ia-comex" element={<FormationIAComexPage />} />
        <Route path="/formation-n8n" element={<FormationN8nPage />} />
        <Route path="/formation-make" element={<FormationMakePage />} />
        <Route path="/formation-zapier" element={<FormationZapierPage />} />
        <Route path="/formation-cse-ia" element={<FormationCseIaPage />} />
        <Route path="/formation-data-ia" element={<FormationDataIaPage />} />
        {/* Pages par métier, routes explicites (React Router v7 ne supporte pas les params inline) */}
        {METIER_SLUGS.map(m => {
          const Page = METIER_PAGES[m]
          return <Route key={m} path={`/formation-ia-${m}`} element={<Page />} />
        })}
        {/* Spoke pages, dynamic via slug */}
        {SPOKE_SLUGS.map(slug => (
          <Route key={slug} path={`/${slug}`} element={<SpokePage />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <MasteriaFooter />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
