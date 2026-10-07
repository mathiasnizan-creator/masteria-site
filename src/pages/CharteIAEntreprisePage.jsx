import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ScrollText, ListChecks, Workflow, GraduationCap, Scale,
  ShieldCheck, AlertTriangle, Target, FileText, Layers, Ban, Copy,
  RefreshCw, ExternalLink, BookOpen,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page money « charte IA d'entreprise » (slug /charte-ia-entreprise). Cible :
 * « charte ia », « charte utilisation ia », « charte ia entreprise »,
 * « charte éthique ia », « politique ia entreprise », « exemple charte ia ».
 *
 * ANGLE PROPRE (07/10/2026) : le document lui-même. Ce qu'il contient, comment
 * l'écrire, le faire signer et le tenir à jour. Les rôles et le comité sont sur
 * /gouvernance-ia, les données personnelles sur /ia-et-rgpd, l'éthique sur
 * /ia-responsable, la formation au règlement sur /formation-ai-act.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards, de
 * FounderNote ni d'OfficialSources. Faits datés : article 4 de l'AI Act applicable
 * depuis le 02/02/2025, réécrit par le règlement (UE) 2026/1744 en vigueur le
 * 27/07/2026 (obligation de moyens) ; Q&R Commission du 27/07/2026 (pas de
 * certificat, registre interne) ; article 50 depuis le 02/08/2026 ; Q&R CNIL sur
 * l'IA générative du 18/07/2024 ; retrait des GPTs personnalisés le 11/12/2026
 * (help.openai.com, vérifié le 07/10/2026). Cas cités : photovoltaique,
 * missions franchise-gemini et gerance-cabinet.
 */

const SLUG = 'charte-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "Charte IA d'entreprise : exemples et méthode | Masteria"
const META_DESC = "Charte IA d'entreprise : 8 rubriques avec une formulation pour chacune, méthode de rédaction en 5 étapes, repères AI Act et RGPD au 7 octobre 2026."
const KEYWORDS = "charte ia, charte utilisation ia, charte ia entreprise, charte d'utilisation de l'ia, charte éthique ia, politique ia entreprise, exemple charte ia, exemple de charte ia, modèle charte ia, rédiger une charte ia, charte ia d'entreprise, maîtrise de l'ia, littératie ia, article 4 ai act"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

