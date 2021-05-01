import React from 'react'
import PropTypes from 'prop-types'
import { styler } from 'theme'
import Spinner from 'components/Spinner'
import './button.css'

const styles = styler({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Button = ({
  type,
  label,
  className,
  style,
  spinnerStyle,
  onClick,
  children,
  disabled,
  isLoading,
  ...others
}) => (
  /* eslint-disable react/button-has-type */
  <button
    type={type}
    className={`${styles.root} ${className}`}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...others}
  >
    {isLoading ? (
      <Spinner iconStyle={spinnerStyle} />
    ) : (
      <>
        {label}
        {children}
      </>
    )}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
  spinnerStyle: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
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
