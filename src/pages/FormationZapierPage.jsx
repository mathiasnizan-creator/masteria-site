import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, Network, Target, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation zapier » (slug /formation-zapier), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation zapier » (140/mois, KD 12).
 *
 * ANTI-CANNIBALISATION : le comparatif complet n8n/Make/Zapier vit sur
 * /formation-n8n ; CETTE page porte la fiche Zapier et un tableau
 * « Zapier suffit / regardez Make ou n8n ». 1 jour (l'outil le plus simple
 * des trois, la journée est le bon format).
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre, faits à jour) :
 * - Relevé zapier.com/pricing le 07/10/2026 : plus de 9 000 applications ;
 *   facturation à la tâche, étapes IA, code et SDK compris ; Free 100 tâches/mois,
 *   Zaps à deux étapes, vérification toutes les 15 min ; Professional dès
 *   19,99 $/mois en annuel (2 min) ; Team dès 69 $/mois, 25 utilisateurs, SSO
 *   SAML (1 min) ; Enterprise sur devis ; Zapier Agents en activités (400 et
 *   1 500 par mois) ; Copilot, MCP, Tables, Forms, Canvas.
 * - zapier.com/legal/data-privacy (07/10/2026) : hébergement AWS aux
 *   États-Unis, certification EU-US Data Privacy Framework, DPA avec SCC.
 * - « Interfaces » s'appelle désormais Forms sur la page tarifs.
 * - FounderNote, OfficialSources et bloc « Qui vous forme » remplacés par des
 *   textes propres à la page. Masteria : 1 980 € HT la journée.
 */

const SLUG = 'formation-zapier'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation Zapier : automatiser sans coder | Masteria'
const META_DESC = "Formation Zapier en 1 jour : Zaps utiles et fiables, une étape IA cadrée, les tâches, les limites et le cadre RGPD. Qualiopi, finançable par votre OPCO."
const KEYWORDS = "formation zapier, apprendre zapier, formation zapier français, zapier sans coder, formation zapier entreprise"

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
  { icon: Zap, label: 'Un premier Zap en service avant midi' },
  { icon: Network, label: 'Plus de 9 000 applications connectables' },
  { icon: GraduationCap, label: 'Qualiopi · financement par votre OPCO' },
  { icon: Building2, label: 'Une journée, en intra ou en individuel' },
]

/* ───────── Ce qu'il faut savoir (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Une journée (7 h). Si vos besoins dépassent Zapier, nous vous orientons vers Make ou n8n avant la session." },
  { label: 'Public', value: "Assistants, petites équipes marketing ou RH, ADV, dirigeants de TPE ; aucune compétence technique attendue." },
  { label: 'Outil', value: "Zapier, son éditeur de Zaps, Tables, Forms et l'assistant Copilot, branchés sur les applications de vos équipes." },
  { label: 'Méthode', value: "Chacun monte plusieurs Zaps sur ses propres tâches, dont un avec une étape IA, et les teste avant de partir." },
  { label: 'À la sortie', value: "Des Zaps actifs, une check-list de fiabilité, des règles d'usage écrites, la liste des automatisations suivantes." },
  { label: 'Financement', value: "Certification Qualiopi : votre OPCO décide de sa participation d'après ses règles et son budget." },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi Zapier'],
  ['#fiche', 'Zapier en octobre 2026'],
  ['#programme', 'Programme de la journée'],
  ['#limites', 'Zapier suffit-il ?'],
  ['#cas-usage', 'Zaps types'],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Vocabulaire'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi Zapier (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Zap,
    title: 'Un Zap en quelques minutes',
    desc: "Déclencheur, action, test : la mécanique s'apprend en une demi-heure. Des participants qui n'avaient jamais rien automatisé repartent déjeuner avec un Zap actif.",
  },
  {
    icon: Network,
    title: 'Plus de 9 000 applications',
    desc: "Logiciels de niche, outils métier, CRM peu répandus : le catalogue de Zapier couvre souvent ce que les autres outils n'ont pas, et les webhooks des offres payantes rattrapent le reste.",
  },
  {
    icon: Bot,
    title: "L'IA sans quitter l'éditeur",
    desc: "Une étape IA résume, classe ou rédige un brouillon à l'intérieur du Zap. Copilot aide à construire, et Zapier MCP laisse un assistant comme ChatGPT ou Claude agir dans vos applications, avec les droits que vous lui accordez.",
  },
  {
    icon: Target,
    title: "Le premier palier d'une démarche",
    desc: "Quand les volumes ou la complexité montent, la logique apprise (déclencheur, action, filtre, test) se retrouve telle quelle dans Make ou n8n. Rien de ce qui a été appris ne se perd.",
  },
]

/* ───────── Zapier au 7 octobre 2026 (fiche outil) ───────── */

