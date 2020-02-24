import React, { Component } from 'react'
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
  btn: {
    height: 50,
    width: '45%',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: '5px !important',
    marginTop: 20,
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
    marginTop: 60,
  },
})

class Signup extends Component {
  state = {
    email: '',
    password: '',
    user: {},
    errors: {},
    resErr: null,
    isLoading: false,
  }

  onSignup = async () => {
    // validation
    const { isError, errors } = validate(this.state, tests)
    this.setState({ errors })
    if (isError) return

    // params
    const { actions } = this.props
    const { email, password, isLoading } = this.state
    if (isLoading) return

    // create account
    this.setState({ isLoading: true })
    actions
      .signup(email, password)
      .then(() => {
        const { history } = this.props
        this.setState({ isLoading: false })
        history.push({ pathname: path.confirmEmail, state: { email } })
      })
      .catch(err => {
        this.setState({ isLoading: false, resErr: err.message })
      })
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
          <h3 className={styles.title}>Signup</h3>
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
          <div className={styles.footer}>
            <Button
              label="Signup"
              className={`btn-yellow-gradation ${styles.btn}`}
              onClick={this.onSignup}
              isLoading={isLoading}
            />
            <Button
              label="Go to Login"
              className={`btn-orange-outline ${styles.btn}`}
              onClick={() => history.push('/login')}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    )
  }
}

const ConnectedSignup = props => (
  <Connector>
    {({ actions }) => <Signup actions={actions.app} {...props} />}
  </Connector>
)

Signup.propTypes = {}
Signup.defaultProps = {}

export default ConnectedSignup
