import { Link } from 'react-router-dom'
import {
  ArrowRight, Info, Rss, Filter, PenLine, ShieldCheck, Landmark,
  Globe, Compass, FlaskConical, Mail,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/**
 * VeilleAProposPage — politique éditoriale de la Veille IA.
 *
 * Page statique : qui écrit, selon quelle méthode, avec quelles sources,
 * quelle indépendance et quelle politique de correction. C'est un facteur de
 * confiance reconnu pour Google News et pour les moteurs IA, et le bon endroit
 * pour la transparence de méthode (distinct de la une quotidienne).
 *
 * Aucun fetch : les attributs data-veille-* sont posés à « ok » d'emblée, le
 * prérendu incrémental les contrôle comme sur les autres pages de la rubrique.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const SITE = 'https://www.master-ia.fr'

function Kicker({ children }) { return <div style={kickerStyle}>{children}</div> }

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const ETAPES = [
  { icon: Filter, titre: 'Sélection', desc: "Trente-huit flux RSS de médias, de sources officielles, de laboratoires et de revues de recherche sont dépouillés chaque matin ouvré. Dix à quatorze actualités sont retenues, réparties entre l'Europe et la France, l'international, la Chine et l'Asie. La priorité va à ce qui n'a pas encore été traité en français." },
  { icon: PenLine, titre: 'Rédaction et analyse', desc: "Chaque actualité est résumée dans nos propres mots et reliée à sa source d'origine par un lien direct. L'analyse du jour est écrite après la sélection, jamais avant, pour qu'elle parte des faits et non d'une idée préconçue." },
  { icon: ShieldCheck, titre: 'Contrôle avant publication', desc: "Une relecture et un contrôle de style automatisé précèdent la mise en ligne. Une édition qui ne passe pas ce contrôle ne sort pas. Les rumeurs et les fuites non confirmées sont signalées comme telles ou écartées." },
]

const ZONES = [
  { icon: Landmark, titre: 'Europe et France', desc: "Régulation (AI Act, CNIL, RGPD appliqué à l'IA), acteurs européens, déploiements documentés, recherche académique." },
  { icon: Globe, titre: 'International', desc: "Annonces produit et décisions stratégiques des grands laboratoires, levées et acquisitions, décisions réglementaires, publications marquantes." },
  { icon: Compass, titre: 'Chine et Asie', desc: "Sorties de modèles, politique industrielle, contrôle des exports sur les semi-conducteurs, écosystèmes émergents." },
  { icon: FlaskConical, titre: 'Recherche et publications', desc: "Une sélection de travaux techniques significatifs pour un public professionnel, signalés comme tels." },
]

export default function VeilleAProposPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE}/veille-ia/a-propos#page`,
    name: 'À propos de la Veille IA Masteria',
    url: `${SITE}/veille-ia/a-propos`,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE}/veille-ia#collection` },
    about: { '@id': `${SITE}/veille-ia#collection` },
    publisher: { '@id': `${SITE}/#organization` },
    mainEntity: {
      '@type': 'NewsMediaOrganization',
      name: 'Veille IA Masteria',
      url: `${SITE}/veille-ia`,
      parentOrganization: { '@id': `${SITE}/#organization` },
      founder: { '@id': `${SITE}/#mathias-nizan` },
      diversityPolicy: `${SITE}/veille-ia/a-propos`,
      ethicsPolicy: `${SITE}/veille-ia/a-propos`,
      masthead: `${SITE}/veille-ia/a-propos`,
      foundingDate: '2026-07-20',
      knowsAbout: ['Intelligence artificielle', 'AI Act', 'Modèles de langage', 'Régulation de l\'IA'],
    },
  }

  return (
    <div data-veille-pret="1" data-veille-etat="ok">
      <SEOHead
        title="À propos de la Veille IA : notre politique éditoriale | Masteria"
        description="Qui écrit la Veille IA de Masteria, selon quelle méthode de sélection, avec quelles sources, quelle indépendance et quelle politique de correction."
        slug="veille-ia/a-propos"
        keywords="veille ia, politique éditoriale, méthode veille intelligence artificielle, sources veille ia"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Veille IA', slug: 'veille-ia' },
          { name: 'À propos', slug: 'veille-ia/a-propos' },
        ]}
        extraJsonLd={jsonLd}
      />

      {/* ── 1. HERO SOMBRE ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(44px, 6vw, 64px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/veille-ia" style={{ color: '#94A3B8' }}>Veille IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>À propos</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Politique éditoriale
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.4vw, 44px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            À propos de la Veille IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>qui l'écrit, comment, avec quelles sources</span>
          </h1>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: 0, maxWidth: 700 }}>
            La Veille IA est une rubrique quotidienne de Masteria, organisme de formation et de conseil en
            intelligence artificielle. Cette page décrit qui la produit, selon quelle méthode, et les
            engagements qui la régissent.
          </p>
        </div>
      </section>

      {/* ── 2. QUI ÉCRIT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>La rédaction</Kicker>
          <h2 style={h2Style}>Qui écrit la Veille IA</h2>
          <p style={{ ...answerStyle }}>
            <strong>
              La Veille IA est écrite par l'équipe éditoriale de Masteria, sous la direction de Mathias Nizan,
              fondateur de l'organisme. Elle est publiée chaque matin ouvré et engage la rédaction, pas un
              annonceur.
            </strong>
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 16px' }}>
            Masteria forme depuis 2022 des dirigeants, chefs de projet, développeurs et juristes à l'IA
            générative, et développe des solutions sur mesure. La veille prolonge ce travail : elle sert à
            comprendre l'actualité que nos formations et nos missions doivent intégrer. C'est aussi ce qui
            garantit qu'elle est écrite par des gens qui pratiquent le sujet, pas seulement qui le relaient.
          </p>
          <Link to="/centre-formation-ia-entreprise" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            Le parcours de Mathias Nizan et de Masteria
            <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 3. COMMENT (méthode, famille cartes tuilées) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 820 }}>Comment une édition est fabriquée</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, maxWidth: 820, margin: '0 0 36px' }}>
            Chaque édition suit le même chemin, du dépouillement des sources à la publication. Rien n'est
            généré à la volée : la sélection et l'analyse sont deux étapes distinctes, dans cet ordre.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {ETAPES.map(e => (
              <div key={e.titre} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}><IconTile icon={e.icon} /></div>
                <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 10 }}>{e.titre}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOURCES / ZONES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que nous suivons</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 820 }}>Trois zones, suivies avec le même soin</h2>
          <p style={{ ...answerStyle }}>
            <strong>
              La Veille IA couvre l'Europe et la France, l'international et la Chine et l'Asie, sans hiérarchie
              entre ces zones. Chaque actualité cite sa source par un lien direct vers la publication d'origine.
            </strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, marginTop: 8 }}>
            {ZONES.map(z => (
              <div key={z.titre} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <IconTile icon={z.icon} />
                  <h3 style={{ ...h3Style, fontSize: 16 }}>{z.titre}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{z.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, marginTop: 28 }}>
            La liste des sources évolue : des flux disparaissent, d'autres se bloquent, d'autres arrivent. Elle
            est revue régulièrement pour garder une couverture large et fiable.
          </p>
        </div>
      </section>

      {/* ── 5. ENGAGEMENTS (ancre sombre unique) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Nos engagements</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 820 }}>Indépendance, transparence, corrections</h2>

          <dl style={{ margin: 0, maxWidth: 820 }}>
            {[
              ['Indépendance', "La sélection et l'analyse sont éditoriales. Aucune actualité n'est mise en avant contre rémunération, et la veille ne comporte ni contenu sponsorisé ni publireportage. Quand un item touche à l'offre de Masteria, c'est signalé."],
              ['Sources et attribution', "Chaque actualité renvoie à sa source d'origine par un lien direct. Les résumés sont écrits dans nos propres mots. Une information fondée sur une rumeur ou une fuite non confirmée est présentée comme telle."],
              ['Corrections', "Une erreur factuelle signalée est corrigée dans l'édition concernée, qui conserve son adresse. Pour nous la signaler, écrivez-nous en précisant l'édition et le passage."],
              ['Fraîcheur et archives', "Chaque édition garde une adresse permanente et reste consultable avec ses sources et son analyse. Les publications passées sont regroupées sur une page dédiée, avec recherche."],
            ].map(([dt, dd], i) => (
              <div key={dt} style={{ display: 'flex', gap: 20, flexWrap: 'wrap', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                <dt style={{ flex: '0 0 190px', fontWeight: 800, fontSize: 15, color: '#F8FAFC', fontFamily: 'Nunito, sans-serif' }}>{dt}</dt>
                <dd style={{ margin: 0, flex: 1, minWidth: 240, fontSize: 15, color: '#B4C0D3', lineHeight: 1.7 }}>{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 6. SUIVRE / CONTACT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Suivre et nous joindre</Kicker>
          <h2 style={h2Style}>Lire la veille, s'y abonner, nous écrire</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
            <Link to="/veille-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15.5, fontWeight: 700, textDecoration: 'none' }}>
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" /> L'édition du jour
            </Link>
            <Link to="/veille-ia/publications" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15.5, fontWeight: 700, textDecoration: 'none' }}>
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" /> Toutes les publications, avec recherche
            </Link>
            <a href="/veille.xml" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15.5, fontWeight: 700 }}>
              <Rss size={16} strokeWidth={2.4} aria-hidden="true" /> Flux RSS
            </a>
            <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15.5, fontWeight: 700, textDecoration: 'none' }}>
              <Mail size={16} strokeWidth={2.4} aria-hidden="true" /> Nous signaler une erreur ou une source
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. CTA FINALE ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Former vos équipes sur ce que vous lisez ici
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              L'actualité suivie chaque matin nourrit nos formations et nos missions de conseil. Masteria
              accompagne dirigeants, chefs de projet, développeurs et juristes sur l'IA générative depuis 2022.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Parler de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Organisme certifié Qualiopi · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
