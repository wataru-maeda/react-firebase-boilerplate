import React from 'react'
import PropTypes from 'prop-types'
import { styler, colors } from 'theme'
import './input.scss'

const styles = styler({
  container: {
    position: 'relative',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: colors.lightGray,
      fontSize: 16,
    },
  },
  border: {
    display: 'block',
    borderBottom: '1px solid black',
    width: '100%',
  },
})

const Input = ({
  id,
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
}) => {
  const inputStyle = error ? 'form-control is-invalid' : 'form-control'
  return (
    <div className={`form-group ${className}`} style={style}>
      {label && <b className={styles.label}>{label}</b>}
      <div className={styles.container}>
        <input
          id={id}
          value={value}
          type={type}
          name={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`${inputStyle} ${styles.input}`}
          disabled={disabled}
          {...others}
        />
        <span
          className={styles.border}
          style={{ borderColor: error && 'red' }}
        />
        <div className="invalid-feedback">{error}</div>
      </div>
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
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
  id: '',
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
