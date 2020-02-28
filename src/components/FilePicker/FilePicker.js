import React from 'react'
import PropTypes from 'prop-types'
import { styler } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  input: {
    flex: 1,
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    cursor: 'pointer',
    background: 'orange',
  },
})

const FilePicker = ({ accept, children, maxSize, onSelect, onError }) => {
  return (
    <div className={styles.root}>
      {children}
      <input
        type="file"
        accept={accept}
        className={styles.input}
        onChange={({ target: { files } }) => {
          if (!files || (files && files.length === 0)) return
          if (!maxSize || typeof maxSize !== 'number') {
            onSelect(files[0])
            return
          }
          if (files[0].size < maxSize) {
            onSelect(files[0])
          } else {
            onError()
          }
        }}
      />
    </div>
  )
}

FilePicker.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.node,
  maxSize: PropTypes.number,
  onSelect: PropTypes.func,
  onError: PropTypes.func,
}

FilePicker.defaultProps = {
  accept: 'image/png, image/jpg, image/jpeg',
  children: null,
  maxSize: null,
  onSelect: () => {},
  onError: () => {},
}

export default FilePicker
