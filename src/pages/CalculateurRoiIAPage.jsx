import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Calculator, Users, Repeat, Timer, Sparkles, ShieldCheck,
  Layers, GitBranch, Receipt, AlertTriangle, RotateCcw,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Outil : « Calculateur de ROI IA » (slug /calculateur-roi-ia).
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
const META_DESC = "Calculateur de ROI IA : suivez un usage sur cinq étages (adoption, gain net, heures libérées, heures réaffectées, résultat) et voyez où le gain se perd."
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
  { k: 'personnes', icon: Users, label: 'Personnes concernées par la tâche', unit: '', min: 1, max: 2000, step: 1, help: "Le nombre de personnes qui effectuent cette tâche dans leur semaine de travail, quel que soit l'effectif total." },
  { k: 'adoption', icon: Sparkles, label: 'Adoption réelle', unit: '%', min: 0, max: 100, step: 1, help: "Part de ces personnes qui ouvrent l'outil pour cette tâche au moins une fois par semaine. Compter les licences distribuées surestime presque toujours ce chiffre." },
  { k: 'frequence', icon: Repeat, label: 'Occurrences par personne et par semaine', unit: '', min: 1, max: 200, step: 1, help: 'Nombre de fois où une personne accomplit la tâche pendant une semaine sans événement particulier.' },
  { k: 'duree', icon: Timer, label: 'Durée de la tâche avant IA', unit: 'min', min: 1, max: 480, step: 1, help: 'Temps moyen relevé pour une occurrence, mesuré avant que l\'équipe ne se serve de l\'IA.' },
  { k: 'gain', icon: Sparkles, label: 'Gain de temps brut constaté', unit: '%', min: 0, max: 95, step: 1, help: "Baisse du temps passé sur la tâche avec l'outil. Mesurez-la sur un petit groupe si vous le pouvez ; à défaut, notez ce que les utilisateurs déclarent." },
  { k: 'reprise', icon: ShieldCheck, label: 'Part du gain reperdue en vérification et reprise', unit: '%', min: 0, max: 100, step: 1, help: "Temps de relecture, de correction et d'allers-retours. Valeur de départ à remplacer par la vôtre : ce poste disparaît de la plupart des calculs." },
  { k: 'conversion', icon: GitBranch, label: 'Part de la capacité libérée réellement convertie', unit: '%', min: 0, max: 100, step: 1, help: "Part des heures libérées dont la direction a décidé l'emploi : traiter plus de dossiers, éviter un recrutement, internaliser un prestataire, relever la qualité." },
  { k: 'cout', icon: Receipt, label: 'Coût horaire chargé', unit: '€', min: 10, max: 300, step: 1, help: 'Salaire chargé divisé par les heures travaillées dans l\'année, pour ce profil.' },
  { k: 'licence', icon: Receipt, label: 'Coût annuel de licence par personne', unit: '€', min: 0, max: 5000, step: 10, help: "Abonnement et consommation à l'usage, pour une personne équipée, sur douze mois." },
]

