import { css } from '@emotion/css'
import rem from './rem'

/**
 * convert css style object to class name
 * also, using rem function that convert all px value to rem
 * @param {object} styles
 * @returns
 */
// const styler = (styles) =>
//   Object.keys(styles).reduce((result, key) => {
//     const val = styles[key]
//     if (typeof val === 'function') {
//       result[key] = (props) =>
//         css`
//           ${val(props)}
//         `
//     } else {
//       result[key] = css`
//         ${rem(val)}
//       `
//     }
//   }, {})

const styler = (styles) => {
  const wrappedStyles = {}
  const names = Object.keys(styles)
  const count = names.length
  for (let i = 0; i < count; i += 1) {
    const name = names[i]
    const value = styles[name]
    const remVal = rem(value)
    if (typeof value === 'function') {
      wrappedStyles[name] = (props) =>
        css`
          ${value(props)}
        `
    } else {
      wrappedStyles[name] = css`
        ${remVal}
      `
    }
  }
  return wrappedStyles
}

export default styler
