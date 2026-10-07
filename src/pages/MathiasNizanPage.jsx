import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Compass, Cpu, Factory, GraduationCap, Landmark, Languages, MapPin,
  Newspaper, CalendarClock, BookOpen, LineChart, Library, ShieldCheck, Plug, Handshake, Sun, HeartHandshake,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import CadrageLink from '../components/CadrageLink'
import EquipeMasteria from '../components/EquipeMasteria'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page auteur « Mathias Nizan » (/mathias-nizan) : E-E-A-T du conseil et du
 * développement. Cible des bylines, de FounderNote et du schéma Person (url,
 * mainEntityOfPage). Page de type ProfilePage, entité principale #mathias-nizan.
 * INTÉGRITÉ : uniquement des faits déjà publiés sur le site (page À propos,
 * espace presse, études de cas, pages conseil et développement).
 * BIO PUBLIQUE (règle de Mathias, 06/10/2026) : jamais le CV cité précisément,
 * ni école, ni employeurs, ni dates de postes. Repères permis : une dizaine
 * d'années dans le digital (projets pour de grands comptes, négociation,
 * management), l'IA générative depuis 2020, Masteria en 2022, Les Échos.
 * Sa vision : la technologie rend du temps, les compétences humaines décident
 * de ce qu'on en fait.
 * Réécrite le 07/10/2026 (texte propre à la page) : CaseStudyCards remplacé par
 * quatre cartes écrites pour cette page, liées aux ancres de /etudes-de-cas-ia.
 * EquipeMasteria garde ses textes par défaut, réservés à cette page (la home
 * passe les siens en props).
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SECTION_PAD = 'clamp(64px, 9vw, 100px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const linkStyle = { color: c, fontWeight: 700, textDecoration: 'none' }

const LINKEDIN_URL = 'https://www.linkedin.com/in/mathias-nizan/'
const ECHOS_ARTICLE_URL = 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741'
const ECHOS_ARTICLE_TITLE = "ChatGPT, Claude, Copilot, Gemini, Mistral : comment choisir l'IA la plus adaptée à son métier"

const EN_BREF = [
  { icon: Building2, label: 'Fonction', value: "Fondateur et dirigeant de Masteria, il signe les recommandations et l'architecture des outils du cabinet" },
  { icon: CalendarClock, label: 'Parcours', value: "Une dizaine d'années dans le digital, l'IA générative à partir de 2020, la création de Masteria en 2022" },
  { icon: MapPin, label: 'Basé à', value: "Lyon, aux bureaux du cabinet rue d'Algérie, dans le 1ᵉʳ arrondissement" },
  { icon: Languages, label: 'Interventions', value: "France, Europe, États-Unis et Inde ; missions menées en français ou en anglais" },
  { icon: Newspaper, label: 'Presse', value: "Interrogé par Les Échos sur la manière de choisir un assistant d'IA selon le métier" },
]

/* Les trois métiers qu'il exerce chez Masteria : penser, construire, transmettre. */
const METIERS = [
  {
    icon: Compass,
    kicker: 'Penser',
    title: 'Auditer et conseiller',
    desc: "Il conduit les audits et les diagnostics IA : il interroge ceux qui exécutent les tâches, lit les flux, choisit les chantiers à ouvrir en premier et pose le cadre d'usage (RGPD, AI Act). Il présente ensuite ses conclusions aux dirigeants, en anglais quand le groupe travaille en anglais.",
    links: [['Audit IA', '/audit-ia'], ['Diagnostic IA', '/diagnostic-ia'], ['Conseil en stratégie IA', '/conseil-intelligence-artificielle']],
  },
  {
    icon: Cpu,
    kicker: 'Construire',
    title: "Concevoir l'architecture des outils",
    desc: "Quand un outil doit être construit, il en fixe le plan : assistant qui répond à partir des documents internes (le RAG, une recherche dans la base documentaire avant chaque réponse), agent relié au CRM ou à l'ERP, automatisation entre deux logiciels, connecteur MCP (le protocole qui donne à un assistant l'accès à un logiciel métier). Claude, GPT ou Mistral : le modèle dépend du cas, et le code est remis au client.",
    links: [["Développement d'outils sur mesure", '/agence-developpement-ia'], ['Agents IA en entreprise', '/agents-ia-entreprise'], ['Automatisation IA', '/agence-automatisation-ia']],
  },
  {
    icon: GraduationCap,
    kicker: 'Transmettre',
    title: 'Former les équipes',
    desc: "Il dessine les parcours de formation de Masteria, par métier et par outil, dans le cadre de la certification Qualiopi, et en anime une partie lui-même. Les autres sessions reviennent aux formateurs indépendants du réseau, et Masteria répond de chacune.",
    links: [['Formations IA par métier', '/formation-intelligence-artificielle'], ['Accompagnement IA', '/accompagnement-ia']],
  },
]

