import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import {searchUser} from '../../context/github/GithubActions'


const UserSearch = () => {
    const [text, setText] = useState('')

    const {users, dispatch,} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(text === ''){
            setAlert('Please fill the Search', 'error')
        }else {
            dispatch({type: 'SET_LOADING'})
          const users =  await searchUser(text)
          dispatch({type: 'GET_USERS', payload: users})

            setText('')
        }
    }
    const handleClear = (e) => {
        e.preventDefault()
        dispatch({type: 'CLEAR_USERS'})
    }
    return (
<div className="align-items-center col-sm-6  mb-2 g-4">
            <div>
                <form onSubmit={handleSubmit}> 
                    <div className="form-control">
                        <div className=" d-flex relative input-group">
                            <input type="text" className="form-control text-dark" placeholder="Search" value={text} onChange={handleChange} />
                            <button className="absolute top-0 right-0 rounded-l-none btn btn-md btn-dark">Go</button>
                        </div>
                    </div>

                </form>
            </div>
            {users.length > 0 && (
                <div>
                <button className=' clear-btn btn btn-sm btn-md'onClick={handleClear}>CLEAR</button>
              </div>
              
            )}
           
       
 </div>
    ) 
}

export default UserSearch
