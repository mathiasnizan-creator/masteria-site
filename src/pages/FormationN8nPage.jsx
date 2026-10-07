import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, Network, ShieldCheck, Target, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation n8n » (slug /formation-n8n), côté FORMATION
 * (OPCO/Qualiopi visibles).
 * Cible (Semrush fr, relevé 2026-08-28) : « formation n8n » (1 000/mois,
 * KD 23), le plus gros volume outil non couvert du site.
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation) :
 *  - /formation-n8n = CETTE page : MAÎTRISER n8n (2 jours, workflows + IA
 *    + agents + exploitation) ; porte le tableau comparatif n8n/Make/Zapier ;
 *  - /formation-make et /formation-zapier = les pages sœurs (fiches outil et
 *    tableaux propres à chaque outil) ;
 *  - /formation-automatisation-ia = la démarche (quoi automatiser, 3 paliers) ;
 *  - /formation-agents-ia = concevoir des agents dans les assistants ;
 *  - /agence-automatisation-ia = FAIRE CONSTRUIRE (mission, pas formation).
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre, faits à jour) :
 * - Relevé n8n.io/pricing le 07/10/2026 : Starter 20 €/mois (2 500 exécutions),
 *   Pro 50 €/mois (10 000), prix en paiement annuel ; Business 667 €/mois
 *   (40 000, auto-hébergé, < 100 salariés) ; Enterprise sur devis ; Community
 *   Edition gratuite (GitHub) ; utilisateurs et workflows illimités ; cloud
 *   stocké dans l'UE à Francfort ; nœud AI Agent, MCP, validation humaine
 *   des appels d'outils, tables de données.
 * - Licence : Sustainable Use License (LICENSE.md du dépôt n8n-io/n8n), usage
 *   interne ou non commercial.
 * - Make : crédits (make.com/en/credits) ; Zapier : tâches, AWS États-Unis,
 *   DPF (zapier.com/pricing et /legal/data-privacy), relevés le 07/10/2026.
 * - FounderNote, OfficialSources et bloc « Qui vous forme » remplacés par des
 *   textes propres à la page. Masteria : 1 980 € HT/jour, 2 jours.
 * Entité Wikipédia N8n vérifiée 200 le 2026-08-30.
 */

const SLUG = 'formation-n8n'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation n8n : workflows, IA et agents | Masteria'
const META_DESC = "Formation n8n en 2 jours : workflows fiables, nœuds IA et agents, cloud à Francfort ou auto-hébergement, supervision. Qualiopi, finançable par votre OPCO."
const KEYWORDS = "formation n8n, formation n8n français, apprendre n8n, formation automatisation n8n, n8n agents ia, formation n8n entreprise"

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
  { icon: GraduationCap, label: 'Organisme Qualiopi · demande OPCO préparée' },
  { icon: Workflow, label: 'Low-code : un workflow construit par participant' },
  { icon: ShieldCheck, label: "Cloud européen ou serveurs de l'entreprise" },
  { icon: Building2, label: 'Deux jours, sur site ou en visioconférence' },
]

/* ───────── L'essentiel (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Deux jours, soit 14 heures ; une journée centrée sur les premiers workflows reste possible." },
  { label: 'Public', value: "Référents IA, responsables des opérations, profils à l'aise avec la logique d'un tableur avancé ; aucun développeur requis." },
  { label: 'Environnement', value: "n8n Cloud (données stockées à Francfort) ou instance installée chez vous, choisi avant la session avec votre service informatique." },
  { label: 'Méthode', value: "Chacun construit un workflow sur un processus de son poste, y ajoute une étape IA, puis le prépare à tourner sans lui." },
  { label: 'Livrables', value: "Workflows exportés et commentés, un workflow d'erreur commun, des règles d'accès aux credentials, le plan des trois workflows suivants." },
  { label: 'Financement', value: "Votre OPCO peut couvrir tout ou partie du coût ; ses règles et son budget en décident." },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi n8n'],
  ['#fiche', 'n8n en octobre 2026'],
  ['#programme', 'Programme des 2 jours'],
  ['#comparatif', 'n8n, Make ou Zapier'],
  ['#cas-usage', 'Workflows types'],
  ['#pieges', 'Écueils'],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Vocabulaire'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi n8n (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: ShieldCheck,
    title: 'Vos données restent dans votre périmètre',
    desc: "La Community Edition s'installe sur une machine de l'entreprise ou chez un hébergeur européen, sans frais de licence pour un usage interne. Le cloud de n8n conserve, lui, les données à Francfort.",
  },
  {
    icon: Layers,
    title: "Une exécution, quel que soit le nombre d'étapes",
    desc: "Un workflow de trente étapes lancé mille fois compte mille exécutions. Quand les volumes montent, cette règle rend la facture plus prévisible qu'une facturation à l'étape.",
  },
  {
    icon: Bot,
    title: 'Des agents qui demandent la permission',
    desc: "Le nœud AI Agent reçoit un objectif et des outils, et n8n peut exiger l'accord d'une personne avant chaque appel d'outil. Le serveur et le client MCP (le protocole qui relie un modèle d'IA à des logiciels) ouvrent vos agents à d'autres applications.",
  },
  {
    icon: Network,
    title: 'Du code quand le visuel ne suffit plus',
    desc: "Une étape Code accepte du JavaScript ou du Python, et le nœud HTTP Request appelle n'importe quelle API. Les profils non développeurs s'en passent ; la porte reste ouverte pour les cas particuliers.",
  },
]

/* ───────── n8n au 7 octobre 2026 (fiche outil) ───────── */

