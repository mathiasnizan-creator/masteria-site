import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/sante.js'

/* Route /formation-ia-sante : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIASantePage() {
  return <MetierPage enrichi={enrichi} />
}
