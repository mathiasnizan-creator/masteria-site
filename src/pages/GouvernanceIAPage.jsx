import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, ScrollText, ListChecks, Users, Eye, FileText,
  Scale, Map, Layers, Target, Workflow, Lock, Gauge, Check, BookOpen,
  ExternalLink, AlertTriangle, GraduationCap, ClipboardCheck, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import CaseStudyCards from '../components/CaseStudyCards'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « gouvernance de l'IA » (slug /gouvernance-ia). Cible le vent porteur
 * AI Act : « gouvernance ia », « gouvernance de l'intelligence artificielle »,
 * « conformité ia », « ai act entreprise », « mise en conformité ia »,
 * « gouvernance de l'ia », « politique ia entreprise », « comité ia »,
 * « gouvernance de l'ia en entreprise », « gouvernance des données pour l'ia »,
 * « mise en œuvre de la gouvernance de l'ia », « calendrier ai act ».
 *
 * POSITIONNEMENT : CONSEIL et accompagnement en gouvernance / conformité IA.
 * DISTINCT de /formation-ai-act (qui est de la formation finançable). Ici, c'est du
 * conseil : audit de conformité, cadrage, mise en place du dispositif de gouvernance.
 *
 * INTÉGRITÉ : posture capacité. Aucun cas client nommé, aucun chiffre de résultat ni
 * prix inventé. Faits réglementaires sourcés et vérifiables uniquement (AI Act,
 * RGPD, Gartner). Le conseil pur n'est pas finançable OPCO ; pas de Qualiopi mis en
 * avant (la page n'est pas une page formation). Seule la formation associée (lien
 * vers /formation-ai-act) relève du financement.
 *
 * Design premium identique à /agence-developpement-ia et /conseil-data-ia : hero
 * sombre, icônes lucide (zéro emoji), kickers, réponses directes citables, accent
 * #2563EB uniquement, une ancre sombre sur la section technique (classification des
 * risques), patron éditorial asymétrique sticky, familles de cartes variées.
 */

const SLUG = 'gouvernance-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Gouvernance de l'IA & conformité AI Act | Masteria"
const META_DESC = "Gouvernance de l'IA en entreprise : mise en conformité AI Act, audit, registre des usages, politique IA, comité, gouvernance des données. Cadrage gratuit."
const KEYWORDS = "gouvernance ia, gouvernance de l'intelligence artificielle, conformité ia, conformité ia entreprise, ai act entreprise, ia act, mise en conformité ia, gouvernance de l'ia, gouvernance de l'ia en entreprise, gouvernance des données pour l'ia, mise en œuvre de la gouvernance de l'ia, politique ia entreprise, comité ia, dispositif de gouvernance ia, calendrier ai act, calendrier ia act"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
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
  { icon: Scale,       label: 'AI Act & RGPD' },
  { icon: Map,         label: 'Registre des usages IA' },
  { icon: ScrollText,  label: 'Politique & charte IA' },
  { icon: Users,       label: 'Comité de gouvernance' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Cadre couvert', value: "AI Act (Règlement UE 2024/1689) et RGPD : classification des risques, obligations applicables, gouvernance des données pour l'IA et conformité des traitements" },
  { label: 'Livrables', value: "Audit de conformité, cartographie et registre des usages IA, politique et charte IA, dispositif de comité de gouvernance, plan de mise en conformité" },
  { label: 'Ce que nous faisons', value: "Conseil et accompagnement : cadrage, audit, mise en place du dispositif et supervision humaine, pas une formation" },
  { label: 'Posture', value: "Capacité et méthode : nous décrivons l'accompagnement, sans cas client ni résultat inventé" },
  { label: 'Zone', value: "Lyon, France, Suisse, Belgique · distanciel et présentiel ponctuel" },
  { label: 'Formation associée', value: "Le volet montée en compétences passe par notre formation AI Act, distincte du conseil" },
]

/* ───────── Prestations / piliers de la gouvernance (6 cartes) ───────── */

