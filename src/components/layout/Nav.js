import '../../styles/components/layout/Nav.css'
import NavLink from "../NavLink";

const Nav = (props) => {
    return (
        <nav>
            <div className='holder'>
                <ul>
                    <li><NavLink activeclassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeclassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeclassName="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeclassName="activo" exact to="/galeria">Galeria</NavLink></li>
                    <li><NavLink activeclassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav; 