import { Link } from 'react-router-dom'
import { ArrowRight, Check, GraduationCap, Clock, ShieldCheck, Users, Sparkles, Target } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const FAQ_DEBUTANT = [
  {
    q: "Je n'ai jamais utilisé l'IA, puis-je suivre une formation IA débutant ?",
    a: "Oui, nos formations IA pour débutants sont spécifiquement conçues pour les personnes qui n'ont jamais utilisé ChatGPT, Copilot ou une autre IA générative. Aucun prérequis technique n'est nécessaire : on commence par les fondamentaux (comment fonctionne une IA, comment bien la questionner) avant d'aborder des cas pratiques métier.",
  },
  {
    q: "Quelle est la durée d'une formation intelligence artificielle débutant ?",
    a: "La formation se déroule sur une journée complète (7h), en présentiel ou en distanciel. Ce format permet de couvrir les bases théoriques le matin et de passer à la pratique l'après-midi avec des exercices concrets adaptés à votre métier.",
  },
  {
    q: "Quel outil IA apprend-on en formation débutant ?",
    a: "Nous recommandons généralement ChatGPT ou Microsoft Copilot pour débuter, car ce sont les outils les plus intuitifs et les plus utilisés en entreprise. Le choix dépend de votre environnement de travail : si vous utilisez déjà Microsoft 365, Copilot sera plus naturel ; sinon ChatGPT est la référence.",
  },
  {
    q: "La formation est-elle finançable pour un débutant ?",
    a: "Oui, toutes nos formations IA sont finançables par les OPCO (Opérateurs de Compétences). Masteria est certifié Qualiopi, ce qui garantit l'éligibilité au financement. Nous vous accompagnons dans le montage du dossier de prise en charge.",
  },
  {
    q: "Que sait-on faire après une formation IA débutant ?",
    a: "À la fin de la journée, vous savez rédiger un prompt efficace, générer et reformuler du texte, synthétiser un document long, créer des tableaux et extraire des informations utiles. Surtout, vous avez intégré les bons réflexes pour utiliser l'IA au quotidien sans crainte et gagner du temps dès le lendemain.",
  },
]

