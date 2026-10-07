import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, BadgeCheck, ShieldCheck, Lock, Quote, Users, Building2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'
import { CASES, METHODE_COMMUNE } from '../data/etudes-de-cas'
import MissionsFormationDetail from '../components/MissionsFormationDetail'
import { MISSIONS } from '../data/missions-formation'

/*
 * Page « Études de cas IA » — la PREUVE (E-E-A-T + conversion).
 * Quatre missions anonymisées à la demande des clients (secteur + taille, jamais
 * de nom). INTÉGRITÉ ABSOLUE : chaque chiffre vient des dossiers de mission
 * (fiches de satisfaction, comptes rendus, livrables). Aucun chiffre inventé,
 * aucun verbatim fabriqué, aucune cible écrite comme un résultat. Les clients
 * peuvent être mis en relation en privé, sous NDA.
 * Depuis le 2026-09-03 : chaque cas expose la MÉTHODE en six temps et les
 * RÉSULTATS pour les équipes et pour l'organisation ; les données vivent dans
 * src/data/etudes-de-cas.js, partagées avec le composant CaseStudyCards des
 * pages money. Accent bleu #2563EB, gabarit money pages.
 * Réécrite le 07/10/2026 (texte propre à la page) : intro, En bref, méthode,
 * cadre, FAQ et CTA écrits pour elle ; FounderNote remplacé par une signature,
 * OfficialSources retiré. Les faits des cas (src/data/etudes-de-cas.js et
 * missions-formation.js, révisés le 05/10) ne sont pas modifiés ici.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'etudes-de-cas-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Études de cas IA : 10 missions en entreprise | Masteria'
const META_DESC = "Quatre missions de conseil et six formations IA anonymisées : Copilot dans l'industrie, compétences Claude, diagnostic d'une PME, appels d'offres."
const KEYWORDS = "étude de cas ia, études de cas ia entreprise, cas client ia, exemple déploiement ia entreprise, étude de cas conseil ia, exemple audit ia, retour d'expérience ia, assistants ia entreprise, projet ia entreprise exemple, adoption ia entreprise"

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }

/* Offre mobilisée sur chaque pilier de mission (même ordre que k.pillars : Conseil, Construction, Formation). */
const PILIER_LIENS = {
  distribution: [
    { to: '/conseil-intelligence-artificielle', label: 'Conseil en IA' },
    { to: '/agent-commercial-ia', label: 'Agent commercial IA' },
    { to: '/formation-claude-commercial', label: 'Formation Claude pour les commerciaux' },
  ],
  industrie: [
    { to: '/conseil-strategie-ia', label: 'Conseil stratégie IA' },
    { to: '/copilote-ia-interne', label: 'Copilote IA interne' },
    { to: '/formation-microsoft-copilot', label: 'Formation Microsoft Copilot' },
  ],
  'conseil-financier': [
    { to: '/charte-ia-entreprise', label: 'Charte IA en entreprise' },
    { to: '/outils-ia-sur-mesure', label: 'Outils IA sur mesure' },
    { to: '/formation-ia-marche-public', label: 'Formation IA pour les marchés publics' },
  ],
  photovoltaique: [
    { to: '/diagnostic-ia', label: 'Diagnostic IA' },
    { to: '/agence-developpement-ia', label: 'Agence de développement IA' },
    { to: '/formation-intelligence-artificielle', label: 'Formations IA en entreprise' },
  ],
}

/* Leçon de chaque cas, écrite pour cette page (le récit factuel vit dans data/etudes-de-cas.js). */
const LECONS = {
  distribution: "Former d'abord une poignée de référents, chacun sur un projet de son quotidien, donne à l'entreprise des relais qui font vivre les outils après le départ du formateur. Le reste des équipes arrive ensuite sur des compétences déjà éprouvées, avec des collègues pour répondre à leurs questions.",
  industrie: "Dans un grand groupe, un premier palier mesuré prépare la suite mieux qu'un lancement général. Les corrections apportées entre deux sessions pilotes (licences vérifiées, groupes composés par métier, temps réservé aux assistants) servent ensuite à chaque pays.",
  'conseil-financier': "Un assistant qui questionne d'abord le consultant produit un mémoire ancré dans le dossier du client. Séparer les assistants par famille de marchés garde à chaque domaine son vocabulaire et ses formulations gagnantes.",
  photovoltaique: "Une petite équipe gagne davantage à traiter trois tâches à fond qu'à disperser l'IA sur tout son travail. Le plan se termine par une mesure, car un gain jamais relevé ne se défend pas devant la direction.",
}

