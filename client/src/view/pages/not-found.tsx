import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className=' min-h-screen'>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default NotFound