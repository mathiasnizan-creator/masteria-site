import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Briefcase, Building2, Clock, Compass, Download,
  GraduationCap, Mail, Newspaper, Phone, Scale, TrendingUp, Wallet,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/*
 * Page « Espace presse » : actif d'autorité (E-E-A-T et relations presse).
 * Capitalise la citation Les Échos (câblée aussi dans FounderNote et le Person
 * JSON-LD de SEOHead) et donne aux journalistes de quoi citer Masteria : bio,
 * photos HD, chiffres vérifiables, sujets, contact sous 24 h.
 * INTÉGRITÉ : uniquement des faits déjà publics sur le site ; une seule mention
 * presse à ce jour (Les Échos). Bio publique : jamais le CV cité précisément.
 * Réécrite le 07/10/2026 : texte propre à la page, plus de « +1 500 » (décision
 * en attente), dates de l'AI Act et noms d'outils au 7 octobre 2026.
 * Design : hero sombre premium + sections claires (jetons des pages money).
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SECTION_PAD = 'clamp(64px, 9vw, 100px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

const CONTACT_EMAIL = 'mathias.nizan@master-ia.fr'
const CONTACT_TEL = '+33667754128'
const CONTACT_TEL_LABEL = '06 67 75 41 28'
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=Demande%20presse`

/* Article Les Échos citant Mathias Nizan (URL canonique, cf. FounderNote). */
const ECHOS_ARTICLE_URL = 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741'
const ECHOS_ARTICLE_TITLE = "ChatGPT, Claude, Copilot, Gemini, Mistral : comment choisir l'IA la plus adaptée à son métier"

/* Bio courte copiable telle quelle par un journaliste. */
const BIO = "Avant de créer Masteria à Lyon en 2022, Mathias Nizan a dirigé pendant une dizaine d'années des projets digitaux pour de grands comptes. Son cabinet ne travaille que sur l'IA et ne dépend d'aucun éditeur : il audite les usages, conseille les directions, construit outils et agents sur mesure, puis forme les équipes, une activité certifiée Qualiopi (catégorie : actions de formation). Un réseau d'indépendants travaille avec lui, consultants, développeurs et formateurs réunis selon le projet, partout en France, en Europe, et jusqu'en Inde et aux États-Unis. Les Échos l'ont interrogé sur la façon dont une entreprise sélectionne ses assistants d'IA, métier par métier. Il publie une veille IA chaque jour ouvré sur master-ia.fr. Sa conviction tient en une phrase : le temps que l'IA libère doit aller aux compétences qu'elle ne remplace pas, écouter, arbitrer, faire coopérer."

const EXPERTISE = [
  { icon: TrendingUp, title: "Pourquoi l'IA prend, ou pas, dans une PME", desc: "Pourquoi un outil s'installe dans une équipe et reste ignoré dans la voisine : des observations tirées des journées de formation et des missions de conseil, avec des exemples anonymisés." },
  { icon: GraduationCap, title: "Former les salariés : ce que demande l'AI Act", desc: "L'article 4 est en vigueur depuis le 2 février 2025 : chaque employeur doit veiller à ce que ses équipes sachent se servir de l'IA qu'elles utilisent. L'article 50 a suivi le 2 août 2026, avec des obligations de transparence ; le haut risque attendra décembre 2027." },
  { icon: Compass, title: 'Quel assistant pour quel métier', desc: "Le sujet de l'article des Échos : comment choisir entre les grands assistants, et pourquoi un outil mal choisi pousse les salariés vers leurs comptes personnels. Les noms changent vite : chez Mistral, l'assistant s'appelle désormais Vibe." },
  { icon: Wallet, title: "Le budget d'un projet IA", desc: "Des repères publics pour situer une dépense : la journée de formation à 1 980 € HT en intra, un conseil et un développement facturés au forfait, sur devis, quand le périmètre est écrit." },
  { icon: Scale, title: 'Gouvernance, RGPD et AI Act sur le terrain', desc: "Charte d'usage, registre des usages, comptes d'entreprise qui remplacent les comptes personnels : comment une organisation écrit des règles que ses équipes appliquent vraiment." },
  { icon: Briefcase, title: "L'IA, fonction par fonction", desc: "Marketing, ressources humaines, finance, juridique, service client : les tâches que l'IA transforme dans chaque fonction, et les endroits où elle déçoit encore." },
]