const PILIERS = [
  {
    icon: ClipboardCheck,
    title: 'Audit de conformité IA',
    desc: "Nous mesurons votre exposition au regard de l'AI Act et du RGPD : usages d'IA en place, niveaux de risque, traitements de données concernés, écarts par rapport aux obligations. L'audit donne une photographie nette de ce qui est conforme, de ce qui ne l'est pas encore et de ce qui appelle une décision.",
  },
  {
    icon: Map,
    title: 'Registre & cartographie des usages IA',
    desc: "Nous recensons l'ensemble des systèmes et usages d'IA de l'organisation, du copilote bureautique à l'outil métier, et les classons par niveau de risque. Ce registre vivant est le socle de la gouvernance : on ne gouverne que ce que l'on a d'abord cartographié.",
  },
  {
    icon: ScrollText,
    title: 'Politique & charte IA internes',
    desc: "Nous rédigeons la politique IA et la charte d'usage qui fixent ce qui est autorisé, encadré ou interdit, les règles de confidentialité et la responsabilité de chacun. Un cadre lisible qui sécurise les usages sans bloquer l'adoption.",
  },
  {
    icon: Users,
    title: 'Comité de gouvernance IA',
    desc: "Nous aidons à constituer le comité IA : composition, rôles, fréquence, processus de validation des nouveaux usages et d'arbitrage. L'instance qui maintient la gouvernance dans le temps plutôt qu'un document figé après un audit.",
  },
  {
    icon: Eye,
    title: 'Supervision humaine & traçabilité',
    desc: "Nous posons les points de contrôle humain sur les décisions sensibles, la journalisation des usages et la documentation exigée par l'AI Act. La supervision humaine et la traçabilité transforment une obligation réglementaire en pratique opérationnelle.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance des données pour l'IA",
    desc: "La gouvernance IA s'appuie sur un socle data conforme : base légale des traitements au sens du RGPD, qualité des données mobilisées, minimisation, cloisonnement des données sensibles. Nous relions le dispositif IA à votre conformité RGPD, en lien avec notre conseil data & IA.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrage & périmètre',
    desc: "Nous délimitons le périmètre : entités concernées, usages d'IA déjà en place, projets à venir, enjeux propres à votre secteur. Ce premier travail fixe les objectifs de conformité et le niveau d'exigence attendu avant tout audit.",
  },
  {
    num: '02',
    title: 'Audit & classification des risques',
    desc: "Nous auditons les usages d'IA et les classons selon les catégories de l'AI Act (interdit, haut risque, risque limité, risque minimal), puis croisons avec vos traitements de données au regard du RGPD. Les écarts deviennent visibles et priorisables.",
  },
  {
    num: '03',
    title: 'Registre & cartographie',
    desc: "Nous construisons le registre des usages IA : inventaire, propriétaires, finalités, niveau de risque, données mobilisées. Ce registre vivant devient le référentiel partagé de la gouvernance, mis à jour à chaque nouvel usage.",
  },
  {
    num: '04',
    title: 'Dispositif & documents',
    desc: "Nous posons le dispositif : politique et charte IA, processus de validation des nouveaux usages, points de supervision humaine, traçabilité. Nous aidons à constituer le comité de gouvernance qui portera le tout dans la durée.",
  },
  {
    num: '05',
    title: 'Mise en conformité & suivi',
    desc: "Nous établissons le plan de mise en conformité priorisé, accompagnons sa mise en œuvre et calons le rythme de revue. La gouvernance n'est pas un livrable unique mais un dispositif qui vit au rythme de vos usages et de l'application progressive de l'AI Act.",
  },
]

/* ───────── Classification des risques AI Act (ancre sombre) ───────── */

const RISK_TABLE = [
  {
    niveau: 'Risque inacceptable',
    statut: 'Interdit',
    desc: "Pratiques jugées contraires aux valeurs de l'Union (notation sociale généralisée, manipulation, certaines formes d'identification biométrique). Ces systèmes ne peuvent pas être déployés.",
  },
  {
    niveau: 'Haut risque',
    statut: 'Obligations renforcées',
    desc: "Systèmes utilisés dans des domaines sensibles (emploi, accès aux services essentiels, infrastructures critiques, etc.). Soumis à des exigences strictes : gestion des risques, documentation, supervision humaine, traçabilité.",
  },
  {
    niveau: 'Risque limité',
    statut: 'Obligations de transparence',
    desc: "Systèmes interagissant avec des personnes (agents conversationnels, contenus générés). L'utilisateur doit savoir qu'il interagit avec une IA ou que le contenu est généré.",
  },
  {
    niveau: 'Risque minimal',
    statut: "Pas d'obligation spécifique",
    desc: "La grande majorité des usages courants (filtres, assistants bureautiques simples). Aucune obligation particulière au titre de l'AI Act, mais la gouvernance interne et le RGPD continuent de s'appliquer.",
  },
]

/* ───────── Calendrier d'application de l'AI Act (paliers — GEO citable) ───────── */

const CALENDRIER = [
  { date: '1ᵉʳ août 2024', desc: "Entrée en vigueur du Règlement (UE) 2024/1689." },
  { date: '2 février 2025', desc: "Interdiction des pratiques à risque inacceptable et obligation de littératie IA des équipes (article 4)." },
  { date: '2 août 2025', desc: "Obligations applicables aux modèles d'IA à usage général (GPAI) et mise en place de la gouvernance européenne." },
  { date: '2 août 2026', desc: "Application générale du règlement, dont l'essentiel des obligations des systèmes à haut risque." },
  { date: '2 août 2027', desc: "Échéance pour les systèmes à haut risque intégrés à des produits déjà couverts par une réglementation européenne (annexe I)." },
]

