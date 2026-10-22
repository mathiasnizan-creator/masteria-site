import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/securite.js'

/* Route /formation-ia-securite : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIASecuritePage() {
  return <MetierPage enrichi={enrichi} />
}
