import React from 'react'
import PropTypes from 'prop-types'
import { styler, colors } from 'styles'
import Modal from 'components/Modal'
import FontIcon from 'components/FontIcon'
import { Button } from 'components/Button'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  img: {
    fontSize: 80,
    color: colors.yellow,
  },
  title: {
    fontSize: 24,
    marginTop: 30,
    textAlign: 'center',
    color: colors.yellow,
  },
  desc: {
    whiteSpace: 'pre-line',
    fontSize: 16,
    marginTop: 30,
    textAlign: 'center',
  },
  btn: {
    padding: '10px 20px',
    fontSize: 18,
    marginTop: 50,
    width: '100%',
    borderRadius: '5px !important',
    '&::before': {
      borderRadius: 5,
    },
    '&:hover::before': {
      borderRadius: 5,
    },
  },
})

const SentEmailPopup = ({ email, isOpen, onClick }) => {
  return (
    <Modal isOpen={isOpen} toggleModal={null} size="md" isCenter>
      <div className={styles.root}>
        <FontIcon icon="paper-plane" className={styles.img} />
        <h2 className={styles.title}>Password reset email sent</h2>
        <p className={styles.desc}>
          Email sent to <a href={`mailto:${email}`}>{email}</a>. Follow the
          directions in the email to reset your password.
        </p>
        <Button
          label="OK"
          className={`btn-yellow-gradation ${styles.btn}`}
          onClick={onClick}
        />
      </div>
    </Modal>
  )
}

SentEmailPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

SentEmailPopup.defaultProps = {
  isOpen: false,
  onClick: () => {},
}

export default SentEmailPopup