/* Vue d'ensemble des dix missions, écrite pour cette page à partir des fichiers de données
   (faits du 05/10, statut au 7 octobre 2026). Ancres : #<cas> et #mission-<id>. */
const APERCU = [
  { ancre: 'distribution', nom: 'Cas 01 · Distribution IT', qui: 'Distributeur IT B2B, 58 salariés', outil: 'Claude', format: 'Deux jours pour dix référents, juin 2026', statut: "Onze compétences construites ; les autres collaborateurs suivront d'octobre à décembre 2026" },
  { ancre: 'industrie', nom: 'Cas 02 · Industrie', qui: 'Groupe international du packaging, plusieurs milliers de salariés', outil: 'Microsoft Copilot', format: 'Cinq sessions de deux jours (juillet à septembre 2026) et une matinée pour le comité de direction', statut: "Mexique et États-Unis prévus en octobre 2026, Inde en décembre" },
  { ancre: 'conseil-financier', nom: 'Cas 03 · Conseil financier', qui: "Cabinet de conseil du secteur public, une vingtaine de consultants", outil: "ChatGPT, en offre d'équipe", format: "Quatre ateliers de deux heures, puis une journée de formation à Paris et à Lyon", statut: "Quatre assistants en service, que le cabinet fait évoluer sans Masteria" },
  { ancre: 'photovoltaique', nom: 'Cas 04 · Photovoltaïque', qui: 'Distributeur photovoltaïque, trois personnes', outil: "Un outil d'équipe unique, au choix de la direction", format: 'Diagnostic présenté en septembre 2026', statut: "Formation sur site prévue en octobre 2026, puis un bilan un mois plus tard" },
  { ancre: 'mission-editeur-pole-formation', nom: 'Formation · pôle pédagogique', qui: "Éditeur de logiciels B2B, trois personnes du pôle formation", outil: 'Claude et Claude Code', format: 'Intra à distance, deux jours, septembre 2026', statut: "Bilan à froid prévu un mois après la session" },
  { ancre: 'mission-immobilier-etudes', nom: 'Formation · études et données', qui: 'Groupe immobilier, une responsable études', outil: 'Claude', format: 'Individuel à distance, un jour, septembre 2026', statut: "Note de lecture, deck et première compétence livrés" },
  { ancre: 'mission-gerance-cabinet', nom: 'Formation · gérance', qui: 'Cabinet de géomètres-experts, son gérant', outil: 'Claude', format: 'Individuel à distance, deux jours, août 2026', statut: "Seconde étape envisagée, après une journée de cadrage" },
  { ancre: 'mission-assistanat-direction', nom: 'Formation · assistanat', qui: 'Éditeur de logiciels B2B, une assistante de direction', outil: 'Copilot et Claude', format: 'Individuel à distance, un jour, septembre 2026', statut: "Un plan sur 30 jours, puis une mesure du gain au bout d'un mois" },
  { ancre: 'mission-interprofession-agricole', nom: 'Formation · interprofession', qui: 'Interprofession agricole, seize salariés', outil: 'Six assistants comparés', format: 'Intra sur site, trois jours, septembre 2026', statut: "Grille de choix des outils et assistants métier remis au groupe" },
  { ancre: 'mission-franchise-gemini', nom: 'Formation · réseau de franchise', qui: 'Siège d\'un réseau de franchise B2B, huit membres de la direction', outil: 'Gemini', format: 'Deux jours sur site, puis un jour en classe virtuelle, septembre 2026', statut: "Plan à 30, 60 et 90 jours confié aux administrateurs" },
]

