import React from 'react'
import PropTypes from 'prop-types'
import { styler } from 'styles'
import Spinner from 'components/Spinner'
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
    type="button"
    className={`${styles.root} ${className}`}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
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
