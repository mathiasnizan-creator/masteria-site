/**
 * Langue de la rubrique Veille IA.
 *
 * Les pages de veille servent deux langues à partir des mêmes composants :
 * le français sous /veille-ia, l'anglais sous /en/ai-watch. Dupliquer les
 * composants garantirait une dérive à la première évolution, donc tout passe
 * par ce dictionnaire.
 *
 * Les données suivent la même logique : /veille-data/*.json en français,
 * /veille-data/en/*.json en anglais, écrits par le même publish.py --lang.
 */

export const VEILLE_LANGS = ['fr', 'en']

/** Racine des routes selon la langue. */
export const baseVeille = (lang) => (lang === 'en' ? '/en/ai-watch' : '/veille-ia')

/** Racine des données selon la langue. */
export const baseData = (lang) => (lang === 'en' ? '/veille-data/en' : '/veille-data')

/** Slug SEO (sans slash initial) d'une route de veille. */
export const slugVeille = (lang, suite = '') => {
  const b = baseVeille(lang).slice(1)
  return suite ? `${b}/${suite}` : b
}

/**
 * Les deux URL d'une même page, pour les balises hreflang. Google a besoin
 * du couple complet sur chaque version, plus x-default.
 */
export const alternatesVeille = (suite = '') => ({
  fr: slugVeille('fr', suite),
  en: slugVeille('en', suite),
})

const MOIS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
  'août', 'septembre', 'octobre', 'novembre', 'décembre']
const MOIS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']
const JOURS_FR = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
const JOURS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/** « 7 octobre 2026 » ou « 7 October 2026 » depuis une date ISO. */
export function dateVeille(iso, lang = 'fr') {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '')
  if (!m) return ''
  const mois = (lang === 'en' ? MOIS_EN : MOIS_FR)[Number(m[2]) - 1]
  return `${Number(m[3])} ${mois} ${m[1]}`
}

/**
 * « Octobre 2026 » ou « October 2026 » depuis une clé AAAA-MM. Les données
 * anglaises portent un moisAffiche en français : le libellé se calcule ici.
 */
export function moisVeille(cle, lang = 'fr') {
  const m = /^(\d{4})-(\d{2})$/.exec(cle || '')
  if (!m) return ''
  const mois = (lang === 'en' ? MOIS_EN : MOIS_FR)[Number(m[2]) - 1]
  return `${mois.charAt(0).toUpperCase()}${mois.slice(1)} ${m[1]}`
}

/** Jour ouvré suivant une date ISO : « jeudi 8 octobre » ou « Thursday 8 October ». */
export function jourOuvreSuivant(iso, lang = 'fr') {
  const d = new Date(iso + 'T12:00:00')
  do { d.setDate(d.getDate() + 1) } while (d.getDay() === 0 || d.getDay() === 6)
  const en = lang === 'en'
  return `${(en ? JOURS_EN : JOURS_FR)[d.getDay()]} ${d.getDate()} ${(en ? MOIS_EN : MOIS_FR)[d.getMonth()]}`
}

/** Valeur schema.org inLanguage d'une page de la rubrique. */
export const inLanguageVeille = (lang) => (lang === 'en' ? 'en' : 'fr-FR')

const FR = {
  code: 'fr',
  htmlLang: 'fr-FR',
  autre: 'en',
  autreLabel: 'English',
  autreTitre: 'Read this edition in English',
  switchAria: 'Changer de langue',

  rubrique: 'Veille IA',
  accueil: 'Accueil',
  chargement: 'Chargement…',
  indisponibleTitre: "Cette édition n'est pas disponible",
  indisponibleTexte: "L'édition demandée est introuvable. Elle a peut-être été retirée, ou l'adresse est incorrecte.",
  retourIndex: 'Voir la dernière édition',

  sommaire: 'Au sommaire',
  aLaUne: 'À la une',
  detailDuJour: 'Le détail du jour',
  filDuJour: 'Le fil du jour',
  recherche: 'Recherche',
  resteActu: "Le reste de l'actualité",
  enBref: 'En bref',
  analyse: "L'analyse Masteria",
  analyseDuJour: "L'analyse du jour",

  methode: 'Méthode',
  methodeTitre: 'Comment cette édition a été produite',
  poursuivre: 'Poursuivre la lecture',
  editionPrecedente: 'Édition précédente',
  editionSuivante: 'Édition suivante',
  toutesPublications: 'Toutes les publications',
  editionsPrecedentes: 'Les éditions précédentes',
  fluxRss: 'Flux RSS',
  lireArticles: 'Lire nos articles de fond',
  signalerProbleme: 'Nous signaler le problème',

  minutes: 'min de lecture',
  actualites: 'actualités',
  sources: 'sources',
  publieLe: 'Publié le',
  sourcesConsultees: 'Sources consultées',

  // Gabarit des éditions datées
  editionDu: (d) => `Édition du ${d}`,
  titreH1: (d) => `Veille IA du ${d}`,
  signature: 'Équipe éditoriale Masteria, dirigée par',
  heure: (h) => ` à ${h}`,
  lireAnalyse: "Lire l'analyse Masteria",
  lireActus: 'Lire les actualités du jour',
  reprisAnalyse: "Repris dans l'analyse",
  actualitesDu: (d) => `Les actualités du ${d}`,
  nbActualites: (n) => `${n} actualité${n > 1 ? 's' : ''}`,
  equipesTech: 'Pour les équipes techniques',
  signee: 'Signée',
  actualitesCitees: 'Les actualités citées',
  methodeTitreChiffres: (lus, gardes) => `${lus} articles lus, ${gardes} retenus`,
  methodePhrase: (jour, flux) => `Sélection faite le matin du ${jour} parmi ${flux} flux d'information.`,
  methodePhraseCourte: (jour) => `Sélection faite le ${jour}.`,
  methodeLien: 'Notre méthode',
  sourcesDuJour: 'Sources du jour',
  editionsVoisines: 'Les éditions voisines',
  suiteRubrique: 'La suite de la rubrique',
  toutesEditions: 'Toutes les éditions',
  toutesEditionsVeille: 'Toutes les éditions de la veille',
  prochaineEdition: (j) => `Prochaine édition : ${j}.`,
  ctaTitre: (d) => `Ce que l'édition du ${d} change pour vos équipes`,
  ctaSuite: 'Ce sujet touche vos équipes ? Parlons-en.',
  roleDirection: 'Dirige la rédaction de la veille',
  photoAlt: 'Mathias Nizan, fondateur de Masteria',
  ctaBouton: 'Parler de votre projet',
  indisponibleAide: "Elle a peut-être été retirée, ou l'adresse comporte une erreur.",
  voirEditions: 'Voir les éditions publiées',
}

