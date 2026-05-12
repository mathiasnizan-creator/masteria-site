import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  Mail, MapPin, Clock, BadgeCheck, Wallet, Users as UsersIcon,
  ArrowRight, Sparkles, Send, CheckCircle2, Calendar, Building2,
  Compass, GraduationCap, Handshake, Target, ShieldCheck, Heart,
  Lightbulb, Rocket, Phone,
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
import { HUBS, METIERS } from './data/seo-pages';
import HomePage from './pages/HomePage';
// Pages secondaires lazy-loadées pour réduire le bundle initial (perf LCP/TBT)
const HubPage = lazy(() => import('./pages/HubPage'));
const SpokePage = lazy(() => import('./pages/SpokePage'));
const MetiersHubPage = lazy(() => import('./pages/MetiersHubPage'));
const MetierPage = lazy(() => import('./pages/MetierPage'));
const ConseilIAPage = lazy(() => import('./pages/ConseilIAPage'));
const GeoPage = lazy(() => import('./pages/GeoPage'));
const GeoIAGenericPage = lazy(() => import('./pages/GeoIAGenericPage'));
const TopicLandingPage = lazy(() => import('./pages/TopicLandingPage'));
const QualiopiPage = lazy(() => import('./pages/QualiopiPage'));
const FinancementPage = lazy(() => import('./pages/FinancementPage'));
const DebutantPage = lazy(() => import('./pages/DebutantPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const ComparisonPage = lazy(() => import('./pages/ComparisonPage'));
const ComparisonsHubPage = lazy(() => import('./pages/ComparisonsHubPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));
const MentionsLegalesPage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.MentionsLegalesPage })));
const PolitiqueConfidentialitePage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.PolitiqueConfidentialitePage })));
const CompetencesClaudeEET = lazy(() => import('./pages/CompetencesClaudeEET'));
import { SPOKES } from './data/seo-pages';
import { getAllGeoCombinations, GEO_DESTINATIONS, geoIaSlug } from './data/geo-data';

