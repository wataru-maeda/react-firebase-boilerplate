import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Input from 'components/Input'
import { styler, colors, images } from 'styles'
import { Button } from 'components/Button'
import FilePicker from 'components/FilePicker'
import Error from 'components/Error'
import { storage } from 'utils/firebase'
import Connector from 'utils/connector'
import { validate, tests } from 'utils/vali'

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
  row: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.yellow,
    fontSize: 24,
    marginBottom: 40,
  },
  file: {
    fontSize: 16,
    textDecoration: 'underline',
    color: colors.yellow,
    '&:hover': {
      color: colors.orange,
    },
  },
  img: {
    width: 120,
    height: 120,
    objectFit: 'cover',
    borderRadius: 60,
    marginBottom: 30,
  },
  footer: {
    marginTop: 80,
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    height: 50,
    width: '45%',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10,
    '&::before': {
      borderRadius: 10,
    },
    '&:hover::before': {
      borderRadius: 10,
    },
  },
})

const customTests = {
  userName: {
    test: tests.input.test,
    error: 'Please enter a valid user name',
  },
}

class Profile extends Component {
  state = {
    file: null,
    userImage: images.profile,
    userName: '',
    errors: {},
    resErr: null,
    isLoading: false,
  }

  componentDidMount() {
    // set default image
    storage
      .child('default/profile.png')
      .getDownloadURL()
      .then(url => {
        this.setState({ userImage: url })
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

  onSubmit = () => {
    // validation
    const { isLoading } = this.state
    const { isError, errors } = validate(this.state, customTests)
    this.setState({ errors })
    if (isError || isLoading) return

    // update me
    this.setState({ isLoading: true, resErr: null })
    const { actions } = this.props
    const { userName, userImage } = this.state
    actions
      .updateMe(userName, userImage)
      .then(() => {
        this.setState({ resErr: null, isLoading: false })
      })
      .catch(err => {
        this.setState({ resErr: err.message, isLoading: false })
      })
  }

  render() {
    const { history, me } = this.props
    if (!me) return <Redirect to="/" />

    const { userName, userImage, errors, resErr, isLoading } = this.state
    return (
      <div className={styles.root}>
        <Error
          message={resErr}
          onClose={() => {
            this.setState({ resErr: null })
          }}
        />
        <div className={styles.contents}>
          <h3 className={styles.title}>Set Profile</h3>
          <div className={styles.row}>
            <img
              src={
                typeof userImage === 'object'
                  ? URL.createObjectURL(userImage)
                  : userImage
              }
              className={styles.img}
              alt="logo"
            />
            <FilePicker
              maxSize={500000}
              onSelect={f => this.setState({ userImage: f, resErr: null })}
              onError={() =>
                this.setState({
                  resErr: 'Please select an image less than 500kb',
                })
              }
            >
              <p className={styles.file}>Set Profile Image</p>
            </FilePicker>
            <br />
          </div>
          <Input
            type="text"
            name="userName"
            label="User Name"
            value={userName}
            placeholder=""
            onChange={this.handleInputChange}
            error={errors.userName}
          />
          <div className={styles.footer}>
            <Button
              label="Create Account"
              className={`btn-yellow-gradation ${styles.btn}`}
              onClick={this.onSubmit}
              isLoading={isLoading}
            />
            <Button
              label="Back"
              className={`btn-orange-outline ${styles.btn}`}
              onClick={() => history.goBack()}
              display={isLoading}
            />
          </div>
        </div>
      </div>
    )
  }
}

const ConnectedProfile = props => (
  <Connector>
    {({
      actions,
      state: {
        app: { me },
      },
    }) => <Profile me={me} actions={actions.app} {...props} />}
  </Connector>
)

Profile.propTypes = {}
Profile.defaultProps = {}

export default ConnectedProfile
