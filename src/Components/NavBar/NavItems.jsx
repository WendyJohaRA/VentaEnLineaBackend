
import { Link } from 'react-router-dom'

export const NavItems = ( {navItems} ) => {
  return (
    navItems.map( ( {ruta, icono, texto }) => {
        return (
          <li className="nav-item " key = { texto }>
          <Link className="nav-link  " aria-current="page" to={ ruta }>
            <i className={ icono}></i>
            { texto }
          </Link>
        </li>
        )
      })
  )
}
