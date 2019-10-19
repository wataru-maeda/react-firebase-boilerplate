import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import FontIcon from '../FontIcon'
import { styler, colors } from '../../theme'

const styles = styler({
  root: {
    // position: 'relative',
    display: 'flex',
    width: '100%',
  },
  contents: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    background: colors.warningRed,
    padding: 20,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    background: 'transparent',
  },
  img: {
    fontSize: 20,
    color: 'white',
  },
})

class Error extends Component {
  state = {
    isPresent: false,
  }

  componentWillReceiveProps(props) {
    const { message } = props
    if (!message
        || (message && message.length === 0)) {
      this.setState({ isPresent: false })
      return 
    }
    this.setState({ isPresent: true })
  }

  render() {
    const { isPresent } = this.state
    const { message, onClose } = this.props
    return (
      <div className={styles.root}>
        <Fade in={isPresent} className={styles.contents}> 
          {message}
          <button className={`btn ${styles.btn}`} onClick={onClose}>
            <FontIcon
              icon="times-circle"
              className={styles.img}
            />
          </button> 
        </Fade>
      </div>
    )
  }
}

export default Error