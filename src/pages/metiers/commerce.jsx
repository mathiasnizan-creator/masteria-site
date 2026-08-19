import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/commerce.js'

/* Route /formation-ia-commerce : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIACommercePage() {
  return <MetierPage enrichi={enrichi} />
}
