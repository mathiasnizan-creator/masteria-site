import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, MapPin, Check, Target, Eye, FileText, Network,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Cpu, Compass, Radar,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « consultant visibilité IA » (slug /consultant-visibilite-ia), cluster
 * CONSEIL / GEO. Créée le 2026-09-04 (Semrush du 03/09 : « consultant
 * visibilité ia », 70/mois, KD 8).
 *
 * RÉPARTITION D'INTENTIONS dans le cluster GEO :
 *  - /audit-geo-ia = la MISSION d'état des lieux (taux de citation, part de voix) ;
 *  - /agence-seo-ia = le SERVICE continu, SEO augmenté + GEO ;
 *  - CETTE page = la PERSONNE et la mission de conseil : ce que fait un
 *    consultant visibilité IA, comment le choisir, ce qu'il ne peut pas promettre.
 *
 * Réécrite le 07/10/2026 pour le texte propre. Chiffres GEO repris de
 * memory/reference_chiffres_geo_2026.md (Forrester, Pew, Adobe), choisis
 * différents de ceux de /agence-seo-ia ; position de Google vérifiée le
 * 07/10/2026 sur developers.google.com (« Fonctionnalités d'IA et votre site
 * Web »). FounderNote et OfficialSources remplacés par des blocs écrits pour la
 * page. Aucun taux de citation inventé, aucune promesse de rang, prix au forfait
 * après cadrage. Jamais Gartner.
 */

const SLUG = 'consultant-visibilite-ia'
const ENTITY = "Masteria, cabinet lyonnais consacré à l'intelligence artificielle depuis 2022"
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-09-04'
const DATE_MODIFIED = '2026-10-07'
const RDV_URL = '/contact?type=projet&rdv=30'

const META_TITLE = "Consultant visibilité IA : être cité par les IA | Masteria"
const META_DESC = "Consultant visibilité IA : ce qu'il mesure, ce qu'il change pour que ChatGPT, Gemini, Perplexity et les AI Overviews parlent de vous, ce qu'il ne promet pas."
const KEYWORDS = "consultant visibilité ia, consultant geo, consultant generative engine optimization, expert visibilité ia, consultant référencement ia, consultant aio, consultant llmo, visibilité chatgpt entreprise, être cité par chatgpt"

/* ───────── Styles ───────── */

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
  { icon: Radar, label: 'Relevé daté, moteur par moteur' },
  { icon: Search, label: 'Google et moteurs de réponse traités ensemble' },
  { icon: Compass, label: 'Un consultant senior, un cabinet IA derrière lui' },
  { icon: MapPin, label: 'Lyon · Europe · États-Unis · Inde' },
]

const EN_BREF = [
  { label: 'Le rôle', value: "Il relève si les moteurs de réponse comme ChatGPT, Perplexity, Gemini ou les aperçus IA de Google citent votre entreprise, comprend pourquoi, et corrige ce qui l'en empêche" },
  { label: 'Missions', value: "Relevé des citations, lecture des sources, pages citables, accès des robots, cohérence des mentions, compte rendu mensuel" },
  { label: 'Ce qu\'il ne promet pas', value: "Un rang ou une citation garantis : chaque réponse est générée à la demande, et aucun éditeur ne publie ses règles d'attribution" },
  { label: 'Format', value: "Un audit GEO pour commencer, puis un suivi par trimestre, mené par un consultant senior nommé sur le devis" },
  { label: 'Prix', value: "Au forfait, étape par étape, fixé à l'issue des 30 minutes de cadrage offertes ; votre OPCO ne prend pas en charge le conseil, mais peut financer la formation de vos équipes" },
  { label: 'Cabinet', value: `${ENTITY}, dirigé par Mathias Nizan` },
]

/* ───────── Trois mesures datées (memory/reference_chiffres_geo_2026.md) ───────── */

