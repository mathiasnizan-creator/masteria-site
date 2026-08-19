import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/assistante.js'

/* Route /formation-ia-assistante : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAAssistantePage() {
  return <MetierPage enrichi={enrichi} />
}
