import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import Spinner from '../Spinner'
import { styler } from '../../theme'
import './button.css'

const styles = styler({
  root: {
    borderRadius: 3,
    background: 'transparent',
    outline: 'none',
    border: 'none',
    '&:focus': {
      outline: 0,
      boxShadow: 'none',
    },
  },
})

const Button = ({
  label,
  className,
  style,
  spinnerStyle,
  onClick,
  children,
  disabled,
  isLoading,
}) => (
  <button
    className={`${styles.root} ${className}`}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    {isLoading ? (
      <Spinner iconStyle={spinnerStyle}/>
    ) : (
      <Fragment>
        {label}
        {children}
      </Fragment>
    )}
  </button>
)

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  spinnerStyle: PropTypes.object,
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  label: '',
  className: '',
  style: {},
  spinnerStyle: {},
  onClick: () => {},
  children: null,
  disabled: false,
  isLoading: false,
}

export default Button
