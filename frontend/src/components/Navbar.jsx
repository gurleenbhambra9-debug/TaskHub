import '../assets/styles/Navbar.css'
import {Link, useLocation} from 'react-router-dom'

function Navbar(){
 const location = useLocation()

    const isAboutPage = location.pathname === '/about'

    return(
        <>
        <nav className={`navbar ${isAboutPage ? 'about-navbar' : ''}`}>
            <h2 className="navbar-h2"><i class="fa-regular fa-circle-check"></i>TaskHub</h2>
            <div className="list-items">
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/features'>Features</Link>
               <Link to='/contact'>Contact</Link>
            </div>
            <div className="navbar-btns">
                <button className="navbar-login">Login</button>
                <button className="navbar-register">Register</button>
            </div>
        </nav>
        </>
    )
}

export default Navbar