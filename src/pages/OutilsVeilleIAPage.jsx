import { Link } from 'react-router-dom'
import {
  ArrowRight, Wrench, Check, Rss, Sparkles, Workflow, Building2, Boxes,
  Newspaper, AlertTriangle, Coins, ShieldAlert, Lock,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'

/**
 * OutilsVeilleIAPage — page sœur de /automatiser-sa-veille-ia (cluster veille).
 * Cible l'intention « choisir un outil » : outil de veille (590/mois),
 * outils veille (260), logiciel de veille (320), plateforme de veille (260).
 * Divergence volontaire avec la page pilier : ici un comparatif d'outils par
 * FAMILLES (nommées), là un comparatif de 4 APPROCHES. Aucune cannibalisation.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'outils-veille-ia'
const PUBLISHED = '2026-07-24'
const c = '#2563EB'

const wrap = { maxWidth: 1140, margin: '0 auto' }
const sectionPad = 'clamp(56px, 7.5vw, 92px) 24px'
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }
const pStyle = { fontSize: 17, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 780 }

const EN_BREF = [
  ['La question à poser', "Pas « quel est le meilleur outil » mais « pour quel usage ». La réponse change tout."],
  ['Cinq familles', "De l'agrégateur RSS gratuit au système sur mesure, chacune répond à un besoin différent."],
  ['Le piège classique', "Choisir une plateforme pro pour un besoin qu'un agrégateur à 10 € couvrirait, ou l'inverse."],
  ['Notre position', "Nous avons construit un système sur mesure pour notre veille. Ce n'est pas la réponse pour tout le monde."],
]

// Cinq familles d'outils, du plus léger au plus lourd. Fiches factuelles,
// sans classement mensonger ni prix inventé (ordres de grandeur vérifiables).
const FAMILLES = [
  {
    Icon: Rss, nom: 'Agrégateurs & alertes',
    exemples: 'Feedly, Inoreader, Google Alertes',
    role: 'Rassembler les publications de plusieurs sources en un flux unique.',
    pour: 'Démarrer, une veille individuelle ou une petite équipe.',
    prix: 'Gratuit à freemium',
    limite: "Remontent tout : le tri et la synthèse restent à votre charge.",
  },
  {
    Icon: Sparkles, nom: 'Assistants IA',
    exemples: 'Perplexity, NotebookLM, ChatGPT, Claude',
    role: 'Résumer, comparer et interroger un corpus en langage naturel.',
    pour: 'Synthétiser vite, creuser un sujet, préparer une note.',
    prix: 'Freemium à abonnement',
    limite: "Excellents pour analyser, faibles pour collecter en continu. Vérifiez les sources citées.",
  },
  {
    Icon: Workflow, nom: 'Agents no-code',
    exemples: 'Make, n8n, Zapier',
    role: 'Automatiser la chaîne : collecte, filtre, résumé, envoi.',
    pour: 'Une veille récurrente livrée seule, sans développer.',
    prix: 'Abonnement à l\'usage',
    limite: "Puissants mais à cadrer : mal réglés, ils industrialisent le bruit.",
  },
  {
    Icon: Building2, nom: 'Plateformes pro',
    exemples: 'Digimind, Meltwater, Talkwalker, Sindup',
    role: 'Veille d\'entreprise clé en main, avec tableaux de bord et support.',
    pour: 'Grandes organisations, veille e-réputation et concurrentielle à l\'échelle.',
    prix: 'Sur devis (budget conséquent)',
    limite: "Coût élevé et périmètre large : souvent surdimensionné pour un besoin ciblé.",
  },
  {
    Icon: Boxes, nom: 'Système sur mesure',
    exemples: 'Pipeline dédié (le nôtre)',
    role: 'Collecte, tri, analyse et publication conçus pour vos sources et sujets.',
    pour: 'Un besoin précis qu\'aucun outil du marché ne couvre exactement.',
    prix: 'Développement, puis coût de run faible',
    limite: "Demande de la conception au départ. C'est l'option la plus fine ensuite.",
  },
]

// Critères de choix — capte « comment choisir un outil de veille ».
const CRITERES = [
  { t: 'Votre usage réel', d: "Collecter, synthétiser, ou surveiller des concurrents à l'échelle ne demandent pas les mêmes outils. Nommez la décision que votre veille doit éclairer avant de comparer quoi que ce soit." },
  { t: 'Le temps disponible', d: "Un outil qui exige une heure de réglage par semaine ne tiendra pas si personne ne l'a. Le meilleur outil est celui que votre équipe ouvrira vraiment." },
  { t: 'La maîtrise des sources', d: "Plus l'outil décide seul de ce qu'il vous montre, plus le risque de « slop » et d'angle mort augmente. Gardez la main sur ce qui entre." },
  { t: 'Le vrai coût', d: "Le prix affiché n'est qu'une part. Comptez le temps de configuration, d'apprentissage et de tri. Un outil « gratuit » mal réglé coûte cher en attention." },
]

const PIEGES = [
  { Icon: Coins, t: 'Le surdimensionnement', d: "Souscrire une plateforme à plusieurs milliers d'euros pour un besoin qu'un agrégateur à 10 € couvrirait. L'inverse existe aussi : bricoler à la main un besoin qui méritait un vrai outil." },
  { Icon: ShieldAlert, t: 'Le « slop » automatisé', d: "Plus un outil collecte, plus il ramasse de contenu creux généré à la chaîne. Sans filtre, l'outil accélère surtout la production de bruit." },
  { Icon: Lock, t: 'La confidentialité des données', d: "Coller des informations sensibles dans un assistant grand public, c'est les confier à un tiers. Pour une veille interne, vérifiez l'hébergement et la politique de rétention." },
]

const FAQ = [
  { q: "Quel est le meilleur outil de veille IA ?", a: "Il n'existe pas de meilleur outil absolu : cela dépend de votre usage. Pour une veille individuelle, Perplexity ou Google Alertes suffisent. Pour une veille d'équipe automatisée, un agent Make ou n8n. Pour une veille d'entreprise à l'échelle, une plateforme pro. Pour un besoin très précis, un système sur mesure. Choisissez l'outil à partir de la décision que votre veille doit éclairer, pas de sa liste de fonctionnalités." },
  { q: "Quelle différence entre un logiciel de veille et un agrégateur ?", a: "Un agrégateur (Feedly, Inoreader) rassemble des flux et vous laisse trier. Un logiciel ou une plateforme de veille (Digimind, Meltwater) ajoute l'analyse, les tableaux de bord, l'e-réputation et le support, pour un budget bien supérieur. L'agrégateur convient à une veille individuelle, la plateforme à une veille d'entreprise structurée." },
  { q: "Peut-on faire une veille IA gratuitement ?", a: "Oui pour démarrer. Un lecteur RSS gratuit, Google Alertes et la version gratuite d'un assistant IA couvrent un besoin individuel. La limite arrive avec le volume et le tri : sans filtre ni dédoublonnage, le gratuit sature vite. Une veille d'équipe fiable demande un outil payant ou un système dédié." },
  { q: "Perplexity ou NotebookLM pour la veille ?", a: "Perplexity excelle pour interroger le web en temps réel et vérifier une actualité. NotebookLM brille pour synthétiser un corpus que vous lui fournissez (rapports, articles enregistrés). Les deux analysent bien, mais ne collectent pas seuls en continu : associez-les à un agrégateur ou un agent pour la collecte." },
  { q: "Faut-il un outil no-code comme Make ou n8n ?", a: "Utile dès que votre veille devient récurrente et que vous voulez qu'elle se livre seule (résumé quotidien dans un canal, une boîte mail). Make et n8n orchestrent collecte, filtre et envoi sans développer. Comptez toutefois un temps de réglage, et surveillez la qualité du filtre pour ne pas automatiser du bruit." },
  { q: "Une plateforme de veille pro vaut-elle son prix ?", a: "Pour une grande organisation qui suit sa e-réputation, ses concurrents et son marché à l'échelle, oui : les tableaux de bord, l'historique et le support justifient le budget. Pour un besoin ciblé ou une PME, c'est souvent surdimensionné. Un agent no-code ou un système sur mesure revient moins cher et colle mieux." },
  { q: "Quand passer à un système de veille sur mesure ?", a: "Quand aucun outil du marché ne couvre exactement vos sources et vos filtres, ou quand vous voulez maîtriser entièrement ce qui entre et sort. Un système sur mesure demande un développement initial, puis tourne à faible coût. C'est le choix que nous avons fait pour notre propre veille, et que nous mettons en place pour nos clients." },
  { q: "Comment garder mes données confidentielles avec un outil de veille IA ?", a: "Évitez de coller des informations sensibles dans un assistant grand public. Pour une veille interne, privilégiez des outils dont l'hébergement et la politique de rétention sont clairs, ou une solution que vous contrôlez. La confidentialité se décide au moment du choix de l'outil, pas après." },
]

const RESSOURCES = [
  { tag: 'Méthode', titre: 'Automatiser sa veille IA', desc: "Le guide complet : les approches, la méthode en 5 étapes et les pièges à éviter.", href: '/automatiser-sa-veille-ia', cta: 'Lire le guide' },
  { tag: 'Usage', titre: 'Veille concurrentielle par l\'IA', desc: "Surveiller ses concurrents avec l'IA : que suivre, comment, et dans quel cadre.", href: '/veille-concurrentielle-ia', cta: 'Voir l\'usage' },
  { tag: 'En accès libre', titre: 'Notre veille IA quotidienne', desc: "Un exemple de veille produite par un système sur mesure, publiée chaque matin ouvré.", href: '/veille-ia', cta: 'La lire' },
]

export default function OutilsVeilleIAPage() {
  const metaTitle = "Outils de veille IA : le comparatif pour choisir | Masteria"
  const metaDescription = "Quel outil de veille IA choisir ? Le comparatif par familles : agrégateurs, assistants IA, agents no-code, plateformes pro, sur mesure. Forces, limites, budget."

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      '@id': `${SITE}/${SLUG}#article`,
      headline: "Outils de veille IA : le comparatif pour choisir",
      description: metaDescription,
      author: { '@id': `${SITE}/#mathias-nizan` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
      datePublished: PUBLISHED, dateModified: PUBLISHED,
      inLanguage: 'fr-FR', isAccessibleForFree: true,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${SLUG}` },
      about: ['Outils de veille', 'Logiciel de veille', 'Veille IA', 'Plateforme de veille'],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.veille-lede'] },
    },
    {
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}/${SLUG}#familles`,
      name: 'Familles d\'outils de veille IA',
      numberOfItems: FAMILLES.length,
      itemListElement: FAMILLES.map((f, i) => ({
        '@type': 'ListItem', position: i + 1, name: f.nom, description: f.role,
      })),
    },
  ]

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        slug={SLUG}
        keywords="outils de veille ia, outil de veille, logiciel de veille, plateforme de veille, outils veille, veille ia, feedly, perplexity, make n8n veille"
        breadcrumbs={[{ name: 'Accueil', slug: '' }, { name: 'Outils de veille IA', slug: SLUG }]}
        faqItems={FAQ}
        datePublished={PUBLISHED}
        dateModified={PUBLISHED}
        extraJsonLd={jsonLd}
      />

      {/* ── HERO SOMBRE ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(52px, 7vw, 84px) 24px clamp(56px, 8vw, 88px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Outils de veille IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wrench size={17} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Comparatif</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.06, margin: 0, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Outils de veille IA<br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>lequel choisir, pour quel usage</span>
          </h1>

          <p className="veille-lede" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '26px 0 30px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La bonne question n&apos;est pas « quel est le meilleur outil de veille », mais « pour quel usage ».
            Voici les cinq familles d&apos;outils, ce qu&apos;elles font vraiment, et comment choisir sans payer
            pour ce dont vous n&apos;avez pas besoin.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#familles" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Voir le comparatif <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/automatiser-sa-veille-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.14)' }}>
              La méthode complète
            </Link>
          </div>

          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 1, margin: '40px 0 0', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden' }}>
            {EN_BREF.map(([t, d], i) => (
              <div key={i} style={{ background: '#0A0F1E', padding: '18px 20px' }}>
                <dt style={{ fontSize: 12.5, fontWeight: 700, color: '#7DA9F0', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 7 }}>{t}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.55 }}>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── DÉFINITION ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>Avant de comparer</div>
          <h2 style={h2Style}>À quoi sert un outil de veille IA</h2>
          <p style={pStyle}>
            Un outil de veille IA sert à couvrir une ou plusieurs étapes de la chaîne de veille :
            collecter les publications, écarter les doublons et le bruit, résumer, puis livrer le résultat.
            Aucun outil ne fait bien les quatre à la fois. C&apos;est pourquoi comparer des outils « en général »
            n&apos;a pas de sens : on compare des outils pour un usage donné.
          </p>
          <p style={pStyle}>
            Les cinq familles ci-dessous se distinguent par l&apos;étape qu&apos;elles couvrent le mieux et par le
            public qu&apos;elles visent. Le bon choix se lit à l&apos;intersection de votre usage, de votre temps et
            de votre budget.
          </p>
        </div>
      </section>

      {/* ── LES 5 FAMILLES ── */}
      <section id="familles" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Le comparatif</div>
          <h2 style={h2Style}>Les cinq familles d&apos;outils de veille</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Du plus léger au plus lourd. Chaque famille répond à un besoin réel : l&apos;erreur est de prendre
            la plus grosse par défaut, ou la plus petite par économie mal placée.
          </p>
          <div style={{ display: 'grid', gap: 18 }}>
            {FAMILLES.map(({ Icon, nom, exemples, role, pour, prix, limite }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 26, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: '#DBEAFE', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: c }}>
                    <Icon size={22} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{nom}</h3>
                    <div style={{ fontSize: 13.5, color: '#6B7280', marginTop: 2 }}>{exemples}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: 12.5, fontWeight: 700, color: c, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 999, padding: '5px 12px', whiteSpace: 'nowrap' }}>{prix}</span>
                </div>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.6, margin: '0 0 14px' }}>{role}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <Check size={16} style={{ color: '#16A34A', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}><strong style={{ color: '#0A0A0A' }}>Pour qui : </strong>{pour}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <AlertTriangle size={16} style={{ color: '#D97706', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}><strong style={{ color: '#0A0A0A' }}>La limite : </strong>{limite}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT CHOISIR ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>La bonne décision</div>
          <h2 style={h2Style}>Comment choisir votre outil de veille IA</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Quatre critères tranchent la plupart des choix. Passez-les dans l&apos;ordre : l&apos;usage d&apos;abord,
            le prix en dernier.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CRITERES.map((cr, i) => (
              <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 14px 14px 0', padding: '20px 22px' }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: c, marginBottom: 8 }}>{`0${i + 1}`}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{cr.t}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{cr.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES PIÈGES ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <div style={kicker}>À éviter</div>
          <h2 style={h2Style}>Trois pièges au moment de choisir</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {PIEGES.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24 }}>
                <Icon size={22} style={{ color: c, marginBottom: 14 }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VITRINE ── */}
      <section style={{ padding: sectionPad, background: '#0A0F1E', color: '#F8FAFC' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ ...kicker, color: '#7DA9F0' }}>Un exemple concret</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC' }}>À quoi ressemble une veille faite sur mesure</h2>
            <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 560 }}>
              Plutôt que d&apos;empiler des outils, nous avons construit un système dédié pour notre veille IA :
              collecte cadrée, tri strict, analyse signée, publication chaque matin. Le résultat est en accès
              libre, et il montre ce qu&apos;un outil sur mesure permet quand aucun produit du marché ne colle.
            </p>
            <Link to="/veille-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lire notre veille <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Newspaper size={20} style={{ color: '#60A5FA' }} aria-hidden="true" />
              <span style={{ fontWeight: 700, fontSize: 15 }}>Système sur mesure</span>
            </div>
            {['Vos sources, pas un catalogue imposé', 'Vos filtres, réglés sur vos sujets', 'Le format et le rythme que vous voulez', 'Vous restez propriétaire du système'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                <Check size={17} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <span style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ ...kicker, textAlign: 'center' }}>Questions fréquentes</div>
          <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: 36 }}>Outils de veille IA : vos questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} style={{ borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: 17, color: '#0A0A0A', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: c }} aria-hidden="true">+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 16 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── RESSOURCES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>Dans le même thème</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Continuer sur la veille IA</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {RESSOURCES.map((r, i) => (
              <Link key={i} to={r.href} style={{ display: 'flex', flexDirection: 'column', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 26, textDecoration: 'none' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 12 }}>{r.tag}</span>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em' }}>{r.titre}</span>
                <span style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, marginBottom: 18, flex: 1 }}>{r.desc}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontWeight: 700, fontSize: 14.5 }}>
                  {r.cta} <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 90px) 24px', background: '#0A0A0A', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Boxes size={30} style={{ color: '#60A5FA', marginBottom: 18 }} aria-hidden="true" />
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 16, lineHeight: 1.2 }}>
            Aucun outil ne colle ? On le construit.
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 30, lineHeight: 1.6 }}>
            Quand le marché ne répond pas à votre besoin, un système sur mesure prend le relais : vos sources,
            vos filtres, votre format. Parlons-en.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#0A0A0A', padding: '16px 32px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Demander un échange <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
