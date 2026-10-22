import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/tpe.js'

/* Route /formation-ia-tpe : le template MetierPage + les données de ce seul public,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIATPEPage() {
  return <MetierPage enrichi={enrichi} />
}
