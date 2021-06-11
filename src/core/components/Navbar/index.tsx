import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="main-navbar">
        <div>
            <Link to="/" className="navbar-text">
                <h4>Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;