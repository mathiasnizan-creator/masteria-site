import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Accessibility, ArrowRight, BadgeCheck, Boxes, BrainCircuit, Calculator, ClipboardCheck, Code2, Cookie,
  Cpu, Database, FileCode2, Gauge, Globe, Handshake, Layers, LifeBuoy, ListChecks, Network, PenTool,
  Plug, Rocket, Scale, Search, ShieldCheck, Smartphone, Workflow, Wrench,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Agence de développement web » : PILIER ET HUB du cluster développement (23/10/2026).
 * Requête principale « agence de développement web » + variantes (agence de développeur web,
 * agence web développement, société / entreprise de développement web, agence de développement
 * de site web, développement de sites web → section « étapes »).
 * Thèse propre à la page : un projet web d'entreprise se joue sur ce qui est branché derrière la
 * vitrine (CRM, ERP, données, automatisations, IA) ; l'agence utile conçoit ces branchements et
 * remet le code, dont la cession doit être écrite (CPI L131-3).
 * Hub : <nav aria-label="Nos développements"> vers les pages du cluster, doublé d'un ItemList JSON-LD.
 * Distincte de /agence-developpement-sur-mesure (logiciel métier vs progiciel), de
 * /agence-developpement-application-web (web, PWA, natif), de /sous-traitance-developpement-web
 * (lecteur = agence ou ESN) et de /agence-developpement-ia (l'IA comme composant).
 * Sources vérifiées le 23/10/2026 : web.dev (Core Web Vitals), Google Search Central (rendu JS),
 * accessibilite.numerique.gouv.fr (RGAA 4.1.2, art. 47 loi 2005-102), EUR-Lex (directive 2019/882),
 * CNIL (cookies, guide RGPD du développeur), Légifrance (CPI L131-3, L113-9).
 * Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'agence-developpement-web'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-10-23'
const DATE_MODIFIED = '2026-10-23'
const RDV_URL = '/contact?type=projet&rdv=30'

const URL_WEBVITALS = 'https://web.dev/articles/vitals'
const URL_GOOGLE_JS = 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics'
const URL_RGAA = 'https://accessibilite.numerique.gouv.fr/'
const URL_RGAA_CHAMP = 'https://accessibilite.numerique.gouv.fr/obligations/champ-application/'
const URL_EAA = 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019L0882'
const URL_CNIL_COOKIES = 'https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi'
const URL_CNIL_DEV = 'https://www.cnil.fr/fr/guide-rgpd-du-developpeur'
const URL_CPI_L131_3 = 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958'
const URL_CPI_L113_9 = 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278890'

const META_TITLE = 'Agence de développement web : comment la choisir | Masteria'
const META_DESC = "Agence de développement web : qui construit votre site ou votre application, ce que livre chaque acteur, les étapes, le prix et la propriété du code."
const KEYWORDS = 'agence de développement web, agence de développeur web, agence web développement, société de développement web, entreprise de développement web, entreprises développement web, agence de développement de site web, agence de développement site web, développement de sites web, développement d\'application web, intégration crm erp, propriété du code'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const calloutStyle = { background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

const EN_BREF = [
  ['Son métier', "Concevoir, programmer, mettre en ligne et maintenir des sites et des applications web dont la valeur tient à leur logique : comptes clients, devis, réservations, tableaux de bord, échanges avec vos logiciels."],
  ['Où se joue le projet', "Dans les branchements situés derrière les pages : CRM, ERP, base de données, automatisations, modèle d'IA. Ce sont eux qui font gagner ou perdre du temps à vos équipes."],
  ['Cinq familles d\'acteurs', 'Agence de création, agence de développement web, ESN, freelance, plateforme no-code. Chacune livre bien un type de projet et laisse des droits différents sur le code.'],
  ['Six étapes', 'Cadrage, conception, développement, recette, mise en ligne, maintenance. À chaque étape, un document ou un livrable vous revient.'],
  ['Le code', "Il vous appartient seulement si le contrat le cède par écrit, droit par droit (article L131-3 du code de la propriété intellectuelle)."],
  ['Le budget', "Un prototype démarre autour de 8 000 € HT, un outil mis en production compte en dizaines de milliers d'euros ; le prix ferme se fixe après cadrage."],
]

/* La thèse : ce qui est branché derrière la vitrine */
const BRANCHEMENTS = [
  { icon: Network, title: 'Le CRM reçoit chaque demande', body: "Un formulaire qui finit dans une boîte mail se perd. Relié au CRM (le logiciel de suivi des clients), il crée la fiche, attribue le commercial et déclenche la relance." },
  { icon: Database, title: "L'ERP fournit les prix et les stocks", body: "Un catalogue saisi à la main dans le site diverge du stock en quelques semaines. Lu dans l'ERP (le logiciel de gestion de l'entreprise), il reste juste sans ressaisie." },
  { icon: Layers, title: 'Les données ont un seul propriétaire', body: "Chaque information vit dans une base et une seule. Le site, l'application interne et les exports comptables lisent la même source, ce qui évite les tableaux qui se contredisent." },
  { icon: Workflow, title: 'Les tâches répétitives partent en automatisation', body: "Accusé de réception, génération d'un PDF, mise à jour d'un statut, alerte au bon interlocuteur : ces gestes se programment une fois et tournent ensuite sans intervention." },
  { icon: BrainCircuit, title: "L'IA se branche là où elle sert", body: "Un modèle de langage peut trier les demandes entrantes, préremplir une réponse ou chercher dans votre documentation. Il s'ajoute proprement à une application dont les données sont déjà en ordre." },
]

/* Tableau à insight : cinq familles d'acteurs */
const ACTEURS = [
  {
    nom: 'Agence de création ou de communication',
    livre: "Identité visuelle, maquettes, site vitrine sur un CMS (logiciel de gestion de contenu), contenus et campagnes.",
    code: "Souvent un thème et des extensions du CMS ; vérifiez au nom de qui sont les licences et l'hébergement.",
    maintenance: 'Mises à jour du CMS et des extensions, quand le contrat les prévoit.',
    integration: "Limitée aux extensions existantes, par exemple un formulaire envoyé vers un CRM.",
  },
  {
    nom: 'Agence de développement web',
    livre: "Applications et sites à logique métier : espaces clients, back-offices, API, échanges avec vos logiciels.",
    code: "Dépôt Git au nom du client et cession écrite des droits, si vous l'exigez au contrat.",
    maintenance: "Contrat de maintenance applicative : correctifs, mises à jour de sécurité, petites évolutions.",
    integration: "Forte : concevoir les flux entre le site, le CRM, l'ERP et un modèle d'IA fait partie du métier.",
    highlight: true,
  },
  {
    nom: 'ESN (entreprise de services du numérique)',
    livre: "Grands programmes, équipes nombreuses, développeurs détachés en régie, maintenance industrialisée.",
    code: "Fixée par le contrat-cadre ; la cession se négocie dès la signature.",
    maintenance: 'Tierce maintenance applicative avec engagements de délai.',
    integration: "Forte sur les grands progiciels du marché, avec un ticket d'entrée élevé pour une PME.",
  },
  {
    nom: 'Développeur freelance',
    livre: "Une compétence précise : un module, un connecteur, un renfort de quelques semaines.",
    code: "Les droits restent à l'auteur tant qu'aucune cession écrite ne les transfère.",
    maintenance: 'Dépend de sa disponibilité ; prévoyez qui reprend le code en son absence.',
    integration: 'Bonne sur sa spécialité, à compléter au-delà.',
  },
  {
    nom: 'Plateforme no-code ou constructeur de site',
    livre: "Un site ou un outil simple, mis en ligne vite, modifiable sans développeur.",
    code: "Vous louez la plateforme ; l'export du code est limité, voire impossible, selon l'éditeur.",
    maintenance: "Assurée par l'éditeur, au prix d'un abonnement qui court tant que le site existe.",
    integration: "Les connecteurs prévus par l'éditeur ; au-delà, le projet bute sur ses limites.",
  },
]

/* Étapes du développement d'un site ou d'une application, avec ce que vous recevez */
const ETAPES = [
  { icon: ClipboardCheck, title: 'Cadrage', body: "On décrit les utilisateurs, les tâches à couvrir, les logiciels à relier et les contraintes (données, hébergement, accessibilité, délai).", recu: 'Une note de cadrage et un prix ferme.' },
  { icon: PenTool, title: 'Conception', body: "Parcours des utilisateurs, maquettes des écrans principaux, modèle de données, schéma des échanges avec le CRM ou l'ERP.", recu: 'Les maquettes et le schéma d\'architecture, validés avant toute ligne de code.' },
  { icon: Code2, title: 'Développement', body: "Le code avance par livraisons utilisables, montrées en point hebdomadaire sur un environnement de test qui vous est ouvert.", recu: "L'accès au dépôt de code et à l'environnement de test." },
  { icon: ListChecks, title: 'Recette', body: "Vos équipes testent avec leurs propres cas. Chaque anomalie est notée, corrigée et revérifiée ; on contrôle aussi la vitesse, l'accessibilité et la sécurité.", recu: 'La liste des tests passés et votre validation écrite.' },
  { icon: Rocket, title: 'Mise en ligne', body: "Déploiement sur l'hébergement retenu, nom de domaine, redirections des anciennes adresses, déclaration à la Search Console, bandeau de cookies conforme.", recu: 'La documentation d\'exploitation et les accès administrateur.' },
  { icon: LifeBuoy, title: 'Maintenance', body: "Mises à jour de sécurité, surveillance, correctifs, puis évolutions demandées par les utilisateurs, chiffrées une à une.", recu: "Une proposition de maintenance adaptée à l'usage." },
]

/* Hub du cluster : les pages filles */
const HUB = [
  { to: '/agence-developpement-sur-mesure', icon: Boxes, title: 'Logiciel et application métier sur mesure', body: "Quand aucun progiciel n'épouse vos processus : comparer sur mesure, SaaS, no-code et progiciel paramétré avant de lancer un développement." },
  { to: '/agence-developpement-application-web', icon: Smartphone, title: 'Applications web et mobiles', body: "Application web, PWA (installable depuis le navigateur), appli native ou multiplateforme : le choix technique selon vos utilisateurs et leur terrain." },
  { to: '/sous-traitance-developpement-web', icon: Handshake, title: 'Renfort pour agences et ESN', body: "Vous êtes une agence ou une ESN : développeurs en marque blanche, au forfait ou en régie, avec confidentialité et cession des droits prévues au contrat." },
  { to: '/agence-developpement-ia', icon: BrainCircuit, title: "L'IA dans vos outils", body: "Assistants, agents et automatisations branchés sur vos données : quand un modèle d'IA devient un composant de votre application." },
  { to: '/developpeur-ia', icon: Cpu, title: 'Recruter un développeur IA', body: "Ce que fait ce profil, ses compétences, ses salaires et TJM publiés, et les façons de le faire intervenir dans votre équipe." },
  { to: '/outils-ia-sur-mesure', icon: Wrench, title: 'Outils IA sur mesure', body: "Des exemples d'outils construits pour un métier précis, du tri des demandes à la rédaction assistée de documents." },
  { to: '/prix-projet-ia', icon: Calculator, title: "Prix d'un projet", body: "Les ordres de grandeur par type d'outil, et les postes qui font monter ou baisser une facture de développement." },
  { to: '/methode-projet-ia', icon: ListChecks, title: 'Notre méthode de projet', body: "Comment un projet avance chez Masteria, du cadrage à la reprise du code par vos équipes." },
]

/* Exigences techniques sourcées */
const TECHNIQUE = [
  { icon: Gauge, title: 'La vitesse se mesure sur trois indicateurs', body: "Google retient les Core Web Vitals : affichage du plus grand élément (LCP) en 2,5 secondes au plus, réaction à un clic (INP) en 200 millisecondes au plus, décalage de mise en page (CLS) sous 0,1, mesurés sur 75 % des visites.", source: 'web.dev', url: URL_WEBVITALS },
  { icon: Search, title: 'Le référencement commence par le HTML servi', body: "Google explore, puis exécute le JavaScript, puis indexe le HTML obtenu. Sa documentation recommande le rendu côté serveur ou le prérendu, plus rapide pour les visiteurs comme pour les robots. Le site master-ia.fr est construit ainsi.", source: 'Google Search Central', url: URL_GOOGLE_JS },
  { icon: Accessibility, title: "L'accessibilité devient une obligation pour le privé", body: "Le RGAA 4.1.2 compte 106 critères et s'impose aux organismes publics comme aux entreprises de plus de 250 millions d'euros de chiffre d'affaires. Depuis le 28 juin 2025, la directive européenne sur l'accessibilité vise aussi les services de commerce électronique, hors microentreprises.", source: 'accessibilite.numerique.gouv.fr, EUR-Lex', url: URL_RGAA_CHAMP },
  { icon: Cookie, title: 'Le bandeau de cookies obéit à la CNIL', body: "Le consentement précède le dépôt des traceurs, s'obtient par une action positive, et le visiteur doit pouvoir refuser avec la même simplicité qu'il accepte. Certains outils de mesure d'audience en sont dispensés sous conditions.", source: 'CNIL', url: URL_CNIL_COOKIES },
]

/* ── Repères citables (GEO) ── */
const REPERES = [
  { value: '2,5 s', label: "Délai maximal d'affichage du plus grand élément d'une page pour que Google le juge bon, mesuré sur 75 % des visites.", source: 'web.dev, Core Web Vitals', url: URL_WEBVITALS },
  { value: '106 critères', label: "Le référentiel français d'accessibilité numérique, RGAA 4.1.2 ; une version 5 est annoncée pour fin 2026.", source: 'accessibilite.numerique.gouv.fr', url: URL_RGAA },
  { value: '28 juin 2025', label: "Date d'application de la directive (UE) 2019/882 sur l'accessibilité des produits et services, commerce électronique compris.", source: 'EUR-Lex', url: URL_EAA },
]

const SOURCES = [
  { name: 'web.dev, « Web Vitals »', note: 'les trois indicateurs de vitesse retenus par Google et leurs seuils.', url: URL_WEBVITALS },
  { name: 'Google Search Central, principes du SEO pour JavaScript', note: 'les trois phases de traitement des pages et la recommandation du prérendu.', url: URL_GOOGLE_JS },
  { name: 'Référentiel général d\'amélioration de l\'accessibilité (RGAA)', note: 'la version en vigueur et ses critères.', url: URL_RGAA },
  { name: 'Champ d\'application des obligations d\'accessibilité', note: "l'article 47 de la loi du 11 février 2005 et le seuil de 250 millions d'euros.", url: URL_RGAA_CHAMP },
  { name: 'Directive (UE) 2019/882 sur EUR-Lex', note: "l'accessibilité des produits et services, applicable depuis le 28 juin 2025.", url: URL_EAA },
  { name: 'CNIL, cookies et traceurs : que dit la loi ?', note: 'les règles du consentement et du refus.', url: URL_CNIL_COOKIES },
  { name: 'CNIL, guide RGPD du développeur', note: '17 fiches pratiques pour concevoir une application respectueuse des données personnelles.', url: URL_CNIL_DEV },
  { name: 'Code de la propriété intellectuelle, article L131-3', note: 'la cession des droits d\'auteur exige une mention distincte pour chaque droit cédé.', url: URL_CPI_L131_3 },
  { name: 'Code de la propriété intellectuelle, article L113-9', note: "les droits sur un logiciel créé par un salarié reviennent à son employeur.", url: URL_CPI_L113_9 },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'une agence de développement web ?",
    a: "Une agence de développement web conçoit, programme et maintient des sites et des applications web dont la valeur tient à leur logique : espace client, prise de rendez-vous, devis en ligne, back-office, échanges avec le CRM ou l'ERP. Elle travaille avec des développeurs, souvent un designer et un chef de projet, et livre un logiciel en état de marche, documenté, que l'entreprise peut faire évoluer.",
  },
  {
    q: 'Agence de développeur web ou agence de communication : laquelle choisir ?',
    a: "Si votre besoin porte d'abord sur l'image, les contenus et un site vitrine, l'agence de communication est dans son élément. Si le site doit créer des comptes, calculer, échanger des données avec vos logiciels ou accueillir de l'IA, il vous faut une équipe de développeurs. Les deux peuvent travailler ensemble : l'une dessine, l'autre construit.",
  },
  {
    q: 'Quelle différence entre une société de développement web et une ESN ?',
    a: "Une ESN (entreprise de services du numérique) mobilise de grandes équipes, souvent en régie, sur les systèmes d'information des grands comptes. Une société de développement web travaille en équipe resserrée sur un produit précis, au forfait ou en régie. Pour une PME ou une ETI, la seconde offre en général un interlocuteur plus proche et un ticket d'entrée plus bas.",
  },
  {
    q: 'Comment choisir une entreprise de développement web ?',
    a: "Demandez-lui de décrire un projet comparable : quels logiciels étaient reliés, comment les données circulaient, qui maintient le code aujourd'hui. Vérifiez au contrat la cession écrite des droits, le dépôt du code à votre nom, les modalités de maintenance et la réversibilité. Une proposition qui chiffre le développement sans parler de ces points laisse les coûts futurs dans l'ombre.",
  },
  {
    q: "Quelles sont les étapes du développement de sites web ?",
    a: "Six étapes se suivent : cadrage, conception (maquettes et architecture), développement par livraisons, recette par vos équipes, mise en ligne, maintenance. Chacune se termine par un livrable que vous validez : note de cadrage, maquettes, accès au code, validation de la recette, documentation d'exploitation, proposition de maintenance.",
  },
  {
    q: "Combien coûte une agence de développement de site web ?",
    a: "Le prix dépend surtout des branchements : un site qui affiche des pages coûte bien moins qu'une application reliée au CRM, à l'ERP et à un modèle d'IA. Chez Masteria, un prototype démarre autour de 8 000 € HT, un outil mis en production demande plusieurs dizaines de milliers d'euros, et un déploiement de grande ampleur dépasse 100 000 €. Le prix ferme se fixe après cadrage.",
  },
  {
    q: 'À qui appartient le code développé par une agence web ?',
    a: "En droit français, l'auteur garde ses droits tant qu'un contrat ne les cède pas par écrit, avec une mention distincte pour chaque droit cédé (article L131-3 du code de la propriété intellectuelle). La règle qui attribue automatiquement le logiciel à l'employeur (article L113-9) concerne les seuls salariés ; elle ne s'étend pas à un prestataire. Exigez donc une clause de cession et un dépôt du code à votre nom.",
  },
  {
    q: 'Faut-il un développeur web pour un simple site vitrine ?',
    a: "Pas forcément. Un CMS ou une plateforme no-code suffit pour quelques pages de présentation que vous voulez modifier vous-même. Un développeur devient utile quand le site doit être rapide et bien référencé à grande échelle, accessible selon le RGAA, ou relié à vos outils internes.",
  },
  {
    q: "Une agence web développement peut-elle reprendre un site existant ?",
    a: "Oui, à condition d'obtenir le code, les accès à l'hébergement et la base de données. La reprise commence par un audit : qualité du code, versions des dépendances, failles connues, documentation. Il arrive que le diagnostic conseille de reconstruire une partie plutôt que de la corriger ; il le dit chiffres à l'appui.",
  },
  {
    q: "Mon site doit-il respecter le RGAA ?",
    a: "Les organismes publics et les entreprises de plus de 250 millions d'euros de chiffre d'affaires y sont tenus au titre de l'article 47 de la loi du 11 février 2005. Depuis le 28 juin 2025, la directive européenne 2019/882 étend l'exigence d'accessibilité à des services comme le commerce électronique, les microentreprises de services étant exemptées. Au-delà de l'obligation, un site accessible se lit mieux par tous, robots compris.",
  },
  {
    q: "Peut-on ajouter de l'IA à un site ou une application web existants ?",
    a: "Oui, quand les données sont accessibles et propres. Un modèle de langage s'appelle par API (une interface qui permet à deux logiciels de dialoguer) depuis le serveur de l'application : il trie des demandes, prépare des réponses, cherche dans une documentation. Notre page sur l'agence de développement IA détaille les cas d'usage et les précautions.",
  },
  {
    q: 'Masteria est-elle une agence de développement web ?',
    a: "Masteria développe des applications et des sites conçus pour le métier, reliés aux logiciels de l'entreprise et prêts à accueillir l'IA. Mathias Nizan réunit pour chaque projet une partie de son réseau d'environ cinq développeurs indépendants ; le projet se mène au forfait ou en régie. Le code et la documentation vous sont remis. Le développement n'est pas finançable par l'OPCO.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${FULL_URL}#service`,
  name: 'Agence de développement web',
  serviceType: 'Développement de sites et d\'applications web',
  provider: { '@id': `${SITE}/#organization` },
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  description: "Conception, développement, mise en ligne et maintenance de sites et d'applications web reliés aux logiciels de l'entreprise (CRM, ERP, données, automatisations, IA). Au forfait après cadrage ou en régie. Code et documentation remis au client.",
  url: FULL_URL,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 8000,
    description: "Prototype à partir d'environ 8 000 € HT ; prix ferme fixé après cadrage.",
  },
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${FULL_URL}#developpements`,
  name: 'Nos développements',
  itemListElement: HUB.map((h, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: h.title,
    url: `${SITE}${h.to}`,
  })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Agence de développement web : qui construit votre site ou votre application, et comment la choisir',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: [{ '@id': `${FULL_URL}#service` }, 'Développement web', 'Choix d\'un prestataire de développement'],
  mentions: ['CRM', 'ERP', 'Core Web Vitals', 'RGAA', 'Directive (UE) 2019/882', 'RGPD', 'Code de la propriété intellectuelle'],
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

export default function AgenceDeveloppementWebPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Développement web', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, itemListJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Développement web</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Développement web · sites et applications
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Agence de développement web
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>qui construit votre site ou votre application, et comment la choisir</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria, qui pilote ses développeurs · mise à jour le 23 octobre 2026
          </p>

          {/* GEO : réponse directe citable, définition */}
          <p id="definition" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>Une agence de développement web conçoit, programme et maintient les sites et les applications web d'une entreprise</strong> : espace client, devis en ligne, back-office, portail fournisseurs. Les meilleures se reconnaissent à la façon dont elles relient ces écrans au CRM, à l'ERP, aux données et à l'IA, et au code qu'elles vous remettent en fin de projet.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Les pages d'un site se dessinent en quelques semaines. Ce qui coûte, ce qui casse et ce qui fait gagner du temps se trouve derrière : la demande qui arrive dans le bon logiciel, le prix qui vient de l'ERP, la relance qui part seule. Choisir son prestataire revient à choisir qui saura concevoir ces liaisons.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#acteurs" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les types de prestataires
            </a>
          </div>

          {/* En bref (GEO) : dl citable */}
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
            ['#branchements', 'Derrière la vitrine'],
            ['#acteurs', 'Types de prestataires'],
            ['#etapes', 'Les étapes'],
            ['#developpements', 'Nos développements'],
            ['#technique', 'Exigences techniques'],
            ['#code', 'Propriété du code'],
            ['#prix', 'Prix'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── THÈSE : derrière la vitrine ── */}
      <section id="branchements" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Où se joue un projet web</div>
          <h2 style={h2Style}>Un projet web d'entreprise se gagne derrière la vitrine</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Les écrans d'un site changent au gré des refontes ; les liaisons avec vos logiciels, elles, portent le travail quotidien de vos équipes.</strong>{' '}
            Ce sont elles qui décident si une demande de devis arrive au bon commercial, si un prix affiché correspond au stock, si un client retrouve ses factures sans appeler.
          </p>
          <p style={mutedStyle}>
            Une agence de développement web utile commence donc par dessiner ces flux : quelle donnée naît où, qui la modifie, quel logiciel la lit ensuite. Cinq branchements reviennent d'un projet à l'autre.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {BRANCHEMENTS.map(b => {
              const Icon = b.icon
              return (
                <li key={b.title} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={21} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(16.5px, 2vw, 18.5px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{b.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{b.body}</p>
                </li>
              )
            })}
          </ul>

          <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 840 }}>
            Nous appliquons ce principe à nos propres outils : la plateforme de gestion des formations et des clients de Masteria, écrite en Next.js sur Supabase, vaut surtout par ce qu'elle relie, des dossiers aux devis et aux documents de chaque formation.
          </p>
        </div>
      </section>

      {/* ── TABLEAU : familles d'acteurs ── */}
      <section id="acteurs" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={kickerStyle}>Qui peut construire votre site</div>
          <h2 style={h2Style}>Cinq familles de prestataires livrent des choses différentes</h2>
          <p style={calloutStyle}>
            <strong>La colonne qui pèse le plus sur la durée est celle de la propriété du code.</strong>{' '}
            Un site loué sur une plateforme, ou un code dont les droits n'ont jamais été cédés, vous lie au prestataire ou à l'éditeur au moment même où vous voudriez en changer.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Le tableau décrit des pratiques courantes de chaque famille. Un contrat bien rédigé corrige la plupart des écarts : lisez-le à l'aune de ces quatre colonnes.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1000 }}>
              <caption style={srOnlyStyle}>Cinq familles de prestataires du développement web comparées sur ce qu'elles livrent, la propriété du code, la maintenance et l'intégration au système d'information et à l'IA</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille</th>
                  <th scope="col" style={thStyle}>Ce qu'elle livre bien</th>
                  <th scope="col" style={thStyle}>Propriété du code</th>
                  <th scope="col" style={thStyle}>Maintenance</th>
                  <th scope="col" style={thStyle}>Intégration au SI et à l'IA</th>
                </tr>
              </thead>
              <tbody>
                {ACTEURS.map((a, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={a.nom} style={a.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: a.highlight ? c : '#0A0A0A', textAlign: 'left', minWidth: 170 }}>
                        {a.nom}
                        {a.highlight && (
                          <span style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le format de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, minWidth: 210 }}>{a.livre}</td>
                      <td style={{ ...td, minWidth: 200 }}>{a.code}</td>
                      <td style={{ ...td, minWidth: 180 }}>{a.maintenance}</td>
                      <td style={{ ...td, minWidth: 200 }}>{a.integration}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 900 }}>
            <strong>Un repère pour trancher :</strong> si votre projet tient en pages que vous modifierez vous-même, un CMS ou une plateforme suffit. Dès qu'il doit lire ou écrire dans un autre logiciel, comptez sur des développeurs. Pour un logiciel qui épouse vos processus plutôt qu'un site, voyez notre page sur le{' '}
            <Link to="/agence-developpement-sur-mesure" style={{ color: c, fontWeight: 600 }}>développement sur mesure</Link>.
          </p>
        </div>
      </section>

      {/* ── ÉTAPES du développement ── */}
      <section id="etapes" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Développement de sites web</div>
          <h2 style={h2Style}>Les étapes du développement d'un site web ou d'une application</h2>
          <p style={leadStyle}>
            Un projet bien mené vous laisse une trace écrite à chaque étape. Si l'un de ces documents manque, vous perdez la main sur la suite : impossible de comparer un devis d'évolution, de changer de prestataire ou de prouver qu'une anomalie existait à la livraison.
          </p>
          <p style={mutedStyle}>
            Les durées varient de quelques semaines pour un prototype à plusieurs mois pour une application reliée à plusieurs logiciels ; elles se fixent au cadrage.
          </p>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {ETAPES.map((e, i) => {
              const Icon = e.icon
              return (
                <li key={e.title} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={21} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c }}>{`Étape ${i + 1}`}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(16.5px, 2vw, 19px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{e.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 14px', flex: 1 }}>{e.body}</p>
                  <p style={{ fontSize: 13.5, color: '#0A0A0A', lineHeight: 1.6, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                    <strong>Vous recevez :</strong> {e.recu}
                  </p>
                </li>
              )
            })}
          </ol>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 840 }}>
            Le détail de notre déroulé, avec les points de décision qui vous reviennent, se trouve sur la page{' '}
            <Link to="/methode-projet-ia" style={{ color: c, fontWeight: 600 }}>méthode de projet</Link>.
          </p>
        </div>
      </section>

      {/* ── HUB : nos développements ── */}
      <section id="developpements" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Nos développements</div>
          <h2 style={h2Style}>Chaque besoin de développement a sa page détaillée</h2>
          <p style={mutedStyle}>
            Selon ce que vous cherchez à construire, ou selon que vous êtes vous-même une agence en quête de renfort, l'une de ces pages répond plus précisément à votre question.
          </p>
          <nav aria-label="Nos développements">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 18 }}>
              {HUB.map(h => {
                const Icon = h.icon
                return (
                  <li key={h.to} style={{ display: 'flex' }}>
                    <Link to={h.to} style={{ ...cardStyle, padding: 24, textDecoration: 'none', display: 'flex', flexDirection: 'column', width: '100%' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                        <Icon size={20} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                      </div>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 8, lineHeight: 1.3 }}>{h.title}</span>
                      <span style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.65, flex: 1 }}>{h.body}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 14, fontWeight: 700, color: c }}>
                        Lire la page
                        <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── TECHNIQUE (ancre sombre) ── */}
      <section id="technique" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Exigences techniques</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Quatre exigences se vérifient avant la mise en ligne</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Vitesse, référencement, accessibilité et cookies relèvent de seuils publiés par Google, l'État et la CNIL.</strong>{' '}
            Ils se mesurent, ce qui permet de les écrire dans le cahier de recette et de refuser une livraison qui ne les atteint pas.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Corriger ces points après coup coûte plus cher que de les prévoir : une page lente ou inaccessible se reprend souvent composant par composant.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 18 }}>
            {TECHNIQUE.map(t => {
              const Icon = t.icon
              return (
                <div key={t.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(37,99,235,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={19} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#F8FAFC', margin: 0, lineHeight: 1.3 }}>{t.title}</h3>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 12px' }}>{t.body}</p>
                  <a href={t.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {t.source}</a>
                </div>
              )
            })}
          </div>

          <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour les données personnelles traitées par l'application elle-même (comptes, historiques, documents), la CNIL publie un{' '}
            <a href={URL_CNIL_DEV} target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', fontWeight: 600 }}>guide RGPD du développeur</a>{' '}
            en 17 fiches, de la gestion du code source à la durée de conservation.
          </p>
        </div>
      </section>

      {/* ── PROPRIÉTÉ DU CODE ── */}
      <section id="code" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Propriété du code</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Le code vous appartient quand le contrat le cède par écrit</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Payer un développement ne suffit pas à en devenir propriétaire. Le droit d'auteur protège le logiciel, et sa cession obéit à des règles précises.
              </p>
            </div>
            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gap: 18 }}>
                  {[
                    [Scale, 'La cession se rédige droit par droit', "L'article L131-3 du code de la propriété intellectuelle exige que chaque droit cédé fasse l'objet d'une mention distincte, avec un domaine d'exploitation délimité dans son étendue, sa destination, son lieu et sa durée. Une phrase vague du type « le client devient propriétaire » expose à la contestation."],
                    [FileCode2, 'La règle des salariés ne couvre pas un prestataire', "L'article L113-9 attribue à l'employeur les droits sur un logiciel créé par ses salariés dans leurs fonctions. Cette dévolution automatique ne joue pas pour une agence ou un freelance : sans clause de cession, les droits restent chez eux."],
                    [ShieldCheck, 'Le dépôt et les accès se mettent à votre nom', "Dépôt Git, hébergement, nom de domaine, comptes des services tiers : demandez qu'ils soient ouverts au nom de votre entreprise dès le départ. Le jour où vous changez de prestataire, vous n'avez rien à récupérer."],
                    [Plug, 'La réversibilité s\'écrit avant de signer', "Une documentation à jour, la liste des dépendances et une période de passation chiffrée permettent à une autre équipe de reprendre le projet sans repartir de zéro."],
                  ].map(([Icon, t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                      </span>
                      <div>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{t}</h3>
                        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div style={{ background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '16px 20px' }}>
                  <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0 }}>
                    <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                    <strong>Chez Masteria,</strong> le code et sa documentation vous sont remis en fin de projet, et le dépôt peut être ouvert à votre nom si vous le souhaitez. Un juriste reste le bon interlocuteur pour relire la clause de cession de votre contrat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIX ── */}
      <section id="prix" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Prix</div>
          <h2 style={h2Style}>Le prix d'un développement web suit le nombre de branchements</h2>
          <p style={calloutStyle}>
            <strong>Un écran de plus ajoute peu à la facture ; une liaison de plus avec un logiciel ajoute beaucoup.</strong>{' '}
            Chaque échange avec un CRM ou un ERP demande d'étudier son API (l'interface par laquelle deux logiciels dialoguent), de gérer les erreurs, de tester les cas limites et de surveiller la liaison une fois en service.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Nos repères restent volontairement larges : le prix ferme ne se fixe qu'après le cadrage, une fois les liaisons connues.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 28 }}>
            {[
              ['Prototype', "à partir d'environ 8 000 € HT", "Une première version utilisable sur un périmètre restreint, pour vérifier l'usage avant d'investir davantage."],
              ['Outil en production', "en dizaines de milliers d'euros", "Une application reliée à vos logiciels, testée, documentée, avec ses comptes utilisateurs et sa maintenance."],
              ['Déploiement de grande ampleur', 'au-delà de 100 000 €', "Plusieurs applications, de nombreux utilisateurs ou sites, et des liaisons multiples ; il peut atteindre plusieurs centaines de milliers d'euros."],
            ].map(([t, p, d]) => (
              <div key={t} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 6 }}>{t}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 21, fontWeight: 900, color: c, letterSpacing: '-0.01em', marginBottom: 10 }}>{p}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 12px', maxWidth: 880 }}>
            <strong>Deux formats de contrat.</strong> Au forfait, Masteria s'engage sur un livrable pour un prix global fixé après cadrage. En régie, des développeurs rejoignent vos équipes, sur site ou à distance, au taux journalier, communiqué sur demande. Le développement n'est pas finançable par l'OPCO ; seule la formation de vos équipes peut l'être.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Les ordres de grandeur par type d'outil sont détaillés sur la page{' '}
            <Link to="/prix-projet-ia" style={{ color: c, fontWeight: 600 }}>prix d'un projet</Link>.
          </p>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Repères</div>
          <h2 style={h2Style}>Trois chiffres publiés encadrent la qualité d'un site</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 780 }}>
            Un seuil de vitesse fixé par Google, un référentiel d'accessibilité tenu par l'État, une date d'application européenne : trois références à citer dans votre cahier des charges.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {REPERES.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Douze questions avant de choisir une agence de développement web</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre projet soulève une question absente de cette liste ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Écrivez-nous
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

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre projet</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décrivez ce que votre site doit relier, nous dessinons les flux avec vous
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
              Listez vos logiciels actuels et la tâche qui vous prend le plus de temps. En 30 minutes, vous repartez avec une première lecture des liaisons à construire et du format le plus adapté, forfait ou régie.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/methode-projet-ia" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Voir notre méthode
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange en visio offert, créneau proposé sous 24 heures · Forfait après cadrage ou régie · Code et documentation remis
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui construit ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui construit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des développeurs web et IA indépendants, réunis pour chaque projet par le fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              L'équipe travaille en React, Next.js, TypeScript, Node.js et Python, sur Supabase et PostgreSQL, avec des déploiements sur Vercel. Elle relie les applications aux CRM, aux ERP comme Odoo et aux messageries, et y branche au besoin les modèles Claude, GPT, Gemini ou Mistral, ou des automatisations n8n. Masteria construit et exploite ainsi son propre site, prérendu pour le référencement, et sa plateforme de gestion des formations et des clients. Mathias Nizan choisit les profils et répond du résultat.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs web et IA indépendants'],
              ['Forfait ou régie', 'sur site ou à distance'],
              ['Code remis', 'avec sa documentation'],
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

      {/* ── SOURCES ── */}
      <section aria-labelledby="sources-developpement-web" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-developpement-web" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Sources et textes de référence
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Seuils techniques, obligations d'accessibilité, règles de la CNIL et articles de loi cités plus haut, consultés le 23 octobre 2026.
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
