import { useDispatch, useSelector } from 'react-redux'
import Input from 'components/Input'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import styles from 'theme/pages/auth/login.module.scss'

function Login() {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector((state) => state.app)
  console.log('[##] loggedin', loggedIn)
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Login</h2>
      <Input label="Email" />
      <Input label="Password" />
      <Button
        label="Login"
        className={`btn-black-fill ${styles.submitButton}`}
        onClick={() => {
          dispatch(actions.setLoginAsync())
        }}
      />
    </div>
  )
}

Login.propTypes = {}
Login.defaultProps = {}

export default Login
