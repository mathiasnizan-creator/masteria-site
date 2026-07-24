import { Link } from 'react-router-dom'
import {
  ArrowRight, Swords, Check, Tag, Package, Search, Users, Mic, Star, TrendingUp,
  Crosshair, Filter, PenLine, Send, Scale, AlertTriangle, Compass, Newspaper,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'

/**
 * VeilleConcurrentielleIAPage — page sœur du cluster veille. Cible « veille
 * concurrentielle » (2400/mois, KD36) par l'angle IA, qui nous différencie des
 * gros logiciels (Digimind, Meltwater) sur le terme générique. Angle USAGE
 * métier : que surveiller, comment, et dans quel cadre. Divergent de la pilier
 * (méthode générale) et d'outils-veille-ia (comparatif d'outils).
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'veille-concurrentielle-ia'
const PUBLISHED = '2026-07-24'
const c = '#2563EB'

const wrap = { maxWidth: 1140, margin: '0 auto' }
const sectionPad = 'clamp(56px, 7.5vw, 92px) 24px'
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }
const pStyle = { fontSize: 17, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 780 }

const EN_BREF = [
  ['La définition', "Suivre en continu ce que font vos concurrents pour décider plus vite et plus juste."],
  ['Ce que l\'IA change', "Elle absorbe la collecte et la synthèse. L'interprétation, elle, reste à vous."],
  ['Ce qu\'on surveille', "Prix, offres, contenus, recrutements, prises de parole : les signaux, pas le bruit."],
  ['La limite à tenir', "Données publiques seulement. Surveiller n'est pas espionner, ni copier."],
]

const SURVEILLER = [
  { Icon: Tag, t: 'Offres et prix', d: "Changements de tarifs, promotions, nouvelles formules. Le signal le plus direct d'un mouvement commercial." },
  { Icon: Package, t: 'Produits et nouveautés', d: "Lancements, fonctionnalités, retraits. Ce qui indique où un concurrent investit et où il renonce." },
  { Icon: Search, t: 'Contenus et SEO', d: "Sujets publiés, mots-clés visés, pages créées. Une lecture fine de leur stratégie d'acquisition." },
  { Icon: Users, t: 'Recrutements', d: "Les postes ouverts trahissent la direction prise : un concurrent qui recrute des data engineers prépare autre chose qu'un qui recrute des commerciaux." },
  { Icon: Mic, t: 'Prises de parole', d: "Interviews de dirigeants, posts LinkedIn, presse. Le discours précède souvent l'action." },
  { Icon: Star, t: 'Avis clients', d: "Ce que leurs clients louent et reprochent. Une carte de leurs forces et de vos ouvertures." },
]

const ETAPES = [
  { Icon: Crosshair, t: 'Cadrer', d: "Listez cinq à dix concurrents réels et ce qui compte pour chacun. Une veille concurrentielle sans périmètre clair se noie dès la première semaine." },
  { Icon: Newspaper, t: 'Collecter', d: "Automatisez le suivi des sources publiques : sites, réseaux sociaux, presse, plateformes d'avis. L'IA et les agents no-code font ce travail en continu." },
  { Icon: Filter, t: 'Filtrer', d: "Écartez le bruit et les doublons pour ne garder que les signaux. Un changement de prix compte, un énième communiqué recyclé, non." },
  { Icon: PenLine, t: 'Analyser', d: "L'IA résume et compare, vous interprétez. Un fait n'a de valeur que replacé dans une trajectoire : hausse, repli, changement de cap." },
  { Icon: Send, t: 'Diffuser', d: "Une synthèse régulière aux équipes concernées, commercial, produit, direction. Une veille qui reste dans un fichier ne sert personne." },
]

const LIMITES = [
  { Icon: Scale, t: 'Le cadre légal', d: "La veille concurrentielle est légale tant qu'elle porte sur des informations publiques. Elle le cesse dès qu'elle recourt à la fausse identité, au vol de secrets d'affaires ou au contournement délibéré de conditions d'accès. Dans le doute, restez sur ce qui est ouvert à tous." },
  { Icon: AlertTriangle, t: 'La fiabilité', d: "Une IA peut affirmer un fait inexact sur un concurrent avec aplomb. Avant de décider sur cette base, vérifiez la source. Une veille qui se trompe oriente mal, c'est pire que pas de veille." },
  { Icon: Compass, t: 'Le bon dosage', d: "Surveiller n'est pas copier. L'obsession du concurrent fait perdre son cap : la veille éclaire vos décisions, elle ne les dicte pas. Gardez votre propre trajectoire au centre." },
]

const FAQ = [
  { q: "Qu'est-ce que la veille concurrentielle ?", a: "C'est le suivi organisé et continu de ce que font vos concurrents (offres, prix, produits, communication, recrutements) pour éclairer vos décisions commerciales et stratégiques. Elle ne vise pas à copier, mais à repérer tôt les mouvements qui vous obligeront à réagir ou vous ouvriront une opportunité." },
  { q: "Comment faire une veille concurrentielle avec l'IA ?", a: "En cinq temps : cadrez vos concurrents et ce qui compte, automatisez la collecte de sources publiques avec des agents ou un assistant IA, filtrez pour ne garder que les signaux, faites résumer et comparer par l'IA, puis diffusez une synthèse aux équipes. L'IA fait gagner le temps de la collecte ; l'interprétation reste humaine." },
  { q: "La veille concurrentielle est-elle légale ?", a: "Oui, tant qu'elle s'appuie sur des informations publiques et loyalement accessibles : sites, réseaux sociaux, presse, avis clients. Elle devient illégale si elle recourt à l'usurpation d'identité, à l'accès frauduleux, ou à la captation de secrets d'affaires. La frontière est celle de la concurrence déloyale : surveiller ce qui est public, oui ; obtenir par ruse ce qui ne l'est pas, non." },
  { q: "Quels outils pour la veille concurrentielle par l'IA ?", a: "Pour démarrer, un agrégateur et un assistant comme Perplexity. Pour automatiser, un agent Make ou n8n qui suit sites et réseaux. Pour une veille à l'échelle, une plateforme professionnelle. Le choix dépend de votre volume et de votre budget : nous détaillons les familles d'outils dans notre comparatif dédié." },
  { q: "Que faut-il surveiller chez un concurrent ?", a: "En priorité : ses prix et offres, ses lancements de produits, ses contenus et mots-clés SEO, ses recrutements, ses prises de parole et les avis de ses clients. Chacun est un signal : les recrutements révèlent une direction, les avis clients pointent des forces à égaler et des faiblesses à exploiter." },
  { q: "Quelle différence entre veille concurrentielle et veille stratégique ?", a: "La veille concurrentielle se concentre sur des acteurs identifiés, vos concurrents directs. La veille stratégique est plus large : elle couvre aussi les évolutions du marché, les technologies, la réglementation et les nouveaux entrants. La première alimente la seconde, qui elle-même nourrit vos décisions de long terme." },
  { q: "À quelle fréquence faire sa veille concurrentielle ?", a: "En continu pour la collecte, qui tourne seule une fois automatisée, et à intervalle régulier pour l'analyse : une synthèse hebdomadaire convient à la plupart des équipes, resserrée en période de mouvement (lancement, campagne). L'important est la régularité, pas l'exhaustivité." },
]

const RESSOURCES = [
  { tag: 'Méthode', titre: 'Automatiser sa veille IA', desc: "Le guide complet de la veille IA : approches, méthode en 5 étapes et pièges.", href: '/automatiser-sa-veille-ia', cta: 'Lire le guide' },
  { tag: 'Outils', titre: 'Outils de veille IA', desc: "Le comparatif par familles pour choisir l'outil adapté à votre veille concurrentielle.", href: '/outils-veille-ia', cta: 'Voir le comparatif' },
  { tag: 'En accès libre', titre: 'Notre veille IA quotidienne', desc: "Un exemple de veille automatisée, produite et publiée chaque matin ouvré.", href: '/veille-ia', cta: 'La lire' },
]

export default function VeilleConcurrentielleIAPage() {
  const metaTitle = "Veille concurrentielle par l'IA : méthode et cadre | Masteria"
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
      datePublished: PUBLISHED, dateModified: PUBLISHED,
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce que l&apos;IA change vraiment</span>
          </h1>

          <p className="veille-lede" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '26px 0 30px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Surveiller ses concurrents a toujours pris du temps. L&apos;IA absorbe la collecte et la synthèse,
            et rend l&apos;interprétation à l&apos;humain. Voici quoi surveiller, comment s&apos;y prendre, et la
            ligne à ne pas franchir.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#surveiller" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Que surveiller <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.14)' }}>
              Mettre en place la vôtre
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
            La veille concurrentielle est le suivi organisé et continu de ce que font vos concurrents, pour
            éclairer vos décisions commerciales et stratégiques. Elle ne cherche pas à copier, mais à repérer
            tôt le mouvement qui compte : une baisse de prix, un lancement, un virage de discours.
          </p>
          <p style={pStyle}>
            Ce que l&apos;IA change tient en une phrase : elle prend en charge la partie chronophage, la collecte
            et la synthèse, et vous laisse le temps de l&apos;interprétation. Un agent suit les sources publiques
            en continu, un assistant résume et compare. Vous, vous décidez de ce que ces signaux impliquent
            pour votre trajectoire. Le gain n&apos;est pas de tout savoir, c&apos;est de voir juste, plus tôt.
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

      {/* ── FOUNDER NOTE ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ ...kicker, textAlign: 'center' }}>Questions fréquentes</div>
          <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: 36 }}>Veille concurrentielle : vos questions</h2>
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
          <TrendingUp size={30} style={{ color: '#60A5FA', marginBottom: 18 }} aria-hidden="true" />
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 16, lineHeight: 1.2 }}>
            Une veille concurrentielle qui tourne toute seule
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 30, lineHeight: 1.6 }}>
            Nous mettons en place le système qui suit vos concurrents sur vos critères et vous livre une
            synthèse régulière, sans y passer vos journées. Parlons de qui vous voulez surveiller.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#0A0A0A', padding: '16px 32px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Demander un échange <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
