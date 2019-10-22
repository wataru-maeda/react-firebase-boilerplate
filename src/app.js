import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './utils/store'
import { loadFontIcons } from './components/FontIcon'

import Router from './routes'
import { authenticate } from './modules/app.module'

class App extends Component {
  componentDidMount() {
    store.dispatch(authenticate())
    loadFontIcons()
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App
