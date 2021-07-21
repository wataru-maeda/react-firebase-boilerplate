import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Input from 'components/Input'
import Button from 'components/Button'
import ErrorBox from 'components/ErrorBox'
import ConfirmEmail from 'subviews/ConfirmEmail'
import validate, { tests } from 'utils/validate'
import { actions } from 'slices/app.slice'
import { path } from 'utils/const'
import styles from './login.module.scss'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  // ------------------------------------
  // State
  // ------------------------------------
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({})
  const [resErr, setResError] = useState('')
  const [isOpen, setOpen] = useState(false)
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

    try {
      const user = await dispatch(actions.login(input))
      if (!user.emailVerified) setOpen(true)
      setLoading(false)
      setResError('')
    } catch (err) {
      setLoading(false)
      setResError(err.message)
    }
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
          Forget{' '}
          <Button
            label="Password"
            className={styles.linkButton}
            onClick={() => history.push(path.resetPassword)}
          />
          ?
        </div>
      </div>
      <ConfirmEmail
        email={input.email}
        isOpen={isOpen}
        toggle={() => setOpen((prev) => !prev)}
        onSubmit={() => {
          setOpen((prev) => !prev)
          history.push(path.login)
        }}
      />
    </div>
  )
}

Login.propTypes = {}
Login.defaultProps = {}

export default Login
