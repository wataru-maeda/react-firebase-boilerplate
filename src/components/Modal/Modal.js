import React from 'react'
import { Modal } from 'reactstrap'
import PropTypes from 'prop-types'
import './modal.scss'

const Popup = ({ isOpen, size, centered, toggle, children }) => (
  <Modal size={size} isOpen={isOpen} centered={centered} toggle={toggle}>
    {children}
  </Modal>
)

Popup.propTypes = {
  isOpen: PropTypes.bool,
  centered: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string,
}

Popup.defaultProps = {
  isOpen: false,
  centered: false,
  toggle: () => null,
  children: null,
  size: 'lg',
}

export default Popup