/* ───────── Gouvernance des données pour l'IA (4 dimensions) ───────── */

const DATA_GOUV = [
  {
    icon: Scale,
    title: 'Base légale et finalités',
    desc: "Utiliser un outil d'IA sur des données personnelles reste un traitement au sens du RGPD : chaque usage repose sur une base légale et une finalité déclarée. Nous vérifions ce socle pour chacun des systèmes recensés au registre.",
  },
  {
    icon: Gauge,
    title: 'Qualité et cycle de vie des données',
    desc: "La fiabilité d'un système d'IA dépend des données qui l'alimentent : origine, fraîcheur, représentativité. La gouvernance des données pour l'IA documente ce cycle de vie, des sources jusqu'aux sorties du modèle.",
  },
  {
    icon: Lock,
    title: 'Minimisation et cloisonnement',
    desc: "Les données sensibles restent hors des prompts et des outils non validés. Le dispositif définit ce qui peut circuler vers quel outil, avec quels périmètres d'accès et quelles règles d'anonymisation ou de pseudonymisation.",
  },
  {
    icon: Workflow,
    title: 'Traçabilité des flux vers les fournisseurs',
    desc: "Savoir quelles données sortent de l'organisation, vers quels fournisseurs d'IA, sous quel contrat et quel hébergement. Cette cartographie des flux alimente le registre des usages et les analyses d'impact.",
  },
]

/* ───────── Pourquoi maintenant (4 raisons) ───────── */

const WHY = [
  { icon: Scale, title: "L'AI Act entre en application par paliers", desc: "Le Règlement (UE) 2024/1689, entré en vigueur le 1ᵉʳ août 2024, s'applique progressivement. Les organisations ont besoin de temps pour cartographier leurs usages, les classer et se mettre en conformité : commencer tôt évite de subir l'échéance." },
  { icon: ShieldCheck, title: 'Le RGPD reste le socle', desc: "Appliqué depuis le 25 mai 2018, le RGPD encadre tout traitement de données personnelles, y compris par un système d'IA. La gouvernance IA s'articule avec votre conformité existante plutôt que de la doubler." },
  { icon: AlertTriangle, title: 'Les usages se multiplient sans cadre', desc: "Les copilotes et outils d'IA se diffusent vite dans les équipes, souvent plus vite que les règles. Sans cartographie ni politique, l'organisation perd la visibilité sur ce qui est utilisé, avec quelles données et quels risques." },
  { icon: Target, title: "Gouverner pour sécuriser l'adoption", desc: "Un cadre clair ne freine pas l'IA, il la sécurise : les équipes savent ce qu'elles peuvent faire, la direction garde la visibilité et la conformité devient un atout de confiance vis-à-vis des clients et partenaires." },
]

/* ───────── Ce que Masteria accompagne (3 modes d'intervention) ───────── */

