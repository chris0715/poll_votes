import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    <ul className='navbar-nav mr-auto'>
    <li className='nav-item' ><Link className='nav-link' to='/'>Home </Link></li>
    <li className='nav-item'><Link className='nav-link'  to='create-poll'>Create Poll</Link></li>
    </ul>
  </div>
  </nav>
)

export default NavBar