import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components/Button'
import { styler, colors } from 'styles'

const styles = styler({
  container: {
    position: 'relative',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 5,
  },
  button: {
    position: 'absolute',
    right: 10,
    top: 0,
    height: 40,
    border: 'none',
    background: 'transparent',
  },
  input: {
    fontSize: 16,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: colors.lightGray,
      fontSize: 16,
    },
  },
  icon: {
    width: 40,
    height: 40,
    fontSize: 16,
    color: colors.darkGray,
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
  maxLength,
  className,
  style,
  error,
  disabled,
}) => {
  const [currentType, setCurrentType] = useState('text')
  const isPw = type === 'password'
  const isPwNow = currentType === 'password'

  const inputStyle =
    error.length > 0 ? 'form-control is-invalid' : 'form-control'

  return (
    <div className={`form-group ${className}`}>
      {label && <aside className={styles.label}>{label}</aside>}
      <div className={styles.container}>
        <input
          value={value}
          type={currentType}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`${inputStyle} ${styles.input}`}
          style={{ ...style, backgroundImage: isPw && 'none' }}
          disabled={disabled}
        />
        <div className="invalid-feedback">{error}</div>
        {isPw && (
          <Button
            className={`btn ${styles.button}`}
            onClick={e => {
              e.preventDefault()
              setCurrentType(isPwNow ? 'text' : 'password')
            }}
          >
            <FontAwesomeIcon
              icon={isPwNow ? faEye : faEyeSlash}
              className={styles.icon}
            />
          </Button>
        )}
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
  maxLength: '50',
  className: '',
  style: {},
  error: '',
  disabled: false,
}

export default Input
