import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

function NavBar() {
  const [user, setUser] = useState(true)
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
        <NavLink to={user ? '/login' : '/signup'}>Login/SignUp</NavLink>
        </li>
        </ul>
      </nav>
    </aside>
  </>
  )
}

export default NavBar