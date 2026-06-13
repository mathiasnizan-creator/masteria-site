import { Link } from 'react-router-dom'
import {
  ArrowRight, Boxes, BrainCircuit, Building2, Check, CheckCircle2, Clock, Compass,
  Cpu, GraduationCap, LineChart, Scale, Search, ShieldCheck, Sparkles, Target,
  Users, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { FAQSection } from '../components/screens2'

/* ───────── Jetons de style (charte cabinet) ───────── */

const BLUE = '#2563EB'
const BLUE_SOFT = '#DBEAFE'
const INK = '#0A0A0A'
const GREY_700 = '#374151'
const GREY_500 = '#6B7280'
const BORDER = '#E5E7EB'
const BG_SOFT = '#F9FAFB'
const SECTION_PAD = 'clamp(64px, 9vw, 110px) clamp(20px, 4vw, 32px)'

const kickerStyle = {
  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: BLUE, marginBottom: 14,
}
const h2Style = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
  color: INK, lineHeight: 1.15, letterSpacing: '-0.02em',
  marginBottom: 18,
}
const cardStyle = {
  background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 30,
}
const iconTileStyle = {
  width: 44, height: 44, borderRadius: 12, background: BLUE_SOFT,
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}

/* ───────── Données locales ───────── */

const SERVICES = [
  {
    Icon: Compass,
    title: 'Audit IA & diagnostic',
    desc: "Nous cartographions vos processus, identifions les cas d'usage à plus fort ROI et évaluons la maturité IA de vos équipes.",
    deliverables: [
      'Cartographie des cas d\'usage prioritaires',
      'Matrice impact × effort sur 12 mois',
      'Analyse de maturité par fonction',
      'Roadmap d\'implémentation chiffrée',
    ],
  },
  {
    Icon: Target,
    title: 'Stratégie & gouvernance IA',
    desc: "Nous vous aidons à définir une vision IA alignée sur votre business, à structurer la gouvernance et à cadrer les usages en interne.",
    deliverables: [
      'Vision et ambition IA à 3 ans',
      'Charte d\'usage interne (RGPD, sécurité)',
      'Gouvernance et comités de pilotage',
      'Indicateurs de succès',
    ],
  },
  {
    Icon: Workflow,
    title: 'Accompagnement opérationnel',
    desc: "Nous travaillons aux côtés de vos équipes pour prototyper, déployer et industrialiser des cas d'usage concrets.",
    deliverables: [
      'Ateliers d\'idéation par métier',
      'Prototypage rapide (POC)',
      'Bibliothèque de prompts sur mesure',
      'Transfert de compétences',
    ],
  },
  {
    Icon: BrainCircuit,
    title: 'Transformation culturelle',
    desc: "Acculturation, communication interne, plan de formation : nous embarquons l'ensemble de l'organisation dans la dynamique IA.",
    deliverables: [
      'Plan d\'acculturation IA',
      'Communication interne & change',
      'Programme de formation certifié Qualiopi',
      'Ambassadeurs IA par département',
    ],
  },
]

const MISSIONS = [
  {
    Icon: Search,
    strong: 'Audit des usages :',
    text: "cartographie des processus, des données et des outils déjà en place, mesure de la maturité des équipes, identification des cas d'usage à plus fort retour sur investissement.",
  },
  {
    Icon: Target,
    strong: 'Stratégie et feuille de route :',
    text: "définition de l'ambition, priorisation des chantiers et plan d'action séquencé sur 12 mois, avec budget et indicateurs associés.",
  },
  {
    Icon: Workflow,
    strong: 'Accompagnement au déploiement :',
    text: "prototypage rapide, choix des outils (ChatGPT, Copilot, Gemini, Claude, Mistral), intégration dans les processus métier et mesure des gains.",
  },
  {
    Icon: Scale,
    strong: 'Gouvernance et conformité AI Act :',
    text: "charte d'usage interne, registre des systèmes d'IA, conformité RGPD et classification des risques exigée par le règlement européen.",
  },
  {
    Icon: GraduationCap,
    strong: 'Formation des équipes :',
    text: "montée en compétences des collaborateurs, des dirigeants aux équipes métier, pour rendre l'organisation autonome.",
  },
]