const TRAININGS = [
  { id: 'ia-initiation', tag: 'IA & ChatGPT', title: "Initiation à l'IA pour les professionnels", desc: "Maîtrisez les fondamentaux de l'IA en 1 journée. Aucun prérequis technique.", price: '760 €', unit: '/ pers / jour', color: '#DBEAFE', duration: '1 jour', level: 'Débutant',
    objectives: ["Comprendre ce qu'est l'IA et ses limites", "Utiliser ChatGPT dans votre quotidien professionnel", "Identifier les cas d'usage dans votre secteur", "Adopter une posture éthique face à l'IA"],
    program: [{ title: 'Matin, Les fondamentaux', items: ["Qu'est-ce que l'IA ?", 'Les grands modèles de langage', "ChatGPT & Co : tour d'horizon", 'Démonstrations en direct'] }, { title: 'Après-midi, Mise en pratique', items: ['Premiers prompts', "Cas d'usage par métier", 'Sécurité et confidentialité', "Plan d'action personnel"] }] },
  { id: 'prompt-engineering', tag: 'Prompt Engineering', title: 'Maîtriser le Prompt Engineering', desc: 'Formulez des prompts précis pour décupler votre productivité au quotidien.', price: '760 €', unit: '/ pers / jour', color: '#FEF3C7', duration: '1 jour', level: 'Intermédiaire',
    objectives: ["Comprendre la structure d'un prompt efficace", 'Utiliser les techniques avancées (chain-of-thought, few-shot)', 'Construire des templates réutilisables', 'Automatiser des tâches répétitives'],
    program: [{ title: 'Matin, Théorie & Méthodes', items: ["Anatomie d'un prompt", 'Techniques : zero-shot, few-shot, chain-of-thought', 'Rôles et personas', 'Instructions et contraintes'] }, { title: 'Après-midi, Ateliers pratiques', items: ['Bibliothèque de prompts métier', 'Optimisation itérative', 'Intégration dans votre workflow', 'Templates à emporter'] }] },
  { id: 'marketing-ia', tag: 'Marketing IA', title: 'IA pour les équipes Marketing', desc: "Contenus, campagnes, analyses : boostez votre marketing avec l'IA.", price: '760 €', unit: '/ pers / jour', color: '#DCFCE7', duration: '1 jour', level: 'Tous niveaux',
    objectives: ['Produire des contenus 3× plus vite', "Optimiser vos campagnes avec l'IA", 'Analyser la data marketing intelligemment', 'Créer des visuels avec les IA génératives'],
    program: [{ title: 'Matin, Contenu & Copywriting', items: ['Rédaction IA : articles, posts, emails', 'SEO assisté par IA', 'Tone of voice et cohérence de marque', 'Outils : ChatGPT, Jasper, Copy.ai'] }, { title: 'Après-midi, Campagnes & Analytics', items: ['Segmentation et personnalisation', 'A/B testing assisté', 'Reporting automatisé', 'Midjourney & DALL-E pour les visuels'] }] },
  { id: 'rh-ia', tag: 'Ressources Humaines', title: 'IA appliquée aux RH', desc: "Recrutement, onboarding, formation interne : l'IA au service des RH.", price: '760 €', unit: '/ pers / jour', color: '#F3E8FF', duration: '1 jour', level: 'Tous niveaux',
    objectives: ['Accélérer le sourcing et la présélection', "Améliorer l'expérience candidat", 'Automatiser les tâches administratives', "Déployer l'IA pour la formation interne"],
    program: [{ title: 'Matin, Recrutement & Sourcing', items: ["Rédaction d'offres optimisées", 'Analyse de CV par IA', 'Entretiens assistés', 'Outils RH IA du marché'] }, { title: 'Après-midi, RH opérationnel', items: ['Onboarding personnalisé', "Formation continue avec l'IA", 'Gestion de la performance', 'Aspects légaux et éthiques'] }] },
  { id: 'appels-offres', tag: "Appels d'offres", title: "Répondre aux appels d'offres avec l'IA", desc: "Gagnez du temps et améliorez vos réponses grâce à l'IA générative.", price: '760 €', unit: '/ pers / jour', color: '#FFE4E6', duration: '1 jour', level: 'Intermédiaire',
    objectives: ['Analyser un cahier des charges rapidement', 'Rédiger des réponses percutantes', 'Construire une bibliothèque de réponses types', 'Améliorer votre taux de succès'],
    program: [{ title: 'Matin, Analyse & Stratégie', items: ['Dépouillement de cahier des charges', 'Identification des critères clés', 'Analyse concurrentielle', 'Stratégie de réponse'] }, { title: 'Après-midi, Rédaction assistée', items: ['Structuration de la réponse', 'Prompts spécialisés AO', 'Relecture et optimisation', 'Base de connaissances AO'] }] },
  { id: 'intra', tag: 'Intra-entreprise', title: 'Formation sur mesure en intra', desc: "Jusqu'à 12 participants, contenu 100% personnalisé, à votre rythme.", price: '1 500 €', unit: '/ jour / groupe', color: '#F0F0F0', duration: 'Sur mesure', level: 'Tous niveaux',
    objectives: ['Programme 100% adapté à votre secteur', "Cas d'usage de votre entreprise", "Jusqu'à 12 participants simultanément", 'Suivi post-formation inclus'],
    program: [{ title: 'Phase 1, Cadrage', items: ['Audit de vos besoins', 'Définition des objectifs pédagogiques', 'Construction du programme', 'Validation avec vos équipes'] }, { title: 'Phase 2, Formation', items: ['Animation présentiel ou distanciel', 'Exercices adaptés à vos outils', 'Supports personnalisés', 'Certification des participants'] }] },
];