const STATS = [
  { value: '94 %', label: "des acheteurs professionnels se servent de l'IA dans leur processus d'achat, contre 89 % un an plus tôt. Neuf acheteurs professionnels sur dix font donc appel à une IA à un moment de leur achat.", source: "Forrester, Buyers' Journey Survey 2025, publiée le 22 janvier 2026" },
  { value: '1 %', label: "des visites où un résumé IA s'affiche en haut de Google se terminent par un clic sur une source citée dans ce résumé. Être cité sert la notoriété autant que le trafic, et se mesure à part.", source: 'Pew Research Center, étude du 22/07/2025 sur des recherches américaines de mars 2025', url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
  { value: '+42 %', label: "de conversion en mars 2026 pour les visiteurs arrivés depuis une IA, face aux autres visiteurs des sites marchands américains suivis par Adobe. Ce trafic avait bondi de 393 % en un an au premier trimestre.", source: 'Adobe Digital Insights, avril 2026, repris par TechCrunch le 16 avril 2026' },
]

/* ───────── Missions ───────── */

const MISSIONS = [
  { icon: Radar, title: 'Relever les citations, moteur par moteur', desc: "Une liste de questions tirées de vos échanges commerciaux est posée à ChatGPT, à Perplexity, à Gemini et aux aperçus IA de Google, à date fixe, version du modèle notée. Pour chaque réponse : votre entreprise apparaît-elle, avec quelle source, à quel rang, à côté de quels concurrents ? Sans ce relevé daté, tout le reste relève de l'impression." },
  { icon: Eye, title: 'Remonter aux sources de chaque réponse', desc: "Un moteur de réponse reprend ce qu'il peut lire, comprendre et attribuer : des pages claires, des informations recoupées ailleurs, des définitions qui tiennent seules. Le consultant identifie les sites qu'utilise chaque réponse, puis les compare avec ce que le vôtre propose." },
  { icon: FileText, title: 'Réécrire les pages qui portent vos réponses', desc: "Une réponse nette dès le haut de la page, des définitions autonomes, des chiffres datés avec leur source, un auteur identifié, une structure qu'un programme lit sans peine. Le travail porte sur quelques pages décisives, reprises avec vous, sans transformer le site en foire aux questions." },
  { icon: Network, title: 'Vérifier ce que voient les robots', desc: "Fichier robots.txt, données structurées, texte affiché sans dépendre du JavaScript, pages en double, temps de chargement : une page que les robots des éditeurs ne lisent pas ne sera jamais citée. Le consultant le contrôle robot par robot et fait corriger par votre équipe ou votre prestataire web." },
  { icon: Target, title: 'Mettre de l\'ordre dans ce que le web dit de vous', desc: "Les moteurs de réponse croisent leurs sources : annuaires professionnels, presse, fiches d'entreprise, pages de partenaires. Le consultant repère les mentions absentes, fausses ou contradictoires (adresse, offre, dirigeants) et organise leur correction." },
  { icon: Gauge, title: 'Rejouer le relevé et rendre compte', desc: "Le même relevé chaque mois, sur les mêmes questions : citations gagnées ou perdues, nouvelles sources, effet d'un changement de modèle. Un compte rendu d'une page, daté, dit ce qui a bougé, pourquoi, et ce qui vient ensuite." },
]

/* ───────── Consultant SEO ou consultant visibilité IA ───────── */

const TABLE = [
  { critere: 'But recherché', sans: 'Un bon rang parmi une liste de liens', avec: 'Une mention, avec sa source, dans une réponse rédigée' },
  { critere: 'Signaux travaillés', sans: 'Mots-clés, liens entrants, technique du site', avec: 'Clarté des pages, sources recoupées, réponses directes, cohérence des mentions' },
  { critere: 'Mesure', sans: 'Positions et trafic venu de Google', avec: "Part des questions où l'entreprise est citée, par moteur, à date fixe" },
  { critere: 'Livrables', sans: 'Audit, plan de mots-clés, campagne de liens', avec: "Audit GEO, pages réécrites, corrections d'accès, plan de mentions" },
  { critere: 'Délai', sans: 'Plusieurs mois pour gagner des places', avec: 'Quelques semaines quand le site part de bonnes bases, un ou deux trimestres sinon' },
]

/* ───────── Méthode ───────── */

const METHODE = [
  { periode: 'Semaine 1', title: "L'audit GEO", desc: "La liste de questions construite avec vous, le relevé sur chaque moteur avec la date et la version du modèle, votre part de citations face aux concurrents, les sources utilisées, l'accès de vos pages aux robots. La restitution dit où vous en êtes, pourquoi, et quels cinq chantiers comptent le plus." },
  { periode: 'Semaines 2 à 4', title: 'Pages reprises et blocages levés', desc: "Les pages qui portent vos réponses sont reprises ou créées avec vous : réponse en tête, définitions, chiffres sourcés, auteur. Les blocages techniques (robots, données structurées, affichage) sont corrigés avec votre équipe." },
  { periode: 'Mois 2 et 3', title: 'Mentions et cohérence', desc: "Les mentions manquantes sont obtenues, les fausses corrigées, et l'identité de l'entreprise rendue identique partout où les moteurs la lisent. C'est le chantier le plus lent ; il décide de la durée des citations." },
  { periode: 'Chaque mois', title: 'Le relevé recommencé', desc: "Mêmes questions, mêmes moteurs, version du modèle notée : ce qui progresse, ce qui recule, ce qui tient à un changement de modèle plutôt qu'à votre site. Un compte rendu court, puis le chantier du mois suivant." },
]

/* ───────── Choisir ───────── */

const CHOISIR = [
  { icon: ClipboardCheck, title: "Une méthode de mesure qu'il peut vous montrer", desc: "Demandez quelles questions il suit, sur quels moteurs, avec quelle version de modèle et à quelle date. Une capture d'écran isolée raconte un moment ; elle ne mesure rien." },
  { icon: ShieldCheck, title: 'Aucune promesse de rang', desc: "Personne ne garantit une citation dans ChatGPT ou une place dans un aperçu IA de Google : les modèles changent plusieurs fois par an et les éditeurs ne publient pas leurs règles. Un chiffre promis d'avance signale une mesure absente." },
  { icon: Search, title: 'Le référencement classique maîtrisé', desc: "Les moteurs de réponse s'appuient largement sur ce que le référencement rend lisible : structure, autorité, accès des robots. Google le confirme pour ses aperçus IA. Un consultant qui méprise le SEO laisse de côté la moitié du travail." },
  { icon: FileText, title: 'Des mains sur vos pages', desc: "La citation vient de pages précises, écrites pour répondre. Un rapport qui ne touche aucune page, ou une offre de cent articles générés, ne fera pas bouger le relevé." },
  { icon: Cpu, title: 'Une culture des modèles', desc: "Comment un moteur choisit ses sources, pourquoi il invente parfois une information, ce qui change entre deux versions : sans cette culture, on optimise au hasard." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Produire des pages en série', desc: "Cent pages générées par une IA pour être reprises par une IA : les moteurs les repèrent et les écartent, et Google les déclasse. Une page qui répond à une question précise rapporte davantage qu'une centaine de pages de remplissage." },
  { title: "Se fier à une capture d'écran", desc: "Une question, une réponse flatteuse, une capture : la même question posée le lendemain, sur un autre modèle ou depuis un autre compte, donnera autre chose. Seul un relevé répété dans le temps renseigne." },
  { title: 'Négliger la technique', desc: "Un site qui bloque les robots des éditeurs, affiche son texte uniquement en JavaScript ou multiplie les doublons ne sera pas cité, même si ses pages sont excellentes. La vérification technique passe en premier." },
  { title: 'Viser la première place sur ChatGPT', desc: "Chaque réponse est générée à la demande et varie selon la formulation, le modèle et l'historique de l'utilisateur. Promettre un rang revient à avouer qu'on ne mesure pas." },
  { title: 'Publier un taux sans date ni modèle', desc: "Un taux de citation sans version de modèle ni période de relevé ne se compare à rien. Nous datons chaque mesure, nous notons le modèle, et nous ne citons pas les études qui omettent ces deux informations." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: 'Consultant visibilité IA : de quoi parle-t-on ?', a: "D'un consultant qui relève si les moteurs de réponse comme ChatGPT, Perplexity, Gemini ou les aperçus IA de Google citent votre entreprise quand vos clients leur posent leurs questions, en cherche les raisons, puis agit sur ce qui en décide : les pages qui portent vos réponses, ce que les robots des éditeurs peuvent lire de votre site, la cohérence de ce que le web dit de vous. On parle aussi de consultant GEO (Generative Engine Optimization) ou AIO. Chez Masteria, ce rôle revient à un consultant senior adossé au cabinet, et la mission s'ouvre sur un audit GEO daté." },
  { q: 'Quelle différence avec un consultant SEO ?', a: "Le consultant SEO vise un rang dans une liste de liens ; le consultant visibilité IA vise une mention, avec sa source, dans une réponse rédigée. Une partie des leviers est commune (structure des pages, autorité, accès des robots), et Google indique que les règles du référencement suffisent pour ses aperçus IA. La mesure, elle, change : on suit la part de questions où l'entreprise est citée, moteur par moteur, à date fixe. Notre agence SEO IA mène les deux chantiers ensemble." },
  { q: 'ChatGPT citera-t-il notre entreprise à coup sûr ?', a: "Aucun consultant ne peut le garantir. Chaque réponse est générée à la demande, les fournisseurs remplacent leurs modèles sans prévenir et ne publient pas leurs règles d'attribution. Nous nous engageons sur autre chose : une mesure datée et honnête, un travail sur les causes (pages, technique, mentions) et un compte rendu mensuel qui explique ce qui a bougé. Méfiez-vous d'un rang promis avant toute mesure." },
  { q: "Comment se mesure la présence d'une entreprise dans les réponses des IA ?", a: "Avec une liste de questions construite avec vous à partir de vos échanges commerciaux, posée à chaque moteur à date fixe, version du modèle notée. Pour chaque réponse, nous relevons si l'entreprise est citée, avec quelle source, à quel rang et à côté de quels concurrents. Le relevé est refait chaque mois à l'identique, ce qui permet de séparer un progrès venu de votre site d'un changement de modèle. Aucun taux ne sort de chez nous sans le modèle et la période." },
  { q: 'Combien coûte un consultant visibilité IA ?', a: "Au forfait, étape par étape. L'audit GEO a un prix fixe, communiqué une fois que le cadrage (30 minutes offertes) a arrêté la liste de questions et les moteurs suivis. Le suivi se chiffre ensuite par trimestre, selon le nombre de pages à reprendre et de mentions à obtenir, et vous décidez sur les résultats de l'audit. Votre OPCO ne finance pas cette prestation de conseil. Former vos équipes (écrire pour être cité, mesurer seul) relève en revanche d'une formation certifiée Qualiopi, que l'OPCO de votre branche peut prendre en charge selon ses critères." },
  { q: 'Combien de temps faut-il pour être cité par les IA ?', a: "Tout dépend du point de départ. Si le site est lisible par les robots et que l'entreprise est déjà reconnue sur son marché, des pages réécrites peuvent être reprises en quelques semaines. Si l'accès est bloqué ou les mentions incohérentes, il faut d'abord corriger, et les citations suivent en un ou deux trimestres. Nous annonçons un délai après l'audit, avec ses conditions, jamais avant." },
  { q: 'Pour quelles entreprises ce travail a-t-il un sens ?', a: "Pour celles dont les clients interrogent les IA avant d'acheter : services B2B à cycle long, conseil, formation, logiciels, santé, immobilier. Forrester mesure que 94 % des acheteurs professionnels se servent de l'IA dans leurs achats (enquête publiée le 22 janvier 2026). Une PME peut être citée avant un grand groupe si ses pages répondent mieux. Quand vos clients ne passent pas encore par les moteurs de réponse, le cadrage le montre, et nous vous orientons vers le référencement classique." },
  { q: 'Un fichier llms.txt aide-t-il à être cité par les IA ?', a: "Pour ses propres moteurs, Google répond non : sa documentation destinée aux éditeurs de sites, consultée le 7 octobre 2026, indique que ses aperçus IA et son Mode IA n'exigent ni fichier particulier, ni fichier texte destiné aux IA, ni balisage dédié ; les règles habituelles du référencement suffisent. Un tel fichier coûte peu à publier, mais ne remplace ni des pages claires ni un accès ouvert aux robots. Méfiez-vous d'une offre qui le présente comme la clé." },
  { q: 'GEO, AIO, LLMO, AEO : est-ce la même chose ?', a: "Quatre sigles pour un même objectif : être repris et cité dans les réponses générées par une IA. GEO (Generative Engine Optimization) domine en 2026 ; AIO et LLMO insistent sur les modèles ; AEO (Answer Engine Optimization) vient des assistants vocaux. Les noms bougeront encore, et la méthode restera la même : mesurer, comprendre, rendre lisible, ouvrir l'accès, consolider les mentions, suivre." },
  { q: 'Consultant indépendant ou cabinet ?', a: "Un indépendant compétent mène ce travail sans difficulté sur un périmètre net. Un cabinet ajoute la continuité (le relevé mensuel ne dépend pas de l'agenda d'une personne) et des compétences voisines : développement pour les corrections techniques, formation pour vos équipes, conseil IA pour le reste. Chez Masteria, le consultant est nommé sur le devis et s'appuie sur le cabinet." },
  { q: 'Pouvez-vous former nos équipes à faire ce travail elles-mêmes ?', a: "Oui, et c'est souvent la meilleure suite. Après l'audit et les premières corrections, une formation apprend à vos équipes marketing ou communication à écrire pour être citées, à rejouer le relevé et à lire un changement de modèle. Elle est certifiée Qualiopi et coûte 1 980 € HT par jour ; la prise en charge dépend de l'OPCO de votre branche. Le cadrage précise ce qu'il faut ajouter à notre formation IA et SEO pour la partie mesure." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Consultant visibilité IA (Masteria)',
  alternateName: 'Consultant GEO, Generative Engine Optimization',
  description: META_DESC,
  url: 'https://www.master-ia.fr/consultant-visibilite-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#webpage' },
  serviceType: 'Conseil en visibilité dans les moteurs de réponse IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Place', name: 'Europe' }, { '@type': 'Country', name: 'États-Unis' }, { '@type': 'Country', name: 'Inde' }],
  audience: { '@type': 'BusinessAudience', audienceType: 'PME, ETI et groupes' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Missions du consultant visibilité IA',
    itemListElement: MISSIONS.map(m => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.title, description: m.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#termes',
  name: 'Visibilité dans les moteurs de réponse : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Consultant visibilité IA', description: "Consultant qui relève la présence d'une entreprise dans ce que répondent ChatGPT, Perplexity, Gemini et les aperçus IA de Google, en cherche les causes et agit sur les pages, l'accès des robots et les mentions pour l'améliorer." },
    { '@type': 'DefinedTerm', name: 'GEO (Generative Engine Optimization)', description: "Pratiques qui rendent une entreprise et ses pages lisibles, reprises et citées par les moteurs de réponse. Sigles voisins : AIO, LLMO, AEO." },
    { '@type': 'DefinedTerm', name: 'Taux de citation', description: "Part des questions d'une liste de suivi pour lesquelles un moteur de réponse cite l'entreprise, relevée à une date donnée, version du modèle notée." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#article',
  headline: "Consultant visibilité IA : ce qu'il mesure, ce qu'il change, ce qu'il ne promet pas",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/consultant-visibilite-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Optimisation pour les moteurs de recherche', sameAs: 'https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* Sources de la page (remplacent le bloc commun OfficialSources) */
const SOURCES = [
  { name: "Google Search Central : « Fonctionnalités d'IA et votre site Web »", note: "la page où Google dit ne demander, pour ses aperçus IA et son Mode IA, que les règles habituelles du référencement (consultée le 7 octobre 2026).", url: 'https://developers.google.com/search/docs/appearance/ai-features?hl=fr' },
  { name: 'Google Search Central : présentation du fichier robots.txt', note: "le fichier qui dit aux robots quelles adresses de votre site ils peuvent parcourir.", url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr' },
  { name: 'Pew Research Center : les clics en présence d\'un résumé IA (22 juillet 2025)', note: "l'étude d'où vient le chiffre de 1 % de clics vers une source citée.", url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
]

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function CardGrid({ items, min = 260 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap: 24, marginTop: 12 }}>
      {items.map(card => {
        const Icon = card.icon
        return (
          <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
              <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
            </div>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function ConsultantVisibiliteIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence SEO IA', slug: 'agence-seo-ia' },
    { name: 'Consultant visibilité IA', slug: SLUG },
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
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        speakable={['#geo-summary', '#en-bref']}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
        extraJsonLd={[serviceJsonLd, definitionsJsonLd, articleJsonLd]}
      />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-seo-ia" style={{ color: '#94A3B8' }}>Agence SEO IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Consultant visibilité IA</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Radar size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Conseil · visibilité dans les moteurs de réponse</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Consultant visibilité IA&nbsp;:
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce qu'il mesure, ce qu'il change, ce qu'il ne promet pas</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · actualisé le 7 octobre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un consultant visibilité IA vérifie si ChatGPT, Perplexity, Gemini et les aperçus IA de Google (AI Overviews) mentionnent votre entreprise quand vos clients leur posent leurs questions, cherche pourquoi, puis agit sur ce qui en décide : <strong style={{ color: '#fff', fontWeight: 700 }}>les pages qui portent vos réponses, ce que les robots des éditeurs lisent de votre site, la cohérence de ce que le web dit de vous</strong>. Chez {ENTITY.split(',')[0]}, ce travail commence par un audit GEO daté, moteur par moteur.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le métier attire les promesses invérifiables : la première place sur ChatGPT, une citation garantie. Aucune ne tient. Ce qui tient : une mesure honnête, rejouée dans le temps, et un travail patient sur les causes. Google l'écrit lui-même, aucune optimisation spéciale n'est exigée pour apparaître dans ses aperçus IA. La suite de cette page décrit la mission telle que nous la menons.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un audit GEO
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#missions" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Voir les six missions</a>
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
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── MISSIONS (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les missions</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Que fait un consultant visibilité IA ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six missions, dans cet ordre : relever les citations moteur par moteur, remonter aux sources de chaque réponse, réécrire les pages qui portent vos réponses, vérifier ce que voient les robots, mettre de l'ordre dans ce que le web dit de vous, puis rejouer le relevé chaque mois.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La première mission a sa page dédiée, l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO</Link>. Pour un service continu qui traite aussi votre référencement sur Google, voyez notre <Link to="/agence-seo-ia" style={aStyle}>agence SEO IA</Link>.
              </p>
            </div>
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
      </section>

      {/* ── POURQUOI MAINTENANT : trois mesures datées ── */}
      <section id="chiffres" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pourquoi maintenant</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Vos clients interrogent déjà les IA : trois mesures datées</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les acheteurs professionnels consultent les assistants avant de contacter un fournisseur, les clics vers les sources citées restent rares, et les visiteurs envoyés par une IA achètent plus souvent. Ces trois mesures expliquent pourquoi la question arrive aujourd'hui en comité de direction.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {STATS.map(s => (
              <div key={s.value} style={{ ...cardStyle, padding: 26 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
                ) : (
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: '#6B7280' }}>Source : {s.source}</span>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Le chiffre de Forrester porte sur les acheteurs professionnels interrogés pour son enquête 2025 ; ceux de Pew et d'Adobe portent sur les États-Unis. Nous les citons avec leur date et leur périmètre, comme nous le faisons pour nos propres relevés.
          </p>
        </div>
      </section>

      {/* ── SEO vs VISIBILITÉ IA (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Deux métiers voisins</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Consultant SEO ou consultant visibilité IA : quelle différence ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le consultant SEO cherche une place dans une liste de liens ; le consultant visibilité IA cherche une mention dans une réponse rédigée. Les signaux se recoupent, la mesure change de nature, et les deux métiers s'épaulent : Google écrit que les règles du référencement suffisent pour apparaître dans ses aperçus IA.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Ce qui sépare le travail d'un consultant SEO de celui d'un consultant visibilité IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Point de comparaison</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Consultant SEO</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Consultant visibilité IA</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.sans}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>Comment travaille notre consultant visibilité IA ?</h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Une semaine pour l'audit GEO, trois pour les premières pages et corrections, deux mois pour les mentions, puis un relevé chaque mois. Le consultant est une personne nommée sur le devis, avec le cabinet derrière lui.</strong>
          </p>
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0') }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.periode}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 740 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Les questions suivies, les moteurs interrogés et le rythme se décident au cadrage ; ses 30 premières minutes ne vous coûtent rien. Pour découvrir la démarche avant de nous appeler, lisez <Link to="/blog/geo-referencement-ia-generative-entreprise" style={aStyle}>notre guide du GEO pour les entreprises</Link>.
          </p>
        </div>
      </section>

      {/* ── CHOISIR ── */}
      <section id="choisir" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Choisir</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Comment choisir un consultant visibilité IA ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Cinq critères, qui s'appliquent à nous comme aux autres : une méthode de mesure montrable, aucune promesse de rang, le référencement classique maîtrisé, un travail sur vos pages et une culture des modèles. Qu'un seul manque, et la mission tourne à l'anecdote.</strong>
          </p>
          <CardGrid items={CHOISIR} min={260} />
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Erreurs fréquentes</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Cinq erreurs qui coûtent des citations</h2>
          <p style={answerStyle}>
            <strong>Produire des pages en série, se fier à une capture, négliger la technique, viser la première place sur ChatGPT, publier un taux sans date ni modèle : nous retrouvons ces cinq erreurs chez des entreprises qui ont déjà payé un premier prestataire, et elles coûtent plus cher que l'audit qui les aurait évitées.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: '3px solid #DC2626' }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Pour vos équipes</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Vos équipes peuvent apprendre à écrire pour être citées, et à mesurer seules</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Après l'audit et les premières corrections, une formation apprend à vos équipes marketing ou communication à rédiger des pages que les moteurs de réponse reprennent, à rejouer le relevé et à reconnaître l'effet d'un changement de modèle. Cette partie est certifiée Qualiopi : votre OPCO de branche peut la financer, selon ses propres règles, alors que le conseil reste hors de son champ. Le programme figure sur la page <Link to="/formation-ia-seo" style={aStyle}>formation IA et SEO</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Écrire des réponses directes et des définitions autonomes', 'Rejouer le relevé de citations chaque mois', "Repérer l'effet d'une nouvelle version de modèle", 'Formation Qualiopi, 1 980 € HT la journée'].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Onze questions avant de faire appel à un consultant visibilité IA</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Votre situation ne figure pas dans la liste ?</p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrivez-la-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Huit pages voisines sur la visibilité et le référencement</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>La mission d'entrée, le service continu, deux guides, la formation et deux métiers proches.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit GEO', href: '/audit-geo-ia', tag: "Point d'entrée", desc: "Le relevé daté par lequel la mission commence : citations, part de voix, sources, robots." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Service continu', desc: "Le service qui traite Google et les moteurs de réponse en même temps, mois après mois." },
              { label: 'Audit SEO IA', href: '/audit-seo-ia', tag: 'Les deux fronts', desc: "Un état des lieux qui couvre votre référencement Google et vos citations dans les IA." },
              { label: 'GEO : le guide', href: '/blog/geo-referencement-ia-generative-entreprise', tag: 'Guide', desc: "La démarche expliquée pas à pas, pour une direction marketing qui découvre le sujet." },
              { label: 'Référencement AIO : le guide', href: '/blog/referencement-aio-strategie-contenu-ia', tag: 'Guide', desc: "Comment écrire, page par page, pour les moteurs de réponse." },
              { label: 'Formation IA SEO', href: '/formation-ia-seo', tag: 'Formation', desc: "Apprendre à vos équipes à rédiger et à mesurer, à partir de vos propres pages." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "La production de contenus et de campagnes qui nourrit votre visibilité." },
              { label: 'Consultant IA', href: '/consultant-ia', tag: 'Métier', desc: "Le métier de consultant en intelligence artificielle, au-delà de la visibilité." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Lire la page<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier pas</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Commençons par savoir quels noms les IA citent sur votre marché</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Indiquez votre activité, trois concurrents et ce que vos clients demandent avant d'acheter. Dans les 24 heures, nous vous envoyons les questions que nous proposons de suivre, la liste des moteurs à interroger et le prix de l'audit GEO.
            </p>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Cadrage offert, en visio · consultant senior nommé sur le devis · Lyon, Europe, États-Unis, Inde</p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui mène la mission (remplace FounderNote et le bloc commun) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui mène la mission</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>Un consultant senior nommé, un cabinet IA derrière lui</h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Le consultant visibilité IA de votre mission est nommé sur le devis ; il travaille avec les développeurs du cabinet pour les corrections techniques et avec ses formateurs pour vos équipes. <Link to="/mathias-nizan" style={{ color: '#93C5FD', fontWeight: 600 }}>Mathias Nizan</Link>, fondateur du cabinet, suit chaque dossier. Nous n'avons d'accord commercial avec aucun éditeur ni aucun outil de mesure. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> permettent de nous juger sur pièces.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[['Daté', 'chaque relevé, modèle par modèle'], ['≈ 10', 'consultants IA indépendants'], ['0', 'accord avec un éditeur ou un outil de mesure'], ['Lyon, 2022', 'Europe · États-Unis · Inde']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES (rédigées pour la page) ── */}
      <section aria-labelledby="sources-visibilite-ia" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-visibilite-ia" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Documents de référence cités sur cette page
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Les chiffres de Forrester (enquête Buyers' Journey 2025, publiée le 22 janvier 2026) et d'Adobe Digital Insights (rapport d'avril 2026, repris par TechCrunch le 16 avril 2026) sont cités d'après leurs publications. Les documents en ligne :
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
