import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { styler } from '../../styles'
import './spinner.css'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '8px 0px',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
})

const Spinner = ({ title, style, iconStyle }) => {
  return (
    <div className={styles.root} style={style}>
      <div className={styles.container}>
        <FontAwesomeIcon
          className={`fa fa-spinner spinner ${styles.icon}`}
          icon={faCircleNotch}
          style={iconStyle}
        />
        {title && <aside className={styles.title}>{title}</aside>}
      </div>
    </div>
  )
}

Spinner.propTypes = {
  title: PropTypes.oneOfType([null, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.object),
  iconStyle: PropTypes.objectOf(PropTypes.object),
}

Spinner.defaultProps = {
  title: null,
  style: {},
  iconStyle: {},
}

export default Spinner
