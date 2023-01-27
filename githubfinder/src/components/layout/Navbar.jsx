import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
  return (
    <nav className="navbar mb-4 bg-dark text-white">
        <div className="container mx-auto">
          <div className="d-flex-none px-2 mx-2">
            <FaGithub className="d-inline pe-2 fs-3"/>
            <Link to="/" className="text-lg fw-bold text-center" style={{textDecoration: 'none', color: 'white'}}> 
                    {title}
              </Link>
          </div>

          <div className="d-flex-1 px-2 mx-2">
            <div className="d-flex justify-content-end">
              <Link to="/" className=" home btn text-white btn-sm">
                Home
              </Link>
              <Link to="/about" role="button" className=" about btn text-white btn-sm">
                About
              </Link>
            </div>

          </div>
        </div>
       
     </nav>
  )
}
Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
