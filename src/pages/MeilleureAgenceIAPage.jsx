import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, BadgeCheck, ListChecks, Scale, Wallet } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

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
const H1 = 'Meilleure agence IA en 2026 : comment choisir (critères et comparatif)'

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
const tdStyle = isLast => ({ padding: '18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.65, borderBottom: isLast ? 'none' : '1px solid #E5E7EB' })
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
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
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

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 6vw, 64px) 24px clamp(64px, 8vw, 88px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#6B7280' }}>Agence IA</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Meilleure agence IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Scale size={16} strokeWidth={2.2} aria-hidden="true" />
              Guide de choix · 2026
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Sans classement sponsorisé
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
            <strong>
              La meilleure agence IA est celle qui correspond à votre besoin dominant : stratégie, build technique, automatisation ou montée en compétence des équipes. Aucun classement officiel n'existe en France. La méthode fiable : identifier votre besoin, présélectionner trois agences du bon profil, puis les départager avec les huit critères vérifiables détaillés dans ce guide.
            </strong>
          </p>

          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            Ce guide ne contient aucun palmarès nominatif. Les classements d'agences publiés en ligne reposent sur des critères déclaratifs, parfois sponsorisés, et vieillissent en quelques mois. Nous avons préféré documenter ce qui se vérifie : les cinq familles d'acteurs du marché français, les critères objectifs, les questions à poser et les budgets constatés. Transparence complète : ce guide est édité par Masteria,{' '}
            <Link to="/agence-ia" style={{ color: c, fontWeight: 600 }}>agence IA lyonnaise</Link>, dont le positionnement est présenté en fin de page, dans sa famille d'acteurs, sans note ni étoile.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#criteres" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Voir les 8 critères
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Demander un cadrage gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* ── TYPOLOGIE DU MARCHÉ (tableau comparatif) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Panorama du marché</div>
          <h2 style={h2Style}>Quelles sont les 5 familles d'agences IA en France ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Le marché français compte cinq familles d'acteurs : les grands cabinets de conseil généralistes, les ESN et intégrateurs, les studios build spécialisés data-IA, les agences d'automatisation no-code et les cabinets hybrides conseil + formation.</strong>{' '}
            Chaque famille répond à un besoin dominant différent. Identifier la vôtre avant de comparer des devis évite la plupart des erreurs de casting.
          </p>
          <p style={mutedStyle}>
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
                  const isLast = i === FAMILIES.length - 1
                  return (
                    <tr key={f.name}>
                      <th scope="row" style={{ ...tdStyle(isLast), fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#0A0A0A', textAlign: 'left', minWidth: 190 }}>
                        {f.name}
                        {f.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: cLight, color: c, borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Famille de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...tdStyle(isLast), minWidth: 200 }}>{f.forces}</td>
                      <td style={{ ...tdStyle(isLast), minWidth: 200 }}>{f.limites}</td>
                      <td style={{ ...tdStyle(isLast), minWidth: 160 }}>{f.budget}</td>
                      <td style={{ ...tdStyle(isLast), minWidth: 180 }}>{f.pourQui}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 780 }}>
            Les approches d'automatisation évoquées dans ces familles recouvrent des réalités très différentes. Deux ressources complètent ce panorama : notre guide{' '}
            <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation IA</Link>{' '}
            (cas d'usage, outils, méthode) et la page{' '}
            <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>{' '}
            (assistants autonomes, conditions de fiabilité, gouvernance).
          </p>
        </div>
      </section>

      {/* ── LES 8 CRITÈRES ── */}
      <section id="criteres" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Méthode d'évaluation</div>
          <h2 style={h2Style}>À quoi reconnaît-on la meilleure agence IA pour votre projet ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Huit critères vérifiables départagent les agences IA : spécialisation réelle, références joignables, transfert de compétence, indépendance vis-à-vis des éditeurs, méthode de cadrage, transparence tarifaire, conformité RGPD et AI Act, proximité.</strong>{' '}
            Tous se contrôlent en un rendez-vous et deux appels de référence, sans expertise technique préalable.
          </p>
          <p style={mutedStyle}>
            Une agence sérieuse répond sans détour à chacun de ces points. Notez les réponses : la grille remplie vaut tous les classements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
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
      </section>

      {/* ── LES 10 QUESTIONS ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader icon={ListChecks} kicker="Grille d'entretien" title="Quelles questions poser à une agence IA avant de signer ?" />
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Dix questions posées en premier rendez-vous suffisent à évaluer une agence IA : spécialisation, références, équipe réellement staffée, choix d'outils, méthode de priorisation, livrables, transfert de compétence, conformité, coût total et fin de mission.</strong>{' '}
            Demandez les réponses par écrit : la comparaison entre deux prestataires devient immédiate.
          </p>
          <p style={mutedStyle}>
            Posez-les telles quelles, dans cet ordre. Les indications sous chaque question précisent ce que la réponse révèle.
          </p>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
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

      {/* ── LES 5 SIGNAUX D'ALARME ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={AlertTriangle} kicker="Vigilance" title="Quels signaux d'alarme avant de signer avec une agence IA ?" />
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Cinq signaux doivent alerter : un ROI précis promis avant tout diagnostic, un devis envoyé sans phase de découverte, le flou sur la propriété des livrables, des références invérifiables et une dépendance organisée aux outils du prestataire.</strong>{' '}
            Un seul de ces signaux justifie de creuser. Deux justifient de passer au prestataire suivant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 36 }}>
            {RED_FLAGS.map(flag => (
              <div key={flag.title} style={cardStyle}>
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

      {/* ── GRILLE BUDGETS (tableau) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={Wallet} kicker="Budgets 2026" title="Combien coûte une agence IA en 2026 ?" />
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Une agence IA facture en 2026 de 5 000 à 30 000 € un audit, de 15 000 à 80 000 € une stratégie de direction, de 5 000 à 50 000 € l'automatisation d'un périmètre de processus et de 1 000 à 2 500 € la journée de formation intra-entreprise.</strong>{' '}
            Seule la formation délivrée par un organisme certifié Qualiopi ouvre droit à un financement OPCO.
          </p>
          <p style={mutedStyle}>
            Ordres de grandeur larges constatés sur le marché français. Ils varient selon la taille de l'entreprise, le secteur et le niveau d'exigence.
          </p>

          <div style={{ ...tableWrapStyle, marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>
                Budgets constatés en 2026 par type de mission d'agence IA sur le marché français
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Type de mission</th>
                  <th scope="col" style={thStyle}>Budget constaté</th>
                  <th scope="col" style={thStyle}>Précisions</th>
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => {
                  const isLast = i === BUDGETS.length - 1
                  return (
                    <tr key={b.mission}>
                      <th scope="row" style={{ ...tdStyle(isLast), fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#0A0A0A', textAlign: 'left', minWidth: 220 }}>
                        {b.mission}
                      </th>
                      <td style={{ ...tdStyle(isLast), fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: c, whiteSpace: 'nowrap' }}>{b.range}</td>
                      <td style={{ ...tdStyle(isLast), minWidth: 220 }}>{b.note}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div style={{ background: cLight, borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#1d4ed8', lineHeight: 1.7, margin: 0 }}>
              <strong>Précision utile pour votre plan de financement :</strong> en France, seules les actions de formation délivrées par un organisme certifié Qualiopi sont finançables par les OPCO. Le conseil pur et le développement ne le sont pas. Un prestataire qui promet une prise en charge OPCO sur du conseil mérite une vérification attentive.
            </p>
          </div>
        </div>
      </section>

      {/* ── OÙ SE SITUE MASTERIA ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Transparence éditeur</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>Où se situe Masteria dans ce paysage ?</h2>
          <div style={{ ...cardStyle, padding: 32 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
              Famille : cabinet hybride conseil + formation
            </div>
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
          <p style={{ fontSize: 14, color: '#6B7280', marginTop: 24, lineHeight: 1.7 }}>
            Votre question porte sur les modèles eux-mêmes (ChatGPT, Claude, Gemini, Mistral) ? Consultez notre comparatif{' '}
            <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Questions fréquentes sur le choix d'une agence IA</h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE (bandeau sombre) ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Un avis honnête sur votre besoin</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Besoin d'un avis sur votre situation ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Décrivez votre besoin en quelques lignes. Lors d'un échange de cadrage gratuit, nous vous dirons si notre profil correspond, et vers quelle famille d'acteurs vous orienter dans le cas contraire.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Demander un cadrage gratuit
            <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
            Échange gratuit et sans engagement · Réponse sous 24 h · Certifié Qualiopi
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
