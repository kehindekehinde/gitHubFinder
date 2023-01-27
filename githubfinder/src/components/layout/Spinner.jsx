import spinner from './assets/spinner.gif'

const Spinner = () => {
    return (
        <div className="spinner mt-3">
            <img width={180} className='text-center mx-auto' 
            src={spinner} alt="Loading..." />
            
        </div>
    )
}

export default Spinner
