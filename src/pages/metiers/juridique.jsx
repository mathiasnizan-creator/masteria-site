import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/juridique.js'

/* Route /formation-ia-juridique : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAJuridiquePage() {
  return <MetierPage enrichi={enrichi} />
}
