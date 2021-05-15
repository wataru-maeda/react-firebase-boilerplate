import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Auth = Loadable({
  loader: () => import('./scenes/auth'),
  loading: () => <p>Loading...</p>,
})

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Auth} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
