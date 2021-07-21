import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Input from 'components/Input'
import Button from 'components/Button'
import ErrorBox from 'components/ErrorBox'
import SentResetPassword from 'subviews/SentResetPassword'
import validate, { tests } from 'utils/validate'
import { actions } from 'slices/app.slice'
import { path } from 'utils/const'
import styles from './resetPassword.module.scss'

const ResetPassword = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  // ------------------------------------
  // State
  // ------------------------------------
  const [input, setInput] = useState({
    email: '',
  })
  const [error, setError] = useState({})
  const [resErr, setResError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isOpen, setOpen] = useState(false)

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

    setLoading(true)

    try {
      await dispatch(actions.resetPassword(input.email))
      setOpen(true)
      setResError('')
      setLoading(false)
    } catch (err) {
      setResError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className={styles.root}>
      {resErr && <ErrorBox>{resErr}</ErrorBox>}
      <h2 className={styles.title}>Reset Password</h2>
      <Input
        label="Email"
        name="email"
        placeholder="email@example.com"
        value={input.email}
        onChange={handleOnChange}
        error={error.email}
      />
      <br />
      <Button
        label="Reset Password"
        className={`btn-black-fill ${styles.submitButton}`}
        onClick={handleSubmit}
        isLoading={isLoading}
      />
      <div className={styles.footerContainer}>
        <div className={styles.textContainer}>
          Back to{' '}
          <Button
            label="Log in"
            className={styles.linkButton}
            onClick={() => history.push(path.login)}
          />
        </div>
        <span />
      </div>
      <SentResetPassword
        email={input.email}
        isOpen={isOpen}
        toggle={() => setOpen((prev) => !prev)}
        onSubmit={() => {
          history.push(path.login)
          setOpen((prev) => !prev)
        }}
      />
    </div>
  )
}

ResetPassword.propTypes = {}
ResetPassword.defaultProps = {}

export default ResetPassword
