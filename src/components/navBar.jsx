import '../styles/navBar.css'
import { Link } from 'react-router-dom'
import IconDowload from '../assets/img/IconoDeDescarga.png'


const NavBar = () => {
    return(
        <header className="header">
            <span ><Link to='/Portfolio-de-Cristian/' className='Logo'>CrisDev</Link></span>
            <nav className='nav'>    
                <Link to='/Portfolio-de-Cristian/sobreMi'>Sobre Mi</Link>
                <Link to='/Portfolio-de-Cristian/proyectos'>Proyectos</Link>
                <Link to='/Portfolio-de-Cristian/contacto'>Contacto</Link>
            </nav>
            <nav className='nav_mobile'>
                <Link to='/Portfolio-de-Cristian/sobreMi'>Sobre Mi</Link>
                <Link to='/Portfolio-de-Cristian/proyectos'>Proyectos</Link>
                <Link to='/Portfolio-de-Cristian/contacto'>Contacto</Link>
            </nav>
            <button> <img src={IconDowload} alt="" />CV</button>
        </header>
    )
}

export default NavBar