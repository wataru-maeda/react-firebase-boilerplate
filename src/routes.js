import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NProgress from 'nprogress'

const Auth = Loadable({
  loader: () => import('./scenes/auth'),
  loading: () => <p>Loading...</p>,
})

function Router() {
  NProgress.start()
  useEffect(() => {
    NProgress.done()
  }, [])
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
