import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/marche-public.js'

/* Route /formation-ia-marche-public : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAMarchePublicPage() {
  return <MetierPage enrichi={enrichi} />
}
