import { render } from '@testing-library/react'
import App from 'app'

test('renders learn react link', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('app')).toBeTruthy()
})
