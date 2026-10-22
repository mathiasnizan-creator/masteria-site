import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/collectivites.js'

/* Route /formation-ia-collectivites : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIACollectivitesPage() {
  return <MetierPage enrichi={enrichi} />
}
