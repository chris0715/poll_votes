import React from 'react'
import { Link } from 'react-router-dom'
import request from 'request-promise'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      username: 'admin',
      password: '1234'
    }
  }
handleSubmit() {
  const {username, password} = this.state
  request({
    uri: 'http://localhost:3500/auth/login',
    method: 'POST',
    body: {username, password},
    json: true
  })
}
render() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item' ><Link className='nav-link' to='/'>Home </Link></li>
        <li className='nav-item'><Link className='nav-link'  to='create-poll'>Create Poll</Link></li>
      </ul>
      {!this.state.isLoggedIn && <ul className='navbar-nav'>
        <li><input placeholder='username' /></li>
        <li><input placeholder='password' /></li>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </ul>}
    </div>
    </nav>
  )
}

}

export default NavBar