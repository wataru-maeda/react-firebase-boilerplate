import React from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import PropTypes from 'prop-types'
import './select.scss'

const Selector = ({
  name,
  label,
  value,
  options,
  placeholder,
  onChange,
  disabled,
  error,
  isMulti,
  isCreatable,
  className,
  style,
  selectClassName,
  selectStyle,
}) => {
  const props = {
    placeholder,
    value,
    options,
    onChange: (selected) => onChange({ target: { name, value: selected } }),
    isMulti,
    className: selectClassName,
    styles: selectStyle,
    isDisabled: disabled,
  }
  return (
    <div className={`select-root ${className}`} style={style}>
      {label && <p className="select-label">{label}</p>}
      <span className={error && 'select-control-error'}>
        {isCreatable ? (
          <Creatable {...props} classNamePrefix="select" />
        ) : (
          <Select {...props} classNamePrefix="select" />
        )}
      </span>
      {error && <span className="select-error">{error}</span>}
    </div>
  )
}

Selector.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape([]),
  options: PropTypes.shape([]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  isMulti: PropTypes.bool,
  isCreatable: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  selectClassName: PropTypes.string,
  selectStyle: PropTypes.shape({}),
}

Selector.defaultProps = {
  name: 'select',
  label: null,
  value: [],
  options: [],
  placeholder: null,
  error: null,
  onChange: () => {},
  disabled: false,
  mandatory: false,
  isMulti: false,
  isCreatable: false,
  className: '',
  style: {},
  selectClassName: '',
  selectStyle: {},
}

export default Selector
