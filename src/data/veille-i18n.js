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
}

const TABLE = { fr: FR, en: EN }

/** Libellés d'une langue, français par défaut. */
export const strings = (lang) => TABLE[lang] || FR

export default strings