const CHIFFRES = [
  { label: 'Création', value: "En 2022, à Lyon, où le cabinet a ses bureaux rue d'Algérie, dans la presqu'île" },
  { label: 'Statut', value: 'Entreprise individuelle de Mathias Nizan, SIREN 919 252 403' },
  { label: 'Certification', value: "Certifopac (organisme certificateur), certificat n° 725311-1 pour les actions de formation, valide jusqu'en janvier 2029" },
  { label: 'Équipe', value: 'Environ 10 consultants IA, 5 développeurs IA et 20 formateurs, indépendants et mobilisés selon le projet, sous le pilotage de Mathias Nizan' },
  { label: 'Catalogue', value: "Le catalogue dépasse 100 programmes, par outil ou par métier, en intra jusqu'à 12 participants ou en individuel" },
  { label: 'Activités', value: "Audit, conseil en stratégie, outils et agents IA construits sur mesure, formation des équipes" },
  { label: 'Zone', value: 'France entière, Europe, Inde et États-Unis, en présentiel ou à distance' },
  { label: 'Avis', value: 'Note de 5,0 sur la fiche Google de Masteria (relevée en octobre 2026)' },
  { label: 'Labels', value: 'Activateur France Num' },
  { label: 'Références', value: "Dix missions décrites sur le site (quatre en conseil, six en formation), anonymisées parce que les clients l'ont demandé ; mise en relation possible sous accord de confidentialité" },
]

const KIT = [
  { title: 'Portrait HD', file: '/assets/mathias-nizan.jpg', meta: 'JPG · portrait vertical' },
  { title: 'Portrait carré', file: '/assets/mathias-nizan@360.jpg', meta: 'JPG · 360 × 360 px' },
  { title: 'Logo horizontal', file: '/assets/logo-horizontal@800w.png', meta: 'PNG · fond transparent' },
  { title: 'Logo carré', file: '/assets/logo-square.png', meta: 'PNG · 512 × 512 px' },
]

