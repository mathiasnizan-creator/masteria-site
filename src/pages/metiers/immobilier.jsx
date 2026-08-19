import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/immobilier.js'

/* Route /formation-ia-immobilier : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAImmobilierPage() {
  return <MetierPage enrichi={enrichi} />
}
