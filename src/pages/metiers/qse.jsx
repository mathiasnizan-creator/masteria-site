import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/qse.js'

/* Route /formation-ia-qse : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAQsePage() {
  return <MetierPage enrichi={enrichi} />
}
