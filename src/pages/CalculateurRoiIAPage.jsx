import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Calculator, Users, Repeat, Timer, Sparkles, ShieldCheck,
  Layers, GitBranch, Receipt, AlertTriangle, RotateCcw,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Outil — « Calculateur de ROI IA » (slug /calculateur-roi-ia).
 * Matérialise la chaîne de conversion en 5 étages décrite sur /roi-ia-entreprise.
 * Objectif : montrer OÙ la valeur se perd, pas produire un chiffre flatteur.
 *
 * INTÉGRITÉ : aucun benchmark inventé. Les valeurs par défaut sont des
 * hypothèses de travail explicitement présentées comme telles, à ajuster par
 * l'utilisateur. Le seul chiffre sourcé affiché est l'ordre de grandeur du coût
 * de reprise (HBR / BetterUp Labs / Stanford, sept. 2025), présenté comme un
 * repère et non comme un ratio universel. Aucun résultat client, aucun cas.
 *
 * Calcul, volontairement simple et lisible à la main :
 *   1. Actifs réels      = personnes × adoption
 *   2. Gain unitaire net = durée × gain% × (1 − reprise%)
 *   3. Capacité libérée  = actifs × fréquence/sem × 46 sem × gain unitaire net
 *   4. Capacité convertie= capacité libérée × conversion%
 *   5. Retour net        = capacité convertie × coût horaire − licences annuelles
 *
 * 46 semaines : année de travail nette de congés et jours fériés. Hypothèse
 * affichée dans la page, pas cachée dans le code.
 */

const SLUG = 'calculateur-roi-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'
const SEMAINES = 46

const META_TITLE = "Calculateur de ROI IA : où votre gain se perd | Masteria"
const META_DESC = "Calculez le retour réel d'un usage IA sur les 5 étages de la conversion : adoption, gain net, capacité libérée, capacité convertie, effet sur le résultat."
const KEYWORDS = "calculateur roi ia, calcul roi ia, roi ia, mesurer le roi de l'ia, gain de productivité ia, business case ia, kpi ia"

const sectionPad = 'clamp(56px, 8vw, 96px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const pStyle = { fontSize: 16, lineHeight: 1.75, color: '#374151', margin: '0 0 16px' }

const nf = new Intl.NumberFormat('fr-FR')
const eur = n => `${nf.format(Math.round(n))} €`
const hrs = n => `${nf.format(Math.round(n))} h`

const DEFAULTS = {
  personnes: 40,
  adoption: 55,
  frequence: 8,
  duree: 20,
  gain: 40,
  reprise: 20,
  conversion: 30,
  cout: 45,
  licence: 240,
}

const CHAMPS = [
  { k: 'personnes', icon: Users, label: 'Personnes concernées par la tâche', unit: '', min: 1, max: 2000, step: 1, help: "L'effectif à qui l'usage s'adresse, pas l'effectif total de l'entreprise." },
  { k: 'adoption', icon: Sparkles, label: 'Adoption réelle', unit: '%', min: 0, max: 100, step: 1, help: "Part de ces personnes qui utilisent réellement l'outil sur cette tâche chaque semaine. Une licence attribuée n'est pas un usage." },
  { k: 'frequence', icon: Repeat, label: 'Occurrences par personne et par semaine', unit: '', min: 1, max: 200, step: 1, help: 'Combien de fois la tâche est réalisée, par personne, sur une semaine ordinaire.' },
  { k: 'duree', icon: Timer, label: 'Durée de la tâche avant IA', unit: 'min', min: 1, max: 480, step: 1, help: 'Temps moyen constaté pour une occurrence, avant tout usage de l\'IA.' },
  { k: 'gain', icon: Sparkles, label: 'Gain de temps brut constaté', unit: '%', min: 0, max: 95, step: 1, help: "Réduction du temps sur cette tâche, mesurée sur un panel si possible, déclarée sinon." },
  { k: 'reprise', icon: ShieldCheck, label: 'Part du gain reperdue en vérification et reprise', unit: '%', min: 0, max: 100, step: 1, help: "Relecture, correction, allers-retours. Hypothèse de travail à ajuster : c'est le poste le plus souvent oublié." },
  { k: 'conversion', icon: GitBranch, label: 'Part de la capacité libérée réellement convertie', unit: '%', min: 0, max: 100, step: 1, help: "Part des heures libérées effectivement réaffectées à une destination nommée : plus de volume, recrutement évité, dépense externe réduite, qualité remontée." },
  { k: 'cout', icon: Receipt, label: 'Coût horaire chargé', unit: '€', min: 10, max: 300, step: 1, help: 'Coût employeur par heure travaillée pour ce profil.' },
  { k: 'licence', icon: Receipt, label: 'Coût annuel de licence par personne', unit: '€', min: 0, max: 5000, step: 10, help: "Abonnements et consommation, par personne réellement équipée." },
]

