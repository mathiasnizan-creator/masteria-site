import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Bluetooth, BellRing, Briefcase, Compass, Gauge, Handshake, LayoutDashboard, MapPinned, Smartphone, Store, ShieldCheck, Users, WifiOff } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Agence de développement d'application web » (créée le 23/10/2026).
 * Cluster développement (docs/strategie-cluster-developpement-web.md), spoke de
 * /agence-developpement-web. Intention : application web, mobile, PWA, quel choix
 * technique. Variantes : agence de développement web et mobile, développement
 * d'application web, application web et mobile, développement application mobile.
 * Thèse : pour une application d'entreprise, une application web responsive,
 * installable en PWA si besoin, couvre souvent l'usage mobile sans les stores ;
 * le natif se justifie pour des usages précis (capteurs, hors ligne poussé,
 * notifications avancées, présence en magasin d'applications).
 * Tableau à insight : web responsive / PWA / multiplateforme / natif sur sept critères.
 * Faits vérifiés le 23/10/2026 : WebKit (Web Push iOS 16.4 pour les apps de l'écran
 * d'accueil, billet du 16/02/2023), MDN (définition PWA, MAJ 31/08/2026), caniuse
 * (Web Bluetooth, Web NFC, Background Sync absents de Safari iOS), Apple (99 $/an,
 * règle 4.2), Google Play (25 $ une fois).
 * Prudence : Masteria construit des applications web (React, Next.js) ; le natif et
 * le multiplateforme se décident au cadrage, sans revendication de livraison.
 * Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'agence-developpement-application-web'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-10-23'
const DATE_MODIFIED = '2026-10-23'
const RDV_URL = '/contact?type=projet&rdv=30'

const URL_WEBKIT_PUSH = 'https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/'
const URL_MDN_PWA = 'https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps'
const URL_CANIUSE_BT = 'https://caniuse.com/web-bluetooth'
const URL_CANIUSE_NFC = 'https://caniuse.com/webnfc'
const URL_CANIUSE_SYNC = 'https://caniuse.com/background-sync'
const URL_APPLE_PROGRAM = 'https://developer.apple.com/programs/'
const URL_APPLE_REVIEW = 'https://developer.apple.com/app-store/review/guidelines/'
const URL_GOOGLE_PLAY = 'https://support.google.com/googleplay/android-developer/answer/6112435?hl=fr'

const META_TITLE = "Agence de développement d'application web et mobile | Masteria"
const META_DESC = "Agence de développement d'application web et mobile : web responsive, PWA, multiplateforme ou natif, comment choisir, ce que chaque voie coûte et permet."
const KEYWORDS = "agence de développement d'application web, agence developpement application web, agence de développement web et mobile, développement d'application web, application web et mobile, développement application mobile, pwa, progressive web app, application multiplateforme, react native, flutter, application native ios android"

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const calloutStyle = { background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }
const linkStyle = { color: c, fontWeight: 600 }

const EN_BREF = [
  ['Quatre formes possibles', "Application web responsive, application web installable (PWA), application multiplateforme écrite une fois pour iOS et Android, application native écrite pour chaque système."],
  ['Le cas le plus courant', "Pour un outil d'entreprise utilisé par vos salariés, vos clients ou vos partenaires, une application web bien conçue suffit souvent sur téléphone, sans passer par l'App Store ni par Google Play."],
  ['Ce qui a changé sur iPhone', "Depuis iOS 16.4, une application web ajoutée à l'écran d'accueil peut envoyer des notifications, après accord de l'utilisateur (WebKit, février 2023)."],
  ['Quand viser le natif', "Bluetooth, NFC, synchronisation en arrière-plan, longues périodes sans réseau, notifications riches, ou une marque qui doit figurer dans les magasins d'applications."],
  ['Budget', "Un prototype démarre autour de 8 000 € HT ; une application en production se chiffre en dizaines de milliers d'euros. Prix au forfait, fixé après cadrage."],
  ['Chez Masteria', "Applications web en React et Next.js, avec code et documentation remis. La forme retenue se décide au cadrage, besoin par besoin."],
]

/* Tableau à insight : quatre formes d'application, sept critères */
const FORMES = [
  { key: 'web', label: 'Web responsive' },
  { key: 'pwa', label: 'PWA (web installable)', highlight: true },
  { key: 'multi', label: 'Multiplateforme (React Native, Flutter)' },
  { key: 'natif', label: 'Native iOS et Android' },
]

const CRITERES = [
  {
    critere: 'Coût de construction',
    web: "Le plus bas : un seul code, un seul écran qui s'adapte à la taille de l'appareil.",
    pwa: "Proche du web : on ajoute un manifeste, un service worker (script qui gère le cache) et les icônes.",
    multi: "Plus élevé : un code commun, des réglages par système, des écrans pensés pour le tactile.",
    natif: "Le plus élevé : deux applications à écrire et à tester, souvent par deux profils différents.",
  },
  {
    critere: 'Délai avant la première version',
    web: 'Le plus court. Chaque livraison se teste dans le navigateur le jour même.',
    pwa: "Quelques jours de plus que le web, surtout pour le travail sans réseau.",
    multi: "Plus long : comptes développeur, signatures, puis validation par chaque magasin d'applications.",
    natif: "Le plus long : deux chantiers en parallèle, deux validations.",
  },
  {
    critere: 'Accès au matériel du téléphone',
    web: 'Appareil photo, géolocalisation, micro, partage de fichiers.',
    pwa: "Les mêmes, plus les notifications. Sur iPhone, ni Bluetooth, ni NFC, ni synchronisation en arrière-plan (caniuse, octobre 2026).",
    multi: 'Quasi complet, par des modules natifs ajoutés au besoin.',
    natif: "Complet : capteurs, Bluetooth, NFC, widgets, intégrations profondes au système.",
  },
  {
    critere: 'Hors ligne',
    web: "Limité : l'application attend le réseau.",
    pwa: "Correct : écrans et données récentes en cache, saisies envoyées au retour du réseau quand l'application est ouverte.",
    multi: 'Poussé : base locale sur le téléphone, synchronisation planifiée.',
    natif: 'Le plus poussé : travail prolongé sans réseau, synchronisation en tâche de fond.',
  },
  {
    critere: 'Distribution',
    web: "Un lien, envoyé par mail ou affiché en QR code.",
    pwa: "Un lien, puis « Ajouter à l'écran d'accueil ». Aucun magasin d'applications.",
    multi: "App Store et Google Play, ou un canal privé d'entreprise.",
    natif: "App Store et Google Play, ou un canal privé d'entreprise.",
  },
  {
    critere: 'Mises à jour',
    web: 'Instantanées : tout le monde a la dernière version au prochain chargement.',
    pwa: 'Instantanées, au prochain lancement.',
    multi: "Nouvelle validation par les magasins, puis l'utilisateur installe la mise à jour.",
    natif: "Nouvelle validation par les magasins, puis l'utilisateur installe la mise à jour.",
  },
  {
    critere: 'Maintenance',
    web: 'Un code, un serveur, une version en service.',
    pwa: "Un code ; on teste en plus l'installation sur iPhone et sur Android.",
    multi: "Un code commun, à suivre au rythme des versions d'iOS, d'Android et du framework.",
    natif: "Deux codes, deux suivis de version, plusieurs versions installées en même temps chez les utilisateurs.",
  },
]

/* Quatre cas où le natif ou le multiplateforme se justifie */
const CAS_NATIF = [
  { icon: Bluetooth, title: "L'application parle à un appareil", body: "Lecteur de badge, balise, imprimante portable, équipement de mesure : sur iPhone, le navigateur ne donne accès ni au Bluetooth ni au NFC. Une application native ou multiplateforme devient alors nécessaire." },
  { icon: WifiOff, title: 'Le terrain coupe le réseau des heures durant', body: "Sous-sol, chantier, zone rurale, avion. Une PWA tient une coupure courte ; une journée entière de saisies hors réseau, avec des photos et une synchronisation en tâche de fond, demande une base locale et du code natif." },
  { icon: BellRing, title: 'Les notifications portent le service', body: "Rappels planifiés, actions directes depuis la notification, alertes critiques, widget sur l'écran d'accueil. Les notifications web couvrent l'essentiel ; ces usages avancés restent l'apanage du natif." },
  { icon: Store, title: 'Votre public cherche dans les magasins', body: "Une marque grand public que les clients cherchent sur l'App Store, un programme de fidélité, un paiement intégré à l'achat. Apple refuse d'ailleurs une application qui se contente de reprendre un site web (règle 4.2 de sa charte de validation)." },
]

/* Cinq applications métier types, et où l'IA s'y branche */
const EXEMPLES = [
  { icon: Users, title: 'Portail client', body: "Vos clients suivent leurs commandes, leurs contrats ou leurs dossiers, déposent des pièces et retrouvent leurs factures, depuis leur ordinateur comme depuis leur téléphone.", ia: "Un assistant répond aux questions courantes à partir de vos conditions et de l'historique du compte, et passe la main à un conseiller quand il ne sait pas." },
  { icon: Handshake, title: 'Espace partenaires', body: "Revendeurs, franchisés, sous-traitants ou fournisseurs y trouvent les tarifs, les documents techniques, les commandes en cours et un fil d'échange avec vos équipes.", ia: "Les offres et bons de livraison déposés en PDF sont lus automatiquement : montants, références et dates arrivent dans les bons champs, à valider par une personne." },
  { icon: Briefcase, title: 'Back-office', body: "L'écran où vos équipes traitent les demandes, valident, relancent et suivent les statuts, branché sur le CRM, l'ERP ou la messagerie plutôt que sur un tableur partagé.", ia: "Un brouillon de réponse ou de relance prérempli, que la personne relit avant l'envoi ; un classement des demandes entrantes par type et par urgence." },
  { icon: MapPinned, title: 'Outil de terrain', body: "Techniciens, commerciaux itinérants, équipes d'intervention : fiche d'intervention, photos, signature du client, géolocalisation, consultation des plans. Le cas où la question du hors ligne se pose en premier.", ia: "Le compte rendu se dicte et se met en forme ; une photo d'étiquette ou de plaque signalétique remplit la référence de l'équipement." },
  { icon: LayoutDashboard, title: 'Tableau de bord', body: "Les chiffres qui comptent pour une direction ou un service, mis à jour depuis vos outils, avec des droits d'accès par profil et une lecture confortable sur téléphone.", ia: "Une question posée en français (« quelles agences reculent ce trimestre ? ») renvoie le chiffre, le graphique et la requête qui l'a produit." },
]

/* Déroulé d'un projet d'application */
const ETAPES = [
  { title: 'Choisir la forme au cadrage', body: "Qui utilise l'application, sur quel appareil, dans quelles conditions de réseau, avec quel matériel. Ces quatre réponses décident entre web, PWA, multiplateforme et natif, avant toute ligne de code." },
  { title: 'Dessiner les écrans qui comptent', body: "Une maquette cliquable des parcours principaux, testée sur téléphone par deux ou trois futurs utilisateurs. On corrige un écran à ce stade pour quelques heures de travail." },
  { title: 'Livrer par versions utilisables', body: "Chaque livraison fonctionne et se teste par vos équipes, avec un point chaque semaine. Les priorités se réordonnent à la lumière de ce qu'elles ont essayé." },
  { title: 'Brancher vos outils et, si besoin, un modèle d\'IA', body: "Connexions au CRM, à l'ERP ou à la messagerie par leurs API, comptes et droits d'accès, puis l'assistant ou l'extraction de documents quand le cadrage l'a retenu." },
  { title: 'Mettre en service et transmettre', body: "Hébergement, sauvegardes, surveillance, conformité RGPD, prise en main par les utilisateurs. Le code et la documentation vous sont remis pour que votre équipe ou un autre prestataire puisse reprendre." },
]

/* Repères citables (GEO) */
const REPERES = [
  { value: 'iOS 16.4', label: "Version à partir de laquelle une application web ajoutée à l'écran d'accueil d'un iPhone ou d'un iPad peut recevoir des notifications push, si l'utilisateur les accepte après un geste de sa part.", source: 'WebKit, 16 février 2023', url: URL_WEBKIT_PUSH },
  { value: '99 $ par an', label: "Cotisation au programme développeur d'Apple, nécessaire pour publier sur l'App Store. Google Play demande de son côté 25 $, payés une seule fois.", source: 'Apple et Google, relevé du 23 octobre 2026', url: URL_APPLE_PROGRAM },
  { value: 'Safari iOS', label: "Aucune version de Safari sur iOS, jusqu'à la 27.2 incluse, ne prend en charge Web Bluetooth. Web NFC et Background Sync sont dans le même cas (voir les sources).", source: 'caniuse, relevé du 23 octobre 2026', url: URL_CANIUSE_BT },
]

const SOURCES = [
  { name: 'WebKit, « Web Push for Web Apps on iOS and iPadOS »', note: "l'annonce des notifications push pour les applications web de l'écran d'accueil, avec iOS 16.4 (février 2023).", url: URL_WEBKIT_PUSH },
  { name: 'MDN Web Docs, applications web progressives', note: "la définition d'une PWA et les conditions pour qu'elle soit installable (page mise à jour le 31 août 2026).", url: URL_MDN_PWA },
  { name: 'caniuse, Web Bluetooth', note: "la compatibilité des navigateurs avec le Bluetooth ; aucune version de Safari sur iOS.", url: URL_CANIUSE_BT },
  { name: 'caniuse, Web NFC', note: 'la lecture de puces NFC depuis le navigateur, disponible sur Chrome pour Android.', url: URL_CANIUSE_NFC },
  { name: 'caniuse, Background Sync', note: "la synchronisation en arrière-plan d'une application web, absente de Safari sur iOS.", url: URL_CANIUSE_SYNC },
  { name: "Apple, règles de validation de l'App Store", note: "dont la règle 4.2 sur le minimum de fonctionnalités, qui écarte les sites simplement reconditionnés.", url: URL_APPLE_REVIEW },
  { name: 'Apple Developer Program', note: 'la cotisation annuelle de 99 $ pour publier sur les plateformes Apple.', url: URL_APPLE_PROGRAM },
  { name: 'Aide Google Play Console, créer un compte développeur', note: "les frais d'inscription uniques de 25 $.", url: URL_GOOGLE_PLAY },
  { name: 'React Native', note: 'le framework de Meta pour écrire une application iOS et Android en JavaScript ou TypeScript.', url: 'https://reactnative.dev/' },
  { name: 'Flutter', note: "le framework de Google qui produit des applications mobiles, web et de bureau à partir d'un seul code en Dart.", url: 'https://flutter.dev/' },
]

const FAQ = [
  {
    q: "Que fait une agence de développement d'application web ?",
    a: "Elle conçoit et construit un logiciel qui s'utilise dans le navigateur : portail client, espace partenaires, back-office, outil de terrain, tableau de bord. Le travail couvre le cadrage des besoins, les maquettes, le code, les connexions à vos outils existants, la mise en service et la maintenance. Une bonne agence vous aide aussi à décider si une application web suffit ou si le natif se justifie.",
  },
  {
    q: "Application web ou application mobile : laquelle choisir pour mon entreprise ?",
    a: "Partez des utilisateurs. Si ce sont vos salariés, vos clients ou vos partenaires, qui ouvrent l'outil pour une tâche précise, une application web responsive, éventuellement installable en PWA, couvre le plus souvent le besoin sur téléphone. L'application mobile native se justifie quand il faut le Bluetooth ou le NFC, un travail prolongé sans réseau, des notifications avancées ou une présence dans les magasins d'applications.",
  },
  {
    q: "Qu'est-ce qu'une PWA, ou progressive web app ?",
    a: "C'est une application web que l'utilisateur peut installer sur son téléphone ou son ordinateur depuis le navigateur. Elle reçoit une icône sur l'écran d'accueil, s'ouvre en plein écran, garde en cache une partie des écrans et des données, et peut envoyer des notifications. Elle se diffuse par un simple lien et se met à jour sans passer par un magasin d'applications.",
  },
  {
    q: "Une PWA peut-elle envoyer des notifications sur iPhone ?",
    a: "Oui, depuis iOS 16.4, à deux conditions documentées par WebKit : l'application doit avoir été ajoutée à l'écran d'accueil, et la demande d'autorisation doit suivre un geste de l'utilisateur, par exemple un appui sur un bouton « Recevoir les alertes ». Sur Android, les notifications web fonctionnent aussi depuis le navigateur.",
  },
  {
    q: "Quelles sont les limites d'une PWA sur iPhone ?",
    a: "Safari sur iOS ne prend en charge ni Web Bluetooth, ni Web NFC, ni la synchronisation en arrière-plan (caniuse, octobre 2026). Une PWA ne peut donc pas dialoguer avec un lecteur de badge ou une imprimante Bluetooth, et elle n'envoie ses données en attente qu'une fois rouverte. Pour un outil qui travaille sans réseau pendant des heures ou qui pilote un appareil, le natif ou le multiplateforme reste la voie sûre.",
  },
  {
    q: "React Native ou Flutter : faut-il une application multiplateforme ?",
    a: "Un framework multiplateforme écrit une seule application pour iOS et Android, avec un accès quasi complet au matériel. Il convient quand le natif se justifie pour l'un des usages cités plus haut sans que le budget permette deux applications séparées. React Native s'écrit en JavaScript ou TypeScript, proche des compétences web ; Flutter en Dart. Le choix entre les deux se fait au cadrage, selon l'équipe qui maintiendra le code.",
  },
  {
    q: "Combien coûte le développement d'une application web et mobile ?",
    a: "Chez Masteria, un prototype démarre autour de 8 000 € HT et une application en production se chiffre en dizaines de milliers d'euros ; un déploiement large, avec de nombreux utilisateurs et plusieurs connexions au système d'information, dépasse 100 000 €. Le prix global est fixé au forfait après cadrage. Une application native pour iOS et Android coûte nettement plus qu'une application web au périmètre identique, puisqu'il faut écrire, tester et publier deux versions.",
  },
  {
    q: "Combien de temps faut-il pour développer une application web ?",
    a: "Le délai dépend du nombre d'écrans, des connexions à vos outils et du volume de règles métier. Une première version utilisable se livre en quelques semaines quand le périmètre est resserré ; une application complète en demande plusieurs mois. Le planning est posé au cadrage, avec des livraisons intermédiaires que vos équipes testent au fil du projet.",
  },
  {
    q: "Faut-il publier une application d'entreprise sur l'App Store et Google Play ?",
    a: "Rarement pour un outil interne ou un portail client : un lien et l'ajout à l'écran d'accueil suffisent, sans cotisation ni validation. Publier coûte 99 $ par an chez Apple et 25 $ une fois chez Google, et chaque mise à jour repasse par la validation. Apple refuse par ailleurs les applications qui se contentent de reprendre un site web. La publication se justifie pour une marque que le public cherche dans les magasins.",
  },
  {
    q: "Peut-on ajouter de l'IA dans une application web existante ?",
    a: "Oui, le plus souvent sans tout reconstruire. Un assistant qui répond à partir de vos documents, une extraction automatique des champs d'une facture ou d'un bon de commande, un brouillon de réponse à relire : ces fonctions se branchent par l'API d'un modèle comme Claude, GPT, Gemini ou Mistral, côté serveur. Le lieu où vos données sont traitées se décide au cadrage.",
  },
  {
    q: "Avec quelles technologies Masteria développe-t-elle les applications web ?",
    a: "React et Next.js en TypeScript pour les écrans, Node.js ou Python côté serveur, Supabase et PostgreSQL pour les données, Vercel ou votre hébergeur pour la mise en ligne. C'est la pile qui fait tourner le site master-ia.fr et la plateforme de gestion des formations et des clients que Masteria utilise chaque jour. Si le cadrage conclut à une application native ou multiplateforme, nous vous le disons et la façon de la construire se décide à ce moment-là.",
  },
  {
    q: "Qui est propriétaire du code de l'application ?",
    a: "Vous. Le code source, la documentation technique et les accès aux services d'hébergement vous sont remis à la livraison. Une autre équipe peut reprendre l'application sans repartir de zéro, et vous gardez la main sur vos comptes développeur si l'application est publiée dans les magasins.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${FULL_URL}#service`,
  name: "Développement d'applications web et mobiles",
  serviceType: "Développement d'application web",
  provider: { '@id': `${SITE}/#organization` },
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  description: "Conception et développement d'applications web responsives et installables (PWA) en React et Next.js : portails clients, espaces partenaires, back-offices, outils de terrain, tableaux de bord, avec IA intégrée quand elle sert. Forme de l'application choisie au cadrage, code et documentation remis au client.",
  url: FULL_URL,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 8000,
    description: "Prototype à partir d'environ 8 000 € HT ; prix au forfait fixé après cadrage.",
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "Agence de développement d'application web et mobile : choisir entre web, PWA, multiplateforme et natif",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ["Développement d'application web", 'Application mobile', 'Progressive web app'],
  mentions: ['PWA', 'React Native', 'Flutter', 'iOS 16.4', 'Web Push', 'App Store', 'Google Play'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#definition', 'h2'] },
  citation: SOURCES.map(s => s.url),
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
      {/* Réponse toujours dans le DOM (prérendu citable), repliée en CSS */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function AgenceDeveloppementApplicationWebPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Développement web', slug: 'agence-developpement-web' },
    { name: 'Applications web et mobiles', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
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
            <Link to="/agence-developpement-web" style={{ color: '#94A3B8' }}>Développement web</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Applications web et mobiles</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Applications web et mobiles
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Agence de développement d'application web et mobile
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>choisir entre web, PWA, multiplateforme et natif</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria, qui conçoit et fait tourner les applications web du cabinet · mise à jour le 23 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="definition" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une agence de développement d'application web construit des logiciels qui s'ouvrent dans le navigateur, sur ordinateur comme sur téléphone. <strong style={{ color: '#fff', fontWeight: 700 }}>Pour un outil d'entreprise, une application web responsive, installable en PWA si besoin, couvre le plus souvent l'usage mobile sans passer par les magasins d'applications.</strong> Le natif garde l'avantage pour le Bluetooth, le NFC, le travail prolongé sans réseau et les notifications avancées.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Le choix de la forme pèse sur le budget, le délai et la maintenance pendant toute la vie de l'application. Il mérite d'être tranché au cadrage, à partir de vos utilisateurs et de leurs conditions de travail, avant le choix d'une technologie.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Parler de votre application
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#comparatif" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les quatre formes
            </a>
          </div>

          {/* En bref (GEO) */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {EN_BREF.map(([k, v], i) => (
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
            ['#these', 'Web ou mobile'],
            ['#comparatif', 'Comparatif'],
            ['#natif', 'Quand le natif'],
            ['#exemples', 'Applications métier'],
            ['#deroule', 'Déroulé'],
            ['#prix', 'Prix'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── THÈSE ── */}
      <section id="these" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre lecture</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Le navigateur du téléphone suffit à la plupart des applications d'entreprise</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                La demande arrive souvent sous la forme « il nous faut une appli ». Derrière, il y a presque toujours un besoin d'usage sur téléphone, que le web sait servir.
              </p>
            </div>
            <div>
              <p style={leadStyle}>
                Une application d'entreprise a un public connu : vos salariés, vos clients sous contrat, vos partenaires. Vous pouvez leur envoyer un lien, ils ouvrent l'outil pour une tâche précise, et ils n'iront pas le chercher dans un magasin d'applications. Pour ce public, l'application web responsive, dont l'affichage s'adapte à chaque écran, règle la question mobile avec un seul code.
              </p>
              <p style={leadStyle}>
                La PWA ajoute ce qui manquait au web il y a quelques années : une icône sur l'écran d'accueil, l'ouverture en plein écran, des écrans disponibles sans réseau et des notifications. Sur iPhone, ces dernières fonctionnent depuis iOS 16.4, pour les applications web ajoutées à l'écran d'accueil, comme l'a annoncé l'équipe de WebKit, le moteur de Safari, en février 2023.
              </p>
              <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
                <strong>Le gain se mesure surtout après la mise en ligne.</strong>{' '}
                Une correction publiée le matin est en service chez tous les utilisateurs l'après-midi, sans validation par Apple ou Google ni version ancienne qui traîne sur un téléphone oublié. Sur la durée de vie d'une application, c'est souvent là que se joue l'écart de coût entre web et natif.
              </p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '18px 0 0', maxWidth: 760 }}>
                Le web a aussi ses limites, et il serait malhonnête de les taire. Sur iPhone, une application web ne parle ni au Bluetooth ni au NFC, et elle ne synchronise pas ses données une fois fermée. Ces trois manques suffisent à faire basculer certains projets vers le natif ou le multiplateforme : nous les détaillons{' '}
                <a href="#natif" style={linkStyle}>plus bas</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABLEAU À INSIGHT ── */}
      <section id="comparatif" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={kickerStyle}>Comparatif</div>
          <h2 style={h2Style}>Web responsive, PWA, multiplateforme ou natif : sept critères départagent les quatre formes</h2>
          <p style={{ ...calloutStyle }}>
            <strong>La ligne qui tranche le plus souvent est celle du matériel.</strong>{' '}
            Sur le coût, le délai, la distribution et les mises à jour, la PWA l'emporte nettement. Elle ne cède que si votre application doit piloter un appareil, travailler longtemps sans réseau ou figurer dans un magasin d'applications.
          </p>
          <p style={{ ...mutedStyle, margin: '0 0 36px' }}>
            Les comparaisons sont relatives, à périmètre fonctionnel égal. Les limites d'iOS viennent des tables de compatibilité de caniuse, relevées le 23 octobre 2026.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 980 }}>
              <caption style={srOnlyStyle}>Application web responsive, PWA, application multiplateforme et application native comparées sur le coût, le délai, l'accès au matériel, le hors ligne, la distribution, les mises à jour et la maintenance</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Critère</th>
                  {FORMES.map(f => (
                    <th key={f.key} scope="col" style={{ ...thStyle, whiteSpace: 'normal', color: f.highlight ? c : '#374151', background: f.highlight ? 'rgba(37,99,235,0.08)' : '#F9FAFB' }}>{f.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRITERES.map((row, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', minWidth: 190 }
                  return (
                    <tr key={row.critere}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#0A0A0A', textAlign: 'left', minWidth: 150 }}>{row.critere}</th>
                      {FORMES.map(f => (
                        <td key={f.key} style={{ ...td, background: f.highlight ? 'rgba(37,99,235,0.05)' : undefined }}>{row[f.key]}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 900 }}>
            <strong>Une voie intermédiaire existe :</strong> commencer par une PWA, mesurer l'usage pendant quelques mois, puis réserver une application native aux seuls écrans qui en ont besoin, par exemple la lecture d'un badge sur le terrain. Le serveur, les données et les règles métier restent les mêmes ; seule la couche d'affichage change. Pour un logiciel qui doit épouser des processus internes complexes, voyez aussi notre page sur le{' '}
            <Link to="/agence-developpement-sur-mesure" style={linkStyle}>développement sur mesure</Link>.
          </p>
        </div>
      </section>

      {/* ── QUAND LE NATIF SE JUSTIFIE ── */}
      <section id="natif" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Application mobile native</div>
          <h2 style={h2Style}>Quatre usages font pencher la balance vers le natif ou le multiplateforme</h2>
          <p style={leadStyle}>
            Une application native est écrite dans le langage de chaque système, Swift pour iOS et Kotlin pour Android. Une application multiplateforme, construite avec React Native ou Flutter, partage l'essentiel du code entre les deux et garde un accès presque complet au téléphone.
          </p>
          <p style={mutedStyle}>
            Si votre projet coche au moins une des cases suivantes, la question mérite d'être instruite au cadrage avec les chiffres en main.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS_NATIF.map(x => {
              const Icon = x.icon
              return (
                <div key={x.title} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                  <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(16.5px, 2vw, 19px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{x.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{x.body}</p>
                </div>
              )
            })}
          </div>

          <div style={{ ...calloutStyle, background: '#F9FAFB', marginTop: 36 }}>
            <strong>Publier dans les magasins a un coût fixe et un coût de rythme.</strong>{' '}
            Apple demande 99 $ par an pour son programme développeur, Google 25 $ une seule fois. Surtout, chaque nouvelle version repasse par leur validation avant d'atteindre vos utilisateurs, qui doivent ensuite l'installer.
          </div>
          <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: '20px 0 0', maxWidth: 880 }}>
            Masteria construit des applications web, en React et Next.js. Quand le cadrage montre qu'une application native ou multiplateforme s'impose, nous vous le disons, et la manière de la construire se décide à ce moment-là, profil par profil.
          </p>
        </div>
      </section>

      {/* ── EXEMPLES D'APPLICATIONS MÉTIER ── */}
      <section id="exemples" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Exemples d'applications métier</div>
          <h2 style={h2Style}>Cinq applications web que les entreprises font construire, et la place de l'IA dans chacune</h2>
          <p style={leadStyle}>
            Ces cinq familles reviennent dans la plupart des demandes. Chacune peut recevoir une fonction d'IA, à condition qu'elle fasse gagner du temps sur une tâche précise et qu'une personne garde la validation.
          </p>
          <p style={mutedStyle}>
            Les descriptions sont génériques : elles décrivent des types d'outils, sans référence à un client.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))', gap: 20 }}>
            {EXEMPLES.map(x => {
              const Icon = x.icon
              return (
                <article key={x.title} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <div style={iconBoxStyle}>
                      <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{x.title}</h3>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>{x.body}</p>
                  <div style={{ marginTop: 'auto', background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>Avec l'IA</div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{x.ia}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 900 }}>
            L'assistant et l'extraction de documents se branchent côté serveur, par l'API d'un modèle, sans changer la forme de l'application : ils fonctionnent de la même façon dans une PWA et dans une application native. Notre page{' '}
            <Link to="/agence-developpement-ia" style={linkStyle}>agence de développement IA</Link> détaille ces briques, leurs coûts de fonctionnement et la manière de les évaluer avant la mise en service.
          </p>
        </div>
      </section>

      {/* ── DÉROULÉ ── */}
      <section id="deroule" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Déroulé d'un projet</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Cinq étapes mènent du premier échange à l'application en service</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>
                La forme de l'application se décide à la première étape. Les suivantes s'appliquent quelle que soit la voie retenue.
              </p>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le détail de notre façon de conduire un projet figure sur la page{' '}
                <Link to="/methode-projet-ia" style={linkStyle}>méthode de projet</Link>.
              </p>
            </div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
              {ETAPES.map((e, i) => (
                <li key={e.title} style={{ ...cardStyle, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', lineHeight: 1.4 }}>{e.title}</h3>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{e.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── PRIX (ancre sombre) ── */}
      <section id="prix" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Prix</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Le prix d'une application web dépend de ses écrans, de ses connexions et de ses règles métier</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 36px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un prototype démarre autour de 8 000 € HT. Une application en production se chiffre en dizaines de milliers d'euros, et un déploiement large dépasse 100 000 €, jusqu'à plusieurs centaines de milliers pour les plus étendus.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {[
              [Gauge, 'Au forfait', "Le prix global est fixé après le cadrage, sur un périmètre écrit, et Masteria s'engage sur le livrable. C'est le format habituel pour une application neuve."],
              [Users, 'En régie', "Des développeurs du réseau rejoignent votre équipe, sur site ou à distance, au taux journalier communiqué sur devis. Utile quand l'application existe déjà et que la feuille de route bouge."],
              [Compass, 'Ce qui fait varier le budget', "Le nombre d'écrans et de profils d'utilisateurs, les connexions au CRM ou à l'ERP, le hors ligne, la fonction d'IA, et le choix d'une version native en plus de la version web."],
            ].map(([Icon, t, d]) => (
              <div key={t} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA', marginBottom: 12 }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
            Le développement d'une application n'est pas finançable par l'OPCO ; seule la formation de vos équipes à l'outil peut l'être. Les ordres de grandeur par type de projet sont réunis sur notre page{' '}
            <Link to="/prix-projet-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>prix d'un projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Les questions posées avant de lancer une application web ou mobile</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre cas sort de ces douze réponses ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Posez-nous la question
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

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre application</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décidons ensemble de la forme de votre application avant d'en écrire le code
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
              Dites-nous qui l'utilisera, sur quel appareil et dans quelles conditions de réseau. En une demi-heure, vous saurez si le web suffit, ce qu'une PWA apporterait et si le natif se justifie.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Prendre 30 minutes de cadrage offertes
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/agence-developpement-web" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Tous nos développements web
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Visio, créneau proposé dans les 24 heures · Forfait après cadrage ou régie · Code et documentation remis
            </p>
          </div>
        </div>
      </section>

      {/* ── QUI CONSTRUIT ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui construit votre application</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des développeurs web et IA indépendants, réunis par projet autour du fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria, fondée à Lyon en 2022 par Mathias Nizan, s'appuie sur un réseau d'environ cinq développeurs, choisis selon la technologie et le métier du projet. Masteria construit et fait vivre ses propres applications : le site master-ia.fr, en React avec des pages prérendues pour le référencement, et la plateforme de gestion des formations et des clients, sous Next.js et Supabase. Mathias Nizan répond du résultat devant vous.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs web et IA'],
              ['React · Next.js', 'TypeScript, Supabase, PostgreSQL'],
              ['Code remis', 'avec la documentation'],
              ['Lyon, 2022', 'France · Europe · États-Unis · Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPÈRES + SOURCES ── */}
      <section aria-labelledby="sources-application-web" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '0 0 48px' }}>
            {REPERES.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <h2 id="sources-application-web" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Sources et documentation technique
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Compatibilités des navigateurs et tarifs des magasins d'applications relevés le 23 octobre 2026. Ils évoluent avec chaque version d'iOS et d'Android.
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
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0' }}>
            <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
            Pour aller plus loin : <Link to="/agence-developpement-web" style={linkStyle}>agence de développement web</Link>, <Link to="/agence-developpement-sur-mesure" style={linkStyle}>développement sur mesure</Link>, <Link to="/agence-developpement-ia" style={linkStyle}>développement IA</Link>, <Link to="/methode-projet-ia" style={linkStyle}>méthode de projet</Link>, <Link to="/prix-projet-ia" style={linkStyle}>prix d'un projet</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
