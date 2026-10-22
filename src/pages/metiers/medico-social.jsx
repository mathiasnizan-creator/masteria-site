import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/medico-social.js'

/* Route /formation-ia-medico-social : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAMedicoSocialPage() {
  return <MetierPage enrichi={enrichi} />
}