/* Quatre missions racontées pour cette page ; le récit complet vit sur /etudes-de-cas-ia. */
const MISSIONS = [
  {
    id: 'industrie',
    icon: Factory,
    secteur: 'Industrie · groupe international',
    chiffre: '24',
    chiffreLabel: "managers pilotes avant l'ouverture aux sites étrangers",
    texte: "Chez un industriel international du packaging, Copilot arrive par paliers. Il a cadré le dispositif avec le Data manager ; le comité de direction a reçu, en anglais, une matinée sur les agents, leur coût et le cadre légal. Les sites du Mexique et des États-Unis suivront en octobre 2026, ceux de l'Inde en décembre.",
  },
  {
    id: 'photovoltaique',
    icon: Sun,
    secteur: 'PME · distribution photovoltaïque',
    chiffre: '3',
    chiffreLabel: 'chantiers retenus, chacun confié à un porteur',
    texte: "Trois personnes font tourner ce distributeur, et Odoo, leur ERP, centralise tout. Le diagnostic a suivi le travail flux par flux, de la demande de devis au pilotage ; la direction l'a reçu en septembre 2026, accompagné d'une charte d'usage et d'un plan sur 90 jours. Deux jours de formation dans ses locaux sont prévus en octobre.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    secteur: 'Conseil financier · marchés publics',
    chiffre: '4',
    chiffreLabel: 'assistants, autant que de familles de marchés',
    texte: "Une vingtaine de consultants rédigent des mémoires techniques pour des collectivités. Il a conçu l'architecture des assistants, co-construits avec eux en quatre ateliers, avec une règle simple : l'assistant questionne d'abord le consultant (travaux passés pour ce client, priorités, références) et ne rédige qu'ensuite.",
  },
  {
    id: 'distribution',
    icon: Bot,
    secteur: 'Distribution IT B2B',
    chiffre: '10',
    chiffreLabel: 'référents formés en juin 2026',
    texte: "Un distributeur de 58 salariés cherche plus de force commerciale sans recruter. Avec la direction, il a choisi les tâches à équiper en priorité : cotation, relances, cahiers des charges. Les dix référents en sont sortis avec onze compétences Claude ; leur diffusion aux autres collaborateurs est prévue d'octobre à décembre 2026.",
  },
]

const PRINCIPES = [
  { icon: Handshake, title: 'Indépendant des éditeurs', desc: "Son conseil n'est lié à aucun éditeur : il recommande l'outil qui sert votre cas, et conserve l'outil déjà en place quand il suffit." },
  { icon: Plug, title: "Partir de l'existant", desc: "Votre CRM, votre ERP, vos dossiers partagés : l'outil se branche sur ce qui tourne déjà. Refaire le système d'information n'est pas un préalable." },
  { icon: ShieldCheck, title: 'Confidentialité', desc: "Un accord de confidentialité peut être signé avant le premier document transmis. Les missions publiées sur le site sont anonymisées." },
  { icon: Compass, title: 'Cadrer avant de chiffrer', desc: "Le périmètre s'écrit avant le prix : 30 minutes de cadrage offertes d'abord, un devis écrit ensuite." },
]

const PUBLICATIONS = [
  { icon: Newspaper, title: 'Les Échos', desc: "Son avis sur le choix d'un assistant d'IA selon les métiers, et sur ce qui arrive quand l'outil retenu ne convient pas aux équipes.", href: ECHOS_ARTICLE_URL, external: true },
  { icon: CalendarClock, title: 'Veille IA quotidienne', desc: "Une édition par jour ouvré, en français et en anglais : l'actualité de l'IA lue depuis le poste de travail.", href: '/veille-ia' },
  { icon: LineChart, title: "Le ROI de l'IA en entreprise", desc: "Ce que l'IA rapporte, sources à l'appui, et les endroits où le gain se dissipe entre l'essai et l'usage quotidien.", href: '/roi-ia-entreprise' },
  { icon: Library, title: 'Bibliothèque de prompts', desc: "Plus de cent prompts rangés par métier, chacun livré avec la raison de sa construction.", href: '/bibliotheque-de-prompts' },
  { icon: BookOpen, title: 'Le blog', desc: "Des guides de méthode sur l'audit, la stratégie, les agents et la gouvernance de l'IA.", href: '/blog' },
]

