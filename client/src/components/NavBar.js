import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthChecker from '../shared/Auth'
const serverAddress = 'http://localhost:3500'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      username: 'admin',
      password: '1234'
    }
  }
componentDidMount() {
  if (localStorage.getItem('user')) {
    this.setState({user: JSON.parse(localStorage.getItem('user'))})
  }
}

handleSubmit() {
  const {username, password} = this.state
  axios({
    url: 'http://localhost:3500/auth/login',
    method: 'POST',
    data: {username, password},
    withCredentials: true
  })
  .then(res => { 
    localStorage.setItem('user', JSON.stringify(res.data))
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
      </ul>
      {this.state.user ?
      
      <ul>
        <li className='nav-item dropdown'>
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Welcome {this.state.username}</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li className='nav-item'><Link className='nav-link'  to='create-poll'>Create Poll</Link></li>
        <a class="dropdown-item" onClick={()=> {
          axios({
            method:'GET',
            url:`http://localhost:3500/auth/logout`,
            withCredentials: true
          })
        }}>logout</a>
          <a class="dropdown-item" href="#">Action</a>
          </div>
        </li>
      </ul> : <ul className='navbar-nav'>
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