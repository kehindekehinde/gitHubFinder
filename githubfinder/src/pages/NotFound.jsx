import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
          <div className="max-w-lg">
              <h1 className="text-xl fw-bold mb-3">
                  Oops!
              </h1>
                <p className="text-lg mb-4">404 - Page not found</p>
                <Link to="/" className="btn btn-primary btn-md">
                        <FaHome className='mr-2' /> BACK TO HOME
                </Link>
          </div>
      </div>
    </div>
  )
}

export default NotFound