const PAGE_CITATIONS = [
  { name: "AI Act, article 4 compris : le règlement (UE) 2024/1689 en ligne sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Omnibus (UE) 2026/1744 : d'où vient la rédaction actuelle de l'article 4", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Article 4 : la Commission écarte tout certificat et admet un registre interne (27 juillet 2026)", url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers' },
  { name: "CNIL, questions-réponses du 18 juillet 2024 sur le recours à l'IA générative", url: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative' },
  { name: "CNIL, l'espace thématique consacré à l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

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
  { icon: ScrollText,    label: "Charte d'utilisation de l'IA" },
  { icon: ListChecks,    label: '8 rubriques commentées' },
  { icon: Workflow,      label: 'Circuit des demandes' },
  { icon: GraduationCap, label: 'Article 4 et article 50' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "Texte interne de deux à six pages, annexes à part, qui dit aux salariés quels outils d'IA utiliser, avec quelles données, sous quelle relecture, et à qui s'adresser pour le reste" },
  { label: 'À quoi elle sert', value: "Donner un permis écrit : quand l'autorisé est clair, les équipes utilisent les comptes fournis et délaissent leurs comptes personnels" },
  { label: 'Obligatoire ?', value: "Aucun texte ne l'exige sous ce nom. Elle sert de pièce au dossier de maîtrise de l'IA que demande le règlement européen (article 4) et traduit le RGPD en consignes" },
  { label: 'Contenu', value: "Huit rubriques, du périmètre des outils à la révision du document, chacune assortie dans le tableau d'une formulation à discuter" },
  { label: 'Méthode', value: "Cinq étapes, de l'écoute des usages existants à la relecture semestrielle" },
  { label: 'Avec Masteria', value: "Rédaction avec vous en mission de conseil, ou trame construite par vos équipes pendant la formation gouvernance IA (1 980 € HT la journée, certifiée Qualiopi)" },
]

/* ───────── Charte / politique / dispositif (3 cartes de comparaison) ───────── */

const COMPARAISON = [
  {
    icon: ScrollText,
    title: "Charte IA, ou charte d'utilisation de l'IA",
    desc: "Le document que chaque salarié lit et signe. Il nomme les outils fournis, les données qu'on peut leur confier, la relecture attendue et la porte à laquelle frapper pour un usage nouveau. C'est le plus court des trois, et celui que cette page décortique.",
  },
  {
    icon: FileText,
    title: 'Politique IA d’entreprise',
    desc: "Le texte que signe la direction : engagements, principes, partage des responsabilités, lien avec l'AI Act et le RGPD. Il change rarement ; la charte en tire les conséquences pour le travail de tous les jours.",
  },
  {
    icon: Layers,
    title: 'Dispositif de gouvernance IA',
    desc: "Registre des usages, comité, référent, supervision humaine : la mécanique qui fait respecter la charte et la garde à jour. La page gouvernance de l'IA détaille cette mécanique pièce par pièce.",
  },
]

/* ───────── Notions voisines (affichées + reprises dans le DefinedTermSet) ───────── */

const NOTIONS = [
  {
    term: 'Charte éthique IA',
    def: "Déclaration de valeurs (respect des personnes, transparence, dernier mot laissé à l'humain) que certaines organisations rendent publique. Elle oriente les choix ; la charte d'utilisation les met en pratique au poste de travail.",
  },
  {
    term: "Maîtrise de l'IA (littératie IA)",
    def: "Connaissances et savoir-faire dont le personnel a besoin pour utiliser l'IA en sachant ce qu'elle fait bien et ce qu'elle rate. Depuis la réécriture opérée par l'Omnibus au 27 juillet 2026, le règlement IA, en son article 4, attend de chaque organisation des mesures qui aident son personnel à l'acquérir, sans niveau à atteindre.",
  },
]

/* ───────── Pourquoi une charte IA maintenant (4 cartes) ───────── */

const WHY = [
  {
    icon: Scale,
    title: "L'article 4 attend des mesures, la charte en est une",
    desc: "Entré en application le 2 février 2025, l'article 4 du texte européen porte sur la compétence des salariés face à l'IA ; l'Omnibus en a fait une obligation de moyens le 27 juillet 2026. Le même jour, la Commission a écrit dans sa foire aux questions qu'aucun certificat n'est attendu : tenir en interne la liste des formations et des autres actions menées suffit, et une charte diffusée et commentée y prend place.",
    source: "Commission européenne, foire aux questions sur l'article 4",
    sourceUrl: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers',
  },
  {
    icon: ShieldCheck,
    title: 'Le RGPD commence au premier prompt',
    desc: "Un nom de client, un dossier RH ou un numéro de contrat collé dans un assistant, et l'opération devient un traitement de données personnelles, tel que le RGPD le définit (article 4, point 2). La charte dit lesquelles peuvent entrer, et dans quel outil.",
    source: 'CNIL, questions-réponses sur l’IA générative',
    sourceUrl: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative',
  },
  {
    icon: AlertTriangle,
    title: 'Le silence pousse vers les comptes personnels',
    desc: "Sans règle, les salariés ne renoncent pas : ils ouvrent un compte gratuit, dont l'offre peut réutiliser les échanges pour entraîner le modèle, sauf si la personne a désactivé ce réglage. La charte remplace ce silence par une liste d'outils fournis et un interlocuteur.",
  },
  {
    icon: Target,
    title: 'La CNIL conseille des règles écrites',
    desc: "Dans ses questions-réponses du 18 juillet 2024 sur l'IA générative, la CNIL recommande de définir les usages permis et proscrits, de lister les données à ne pas confier à l'outil et de former les utilisateurs à ses limites. Une charte réunit ces trois conseils dans un seul document.",
  },
]

/* ───────── Les 8 rubriques types (tableau de l'ancre sombre) ───────── */

const RUBRIQUES = [
  {
    rubrique: 'Périmètre et outils fournis',
    couvre: "Qui est concerné (salariés, intérimaires, prestataires) et quels outils d'IA l'entreprise met à disposition, avec quel type de compte.",
    exemple: "« Ces règles valent pour toute personne qui travaille pour nous, prestataires compris. Les assistants autorisés sont listés en annexe 1 ; on s'y connecte uniquement avec son compte professionnel. »",
  },
  {
    rubrique: 'Données : ce qui entre, ce qui reste dehors',
    couvre: "Ce que l'on a le droit de soumettre à un assistant et ce qui n'y entre jamais, classé selon la sensibilité des informations.",
    exemple: "« Ne collez jamais dans un assistant un dossier médical, un bulletin de salaire, un numéro de carte bancaire ou un document marqué confidentiel. Les fichiers clients ne vont que dans les outils de l'annexe 1 signalés par un astérisque. »",
  },
  {
    rubrique: 'Relecture humaine',
    couvre: "Qui relit un contenu produit avec l'IA avant qu'il parte, et qui en répond devant le client ou la hiérarchie.",
    exemple: "« Un texte, un calcul ou un visuel produit avec l'IA est relu par la personne qui l'envoie. Elle en répond comme si elle l'avait écrit seule. »",
  },
  {
    rubrique: 'Transparence',
    couvre: "Quand signaler le recours à l'IA, en interne et à l'extérieur, en intégrant les règles de transparence de l'article 50, opposables depuis août 2026.",
    exemple: "« Notre agent conversationnel en ligne annonce dès sa première réponse qu'il est une IA. Une image ou une vidéo réaliste fabriquée par IA porte la mention « contenu généré par IA » avant toute publication. »",
  },
  {
    rubrique: 'Propriété intellectuelle et secret',
    couvre: "Les droits sur les contenus produits, le respect des œuvres et marques de tiers, la confidentialité des prompts maison.",
    exemple: "« Avant de publier un visuel généré, vérifiez qu'il ne reprend ni la marque ni l'œuvre d'un tiers. Les prompts et assistants créés pour le travail sont la propriété de l'entreprise et ne quittent pas ses espaces de travail. »",
  },
  {
    rubrique: 'Incidents',
    couvre: "La conduite à tenir après une erreur : donnée sensible saisie par mégarde, réponse fausse envoyée, usage imprévu.",
    exemple: "« Vous avez saisi une donnée confidentielle par erreur ? Prévenez le référent IA dans la journée. Un signalement fait de bonne foi n'entraîne aucune sanction. »",
  },
  {
    rubrique: 'Formation',
    couvre: "La formation prévue pour chacun, consignée pour prouver ce qui a été fait au titre de l'article 4.",
    exemple: "« Chaque nouvel arrivant suit une heure d'initiation aux outils autorisés avant l'ouverture de son compte. Les référents IA suivent une journée de formation par an. »",
  },
  {
    rubrique: 'Gouvernance et révision',
    couvre: "Qui tient la charte, comment faire valider un outil nouveau, quand le texte est relu.",
    exemple: "« Une demande d'outil ou d'usage nouveau s'adresse au référent IA, qui répond sous deux semaines. Le comité IA relit la charte chaque semestre, et l'annexe 1 à chaque outil validé. »",
  },
]

/* ───────── Méthode de rédaction (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Écouter avant d’écrire',
    desc: "Recensez les usages de l'IA déjà installés dans les équipes, comptes personnels compris : outils, tâches, données en jeu. Un questionnaire anonyme d'une dizaine de questions et trois entretiens par métier donnent une image fidèle ; la charte part de là.",
  },
  {
    num: '02',
    title: 'Commencer par ce qui est permis',
    desc: "Rédigez d'abord la liste des outils fournis et des usages encouragés. Les interdits viennent ensuite, peu nombreux et motivés en une phrase. Préférez les mots des métiers au vocabulaire juridique : « le fichier clients » parle mieux que « les données à caractère personnel ».",
  },
  {
    num: '03',
    title: 'Écrire le circuit des demandes',
    desc: "Nommez un référent IA, fixez un délai de réponse et décrivez le chemin d'une demande : qui la dépose, qui l'instruit, qui tranche. Sans ce circuit, le premier outil utile absent de la liste fait sauter la règle.",
  },
  {
    num: '04',
    title: 'Présenter, faire signer, intégrer à l’arrivée',
    desc: "Présentez la charte en réunion d'équipe avec trois cas tirés de l'écoute, recueillez un accusé de lecture et glissez le document dans le parcours des nouveaux arrivants. Ces traces alimentent le registre interne que la Commission juge suffisant pour l'article 4.",
  },
  {
    num: '05',
    title: 'Relire tous les six mois',
    desc: "Fixez une revue semestrielle, tenez l'annexe des outils à jour à chaque validation et suivez deux chiffres : les demandes reçues par le référent, les incidents signalés. Une charte que personne ne modifie a cessé de décrire le travail.",
  },
]

/* ───────── Les erreurs qui rendent une charte inutile (4 cartes) ───────── */

const ERREURS = [
  {
    icon: Ban,
    title: 'Tout interdire',
    desc: "Une charte qui proscrit presque tout ne fait pas disparaître les usages : elle les envoie vers les comptes personnels, là où l'entreprise ne voit plus rien. Écrivez l'autorisé d'abord ; un interdit rare et expliqué est respecté.",
  },
  {
    icon: Copy,
    title: 'Copier un modèle trouvé en ligne',
    desc: "Le modèle générique cite des outils que vos équipes n'ont pas et ignore les tâches qu'elles accomplissent. Personne ne s'y reconnaît, le fichier dort dans un dossier partagé. Les formulations de cette page sont faites pour être réécrites avec vos métiers.",
  },
  {
    icon: Workflow,
    title: 'Oublier la porte d’entrée',
    desc: "Une liste figée laisse sans interlocuteur le salarié qui découvre un outil utile ; il s'en servira quand même. Un référent nommé et un délai de réponse annoncé font de la charte un outil de travail.",
  },
  {
    icon: RefreshCw,
    title: 'Laisser vieillir le texte',
    desc: "Une charte qui cite un outil disparu perd son crédit, et ses autres règles avec elle. Les GPTs personnalisés, que ChatGPT supprime le 11 décembre 2026 quelle que soit l'offre, en donnent l'exemple : toute charte qui les mentionne doit changer d'ici là.",
  },
]

/* ───────── Études de cas citées (faits de src/data/etudes-de-cas.js et missions-formation.js) ───────── */

const CAS = [
  {
    href: '/etudes-de-cas-ia#photovoltaique',
    titre: 'Une PME photovoltaïque met la charte au rang des décisions de direction',
    texte: "Chez un distributeur de trois personnes, le diagnostic présenté en septembre 2026 soumet trois décisions à la direction : l'outil commun, les chantiers prioritaires et la charte d'usage. Le cadre prévu tient en peu de choses : une charte signée avant la formation prévue dans leurs locaux en octobre, un référent qui gère les comptes et collecte les erreurs, un rendez-vous chaque mois.",
  },
  {
    href: '/etudes-de-cas-ia#mission-franchise-gemini',
    titre: 'Les administrateurs d’un réseau de franchise repartent avec leur charte',
    texte: "Au siège d'un réseau de franchisés en B2B passé à Gemini, une journée en classe virtuelle a réuni les deux administrateurs de Google Workspace autour de la console, de l'AI Act, du RGPD et de la charte. Leur feuille de route sur trois mois prévoit de publier le texte, puis d'étendre ces règles aux franchisés.",
  },
  {
    href: '/etudes-de-cas-ia#mission-gerance-cabinet',
    titre: 'Un gérant écrit sa charte personnelle avant le premier exercice',
    texte: "Formé seul et à distance en août 2026, le gérant d'une structure de géomètres-experts d'environ vingt personnes a ouvert ses deux jours par une charte d'usage personnelle. Ses connecteurs Outlook ont été réglés dans le même esprit : les brouillons préparés par Claude sont relus avant tout envoi.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'La charte IA est-elle une obligation légale ?',
    a: "Aucun texte n'exige un document intitulé charte IA. Deux obligations la rendent pourtant précieuse. La première tient à l'article 4 de l'AI Act : en application dès février 2025, réécrit par l'Omnibus l'été dernier, il demande à chaque organisation des mesures qui aident son personnel à maîtriser l'IA. La Commission ajoute qu'il ne faut aucun certificat et qu'une trace interne des actions suffit. La seconde vient du RGPD, qui s'applique à chaque donnée personnelle saisie dans un assistant. Une charte diffusée, expliquée et signée documente le premier point et traduit le second en consignes.",
  },
  {
    q: 'Charte IA et charte éthique : quelle différence ?',
    a: "La charte d'utilisation est un mode d'emploi : quels outils, quelles données, quelle relecture, quel circuit pour un usage nouveau. La charte éthique énonce des valeurs : respect des personnes, transparence, dernier mot laissé à l'humain. Beaucoup d'entreprises réunissent les deux, avec une page de principes en ouverture puis les règles pratiques. S'il faut choisir un point de départ, prenez la charte d'utilisation : les salariés attendent des consignes applicables lundi matin. Notre page IA responsable traite le versant éthique.",
  },
  {
    q: 'Qui rédige la charte IA ?',
    a: "Un binôme donne les meilleurs textes : un porteur côté direction (DSI, juridique ou direction générale selon la taille) et des contributeurs côté métiers, qui apportent les tâches telles qu'elles se font. Le DPO relit la rubrique données. Confiée au seul service juridique, la charte devient défensive et se fait contourner ; confiée aux seuls métiers, elle oublie des obligations. Un regard extérieur apporte des formulations éprouvées et la connaissance des outils ; la validation finale reste interne, parce que le texte engage l'entreprise.",
  },
  {
    q: "Que dit le RGPD sur ce qu'on peut saisir dans un assistant ?",
    a: "Le RGPD ne dresse pas de liste d'outils ; il impose une base légale, une finalité et le minimum de données nécessaire pour chaque traitement. Appliqué à un assistant, cela donne trois consignes que la charte doit écrire : passer par une offre pro adossée à un contrat de traitement, ne saisir que le strict nécessaire, tenir les catégories sensibles hors des outils non validés. Les questions-réponses de la CNIL du 18 juillet 2024 sur l'IA générative en donnent la lecture officielle ; les articles en jeu sont repris sur la page IA et RGPD.",
  },
  {
    q: "Combien de pages pour une charte IA d'entreprise ?",
    a: "De deux à six pages pour le corps du texte, avec la liste des outils et des catégories de données en annexes. Au-delà, plus personne ne lit et le document perd son effet sur les pratiques. Les annexes changent par un circuit allégé, ce qui évite de refaire valider toute la charte à chaque nouvel outil. Une structure qui fonctionne : une page de principes, les huit rubriques sur trois à quatre pages, puis les annexes. Chaque règle gardée doit pouvoir être citée de mémoire par un salarié.",
  },
  {
    q: 'Faut-il faire signer la charte et consulter le CSE ?',
    a: "La signature ou l'accusé de lecture prouve que chaque salarié a reçu les règles, ce qui pèse dans le dossier de maîtrise de l'IA comme en cas d'incident. Pour qu'une règle puisse fonder une sanction, la voie habituelle consiste à en faire une adjonction au règlement intérieur, avec l'avis du CSE et les formalités prévues par le Code du travail (articles L1321-4 et L1321-5). À partir de cinquante salariés, l'arrivée d'un outil d'IA peut aussi relever de l'information-consultation du CSE prévue quand une technologie nouvelle entre dans l'entreprise (article L2312-8). Votre conseil juridique tranchera selon votre situation.",
  },
  {
    q: 'Où trouver un exemple de charte IA ?',
    a: "Le tableau de cette page en propose un, rubrique par rubrique : huit formulations à recopier puis à adapter à vos outils et à vos métiers. Un modèle générique pris en ligne sert au mieux de liste de contrôle, pour vérifier qu'aucune rubrique ne manque. Le texte qui marche se rédige à partir des usages de vos équipes, avec vos cas limites et votre circuit de validation ; les cinq étapes de la méthode décrite plus haut couvrent ce chemin.",
  },
  {
    q: 'La fin des GPTs personnalisés change-t-elle quelque chose à la charte ?',
    a: "Oui, si votre charte ou ses annexes les citent. OpenAI met fin aux GPTs personnalisés : ils disparaissent le 11 décembre 2026 sur toutes ses offres, et tiennent jusqu'au 11 février 2027 dans les espaces Enterprise ayant obtenu un sursis. Ils migrent vers des plugins, où les instructions deviennent une compétence. Mettez à jour l'annexe des outils, renommez les assistants concernés et vérifiez que les règles de partage s'appliquent aux nouveaux objets. Un circuit allégé pour les annexes évite de rouvrir tout le texte pour ce changement.",
  },
]

/* ───────── Glossaire (DefinedTermSet, ancrage d'entités) ───────── */

const GLOSSARY = [
  {
    term: 'Charte IA',
    def: "Document interne qui dit aux salariés comment se servir de l'intelligence artificielle au travail : outils fournis, données permises et interdites, relecture humaine, transparence, propriété des contenus, incidents et circuit des demandes nouvelles.",
  },
  {
    term: 'Politique IA',
    def: "Texte signé par la direction qui pose les engagements, les principes et le partage des responsabilités de l'organisation face à l'IA. La charte en est la traduction pour le poste de travail.",
  },
  NOTIONS[0],
  NOTIONS[1],
]

/* ───────── JSON-LD ───────── */

/* Article : auteur identifié (Mathias Nizan) et dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "Charte IA d'entreprise : ce qu'elle doit contenir, rubrique par rubrique",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-02',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Charte IA', "Charte d'utilisation de l'IA", 'Politique IA d’entreprise', "Maîtrise de l'IA", 'AI Act'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire de la charte IA d'entreprise",
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

export default function CharteIAEntreprisePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Définition / Pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Gouvernance de l'IA", slug: 'gouvernance-ia' },
    { name: "Charte IA d'entreprise", slug: SLUG },
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
        datePublished="2026-07-02"
        dateModified="2026-10-07"
        extraJsonLd={[articleJsonLd, definedTermSetJsonLd]}
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
            <Link to="/gouvernance-ia" style={{ color: '#94A3B8' }}>Gouvernance de l'IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Charte IA d'entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ScrollText size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Le document qui encadre l'usage de l'IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Charte IA d'entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce qu'elle doit contenir, rubrique par rubrique</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui rédige ces chartes avec les clients de Masteria · texte revu le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une charte IA d'entreprise dit à chaque salarié quels outils d'intelligence artificielle utiliser, avec quelles données, sous quelle relecture, et à qui demander le reste. <strong style={{ color: '#fff', fontWeight: 700 }}>Bien écrite, elle ramène les usages dans les comptes de l'entreprise : c'est le premier levier d'adoption.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Vous trouverez ici ce que contient d'ordinaire une charte d'usage de l'IA, une formulation proposée pour chacune des huit rubriques, la méthode de rédaction en cinq étapes et les quatre erreurs qui condamnent le texte. Masteria, cabinet d'IA né à Lyon en 2022, écrit ces chartes aux côtés de ses clients puis forme ceux qui devront les appliquer.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#contenu" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire les 8 rubriques
            </a>
          </div>

          {/* tags */}
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
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

      {/* ── QU'EST-CE QU'UNE CHARTE IA ? (éditorial asymétrique) ── */}
      <section id="definition" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Définition</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce qu'une charte IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une charte IA est le texte interne, de deux à six pages, qui dit aux salariés comment se servir de l'intelligence artificielle au travail : outils fournis, données permises et interdites, relecture humaine, transparence, propriété des contenus et marche à suivre pour un usage nouveau. Chacun sait ce qu'il peut faire seul et à qui demander pour le reste.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le mot recouvre des documents de nature différente. Les trois cartes situent la charte entre la déclaration de la direction et la mécanique qui la fait appliquer.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {COMPARAISON.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Notions voisines : ancrage d'entités (charte éthique IA, maîtrise de l'IA) */}
              <h3 style={{ ...h3Style, fontSize: 18, margin: '32px 0 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <BookOpen size={19} color={c} strokeWidth={2.2} aria-hidden="true" /> Deux termes qu'on croise en rédigeant
              </h3>
              <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
                {NOTIONS.map((g, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>

              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Rôles, comité et registre qui entourent la charte sont décrits sur notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link>. Les valeurs qui l'inspirent, et la façon de les vérifier, sur la page <Link to="/ia-responsable" style={aStyle}>IA responsable</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UNE CHARTE IA MAINTENANT ? (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi maintenant</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi une charte IA maintenant ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Parce que trois textes convergent : le règlement IA attend des actions de formation et d'accompagnement (article 4), le RGPD couvre chaque donnée personnelle saisie dans un assistant, et la CNIL recommande depuis juillet 2024 des règles internes écrites. Pendant ce temps, les comptes personnels se multiplient. La charte range ces exigences dans un texte que chacun comprend.</strong>
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
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: card.source ? '0 0 10px' : 0 }}>{card.desc}</p>
                    {card.source && (
                      <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                        Source : <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{card.source}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour comprendre le règlement lui-même et classer vos usages, voyez notre <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link>. Pour la rubrique données, la page <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link> reprend les articles en jeu et la lecture de la CNIL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 8 RUBRIQUES TYPES (ancre sombre unique) ── */}
      <section id="contenu" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Contenu type</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Que doit contenir une charte IA d'entreprise ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une charte IA d'entreprise tient en huit rubriques : périmètre et outils fournis, données, relecture humaine, transparence, propriété intellectuelle et secret, incidents, formation, gouvernance et révision. La plus utile est la dernière : le circuit qui fait entrer un outil nouveau évite que la charte soit contournée au premier besoin imprévu.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Chaque formulation est une base de discussion, à reprendre en atelier avec vos métiers. Recopiez-les librement : leur valeur tient à l'adaptation à vos outils, à vos données et à votre droit du travail.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Les huit rubriques d'une charte IA d'entreprise et une formulation proposée pour chacune" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Rubrique</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Ce qu'elle règle</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '48%' }}>Formulation proposée</th>
                </tr>
              </thead>
              <tbody>
                {RUBRIQUES.map((row, i) => (
                  <tr key={row.rubrique} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.rubrique}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.couvre}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#E2E8F0', lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.exemple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            Formulations proposées pour ouvrir la discussion, à valider avec vos parties prenantes. Pour les obligations, la référence reste le texte de l'AI Act, consultable sur <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2, display: 'inline-flex', alignItems: 'center', gap: 5 }}>EUR-Lex <ExternalLink size={13} strokeWidth={2.2} aria-hidden="true" /></a>, et pour les données personnelles la doctrine de la <a href="https://www.cnil.fr/fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2, display: 'inline-flex', alignItems: 'center', gap: 5 }}>CNIL <ExternalLink size={13} strokeWidth={2.2} aria-hidden="true" /></a>.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE DE RÉDACTION (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment rédiger une charte IA ?
          </h2>

          <p style={answerStyle}>
            <strong>La rédaction d'une charte IA suit cinq étapes : écouter les usages existants, écrire d'abord ce qui est permis, décrire le circuit des demandes, présenter et faire signer le texte, puis le relire tous les six mois. Comptez quelques semaines entre l'écoute et la diffusion, ateliers avec les métiers compris.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            La première étape décide de la qualité de toutes les autres. Une charte rédigée loin des équipes décrit un travail qui n'existe pas.
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

      {/* ── LES ERREURS QUI RENDENT UNE CHARTE INUTILE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Les pièges</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quatre erreurs qui font d'une charte un texte mort
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Quatre erreurs condamnent une charte IA : tout interdire, copier un modèle générique, oublier le circuit des demandes et laisser le texte vieillir. Dans les quatre cas, le document cesse de décrire le travail et les équipes cessent de le lire.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7, maxWidth: 880 }}>
            Elles ont une racine commune : un texte écrit d'abord pour couvrir l'entreprise, que les salariés reçoivent comme un signe de défiance. Les quatre correctifs tiennent en une page.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {ERREURS.map(card => (
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
            Une charte qui échappe à ces pièges devient la porte d'entrée de tout le reste : registre des usages, comité, supervision humaine. Notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> montre comment ces pièces s'y raccordent.
          </p>

          {/* Textes officiels cités : liens d'autorité suivis (SEO + GEO) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Les textes et lectures officielles derrière cette page
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {PAGE_CITATIONS.map(r => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 4 }} aria-hidden="true" /> {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SUR LE TERRAIN (cas anonymisés, remplace CaseStudyCards) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois chartes nées d'une mission ou d'une formation
          </h2>
          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Une PME, le siège d'un réseau, un dirigeant seul : la charte change d'échelle, la logique reste la même. Les trois récits ci-dessous sont tirés des cas que nous publions, anonymisés.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.href} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ ...h3Style, fontSize: 16 }}>{cas.titre}</h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>{cas.texte}</p>
                <Link to={cas.href} style={{ ...aStyle, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Le cas en détail
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Charte IA : ce que l'on nous demande le plus
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une rubrique vous pose problème, ou votre CSE attend un projet de texte ?
              </p>
              <Link to={RDV} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Parlons-en pendant le cadrage
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

      {/* ── CONSEIL & FORMATION (bandeau) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Deux façons de l'écrire</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Écrire votre charte IA avec Masteria, ou la construire en formation
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                En mission de conseil, nous écrivons la charte avec vous : écoute des usages, ateliers avec les métiers, rédaction, présentation aux équipes. Le forfait est fixé après le cadrage, et ce conseil reste à votre charge, hors du champ de l'OPCO. En formation, la journée gouvernance IA fait construire à vos équipes la trame de leur propre charte, avec registre des usages et comité en appui ; elle coûte 1 980 € HT, est couverte par la certification Qualiopi que détient Masteria, et son financement peut être demandé à l'OPCO dont dépend votre branche.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to={RDV} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Écrire votre charte avec nous
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-gouvernance-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  La journée gouvernance IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Autour de la charte
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Le texte s'appuie sur des rôles, des données bien tenues et des équipes formées : chaque page ci-dessous en traite un aspect.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Rôles', desc: "Qui tient la charte, qui instruit les demandes, qui répond de chaque outil : la mission de conseil qui pose ces rôles." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Formation', desc: "Sept heures pour bâtir registre, trame de charte et comité, à partir des outils que vous utilisez." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "Savoir ce que le règlement exige, usage par usage, et ce que l'article 4 attend de l'entreprise." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Bases légales, analyse d'impact, garanties des éditeurs : de quoi écrire une rubrique données solide." },
              { label: 'IA responsable', href: '/ia-responsable', tag: 'Éthique', desc: "Les valeurs qu'une charte éthique affiche, et les preuves qui permettent de les tenir." },
              { label: 'Formation CSE et IA', href: '/formation-cse-ia', tag: 'Dialogue social', desc: "Préparer les élus à examiner un projet d'outil d'IA et le texte qui l'encadre." },
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
                  <ArrowRight size={15} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Les formulations de cette page viennent des chartes que Mathias Nizan a rédigées avec des PME, des sièges de réseau et des dirigeants formés seuls. Il les a relues le 7 octobre 2026 à la lumière de l'Omnibus et de la fin annoncée des GPTs ; son parcours est présenté sur <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Une charte écrite à partir de ce que font vos équipes
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Racontez-nous les outils déjà utilisés chez vous et les règles en place, écrites ou tacites. En une demi-heure, nous délimitons le périmètre de la charte, les personnes à réunir et le calendrier jusqu'à la signature. Ce plan vous reste acquis, que vous rédigiez ensuite avec nous ou seuls.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Charte écrite avec vos métiers · référent et circuit des demandes · AI Act et RGPD · France et international
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
