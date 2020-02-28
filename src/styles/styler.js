import { css, cx } from 'emotion'
// import rem from './rem'

const styler = styles => {
  const wrappedStyles = {}
  const names = Object.keys(styles)
  const count = names.length
  for (let i = 0; i < count; i += 1) {
    const name = names[i]
    const value = styles[name]
    // const remVal = rem(value)
    if (typeof value === 'function') {
      wrappedStyles[name] = props =>
        css`
          ${value(props)}
        `
    } else {
      wrappedStyles[name] = css`
        ${value}
      `
    }
  }
  return wrappedStyles
}

export { cx }

export default styler
