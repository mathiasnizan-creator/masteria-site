import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Scale, ListChecks, Gauge, GraduationCap as Grad, FileText, ShieldCheck, CalendarDays,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation AI Act » (slug /formation-ai-act).
 * REFONTE 2026-08-10 : sort du template SpokePage (générique, emojis, sans blocs
 * citables) pour le patron des money pages formation. Cible « formation ia act »
 * (140/mois, KD 15, CPC 3,97 $ — Semrush 2026-08-10) et sa variante « formation
 * ai act » ; les deux graphies sont tissées.
 *
 * FAITS VÉRIFIÉS (mémoire AI Act post-Omnibus, article audit IA du 3 août 2026) :
 * règlement (UE) 2024/1689 modifié par le règlement (UE) 2026/1744 du 8 juillet
 * 2026 (JOUE 24 juillet 2026). Applicable : interdictions art. 5 (2 févr. 2025),
 * littératie art. 4 (2 févr. 2025, assouplie en obligation de MOYENS), modèles à
 * usage général (2 août 2025), transparence art. 50 (2 août 2026). REPORTÉ : haut
 * risque annexe III → 2 déc. 2027, annexe I → 2 août 2028. Aucune norme
 * harmonisée citée au JOUE à l'été 2026 → rien n'est « certifiable AI Act ».
 * Sanctions max : 35 M€/7 % (interdictions), 15 M€/3 % (art. 50 et autres).
 * NE PAS survendre l'obligation art. 4 (moyens, pas résultat), NE PAS agiter
 * d'amendes imminentes sur la formation. Bureautique = risque minimal.
 *
 * ANTI-CANNIBALISATION : /gouvernance-ia = CONSEIL (mise en conformité,
 * registre, comité) ; /formation-gouvernance-ia = formation gouvernance (1 j,
 * DPO/DSI : dispositif) ; /charte-ia-entreprise = guide charte ; /ia-et-rgpd
 * = guide RGPD. CETTE page = la formation au règlement lui-même : obligations,
 * calendrier, classification, plan de conformité, article 4. Renvoie aux
 * autres pour approfondir.
 */

