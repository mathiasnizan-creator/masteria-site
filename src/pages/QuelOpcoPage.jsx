import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Building2, CheckCircle2, ChevronDown, Clock,
  ExternalLink, Search, Wallet,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/*
 * « Quel est mon OPCO ? » — outil gratuit liable (autorité + leads).
 * Secteur → opérateur de compétences officiel + lien de vérification + étapes
 * du dossier. INTÉGRITÉ : périmètres des 11 OPCO = faits publics stables ;
 * AUCUN plafond chiffré (ils varient par branche et par année → renvoi aux
 * pages officielles). Cas hors OPCO traités honnêtement : fonction publique
 * (ANFH/CNFPT), indépendants sans salarié (FAF).
 * Les 11 fiches OPCO sont rendues statiquement sous le sélecteur : le contenu
 * reste crawlable et citable même sans interaction (prerender + GEO).
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SECTION_PAD = 'clamp(56px, 8vw, 90px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 26 }

const OPCOS = [
  { id: 'atlas', name: 'ATLAS', perimetre: 'Assurance, banque, finance, conseil, bureaux d\'études, numérique et ingénierie (branche Syntec), expertise comptable', url: 'https://www.opco-atlas.fr' },
  { id: 'opco2i', name: 'OPCO 2i', perimetre: 'Industrie : métallurgie, chimie, pharmacie, plasturgie, textile, papier-carton, énergie', url: 'https://www.opco2i.fr' },
  { id: 'akto', name: 'AKTO', perimetre: 'Services à forte intensité de main-d\'œuvre : hôtellerie-restauration, propreté, sécurité, travail temporaire, restauration rapide', url: 'https://www.akto.fr' },
  { id: 'afdas', name: 'AFDAS', perimetre: 'Culture, médias, presse, édition, audiovisuel, publicité, loisirs, sport', url: 'https://www.afdas.com' },
  { id: 'opcommerce', name: 'L\'Opcommerce', perimetre: 'Commerce de détail et de gros, grande distribution, commerce alimentaire', url: 'https://www.lopcommerce.com' },
  { id: 'constructys', name: 'Constructys', perimetre: 'Bâtiment, travaux publics, négoce des matériaux', url: 'https://www.constructys.fr' },
  { id: 'ocapiat', name: 'OCAPIAT', perimetre: 'Agriculture, pêche, agroalimentaire, coopératives agricoles', url: 'https://www.ocapiat.fr' },
  { id: 'ep', name: 'OPCO EP', perimetre: 'Entreprises de proximité : artisanat, professions libérales, pharmacies d\'officine, immobilier', url: 'https://www.opcoep.fr' },
  { id: 'mobilites', name: 'OPCO Mobilités', perimetre: 'Transport routier et urbain, logistique, services de l\'automobile', url: 'https://www.opcomobilites.fr' },
  { id: 'sante', name: 'OPCO Santé', perimetre: 'Santé privée, médico-social, hospitalisation privée', url: 'https://www.opco-sante.fr' },
  { id: 'uniformation', name: 'Uniformation', perimetre: 'Cohésion sociale : associations, mutualité, habitat social, insertion', url: 'https://www.uniformation.fr' },
]

/* Secteur affiché dans le sélecteur → OPCO (ou cas particulier hors OPCO). */
const SECTEURS = [
  { label: 'Conseil, bureaux d\'études, numérique, ingénierie', opco: 'atlas' },
  { label: 'Banque, assurance, finance', opco: 'atlas' },
  { label: 'Industrie (métallurgie, chimie, pharma, plasturgie…)', opco: 'opco2i' },
  { label: 'Hôtellerie, restauration, propreté, sécurité, intérim', opco: 'akto' },
  { label: 'Culture, médias, communication, audiovisuel, sport', opco: 'afdas' },
  { label: 'Commerce de détail ou de gros, distribution', opco: 'opcommerce' },
  { label: 'Bâtiment et travaux publics', opco: 'constructys' },
  { label: 'Agriculture, agroalimentaire, pêche', opco: 'ocapiat' },
  { label: 'Artisanat, professions libérales, pharmacie, immobilier', opco: 'ep' },
  { label: 'Transport, logistique, automobile', opco: 'mobilites' },
  { label: 'Santé privée, médico-social', opco: 'sante' },
  { label: 'Association, mutuelle, habitat social', opco: 'uniformation' },
  { label: 'Hôpital public, fonction publique hospitalière', special: 'anfh' },
  { label: 'Collectivité territoriale, fonction publique', special: 'public' },
  { label: 'Indépendant sans salarié (EI, micro, gérant majoritaire)', special: 'faf' },
]

