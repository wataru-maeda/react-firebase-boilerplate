export const tests = {
  input: {
    test: x => x && x.toString().replace(/\s/g, '').length > 0,
    error: 'Please enter a valid input',
  },
  number: {
    test: /^\d+$/,
    error: 'Please enter number',
  },
  password: {
    test: x => x && x.toString().replace(/\s/g, '').length > 9,
    error: 'Please enter a valid password',
  },
  email: {
    test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Please enter a valid email address',
  },
  name: {
    test: /^[a-z]+([a-z- ',.-]?)+[a-z.]+$/i,
    error: 'Please enter a valid name',
  },
  address: {
    test: x => x && x.replace(/\s/g, '').length > 1,
    error: 'Please enter a valid address',
  },
  phone: {
    test: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    error: 'Please enter a valid phone number',
  },
  website: {
    test: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
    error: 'Please enter a valid url',
  },
}

export const validate = (vs, ts) => {
  const errors = {}
  let isError = false
  Object.keys(vs).forEach(key => {
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
