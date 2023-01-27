import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const UserItem = ({user: {login, avatar_url}}) => {
    return (
        <div className="card card-body mb-3">
           <div className="row"> 
               <div className="col-sm-6 col-md-6 col-lg-3">  
                 <img className="user-img img-fluid mb-2 mx-2 rounded-circle mb-3" src={avatar_url} alt="Profile" />  
               </div>
                  
                <div className="col-md-9">
                  <h5 className="card-title mx-2"> {login}</h5>
                  <Link className="btn btn-block mb-4 btn-sm" to={`/user/${login}`}> View Profile</Link>
                </div>
            
           </div>
         </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