function _HomeScreen_DEPRECATED() {
  const navigate = useNavigate();
  const testimonials = [
    { name: 'Sophie M.', role: 'DRH, PME industrielle', quote: "En une journée, mon équipe a compris comment l'IA peut transformer notre quotidien. Concret et immédiatement applicable." },
    { name: 'Laurent B.', role: 'Directeur Marketing', quote: "Masteria a su adapter la formation à nos enjeux. Nos campagnes sont maintenant 3× plus rapides à produire." },
    { name: 'Claire D.', role: "Responsable RH, groupe 800 salariés", quote: "La pédagogie est excellente. Nos équipes utilisent l'IA quotidiennement, sans aucun prérequis technique." },
  ];
  return (
    <>
      <SEOHead
        title="Formation IA pour entreprises | Masteria, Certifié Qualiopi"
        description="Centre de formation IA certifié Qualiopi. +1 500 professionnels formés. Formations finançables OPCO. Présentiel et distanciel partout en France."
        slug=""
      />
      <section style={{ background: '#fff', padding: '88px 32px 72px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: '#F5F5F5', borderRadius: 999, padding: '5px 16px', marginBottom: 28 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A4A4A' }}>Certifié Qualiopi · Depuis 2022</span>
            </div>
            <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 52, fontWeight: 900, color: '#111', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 22 }}>
              Formez vos équipes<br />à l'IA,{' '}
              <span style={{ color: '#2563EB' }}>concrètement.</span>
            </h1>
            <p style={{ fontSize: 17, color: '#4A4A4A', lineHeight: 1.65, marginBottom: 36, maxWidth: 440 }}>
              Masteria démocratise l'intelligence artificielle en entreprise. Des formations courtes, opérationnelles et adaptées à chaque métier.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <PrimaryBtn onClick={() => navigate('/formations')}>Découvrir les formations</PrimaryBtn>
              <SecBtn onClick={() => navigate('/contact')}>Demander un devis →</SecBtn>
            </div>
            <div style={{ display: 'flex', gap: 32, marginTop: 40, paddingTop: 32, borderTop: '1px solid #F0F0F0' }}>
              {[{ num: '+1 500', label: 'Professionnels formés' }, { num: '98%', label: 'Satisfaction' }, { num: '+6h', label: 'Productivité / semaine' }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#111', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#F5F5F5', borderRadius: 20, padding: '28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '16px 18px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>Votre prompt</div>
              <div style={{ fontSize: 13, color: '#1C1C1C', lineHeight: 1.55 }}>« Rédige un email de relance client professionnel pour notre offre de conseil… »</div>
            </div>
            <div style={{ background: '#1C1C1C', borderRadius: 10, padding: '16px 18px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#666', marginBottom: 8 }}>Réponse IA</div>
              <div style={{ fontSize: 13, color: '#E0E0E0', lineHeight: 1.6 }}>
                <strong style={{ color: '#fff' }}>Objet :</strong> Suivi de notre proposition, Réf. 2025-047<br /><br />
                Madame, Monsieur,<br />Suite à notre entretien du 14 avril, je me permets de revenir vers vous concernant…
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: '10px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', fontSize: 12, color: '#4A4A4A', fontWeight: 500 }}>⚡ Temps gagné : 40 min</div>
              <div style={{ flex: 1, background: '#DCFCE7', borderRadius: 8, padding: '10px 14px', fontSize: 12, color: '#16A34A', fontWeight: 700 }}>✓ Résultat validé</div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <section style={{ padding: '80px 0', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px' }}>
          <FadeIn>
            <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Nos formations</div>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 34, fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Concrètes, finançables,<br />immédiatement applicables</h2>
              </div>
              <SecBtn onClick={() => navigate('/formations')}>Voir tout le catalogue →</SecBtn>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 20 }}>
            {TRAININGS.slice(0, 4).map((t, i) => (
              <FadeIn key={t.id} delay={i * 70}>
                <TrainingCard {...t} onClick={() => navigate(`/formations/${t.id}`)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px' }}>
          <FadeIn>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Témoignages</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 32, fontWeight: 800, color: '#111', letterSpacing: '-0.02em', marginBottom: 40 }}>Ce que disent nos apprenants</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div style={{ background: '#F8F8F8', borderRadius: 12, padding: '28px 26px' }}>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#2A2A2A', marginBottom: 20, fontStyle: 'italic' }}>« {t.quote} »</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1C1C1C' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{t.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <FadeIn>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Notre histoire</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 32, fontWeight: 800, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>L'IA au service des hommes, pas l'inverse</h2>
            <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.75, marginBottom: 28 }}>Fondé en 2022 par Mathias Nizan, consultant en transformation digitale, Masteria est né d'une conviction : l'IA doit être accessible à tous les professionnels, quel que soit leur niveau technique.</p>
            <SecBtn onClick={() => navigate('/centre-formation-ia-entreprise')}>Découvrir notre histoire →</SecBtn>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ background: '#1C1C1C', borderRadius: 16, padding: '36px' }}>
              <div style={{ width: 36, height: 2, background: '#2563EB', marginBottom: 20 }} />
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#fff', marginBottom: 24, lineHeight: 1.4 }}>« Notre mission : démocratiser l'IA en entreprise, concrètement et éthiquement. »</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Mathias Nizan</div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>Fondateur, Masteria</div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection items={FAQ_GENERAL} title="Questions fréquentes" />

      <section style={{ background: '#111', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 800, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 14 }}>Prêt à former vos équipes à l'IA ?</h2>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 32, lineHeight: 1.65 }}>Finançable OPCO · Certifié Qualiopi · France, Suisse et Belgique</p>
          <PrimaryBtn onClick={() => navigate('/contact')} style={{ background: '#fff', color: '#111', fontSize: 16, padding: '15px 36px' }}>Demander un devis gratuit</PrimaryBtn>
        </div>
      </section>
    </>
  );
}

