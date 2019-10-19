import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button'
import { styler, colors } from '../../theme'

const styles = styler({
  container: {
    position: 'relative',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: colors.purple,
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
    fontSize: 20,
    '&::placeholder': {
      textOverflow: "ellipsis !important",
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

class Input extends Component {
  state = {
    currentType: this.props.type,
  }

  render() {
    const {
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
    } = this.props

    const { currentType = 'text' } = this.state
    const isPw = type === 'password'
    const isPwNow = currentType === 'password'

    const inputStyle = error.length > 0
      ? 'form-control is-invalid'
      : 'form-control'
    
    return (    
      <div className={`form-group ${className}`}>
        {label && <label className={styles.label}>{label}</label>}
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
          <div className="invalid-feedback">
            {error}
          </div>
          { isPw &&
            <Button 
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                this.setState({ currentType: isPwNow ? 'text' : 'password' })
              }}
              className={styles.button}>
              <FontAwesomeIcon
                icon={isPwNow ? faEye : faEyeSlash}
                className={styles.icon}
              />
            </Button>
          }
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
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
