import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/enseignants.js'

/* Route /formation-ia-enseignants : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAEnseignantsPage() {
  return <MetierPage enrichi={enrichi} />
}
