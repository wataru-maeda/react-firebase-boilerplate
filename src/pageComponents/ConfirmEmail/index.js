import React from 'react'
import Modal from 'components/Modal'
import Button from 'components/Button'
import FontIcon from 'components/FontIcon'
import { PropTypes } from 'prop-types'
import styles from './confirmEmail.module.scss'

const ConfirmEmail = ({ email, isOpen, toggle, onSubmit }) => (
  <Modal isOpen={isOpen} toggle={toggle} size="md" centered>
    <div className={styles.root}>
      <div className={styles.container}>
        <FontIcon name="envelope-open-text" className={styles.icon} />
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
          className={`btn-pink-fill ${styles.backButton}`}
          onClick={onSubmit}
        />
      </div>
    </div>
  </Modal>
)

ConfirmEmail.propTypes = {
  email: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  onSubmit: PropTypes.func,
}

ConfirmEmail.defaultProps = {
  email: '',
  isOpen: false,
  toggle: () => null,
  onSubmit: () => null,
}

export default ConfirmEmail
