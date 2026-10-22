import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/architectes.js'

/* Route /formation-ia-architectes : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAArchitectesPage() {
  return <MetierPage enrichi={enrichi} />
}
