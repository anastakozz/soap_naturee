import { render } from '@testing-library/react'
import HomePage from '.'
import { BrowserRouter } from 'react-router-dom'

it('renders home page in DOM', () => {
  const component = render(<BrowserRouter><HomePage /></BrowserRouter>)
  expect(component.getByTestId('home-page')).toBeInTheDocument()
})
