import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/communication.js'

/* Route /formation-ia-communication : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIACommunicationPage() {
  return <MetierPage enrichi={enrichi} />
}