const ACCOMPAGNE = [
  {
    icon: ClipboardCheck,
    tag: 'Auditer',
    title: 'Audit de conformité IA',
    desc: "Le point de départ : nous mesurons votre exposition au regard de l'AI Act et du RGPD, cartographions les usages et identifions les écarts. Vous obtenez une photographie nette de votre conformité et des priorités à traiter.",
    points: ['Inventaire et classification des usages IA', 'Lecture AI Act et RGPD', 'Écarts et risques priorisés'],
  },
  {
    icon: Layers,
    tag: 'Cadrer',
    title: 'Cadrage du dispositif de gouvernance',
    desc: "Nous concevons le dispositif adapté à votre organisation : politique et charte IA, registre des usages, processus de validation, points de supervision humaine. Un cadre proportionné à votre taille et à votre secteur, pas une usine à gaz.",
    points: ['Politique et charte IA internes', 'Registre des usages IA', 'Processus de validation et de supervision'],
  },
  {
    icon: Workflow,
    tag: 'Déployer',
    title: 'Mise en place et comité de gouvernance',
    desc: "Nous accompagnons la mise en œuvre du plan de conformité et la constitution du comité IA : composition, rôles, rythme de revue. La gouvernance s'installe comme une pratique vivante, portée par vos équipes.",
    points: ['Plan de mise en conformité priorisé', 'Constitution du comité IA', 'Rythme de revue et suivi'],
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que la gouvernance de l'IA ?",
    a: "La gouvernance de l'IA est l'ensemble des règles, des processus et des instances qui encadrent l'usage de l'intelligence artificielle dans une organisation : cartographie et registre des usages, classification des risques, politique et charte IA, supervision humaine, traçabilité et conformité (AI Act, RGPD). Elle vise à sécuriser et à fiabiliser les usages d'IA sans bloquer leur adoption. Chez Masteria, c'est une prestation de conseil et d'accompagnement : nous auditons, cadrons puis aidons à mettre en place le dispositif, instance de pilotage comprise.",
  },
  {
    q: "L'AI Act s'applique-t-il à mon entreprise ?",
    a: "L'AI Act (souvent écrit « IA Act » en français), le Règlement (UE) 2024/1689, encadre la mise sur le marché et l'usage des systèmes d'IA dans l'Union européenne. Il concerne aussi bien les fournisseurs que les organisations qui déploient de l'IA, y compris en utilisant des outils tiers. Entré en vigueur le 1ᵉʳ août 2024, il s'applique par paliers. Les obligations dépendent du niveau de risque de chaque usage : interdit, haut risque, risque limité ou risque minimal. La première étape consiste donc à cartographier et classer vos usages pour savoir précisément ce qui s'applique à vous. C'est l'objet de notre audit de conformité.",
  },
  {
    q: "Quelle différence entre gouvernance IA et conformité IA ?",
    a: "La conformité IA consiste à respecter les obligations réglementaires applicables, notamment celles de l'AI Act et du RGPD : classer les usages par risque, documenter, assurer la transparence et la supervision humaine. La gouvernance de l'IA est plus large : c'est le dispositif durable qui rend cette conformité tenable et qui encadre tous les usages d'IA, conformité comprise mais aussi politique interne, charte, comité de pilotage et arbitrage des nouveaux usages. Autrement dit, la conformité est une exigence à atteindre, la gouvernance est le système qui permet de l'atteindre et de la maintenir dans le temps.",
  },
  {
    q: "Comment se mettre en conformité avec l'AI Act ?",
    a: "La mise en conformité suit une logique simple : cartographier l'ensemble de vos usages d'IA, les classer selon les niveaux de risque de l'AI Act, identifier les obligations applicables à chacun (transparence, documentation, supervision humaine, gestion des risques pour le haut risque), puis combler les écarts par un plan priorisé. En parallèle, la conformité RGPD des traitements de données est vérifiée. Masteria accompagne ces étapes par un audit de conformité, la construction du registre des usages et la mise en place du dispositif de gouvernance, sans promettre de raccourci : la conformité se construit usage par usage.",
  },
  {
    q: "Gouvernance IA ou formation AI Act : que choisir ?",
    a: "Les deux répondent à des besoins différents et complémentaires. La gouvernance de l'IA est une prestation de conseil : nous auditons, cadrons et mettons en place le dispositif (registre, politique, comité, plan de conformité) pour l'organisation. La formation AI Act, elle, vise la montée en compétences de vos équipes sur le règlement et ses implications ; c'est une action de formation, distincte du conseil et finançable. En pratique, beaucoup d'organisations combinent les deux : le conseil installe le dispositif, la formation rend les équipes autonomes pour le faire vivre.",
  },
  {
    q: "Qu'est-ce que la gouvernance des données pour l'IA ?",
    a: "La gouvernance des données pour l'IA désigne les règles et les processus qui encadrent les données mobilisées par vos systèmes d'IA : base légale et finalité des traitements au sens du RGPD, qualité et cycle de vie des données, minimisation, cloisonnement des données sensibles et traçabilité des flux vers les fournisseurs d'IA. C'est le volet data de la gouvernance IA : le registre des usages documente, pour chaque système, quelles données il consomme et sous quelles garanties. Chez Masteria, ce volet est traité lors de l'audit de conformité et se prolonge par notre conseil data & IA.",
  },
  {
    q: "Quel est le calendrier d'application de l'AI Act ?",
    a: "L'AI Act est entré en vigueur le 1ᵉʳ août 2024 et s'applique par paliers. Depuis le 2 février 2025, les pratiques à risque inacceptable sont interdites et l'obligation de littératie IA s'applique aux organisations qui déploient de l'IA. Depuis le 2 août 2025, les obligations des modèles d'IA à usage général (GPAI) sont en place. Le 2 août 2026 marque l'application générale du règlement, dont l'essentiel des obligations pour les systèmes à haut risque. Le 2 août 2027 concerne les systèmes à haut risque intégrés à des produits déjà couverts par une réglementation européenne. Ce calendrier fixe l'ordre des chantiers : cartographier et classer vos usages d'abord, pour savoir quelles échéances s'appliquent à vous.",
  },
  {
    q: "La gouvernance de l'IA concerne-t-elle aussi le secteur public ?",
    a: "Oui. L'AI Act s'applique aux administrations, collectivités, établissements publics et hôpitaux qui déploient des systèmes d'IA, au même titre qu'aux entreprises privées. Le secteur public est même particulièrement exposé : beaucoup de ses usages touchent des domaines que le règlement classe à haut risque (accès aux services essentiels, éducation, santé, emploi public) et la transparence attendue vis-à-vis des citoyens y est plus forte. Registre des usages, supervision humaine et gouvernance des données s'y appliquent pleinement. L'accompagnement s'adapte à ce cadre : périmètre, instances existantes, contraintes de l'achat public.",
  },
  {
    q: "Combien de temps pour mettre en place un dispositif de gouvernance IA ?",
    a: "Cela dépend de la taille de l'organisation, du nombre d'usages d'IA déjà en place et de votre niveau de départ en matière de conformité. Un audit et une première cartographie des usages se mènent généralement en quelques semaines ; la mise en place complète du dispositif (politique, registre, comité, plan de conformité) s'étale ensuite selon le périmètre. La gouvernance n'est pas un livrable ponctuel mais un dispositif qui vit : le rythme de revue se cale sur l'évolution de vos usages et l'application progressive de l'AI Act. Nous proposons un cadrage avant tout chiffrage, pour adapter l'effort à votre réalité.",
  },
]

