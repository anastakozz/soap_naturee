import Footer from '.'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

it('renders footer in DOM', () => {
  const component = render(<BrowserRouter><Footer /></BrowserRouter>)
  expect(component.getByTestId('footer')).toBeInTheDocument()
})