const FICHE = [
  { k: 'Éditeur', v: "n8n GmbH, entreprise berlinoise. Le code est publié sous Sustainable Use License, une licence dite fair-code : usage libre pour les besoins internes d'une entreprise, revente de n8n comme service interdite." },
  { k: 'Facturation', v: "À l'exécution de workflow, quel que soit le nombre d'étapes. Utilisateurs, workflows et intégrations sont illimités sur toutes les offres." },
  { k: 'Version gratuite', v: "La Community Edition, publiée sur GitHub, que vous installez et maintenez vous-même." },
  { k: 'Offres cloud', v: "Starter à 20 € par mois pour 2 500 exécutions, Pro à 50 € par mois pour 10 000 exécutions, montants affichés en paiement annuel ; données stockées à Francfort." },
  { k: 'Offres auto-hébergées', v: "Business à 667 € par mois en paiement annuel pour 40 000 exécutions, pour les entreprises de moins de 100 salariés ; Enterprise sur devis, chez vous ou hébergée par n8n." },
  { k: 'Intelligence artificielle', v: "Nœud AI Agent et étapes IA, serveur et client MCP, validation humaine avant l'appel d'un outil, tables de données intégrées ; un assistant de construction, en préversion, sur les offres cloud." },
  { k: 'Points forts', v: "La maîtrise des données, un coût prévisible à volume, des agents outillés, du code possible à chaque étape." },
  { k: 'Limites', v: "Une interface en anglais et une prise en main plus longue que Make ou Zapier. Une instance auto-hébergée réclame quelqu'un pour les mises à jour, les sauvegardes et la sécurité." },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Poser le cadre, construire le premier workflow',
    resume: "Choisir où tourne n8n, brancher vos applications, puis livrer un workflow doté d'une étape IA.",
    matin: [
      { t: "Un workflow lu à l'écran", d: "Nœuds, connexions, données qui passent d'une étape à l'autre : le formateur fait tourner un workflow complet et ouvre le détail de chaque exécution." },
      { t: 'Cloud ou instance maison', d: "Où tourne n8n, où vont les données, qui administre : la décision se prend en début de session, avec les critères de votre service informatique." },
      { t: 'Des credentials rangés dès le départ', d: "Chaque accès à une application s'enregistre une fois, au nom d'un compte de service ou d'une personne, et se partage avec ceux qui en ont l'usage." },
      { t: 'Expressions et structure des données', d: "Lire un objet JSON, pointer le bon champ, convertir une date : trois gestes qui débloquent la plupart des workflows." },
      { t: 'Atelier : le workflow de chacun', d: "Chacun rend automatique une tâche de son propre poste, en partant de zéro ou d'un modèle de la communauté n8n relu avec le formateur." },
    ],
    apresmidi: [
      { t: 'Boucles, fusions, conditions', d: "Traiter une liste élément par élément, rapprocher deux sources, aiguiller selon une valeur : la mécanique qui fait tenir un workflow face à des données variées." },
      { t: 'Le nœud HTTP Request', d: "Une application dotée d'une API devient joignable, même absente du catalogue de n8n ; on apprend à lire une documentation d'API sans être développeur." },
      { t: "L'étape IA", d: "Condenser un courrier reçu, isoler les champs utiles, ranger une demande dans la bonne catégorie, avec un modèle choisi et une sortie structurée que l'étape suivante contrôle." },
      { t: "Atelier : ajouter l'étape IA", d: "Chacun insère une étape IA dans son workflow du matin et vérifie la sortie sur dix cas différents." },
      { t: 'Revue croisée', d: "Les workflows passent de main en main : ce qui casserait en production, ce qu'un collègue ne comprendrait pas." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Agents, erreurs, exploitation',
    resume: "Ajouter un agent sous contrôle, rendre chaque échec visible, organiser la vie de l'instance.",
    matin: [
      { t: 'Le nœud AI Agent', d: "Un objectif, des outils (lire une boîte mail, chercher dans une table, écrire dans un tableur) et des limites : l'agent choisit seul la séquence à suivre." },
      { t: "L'accord avant l'outil", d: "n8n peut suspendre l'agent avant un appel d'outil et attendre la réponse d'une personne : on règle ce qui passe seul et ce qui attend un feu vert." },
      { t: 'Vos documents comme référence', d: "Brancher un corpus (procédures, gabarits, historiques) pour que l'agent réponde en s'appuyant sur vos textes." },
      { t: "Le workflow d'erreur", d: "Un workflow dédié reçoit chaque échec, prévient la bonne personne et garde la trace ; les nouvelles tentatives se règlent nœud par nœud." },
      { t: 'Atelier : durcir son workflow', d: "Gestion d'erreurs, limites de l'agent, tests sur les cas qui fâchent : le workflow du premier jour devient présentable." },
    ],
    apresmidi: [
      { t: 'Lire le journal des exécutions', d: "Repérer un workflow qui ralentit, une donnée qui change de forme, un volume qui grimpe, et décider quand on suspend un workflow." },
      { t: 'Sous-workflows et tables de données', d: "Mettre en commun ce qui se répète (notification, journalisation, contrôle) et garder un état sans base externe." },
      { t: 'Exploiter une instance', d: "Mises à jour, sauvegardes, historique des versions, séparation entre test et production : le minimum vital d'une instance auto-hébergée." },
      { t: "Atelier : le registre de l'équipe", d: "Chaque workflow reçoit un propriétaire, une description, un niveau de criticité et une date de revue." },
      { t: 'Les trois workflows suivants', d: "Le groupe arrête la suite, avec un porteur et une échéance pour chacun." },
    ],
  },
]

/* ───────── Comparatif n8n / Make / Zapier ───────── */

const COMPARATIF = [
  {
    critere: 'Prise en main',
    n8n: "La plus exigeante des trois : comptez une journée encadrée pour être à l'aise",
    make: "Rapide, grâce au canevas visuel",
    zapier: "Immédiate pour une automatisation simple",
  },
  {
    critere: 'Unité facturée',
    n8n: "L'exécution de workflow, quel que soit le nombre d'étapes",
    make: "Le crédit, ex-opération, en général un par action de module",
    zapier: "La tâche, y compris pour les étapes IA et le code",
  },
  {
    critere: 'Premier prix payant',
    n8n: "Cloud Starter, 20 € par mois en paiement annuel",
    make: "Core : 9 $ mensuels pour 10 000 crédits, avec engagement annuel",
    zapier: "Professional : 19,99 $ par mois au minimum, en paiement annuel",
  },
  {
    critere: 'Hébergement',
    n8n: "Cloud à Francfort, ou vos propres serveurs",
    make: "Serveurs AWS européens ou nord-américains, au choix",
    zapier: "AWS aux États-Unis, sous le Data Privacy Framework",
  },
  {
    critere: 'Agents IA',
    n8n: "Nœud AI Agent, MCP, accord humain avant l'appel d'un outil",
    make: "Make AI Agents, présentés en bêta",
    zapier: "Zapier Agents, décomptés en activités à part",
  },
  {
    critere: 'À retenir quand',
    n8n: "Les données sont sensibles, les volumes élevés, un profil technique est disponible",
    make: "Des équipes métier tiennent à garder la main sur leurs scénarios",
    zapier: "Les automatisations sont courtes et l'équipe n'a aucun profil technique",
  },
]

/* ───────── Workflows types (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: Target, title: "Les appels d'offres présélectionnés", desc: "Chaque matin, le workflow récupère les avis publiés la veille, écarte ceux qui sortent du périmètre et résume les autres pour le responsable commercial." },
  { icon: Eye, title: 'La veille réglementaire classée', desc: "Les publications de vos sources sont collectées, dédoublonnées, résumées et rangées par thème dans une table que l'équipe juridique consulte." },
  { icon: ListChecks, title: 'Commandes et factures rapprochées', desc: "Les commandes de l'ERP et les factures reçues sont comparées ; seuls les écarts remontent, avec le détail utile pour trancher." },
  { icon: Layers, title: 'Le dossier de rendez-vous', desc: "La veille d'un rendez-vous client, le workflow rassemble l'historique du CRM, les derniers échanges et une synthèse à relire." },
  { icon: Network, title: 'Le support de premier niveau', desc: "Un ticket arrive, l'agent cherche la réponse dans la base de connaissances et prépare une proposition que le conseiller valide avant envoi." },
  { icon: Bot, title: "L'agent qui propose la mise à jour du CRM", desc: "Après un rendez-vous, l'agent lit le compte rendu et propose les champs à modifier ; rien ne change dans le CRM sans l'accord du commercial." },
]

/* ───────── Les écueils (5 cartes) ───────── */

const PIEGES = [
  {
    title: 'Le workflow-spaghetti',
    desc: "Quarante nœuds sans découpage, que personne ne relit trois semaines plus tard. Sous-workflows, noms explicites et notes posées sur le canevas règlent le problème.",
  },
  {
    title: 'Le credential personnel branché partout',
    desc: "Un compte personnel sert à tout, et l'automatisation s'arrête le jour où son titulaire part. On crée des accès dédiés, limités et révocables.",
  },
  {
    title: "L'instance laissée sans mises à jour",
    desc: "Une instance auto-hébergée vieillit vite : correctifs de sécurité non appliqués, sauvegardes absentes. Un responsable et un calendrier de mise à jour sont désignés avant la mise en service.",
  },
  {
    title: "L'échec que personne ne voit",
    desc: "Sans workflow d'erreur, un échec dort dans le journal sans prévenir qui que ce soit. Chaque workflow de la session est relié à une alerte nominative.",
  },
  {
    title: "L'agent laissé sans validation",
    desc: "Un agent qui envoie ou modifie sans accord finit par se tromper au mauvais moment. L'accord humain avant les outils sensibles se règle dans n8n lui-même.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Que couvre la formation n8n de Masteria ?',
    a: "En deux journées, l'équipe apprend à construire, sécuriser et exploiter des workflows n8n : choix de l'hébergement, credentials, transformation des données, étape IA, agent soumis à validation, workflow d'erreur, journal des exécutions et registre des workflows. Chacun s'exerce sur un processus qu'il connaît par cœur et repart avec un workflow exporté et commenté. Pour le financement, votre OPCO tranche dans les limites de ses règles et de ses fonds ; la certification Qualiopi de Masteria rend la demande recevable.",
  },
  {
    q: "Qu'est-ce que n8n ?",
    a: "Un outil d'automatisation édité par une entreprise berlinoise, n8n GmbH. On y assemble des nœuds (déclencheurs, applications, transformations, étapes IA, agents) pour faire circuler l'information entre vos logiciels. Il se distingue de Make et de Zapier par deux traits : on peut l'installer sur ses propres serveurs, et il facture à l'exécution de workflow, sans compter les étapes.",
  },
  {
    q: 'Faut-il être développeur pour suivre la formation ?',
    a: "Non. n8n se pratique en low-code : l'essentiel se monte nœud par nœud, à la souris. Il faut en revanche aimer la logique (conditions, boucles, données structurées) : c'est le profil d'un référent IA, d'un responsable des opérations ou d'un utilisateur avancé d'Excel. Les étapes Code en JavaScript ou en Python sont montrées en option, jamais exigées. Un développeur suit aussi avec profit : le cadrage ajuste le niveau du groupe.",
  },
  {
    q: 'Combien coûte n8n ?',
    a: "Relevés le 7 octobre 2026 sur le site de n8n, en paiement annuel : Starter à 20 € par mois pour 2 500 exécutions, Pro à 50 € par mois pour 10 000 exécutions, Business à 667 € par mois pour 40 000 exécutions en auto-hébergement ; Enterprise est sur devis. La Community Edition, installée chez vous, ne coûte rien en licence : le budget passe alors dans le serveur et le temps de maintenance. La formation se facture à part.",
  },
  {
    q: 'La version auto-hébergée est-elle gratuite ?',
    a: "Pour un usage interne, oui. La Sustainable Use License autorise une entreprise à utiliser et modifier n8n pour ses propres besoins, sans redevance. Elle interdit en revanche de revendre n8n comme un service à des tiers. Certaines fonctions (SSO, environnements multiples, gestion de versions par Git) relèvent des offres payantes Business et Enterprise.",
  },
  {
    q: 'n8n, Make ou Zapier : lequel choisir ?',
    a: "n8n quand les données doivent rester chez vous, quand les volumes montent ou quand vous voulez des agents outillés, à condition d'avoir un profil à l'aise avec la technique. Make si l'équipe métier souhaite relire et ajuster ses scénarios sans aide. Zapier pour des automatisations courtes, lancées vite. Le tableau de cette page les met côte à côte sur six critères, prix relevés le 7 octobre 2026.",
  },
  {
    q: "L'auto-hébergement règle-t-il la question du RGPD ?",
    a: "Il simplifie le dossier sans le régler entièrement. Installé sur vos serveurs, n8n ne fait pas transiter vos données chez un tiers ; mais un workflow qui appelle un modèle d'IA externe envoie quand même du texte à ce fournisseur. Restent donc la minimisation, les accès, les durées de conservation et le registre, que la formation traite en suivant les fiches de la CNIL sur l'IA. Le cloud de n8n, hébergé à Francfort, reste une option raisonnable quand l'auto-hébergement ne se justifie pas.",
  },
  {
    q: 'Comment construit-on un agent IA dans n8n ?',
    a: "Avec le nœud AI Agent : on lui fixe un objectif, on lui donne des outils (lire une boîte mail, interroger une table, écrire dans un tableur, appeler un serveur MCP) et des limites. n8n peut suspendre l'agent avant un appel d'outil pour attendre l'accord d'une personne. Nous y passons la matinée du deuxième jour. Pour des agents bâtis directement dans les assistants conversationnels de l'entreprise, voyez la formation agents IA.",
  },
  {
    q: "Comment installe-t-on n8n ?",
    a: "Trois voies : le cloud de n8n, le plus rapide pour démarrer ; une installation sur vos serveurs, en général avec Docker, pour garder les données chez vous ; ou un hébergeur européen qui opère l'instance pour votre compte. La formation démarre sur l'environnement choisi avant la session. L'installation elle-même revient à votre service informatique ou à notre agence ; elle ne fait pas partie des deux jours.",
  },
  {
    q: "L'interface en anglais gêne-t-elle les équipes ?",
    a: "Rarement. Le vocabulaire utile tient en une vingtaine de mots (workflow, node, trigger, credential, execution), que nous traduisons dès la première heure et que la page reprend dans son vocabulaire. Les supports, les ateliers et la documentation que vous produisez pendant la session sont en français.",
  },
  {
    q: 'La formation existe-t-elle à distance ou en tête-à-tête ?',
    a: "Oui. En intra, jusqu'à douze personnes travaillent dans vos locaux ou en visioconférence ; à distance, nous découpons volontiers les deux jours en demi-journées, chacun gardant son instance sous les yeux. En individuel, un référent travaille seul avec le formateur sur ses workflows, pour le même prix par jour. Nous formons sur place partout en France, et jusqu'aux États-Unis et en Inde.",
  },
  {
    q: 'Que reste-t-il à l\'équipe après les deux jours ?',
    a: "Des workflows exportés, commentés et reliés à une alerte ; un workflow d'erreur commun ; des credentials rangés et nominatifs ; un registre qui donne pour chaque workflow son propriétaire, sa criticité et sa date de revue ; le plan des trois workflows suivants, chacun avec son porteur.",
  },
  {
    q: 'Peut-on confier la construction des workflows à Masteria ?',
    a: "Notre agence d'automatisation installe, sécurise et maintient des instances n8n et construit les workflows pour vous. Il s'agit d'un projet de développement, pas finançable par votre OPCO, distinct de la formation. Former l'équipe garde son intérêt dans ce cas : elle décrit mieux ses processus et surveille mieux ce qui tourne.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation n8n, Masteria',
  description: "Formation n8n en 2 jours : choix entre cloud et instance interne, credentials, expressions et données, nœud HTTP Request, étape IA, nœud AI Agent avec validation humaine, workflow d'erreur, sous-workflows et tables de données, exploitation d'une instance et registre des workflows. Les participants travaillent chacun sur un de leurs processus. Groupes intra ou formations individuelles, en présentiel comme en visioconférence ; Masteria est un organisme Qualiopi.",
  level: 'Intermédiaire : pratique courante des outils numériques',
  teaches: [
    "Choisir entre n8n Cloud et une instance auto-hébergée, et ranger les credentials",
    "Construire un workflow complet : déclencheur, expressions, boucles, conditions, HTTP Request",
    "Ajouter une étape IA à sortie structurée et un agent soumis à validation humaine",
    "Rendre chaque échec visible avec un workflow d'erreur et lire le journal des exécutions",
    "Exploiter une instance et tenir le registre des workflows de l'équipe",
  ],
  about: "n8n (automatisation de workflows et agents IA)",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Pratique courante d'un tableur et des applications de travail ; aucune programmation.",
  audience: 'Référents IA, responsables des opérations, utilisateurs avancés, informatique de proximité',
  locationName: 'Masteria, sessions intra ou individuelles, sur site ou à distance',
}

/* Le programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation n8n (2 jours)',
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
  '@id': 'https://www.master-ia.fr/formation-n8n#article',
  headline: 'Formation n8n : des workflows et des agents IA que vous hébergez',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-n8n#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'n8n', sameAs: 'https://fr.wikipedia.org/wiki/N8n' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
    { '@type': 'Thing', name: 'Flux de travaux', sameAs: 'https://fr.wikipedia.org/wiki/Flux_de_travaux' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : vocabulaire n8n (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Vocabulaire de n8n',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Workflow', description: "L'automatisation complète, du déclencheur au dernier nœud. C'est aussi l'unité que n8n facture : une exécution par lancement, quel que soit le nombre d'étapes." },
    { '@type': 'DefinedTerm', name: 'Nœud (node)', description: "Une étape du workflow : déclencheur, application, transformation, étape IA ou agent. Les données passent d'un nœud au suivant sous forme d'objets JSON." },
    { '@type': 'DefinedTerm', name: 'Déclencheur (trigger)', description: "Le nœud qui lance le workflow : un horaire, un webhook, un mail reçu, une ligne ajoutée. Un déclencheur mal choisi lance des exécutions inutiles." },
    { '@type': 'DefinedTerm', name: 'Credential', description: "L'accès enregistré vers une application (identifiant, clé, autorisation). On le crée une fois, on le partage avec parcimonie, on le révoque au départ de son titulaire." },
    { '@type': 'DefinedTerm', name: 'Exécution', description: "Un passage du workflow, consigné étape par étape dans le journal. C'est l'outil de surveillance quotidien, et la base de la facturation." },
    { '@type': 'DefinedTerm', name: 'Sous-workflow', description: "Un workflow appelé par d'autres pour une tâche commune (notifier, journaliser, contrôler). Il évite de recopier la même logique à dix endroits." },
    { '@type': 'DefinedTerm', name: "Workflow d'erreur", description: "Le workflow qui reçoit les échecs des autres : il prévient la bonne personne et garde la trace. Sans lui, un échec reste muet." },
    { '@type': 'DefinedTerm', name: 'Agent IA (nœud AI Agent)', description: "Le nœud qui poursuit un objectif avec les outils qu'on lui ouvre. n8n peut lui imposer l'accord d'une personne avant chaque appel d'outil sensible." },
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
  { name: "n8n, page tarifs (offres, exécutions, hébergement à Francfort), relevée le 7 octobre 2026", url: 'https://n8n.io/pricing/' },
  { name: 'n8n, texte de la Sustainable Use License sur le dépôt GitHub', url: 'https://github.com/n8n-io/n8n/blob/master/LICENSE.md' },
  { name: 'n8n, documentation officielle', url: 'https://docs.n8n.io/' },
  { name: "Make, page tarifs relevée le 7 octobre 2026", url: 'https://www.make.com/en/pricing' },
  { name: "Zapier, page tarifs relevée le 7 octobre 2026", url: 'https://zapier.com/pricing' },
  { name: 'Zapier, hébergement et confidentialité des données', url: 'https://zapier.com/legal/data-privacy' },
  { name: "CNIL, fiches pratiques sur l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'Qualiopi, présentation par le ministère du Travail', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

export default function FormationN8nPage() {
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
    { name: 'Formation n8n', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation n8n</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Workflow size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · n8n
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation n8n :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des workflows et des agents IA que vous hébergez</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Rédigée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · offres et licence de n8n contrôlées le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation n8n prépare vos équipes à construire et à exploiter des workflows avec n8n, l'outil d'automatisation qu'une entreprise peut héberger elle-même. <strong style={{ color: '#fff', fontWeight: 700 }}>Sur deux jours, chacun bâtit un workflow tiré de son poste, y ajoute une étape IA puis un agent soumis à validation humaine</strong>, et apprend à surveiller les exécutions. Le financement par votre OPCO est possible : Masteria est certifiée Qualiopi.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Après les assistants conversationnels, n8n est l'outil d'orchestration que nous déployons le plus souvent, parce qu'il tient des processus longs et garde les données en Europe ou chez vous ; l'IA y travaille à l'intérieur du flux. Notre critère de réussite pour la session tient en une phrase. Les workflows tournent toujours six mois plus tard.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Organiser la formation n8n
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les deux journées
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

          {/* L'essentiel : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'essentiel avant de réserver</div>
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

      {/* ── POURQUOI N8N (éditorial asymétrique) ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'outil</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                n8n garde vos workflows chez vous et facture à l'exécution
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Des trois grands outils d'automatisation, n8n est le seul qu'une entreprise peut faire tourner sur ses propres machines, sans licence à payer pour un usage interne. Il compte des exécutions de workflow quel que soit le nombre d'étapes, et ses agents IA peuvent attendre l'accord d'une personne avant d'agir. En contrepartie, il demande plus d'apprentissage que Make ou Zapier : deux jours encadrés suffisent pour le prendre en main.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Vous ne savez pas encore quoi automatiser ? Commencez par la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link>. Si votre équipe vit surtout dans ChatGPT, Claude, Copilot ou Gemini, la <Link to="/formation-agents-ia" style={aStyle}>formation agents IA</Link> construit les agents dans ces assistants.
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

      {/* ── FICHE OUTIL : N8N AU 7 OCTOBRE 2026 ── */}
      <section id="fiche" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Fiche outil</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Offres, licence et hébergement de n8n relevés le 7 octobre 2026
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>n8n est gratuit en Community Edition pour un usage interne, coûte à partir de 20 € par mois dans son cloud européen et 667 € par mois pour l'offre Business auto-hébergée. Le tableau rassemble ce que nous avons vérifié sur la page tarifs de l'éditeur et sur sa licence.</strong>
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Sujet</th>
                  <th style={thStyle} scope="col">Situation au 7 octobre 2026</th>
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
            La page tarifs de n8n affiche ses prix en euros, en paiement annuel, sans préciser le traitement de la TVA ; l'offre mensuelle coûte plus cher. La licence citée est celle du dépôt GitHub de n8n.
          </p>
        </div>
      </section>

      {/* ── LE PROGRAMME (ancre sombre, pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Du premier workflow à l'agent supervisé, en deux journées
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : l'hébergement et les accès se décident, les applications se branchent, et chaque participant livre un workflow doté d'une étape IA. Jour 2 : un agent soumis à validation humaine, un workflow d'erreur commun, l'exploitation de l'instance et le registre des workflows de l'équipe.</strong>
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
            Avant la session, un échange avec votre service informatique fixe l'environnement (cloud ou instance interne) et les accès de test. Une version d'une journée couvre le premier workflow et son étape IA ; la seconde journée ajoute les agents, les erreurs et l'exploitation.
          </p>
        </div>
      </section>

      {/* ── COMPARATIF N8N / MAKE / ZAPIER ── */}
      <section id="comparatif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Bien choisir</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            n8n, Make ou Zapier : six critères pour trancher
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les trois outils relient vos applications, mais ils ne facturent pas la même unité et n'hébergent pas les données au même endroit. n8n s'impose quand les données doivent rester chez vous ou que les volumes montent ; Make, quand une équipe métier veut garder la main sur des scénarios à branches ; Zapier, pour des automatisations courtes lancées dans la journée.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Critère</th>
                  <th style={thStyle} scope="col">n8n</th>
                  <th style={thStyle} scope="col">Make</th>
                  <th style={thStyle} scope="col">Zapier</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.critere}</td>
                    <td style={{ ...tdStyle, borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.n8n}</td>
                    <td style={{ ...tdStyle, borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.make}</td>
                    <td style={{ ...tdStyle, borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.zapier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Prix relevés le 7 octobre 2026 sur les pages tarifs des trois éditeurs. Si votre choix est déjà fait, la <Link to="/formation-make" style={aStyle}>formation Make</Link> et la <Link to="/formation-zapier" style={aStyle}>formation Zapier</Link> présentent leurs propres programmes, avec la fiche de chaque outil.
          </p>
        </div>
      </section>

      {/* ── WORKFLOWS TYPES ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Workflows types</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six workflows n8n que les équipes construisent en atelier
          </h2>

          <p style={answerStyle}>
            <strong>Les ateliers partent des processus de l'équipe. Six reviennent souvent : la présélection des appels d'offres, la veille réglementaire, le rapprochement des commandes et des factures, le dossier préparé avant un rendez-vous, le support de premier niveau et la mise à jour du CRM proposée par un agent.</strong>
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

      {/* ── LES ÉCUEILS ── */}
      <section id="pieges" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qui fait échouer</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq écueils font dérailler un déploiement n8n
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un déploiement n8n qui s'essouffle bute en général sur l'un de ces cinq écueils. Chacun a sa parade, et le programme la met en place pendant l'atelier, sur le workflow du participant.</strong>
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
            Notre <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>agence d'automatisation</Link> exploite des instances n8n pour ses clients selon ces mêmes règles ; la session les transmet sans les simplifier.
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
                Chaque journée de formation n8n est facturée 1 980 € HT
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Les deux jours en intra (douze participants au plus) ou en individuel reviennent à 3 960 € HT ; une journée seule, à 1 980 € HT. Ce prix ne comprend ni abonnement ni hébergement n8n : la Community Edition ne coûte rien en licence pour un usage interne, le cloud se règle directement à l'éditeur. Certifiée Qualiopi, Masteria établit le programme et la convention que vous déposerez auprès de votre OPCO ; celui-ci arrête le montant financé d'après ses règles et ses fonds. L'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> retrouve votre opérateur à partir de votre activité, et la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> décrit les dispositifs.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Deux jours : 3 960 € HT ; une journée : 1 980 € HT',
                  'Douze participants au plus en intra',
                  'Licence et hébergement n8n en sus',
                  'Dossier de prise en charge prêt à déposer',
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

      {/* ── E-E-A-T : les formateurs n8n ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les formateurs</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs qui exploitent n8n en mission
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Fondateur de Masteria (Lyon, 2022), Mathias Nizan pilote chaque session n8n : il l'anime ou en charge un formateur indépendant du réseau, rompu à l'outil. Quand une question dépasse la formation (installation, sécurité de l'instance), les cinq développeurs IA environ qui travaillent avec le cabinet prennent le relais en mission. Exemple de terrain : chez un distributeur photovoltaïque, notre diagnostic a désigné la consultation des transporteurs et l'import des réceptions d'entrepôt dans l'ERP comme premières tâches à outiller (<Link to="/etudes-de-cas-ia#photovoltaique" style={{ color: '#93C5FD', fontWeight: 600 }}>le cas complet</Link>).
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Francfort', 'lieu de stockage du cloud n8n'],
                ['0 €', 'de licence en Community Edition, usage interne'],
                ['2 jours', "du premier workflow à l'agent supervisé"],
                ['≈ 5', 'développeurs IA en renfort pour les installations'],
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
            L'interface est en anglais : huit termes suffisent pour s'y repérer
          </h2>
          <p style={answerStyle}>
            <strong>Workflow, nœud, déclencheur, credential, exécution, sous-workflow, workflow d'erreur, agent : ces huit termes couvrent l'essentiel de l'interface de n8n et de sa documentation. Nous les traduisons et les illustrons dès la première heure.</strong>
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
                Les questions posées avant une formation n8n
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un doute sur l'hébergement, la licence ou le niveau requis ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-la à l'équipe
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
          <Kicker>À lire ensuite</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les pages qui prolongent la formation n8n
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            n8n orchestre ; d'autres pages traitent du choix des tâches, des agents dans les assistants et de la construction confiée à notre équipe.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Méthode', desc: "Décider quoi automatiser, puis à quel palier d'outil, avant de construire quoi que ce soit." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Des agents dans les assistants du quotidien, que n8n complète pour les enchaînements longs." },
              { label: 'Formation Make', href: '/formation-make', tag: 'Alternative', desc: "Le canevas visuel facturé en crédits, pensé pour les équipes métier." },
              { label: 'Formation Zapier', href: '/formation-zapier', tag: 'Démarrage rapide', desc: "Une journée de Zaps pour les besoins simples et les petits volumes." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Faire construire', desc: "Installation, sécurisation et maintenance d'une instance n8n par notre équipe." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, Qualiopi, conventions : comment se finance une formation d'équipe." },
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
            Mise à jour par Mathias Nizan le 7 octobre 2026 : tarifs, offres et lieu de stockage vérifiés sur le site de n8n, licence relue sur son dépôt GitHub, prix de Make et de Zapier relevés le même jour. Son parcours est retracé sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>la page de Mathias Nizan</Link>.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation n8n</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Des workflows qui tournent encore quand leur auteur est en congés
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous quels processus vous voulez automatiser, quelles applications ils traversent et où n8n doit tourner. Sous 24 heures, vous recevez une proposition de programme, le devis et les documents destinés à votre OPCO.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Organiser la formation n8n
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Qualiopi · cloud européen ou instance interne · en intra, en individuel ou à distance
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES DE LA PAGE ── */}
      <section aria-labelledby="sources-n8n" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-n8n" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les sources consultées pour cette page
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Pages des éditeurs relevées le 7 octobre 2026, licence de n8n, règles de la formation professionnelle et de la protection des données.
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
