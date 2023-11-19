import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (<>
    <label className='hamburger-menu' >
      <input type="checkbox" />
    </label>
    <aside className='sidebar'>
      <nav className='nav'>
        <ul>
          <li>
        <NavLink to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink to='/login'>Login/SignUp</NavLink>
        </li>
        </ul>
      </nav>
    </aside>
  </>
  )
}

export default NavBar