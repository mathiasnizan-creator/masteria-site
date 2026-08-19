import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/management.js'

/* Route /formation-ia-management : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAManagementPage() {
  return <MetierPage enrichi={enrichi} />
}
