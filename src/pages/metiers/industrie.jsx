import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/industrie.js'

/* Route /formation-ia-industrie : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAIndustriePage() {
  return <MetierPage enrichi={enrichi} />
}