const FICHE = [
  { k: 'Éditeur', v: "Zapier, société américaine, pionnière de l'automatisation sans code entre applications." },
  { k: 'Catalogue', v: "Plus de 9 000 applications connectables, et les webhooks pour les autres sur les offres payantes." },
  { k: 'Unité facturée', v: "La tâche. Depuis la refonte de la grille, étapes IA, code et kit de développement puisent dans la même réserve de tâches, à un taux qui dépend du modèle d'IA et de la durée d'exécution." },
  { k: 'Offre gratuite', v: "100 tâches par mois, des Zaps limités à deux étapes, une vérification des déclencheurs toutes les 15 minutes." },
  { k: 'Professional', v: "À partir de 19,99 dollars par mois en paiement annuel : Zaps à plusieurs étapes, applications premium, webhooks, vérification toutes les 2 minutes." },
  { k: 'Team et Enterprise', v: "Team à partir de 69 dollars par mois en paiement annuel, avec 25 utilisateurs, connexions partagées et SSO SAML ; Enterprise sur devis, avec un plafond de tâches annuel." },
  { k: 'IA et agents', v: "Copilot pour construire en langage courant, étapes IA, Zapier MCP. Les Zapier Agents se décomptent à part, en activités : 400 par mois sur l'offre gratuite, un volume plus élevé sur les offres payantes." },
  { k: 'Hébergement', v: "Serveurs AWS aux États-Unis. Zapier est certifié au Data Privacy Framework UE-États-Unis, et son accord de traitement des données reprend les clauses contractuelles types." },
  { k: 'Points forts', v: "La mise en route la plus rapide, l'étendue du catalogue, des outils intégrés (Tables, Forms, Canvas)." },
  { k: 'Limites', v: "Une facture qui grimpe avec le volume de tâches, des Zaps à chemins multiples difficiles à relire, des données hébergées hors de l'Union européenne." },
]

/* ───────── Programme 1 jour (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'La journée',
    titre: "Du premier Zap aux règles d'usage",
    resume: "Chaque participant repart avec plusieurs Zaps en service, dont un qui fait appel à l'IA.",
    matin: [
      { t: 'Trois Zaps commentés', d: "Le formateur montre trois automatisations courantes et ouvre leur historique : déclencheur, actions, tâches consommées." },
      { t: 'Brancher les applications', d: "Messagerie, tableur, formulaire, CRM : chaque application se branche avec un compte de l'entreprise, et les webhooks couvrent les outils absents du catalogue." },
      { t: 'Le premier Zap avant la pause', d: "Un déclencheur, une action, un essai sur une donnée de la semaine : chacun fait disparaître une petite tâche de son poste." },
      { t: 'Filtres et chemins', d: "Ne lancer le Zap que dans les bons cas, séparer deux situations, enchaîner plusieurs actions dans le même Zap." },
      { t: "Formatter : remettre les données d'aplomb", d: "Dates, montants, majuscules, numéros de téléphone : le nettoyage qui évite la plupart des Zaps cassés." },
    ],
    apresmidi: [
      { t: 'Une étape IA dans un Zap', d: "Résumer un message, ranger une demande dans une catégorie, préparer un brouillon : la sortie suit un format fixé et passe sous les yeux d'une personne quand elle engage." },
      { t: 'Copilot et Zapier MCP', d: "Décrire un Zap en une phrase et corriger la proposition ; brancher un assistant IA sur vos applications, avec les droits qui conviennent." },
      { t: 'Tenir ses Zaps dans la durée', d: "Historique des tâches, alertes d'échec, relance automatique sur les offres payantes, versions : la check-list de fiabilité." },
      { t: 'Données et RGPD', d: "Zapier héberge aux États-Unis : quelles données peuvent passer dans un Zap, lesquelles restent hors champ, ce qu'on écrit dans les règles d'usage." },
      { t: 'Les limites et la suite', d: "Volumes, coût des tâches, branches multiples : les signes qu'il faut passer à Make ou n8n, puis la liste des automatisations suivantes de chacun." },
    ],
  },
]

/* ───────── Zapier suffit-il ? (tableau propre à la page) ───────── */

