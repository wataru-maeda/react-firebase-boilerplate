import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styler, colors } from 'styles'
import Connector from 'utils/connector'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  menu: {
    display: 'flex',
  },
  btn: {
    background: 'transparent',
    border: 'none',
    outline: 'none !important',
    padding: '20px 20px 20px 0',
    marginRight: 80,
  },
  button: {
    color: colors.gray,
    fontSize: 24,
  },
  buttonSelected: {
    color: colors.blackPurple,
    fontSize: 24,
  },
})

class TabMenus extends Component {
  constructor(props) {
    super(props)
    const { children } = this.props
    if (!children || (children && children.length === 0)) return
    const { name } = children[0].props
    this.state = { selectedName: name }
  }

  onClick = name => {
    this.setState({ selectedName: name })
  }

  render() {
    const { children, className, style } = this.props
    const { selectedName } = this.state
    if (!children || (children && children.length === 0)) return <div />

    return (
      <div className={`${styles.root} ${className}`} style={style}>
        <div className={styles.menu}>
          {children.map(({ props: { name } }) => (
            <button
              type="button"
              className={`${styles.btn} ${
                selectedName === name ? styles.buttonSelected : styles.button
              }`}
              onClick={() => this.onClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
        {children.find(({ props: { name } }) => name === selectedName)}
      </div>
    )
  }
}

const ConnectedTabMenus = props => (
  <Connector>
    {({
      actions,
      state: {
        app: { me },
      },
    }) => <TabMenus me={me} actions={actions.app} {...props} />}
  </Connector>
)

TabMenus.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.object),
}

TabMenus.defaultProps = {
  children: [],
  style: {},
}

export default ConnectedTabMenus
