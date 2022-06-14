import { Link } from 'react-router-dom';
import '../Router/Nav.css'
import logo from "../static/ps-logo.png"

function Nav() {
  return (
    <header className={"header-class"}>
        <Link to='/'><img src={logo}/></Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/plant-your-tree'>Plant Your Tree</Link>
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