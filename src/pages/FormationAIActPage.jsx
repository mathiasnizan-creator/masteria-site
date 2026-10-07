import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Scale, Gauge, GraduationCap as Grad, FileText, ShieldCheck, CalendarDays,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation AI Act » (slug /formation-ai-act). Cible « formation ia
 * act » et sa variante « formation ai act » ; les deux graphies sont tissées.
 *
 * ANGLE PROPRE (07/10/2026) : la formation au règlement lui-même. Les rôles et le
 * dispositif sont sur /gouvernance-ia (conseil), le document sur /charte-ia-entreprise,
 * les données sur /ia-et-rgpd, l'éthique sur /ia-responsable ; /formation-gouvernance-ia
 * forme au dispositif (registre, charte, comité).
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de FounderNote ni
 * d'OfficialSources ; intra « jusqu'à 12 participants » (et non 10) ; plus d'affirmation
 * sur l'autorité française de surveillance (non vérifiée) ; norme harmonisée datée « au
 * dernier relevé d'août 2026 » (à revérifier).
 *
 * FAITS VÉRIFIÉS : règlement (UE) 2024/1689 modifié par le règlement (UE) 2026/1744 du
 * 8 juillet 2026, en vigueur le 27 juillet 2026. Article 4 applicable depuis le
 * 02/02/2025, réécrit en obligation de moyens ; Q&R Commission du 27/07/2026 : aucun
 * certificat, registre interne. Article 50 depuis le 02/08/2026 ; lignes directrices
 * définitives de la Commission publiées le 20/07/2026 [V-tiers]. 02/12/2026 : marquage des
 * générateurs déjà commercialisés et nouvelle interdiction (images intimes non
 * consenties). Haut risque : annexe III au 02/12/2027, annexe I au 02/08/2028. Sanctions
 * (article 99) : 35 M€ ou 7 %, 15 M€ ou 3 %, 7,5 M€ ou 1 % ; pour les PME, le plus faible
 * des deux montants. CNIL : contrôles 2026 annoncés le 03/04/2026 (recrutement).
 */

const SLUG = 'formation-ai-act'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation AI Act (IA Act) : obligations et dates | Masteria"
const META_DESC = "Formation AI Act (IA Act) en 1 jour : calendrier post-Omnibus vérifié au 7 octobre 2026, article 4, classement des usages, plan de conformité. Qualiopi."
const KEYWORDS = "formation ia act, formation ai act, formation règlement européen ia, formation conformité ia, littératie ia, article 4 ai act, formation ia act entreprise, formation ai act dpo, omnibus ai act"

