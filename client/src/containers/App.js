import React, { Component } from 'react'
import '../App.css'
import List from '../components/List'
import NavBar from '../components/NavBar'
import { Switch, Route} from 'react-router-dom'
import CreatePoll from '../containers/CreatePoll'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create-poll' component={CreatePoll} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App