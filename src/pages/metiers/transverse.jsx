import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/transverse.js'

/* Route /formation-ia-transverse : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIATransversePage() {
  return <MetierPage enrichi={enrichi} />
}
