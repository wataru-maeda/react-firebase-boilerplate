import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExclamationTriangle,
  faEnvelopeOpenText,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

// TODO: add icons here...
export const loadFontIcons = () =>
  library.add(faExclamationTriangle, faEnvelopeOpenText, faPaperPlane)

const FontIcon = ({ name, className, style }) => (
  <FontAwesomeIcon icon={name} className={className} style={style} />
)

FontIcon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
}

FontIcon.defaultProps = {
  name: '',
  className: '',
  style: {},
}

export default FontIcon
