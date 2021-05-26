import React from 'react'
import Button from 'components/Button'
import styles from 'theme/pages/dashboard.module.scss'
import images from 'assets/images'

function Dashboard() {
  return (
    <div className={styles.root}>
      {/* <TopNavigation /> */}
      <div className={styles.main}>
        <img src={images.logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>React + Firebase Boilerplate</h1>
        <p className={styles.description}>
          This is
          {'\n'}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/facebook/create-react-app"
          >
            create react native app
          </a>
          {'\n'}
          based firebase pre-setup template with basic development setup. For
          the setup procedure, check the
          {'\n'}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/README.md"
          >
            README
          </a>
          {'\n'}
          for more information.
        </p>
        <div className={styles.buttons}>
          <Button
            label="Download for free"
            className={`btn-purple-fill ${styles.download}`}
            onClick={() => {
              window.location.href =
                'https://github.com/WataruMaeda/react-firebase-boilerplate'
            }}
          />
          <Button
            label="Logout"
            className={`btn-purple-outline ${styles.logout}`}
            // onClick={() => actions.logout()}
          />
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
