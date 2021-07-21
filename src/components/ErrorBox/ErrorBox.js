import React from 'react'
import { PropTypes } from 'prop-types'
import './errorBox.scss'
import FontIcon from '../FontIcon'

const ErrorBox = ({ children, className, style }) => (
  <div className={`error-box-root ${className}`} style={style}>
    <FontIcon name="exclamation-triangle" className="error-box-icon" />
    {children}
  </div>
)

ErrorBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  style: PropTypes.shape({}),
}

ErrorBox.defaultProps = {
  children: null,
  className: '',
  style: {},
}

export default ErrorBox
