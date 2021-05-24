import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { path } from 'utils/const'
import styles from 'theme/pages/auth/auth.module.scss'

import Login from './Login'

function Auth() {
  return (
    <div className={styles.root}>
      <Switch>
        <Route path={path.login} component={Login} />
        {/* <Route path={path.signup} component={Signup} />
        <Route path={path.profile} component={Profile} />
        <Route path={path.confirmEmail} component={ConfirmEmail} />
        <Route path={path.resetPassword} component={ResetPassword} /> */}
        <Redirect to={path.login} />
      </Switch>
    </div>
  )
}

export default Auth
