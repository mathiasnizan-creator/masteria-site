import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, BadgeCheck, ListChecks, Scale } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleure agence IA » : guide de choix 2026. Cible « meilleure agence
 * ia » (170/mois, KD 20), « agence ia 2026 » (390), « classement agences de
 * conseil en ia », « comparatif agences ia », « agences ia recommandées en
 * france ». Parti pris d'intégrité : aucun classement nominatif de concurrents,
 * aucune agence tierce nommée. Format guide : typologie du marché en 5 familles
 * (tableau HTML, snippet magnet), 8 critères, 10 questions, 5 signaux d'alarme,
 * budgets en tableau, positionnement factuel de Masteria. Design premium
 * cabinet : kickers, cartes radius 16, CTA final sombre. Accent bleu #2563EB.
 */

const SLUG = 'meilleure-agence-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Meilleure agence IA : comment choisir en 2026 | Masteria'
const META_DESC = "Aucun classement officiel ne désigne la meilleure agence IA. Typologie, 8 critères vérifiables, 10 questions et budgets 2026 pour bien choisir."

/* ── Design system local : kickers, titres, cartes, tableaux ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

const FAMILIES = [
  {
    name: 'Grands cabinets de conseil généralistes',
    forces: "Accès aux directions générales, capacité à staffer des équipes nombreuses, couverture internationale, crédibilité auprès des conseils d'administration.",
    limites: "Budgets élevés, livrables parfois loin du terrain, exécution souvent déléguée à des profils juniors ou à des partenaires.",
    budget: 'Souvent au-delà de 100 000 € pour un programme de transformation.',
    pourQui: 'Grands groupes, programmes internationaux, enjeux de gouvernance complexes.',
  },
  {
    name: 'ESN et intégrateurs',
    forces: "Force de frappe technique, connaissance de votre SI s'ils y travaillent déjà, capacité à tenir des chantiers d'intégration longs.",
    limites: "L'IA reste une offre parmi des dizaines ; le niveau réel dépend fortement des consultants staffés ; modèle économique orienté régie.",
    budget: 'TJM courant de 500 à 1 200 €, missions facturées au temps passé.',
    pourQui: "DSI avec de gros chantiers d'intégration ou un besoin de renfort durable.",
  },
  {
    name: 'Studios et agences build spécialisés data-IA',
    forces: 'Excellence technique sur le sur-mesure : RAG, agents, fine-tuning, produits IA. Équipes seniors, culture produit.',
    limites: "Moins présents sur la stratégie, la conduite du changement et la formation ; ticket d'entrée élevé pour les petites structures.",
    budget: 'De 30 000 € à plus de 300 000 € par produit ou solution.',
    pourQui: 'Entreprises qui construisent un produit IA ou une brique SI sur mesure.',
  },
  {
    name: "Agences d'automatisation no-code",
    forces: "Rapidité de mise en œuvre, coût d'entrée faible, retour sur investissement mesurable en quelques semaines sur les processus répétitifs.",
    limites: 'Périmètre borné aux capacités des plateformes no-code ; gouvernance et sécurité parfois traitées légèrement ; dépendance aux abonnements.',
    budget: 'De 3 000 à 50 000 € par périmètre de processus.',
    pourQui: 'PME et services opérationnels avec des processus répétitifs bien identifiés.',
  },
  {
    name: 'Cabinets hybrides conseil + formation',
    highlight: true,
    forces: "Cadrage stratégique, mise en œuvre et montée en compétence dans la même mission ; les équipes du client finissent autonomes ; la partie formation est auditée (certification Qualiopi) et finançable par les OPCO.",
    limites: 'Dimensionnés pour des missions ciblées ; peu adaptés au développement logiciel lourd ou aux programmes de transformation mondiaux.',
    budget: 'Cadrage et automatisation au forfait ; formation de 1 000 à 2 500 € par jour.',
    pourQui: 'PME, ETI et directions métier qui veulent des résultats rapides et des équipes autonomes. Masteria appartient à cette famille.',
  },
]

const CRITERIA = [
  { n: 1, title: 'Spécialisation réelle', desc: "Depuis quand l'acteur travaille-t-il sur l'IA, et quelle part de son activité cela représente-t-il ? Une offre IA ajoutée récemment à un catalogue de cinquante prestations produit rarement le même niveau de conseil qu'une pratique exclusive. Vérifiez la profondeur et la fraîcheur des contenus publiés." },
  { n: 2, title: 'Références vérifiables', desc: "Des cas clients documentés avec contexte, démarche et résultats, et au moins deux clients que vous pouvez appeler. Méfiez-vous des murs de logos sans histoire et des pourcentages sans source." },
  { n: 3, title: 'Transfert de compétence', desc: "À la fin de la mission, vos équipes doivent savoir utiliser, corriger et étendre ce qui a été livré. Demandez ce qui est prévu : documentation, ateliers de passation, formation. Une réponse vague annonce une dépendance durable." },
  { n: 4, title: 'Indépendance vis-à-vis des éditeurs', desc: "Un bon conseil compare plusieurs outils et assume de vous déconseiller une solution à la mode. Demandez si l'agence touche des commissions d'apporteur d'affaires et si elle sait travailler avec les outils que vous possédez déjà." },
  { n: 5, title: 'Méthode de cadrage', desc: "Un devis sérieux suit un diagnostic : processus observés, cas d'usage priorisés par impact et faisabilité, risques identifiés. Un chiffrage envoyé sans aucune question préalable signale une offre standardisée." },
  { n: 6, title: 'Transparence tarifaire', desc: "Forfait écrit, périmètre précis, conditions de révision, frais de déplacement annoncés. Les ordres de grandeur du marché figurent plus bas dans ce guide : un écart majeur, vers le haut comme vers le bas, mérite une explication." },
  { n: 7, title: 'Conformité RGPD et AI Act', desc: "L'agence doit savoir répondre simplement : où transitent vos données, quels modèles les traitent, quelles clauses figurent au contrat, comment l'AI Act classe votre cas d'usage. Une réponse évasive sur ce point disqualifie." },
  { n: 8, title: 'Proximité et disponibilité', desc: "Un interlocuteur stable, des délais de réponse engagés, la capacité à venir sur site pour les ateliers et la conduite du changement. Le distanciel fonctionne très bien quand il est choisi, moins bien quand il est subi." },
]

const QUESTIONS = [
  { q: "Quelle part de votre activité concerne l'IA, et depuis quand ?", hint: 'Mesure la spécialisation réelle au-delà du discours commercial.' },
  { q: 'Pouvez-vous décrire deux missions comparables à la nôtre, avec leurs résultats ?', hint: "Des références précises et joignables valent mieux qu'une planche de logos." },
  { q: 'Qui interviendra concrètement sur notre mission ?', hint: "L'avant-vente senior suivie d'une exécution junior est un grand classique du marché." },
  { q: 'Quels outils recommandez-vous, et pourquoi ceux-là ?', hint: "Teste l'indépendance vis-à-vis des éditeurs et la capacité à argumenter." },
  { q: "Comment priorisez-vous les cas d'usage avant de chiffrer ?", hint: 'Une méthode de cadrage solide se décrit en deux minutes.' },
  { q: 'Que livrez-vous exactement, et sous quel format ?', hint: 'Exigez des livrables éditables et réutilisables par vos équipes.' },
  { q: 'Comment organisez-vous le transfert de compétence vers nos équipes ?', hint: 'La réponse distingue les agences qui rendent autonome de celles qui installent une dépendance.' },
  { q: "Où transitent nos données, et comment traitez-vous le RGPD et l'AI Act ?", hint: "Une agence sérieuse répond simplement, contrat à l'appui." },
  { q: "Quel est le coût total, et qu'est-ce qui peut le faire varier ?", hint: 'Les conditions de révision du prix doivent être écrites avant signature.' },
  { q: 'Que se passe-t-il à la fin de la mission ?', hint: 'Maintenance, propriété des livrables, réversibilité : tout se négocie avant la signature.' },
]

const RED_FLAGS = [
  { title: 'Un ROI précis promis avant tout diagnostic', desc: "Personne ne peut garantir « 30 % de productivité » sans avoir observé vos processus. Les gains réels se mesurent après cadrage, sur des indicateurs définis avec vous." },
  { title: 'Un devis envoyé sans phase de découverte', desc: "Si l'agence chiffre sans poser de questions sur vos processus, vos données et vos équipes, vous recevez une prestation standardisée qui ignore votre contexte." },
  { title: 'Le flou sur la propriété et la réversibilité', desc: "Prompts, workflows, accès, documentation : si la question de ce qui vous appartient en fin de mission gêne votre interlocuteur, la dépendance fait partie du modèle." },
  { title: 'Des références invérifiables', desc: "Aucun client joignable, des études de cas anonymes, des chiffres sans source : considérez que les références n'existent pas tant qu'elles ne sont pas vérifiées." },
  { title: 'La dépendance organisée', desc: "Abonnement obligatoire aux outils propriétaires de l'agence, absence de documentation, aucune formation prévue : trois signes que votre autonomie ne fait pas partie du plan." },
]

const BUDGETS = [
  { mission: 'Audit et cadrage stratégique', range: '5 000 à 30 000 €', note: "Selon la taille de l'entreprise et la profondeur du diagnostic." },
  { mission: 'Stratégie et feuille de route direction', range: '15 000 à 80 000 €', note: 'Programmes COMEX, gouvernance, trajectoire pluriannuelle.' },
  { mission: "Automatisation d'un périmètre de processus", range: '5 000 à 50 000 €', note: 'Du workflow simple au déploiement multi-équipes.' },
  { mission: 'Produit ou solution IA sur mesure', range: '30 000 à 300 000 € et plus', note: 'RAG, agents, intégrations profondes au SI.' },
  { mission: 'Formation des équipes (intra, par jour)', range: '1 000 à 2 500 €', note: "Finançable OPCO si l'organisme est certifié Qualiopi." },
  { mission: 'Accompagnement continu', range: '2 000 à 15 000 € par mois', note: "Selon l'intensité : supervision, évolutions, support." },
]

const FAQ = [
  {
    q: 'Existe-t-il un classement officiel des agences IA en France ?',
    a: "Non. Aucun organisme public, aucune norme et aucun observatoire indépendant ne classe les agences IA. Les palmarès publiés en ligne reposent sur des dossiers déclaratifs, des votes ou des emplacements payants. Les seuls signaux contrôlés par un tiers sont les certifications auditées, comme Qualiopi pour l'activité de formation, et les références clients que vous vérifiez vous-même par téléphone.",
  },
  {
    q: 'Quelle est la meilleure agence IA en France ?',
    a: "Cela dépend de votre besoin dominant. Pour une transformation internationale, regardez les grands cabinets. Pour un produit IA sur mesure, les studios build. Pour des processus répétitifs, une agence d'automatisation. Pour cadrer une stratégie, automatiser et rendre vos équipes autonomes, un cabinet hybride conseil + formation comme Masteria. Présélectionnez trois acteurs de la bonne famille, posez-leur les dix questions de ce guide et comparez les réponses écrites.",
  },
  {
    q: 'Combien coûte une agence IA en 2026 ?',
    a: "Ordres de grandeur du marché français : 5 000 à 30 000 € pour un audit, 15 000 à 80 000 € pour une stratégie de direction, 5 000 à 50 000 € pour automatiser un périmètre de processus, 30 000 à 300 000 € pour un produit sur mesure, 1 000 à 2 500 € par jour de formation intra-entreprise. Seule la formation délivrée par un organisme certifié Qualiopi est finançable par votre OPCO, le conseil pur ne l'est pas.",
  },
  {
    q: 'Faut-il choisir une agence IA locale ou travailler à distance ?',
    a: "Les deux fonctionnent. La proximité compte pour les ateliers de cadrage, l'observation des processus sur le terrain et la conduite du changement. Le distanciel convient parfaitement au suivi, à la formation et aux missions bien périmétrées. Le bon critère : une agence capable des deux, qui annonce ses frais de déplacement en clair dans la proposition commerciale.",
  },
  {
    q: "Comment vérifier les références d'une agence IA ?",
    a: "Demandez deux clients joignables et appelez-les : périmètre réel de la mission, tenue des délais, autonomie des équipes après le départ de l'agence. Croisez avec les avis publics et l'ancienneté de l'entreprise au registre du commerce. Pour l'activité de formation, vérifiez la certification Qualiopi et le numéro de déclaration d'activité sur la liste publique des organismes de formation.",
  },
  {
    q: 'Comment faire un comparatif des agences IA ?',
    a: "Un comparatif d'agences IA utile ne se résume pas à un tableau de prix. La méthode fiable tient en trois temps : identifier d'abord votre besoin dominant pour cibler la bonne famille d'acteurs, présélectionner trois prestataires de ce profil, puis les noter sur les huit critères vérifiables de ce guide (spécialisation, références joignables, transfert de compétence, indépendance, méthode de cadrage, transparence tarifaire, conformité, proximité). Posez à chacun les dix mêmes questions et demandez les réponses par écrit : la comparaison devient objective et reproductible, là où un classement en ligne vieillit en quelques mois.",
  },
  {
    q: 'Quelles sont les agences IA recommandées en France en 2026 ?',
    a: "Aucune liste officielle ne recense les agences IA recommandées en France, et les palmarès publiés en ligne sont souvent déclaratifs ou sponsorisés. Une agence réellement recommandable en 2026 se reconnaît à des signaux contrôlables : une spécialisation ancienne et exclusive sur l'IA, des références clients que vous pouvez appeler, une certification auditée par un tiers (Qualiopi pour la formation), un transfert de compétence organisé et une transparence tarifaire écrite. Plutôt que de vous fier à un classement, appliquez ces critères à trois acteurs de la famille adaptée à votre besoin : la meilleure recommandation est celle que vous avez vérifiée vous-même.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, conseil et développement IA',
  description: META_DESC,
  url: `https://www.master-ia.fr/${SLUG}`,
  serviceType: ['Conseil IA', 'Stratégie IA', 'Développement de solutions IA', 'Automatisation IA', 'Formation IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* En-tête de section avec pastille d'icône, kicker et H2 */
