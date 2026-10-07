import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, PenLine, Search, Megaphone, Share2,
  Mail, BarChart3, Cog, Workflow, Target,
  MapPin, Layers, GraduationCap, Sparkles, AlertTriangle,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CadrageLink from '../components/CadrageLink'

/*
 * Page offre « agence IA marketing » (slug /agence-ia-marketing).
 * Cible : « agence ia marketing » (70/mois, KD 17), « agence ia marketing suisse » (40).
 * Intention : DÉLÉGUER (on produit et pilote pour le client), distincte de
 * /formation-ia-marketing. Anti-cannibalisation : bloc « déléguer ou former »
 * et lien formation en bas.
 * Maillage : /agence-developpement-ia, /agence-automatisation-ia,
 * /outils-ia-sur-mesure, /conseil-intelligence-artificielle, /formation-ia-marketing.
 * Grappe Semrush du 2026-09-03 : « cabinet de conseil marketing digital »,
 * « conseil en stratégie marketing digital », « consultant marketing automation » :
 * section « Conseil ou exécution » (4 cartes) et 2 questions de FAQ, angle IA seulement.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de FounderNote ni de bloc
 * « Qui intervient » commun, plus de chiffre de professionnels formés, offre d'entrée
 * « 30 minutes de cadrage offertes », faits outils datés (retrait des GPTs le
 * 11/12/2026, compétences Google dès le 05/10/2026, Vibe, Microsoft Copilot),
 * chiffres de marché sourcés (Forrester, Adobe), deux missions marketing citées.
 * Design premium charte Masteria (#2563EB), icônes lucide (zéro emoji).
 */

const SLUG = 'agence-ia-marketing'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "Agence IA marketing : contenu, campagnes & SEO | Masteria"
const META_DESC = "Agence IA marketing : contenus, SEO et GEO, campagnes, emailing et reporting produits avec l'IA, relus par un consultant. Lyon, Europe, États-Unis, Inde."
const KEYWORDS = "agence ia marketing, ia marketing, marketing ia, agence marketing intelligence artificielle, ia pour le marketing, cabinet de conseil marketing digital, cabinet conseil marketing ia, conseil en stratégie marketing digital, consultant marketing automation, conseil marketing ia"