const FAQ = [
  {
    q: "Comment ce calculateur estime-t-il le ROI d'un usage de l'IA ?",
    a: "Il découpe le calcul en cinq étapes au lieu d'un ratio unique. L'adoption ramène l'effectif concerné au nombre de personnes qui se servent vraiment de l'outil. Le gain net retire du temps gagné la part reperdue à relire et à corriger. Les heures libérées multiplient ce gain net par le nombre d'occurrences de la tâche sur 46 semaines. Les heures réaffectées ne retiennent que celles dont la direction a décidé l'emploi. Le retour net valorise ces heures au coût horaire chargé, puis soustrait le prix des licences.",
  },
  {
    q: 'Pourquoi déduire le temps de vérification ?',
    a: "Le gain annoncé par l'utilisateur oublie souvent le temps passé à relire et à corriger, et ce temps change parfois de bureau : celui qui produit le document gagne des minutes, celui qui le reçoit en perd. En septembre 2025, la Harvard Business Review a publié une enquête de BetterUp Labs et du Stanford Social Media Lab menée auprès de 1 150 salariés américains : traiter un document produit par l'IA mais vide de fond leur prenait en moyenne 1 h 56. Ce chiffre ne se transpose pas tel quel à votre équipe ; il montre l'ordre de grandeur d'un coût que la plupart des calculs ignorent.",
  },
  {
    q: 'Pourquoi la part réaffectée pèse-t-elle autant sur le résultat ?',
    a: "C'est à cette étape que le gain disparaît le plus souvent. Dix minutes gagnées ici et quinze là ne libèrent un poste, ni même une demi-journée, que si quelqu'un les regroupe et leur donne un emploi. Sans décision sur l'usage de ces heures, elles se fondent dans la journée de chacun, et le retour financier tombe à zéro, aussi bon que soit l'outil.",
  },
  {
    q: 'Les valeurs par défaut viennent-elles d\'études de marché ?',
    a: "Non. Ce sont des valeurs de départ, choisies pour que l'outil affiche un résultat dès l'ouverture ; aucune enquête ne les fonde. Remplacez-les par les vôtres. Devant une direction financière, seul tient le chiffre que vous avez relevé vous-même, avant et après, sur un groupe de personnes identifié.",
  },
  {
    q: 'Le retour affiché est-il un gain garanti ?',
    a: "Aucun calculateur ne peut le promettre. Le résultat découle des neuf valeurs saisies : modifiez-en une et il bouge. Servez-vous de l'outil pour repérer l'étape qui coûte le plus, puis vérifiez cette étape par une mesure sur le terrain avant d'engager un budget.",
  },
  {
    q: 'Comment relever les vraies valeurs dans votre équipe ?',
    a: "Choisissez une tâche et un petit groupe de volontaires. Chronométrez la tâche pendant une à deux semaines sans IA, puis pendant la même durée avec l'outil, en notant à part le temps de relecture et de correction. Au bout d'un mois, comptez qui s'en sert encore, et demandez au manager à quoi ont servi les heures libérées. Ces relevés remplacent les quatre curseurs les plus fragiles : adoption, gain brut, reprise et part réaffectée.",
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
        dateModified="2026-10-07"
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
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Outil en accès libre · sans inscription</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.4vw, 46px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Calculateur de ROI IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>Voir où votre gain se perd</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2.2vw, 19px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La plupart des calculs de retour multiplient un gain de temps par un effectif et s&apos;arrêtent là. Celui-ci suit les cinq étapes que franchit une minute gagnée, du bureau de l&apos;utilisateur jusqu&apos;au résultat de l&apos;entreprise, et affiche ce qui reste après chacune.
          </p>
          <p style={{ fontSize: 14.5, color: '#94A3B8', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
            Vos chiffres restent sur votre écran : le calcul tourne dans le navigateur et aucune donnée ne part vers nos serveurs. La méthode complète figure sur la page <Link to="/roi-ia-entreprise" style={{ color: '#93C5FD', fontWeight: 600 }}>ROI de l&apos;IA en entreprise</Link>.
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
                <div style={kickerStyle}>Une tâche par calcul</div>
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
              Le calcul prend son sens sur une tâche nommée, que l&apos;on peut chronométrer : rédiger un compte rendu, répondre à une demande de premier niveau, préparer un dossier. Traitez-en une, mesurez-la, puis passez à la suivante.
            </p>

            <div style={{ ...cardStyle, padding: '4px 22px 18px' }}>
              {CHAMPS.map(champ => (
                <Field key={champ.k} champ={champ} value={v[champ.k]} onChange={set} />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 16, padding: '14px 18px', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
              <AlertTriangle size={17} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                Les valeurs affichées au départ sont des hypothèses de travail, à remplacer par vos relevés ; aucune étude ne les fonde. Le résultat obtenu reste une estimation, et non un gain promis. Base de calcul : {SEMAINES} semaines travaillées par an, congés et jours fériés déduits.
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
                detail={`soit ${v.conversion} % des heures libérées, dont l'emploi a été décidé`}
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
                  du gain théorique n&apos;atteint pas le résultat de l&apos;entreprise. Sur {hrs(r.theoriqueH)} espérées si chacun utilisait l&apos;outil sans rien corriger, {hrs(r.convertieH)} trouvent un emploi décidé, selon vos hypothèses.
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
          <h2 style={{ ...h2Style, maxWidth: 880 }}>L&apos;étape où le gain fuit compte plus que le montant final</h2>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            Un retour net positif ne prouve rien à lui seul : il découle des valeurs que vous avez saisies. L&apos;information utile tient dans la répartition des pertes entre les étapes. Déplacez les curseurs un par un et notez celui qui fait le plus bouger le résultat.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 26 }}>
            {[
              ['Si l\'adoption pèse le plus', "Le chantier porte sur le déploiement : former les équipes sur leurs tâches, nommer des référents, installer l'habitude. Une licence payée et jamais ouverte ne rapporte rien.", '/formation-ia-entreprise', 'Former toute une entreprise'],
              ['Si la reprise pèse le plus', "Le chantier porte sur la qualité : règles de relecture, sources à citer, ce qui reste à la main d'un humain. Le gain existe, mais le contrôle le reprend, souvent dans un autre service.", '/gouvernance-ia', 'Gouvernance et validation'],
              ['Si la conversion pèse le plus', "Le chantier porte sur l'organisation du travail. Les heures libérées existent, mais personne n'a décidé de leur emploi, et elles se dispersent dans les journées.", '/conseil-strategie-ia', 'Conseil en stratégie IA'],
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
          <div style={kickerStyle}>Questions sur la méthode</div>
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

      {/* ── SIGNATURE (remplace le bloc fondateur commun) ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', borderLeft: `3px solid ${c}`, paddingLeft: 22 }}>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', margin: 0 }}>
            Mathias Nizan, fondateur de Masteria, a conçu ce calculateur à partir de la méthode en cinq étapes exposée sur la page consacrée au ROI de l&apos;IA. Relu le 7 octobre 2026 ; sa biographie figure sur{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>la page Mathias Nizan</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 8vw, 96px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(44px, 6vw, 72px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 2.8vw, 36px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passer des hypothèses aux mesures
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 15.5, lineHeight: 1.7, margin: '0 auto 30px', maxWidth: 640 }}>
              Les curseurs valent ce que valent les valeurs saisies. Masteria peut relever les vôtres sur un groupe de volontaires, tâche par tâche, puis vous rendre les cinq étapes chiffrées et les indicateurs à suivre. La durée et le forfait de ce diagnostic se fixent pendant les 30 minutes de cadrage.
            </p>
            <Link to="/contact?type=projet&rdv=30" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 15.5, fontWeight: 800 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
