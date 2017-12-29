import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => (
  <nav>
    <ul>
      <Link to='/'><li>Home</li> </Link>
      <li>About</li>
      <Link to='create-poll'><li>Create Poll</li></Link>
    </ul>
  </nav>
)

export default NavBar