function FormationsScreen() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Tout');
  const categories = ['Tout', 'IA & ChatGPT', 'Prompt Engineering', 'Marketing IA', 'Ressources Humaines', "Appels d'offres", 'Intra-entreprise'];
  const filtered = filter === 'Tout' ? TRAININGS : TRAININGS.filter(t => t.tag === filter);
  return (
    <div style={{ padding: '64px 32px 96px' }}>
      <SEOHead
        title="Toutes nos formations IA | Masteria, Certifié Qualiopi"
        description="Inter-entreprises ou intra, en présentiel ou à distance. Certifiées Qualiopi, finançables via votre OPCO."
        slug="formations"
        noindex={true}
      />
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Catalogue</div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>Toutes nos formations</h1>
          <p style={{ fontSize: 16, color: '#717171', maxWidth: 560, lineHeight: 1.65, marginBottom: 28 }}>Inter-entreprises ou intra, en présentiel ou à distance. Certifiées Qualiopi, finançables via votre OPCO.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: filter === c ? 700 : 500, background: filter === c ? '#1C1C1C' : '#F0F0F0', color: filter === c ? '#fff' : '#4A4A4A', border: 'none', borderRadius: 999, padding: '7px 16px', cursor: 'pointer', transition: 'all 150ms' }}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
          {filtered.map(t => <TrainingCard key={t.id} {...t} onClick={() => navigate(`/formations/${t.id}`)} />)}
        </div>
        <FadeIn>
          <div style={{ background: '#F8F8F8', borderRadius: 14, padding: '24px 28px', display: 'flex', gap: 18, alignItems: 'center' }}>
            <div style={{ width: 42, height: 42, background: '#1C1C1C', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>✓</span>
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
  const navigate = useNavigate();
  return (
    <div>
      <SEOHead
        title="À propos de Masteria | Cabinet conseil & centre de formation IA"
        description="Masteria, cabinet de conseil et centre de formation IA certifié Qualiopi. Fondé par Mathias Nizan en 2022. Notre mission : rendre l'IA accessible, concrète et éthique pour toutes les entreprises."
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
              { year: '2023', title: 'Certification Qualiopi', desc: "Masteria devient organisme de formation certifié Qualiopi. Toutes les formations sont désormais finançables à 100 % via OPCO." },
              { year: '2024', title: '+1 500 professionnels formés', desc: "Masteria accompagne des PME, ETI et grands groupes en France, Suisse et Belgique. 98 % de taux de satisfaction, +6h gagnées par semaine par collaborateur formé." },
              { year: '2025', title: 'Cabinet conseil + formation', desc: "Le positionnement hybride se consolide : audit stratégique, accompagnement opérationnel et transfert de compétences par des formations certifiées." },
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
  const [format, setFormat] = useState('inter');
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedMetiers, setSelectedMetiers] = useState([]);

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
      // Ajouter les sélections dynamiques (pas dans des vrais inputs)
      data.set('outils_ia', selectedTools.length ? toolsLabel(selectedTools).join(', ') : 'Non précisé');
      data.set('metiers', selectedMetiers.length ? metiersLabel(selectedMetiers).join(', ') : 'Équipe mixte');
      data.set('format', format);
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
        title="Contacter notre équipe, Devis formation IA gratuit sous 24h | Masteria"
        description="Contactez Masteria pour un devis formation IA personnalisé. Réponse sous 24h. Formations ChatGPT, Copilot, Gemini, Claude. Certifié Qualiopi, finançable OPCO."
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
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>formation IA</span>
          </h1>
          <p style={{
            fontSize: 17, color: '#4B5563', lineHeight: 1.65,
            maxWidth: 620, margin: '0 auto',
          }}>
            Dites-nous combien de personnes former et sur quel outil. Nous revenons vers vous sous 24 h avec un programme et un devis adaptés à vos équipes.
          </p>
          <div style={{
            display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap',
            marginTop: 28, fontSize: 13, color: '#6B7280',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <BadgeCheck size={15} color="#059669" /> Certifié Qualiopi
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Wallet size={15} color="#2563EB" /> Finançable OPCO
            </span>
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
                { Icon: MapPin,   label: 'Adresse',   value: '17 Rue Richan, 69004 Lyon' },
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
                <div style={{ marginBottom: 24 }}>
                  <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: '#0A0A0A', marginBottom: 6, letterSpacing: '-0.01em' }}>
                    Demande de devis personnalisé
                  </h2>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.5 }}>
                    Quelques informations suffisent, nous nous chargeons du reste.
                  </p>
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

                {/* Étape 2 : projet */}
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
                      { id: 'inter',    title: 'Inter-entreprises', sub: '8 participants max' },
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

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <MasteriaHeader />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formations" element={<FormationsScreen />} />
        <Route path="/formations/:id" element={<FormationDetailScreen />} />
        <Route path="/centre-formation-ia-entreprise" element={<AboutScreen />} />
        <Route path="/conseil-intelligence-artificielle" element={<ConseilIAPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
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
        <Route path="/formation-ia-qualiopi" element={<QualiopiPage />} />
        <Route path="/financement-formation-ia" element={<FinancementPage />} />
        <Route path="/formation-intelligence-artificielle" element={<MetiersHubPage />} />
        <Route path="/formation-ia-debutant" element={<DebutantPage />} />
        <Route path="/glossaire-ia" element={<GlossaryPage />} />
        <Route path="/quelle-est-la-meilleure-ia" element={<ComparisonsHubPage />} />
        <Route path="/chatgpt-vs-claude" element={<ComparisonPage slug="chatgpt-vs-claude" />} />
        <Route path="/copilot-vs-chatgpt" element={<ComparisonPage slug="copilot-vs-chatgpt" />} />
        <Route path="/meilleure-ia-entreprise-2026" element={<ComparisonPage slug="meilleure-ia-entreprise-2026" />} />
        <Route path="/meilleure-ia-pour-coder" element={<ComparisonPage slug="meilleure-ia-pour-coder" />} />
        <Route path="/meilleur-agent-ia" element={<ComparisonPage slug="meilleur-agent-ia" />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/competences-claude-eet" element={<CompetencesClaudeEET />} />
        {/* Pages par métier, routes explicites (React Router v7 ne supporte pas les params inline) */}
        {['marketing','ressources-humaines','commercial','finance','communication','management','assistante','seo','service-client','informatique','pedagogique','achats','transverse'].map(m => (
          <Route key={m} path={`/formation-ia-${m}`} element={<MetierPage />} />
        ))}
        {/* Spoke pages, dynamic via slug */}
        {SPOKES.map(spoke => (
          <Route key={spoke.slug} path={`/${spoke.slug}`} element={<SpokePage />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MasteriaFooter />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
