import React, { Component } from 'react'
import Input from 'components/Input'
import Error from 'components/Error'
import { styler, colors } from 'styles'
import { validate, tests } from 'utils/vali'
import { path } from 'utils/const'
import { Button } from 'components/Button'
import Connector from 'utils/connector'
import SentEmailPopup from './SentEmailPopup'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  title: {
    color: colors.yellow,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  reset: {
    fontSize: 16,
    marginLeft: 5,
  },
  btn: {
    height: 50,
    width: '45%',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: '5px !important',
    '&::before': {
      borderRadius: 5,
    },
    '&:hover::before': {
      borderRadius: 5,
    },
    marginTop: 40,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

class ResetPassword extends Component {
  state = {
    email: '',
    errors: {},
    resErr: null,
    isLoading: false,
    isOpen: false,
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target
    const { errors } = this.state

    this.setState({
      [name]: value,
      errors: {
        ...errors,
        [name]: '',
      },
    })
  }

  onSend = () => {
    // validation
    const { isLoading } = this.state
    const { isError, errors } = validate(this.state, tests)
    this.setState({ errors })
    if (isError || isLoading) return

    // reset password
    this.setState({ isLoading: true })
    const { actions } = this.props
    const { email } = this.state
    actions
      .resetPassword(email)
      .then(() => {
        this.setState({ isLoading: false, isOpen: true })
      })
      .catch(err => {
        this.setState({ resErr: err.message, isLoading: false })
      })
  }

  render() {
    const { history } = this.props
    const { email, errors, resErr, isLoading, isOpen } = this.state
    return (
      <div className={styles.root}>
        <Error
          message={resErr}
          onClose={() => {
            this.setState({ resErr: null })
          }}
        />
        <div className={styles.contents}>
          <h3 className={styles.title}>Reset Password</h3>
          <Input
            type="email"
            name="email"
            value={email}
            label="Email"
            placeholder="email@example.com"
            onChange={this.handleInputChange}
            error={errors.email}
            disabled={isLoading}
          />
          <div className={styles.footer}>
            <Button
              label="Send"
              className={`btn-yellow-gradation ${styles.btn}`}
              onClick={this.onSend}
              isLoading={isLoading}
            />
            <Button
              label="Back to Login"
              className={`btn-orange-outline ${styles.btn}`}
              onClick={() => history.push(path.login)}
              isLoading={isLoading}
            />
          </div>
        </div>
        <SentEmailPopup
          email={email}
          isOpen={isOpen}
          onClick={() => {
            this.setState({ isOpen: false })
            history.push(path.login)
          }}
        />
      </div>
    )
  }
}

const ConnectedResetPassword = props => (
  <Connector>
    {({ actions }) => <ResetPassword actions={actions.app} {...props} />}
  </Connector>
)

ResetPassword.propTypes = {}

ResetPassword.defaultProps = {}

export default ConnectedResetPassword
