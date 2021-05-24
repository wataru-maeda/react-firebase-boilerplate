import { Provider } from 'react-redux'
import store from 'utils/store'
import Router from './routes'

function App() {
  return (
    <Provider store={store}>
      <div data-testid="app" className="app">
        <Router />
      </div>
    </Provider>
  )
}

export default App
