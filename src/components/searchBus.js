/** Canal d'ouverture de la recherche (SearchPalette), utilisable depuis n'importe quel composant. */
export const SEARCH_OPEN_EVENT = 'masteria:search';

export function openSearch() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(SEARCH_OPEN_EVENT));
}
