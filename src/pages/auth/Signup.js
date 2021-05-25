import { useDispatch, useSelector } from 'react-redux'
import Input from 'components/Input'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import styles from 'theme/pages/signup.module.scss'

function Signup() {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector((state) => state.app)
  console.log('[##] loggedin', loggedIn)
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Sign up</h2>
      <Input label="Email" />
      <Input label="Password" />
      <Button
        label="Signup"
        className={`btn-black-fill ${styles.submitButton}`}
        onClick={() => {
          dispatch(actions.setSignupAsync())
        }}
      />
      <div className={styles.footerContainer}>
        <div className={styles.textContainer}>
          New user? <Button label="Sign up" className={styles.linkButton} />
        </div>
        <div className={styles.textContainer}>
          Forget <Button label="Password" className={styles.linkButton} />?
        </div>
      </div>
    </div>
  )
}

Signup.propTypes = {}
Signup.defaultProps = {}

export default Signup