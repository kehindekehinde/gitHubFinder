import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import {useParams} from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import RepoList from '../components/repos/RepoList'
import {getUserAndRepos} from '../context/github/GithubActions'
 

const User = () => {
    const {user, loading, repos, dispatch } = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
      dispatch ({type: 'SET_LOADING'})
      const getUserData = async() => {
          const userData = await getUserAndRepos(params.login)
          dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
         
      }

      getUserData() 
      
    }, [dispatch, params.login ])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user

    if(loading){
        return <Spinner />
    }
    
  // NOTE: check for valid url to users website

  // const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog

    return (
        <>
        <div className='w-full mx-auto lg:w-10/12'>
          <div className='mb-4'>
            <Link to='/' className='btn btn-ghost'>
              Back To Search
            </Link>
          </div>
  
          <div className="row">
            <div className='custom mb-6 md-mb-0'>
              <div className='d-flex flex-sm-col gap-4 rounded shadow-xl image-full'>
                <figure>
                  <img className='img-fliud rounded w-100' src={avatar_url} alt='' />
                  <div>
                  <h2 className=' name-h2 text-center mb-0'>{name}</h2>
                  <p className='flex-grow-0 text-center'>{login}</p>
                  </div>
                </figure>

                <div className='col-span-2'>
              <div className=''>
                <h1 className='text-3xl'>
                  {name}
                  <div className='btn btn-sm rounded-pill bg-success mx-3'>{type}</div>
                  {hireable && (
                    <div className='mx-1 btn btn-sm rounded-pill bg-info'>Hireable</div>
                  )}
                </h1>
                <p className="bio">{bio}</p>
                <div className='mt-2 card-actions'>
                  <a
                    href={html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-dark btn-sm'

                  >
                      Visit Github Profile
                  </a>
                    <ul className='list-group mt-4'>
                        <li className="list-group-item"> Location: {location}</li>
                        <li className="list-group-item"> Website/Blog: {blog}</li> 
                        <li className='list-group-item'>Twitter: <a
                          href={`https://twitter.com/${twitter_username}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {twitter_username}
                        </a></li>
              </ul>
                </div>
              </div>
               
              </div>
            </div>
  
             <div className='w-full rounded shadow-md bg-base-100 stats'>
              </div>
            </div>
          </div>
  
          <div className=' row py-2 mb-1 rounded-lg shadow-md bg-base-100 stats'>
            <div className='d-flex justify-content-between w-100 gap-5 col-sm-6 col-md-4 col-lg-3'>
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaUsers className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Followers</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {followers}
                </div>
              </div>
  
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaUserFriends className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Following</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {following}
                </div>
              </div>
  
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaCodepen className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Public Repos</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {public_repos}
                </div>
              </div>
  
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaStore className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Public Gists</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {public_gists}
                </div>
              </div>
            </div>
          </div>
  
          <RepoList repos={repos}/>
        </div>

    
      </>
        
        )
}

export default User
