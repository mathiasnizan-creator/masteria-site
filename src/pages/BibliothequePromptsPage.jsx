import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen, Check, ChevronDown, Copy, Lightbulb, ShieldAlert, Sparkles,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PROMPT_METIERS, REGLES_PROMPT, ERREURS } from '../data/prompts-library'

/*
 * Bibliothèque de prompts par métier — actif liable (backlinks, partages) et
 * cible de la requête « bibliothèque de prompts ».
 *
 * ARCHITECTURE SEO/GEO : les 112 prompts sont TOUS rendus dans le DOM par défaut
 * (filtre « Tous les métiers » à l'état initial). Le prérendu capture donc
 * l'intégralité du contenu, crawlable et citable. Le filtre par métier est un
 * confort de lecture, jamais une condition d'affichage du contenu.
 *
 * INTÉGRITÉ : chaque prompt suppose que l'utilisateur fournit SES documents, et
 * aucun ne promet de résultat chiffré. Le « pourquoi ça marche » est la valeur
 * propre du recueil : c'est la matière pédagogique, pas la liste de prompts.
 */

const c = '#2563EB'
const SECTION_PAD = 'clamp(56px, 8vw, 90px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 26 }

const TOTAL = PROMPT_METIERS.reduce((a, m) => a + m.prompts.length, 0)

const PAGE_URL = 'https://www.master-ia.fr/bibliotheque-de-prompts'

const FAQ = [
  {
    q: "Qu'est-ce qu'une bibliothèque de prompts et à quoi ça sert ?",
    a: `Une bibliothèque de prompts est un recueil d'instructions rédigées et testées, classées par usage ou par métier, que l'on réutilise au lieu de réécrire sa demande à chaque fois. Son intérêt réel n'est pas le gain de frappe : c'est la standardisation. Quand une équipe partage les mêmes prompts, elle obtient des résultats comparables d'une personne à l'autre, et la qualité cesse de dépendre de l'aisance de chacun avec l'IA. Cette bibliothèque en compte ${TOTAL}, répartis sur ${PROMPT_METIERS.length} métiers.`,
  },
  {
    q: 'Ces prompts fonctionnent-ils sur ChatGPT, Claude, Copilot, Gemini et Mistral ?',
    a: "Oui, ils sont écrits pour être neutres : rôle, contexte, tâche, format et garde-fou sont compris par les cinq outils. Les différences apparaissent sur le confort, pas sur la validité : Claude accepte des documents plus longs, Copilot et Gemini lisent directement le fichier ouvert dans votre suite bureautique, ChatGPT permet d'enregistrer un prompt dans un GPT personnalisé, Mistral dans un agent. Notre comparateur « quel outil IA pour votre métier » aide à choisir celui qui correspond à vos usages.",
  },
  {
    q: 'Pourquoi vos prompts contiennent-ils des crochets à remplir ?',
    a: "Parce qu'un prompt sans votre matière produit du générique. Les crochets marquent l'endroit exact où coller votre contrat, votre tableau, vos verbatims clients ou votre fiche de poste. C'est ce croisement qui crée la valeur : le même prompt donne un résultat banal sans document et un résultat exploitable avec. Les prompts qui promettent un miracle sans rien vous demander sont ceux qui déçoivent.",
  },
  {
    q: "Peut-on coller n'importe quel document dans un outil d'IA ?",
    a: "Non, et c'est l'erreur qui coûte le plus cher. Les comptes gratuits grand public n'offrent pas les garanties contractuelles des offres professionnelles. La règle de base : des comptes professionnels administrés par l'entreprise, une charte d'usage écrite qui liste ce qui ne doit jamais être saisi (données personnelles nominatives, données de santé, secrets d'affaires, identifiants), et l'anonymisation préalable des documents sensibles. La CNIL publie des recommandations sur l'usage de l'IA au regard du RGPD.",
  },
  {
    q: 'Comment adapter un prompt qui ne donne pas le bon résultat ?',
    a: "N'en réécrivez pas un nouveau : corrigez celui-là dans la conversation. Trois leviers dans l'ordre : précisez le format attendu (« en tableau, une ligne par écart »), donnez un contre-exemple (« pas comme ça, plutôt comme ceci »), réduisez le périmètre (« ne traite que la partie 2 »). Deux ou trois allers-retours produisent presque toujours un meilleur résultat qu'un prompt parfait du premier coup.",
  },
  {
    q: 'Ces prompts sont-ils gratuits et réutilisables en entreprise ?',
    a: "Oui, librement, y compris dans vos supports internes. Ils sont extraits de la matière de nos formations et publiés tels quels. Ce que la formation apporte en plus, ce n'est pas une liste plus longue : c'est la construction de vos propres prompts sur vos vrais dossiers, la bibliothèque partagée de votre équipe, et le cadre d'usage qui va avec.",
  },
  {
    q: 'Faut-il une bibliothèque de prompts par outil ou par métier ?',
    a: "Par métier. Un prompt bien construit se transfère d'un outil à l'autre presque sans retouche, alors qu'il ne se transfère pas d'un métier à l'autre : les documents, le vocabulaire et les livrables changent. Organiser par outil oblige à tout refaire au moindre changement d'abonnement ; organiser par métier produit un actif qui survit aux évolutions du marché.",
  },
  {
    q: "Comment construire la bibliothèque de prompts de son entreprise ?",
    a: "En trois temps. Partez des tâches réelles les plus fréquentes de chaque équipe, pas des possibilités de l'outil. Faites rédiger les prompts par ceux qui font le travail, puis testez-les sur de vrais dossiers et conservez ceux qui passent. Enfin, hébergez-les à un endroit unique et accessible, avec un responsable par métier : une bibliothèque que personne ne met à jour meurt en trois mois.",
  },
]

