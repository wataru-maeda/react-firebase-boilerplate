import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { path } from 'utils/const'
import Fallback from 'components/Fallback'

const Auth = React.lazy(() => import('./pages/auth'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path={path.dashboard} component={Dashboard} />
          {/* <Redirect to="/" /> */}
          <Redirect to={path.dashboard} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