/* Conventions de lecture et décisions préalables : texte propre à cette page. */
const CONVENTIONS = [
  "Chaque chiffre sort d'un dossier de mission (proposition, livrable, compte rendu), sans arrondi flatteur.",
  "Une étape future est écrite au futur ou marquée « prévue ».",
  "Un objectif chiffré reste un objectif tant que personne ne l'a mesuré.",
  "Les retours de participants sont recopiés sans correction ; un mot ajouté pour la lecture apparaît entre crochets.",
  "Les dates sont données au mois, et aucune note de satisfaction n'est publiée : seuls les commentaires écrits le sont.",
]
const DECISIONS = [
  { t: 'Nommez la tâche qui coûte le plus de temps', d: "Chez le distributeur photovoltaïque, c'étaient les échanges avec les transporteurs et les ressaisies dans Odoo. Partir d'une tâche précise donne un gain que l'on peut relever.", ancre: 'photovoltaique' },
  { t: "Désignez qui portera l'outil en interne", d: "Le distributeur IT a choisi dix référents, un par projet. Ce sont eux qui feront vivre les compétences quand Masteria ne sera plus là.", ancre: 'distribution' },
  { t: 'Fixez les comptes et les données autorisées', d: "Le cabinet de conseil financier a travaillé dès le premier palier sous des règles de confidentialité strictes : ses dossiers de marchés publics ne devaient pas circuler.", ancre: 'conseil-financier' },
  { t: "Partez de l'outil déjà déployé quand il suffit", d: "Les équipes informatiques du groupe industriel avaient retenu Copilot ; les ateliers se sont construits dans cet environnement plutôt que d'en ajouter un autre.", ancre: 'industrie' },
  { t: 'Décidez de la mesure avant la session', d: "L'assistante de direction est repartie avec un plan à 30 jours et une mesure du gain à un mois. Sans point de départ noté, aucun progrès ne se démontre.", ancre: 'mission-assistanat-direction' },
]

const FAQ = [
  {
    q: 'Pourquoi ces études de cas IA ne citent-elles aucun nom ?',
    a: "Les clients l'ont demandé : la plupart voient leur avance sur l'IA comme un atout face à leurs concurrents. Chaque cas indique donc le secteur, la taille, ce qui a été fait et où en est la mission, sans nom d'entreprise ni de personne. Les chiffres sortent des dossiers de mission (propositions, livrables, comptes rendus), et les retours de participants sont recopiés tels qu'ils ont été écrits.",
  },
  {
    q: 'Peut-on vérifier une de ces références ?',
    a: "Oui, en privé. Quand une discussion commerciale avance, Masteria peut organiser un échange avec un client dont la situation ressemble à la vôtre, une fois un accord de confidentialité signé. L'anonymat vaut pour le public ; la vérification reste possible pour vous.",
  },
  {
    q: 'Comment se déroule une mission Masteria ?',
    a: "Le même déroulé sert partout. La direction cadre la demande, les personnes qui exécutent le travail décrivent leurs flux, les priorités se classent par impact et par faisabilité à trois mois, les assistants et les ateliers se conçoivent à partir des documents internes, la formation se fait par métier avec un cadre d'usage, puis une mesure un mois plus tard ouvre la deuxième vague. Chaque cas de cette page montre ces six étapes, faites ou prévues.",
  },
  {
    q: 'Cette méthode convient-elle à une petite entreprise ?',
    a: "Oui. Le plus petit cas compte trois personnes, le plus grand plusieurs milliers de salariés. Le dispositif s'ajuste à l'échelle : trois chantiers et une charte pour la PME du photovoltaïque, une équipe de dix référents chez le distributeur IT, un assistant par famille de marchés au cabinet de conseil, des paliers successifs dans le groupe industriel.",
  },
  {
    q: 'Comment les résultats sont-ils mesurés ?',
    a: "En formation, par une fiche de satisfaction remplie en fin de session et, sur certaines missions, par un retour à froid deux mois plus tard. En conseil, par un état initial noté pendant la formation puis revu un mois après, tâche par tâche : le temps pour sortir un devis, les heures passées avec les transporteurs, les relances, les ressaisies. Tant qu'un gain n'a pas été mesuré, il apparaît comme une cible.",
  },
  {
    q: 'Quels outils ces missions utilisent-elles ?',
    a: "Celui qui colle au contexte. Le groupe industriel vit dans Microsoft 365, ses managers travaillent donc avec Microsoft Copilot. Le distributeur IT a construit ses compétences dans Claude. Les assistants d'appels d'offres du cabinet de conseil tournent dans ChatGPT, en offre d'équipe. Les missions de formation couvrent aussi Gemini dans Google Workspace, ainsi que Vibe, chez Mistral. Le cabinet reste indépendant des éditeurs.",
  },
  {
    q: 'Un OPCO peut-il financer ces missions ?',
    a: "Le volet formation peut l'être. Côté formation, l'organisme Masteria est certifié Qualiopi au titre de ses formations ; la prise en charge revient à votre OPCO, qui l'accorde selon ses propres règles et dans la limite de ses fonds. Côté prix, une journée se facture 1 980 € HT, pour un groupe intra comme pour une personne seule. Le diagnostic, puis concevoir et déployer les assistants, sont du conseil ou du développement : ils ne sont donc pas finançables par votre OPCO.",
  },
  {
    q: 'Comment les données restent-elles protégées pendant une mission ?',
    a: "Un cadre d'usage est écrit avant le premier atelier : comptes d'entreprise dont le contenu n'entraîne aucun modèle, règles pour les informations sensibles, sources citées, et une personne qui approuve tout ce qui engage la société. Vous pouvez aussi demander un accord de confidentialité avant d'envoyer le premier document. C'est ce cadre qui a permis à un cabinet qui répond à des marchés publics comme à un distributeur qui gère des stocks d'utiliser l'IA sans exposer leurs dossiers.",
  },
]

