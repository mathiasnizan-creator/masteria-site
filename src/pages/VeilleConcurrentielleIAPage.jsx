import { Link } from 'react-router-dom'
import {
  ArrowRight, Swords, Check, Tag, Package, Search, Users, Mic, Star, TrendingUp,
  Crosshair, Filter, PenLine, Send, Scale, AlertTriangle, Compass, Newspaper,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/**
 * VeilleConcurrentielleIAPage : page sœur du cluster veille. Cible « veille
 * concurrentielle » (2400/mois, KD36) par l'angle IA, qui nous différencie des
 * gros logiciels (Digimind, Meltwater) sur le terme générique. Angle USAGE
 * métier : que surveiller, comment, et dans quel cadre. Divergent de la pilier
 * (méthode générale) et d'outils-veille-ia (comparatif d'outils).
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'veille-concurrentielle-ia'
const PUBLISHED = '2026-07-24'
const MODIFIED = '2026-10-07'
const RDV = '/contact?type=projet&rdv=30'
const c = '#2563EB'

const wrap = { maxWidth: 1140, margin: '0 auto' }
const sectionPad = 'clamp(56px, 7.5vw, 92px) 24px'
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }
const pStyle = { fontSize: 17, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 780 }

const EN_BREF = [
  ['La définition', "Suivre de façon régulière les décisions visibles de vos concurrents, pour décider plus tôt et sur des faits."],
  ['Ce que l\'IA change', "Elle prend en charge la collecte et le premier résumé. Le sens à donner aux signaux reste votre affaire."],
  ['Ce qu\'on surveille', "Prix, offres, contenus, recrutements, prises de parole et avis clients : six signaux, séparés du bruit."],
  ['La limite à tenir', "Des informations publiques, obtenues loyalement. Observer un concurrent ne donne aucun droit de l'imiter."],
]

const SURVEILLER = [
  { Icon: Tag, t: 'Offres et prix', d: "Hausse ou baisse de tarif, promotion, nouvelle formule d'abonnement : le signal le plus direct d'un mouvement commercial." },
  { Icon: Package, t: 'Produits et nouveautés', d: "Lancements, fonctions ajoutées, gammes retirées. On y lit où un concurrent investit et ce qu'il abandonne." },
  { Icon: Search, t: 'Contenus et SEO', d: "Sujets publiés, mots-clés visés, nouvelles pages : une lecture précise de la façon dont il cherche ses clients." },
  { Icon: Users, t: 'Recrutements', d: "Les offres d'emploi annoncent la direction prise : un concurrent qui recrute des ingénieurs de données prépare autre chose qu'un concurrent qui recrute des commerciaux." },
  { Icon: Mic, t: 'Prises de parole', d: "Entretiens de dirigeants, publications LinkedIn, articles de presse. Le discours annonce souvent la décision de quelques mois." },
  { Icon: Star, t: 'Avis clients', d: "Ce que ses clients saluent et ce qu'ils lui reprochent dessine une carte de ses forces, et des places à prendre pour vous." },
]

const ETAPES = [
  { Icon: Crosshair, t: 'Cadrer', d: "Nommez cinq à dix concurrents et, pour chacun, ce qui compte. Sans périmètre écrit, la veille déborde dès la première semaine." },
  { Icon: Newspaper, t: 'Collecter', d: "Confiez le relevé des sources publiques à un flux automatisé : sites, réseaux sociaux, presse, plateformes d'avis, offres d'emploi. Un outil comme Make ou n8n, associé à un assistant IA, le fait en continu." },
  { Icon: Filter, t: 'Filtrer', d: "Écartez le bruit et les doublons pour garder les signaux. Une nouvelle grille tarifaire mérite votre attention ; le dixième communiqué recyclé, non." },
  { Icon: PenLine, t: 'Analyser', d: "L'IA résume et compare, vous interprétez. Un fait isolé dit peu de chose ; replacé dans une trajectoire, il révèle une hausse, un repli ou un changement de cap." },
  { Icon: Send, t: 'Diffuser', d: "Une synthèse à date fixe pour les équipes concernées : commerce, produit, direction. Une veille rangée dans un dossier partagé que personne n'ouvre ne sert à rien." },
]

const LIMITES = [
  { Icon: Scale, t: 'Le cadre légal', d: "La veille concurrentielle est légale tant qu'elle porte sur des informations publiques. Elle cesse de l'être avec une fausse identité, un accès frauduleux ou l'obtention d'un secret d'affaires, protégé en France par la loi du 30 juillet 2018. Suivre des personnes nommées, comme des dirigeants, revient aussi à traiter des données personnelles, soumises au RGPD." },
  { Icon: AlertTriangle, t: 'La fiabilité', d: "Un assistant IA peut prêter à un concurrent un prix ou une déclaration qui n'existe pas, et l'écrire avec assurance. Ouvrez la source avant de décider : une veille qui se trompe oriente plus mal qu'une absence de veille." },
  { Icon: Compass, t: 'Le bon dosage', d: "À force de regarder le concurrent, on finit par oublier sa propre route. La veille éclaire vos décisions ; votre stratégie reste au centre, et l'imitation n'y a pas sa place." },
]

const FAQ = [
  { q: "Qu'est-ce que la veille concurrentielle ?", a: "Le suivi méthodique des décisions visibles de vos concurrents (prix, offres, produits, communication, embauches), mené pour nourrir vos choix commerciaux et stratégiques. Elle sert à repérer tôt ce qui vous forcera à réagir ou vous ouvrira une porte ; l'imitation reste hors de son champ." },
  { q: "Comment faire une veille concurrentielle avec l'IA ?", a: "En cinq étapes : choisir les concurrents et ce qui compte chez chacun, confier le relevé des sources publiques à un assistant ou à un flux Make ou n8n, écarter le bruit, faire résumer et comparer par l'IA, puis envoyer une synthèse aux équipes concernées. L'IA économise surtout les heures de collecte ; le jugement sur ce que signifient les signaux reste humain." },
  { q: "La veille concurrentielle est-elle légale ?", a: "Oui, tant qu'elle repose sur des informations publiques obtenues loyalement : sites, réseaux sociaux, presse, avis clients, offres d'emploi. Elle devient illégale avec une fausse identité, un accès frauduleux à un système ou l'appropriation d'un secret d'affaires, protégé en France depuis la loi du 30 juillet 2018 (articles L. 151-1 et suivants du Code de commerce). Lorsque vous suivez des personnes nommées, leurs publications restent des données personnelles, soumises au RGPD." },
  { q: "Quels outils pour la veille concurrentielle par l'IA ?", a: "Pour commencer, un agrégateur et un assistant de recherche comme Perplexity. Pour automatiser, un flux Make ou n8n qui relève sites, réseaux et avis. Pour suivre de nombreux marchés, une plateforme professionnelle. Le volume et le budget tranchent ; notre comparatif des outils de veille IA décrit chaque famille, faits datés à l'appui." },
  { q: "Que surveiller en priorité chez un concurrent ?", a: "Ses prix et ses offres, ses lancements, ses contenus et les mots-clés qu'il vise, ses recrutements, les interventions de ses dirigeants et les avis de ses clients. Chaque signal se lit à sa manière : une vague d'embauches dit où il investit, une plainte qui revient dans les avis montre une faiblesse que vous pouvez combler." },
  { q: "Veille concurrentielle et veille stratégique : quelle différence ?", a: "La veille concurrentielle suit des acteurs nommés, vos concurrents directs. La veille stratégique couvre un champ plus large : marché, technologies, réglementation, nouveaux entrants. La première alimente la seconde, qui éclaire les décisions prises pour plusieurs années." },
  { q: "À quel rythme faire sa veille concurrentielle ?", a: "La collecte tourne en continu une fois automatisée ; l'analyse suit un rythme fixe. Une synthèse par semaine convient à la plupart des équipes, plus serrée pendant un lancement ou une campagne. Une note courte qui paraît chaque semaine sert davantage qu'un dossier complet publié une fois par trimestre." },
  { q: "L'IA peut-elle se tromper sur un concurrent ?", a: "Oui. Un assistant peut attribuer à un concurrent un tarif, un produit ou une déclaration inventés, avec le même aplomb qu'un fait vérifié. Exigez la source de chaque information, ouvrez-la avant de décider, et gardez une trace datée de ce que vous avez contrôlé." },
]

const RESSOURCES = [
  { tag: 'Méthode', titre: 'Automatiser sa veille IA', desc: "Monter un dispositif de veille complet : les approches possibles, cinq étapes et les erreurs qui font perdre du temps.", href: '/automatiser-sa-veille-ia', cta: 'Lire le guide' },
  { tag: 'Outils', titre: 'Outils de veille IA', desc: "Agrégateurs, assistants, flux automatisés, plateformes ou sur-mesure : quelle famille d'outils pour suivre vos concurrents.", href: '/outils-veille-ia', cta: 'Comparer les outils' },
  { tag: 'En accès libre', titre: 'La Veille IA de Masteria', desc: "Une veille automatisée puis relue chaque jour ouvré, sources citées et analyse signée, en français et en anglais.", href: '/veille-ia', cta: "Lire l'édition du jour" },
]

export default function VeilleConcurrentielleIAPage() {
  const metaTitle = "Veille concurrentielle IA : méthode et cadre | Masteria"
  const metaDescription = "Faire sa veille concurrentielle avec l'IA : que surveiller chez vos concurrents, la méthode en 5 étapes, les outils et le cadre légal à respecter."

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      '@id': `${SITE}/${SLUG}#article`,
      headline: "Veille concurrentielle par l'IA : méthode et cadre",
      description: metaDescription,
      author: { '@id': `${SITE}/#mathias-nizan` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
      datePublished: PUBLISHED, dateModified: MODIFIED,
      inLanguage: 'fr-FR', isAccessibleForFree: true,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${SLUG}` },
      about: ['Veille concurrentielle', 'Intelligence économique', 'Veille IA', 'Veille stratégique'],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.veille-lede'] },
    },
    {
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}/${SLUG}#methode`,
      name: 'Méthode de veille concurrentielle avec l\'IA',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: ETAPES.length,
      itemListElement: ETAPES.map((e, i) => ({
        '@type': 'ListItem', position: i + 1, name: e.t, description: e.d,
      })),
    },
  ]

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        slug={SLUG}
        keywords="veille concurrentielle, veille concurrentielle ia, veille concurrentielle avec l'ia, surveiller ses concurrents, intelligence économique, veille stratégique ia, outil veille concurrentielle"
        breadcrumbs={[{ name: 'Accueil', slug: '' }, { name: 'Veille concurrentielle par l\'IA', slug: SLUG }]}
        faqItems={FAQ}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
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
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Veille concurrentielle par l&apos;IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Swords size={17} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Usage métier</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.06, margin: 0, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Veille concurrentielle<br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce que l&apos;IA y change</span>
          </h1>

          <p className="veille-lede" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '26px 0 30px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Suivre ses concurrents a toujours dévoré des heures. L&apos;IA prend désormais en charge la collecte
            et le premier résumé, et laisse l&apos;interprétation à vos équipes. Vous trouverez ici les six signaux
            à suivre, une méthode en cinq étapes et la limite légale à ne pas franchir.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#surveiller" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Que surveiller <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.14)' }}>
              Faire construire la vôtre
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
          <div style={kicker}>Le point de départ</div>
          <h2 style={h2Style}>Veille concurrentielle : la définition, et ce que l&apos;IA y change</h2>
          <p style={pStyle}>
            La veille concurrentielle consiste à suivre, avec méthode et dans la durée, les décisions visibles
            de vos concurrents, afin de nourrir vos choix commerciaux et stratégiques. Elle sert à repérer tôt
            le mouvement qui compte : une baisse de prix, un lancement, un virage dans le discours.
          </p>
          <p style={pStyle}>
            L&apos;IA déplace la charge de travail. Un flux automatisé relève les sources publiques sans
            interruption, un assistant résume et compare, et vos équipes consacrent leur temps à décider ce que
            ces signaux impliquent pour l&apos;entreprise. Le bénéfice se mesure en avance : voir juste, et
            quelques semaines plus tôt.
          </p>
        </div>
      </section>

      {/* ── QUE SURVEILLER ── */}
      <section id="surveiller" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Les signaux</div>
          <h2 style={h2Style}>Que surveiller chez vos concurrents</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Tout suivre revient à ne rien voir. Six signaux concentrent l&apos;essentiel de ce qui vous sera
            utile pour décider.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
            {SURVEILLER.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, background: '#DBEAFE', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: c }}>
                    <Icon size={21} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{t}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>La méthode</div>
          <h2 style={h2Style}>Une veille concurrentielle avec l&apos;IA, en cinq temps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 8 }}>
            {ETAPES.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, background: '#DBEAFE', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: c }}>
                    <Icon size={21} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8' }}>Étape {i + 1}</div>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE CADRE / LIMITES ── */}
      <section style={{ padding: sectionPad, background: '#0A0F1E', color: '#F8FAFC' }}>
        <div style={wrap}>
          <div style={{ ...kicker, color: '#7DA9F0' }}>La ligne à tenir</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Jusqu&apos;où peut-on aller, et où s&apos;arrêter</h2>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 720 }}>
            Une veille concurrentielle efficace reste dans un cadre. Trois limites méritent d&apos;être posées
            avant d&apos;automatiser quoi que ce soit.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {LIMITES.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 24 }}>
                <Icon size={22} style={{ color: '#60A5FA', marginBottom: 14 }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17.5, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (remplace le bloc fondateur commun) ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', borderLeft: `3px solid ${c}`, paddingLeft: 22 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan, fondateur de Masteria, a rédigé cette méthode à partir des dispositifs de veille que
            le cabinet conçoit, dont la veille IA qu&apos;il publie chaque jour ouvré. Le texte date du
            7 octobre 2026, et{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>la page de Mathias Nizan</Link>{' '}
            détaille son parcours.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ ...kicker, textAlign: 'center' }}>Vos questions</div>
          <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: 36 }}>Veille concurrentielle et IA : ce qu&apos;on nous demande</h2>
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
          <div style={kicker}>Sur le même sujet</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Pour compléter cette méthode</h2>
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
          <TrendingUp size={30} style={{ color: '#60A5FA', marginBottom: 18 }} aria-hidden="true" />
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 16, lineHeight: 1.2 }}>
            Une veille concurrentielle qui tourne toute seule
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 30, lineHeight: 1.6 }}>
            Masteria construit le dispositif qui suit vos concurrents selon vos critères et livre à vos équipes
            une synthèse à date fixe. Dites-nous qui vous voulez suivre : le cadrage de 30 minutes est
            offert, puis le dispositif fait l&apos;objet d&apos;un forfait sur devis.
          </p>
          <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#0A0A0A', padding: '16px 32px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Réserver 30 minutes de cadrage <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
