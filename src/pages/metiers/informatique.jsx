import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/informatique.js'

/* Route /formation-ia-informatique : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAInformatiquePage() {
  return <MetierPage enrichi={enrichi} />
}
