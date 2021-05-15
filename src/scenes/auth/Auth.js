import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { path } from 'utils/const'
import styles from './auth.module.scss'

// screens
import Login from './Login'

// const transition = {
//   duration: 1,
//   ease: [0.43, 0.13, 0.23, 0.96],
// }

// const imageVariants = {
//   exit: { y: '50%', opacity: 0, transition },
//   enter: {
//     y: '0%',
//     opacity: 1,
//     transition,
//   },
// }

// const backVariants = {
//   exit: { y: 100, opacity: 0, transition },
//   enter: { y: 0, opacity: 1, transition: { delay: 1, ...transition } },
// }

const auth = () => (
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

export default auth
