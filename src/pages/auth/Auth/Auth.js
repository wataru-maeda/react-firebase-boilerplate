import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import images from 'assets/images'
import { path } from 'utils/const'
import styles from './auth.module.scss'
import Login from '../Login'
import Signup from '../Signup'
import ResetPassword from '../ResetPassword'

const Auth = () => (
  <div className={styles.root}>
    <div className={styles.leftContainer}>
      <img src={images.logo} className={styles.logo} alt="logo" />
      <h1 className={styles.header}>👋 React Firebase Boilerplate</h1>
      <p className={styles.title}>What’s includes?</p>
      <p className={styles.description}>
        Firebase Authentication | Firebase Hosting | Firestore | Firebase
        Storage | Storybook | Prettier | Eslint | Jest | Bundle Analizer | Redux
        | React Router Dom ...and more!
      </p>
      <p className={styles.prompt}>Try it and check how it works 👉</p>
    </div>
    <div className={styles.rightContainer}>
      <Switch>
        <Route path={path.login}>
          <Login />
        </Route>
        <Route path={path.signup}>
          <Signup />
        </Route>
        <Route path={path.resetPassword}>
          <ResetPassword />
        </Route>
        <Redirect to={path.login} />
      </Switch>
    </div>
  </div>
)

export default Auth
