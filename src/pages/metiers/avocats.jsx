import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/avocats.js'

/* Route /formation-ia-avocats : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAAvocatsPage() {
  return <MetierPage enrichi={enrichi} />
}
