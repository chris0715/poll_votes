import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import AuthChecker from '../shared/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route 
  render={props => AuthChecker() ? <Component {...props} /> 
  :
    (<Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }
      }/>
    )}
  />
)

export default PrivateRoute