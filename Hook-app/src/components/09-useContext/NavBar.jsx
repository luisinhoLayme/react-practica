import {} from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const NavBar = () => {
  return (
    <nav className="menu">
      <Link className="menu-logo" to="/">Logo</Link>

      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/login">Login</Link>
    </nav>
  )
}

export default NavBar
