import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/commercial.js'

/* Route /formation-ia-commercial : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIACommercialPage() {
  return <MetierPage enrichi={enrichi} />
}
