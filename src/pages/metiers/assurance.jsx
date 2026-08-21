import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/assurance.js'

/* Route /formation-ia-assurance : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAAssurancePage() {
  return <MetierPage enrichi={enrichi} />
}
