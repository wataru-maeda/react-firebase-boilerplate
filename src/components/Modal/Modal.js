import React from 'react'
import { Modal } from 'reactstrap'
import { PropTypes } from 'prop-types'
import './modal.css'
import { styler, images } from '../../theme'

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
  closeImg: {
    width: 30,
    height: 30,
  },
})

const modal = ({
  isOpen,
  centered,
  toggleModal,
  children,
  size,
}) => (
  <Modal
    size={size}
    isOpen={isOpen}
    centered={centered}
    toggle={toggleModal}
  > 
  <div className={styles.closeContainer}>
    <aside />
    <img
      src={images.close}
      className={styles.closeImg}
      onClick={toggleModal}
    />
  </div>
    {children}
  </Modal>
)


modal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.any,
  size: PropTypes.any,
}

modal.defaultProps = {
  isOpen: false,
  centered: false,
  toggleModal: () => {},
  children: null,
  size: 'lg',
}

export default modal
