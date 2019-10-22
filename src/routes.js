import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Connector from './utils/connector'

const Auth = Loadable({
  loader: () => import('./scenes/auth'),
  loading: () => <div></div>
})

const Home = Loadable({
  loader: () => import('./scenes/home'),
  loading: () => <div></div>
})

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
