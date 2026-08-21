import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/tourisme.js'

/* Route /formation-ia-tourisme : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIATourismePage() {
  return <MetierPage enrichi={enrichi} />
}