const LIMITES_TABLE = [
  {
    situation: "Relier deux ou trois applications pour des tâches simples",
    verdict: 'Zapier suffit',
    detail: "Formulaire vers tableur, accusé de réception, sauvegarde de pièces jointes : le terrain naturel d'un Zap, en service dans la journée.",
  },
  {
    situation: "Quelques dizaines de déclenchements par jour, une petite équipe",
    verdict: 'Zapier suffit',
    detail: "À ce volume, la dépense en tâches reste modeste et la simplicité l'emporte sur tout le reste.",
  },
  {
    situation: "Des processus à plusieurs branches et beaucoup de transformations",
    verdict: 'Regardez Make',
    detail: "Le canevas de Make, avec routeurs et itérateurs, reste lisible là où un Zap à chemins multiples devient difficile à relire.",
  },
  {
    situation: "Des milliers d'exécutions par jour",
    verdict: 'Comparez Make et n8n',
    detail: "Zapier compte chaque étape en tâches ; Make compte des crédits, n8n des exécutions entières. À fort volume, l'écart de facture se voit vite.",
  },
  {
    situation: "Des données qui doivent rester en Europe ou dans votre réseau",
    verdict: 'Regardez n8n',
    detail: "Zapier héberge aux États-Unis ; n8n peut tourner sur vos propres machines ou dans son cloud de Francfort.",
  },
  {
    situation: "Un agent qui enchaîne plusieurs outils sous contrôle humain",
    verdict: 'Regardez n8n',
    detail: "Les Zapier Agents couvrent les premiers cas ; dans n8n, un agent peut être tenu d'attendre une validation humaine avant d'utiliser un outil.",
  },
]