const LEXIQUE = [
  { t: 'Prompt', d: "L'instruction donnée à une IA générative. Un prompt professionnel ne se résume pas à une question : il porte un rôle, un contexte, une tâche, un format de sortie et des garde-fous." },
  { t: 'Contexte', d: "Les éléments que vous fournissez au modèle pour situer la demande : documents, historique, contraintes, public visé. C'est la variable qui fait le plus la différence entre un résultat générique et un résultat utilisable." },
  { t: 'Garde-fou', d: "Une consigne qui limite l'invention : « n'invente aucun chiffre », « écris NON TROUVÉ si l'information est absente », « distingue ce qui est établi de ce qui est supposé »." },
  { t: 'Itération', d: "La correction du résultat dans la conversation plutôt que la réécriture d'un nouveau prompt. C'est la pratique qui distingue le plus nettement les utilisateurs avancés des débutants." },
  { t: 'Prompt système', d: "Une instruction permanente, enregistrée une fois pour toutes dans un GPT personnalisé, un Projet ou un agent, et appliquée à toutes les conversations qui en dépendent." },
]

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#collections`,
  name: 'Bibliothèque de prompts IA par métier',
  numberOfItems: PROMPT_METIERS.length,
  itemListElement: PROMPT_METIERS.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Prompts IA pour ${m.label.toLowerCase()}`,
    url: `${PAGE_URL}#${m.slug}`,
  })),
}

const definedTermsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${PAGE_URL}#lexique`,
  name: 'Lexique du prompt professionnel',
  hasDefinedTerm: LEXIQUE.map(({ t, d }) => ({ '@type': 'DefinedTerm', name: t, description: d })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: `Bibliothèque de prompts IA : ${TOTAL} prompts par métier, prêts à l'emploi`,
  description: `Recueil gratuit de ${TOTAL} prompts professionnels classés par métier, avec pour chacun la raison de sa construction, la méthode en 6 règles et les erreurs à éviter.`,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-07',
  dateModified: '2026-08-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${PAGE_URL}#webpage` },
  about: ['Bibliothèque de prompts', 'Prompt engineering', 'IA générative en entreprise'],
}

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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Carte d'un prompt : le texte est dans un <pre> sélectionnable, avec copie en un
   clic. Chaque prompt porte son ancre propre (#metier-01) : il devient citable et
   partageable individuellement, ce qui compte autant pour les liens entrants que
   pour les moteurs génératifs. */
function PromptCard({ prompt, index, metierSlug }) {
  const [copie, setCopie] = useState(false)
  const ancre = `${metierSlug}-${String(index + 1).padStart(2, '0')}`
  const copier = () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return
    navigator.clipboard.writeText(prompt.p).then(() => {
      setCopie(true)
      setTimeout(() => setCopie(false), 2000)
    }).catch(() => {})
  }
  return (
    <article id={ancre} style={{ ...cardStyle, padding: 0, overflow: 'hidden', scrollMarginTop: 96 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, padding: '18px 22px 14px', flexWrap: 'wrap' }}>
        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: 0, lineHeight: 1.35, flex: 1, minWidth: 200 }}>
          <a href={`#${ancre}`} aria-label={`Lien direct vers le prompt : ${prompt.t}`} style={{ color: '#C7CDD6', marginRight: 8, textDecoration: 'none' }}>
            {String(index + 1).padStart(2, '0')}
          </a>
          {prompt.t}
        </h3>
        <button
          onClick={copier}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
            background: copie ? '#ECFDF5' : '#fff', border: `1px solid ${copie ? '#6EE7B7' : '#E5E7EB'}`,
            borderRadius: 8, padding: '7px 13px', fontSize: 13, fontWeight: 700,
            color: copie ? '#047857' : '#374151', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            transition: 'background 160ms, border-color 160ms, color 160ms',
          }}
        >
          {copie ? <><Check size={14} strokeWidth={3} aria-hidden="true" /> Copié</> : <><Copy size={14} aria-hidden="true" /> Copier</>}
        </button>
      </div>
      <pre style={{
        margin: 0, padding: '16px 22px', background: '#F9FAFB', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 13, lineHeight: 1.7, color: '#1F2937',
        whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowX: 'auto',
      }}>{prompt.p}</pre>
      <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0, padding: '14px 22px 18px', display: 'flex', gap: 9, alignItems: 'flex-start' }}>
        <Lightbulb size={15} color={c} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
        <span><strong style={{ color: '#0A0A0A' }}>Pourquoi ça marche :</strong> {prompt.w}</span>
      </p>
    </article>
  )
}

