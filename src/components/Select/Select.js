import React from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import PropTypes from 'prop-types'
import { styler, colors } from 'styles'
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
    color: colors.purple,
  },
  error: {
    marginTop: 4,
    fontSize: 13,
    color: 'red',
  },
  dot: {
    color: colors.purple,
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
  const titleLabel = !mandatory ? (
    <div className={styles.label}>{label}</div>
  ) : (
    <div className={styles.label}>
      {label}
      <div className={styles.dot}>*</div>
    </div>
  )

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
        '&:hover': { borderColor: colors.darkGray },
        border: `1px solid ${error ? 'red' : colors.lightLightGray}`,
        boxShadow: 'none',
        backgroundColor: isDisabled ? 'darkGray' : 'white',
        minHeight: height,
        fontSize: 18,
        padding: '0 15px',
      }),
      option: (optionStyles, { isFocused }) => ({
        ...optionStyles,
        color: isFocused ? 'white' : colors.blackPurple,
        backgroundColor: isFocused && colors.lightPurple,
        fontSize: 20,
        padding: 10,
        transition: 0.3,
        '&:active': {
          backgroundColor: colors.purple,
        },
      }),
      placeholder: () => ({
        color: colors.lightGrayPurple,
        opacity: 0.4,
        fontSize: 18,
      }),
      multiValue: multiValueStyles => ({
        ...multiValueStyles,
        backgroundColor: 'white',
        border: `1px solid ${colors.lightPurple}`,
        borderRadius: 3,
        margin: 5,
      }),
      multiValueLabel: multiValueLabelStyles => ({
        ...multiValueLabelStyles,
        color: colors.darkGray,
        margin: '0 6px',
        fontSize: 16,
      }),
      multiValueove: multiValueoveStyles => ({
        ...multiValueoveStyles,
        color: colors.blackPurple,
        borderLeft: `1px solid ${colors.lightGray}`,
        ':hover': {
          backgroundColor: colors.lightPurple,
          color: 'white',
        },
      }),
      indicatorSeparator: indicatorStyles => ({
        ...indicatorStyles,
        color: colors.lightLightGray,
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
        primary: colors.lightPurple,
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
      {isCreatable ? <Creatable {...params} /> : <Select {...params} />}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

Selector.propTypes = {
  label: PropTypes.oneOfType([null, PropTypes.string]),
  values: PropTypes.InstanceOf(Array),
  options: PropTypes.InstanceOf(Array),
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([null, PropTypes.string]),
  onChange: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.object),
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
