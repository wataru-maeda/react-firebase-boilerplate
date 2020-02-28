import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import FontIcon from 'components/FontIcon'
import { styler, colors } from 'styles'

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
    background: colors.warmRed,
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

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { message } = nextProps
    if (!message || (message && message.length === 0)) {
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
          <button
            type="button"
            className={`btn ${styles.btn}`}
            onClick={onClose}
          >
            <FontIcon icon="times-circle" className={styles.img} />
          </button>
        </Fade>
      </div>
    )
  }
}

export default Error
