import { Link } from 'react-router-dom';
import '../Router/Nav.css'
import logo from "../static/logo-black.png"

function Nav() {
  return (
    <header className="header-class header-class-hero">
        <Link to='/'><img src={logo}/></Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/raise-a-tree'>Rase A Tree</Link>
          </li>
          <li>
            <Link to='/joinus'>Join Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;