import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'components/Modal'
import FontIcon from 'components/FontIcon'
import Button from 'components/Button'
import styles from './sentResetPassword.module.scss'

const SentResetPassword = ({ email, isOpen, toggle, onSubmit }) => (
  <Modal isOpen={isOpen} toggle={toggle} size="md" centered>
    <div className={styles.root}>
      <FontIcon name="paper-plane" className={styles.icon} />
      <h2 className={styles.title}>Password reset email sent</h2>
      <p className={styles.desc}>
        Email sent to <a href={`mailto:${email}`}>{email}</a>. Follow the
        directions in the email to reset your password.
      </p>
      <Button
        label="Confirm"
        className={`btn-black-fill ${styles.submitButton}`}
        onClick={onSubmit}
      />
    </div>
  </Modal>
)

SentResetPassword.propTypes = {
  email: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  onSubmit: PropTypes.func,
}

SentResetPassword.defaultProps = {
  email: '',
  isOpen: false,
  toggle: () => {},
  onSubmit: () => {},
}

export default SentResetPassword
