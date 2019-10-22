import React from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import PropTypes from 'prop-types'
import { styler, theme } from '../../styles'
import './select.css'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    display: 'flex',
    height: 'auto',
    marginBottom: 10,
    color: theme.colors.purple,
  },
  error: {
    marginTop: 4,
    fontSize: 13,
    color: 'red',
  },
  dot: {
    color: theme.colors.purple,
    marginLeft: 3,
  },
})

const Selector = ({
  label,
  values,
  options,
  placeholder,
  onChange,
  style,
  disabled,
  error,
  mandatory,
  height,
  isMulti,
  isCreatable,
}) => {
  const titleLabel = !mandatory
    ? <div className={styles.label}>{label}</div>
    : <div className={styles.label}>{label}<div className={styles.dot}>*</div></div>

  const params = {
    placeholder,
    value: values.map(x => ({ value: x, label: x })),
    options: options.map(x => ({ value: x, label: x })),
    onChange: items => onChange(items ? items.map(x => x.value) : []),
    isMulti,
    className: styles.input,
    styles: {
      clearIndicator: clearStyles => ({
        ...clearStyles,
        width: 30,
        height: 'auto',
      }),
      indicatorsContainer: indicatorStyles => ({
        ...indicatorStyles,
      }),
      control: (controlStyles, { isDisabled }) => ({
        ...controlStyles,
        '&:hover': { borderColor: theme.colors.darkGray },
        border: `1px solid ${error ? 'red' : theme.colors.lightLightGray }`,
        boxShadow: 'none',
        backgroundColor: isDisabled ? 'darkGray' : 'white',
        minHeight: height,
        fontSize: 18,
        padding: '0 15px',
      }),
      option: (optionStyles, { isFocused }) => ({
        ...optionStyles,
        color: isFocused ? 'white' : theme.colors.blackPurple,
        backgroundColor: isFocused && theme.colors.lightPurple,
        fontSize: 20,
        padding: 10,
        transition: 0.3,
        '&:active': {
          backgroundColor: theme.colors.purple,
        },
      }),
      placeholder: () => ({
        color: theme.colors.lightGrayPurple,
        opacity: 0.4,
        fontSize: 18,
      }),
      multiValue: multiValueStyles => ({
        ...multiValueStyles,
        backgroundColor: 'white',
        border: `1px solid ${theme.colors.lightPurple}`,
        borderRadius: 3,
        margin: 5,  
      }),
      multiValueLabel: multiValueLabelStyles => ({
        ...multiValueLabelStyles,
        color: theme.colors.darkGray,
        margin: '0 6px',
        fontSize: 16,
      }),
      multiValueove: multiValueoveStyles => ({
        ...multiValueoveStyles,
        color: theme.colors.blackPurple,
        borderLeft: `1px solid ${theme.colors.lightGray}`,
        ':hover': {
          backgroundColor: theme.colors.lightPurple,
          color: 'white',
        },
      }),
      indicatorSeparator: indicatorStyles => ({
        ...indicatorStyles,
        color: theme.colors.lightLightGray,
        margin: '15 16px 15 0',
      }),
      dropdownIndicator: dropdownStyles => ({
        ...dropdownStyles,
        width: 30,
        height: 'auto',
      }),
    },
    theme: t => ({
      ...t,
      borderRadius: 2,
      colors: {
        ...t.colors,
        primary25: 'lightGray',
        primary: theme.colors.lightPurple,
      },
      spacing: {
        baseUnit: 6,
        controlHeight: 60,
        menuGutter: 5,
      },
    }),
    isDisabled: disabled,
  }

  return (
    <div className={{ ...styles.root, ...style }}>
      {label && titleLabel}
      {isCreatable ? <Creatable {...params}/> : <Select {...params}/>}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

Selector.propTypes = {
  label: PropTypes.any,
  values: PropTypes.array,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  error: PropTypes.any,
  onChange: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  height: PropTypes.number,
  isMulti: PropTypes.bool,
  isCreatable: PropTypes.bool,
}

Selector.defaultProps = {
  label: null,
  values: [],
  options: [],
  placeholder: null,
  error: null,
  onChange: () => {},
  style: {},
  disabled: false,
  mandatory: false,
  height: 60,
  isMulti: false,
  isCreatable: false,
}

export default Selector