/* ───────── Repères chiffrés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    icon: Scale,
    stat: '1ᵉʳ août 2024',
    label: "entrée en vigueur de l'AI Act européen (Règlement UE 2024/1689), première réglementation transversale de l'IA, en application par paliers",
    source: 'EUR-Lex, Règlement (UE) 2024/1689',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689',
  },
  {
    icon: ShieldCheck,
    stat: '25 mai 2018',
    label: "application du RGPD, socle de conformité de tout traitement de données personnelles, y compris par un système d'IA",
    source: 'CNIL',
    sourceUrl: 'https://www.cnil.fr/fr/intelligence-artificielle',
  },
  {
    icon: AlertTriangle,
    stat: '≥ 30 %',
    label: "des projets d'IA générative pourraient être abandonnés après le POC d'ici fin 2025, faute de cadrage et de valeur démontrée",
    source: 'Gartner, juillet 2024',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: "Gouvernance de l'IA",
    def: "Ensemble des règles, processus et instances qui encadrent l'usage de l'intelligence artificielle dans une organisation : registre des usages, classification des risques, politique et charte, supervision humaine, traçabilité et conformité.",
  },
  {
    term: 'AI Act (Règlement UE 2024/1689)',
    def: "Première réglementation transversale de l'IA dans l'Union européenne, entrée en vigueur le 1ᵉʳ août 2024 et applicable par paliers. Elle classe les systèmes d'IA par niveau de risque et fixe des obligations proportionnées.",
  },
  {
    term: 'Conformité IA',
    def: "Respect des obligations réglementaires applicables aux systèmes d'IA, principalement l'AI Act et le RGPD : classification des usages par risque, documentation, transparence, supervision humaine et conformité des traitements de données.",
  },
  {
    term: 'Supervision humaine',
    def: "Maintien d'un contrôle humain sur les décisions prises ou assistées par un système d'IA, en particulier sur les usages sensibles. Exigence centrale de l'AI Act pour les systèmes à haut risque.",
  },
  {
    term: 'Registre des usages IA',
    def: "Inventaire vivant des systèmes et usages d'IA de l'organisation, avec leurs finalités, propriétaires, données mobilisées et niveau de risque. Socle opérationnel de la gouvernance.",
  },
  {
    term: "Gouvernance des données pour l'IA",
    def: "Règles et processus qui encadrent les données mobilisées par les systèmes d'IA : base légale des traitements, qualité et cycle de vie, minimisation, cloisonnement des données sensibles et traçabilité des flux vers les fournisseurs. Volet data de la gouvernance IA, au croisement du RGPD et de l'AI Act.",
  },
  {
    term: 'Comité de gouvernance IA',
    def: "Instance interne qui pilote la gouvernance de l'IA dans la durée : validation des nouveaux usages, arbitrage des risques, suivi du registre et du plan de conformité. Sa composition croise directions métier, juridique, données et systèmes d'information.",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "AI Act — texte officiel (EUR-Lex, Règlement 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Cadre réglementaire de l'IA — Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Intelligence artificielle et RGPD — CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "Gouvernance de l'IA & mise en conformité AI Act — Masteria",
  description: "Conseil et accompagnement en gouvernance de l'intelligence artificielle et mise en conformité AI Act pour les entreprises : audit de conformité, registre et cartographie des usages IA, politique et charte IA, comité de gouvernance, supervision humaine et gouvernance des données pour l'IA (RGPD).",
  url: 'https://www.master-ia.fr/gouvernance-ia',
  serviceType: "Gouvernance et conformité de l'intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/gouvernance-ia',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Prestations de gouvernance et de conformité IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit de conformité IA', description: "Mesure de l'exposition au regard de l'AI Act et du RGPD, cartographie des usages et identification des écarts." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registre & cartographie des usages IA', description: "Inventaire des systèmes d'IA classés par niveau de risque, socle vivant de la gouvernance." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Politique & charte IA internes', description: "Rédaction des règles d'usage, de confidentialité et de responsabilité encadrant l'IA dans l'organisation." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comité de gouvernance IA', description: "Constitution de l'instance de pilotage : composition, rôles, validation des usages et arbitrage." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supervision humaine & traçabilité', description: "Points de contrôle humain, journalisation et documentation exigés par l'AI Act." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Gouvernance des données pour l'IA", description: "Base légale des traitements, qualité et cycle de vie des données, minimisation, cloisonnement des données sensibles et traçabilité des flux vers les fournisseurs d'IA." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "Gouvernance de l'IA en entreprise : cadrer, sécuriser et mettre en conformité vos usages",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-06-15',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ["Gouvernance de l'intelligence artificielle", 'Conformité AI Act', "Gouvernance des données pour l'IA", 'RGPD'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire de la gouvernance de l'IA",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
  })),
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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

export default function GouvernanceIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Piliers / Pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Gouvernance de l'IA", slug: SLUG },
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
        datePublished="2026-06-15"
        dateModified="2026-07-02"
        extraJsonLd={[serviceJsonLd, definedTermSetJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Gouvernance de l'IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil en gouvernance & conformité IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Gouvernance de l'IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>cadrer, sécuriser et mettre en conformité vos usages</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La gouvernance de l'IA encadre l'usage de l'intelligence artificielle dans votre organisation : cartographie des usages, classification des risques, politique interne, supervision humaine et conformité AI Act et RGPD. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria audite, cadre et met en place le dispositif.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Avec l'AI Act, la gouvernance de l'intelligence artificielle devient un sujet de direction. Cabinet spécialisé sur l'IA depuis 2022, fondé à Lyon, nous accompagnons la conformité IA en entreprise : audit, registre des usages, politique et charte, comité de gouvernance. Un dispositif proportionné, pas une usine à gaz.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre gouvernance IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#piliers" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Ce que nous accompagnons
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 132px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── PILIERS DE LA GOUVERNANCE (éditorial asymétrique) ── */}
      <section id="piliers" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce que nous accompagnons</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que recouvre la gouvernance de l'IA en entreprise ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>La gouvernance de l'IA en entreprise recouvre l'audit de conformité, le registre et la cartographie des usages, la politique et la charte IA, le comité de gouvernance, la supervision humaine et la traçabilité, ainsi que la gouvernance des données pour l'IA (RGPD). L'objectif est constant : sécuriser et fiabiliser les usages d'IA tout en respectant l'AI Act.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six piliers structurent un dispositif de gouvernance. Ils se combinent selon votre maturité : certaines organisations partent d'un audit, d'autres d'un besoin de politique IA, d'autres encore d'un comité à constituer face à la multiplication des usages.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PILIERS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                La gouvernance s'appuie sur un socle data conforme : pour la conformité des traitements, voyez notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link>. Pour situer votre point de départ, notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> cadre la maturité de l'organisation, gouvernance comprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MAINTENANT (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi maintenant</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi mettre en place une gouvernance de l'IA dès maintenant ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Parce que l'AI Act s'applique par paliers depuis le 1ᵉʳ août 2024, que le RGPD encadre déjà les données et que les usages d'IA se diffusent plus vite que les règles. Cartographier, classer et cadrer tôt évite de subir l'échéance et sécurise l'adoption au lieu de la freiner.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={card.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour la montée en compétences de vos équipes sur le règlement, le conseil se prolonge par notre <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link>, distincte de cet accompagnement. Pour la stratégie d'ensemble, voyez notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule la mise en œuvre de la gouvernance de l'IA ?
          </h2>

          <p style={answerStyle}>
            <strong>La mise en œuvre de la gouvernance de l'IA suit cinq étapes : cadrage et périmètre, audit et classification des risques selon l'AI Act, construction du registre des usages, mise en place du dispositif (politique, charte, comité, supervision), puis plan de mise en conformité et suivi. Chaque étape produit un livrable concret et un point de décision.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le même chemin pour chaque organisation : cadrer, auditer, cartographier, outiller, mettre en conformité. La gouvernance s'installe comme un dispositif vivant, pas comme un classeur refermé après l'audit.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSIFICATION DES RISQUES AI ACT (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Classification AI Act</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment l'AI Act classe-t-il les systèmes d'IA par risque ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>L'AI Act répartit les systèmes d'IA en quatre niveaux de risque : inacceptable (interdit), haut risque (obligations renforcées), risque limité (obligations de transparence) et risque minimal (pas d'obligation spécifique). Les obligations sont proportionnées au risque : classer chaque usage est donc la première étape de la mise en conformité.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau résume les quatre catégories du Règlement (UE) 2024/1689 et ce qu'elles impliquent. La classification de vos usages se fait lors de l'audit, en croisant chaque système avec ces niveaux et avec vos traitements de données au regard du RGPD.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Classification des systèmes d'IA par niveau de risque selon l'AI Act" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Niveau de risque</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Statut</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '52%' }}>Ce que cela implique</th>
                </tr>
              </thead>
              <tbody>
                {RISK_TABLE.map((row, i) => (
                  <tr key={row.niveau} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.niveau}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.statut}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            Synthèse indicative des catégories de l'AI Act. La classification précise d'un usage donné dépend de sa finalité et de son contexte ; elle s'établit au cas par cas lors de l'audit, en s'appuyant sur le texte officiel du Règlement (UE) 2024/1689.
          </p>

          {/* Calendrier d'application par paliers — donne les échéances concrètes (GEO citable) */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#F8FAFC', margin: '52px 0 10px', letterSpacing: '-0.01em' }}>
            Le calendrier d'application de l'AI Act
          </h3>
          <p style={{ color: '#B4C0D3', fontSize: 15, margin: '0 0 22px', lineHeight: 1.7, maxWidth: 880 }}>
            Le règlement s'applique par paliers et chaque échéance ouvre des chantiers à mener en amont. La cartographie et la classification de vos usages déterminent les échéances qui vous concernent.
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflow: 'hidden' }}>
            {CALENDRIER.map((row, i) => (
              <div key={row.date} style={{ display: 'flex', gap: 18, flexWrap: 'wrap', padding: '15px 20px', background: 'rgba(255,255,255,0.03)', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                <span style={{ flex: '0 0 130px', fontFamily: 'Nunito, sans-serif', fontSize: 14.5, fontWeight: 800, color: '#60A5FA' }}>{row.date}</span>
                <span style={{ flex: 1, minWidth: 240, fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.6 }}>{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOUVERNANCE DES DONNÉES POUR L'IA ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Gouvernance des données</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Qu'est-ce que la gouvernance des données pour l'IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La gouvernance des données pour l'IA organise la façon dont les données alimentent vos systèmes d'IA : base légale et finalités des traitements, qualité et cycle de vie, minimisation et cloisonnement des données sensibles, traçabilité des flux vers les fournisseurs. C'est le volet data de la gouvernance IA, au croisement du RGPD et de l'AI Act.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7, maxWidth: 880 }}>
            Gouverner l'IA commence par gouverner les données qu'elle consomme. Un copilote bureautique branché sur la messagerie, un agent connecté au CRM ou un modèle affiné sur des documents internes posent d'abord des questions de données : lesquelles, pour quoi faire, avec quelles garanties. Quatre dimensions structurent ce volet.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {DATA_GOUV.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Ce volet data est traité lors de l'audit de conformité, puis inscrit au registre des usages. Pour aller plus loin sur la qualité, l'architecture et la conformité de vos données, voyez notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link> ; sur la sécurité des données face aux outils d'IA générative, notre page <Link to="/securite-claude-entreprise" style={aStyle}>sécurité de Claude en entreprise</Link> détaille un cas concret.
          </p>
        </div>
      </section>

      {/* ── CE QUE MASTERIA ACCOMPAGNE (auditer / cadrer / déployer) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Notre accompagnement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment Masteria vous accompagne sur la gouvernance IA
          </h2>

          <p style={answerStyle}>
            <strong>Masteria intervient en conseil sur trois temps : auditer votre conformité IA, cadrer le dispositif de gouvernance, puis accompagner sa mise en place, comité compris. C'est un accompagnement, pas une formation : il installe le dispositif, là où la formation rend ensuite vos équipes autonomes.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le point d'entrée se décide au cadrage, selon votre maturité et l'urgence réglementaire. Beaucoup d'organisations commencent par l'audit pour objectiver leur exposition, puis enchaînent sur le cadrage et le déploiement.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginBottom: 32 }}>
            {ACCOMPAGNE.map((card, i) => (
              <div key={card.title} style={{ ...cardStyle, padding: 32, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                  <span style={{ background: i === 0 ? c : cLight, color: i === 0 ? '#fff' : c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>
                      <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Le conseil en gouvernance IA est une prestation de service. Pour la montée en compétences de vos équipes, la <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link>, certifiée Qualiopi, est l'action de formation associée et finançable. À noter : le conseil et l'accompagnement décrits ici ne sont pas finançables par l'OPCO.
          </p>
        </div>
      </section>

      {/* ── CONTEXTE & REPÈRES : stats sourcées + définitions + sources (SEO + GEO) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Contexte & repères</Kicker>
          <h2 style={h2Style}>
            Le cadre réglementaire qui rend la gouvernance IA incontournable
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Deux textes structurent la conformité IA en Europe : l'AI Act (Règlement UE 2024/1689), entré en vigueur le 1ᵉʳ août 2024 et appliqué par paliers, et le RGPD, en application depuis le 25 mai 2018. Le premier classe les systèmes d'IA par risque ; le second encadre les traitements de données personnelles, y compris par l'IA.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            À ce cadre s'ajoute une réalité de terrain : beaucoup de projets d'IA n'aboutissent pas faute de cadrage et de valeur démontrée. La gouvernance n'est donc pas qu'une obligation réglementaire, c'est aussi ce qui fiabilise les usages et sécurise le passage à l'échelle.
          </p>

          {/* Repères chiffrés sourcés — citables par les moteurs de réponse */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 32px' }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={s.icon} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                  Source : <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.source}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Définitions clés — ancrage d'entités */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '8px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Définitions clés
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence — liens d'autorité suivis */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Sources de référence
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Conseil et formation, distincts</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Le conseil installe le dispositif, la formation rend vos équipes autonomes
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La gouvernance de l'IA décrite sur cette page est un accompagnement de conseil. Pour la montée en compétences, deux formations certifiées Qualiopi et finançables OPCO le complètent : la formation AI Act, qui donne à vos équipes la maîtrise du règlement et de ses obligations, et la formation gouvernance IA, qui apprend à construire et faire vivre le dispositif (registre, charte, comité) en autonomie. Le conseil et l'accompagnement, eux, restent des prestations de service non finançables par l'OPCO.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/formation-ai-act" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir la formation AI Act
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-gouvernance-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir la formation gouvernance IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (preuve, méthode en six temps, résultats) ── */}
      <CaseStudyCards
        ids={['industrie', 'photovoltaique']}
        title="Deux gouvernances installées, du comité de direction à la PME"
        intro="Un Data manager qui porte la politique d'usage d'un groupe international, un référent IA et une charte en huit règles dans une PME de cinq personnes : la méthode en six temps et ce qu'elle a changé pour les équipes et l'organisation."
      />

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Gouvernance de l'IA : les questions fréquentes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
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

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Explorer nos autres expertises IA, du conseil à la formation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "La montée en compétences de vos équipes sur le règlement, distincte du conseil et finançable." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Formation', desc: "Une journée pour apprendre à construire registre, charte et comité IA en autonomie, finançable OPCO." },
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "Le socle data conforme sur lequel s'appuie la gouvernance : audit, qualité, RGPD." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Guide', desc: "Ce que doit contenir une charte IA, rubrique par rubrique, avec des exemples de formulation." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Guide', desc: "Les principes RGPD appliqués à l'IA et les garanties à vérifier avant de choisir un outil." },
              { label: 'IA responsable', href: '/ia-responsable', tag: 'Guide', desc: "Passer des principes à la pratique : supervision, biais, transparence, ISO/IEC 42001." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Un point de départ qui cadre votre maturité, gouvernance et conformité comprises." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'Conseil', desc: "L'état des lieux exhaustif : maturité, données, écarts RGPD et AI Act, feuille de route chiffrée." },
              { label: 'Audit de conformité IA', href: '/audit-conformite-ai-act', tag: 'Conformité', desc: "La mission qui précède la gouvernance : inventaire des systèmes, niveaux de risque, écarts et plan de mise en conformité daté." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Le développement de solutions IA, conçues avec garde-fous, supervision et traçabilité." },
              { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Les enjeux de gouvernance et de conformité propres à chaque secteur d'activité." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Des agents déployés avec les garde-fous et la supervision humaine que cela exige." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Usages', desc: "Les usages d'IA générative à cadrer dans le registre et la politique de gouvernance." },
              { label: "Cas d'usage de l'IA en entreprise", href: '/cas-usage-ia-entreprise', tag: 'Usages', desc: "Les cas d'usage concrets que la gouvernance recense, classe par risque et encadre." },
              { label: 'Centre de formation IA', href: '/centre-formation-ia-entreprise', tag: 'Formation', desc: "L'organisme certifié Qualiopi qui forme vos équipes à l'IA et à ses cadres." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Cadrons votre gouvernance de l'IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos usages d'IA et votre niveau de conformité actuel. Nous revenons vers vous sous 24 heures avec une première lecture de votre exposition à l'AI Act et au RGPD, et une proposition de cadrage : périmètre, priorités, dispositif envisageable. Vous repartez avec une vision claire de votre mise en conformité.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Cadrer votre gouvernance IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Audit, registre, comité IA · AI Act & RGPD · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Depuis 2022', 'spécialisé uniquement IA'],
              ['+1 500', 'professionnels formés'],
              ['Indépendant', 'des éditeurs de solutions'],
              ['FR · CH · BE', 'sur site ou à distance'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