const METHODO = [
  {
    n: '01',
    title: 'Comprendre',
    desc: "Immersion dans votre organisation : entretiens, ateliers, analyse de vos processus clés et de votre stack existante.",
    duration: '1 à 2 semaines',
  },
  {
    n: '02',
    title: 'Prioriser',
    desc: "Nous co-construisons une matrice des cas d'usage classés par impact, faisabilité et alignement avec votre stratégie.",
    duration: '1 semaine',
  },
  {
    n: '03',
    title: 'Prototyper',
    desc: "Nous lançons 1 à 3 POC sur vos cas d'usage prioritaires pour valider la valeur avant tout déploiement massif.",
    duration: '3 à 6 semaines',
  },
  {
    n: '04',
    title: 'Déployer',
    desc: "Industrialisation, formation des équipes, gouvernance et mesure continue du ROI sur 6 à 12 mois.",
    duration: '3 à 12 mois',
  },
]

const COMPARATIF = [
  {
    critere: 'Spécialisation',
    cabinet: "100 % dédiée à l'IA : veille continue sur les modèles, méthodes éprouvées en mission, lecture appliquée du RGPD et de l'AI Act.",
    esn: "L'IA est un sujet parmi d'autres ; les profils sont affectés selon les disponibilités du moment.",
    freelance: "Souvent pointue, mais limitée au parcours d'une seule personne.",
  },
  {
    critere: 'Transfert de compétence',
    cabinet: "Structurel : Masteria est aussi organisme de formation certifié Qualiopi, les équipes accompagnées sont formées en continu.",
    esn: "Rarement contractualisé ; la dépendance au prestataire se prolonge au-delà du projet.",
    freelance: "Informel, lié à la disponibilité et à la pédagogie de l'intervenant.",
  },
  {
    critere: 'Budget type',
    cabinet: "Mission cadrée sur devis, jalons et livrables validés ; le volet formation est finançable OPCO (1 980 € HT par jour).",
    esn: "Engagements longs, équipes nombreuses, coûts de pilotage et de coordination élevés.",
    freelance: "Tarif journalier attractif, mais cadrage, gouvernance et continuité restent à la charge du client.",
  },
  {
    critere: 'Pour qui',
    cabinet: "PME, ETI et directions métier qui veulent une trajectoire chiffrée et des équipes autonomes.",
    esn: "Grands comptes qui cherchent des renforts de capacité sur la durée.",
    freelance: "Besoin ponctuel, périmètre étroit et déjà bien défini.",
  },
]

const POUR_QUI = [
  {
    Icon: Building2,
    title: 'PME & ETI',
    desc: "Vous voulez structurer votre démarche IA sans gaspiller de budget sur des POC sans suite.",
  },
  {
    Icon: LineChart,
    title: 'Grandes entreprises',
    desc: "Vous cherchez un partenaire externe agile, capable de challenger vos équipes internes et d'accélérer les projets.",
  },
  {
    Icon: Users,
    title: 'Directions métier',
    desc: "Marketing, RH, finance, juridique : vous voulez déployer l'IA là où vous êtes, avec vos contraintes et vos objectifs.",
  },
]

const DIFFERENCIATEURS = [
  {
    Icon: Sparkles,
    title: 'Conseil + développement',
    desc: "Nous ne nous arrêtons pas à la recommandation : nous concevons et développons les solutions sur mesure qui en découlent, puis nous formons les équipes qui les utilisent. Du cadrage à la production, une seule équipe.",
  },
  {
    Icon: Zap,
    title: 'Vitesse d\'exécution',
    desc: "Nous livrons des POC fonctionnels en 3 à 6 semaines et transférons les compétences en continu, sans rapport de 120 pages.",
  },
  {
    Icon: ShieldCheck,
    title: 'Éthique & souveraineté',
    desc: "RGPD, sécurité des données, gouvernance des usages : nous cadrons chaque projet pour une IA maîtrisée en interne.",
  },
  {
    Icon: CheckCircle2,
    title: 'ROI mesurable',
    desc: "Chaque mission est assortie d'indicateurs de succès clairs. En moyenne, nos clients gagnent 6h par semaine par collaborateur formé.",
  },
]