/* ───────── Zaps types (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: ListChecks, title: 'La demande de devis enregistrée', desc: "Chaque formulaire de demande de devis crée une ligne dans le tableur commercial et une tâche datée pour le commercial du secteur." },
  { icon: Eye, title: "L'avis client signalé", desc: "Une note faible dans une enquête de satisfaction déclenche une alerte sur le fil de discussion de l'équipe, avec la remarque du client résumée en deux lignes." },
  { icon: Layers, title: 'Les pièces jointes classées', desc: "Factures et bons de livraison reçus par mail rejoignent le bon dossier partagé, renommés selon une règle commune." },
  { icon: Target, title: 'Le rendez-vous confirmé et rappelé', desc: "Un rendez-vous pris en ligne déclenche la confirmation, puis un rappel la veille, sans intervention de l'assistante." },
  { icon: Bot, title: "L'accusé de réception préparé par l'IA", desc: "Une demande arrivée sur l'adresse de contact reçoit une réponse rédigée dans votre gabarit, déposée en brouillon dans la messagerie pour relecture." },
  { icon: Workflow, title: 'Le point du lundi', desc: "Chaque lundi, les chiffres de la semaine (demandes, ventes, tickets) arrivent dans un message d'équipe, sans réunion ni tableau à remplir." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Que contient la formation Zapier de Masteria ?',
    a: "Une journée au terme de laquelle l'équipe se débrouille seule sur Zapier : connecter ses applications, construire des Zaps à filtres et à chemins, nettoyer les données avec Formatter, ajouter une étape IA, utiliser Copilot, surveiller ses Zaps et connaître les limites de l'outil. Chaque participant repart avec plusieurs Zaps en service, construits sur ses propres tâches. Côté financement, votre OPCO peut intervenir selon ses règles et ses fonds : Masteria est certifiée Qualiopi.",
  },
  {
    q: "Qu'est-ce qu'un Zap ?",
    a: "Une automatisation Zapier : un déclencheur (un formulaire est envoyé, un mail arrive, une ligne s'ajoute) suivi d'une ou plusieurs actions (créer un contact, prévenir quelqu'un, ranger un fichier). Chaque action réussie consomme des tâches, l'unité que Zapier facture ; la journée apprend aussi à lire cette consommation.",
  },
  {
    q: 'Faut-il des compétences techniques ?',
    a: "Aucune. Zapier est conçu pour des équipes sans profil technique, et c'est le public de cette journée : assistants, petites équipes marketing ou RH, ADV, dirigeants de TPE. Savoir utiliser sa messagerie, un tableur et un formulaire en ligne suffit.",
  },
  {
    q: 'Combien coûte Zapier ?',
    a: "D'après la page tarifs de Zapier consultée le 7 octobre 2026 : une offre gratuite à 100 tâches par mois avec des Zaps à deux étapes, Professional à partir de 19,99 dollars par mois en paiement annuel, Team à partir de 69 dollars par mois avec 25 utilisateurs, Enterprise sur devis. Le montant exact dépend du palier de tâches choisi. La formation, elle, se facture séparément.",
  },
  {
    q: 'Zapier, Make ou n8n : comment choisir ?',
    a: "Zapier pour démarrer vite sur des tâches simples, avec le plus grand catalogue d'applications. Make quand les processus prennent plusieurs branches et que l'équipe veut un canevas lisible. n8n si vos données ne doivent pas quitter l'Europe ou votre réseau, si le volume grimpe, ou si des agents doivent attendre un feu vert humain. Le tableau de cette page traduit ces critères en situations, et celui de la page formation n8n reprend les trois outils point par point.",
  },
  {
    q: "Que permettent l'IA et les agents dans Zapier ?",
    a: "Trois choses. Les étapes IA résument, classent ou rédigent à l'intérieur d'un Zap. Copilot construit un premier Zap à partir d'une description. Les Zapier Agents poursuivent un objectif avec des outils, et se décomptent en activités à part des tâches. Zapier MCP, enfin, permet à un assistant comme ChatGPT ou Claude d'agir dans vos applications. Tables stocke des données et Forms crée de petits formulaires, dans le même compte. La journée met tout cela en place avec une règle : une personne relit chaque envoi qui engage l'entreprise.",
  },
  {
    q: 'Quel cadre RGPD pour des Zaps ?',
    a: "Zapier héberge ses données sur des serveurs AWS aux États-Unis. L'éditeur est certifié au Data Privacy Framework UE-États-Unis et son accord de traitement des données reprend les clauses contractuelles types : le transfert a donc une base juridique, mais il reste à documenter. La journée traite le sujet avec les fiches de la CNIL : quelles données peuvent passer dans un Zap, lesquelles restent hors champ, et à quel moment n8n hébergé en Europe devient le meilleur choix.",
  },
  {
    q: 'Que construit-on pendant la journée ?',
    a: "Des Zaps sur les tâches de chaque participant : demande de devis enregistrée, alerte sur un avis client, pièces jointes classées, rendez-vous confirmé et rappelé, accusé de réception préparé par l'IA, point hebdomadaire de l'équipe. L'après-midi fiabilise l'ensemble (historique, alertes, versions) et pose noir sur blanc les règles d'usage communes.",
  },
  {
    q: 'Peut-on suivre la journée à distance ?',
    a: "Oui. Le groupe intra, douze personnes au maximum, peut se réunir chez vous ou se connecter à distance ; dans ce cas, la journée se découpe volontiers en deux demi-journées. En individuel, une personne seule avance sur ses propres Zaps au même tarif. Nos sessions ont lieu en France comme hors de nos frontières.",
  },
  {
    q: 'Et si Zapier ne suffit plus dans six mois ?',
    a: "Ce cas est prévu dans la journée. Vous repartez avec les signaux qui annoncent l'étape suivante (volumes, coût des tâches, branches multiples, données sensibles) et la manière de migrer vers Make ou n8n, qui ont chacun leur formation. Penser en déclencheurs et en actions, tester, documenter : ces réflexes se transposent tels quels.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation Zapier, Masteria',
  description: "Formation Zapier en 1 jour : connexion des applications, Zaps à filtres et à chemins, Formatter, étape IA, Copilot et Zapier MCP, fiabilité (historique, alertes, versions), cadre RGPD d'un hébergement aux États-Unis, limites et passage vers Make ou n8n. Chaque participant repart avec plusieurs Zaps en service. Groupe intra ou participant seul, dans vos locaux ou à distance ; organisme certifié Qualiopi.",
  level: 'Débutant, aucun prérequis technique',
  teaches: [
    "Comprendre un Zap : déclencheur, actions, tâches consommées",
    "Construire des Zaps à filtres, à chemins et à plusieurs étapes, et nettoyer les données avec Formatter",
    "Ajouter une étape IA à format de sortie fixé, avec relecture humaine",
    "Surveiller ses Zaps : historique, alertes d'échec, versions",
    "Reconnaître les limites de Zapier et le moment de passer à Make ou n8n",
  ],
  about: "Zapier (automatisation sans code)",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: "Aucun prérequis technique.",
  audience: 'Assistanat, marketing, RH, ADV, dirigeants de TPE et de PME',
  locationName: 'Masteria, groupe intra ou participant seul, chez vous ou à distance',
}

/* Le programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation Zapier (1 jour)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: `Matin · ${day.titre}`, description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: `Après-midi · ${day.titre}`, description: day.apresmidi.map(m => m.t).join(' ; ') },
  ]),
}

/* Article : auteur, dates, entités (E-E-A-T + GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-zapier#article',
  headline: 'Formation Zapier : automatiser les tâches répétitives, sans coder',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-zapier#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'Zapier', sameAs: 'https://fr.wikipedia.org/wiki/Zapier' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
    { '@type': 'Thing', name: 'Interface de programmation', sameAs: 'https://fr.wikipedia.org/wiki/Interface_de_programmation' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : vocabulaire Zapier (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Vocabulaire de Zapier',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Zap', description: "Une automatisation Zapier : un déclencheur, puis une ou plusieurs actions. On le construit, on l'essaie, on le surveille." },
    { '@type': 'DefinedTerm', name: 'Déclencheur', description: "L'événement qui lance le Zap : formulaire envoyé, mail reçu, ligne ajoutée, horaire. Zapier vérifie les déclencheurs à intervalle fixe, de 15 minutes en gratuit à 1 minute sur Team." },
    { '@type': 'DefinedTerm', name: 'Action', description: "Ce que fait le Zap : créer, envoyer, ranger, prévenir. Un Zap à plusieurs étapes enchaîne des actions, ce que l'offre gratuite ne permet pas." },
    { '@type': 'DefinedTerm', name: 'Tâche', description: "L'unité facturée par Zapier. Une action courante en consomme une ; une étape IA ou du code en consomment selon le modèle et la durée d'exécution." },
    { '@type': 'DefinedTerm', name: 'Filtre et chemin', description: "Le filtre arrête le Zap quand la condition n'est pas remplie ; les chemins orientent chaque cas vers sa propre suite d'actions." },
    { '@type': 'DefinedTerm', name: 'Formatter', description: "La boîte à outils de transformation de Zapier (dates, textes, nombres) : c'est elle qui évite la plupart des Zaps cassés." },
    { '@type': 'DefinedTerm', name: 'Étape IA', description: "Une étape qui fait appel à un modèle d'IA dans un Zap : résumer, classer, rédiger. Chez Masteria, toujours avec un format de sortie fixé et une relecture quand le résultat engage l'entreprise." },
    { '@type': 'DefinedTerm', name: 'Activité', description: "L'unité de décompte des Zapier Agents, à part des tâches : chaque action de l'agent, recherche ou consultation compte pour une activité." },
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
  { name: 'Zapier, page tarifs (offres, tâches, agents, quotas), relevée le 7 octobre 2026', url: 'https://zapier.com/pricing' },
  { name: 'Zapier, hébergement des données et Data Privacy Framework', url: 'https://zapier.com/legal/data-privacy' },
  { name: "Zapier, centre d'aide", url: 'https://help.zapier.com/' },
  { name: "CNIL, transferts de données hors de l'Union européenne", url: 'https://www.cnil.fr/fr/les-outils-de-la-conformite/transferer-des-donnees-hors-de-lue' },
  { name: "CNIL, l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'Qualiopi, la marque de certification qualité des formations', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

export default function FormationZapierPage() {
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
    { name: 'Formation Zapier', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation Zapier</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Zapier
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation Zapier :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>automatiser les tâches répétitives, sans coder</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrite par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · offres et quotas de Zapier vérifiés le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation Zapier donne à une équipe sans profil technique les moyens de supprimer ses tâches répétitives en reliant ses applications. <strong style={{ color: '#fff', fontWeight: 700 }}>En une journée, chaque participant construit plusieurs Zaps sur ses propres tâches, dont un avec une étape IA</strong>, apprend à les surveiller et repère le moment où Make ou n8n prendrait le relais. Votre OPCO peut la financer, puisque Masteria est certifiée Qualiopi.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Avec Zapier, une tâche pénible disparaît souvent le jour même : le catalogue compte plus de 9 000 applications, et le premier résultat arrive avant le déjeuner, sans une ligne de code. Une journée bien menée installe les bons réflexes et montre jusqu'où l'outil vous portera.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver une journée Zapier
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Le déroulé de la journée
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

          {/* Ce qu'il faut savoir : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Ce qu'il faut savoir</div>
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

      {/* ── POURQUOI ZAPIER ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'outil</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Zapier met l'automatisation à portée d'une équipe sans profil technique
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Il suffit de quelques minutes pour monter un Zap : un déclencheur, une ou plusieurs actions, un essai. Le catalogue couvre plus de 9 000 applications, outils de niche compris, et l'assistant Copilot propose un premier Zap à partir d'une phrase. Pour une petite équipe, aucun outil ne fait disparaître une ressaisie plus vite.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour situer Zapier face à des outils plus puissants, le tableau de la <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> met les trois côte à côte ; la <Link to="/formation-make" style={aStyle}>formation Make</Link> couvre l'étape intermédiaire.
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

      {/* ── FICHE OUTIL : ZAPIER AU 7 OCTOBRE 2026 ── */}
      <section id="fiche" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Fiche outil</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Zapier au 7 octobre 2026 : offres, tâches, hébergement
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Zapier facture à la tâche, étapes IA comprises ; son offre gratuite donne 100 tâches par mois, l'offre Professional démarre à 19,99 dollars par mois, et les données sont hébergées aux États-Unis. Le tableau reprend, rubrique par rubrique, nos relevés sur les pages de l'éditeur.</strong>
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Rubrique</th>
                  <th style={thStyle} scope="col">Relevé de Masteria</th>
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
            Montants en dollars hors taxes. Le prix d'une offre payante dépend du palier de tâches retenu, et le paiement mensuel revient plus cher que l'annuel.
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
            Une journée, du premier Zap aux règles d'usage de l'équipe
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le matin, chacun branche ses applications et met en service un premier Zap avant la pause, puis apprend filtres, chemins et nettoyage des données. L'après-midi ajoute une étape IA, Copilot, la fiabilité, le cadre RGPD et le moment où Zapier ne suffit plus.</strong>
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
            Le contenu se cale sur vos applications et sur les tâches visées. Quand l'équipe vise d'emblée des processus lourds, nous le disons avant la session et proposons Make ou n8n.
          </p>
        </div>
      </section>

      {/* ── ZAPIER SUFFIT-IL (tableau propre à la page) ── */}
      <section id="limites" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Lucidité</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Zapier suffit-il, ou faut-il regarder Make ou n8n ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Zapier suffit pour des tâches simples à faible volume, ce qui couvre déjà beaucoup de besoins. Quatre signaux annoncent l'étape suivante : des branches multiples, des milliers d'exécutions, des données à garder en Europe, des agents à superviser de près. Le tableau les traduit en situations.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Votre situation</th>
                  <th style={thStyle} scope="col">Notre avis</th>
                  <th style={thStyle} scope="col">Pourquoi</th>
                </tr>
              </thead>
              <tbody>
                {LIMITES_TABLE.map((row, i) => (
                  <tr key={row.situation}>
                    <td style={{ ...tdStyle, borderBottom: i === LIMITES_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.situation}</td>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === LIMITES_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.verdict}</td>
                    <td style={{ ...tdStyle, borderBottom: i === LIMITES_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Notre recommandation dépend de vos volumes et de vos données, et nous la donnons avant la session. Quand le besoin grandit, la <Link to="/formation-make" style={aStyle}>formation Make</Link> et la <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> prennent le relais.
          </p>
        </div>
      </section>

      {/* ── ZAPS TYPES ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Zaps types</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six Zaps que les participants mettent en service dans la journée
          </h2>

          <p style={answerStyle}>
            <strong>Chaque participant part de ses propres tâches. Six Zaps reviennent souvent : la demande de devis enregistrée, l'avis client signalé, les pièces jointes classées, le rendez-vous confirmé et rappelé, l'accusé de réception préparé par l'IA et le point du lundi.</strong>
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

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                La journée Zapier est facturée 1 980 € HT
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le montant est identique pour un groupe de douze personnes maximum réuni en intra et pour un participant seul. Les abonnements Zapier se règlent à part, auprès de l'éditeur. La certification Qualiopi de Masteria, obtenue au titre des actions de formation, ouvre la voie à un financement : votre OPCO fixe sa part en fonction de ses règles et de son enveloppe, sur pièces (programme et convention fournis par nos soins). Pour retrouver votre opérateur, utilisez <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> ; pour comprendre comment l'OPCO instruit la demande, lisez la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT, groupe ou personne seule',
                  'Des Zaps en service le soir même',
                  "Abonnement Zapier réglé à l'éditeur",
                  "Convention et programme pour l'OPCO",
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

      {/* ── E-E-A-T : votre formateur ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre formateur</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs qui pratiquent Zapier, Make et n8n
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria, que Mathias Nizan a lancée à Lyon en 2022, travaille sur l'intelligence artificielle et ne revend aucun logiciel : c'est ce qui nous permet de vous dire où Zapier s'arrête. Mathias pilote chaque journée ; il l'anime ou la confie à un membre du réseau, qui compte une vingtaine de formateurs indépendants. La règle appliquée dans nos missions vaut ici aussi : l'automatisation prépare, une personne valide ce qui engage, comme le montrent nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link>.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['9 000+', 'applications au catalogue de Zapier'],
                ['7 h', 'de pratique sur vos propres tâches'],
                ['1', 'Zap avec étape IA pour chaque participant'],
                ['3', 'outils pratiqués en mission : Zapier, Make, n8n'],
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
            Huit mots pour lire Zapier et sa facture
          </h2>
          <p style={answerStyle}>
            <strong>Zap, déclencheur, action, tâche, filtre et chemin, Formatter, étape IA, activité : ces huit mots suffisent pour comprendre l'interface de Zapier et ce qu'elle vous facture. Nous les posons au début de la journée.</strong>
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
                Formation Zapier : les questions qui reviennent
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une application particulière, un doute sur le niveau du groupe ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyez votre question
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
          <Kicker>Et après Zapier</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les pages pour aller au-delà d'un premier Zap
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Zapier est souvent la première marche ; ces pages prennent le relais quand les besoins grandissent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Méthode', desc: "Classer ses tâches et choisir le niveau d'outil avant d'automatiser." },
              { label: 'Formation Make', href: '/formation-make', tag: 'Étape suivante', desc: "Le canevas visuel des processus à plusieurs branches, facturé en crédits." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Données sensibles', desc: "L'outil qui s'installe chez vous, et le tableau qui compare les trois." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Construire des agents dans les assistants de l'entreprise, sans code." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Faire construire', desc: "Des automatisations conçues et suivies par notre équipe, quel que soit l'outil." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "Comment un OPCO finance une formation d'équipe, étape par étape." },
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
            Mathias Nizan a mis cette page à jour le 7 octobre 2026 : offres, quotas et hébergement de Zapier vérifiés sur les pages de l'éditeur. Sa présentation complète se trouve sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>la page qui lui est consacrée</Link>.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation Zapier</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Vos premières automatisations tournent ce soir
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Listez les tâches répétitives de vos équipes et les applications qu'elles utilisent. Notre réponse arrive le lendemain au plus tard : un déroulé adapté à vos outils, le devis et les pièces pour votre OPCO.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver une journée Zapier
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Qualiopi · une journée sur site ou en visioconférence · France et international
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES DE LA PAGE ── */}
      <section aria-labelledby="sources-zapier" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-zapier" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Références utilisées
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Pages de Zapier consultées le 7 octobre 2026, repères de la CNIL sur les transferts de données, certification de Masteria.
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
