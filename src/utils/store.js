import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import app from 'stores/app.store'

const store = configureStore({
  reducer: {
    app,
  },
  middleware:
    process.env.NODE_ENV === 'production'
      ? [...getDefaultMiddleware()]
      : [...getDefaultMiddleware(), logger],
})

export default store