export default function BibliothequePromptsPage() {
  // « tous » par défaut : le prérendu capture l'intégralité des prompts.
  const [filtre, setFiltre] = useState('tous')
  const metiersAffiches = filtre === 'tous' ? PROMPT_METIERS : PROMPT_METIERS.filter(m => m.slug === filtre)

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation prompt engineering', slug: 'formation-prompt-engineering' },
    { name: 'Bibliothèque de prompts', slug: 'bibliotheque-de-prompts' },
  ]

  return (
    <>
      <SEOHead
        title={`Bibliothèque de prompts IA par métier (${TOTAL} prompts) | Masteria`}
        description={`Bibliothèque de ${TOTAL} prompts IA gratuits par métier, prêts à copier, avec la raison de chaque construction. ChatGPT, Claude, Copilot, Gemini, Mistral.`}
        slug="bibliotheque-de-prompts"
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        keywords="bibliothèque de prompts, bibliotheque de prompts ia, banque de prompts, prompts chatgpt entreprise, prompts par métier, exemples de prompts professionnels, prompt engineering"
        datePublished="2026-08-07"
        dateModified="2026-08-07"
        speakable={['#geo-summary', '#definition', '#methode']}
        citations={[
          { name: 'CNIL — Intelligence artificielle', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
          { name: 'Règlement (UE) 2024/1689 — AI Act', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
        ]}
        extraJsonLd={[itemListJsonLd, definedTermsJsonLd, articleJsonLd]}
      />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(48px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -140, right: -100, width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-prompt-engineering" style={{ color: '#5B6679' }}>Prompt engineering</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Bibliothèque de prompts</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Gratuit · {TOTAL} prompts · {PROMPT_METIERS.length} métiers
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 820 }}>
            Bibliothèque de prompts IA&nbsp;: {TOTAL} prompts par métier
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 20px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(16px, 2.2vw, 18.5px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 730, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            {TOTAL} prompts professionnels tirés de nos formations, classés par métier et prêts à copier. Chacun est accompagné de la raison de sa construction : c'est cette explication qui vous permet d'écrire les vôtres, plutôt que de dépendre d'une liste. Ils fonctionnent sur ChatGPT, Claude, Copilot, Gemini et Mistral.
          </p>

          <nav aria-label="Sur cette page" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
            {[['Définition', '#definition'], ['Les prompts', '#prompts'], ['La méthode', '#methode'], ['Erreurs à éviter', '#erreurs'], ['Lexique', '#lexique'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', textDecoration: 'none', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 12px' }}>
                {label}
              </a>
            ))}
          </nav>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(18px, 3vw, 24px)', maxWidth: 730 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 12 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {[
                ['Contenu', `${TOTAL} prompts sur ${PROMPT_METIERS.length} métiers, du juridique au service client`],
                ['Format', "Chaque prompt est structuré (rôle, contexte, tâche, format, garde-fou) et copiable en un clic"],
                ['En plus', "La raison de chaque construction, la méthode en 6 règles et les 4 erreurs qui ruinent un prompt"],
                ['Outils', 'Compatibles ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI'],
                ['Accès', 'Libre et réutilisable, y compris dans vos supports internes. Sans compte ni email'],
              ].map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '8px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 105px', fontWeight: 800, fontSize: 13, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 13.5, color: '#94A3B8', lineHeight: 1.55 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── DÉFINITION + SOMMAIRE DES MÉTIERS (réponse directe citable) ── */}
      <section id="definition" style={{ padding: 'clamp(48px, 7vw, 72px) 24px', background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>La réponse en deux lignes</div>
          <h2 style={h2Style}>Qu'est-ce qu'une bibliothèque de prompts ?</h2>
          <p style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 18px', padding: '20px 24px' }}>
            <strong>Une bibliothèque de prompts est un recueil d'instructions rédigées et testées, classées par métier ou par usage, qu'une équipe réutilise au lieu de réécrire sa demande à chaque fois.</strong>{' '}
            Son intérêt n'est pas le gain de frappe : c'est la standardisation. Quand tout le monde part des mêmes prompts, les résultats deviennent comparables d'une personne à l'autre, et la qualité cesse de dépendre de l'aisance de chacun avec l'IA.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 780 }}>
            On parle aussi de banque de prompts ou de recueil d'exemples de prompts. Celle-ci en rassemble {TOTAL}, prêts à copier, utilisables avec ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI. Choisissez votre métier ci-dessous.
          </p>

          {/* Sommaire des 14 métiers : navigation, sitelinks, et surface d'ancrage */}
          <nav aria-label="Les métiers couverts" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 205px), 1fr))', gap: 10 }}>
            {PROMPT_METIERS.map(m => (
              <a
                key={m.slug}
                href={`#${m.slug}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '11px 15px',
                  fontSize: 14, fontWeight: 600, color: '#374151', textDecoration: 'none',
                }}
              >
                <span>Prompts {m.label.toLowerCase()}</span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: c, flexShrink: 0 }}>{m.prompts.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── LES PROMPTS ── */}
      <section id="prompts" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Filtre par métier */}
          <div style={{ marginBottom: 34 }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>
              Filtrer par métier
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[{ slug: 'tous', label: `Tous les métiers (${TOTAL})` }, ...PROMPT_METIERS].map(m => {
                const on = filtre === m.slug
                return (
                  <button
                    key={m.slug}
                    onClick={() => setFiltre(m.slug)}
                    aria-pressed={on}
                    style={{
                      background: on ? c : '#fff', color: on ? '#fff' : '#374151',
                      border: `1px solid ${on ? c : '#E5E7EB'}`, borderRadius: 99,
                      padding: '8px 15px', fontSize: 13.5, fontWeight: on ? 700 : 600,
                      cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                      transition: 'background 160ms, color 160ms, border-color 160ms',
                    }}
                  >
                    {m.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Sections métier : toutes rendues par défaut (SEO), filtrables à la lecture */}
          {metiersAffiches.map(m => (
            <div key={m.slug} id={m.slug} style={{ marginBottom: 56, scrollMarginTop: 96 }}>
              <div style={{ borderTop: `3px solid ${c}`, paddingTop: 18, marginBottom: 18 }}>
                <h2 style={{ ...h2Style, fontSize: 'clamp(21px, 2.6vw, 28px)', margin: '0 0 10px' }}>
                  Prompts IA pour {m.label.toLowerCase()}
                </h2>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 12px', maxWidth: 740 }}>
                  {m.intro}
                </p>
                {m.hub && (
                  <Link to={m.hub} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: c, textDecoration: 'none' }}>
                    Formations IA pour {m.label.toLowerCase()} <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {m.prompts.map((p, i) => <PromptCard key={p.t} prompt={p} index={i} metierSlug={m.slug} />)}
              </div>
            </div>
          ))}

          {/* Conversion honnête, à la fin de la matière */}
          <div style={{ background: '#F8FAFF', border: '1px solid #BFDBFE', borderLeft: `4px solid ${c}`, borderRadius: 12, padding: 'clamp(20px, 3vw, 28px)' }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px' }}>
              Et la bibliothèque de votre entreprise ?
            </h3>
            <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>
              Ces prompts sont un point de départ. Ce qui change réellement le quotidien d'une équipe, c'est sa propre bibliothèque : construite sur ses vrais dossiers, hébergée au même endroit pour tout le monde, avec un cadre d'usage écrit. C'est ce que nos formations produisent en une à deux journées, et ce que vous repartez avec.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/formation-prompt-engineering" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                Formation prompt engineering <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#374151', border: '1px solid #E5E7EB', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 600 }}>
                Parler de votre équipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE (contenu statique citable) ── */}
      <section id="methode" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>Les 6 règles d'un prompt qui donne un résultat utilisable</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 780 }}>
            Tous les prompts de cette bibliothèque appliquent ces six règles. Les connaître vaut mieux que la liste elle-même : elles vous permettent d'écrire vos propres prompts, y compris sur des situations que nous n'avons pas couvertes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 18 }}>
            {REGLES_PROMPT.map((r, i) => (
              <div key={r.t} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', background: c, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{r.t}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES ERREURS ── */}
      <section id="erreurs" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Ce qui ruine un prompt</div>
          <h2 style={h2Style}>Les 4 erreurs que nous voyons en formation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ERREURS.map(e => (
              <div key={e.t} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start', padding: 22 }}>
                <span style={{ width: 38, height: 38, borderRadius: 10, background: '#FEF3C7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldAlert size={19} color="#D97706" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{e.t}</h3>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{e.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEXIQUE ── */}
      <section id="lexique" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>Lexique express</div>
          <h2 style={h2Style}>Le vocabulaire du prompt professionnel</h2>
          <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)' }}>
            <dl style={{ margin: 0 }}>
              {LEXIQUE.map(({ t, d }, i) => (
                <div key={t} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{t}</dt>
                  <dd style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '16px 0 0' }}>
            83 autres termes de l'IA en entreprise dans notre <Link to="/glossaire-ia" style={{ color: c, fontWeight: 600 }}>glossaire IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes</h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── AUTRES OUTILS ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>
            Nos autres outils gratuits
          </h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { href: '/quel-outil-ia', label: 'Quel outil IA pour votre métier ?' },
              { href: '/test-maturite-ia', label: 'Test de maturité IA (3 min)' },
              { href: '/quel-opco', label: 'Quel est mon OPCO ? (simulateur)' },
            ].map(o => (
              <Link key={o.href} to={o.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 15px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                {o.label} <ArrowRight size={13} color="#6B7280" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