export default function PressePage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Presse', slug: 'presse' },
  ]

  return (
    <>
      <SEOHead
        title="Espace presse : Mathias Nizan, expert IA | Masteria"
        description="Espace presse Masteria : Mathias Nizan, fondateur cité par Les Échos, répond aux journalistes sous 24 h. Bio, photos HD, chiffres vérifiables, sujets IA."
        slug="presse"
        breadcrumbs={breadcrumbs}
        keywords="presse masteria, mathias nizan, expert ia interview, contact presse intelligence artificielle, formation ia expert"
        datePublished="2026-08-06"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#chiffres']}
        citations={[{ name: `Les Échos : ${ECHOS_ARTICLE_TITLE}`, url: ECHOS_ARTICLE_URL }]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Presse</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Newspaper size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Presse &amp; médias
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Espace presse
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un expert IA qui répond, des faits qui se vérifient</span>
          </h1>

          {/* GEO : réponse directe (citable LLM) */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            {"Mathias Nizan dirige Masteria, le cabinet lyonnais d'intelligence artificielle qu'il a fondé en 2022 ; Les Échos l'ont cité sur la sélection des assistants d'IA par métier. "}
            <strong style={{ color: '#fff', fontWeight: 700 }}>Pour une interview, une citation ou des données de terrain, vous avez une réponse dans les 24 heures ouvrées.</strong>
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <a href={MAILTO} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              <Mail size={16} strokeWidth={2.4} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_TEL}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              <Phone size={15} aria-hidden="true" /> {CONTACT_TEL_LABEL}
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
            {[
              { icon: Newspaper, label: 'Cité par Les Échos' },
              { icon: BadgeCheck, label: 'Activateur France Num' },
              { icon: Building2, label: 'Lyon, et visio partout' },
              { icon: Clock, label: 'Réponse en 24 h ouvrées' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DANS LES MÉDIAS ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Dans les médias</div>
          <h2 style={h2Style}>Ce qu'il a dit aux Échos sur les assistants d'IA</h2>
          <a
            href={ECHOS_ARTICLE_URL}
            target="_blank" rel="noopener noreferrer"
            style={{ ...cardStyle, display: 'block', textDecoration: 'none', borderLeft: `4px solid ${c}` }}
          >
            <img src="/assets/lesechos-logo.png" alt="Les Échos" height="22" style={{ height: 22, width: 'auto', display: 'block', marginBottom: 16 }} />
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.4, margin: '0 0 10px' }}>
              {ECHOS_ARTICLE_TITLE}
            </p>
            <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 14px' }}>
              Il y explique comment une entreprise devrait choisir son assistant d'IA à partir de ses métiers, et pourquoi un outil mal choisi pousse les salariés vers leurs propres comptes.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c, fontWeight: 700, fontSize: 14 }}>
              Lire l'article <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </span>
          </a>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '18px 0 0', maxWidth: 760 }}>
            Un sujet proche est en préparation dans votre rédaction ? Les six angles plus bas sont ceux où Mathias Nizan apporte des observations de terrain, avec des chiffres sourcés.
          </p>
        </div>
      </section>

      {/* ── BIO + PHOTO ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Le fondateur</div>
          <h2 style={h2Style}>Mathias Nizan, en quelques lignes</h2>
          <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img
              src="/assets/mathias-nizan@240.jpg"
              srcSet="/assets/mathias-nizan@240.jpg 1x, /assets/mathias-nizan@360.jpg 1.5x"
              alt="Mathias Nizan, fondateur de Masteria"
              width="140" height="140"
              loading="lazy" decoding="async"
              style={{ width: 140, height: 140, borderRadius: 16, objectFit: 'cover', display: 'block', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 280 }}>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 18px', maxWidth: 680 }}>
                {BIO}
              </p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 18px' }}>
                Vous pouvez reprendre cette bio telle quelle ; une version plus courte ou plus longue est disponible sur demande.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/mathias-nizan/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                  LinkedIn
                </a>
                <Link to="/mathias-nizan" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                  Sa page de fondateur <ArrowRight size={13} aria-hidden="true" />
                </Link>
                <Link to="/centre-formation-ia-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                  À propos de Masteria <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUJETS D'EXPERTISE ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Sujets d'expertise</div>
          <h2 style={h2Style}>Sur quoi Mathias Nizan peut réagir</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 36px', maxWidth: 760 }}>
            Il les traite à partir de ce qu'il voit en mission et en formation, et de la veille qu'il publie chaque jour ouvré. Les dates et les noms d'outils sont à jour au 7 octobre 2026.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {EXPERTISE.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES VÉRIFIABLES ── */}
      <section id="chiffres" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Fiche d'identité</div>
          <h2 style={h2Style}>Les chiffres que vous pouvez citer</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 740 }}>
            Tout ce qui suit est public et vérifiable, à jour au 7 octobre 2026. Aucun chiffre communiqué à la presse ne sort de ce cadre : quand une donnée n'est pas établie, nous le disons.
          </p>
          <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 30px)' }}>
            <dl style={{ margin: 0 }}>
              {CHIFFRES.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13.5, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 220, fontSize: 14.5, color: '#4B5563', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '18px 0 0' }}>
            Les preuves se lisent sur nos <Link to="/etudes-de-cas-ia" style={{ color: c, fontWeight: 600 }}>études de cas en entreprise</Link> et dans la <Link to="/veille-ia" style={{ color: c, fontWeight: 600 }}>veille IA quotidienne</Link>. L'identité légale complète (SIRET, déclaration d'activité, certificat Qualiopi) figure sur la page <Link to="/centre-formation-ia-entreprise" style={{ color: c, fontWeight: 600 }}>À propos de Masteria</Link>.
          </p>
        </div>
      </section>

      {/* ── KIT PRESSE ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Kit presse</div>
          <h2 style={h2Style}>Photos et logos en haute définition</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 740 }}>
            Libres d'usage éditorial, sans retouche qui déforme. Crédit bienvenu : Masteria.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20 }}>
            {KIT.map(({ title, file, meta }) => (
              <a key={file} href={file} download style={{ ...cardStyle, padding: 22, textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ height: 110, borderRadius: 10, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={file} alt={title} loading="lazy" decoding="async" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 2px' }}>{title}</p>
                  <p style={{ fontSize: 12.5, color: '#6B7280', margin: 0 }}>{meta}</p>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c, fontWeight: 700, fontSize: 13.5, marginTop: 'auto' }}>
                  <Download size={14} strokeWidth={2.4} aria-hidden="true" /> Télécharger
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE DE TRAVAIL AVEC LES RÉDACTIONS ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Comment nous travaillons</div>
          <h2 style={h2Style}>Trois engagements envers les rédactions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {[
              { icon: Clock, title: 'Réponse sous 24 h ouvrées', desc: 'Par mail ou téléphone, créneau visio rapide, présentiel possible à Lyon. Les bouclages courts sont compris.' },
              { icon: BadgeCheck, title: 'Des propos qui se vérifient', desc: 'Citations relues sur demande, chiffres sourcés, et un refus assumé de commenter ce qui sort de notre champ.' },
              { icon: Newspaper, title: 'Des données de terrain', desc: 'Études de cas anonymisées, observations issues des formations et une veille quotidienne pour situer une actualité.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Contact presse</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Vous préparez un sujet IA ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre angle et votre bouclage. Vous recevez sous 24 h ouvrées une réponse directe : disponibilité, éléments citables et, si utile, des données de terrain.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={MAILTO} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                <Mail size={16} aria-hidden="true" /> Écrire à Mathias Nizan
              </a>
              <a href={`tel:${CONTACT_TEL}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '14px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                <Phone size={15} aria-hidden="true" /> {CONTACT_TEL_LABEL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