/* Sources citées par la page (WebPage.citation + liens visibles en bas de page). */
const PAGE_CITATIONS = [
  { name: "Google Search Central : la position de Google sur les pages rédigées par ou avec une IA générative", url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content' },
  { name: "Google Search Central : les règles anti-spam, dont l'abus de contenu produit à grande échelle", url: 'https://developers.google.com/search/docs/essentials/spam-policies' },
  { name: "OpenAI : FAQ de fin de vie des GPTs personnalisés, avec la marche à suivre vers les plugins (lue le 7 octobre 2026)", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
  { name: "Google Workspace : le passage des Gems aux compétences, page d'aide aux administrateurs", url: 'https://knowledge.workspace.google.com/p/gems-migration' },
]

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 860 }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconBox({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Layers, label: 'Production déléguée, validation chez vous' },
  { icon: Sparkles, label: 'Claude, ChatGPT, Gemini, Copilot, Vibe' },
  { icon: MapPin, label: 'Europe · États-Unis · Inde' },
  { icon: Target, label: 'Indicateurs fixés dès le cadrage' },
]

/* ───────── Ce qu'on prend en charge (6 cartes) ───────── */

const PRESTATIONS = [
  { icon: PenLine, title: 'Production de contenu', desc: "Articles de blog, pages de service, fiches produit, livres blancs, newsletters : l'IA prépare les premiers jets à partir de vos sources, un consultant reprend le fond et le ton, puis la version à valider arrive chez vous." },
  { icon: Search, title: 'SEO & GEO', desc: "Recherche des requêtes, plan de contenus par thème, briefs, reprise des pages existantes. Le GEO (optimiser vos pages pour qu'un assistant d'IA les cite) travaille en plus la manière dont ChatGPT, Perplexity ou les résumés IA de Google parlent de votre marque quand un prospect les interroge." },
  { icon: Megaphone, title: 'Campagnes & ads', desc: "Annonces pour Google Ads et pour les réseaux de Meta : plusieurs accroches par audience, des angles comparés sans relever le budget, des messages ajustés selon que le prospect découvre votre offre ou s'apprête à commander." },
  { icon: Share2, title: 'Social media', desc: "Un calendrier éditorial mensuel, un même message réécrit pour LinkedIn, Instagram, X ou TikTok avec le ton de chaque réseau, des visuels préparés aux bons formats. Le rythme de publication se décide au cadrage." },
  { icon: Mail, title: 'Emailing & CRM', desc: "Séquences de bienvenue, de relance ou de réactivation écrites par segment, objets comparés en test A/B (deux versions envoyées à deux moitiés de la liste), scénarios branchés sur votre CRM, votre base clients, pour suivre chaque contact jusqu'au rendez-vous commercial." },
  { icon: BarChart3, title: 'Reporting & analyse', desc: "Les exports de Google Analytics, de la Search Console, de vos régies publicitaires et de votre outil d'emailing réunis dans un tableau de bord, avec un commentaire écrit : ce qui monte, ce qui baisse, ce que nous proposons de changer le mois suivant." },
]

/* ───────── Comment on travaille (4 temps) ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    badge: 'Premier atelier',
    desc: "Nous partons de vos objectifs commerciaux, de vos clients cibles et de ce qui vous distingue de vos concurrents, puis nous choisissons ensemble les canaux à reprendre. Le cadrage désigne aussi les indicateurs suivis et la personne qui valide chez vous.",
    livrable: "Un périmètre écrit, des objectifs chiffrés par canal et un calendrier de démarrage accepté par vous.",
  },
  {
    num: '02',
    title: 'Mise en place des outils et automatisations',
    badge: 'Socle de production',
    desc: "Nous retenons le modèle d'IA adapté à chaque tâche, transcrivons votre charte éditoriale en compétences (des fichiers d'instructions que l'assistant charge à la demande) et branchons les automatisations sur votre CRM, votre CMS (le logiciel qui gère votre site) et vos outils de planification.",
    livrable: "Des instructions de marque prêtes à servir, des flux de production testés et des connexions documentées avec vos logiciels.",
  },
  {
    num: '03',
    title: 'Production',
    badge: 'Rythme convenu',
    desc: "L'équipe produit les contenus, annonces et séquences inscrits au planning. Chaque pièce passe entre les mains d'un consultant, qui contrôle les faits, les chiffres et le ton, avant d'arriver chez vous pour validation.",
    livrable: "Des pièces prêtes à publier, relues, remises au rythme arrêté lors du cadrage.",
  },
  {
    num: '04',
    title: 'Pilotage',
    badge: 'Bilan mensuel',
    desc: "Nous relevons les résultats canal par canal, testons d'autres angles là où les chiffres stagnent et vous remettons un bilan commenté. Les priorités du mois suivant se décident avec vous, à partir de ce bilan.",
    livrable: "Un bilan écrit chaque mois, des décisions tracées et un dispositif qui progresse d'un cycle à l'autre.",
  },
]

/* ───────── Déléguer ou former (tableau honnête) ───────── */

const TABLE_DELEGUER = [
  {
    critere: 'Qui produit',
    deleguer: "Notre équipe, qui produit et pilote à votre place",
    former: 'Vos collaborateurs, après leur montée en compétence',
  },
  {
    critere: 'Délai de mise en route',
    deleguer: 'Court : la production démarre dès que le socle est installé',
    former: "Le temps des journées de formation, puis celui de la prise en main",
  },
  {
    critere: 'Charge pour vos équipes',
    deleguer: 'Légère : vous cadrez et validez, la production reste chez nous',
    former: 'La production repose sur elles au quotidien',
  },
  {
    critere: 'Montée en autonomie',
    deleguer: 'En option, par une passation en fin de mission',
    former: 'But premier : vos équipes produisent seules',
  },
  {
    critere: 'Prix',
    deleguer: "Forfait sur devis, rédigé après le cadrage",
    former: "1 980 € HT la journée de formation, que le groupe compte une personne ou douze",
  },
  {
    critere: 'Financement OPCO',
    deleguer: "Pas finançable par votre OPCO : la prestation relève du conseil et de la production",
    former: "Votre OPCO de branche peut la financer ; ses règles de prise en charge et ses fonds fixent le montant",
  },
]

/* ───────── Outils & approche ───────── */

const OUTILS = [
  { icon: Sparkles, title: 'Un modèle choisi pour chaque tâche', desc: "Un texte de fond, cent variantes d'annonces et l'analyse d'un export de campagne ne se confient pas au même outil. Nous comparons les assistants sur vos propres sujets avant de retenir celui qui servira chaque usage." },
  { icon: Cog, title: 'Automatisations sur mesure', desc: "Les flux que nous montons font passer un contenu du brouillon à la publication et gardent vos outils marketing synchronisés : un contact créé dans le CRM reçoit la bonne séquence, sans ressaisie." },
  { icon: PenLine, title: 'Cohérence de marque', desc: "Vos règles éditoriales vivent dans des instructions réutilisables, et chaque pièce produite passe par une relecture humaine. L'outil accélère l'écriture ; le consultant valide ce qui vous est envoyé." },
  { icon: Target, title: 'Pilotage par les résultats', desc: "Formats, angles et canaux gagnent ou perdent leur place selon les chiffres relevés chaque mois. Une hypothèse que les données contredisent sort du plan au cycle suivant." },
]

/* ───────── Ce que l'agence construit (livrables concrets) ───────── */

const CONSTRUIT = [
  {
    icon: Layers,
    title: 'Le socle de contenu assisté',
    desc: "Votre plateforme de marque (positionnement, ton, mots à employer et mots bannis) devient un jeu d'instructions que l'assistant applique à chaque demande, avec un gabarit par format : article, post, fiche produit, objet d'email. Une bibliothèque de prompts propre à votre équipe complète l'ensemble, pour qu'un nouveau rédacteur écrive d'emblée dans votre voix.",
    link: { href: '/bibliotheque-de-prompts', label: 'Bâtir une bibliothèque de prompts' },
  },
  {
    icon: Search,
    title: 'Le SEO et le GEO',
    desc: "Des pages construites pour se classer dans Google et pour être reprises par les moteurs de réponse : la réponse dans les premières lignes, des données structurées, des liens internes organisés par thème, des noms de marque et de produit sans ambiguïté. L'effort se justifie : sur les sites marchands américains, Adobe a mesuré en mars 2026 une conversion supérieure de 42 % pour les visiteurs venus d'une IA (rapport d'avril 2026).",
    link: { href: '/agence-seo-ia', label: 'Notre agence SEO IA en détail' },
  },
  {
    icon: Workflow,
    title: "L'automatisation marketing raisonnable",
    desc: "Une veille de votre secteur résumée à date fixe, un contenu principal décliné en posts, en email et en fiche produit, des rapports mensuels préremplis depuis vos exports. L'automatisation porte sur les tâches répétées à l'identique ; un humain relit chaque sortie avant qu'elle serve ou paraisse.",
  },
  {
    icon: BarChart3,
    title: 'La mesure',
    desc: "Les exports de vos outils d'analyse sont réunis, croisés et présentés dans un tableau qu'un dirigeant lit sans aide, avec nos recommandations pour le cycle suivant. L'IA prépare les données ; l'interprétation et les choix proposés reviennent au consultant.",
  },
  {
    icon: GraduationCap,
    title: "La formation de l'équipe",
    desc: "Le jour où vous voulez reprendre la main, vos collaborateurs prennent en main le socle, les gabarits et la bibliothèque de prompts, jusqu'à produire sans nous. Cette partie relève de la formation professionnelle : la certification Qualiopi de Masteria, obtenue au titre des actions de formation, couvre ce volet, et l'opérateur de compétences (OPCO) dont dépend votre secteur décide de son financement d'après ses propres critères et son budget.",
    link: { href: '/formation-ia-marketing', label: 'Le programme de formation IA marketing' },
  },
]

/* ───────── Les erreurs des dispositifs marketing IA ───────── */

const ERREURS = [
  {
    title: 'Produire plus sans plateforme de marque',
    desc: "Un modèle multiplie le volume de ce qu'on lui confie. Faute de positionnement, de ton et de vocabulaire écrits au préalable, il multiplie un texte interchangeable que vos clients ont déjà lu chez vos concurrents. La base éditoriale se pose avant de monter la cadence.",
  },
  {
    title: 'Publier sans relecture',
    desc: "Un modèle peut inventer un chiffre, attribuer une citation à la mauvaise source ou lisser le ton jusqu'à le rendre anonyme. Publié tel quel, chaque écart engage votre marque. Chez nous, aucune pièce ne vous parvient avant d'avoir été vérifiée par un consultant.",
  },
  {
    title: 'Confier le SEO à la seule volumétrie',
    desc: "Cent pages générées en une semaine n'installent aucune visibilité durable : Google juge l'utilité d'un contenu pour son lecteur, et ses règles anti-spam visent la production de pages à grande échelle. Un ensemble resserré, chaque page pensée pour une requête et reliée aux autres, tient mieux dans le temps.",
  },
  {
    title: "Outiller sans former l'équipe",
    desc: "Des licences distribuées sans méthode produisent autant de façons de faire que d'utilisateurs : chacun bricole ses prompts, la qualité varie d'un jour à l'autre, la marque s'effrite. L'outil arrive avec ses gabarits, ses règles d'usage et une formation des personnes qui produisent.",
  },
]

/* ───────── Conseil ou exécution (grappe « cabinet de conseil marketing digital ») ───────── */

const CONSEIL_EXEC = [
  {
    icon: Target,
    title: 'Conseil en stratégie marketing digital, version IA',
    desc: "Votre stratégie marketing reste la vôtre ; notre travail consiste à repérer où l'IA la sert. Quels contenus produire en volume, quels canaux automatiser, quelles données de campagne rendre lisibles, quelles règles poser pour protéger la marque. Le livrable est un plan d'outillage classé par priorité et chiffré, qui nomme aussi ce qu'il vaut mieux écarter.",
  },
  {
    icon: Workflow,
    title: 'Marketing automation : le consultant qui construit',
    desc: "Un consultant en marketing automation paramètre d'ordinaire votre outil d'emailing et ses scénarios. Nous y ajoutons ce que l'IA permet : fiches contacts enrichies, segments construits sur les comportements, messages rédigés pour chaque segment, relances écrites puis validées, bilans produits sans tableur. Le tout sur HubSpot, Brevo, Mailchimp ou le CRM que vous utilisez déjà.",
  },
  {
    icon: Layers,
    title: 'Cabinet de conseil ou agence : les deux, selon le besoin',
    desc: "Si vos équipes peuvent exécuter, nous gardons un rôle de conseil : cadrage, choix des outils, règles d'usage, formation. Si elles manquent de temps, l'agence reprend la production et le pilotage. La répartition se décide au cadrage et se revoit chaque trimestre.",
  },
  {
    icon: AlertTriangle,
    title: 'Les métiers que nous laissons aux spécialistes',
    desc: "Achat d'espace média, création d'identité de marque, relations presse : ces métiers ont leurs agences, avec lesquelles nous collaborons volontiers. Notre terrain est l'IA appliquée au marketing (contenu, référencement, automatisation, données), et nous préférons le tenir à fond.",
  },
]

/* ───────── FAQ (une seule, JSON-LD identique au visible) ───────── */

const FAQ = [
  {
    q: "Qu'appelle-t-on une agence IA marketing ?",
    a: "Un prestataire qui produit et pilote vos actions marketing en s'appuyant sur des outils d'intelligence artificielle : contenus, référencement SEO et GEO, annonces, réseaux sociaux, emailing, reporting. Masteria la propose en prestation déléguée : nos consultants produisent avec leurs outils, vous fixez les objectifs et validez. L'IA abrège le temps d'écriture et de déclinaison, et un consultant relit chaque pièce avant qu'elle vous parvienne.",
  },
  {
    q: "Quelle différence avec une formation IA marketing ?",
    a: "Avec la formation, vos équipes apprennent à produire seules. Elle entre dans notre certification Qualiopi, elle se facture 1 980 € HT la journée, et votre OPCO peut en couvrir le coût ; il applique ses propres règles et dépend des fonds qui lui restent. L'agence prend le chemin inverse : nous produisons et pilotons à votre place, sans prendre de temps à vos équipes au quotidien. Les deux s'enchaînent bien, l'agence lançant le dispositif avant de transmettre la méthode à vos collaborateurs.",
  },
  {
    q: "Intervenez-vous en Suisse romande ?",
    a: "Oui. Depuis Lyon, nous travaillons pour des entreprises de Suisse romande comme pour des clients en France et en Belgique. La production, la validation et le reporting passent par des outils en ligne, avec des points de suivi calés sur votre agenda ; nous venons sur place pour les ateliers de cadrage qui le justifient. Pour une entreprise suisse, nous établissons le devis en euros et hors taxes.",
  },
  {
    q: "Avec quels outils d'IA travaillez-vous ?",
    a: "Avec plusieurs, choisis selon la tâche : Claude, ChatGPT, Gemini, Microsoft Copilot ou Vibe, le produit de Mistral AI. Un article de fond, une série d'accroches publicitaires et l'analyse d'un export de campagne ne demandent pas le même modèle. Au 7 octobre 2026, nous écrivons vos instructions de marque sous forme de compétences plutôt que de GPTs, qu'OpenAI retire de toutes ses offres le 11 décembre 2026. Des automatisations relient ensuite votre CRM, votre CMS et vos outils de planification, pour que les contenus circulent sans ressaisie.",
  },
  {
    q: "Gardez-vous une relecture humaine sur les contenus produits par l'IA ?",
    a: "Oui, sur chaque pièce. L'IA accélère l'écriture et ne publie jamais seule. Un consultant vérifie les faits, les chiffres, les sources et le ton avant de vous soumettre le livrable, et la validation finale de tout ce qui paraît sous votre nom vous appartient.",
  },
  {
    q: "Combien coûte une agence IA marketing ?",
    a: "Le prix dépend des canaux confiés, du volume à produire, du niveau de pilotage et des automatisations à construire. Nous rédigeons un forfait après le cadrage : quelques milliers d'euros suffisent à un premier périmètre (un canal, ou le socle de marque), un dispositif complet relié à vos outils se compte en dizaines de milliers, et l'on dépasse 100 000 € quand le dispositif couvre plusieurs pays ou plusieurs marques. Production et pilotage, pas finançables par votre OPCO, se règlent sur le budget marketing. Si vous préférez former vos équipes, la formation IA marketing (1 980 € HT la journée) ouvre droit à une demande auprès de votre OPCO, qui tranche d'après ses règles et ses fonds.",
  },
  {
    q: "Masteria peut-elle jouer le rôle d'un cabinet de conseil marketing digital ?",
    a: "Oui, pour la part du marketing digital qui touche à l'IA. Nous cadrons la stratégie d'outillage (contenus, référencement, automatisation, données), choisissons les outils avec vous, posons les règles d'usage et formons les équipes : c'est le travail d'un cabinet de conseil. Le conseil marketing généraliste (positionnement de marque, plan média, études de marché) reste l'affaire des cabinets et agences qui en ont fait leur spécialité. Ce périmètre resserré nous permet de passer du conseil à l'exécution le jour où vos équipes manquent de temps.",
  },
  {
    q: "Que fait un consultant marketing automation avec l'IA ?",
    a: "Il repart de vos scénarios et de vos données, puis ajoute ce que l'IA rend possible : contacts enrichis sans saisie, segments fondés sur le comportement observé, séquences écrites pour chaque segment, relances adaptées au contexte, bilans de performance rédigés en langage clair. Sur HubSpot, Brevo, Mailchimp ou votre CRM, nous construisons les scénarios, les prompts qui rédigent les messages et les contrôles humains placés avant chaque envoi. Le résultat se lit sur des indicateurs que vous suivez déjà : ouvertures, réponses, rendez-vous obtenus, temps passé à monter une campagne.",
  },
  {
    q: "Agence marketing IA ou agence IA marketing : est-ce la même chose ?",
    a: "Oui. Les deux formules désignent le même service, un prestataire qui produit et pilote votre marketing avec l'appui de l'intelligence artificielle ; l'ordre des mots varie selon les habitudes de recherche. Chez Masteria, l'une comme l'autre recouvre la même prestation déléguée : contenus, SEO et GEO, campagnes, réseaux sociaux, emailing et reporting, relus par un consultant avant de vous être soumis.",
  },
  {
    q: "Quels résultats attendre d'une agence marketing IA ?",
    a: "Le premier effet se voit sur la capacité de production : davantage de contenus et de campagnes, à qualité égale, sans embaucher. Suivent une marque qui parle de la même voix sur tous les canaux et des décisions prises sur des chiffres. Nous ne promettons aucun chiffre de performance à l'avance : les indicateurs de réussite (trafic, citations par les IA, engagement, demandes de contact, selon vos objectifs) se fixent au cadrage, se relèvent chaque mois et se commentent dans le bilan.",
  },
  {
    q: "L'IA peut-elle produire tout notre contenu ?",
    a: "Non. L'IA prend en charge la recherche, les premiers jets, les déclinaisons et les reformulations ; la stratégie éditoriale, le choix des angles, les preuves, le ton propre à votre marque et le feu vert final restent entre des mains humaines. Chaque mission répartit le travail ainsi : votre plateforme de marque fixe la voix, nos consultants relisent et tranchent, vous validez ce qui sort sous votre nom. Un dispositif sans humain dans la boucle produit vite des textes que personne ne lit.",
  },
  {
    q: "Nos contenus assistés par IA seront-ils pénalisés par Google ?",
    a: "Google Search Central l'écrit dans ses consignes : un contenu est jugé sur sa qualité et son utilité pour le lecteur, quelle que soit la façon dont il a été produit. Google pénalise les pages fabriquées en série pour manipuler le classement, qu'elles sortent d'un modèle ou d'une plume humaine ; ses règles anti-spam rangent cette pratique parmi les abus, sous le nom de contenu produit à grande échelle. Un texte assisté par l'IA, sourcé, relu et utile se positionne aux mêmes conditions qu'un texte écrit à la main. Notre dispositif repose sur ces critères : socle de marque, relecture humaine, preuves et maillage interne.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "La production prend son rythme dans les premières semaines, sitôt le socle installé. La visibilité organique avance plus lentement : le SEO et le GEO se mesurent en mois, le temps que les moteurs explorent, évaluent et classent les pages. Nous ne promettons ni position ni délai chiffré ; le cadrage fixe les indicateurs suivis (volume produit, trafic, citations dans les moteurs de réponse, demandes entrantes) et le bilan mensuel les commente.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agence IA marketing',
  description: "Prestation déléguée de marketing produit avec l'IA : contenus éditoriaux, SEO et GEO, campagnes payantes, réseaux sociaux, emailing relié au CRM, mesure et reporting. Masteria produit et pilote pour l'entreprise, avec plusieurs modèles d'IA, des automatisations construites pour ses outils et un consultant qui relit chaque pièce.",
  url: 'https://www.master-ia.fr/agence-ia-marketing',
  serviceType: "Marketing produit avec l'IA",
  areaServed: ['France', 'Suisse', 'Belgique', 'États-Unis', 'Inde'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Prestations marketing de l'agence IA Masteria",
    itemListElement: [
      { '@type': 'Offer', name: "Contenus éditoriaux produits avec l'IA", description: "Articles, pages, fiches produit et newsletters écrits dans la voix de la marque, relus par un consultant avant validation." },
      { '@type': 'Offer', name: "Référencement SEO et GEO", description: "Requêtes, plan de contenus par thème, briefs, reprise des pages et citations par ChatGPT, Perplexity ou Gemini." },
      { '@type': 'Offer', name: 'Campagnes, réseaux sociaux, emailing et reporting', description: "Annonces, calendrier social, séquences d'emailing reliées au CRM et bilan mensuel commenté." },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-ia-marketing#article',
  headline: "Agence IA marketing : production de contenu, campagnes et SEO augmentés par l'IA",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-ia-marketing#webpage' },
  about: ["Marketing produit avec l'IA", 'SEO et GEO', 'IA générative', 'Marketing automation'],
}

/* ───────── Composants ───────── */

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

export default function AgenceIAMarketingPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections « périmètre » / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Agence IA marketing', slug: SLUG },
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
        citations={PAGE_CITATIONS}
        datePublished="2026-06-13"
        dateModified="2026-10-07"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Agence IA marketing</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 26 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                Prestation clé en main
              </span>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
              Nous produisons, vous validez
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agence IA marketing
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>production de contenu, campagnes et SEO augmentés par l'IA</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Texte de <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige Masteria depuis 2022 · relu et actualisé le 7 octobre 2026
          </p>

          {/* GEO : réponse directe pour citation LLM (accroche) */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria est une agence IA marketing qui prend votre production en charge : articles et pages, référencement dans Google comme dans ChatGPT ou Perplexity, annonces, réseaux sociaux, séquences d'emailing et tableaux de bord. Nos consultants s'appuient sur plusieurs modèles d'IA et <strong style={{ color: '#fff', fontWeight: 700 }}>relisent chaque livrable avant de vous le soumettre</strong>. Vous fixez le cap et donnez votre accord ; l'équipe produit, publie si vous le souhaitez et mesure. Depuis Lyon, l'équipe travaille pour des entreprises françaises et pour des clients installés ailleurs en Europe, en Inde ou aux États-Unis.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            L'IA générative démultiplie ce qu'une équipe marketing peut sortir en une semaine. Le résultat tient à trois réglages que peu d'équipes ont le temps de poser : le modèle adapté à chaque tâche, une voix de marque écrite noir sur blanc, un contrôle humain placé au bon endroit. Ces réglages occupent Masteria depuis sa fondation lyonnaise en 2022, et vous recevez des contenus et des campagnes prêts à partir.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir ce que nous produisons
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
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
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 5vw, 56px) 24px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap' }}>
          {[
            { num: '2022', label: "création du cabinet à Lyon, avec l'IA pour seul sujet" },
            { num: '6', label: 'familles de prestations, à confier ensemble ou une par une' },
            { num: '94 %', label: "des acheteurs B2B s'aident de l'IA pour acheter (Forrester, enquête 2025)" },
          ].map(s => (
            <div key={s.num} style={{ textAlign: 'center', maxWidth: 260 }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>{s.num}</p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CE QU'ON PREND EN CHARGE (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Périmètre</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que prend en charge une agence IA marketing ?
              </h2>

              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six familles de travaux peuvent nous être confiées : les contenus éditoriaux, le référencement SEO et GEO, les campagnes payantes, les réseaux sociaux, l'emailing relié à votre CRM, la mesure et le reporting. Vous retenez celles qui vous manquent ; l'équipe les produit et les pilote, et vos collaborateurs gardent leur temps pour le reste de leur métier.</strong>
              </p>

              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Un client peut nous confier tout son marketing digital ou un seul canal, par exemple la newsletter du mois ou les fiches produit d'un catalogue. Un consultant relit chaque pièce à la lumière de votre charte.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRESTATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconBox icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ON TRAVAILLE (timeline à rail, rail étroit) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={h2Style}>
            Comment se passe une mission d'agence IA marketing ?
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Une mission avance en quatre étapes : le cadrage de vos objectifs et de votre voix de marque, l'installation des outils et des automatisations qui serviront à produire, une production à rythme fixe relue par un consultant, puis un pilotage mensuel appuyé sur les chiffres de vos campagnes.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Cadrer, outiller, produire, piloter : chaque étape se conclut par un document ou une pièce que vous approuvez avant que la suivante commence.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <span style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.badge}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 700 }}>{step.desc}</p>
                  <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', maxWidth: 700 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', display: 'block', marginBottom: 4 }}>CE QUE VOUS OBTENEZ</span>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{step.livrable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE L'AGENCE CONSTRUIT (livrables concrets) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Livrables</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Ce que l'agence laisse en place chez vous
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À la fin d'une mission, cinq éléments restent chez vous : une base de contenu assistée à l'image de votre marque, un dispositif SEO et GEO, des automatisations marketing mesurées, un tableau de bord commenté et, si vous le décidez, une équipe formée pour prendre le relais. Chaque élément est documenté et vous appartient.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7, maxWidth: 860 }}>
            Nous les construisons dans l'ordre où ils servent, en commençant par la base de contenu, dont dépend tout le reste.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginBottom: 32 }}>
            {CONSTRUIT.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 14 }}>
                  <IconBox icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.68, margin: '0 0 14px' }}>{item.desc}</p>
                {item.link && (
                  <Link to={item.link.href} style={{ ...aStyle, marginTop: 'auto', fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                    {item.link.label}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0, maxWidth: 860 }}>
            Avant de lancer le chantier de visibilité, mieux vaut savoir d'où l'on part. Notre <Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> mesure vos positions dans Google ; l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO IA</Link> relève ce que ChatGPT, Perplexity ou Gemini disent aujourd'hui de votre marque, et à côté de quels concurrents. Menés au démarrage, ces deux audits donnent le point zéro de la mesure.
          </p>
        </div>
      </section>

      {/* ── OUTILS & APPROCHE (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Outils et approche</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 860 }}>
            Plusieurs modèles d'IA, des automatisations taillées pour vos outils
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Nous choisissons le modèle selon la tâche entre Microsoft Copilot (anciennement Microsoft 365 Copilot) et ses concurrents Claude, ChatGPT, Gemini ou Vibe, que développe Mistral AI, puis nous relions les automatisations à votre CRM, à votre CMS et à vos outils de planification. L'IA produit vite, le consultant tranche, et les résultats mesurés décident des réglages suivants.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            Ces outils changent vite, et une voix de marque rangée au mauvais endroit peut disparaître avec eux. Au 7 octobre 2026, OpenAI prévoit de retirer les GPTs personnalisés de toutes ses offres le 11 décembre 2026 : leurs instructions deviendront une compétence dans un plugin. Depuis le 5 octobre, Google installe dans Workspace des compétences appelées à remplacer les Gems, et l'assistant de Mistral s'appelle Vibe depuis le 28 mai 2026. Vos règles de marque, nous les écrivons donc sous forme de compétences, un format de fichier (SKILL.md) que Google et Microsoft ont repris dans leurs propres assistants, pour qu'elles survivent à un changement d'outil.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginBottom: 44 }}>
            {OUTILS.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: 0, maxWidth: 820 }}>
            Les flux qui transportent vos contenus entre vos logiciels sont construits par notre <Link to="/agence-automatisation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence d'automatisation IA</Link>. Si le besoin réclame une application à part entière, par exemple un générateur de fiches produit branché sur votre catalogue, nous développons des <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>outils IA sur mesure</Link>. Les modèles qui écrivent, illustrent et déclinent vos campagnes relèvent de l'<Link to="/ia-generative-entreprise" style={{ color: '#60A5FA', fontWeight: 600 }}>IA générative en entreprise</Link>, avec les garde-fous qui l'accompagnent.
          </p>
        </div>
      </section>

      {/* ── LES ERREURS DES DISPOSITIFS MARKETING IA ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce qui fait échouer</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Quatre erreurs font échouer un dispositif marketing IA
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les dispositifs marketing IA qui déçoivent tombent presque toujours dans l'un de ces quatre pièges : accélérer avant d'avoir écrit la marque, publier sans relire, miser sur le nombre de pages pour le SEO, distribuer des licences sans former. Le cadrage de nos missions les traite un par un.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Une partie de nos clients arrive avec un dispositif monté à la hâte ; les symptômes se ressemblent chez presque tous, et leurs causes aussi.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {ERREURS.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconBox icon={AlertTriangle} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.68, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSEIL OU EXÉCUTION (cabinet de conseil marketing digital, marketing automation) ── */}
      <section id="conseil" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Conseil ou exécution</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cabinet de conseil marketing digital ou agence : notre périmètre et celui des spécialistes
          </h2>
          <p style={answerStyle}>
            <strong>Masteria aborde le marketing digital sous un seul angle, celui de l'IA : stratégie d'outillage, marketing automation, production et pilotage. Nous jouons le rôle de cabinet de conseil quand vos équipes ont le temps d'exécuter, et celui d'agence quand elles ne l'ont pas.</strong> Le reste du marketing revient aux spécialistes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24, marginTop: 12 }}>
            {CONSEIL_EXEC.map(card => {
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
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour automatiser au-delà du marketing (ventes, administration, service client), rendez-vous sur la page de notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link> ; pour que vos équipes deviennent autonomes, sur celle de la <Link to="/formation-ia-marketing" style={aStyle}>formation IA marketing</Link>.
          </p>
        </div>
      </section>

      {/* ── DÉLÉGUER OU FORMER (bloc honnête) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Déléguer ou former</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Déléguer votre marketing IA ou former vos équipes ?
          </h2>

          <p style={answerStyle}>
            <strong>Déléguer, c'est nous confier la production et le pilotage : peu de temps pour vos équipes, un démarrage court, et une prestation de service pas finançable par votre OPCO. Former, c'est rendre vos équipes capables de produire elles-mêmes, avec une formation certifiée Qualiopi que votre OPCO peut financer si ses règles de prise en charge et ses fonds de l'année le permettent. Rien n'empêche d'enchaîner les deux.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Le tableau met les deux voies côte à côte sur six critères, pour que vous choisissiez selon le temps et le budget dont vous disposez.
          </p>

          <div style={{ ...cardStyle, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre déléguer son marketing IA à Masteria et former ses équipes" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '26%' }}>Critère</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: c, borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Déléguer (cette prestation)</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Former vos équipes</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DELEGUER.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.65, verticalAlign: 'top' }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#0A0A0A', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top' }}>{row.deleguer}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.former}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <GraduationCap size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>Vous voulez garder la compétence en interne ? La <Link to="/formation-ia-marketing" style={aStyle}>formation IA marketing</Link> apprend à vos équipes les mêmes usages, sur leurs propres contenus. Les deux voies se combinent : l'agence lance la production, puis transmet la méthode à vos collaborateurs avant de se retirer.</span>
          </p>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pourquoi Masteria</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Pourquoi choisir Masteria comme agence IA marketing ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Nous réunissons deux exigences que le marketing sépare souvent : une connaissance fine des modèles d'IA et le souci du texte bien écrit. Masteria se consacre à l'intelligence artificielle depuis sa création en 2022, en conseil, en développement et en formation ; l'agence produit et pilote votre marketing avec plusieurs modèles, des automatisations construites pour vos outils et un consultant qui relit tout ce qui sort.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '32px 0' }}>
            {[
              { icon: Sparkles, title: "L'IA comme seul sujet depuis 2022", desc: "Les modèles, leurs points forts, leurs pièges et leurs réglages font notre quotidien. Votre marketing profite de cette expérience dès le démarrage de la mission." },
              { icon: PenLine, title: 'Exigence éditoriale', desc: "Votre marque est écrite dans nos instructions et chaque texte passe sous les yeux d'un consultant. Rien ne paraît sous votre nom sans votre feu vert." },
              { icon: Workflow, title: 'Du contenu aux automatisations', desc: "Nous livrons des textes, et aussi les flux et les connexions qui font tourner le dispositif, du brief jusqu'au reporting." },
              { icon: MapPin, title: 'Europe, États-Unis et Inde', desc: "Depuis Lyon, la production et le pilotage se font à distance ; nous nous déplaçons pour les ateliers de cadrage qui gagnent à se tenir dans vos locaux." },
            ].map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 860 }}>
            Deux missions de formation récentes montrent ce travail de marque côté marketing. Chez une interprofession agricole formée en septembre 2026, l'équipe promotion et communication a rédigé sa voix de marque une seule fois, l'a confiée à un assistant commun au service, puis en a tiré des contenus en anglais, un calendrier éditorial et un bilan de campagne (<Link to="/etudes-de-cas-ia#mission-interprofession-agricole" style={aStyle}>le récit de la mission</Link>). Le même mois, la responsable des études d'un groupe immobilier, rattachée au marketing stratégique, a appris à passer de ses fichiers de ventes à un deck de direction avec Claude (<Link to="/etudes-de-cas-ia#mission-immobilier-etudes" style={aStyle}>le détail de sa journée</Link>).
          </p>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 860 }}>
            Si la question dépasse le marketing et concerne l'IA dans tous vos services (règles d'usage, conformité à l'AI Act, ordre des chantiers), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link> s'en charge. Pour une application à développer, notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> prend le relais.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Vos questions sur l'agence IA marketing
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre question n'apparaît pas dans la liste ? Apportez-la lors des 30 minutes de cadrage, ou écrivez-nous avant.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyer votre question
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les pages à lire ensuite
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Elles répondent aux suites possibles : confier une partie du dispositif, automatiser vos flux, former vos équipes en parallèle. Pour situer vos priorités marketing avant de démarrer, <CadrageLink style={aStyle}>30 minutes de cadrage offertes</CadrageLink> suffisent ; le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link>, dont ce cadrage arrête la durée et le forfait, en tire ensuite une feuille de route.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Stratégie marketing IA : le guide', href: '/blog/strategie-marketing-ia-humains-social-media', tag: 'Guide', desc: "Le partage du travail entre humains et IA appuyé sur les études, cinq décisions à prendre, une méthode pour les réseaux sociaux et des outils à petit budget." },
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Quand le marketing a besoin d'une vraie application (configurateur, générateur de fiches, portail client), l'équipe de développement la conçoit et la met en service." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Des flux, des assistants et des agents qui déplacent vos contenus et vos contacts entre vos logiciels, sans ressaisie." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Outils', desc: "Des outils internes taillés pour une tâche marketing précise, comme produire les fiches produit d'un catalogue entier dans la voix de la marque." },
              { label: "Usages de l'IA par service, marketing compris", href: '/cas-usage-ia-entreprise', tag: 'Usages', desc: "Ce que l'IA change dans un service marketing, exemples à l'appui, à côté des ventes, des ressources humaines ou de la finance." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Formation', desc: "Pour que vos équipes produisent elles-mêmes : programme certifié Qualiopi, que votre OPCO peut financer si ses critères et son budget le permettent." },
              { label: 'Formation multi-outils marketing', href: '/formation-multi-outils-marketing', tag: 'Comparatif', desc: "Les principaux assistants mis à l'épreuve de vos propres sujets marketing, pour choisir le vôtre en connaissance de cause." },
              { label: 'Formation ChatGPT marketing', href: '/formation-chatgpt-marketing', tag: 'ChatGPT', desc: "ChatGPT au service de la rédaction, des campagnes et de l'analyse, sur les tâches d'une équipe marketing." },
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
                    Lire la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Confiez-nous votre marketing IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Dites-nous quels objectifs vous visez et quels canaux vous aimeriez confier. En une demi-heure, en visio ou au téléphone, nous esquissons ensemble le périmètre, le dispositif de production et les indicateurs à suivre. Vous décidez ensuite de la suite, avec nous ou de votre côté.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Agence basée à Lyon · plusieurs modèles d'IA · relecture par un consultant · France, Europe, États-Unis, Inde
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe de l'agence marketing (fondateur + intervenants, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe marketing IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Mathias Nizan pilote, des spécialistes indépendants produisent
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              En créant Masteria à Lyon en 2022, Mathias Nizan a choisi un seul sujet, l'intelligence artificielle ; il suit chaque mission de l'agence. Pour votre marketing, il réunit selon le besoin des consultants IA (une dizaine dans le réseau) pour la stratégie et la relecture, des développeurs (cinq environ) pour les automatisations et les connexions, et des formateurs (une vingtaine) pour la passation à vos équipes ; tous exercent en indépendants. Libres de tout lien avec les éditeurs de logiciels, nous recommandons l'outil qui convient à votre équipe, quelle qu'en soit la marque. Les missions décrites dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et les articles réunis dans notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> permettent de vérifier ce qui précède.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Une dizaine', 'de consultants IA, stratèges et relecteurs'],
              ['Cinq', 'développeurs environ, pour les automatisations'],
              ['Une vingtaine', 'de formateurs pour la passation'],
              ['Lyon', "point de départ des missions, jusqu'aux États-Unis et en Inde"],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan signe cette page et la reprend à chaque évolution notable des outils marketing ; la version du 7 octobre 2026 intègre le calendrier de retrait des GPTs et l'arrivée des compétences chez Google. Son parcours et sa façon de conduire les missions sont décrits sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page de présentation</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
