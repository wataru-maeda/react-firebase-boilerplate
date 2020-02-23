import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faTimesCircle,
  faTag,
  faAngleDoubleDown,
  faHeart,
  faChevronRight,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons'

// TODO: add icons here...
export const loadFontIcons = () =>
  library.add(
    faPaperPlane,
    faTimesCircle,
    faTag,
    faAngleDoubleDown,
    faHeart,
    faChevronRight,
    faEnvelopeOpenText,
  )

const FontIcon = ({ icon, className, style }) => (
  <FontAwesomeIcon icon={icon} className={className} style={style} />
)

FontIcon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
}

FontIcon.defaultProps = {
  icon: '',
  className: '',
  style: {},
}

export default FontIcon
