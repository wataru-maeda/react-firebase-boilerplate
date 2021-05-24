import React from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import PropTypes from 'prop-types'
import 'theme/components/select.scss'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 0,
  },
  border: {
    display: 'block',
    borderBottom: '1px solid black',
    width: '100%',
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
}

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
    styles: {
      // clearIndicator: (x) =>
      //   rem({
      //     ...x,
      //     height: 'auto',
      //   }),
      // indicatorsContainer: (x) =>
      //   rem({
      //     ...x,
      //     marginRight: 10,
      //   }),
      // control: (x) =>
      //   rem({
      //     ...x,
      //     backgroundColor: 'transparent',
      //     boxShadow: 'none',
      //     border: 'none',
      //     padding: 0,
      //   }),
      // option: (x, { isFocused }) =>
      //   rem({
      //     ...x,
      //     color: colors.black,
      //     backgroundColor: isFocused && colors.cyan,
      //     padding: 8,
      //     fontSize: 14,
      //     '&:hover': {
      //       backgroundColor: colors.cyan,
      //     },
      //     '&:active': {
      //       backgroundColor: colors.green,
      //     },
      //   }),
      // placeholder: (x) =>
      //   rem({
      //     ...x,
      //     color: colors.gray,
      //     fontSize: 12,
      //   }),
      // valueContainer: (x) =>
      //   rem({
      //     ...x,
      //     marginLeft: 0,
      //     fontSize: 14,
      //   }),
      // multiValue: (x) =>
      //   rem({
      //     ...x,
      //     marginLeft: 10,
      //   }),
      // multiValueLabel: (x) =>
      //   rem({
      //     ...x,
      //   }),
      // multiValueove: (x) =>
      //   rem({
      //     ...x,
      //   }),
      // indicatorSeparator: (x) =>
      //   rem({
      //     ...x,
      //     display: 'none',
      //   }),
      // dropdownIndicator: (x) =>
      //   rem({
      //     ...x,
      //   }),
      ...selectStyle,
    },
    // theme: (t) =>
    //   rem({
    //     ...t,
    //     borderRadius: 4,
    //     colors: {
    //       ...t.colors,
    //     },
    //     spacing: {
    //       ...t.spacing,
    //     },
    //   }),
    isDisabled: disabled,
  }

  return (
    <div className={`${className}`} style={{ ...style, ...styles.root }}>
      {label && <b style={styles.label}>{label}</b>}
      {isCreatable ? <Creatable {...props} /> : <Select {...props} />}
      <span style={{ ...styles.border, borderColor: error && 'red' }} />
      {error && <span style={styles.error}>{error}</span>}
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
