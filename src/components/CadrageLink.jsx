import { Link } from 'react-router-dom'
import { BOOKING_URL, CADRAGE_HREF } from '../data/offre-entree'

/*
 * Lien « 30 minutes de cadrage » : page de réservation si BOOKING_URL est
 * renseignée, sinon formulaire projet avec le créneau présélectionné.
 * Usage : <CadrageLink style={…}>Réserver 30 minutes de cadrage</CadrageLink>
 */
export default function CadrageLink({ children, style, ...props }) {
  if (BOOKING_URL) {
    return (
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={style} {...props}>
        {children}
      </a>
    )
  }
  return <Link to={CADRAGE_HREF} style={style} {...props}>{children}</Link>
}