const FAQ = [
  {
    q: 'Comment ce calculateur estime-t-il le ROI d\'un projet IA ?',
    a: "Il suit cinq étages plutôt qu'un seul ratio. L'adoption réelle donne le nombre de personnes actives. Le gain unitaire net retranche du gain brut la part reperdue en vérification et en reprise. La capacité libérée multiplie ce gain net par le volume annuel de la tâche. La capacité convertie applique la part de ces heures réellement réaffectées à une destination nommée. Le retour net valorise cette capacité au coût horaire chargé et en déduit le coût des licences.",
  },
  {
    q: 'Pourquoi retrancher un coût de vérification ?',
    a: "Parce que le gain brut déclaré ignore le temps de relecture et de correction, qui change souvent de porteur : celui qui produit gagne du temps, celui qui reçoit en perd. Une étude de BetterUp Labs et du Stanford Social Media Lab publiée par la Harvard Business Review en septembre 2025, sur 1 150 salariés américains, mesure une heure et cinquante-six minutes de traitement moyen par livrable IA sans substance reçu. Ce n'est pas un ratio universel, c'est un ordre de grandeur qui justifie de poser la question.",
  },
  {
    q: "Pourquoi la part convertie change-t-elle autant le résultat ?",
    a: "Parce que c'est l'étage où la valeur se perd le plus souvent. Des minutes récupérées sur des tâches fragmentées ne deviennent un équivalent temps plein qu'à condition d'être regroupées et réaffectées explicitement. Tant qu'aucune destination n'est choisie, la capacité se dissipe et le retour reste nul, quelle que soit la qualité de l'outil.",
  },
  {
    q: 'Les valeurs par défaut sont-elles des références de marché ?',
    a: "Non. Ce sont des hypothèses de travail destinées à faire fonctionner l'outil dès l'ouverture. Elles ne proviennent d'aucun benchmark et doivent être remplacées par vos propres mesures. Le seul chiffre défendable est celui que vous relevez avant et après sur un panel réel.",
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `https://www.master-ia.fr/${SLUG}#app`,
  name: 'Calculateur de ROI IA',
  description: META_DESC,
  url: `https://www.master-ia.fr/${SLUG}`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'fr-FR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
}

function Field({ champ, value, onChange }) {
  const { k, icon: Icon, label, unit, min, max, step, help } = champ
  return (
    <div style={{ padding: '18px 0', borderTop: '1px solid #E5E7EB' }}>
      <label htmlFor={`f-${k}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 11, marginBottom: 10 }}>
        <Icon size={17} strokeWidth={2.1} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
        <span>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', display: 'block' }}>{label}</span>
          <span style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.55, display: 'block', marginTop: 3 }}>{help}</span>
        </span>
      </label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <input
          id={`f-${k}`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(k, Number(e.target.value))}
          style={{ flex: 1, accentColor: c, minWidth: 0 }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
          <input
            type="number"
            aria-label={label}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={e => onChange(k, Number(e.target.value))}
            style={{ width: 78, padding: '7px 9px', border: '1px solid #E5E7EB', borderRadius: 9, fontSize: 15, fontWeight: 700, fontFamily: 'Nunito, sans-serif', color: '#0A0A0A', textAlign: 'right' }}
          />
          {unit && <span style={{ fontSize: 14, fontWeight: 700, color: '#6B7280', width: 26 }}>{unit}</span>}
        </div>
      </div>
    </div>
  )
}

function Etage({ n, icon: Icon, titre, valeur, detail, perte, leak }) {
  return (
    <div style={{ position: 'relative', padding: '16px 18px', borderRadius: 13, border: `1px solid ${leak ? c : '#E5E7EB'}`, background: leak ? cLight : '#fff', marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
        <span aria-hidden="true" style={{ width: 26, height: 26, borderRadius: 8, background: c, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 13 }}>{n}</span>
        <Icon size={16} strokeWidth={2.1} style={{ color: c }} aria-hidden="true" />
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14.5, fontWeight: 800, color: '#0A0A0A' }}>{titre}</span>
      </div>
      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: leak ? c : '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{valeur}</div>
      <div style={{ fontSize: 13, color: '#6B7280', marginTop: 5, lineHeight: 1.5 }}>{detail}</div>
      {perte != null && perte > 0 && (
        <div style={{ fontSize: 12.5, color: c, fontWeight: 700, marginTop: 7 }}>
          −{nf.format(Math.round(perte))} h perdues à cet étage
        </div>
      )}
    </div>
  )
}

export default function CalculateurRoiIAPage() {
  const isDesktop = useIsDesktop()
  const [v, setV] = useState(DEFAULTS)
  const set = (k, val) => setV(s => ({ ...s, [k]: val }))
  const reset = () => setV(DEFAULTS)

  const r = useMemo(() => {
    const actifs = v.personnes * (v.adoption / 100)
    const gainBrutMin = v.duree * (v.gain / 100)
    const gainNetMin = gainBrutMin * (1 - v.reprise / 100)
    const occurrencesAn = actifs * v.frequence * SEMAINES
    const theoriqueH = (v.personnes * v.frequence * SEMAINES * gainBrutMin) / 60
    const libereeH = (occurrencesAn * gainNetMin) / 60
    const convertieH = libereeH * (v.conversion / 100)
    const valeur = convertieH * v.cout
    const licences = actifs * v.licence
    const net = valeur - licences
    const perteAdoption = (v.personnes * v.frequence * SEMAINES * gainBrutMin) / 60 - (occurrencesAn * gainBrutMin) / 60
    const perteReprise = (occurrencesAn * (gainBrutMin - gainNetMin)) / 60
    const perteConversion = libereeH - convertieH
    const deperdition = theoriqueH > 0 ? (1 - convertieH / theoriqueH) * 100 : 0
    return { actifs, gainBrutMin, gainNetMin, theoriqueH, libereeH, convertieH, valeur, licences, net, perteAdoption, perteReprise, perteConversion, deperdition }
  }, [v])

  const grid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 400px)', gap: 'clamp(28px, 4vw, 52px)', alignItems: 'start' }
    : {}
  const aside = isDesktop ? { position: 'sticky', top: 110, alignSelf: 'start' } : { marginTop: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "ROI de l'IA en entreprise", slug: 'roi-ia-entreprise' },
    { name: 'Calculateur de ROI IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        speakable={['#comment-lire']}
        datePublished="2026-08-30"
        dateModified="2026-08-30"
        extraJsonLd={[articleJsonLd]}
      />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 68px) 24px clamp(46px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/roi-ia-entreprise" style={{ color: '#94A3B8' }}>ROI de l&apos;IA en entreprise</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Calculateur</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Outil gratuit · sans inscription</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.4vw, 46px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Calculateur de ROI IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>Voir où votre gain se perd</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2.2vw, 19px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La plupart des calculs de retour multiplient un gain de temps par un effectif et s&apos;arrêtent là. Celui-ci suit les cinq étages qui séparent le poste de travail du compte de résultat, et montre combien il en reste à chacun.
          </p>
          <p style={{ fontSize: 14.5, color: '#94A3B8', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
            Rien n&apos;est envoyé, rien n&apos;est enregistré. Le calcul se fait dans votre navigateur. La méthode est détaillée sur la page <Link to="/roi-ia-entreprise" style={{ color: '#93C5FD', fontWeight: 600 }}>ROI de l&apos;IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── CALCULATEUR ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ ...wrap, ...grid }}>

          {/* Entrées */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 4 }}>
              <div>
                <div style={kickerStyle}>Un usage à la fois</div>
                <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.4vw, 27px)', margin: 0 }}>Décrivez une tâche précise</h2>
              </div>
              <button
                type="button"
                onClick={reset}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: '1px solid #E5E7EB', borderRadius: 9, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#374151', cursor: 'pointer' }}
              >
                <RotateCcw size={14} strokeWidth={2.3} aria-hidden="true" />
                Réinitialiser
              </button>
            </div>
            <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.7, margin: '10px 0 18px' }}>
              Le calcul n&apos;a de sens que sur une tâche identifiée, pas sur « l&apos;IA » en général. Rédaction de comptes rendus, réponse de premier niveau, préparation d&apos;un dossier : prenez-en une, mesurez-la, recommencez pour la suivante.
            </p>

            <div style={{ ...cardStyle, padding: '4px 22px 18px' }}>
              {CHAMPS.map(champ => (
                <Field key={champ.k} champ={champ} value={v[champ.k]} onChange={set} />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 16, padding: '14px 18px', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
              <AlertTriangle size={17} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                Les valeurs de départ sont des hypothèses de travail, pas des références de marché. Le seul chiffre défendable devant une direction financière est celui que vous relevez avant et après, sur un panel réel. Base de calcul : {SEMAINES} semaines travaillées par an.
              </p>
            </div>
          </div>

          {/* Résultats */}
          <div style={aside}>
            <div style={{ ...cardStyle, padding: 24, background: '#fff' }}>
              <div style={kickerStyle}>La chaîne de conversion</div>

              <Etage
                n="1" icon={Users} titre="Adoption réelle"
                valeur={`${nf.format(Math.round(r.actifs))} personnes actives`}
                detail={`sur ${nf.format(v.personnes)} concernées, soit ${v.adoption} % d'usage hebdomadaire`}
                perte={r.perteAdoption}
              />
              <Etage
                n="2" icon={Timer} titre="Gain unitaire net"
                valeur={`${r.gainNetMin.toFixed(1)} min`}
                detail={`par occurrence, après déduction de la vérification (${r.gainBrutMin.toFixed(1)} min brutes)`}
                perte={r.perteReprise}
              />
              <Etage
                n="3" icon={Layers} titre="Capacité libérée"
                valeur={hrs(r.libereeH)}
                detail="par an, toutes personnes actives confondues"
              />
              <Etage
                n="4" icon={GitBranch} titre="Capacité convertie"
                valeur={hrs(r.convertieH)}
                detail={`soit ${v.conversion} % des heures libérées réaffectées à une destination nommée`}
                perte={r.perteConversion}
                leak
              />
              <Etage
                n="5" icon={Receipt} titre="Retour net annuel"
                valeur={eur(r.net)}
                detail={`${eur(r.valeur)} de capacité valorisée, moins ${eur(r.licences)} de licences`}
              />

              <div style={{ marginTop: 18, padding: '18px 20px', borderRadius: 13, background: '#0A0F1E' }}>
                <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Déperdition totale</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 34, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {Math.round(r.deperdition)} %
                </div>
                <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.6, margin: '10px 0 0' }}>
                  du gain théorique n&apos;arrive jamais au compte de résultat. Sur {hrs(r.theoriqueH)} annoncées si tout le monde utilisait l&apos;outil sans reprise ni déperdition, {hrs(r.convertieH)} sont réellement convertibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT LIRE ── */}
      <section id="comment-lire" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Lecture du résultat</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Le chiffre qui compte n&apos;est pas le retour, c&apos;est l&apos;étage où ça fuit</h2>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            Un retour net positif ne prouve rien à lui seul, puisqu&apos;il dépend entièrement des hypothèses saisies. Ce que l&apos;outil montre vraiment, c&apos;est la répartition des pertes. Faites varier un curseur à la fois et regardez lequel déplace le résultat.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 26 }}>
            {[
              ['Si l\'adoption pèse le plus', "Votre sujet est le déploiement et l'accompagnement, pas l'outil. Une licence attribuée sans usage installé ne produit rien.", '/formation-ia-entreprise', 'Formation en entreprise'],
              ['Si la reprise pèse le plus', "Votre sujet est la qualité et la validation. Le gain existe mais il est réabsorbé par le contrôle, souvent chez quelqu'un d'autre.", '/gouvernance-ia', 'Gouvernance et validation'],
              ['Si la conversion pèse le plus', "Votre sujet est l'organisation du travail. Les heures existent mais personne n'en est propriétaire, donc elles se dissipent.", '/conseil-strategie-ia', 'Conseil en stratégie IA'],
            ].map(([t, d, to, label]) => (
              <div key={t} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#374151', margin: '0 0 16px' }}>{d}</p>
                <Link to={to} style={{ marginTop: 'auto', fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  {label}
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Questions fréquentes</div>
          <h2 style={h2Style}>Comment le calcul est construit</h2>
          <div style={{ marginTop: 20 }}>
            {FAQ.map(f => (
              <div key={f.q} style={{ padding: '20px 0', borderTop: '1px solid #E5E7EB' }}>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{f.q}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderNote />

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 8vw, 96px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(44px, 6vw, 72px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Aller plus loin</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 2.8vw, 36px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passer des hypothèses aux mesures
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 15.5, lineHeight: 1.7, margin: '0 auto 30px', maxWidth: 640 }}>
              Les curseurs de cette page valent ce que valent vos hypothèses. Nous relevons les vôtres sur un panel réel, tâche par tâche, et nous vous rendons les cinq étages chiffrés avec les indicateurs qui manquent.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 15.5, fontWeight: 800 }}>
              Faire le point sur vos usages
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
