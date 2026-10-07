import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Boxes, Rocket, Plug, ClipboardCheck, KeyRound, Wallet, GraduationCap, AlertTriangle, ShieldCheck, BookOpen, FolderSearch } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleure agence IA » : guide de choix 2026, angle AGENCE (qui développe
 * et intègre des outils IA dans les logiciels du client). Réécrite le 07/10/2026
 * pour atteindre 90 % de texte propre : grille de six critères propre à la page,
 * six voies de construction, cinq étapes, budgets à plafond ouvert, trois cas
 * résumés en une phrase avec leur ancre, sources rédigées pour la page.
 * Distincte de /meilleur-cabinet-conseil-ia (angle conseil et stratégie), de
 * /outils-ia-sur-mesure (requête « agence développement ia » depuis le 02/10)
 * et de /agence-ia (présentation de l'offre). Aucun classement nominatif, aucun
 * chiffre ni cas client inventé, jamais Gartner. Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'meilleure-agence-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-06-16'
const DATE_MODIFIED = '2026-10-07'
const RDV_URL = '/contact?type=projet&rdv=30'

const META_TITLE = 'Meilleure agence IA en 2026 : comment la choisir | Masteria'
const META_DESC = "Six critères pour choisir une agence IA qui branche l'IA sur vos logiciels et vous remet le code, les voies possibles, les étapes et les budgets 2026."
const KEYWORDS = 'meilleure agence ia, agence ia 2026, agence intelligence artificielle, agence ia en france, agence intégration ia, meilleures agences ia, choisir une agence ia, classement agences ia'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

/* La grille : six critères pour juger une agence qui développe et intègre.
 * Chaque critère se termine par la question à poser au premier rendez-vous. */
const CRITERIA = [
  {
    icon: Rocket,
    tag: 'Preuves',
    title: 'Elle vous montre un outil en service depuis plusieurs mois',
    body: "Une vidéo de démonstration prouve qu'une idée a fonctionné une fois, devant une caméra. Demandez à voir un outil livré depuis six mois au moins : ce qu'il fait chaque semaine, combien de personnes l'ouvrent, ce qu'il a fallu corriger après la mise en ligne. Une agence qui a traversé cette période en parle sans se faire prier, parce que c'est là qu'elle a appris son métier.",
    question: "Quel outil avez-vous livré il y a six mois, et que fait-il aujourd'hui ?",
  },
  {
    icon: Plug,
    tag: 'Intégration',
    title: "Elle sait brancher l'IA sur vos logiciels",
    body: "Un assistant utile va chercher vos données là où elles vivent : ERP, CRM, gestion documentaire, messagerie. Il y accède par des API (les points d'accès que vos logiciels ouvrent aux autres programmes) ou par MCP, le protocole publié par Anthropic à la fin de 2024 pour relier un modèle à des outils tiers. Une proposition qui ne nomme aucun de vos logiciels n'a pas encore regardé votre système d'information.",
    question: "Comment l'outil lira-t-il nos données, et avec quels droits d'accès ?",
  },
  {
    icon: ClipboardCheck,
    tag: 'Tests',
    title: 'Elle mesure la justesse des réponses avant la mise en service',
    body: "Un modèle de langage peut se tromper avec le ton le plus assuré. L'agence sérieuse bâtit avec vous un jeu de cas tests tirés de votre activité (demandes clients, devis, dossiers passés), fixe le niveau attendu et le contrôle avant chaque nouvelle version. Faute de ce jeu de tests, personne ne sait si la mise à jour du mois suivant a amélioré l'outil ou l'a abîmé.",
    question: "Sur quels cas tests validerez-vous l'outil, et qui les choisit chez nous ?",
  },
  {
    icon: KeyRound,
    tag: 'Réversibilité',
    title: 'Elle vous remet les clés : code, prompts, accès aux comptes',
    body: "Le jour où le contrat prend fin, vous devez pouvoir confier l'outil à une autre équipe sans tout reconstruire. Il faut pour cela que le dépôt de code, les prompts, les comptes ouverts chez les fournisseurs de modèles et la documentation soient à votre nom. Méfiez-vous d'une plateforme maison qu'il faudrait louer pour faire tourner ce qu'on a développé pour vous : elle change un projet en abonnement sans terme.",
    question: "Qu'est-ce qui nous appartiendra à la fin du projet, et sous quelle forme ?",
  },
  {
    icon: Wallet,
    tag: "Coût d'usage",
    title: "Elle chiffre ce que l'outil coûtera une fois en service",
    body: "La facture continue après la livraison : hébergement, appels aux modèles facturés au volume (ce que les éditeurs appellent l'inférence), supervision, corrections, passage à une nouvelle version du modèle. Une proposition solide donne un ordre de grandeur mensuel calculé sur votre volume d'utilisation et dit ce qui le fera monter.",
    question: 'Combien coûtera l\'outil chaque mois avec notre volume d\'utilisation ?',
  },
  {
    icon: GraduationCap,
    tag: 'Transmission',
    title: "Elle forme les personnes qui feront vivre l'outil",
    body: "Les prompts vieillissent à mesure que votre activité évolue, et chaque fournisseur remplace ses modèles par de nouvelles versions. Quelqu'un chez vous doit savoir ajuster l'outil sans attendre l'agence. La bonne agence désigne avec vous un ou deux référents, les forme pendant le projet et leur laisse un guide de mise à jour ; les utilisateurs apprennent l'outil sur leurs propres dossiers.",
    question: "Qui, chez nous, saura modifier l'outil sans vous appeler ?",
  },
]

/* Six façons de faire construire un outil IA (tableau texte, axe build) */
const ROUTES = [
  { route: 'Équipe interne', speed: 'Lente à démarrer (recrutements)', code: 'À vous', maint: 'Vos développeurs', skill: 'Élevée, tant que les profils restent', when: 'Plusieurs projets IA par an et des développeurs déjà en poste.' },
  { route: 'ESN en régie', speed: 'Moyenne', code: 'À vous en général', maint: 'Tant que les intervenants restent', skill: 'Faible : le savoir repart avec eux', when: "Renforcer la DSI sur un chantier long, facturé au temps passé." },
  { route: 'Studio produit IA', speed: 'Rapide', code: 'À négocier', maint: 'Contrat de maintenance en option', skill: 'Faible par défaut', when: 'Concevoir un produit IA pointu, destiné à vos propres clients.' },
  { route: 'Plateforme no-code', speed: 'En quelques jours', code: "L'éditeur garde le moteur", maint: "Liée à l'abonnement", skill: 'Moyenne', when: 'Relier deux ou trois logiciels sur un flux simple, à petit budget.' },
  { route: 'Logiciel du marché avec IA intégrée', speed: 'Immédiate', code: "Celui de l'éditeur", maint: "Assurée par l'éditeur", skill: 'Limitée à la prise en main', when: "Un besoin courant que l'éditeur couvre déjà : rédiger, résumer, chercher." },
  { route: 'Agence qui cadre, développe et forme', highlight: true, speed: 'Rapide', code: 'À vous, écrit au contrat', maint: 'Transmise à vos référents', skill: 'Élevée, prévue dès le cadrage', when: 'Un outil branché sur vos logiciels, et une équipe capable de le tenir ensuite.' },
]

/* Les cinq étapes d'un projet confié à une agence IA, du cadrage au suivi. */
const PROCESS = [
  { step: 'Cadrage', goal: "Choisir un cas d'usage qui rend du temps ou rapporte de l'argent, et écrire ce que « réussi » voudra dire.", deliver: 'Note de cadrage, indicateurs de réussite, liste des données nécessaires, première estimation du budget et du calendrier.', duration: 'Quelques jours à 2 semaines', watch: "Tant que le cas d'usage n'est pas tranché, aucune ligne de code ne devrait s'écrire." },
  { step: 'Prototype', goal: 'Vérifier la faisabilité sur un échantillon de vos propres dossiers.', deliver: 'Prototype manipulé par quelques utilisateurs, premiers résultats mesurés sur le jeu de cas tests.', duration: '2 à 4 semaines', watch: "Le prototype sert à décider. S'il ne convainc pas, l'arrêter à ce stade coûte peu." },
  { step: 'Industrialisation', goal: 'Faire du prototype un outil fiable, sécurisé et relié à vos logiciels.', deliver: "Outil hébergé, connecteurs vers votre système d'information, droits d'accès, journal des échanges (pour retrouver qui a demandé quoi), conformité RGPD et AI Act.", duration: '1 à 3 mois', watch: 'La propriété du code, la sécurité et la supervision se décident ici et se rattrapent mal ensuite.' },
  { step: 'Mise en service et adoption', goal: "Mettre l'outil entre les mains des utilisateurs et lever ce qui les retient.", deliver: "Mise en production, prise en main sur les dossiers des utilisateurs, guide d'usage, référents désignés.", duration: '2 à 4 semaines', watch: "Un outil que personne n'ouvre ne rapporte rien : l'accompagnement des utilisateurs pèse autant que le code." },
  { step: 'Suivi et évolutions', goal: 'Surveiller la justesse des réponses, corriger, ajouter des fonctions.', deliver: "Suivi de l'usage, rejeu des cas tests à chaque version, évolutions planifiées, passage progressif de la main à vos équipes.", duration: 'En continu', watch: 'Le budget mensuel du suivi se prévoit dès le cadrage, comme celui du développement.' },
]

/* Budgets 2026 : ordres de grandeur du marché français, fourchettes larges à plafond ouvert. */
const BUDGETS = [
  { mission: "Automatisation d'un processus", range: 'Dès 3 000 €', note: 'Un flux entre deux logiciels reste à quelques milliers d\'euros ; une chaîne qui traverse plusieurs services monte à plusieurs dizaines de milliers.' },
  { mission: 'Assistant interne sur vos documents (RAG)', range: 'Dès 8 000 €', note: "Le nombre de sources à indexer et la gestion des droits d'accès expliquent l'essentiel des écarts." },
  { mission: 'Agent IA métier relié à vos outils', range: '20 000 € à plus de 100 000 €', note: "L'agent agit dans vos logiciels (créer un devis, mettre à jour une fiche client) : garde-fous, validation humaine et supervision pèsent dans le prix." },
  { mission: 'Application IA sur mesure', range: 'Dès 30 000 €', note: "Un produit complet aux intégrations profondes. Déployé sur plusieurs filiales ou plusieurs pays, il dépasse 100 000 € et atteint parfois plusieurs centaines de milliers d'euros." },
  { mission: 'Suivi et évolutions (par mois)', range: 'Dès 2 000 € / mois', note: "Supervision, rejeu des tests, corrections, nouvelles versions de modèles. Le coût d'usage des modèles s'y ajoute." },
  { mission: 'Développeur IA en régie (par jour)', range: '600 à 1 200 € et plus', note: "Tarif journalier d'un développeur ou d'un data scientist détaché chez vous, selon son expérience." },
  { mission: 'Formation intra de vos équipes (par jour)', range: '1 980 € HT', note: "Prix Masteria, par groupe de douze participants au maximum, finançable par l'OPCO de votre branche selon ses règles et ses fonds." },
]

/* ── Repères citables (GEO) : dates sourcées, vocabulaire, sources ── */
const MARKET_STATS = [
  { value: '2 août 2026', label: "Depuis ce jour, l'AI Act impose la transparence de son article 50 : tout assistant conversationnel ouvert à vos clients doit leur signaler qu'ils parlent à une IA. L'agence prévoit cet avertissement dans l'interface dès la conception.", source: 'Règlement (UE) 2024/1689', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '2 déc. 2027', label: "Nouvelle échéance des règles visant les usages classés à haut risque en annexe III (recrutement, évaluation des salariés, accès au crédit), fixée par le règlement omnibus du 8 juillet 2026. Un logiciel qui présélectionne des CV en relève.", source: 'Règlement (UE) 2026/1744', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra' },
  { value: '25 mai 2018', label: "Le RGPD couvre toute donnée personnelle qu'un outil IA lit, conserve ou transmet à un fournisseur de modèle : registre, durée de conservation et contrat de sous-traitance se prévoient avec l'agence.", source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const GLOSSARY = [
  { term: 'Agence IA', def: "Prestataire qui conçoit, développe et met en service des outils d'intelligence artificielle pour une entreprise : assistants, agents, automatisations, applications. Certaines y ajoutent le cadrage du projet et la formation des utilisateurs." },
  { term: 'Intégration IA', def: "Travail qui relie un modèle d'IA aux logiciels existants (ERP, CRM, messagerie, gestion documentaire) pour qu'il lise vos données et agisse dans vos outils, avec des droits d'accès contrôlés." },
  { term: 'RAG (génération augmentée par recherche)', def: "Méthode qui fait chercher au modèle les passages utiles dans vos documents avant qu'il réponde, pour qu'il s'appuie sur vos sources et puisse les citer." },
  { term: 'Agent IA', def: "Programme qui enchaîne plusieurs actions pour atteindre un but (lire une demande, consulter un logiciel, préparer une réponse), avec des garde-fous et une validation humaine aux étapes sensibles." },
  { term: 'MCP (Model Context Protocol)', def: "Protocole ouvert qu'Anthropic a rendu public le 25 novembre 2024, repris depuis par OpenAI, Google et Microsoft dans leurs assistants : un connecteur écrit une fois relie vos outils à plusieurs assistants." },
]

/* Sources de la page (remplacent le bloc commun OfficialSources) */
const SOURCES = [
  { name: "Le texte de l'AI Act (règlement 2024/1689) sur EUR-Lex", note: "son article 50 fixe les règles de transparence des assistants conversationnels.", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { name: "L'omnibus IA adopté le 8 juillet 2026 (règlement 2026/1744), consultable sur EUR-Lex", note: "il décale au 2 décembre 2027 les règles applicables aux usages à haut risque listés en annexe III.", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra' },
  { name: "Les pages de la CNIL consacrées à l'intelligence artificielle", note: "les recommandations de l'autorité française pour les données personnelles qu'un système d'IA exploite.", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "La stratégie européenne pour l'IA, présentée par la Commission", note: 'le cadre politique et le calendrier vus depuis Bruxelles.', url: 'https://digital-strategy.ec.europa.eu/fr/policies/european-approach-artificial-intelligence' },
  { name: 'La certification Qualiopi expliquée par le ministère du Travail', note: "ce qu'elle garantit chez un organisme de formation, et pourquoi l'OPCO l'exige avant de payer.", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: 'Le rôle des opérateurs de compétences, sur le site du ministère du Travail', note: 'qui sont les OPCO et comment ils paient la formation des salariés.', url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
]

/* Trois missions résumées pour cette page, chacune reliée à son ancre de /etudes-de-cas-ia
 * (faits relus dans src/data/etudes-de-cas.js le 07/10/2026). */
const CASES = [
  {
    anchor: 'distribution',
    criterion: 'Critère 6 · Transmission',
    text: "Chez un distributeur informatique B2B de 58 salariés, dix référents formés sur deux journées en juin 2026 ont mis au point onze compétences Claude (des procédures que l'assistant applique à une tâche donnée) pour la cotation, les relances de devis ou les cahiers des charges. Chaque compétence a un propriétaire nommé et un dépôt versionné, et ce sont ces référents qui emmèneront le reste de l'entreprise entre octobre et décembre 2026.",
    link: 'Lire le cas du distributeur IT',
  },
  {
    anchor: 'conseil-financier',
    criterion: 'Critère 3 · Tests',
    text: "Un cabinet de conseil financier indépendant, qui travaille pour le secteur public, a construit avec nous quatre assistants de réponse aux marchés publics, un par famille de marchés. Ses consultants en ont écrit et testé les prompts pendant quatre ateliers de deux heures, à partir de consultations récentes et des mémoires techniques les mieux classés par les jurys, et un guide désigne qui les tient à jour.",
    link: 'Lire le cas du cabinet de conseil financier',
  },
  {
    anchor: 'photovoltaique',
    criterion: 'Critère 2 · Intégration',
    text: "Chez un distributeur de matériel photovoltaïque de trois personnes, dont toute l'activité passe par l'ERP Odoo, le diagnostic présenté en septembre 2026 a retenu trois assistants à bâtir sur les propres fichiers de l'équipe, puis à relier à Odoo par paliers. Un premier bilan sera mesuré un mois après les deux jours de formation prévus sur site en octobre.",
    link: 'Lire le cas du distributeur photovoltaïque',
  },
]

const FAQ = [
  {
    q: 'Que fait une agence IA pour une entreprise ?',
    a: "Elle conçoit et met en service des outils d'intelligence artificielle adaptés à votre activité : un assistant qui puise ses réponses dans vos documents, un agent qui prépare des devis dans votre ERP, une automatisation qui trie les demandes entrantes. Son travail va du choix du cas d'usage jusqu'au passage en production et, chez les agences les plus complètes, jusqu'à la formation des personnes qui tiendront l'outil.",
  },
  {
    q: 'Quelle est la meilleure agence IA en 2026 ?',
    a: "Aucun organisme ne délivre ce titre, et les palmarès publiés en ligne mélangent publicité et déclarations des agences elles-mêmes. La meilleure pour vous a déjà mis en service un outil comparable au vôtre, l'a relié à des logiciels proches des vôtres et vous laisse son code. Rencontrez deux ou trois agences, posez-leur les six questions de ce guide et comparez leurs réponses écrites.",
  },
  {
    q: 'Faut-il confier votre projet à une agence IA ou à un cabinet de conseil ?',
    a: "Si vous savez quel outil vous voulez, une agence qui développe et intègre est le bon interlocuteur. Si vous hésitez encore sur les priorités, l'organisation ou la gouvernance, un cabinet de conseil vous aidera d'abord à trancher ; notre guide consacré aux cabinets de conseil traite ce cas. Masteria fait les deux, et la même équipe passe de la recommandation au code.",
  },
  {
    q: 'Combien coûte un projet confié à une agence IA ?',
    a: "Sur le marché français en 2026, comptez dès 3 000 € pour une automatisation simple, entre 20 000 € et plus de 100 000 € s'il s'agit d'un agent relié à vos logiciels, et au-delà de 100 000 €, parfois plusieurs centaines de milliers d'euros, pour une application déployée dans plusieurs filiales. Le suivi mensuel s'ajoute dès la mise en service. Masteria facture le développement au forfait, fixé une fois le cadrage mené ; votre OPCO ne le prend pas en charge, alors que la formation des équipes peut l'être selon les règles et les fonds de l'OPCO de votre branche.",
  },
  {
    q: 'À qui appartiennent code, prompts et données une fois le projet livré ?',
    a: "Le contrat doit le dire avant la signature. Exigez que le dépôt de code, les prompts, les comptes chez les fournisseurs de modèles et la documentation soient à votre nom, et qu'aucune de vos données n'alimente l'entraînement des modèles du fournisseur. Une agence qui refuse, ou qui impose sa plateforme payante pour faire tourner l'outil, vous rend dépendant d'elle. Chez Masteria, tout ce qui est livré vous appartient.",
  },
  {
    q: 'Comment tester une agence IA avant de lui confier un projet ?',
    a: "Confiez-lui d'abord un périmètre court et payant : un cadrage, ou un prototype sur un échantillon de vos données avec des cas tests que vous choisissez. Vous verrez sur pièces sa compréhension de votre métier, la justesse de ses réponses et la qualité de sa documentation. Si le prototype ne convainc pas, vous vous arrêtez là pour un coût limité.",
  },
  {
    q: 'Que recouvre l\'expression « agence d\'intégration IA » ?',
    a: "Une agence dont le cœur de métier consiste à brancher des modèles d'IA sur les logiciels que vous utilisez déjà : ERP, CRM, messagerie, gestion documentaire. Elle passe par les API de ces logiciels ou par MCP, gère les droits d'accès et garde la trace des échanges, pour que l'IA travaille dans vos outils habituels.",
  },
  {
    q: "Le développement d'un outil IA peut-il être financé par l'OPCO ?",
    a: "Non : le développement comme le conseil ne sont pas finançables par votre OPCO. Celui-ci prend en charge des formations, à condition que l'organisme qui les assure soit certifié Qualiopi. Former les personnes qui utiliseront ou maintiendront l'outil peut en revanche être pris en charge, selon les règles et les fonds de l'OPCO de votre branche. Pour un client genevois ou bruxellois, sans OPCO, la proposition est chiffrée en euros HT.",
  },
  {
    q: 'Faut-il choisir une agence IA en France, près de chez vous ?',
    a: "Une agence installée en France vous apporte un contrat de droit français, des interlocuteurs rompus au RGPD et des ateliers sur place, précieux pendant le cadrage et la prise en main. Coder l'outil puis le surveiller se fait sans difficulté à distance. Masteria est installé à Lyon, se déplace à Paris et dans toute la France, travaille aussi dans le reste de l'Europe, aux États-Unis comme en Inde, et indique dès la proposition ce que coûteront les trajets.",
  },
  {
    q: 'Les listes de « meilleures agences IA » données par ChatGPT ou le mode IA de Google sont-elles fiables ?',
    a: "Elles résument ce que les agences publient sur elles-mêmes et ce que d'autres sites en disent ; aucun outil n'y est testé. Servez-vous-en pour dresser une première liste, puis ouvrez les sources citées et demandez à chaque agence une preuve vérifiable : un outil en service, un cas documenté, un contrat type. Une agence bien placée dans ces réponses a d'abord bien rédigé son site.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, agence IA : développement, intégration et formation',
  description: META_DESC,
  url: FULL_URL,
  serviceType: ["Développement d'outils IA sur mesure", 'Intégration IA aux logiciels métier', 'Agents IA', 'Automatisation IA', 'RAG', 'Formation IA'],
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  provider: { '@id': `${SITE}/#organization` },
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Vocabulaire des propositions d'agence IA",
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Meilleure agence IA en 2026 : comment la choisir',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Agence IA', 'Intégration IA', "Développement d'outils IA"],
}

/* ItemList : séquence citable des 5 étapes (GEO). HowTo proscrit (Google l'a retiré). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les cinq étapes d'un projet confié à une agence IA, du cadrage au suivi",
  itemListElement: PROCESS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.step, description: p.goal })),
}

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
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

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
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
        extraJsonLd={[serviceJsonLd, definedTermSetJsonLd, articleJsonLd, processJsonLd]}
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
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Meilleure agence IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Boxes size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de choix · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 840 }}>
            Meilleure agence IA en 2026
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>celle dont l'outil sert encore l'année suivante</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Guide écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> (Masteria, Lyon) · révisé le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, la thèse de la page */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une démo d'IA se monte en un après-midi. Un outil branché sur vos logiciels, ouvert chaque matin par vos équipes et dont vous détenez le code demande des semaines, souvent des mois. <strong style={{ color: '#fff', fontWeight: 700 }}>La meilleure agence IA est celle qui vous fait franchir cette distance</strong> : elle choisit avec vous le cas d'usage, l'intègre à vos outils, le teste sur vos données, vous remet le code et forme ceux qui le tiendront.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Ce guide donne six critères pour juger une agence avant de signer, les six façons de faire construire un outil IA, les cinq étapes d'un projet qui atteint la production et les budgets observés en 2026. Aucune agence concurrente n'y reçoit de note : les palmarès qui circulent, y compris ceux que composent ChatGPT ou le mode IA de Google, reprennent surtout ce que les agences écrivent sur elles-mêmes.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#savoir-faire" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Voir les six critères
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Réserver 30 minutes de cadrage
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Ce qui compte', "Une agence IA se juge sur les outils qu'elle a mis en service chez ses clients et qui tournent encore aujourd'hui."],
                ['Un classement officiel ?', "Il n'en existe aucun en France. Les palmarès publiés, comme les listes que dressent les assistants IA, reprennent ce que les agences déclarent."],
                ['La clause à exiger', 'La réversibilité : le code, les prompts, les accès aux comptes et la documentation vous reviennent, écrits noir sur blanc dans le contrat.'],
                ['Budgets 2026', "Dès 3 000 € pour automatiser un flux simple, des dizaines de milliers pour un agent qui agit dans vos logiciels, au-delà de 100 000 € quand une application se déploie dans tout un groupe."],
                ['Et Masteria ?', 'Un cabinet lyonnais spécialisé en IA qui conçoit des outils sur mesure dont le code vous revient, et qui forme vos équipes à les tenir.'],
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

      {/* ── POURQUOI LES PROJETS CALENT ENTRE LA DÉMO ET LA MISE EN SERVICE ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader icon={AlertTriangle} kicker="Le point de blocage" title="Pourquoi un projet IA cale entre la démo et la mise en service" />
          <p style={leadStyle}>
            Le modèle lui-même pose rarement problème. En 2026, un prototype qui résume des contrats ou répond à des questions sur un catalogue se construit en quelques jours. Le travail difficile commence ensuite : brancher l'outil sur votre ERP, votre CRM ou votre gestion documentaire, décider qui a le droit de voir quoi, vérifier que les réponses restent justes sur des centaines de cas, puis convaincre une équipe de changer ses habitudes.
          </p>
          <p style={answerStyle}>
            Les projets qui s'arrêtent racontent presque tous la même histoire. Le cas d'usage a été retenu parce qu'il faisait bonne impression en réunion de direction. Le devis couvrait le prototype et laissait de côté l'hébergement, la supervision et le coût d'usage des modèles. Aucun salarié n'a appris à corriger un prompt ou un connecteur, si bien que l'outil perd en qualité au premier changement de version du modèle.
          </p>
          <p style={mutedStyle}>
            Une bonne agence se reconnaît à la façon dont elle prévient ces accidents dès sa proposition commerciale. Les six critères qui suivent permettent de le vérifier.
          </p>
        </div>
      </section>

      {/* ── LA GRILLE : SIX CRITÈRES ── */}
      <section id="savoir-faire" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La grille</div>
          <h2 style={h2Style}>Six critères pour juger une agence IA avant de signer</h2>
          <p style={leadStyle}>
            Chaque critère se résume à une question à poser dès le premier rendez-vous. Une agence solide y répond avec un exemple, un document ou une clause de contrat ; une réponse floue vous renseigne autant qu'une bonne.
          </p>
          <p style={mutedStyle}>
            Les deux premiers critères portent sur ce que l'agence a déjà livré, les quatre suivants sur ce qu'elle vous livrera.
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {CRITERIA.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.tag} style={{ ...cardStyle, padding: 'clamp(24px, 3vw, 34px)', display: 'grid', gridTemplateColumns: isDesktop ? '52px 1fr' : '1fr', gap: isDesktop ? 24 : 16, borderTop: `3px solid ${c}`, background: '#fff' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{`0${i + 1} · ${p.tag}`}</span>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>{p.body}</p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                      <strong style={{ color: c }}>La question à poser : </strong><span style={{ color: '#0A0A0A' }}>{p.question}</span>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre projet commence plutôt par une question de priorités ou de gouvernance ? Le guide qui compare les{' '}
            <Link to="/meilleur-cabinet-conseil-ia" style={{ color: c, fontWeight: 600 }}>cabinets de conseil en intelligence artificielle</Link>{' '}
            traite cet angle. Si vous savez déjà quel outil vous voulez, la page{' '}
            <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils et copilotes IA développés sur mesure</Link>{' '}
            montre ce que nous construisons, et celle de notre{' '}
            <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link>{' '}
            explique comment nous codons et livrons. Pour brancher un modèle sur vos documents, voyez l'
            <Link to="/integration-llm-rag" style={{ color: c, fontWeight: 600 }}>intégration de modèles de langage et le RAG</Link>. Les organismes de formation se comparent dans le guide de la{' '}
            <Link to="/meilleure-formation-ia" style={{ color: c, fontWeight: 600 }}>meilleure formation IA</Link>, et les cinq familles de prestataires dans celui du{' '}
            <Link to="/prestataire-ia" style={{ color: c, fontWeight: 600 }}>prestataire IA</Link>.
          </p>
        </div>
      </section>

      {/* ── SIX FAÇONS DE FAIRE CONSTRUIRE VOTRE OUTIL (tableau texte, axe build) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Les voies possibles</div>
          <h2 style={h2Style}>Six façons de faire construire votre outil IA, et ce que chacune vous laisse</h2>
          <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Vous pouvez développer en interne, louer des développeurs à une ESN, confier le produit à un studio spécialisé, assembler l'outil sur une plateforme no-code, acheter la fonction IA d'un logiciel du marché ou passer par une agence qui cadre, développe et forme.</strong>{' '}
            Le tableau les compare sur ce qui pèse au bout de deux ans : la vitesse de démarrage, la propriété du code, la charge de maintenance et ce que vos équipes sauront faire seules.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            La colonne « Propriété du code » décide de votre liberté future. Quand elle indique « À négocier », la question doit figurer au contrat ; faute de clause, le prestataire conserve la maîtrise du code qu'il a écrit.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 980 }}>
              <caption style={srOnlyStyle}>
                Six façons de faire construire un outil d'IA comparées sur la vitesse, la propriété du code, la maintenance, l'autonomie laissée à l'équipe et le besoin type
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Voie</th>
                  <th scope="col" style={thStyle}>Vitesse</th>
                  <th scope="col" style={thStyle}>Propriété du code</th>
                  <th scope="col" style={thStyle}>Maintenance</th>
                  <th scope="col" style={thStyle}>Autonomie interne</th>
                  <th scope="col" style={thStyle}>Pour quel besoin</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((r, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={r.route} style={r.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '16px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: r.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 180 }}>
                        {r.route}
                        {r.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de Masteria
                          </span>
                        )}
                      </th>
                      <td style={td}>{r.speed}</td>
                      <td style={{ ...td, fontWeight: r.highlight ? 700 : 400, color: r.highlight ? c : '#374151' }}>{r.code}</td>
                      <td style={td}>{r.maint}</td>
                      <td style={td}>{r.skill}</td>
                      <td style={{ ...td, minWidth: 220 }}>{r.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DE L'IDÉE À LA PRODUCTION : LES 5 ÉTAPES (timeline) ── */}
      <section id="methode" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>Les cinq étapes qui mènent un outil IA jusqu'à la production</h2>
          <p style={leadStyle}>
            Une agence sérieuse suit à peu près ce chemin, quel que soit le nom qu'elle donne aux étapes. Comparez-le aux propositions que vous recevez : une étape absente du planning se paiera plus tard, en retard ou en avenant.
          </p>
          <p style={mutedStyle}>
            Les durées valent pour un premier outil et se chevauchent souvent. Le point de vigilance signale l'endroit où les projets déraillent le plus.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 19, top: 18, bottom: 18, width: 2, background: '#E5E7EB' }} />
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
              {PROCESS.map((p, i) => (
                <li key={p.step} style={{ position: 'relative', paddingLeft: 60 }}>
                  <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, width: 40, height: 40, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>{i + 1}</span>
                  <div style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.step}</h3>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: c, background: cLight, borderRadius: 99, padding: '4px 11px', whiteSpace: 'nowrap' }}>{p.duration}</span>
                    </div>
                    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{p.goal}</p>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 8px' }}><strong style={{ color: '#0A0A0A' }}>Livrable : </strong>{p.deliver}</p>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}><strong style={{ color: c }}>Point de vigilance : </strong><span style={{ color: '#374151' }}>{p.watch}</span></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── BUDGETS (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Budgets 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte un projet confié à une agence IA en 2026 ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une automatisation simple démarre à quelques milliers d'euros ; pour un agent relié à vos logiciels, on parle en dizaines de milliers, et une application déployée dans tout un groupe dépasse 100 000 € pour atteindre parfois plusieurs centaines de milliers d'euros.</strong>{' '}
            Un budget mensuel de suivi s'y ajoute dès que l'outil est en service.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ces fourchettes donnent des ordres de grandeur du marché français, larges à dessein : le nombre de logiciels à connecter et le volume d'utilisation font varier le prix plus que la technologie retenue. Masteria chiffre le conseil comme le développement au forfait, sur un devis établi après le cadrage. Pour décomposer un budget ligne par ligne, ouvrez le guide du{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>prix d'un projet IA</Link>.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Fourchettes de budget 2026 pour les outils qu'une agence IA développe en France, du flux automatisé à l'application sur mesure</caption>
              <thead>
                <tr>
                  {['Type de solution', 'Budget observé', 'Ce qui le fait varier'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => (
                  <tr key={b.mission}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{b.mission}</th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{b.range}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>Ce que l'OPCO finance dans un projet d'agence :</strong> ni le développement d'un outil ni le conseil ne sont finançables par votre OPCO. La formation de vos équipes peut l'être, selon les règles et les fonds de l'OPCO de votre branche, quand l'organisme qui l'assure détient la certification Qualiopi. Si une agence vous annonce un développement « pris en charge », demandez-lui par écrit quel dispositif elle invoque.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="Trois dates et cinq mots à connaître avant de commander un outil IA" />
          <p style={answerStyle}>
            Les trois dates viennent des textes européens et changent ce que votre agence doit prévoir dans l'outil. Les cinq mots reviennent dans toutes les propositions commerciales. Pour le cadre complet, notre page sur les{' '}
            <Link to="/gouvernance-ia" style={{ color: c, fontWeight: 600 }}>règles de gouvernance de l'IA dans une entreprise</Link>{' '}
            reprend les obligations une à une.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Définitions</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Les mots des propositions d'agence</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Les comprendre suffit pour poser les bonnes questions et lire un devis sans intermédiaire.
              </p>
            </div>
            <div>
              <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={g.term} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── TROIS MISSIONS LUES AVEC LA GRILLE (remplace les cartes communes) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={FolderSearch} kicker="Sur pièces" title="Trois missions Masteria relues avec cette grille" />
          <p style={{ ...mutedStyle, margin: '0 0 32px' }}>
            Chaque cas est anonymisé à la demande du client et décrit en entier, chiffres compris, sur notre page d'études de cas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CASES.map(k => (
              <div key={k.anchor} style={{ ...cardStyle, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...kickerStyle, fontSize: 12, marginBottom: 12 }}>{k.criterion}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{k.text}</p>
                <Link to={`/etudes-de-cas-ia#${k.anchor}`} style={{ color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {k.link}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASTERIA ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre positionnement</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Où se place Masteria sur cette grille</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Cadrage · développement · formation
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Vous cherchez plutôt à départager les assistants du marché (ChatGPT, Claude, Gemini, Vibe de Mistral) ? Notre{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>comparatif des assistants IA</Link>{' '}
                les met face à face.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Mathias Nizan dirige Masteria depuis sa création, à Lyon, en 2022, et le cabinet n'a qu'une spécialité : l'intelligence artificielle. Nous n'avons ni logiciel à vendre ni éditeur à placer : le modèle et l'hébergement se choisissent selon votre projet, et ce que nous livrons reste entre vos mains.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 14 }}>
                  {[
                    ['Développement', "assistants, agents, automatisations et applications reliés à votre ERP, à votre CRM ou à votre gestion documentaire par API ou par MCP. Code, prompts et documentation vous reviennent ; une régie sur site reste possible."],
                    ['Cadrage et conseil', "choix du cas d'usage, jeu de cas tests, règles RGPD et AI Act, accompagnement des utilisateurs jusqu'à l'usage quotidien. Votre OPCO ne prend en charge aucune de ces prestations."],
                    ['Formation', "certifiée Qualiopi pour la catégorie « actions de formation », au tarif journalier de 1 980 € HT, en intra (douze participants au plus par groupe) ou en individuel, et finançable par l'OPCO de votre branche selon ses règles et ses fonds. Le catalogue réunit plus de 100 programmes."],
                  ].map(([t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <BadgeCheck size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}><strong style={{ color: '#0A0A0A' }}>{t} : </strong>{d}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Pour chaque projet, Mathias Nizan réunit les profils utiles parmi environ cinq développeurs IA, une dizaine de consultants et une vingtaine de formateurs, tous indépendants, et pilote lui-même la mission. Masteria est Activateur France Num et a été cité par Les Échos.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 20px' }}>
                  Si votre besoin relève d'un autre profil, une ESN pour un renfort de longue durée ou un éditeur dont le logiciel fait déjà le travail, nous vous le dirons dès le premier rendez-vous de 30 minutes. Pour un premier état des lieux, le{' '}
                  <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>{' '}
                  est une intervention courte dont la durée et le forfait se fixent au cadrage ; la page{' '}
                  <Link to="/agence-ia" style={{ color: c, fontWeight: 600 }}>agence IA à Lyon</Link>{' '}
                  présente l'offre dans son ensemble.
                </p>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: 0, paddingTop: 16, borderTop: '1px solid #E5E7EB', fontStyle: 'italic' }}>
                  « J'ai écrit cette grille pour qu'elle serve aussi face à nos concurrents. Si une agence, la nôtre comprise, bute sur l'une des six questions, prenez le temps de comprendre pourquoi avant de signer. »{' '}
                  <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600, fontStyle: 'normal' }}>Mathias Nizan</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Dix questions avant de confier un projet à une agence IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre situation ne rentre dans aucune de ces dix questions ?</p>
              <Link to="/contact?type=projet" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Décrivez-nous votre projet
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passons votre projet au crible des six critères
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez en quelques lignes l'outil que vous imaginez et les logiciels qu'il devra toucher. En 30 minutes, nous regardons avec vous ce qui est faisable, l'ordre de grandeur du budget et le type de prestataire qui vous convient, quitte à vous orienter ailleurs.
            </p>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              En visio · vous repartez avec la liste des logiciels à connecter et une première fourchette de budget
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui construit votre outil ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui construit votre outil</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Une équipe d'indépendants que son fondateur pilote projet par projet
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Chez Masteria, Mathias Nizan constitue l'équipe de chaque projet selon les logiciels à connecter et le nombre de personnes à former, puis reste votre interlocuteur jusqu'à la passation. Aucun éditeur ne nous rémunère pour recommander son produit. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions détaillées dans nos études de cas</Link> et les <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>articles de presse qui nous citent</Link> montrent cette façon de travailler.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs IA indépendants'],
              ['≈ 10', 'consultants IA indépendants'],
              ['≈ 20', 'formateurs indépendants'],
              ['Lyon, 2022', 'France · Europe · États-Unis · Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES (rédigées pour la page, à la place du bloc commun) ── */}
      <section aria-labelledby="sources-agence-ia" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-agence-ia" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes officiels sur lesquels s'appuie ce guide
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            À garder sous la main pour relire une proposition d'agence ou rédiger votre cahier des charges.
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
