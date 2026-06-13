import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Wallet, Users, Building2, CheckCircle, XCircle,
  AlertCircle, FileText, Calculator, Shield, Sparkles, TrendingUp,
  FileCheck, MailCheck, Zap, Lightbulb, Landmark, Percent, Compass, Info,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/* ══════════════════════════════════════════════════════════════════
 * CHARTE COULEURS
 *   Bleu principal : #2563EB
 *   Bleu foncé     : #1E40AF
 *   Bleu clair bg  : #EFF6FF / #DBEAFE
 *   Vert succès    : #16A34A (utilisé avec parcimonie)
 *   Gris neutre    : #6B7280
 *   Texte sombre   : #0A0A0A
 * ══════════════════════════════════════════════════════════════════ */

const BLUE = '#2563EB'
const BLUE_DARK = '#1E40AF'
const BLUE_LIGHT_BG = '#EFF6FF'
const GREEN = '#16A34A'
const GREEN_BG = '#F0FDF4'
const NEUTRAL = '#6B7280'

const TITLE_GRADIENT = {
  background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

/* ══════════════════════════════════════════════════════════════════
 * DONNÉES
 * ══════════════════════════════════════════════════════════════════ */

const OPCO_LIST = [
  { name: 'AKTO',         secteur: 'Services à forte intensité de main d\'œuvre (sécurité, propreté, intérim, hôtellerie, prévention).' },
  { name: 'AFDAS',        secteur: 'Culture, communication, médias, sport, loisirs, tourisme.' },
  { name: 'ATLAS',        secteur: 'Services financiers, assurance, conseil, expertise comptable, juridique.' },
  { name: 'OPCO 2i',      secteur: 'Industrie (métallurgie, chimie, pharma, plasturgie, textile).' },
  { name: 'OPCO EP',      secteur: 'Entreprises de proximité, artisanat, professions libérales, services aux particuliers.' },
  { name: 'OPCOMMERCE',   secteur: 'Commerce, distribution, négoce.' },
  { name: 'CONSTRUCTYS',  secteur: 'BTP, travaux publics, négoce de matériaux.' },
  { name: 'OCAPIAT',      secteur: 'Coopération agricole, agro-industries, pêche maritime.' },
  { name: 'OPCO Santé',   secteur: 'Hôpitaux, cliniques, associations sanitaires et sociales.' },
  { name: 'OPCO Mobilités', secteur: 'Transport routier, ferroviaire, aérien, logistique.' },
  { name: 'UNIFORMATION', secteur: 'Économie sociale et solidaire, associations, mutuelles.' },
]

const FAQ = [
  {
    q: "Concrètement, combien va me coûter la formation IA si l'OPCO prend en charge ?",
    a: "Si votre OPCO accepte le dossier à 100 %, le reste à charge est de 0 €. Masteria facture directement l'OPCO, vous n'avancez pas la trésorerie. Si la prise en charge est partielle (par exemple 70 %), seul le complément est à la charge de l'entreprise, soit environ 594 € HT par jour sur un tarif de 1 980 €/jour, en intra comme en accompagnement individuel.",
  },
  {
    q: "Mon entreprise a moins de 11 salariés (TPE) : combien l'OPCO couvre-t-il ?",
    a: "Les TPE bénéficient d'une enveloppe dédiée auprès de leur OPCO, généralement entre 4 000 € et 6 000 € par an et par entreprise. Pour une formation IA d'1 ou 2 jours sur 4 à 6 personnes, vous restez largement dans les plafonds. La prise en charge atteint le plus souvent 100 % du coût pédagogique. Notre équipe vérifie votre éligibilité dès le devis.",
  },
  {
    q: "Et pour une PME de 11 à 49 salariés, ou une ETI ?",
    a: "Les PME et ETI passent par leur plan de développement des compétences, abondé par leur OPCO. La prise en charge dépend de votre branche, de votre convention collective et du budget de votre OPCO sur l'année en cours. Selon les cas, on observe 50 % à 100 % de prise en charge. Masteria fournit tous les justificatifs Qualiopi nécessaires pour maximiser votre couverture.",
  },
  {
    q: "Combien de temps pour avoir l'accord de l'OPCO ?",
    a: "Entre 5 et 15 jours ouvrés selon l'organisme. AKTO, ATLAS et OPCO 2i sont parmi les plus rapides (5 à 8 jours). AFDAS, UNIFORMATION et CONSTRUCTYS sont autour de 10 à 15 jours. Masteria vous fournit le dossier complet (convention, programme, fiche organisme Qualiopi) dès la signature du devis, sous 24 h ouvrées.",
  },
  {
    q: "La formation IA est-elle finançable via le CPF ?",
    a: "Non. Le CPF ne finance que les formations menant à une certification inscrite au RNCP, un format long et standardisé incompatible avec nos programmes courts et sur mesure. Bonne nouvelle : l'OPCO couvre les mêmes besoins, sans plafond individuel CPF, sans avance de trésorerie, et avec un dossier souvent traité plus rapidement.",
  },
  {
    q: "Que doit fournir l'entreprise pour le dossier OPCO ?",
    a: "Côté entreprise : votre numéro SIRET, votre code OPCO, le nom des participants. Masteria fournit le reste : devis, programme pédagogique détaillé, convention de formation, attestation Qualiopi, CV des formateurs et émargements. Sur la plateforme ATLAS, nous pouvons même déposer le dossier directement à votre place.",
  },
  {
    q: "Existe-t-il des aides au-delà de l'OPCO ?",
    a: "Oui. Le FNE Formation peut compléter le financement OPCO pour les entreprises en mutation (transition numérique, restructuration). Le crédit d'impôt formation du dirigeant couvre 25 % du SMIC horaire pour les TPE et PME, dans la limite de 40 h par an et par dirigeant. Masteria identifie ces leviers complémentaires pendant le cadrage du devis.",
  },
  {
    q: "Masteria peut-il gérer le dossier OPCO à ma place ?",
    a: "Oui, c'est inclus dans notre accompagnement. Nous montons le dossier, l'envoyons (ou déposons via le portail OPCO quand c'est possible), suivons l'instruction et relançons si nécessaire. Vous recevez l'accord par email une fois validé. Aucune charge administrative pour vous.",
  },
  {
    q: "Et si l'OPCO refuse une partie du financement ?",
    a: "C'est rare quand le dossier est bien préparé, mais ça arrive (budget OPCO épuisé en fin d'année, par exemple). Dans ce cas, deux options : reporter la formation au début de l'exercice suivant pour bénéficier du nouveau budget, ou prendre en charge le complément via le plan de développement des compétences (déductible des charges sociales). On vous accompagne dans la décision.",
  },
  {
    q: "Une formation IA totalement prise en charge, comment ça fonctionne ?",
    a: "Quand l'OPCO prend en charge 100 % du coût pédagogique, vous ne payez rien. C'est notre cas de figure le plus fréquent. À ne pas confondre avec les formations IA gratuites en ligne (MOOC, tutoriels) qui restent généralistes : nos sessions Masteria sont 100 % personnalisées sur vos cas d'usage métier, animées en présentiel ou distanciel par un formateur dédié.",
  },
  {
    q: "Le conseil ou le développement IA sur mesure sont-ils finançables par l'OPCO ?",
    a: "Non. L'OPCO finance uniquement les actions de formation. Le conseil stratégique et le développement IA sur mesure (agent, outil, automatisation) sont des prestations de service, facturées au forfait sur devis. Selon votre profil et votre projet, d'autres dispositifs peuvent parfois s'appliquer (France Num, Bpifrance, crédit d'impôt innovation ou recherche, aides régionales), à étudier au cas par cas et sans garantie d'éligibilité. Nous ne promettons ni prise en charge ni taux : nous vous fournissons un devis détaillé et vous orientons vers les bons interlocuteurs.",
  },
  {
    q: "Combien coûte un projet de conseil ou de développement IA ?",
    a: "Sur devis. Un projet de conseil ou de développement IA se chiffre au forfait, après cadrage du périmètre, ou en régie selon le besoin. Le coût dépend de la complexité, du nombre de cas d'usage et du niveau d'intégration à votre système d'information. Plutôt que d'avancer un prix à l'aveugle, nous commençons par un diagnostic ou un échange de cadrage gratuit, puis vous remettons une proposition chiffrée. Le cadrage est sans engagement.",
  },
]

/* Dispositifs POSSIBLES pour le conseil et le développement IA.
 * Honnêteté stricte : ce sont des prestations de service (forfait/devis),
 * NON finançables par l'OPCO. Aucun taux ni prise en charge promis. */
const DISPOSITIFS_PROJET = [
  {
    icon: Compass,
    name: 'France Num',
    desc: "Le programme public d'accompagnement à la transformation numérique des TPE et PME. Selon votre profil et votre projet, un diagnostic ou un accompagnement au numérique peut s'y rattacher. À étudier au cas par cas, sans garantie d'éligibilité.",
  },
  {
    icon: Landmark,
    name: 'Bpifrance',
    desc: "Aides à l'innovation, prêts et dispositifs de financement de projets technologiques. Un développement IA structurant peut, selon sa nature et sa maturité, entrer dans le périmètre de certains dispositifs Bpifrance. L'éligibilité s'apprécie projet par projet.",
  },
  {
    icon: Percent,
    name: "Crédit d'impôt innovation et recherche (CII / CIR)",
    desc: "Pour les développements présentant un caractère innovant ou de R&D, le CII ou le CIR peuvent ouvrir un crédit d'impôt sur les dépenses éligibles. L'appréciation est technique et relève de votre expert-comptable ou d'un conseil spécialisé.",
  },
  {
    icon: Building2,
    name: 'Aides régionales',
    desc: "Certaines régions soutiennent la digitalisation et l'innovation des entreprises (subventions, chèques numériques, appels à projets). Les dispositifs varient selon votre territoire et évoluent dans le temps : à vérifier auprès de votre région.",
  },
]

/* ══════════════════════════════════════════════════════════════════
 * COMPOSANT
 * ══════════════════════════════════════════════════════════════════ */

export default function FinancementPage() {
  return (
    <>
      <SEOHead
        title="Financement IA : formation OPCO et projet | Masteria"
        description="Formation IA finançable à 100 % par votre OPCO (Qualiopi). Conseil et dev IA sur devis : France Num, Bpifrance, CII/CIR à étudier. Devis sous 24 h."
        slug="financement-formation-ia"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Financer sa formation IA', slug: 'financement-formation-ia' },
        ]}
        faqItems={FAQ}
      />

      {/* ═══════════════════════════════════════════════════════════
       * HERO — Fond bleu doux + titre dégradé bleu
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 60%, #DBEAFE 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: BLUE_DARK, marginBottom: 24,
            border: `1px solid ${BLUE}30`,
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
          }}>
            <Wallet size={16} color={BLUE} /> Financement OPCO · Reste à charge 0 €
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5.5vw, 56px)', lineHeight: 1.08,
            color: '#0A0A0A', marginBottom: 20, letterSpacing: '-0.02em',
          }}>
            Vos formations IA, <br />
            <span style={TITLE_GRADIENT}>financées à 100 % par votre OPCO</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#3F3F46',
            lineHeight: 1.6, maxWidth: 780, margin: '0 auto 16px',
          }}>
            Masteria est <strong>certifié Qualiopi</strong>. Vos formations ChatGPT, Microsoft Copilot,
            Google Gemini, Claude et Mistral sont prises en charge jusqu'à <strong>100 % par votre OPCO</strong>,
            sans avance de trésorerie. Devis sous 24 h, formation sous 3 à 4 semaines.
          </p>

          {/* 3 chiffres clés */}
          <div style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
            margin: '32px 0 36px',
          }}>
            {[
              { value: '0 €', label: 'reste à charge entreprise' },
              { value: '24 h', label: 'pour le devis et le dossier OPCO' },
              { value: '5 à 15 j', label: 'pour l\'accord de votre OPCO' },
            ].map(({ value, label }) => (
              <div key={label} style={{
                background: '#fff', padding: '14px 22px', borderRadius: 12,
                border: `1px solid ${BLUE}25`, minWidth: 200,
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.06)',
              }}>
                <div style={{ ...TITLE_GRADIENT, fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontSize: 12.5, color: NEUTRAL, marginTop: 4, fontWeight: 600 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
            }}>
              Vérifier mon financement OPCO <ArrowRight size={18} />
            </Link>
            <a href="#tarifs" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '14px 26px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: `2px solid ${BLUE}`,
            }}>
              Voir les tarifs précis
            </a>
          </div>

          <div style={{
            marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 20, flexWrap: 'wrap',
          }}>
            <picture>
              <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
              <img
                src="/assets/qualiopi-logo.png"
                alt="Certification Qualiopi — Masteria centre de formation"
                width={842}
                height={509}
                loading="lazy"
                style={{
                  height: 'auto', width: 'clamp(150px, 20vw, 200px)',
                  aspectRatio: '842 / 509',
                  display: 'block',
                }}
              />
            </picture>
            <div style={{ fontSize: 13, color: BLUE_DARK, fontWeight: 600, textAlign: 'left' }}>
              <BadgeCheck size={14} color={BLUE} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Certifié Qualiopi · +1 500 professionnels formés depuis 2022
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * EN 30 SECONDES
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            Le financement formation IA en 30 secondes
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, maxWidth: 720, margin: '0 auto 40px' }}>
            Vous êtes salarié ou dirigeant d'entreprise et vous voulez former vos équipes à l'IA générative.
            Voici la voie la plus simple, et la plus économique, pour 95 % des entreprises françaises.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
          }}>
            {[
              {
                step: '1', icon: FileText, title: 'Vous nous contactez',
                desc: 'On cadre votre besoin par téléphone (15 min) puis on vous envoie un devis et un dossier OPCO complet sous 24 h.',
              },
              {
                step: '2', icon: MailCheck, title: 'Vous transmettez à votre OPCO',
                desc: 'Soit Masteria dépose pour vous (ATLAS, OPCO 2i…), soit vous transférez le dossier signé. Délai : 5 à 15 jours ouvrés.',
              },
              {
                step: '3', icon: Sparkles, title: 'Vous formez votre équipe',
                desc: 'Formation animée en présentiel ou distanciel sur vos vrais cas métier. Masteria facture directement l\'OPCO.',
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: '#fff', borderRadius: 16, padding: 28,
                border: '1px solid #E5E7EB',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  marginBottom: 14,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: BLUE_LIGHT_BG,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={24} color={BLUE} strokeWidth={2.2} />
                  </div>
                  <div style={{
                    fontFamily: 'Nunito, sans-serif', fontWeight: 900,
                    fontSize: 28, color: BLUE, lineHeight: 1,
                  }}>
                    {step}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#0A0A0A', marginTop: 0, marginBottom: 8 }}>
                  {title}
                </h3>
                <div style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * TARIFS
       * ═══════════════════════════════════════════════════════════ */}
      <section id="tarifs" style={{
        padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB',
        scrollMarginTop: 80,
      }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            Nos tarifs Masteria, sans surprise
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, maxWidth: 720, margin: '0 auto 40px' }}>
            Tarifs publics applicables avant prise en charge OPCO. Tous nos prix sont en HT.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20,
          }}>
            {/* INTER */}
            <div style={{
              background: '#fff', borderRadius: 16, padding: 32,
              border: '1.5px solid #E5E7EB',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: BLUE_LIGHT_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={20} color={BLUE} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', margin: 0 }}>
                  Accompagnement individuel
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A' }}>1 980 €</span>
                <span style={{ color: NEUTRAL, fontSize: 14, fontWeight: 600 }}>HT / jour</span>
              </div>
              <p style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5, marginBottom: 16 }}>
                Coaching 1-to-1 pour dirigeants, experts métier ou profils stratégiques.
                Programme conçu sur mesure, rythme adapté, suivi entre les sessions.
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['1 participant', 'Programme co-construit', 'Présentiel ou distanciel', 'Suivi entre les sessions'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
                    <CheckCircle size={15} color={BLUE} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* INTRA */}
            <div style={{
              background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
              borderRadius: 16, padding: 32,
              border: `2px solid ${BLUE}`,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -12, right: 20,
                background: BLUE, color: '#fff',
                fontSize: 11, fontWeight: 800, letterSpacing: '0.06em',
                padding: '4px 12px', borderRadius: 999, textTransform: 'uppercase',
              }}>
                Le + populaire
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={20} color={BLUE} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', margin: 0 }}>
                  Intra entreprise
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ ...TITLE_GRADIENT, fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900 }}>1 980 €</span>
                <span style={{ color: BLUE_DARK, fontSize: 14, fontWeight: 600 }}>HT / jour / groupe</span>
              </div>
              <p style={{ color: '#3F3F46', lineHeight: 1.6, fontSize: 14.5, marginBottom: 16 }}>
                Session 100 % dédiée à votre équipe, dans vos locaux ou en distanciel.
                Programme construit sur vos cas d'usage réels et vos outils internes.
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['12 participants max par session', 'Cas d\'usage 100 % personnalisés', 'Présentiel ou distanciel', 'Délais flexibles'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#3F3F46' }}>
                    <CheckCircle size={15} color={BLUE} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* SPRINT */}
            <div style={{
              background: '#fff', borderRadius: 16, padding: 32,
              border: '1.5px solid #E5E7EB',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: BLUE_LIGHT_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} color={BLUE} strokeWidth={2.4} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', margin: 0 }}>
                  Ateliers Sprint IA
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A' }}>1 980 €</span>
                <span style={{ color: NEUTRAL, fontSize: 14, fontWeight: 600 }}>HT / atelier (groupe)</span>
              </div>
              <p style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5, marginBottom: 16 }}>
                Format court de 3 h pour acculturer rapidement une équipe ou un séminaire.
                Sensibilisation, prompts, IA et Excel, IA et management, veille IA.
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['3 heures en format webinar', 'Jusqu\'à 100 participants', 'Distanciel ou présentiel', 'Idéal grande échelle'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
                    <CheckCircle size={15} color={BLUE} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note Qualiopi */}
          <div style={{
            marginTop: 32, padding: '20px 24px',
            background: '#fff', borderRadius: 12,
            border: `1px solid ${BLUE}25`,
            display: 'flex', alignItems: 'flex-start', gap: 14,
          }}>
            <Shield size={22} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 700, color: '#0A0A0A', marginBottom: 4 }}>
                Tarifs éligibles à 100 % aux financements OPCO
              </div>
              <div style={{ color: '#374151', fontSize: 14, lineHeight: 1.6 }}>
                Masteria est certifié Qualiopi au titre des actions de formation.
                Tous nos tarifs sont compatibles avec les barèmes de prise en charge des OPCO français,
                sous réserve de la disponibilité du budget annuel de votre branche.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * EXEMPLE CHIFFRÉ
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
            borderRadius: 20, padding: 'clamp(28px, 4vw, 48px)',
            border: `1.5px solid ${BLUE}25`,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', padding: '5px 12px', borderRadius: 999,
              fontSize: 12, fontWeight: 700, color: BLUE_DARK, marginBottom: 16,
              border: `1px solid ${BLUE}30`,
            }}>
              <Calculator size={14} color={BLUE} /> Exemple chiffré
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 800,
              fontSize: 'clamp(24px, 3.4vw, 30px)', color: '#0A0A0A',
              marginBottom: 16, letterSpacing: '-0.01em',
            }}>
              Agence de communication, 8 personnes, formation ChatGPT marketing
            </h2>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: 16, marginBottom: 28 }}>
              Une agence parisienne de 8 collaborateurs (couverte par l'AFDAS) souhaite former toute son équipe
              à ChatGPT pour le marketing : création de contenus, briefs créatifs, veille concurrentielle.
              Voici comment se construit le financement.
            </p>

            <div style={{
              background: '#fff', borderRadius: 12, overflow: 'hidden',
              border: `1px solid ${BLUE}20`,
            }}>
              {[
                { label: 'Format choisi', val: 'Intra entreprise sur 2 jours dans leurs locaux' },
                { label: 'Tarif Masteria', val: '1 980 € HT × 2 jours = 3 960 € HT' },
                { label: 'Convention collective', val: 'Publicité (idcc 86), OPCO AFDAS' },
                { label: 'Demande déposée', val: 'Dossier complet envoyé à AFDAS par Masteria' },
                { label: 'Accord obtenu', val: '12 jours plus tard, prise en charge à 100 %' },
                { label: 'Reste à charge entreprise', val: '0 € (Masteria a facturé directement l\'AFDAS)', highlight: true },
              ].map(({ label, val, highlight }, i, arr) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center',
                  padding: '14px 20px',
                  borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none',
                  background: highlight ? BLUE_LIGHT_BG : 'transparent',
                }}>
                  <span style={{ fontSize: 14, color: NEUTRAL, fontWeight: 600 }}>{label}</span>
                  <span style={{
                    fontSize: highlight ? 16 : 14.5, fontWeight: highlight ? 800 : 600,
                    color: highlight ? BLUE_DARK : '#0A0A0A', textAlign: 'right',
                    fontFamily: highlight ? 'Nunito, sans-serif' : 'inherit',
                  }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ color: BLUE_DARK, fontSize: 13.5, marginTop: 16, fontWeight: 600, lineHeight: 1.6 }}>
              Cet exemple est représentatif. Les délais et taux varient selon votre OPCO,
              votre convention collective et le budget annuel disponible. Masteria sécurise
              chaque dossier en amont avec votre référent OPCO.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * LEVIERS DE FINANCEMENT
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            Tous les leviers de financement, sans filtre
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, maxWidth: 720, margin: '0 auto 40px' }}>
            On vous dit honnêtement ce qui marche, ce qui ne s'applique pas, et ce qui peut compléter le tout.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* OPCO */}
            <div style={{
              background: '#fff', border: `1.5px solid ${GREEN}40`,
              borderRadius: 14, padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <CheckCircle size={22} color={GREEN} />
                <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
                  OPCO, recommandé pour 95 % des entreprises
                </h3>
                <span style={{ marginLeft: 'auto', background: GREEN_BG, color: GREEN, fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Jusqu'à 100 %
                </span>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.65, marginBottom: 14 }}>
                Votre OPCO (Opérateur de Compétences) est l'organisme paritaire qui collecte la contribution
                formation de votre entreprise et la redistribue sous forme de financement de formations.
                Pour une formation IA Masteria, c'est <strong>la voie la plus rapide et la plus économique</strong> :
                pas de plafond individuel, financement direct, aucune avance de trésorerie pour vous.
              </p>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12,
                background: BLUE_LIGHT_BG, padding: 16, borderRadius: 10, marginBottom: 14,
              }}>
                {[
                  { lbl: 'Taux de prise en charge', val: '50 % à 100 %' },
                  { lbl: 'Délai d\'accord', val: '5 à 15 jours' },
                  { lbl: 'Plafond annuel TPE', val: '4 000 à 6 000 €' },
                  { lbl: 'Avance trésorerie', val: 'Aucune' },
                ].map(({ lbl, val }) => (
                  <div key={lbl}>
                    <div style={{ fontSize: 11.5, color: BLUE_DARK, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{lbl}</div>
                    <div style={{ fontSize: 16, color: '#0A0A0A', fontWeight: 800, marginTop: 2 }}>{val}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {OPCO_LIST.map(o => (
                  <span key={o.name} style={{
                    background: BLUE_LIGHT_BG, border: `1px solid ${BLUE}25`, borderRadius: 8,
                    padding: '4px 10px', fontSize: 12.5, fontWeight: 600, color: BLUE_DARK,
                  }}>{o.name}</span>
                ))}
              </div>
            </div>

            {/* PDC */}
            <div style={{
              background: '#fff', border: `1.5px solid ${BLUE}30`,
              borderRadius: 14, padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <CheckCircle size={22} color={BLUE} />
                <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
                  Plan de développement des compétences (PDC)
                </h3>
                <span style={{ marginLeft: 'auto', background: BLUE_LIGHT_BG, color: BLUE_DARK, fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Cofinançable
                </span>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.65 }}>
                Le PDC est le budget formation annuel que votre entreprise constitue pour ses salariés.
                Les formations Masteria y sont éligibles. Le coût est <strong>déductible des charges sociales</strong>
                (article 235 ter D du CGI) et peut être <strong>cofinancé par votre OPCO</strong>. C'est la voie idéale
                quand l'IA s'inscrit dans un plan stratégique de transformation.
              </p>
            </div>

            {/* FNE */}
            <div style={{
              background: '#fff', border: `1.5px solid ${BLUE}30`,
              borderRadius: 14, padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <CheckCircle size={22} color={BLUE} />
                <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
                  FNE Formation
                </h3>
                <span style={{ marginLeft: 'auto', background: BLUE_LIGHT_BG, color: BLUE_DARK, fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Cas spécifiques
                </span>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.65 }}>
                Le FNE Formation finance la formation des salariés d'entreprises confrontées à des difficultés
                économiques ou en mutation. Pour la transformation IA, certaines branches ouvrent encore des
                enveloppes FNE en 2026 (industrie, BTP, services). Cumul possible avec le financement OPCO.
                <strong> Masteria identifie cette opportunité dès le cadrage de votre devis.</strong>
              </p>
            </div>

            {/* CIF dirigeant */}
            <div style={{
              background: '#fff', border: `1.5px solid ${BLUE}30`,
              borderRadius: 14, padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <CheckCircle size={22} color={BLUE} />
                <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
                  Crédit d'impôt formation du dirigeant
                </h3>
                <span style={{ marginLeft: 'auto', background: BLUE_LIGHT_BG, color: BLUE_DARK, fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  TPE et PME
                </span>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.65 }}>
                Si vous êtes dirigeant non salarié (gérant majoritaire SARL, EURL, profession libérale),
                vous bénéficiez d'un crédit d'impôt de <strong>25 % du SMIC horaire</strong> par heure
                de formation suivie, dans la limite de <strong>40 heures par an</strong>. Soit environ
                <strong> 480 € de crédit d'impôt</strong> à valoir sur votre IS ou votre IR.
              </p>
            </div>

            {/* CPF */}
            <div style={{
              background: '#FAFAF7', border: '1.5px solid #E5E7EB',
              borderRadius: 14, padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <XCircle size={22} color={NEUTRAL} />
                <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
                  CPF, non applicable
                </h3>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.65 }}>
                Le CPF ne finance que les formations menant à une certification RNCP. Nos formations sont
                volontairement courtes et 100 % sur mesure, incompatibles avec les exigences RNCP.
                <strong> L'OPCO couvre les mêmes besoins, sans plafond individuel et sans avance.</strong>
              </p>
            </div>

            {/* France Travail */}
            <div style={{
              background: '#FAFAF7', border: '1.5px solid #E5E7EB',
              borderRadius: 14, padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <AlertCircle size={22} color={NEUTRAL} />
                <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
                  France Travail, hors cible
                </h3>
              </div>
              <p style={{ color: '#374151', lineHeight: 1.65 }}>
                France Travail finance la formation des <strong>demandeurs d'emploi</strong>. Nos formations
                ciblent les <strong>salariés en activité</strong> dans des entreprises qui transforment leurs
                pratiques avec l'IA. Si vous cherchez un dispositif individuel post licenciement, contactez
                votre conseiller France Travail.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FINANCER UN PROJET DE CONSEIL OU DE DÉVELOPPEMENT IA
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: BLUE_LIGHT_BG, padding: '6px 14px', borderRadius: 999,
            fontSize: 12.5, fontWeight: 700, color: BLUE_DARK, marginBottom: 16,
            border: `1px solid ${BLUE}25`,
          }}>
            <Lightbulb size={15} color={BLUE} /> Conseil et développement IA
          </div>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 12, letterSpacing: '-0.01em',
          }}>
            Financer un projet de conseil ou de développement IA
          </h2>

          {/* Réponse directe citable */}
          <p style={{
            fontSize: 16.5, color: '#0A0A0A', lineHeight: 1.7, maxWidth: 860,
            marginBottom: 24, fontWeight: 500,
            background: '#F9FAFB', border: '1px solid #E5E7EB',
            borderLeft: `3px solid ${BLUE}`, borderRadius: '0 12px 12px 0',
            padding: '20px 24px',
          }}>
            <strong>
              Le conseil et le développement IA sur mesure ne sont pas finançables par l'OPCO :
              seule la formation l'est. Ce sont des prestations de service, facturées au forfait
              sur devis. Selon votre profil et votre projet, d'autres dispositifs peuvent parfois
              s'appliquer (France Num, Bpifrance, crédit d'impôt innovation ou recherche, aides
              régionales), à étudier au cas par cas, sans garantie d'éligibilité.
            </strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15.5, lineHeight: 1.7, maxWidth: 860, marginBottom: 32 }}>
            L'OPCO finance des actions de formation, pas des prestations de conseil ni du
            développement logiciel. Un accompagnement stratégique, la création d'un agent IA ou
            d'un outil sur mesure relèvent donc d'un budget projet, distinct du budget formation.
            Les dispositifs ci-dessous existent et peuvent, dans certains cas, soutenir ce type de
            dépense. Nous les signalons par transparence, sans promettre ni prise en charge ni taux :
            l'éligibilité dépend de votre situation et se vérifie auprès de chaque organisme.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
            marginBottom: 28,
          }}>
            {DISPOSITIFS_PROJET.map(({ icon: Icon, name, desc }) => (
              <div key={name} style={{
                background: '#fff', borderRadius: 14, padding: '24px 26px',
                border: '1px solid #E5E7EB',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, background: BLUE_LIGHT_BG,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={21} color={BLUE} strokeWidth={2.2} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#0A0A0A', margin: 0, lineHeight: 1.25 }}>
                    {name}
                  </h3>
                </div>
                <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '18px 24px', background: '#FAFAF7', borderRadius: 12,
            border: '1px solid #E5E7EB',
            display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 28,
          }}>
            <Info size={20} color={NEUTRAL} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ color: '#374151', fontSize: 14, lineHeight: 1.6 }}>
              Masteria n'instruit pas ces dispositifs et ne garantit aucune éligibilité. Nous
              fournissons les éléments utiles à votre dossier (devis détaillé, description du projet)
              et vous orientons vers les bons interlocuteurs. La décision finale appartient à
              l'organisme financeur et à votre expert-comptable pour les volets fiscaux.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/diagnostic-ia" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: BLUE, color: '#fff', padding: '14px 26px',
              borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
            }}>
              Cadrer mon projet avec un diagnostic IA <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '12px 24px',
              borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
              border: `2px solid ${BLUE}`,
            }}>
              Demander un devis projet
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * QUEL OPCO POUR MOI
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            Quel OPCO selon votre secteur d'activité
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, maxWidth: 720, margin: '0 auto 40px' }}>
            Chaque entreprise est rattachée à un OPCO unique en fonction de sa convention collective.
            Voici les 11 OPCO français et leurs secteurs.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12,
          }}>
            {OPCO_LIST.map(o => (
              <div key={o.name} style={{
                background: '#FAFAF7', borderRadius: 12, padding: '18px 22px',
                border: '1px solid #E5E7EB',
                display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                <div style={{
                  fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18,
                  color: '#0A0A0A',
                }}>
                  {o.name}
                </div>
                <div style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.5 }}>
                  {o.secteur}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 32, padding: '20px 28px',
            background: BLUE_LIGHT_BG, borderRadius: 12,
            border: `1px solid ${BLUE}30`,
            display: 'flex', alignItems: 'flex-start', gap: 14,
          }}>
            <AlertCircle size={22} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ color: '#374151', fontSize: 14.5, lineHeight: 1.6 }}>
              <strong style={{ color: '#0A0A0A' }}>Vous ne savez pas de quel OPCO vous dépendez ?</strong> Cherchez votre
              IDCC (identifiant convention collective) sur votre fiche de paie ou demandez le à votre
              comptable. <Link to="/contact" style={{ color: BLUE_DARK, fontWeight: 700, textDecoration: 'underline' }}>Notre équipe vérifie aussi pour vous</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * 5 ÉTAPES
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            De la demande à la formation, 5 étapes en 3 à 4 semaines
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, maxWidth: 720, margin: '0 auto 40px' }}>
            Masteria gère l'administratif. Vous vous concentrez sur votre équipe.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                n: '1', t: 'Contact et cadrage (jour 0)',
                d: 'Vous nous décrivez votre équipe, vos outils internes, votre secteur et vos objectifs. Échange de 15 minutes par téléphone ou visio. Devis personnalisé envoyé sous 24 heures ouvrées.',
                icon: FileText,
              },
              {
                n: '2', t: 'Dossier OPCO clé en main (jour 1)',
                d: 'Masteria vous fournit convention de formation, programme détaillé, fiche organisme Qualiopi, CV des formateurs. Pour ATLAS, OPCO 2i et UNIFORMATION, nous pouvons déposer directement à votre place.',
                icon: FileCheck,
              },
              {
                n: '3', t: 'Accord de l\'OPCO (jour 5 à 15)',
                d: 'L\'OPCO instruit le dossier. Masteria suit l\'avancement, relance si nécessaire et vous envoie l\'accord par email dès réception. Aucune action de votre côté pendant cette phase.',
                icon: MailCheck,
              },
              {
                n: '4', t: 'Formation dans vos locaux (jour 21 à 28)',
                d: '1 à 2 jours de formation en présentiel dans vos bureaux ou en distanciel selon votre choix. Programme 100 % construit sur vos cas d\'usage réels. Émargement, supports et exercices pratiques inclus.',
                icon: Sparkles,
              },
              {
                n: '5', t: 'Attestation et facturation directe',
                d: 'Attestation Qualiopi remise à chaque participant. Masteria facture directement l\'OPCO. Vous recevez un suivi à 30 jours pour mesurer l\'adoption sur vos cas terrain.',
                icon: BadgeCheck,
              },
            ].map(({ n, t, d, icon: Icon }) => (
              <div key={n} style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                background: '#fff', borderRadius: 14, padding: '20px 24px',
                border: '1px solid #E5E7EB',
              }}>
                <div style={{
                  flexShrink: 0, width: 48, height: 48, borderRadius: 12,
                  background: BLUE_LIGHT_BG, color: BLUE,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <Icon size={22} strokeWidth={2.2} />
                  <span style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 22, height: 22, borderRadius: '50%',
                    background: '#0A0A0A', color: '#fff',
                    fontSize: 11, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {n}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: '#0A0A0A', marginBottom: 4, fontSize: 17 }}>{t}</div>
                  <div style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * RÉASSURANCE QUALIOPI
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
            borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)',
            color: '#fff',
            display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'center',
          }}>
            <div style={{
              background: '#fff', borderRadius: 20, padding: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}>
              <picture>
                <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
                <img
                  src="/assets/qualiopi-logo.png"
                  alt="Certification Qualiopi — Masteria centre de formation"
                  width={842}
                  height={509}
                  loading="lazy"
                  style={{
                    height: 'auto', width: 'clamp(120px, 14vw, 160px)',
                    aspectRatio: '842 / 509',
                    display: 'block',
                  }}
                />
              </picture>
            </div>
            <div>
              <div style={{
                display: 'inline-block', background: '#fff', color: BLUE_DARK,
                fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999,
                textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10,
              }}>
                Certification officielle
              </div>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 10, color: '#fff',
              }}>
                Masteria est certifié Qualiopi, condition obligatoire pour le financement OPCO
              </h2>
              <p style={{ color: '#CBD5E1', lineHeight: 1.6, fontSize: 15 }}>
                La certification Qualiopi atteste que nos processus pédagogiques respectent les 7 critères
                du Référentiel National Qualité. Elle est exigée par la loi pour qu'un organisme de formation
                soit éligible aux fonds publics et mutualisés (OPCO, FNE, France Travail).
              </p>
              <a
                href="/assets/qualiopi-certificat-masteria.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: '#fff', fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  marginTop: 14,
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '10px 16px', borderRadius: 10,
                }}
              >
                Voir notre certificat Qualiopi (PDF) <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FAQ
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 36px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            Questions fréquentes sur le financement
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, marginBottom: 32 }}>
            Tout ce que les directions et services RH nous demandent. Réponses précises, sans langue de bois.
          </p>
          {FAQ.map((item, i) => (
            <details key={i} style={{ borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
              <summary style={{
                cursor: 'pointer', fontWeight: 700, fontSize: 16.5,
                color: '#0A0A0A', listStyle: 'none', display: 'flex',
                justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
                fontFamily: 'Nunito, sans-serif',
              }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: BLUE, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 15.5 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * CTA FINAL
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1E40AF 100%)',
        color: '#fff', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <BadgeCheck size={44} color="#fff" style={{ marginBottom: 16 }} />
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 16, letterSpacing: '-0.01em',
          }}>
            Formez votre équipe à l'IA, votre OPCO finance
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 8, lineHeight: 1.6 }}>
            Masteria gère le dossier OPCO de A à Z.
          </p>
          <p style={{ fontSize: 15, color: '#9CA3AF', marginBottom: 32, lineHeight: 1.6 }}>
            Devis personnalisé sous 24 h, accord OPCO sous 5 à 15 j, formation sous 3 à 4 semaines.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: BLUE_DARK, padding: '16px 32px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}>
              Demander mon devis gratuit <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff', padding: '14px 30px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: '2px solid #fff',
            }}>
              Voir le catalogue
            </Link>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13.5, color: '#CBD5E1' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Shield size={14} color="#fff" /> Certifié Qualiopi
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Users size={14} color="#fff" /> +1 500 pros formés
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <TrendingUp size={14} color="#fff" /> 98 % de satisfaction
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
