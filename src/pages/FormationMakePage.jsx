import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, Network, ShieldCheck, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation make » (slug /formation-make), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation make » (720/mois, KD 12) ;
 * « formation integromat » capté par « (ex-Integromat) » dans title/FAQ.
 *
 * ANTI-CANNIBALISATION : le comparatif n8n/Make/Zapier vit sur /formation-n8n ;
 * CETTE page porte la fiche Make (prix, hébergement, forces, limites) et un
 * tableau « quel scénario Make pour quelle équipe ». /formation-automatisation-ia
 * = démarche ; /formation-zapier et /formation-n8n = pages sœurs ;
 * /agence-automatisation-ia = faire construire.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre, faits à jour) :
 * - Make facture en CRÉDITS depuis le 27/08/2025 (ex-opérations, 1 pour 1) :
 *   make.com/en/credits, relevé le 07/10/2026.
 * - Offres relevées le 07/10/2026 sur make.com/en/pricing : Free 1 000 crédits/mois,
 *   2 scénarios actifs, intervalle mini 15 min ; Core 9 $, Pro 16 $, Teams 29 $
 *   par mois pour 10 000 crédits (paiement annuel, confirmé par relevés tiers) ;
 *   Enterprise sur devis ; hébergement AWS Europe / Amérique du Nord ;
 *   Make AI Agents (bêta) sur toutes les offres ; agent sur site en Enterprise.
 * - FounderNote, OfficialSources et bloc « Qui vous forme » remplacés par des
 *   textes propres à la page. Masteria : 1 980 € HT/jour, 2 jours.
 */

const SLUG = 'formation-make'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation Make (ex-Integromat) : scénarios et IA | Masteria'
const META_DESC = "Formation Make (ex-Integromat) en 2 jours : scénarios fiables, crédits maîtrisés, étapes IA et agents sous contrôle. Qualiopi, finançable par votre OPCO."
const KEYWORDS = "formation make, formation integromat, apprendre make, formation make automatisation, make ia, formation make entreprise"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const thStyle = { textAlign: 'left', padding: '12px 16px', fontSize: 12.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B7280', borderBottom: '2px solid #E5E7EB', fontFamily: 'Nunito, sans-serif' }
const tdStyle = { padding: '14px 16px', fontSize: 14.5, color: '#374151', lineHeight: 1.6, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }

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
  { icon: GraduationCap, label: 'Qualiopi · prise en charge OPCO possible' },
  { icon: Network, label: 'Ateliers montés sur les applications de vos équipes' },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
  { icon: Building2, label: 'Deux jours, en groupe intra ou en individuel' },
]

/* ───────── La session en résumé (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Deux jours (14 h). Une seule journée suffit quand l'équipe vise ses premiers scénarios : le cadrage le dira." },
  { label: 'Public', value: "Marketing, ventes, ADV, comptabilité fournisseurs, RH, opérations ; savoir manier un tableur suffit." },
  { label: 'Version', value: "Make tel qu'il est vendu au 7 octobre 2026 : facturation en crédits, modules IA, Make AI Agents." },
  { label: 'Méthode', value: "Un scénario par participant, tiré d'une tâche de sa semaine, monté puis éprouvé sur des cas limites." },
  { label: 'Ce qui reste', value: "Des scénarios documentés, leurs gestionnaires d'erreurs, un nommage commun et les trois chantiers suivants." },
  { label: 'Financement', value: "Organisme Qualiopi : la session est finançable par votre OPCO, selon ses règles et ses fonds." },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi Make'],
  ['#fiche', 'Make en octobre 2026'],
  ['#programme', 'Programme des 2 jours'],
  ['#metiers', 'Scénarios par équipe'],
  ['#cas-usage', 'Ateliers types'],
  ['#pieges', 'Erreurs fréquentes'],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Vocabulaire'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi Make (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Network,
    title: 'Un scénario se relit comme un schéma',
    desc: "Chaque module apparaît sur le canevas avec ses liaisons. Une responsable ADV relit le scénario d'un collègue et comprend en deux minutes ce qui part, vers quelle application et à quel moment. Le jour où l'auteur change de poste, la passation tient en une conversation.",
  },
  {
    icon: Layers,
    title: 'Des briques pour les processus tortueux',
    desc: "Le routeur sépare les cas, l'itérateur traite une liste ligne à ligne, l'agrégateur recompose le tout, le data store garde la trace d'une exécution à l'autre. Make tient des enchaînements qu'un outil plus simple obligerait à couper en plusieurs morceaux.",
  },
  {
    icon: Bot,
    title: "L'IA posée au milieu du flux",
    desc: "Un module IA résume une pièce jointe, extrait les champs d'une facture ou classe un message, avec le fournisseur d'IA de Make ou votre propre clé de modèle. Les Make AI Agents choisissent eux-mêmes parmi les outils que vous leur ouvrez. Dans les deux cas, la réponse suit un format fixé à l'avance.",
  },
  {
    icon: ShieldCheck,
    title: 'Une zone européenne pour vos données',
    desc: "Make tourne sur AWS, avec une zone en Europe et une autre en Amérique du Nord. Une organisation française retient en général la zone européenne. Le reste du sujet (ce qui transite, qui accède, ce qu'on inscrit au registre) se règle pendant la formation.",
  },
]

/* ───────── Make au 7 octobre 2026 (fiche outil) ───────── */

