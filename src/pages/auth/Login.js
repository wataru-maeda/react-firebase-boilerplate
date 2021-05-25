import { useState } from 'react'
import { PropTypes } from 'prop-types'
import Input from 'components/Input'
import Button from 'components/Button'
import ErrorBox from 'components/ErrorBox'
import validate, { tests } from 'utils/validate'
import styles from 'theme/pages/login.module.scss'
import { path } from 'utils/const'

function Login({ history }) {
  // ------------------------------------
  // State
  // ------------------------------------
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({})
  const [resErr, setResError] = useState('')
  const [isLoading, setLoading] = useState(false)

  // ------------------------------------
  // Handlers
  // ------------------------------------
  const handleOnChange = ({ target: { name, value } }) => {
    setInput((prev) => ({ ...prev, [name]: value }))
    setError((prev) => ({ ...prev, [name]: '' }))
    setResError('')
  }

  const handleSubmit = async () => {
    // validation
    const result = validate(input, tests)
    setError(result.errors)
    if (result.isError) return

    // login action
    setLoading(true)
    // actions
    //   .login(input.email, input.password)
    //   .then((user) => {
    //     onFinish(user)
    //     setLoading(false)
    //     setResError('')
    //   })
    //   .catch((err) => {
    //     setResError(err.message)
    //     setLoading(false)
    //   })
  }

  return (
    <div className={styles.root}>
      {resErr && <ErrorBox>{resErr}</ErrorBox>}
      <h2 className={styles.title}>Login</h2>
      <Input
        label="Email"
        name="email"
        placeholder="email@example.com"
        value={input.email}
        onChange={handleOnChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
        error={error.email}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        placeholder="password1234"
        value={input.password}
        onChange={handleOnChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
        error={error.password}
      />
      <br />
      <Button
        label="Login"
        className={`btn-black-fill ${styles.submitButton}`}
        onClick={handleSubmit}
        isLoading={isLoading}
      />
      <div className={styles.footerContainer}>
        <div className={styles.textContainer}>
          New user?{' '}
          <Button
            label="Sign up"
            className={styles.linkButton}
            onClick={() => history.push(path.signup)}
          />
        </div>
        <div className={styles.textContainer}>
          Forget <Button label="Password" className={styles.linkButton} />?
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}
Login.defaultProps = {
  history: {
    push: () => null,
  },
}

export default Login
