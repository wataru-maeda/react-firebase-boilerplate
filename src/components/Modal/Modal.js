import React from 'react'
import { Modal } from 'reactstrap'
import PropTypes from 'prop-types'
import { styler, images } from 'styles'
import './modal.css'

const styles = styler({
  closeContainer: {
    display: 'none',
    padding: '20%',
    '@media (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '16px 16px 0',
    },
  },
  button: {
    background: 'transparent',
    outline: 'none !important',
    border: 'none',
  },
  closeImg: {
    width: 30,
    height: 30,
  },
})

const modal = ({ isOpen, centered, toggleModal, children, size }) => (
  <Modal size={size} isOpen={isOpen} centered={centered} toggle={toggleModal}>
    <div className={styles.closeContainer}>
      <aside />
      <button type="button" className={styles.button} onClick={toggleModal}>
        <img src={images.close} className={styles.closeImg} alt="close" />
      </button>
    </div>
    {children}
  </Modal>
)

modal.propTypes = {
  isOpen: PropTypes.bool,
  centered: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string,
}

modal.defaultProps = {
  isOpen: false,
  centered: false,
  toggleModal: () => {},
  children: null,
  size: 'lg',
}

export default modal
