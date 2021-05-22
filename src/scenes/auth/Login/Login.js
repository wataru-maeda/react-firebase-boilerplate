import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'slices/app.slice'
import styles from './login.module.scss'

function Login() {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector((state) => state.app)
  console.log('[##] loggedin', loggedIn)
  return (
    <div className={styles.root}>
      <button
        type="button"
        onClick={() => {
          dispatch(actions.setLoginAsync())
        }}
      >
        Tap Me
      </button>
    </div>
  )
}

Login.propTypes = {}
Login.defaultProps = {}

export default Login
