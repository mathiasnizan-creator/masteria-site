import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/seo.js'

/* Route /formation-ia-seo : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIASeoPage() {
  return <MetierPage enrichi={enrichi} />
}
