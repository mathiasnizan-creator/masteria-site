import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Store, ShoppingBag, Tags, MessageSquareHeart, PackageSearch, Megaphone as Mega, LayoutGrid,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
  ShieldCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA commerce » (slug /formation-ia-commerce).
 * CRÉATION 2026-08-10. Cible « formation ia commerce » (110/mois, KD 14,
 * intention C — Semrush 2026-08-10), lue comme COMMERCE au sens retail /
 * point de vente / e-commerce (validé par Mathias le 2026-08-10), et ses
 * variantes « formation ia e-commerce », « formation ia retail », « ia magasin ».
 *
 * ANTI-CANNIBALISATION : /formation-ia-commercial = la VENTE B2B (équipes
 * commerciales, prospection, propositions) ; /ia-retail-ecommerce = CONSEIL
 * et dev pour le secteur ; /formation-ia-service-client = le service client
 * (métier voisin) ; CETTE page = la formation des équipes du COMMERCE : réseaux
 * de magasins, enseignes, e-commerçants, category managers, marketing retail.
 * Le hero et une FAQ désambiguïsent explicitement commerce vs commercial.
 *
 * INTÉGRITÉ : pas de chiffre de conversion ou de CA inventé ; RGPD sur les
 * données clients et fidélité ; pratiques commerciales loyales (avis,
 * prix, promotions) ; multi-outils. Programme 2 jours Matin/Après-midi.
 */

