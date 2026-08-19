import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/pedagogique.js'

/* Route /formation-ia-pedagogique : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAPedagogiquePage() {
  return <MetierPage enrichi={enrichi} />
}
