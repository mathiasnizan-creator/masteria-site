import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/finance.js'

/* Route /formation-ia-finance : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAFinancePage() {
  return <MetierPage enrichi={enrichi} />
}