/* ───────── JSON-LD ───────── */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Études de cas IA en entreprise : quatre missions de conseil et six missions de formation',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-30',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ["Étude de cas IA", "Conseil en intelligence artificielle", "Déploiement d'assistants IA en entreprise", "Formation IA en entreprise", "Audit IA"],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}

const casesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Études de cas IA Masteria : quatre missions en entreprise",
  numberOfItems: CASES.length,
  itemListElement: CASES.map((k, i) => ({ '@type': 'ListItem', position: i + 1, name: k.title, description: k.who })),
}

const methodeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "La méthode d'accompagnement Masteria en six temps",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE_COMMUNE.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, description: s.desc })),
}

// Missions de formation récentes (ItemList), si la liste n'est pas vide
const missionsJsonLd = MISSIONS.length ? {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://www.master-ia.fr/etudes-de-cas-ia#missions-formation',
  name: 'Missions de formation récentes de Masteria',
  itemListElement: MISSIONS.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.titre, description: `${m.qui} · ${m.format} · ${m.date}`, url: `https://www.master-ia.fr/etudes-de-cas-ia#mission-${m.id}` })),
} : null

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color: c, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function CaseSection({ k, index, isDesktop }) {
  const Icon = k.icon
  const dark = index % 2 === 1
  const bg = dark ? '#0A0F1E' : (index % 2 === 0 && index > 0 ? '#F9FAFB' : '#fff')
  const ink = dark ? '#F8FAFC' : '#0A0A0A'
  const body = dark ? '#B4C0D3' : '#374151'
  const cardBg = dark ? 'rgba(255,255,255,0.03)' : '#fff'
  const cardBorder = dark ? '1px solid #1E293B' : '1px solid #E5E7EB'
  const accent = dark ? '#60A5FA' : c
  const h3 = { fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: ink, margin: '0 0 10px' }
  const label = { fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: dark ? '#93C5FD' : c, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }
  return (
    <section id={k.id} style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: bg, overflow: 'hidden' }}>
      {dark && <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />}
      {dark && <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />}
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
          <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: dark ? 'rgba(37,99,235,0.16)' : cLight, border: dark ? '1px solid rgba(37,99,235,0.35)' : 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={18} strokeWidth={2.2} style={{ color: accent }} />
          </span>
          <span style={{ ...kickerStyle, marginBottom: 0, color: accent }}>{k.kicker}</span>
        </div>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: dark ? '#94A3B8' : '#6B7280', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k.who}</p>
        <h2 style={{ ...h2Style, color: ink }}>{k.title}</h2>

        {/* chiffres de la mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 14, margin: '28px 0 36px' }}>
          {k.stats.map(([v, l]) => (
            <div key={l} style={{ background: cardBg, border: cardBorder, borderRadius: 14, padding: '18px 20px' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: accent, letterSpacing: '-0.02em' }}>{v}</div>
              <div style={{ fontSize: 13.5, color: body, lineHeight: 1.5, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* défi / réponse */}
        <div style={isDesktop ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' } : {}}>
          <div>
            <h3 style={h3}>Le défi</h3>
            <p style={{ fontSize: 15, color: body, lineHeight: 1.75, margin: 0 }}>{k.defi}</p>
          </div>
          <div style={!isDesktop ? { marginTop: 26 } : {}}>
            <h3 style={h3}>La réponse Masteria</h3>
            <p style={{ fontSize: 15, color: body, lineHeight: 1.75, margin: 0 }}>{k.reponse}</p>
          </div>
        </div>

        {/* LA MÉTHODE EN SIX TEMPS (colonne vertébrale) */}
        <div style={{ marginTop: 40 }}>
          <div style={label}>L'accompagnement, étape par étape</div>
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: dark ? '#1E293B' : '#E5E7EB' }} />
            {k.methode.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 16px' : (i === k.methode.length - 1 ? '16px 0 0' : '16px 0') }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: dark ? 'rgba(37,99,235,0.18)' : cLight, border: dark ? '1px solid rgba(37,99,235,0.35)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: accent, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: ink, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{step.title}</h4>
                  <p style={{ fontSize: 14.5, color: body, lineHeight: 1.7, margin: 0, maxWidth: 820 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* déployé + résultat */}
        <div style={{ ...(isDesktop ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' } : {}), marginTop: 40 }}>
          <div>
            <h3 style={{ ...h3, marginBottom: 12 }}>Ce qui a été livré</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 9 }}>
              {k.livrables.map(l => (
                <li key={l} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: body, lineHeight: 1.6 }}>
                  <BadgeCheck size={16} strokeWidth={2.4} style={{ color: accent, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div style={!isDesktop ? { marginTop: 26 } : {}}>
            <div style={{ background: dark ? 'rgba(37,99,235,0.12)' : '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: dark ? '#93C5FD' : c, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Où en est la mission</div>
              <p style={{ fontSize: 14.5, color: dark ? '#E2E8F0' : '#0A0A0A', lineHeight: 1.7, margin: 0 }}>{k.resultat}</p>
            </div>
            {k.verbatim && (
              <blockquote style={{ margin: '20px 0 0', padding: '16px 20px', background: cardBg, border: cardBorder, borderRadius: 14 }}>
                <Quote size={16} style={{ color: accent, marginBottom: 6 }} aria-hidden="true" />
                <p style={{ fontSize: 14.5, color: ink, fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 8px' }}>« {k.verbatim.text} »</p>
                <footer style={{ fontSize: 13, color: body }}>{k.verbatim.role}</footer>
              </blockquote>
            )}
          </div>
        </div>

        {/* RÉSULTATS pour les équipes / pour l'organisation */}
        {k.resultats && (
          <div style={{ marginTop: 40 }}>
            <div style={label}>Ce que la mission change</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
              {[
                { icon: Users, t: 'Pour les équipes', items: k.resultats.equipes },
                { icon: Building2, t: "Pour l'organisation", items: k.resultats.organisation },
              ].map(({ icon: RIcon, t, items }) => (
                <div key={t} style={{ background: cardBg, border: cardBorder, borderTop: `3px solid ${c}`, borderRadius: 14, padding: '20px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: 9, background: dark ? 'rgba(37,99,235,0.18)' : cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <RIcon size={16} strokeWidth={2.2} style={{ color: accent }} />
                    </span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: ink }}>{t}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                    {items.map(it => (
                      <li key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: body, lineHeight: 1.65 }}>
                        <ArrowRight size={15} strokeWidth={2.4} style={{ color: accent, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leçon du cas, propre à cette page */}
        {LECONS[k.id] && (
          <div style={{ marginTop: 32, background: dark ? 'rgba(37,99,235,0.12)' : cLight, borderRadius: 14, padding: '18px 22px' }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: dark ? '#93C5FD' : '#1E40AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>À retenir pour votre organisation</div>
            <p style={{ fontSize: 15, color: dark ? '#E2E8F0' : '#0A0A0A', lineHeight: 1.7, margin: 0 }}>{LECONS[k.id]}</p>
          </div>
        )}

        {/* Accompagnement global : conseil, construction, formation (penser / construire / transmettre) */}
        {k.pillars && (
          <div style={{ marginTop: 36 }}>
            <div style={label}>Les trois piliers de la mission</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 14 }}>
              {k.pillars.map((p, pi) => (
                <div key={p.t} style={{ background: cardBg, border: cardBorder, borderRadius: 14, padding: '18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: accent }}>{`0${pi + 1}`}</span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: ink }}>{p.t}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: body, lineHeight: 1.65, margin: 0 }}>{p.d}</p>
                  {PILIER_LIENS[k.id]?.[pi] && (
                    <Link to={PILIER_LIENS[k.id][pi].to} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 13.5, fontWeight: 700, color: accent, textDecoration: 'none' }}>
                      {PILIER_LIENS[k.id][pi].label}
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default function EtudesDeCasIAPage() {
  const isDesktop = useIsDesktop()
  const { hash } = useLocation()
  // Les cartes des pages money pointent vers /etudes-de-cas-ia#<cas> : la page
  // est chargée à la volée, le navigateur ne peut pas défiler seul vers l'ancre.
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    let tries = 0
    const tick = () => {
      const el = document.getElementById(id)
      if (el) {
        // 'instant' neutralise le scroll-behavior:smooth global ; passages répétés
        // pendant 1,5 s car polices et sections tardives décalent la hauteur de page.
        const go = () => el.scrollIntoView({ block: 'start', behavior: 'instant' })
        go()
        ;[300, 800, 1500].forEach(ms => setTimeout(go, ms))
        return
      }
      if (tries++ < 20) setTimeout(tick, 100)
    }
    tick()
  }, [hash])
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Études de cas IA', slug: SLUG },
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
        datePublished="2026-07-30"
        dateModified="2026-10-07"
        extraJsonLd={[articleJsonLd, casesJsonLd, methodeJsonLd, missionsJsonLd].filter(Boolean)}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Études de cas IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Références · Missions accompagnées
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Études de cas IA en entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>quatre missions suivies depuis le cadrage, six formations récentes, avec leurs chiffres et leur suite</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Rédigé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui a piloté ces missions · première version en juillet 2026, actualisée le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un groupe industriel international et ses managers, un cabinet de conseil financier du secteur public qui rédige ses réponses aux marchés, une PME photovoltaïque de trois personnes, dix référents chez un distributeur IT B2B : <strong style={{ color: '#fff', fontWeight: 700 }}>quatre organisations accompagnées par Masteria depuis le cadrage</strong>, sur un déroulé commun en six temps. Six missions de formation récentes complètent la page, avec les retours écrits des participants.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 700 }}>
            Aucun nom n'apparaît : ces clients voient leur avance sur l'IA comme un atout et préfèrent la garder pour eux. Chaque cas donne le secteur, la taille, la méthode et les chiffres ; un échange avec le client peut s'organiser en privé, une fois un accord de confidentialité signé.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#distribution" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lire les quatre cas
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact?type=projet" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Décrire votre projet
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Industrie · groupe international', "Copilot déployé par paliers : cadrage avec le Data manager, une matinée pour le comité de direction, 24 managers pilotes, 13 ateliers bâtis sur les tableaux et documents du groupe ; au total, cinq sessions de deux jours, dont deux en anglais, se sont étalées entre juillet et fin septembre 2026 ; le Mexique et les États-Unis sont prévus en octobre 2026, l'Inde en décembre."],
                ['Conseil financier · secteur public', "Quatre assistants dédiés aux appels d'offres, chacun propre à une famille de marchés, conçus avec les consultants en quatre séances de travail de deux heures, puis une journée de formation sur des dossiers récents."],
                ['Distribution photovoltaïque · PME', "Un diagnostic lu flux par flux, trois chantiers confiés chacun à un porteur, une charte d'usage, puis un plan sur 90 jours ; la formation sur site est programmée pour octobre 2026."],
                ['Distribution IT B2B', "Dix référents formés en juin 2026 ont conçu onze compétences Claude ; les autres salariés en profiteront à leur tour, d'octobre à décembre 2026, lors du déploiement prévu."],
                ['Missions de formation', "Six formations menées en août et septembre 2026, en intra ou en individuel : Claude, Copilot, Gemini et un panorama multi-outils, avec les retours écrits des participants."],
                ['Pourquoi anonymisées ?', "Les clients l'ont demandé. Une référence se vérifie en privé, sous un accord de confidentialité signé au préalable."],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#apercu', "Vue d'ensemble"],
            ['#methode', 'La méthode'],
            ['#distribution', 'Cas 01 · Distribution'],
            ['#industrie', 'Cas 02 · Industrie'],
            ['#conseil-financier', 'Cas 03 · Conseil financier'],
            ['#photovoltaique', 'Cas 04 · Photovoltaïque'],
            ...(MISSIONS.length ? [['#missions-formation', 'Missions de formation']] : []),
            ['#cadre', 'Notre cadre'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LA MÉTHODE COMMUNE ── */}
      <section id="methode" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>Six temps, quelle que soit la mission</h2>
          <p style={leadStyle}>
            Trois personnes ou plusieurs milliers de salariés : le dispositif change d'échelle, le déroulé reste le même. La direction cadre, les personnes qui font tourner l'activité décrivent leurs flux, les priorités se classent à trois mois, les outils se construisent à partir des fichiers du client, la formation se fait par métier avec un cadre d'usage, puis vient la mesure. Les quatre cas suivent ces six temps, faits ou prévus.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 18, marginTop: 28 }}>
            {METHODE_COMMUNE.map(s => (
              <div key={s.num} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: c }}>{s.num}</span>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VUE D'ENSEMBLE DES DIX MISSIONS (propre à la page) ── */}
      <section id="apercu" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Vue d'ensemble</div>
          <h2 style={h2Style}>Les dix missions en un tableau, au 7 octobre 2026</h2>
          <p style={leadStyle}>
            Quatre accompagnements complets, puis six formations plus courtes : le tableau donne pour chacune le client, l'outil, le format et l'étape atteinte. Un clic sur le nom mène au récit détaillé plus bas. La prochaine mise à jour suivra les sessions d'octobre au Mexique et aux États-Unis, puis le bilan à un mois du distributeur photovoltaïque.
          </p>
          <div style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, marginTop: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760, fontSize: 14 }}>
              <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Les dix missions décrites sur cette page, avec leur statut au 7 octobre 2026</caption>
              <thead>
                <tr>
                  {['Mission', 'Client', 'Outil', 'Format et date', 'Où en est-on'].map(h => (
                    <th key={h} scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B7280', borderBottom: '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {APERCU.map(r => (
                  <tr key={r.ancre}>
                    <th scope="row" style={{ textAlign: 'left', padding: '14px 16px', borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>
                      <a href={`#${r.ancre}`} style={{ color: c, fontWeight: 700, textDecoration: 'none' }}>{r.nom}</a>
                    </th>
                    <td style={{ padding: '14px 16px', color: '#374151', lineHeight: 1.55, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{r.qui}</td>
                    <td style={{ padding: '14px 16px', color: '#374151', lineHeight: 1.55, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{r.outil}</td>
                    <td style={{ padding: '14px 16px', color: '#374151', lineHeight: 1.55, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{r.format}</td>
                    <td style={{ padding: '14px 16px', color: '#0A0A0A', lineHeight: 1.55, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{r.statut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '18px 22px', marginTop: 24 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Comment lire ces études de cas</div>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>
              {CONVENTIONS.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── LES 4 CAS ── */}
      {CASES.map((k, i) => <CaseSection key={k.id} k={k} index={i} isDesktop={isDesktop} />)}

      {/* ── MISSIONS DE FORMATION RÉCENTES ── */}
      <MissionsFormationDetail pad={SECTION_PAD} />

      {/* ── NOTRE CADRE (discrétion + intégrité) ── */}
      <section id="cadre" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Notre cadre</div>
          <h2 style={h2Style}>Ce que ces quatre missions ont en commun</h2>
          <p style={leadStyle}>
            Les secteurs et les tailles diffèrent, le fil reste le même. Le conseil cadre et priorise, la construction fait travailler les assistants sur les données du client, la formation rend les équipes capables de faire vivre le dispositif seules. Le résultat est ensuite mesuré, et écrit tel qu'il est.
          </p>
          <p style={mutedStyle}>
            Une règle complète les autres, la discrétion : nos clients gardent leur avance, nous gardons leurs noms.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {[
              { icon: BadgeCheck, t: "Les fichiers du client comme matière", d: "Ateliers et assistants partent des documents, des données et des outils du client ; un exemple générique ne sert qu'à expliquer une notion." },
              { icon: ShieldCheck, t: 'Une confidentialité écrite', d: "Comptes professionnels sans réutilisation pour l'entraînement, règles d'usage, sources citées, une personne qui valide ce qui engage le client : tout est fixé avant le premier atelier." },
              { icon: Lock, t: 'Anonymes en public, vérifiables en privé', d: "Les cas restent anonymes parce que les clients l'ont voulu. Quand la discussion avance, un échange avec l'un d'eux s'organise sous accord de confidentialité." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                <div style={{ width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '30px 0 0', maxWidth: 860 }}>
            Pour un dispositif comparable, le point de départ dépend de votre situation. Le <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link> donne une lecture courte, l'<Link to="/audit-ia" style={{ color: c, fontWeight: 600 }}>audit IA</Link> une lecture complète ; le <Link to="/conseil-strategie-ia" style={{ color: c, fontWeight: 600 }}>conseil stratégie IA</Link> sert au comité de direction, l'<Link to="/accompagnement-ia" style={{ color: c, fontWeight: 600 }}>accompagnement IA</Link> à un déploiement par paliers, et la page sur les <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link> montre ce qui se construit. Les fourchettes de budget figurent sur la page <Link to="/prix-projet-ia" style={{ color: c, fontWeight: 600 }}>prix d'un projet IA</Link>. Côté compétences, le <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue de formations IA</Link> couvre tous les outils, et la <Link to="/formation-ia-comex" style={{ color: c, fontWeight: 600 }}>formation IA du comité de direction</Link> a son format propre.
          </p>
        </div>
      </section>

      {/* ── CINQ DÉCISIONS AVANT UN DISPOSITIF COMPARABLE (propre à la page) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Avant de vous lancer</div>
          <h2 style={h2Style}>Cinq décisions que ces missions ont rendues décisives</h2>
          <p style={leadStyle}>
            Chacune a pesé sur l'un des cas de cette page. Les prendre avant le premier atelier évite de construire un outil que personne ne portera.
          </p>
          <ol style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
            {DECISIONS.map((d, i) => (
              <li key={d.t} style={{ ...cardStyle, padding: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: c }}>{`0${i + 1}`}</span>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{d.t}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{d.d}</p>
                <a href={`#${d.ancre}`} style={{ fontSize: 13.5, fontWeight: 700, color: c, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Revoir ce cas <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan a piloté chacune de ces missions et reprend cette page à chaque étape franchie par un client ; la dernière révision date du 7 octobre 2026. Pour connaître son parcours, voyez <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>Questions fréquentes sur nos études de cas IA</h2>
          {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre cas, maintenant</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décrivez votre situation, nous vous dirons quel dispositif lui convient
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Le premier pas : 30 minutes de cadrage offertes. Pendant cet échange, vous présentez le contexte et nous vous indiquons le dispositif adapté, avec la méthode et la discrétion appliquées aux clients de cette page.
            </p>
            <Link to="/contact?type=projet&rdv=30" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Une réponse vous parvient sous un jour ouvré, sans engagement
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
