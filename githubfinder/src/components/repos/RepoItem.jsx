import PropTypes from 'prop-types'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'

const RepoItem = ({repo}) => {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,

    } = repo

  return (
    <div className='mb-2 rounded-md card bg-secondary '>
        <div className="card-body">
            <h3 className="mb-2">
                <a href={html_url}> <FaLink className='d-inline me-1'/> {name}</a>
            </h3>
            <p className='mb-3'>{description}</p>
            <div>
                <div className="me-3 mt-0 badge bg-info">
                    <FaEye className=' mt-0 mr-1' /> {watchers_count}
                </div>
                <div className="me-3 mt-0 badge bg-success">
                    <FaStar className=' mt-0 mr-1' /> {stargazers_count}
                </div>
                <div className="me-2 mt-0 badge bg-danger">
                    <FaInfo className=' mt-0 mr-1' /> {open_issues}
                </div>
                <div className="mr-e mt-0 badge bg-warning">
                    <FaUtensils className=' mt-0 mr-1' /> {forks}
                </div>
            </div>
        </div>
      
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}
export default RepoItem
