import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            E-comemerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/category/smartwatch'}>
                  Relojes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/category/smartphone'}>
                  Celulares
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/category/tablet'}>
                  Tablets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/category/notebook'}>
                  Notebooks
                </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar
