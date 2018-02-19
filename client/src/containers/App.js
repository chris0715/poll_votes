import React, { Component } from 'react'
import '../App.css'
import List from '../components/List'
import NavBar from '../components/NavBar'
import { Switch, Route} from 'react-router-dom'
import CreatePoll from '../containers/CreatePoll'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import PollDetail from '../containers/PollDetail'
import axios from 'axios'
import PrivateRoute from '../shared/PrivateRoute'
class App extends Component {
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3500/auth/whoami',
      withCredentials: true
    })
    .then(res => {
    })
    .catch(error => {
      localStorage.removeItem('user')
    })
  }
  render() {
    return (
      <div>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/create-poll' component={CreatePoll} />
            <Route path='/poll/:id' component={PollDetail} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
