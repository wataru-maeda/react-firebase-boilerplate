import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { loadFontIcons } from 'components/FontIcon'
import store from 'utils/store'
import Router from './routes'

function App() {
  useEffect(() => {
    loadFontIcons()
  }, [])

  return (
    <Provider store={store}>
      <div data-testid="app" className="app">
        <Router />
      </div>
    </Provider>
  )
}

export default App
