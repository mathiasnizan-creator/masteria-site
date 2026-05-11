import { Link } from 'react-router-dom'
import {
  Compass, ShieldCheck, Users,
  Building2, LineChart, Workflow, Sparkles, ArrowRight, CheckCircle2,
  BrainCircuit, Target, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { FAQSection } from '../components/screens2'

/* ───────── Données locales ───────── */

const SERVICES = [
  {
    Icon: Compass,
    color: '#2563EB',
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
    color: '#8B5CF6',
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
    color: '#059669',
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
    color: '#F59E0B',
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
    title: 'Conseil + formation',
    desc: "Nous sommes les seuls à combiner cabinet de conseil et organisme de formation certifié Qualiopi. Les équipes que nous accompagnons sont aussi celles que nous formons.",
  },
  {
    Icon: Zap,
    title: 'Vitesse d\'exécution',
    desc: "Pas de slides de 120 pages : nous livrons des POC fonctionnels en 3 à 6 semaines et transférons les compétences en continu.",
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
    q: "En quoi Masteria se distingue d'un cabinet de conseil classique ?",
    a: "Nous sommes à la fois cabinet de conseil et centre de formation certifié Qualiopi. Cela signifie que nous n'intervenons jamais sans transférer les compétences à vos équipes. Chaque mission débouche sur des collaborateurs autonomes, pas sur une dépendance à un prestataire.",
  },
  {
    q: "Combien coûte une mission de conseil IA ?",
    a: "Le tarif dépend du périmètre : nature de la mission (audit, stratégie, accompagnement opérationnel), durée, nombre d'interlocuteurs, niveau de complexité technique et réglementaire. Plutôt que d'afficher un tarif d'appel, nous construisons un devis détaillé après un premier échange gratuit de 30 minutes pour cadrer vos besoins. La plupart de nos missions se tarifent au forfait, parfois à la journée pour des accompagnements ponctuels.",
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
    a: "Nous mesurons le ROI sur trois dimensions : (1) productivité — temps gagné par collaborateur sur des tâches identifiées, mesuré avant/après ; (2) qualité — réduction des erreurs, satisfaction client, conformité ; (3) capacité — nouveaux usages rendus possibles (par ex. analyse de masse de documents impossible manuellement). Chaque indicateur est défini contradictoirement avec votre comité de pilotage en début de mission.",
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
  description: "Cabinet de conseil spécialisé en intelligence artificielle pour entreprises. Audit, stratégie, accompagnement et transformation.",
  url: 'https://www.master-ia.fr/conseil-intelligence-artificielle',
  serviceType: ['Audit IA', 'Stratégie IA', 'Accompagnement IA', 'Transformation IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: {
    '@type': 'Organization',
    name: 'Masteria',
    url: 'https://www.master-ia.fr',
  },
}

/* ───────── Composant ───────── */

export default function ConseilIAPage() {
  return (
    <>
      <SEOHead
        title="Cabinet de conseil en intelligence artificielle (IA) pour entreprises | Masteria"
        description="Cabinet de conseil IA spécialisé : audit, stratégie, gouvernance, accompagnement opérationnel et transformation. Pour PME, ETI et grands groupes en France, Suisse et Belgique. Conseil + formation Qualiopi."
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
        background: '#FAFAF7', color: '#0A0A0A',
        padding: 'clamp(80px, 12vw, 140px) 32px 100px',
        overflow: 'hidden',
        borderBottom: '1px solid #E5E7EB',
      }}>
        {/* Halo discret */}
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 900,
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#DBEAFE', border: '1px solid #BFDBFE',
            color: '#2563EB',
            padding: '6px 16px', borderRadius: 99, fontSize: 13, fontWeight: 700,
            marginBottom: 28,
          }}>
            <Sparkles size={14} /> Cabinet de conseil IA
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(34px, 5.5vw, 64px)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.03em',
            marginBottom: 24, color: '#0A0A0A',
          }}>
            Déployez l'IA dans votre entreprise avec{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              méthode et impact
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: '#4B5563', lineHeight: 1.65,
            maxWidth: 720, margin: '0 auto 40px',
          }}>
            Masteria est un cabinet de conseil spécialisé en intelligence artificielle. Nous accompagnons PME, ETI et grands groupes dans l'audit, la stratégie et le déploiement opérationnel de l'IA, avec un transfert de compétences garanti par notre centre de formation certifié Qualiopi.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#C2410C',
              color: '#fff', padding: '15px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 700,
              boxShadow: '0 6px 20px rgba(194,65,12,0.35)',
            }}>
              Contacter notre équipe <ArrowRight size={16} />
            </Link>
            <a href="#services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0A0A0A',
              padding: '15px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 600,
              border: '1px solid #E5E7EB',
            }}>
              Voir nos services
            </a>
          </div>

          {/* Mini stats */}
          <div style={{
            marginTop: 56, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: 48, color: '#6B7280',
          }}>
            {[
              ['+1 500', 'professionnels formés'],
              ['98 %', 'satisfaction client'],
              ['+6 h', 'gagnées/semaine par collaborateur'],
              ['FR · CH · BE', 'zones d\'intervention'],
            ].map(([v, l], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: '#0A0A0A' }}>{v}</div>
                <div style={{ fontSize: 12, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>
              Nos expertises
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 900,
              color: '#0A0A0A', lineHeight: 1.2, letterSpacing: '-0.02em',
              marginBottom: 16,
            }}>
              4 pôles pour transformer votre organisation par l'IA
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              De l'audit stratégique au déploiement opérationnel, nos missions s'articulent autour de 4 expertises complémentaires.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{
                background: '#F9FAFB', borderRadius: 16,
                border: '1px solid #E5E7EB',
                padding: 30,
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${s.color}1A`, border: `1px solid ${s.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <s.Icon size={24} color={s.color} strokeWidth={2} />
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800,
                  color: '#0A0A0A', marginBottom: 12, letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, marginBottom: 18 }}>
                  {s.desc}
                </p>
                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 16, marginTop: 'auto' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>
                    Livrables
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {s.deliverables.map((d, j) => (
                      <li key={j} style={{ fontSize: 13, color: '#374151', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <CheckCircle2 size={14} color={s.color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
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
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: 10 }}>
              Notre méthodologie
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 900,
              color: '#0A0A0A', lineHeight: 1.2, letterSpacing: '-0.02em',
              marginBottom: 16,
            }}>
              Comprendre · Prioriser · Prototyper · Déployer
            </h2>
            <p style={{ fontSize: 16, color: '#4B5563', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              Une approche éprouvée, qui privilégie la valeur concrète et le transfert de compétences à chaque étape.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 20,
          }}>
            {METHODO.map((m, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 14, padding: 26,
                position: 'relative',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 42, fontWeight: 900,
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: 14,
                }}>
                  {m.n}
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800,
                  color: '#0A0A0A', marginBottom: 10,
                }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, marginBottom: 14 }}>
                  {m.desc}
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 12, fontWeight: 600, color: '#1D4ED8',
                  background: '#EFF6FF', padding: '4px 10px', borderRadius: 99,
                }}>
                  ⏱ {m.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: 10 }}>
              Pour qui
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 900,
              color: '#0A0A0A', letterSpacing: '-0.02em',
            }}>
              Un cabinet pour toutes les organisations
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {POUR_QUI.map((p, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14,
                border: '1px solid #E5E7EB', padding: 28,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: '#EDE9FE', border: '1px solid #DDD6FE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <p.Icon size={22} color="#8B5CF6" strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFÉRENCIATEURS */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 10 }}>
              Notre différence
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 900,
              color: '#0A0A0A', lineHeight: 1.2, letterSpacing: '-0.02em',
            }}>
              Pourquoi Masteria&nbsp;?
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}>
            {DIFFERENCIATEURS.map((d, i) => (
              <div key={i} style={{
                background: '#F9FAFB', borderRadius: 14,
                border: '1px solid #E5E7EB', padding: 26,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: '#FEF3C7', border: '1px solid #FDE68A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <d.Icon size={20} color="#F59E0B" strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENU ÉDITORIAL — densité SEO sur "conseil IA entreprise" */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', color: '#1F2937', fontSize: 16, lineHeight: 1.8 }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(26px, 3.4vw, 38px)', fontWeight: 900,
            color: '#0A0A0A', lineHeight: 1.2, letterSpacing: '-0.02em',
            marginBottom: 24,
          }}>
            Pourquoi recourir à un cabinet de conseil en intelligence artificielle ?
          </h2>
          <p style={{ marginBottom: 20 }}>
            La généralisation des modèles de langage (ChatGPT, Claude, Gemini, Mistral, Microsoft Copilot) place les entreprises devant un constat simple : <strong>l'enjeu n'est plus l'accès à la technologie, mais sa bonne intégration dans les processus métier</strong>. Un cabinet de conseil en intelligence artificielle apporte une lecture à la fois stratégique, opérationnelle et réglementaire de cette transformation. Son rôle n'est pas de vendre une solution, mais d'objectiver les choix d'investissement, de cadrer les usages et de garantir un retour mesurable sur les projets engagés.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: '#0A0A0A', marginTop: 32, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Cadrer la stratégie IA avant de déployer
          </h3>
          <p style={{ marginBottom: 20 }}>
            Plus de 70 % des projets d'IA générative engagés en 2024-2025 n'ont pas dépassé le stade du proof of concept (source : enquêtes McKinsey, BCG, Gartner). La cause principale n'est pas technique : elle est <strong>organisationnelle et stratégique</strong>. Sans cadrage initial, les équipes se dispersent sur des cas d'usage à faible valeur, dupliquent des outils et accumulent des coûts d'abonnement sans ROI mesurable. Un audit IA permet de hiérarchiser les cas d'usage selon leur impact business, leur faisabilité technique et leur niveau de risque réglementaire (RGPD, AI Act européen, sécurité des données).
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: '#0A0A0A', marginTop: 32, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Gouvernance, RGPD et AI Act : un cadre désormais incontournable
          </h3>
          <p style={{ marginBottom: 20 }}>
            Depuis l'entrée en application progressive de l'AI Act européen, toute entreprise déployant des systèmes d'IA — y compris des assistants génériques comme ChatGPT Enterprise ou Microsoft Copilot — doit documenter ses usages, classifier ses systèmes par niveau de risque et tracer les flux de données. Notre mission de conseil intègre systématiquement un volet gouvernance : <strong>charte d'usage interne, registre des traitements IA, politique de confidentialité des prompts, procédures de revue humaine</strong>. Cette dimension réglementaire n'est plus optionnelle ; elle est devenue un préalable à tout déploiement à l'échelle.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: '#0A0A0A', marginTop: 32, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Conseil + formation : un modèle hybride pour ancrer les usages
          </h3>
          <p style={{ marginBottom: 20 }}>
            La singularité de Masteria réside dans l'articulation entre conseil et formation. Là où un cabinet classique remet un rapport et se retire, nous formons les équipes que nous accompagnons. Cette continuité permet d'éviter le piège bien connu du « livrable sans suite » : les recommandations stratégiques se traduisent en compétences réelles, opérables au quotidien. Notre statut d'organisme de formation certifié Qualiopi rend par ailleurs une partie de la mission éligible aux financements OPCO, ce qui réduit le coût net pour l'entreprise tout en maximisant l'impact.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: '#0A0A0A', marginTop: 32, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Outils, modèles et stack technique : choisir sans s'enfermer
          </h3>
          <p style={{ marginBottom: 20 }}>
            Le marché des outils IA évolue à un rythme inédit. Entre les modèles propriétaires (OpenAI, Anthropic, Google, Microsoft) et les modèles ouverts (Mistral, Llama, DeepSeek), entre les solutions souveraines hébergées en Europe et les API généralistes, les arbitrages dépendent de votre stack existante, de votre niveau de sensibilité des données et de votre exposition au risque de dépendance. Nous accompagnons ce choix de manière <strong>agnostique</strong>, en pondérant performance, coût d'usage, conformité RGPD et capacité d'intégration avec vos outils métier (CRM, ERP, suite collaborative).
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: '#0A0A0A', marginTop: 32, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Quels résultats attendre d'une mission de conseil IA ?
          </h3>
          <p style={{ marginBottom: 20 }}>
            Sur les missions menées en 2024-2025, nos clients constatent en moyenne : <strong>6 heures gagnées par semaine et par collaborateur formé</strong> sur des tâches récurrentes (rédaction, synthèse, analyse documentaire, préparation de réunions, traitement d'emails), une réduction de 30 à 50 % du temps de traitement sur certains processus identifiés (réponse aux appels d'offres, comptes-rendus, analyse de contrats), et une montée en autonomie progressive permettant de réduire la dépendance aux prestataires externes pour les usages courants. Ces gains se mesurent dès les 3 premiers mois post-formation, à condition d'avoir cadré les indicateurs en amont.
          </p>

          <p style={{ marginBottom: 0, fontStyle: 'italic', color: '#4B5563', borderLeft: '3px solid #2563EB', paddingLeft: 16, marginTop: 32 }}>
            Vous envisagez un projet IA dans votre organisation ? <Link to="/contact" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none' }}>Échangeons 30 minutes</Link>{' '}pour cadrer vos enjeux et identifier les premiers cas d'usage à fort impact.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_CONSEIL} title="Questions fréquentes sur nos missions de conseil IA" bg="#F9FAFB" />

      {/* CTA FINAL */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1E3A8A 100%)',
        color: '#fff',
        padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900,
            lineHeight: 1.15, letterSpacing: '-0.02em',
            marginBottom: 18,
            color: '#fff',
          }}>
            Parlons de votre projet IA
          </h2>
          <p style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.7, marginBottom: 36 }}>
            Un premier échange de 30 minutes pour cadrer vos besoins, sans engagement. Nous revenons vers vous sous 24 h ouvrées avec une proposition adaptée.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: '#0A0A0A',
            padding: '16px 32px', borderRadius: 10,
            textDecoration: 'none', fontSize: 15, fontWeight: 800,
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
          }}>
            Contacter notre équipe <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
