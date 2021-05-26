export const tests = {
  name: {
    test: /^[a-z]+([a-z- ',.-]?)+[a-z.]+$/i,
    error: 'Please enter a valid name',
  },
  email: {
    test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Please enter a valid email address.',
  },
  password: {
    test: /(?=^.{6,}$)(?=.*\d)(?=.*[a-z]).*$/,
    error:
      'Password must be at least 6 characters in length, and contain characters and numbers.',
  },
  phone: {
    test: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    error: 'Please enter a valid phone number.',
  },
}

const validate = (vs, ts) => {
  const errors = {}
  let isError = false
  Object.keys(vs).forEach((key) => {
    if (ts[key]) {
      const { test, error, options = {} } = ts[key]
      if (test && error) {
        const res =
          typeof test === 'function' ? test(vs[key]) : test.test(vs[key])
        const skip = options.ifNotEmpty && !vs[key].toString().length > 0
        if (!res && !skip) {
          isError = true
          errors[key] = error
        }
      }
    }
  })
  return { isError, errors }
}

export default validate
