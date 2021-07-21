import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import Spinner from '../Spinner'

const Button = ({
  className,
  style,
  label,
  onClick,
  isLoading,
  disabled,
  children,
  ...others
}) => (
  <button
    type="button"
    className={className}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...others}
  >
    {isLoading ? (
      <Spinner color="white" isLoading />
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
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  label: '',
  className: '',
  style: {},
  onClick: () => {},
  children: null,
  disabled: false,
  isLoading: false,
}

export default Button
