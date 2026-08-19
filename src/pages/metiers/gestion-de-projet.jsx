import MetierPage from '../MetierPage'
import enrichi from '../../data/metiers/gestion-de-projet.js'

/* Route /formation-ia-gestion-de-projet : le template MetierPage + les données de ce seul métier,
   pour que chaque page ne charge que son contenu (chunk séparé). */
export default function FormationIAGestionDeProjetPage() {
  return <MetierPage enrichi={enrichi} />
}
