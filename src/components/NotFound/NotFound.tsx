import './NotFound.css'
import { Link } from 'react-router-dom' 

function NotFound() {
  return (
    <div className="container">
        <h1 className='errorTitle'>404</h1>
        <h2 className='errorDescription'>Page Not Found</h2>
        <p className='errorMess'>The Page you are looking for doesn't exist or an other error occured. Go to <Link to="/">Home Page.</Link></p>
    </div>

  )
}

export default NotFound