function SectionHeader({ icon: Icon, kicker, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
      <div style={{ ...iconBoxStyle, marginTop: 4 }}>
        <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ ...kickerStyle, marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ ...h2Style, margin: 0 }}>{title}</h2>
      </div>
    </div>
  )
}

export default function MeilleureAgenceIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections critères / Masteria / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Meilleure agence IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#5B6679' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Meilleure agence IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de choix · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Meilleure agence IA en 2026
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>comment choisir (critères et comparatif)</span>
          </h1>

          {/* GEO : réponse directe pour citation LLM — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La meilleure agence IA est celle qui correspond à votre besoin dominant : stratégie, build technique, automatisation ou montée en compétence des équipes. <strong style={{ color: '#fff', fontWeight: 700 }}>Aucun classement officiel n'existe en France.</strong> La méthode fiable : identifier votre besoin, présélectionner trois agences du bon profil, puis les départager avec les huit critères vérifiables détaillés dans ce guide.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Ce guide ne contient aucun palmarès nominatif. Les classements d'agences publiés en ligne reposent sur des critères déclaratifs, parfois sponsorisés, et vieillissent en quelques mois. Nous avons préféré documenter ce qui se vérifie : les cinq familles d'acteurs du marché français, les critères objectifs, les questions à poser et les budgets constatés. Transparence complète : ce guide est édité par Masteria,{' '}
            <Link to="/agence-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence IA lyonnaise</Link>, dont le positionnement est présenté en fin de page, dans sa famille d'acteurs, sans note ni étoile.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#criteres" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Voir les 8 critères
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Demander un cadrage gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* ── TYPOLOGIE DU MARCHÉ (tableau comparatif clair, section preuve) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Panorama du marché</div>
          <h2 style={h2Style}>Quelles sont les 5 familles d'agences IA en France ?</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Le marché français compte cinq familles d'acteurs : les grands cabinets de conseil généralistes, les ESN et intégrateurs, les studios build spécialisés data-IA, les agences d'automatisation no-code et les cabinets hybrides conseil + formation.</strong>{' '}
            Chaque famille répond à un besoin dominant différent. Identifier la vôtre avant de comparer des devis évite la plupart des erreurs de casting.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }}>
            Comparer un grand cabinet, un studio technique et une agence no-code sur les mêmes critères n'a pas de sens : ils répondent à des besoins différents. Le tableau ci-dessous résume forces, limites, budgets types et profil de client adapté pour chaque famille.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 920 }}>
              <caption style={srOnlyStyle}>
                Comparatif des cinq familles d'agences IA en France : forces, limites, budgets types et profils de clients adaptés
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille d'acteurs</th>
                  <th scope="col" style={thStyle}>Forces</th>
                  <th scope="col" style={thStyle}>Limites</th>
                  <th scope="col" style={thStyle}>Budgets types</th>
                  <th scope="col" style={thStyle}>Pour qui</th>
                </tr>
              </thead>
              <tbody>
                {FAMILIES.map((f, i) => {
                  const td = { padding: '18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.65, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={f.name} style={f.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: f.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 190 }}>
                        {f.name}
                        {f.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Famille de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, minWidth: 200 }}>{f.forces}</td>
                      <td style={{ ...td, minWidth: 200 }}>{f.limites}</td>
                      <td style={{ ...td, color: f.highlight ? c : '#374151', fontWeight: f.highlight ? 700 : 400, minWidth: 160 }}>{f.budget}</td>
                      <td style={{ ...td, minWidth: 180 }}>{f.pourQui}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 780 }}>
            Les approches d'automatisation évoquées dans ces familles recouvrent des réalités très différentes. Deux ressources complètent ce panorama : notre guide{' '}
            <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation IA</Link>{' '}
            (cas d'usage, outils, méthode) et la page{' '}
            <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>{' '}
            (assistants autonomes, conditions de fiabilité, gouvernance).
          </p>
        </div>
      </section>

      {/* ── LES 8 CRITÈRES (éditorial asymétrique) ── */}
      <section id="criteres" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Méthode d'évaluation</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>À quoi reconnaît-on la meilleure agence IA pour votre projet ?</h2>
              <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 18px', maxWidth: 'none' }}>
                <strong>Huit critères vérifiables départagent les agences IA : spécialisation réelle, références joignables, transfert de compétence, indépendance vis-à-vis des éditeurs, méthode de cadrage, transparence tarifaire, conformité RGPD et AI Act, proximité.</strong>{' '}
                Tous se contrôlent en un rendez-vous et deux appels de référence, sans expertise technique préalable.
              </p>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Une agence sérieuse répond sans détour à chacun de ces points. Notez les réponses : la grille remplie vaut tous les classements.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {CRITERIA.map(cr => (
                  <div key={cr.n} style={cardStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 32, height: 32, background: cLight, color: c, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                        {cr.n}
                      </div>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{cr.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{cr.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 10 QUESTIONS (liste-rail à filet, famille distincte) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader icon={ListChecks} kicker="Grille d'entretien" title="Quelles questions poser à une agence IA avant de signer ?" />
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Dix questions posées en premier rendez-vous suffisent à évaluer une agence IA : spécialisation, références, équipe réellement staffée, choix d'outils, méthode de priorisation, livrables, transfert de compétence, conformité, coût total et fin de mission.</strong>{' '}
            Demandez les réponses par écrit : la comparaison entre deux prestataires devient immédiate.
          </p>
          <p style={mutedStyle}>
            Posez-les telles quelles, dans cet ordre. Les indications sous chaque question précisent ce que la réponse révèle.
          </p>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, borderTop: `3px solid ${c}`, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
            {QUESTIONS.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '18px 24px', borderBottom: i < QUESTIONS.length - 1 ? '1px solid #E5E7EB' : 'none' }}>
                <span style={{ width: 30, height: 30, background: cLight, color: c, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 13.5, flexShrink: 0, marginTop: 2 }}>
                  {i + 1}
                </span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A', margin: '0 0 4px', fontFamily: 'Nunito, sans-serif' }}>{item.q}</p>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.hint}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── LES 5 SIGNAUX D'ALARME (cartes à filet latéral) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={AlertTriangle} kicker="Vigilance" title="Quels signaux d'alarme avant de signer avec une agence IA ?" />
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Cinq signaux doivent alerter : un ROI précis promis avant tout diagnostic, un devis envoyé sans phase de découverte, le flou sur la propriété des livrables, des références invérifiables et une dépendance organisée aux outils du prestataire.</strong>{' '}
            Un seul de ces signaux justifie de creuser. Deux justifient de passer au prestataire suivant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 36 }}>
            {RED_FLAGS.map(flag => (
              <div key={flag.title} style={{ ...cardStyle, borderLeft: `4px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <AlertTriangle size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{flag.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{flag.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE BUDGETS (ancre sombre — tableau, pivot milieu de page) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Budgets 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte une agence IA en 2026 ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une agence IA facture en 2026 de 5 000 à 30 000 € un audit, de 15 000 à 80 000 € une stratégie de direction, de 5 000 à 50 000 € l'automatisation d'un périmètre de processus et de 1 000 à 2 500 € la journée de formation intra-entreprise.</strong>{' '}
            Seule la formation délivrée par un organisme certifié Qualiopi ouvre droit à un financement OPCO.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 740 }}>
            Ordres de grandeur larges constatés sur le marché français. Ils varient selon la taille de l'entreprise, le secteur et le niveau d'exigence. Pour estimer ce que coûte une mission précise, notre guide des{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>budgets et prix d'un projet IA</Link>{' '}
            détaille les postes de coût et les méthodes de chiffrage.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>
                Budgets constatés en 2026 par type de mission d'agence IA sur le marché français
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>Type de mission</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>Budget constaté</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>Précisions</th>
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => (
                  <tr key={b.mission}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>
                      {b.mission}
                    </th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{b.range}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>Précision utile pour votre plan de financement :</strong> en France, seules les actions de formation délivrées par un organisme certifié Qualiopi sont finançables par les OPCO. Le conseil pur et le développement ne le sont pas. Un prestataire qui promet une prise en charge OPCO sur du conseil mérite une vérification attentive.
            </p>
          </div>
        </div>
      </section>

      {/* ── OÙ SE SITUE MASTERIA (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Transparence éditeur</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Où se situe Masteria dans ce paysage ?</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Famille : cabinet hybride conseil + formation
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Votre question porte sur les modèles eux-mêmes (ChatGPT, Claude, Gemini, Mistral) ? Consultez notre comparatif{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA</Link>.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Masteria a été fondée à Lyon en 2022 par Mathias Nizan et combine trois activités : le{' '}
                  <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>conseil en stratégie IA</Link>,{' '}
                  l'<Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation des processus</Link>{' '}
                  et la <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>formation des équipes</Link>, certifiée Qualiopi (NDA 84 69 23218 69). Plus de 1 500 professionnels formés, 98 % de satisfaction mesurée. Les interventions couvrent la France, la Suisse et la Belgique, en présentiel et en distanciel.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Chaque mission suit la même discipline de cabinet : un cadrage initial, des règles de gouvernance écrites (outils autorisés, traitement des données, validation humaine) et une trajectoire d'autonomie pour les équipes, documentée jusqu'à la passation.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  Ce profil convient aux PME, aux ETI et aux directions métier qui veulent des résultats mesurables et des équipes autonomes. Pour un développement logiciel lourd ou un programme de transformation mondial, d'autres familles de ce guide seront plus adaptées : nous vous le dirons dès le premier échange. La présentation complète de l'agence se trouve sur la page{' '}
                  <Link to="/agence-ia" style={{ color: c, fontWeight: 600 }}>agence IA à Lyon</Link>. Pour situer votre besoin avant d'engager une comparaison, notre{' '}
                  <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA gratuit</Link> dégage en quelques minutes la famille d'acteurs et les premiers cas d'usage adaptés à votre contexte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur le choix d'une agence IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Un avis honnête sur votre besoin</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Besoin d'un avis sur votre situation ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre besoin en quelques lignes. Lors d'un échange de cadrage gratuit, nous vous dirons si notre profil correspond, et vers quelle famille d'acteurs vous orienter dans le cas contraire.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange gratuit et sans engagement · Réponse sous 24 h · Certifié Qualiopi
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
