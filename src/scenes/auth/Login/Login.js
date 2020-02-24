import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from 'components/Input'
import { styler, colors } from 'styles'
import { Button } from 'components/Button'
import Error from 'components/Error'
import { path } from 'utils/const'
import { validate, tests } from 'utils/vali'
import Connector from 'utils/connector'

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
    marginBottom: 60,
  },
  forgot: {
    display: 'flex',
    justifyContent: 'flex-end',
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
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    resErr: null,
    isLoading: false,
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

  onLogin = () => {
    // validation
    const { isLoading } = this.state
    const { isError, errors } = validate(this.state, tests)
    this.setState({ errors })
    if (isError || isLoading) return

    // login
    this.setState({ isLoading: true })
    const { actions, history } = this.props
    const { email, password } = this.state
    actions
      .login(email, password)
      .then(({ emailVerified }) => {
        if (emailVerified) {
          history.push(path.profile)
        } else {
          history.push({ pathname: path.confirmEmail, state: { email } })
        }
        this.setState({ isLoading: false })
      })
      .catch(err => {
        this.setState({ resErr: err.message, isLoading: false })
      })
  }

  render() {
    const { history } = this.props
    const { email, password, errors, resErr, isLoading } = this.state
    return (
      <div className={styles.root}>
        <Error
          message={resErr}
          onClose={() => {
            this.setState({ resErr: null })
          }}
        />
        <div className={styles.contents}>
          <h3 className={styles.title}>Login</h3>
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
          <Input
            type="password"
            name="password"
            label="Password"
            value={password}
            placeholder="Your password is case sensitive"
            onChange={this.handleInputChange}
            error={errors.password}
            disabled={isLoading}
          />
          <div className={styles.forgot}>
            <Link to="/reset-password" className={styles.reset}>
              Forgot Password?
            </Link>
          </div>
          <div className={styles.footer}>
            <Button
              label="Login"
              className={`btn-yellow-gradation ${styles.btn}`}
              onClick={this.onLogin}
              isLoading={isLoading}
            />
            <Button
              label="Go to Signup"
              className={`btn-orange-outline ${styles.btn}`}
              onClick={() => history.push(path.signup)}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    )
  }
}

const ConnectedLogin = props => (
  <Connector>
    {({ actions }) => <Login actions={actions.app} {...props} />}
  </Connector>
)

Login.propTypes = {}
Login.defaultProps = {}

export default ConnectedLogin