const SLUG = 'formation-ai-act'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation AI Act (IA Act) : obligations, calendrier, conformité | Masteria"
const META_DESC = "Formation AI Act (IA Act) en 1 jour : ce que le règlement européen impose vraiment et quand, classification par risque, article 4 littératie, plan de conformité. Qualiopi, finançable OPCO."
const KEYWORDS = "formation ia act, formation ai act, formation règlement européen ia, formation conformité ia, littératie ia article 4, formation ia act entreprise, formation ai act dpo"

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
  { icon: Target, label: "Calendrier post-Omnibus à jour (juillet 2026)" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "1 jour (7 h) en intra ; format 2 jours possible avec ateliers de mise en conformité sur vos systèmes" },
  { label: 'Pour qui', value: "DPO, juristes et conformité, DSI et responsables IA, DRH, directions générales, chefs de projet IA" },
  { label: 'Contenu', value: "Ce que le règlement impose vraiment et à quelle date, classification par risque, article 4 (littératie), transparence, plan de conformité, articulation RGPD" },
  { label: 'À jour', value: "Calendrier post-Omnibus (règlement 2026/1744 du 8 juillet 2026) : haut risque reporté à décembre 2027 et août 2028" },
  { label: 'Livrables', value: "Grille de classification de vos usages, trame de plan de conformité, modèle de dispositif article 4, kit de veille" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: CalendarDays,
    title: 'Ce qui s\'applique aujourd\'hui, ce qui est reporté',
    desc: "Le règlement s'applique par paliers, et le paquet du 8 juillet 2026 en a déplacé plusieurs. Applicables : les pratiques interdites (février 2025), l'obligation de littératie de l'article 4 (février 2025), les règles sur les modèles à usage général (août 2025), la transparence de l'article 50 (août 2026). Reportées : les obligations sur les systèmes à haut risque, à décembre 2027 et août 2028 selon l'annexe. La formation vous donne le calendrier exact, texte en main.",
  },
  {
    icon: Gauge,
    title: 'Classer vos usages par niveau de risque',
    desc: "Interdit, haut risque, risque limité (transparence), risque minimal : la pyramide du règlement appliquée à vos systèmes réels, y compris l'IA embarquée dans vos logiciels métier et les outils adoptés sans validation. Bonne nouvelle pour la plupart des organisations : la bureautique augmentée relève du risque minimal. La grille de classification est un livrable.",
  },
  {
    icon: Grad,
    title: "L'article 4 : l'obligation de littératie IA",
    desc: "Depuis février 2025, toute organisation qui utilise des systèmes d'IA doit soutenir la montée en compétence des personnes qui les manipulent. Le paquet de juillet 2026 l'a précisée en obligation de moyens : démontrer des actions de sensibilisation et de formation, sans garantir un niveau individuel. La formation vous aide à construire ce dispositif, proportionné et documenté, sans sur-jouer la menace.",
  },
  {
    icon: FileText,
    title: 'Transparence, registre, documentation',
    desc: "L'article 50 impose depuis août 2026 d'informer une personne qu'elle interagit avec une IA (agents conversationnels, contenus générés). Ce que le registre des systèmes exige réellement, et de qui ; ce qui relève de la bonne pratique. Vous repartez avec les modèles de documentation attendus en cas de contrôle, dimensionnés à votre exposition.",
  },
  {
    icon: Scale,
    title: 'Articuler AI Act et RGPD',
    desc: "Le contrôle qui peut tomber en 2026 vient d'abord de la CNIL, sur les traitements en service (recrutement en tête). La formation montre comment tenir un dossier de conformité unifié plutôt que deux silos : analyse d'impact, base légale, information des personnes, puis les exigences propres au règlement IA. Un seul dispositif, deux textes couverts.",
  },
  {
    icon: ShieldCheck,
    title: 'Le plan de conformité et la gouvernance',
    desc: "Inventaire, classification, écarts, actions avec responsables et échéances, puis la gouvernance qui fait vivre le dispositif : charte d'usage, processus d'homologation des nouveaux usages, comité. La formation vous fait produire la trame de votre plan, à finaliser ensuite avec vos experts internes ou en accompagnement.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Un calendrier lu dans le texte, pas dans les plaquettes',
    desc: "Beaucoup de formations et de prestataires racontent encore le calendrier d'avant le paquet de juillet 2026. Vous repartez avec les dates réelles, article par article, et la capacité de vérifier vous-même dans le règlement.",
  },
  {
    title: "Une conformité proportionnée à votre exposition",
    desc: "Une PME qui utilise ChatGPT et Copilot pour la bureautique n'a pas les obligations d'un éditeur de logiciel de recrutement. La formation vous situe honnêtement : ce que vous devez faire, ce que vous pouvez différer, ce qui ne vous concerne pas.",
  },
  {
    title: "L'article 4 traité comme une opportunité",
    desc: "L'obligation de littératie est aussi le meilleur levier pour structurer la montée en compétence de vos équipes, finançable OPCO. La formation vous montre comment en faire un programme utile plutôt qu'une case à cocher.",
  },
  {
    title: 'Un dossier qui tient face au RGPD et au règlement IA',
    desc: "Un seul dispositif de conformité, deux textes couverts : vous évitez le doublon coûteux entre le DPO et le responsable IA, et vous êtes prêt pour le contrôle le plus probable, celui de la CNIL.",
  },
  {
    title: 'Des livrables qui servent le lendemain',
    desc: "Grille de classification, trame de plan de conformité, modèle de dispositif article 4, kit de veille : vous repartez avec de quoi commencer, pas avec un diaporama.",
  },
  {
    title: 'La lucidité sur ce qui est certifiable',
    desc: "À l'été 2026, aucune norme harmonisée n'a été citée au JOUE : rien n'est « certifié AI Act ». Vous saurez répondre à un prestataire qui vous en promet une, et ce que vaut réellement une certification ISO/IEC 42001.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Le règlement, votre exposition, votre plan",
    matin: [
      "Le règlement européen sur l'IA en clair : logique par risque, rôles (fournisseur, déployeur), ce qui a changé avec le paquet du 8 juillet 2026",
      "Le calendrier réel, article par article : ce qui s'applique (art. 5, art. 4, modèles à usage général, art. 50), ce qui est reporté (haut risque, décembre 2027 et août 2028)",
      "Atelier inventaire : recenser vos systèmes d'IA réels, y compris l'IA embarquée dans vos logiciels et les usages adoptés sans validation",
      "Atelier classification : appliquer la pyramide des risques à vos usages, identifier ce qui relève du risque minimal et ce qui mérite attention",
    ],
    apresmidi: [
      "L'article 4 : construire votre dispositif de littératie IA, proportionné et documenté (obligation de moyens), et le financer",
      "Transparence (art. 50), registre, documentation : ce qui est exigé, de qui, et les modèles à tenir prêts",
      "Articulation avec le RGPD : le dossier unifié, l'analyse d'impact, les contrôles CNIL 2026 (recrutement en tête)",
      "Atelier plan de conformité : écarts, actions, responsables, échéances ; gouvernance (charte, homologation, comité) ; évaluation des acquis",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Scale, title: 'DPO, juristes et responsables conformité', desc: "Articuler le règlement IA et le RGPD sans doubler les dispositifs, tenir un dossier qui résiste au contrôle, savoir ce qui est réellement exigé et à quelle date. La formation vous donne le texte, le calendrier et les modèles." },
  { icon: Gauge, title: 'DSI et responsables IA', desc: "Tenir l'inventaire des systèmes, classifier par niveau de risque, homologuer les nouveaux usages sans paralyser les équipes. Vous repartez avec la grille et le processus." },
  { icon: Users, title: 'DRH et directions générales', desc: "L'article 4 vous concerne directement : l'obligation de littératie est en vigueur, en obligation de moyens. Vous repartez avec un dispositif de formation proportionné, finançable OPCO, et la lecture stratégique du règlement pour arbitrer." },
  { icon: Target, title: 'Chefs de projet IA et responsables métier', desc: "Intégrer les exigences dès la conception d'un usage : transparence, documentation, données. La conformité coûte moins cher en amont qu'après une mise en demeure." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'AI Act (ou IA Act) et qui est concerné ?",
    a: "L'AI Act, écrit aussi IA Act, est le règlement (UE) 2024/1689 établissant des règles harmonisées sur l'intelligence artificielle. Il s'applique à toute organisation qui fournit ou utilise des systèmes d'IA dans l'Union, avec des obligations graduées selon le niveau de risque de l'usage : pratiques interdites, haut risque (emploi, éducation, crédit, justice, infrastructures critiques notamment), risque limité soumis à transparence, et risque minimal, dont relève l'essentiel de la bureautique augmentée. Une PME qui utilise ChatGPT ou Copilot pour rédiger et analyser est concernée surtout par l'article 4 (littératie) et par la transparence quand elle déploie un agent face à des personnes.",
  },
  {
    q: "Quelles obligations s'appliquent aujourd'hui, et lesquelles sont reportées ?",
    a: "Applicables aujourd'hui : les pratiques interdites de l'article 5 (depuis le 2 février 2025), l'obligation de littératie IA de l'article 4 (depuis le 2 février 2025, précisée en obligation de moyens par le paquet du 8 juillet 2026), les obligations sur les modèles à usage général (depuis le 2 août 2025) et la transparence de l'article 50 (depuis le 2 août 2026). Reportées par le règlement (UE) 2026/1744 : les obligations sur les systèmes à haut risque, au 2 décembre 2027 pour l'annexe III et au 2 août 2028 pour l'annexe I. La formation détaille chaque palier, texte en main.",
  },
  {
    q: "L'article 4 rend-il la formation IA obligatoire pour nos salariés ?",
    a: "Il impose aux organisations qui utilisent des systèmes d'IA de soutenir la montée en compétence des personnes qui les manipulent, depuis le 2 février 2025. Le paquet du 8 juillet 2026 a précisé qu'il s'agit d'une obligation de moyens : démontrer des actions de sensibilisation et de formation proportionnées, sans garantir un niveau individuel. Ce n'est donc ni une formation certifiante imposée ni une menace d'amende immédiate, mais une obligation réelle et documentable. Notre formation vous aide à construire ce dispositif ; nos formations métier et notre programme d'acculturation en sont les briques, finançables OPCO.",
  },
  {
    q: "Peut-on être « certifié AI Act » ?",
    a: "Non, pas à ce jour, et méfiez-vous de qui le promet. À l'été 2026, aucune norme harmonisée n'a été citée au Journal officiel de l'Union européenne au titre du règlement IA : la présomption de conformité de l'article 40 n'est pas disponible. La seule certification existante dans le domaine est ISO/IEC 42001, sur le système de management de l'IA, délivrée par un organisme accrédité sur un périmètre déclaré ; elle ne vaut pas conformité au règlement. La formation vous apprend à faire la différence et à répondre aux prestataires.",
  },
  {
    q: "Quelle est la différence entre cette formation et la formation gouvernance IA ?",
    a: "La formation AI Act traite le règlement lui-même : ce qu'il impose, à qui, quand, comment classifier vos usages et bâtir votre plan de conformité. La formation gouvernance IA traite le dispositif d'entreprise qui fait vivre la conformité et l'usage responsable dans la durée : registre, charte, comité de gouvernance, gouvernance des données. La première vous met en règle avec le texte, la seconde organise le pilotage. Elles se suivent bien ; certains les combinent en deux jours.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est d'une journée (7 heures) en intra-entreprise, en présentiel ou à distance, pour un groupe de 4 à 10 personnes des fonctions concernées (conformité, DSI, RH, direction, chefs de projet). Un format de deux jours ajoute des ateliers de mise en conformité approfondis sur vos systèmes réels (inventaire complet, classification détaillée, plan finalisé). Un accompagnement individuel est possible pour un DPO ou un responsable IA.",
  },
  {
    q: "Combien coûte la formation AI Act ?",
    a: "Le tarif intra-entreprise est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : la journée AI Act représente donc 1 980 € HT pour l'équipe, le format deux jours 3 960 € HT. La formation étant certifiée Qualiopi, votre OPCO peut la prendre en charge dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis détaillé sous 24 heures.",
  },
  {
    q: "La formation est-elle finançable par notre OPCO ?",
    a: "Oui. Masteria est certifiée Qualiopi, ce qui rend la formation éligible au financement par votre OPCO au titre du plan de développement des compétences. La prise en charge dépend de votre branche et de la taille de l'entreprise. Nous fournissons le programme, la convention et les pièces du dossier ; le dépôt se fait avant le début de la formation. Notre outil Quel OPCO ? identifie votre opérateur en deux minutes. La formation n'est pas éligible au CPF.",
  },
  {
    q: "Quelles sanctions prévoit le règlement, et sont-elles déjà applicables ?",
    a: "Les plafonds sont élevés : jusqu'à 35 millions d'euros ou 7 % du chiffre d'affaires mondial pour les pratiques interdites, jusqu'à 15 millions ou 3 % pour la plupart des autres manquements, dont la transparence de l'article 50. Deux nuances honnêtes : les obligations les plus lourdes (haut risque) sont reportées à 2027-2028, et au 3 août 2026 la France n'avait pas encore formellement désigné ses autorités de surveillance, ce qui retarde le contrôle sans suspendre les obligations. Le risque le plus concret en 2026 reste le RGPD et la CNIL, sur les traitements déjà en service.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation AI Act (IA Act) — Masteria',
  description: "Formation au règlement européen sur l'intelligence artificielle (AI Act / IA Act) : logique par risque, calendrier réel post-Omnibus (règlement 2026/1744), inventaire et classification des systèmes, obligation de littératie de l'article 4, transparence de l'article 50, articulation RGPD, plan de conformité et gouvernance. 1 jour en intra (2 jours avec ateliers approfondis), présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Lire le calendrier réel du règlement européen sur l'IA, article par article",
    "Inventorier et classifier ses systèmes d'IA par niveau de risque",
    "Construire un dispositif de littératie IA conforme à l'article 4",
    "Articuler règlement IA et RGPD dans un dossier de conformité unifié",
    "Bâtir un plan de conformité et une gouvernance proportionnés",
  ],
  about: "Règlement européen sur l'intelligence artificielle (AI Act)",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis juridique ou technique.',
  audience: 'DPO, conformité, DSI, RH, directions, chefs de projet IA',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation AI Act Masteria (1 jour)",
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
  '@id': 'https://www.master-ia.fr/formation-ai-act#article',
  headline: "Formation AI Act (IA Act) : ce que le règlement impose vraiment, et quand",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2025-11-20',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ai-act#webpage' },
  about: [
    { '@type': 'Thing', name: 'Règlement sur l\'intelligence artificielle (AI Act)', sameAs: 'https://fr.wikipedia.org/wiki/R%C3%A8glement_sur_l%27intelligence_artificielle' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Règlement général sur la protection des données', sameAs: 'https://fr.wikipedia.org/wiki/R%C3%A8glement_g%C3%A9n%C3%A9ral_sur_la_protection_des_donn%C3%A9es' },
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

export default function FormationAIActPage() {
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
    { name: "Formation AI Act", slug: SLUG },
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
        datePublished="2025-11-20"
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
          { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation AI Act</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation conformité · AI Act
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation AI Act (IA Act) :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce que le règlement impose vraiment, et quand</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation AI Act de Masteria vous apprend, en une journée, ce que le règlement européen sur l'IA impose réellement à votre organisation et à quelle date, avec le <strong style={{ color: '#fff', fontWeight: 700 }}>calendrier post-Omnibus de juillet 2026</strong> : classer vos usages par risque, construire votre dispositif de littératie (article 4), tenir la transparence, articuler avec le RGPD et bâtir votre plan de conformité. Certifiée Qualiopi, finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le règlement s'écrit AI Act ou IA Act, et il est mal raconté un peu partout : calendrier périmé, obligations gonflées, certifications qui n'existent pas. Cette formation part du texte, article par article, pour vous situer honnêtement : ce que vous devez faire, ce que vous pouvez différer, ce qui ne vous concerne pas. Vous repartez avec vos livrables, pas avec une peur.
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
              <Kicker>Ce que couvre la formation</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que faut-il savoir du règlement européen sur l'IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six choses : le calendrier réel (ce qui s'applique, ce qui est reporté à 2027-2028), la classification de vos usages par risque, l'article 4 sur la littératie IA, la transparence et la documentation, l'articulation avec le RGPD, et le plan de conformité avec sa gouvernance. La formation les traite dans cet ordre, sur vos systèmes réels.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour le dispositif d'entreprise qui fait vivre la conformité dans la durée, voyez la <Link to="/formation-gouvernance-ia" style={aStyle}>formation gouvernance IA</Link> ; pour vous faire accompagner sur la mise en conformité elle-même, notre <Link to="/gouvernance-ia" style={aStyle}>conseil en gouvernance IA</Link>.
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
            Pourquoi se former au règlement européen sur l'IA maintenant ?
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six raisons : un calendrier lu dans le texte plutôt que dans les plaquettes, une conformité proportionnée à votre exposition réelle, l'article 4 traité comme un levier de montée en compétence finançable, un dossier unique qui tient face au RGPD et au règlement IA, des livrables utilisables le lendemain, et la lucidité sur ce qui est certifiable ou non.</strong>
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
            Un mot d'honnêteté : le report des obligations sur le haut risque à 2027-2028 laisse le temps de faire les choses dans l'ordre. Il ne suspend ni les obligations déjà applicables, ni les contrôles de la CNIL sur les traitements en service. La conformité s'organise mieux en amont d'un déploiement qu'après une mise en demeure.
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
            Programme de la formation AI Act sur 1 jour
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Matin : le règlement en clair, le calendrier réel article par article, l'inventaire et la classification de vos systèmes en atelier. Après-midi : l'article 4 et votre dispositif de littératie, la transparence et la documentation, l'articulation RGPD, puis votre plan de conformité et la gouvernance en atelier. Une journée dense, texte en main, sur vos usages réels.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            En format 2 jours, la seconde journée est faite d'ateliers de mise en conformité approfondis : inventaire complet, classification détaillée de chaque système, plan finalisé avec responsables et échéances, modèles de documentation remplis.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation AI Act ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Aux fonctions qui portent la conformité et les usages de l'IA : DPO, juristes et responsables conformité, DSI et responsables IA, DRH et directions générales (l'article 4 les concerne directement), chefs de projet IA et responsables métier. Sans prérequis juridique ni technique : le texte est expliqué en clair.</strong>
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
                Ce que la formation ne fait pas dire au règlement
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le marché de la conformité IA entretient trois confusions que la formation démonte : la première, que la formation des salariés serait obligatoire sous peine d'amende immédiate (l'article 4 est une obligation de moyens, réelle et documentable, pas une menace) ; la deuxième, que la plupart des systèmes à haut risque exigeraient un audit externe (le règlement prévoit pour l'essentiel une auto-évaluation documentée, et ces obligations sont reportées) ; la troisième, qu'une conformité « certifiée AI Act » existerait (aucune norme harmonisée n'a été citée au JOUE à l'été 2026). Nous formons sur ces sujets depuis 2022 et suivons chaque évolution du texte : la formation est mise à jour à chaque palier, et vous repartez avec de quoi vérifier par vous-même. Pour un guide écrit sur les usages, voyez notre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Calendrier post-Omnibus, article par article', 'Article 4 : obligation de moyens, pas de menace', 'Rien n\'est « certifié AI Act » à ce jour', 'Le contrôle le plus probable en 2026 : la CNIL, sur le RGPD'].map(pt => (
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
            <strong>1 980 € HT la journée de formation en intra-entreprise, pour le groupe (jusqu'à 10 participants) ; 3 960 € HT le format deux jours avec ateliers approfondis. Certifiée Qualiopi, la formation est finançable par votre OPCO au titre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable (vos usages, vos outils, votre exposition), l'animation de la journée en présentiel ou à distance, les supports à jour du dernier texte, les livrables (grille de classification, trame de plan de conformité, modèle de dispositif article 4, kit de veille), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation AI Act : les questions fréquentes</h2>
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
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Suite logique', desc: "Le dispositif qui fait vivre la conformité : registre, charte, comité, gouvernance des données (1 jour)." },
              { label: 'Conseil gouvernance & AI Act', href: '/gouvernance-ia', tag: 'Accompagnement', desc: "Se faire accompagner sur la mise en conformité : classification, registre, politique et comité IA." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Guide', desc: "Le contenu type d'une charte d'usage de l'IA, avec exemples de formulation." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Guide', desc: "Les principes RGPD appliqués à l'IA, l'analyse d'impact et les garanties à vérifier outil par outil." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Article 4', desc: "La démarche de montée en compétence collective qui répond à l'obligation de littératie." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Direction', desc: "La lecture stratégique du règlement pour un COMEX : enjeux, risques, arbitrages." },
              { label: 'Sprint IA AI Act (3 h)', href: '/formation-sprint-ia-ai-act', tag: 'Format court', desc: "L'atelier de trois heures pour sensibiliser rapidement une équipe au règlement." },
              { label: 'Guide de l\'audit IA', href: '/blog/audit-ia-entreprise-methode-prix', tag: 'Article', desc: "Ce que la loi impose vraiment, les normes publiées et les cas où l'audit ne sert à rien." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation AI Act</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Mettons votre organisation en règle, sans en rajouter</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos usages de l'IA, vos outils et vos fonctions concernées. Nous revenons vers vous sous 24 heures avec un programme ajusté à votre exposition réelle, les dates possibles et le devis, dossier OPCO compris.
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
