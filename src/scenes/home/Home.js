import React, { Component } from 'react'
import { styler, images, colors, fonts } from 'styles'
import { Button } from 'components/Button'
import Connector from 'utils/connector'
import TopNavigation from 'subviews/TopNavigation'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: colors.darkGray,
    height: '100vh',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  title: {
    color: 'white',
    fontFamily: fonts.aleo.normal,
    marginTop: 40,
    fontSize: 40,
    textAlign: 'center',
  },
  description: {
    color: colors.lightLightGray,
    fontFamily: fonts.aleo.normal,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  logo: {
    width: 160,
    height: 160,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    maxWidth: 400,
    marginTop: 120,
  },
  download: {
    width: '45%',
    height: 50,
  },
  logout: {
    width: '45%',
    height: 50,
  },
})

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    const { actions } = this.props
    return (
      <div className={styles.root}>
        <TopNavigation />
        <div className={styles.main}>
          <img src={images.logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>React + Firebase Boilerplate</h1>
          <aside className={styles.description}>
            Redux, navigation pre-setup template.{'\n'}Check
            {'\n'}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/WataruMaeda/react-boilerplate/blob/master/README.md"
            >
              README
            </a>{' '}
            {'\n'}
            for more details
          </aside>
          <div className={styles.buttons}>
            <Button
              label="Download for free"
              className={`btn-yellow-gradation ${styles.download}`}
              onClick={() => {
                window.location.href =
                  'https://github.com/WataruMaeda/react-firebase-boilerplate'
              }}
            />
            <Button
              label="Logout"
              className={`btn-orange-outline ${styles.logout}`}
              onClick={() => actions.logout()}
            />
          </div>
        </div>
      </div>
    )
  }
}

const ConnectedHome = props => (
  <Connector>
    {({ actions }) => <Home actions={actions.app} {...props} />}
  </Connector>
)

Home.propTypes = {}
Home.defaultProps = {}

export default ConnectedHome
