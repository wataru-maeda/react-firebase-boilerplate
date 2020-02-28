import React, { Component } from 'react'
import { styler, images } from 'styles'
import { storage } from 'utils/firebase'
import Connector from 'utils/connector'

const styles = styler({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: '8px 40px',
  },
  name: {
    color: 'white',
    fontSize: 12,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
})

class TopNavigation extends Component {
  state = {
    userName: null,
    userImage: images.profile,
  }

  componentDidMount() {
    // set default image
    const { me } = this.props
    storage
      .child(me.photoURL)
      .getDownloadURL()
      .then(url => {
        this.setState({ userImage: url, userName: me.displayName })
      })
  }

  render() {
    const { userImage, userName } = this.state
    return (
      <div className={styles.root}>
        <img src={userImage} className={styles.img} alt="profile" />
        {userName && (
          <aside className={styles.name}>
            Welcome <b>{userName}</b> !
          </aside>
        )}
      </div>
    )
  }
}

const ConnectedTopNavigation = props => (
  <Connector>
    {({
      actions,
      state: {
        app: { me },
      },
    }) => <TopNavigation me={me} actions={actions.app} {...props} />}
  </Connector>
)

TopNavigation.propTypes = {}
TopNavigation.defaultProps = {}

export default ConnectedTopNavigation
