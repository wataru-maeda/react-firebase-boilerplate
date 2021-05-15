import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Fallback = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  })

  return ''
}

export default Fallback