const FICHE = [
  { k: 'Éditeur', v: "Make, lancé à Prague sous le nom d'Integromat et rebaptisé en 2022, appartient au groupe Celonis." },
  { k: 'Unité de facturation', v: "Le crédit, qui a remplacé l'opération le 27 août 2025, à raison d'un pour un. La plupart des actions d'un module coûtent un crédit ; un module qui appelle l'IA de Make consomme selon le modèle et la quantité de texte traitée." },
  { k: 'Offre gratuite', v: "1 000 crédits par mois, deux scénarios actifs, un déclenchement toutes les 15 minutes au plus court." },
  { k: 'Offres payantes', v: "Core, Pro et Teams démarrent à 9, 16 et 29 dollars par mois pour 10 000 crédits, en paiement annuel ; le prix monte avec le volume de crédits. Enterprise se négocie sur devis." },
  { k: 'Hébergement', v: "Infrastructure AWS, zone Europe ou Amérique du Nord. L'offre Enterprise ajoute un agent installé sur site pour atteindre un réseau local." },
  { k: 'Intelligence artificielle', v: "Modules IA et Make AI Agents, encore présentés en bêta, sur toutes les offres. Make Grid donne une vue d'ensemble des scénarios et des agents d'une organisation." },
  { k: 'Points forts', v: "La lisibilité du canevas, la richesse des fonctions de transformation, l'historique détaillé de chaque exécution." },
  { k: 'Limites', v: "La plateforme tourne uniquement dans le cloud de Make. Les boucles sur de gros fichiers font grimper la consommation. Les agents sont plus jeunes que ceux de n8n." },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Lire, connecter, construire',
    resume: "Comprendre comment Make raisonne, puis monter un scénario sur une tâche du poste.",
    matin: [
      { t: 'Un scénario démonté devant le groupe', d: "Le formateur ouvre un scénario qui tourne chez un client fictif et le parcourt module par module : déclencheur, filtres, transformations, historique des exécutions." },
      { t: "Les connexions de l'équipe", d: "Messagerie, tableur, CRM, facturation : chaque connexion se fait avec un compte nominatif, que l'on peut révoquer le jour où quelqu'un quitte l'entreprise." },
      { t: 'Le crédit, unité de compte', d: "Ce que coûte une exécution, pourquoi un filtre placé tôt allège la facture, où lire la consommation de chaque scénario dans l'organisation." },
      { t: 'Les modèles de Make, relus avant usage', d: "Partir d'un modèle proposé par Make fait gagner une heure ; le relire module par module évite d'hériter de ses angles morts." },
      { t: 'Atelier : un scénario par participant', d: "Chacun automatise une tâche répétitive de sa semaine, du déclencheur au résultat, et la fait tourner sur trois cas tirés de ses propres dossiers." },
    ],
    apresmidi: [
      { t: 'Mapping et fonctions', d: "Dates au format français, textes à nettoyer, montants à arrondir : les fonctions intégrées règlent la plupart des écarts entre deux applications." },
      { t: 'Le routeur et ses branches', d: "Séparer les demandes selon leur nature, réserver une branche aux cas imprévus, empêcher qu'un même enregistrement passe deux fois." },
      { t: 'Webhooks et formulaires', d: "Lancer un scénario à la seconde où un formulaire arrive ou un paiement tombe, puis vérifier le contenu exact de ce que l'application envoie." },
      { t: 'Atelier : ajouter une branche', d: "Le scénario du matin reçoit un routeur pour traiter le deuxième cas le plus fréquent de la semaine du participant." },
      { t: 'Relecture en binôme', d: "Chacun relit le scénario d'un voisin : nommage, cas oubliés, crédits consommés pour cent exécutions." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: "IA, erreurs, passage à l'équipe",
    resume: "Confier une part du travail à l'IA sans perdre la main, puis préparer la vie du scénario après la session.",
    matin: [
      { t: 'Les modules IA dans le flux', d: "Résumer une pièce jointe, extraire les champs d'une facture, classer un message entrant, avec une réponse en JSON (un format de données structuré) que le module suivant sait lire." },
      { t: 'Make AI Agents, mis à l\'essai', d: "Fixer un objectif à un agent, lui ouvrir deux ou trois outils, puis comparer avec un scénario classique : l'agent consomme selon le texte traité et se relit moins facilement." },
      { t: "Les gestionnaires d'erreurs", d: "Sur chaque module sensible, une conduite à tenir : ignorer, reprendre plus tard, annuler. Les exécutions incomplètes sont conservées et une personne nommée reçoit l'alerte." },
      { t: 'Le data store contre les doublons', d: "Garder la trace de ce qui a déjà été traité, sans monter de base de données." },
      { t: 'Atelier : fiabiliser', d: "Chaque scénario reçoit sa gestion d'erreurs, un garde-fou sur l'étape IA et un test sur des cas limites proposés par le groupe." },
    ],
    apresmidi: [
      { t: 'Réduire la consommation', d: "Agréger avant d'écrire, filtrer avant d'appeler l'IA, espacer les déclenchements : on mesure l'effet sur le scénario construit la veille." },
      { t: "Ranger l'organisation", d: "Dossiers par équipe, nommage commun, un propriétaire par scénario, export du blueprint (le fichier de sauvegarde d'un scénario) avant chaque modification importante." },
      { t: 'Les données personnelles', d: "Ce qui transite par Make, la zone d'hébergement retenue, la ligne à ajouter au registre des traitements, avec les recommandations de la CNIL en appui." },
      { t: 'Atelier : la fiche de chaque scénario', d: "Responsable, rythme de surveillance, seuil d'alerte, prochaine évolution : une page par scénario, rangée avec lui." },
      { t: 'Les trois chantiers suivants', d: "Le groupe choisit les trois processus à automatiser ensuite, avec un porteur et une date pour chacun." },
    ],
  },
]

/* ───────── Quel scénario Make pour quelle équipe ───────── */

const METIERS_TABLE = [
  {
    equipe: 'Marketing',
    scenarios: "Un lead de formulaire enrichi, dédoublonné puis créé dans le CRM ; le bilan hebdomadaire des campagnes posté dans le canal de l'équipe",
    coeur: "Webhook, data store pour les doublons, module IA de synthèse",
  },
  {
    equipe: 'Ventes et ADV',
    scenarios: "Le devis signé crée la commande et prévient la comptabilité ; les devis restés sans réponse depuis dix jours remontent au commercial",
    coeur: "Filtres, planification quotidienne, notification ciblée",
  },
  {
    equipe: 'Comptabilité fournisseurs',
    scenarios: "La facture reçue par mail est lue, ses champs extraits, le PDF rangé, et une ligne attend la saisie",
    coeur: "Module IA d'extraction, itérateur sur les pièces jointes, routeur pour les anomalies",
  },
  {
    equipe: 'RH et opérations',
    scenarios: "L'arrivée d'un salarié déclenche la création des comptes, l'envoi des documents et les rappels du premier mois",
    coeur: "Déclencheur planifié, étapes de validation humaine, gestion d'erreurs",
  },
  {
    equipe: 'Service client',
    scenarios: "Les demandes entrantes sont classées par motif ; un brouillon de réponse attend la relecture du conseiller",
    coeur: "Module IA de classement, routeur par motif, envoi toujours manuel",
  },
]

/* ───────── Ateliers types (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: Target, title: 'Le formulaire qui alimente le CRM', desc: "Chaque demande de contact devient une fiche complète, avec la campagne d'origine et un résumé de la demande pour le commercial qui la reprend." },
  { icon: ListChecks, title: 'La facture fournisseur pré-saisie', desc: "Montant, date, fournisseur et numéro sont extraits du PDF ; la ligne attend le feu vert du comptable avant d'entrer dans l'outil de comptabilité." },
  { icon: Eye, title: 'La synthèse du lundi', desc: "Ventes, tickets et leads de la semaine arrivent dans le canal de l'équipe, commentés en trois phrases par un module IA." },
  { icon: Layers, title: "Le dossier d'arrivée", desc: "Comptes, accès, documents à signer et messages d'accueil partent dans l'ordre, après accord du manager sur l'ouverture des droits." },
  { icon: Network, title: 'La base produits tenue à jour', desc: "Une modification dans le tableur des prix se répercute dans la boutique en ligne et le CRM, avec un journal des changements." },
  { icon: Bot, title: 'La boîte générique triée', desc: "Les messages sont classés par motif et par urgence ; ceux qui appellent une réponse reçoivent un brouillon que le conseiller relit." },
]

/* ───────── Les erreurs fréquentes (5 cartes) ───────── */

const PIEGES = [
  {
    title: 'Le scénario qui fait tout',
    desc: "Vingt-cinq modules pour un processus entier deviennent illisibles au premier changement. On découpe par étape métier et on relie les scénarios par webhook.",
  },
  {
    title: 'Les exécutions incomplètes oubliées',
    desc: "Quand un module échoue, Make peut garder l'exécution en attente de reprise. Si personne ne consulte cette liste, les applications cessent de dire la même chose. La formation en fait une revue hebdomadaire.",
  },
  {
    title: 'La colonne renommée',
    desc: "Une colonne change de nom dans le tableur et le scénario écrit dans le vide. Valeurs par défaut, contrôle de présence et test sur une donnée incomplète évitent l'écriture fausse.",
  },
  {
    title: 'La boucle qui vide le forfait',
    desc: "Un itérateur sur un fichier de 5 000 lignes coûte au moins 5 000 crédits pour chaque module placé après lui. Filtrer avant la boucle et agréger avant l'écriture ramènent la dépense à sa juste mesure.",
  },
  {
    title: 'Le scénario sans propriétaire',
    desc: "Son auteur quitte l'équipe et plus personne n'ose y toucher. Chaque scénario sort de la formation avec un responsable nommé et sa fiche d'une page.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Que contient la formation Make de Masteria ?',
    a: "Deux jours pour qu'une équipe automatise ses tâches répétitives avec Make : la logique des scénarios et des modules, les connexions à vos applications, la gestion d'erreurs, les étapes IA, la lecture des crédits consommés et l'organisation qui permet de reprendre un scénario après son auteur. Chaque participant part d'une tâche de son poste et quitte la salle avec un scénario qui tourne. Masteria étant certifiée Qualiopi, votre OPCO peut financer ces deux jours selon ses règles et ses fonds.",
  },
  {
    q: 'Make et Integromat désignent-ils le même outil ?',
    a: "Oui. Integromat, créé à Prague, a pris le nom de Make en 2022. La logique des scénarios visuels est restée ; l'interface, l'offre IA et l'unité de facturation ont changé depuis. La formation porte sur la version vendue aujourd'hui, et les personnes qui cherchent une formation Integromat y trouvent le même outil.",
  },
  {
    q: 'Faut-il savoir programmer pour suivre la session ?',
    a: "Non. Tout se construit sur le canevas, et les fonctions de transformation s'écrivent comme une formule de tableur. Une personne à l'aise avec Excel et ses applications de travail suit sans difficulté. Les ateliers demandent surtout de bien connaître sa propre tâche : ses étapes, ses exceptions, ce qui la fait échouer aujourd'hui.",
  },
  {
    q: "Qu'est-ce qu'un crédit Make ?",
    a: "Depuis le 27 août 2025, Make facture en crédits, qui ont remplacé les opérations à raison d'un pour un. La plupart des actions d'un module coûtent un crédit ; les modules qui font appel à l'IA de Make consomment selon le modèle et la quantité de texte. Un scénario qui boucle sans filtre dépense bien plus que nécessaire : la formation apprend à lire la consommation de chaque scénario et à la réduire.",
  },
  {
    q: 'Combien coûte Make ?',
    a: "Relevée le 7 octobre 2026, la grille de Make affiche une offre gratuite (1 000 crédits par mois, deux scénarios actifs) et des offres Core, Pro et Teams à partir de 9, 16 et 29 dollars par mois pour 10 000 crédits, en paiement annuel ; Enterprise est sur devis. Ces montants bougent souvent : vérifiez-les avant de budgéter. Ils s'ajoutent au prix de la formation, qui ne comprend aucune licence.",
  },
  {
    q: 'Make, n8n ou Zapier : lequel retenir ?',
    a: "Make convient quand une équipe métier veut lire et modifier ses scénarios elle-même, sur des processus à plusieurs branches. n8n prend l'avantage si les données doivent rester sur vos serveurs, si les volumes sont élevés ou si vous voulez des agents outillés. Zapier reste le plus rapide pour des automatisations courtes entre applications courantes. La page formation n8n compare les trois, critère par critère.",
  },
  {
    q: 'Que permettent les Make AI Agents ?',
    a: "Un agent reçoit un objectif et un jeu d'outils que vous définissez, puis décide lui-même de l'ordre des actions. Au 7 octobre 2026, Make les présente en bêta, sur toutes les offres, avec son propre fournisseur d'IA ou votre clé de modèle. Nous les abordons au deuxième jour, après les modules IA classiques, avec une règle simple : ce qui engage l'entreprise attend la validation d'une personne.",
  },
  {
    q: 'Où sont hébergées les données de nos scénarios ?',
    a: "Make fonctionne sur AWS, avec une zone européenne et une zone nord-américaine ; une organisation française retient en général la zone européenne. Les données traversent malgré tout le service : la formation apprend à limiter ce qui transite, à attribuer des connexions nominatives et à inscrire chaque scénario au registre des traitements, avec les recommandations de la CNIL comme référence. Si rien ne doit sortir de votre infrastructure, n8n installé sur vos serveurs répond mieux.",
  },
  {
    q: 'La session peut-elle se tenir à distance ou en individuel ?',
    a: "Oui. En intra, un groupe d'au plus douze personnes se réunit sur votre site ou en visioconférence, et la version distante se découpe volontiers en quatre demi-journées. Seul avec le formateur, un référent avance sur ses propres scénarios, au même tarif journalier. Nos formateurs se déplacent partout en France et à l'étranger, de l'Europe aux États-Unis et à l'Inde.",
  },
  {
    q: 'Que garde l\'équipe à la fin des deux jours ?',
    a: "Un scénario par participant, en service et documenté ; des conventions de nommage et de rangement ; une gestion d'erreurs où chaque alerte a un destinataire ; une fiche par scénario (responsable, surveillance, prochaine évolution) ; et les trois chantiers suivants, chacun avec son porteur et sa date.",
  },
  {
    q: 'Et si nous préférons confier la construction de nos scénarios ?',
    a: "Notre agence d'automatisation conçoit, construit et maintient des scénarios Make ou des workflows n8n pour votre compte. C'est une prestation de développement, distincte de la formation et pas finançable par votre OPCO. Les deux se complètent : une équipe formée décrit mieux son besoin et reprend plus vite ce qu'on lui livre.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation Make (ex-Integromat), Masteria',
  description: "Formation Make en 2 jours : scénarios et modules, connexions aux applications de l'équipe, mapping et routeurs, webhooks, modules IA et Make AI Agents, gestionnaires d'erreurs, data stores, lecture et réduction des crédits consommés, organisation et passation. Chaque participant automatise une tâche de son poste. En intra ou en individuel, sur site ou à distance. Masteria est certifiée Qualiopi.",
  level: 'Tous niveaux, aucun prérequis technique',
  teaches: [
    "Lire et construire un scénario Make : déclencheur, modules, filtres, routeurs",
    "Connecter les applications de l'équipe avec des comptes nominatifs",
    "Encadrer un module IA ou un agent Make par un format de sortie imposé",
    "Poser des gestionnaires d'erreurs et surveiller les exécutions incomplètes",
    "Lire et réduire la consommation de crédits d'un scénario",
    "Documenter et transmettre un scénario à l'équipe",
  ],
  about: "Make, anciennement Integromat (automatisation par scénarios visuels)",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Aucun prérequis technique ; être à l'aise avec un tableur et ses applications de travail.",
  audience: 'Marketing, ventes, ADV, comptabilité fournisseurs, RH, opérations, référents IA',
  locationName: 'Masteria, en intra ou en individuel, sur site ou en visioconférence',
}

/* Le programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation Make (2 jours)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: `${day.jour} · Matin · ${day.titre}`, description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: `${day.jour} · Après-midi · ${day.titre}`, description: day.apresmidi.map(m => m.t).join(' ; ') },
  ]),
}

/* Article : auteur, dates, entités (E-E-A-T + GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-make#article',
  headline: 'Formation Make : des scénarios qui tiennent en production',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-make#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30 ; Make n'a pas
     d'article dédié, on ancre sur les concepts. */
  about: [
    { '@type': 'Thing', name: 'Flux de travaux', sameAs: 'https://fr.wikipedia.org/wiki/Flux_de_travaux' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Interface de programmation', sameAs: 'https://fr.wikipedia.org/wiki/Interface_de_programmation' },
  ],
}

/* ── GEO : vocabulaire Make (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Vocabulaire de Make',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Scénario', description: "L'automatisation telle que Make la dessine : un déclencheur, puis une suite de modules reliés sur le canevas. On le construit, on le teste, on lui donne un responsable." },
    { '@type': 'DefinedTerm', name: 'Module', description: "Une case du scénario : une action dans une application, une transformation de données, un appel à l'IA. Chaque action d'un module consomme des crédits." },
    { '@type': 'DefinedTerm', name: 'Crédit', description: "L'unité de facturation de Make depuis le 27 août 2025, à la place de l'opération. Une action courante coûte un crédit ; un module IA consomme selon le texte traité." },
    { '@type': 'DefinedTerm', name: 'Routeur', description: "Le module qui ouvre plusieurs branches selon des conditions, pour traiter différemment une commande, une réclamation ou une demande de devis." },
    { '@type': 'DefinedTerm', name: 'Webhook', description: "Une adresse que Make écoute : dès qu'une application y envoie un événement (formulaire, paiement, ticket), le scénario démarre." },
    { '@type': 'DefinedTerm', name: 'Data store', description: "Une petite table intégrée à Make pour se souvenir d'une exécution à l'autre : identifiants déjà traités, compteurs, derniers états connus." },
    { '@type': 'DefinedTerm', name: "Gestionnaire d'erreurs", description: "La conduite fixée pour un module qui échoue : ignorer, reprendre plus tard, annuler, prévenir quelqu'un. Sans lui, l'échec passe inaperçu." },
    { '@type': 'DefinedTerm', name: 'Itérateur et agrégateur', description: "Le premier découpe une liste en éléments traités un par un, le second les rassemble. Leur placement décide d'une bonne part des crédits consommés." },
  ],
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

/* Sources de la page : WebPage.citation (JSON-LD) + bloc visible en fin de page. */
const PAGE_CITATIONS = [
  { name: 'Make, page tarifs (offres, crédits, hébergement), relevée le 7 octobre 2026', url: 'https://www.make.com/en/pricing' },
  { name: "Make, passage des opérations aux crédits au 27 août 2025", url: 'https://www.make.com/en/credits' },
  { name: "Make, centre d'aide et documentation", url: 'https://help.make.com/' },
  { name: 'CNIL, dossiers et recommandations sur l\'intelligence artificielle', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'Ministère du Travail, la certification Qualiopi', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: 'Plan de développement des compétences : la fiche du ministère du Travail', url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
]

export default function FormationMakePage() {
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
    { name: 'Formation Make', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        courseData={COURSE_DATA}
        faqItems={FAQ}
        datePublished="2026-08-30"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[programmeJsonLd, articleJsonLd, termsJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation Make</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Network size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Make (ex-Integromat)
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation Make :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des scénarios qui tiennent en production</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Page signée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · tarifs de Make vérifiés le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation Make met vos équipes en mesure d'automatiser elles-mêmes leur travail répétitif avec Make, l'ancien Integromat, sur un canevas où chaque module se voit. <strong style={{ color: '#fff', fontWeight: 700 }}>En deux jours, chaque participant monte, fiabilise et documente un scénario tiré de son poste, avec une étape IA</strong> et une lecture précise des crédits qu'il consomme. Organisme certifié Qualiopi, Masteria vous aide à faire financer la session par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Make convient aux équipes métier qui veulent automatiser sans attendre le service informatique : le scénario se lit comme un plan, et il tient des processus à plusieurs branches. Pour ces deux jours, nous visons un résultat précis. Chaque scénario prévient quelqu'un le jour où il échoue.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Préparer votre session Make
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire le programme
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

          {/* La session en résumé : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>La session Make en six lignes</div>
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

      {/* ── SOMMAIRE ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '14px 24px' }}>
        <div style={{ ...wrap, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', fontFamily: 'Nunito, sans-serif' }}>Sur cette page</span>
          {SOMMAIRE.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13.5, color: '#374151', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── POURQUOI MAKE ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'outil</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Make donne aux équipes métier un outil qu'elles savent relire
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Le scénario s'affiche comme un schéma, module par module, et l'historique de chaque exécution montre où la donnée a changé. Make va pourtant assez loin pour des processus à branches, avec routeurs, itérateurs, data stores, webhooks et agents IA intégrés. Une équipe marketing ou ADV y gagne son autonomie, sans ticket au service informatique pour chaque changement.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Vous hésitez encore entre plusieurs outils ? Le tableau comparatif de la <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> met Make face à n8n et Zapier. Vous ne savez pas encore quelles tâches confier à l'automatisation ? La <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> commence par cette question.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {POURQUOI.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
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

      {/* ── FICHE OUTIL : MAKE AU 7 OCTOBRE 2026 ── */}
      <section id="fiche" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Fiche outil</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que Make facture, héberge et propose au 7 octobre 2026
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Make facture en crédits depuis août 2025, propose une offre gratuite de 1 000 crédits par mois et des offres payantes à partir de 9 dollars par mois, et héberge vos scénarios sur AWS en Europe ou en Amérique du Nord. Nous avons relevé ces informations sur le site de l'éditeur avant de mettre la page à jour.</strong>
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Point</th>
                  <th style={thStyle} scope="col">Ce que nous avons relevé</th>
                </tr>
              </thead>
              <tbody>
                {FICHE.map((row, i) => (
                  <tr key={row.k}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === FICHE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.k}</td>
                    <td style={{ ...tdStyle, borderBottom: i === FICHE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7, margin: '20px 0 0', maxWidth: 880 }}>
            Les prix sont publiés en dollars hors taxes et l'éditeur les révise régulièrement : refaites le calcul sur sa page tarifs avant de signer. Ils ne comprennent pas la formation, et la formation ne comprend aucune licence.
          </p>
        </div>
      </section>

      {/* ── LE PROGRAMME (ancre sombre) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Deux jours pour passer du premier scénario à sa passation
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le premier jour installe la logique de Make, les connexions et un scénario par participant, enrichi d'une branche l'après-midi. Le second ajoute l'IA, la gestion d'erreurs, la réduction des crédits consommés et la fiche qui permettra à un collègue de reprendre chaque scénario.</strong>
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PROGRAMME.map(day => (
              <div key={day.jour} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(22px, 3.5vw, 32px)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA' }}>{day.jour}</span>
                  <h3 style={{ ...h3Style, fontSize: 19, color: '#F8FAFC' }}>{day.titre}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#94A3B8', margin: '0 0 20px' }}>{day.resume}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(18px, 3vw, 32px)' }}>
                  {[['Matin', day.matin], ['Après-midi', day.apresmidi]].map(([label, items]) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>{label}</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                        {items.map(item => (
                          <li key={item.t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 99, background: '#60A5FA', flexShrink: 0, marginTop: 8 }} />
                            <div>
                              <div style={{ fontSize: 14.5, fontWeight: 700, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif', marginBottom: 3 }}>{item.t}</div>
                              <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 800 }}>
            Le contenu se règle avec vous avant la session : applications en place, niveau du groupe, processus visés. La version d'une journée s'arrête aux scénarios fiables ; la seconde journée apporte l'IA, la réduction de consommation et la passation.
          </p>
        </div>
      </section>

      {/* ── SCÉNARIOS PAR ÉQUIPE ── */}
      <section id="metiers" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Par équipe</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Chaque équipe a son premier scénario Make
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Make rend le plus de services aux équipes dont le travail traverse trois ou quatre applications : un formulaire, un CRM, un tableur, une messagerie. Le tableau reprend les scénarios que nous montons le plus souvent en atelier, avec les briques de Make qui les font tourner.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Équipe</th>
                  <th style={thStyle} scope="col">Scénario monté en atelier</th>
                  <th style={thStyle} scope="col">Briques Make mobilisées</th>
                </tr>
              </thead>
              <tbody>
                {METIERS_TABLE.map((row, i) => (
                  <tr key={row.equipe}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === METIERS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.equipe}</td>
                    <td style={{ ...tdStyle, borderBottom: i === METIERS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.scenarios}</td>
                    <td style={{ ...tdStyle, borderBottom: i === METIERS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.coeur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ATELIERS TYPES ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ateliers types</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six scénarios reviennent d'une session Make à l'autre
          </h2>

          <p style={answerStyle}>
            <strong>Chaque atelier part d'une tâche que le participant fait toutes les semaines. Six scénarios reviennent souvent : le formulaire qui alimente le CRM, la facture pré-saisie, la synthèse du lundi, le dossier d'arrivée, la base produits tenue à jour et la boîte générique triée.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS_USAGE.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES ERREURS FRÉQUENTES ── */}
      <section id="pieges" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qui fait tomber un scénario</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq erreurs mettent un scénario Make hors service
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Quand un scénario Make finit désactivé, l'arrêt remonte le plus souvent à l'une de ces cinq erreurs. Le programme traite chacune au moment où elle apparaît dans l'atelier, sur le scénario du participant.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {PIEGES.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.75, margin: '26px 0 0', maxWidth: 860 }}>
            Notre <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>agence d'automatisation</Link> applique ces règles aux scénarios qu'elle construit et maintient pour ses clients ; la formation les enseigne telles quelles.
          </p>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT la journée de session Make, en groupe comme en individuel
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le prix est le même pour un groupe en intra (12 participants au plus) ou pour une personne seule en individuel : 1 980 € HT la journée, 3 960 € HT pour les deux jours recommandés. Les abonnements Make restent à votre charge. Qualiopi certifie Masteria au titre des actions de formation : votre OPCO décide de prendre en charge tout ou partie de la session, selon ses critères et l'état de ses fonds, et nous préparons programme et convention pour votre demande. Pour savoir de quel opérateur vous dépendez, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> vous oriente ; les règles de prise en charge sont détaillées sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT la journée, en groupe ou en individuel',
                  'Deux jours recommandés : 3 960 € HT',
                  'Abonnements Make en dehors du prix',
                  'Programme et convention prêts pour votre OPCO',
                ].map(pt => (
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

      {/* ── E-E-A-T : qui anime la formation Make ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui anime la session</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs qui entretiennent des scénarios chez des clients
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est née à Lyon en 2022 : Mathias Nizan l'a créée pour se consacrer à l'intelligence artificielle, sans lien avec un éditeur. Il pilote chaque session Make ; l'animation revient à lui ou à l'un des quelque vingt formateurs indépendants du réseau, retenu selon l'outil et le métier du groupe. Les règles transmises (gestion d'erreurs, sobriété, responsable nommé) sont celles de nos missions, racontées dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link>.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['1', 'scénario en service par participant'],
                ['12', 'personnes au plus dans un groupe intra'],
                ['3', 'chantiers datés avant de se quitter'],
                ['FR · EN', 'animation en français ou en anglais'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VOCABULAIRE VISIBLE (mêmes termes que le DefinedTermSet JSON-LD) ── */}
      <section id="lexique" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Le vocabulaire</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Huit mots de Make à connaître avant la première matinée
          </h2>
          <p style={answerStyle}>
            <strong>Scénario, module, crédit, routeur, webhook, data store, gestionnaire d'erreurs, itérateur : avec ces huit mots, la documentation de Make et ses forums deviennent lisibles. Nous les posons dès la première heure, avec les définitions ci-dessous.</strong>
          </p>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, margin: 0 }}>
            {termsJsonLd.hasDefinedTerm.map(t => (
              <div key={t.name} style={{ ...cardStyle, padding: 22 }}>
                <dt style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{t.name}</dt>
                <dd style={{ margin: 0, fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{t.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation Make : vos questions, nos réponses
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question sur votre compte Make ou sur votre processus ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
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

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pages voisines</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Selon votre besoin, un autre point de départ peut mieux convenir
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Selon vos données, vos volumes et le profil de l'équipe, une de ces pages vous servira peut-être mieux.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Démarche', desc: "Choisir les tâches à automatiser et le niveau d'outil adapté avant d'ouvrir Make." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Alternative', desc: "Héberger ses workflows chez soi, et le tableau qui compare n8n, Make et Zapier point par point." },
              { label: 'Formation Zapier', href: '/formation-zapier', tag: 'Plus simple', desc: "Une journée pour des automatisations courtes entre des applications courantes." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Des agents conçus dans l'assistant que l'équipe utilise déjà, en complément des scénarios." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Faire construire', desc: "Des scénarios conçus et entretenus par notre équipe quand le temps manque en interne." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "Ce que les OPCO financent, et comment monter la demande de prise en charge." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <ArrowRight size={16} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan a relu cette page le 7 octobre 2026, après avoir contrôlé sur le site de Make les tarifs et le passage aux crédits. Il pilote les formations d'automatisation de Masteria ; son parcours figure sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page de fondateur</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation Make</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Le soir du deuxième jour, chaque participant laisse un scénario en service
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Envoyez-nous la liste des tâches répétitives de l'équipe et les applications qu'elle utilise. Vous recevez sous 24 heures un programme ajusté, le devis et les pièces utiles à votre demande de prise en charge.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Préparer votre session Make
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Organisme certifié Qualiopi · sur site ou en visioconférence, en France comme à l'étranger
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES DE LA PAGE ── */}
      <section aria-labelledby="sources-make" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-make" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Où vérifier les informations de cette page
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Tarifs et fonctions de Make relevés le 7 octobre 2026 ; cadre de la formation et des données personnelles.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