const SOURCES = [
  { name: "Règlement (UE) 2024/1689 : la version officielle de l'AI Act (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Omnibus de juillet 2026 : le texte du règlement (UE) 2026/1744 qui décale le calendrier", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Commission européenne : l'article 4 expliqué, sans certificat exigé (27 juillet 2026)", url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers' },
  { name: "CNIL : comment le règlement IA s'articule avec le RGPD, page revue par la CNIL le 17 août 2026", url: 'https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil' },
  { name: "Ministère du Travail : la certification Qualiopi des organismes de formation", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: "Ministère du Travail : le rôle des opérateurs de compétences (OPCO)", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
]

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
  { icon: GraduationCap, label: 'Qualiopi · actions de formation' },
  { icon: Sparkles, label: 'ChatGPT · Copilot · Claude · Gemini · Mistral' },
  { icon: Target, label: 'Calendrier vérifié au 7 octobre 2026' },
  { icon: MapPin, label: 'Chez vous ou en classe virtuelle · France, Europe, États-Unis, Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Sept heures en intra sur une journée ; deux jours si vous voulez traiter vos propres systèmes en ateliers" },
  { label: 'Pour qui', value: "DPO, juristes, conformité, DSI, responsables IA, DRH, direction générale, chefs de projet" },
  { label: 'Programme', value: "Calendrier article par article, classement des usages par risque, article 4, transparence, lien avec le RGPD, plan de conformité" },
  { label: 'À jour', value: "Texte de 2024 tel que l'Omnibus l'a modifié en juillet 2026 : haut risque au 2 décembre 2027 (annexe III) et au 2 août 2028 (annexe I)" },
  { label: 'Livrables', value: "Grille de classement de vos usages, trame de plan de conformité, modèle de registre des actions de formation, liste de veille" },
  { label: 'Tarif', value: "1 980 € HT pour sept heures, groupe intra jusqu'à douze ou formule individuelle ; 3 960 € HT les deux jours ; financement à demander à votre OPCO" },
]

/* ───────── Ce que couvre la formation (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: CalendarDays,
    title: 'Ce qui s\'applique déjà, ce qui attend',
    desc: "Le texte s'applique par paliers, et l'Omnibus en a déplacé plusieurs. Déjà en vigueur : interdictions et article 4 depuis février 2025, encadrement des modèles à usage général à partir de l'été 2025, article 50 sur la transparence depuis août 2026. Encore à venir : le marquage des contenus des générateurs déjà commercialisés et une interdiction nouvelle au 2 décembre 2026, puis les usages à haut risque, en décembre 2027 (annexe III) et en août 2028 (annexe I). Vous repartez avec ce calendrier, références d'articles à l'appui.",
  },
  {
    icon: Gauge,
    title: 'Classer vos usages par niveau de risque',
    desc: "Usages proscrits, à haut risque, soumis à transparence ou à risque minimal : la pyramide du règlement appliquée à vos usages, y compris l'IA logée dans vos logiciels métier et les comptes ouverts sans validation. Rédiger un mail ou résumer un rapport avec un assistant relève du risque minimal ; trier des CV relève du haut risque. La grille de classement fait partie des livrables.",
  },
  {
    icon: Grad,
    title: "L'article 4, lu dans sa nouvelle rédaction",
    desc: "En vigueur dès le 2 février 2025, puis réécrit à l'été 2026 par l'Omnibus, l'article 4 dit désormais que fournisseurs et déployeurs prennent des mesures qui aident leurs équipes à maîtriser l'IA, sans niveau individuel à garantir. Pour le certificat, la Commission répond, dans ses questions-réponses du 27 juillet 2026, qu'il n'en faut aucun : une trace interne des formations suffit. Vous construisez ce registre pendant la journée.",
  },
  {
    icon: FileText,
    title: 'Transparence et documentation',
    desc: "Un agent conversationnel doit, depuis août 2026, prévenir qu'on parle à une machine, et un hypertrucage diffusé doit porter une mention. La journée sépare ce que l'article 50 exige, et de qui, de ce qui reste une simple recommandation ; elle s'appuie sur les lignes directrices définitives que la Commission a publiées le 20 juillet 2026.",
  },
  {
    icon: Scale,
    title: 'AI Act et RGPD dans un même dossier',
    desc: "Le contrôle le plus probable en 2026 reste celui de la CNIL, qui a placé le recrutement en tête de son programme de l'année. La formation montre comment tenir un dossier unique : analyse d'impact, base légale, information des personnes, puis les exigences propres au règlement IA.",
  },
  {
    icon: ShieldCheck,
    title: 'Votre plan de conformité',
    desc: "Inventaire, classement, écarts, actions confiées à un porteur avec une échéance, puis la gouvernance qui fait vivre le tout : charte d'usage, validation des nouveaux usages, comité. Vous repartez avec la trame de votre plan, à finaliser avec vos équipes ou en mission de conseil.",
  },
]

/* ───────── Ce que vous y gagnez (6 points, citables) ───────── */

const ATOUTS = [
  {
    title: 'Des dates lues dans le texte',
    desc: "Beaucoup de supports circulent encore avec le calendrier d'avant juillet 2026. Vous repartez avec les échéances en vigueur, article par article, et la méthode pour les vérifier vous-même sur EUR-Lex.",
  },
  {
    title: 'Une conformité à la mesure de votre exposition',
    desc: "Une PME qui rédige avec ChatGPT et Copilot n'a pas les obligations d'un éditeur de logiciel de recrutement. La journée dit ce que vous devez faire, ce qui peut attendre et ce qui ne vous concerne pas.",
  },
  {
    title: "L'article 4 comme plan de montée en compétences",
    desc: "L'obligation de moyens se remplit avec des actions concrètes et tracées. Bien construite, elle devient le programme de formation de vos équipes, que votre OPCO peut financer en partie.",
  },
  {
    title: 'Un seul dossier pour deux règlements',
    desc: "Analyse d'impact, registre, information des personnes : le DPO et le responsable IA cessent de tenir deux dossiers parallèles, et vous êtes prêt pour le contrôle le plus probable.",
  },
  {
    title: 'Des livrables utiles dès le lendemain',
    desc: "Grille de classement, trame de plan, modèle de registre des formations, liste de veille : de quoi lancer la mise en conformité dès la semaine suivante.",
  },
  {
    title: 'Savoir ce qui se certifie',
    desc: "Aucune certification « AI Act » n'existe. Vous saurez quoi répondre au prestataire qui en vend une, et ce que vaut une certification ISO/IEC 42001.",
  },
]

/* ───────── Programme (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Le règlement, votre exposition, votre plan",
    matin: [
      "Le règlement en clair : approche par les risques, rôles de fournisseur et de déployeur, ce que l'Omnibus du 8 juillet 2026 a déplacé",
      "Le calendrier article par article : article 5, article 4, modèles à usage général, article 50, échéance du 2 décembre 2026, puis échéances du haut risque fixées à décembre 2027 et à août 2028",
      "Atelier inventaire : recenser vos systèmes, IA intégrée aux logiciels métier et comptes ouverts sans validation compris",
      "Atelier classement : placer chaque usage dans la pyramide et repérer ceux qui demandent une attention particulière",
    ],
    apresmidi: [
      "Article 4 : bâtir un dispositif de maîtrise de l'IA proportionné, le tracer dans un registre interne et le financer",
      "Article 50 et documentation : ce qui est exigé, de qui, et les modèles à tenir prêts",
      "Lien avec le RGPD : dossier commun, analyse d'impact, contrôles de la CNIL en 2026",
      "Atelier plan de conformité : écarts, actions, porteurs, échéances ; charte, validation des usages, comité ; évaluation des acquis",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Scale, title: 'DPO, juristes et responsables conformité', desc: "Vous connaissez le RGPD ; la journée y raccroche le règlement IA sans doubler les dossiers, avec les dates exactes et les modèles de documentation à tenir prêts." },
  { icon: Gauge, title: 'DSI et responsables IA', desc: "Vous tenez l'inventaire des systèmes et validez les nouveaux usages. Vous repartez avec la grille de classement et un circuit de validation qui ne bloque pas les équipes." },
  { icon: Users, title: 'DRH et directions générales', desc: "L'article 4 vous vise en premier : former vos équipes à l'IA relève d'une obligation de moyens déjà en vigueur. Vous repartez avec un plan de formation proportionné et une lecture stratégique du texte pour arbitrer." },
  { icon: Target, title: 'Chefs de projet IA et responsables métier', desc: "Vous concevez les usages de demain. Penser transparence, documentation et données dès la conception coûte moins cher qu'une reprise après coup." },
]

/* ───────── Missions de formation citées (faits de src/data/missions-formation.js et etudes-de-cas.js) ───────── */

const TERRAIN = [
  {
    href: '/etudes-de-cas-ia#mission-interprofession-agricole',
    texte: "Seize salariés d'une interprofession agricole ont terminé leurs trois jours de formation, en septembre 2026, par un module d'usage responsable : choisir le bon compte, respecter le RGPD et l'AI Act, distinguer ce qui est permis, ce qui se vérifie et ce qui est proscrit.",
  },
  {
    href: '/etudes-de-cas-ia#mission-franchise-gemini',
    texte: "Les deux administrateurs Google Workspace d'un réseau de franchise B2B ont consacré une journée en classe virtuelle à la console, à l'AI Act, au RGPD et à leur charte d'usage, en septembre 2026.",
  },
  {
    href: '/etudes-de-cas-ia#industrie',
    texte: "Dans un groupe international de l'emballage, le comité de direction a travaillé en anglais le cadre AI Act et RGPD pendant une matinée stratégique, avant l'extension de Copilot à ses sites étrangers.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'AI Act (ou IA Act), et qui est concerné ?",
    a: "L'AI Act, écrit aussi IA Act, désigne le règlement (UE) 2024/1689, qui harmonise les règles applicables à l'intelligence artificielle dans l'Union. Il vise toute organisation qui fournit ou utilise des systèmes d'IA, avec des obligations qui croissent avec le risque de l'usage : pratiques interdites, haut risque (emploi, éducation, crédit, justice, infrastructures critiques notamment), transparence pour certains systèmes, risque minimal pour l'essentiel de la bureautique assistée. Une PME qui rédige et analyse avec ChatGPT ou Copilot est surtout concernée par l'article 4 et, si elle met un agent face au public, par l'article 50.",
  },
  {
    q: "Quelles obligations s'appliquent au 7 octobre 2026, et lesquelles attendent ?",
    a: "Trois blocs jouent déjà. Premier bloc, en février 2025 : l'article 5, qui proscrit certaines pratiques, et l'article 4 avec son exigence de compétence en IA. Deuxième bloc, en août 2025 : les règles visant ceux qui mettent sur le marché des modèles à usage général. Troisième bloc, en août 2026 : la transparence de l'article 50. L'Omnibus, en application depuis le 27 juillet 2026, a converti l'article 4 en obligation de moyens et repoussé le haut risque : le 2 décembre 2027 pour les usages listés en annexe III, le 2 août 2028 pour l'IA intégrée aux produits réglementés de l'annexe I. Une date intermédiaire compte aussi : au 2 décembre 2026, les générateurs déjà vendus doivent marquer leurs contenus, et une pratique de plus devient interdite, la fabrication d'images intimes sans consentement. La formation reprend chaque palier, texte en main.",
  },
  {
    q: "L'article 4 rend-il la formation obligatoire pour nos salariés ?",
    a: "L'article 4 oblige à agir et n'exige aucun certificat. Depuis le 2 février 2025, il demande aux organisations qui fournissent ou utilisent des systèmes d'IA de veiller à ce que leur personnel maîtrise suffisamment ces outils ; depuis l'Omnibus de l'été 2026, sa rédaction parle de mesures pour soutenir cette maîtrise, sans niveau individuel à atteindre. La Commission a confirmé le 27 juillet 2026 qu'une trace interne de ce qui a été fait suffit. Former vos équipes est donc la manière la plus directe de remplir l'obligation ; notre programme d'acculturation et nos formations métier en sont les briques, et une partie du coût peut être confiée à l'OPCO de votre branche.",
  },
  {
    q: "Peut-on être « certifié AI Act » ?",
    a: "Non. Méfiez-vous de toute offre qui le promet. Au dernier relevé de Masteria, en août 2026, aucune norme harmonisée n'avait encore été référencée au Journal officiel de l'UE pour ce règlement : la présomption de conformité de l'article 40 restait indisponible. La certification qui existe dans le domaine, ISO/IEC 42001, porte sur l'organisation qu'une entreprise se donne pour piloter l'IA, sur un périmètre qu'elle déclare ; elle ne prouve pas, à elle seule, le respect du règlement. La formation vous apprend à faire la différence et à interroger un prestataire.",
  },
  {
    q: "Quelle différence avec la formation gouvernance IA ?",
    a: "La formation AI Act porte sur le règlement : ce qu'il impose, à qui, à quelle date, comment classer vos usages et bâtir votre plan de conformité. La formation gouvernance IA porte sur le dispositif d'entreprise qui fait vivre la conformité au quotidien : registre des usages, charte, comité, réglages des consoles. La première vous met en règle avec le texte, la seconde organise le pilotage. Elles s'enchaînent bien, et certaines organisations les suivent sur deux jours consécutifs.",
  },
  {
    q: "Quelle durée, et quel format choisir ?",
    a: "La formule standard : sept heures en intra, chez vous ou en visioconférence, avec jusqu'à douze participants issus des fonctions concernées : conformité, DSI, RH, direction, chefs de projet. La version en deux jours prévoit des ateliers sur vos propres systèmes : inventaire complet, classement détaillé, plan finalisé. Un DPO ou un responsable IA peut aussi suivre la formation en individuel.",
  },
  {
    q: "Combien coûte la formation AI Act ?",
    a: "Pour 1 980 € HT, la journée accueille en intra jusqu'à douze stagiaires, ou un seul en individuel ; deux jours reviennent à 3 960 € HT. Côté financement, la certification Qualiopi permet de présenter cette action de votre plan de formation à votre OPCO de branche, et nous préparons les pièces avec vous. Hors Lyon, les frais de déplacement du formateur figurent dans le devis, envoyé sous 24 heures.",
  },
  {
    q: "Notre OPCO peut-il prendre la journée en charge ?",
    a: "La journée y est éligible, Masteria ayant été certifiée Qualiopi au titre de ses actions de formation. Le montant accordé dépend des critères de votre OPCO, de votre effectif et de son budget annuel. Les documents nécessaires (programme, convention, attestations) sont préparés par nos soins, et le dossier doit être déposé chez l'OPCO avant que la formation commence. Pour savoir de quel OPCO vous dépendez, notre outil Quel OPCO ? vous le dit après quelques questions. Pour une entreprise basée à Genève ou à Bruxelles, le financement OPCO n'existe pas : nous établissons le devis en euros, hors taxes. La formation n'est pas proposée au CPF.",
  },
  {
    q: "Quelles sanctions prévoit le règlement, et s'appliquent-elles déjà ?",
    a: "L'article 99 prévoit trois plafonds. Pratiques interdites : 7 % du chiffre d'affaires annuel mondial ou 35 millions d'euros, le plus haut des deux ; pour la plupart des autres manquements, transparence de l'article 50 comprise, 15 millions ou 3 % ; pour des renseignements inexacts donnés aux autorités, 7,5 millions ou 1 %. Une PME ou une jeune pousse se voit appliquer le plus bas des deux montants. Les obligations les plus lourdes, celles du haut risque, n'arrivent qu'en 2027 et 2028 ; le risque le plus concret en 2026 reste le RGPD, que la CNIL contrôle déjà.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation AI Act (IA Act) · Masteria',
  description: "Formation au règlement (UE) 2024/1689, que l'on appelle AI Act ou IA Act : approche par les risques, calendrier issu du règlement (UE) 2026/1744, inventaire et classement des systèmes, article 4 et registre des formations, transparence de l'article 50, lien avec le RGPD, plan de conformité. Une journée en intra (deux avec ateliers), en salle ou à distance. Organisme certifié Qualiopi, catégorie actions de formation.",
  level: 'Tous niveaux',
  teaches: [
    "Dater chaque obligation de l'AI Act, article par article",
    "Inventorier ses systèmes d'IA et les classer par niveau de risque",
    "Documenter les mesures de maîtrise de l'IA attendues par l'article 4",
    "Tenir un dossier commun au règlement IA et au RGPD",
    "Rédiger un plan de conformité et une gouvernance à la mesure de son exposition",
  ],
  about: "AI Act, règlement (UE) 2024/1689",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis juridique ou technique.',
  audience: 'DPO, conformité, DSI, RH, directions, chefs de projet IA',
  locationName: 'Masteria · en intra dans vos locaux (France, Europe, États-Unis, Inde) ou en classe virtuelle',
}
/* Programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation AI Act Masteria (1 jour)",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((j, ji) => [
    { '@type': 'ListItem', position: ji * 2 + 1, name: `${j.jour}, matin : ${j.titre}`, description: j.matin.join(' ; ') },
    { '@type': 'ListItem', position: ji * 2 + 2, name: `${j.jour}, après-midi : ${j.titre}`, description: j.apresmidi.join(' ; ') },
  ]),
}

/* Article : auteur + dates (E-E-A-T + fraîcheur GEO), entités liées. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-ai-act#article',
  headline: "Formation AI Act (IA Act) : lire le règlement, classer vos usages, dater vos obligations",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2025-11-20',
  dateModified: '2026-10-07',
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
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={SOURCES}
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
              Formation · règlement européen sur l'IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation AI Act (IA Act) :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>lire le règlement, classer vos usages, dater vos obligations</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Programme conçu et supervisé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · aligné sur le texte en vigueur au 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            En une journée, la formation AI Act de Masteria vous apprend ce que le règlement de 2024 attend de votre organisation et à quelle date, d'après le <strong style={{ color: '#fff', fontWeight: 700 }}>calendrier modifié en juillet 2026 par l'Omnibus</strong> : classer vos usages par niveau de risque, documenter ce que vous faites pour former vos équipes (article 4), respecter la transparence de l'article 50, relier le tout au RGPD et repartir avec la trame de votre plan de conformité. Masteria, organisme de formation, a obtenu la certification Qualiopi pour ses « actions de formation ».
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            On écrit AI Act ou IA Act, et on lit à son sujet beaucoup d'erreurs : un calendrier antérieur à l'Omnibus, des obligations gonflées, des certificats qui n'existent pas. La journée part du texte, article par article, et vous situe : ce qu'il faut faire maintenant, ce qui attend 2027 ou 2028, ce qui ne vous concerne pas. Vous repartez avec vos livrables et sans inquiétude inutile.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Le programme de la journée
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

      {/* ── CE QUE COUVRE LA FORMATION (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce que couvre la formation</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que faut-il savoir du règlement européen sur l'IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six sujets, traités dans cet ordre sur vos propres usages : le calendrier tel qu'il s'applique après l'Omnibus, le classement par niveau de risque, l'article 4 dans sa nouvelle rédaction, la transparence de l'article 50, le lien avec le RGPD, et le plan de conformité avec sa gouvernance.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour apprendre à faire vivre le dispositif au quotidien (registre, charte, comité), voyez la <Link to="/formation-gouvernance-ia" style={aStyle}>formation gouvernance IA</Link> ; pour confier la mise en conformité elle-même à un consultant, la <Link to="/gouvernance-ia" style={aStyle}>mission de gouvernance de l'IA</Link>.
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

      {/* ── CE QUE VOUS Y GAGNEZ ── */}
      <section id="atouts" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que vous y gagnez</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi se former au règlement européen sur l'IA maintenant ?
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six raisons de le faire dès maintenant : des dates lues dans le texte, une conformité proportionnée, l'article 4 transformé en plan de montée en compétences, un dossier commun avec le RGPD, des livrables utilisables tout de suite, et la lucidité sur ce qui se certifie.</strong>
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
            Le report du haut risque à 2027 et 2028 laisse le temps de bien faire. Il laisse aussi en place les obligations déjà applicables et les contrôles de la CNIL sur les traitements en service. Une mise en conformité préparée avant un déploiement coûte moins cher qu'une mise en demeure.
          </p>
        </div>
      </section>

      {/* ── PROGRAMME (ancre sombre, pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Programme de la formation AI Act sur 1 jour
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le matin, le règlement en clair, le calendrier article par article, puis l'inventaire et le classement de vos systèmes en atelier. L'après-midi, l'article 4 et votre registre, la transparence et la documentation, le lien avec le RGPD, enfin votre plan de conformité en atelier. Une journée dense, texte en main, sur vos propres usages.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            En deux jours, la seconde journée se passe en ateliers sur vos systèmes : inventaire complet, classement détaillé de chaque usage, plan finalisé avec porteurs et échéances, modèles de documentation remplis.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation AI Act ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Aux fonctions qui portent la conformité et les usages : DPO, juristes et conformité, DSI et responsables IA, DRH et direction générale, chefs de projet et responsables métier. Aucun prérequis juridique ou technique n'est demandé : le texte est expliqué en clair.</strong>
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

      {/* ── CADRE : trois idées reçues (E-E-A-T + réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Le texte, sans exagération</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Trois idées reçues que la journée corrige
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La première veut que l'article 4 impose une formation certifiée, sous peine d'amende immédiate. Il demande des mesures proportionnées et documentées, et la Commission a confirmé le 27 juillet 2026 qu'aucun certificat n'est exigé. La deuxième veut que tout système à haut risque passe par un audit externe. Pour la plupart des usages de l'annexe III, le fournisseur évalue lui-même la conformité, selon la procédure dite de contrôle interne, et ces obligations n'arrivent qu'en décembre 2027. La troisième veut qu'une conformité « certifiée AI Act » s'achète. Au dernier relevé de Masteria, en août 2026, aucune norme harmonisée n'était référencée au JO de l'UE pour le règlement. Le support est révisé à chaque évolution du texte, et vous repartez avec de quoi vérifier par vous-même. Pour un guide écrit sur les règles d'usage, voyez notre page <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Calendrier post-Omnibus, article par article', 'Article 4 : des moyens, aucun certificat', 'Aucune conformité « certifiée AI Act » à vendre', 'Contrôle le plus probable en 2026 : la CNIL'].map(pt => (
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
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Prix de la journée et financement possible</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le tarif tient en deux chiffres : 1 980 € HT pour une journée, que le groupe intra compte deux ou douze personnes ou que vous veniez seul, et 3 960 € HT pour deux jours. La certification Qualiopi vous permet de déposer une demande auprès de votre OPCO de branche ; il accorde sa prise en charge selon ses critères et son enveloppe. Le devis part sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable sur vos usages et vos outils, l'animation en salle ou à distance, un support aligné sur le texte en vigueur, les livrables (grille de classement, trame de plan, modèle de registre, liste de veille), un test de fin de journée pour mesurer les acquis, puis le certificat de réalisation remis à chacun. Hors Lyon, les frais de déplacement du formateur sont chiffrés dans le devis.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>La demande auprès de l'OPCO</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le dossier part avant le premier jour, et Masteria vous remet le programme, la convention et les justificatifs à y joindre. Ce que l'OPCO accorde varie selon ses règles, votre effectif et son budget. Hors de France, à Genève comme à Bruxelles, le devis se fait en euros hors taxes, sans OPCO. Trouvez votre opérateur avec <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> et les dispositifs sur <Link to="/financement-formation-ia" style={aStyle}>financer sa formation IA</Link>. La formation n'est pas proposée au CPF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUR LE TERRAIN (missions anonymisées) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)' }}>
            Le règlement au programme de nos missions récentes
          </h2>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 22px' }}>
            Le cadre réglementaire entre aussi dans nos formations aux outils, à la dose qui convient au public. Trois exemples, anonymisés comme tous nos cas publiés :
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {TERRAIN.map(t => (
              <li key={t.href} style={{ ...cardStyle, padding: '18px 22px', fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>
                {t.texte}{' '}
                <Link to={t.href} style={{ ...aStyle, whiteSpace: 'nowrap' }}>Lire la mission</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation AI Act : ce que les stagiaires demandent avant de s'inscrire</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Une question sur votre secteur, vos outils ou le financement ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pour aller plus loin</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Approfondir après la journée</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Le dispositif à installer, les documents à écrire, les publics à former : la suite dépend de ce que la journée aura révélé.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Suite logique', desc: "La suite naturelle : construire en une journée le dispositif qui fait vivre la conformité." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Conseil', desc: "Confier l'inventaire, le classement, le registre et l'installation du comité à une mission au forfait." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Guide', desc: "Les huit rubriques d'une charte, chacune avec un exemple de rédaction, transparence de l'article 50 comprise." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Guide', desc: "Ce que le RGPD exige d'un assistant, article par article, avec l'analyse d'impact et les garanties des éditeurs." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Article 4', desc: "Former largement les équipes, pour que la maîtrise de l'IA se constate partout dans l'organisation." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Direction', desc: "Le règlement vu du comité de direction : risques, arbitrages, budget." },
              { label: 'Sprint IA AI Act (3 h)', href: '/formation-sprint-ia-ai-act', tag: 'Format court', desc: "Trois heures pour sensibiliser une équipe au règlement avant d'aller plus loin." },
              { label: 'AI Act et RH : recrutement et évaluation', href: '/blog/ai-act-rh-conformite-recrutement-evaluation', tag: 'Article', desc: "Pourquoi le tri de candidatures et l'évaluation des salariés relèvent du haut risque, et quoi préparer." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <ArrowRight size={15} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan supervise le contenu de cette journée et le révise à chaque palier du texte. La version actuelle intègre l'Omnibus, la foire aux questions publiée par la Commission le 27 juillet 2026 et le calendrier vérifié le 7 octobre 2026. Pour découvrir son parcours : <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation AI Act</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Mettez votre organisation en règle, à la mesure de votre exposition</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous quels outils d'IA vous utilisez et quelles fonctions sont concernées. Vous recevez sous 24 heures un programme ajusté à votre exposition, des dates possibles et le devis, avec les pièces du dossier pour l'OPCO.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Qualiopi, catégorie actions de formation · intra jusqu'à 12 personnes ou individuel · en salle ou à distance</p>
          </div>
        </div>
      </section>

      {/* ── TEXTES ET REPÈRES OFFICIELS (remplace OfficialSources) ── */}
      <section aria-labelledby="textes-officiels" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="textes-officiels" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 16px' }}>
            Les textes sur lesquels s'appuie la journée
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
            {SOURCES.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 4 }} aria-hidden="true" /> {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