const EN = {
  code: 'en',
  htmlLang: 'en',
  autre: 'fr',
  autreLabel: 'Français',
  autreTitre: 'Lire cette édition en français',
  switchAria: 'Change language',

  rubrique: 'AI Watch',
  accueil: 'Home',
  chargement: 'Loading…',
  indisponibleTitre: 'This edition is not available',
  indisponibleTexte: 'The edition you asked for could not be found. It may have been removed, or the address is wrong.',
  retourIndex: 'See the latest edition',

  sommaire: 'In this edition',
  aLaUne: 'Top story',
  detailDuJour: "Today's detail",
  filDuJour: "Today's stories",
  recherche: 'Research',
  resteActu: 'The rest of the news',
  enBref: 'In brief',
  analyse: 'The Masteria read',
  analyseDuJour: "Today's read",

  methode: 'Method',
  methodeTitre: 'How this edition was produced',
  poursuivre: 'Keep reading',
  editionPrecedente: 'Previous edition',
  editionSuivante: 'Next edition',
  toutesPublications: 'All editions',
  editionsPrecedentes: 'Previous editions',
  fluxRss: 'RSS feed',
  lireArticles: 'Read our in-depth articles',
  signalerProbleme: 'Report the problem',

  minutes: 'min read',
  actualites: 'stories',
  sources: 'sources',
  publieLe: 'Published on',
  sourcesConsultees: 'Sources reviewed',

  // Dated edition template
  editionDu: (d) => `${d} edition`,
  titreH1: (d) => `AI Watch, ${d}`,
  signature: 'Masteria editorial team, led by',
  heure: (h) => `, ${String(h).replace('h', ':')}`,
  lireAnalyse: 'Read the Masteria take',
  lireActus: "Read today's stories",
  reprisAnalyse: 'Cited in the analysis',
  actualitesDu: (d) => `Stories from ${d}`,
  nbActualites: (n) => `${n} stor${n > 1 ? 'ies' : 'y'}`,
  equipesTech: 'For technical teams',
  signee: 'Signed',
  actualitesCitees: 'Stories cited',
  methodeTitreChiffres: (lus, gardes) => `${lus} articles read, ${gardes} kept`,
  methodePhrase: (jour, flux) => `Selected on the morning of ${jour} from ${flux} news feeds.`,
  methodePhraseCourte: (jour) => `Selected on ${jour}.`,
  methodeLien: 'Our method (in French)',
  sourcesDuJour: "Today's sources",
  editionsVoisines: 'Neighbouring editions',
  suiteRubrique: 'More from AI Watch',
  toutesEditions: 'All editions',
  toutesEditionsVeille: 'All AI Watch editions',
  prochaineEdition: (j) => `Next edition: ${j}.`,
  ctaTitre: (d) => `What the ${d} edition means for your teams`,
  ctaSuite: "Does it touch your teams? Let's talk.",
  roleDirection: 'Editor of AI Watch',
  photoAlt: 'Mathias Nizan, founder of Masteria',
  ctaBouton: 'Contact us',
  indisponibleAide: 'It may have been removed, or the address contains an error.',
  voirEditions: 'See the published editions',
}

const TABLE = { fr: FR, en: EN }

/** Libellés d'une langue, français par défaut. */
export const strings = (lang) => TABLE[lang] || FR

export default strings
