import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/service-client.js'

/* Route /formation-ia-service-client : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAServiceClientPage() {
  return <MetierPage enrichi={enrichi} />
}
