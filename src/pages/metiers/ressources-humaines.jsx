import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/ressources-humaines.js'

/* Route /formation-ia-ressources-humaines : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIARessourcesHumainesPage() {
  return <MetierPage enrichi={enrichi} />
}
