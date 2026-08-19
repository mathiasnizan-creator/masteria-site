import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/achats.js'

/* Route /formation-ia-achats : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAAchatsPage() {
  return <MetierPage enrichi={enrichi} />
}
