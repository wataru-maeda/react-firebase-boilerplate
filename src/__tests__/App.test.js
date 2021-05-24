// import { render, screen } from '@testing-library/react'
import { render } from '@testing-library/react'
import App from '../app'

test('renders learn react link', () => {
  render(<App />)
  // console.log('[##] screen', screen)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