const SLUG = 'formation-ia-commerce'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA commerce et e-commerce : fiches, magasin, client | Masteria"
const META_DESC = "Formation IA commerce sur vos vrais produits et magasins : fiches produits et catalogue, marketing point de vente, service et avis clients, merchandising, achats et stocks, e-commerce. ChatGPT, Copilot, Claude. Qualiopi, OPCO."
const KEYWORDS = "formation ia commerce, formation ia e-commerce, formation ia retail, formation intelligence artificielle commerce, formation ia magasin, formation ia distribution, formation ia enseigne"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Sparkles, label: 'ChatGPT · Copilot · Claude · Gemini · Mistral' },
  { icon: Target, label: "Sur vos produits, vos magasins et vos clients" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour possible pour un périmètre resserré (e-commerce seul, ou point de vente seul)" },
  { label: 'Pour qui', value: "Enseignes et réseaux de magasins, e-commerçants, category managers, marketing retail, responsables de magasin, équipes siège du commerce et de la distribution" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, articulés avec votre PIM, votre CMS e-commerce et vos outils clients" },
  { label: 'Méthode', value: "Chaque atelier travaille sur vos vrais produits, fiches, campagnes, avis clients et données de vente, jamais sur des exemples génériques" },
  { label: 'Livrables', value: "Bibliothèque de prompts commerce, gabarits (fiche produit, réponse avis, brief promo, brief merch), cadre RGPD données clients et pratiques loyales" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: Tags,
    title: 'Fiches produits et catalogue',
    desc: "Rédiger et enrichir des fiches produits complètes à votre ton (bénéfices, caractéristiques, usages, FAQ), les décliner par canal et par langue, harmoniser un catalogue de milliers de références à partir de votre PIM. Le chantier sans fin du commerce, traité à l'échelle, avec la relecture qui garantit la justesse des caractéristiques.",
  },
  {
    icon: Mega,
    title: 'Marketing point de vente et e-commerce',
    desc: "Opérations commerciales, PLV et affichage, newsletters et SMS, pages de campagne, contenus réseaux sociaux locaux pour les magasins : l'IA produit les premiers jets et les déclinaisons, dans le respect des règles sur les prix et les promotions. La formation apprend à cadrer, produire et vérifier.",
  },
  {
    icon: MessageSquareHeart,
    title: 'Service client et avis',
    desc: "Réponses aux avis clients (positifs et négatifs) à votre ton, réponses aux questions produits, gestion des réclamations, FAQ vivante : la relation qui fait revenir, personnalisée même à fort volume. Avec la règle absolue : jamais de faux avis, jamais de réponse envoyée sans lecture humaine sur un cas sensible.",
  },
  {
    icon: LayoutGrid,
    title: 'Merchandising et expérience magasin',
    desc: "Briefs merch et vitrines, guides d'implantation, scripts de vente et de démonstration, fiches argumentaires pour les équipes de vente, supports de formation interne. L'IA aide le siège à outiller les magasins vite et de façon homogène.",
  },
  {
    icon: PackageSearch,
    title: 'Achats, stocks et analyse des ventes',
    desc: "Lecture d'un export de ventes, commentaire des performances par catégorie ou par magasin, préparation d'une revue de gamme, hypothèses de réassort à challenger, synthèse d'un rapport fournisseur. Les chiffres viennent de vos outils ; l'IA les commente et met en récit, avec la limite honnête sur les gros tableaux.",
  },
  {
    icon: ShoppingBag,
    title: 'Le e-commerce au quotidien',
    desc: "Fiches optimisées pour le référencement, catégories et navigation, emailing et automation, gestion des questions et retours, veille concurrentielle sur les prix et les assortiments : les usages propres à la vente en ligne, du site aux marketplaces.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Un catalogue enfin complet et homogène',
    desc: "Les fiches incomplètes ou disparates coûtent des ventes et du référencement. Traitées à l'échelle avec l'IA et relues, elles deviennent complètes, justes et à votre ton, sur des milliers de références.",
  },
  {
    title: 'Des opérations commerciales lancées plus vite',
    desc: "PLV, newsletters, pages de campagne, contenus locaux : ce qui prenait des jours entre le siège et les magasins se prépare en heures, avec les règles sur les prix et promotions vérifiées.",
  },
  {
    title: 'Une relation client personnalisée à fort volume',
    desc: "Chaque avis et chaque question reçoit une réponse rapide et personnelle. La réactivité et le ton juste, même quand le volume explose, sans jamais tricher sur les avis.",
  },
  {
    title: 'Des magasins outillés de façon homogène',
    desc: "Briefs merch, argumentaires, scripts, supports internes : le siège équipe le réseau vite et pareil partout, et les équipes de vente gagnent en assurance.",
  },
  {
    title: 'Des données de vente qui parlent',
    desc: "Le commentaire de performance, la revue de gamme, la synthèse fournisseur se rédigent à partir de vos exports. La décision se prend sur des chiffres lus et expliqués.",
  },
  {
    title: 'Un cadre qui protège l\'enseigne',
    desc: "RGPD sur les données clients et de fidélité, pratiques commerciales loyales (avis, prix, promotions), droits sur les contenus et images : la formation pose le cadre qui rend l'usage défendable.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Fondamentaux, catalogue, marketing et relation client",
    matin: [
      "Comprendre ce que les modèles font et ne font pas dans le commerce : capacités, limites, ce qui engage l'enseigne (prix, promotions, avis, données clients)",
      "Panorama des outils : ChatGPT, Copilot, Claude, Gemini, Mistral ; articulation avec votre PIM, votre CMS e-commerce et vos outils clients",
      "La méthode de la demande efficace : contexte, rôle, format, exemples, itération",
      "Atelier : encoder votre ton de marque, vos gabarits de fiche et vos règles (mentions, prix, promotions) dans des instructions réutilisables",
    ],
    apresmidi: [
      "Atelier fiches produits : rédiger, enrichir et décliner des fiches à partir de vos vrais produits ; harmoniser un lot de catalogue",
      "Atelier marketing : opération commerciale, newsletter, contenus locaux pour les magasins, avec les règles vérifiées",
      "Atelier avis et service client : répondre aux avis à votre ton, traiter une réclamation, construire la FAQ",
      "Cadre d'usage : RGPD données clients et fidélité, pratiques loyales (jamais de faux avis), droits sur les contenus, ce qu'on ne confie jamais à un outil grand public",
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Magasin, achats et analyse, e-commerce, industrialisation",
    matin: [
      "Atelier merchandising et magasin : brief merch, guide d'implantation, argumentaire et script de vente, support de formation interne",
      "Atelier achats et analyse : commenter un export de ventes par catégorie ou magasin, préparer une revue de gamme, hypothèses de réassort à challenger",
      "Atelier e-commerce : fiches optimisées pour le référencement, catégories, emailing et automation, questions et retours, veille concurrentielle",
      "Cas siège / magasin : ce que le siège produit pour le réseau, ce que le magasin adapte localement",
    ],
    apresmidi: [
      "Industrialiser : la bibliothèque de prompts de l'enseigne, les gabarits outillés, les assistants ou GPTs personnalisés, le déploiement par vagues de magasins",
      "Mesurer : complétude du catalogue, délais de mise en ligne, réactivité aux avis, temps de production ; ce qu'on suit et comment",
      "Votre plan d'action : les trois usages à installer dans le mois, qui les porte, comment on mesure",
      "Évaluation des acquis et remise des livrables (prompts, gabarits, cadre d'usage)",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Store, title: 'Enseignes et réseaux de magasins', desc: "Le siège qui outille des dizaines ou des centaines de points de vente : catalogue, opérations, merch, argumentaires, formation interne. La formation se déploie par vagues, avec des livrables communs au réseau." },
  { icon: ShoppingBag, title: 'E-commerçants et pure players', desc: "Fiches, référencement, emailing, avis, retours, veille : les usages qui font la performance d'une boutique en ligne, du site aux marketplaces. Le jour 2 est construit pour vous." },
  { icon: Tags, title: 'Category managers et marketing retail', desc: "Catalogue, revues de gamme, opérations commerciales, analyse des ventes : les usages du siège qui pilotent l'offre et l'animation commerciale." },
  { icon: Users, title: 'Responsables de magasin et équipes de vente', desc: "Contenus locaux, réponses aux avis du magasin, argumentaires, animation : ce que le point de vente peut faire lui-même, dans le cadre fixé par l'enseigne." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA commerce ?",
    a: "À intégrer l'intelligence artificielle générative dans le quotidien du commerce et de la distribution, sur vos vrais produits et magasins : rédiger et harmoniser des fiches produits à l'échelle, préparer les opérations commerciales et le marketing local des magasins, répondre aux avis et au service client à votre ton, outiller le merchandising et les équipes de vente, commenter les données de vente et préparer les revues de gamme, gérer le e-commerce au quotidien. Et à poser le cadre du secteur : RGPD sur les données clients, pratiques loyales sur les avis et les prix, droits sur les contenus.",
  },
  {
    q: "Formation IA commerce ou formation IA commercial : quelle différence ?",
    a: "Le mot est proche, le métier est différent. Cette formation « commerce » s'adresse aux équipes du commerce et de la distribution : enseignes, magasins, e-commerçants, category managers, marketing retail. Elle traite le catalogue, le point de vente, la relation client à fort volume, le e-commerce. Notre formation « IA commercial » s'adresse aux équipes de vente B2B : prospection, préparation de rendez-vous, propositions commerciales, CRM. Si vous vendez à des professionnels avec des commerciaux, c'est celle-là ; si vous vendez à des consommateurs en magasin ou en ligne, vous êtes au bon endroit.",
  },
  {
    q: "L'IA peut-elle rédiger nos fiches produits à l'échelle sans erreur ?",
    a: "À l'échelle, oui ; sans erreur, seulement avec la méthode. L'IA rédige des fiches complètes et à votre ton à partir des données de votre PIM, et les décline par canal ; le risque est qu'elle invente une caractéristique ou une compatibilité quand la donnée manque. La formation apprend à cadrer : partir de données structurées, encoder les règles (ce qu'on affirme, ce qu'on n'affirme pas), relire par échantillon et systématiquement sur les caractéristiques techniques. Le catalogue devient complet et homogène ; la justesse reste sous contrôle humain.",
  },
  {
    q: "Peut-on utiliser l'IA pour répondre aux avis clients ?",
    a: "Oui, et c'est l'un des usages les plus rentables : chaque avis reçoit une réponse rapide, personnelle et à votre ton, positif comme négatif. Deux règles absolues que la formation pose : jamais de faux avis ni d'avis générés (c'est une pratique commerciale trompeuse, sanctionnée), et jamais de réponse envoyée sans lecture humaine sur un cas sensible (réclamation grave, litige, données personnelles). L'IA rédige, un humain valide ; sur les cas simples et positifs, la validation est rapide.",
  },
  {
    q: "Peut-on confier à l'IA nos données clients et de fidélité ?",
    a: "Sous conditions, et la formation les pose. Les données clients et de fidélité sont des données personnelles : anonymisation ou agrégation avant tout traitement, offres entreprise uniquement (elles n'entraînent pas leurs modèles sur vos données et offrent un cadre contractuel), jamais de version gratuite. Les données de vente agrégées par catégorie ou par magasin se commentent sans difficulté dans ce cadre. Nous formalisons ensemble ce qu'on confie à quel outil, comment on anonymise, ce qu'on ne confie jamais. C'est un livrable.",
  },
  {
    q: "Comment déployer la formation sur un réseau de magasins ?",
    a: "Par vagues, avec le siège d'abord. La première session forme les équipes siège (catalogue, marketing, category management) et produit les livrables communs : bibliothèque de prompts de l'enseigne, gabarits, cadre d'usage. Les vagues suivantes forment les responsables de magasin et les équipes de vente sur ce que le point de vente fait localement, dans le cadre fixé. Le distanciel couvre bien les vagues magasins ; les lancements gagnent à se faire sur site. Ce fonctionnement lisse le budget et homogénéise les usages.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre enseigne utilise. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral, articulés avec votre PIM, votre CMS e-commerce, vos outils d'emailing et de service client. Si un outil est déployé au niveau du groupe, la formation s'y concentre ; sinon la première demi-journée compare sur vos cas. Les fondamentaux valent partout.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est de deux jours (14 heures) en intra, en présentiel ou à distance, pour un groupe de 4 à 10 personnes. Une version d'une journée existe pour un périmètre resserré : le e-commerce seul, ou le point de vente seul. Pour un réseau, le déploiement se fait par vagues (siège, puis magasins). Un accompagnement individuel est possible pour un dirigeant d'enseigne ou un e-commerçant. Les journées pleines alternent apports courts et ateliers sur vos produits et campagnes réels.",
  },
  {
    q: "Combien coûte une formation IA commerce, et est-elle finançable ?",
    a: "Le tarif intra est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : deux jours représentent 3 960 € HT par groupe. Certifiée Qualiopi, la formation est finançable par votre OPCO au titre du plan de développement des compétences (OPCOMMERCE pour la plupart des enseignes, selon votre convention collective) ; nous préparons le dossier avec vous et notre outil Quel OPCO ? identifie votre opérateur. La formation n'est pas éligible au CPF. Devis sous 24 heures.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA commerce et e-commerce — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée au commerce et à la distribution, sur les produits, magasins et clients réels des participants : fiches produits et catalogue, marketing point de vente et e-commerce, service client et avis, merchandising, achats, stocks et analyse des ventes, e-commerce, cadre RGPD et pratiques loyales. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 2 jours en intra (1 jour possible), présentiel ou distanciel, déploiement par vagues pour les réseaux. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Rédiger, enrichir et harmoniser des fiches produits à l'échelle avec l'IA",
    "Préparer les opérations commerciales et le marketing local des magasins",
    "Répondre aux avis et au service client à son ton, dans un cadre loyal",
    "Outiller le merchandising et les équipes de vente depuis le siège",
    "Commenter les données de vente et préparer une revue de gamme avec l'IA",
  ],
  about: 'Intelligence artificielle générative appliquée au commerce, à la distribution et au e-commerce',
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: 'Aucun prérequis technique. Pratique d\'un métier du commerce ou de la distribution.',
  audience: 'Enseignes, réseaux de magasins, e-commerçants, category managers, marketing retail, responsables de magasin',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation IA commerce Masteria (2 jours)",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((j, ji) => [
    { '@type': 'ListItem', position: ji * 2 + 1, name: `${j.jour} · Matin — ${j.titre}`, description: j.matin.join(' ; ') },
    { '@type': 'ListItem', position: ji * 2 + 2, name: `${j.jour} · Après-midi — ${j.titre}`, description: j.apresmidi.join(' ; ') },
  ]),
}

/* Article : auteur + dates (E-E-A-T + fraîcheur GEO), entités liées. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-ia-commerce#article',
  headline: "Formation IA commerce et e-commerce : l'IA générative du catalogue au client, sur vos vrais produits",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-commerce#webpage' },
  about: [
    { '@type': 'Thing', name: 'Commerce de détail', sameAs: 'https://fr.wikipedia.org/wiki/Commerce_de_d%C3%A9tail' },
    { '@type': 'Thing', name: 'Commerce électronique', sameAs: 'https://fr.wikipedia.org/wiki/Commerce_%C3%A9lectronique' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
        aria-expanded={open}
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

function DayBlock({ jour, titre, matin, apresmidi, isDesktop }) {
  const col = { flex: 1, minWidth: 0 }
  const list = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }
  const li = { fontSize: 14.5, color: '#374151', lineHeight: 1.65, display: 'flex', gap: 9, alignItems: 'flex-start' }
  return (
    <div style={{ ...cardStyle, padding: 'clamp(22px, 3vw, 30px)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{jour}</span>
        <h3 style={{ ...h3Style, fontSize: 18 }}>{titre}</h3>
      </div>
      <div style={{ display: 'flex', gap: isDesktop ? 28 : 20, flexDirection: isDesktop ? 'row' : 'column' }}>
        <div style={col}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>Matin</div>
          <ul style={list}>{matin.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
        <div style={col}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>Après-midi</div>
          <ul style={list}>{apresmidi.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}

export default function FormationIACommercePage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: "Formation IA commerce", slug: SLUG },
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
        courseData={COURSE_DATA}
        datePublished="2026-08-10"
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
          { name: 'Qualiopi, marque de certification qualité des prestataires de formation — travail-emploi.gouv.fr', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
        ]}
        extraJsonLd={[programmeJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA commerce</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Store size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · Commerce & e-commerce
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA commerce et e-commerce :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>l'IA générative du catalogue au client, sur vos vrais produits</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA commerce de Masteria apprend aux équipes du commerce et de la distribution, sur leurs vrais produits et magasins, à mettre l'intelligence artificielle générative au service du métier : <strong style={{ color: '#fff', fontWeight: 700 }}>fiches produits et catalogue, marketing point de vente, service client et avis, merchandising, achats et analyse des ventes, e-commerce</strong>, avec le cadre RGPD et de loyauté commerciale posé noir sur blanc. Deux jours, multi-outils, certifiée Qualiopi et finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Commerce, pas commercial : cette formation s'adresse aux enseignes, aux magasins et aux e-commerçants qui vendent à des consommateurs (pour les équipes de vente B2B, voyez notre formation IA commercial). Le commerce est un métier de volume et de répétition, catalogue, campagnes, avis, où l'IA générative fait gagner le plus, à condition de garder la justesse et la loyauté sous contrôle humain.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le programme
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CE QUE L'IA CHANGE PAR MISSION (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Activité par activité</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que change l'IA dans les métiers du commerce ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche six activités du commerce et de la distribution : les fiches produits et le catalogue, le marketing point de vente et e-commerce, le service client et les avis, le merchandising et l'expérience magasin, les achats et l'analyse des ventes, le e-commerce au quotidien. Dans chacune, elle produit à l'échelle et personnalise ; la justesse des caractéristiques, la loyauté commerciale et les décisions d'assortiment restent aux professionnels.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre activité au cadrage. Pour des solutions IA sur mesure dans le retail (agents, recommandation, automatisations), voyez notre page <Link to="/ia-retail-ecommerce" style={aStyle}>IA pour le retail et le e-commerce</Link>.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {MISSIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES ATOUTS DE L'IA POUR LA FINANCE ── */}
      <section id="atouts" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que vous y gagnez</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les atouts de l'IA générative pour une enseigne ou un e-commerçant
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains : un catalogue enfin complet et homogène, des opérations commerciales lancées plus vite, une relation client personnalisée à fort volume, des magasins outillés de façon homogène depuis le siège, des données de vente qui parlent, et un cadre qui protège l'enseigne sur les données clients, les avis et les prix.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ATOUTS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Un mot d'honnêteté qui rend ces gains durables : l'IA peut inventer une caractéristique produit ou une compatibilité quand la donnée manque. Partez de données structurées, encodez vos règles, relisez par échantillon et systématiquement sur la technique : le reste, elle le fait remarquablement bien.
          </p>
        </div>
      </section>

      {/* ── PROGRAMME 2 JOURS (ancre sombre — pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Programme de la formation IA commerce sur 2 jours
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : les fondamentaux et le cadre du secteur, votre ton de marque et vos gabarits encodés, puis les fiches produits, le marketing et la relation client sur vos vrais produits et campagnes. Jour 2 : le merchandising et le magasin, les achats et l'analyse des ventes, le e-commerce, le partage siège / magasin, puis l'industrialisation avec la bibliothèque de prompts de l'enseigne et votre plan d'action.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le programme s'ajuste à votre activité : un e-commerçant approfondit le jour 2, un réseau de magasins le catalogue, le merch et le déploiement par vagues. En version 1 jour, on prend un périmètre : e-commerce, ou point de vente.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA commerce ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À tous les métiers du commerce et de la distribution : enseignes et réseaux de magasins (le siège d'abord, puis les magasins par vagues), e-commerçants et pure players, category managers et marketing retail, responsables de magasin et équipes de vente. Sans prérequis technique : la pratique du métier suffit. Pour la vente B2B, voyez la formation IA commercial.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, marginTop: 12 }}>
            {PROFILS.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CADRE : RGPD, DROITS, MARQUE (E-E-A-T + réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Le cadre, traité de front</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Données clients, avis, prix et promotions : ce que la formation pose noir sur blanc
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le commerce manipule des données personnelles à grande échelle (clients, fidélité, commandes) et obéit à des règles de loyauté qui engagent l'enseigne : pas de faux avis, information exacte sur les prix et les promotions, mentions obligatoires, droits sur les contenus et les images. La formation formalise avec vous ce qu'on peut confier à quel outil (offres entreprise uniquement pour toute donnée nominative, anonymisation ou agrégation), où s'arrête l'assistance (l'IA rédige et décline ; la justesse des caractéristiques, la validation des avis sensibles et les décisions d'assortiment restent humaines), et les règles encodées dans vos gabarits. Ce cadre est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>. Nous formons des équipes du commerce et de la distribution depuis 2022 : les mêmes questions reviennent, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Jamais de faux avis, jamais d\'avis généré', 'Données clients et fidélité : offres entreprise, anonymisation', 'Prix, promotions, mentions : règles encodées dans les gabarits', 'Caractéristiques produits relues, systématiquement sur la technique'].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIF & FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Tarif et financement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Combien coûte la formation, et comment la financer ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>1 980 € HT par jour de formation en intra-entreprise, pour le groupe (jusqu'à 10 participants), soit 3 960 € HT les deux jours. Certifiée Qualiopi, la formation est finançable par votre OPCO au titre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable avec vos éléments (extrait de catalogue ou PIM, campagnes, avis clients, exports de vente agrégés, outils), l'animation des deux journées en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts commerce, gabarits outillés, cadre d'usage), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>La prise en charge OPCO</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Masteria est certifiée Qualiopi : la formation est éligible au financement OPCO, selon votre branche et votre effectif. Nous fournissons programme, convention et pièces du dossier ; le dépôt se fait avant le début de la formation. Identifiez votre opérateur avec <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> et le détail des dispositifs sur <Link to="/financement-formation-ia" style={aStyle}>financer sa formation IA</Link>. Pas d'éligibilité CPF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA commerce : les questions fréquentes</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour aller plus loin</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Approfondir par outil, ou élargir</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La formation métier compare les outils ; les formations par outil approfondissent celui que votre équipe a retenu.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'IA pour le retail et le e-commerce', href: '/ia-retail-ecommerce', tag: 'Secteur', desc: "Conseil et développement de solutions IA sur mesure pour le commerce : agents, recommandation, automatisations." },
              { label: 'Formation IA commercial (vente B2B)', href: '/formation-ia-commercial', tag: 'Ne pas confondre', desc: "Pour les équipes de vente aux professionnels : prospection, propositions, CRM." },
              { label: 'Formation IA service client', href: '/formation-ia-service-client', tag: 'Métier voisin', desc: "Le service client en profondeur : réclamations, réponses, base de connaissances, qualité." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Métier voisin', desc: "Le marketing dans son ensemble : contenu, campagnes, réseaux sociaux, analyse." },
              { label: 'Formation SEO IA', href: '/formation-ia-seo', tag: 'E-commerce', desc: "Le référencement des fiches et catégories, et le GEO pour être cité par les IA." },
              { label: 'Formation IA achats', href: '/formation-ia-achats', tag: 'Métier voisin', desc: "Sourcing, négociation, analyse fournisseurs : les achats de la distribution avec l'IA." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le cadre d'usage qui protège l'enseigne : ce qu'on confie, comment, à qui." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Réseau', desc: "Quand c'est tout le réseau, siège et magasins, qu'il faut embarquer par vagues." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>En savoir plus<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FounderNote />

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA commerce</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons vos équipes commerce sur vos vrais produits</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre activité (enseigne, réseau, e-commerce), votre équipe, vos outils et vos enjeux du moment. Nous revenons vers vous sous 24 heures avec un programme ajusté, un plan de déploiement si vous êtes en réseau, les dates possibles et le devis, dossier OPCO compris.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Présentiel & distanciel</p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
