import React from 'react'
import PropTypes from 'prop-types'
import './input.scss'

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  maxLength,
  className,
  style,
  error,
  disabled,
  ...others
}) => (
  <div className={`form-group ${className}`} style={style}>
    {label && <p className="input-label">{label}</p>}
    <div className="input-container">
      <input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`input ${
          error ? 'form-control is-invalid' : 'form-control'
        }`}
        disabled={disabled}
        {...others}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([null, PropTypes.string]),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  maxLength: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  label: null,
  name: '',
  value: '',
  placeholder: '',
  onChange: () => {},
  onKeyDown: () => {},
  maxLength: '150',
  className: '',
  style: {},
  error: '',
  disabled: false,
}

export default Input
