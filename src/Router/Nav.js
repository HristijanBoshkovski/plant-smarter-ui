import { Link, NavLink } from 'react-router-dom';
import { useUserAuth } from '../CustomHooks/useUserAuth';
import '../Router/Nav.css'
import logo from "../static/ps-logo.png"

function Nav() {
  const [user, _, logout] = useUserAuth()
  return (
    <header className="header-class">
      <Link to='/'><img src={logo} /></Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/raise-a-tree'>Raise A Tree</Link>
          </li>
          <li>
            {user !== null ?
              <a onClick={e => logout()} href="/">Logout</a> :
              <Link to='/login'>Login</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;