import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { styler, colors } from '../../../theme'
import { Button } from '../../../components/Button'
import FontIcon from '../../../components/FontIcon'
import { path } from '../../../utils/const'

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
  },
  img: {
    fontSize: 80,
    color: colors.yellow,
  },
  title: {
    fontSize: 24,
    marginTop: 40,
    color: colors.yellow
  },
  desc: {
    whiteSpace: 'pre-line',
    fontSize: 16,
    marginTop: 20,
  },
  btn: {
    padding: '10px 20px',
    fontSize: 20,
    marginTop: 40,
    borderRadius: 10,
    '&::before': {
      borderRadius: 10,
    },
    '&:hover::before': {
      borderRadius: 10,
    },
    marginBottom: 60,
  },
  resend: {
    fontSize: 14,
    color: colors.orange,
  },
})

class ConfirmEmail extends Component {
  render() {
    const { history } = this.props
    // const { history, location: { state: { email } } } = this.props
    // if (!email) return <Redirect to={path.auth.login} />
    return (
      <div className={styles.root}>
        <div className={styles.contents}>
          <FontIcon
            icon="envelope-open-text"
            className={styles.img}
          />
          <h2 className={styles.title}>Email Confirmation</h2>
          <p className={styles.desc}>
            We have sent email to{'\t'}
            <a href={`mailto:test@test.com`}>test@test.com</a>{'\t'}
            to confirm the validity of your email address. After receiving the email follow the link provided to complete your registration.</p>
          <Button
            label="Login after Email Confirmation"
            className={`btn-yellow-gradation ${styles.btn}`}
            onClick={() => history.push(path.login)}
          />
          <p style={{ fontSize: 14 }}>
            If you haven't got any email 
            <Button
              label="Resend Confirmation Email"
              className={styles.resend}
              onClick={() => history.push(path.login)}
            />
          </p>
        </div>
      </div>
    )
  }
}

ConfirmEmail.propTypes = {}
ConfirmEmail.defaultProps = {}

export default ConfirmEmail