export default function DebutantPage() {
  return (
    <>
      <SEOHead
        title="Formation IA débutant · sans prérequis · Qualiopi | Masteria"
        description="Formation IA pour débutants : ChatGPT, Copilot ou Gemini en 1 journée, sans prérequis. Certifiée Qualiopi, finançable OPCO. Devis sous 24 h."
        slug="formation-ia-debutant"
        courseData={{
          name: "Formation IA débutant pour entreprises",
          description: "Formation intelligence artificielle niveau débutant. Une journée pour maîtriser les bases de ChatGPT, Copilot ou Gemini sans prérequis technique.",
          level: 'Débutant',
          duration: 'PT7H',
          price: '1980',
        }}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Formation IA débutant', slug: 'formation-ia-debutant' },
        ]}
        faqItems={FAQ_DEBUTANT}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: '#d97706', marginBottom: 24,
            border: '1px solid #FCD34D',
          }}>
            <GraduationCap size={16} /> Niveau débutant · sans prérequis
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(36px, 6vw, 58px)', lineHeight: 1.1,
            color: '#0A0A0A', marginBottom: 20,
          }}>
            Formation intelligence artificielle débutant
          </h1>
          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#4B5563',
            lineHeight: 1.6, maxWidth: 720, margin: '0 auto 36px',
          }}>
            Vous n'avez jamais utilisé ChatGPT, Copilot ou Gemini ? En une journée, nos formateurs vous transmettent les bases solides pour utiliser l'IA au quotidien, sans jargon technique et avec des cas concrets adaptés à votre métier.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16,
            }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '16px 28px',
              borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16,
              border: '1px solid #E5E7EB',
            }}>
              Voir toutes les formations
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 40px)', textAlign: 'center', marginBottom: 12,
          }}>
            Pourquoi une formation IA pour débutants ?
          </h2>
          <p style={{ color: '#6B7280', textAlign: 'center', maxWidth: 700, margin: '0 auto 48px', fontSize: 17 }}>
            80 % des professionnels n'ont jamais été formés à l'IA et ne l'utilisent pas encore. Rattraper le retard ne demande qu'une seule journée bien structurée.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {[
              { icon: Clock, title: 'Une seule journée', desc: 'Sept heures pour acquérir des réflexes durables, sans étalement fatigant sur plusieurs semaines.' },
              { icon: Users, title: 'Sans prérequis', desc: 'Aucune compétence technique nécessaire. Si vous savez utiliser un mail, vous saurez utiliser l\'IA.' },
              { icon: Target, title: 'Cas concrets métier', desc: 'Les exercices sont construits à partir de situations réelles : rédiger un mail, synthétiser un compte-rendu, préparer une réunion.' },
              { icon: ShieldCheck, title: 'Certifié Qualiopi', desc: 'Formation finançable à 100 % par votre OPCO. Nous vous accompagnons dans le dossier.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                padding: 24, background: '#FAFAF7', borderRadius: 12,
                border: '1px solid #E5E7EB',
              }}>
                <Icon size={32} color="#d97706" style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section style={{ padding: '80px 24px', background: '#FAFAF7' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 40px)', textAlign: 'center', marginBottom: 48,
          }}>
            Programme de la journée
          </h2>
          {[
            { time: '9h, 10h30', title: 'Les fondamentaux de l\'IA générative', items: ['Comment fonctionne une IA comme ChatGPT', 'Vocabulaire essentiel (prompt, modèle, contexte)', 'Panorama des outils : ChatGPT, Copilot, Gemini, Claude, Mistral'] },
            { time: '10h45, 12h30', title: 'L\'art du prompt efficace', items: ['Structurer une demande pour obtenir un bon résultat', 'Donner du contexte, un rôle, un format', 'Itérer pour affiner la réponse'] },
            { time: '14h, 15h30', title: 'Cas pratiques métier', items: ['Rédiger un mail ou un compte-rendu', 'Synthétiser un document long', 'Générer des idées, préparer une réunion'] },
            { time: '15h45, 17h', title: 'Bonnes pratiques et sécurité', items: ['Ce qu\'il faut éviter de partager avec l\'IA', 'Vérification et esprit critique', 'Construire sa propre boîte à outils IA'] },
          ].map((bloc, i) => (
            <div key={i} style={{
              display: 'flex', gap: 24, marginBottom: 24, padding: 24,
              background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB',
            }}>
              <div style={{
                minWidth: 90, fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                color: '#d97706', fontWeight: 700,
              }}>{bloc.time}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{bloc.title}</h3>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {bloc.items.map(it => (
                    <li key={it} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 15, color: '#4B5563' }}>
                      <Check size={18} color="#10B981" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 40px)', textAlign: 'center', marginBottom: 48,
          }}>
            Questions fréquentes
          </h2>
          {FAQ_DEBUTANT.map(({ q, a }) => (
            <details key={q} style={{
              marginBottom: 12, padding: 20, background: '#FAFAF7',
              borderRadius: 10, border: '1px solid #E5E7EB', cursor: 'pointer',
            }}>
              <summary style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A' }}>{q}</summary>
              <p style={{ marginTop: 12, color: '#4B5563', fontSize: 15, lineHeight: 1.7 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#F5F3EE', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Sparkles size={40} color="#F97316" style={{ marginBottom: 20 }} />
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 40px)', color: '#0A0A0A', marginBottom: 16,
          }}>
            Prêt à former votre équipe à l'IA ?
          </h2>
          <p style={{ color: '#374151', fontSize: 17, marginBottom: 32 }}>
            Devis personnalisé sous 24h. Présentiel ou distanciel, partout en France, Suisse et Belgique.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#F97316', color: '#fff', padding: '16px 32px',
            borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16,
          }}>
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
