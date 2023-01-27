import {  useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext'

const UserResult = () => {
 const {users, loading} = useContext(GithubContext)

        if(!loading){
            return (
                <div className="row">
                       {users.map((user) => (
                           <div className='col-sm-6 col-md-4 col-lg-3'>
                        <UserItem key={user.id} user={user}/>
                         </div>
                    ))}
                   
                </div>
                
            )
        }else {
            
          return  <Spinner /> 
        }
   
}

export default UserResult
