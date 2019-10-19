import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './scenes/home'
import Auth from './scenes/auth'
import Connector from './utils/connector'

const Router = ({ checked, loggedIn }) => {
  if (!checked) return <aside>Loading...</aside>
  return (
    <BrowserRouter>
      {loggedIn ? (
        <Switch>
          <Route path="/" name="Home" component={Home} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Auth} />
          <Redirect to="/" />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export default props => (
  <Connector>
    {
      ({ state: { app: { loggedIn, checked } } }) => (
        <Router
          checked={checked}
          loggedIn={loggedIn}
          {...props}
        />
      )
    }
  </Connector>
)