const EXPERTISES = [
  'Audit IA', 'Feuille de route IA', "Gouvernance de l'IA", 'AI Act', 'RGPD et IA',
  'Architecture de solutions', 'Agents IA', 'RAG', 'Connecteurs MCP', 'Intégration CRM et ERP',
  'Automatisation', 'Claude', 'Mistral (Vibe)', 'ChatGPT', 'Gemini', 'Microsoft Copilot',
  'Conception de parcours de formation',
]

export default function MathiasNizanPage() {
  const isDesktop = useIsDesktop()
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Mathias Nizan', slug: 'mathias-nizan' },
  ]

  return (
    <>
      <SEOHead
        title="Mathias Nizan : conseil et architecture IA | Masteria"
        description="Fondateur de Masteria (Lyon, 2022), Mathias Nizan mène les audits IA, dessine outils et agents sur mesure, conçoit les formations. Cité par Les Échos."
        slug="mathias-nizan"
        breadcrumbs={breadcrumbs}
        keywords="mathias nizan, fondateur masteria, consultant ia lyon, architecte solutions ia, expert ia entreprise"
        webPageType="ProfilePage"
        mainEntityId="https://www.master-ia.fr/#mathias-nizan"
        datePublished="2026-10-02"
        dateModified="2026-10-07"
        speakable={['#definition', '#en-bref']}
        citations={[{ name: `Les Échos : ${ECHOS_ARTICLE_TITLE}`, url: ECHOS_ARTICLE_URL }]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Mathias Nizan</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) 280px' : '1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
                <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                  Fondateur de Masteria
                </span>
              </div>

              <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em' }}>
                Mathias Nizan
                <br />
                <span style={{ color: '#60A5FA', fontWeight: 800 }}>il conseille les directions et conçoit les solutions IA du cabinet</span>
              </h1>

              {/* GEO : définition citable */}
              <p id="definition" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 20px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
                Mathias Nizan a lancé Masteria en 2022, à Lyon, avec une spécialité unique, l'IA en entreprise. Il mène lui-même les <strong style={{ color: '#fff', fontWeight: 700 }}>audits et les missions de conseil</strong>, dessine l'architecture des outils et des agents IA que le cabinet construit, et conçoit les formations qui permettent aux équipes de s'en servir.
              </p>
              <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.7, margin: '0 0 30px', maxWidth: 680 }}>
                Avant Masteria, il a passé une dizaine d'années dans le digital, à diriger des projets pour de grands comptes, à négocier et à manager des équipes. Il travaille sur l'IA générative depuis 2020.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                  Réserver 30 minutes de cadrage
                  <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
                </CadrageLink>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer me" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{ maxWidth: isDesktop ? 'none' : 240 }}>
              <picture>
                <source type="image/webp" srcSet="/assets/mathias-nizan.webp" />
                <img
                  src="/assets/mathias-nizan.jpg"
                  alt="Portrait de Mathias Nizan, fondateur de Masteria"
                  width="400" height="500"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 20, display: 'block', border: '1px solid #1E293B' }}
                />
              </picture>
            </div>
          </div>

          {/* En bref (GEO) */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', marginTop: 44 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '14px 32px' }}>
              {EN_BREF.map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon size={16} strokeWidth={2.2} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  <div>
                    <dt style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0' }}>{label}</dt>
                    <dd style={{ margin: '2px 0 0', fontSize: 14, color: '#94A3B8', lineHeight: 1.55 }}>{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SA CONVICTION : la technologie rend du temps, l'humain décide de son usage ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 380px) 1fr' : '1fr', gap: 'clamp(28px, 5vw, 64px)', alignItems: 'start' }}>
          <div>
            <div style={kickerStyle}>Sa conviction</div>
            <h2 style={{ ...h2Style, marginBottom: 0 }}>Le temps que l'IA rend doit revenir aux compétences humaines</h2>
          </div>
          <div>
            <p style={{ fontSize: 16.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
              Mathias Nizan part d'un constat de terrain. Un assistant bien réglé rend des heures sur les recherches, les premiers jets et la mise en page. La question qui l'intéresse vient juste après : que fait l'équipe de ce temps ?
            </p>
            <p style={{ fontSize: 16.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
              Sa réponse tient en quatre gestes que personne ne délègue à un modèle : écouter un client, arbitrer entre deux priorités, garder son calme quand un dossier se tend, faire coopérer des services qui se parlent peu. La technologie libère l'agenda ; ces compétences-là décident de ce qu'on en fait.
            </p>
            <p style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#1E3A8A', lineHeight: 1.7, margin: 0, background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '14px 18px' }}>
              <HeartHandshake size={18} strokeWidth={2.1} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
              <span>Ses missions associent donc toujours l'outil et la façon de travailler ensemble : qui valide, qui garde la main, ce qui reste un travail de personne à personne.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CE QU'IL FAIT CHEZ MASTERIA ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Son rôle chez Masteria</div>
          <h2 style={h2Style}>Il pense le projet, en dessine l'architecture et forme ceux qui s'en servent</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 36px', maxWidth: 780 }}>
            Un projet d'IA se joue sur la marche entre la décision et l'usage. Chez Masteria, la même équipe cadre, construit et forme, sous sa direction, pour que cette marche soit franchie d'un seul tenant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {METIERS.map(({ icon: Icon, kicker, title, desc, links }) => (
              <article key={title} style={{ ...cardStyle, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} strokeWidth={2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kicker}</span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link to={href} style={{ ...linkStyle, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        {label} <ArrowRight size={13} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── L'ÉQUIPE QU'IL PILOTE ── */}
      <EquipeMasteria showFounder={false} bg="#F9FAFB" />

      {/* ── MISSIONS REPRÉSENTATIVES (texte propre à la page, remplace CaseStudyCards) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Missions représentatives</div>
          <h2 style={h2Style}>Quatre missions qu'il a pilotées</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 800 }}>
            Trois salariés dans une PME, une vingtaine de consultants dans un cabinet, 58 personnes chez un distributeur, plusieurs milliers dans un groupe dont les sites vont de l'Europe à l'Inde : la taille change, sa façon de conduire la mission reste la même. Chaque client a demandé l'anonymat, et les étapes à venir sont écrites au futur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {MISSIONS.map(({ id, icon: Icon, secteur, chiffre, chiffreLabel, texte }) => (
              <article key={id} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{secteur}</span>
                </div>
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{chiffre}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.45, marginTop: 4 }}>{chiffreLabel}</div>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{texte}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ ...linkStyle, fontSize: 13.5, display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  Le cas complet
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT IL TRAVAILLE ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Sa façon de travailler</div>
          <h2 style={h2Style}>Quatre règles tenues sur chaque mission</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 28 }}>
            {PRINCIPES.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ borderLeft: `4px solid ${c}`, padding: '4px 0 4px 18px' }}>
                <Icon size={20} strokeWidth={2} style={{ color: c, marginBottom: 10 }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Publications et prises de parole</div>
          <h2 style={h2Style}>Ce qu'il publie</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16, marginTop: 28 }}>
            {PUBLICATIONS.map(({ icon: Icon, title, desc, href, external }) => {
              const inner = (
                <>
                  <Icon size={20} strokeWidth={2} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{title}</div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </>
              )
              const style = { ...cardStyle, padding: 22, display: 'flex', gap: 14, textDecoration: 'none' }
              return external
                ? <a key={title} href={href} target="_blank" rel="noopener noreferrer" style={style}>{inner}</a>
                : <Link key={title} to={href} style={style}>{inner}</Link>
            })}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '24px 0 0' }}>
            Pour les journalistes, l'<Link to="/presse" style={linkStyle}>espace presse</Link> réunit une bio courte, des portraits en haute définition et les chiffres citables.
          </p>
        </div>
      </section>

      {/* ── EXPERTISES ── */}
      <section style={{ padding: 'clamp(48px, 7vw, 72px) 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Domaines d'expertise</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {EXPERTISES.map(e => (
              <li key={e} style={{ background: cLight, color: '#1E40AF', borderRadius: 99, padding: '6px 14px', fontSize: 13.5, fontWeight: 600 }}>{e}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA FINAL sombre ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(56px, 9vw, 96px) 24px', overflow: 'hidden', textAlign: 'center' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 16px', lineHeight: 1.15 }}>
            Exposez votre projet à Mathias Nizan
          </h2>
          <p style={{ fontSize: 16.5, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 30px' }}>
            Pour commencer, 30 minutes de cadrage offertes : vous décrivez la situation, il vous indique une première piste (formation, outil sur mesure, audit ou diagnostic court) et ce que chacune demanderait de votre côté.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 30px', borderRadius: 11, textDecoration: 'none', fontSize: 15.5, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <Link to="/etudes-de-cas-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '15px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire les études de cas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