const SPECIALS = {
  anfh: {
    title: 'Votre financeur : l\'ANFH (pas un OPCO)',
    body: "Les établissements de la fonction publique hospitalière (CHU, CHR, CH, EHPAD publics) ne relèvent pas des OPCO : la formation est financée par l'ANFH (Association nationale pour la formation permanente du personnel hospitalier) et le plan de formation de l'établissement. Masteria travaille avec ce circuit : devis, programme et convention au format attendu par l'ANFH.",
    url: 'https://www.anfh.fr',
    urlLabel: 'anfh.fr',
  },
  public: {
    title: 'Fonction publique : hors champ des OPCO',
    body: "Les collectivités et administrations financent la formation sur leur budget propre (et via le CNFPT pour la territoriale). Un devis et une convention adaptés à l'achat public suffisent dans la plupart des cas ; nous préparons le dossier avec votre service formation.",
    url: 'https://www.cnfpt.fr',
    urlLabel: 'cnfpt.fr',
  },
  faf: {
    title: 'Indépendant sans salarié : votre FAF (pas un OPCO)',
    body: "Les travailleurs non salariés relèvent d'un fonds d'assurance formation selon leur activité : AGEFICE (commerçants et dirigeants non salariés), FIF-PL (professions libérales), VIVEA (agricole). Le dépôt se fait avant le début de la formation. Attention : un président de SAS/SASU est assimilé salarié et ne relève pas d'un FAF ; sans rémunération, l'autofinancement (déductible) est la voie habituelle.",
    url: 'https://www.fifpl.fr',
    urlLabel: 'fifpl.fr',
  },
}

const ETAPES = [
  ['Identifiez votre OPCO', "Avec le sélecteur ci-dessus, ou officiellement via votre numéro de convention collective (IDCC) sur cfadock.fr, mentionné sur vos bulletins de paie."],
  ['Demandez devis et programme', 'Masteria fournit sous 24 h ouvrées le devis, le programme détaillé, la convention et l\'attestation Qualiopi : le dossier complet attendu par votre OPCO.'],
  ['Déposez AVANT le début de la formation', "La demande de prise en charge se dépose sur l'espace en ligne de votre OPCO avant le premier jour de formation. Un dossier déposé après coup est refusé."],
  ['Recevez l\'accord et formez', "Instruction en 5 à 10 jours ouvrés chez la plupart des OPCO. Une fois l'accord reçu, la session se tient ; l'OPCO règle selon votre branche, jusqu'à 100 % du coût pédagogique."],
]

/* Lexique express (ancrage d'entités GEO → DefinedTermSet) */
const LEXIQUE = [
  { t: 'OPCO (opérateur de compétences)', d: "Organisme agréé par l'État qui collecte les contributions formation des entreprises de sa branche et finance les formations des salariés. Il en existe 11, chacun sur son périmètre de conventions collectives." },
  { t: 'IDCC', d: "Identifiant de la convention collective, un numéro à 4 chiffres présent sur les bulletins de paie. C'est lui qui détermine sans ambiguïté l'OPCO de rattachement d'une entreprise." },
  { t: 'Qualiopi', d: "Certification qualité obligatoire depuis le 1ᵉʳ janvier 2022 pour tout organisme de formation dont les clients veulent mobiliser des fonds mutualisés (OPCO, plan de développement des compétences)." },
  { t: 'Plan de développement des compétences', d: "L'ensemble des formations décidées et financées par l'employeur pour ses salariés. L'OPCO peut en prendre une partie en charge selon la branche et la taille de l'entreprise." },
]

