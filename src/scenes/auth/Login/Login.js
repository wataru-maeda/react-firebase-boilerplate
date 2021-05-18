import { useDispatch, useSelector } from 'react-redux'
import { actions, selector } from 'stores/app.store'
import styles from './login.module.scss'

function Login() {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector(selector)
  console.log('[##] loggedin', loggedIn)
  return (
    <div className={styles.root}>
      <button
        type="button"
        onClick={() => {
          console.log('[##] okokok')
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