const FAQ_CONSEIL = [
  {
    q: "Que fait un cabinet de conseil en intelligence artificielle ?",
    a: "Un cabinet de conseil en intelligence artificielle accompagne les entreprises sur cinq missions : audit des usages et des processus, définition de la stratégie et de la feuille de route, accompagnement au déploiement des outils, mise en place de la gouvernance (RGPD, AI Act) et formation des équipes. Chez Masteria, ces cinq volets sont couverts par une même équipe, du diagnostic initial à l'autonomie complète de vos collaborateurs.",
  },
  {
    q: "En quoi Masteria se distingue d'un cabinet de conseil classique ?",
    a: "Un cabinet classique remet ses recommandations puis se retire. Masteria prolonge le conseil par la mise en œuvre : nous concevons et développons les solutions sur mesure qui découlent de la feuille de route, puis nous formons les équipes qui les utilisent. Du cadrage à la production, une seule équipe, sans passer la main à un intégrateur tiers.",
  },
  {
    q: "Combien coûte un cabinet de conseil en IA ?",
    a: "Le jour de conseil se chiffre sur devis, selon la nature de la mission (audit, stratégie, accompagnement opérationnel), sa durée, le nombre d'interlocuteurs et la complexité technique et réglementaire. Le premier échange de cadrage de 30 minutes est gratuit. À noter : le conseil pur ne bénéficie d'aucune prise en charge OPCO. Seules les formations sont finançables, au tarif de 1 980 € HT par jour, grâce à notre certification Qualiopi. Associer un volet formation à la mission réduit donc son coût net.",
  },
  {
    q: "Cabinet de conseil IA ou agence IA : quelle différence ?",
    a: "Une agence IA développe des solutions : elle conçoit, code et livre des produits ou des intégrations sur mesure. Un cabinet de conseil IA intervient en amont et en transverse : il audite l'existant, définit la stratégie, sélectionne les outils de façon indépendante, structure la gouvernance et forme les équipes. Masteria réunit les deux : le conseil cadre la trajectoire, puis notre agence de développement IA assure elle-même la réalisation technique, sans rupture entre la recommandation et la solution livrée.",
  },
  {
    q: "Pourquoi choisir un cabinet spécialisé plutôt qu'un généraliste ?",
    a: "Un cabinet généraliste traite l'IA comme un sujet parmi d'autres. Un cabinet spécialisé y consacre la totalité de sa veille, de ses méthodes et de ses retours d'expérience : suivi continu des modèles (OpenAI, Anthropic, Google, Mistral), bibliothèques de prompts éprouvées en conditions réelles, lecture fine du RGPD et de l'AI Act appliqués à des cas concrets. Masteria a formé plus de 1 500 professionnels depuis 2022 avec 98 % de satisfaction : cette pratique quotidienne du terrain alimente directement nos recommandations de conseil.",
  },
  {
    q: "Travaillez-vous avec des petites structures ?",
    a: "Oui. Nous accompagnons aussi bien des PME de 20 personnes que des groupes cotés. Nos formats sont modulaires : certaines missions peuvent démarrer avec un accompagnement ponctuel d'une semaine, puis s'étendre selon vos besoins.",
  },
  {
    q: "Sur quels outils IA travaillez-vous ?",
    a: "Nous sommes agnostiques : ChatGPT, Microsoft Copilot, Google Gemini, Claude d'Anthropic, Mistral, outils open source. Le choix dépend de votre contexte (stack existante, sensibilité des données, budget). Nous vous aidons à trancher objectivement.",
  },
  {
    q: "Comment garantissez-vous la sécurité des données ?",
    a: "Nous travaillons uniquement avec des solutions respectant le RGPD. Chaque mission démarre par une cartographie des données sensibles et des cas d'usage compatibles. Nous formons également vos équipes aux bonnes pratiques (anonymisation, prompts, confidentialité).",
  },
  {
    q: "Puis-je combiner conseil et formation ?",
    a: "Oui, et c'est même ce que nous recommandons. La plupart de nos clients associent une phase d'audit/stratégie (conseil) à un programme de formation par métier (finançable OPCO). Nous construisons l'offre sur mesure.",
  },
  {
    q: "Quels livrables concrets remettez-vous à la fin d'un audit IA ?",
    a: "Un audit IA Masteria se solde par : (1) une cartographie des cas d'usage prioritaires classés par impact et faisabilité, (2) une matrice impact × effort sur 12 mois, (3) une analyse de maturité par fonction, (4) une roadmap d'implémentation chiffrée avec jalons trimestriels, (5) une note de cadrage RGPD et gouvernance, (6) une présentation de restitution au comité de direction. Tous les livrables sont remis en formats éditables (PowerPoint, Excel, Notion).",
  },
  {
    q: "Quels secteurs d'activité accompagnez-vous ?",
    a: "Nous intervenons dans des secteurs variés : services aux entreprises (B2B), industrie, santé, finance, juridique, retail, secteur public et associatif. Notre approche est sectoriellement agnostique mais notre méthodologie s'adapte aux contraintes spécifiques de chaque environnement (réglementation sectorielle, sensibilité des données, maturité digitale).",
  },
  {
    q: "Quelle est la différence entre un audit IA et une stratégie IA ?",
    a: "L'audit IA est un état des lieux : il cartographie l'existant (processus, outils, données, compétences) et identifie les cas d'usage à fort potentiel. La stratégie IA est prospective : elle définit la vision, l'ambition à 3 ans, la trajectoire d'investissement, la gouvernance et les indicateurs de succès. Dans la pratique, les deux exercices se chaînent : l'audit alimente la stratégie.",
  },
  {
    q: "Comment mesurez-vous le ROI d'un projet IA ?",
    a: "Nous mesurons le ROI sur trois dimensions : (1) la productivité, soit le temps gagné par collaborateur sur des tâches identifiées, mesuré avant/après ; (2) la qualité, soit la réduction des erreurs, la satisfaction client et la conformité ; (3) la capacité, soit les nouveaux usages rendus possibles (par ex. analyse de masse de documents impossible manuellement). Chaque indicateur est défini contradictoirement avec votre comité de pilotage en début de mission.",
  },
  {
    q: "Combien de temps dure une mission de conseil IA ?",
    a: "Les durées varient selon le périmètre : audit IA initial entre 2 et 4 semaines, mission de stratégie entre 4 et 8 semaines, accompagnement opérationnel entre 3 et 12 mois. Nous privilégions des sprints courts (2 à 6 semaines) avec livrables intermédiaires plutôt que des missions au long cours non séquencées.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, Cabinet de conseil IA',
  description: "Cabinet de conseil spécialisé en intelligence artificielle pour entreprises. Audit, stratégie, développement de solutions sur mesure et transformation.",
  url: 'https://www.master-ia.fr/conseil-intelligence-artificielle',
  serviceType: ['Audit IA', 'Stratégie IA', "Développement de solutions IA sur mesure", 'Accompagnement IA', 'Transformation IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* ───────── Composant ───────── */

export default function ConseilIAPage() {
  return (
    <>
      <SEOHead
        title="Cabinet de conseil en intelligence artificielle | Masteria"
        description="Cabinet de conseil en IA pour PME et ETI : audit des usages, stratégie et feuille de route, puis développement des solutions sur mesure. Cadrage gratuit."
        slug="conseil-intelligence-artificielle"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Conseil IA', slug: 'conseil-intelligence-artificielle' },
        ]}
        faqItems={FAQ_CONSEIL}
        extraJsonLd={serviceJsonLd}
      />

      {/* HERO clair */}
      <section style={{
        position: 'relative',
        background: BG_SOFT, color: INK,
        padding: 'clamp(72px, 10vw, 130px) clamp(20px, 4vw, 32px) clamp(64px, 9vw, 96px)',
        overflow: 'hidden',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        {/* Halo discret */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 900,
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: BLUE_SOFT, color: BLUE,
            padding: '7px 16px', borderRadius: 99, fontSize: 13, fontWeight: 700,
            marginBottom: 28,
          }}>
            <Sparkles size={14} aria-hidden="true" /> Cabinet de conseil IA
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(34px, 5.5vw, 62px)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.02em',
            marginBottom: 24, color: INK,
          }}>
            Le cabinet de conseil en{' '}
            <span style={{ color: BLUE }}>intelligence artificielle</span>{' '}
            qui forme vos équipes
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: GREY_700, lineHeight: 1.7,
            maxWidth: 740, margin: '0 auto 40px',
          }}>
            <strong style={{ color: INK, fontWeight: 700 }}>Masteria est un cabinet de conseil en intelligence artificielle fondé en 2022 à Lyon. Nous aidons PME, ETI et grands groupes à auditer leurs usages, définir leur stratégie IA et déployer les cas d'usage à fort ROI, en France, en Suisse et en Belgique.</strong>{' '}
            Notre singularité : nous ne nous arrêtons pas au rapport. Nous concevons et développons les solutions sur mesure qui en découlent, et nous formons les équipes qui les utilisent.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: BLUE, color: '#fff',
              padding: '15px 28px', borderRadius: 12,
              textDecoration: 'none', fontSize: 15, fontWeight: 700,
              boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
            }}>
              Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href="#services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: INK,
              padding: '15px 28px', borderRadius: 12,
              textDecoration: 'none', fontSize: 15, fontWeight: 600,
              border: `1px solid ${BORDER}`,
            }}>
              Voir nos services
            </a>
          </div>

          {/* Mini stats */}
          <div style={{
            marginTop: 56, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: 'clamp(28px, 5vw, 56px)', color: GREY_500,
          }}>
            {[
              ['+1 500', 'professionnels formés'],
              ['98 %', 'satisfaction client'],
              ['+6 h', 'gagnées/semaine par collaborateur'],
              ['FR · CH · BE', 'zones d\'intervention'],
            ].map(([v, l], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: INK }}>{v}</div>
                <div style={{ fontSize: 12, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUE FAIT UN CABINET DE CONSEIL EN IA : réponse directe (featured snippet) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 860, margin: '0 auto', color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
          <div style={kickerStyle}>Le rôle du cabinet</div>
          <h2 style={h2Style}>
            Que fait un cabinet de conseil en IA ?
          </h2>
          <p style={{ marginBottom: 24 }}>
            <strong style={{ color: INK }}>Un cabinet de conseil en IA aide les entreprises à passer de l'intention à l'usage : il audite les processus et les outils, identifie les cas d'usage rentables, définit la stratégie et la feuille de route, encadre le déploiement, structure la gouvernance et forme les équipes pour ancrer les usages dans la durée.</strong>
          </p>
          <p style={{ marginBottom: 22 }}>
            Concrètement, une mission de conseil en intelligence artificielle couvre cinq champs d'intervention :
          </p>
          <ul style={{ margin: '0 0 26px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {MISSIONS.map((m, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <m.Icon size={18} color={BLUE} strokeWidth={2} aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }} />
                <span>
                  <strong style={{ color: INK }}>{m.strong}</strong> {m.text}
                </span>
              </li>
            ))}
          </ul>
          <p style={{ marginBottom: 0 }}>
            Masteria couvre ces cinq missions avec une particularité : nous prolongeons le conseil par la mise en œuvre, en concevant et en développant nous-mêmes les solutions retenues. Pour le volet stratégique, consultez notre offre de <Link to="/conseil-strategie-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>conseil stratégie IA</Link> ; pour le passage à la réalisation, notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> ; pour le détail de nos expertises, parcourez <a href="#services" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>nos services</a> ci-dessous.
          </p>
        </div>
      </section>

      {/* PASSER DU CONSEIL À LA SOLUTION : pont vers le développement sur mesure */}
      <section style={{ background: INK, color: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ ...kickerStyle, color: BLUE_SOFT }}>Du conseil à la mise en œuvre</div>
          <h2 style={{ ...h2Style, color: '#fff', marginBottom: 16 }}>
            Passer du conseil à la solution
          </h2>
          <p style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.75, maxWidth: 820, marginBottom: 36 }}>
            <strong style={{ color: '#fff' }}>Un cabinet de conseil classique remet ses recommandations puis se retire. Masteria conçoit ET développe les solutions qui en découlent.</strong>{' '}
            Une fois la feuille de route arbitrée, la même équipe passe à la réalisation : agents autonomes, copilotes internes, intégrations à votre SI, automatisations métier. Le conseil garde la maîtrise d'ouvrage, l'exécution reste alignée sur la trajectoire validée.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 36 }}>
            {[
              { Icon: Cpu, title: 'Agence de développement IA', desc: "Conception et développement de solutions IA sur mesure, du cadrage fonctionnel à la mise en production, avec une équipe qui code et documente.", href: '/agence-developpement-ia', cta: 'Découvrir le développement IA' },
              { Icon: Boxes, title: 'Outils IA sur mesure', desc: "Copilotes internes, assistants documentaires, agents branchés sur vos données : des outils propres à votre métier, taillés pour vos processus.", href: '/outils-ia-sur-mesure', cta: 'Voir les outils sur mesure' },
              { Icon: Workflow, title: 'Automatisation des processus', desc: "Workflows et chaînes de traitement répétitives (documents, emails, reporting) conçus et déployés sur vos outils existants.", href: '/agence-automatisation-ia', cta: "Découvrir l'automatisation" },
            ].map((b, i) => (
              <Link key={i} to={b.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 16, padding: 28, height: '100%', boxSizing: 'border-box',
                  display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <b.Icon size={22} color="#fff" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.01em' }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 16px' }}>{b.desc}</p>
                  <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: '#fff', fontWeight: 700 }}>
                    {b.cta} <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: '#9CA3AF', lineHeight: 1.65, margin: 0, maxWidth: 820 }}>
            Conseil et développement sur mesure sont des prestations sur devis, non finançables par l'OPCO. Seule la formation associée, certifiée Qualiopi, l'est.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={kickerStyle}>Nos expertises</div>
            <h2 style={{ ...h2Style, marginBottom: 16 }}>
              4 pôles pour transformer votre organisation par l'IA
            </h2>
            <p style={{ fontSize: 16, color: GREY_500, maxWidth: 660, margin: '0 auto', lineHeight: 1.7 }}>
              De l'audit initial à l'industrialisation, nos missions s'articulent autour de quatre expertises complémentaires, portées par une même équipe et cadencées par des livrables validés en comité de pilotage.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...iconTileStyle, marginBottom: 20 }}>
                  <s.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800,
                  color: INK, marginBottom: 12, letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, marginBottom: 18 }}>
                  {s.desc}
                </p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, marginTop: 'auto' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREY_500, marginBottom: 10 }}>
                    Livrables
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {s.deliverables.map((d, j) => (
                      <li key={j} style={{ fontSize: 13, color: GREY_700, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <Check size={16} color={BLUE} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODOLOGIE */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Notre méthodologie</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              Comment se déroule une mission de conseil IA ?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 720, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Une mission Masteria suit quatre étapes : comprendre votre organisation, prioriser les cas d'usage selon leur impact et leur faisabilité, prototyper sur des périmètres réels, puis déployer avec formation des équipes et mesure du ROI.</strong>{' '}
              Chaque étape se conclut par un livrable validé avec votre comité de pilotage, du cadrage initial au bilan à 12 mois.
            </p>
          </div>

          <div style={{ ...cardStyle, padding: 'clamp(20px, 4vw, 36px)' }}>
            {METHODO.map((m, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 'clamp(16px, 3vw, 28px)',
                padding: '26px 0',
                borderTop: i === 0 ? 'none' : `1px solid ${BORDER}`,
              }}>
                <div style={{
                  ...iconTileStyle,
                  fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 900, color: BLUE,
                }}>
                  {m.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800,
                      color: INK, margin: 0, letterSpacing: '-0.01em',
                    }}>
                      {m.title}
                    </h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 12.5, fontWeight: 600, color: GREY_700,
                      background: BG_SOFT, border: `1px solid ${BORDER}`,
                      padding: '4px 12px', borderRadius: 99,
                    }}>
                      <Clock size={13} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> {m.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIF cabinet / ESN / freelance */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={kickerStyle}>Bien choisir son partenaire</div>
          <h2 style={h2Style}>
            Cabinet de conseil IA, ESN généraliste ou freelance : que choisir ?
          </h2>
          <p style={{ fontSize: 16, color: GREY_700, lineHeight: 1.75, maxWidth: 840, marginBottom: 36 }}>
            <strong style={{ color: INK }}>Un cabinet de conseil IA spécialisé apporte le cadrage stratégique, la gouvernance et le transfert de compétences ; une ESN généraliste fournit des renforts de capacité sur des projets longs ; un freelance traite un besoin ponctuel et délimité.</strong>{' '}
            Pour bâtir une trajectoire IA durable et arbitrer les investissements, le cabinet spécialisé reste l'option la plus structurante.
          </p>

          <div style={{ overflowX: 'auto', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 760 }}>
              <thead>
                <tr>
                  {['Critère', 'Cabinet de conseil IA spécialisé', 'ESN généraliste', 'Freelance IA'].map((h, i) => (
                    <th key={i} scope="col" style={{
                      background: BG_SOFT, textAlign: 'left',
                      padding: '14px 18px', borderBottom: `1px solid ${BORDER}`,
                      fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13.5,
                      color: i === 1 ? BLUE : INK, whiteSpace: 'nowrap',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => {
                  const cell = {
                    padding: '16px 18px',
                    borderBottom: i === COMPARATIF.length - 1 ? 'none' : `1px solid ${BORDER}`,
                    color: GREY_700, lineHeight: 1.65, verticalAlign: 'top',
                  }
                  return (
                    <tr key={i}>
                      <th scope="row" style={{
                        ...cell, background: BG_SOFT, textAlign: 'left',
                        fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                        color: INK, fontSize: 13.5, whiteSpace: 'nowrap',
                      }}>
                        {row.critere}
                      </th>
                      <td style={{ ...cell, color: GREY_700 }}>{row.cabinet}</td>
                      <td style={cell}>{row.esn}</td>
                      <td style={cell}>{row.freelance}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13.5, color: GREY_500, lineHeight: 1.65, marginTop: 16, marginBottom: 0 }}>
            Le cabinet spécialisé combine indépendance de conseil et transfert de compétences ; Masteria y ajoute la certification Qualiopi, qui rend le volet formation finançable par votre OPCO.
          </p>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Pour qui</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              À qui s'adresse notre cabinet de conseil IA ?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 740, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Masteria accompagne les PME et ETI qui structurent leur démarche IA, les grandes entreprises qui cherchent un partenaire agile pour challenger leurs équipes, et les directions métier qui déploient l'IA sur leur périmètre.</strong>{' '}
              Les formats sont modulaires, d'une semaine de cadrage à douze mois d'accompagnement.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {POUR_QUI.map((p, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                  <p.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFÉRENCIATEURS */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Notre différence</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              Pourquoi Masteria&nbsp;?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 740, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Masteria réunit le conseil, le développement sur mesure et la formation : chaque mission peut aller de la stratégie jusqu'à la solution en production, sans passer la main à un tiers.</strong>{' '}
              S'y ajoutent des prototypes livrés en 3 à 6 semaines, un cadrage RGPD et AI Act systématique et des indicateurs de ROI définis dès le lancement.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {DIFFERENCIATEURS.map((d, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <d.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: 13.5, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENU ÉDITORIAL : densité SEO sur "conseil IA entreprise" */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 860, margin: '0 auto', color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
          <div style={kickerStyle}>Comprendre l'enjeu</div>
          <h2 style={h2Style}>
            Pourquoi recourir à un cabinet de conseil en intelligence artificielle ?
          </h2>
          <p style={{ marginBottom: 20 }}>
            <strong style={{ color: INK }}>Recourir à un cabinet de conseil en intelligence artificielle permet d'objectiver les arbitrages d'investissement, de cadrer les usages (RGPD, AI Act) et de garantir un retour mesurable sur chaque projet engagé. Indépendant des éditeurs, le cabinet sélectionne les outils sans conflit d'intérêt et séquence la trajectoire de déploiement.</strong>
          </p>
          <p style={{ marginBottom: 20 }}>
            La généralisation des modèles de langage (ChatGPT, Claude, Gemini, Mistral, Microsoft Copilot) a déplacé l'enjeu : la technologie est accessible à tous, sa bonne intégration aux processus métier reste à construire. Une mission de conseil apporte cette lecture à la fois stratégique, opérationnelle et réglementaire de la transformation.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Cadrer la stratégie IA avant de déployer
          </h3>
          <p style={{ marginBottom: 20 }}>
            Plus de 70 % des projets d'IA générative engagés en 2024-2025 n'ont pas dépassé le stade du proof of concept (source : enquêtes McKinsey, BCG, Gartner). La cause principale est <strong style={{ color: INK }}>organisationnelle et stratégique</strong>, bien avant d'être technique. Sans cadrage initial, les équipes se dispersent sur des cas d'usage à faible valeur, dupliquent des outils et accumulent des coûts d'abonnement sans ROI mesurable. Un audit IA hiérarchise les cas d'usage selon leur impact business, leur faisabilité technique et leur niveau de risque réglementaire (RGPD, AI Act européen, sécurité des données), puis fixe une trajectoire d'investissement que le comité de direction peut arbitrer en connaissance de cause.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Gouvernance, RGPD et AI Act : un cadre désormais incontournable
          </h3>
          <p style={{ marginBottom: 20 }}>
            Depuis l'entrée en application progressive de l'AI Act européen, toute entreprise déployant des systèmes d'IA (y compris des assistants génériques comme ChatGPT Enterprise ou Microsoft Copilot) doit documenter ses usages, classifier ses systèmes par niveau de risque et tracer les flux de données. Notre mission de conseil intègre systématiquement un volet gouvernance : <strong style={{ color: INK }}>charte d'usage interne, registre des traitements IA, politique de confidentialité des prompts, procédures de revue humaine</strong>. Cette dimension réglementaire est devenue un préalable à tout déploiement à l'échelle.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Conseil, développement et formation : un modèle intégré pour ancrer les usages
          </h3>
          <p style={{ marginBottom: 20 }}>
            La singularité de Masteria réside dans la continuité entre le conseil, la réalisation et la formation. Un cabinet classique remet son rapport puis se retire. Nous restons pour <strong style={{ color: INK }}>concevoir et développer les solutions retenues</strong>, via notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link>, puis pour former les équipes qui les utilisent, du comité de direction (avec notre <Link to="/formation-ia-dirigeants" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation IA pour dirigeants</Link>) jusqu'aux fonctions métier. Cette continuité évite le piège bien connu du « livrable sans suite » : les recommandations stratégiques deviennent des outils en production et des compétences réelles, opérables au quotidien. Le conseil et le développement se chiffrent sur devis ; seul le volet formation, certifié Qualiopi, est éligible aux financements OPCO.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Outils, modèles et stack technique : choisir sans s'enfermer
          </h3>
          <p style={{ marginBottom: 20 }}>
            Le marché des outils IA évolue à un rythme inédit. Entre les modèles propriétaires (OpenAI, Anthropic, Google, Microsoft) et les modèles ouverts (Mistral, Llama, DeepSeek), entre les solutions souveraines hébergées en Europe et les API généralistes, les arbitrages dépendent de votre stack existante, de votre niveau de sensibilité des données et de votre exposition au risque de dépendance. Nous accompagnons ce choix de manière <strong style={{ color: INK }}>agnostique</strong>, en pondérant performance, coût d'usage, conformité RGPD et capacité d'intégration avec vos outils métier (CRM, ERP, suite collaborative). Lorsque les arbitrages débouchent sur des développements sur mesure, la même équipe passe à la réalisation : notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> conçoit et code les <Link to="/outils-ia-sur-mesure" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>outils IA sur mesure</Link> ; pour les chaînes de traitement répétitives, notre <Link to="/agence-automatisation-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence d'automatisation IA</Link> déploie les workflows. Le conseil garde la maîtrise d'ouvrage, l'exécution reste alignée sur la feuille de route.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Quels résultats attendre d'une mission de conseil IA ?
          </h3>
          <p style={{ marginBottom: 20 }}>
            Sur les missions menées en 2024-2025, nos clients constatent en moyenne : <strong style={{ color: INK }}>6 heures gagnées par semaine et par collaborateur formé</strong> sur des tâches récurrentes (rédaction, synthèse, analyse documentaire, préparation de réunions, traitement d'emails), une réduction de 30 à 50 % du temps de traitement sur certains processus identifiés (réponse aux appels d'offres, comptes-rendus, analyse de contrats), et une montée en autonomie progressive permettant de réduire la dépendance aux prestataires externes pour les usages courants. Ces gains se mesurent dès les 3 premiers mois post-formation, à condition d'avoir cadré les indicateurs en amont.
          </p>

          <p style={{ marginBottom: 0 }}>
            Pour situer votre point de départ avant tout engagement, notre <Link to="/diagnostic-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>diagnostic IA</Link> évalue gratuitement votre maturité et fait remonter les premiers cas d'usage. Si votre besoin relève d'un métier précis, nos <Link to="/ia-secteurs" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cas d'usage de l'IA par secteur</Link> détaillent les leviers prioritaires. Et pour structurer la décision au niveau direction, notre <Link to="/conseil-strategie-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>conseil en stratégie IA</Link> formalise une feuille de route arbitrable en COMEX.
          </p>

          <p style={{ marginBottom: 0, fontStyle: 'italic', color: GREY_700, borderLeft: `3px solid ${BLUE}`, paddingLeft: 16, marginTop: 32 }}>
            Vous envisagez un projet IA dans votre organisation ? <Link to="/contact" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>Échangeons 30 minutes</Link>{' '}pour cadrer vos enjeux et identifier les premiers cas d'usage à fort impact.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_CONSEIL} title="Questions fréquentes sur nos missions de conseil IA" bg="#F9FAFB" />

      {/* FORMATION : offre secondaire, pour ancrer les usages */}
      <section style={{ background: '#fff', padding: '56px clamp(20px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          background: BG_SOFT, border: `1px solid ${BORDER}`, borderRadius: 16,
          padding: 'clamp(28px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 420px' }}>
            <div style={kickerStyle}>Pour ancrer les usages</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 10 }}>
              Et la formation des équipes ?
            </h2>
            <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 680 }}>
              Une fois la solution déployée, nos programmes de formation rendent vos équipes autonomes sur les outils mis en place. Volet certifié Qualiopi et finançable OPCO, en complément du conseil et du développement.
            </p>
          </div>
          <Link to="/formation-intelligence-artificielle" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: INK, border: `1px solid ${BORDER}`,
            padding: '14px 24px', borderRadius: 12,
            textDecoration: 'none', fontSize: 14.5, fontWeight: 700, whiteSpace: 'nowrap',
          }}>
            Voir les formations IA <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          background: INK, color: '#fff',
          borderRadius: 16,
          padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900,
            lineHeight: 1.15, letterSpacing: '-0.02em',
            marginBottom: 18, color: '#fff',
          }}>
            Parlons de votre projet IA
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 36px' }}>
            Un premier échange de 30 minutes pour cadrer vos besoins, sans engagement. Nous revenons vers vous sous 24 h ouvrées avec une proposition adaptée.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: BLUE, color: '#fff',
            padding: '16px 32px', borderRadius: 12,
            textDecoration: 'none', fontSize: 15, fontWeight: 800,
          }}>
            Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 24, marginBottom: 0 }}>
            Cabinet de conseil et organisme de formation certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>
    </>
  )
}
