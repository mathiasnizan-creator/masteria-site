import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/organismes-formation.js'

/* Route /formation-ia-organismes-formation : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAOrganismesFormationPage() {
  return <MetierPage enrichi={enrichi} />
}
