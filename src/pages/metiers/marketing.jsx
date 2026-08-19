import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/marketing.js'

/* Route /formation-ia-marketing : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAMarketingPage() {
  return <MetierPage enrichi={enrichi} />
}