const FAQ = [
  { q: 'Comment savoir de quel OPCO je dépends, de façon certaine ?', a: "Par votre convention collective : le numéro IDCC figure sur les bulletins de paie. Le site officiel cfadock.fr donne l'OPCO exact à partir de ce numéro, ou de votre SIRET. Le sélecteur de cette page donne le résultat pour les secteurs les plus courants ; en cas de doute, l'IDCC tranche." },
  { q: 'Que faire si mon dossier OPCO est refusé ?', a: "Les refus tiennent presque toujours à trois causes : un dépôt après le début de la formation, une enveloppe de branche épuisée (fréquent en fin d'année), ou une pièce manquante. Selon le motif : redéposer sur l'exercice suivant, basculer sur le plan de développement des compétences de l'entreprise, ou compléter le dossier. Masteria vérifie ces trois points avant le dépôt, ce qui évite l'essentiel des refus." },
  { q: "L'OPCO finance-t-il aussi le conseil ou l'accompagnement ?", a: "Non. Les OPCO financent des actions de formation dispensées par un organisme certifié Qualiopi, avec programme, objectifs et émargements. Une mission de conseil ou de développement sur mesure reste une prestation de service, à financer sur budget propre (d'autres dispositifs existent, comme les aides à la transformation numérique selon les régions)." },
  { q: 'Quel montant mon OPCO prend-il en charge ?', a: "Les plafonds varient selon la branche, la taille de l'entreprise et l'année : ils sont votés par chaque branche et évoluent. Les entreprises de moins de 50 salariés sont les mieux couvertes, jusqu'à 100 % du coût pédagogique dans de nombreuses branches. Le montant exact figure sur votre espace adhérent OPCO ; nous le vérifions avec vous au moment du devis." },
  { q: 'La certification Qualiopi est-elle obligatoire pour être financé ?', a: "Oui. Depuis le 1ᵉʳ janvier 2022, seuls les organismes certifiés Qualiopi ouvrent droit aux financements mutualisés (OPCO, plan de développement des compétences). Masteria est certifié Qualiopi pour les actions de formation (NDA 84 69 23218 69, vérifiable sur la Liste publique des organismes de formation)." },
  { q: 'Puis-je utiliser mon CPF pour une formation Masteria ?', a: "Non. Nos formations se financent par l'OPCO de votre entreprise ou son plan de développement des compétences, pas par le CPF individuel. Pour une équipe, le financement OPCO est en pratique plus avantageux : il couvre le groupe entier et Masteria monte le dossier." },
  { q: 'Combien de temps prévoir entre la demande et la formation ?', a: "Comptez 3 à 4 semaines : devis et programme sous 24 h ouvrées, instruction OPCO en 5 à 10 jours ouvrés selon les opérateurs, puis calage de la date. Les dossiers déposés tôt passent mieux, surtout en fin d'année quand les enveloppes s'épuisent." },
  { q: 'Masteria gère-t-il le dossier à ma place ?', a: "Oui, l'intégralité : devis, programme, convention, attestation Qualiopi, émargements, attestation de fin de formation. Votre seule action est le dépôt sur votre espace adhérent, guidé pas à pas, ou par votre service formation." },
]

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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Maillage croisé entre les outils gratuits du site */
const AUTRES_OUTILS = [
  { href: '/test-maturite-ia', label: 'Test de maturité IA (3 min)' },
  { href: '/quel-outil-ia', label: 'Quel outil IA pour votre métier ?' },
  { href: '/bibliotheque-de-prompts', label: 'Bibliothèque de 112 prompts' },
]

const PAGE_URL = 'https://www.master-ia.fr/quel-opco'

/* Entité outil gratuit (rich result Software + signal GEO « outil ») */
const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#app`,
  name: 'Quel est mon OPCO ? — simulateur par secteur',
  url: PAGE_URL,
  description: "Simulateur gratuit : sélectionnez votre secteur d'activité et obtenez votre opérateur de compétences (OPCO), le lien officiel de vérification et les étapes du dossier de financement.",
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  inLanguage: 'fr-FR',
}

const definedTermsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${PAGE_URL}#lexique`,
  name: 'Lexique du financement de la formation',
  hasDefinedTerm: LEXIQUE.map(({ t, d }) => ({ '@type': 'DefinedTerm', name: t, description: d })),
}

export default function QuelOpcoPage() {
  const [choix, setChoix] = useState('')
  const secteur = SECTEURS.find(s => s.label === choix)
  const opcoResult = secteur?.opco ? OPCOS.find(o => o.id === secteur.opco) : null
  const special = secteur?.special ? SPECIALS[secteur.special] : null

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Financement', slug: 'financement-formation-ia' },
    { name: 'Quel OPCO ?', slug: 'quel-opco' },
  ]

  return (
    <>
      <SEOHead
        title="Quel est mon OPCO ? Simulateur par secteur | Masteria"
        description="Trouvez votre OPCO en 10 secondes : sélectionnez votre secteur, obtenez l'opérateur officiel, les étapes du dossier et les délais. Les 11 OPCO détaillés."
        slug="quel-opco"
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        keywords="quel opco, quel est mon opco, trouver son opco, opco formation, opco par secteur, financement formation opco, opco formation ia"
        datePublished="2026-08-06"
        dateModified="2026-08-07"
        speakable={['#geo-summary', '#liste-opco']}
        citations={[
          { name: 'Les OPCO — Ministère du Travail', url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
          { name: 'CFA Dock — trouver son OPCO par IDCC ou SIRET', url: 'https://www.cfadock.fr' },
          { name: 'France compétences — répartition des branches par OPCO', url: 'https://www.francecompetences.fr' },
        ]}
        extraJsonLd={[webAppJsonLd, definedTermsJsonLd]}
      />

      {/* ── HERO sombre compact ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(48px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/financement-formation-ia" style={{ color: '#5B6679' }}>Financement</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Quel OPCO ?</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Outil gratuit</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 780 }}>
            Quel est votre OPCO&nbsp;?
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 20px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(16px, 2.2vw, 18.5px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Onze opérateurs de compétences (OPCO) financent la formation des salariés en France, chacun sur ses branches. Sélectionnez votre secteur : vous obtenez votre opérateur, le lien officiel pour vérifier, et les étapes pour faire financer une formation, jusqu'à 100 % du coût pédagogique selon votre branche.
          </p>

          {/* Sommaire ancré « Sur cette page » (sitelinks + navigation) */}
          <nav aria-label="Sur cette page" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
            {[['Simulateur', '#simulateur'], ['Les 4 étapes', '#etapes'], ['Les 11 OPCO', '#liste-opco'], ['Lexique', '#lexique'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', textDecoration: 'none', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 12px' }}>
                {label}
              </a>
            ))}
          </nav>

          {/* ── LE SIMULATEUR ── */}
          <div id="simulateur" style={{ background: '#fff', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 720, boxShadow: '0 12px 40px rgba(0,0,0,0.35)', scrollMarginTop: 96 }}>
            <label htmlFor="secteur-select" style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
              Votre secteur d'activité
            </label>
            <select
              id="secteur-select"
              value={choix}
              onChange={e => setChoix(e.target.value)}
              style={{ width: '100%', padding: '13px 14px', borderRadius: 10, border: '1px solid #D1D5DB', fontSize: 15, color: '#0A0A0A', background: '#F9FAFB', fontFamily: 'DM Sans, sans-serif' }}
            >
              <option value="">Sélectionnez votre secteur…</option>
              {SECTEURS.map(s => <option key={s.label} value={s.label}>{s.label}</option>)}
            </select>

            {opcoResult && (
              <div style={{ marginTop: 18, border: `2px solid ${c}`, borderRadius: 12, padding: '20px 22px', background: '#F8FAFF' }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 6 }}>Votre opérateur</div>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: '#0A0A0A', margin: '0 0 6px' }}>{opcoResult.name}</p>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 14px' }}>{opcoResult.perimetre}.</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href={opcoResult.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: c, textDecoration: 'none' }}>
                    Site officiel <ExternalLink size={13} aria-hidden="true" />
                  </a>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#0A0A0A', color: '#fff', padding: '10px 18px', borderRadius: 9, textDecoration: 'none', fontSize: 13.5, fontWeight: 700 }}>
                    Faire monter mon dossier par Masteria <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
            {special && (
              <div style={{ marginTop: 18, border: '2px solid #D97706', borderRadius: 12, padding: '20px 22px', background: '#FFFBEB' }}>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 900, color: '#0A0A0A', margin: '0 0 8px' }}>{special.title}</p>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{special.body}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href={special.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: '#92400E', textDecoration: 'none' }}>
                    {special.urlLabel} <ExternalLink size={13} aria-hidden="true" />
                  </a>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#0A0A0A', color: '#fff', padding: '10px 18px', borderRadius: 9, textDecoration: 'none', fontSize: 13.5, fontWeight: 700 }}>
                    En parler avec Masteria <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
            <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.6, margin: '14px 0 0' }}>
              Vérification certaine : votre numéro de convention collective (IDCC, sur les bulletins de paie) sur <a href="https://www.cfadock.fr" target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600 }}>cfadock.fr</a>, l'outil officiel des OPCO.
            </p>
          </div>
        </div>
      </section>

      {/* ── ÉTAPES ── */}
      <section id="etapes" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>La marche à suivre</div>
          <h2 style={h2Style}>Faire financer une formation par votre OPCO, en 4 étapes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 18, marginTop: 28 }}>
            {ETAPES.map(([t, d], i) => (
              <div key={t} style={cardStyle}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: c, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 15, marginBottom: 14 }}>{i + 1}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '20px 0 0' }}>
            Pour le détail des dispositifs (plan de développement des compétences, cas particuliers), voir la page <Link to="/financement-formation-ia" style={{ color: c, fontWeight: 600 }}>financement des formations IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LES 11 OPCO (contenu statique citable) ── */}
      <section id="liste-opco" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Le paysage complet</div>
          <h2 style={h2Style}>Les 11 OPCO et leurs secteurs</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 760 }}>
            Chaque entreprise privée cotise à un seul opérateur, déterminé par sa convention collective. Les montants pris en charge varient selon la branche et la taille de l'entreprise : ils sont publiés sur le site de chaque opérateur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
            {OPCOS.map(o => (
              <div key={o.id} style={{ ...cardStyle, padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Building2 size={17} color="#1E40AF" strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{o.name}</h3>
                </div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{o.perimetre}.</p>
                <a href={o.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: c, textDecoration: 'none' }}>
                  {o.url.replace('https://www.', '')} <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Et pour une formation IA ?</div>
          <h2 style={h2Style}>Un dossier OPCO monté pour vous, de A à Z</h2>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '0 0 20px' }}>
            {[
              { icon: BadgeCheck, label: 'Certifié Qualiopi (condition du financement)' },
              { icon: Wallet, label: "Jusqu'à 100 % pris en charge selon la branche" },
              { icon: Clock, label: 'Devis et dossier complet sous 24 h ouvrées' },
              { icon: CheckCircle2, label: 'Référencé auprès des principaux OPCO depuis 2022' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 99, padding: '8px 15px', fontSize: 13, fontWeight: 600, color: '#374151' }}>
                <Icon size={14} color={c} strokeWidth={2.4} aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 740 }}>
            Nos formations IA (ChatGPT, Claude, Copilot, Gemini, Mistral, 89 programmes par métier) sont conçues pour passer le financement OPCO sans friction : programme détaillé, convention, émargements et attestations au format attendu. Vous choisissez la formation, nous portons le dossier.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis finançable <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#374151', border: '1px solid #E5E7EB', padding: '13px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
              Voir les formations
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEXIQUE EXPRESS (DefinedTermSet) ── */}
      <section id="lexique" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>Lexique express</div>
          <h2 style={h2Style}>Les 4 termes à connaître</h2>
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
      <section id="faq" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes sur les OPCO</h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── AUTRES OUTILS GRATUITS ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>
            Nos autres outils gratuits
          </h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {AUTRES_OUTILS.map(o => (
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
