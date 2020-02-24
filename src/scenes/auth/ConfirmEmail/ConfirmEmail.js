import React from 'react'
import { Redirect } from 'react-router-dom'
import { styler, colors } from 'styles'
import { Button } from 'components/Button'
import FontIcon from 'components/FontIcon'
import { path } from 'utils/const'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.lightGrayPurple,
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
  },
  img: {
    fontSize: 80,
    color: colors.yellow,
  },
  title: {
    fontSize: 24,
    marginTop: 40,
    color: colors.yellow,
    textAlign: 'center',
  },
  desc: {
    whiteSpace: 'pre-line',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  btn: {
    padding: '10px 20px',
    fontSize: 18,
    marginTop: 80,
    borderRadius: 10,
    width: '100%',
    '&::before': {
      borderRadius: 10,
    },
    '&:hover::before': {
      borderRadius: 10,
    },
    marginBottom: 40,
  },
})

const ConfirmEmail = ({
  history,
  location: {
    state: { email },
  },
}) => {
  if (!email) return <Redirect to={path.login} />
  return (
    <div className={styles.root}>
      <div className={styles.contents}>
        <FontIcon icon="envelope-open-text" className={styles.img} />
        <h2 className={styles.title}>Confirm your email</h2>
        <p className={styles.desc}>
          We have sent email to{'\t'}
          <a href={`mailto:${email}`}>{email}</a>
          {'\t'}
          to confirm the validity of your email address. After receiving the
          email follow the link provided to complete your registration.
        </p>
        <Button
          label="Back to Login"
          className={`btn-yellow-gradation ${styles.btn}`}
          onClick={() => history.push(path.login)}
        />
      </div>
    </div>
  )
}

ConfirmEmail.propTypes = {}
ConfirmEmail.defaultProps = {}

export default ConfirmEmail
