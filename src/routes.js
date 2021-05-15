import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Fallback from 'components/Fallback'

const Auth = React.lazy(() => import('./scenes/auth'))

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route path="/" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
