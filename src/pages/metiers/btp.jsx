import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/btp.js'

/* Route /formation-ia-btp : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIABtpPage() {
  return <MetierPage enrichi={enrichi} />
}
