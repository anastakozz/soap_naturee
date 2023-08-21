import { render } from '@testing-library/react'
import CategoryCarousel from './CategoryCarousel'
import { BrowserRouter } from 'react-router-dom'

it('renders carousel in DOM', () => {
  const component = render(
    <BrowserRouter>
      <CategoryCarousel />
    </BrowserRouter>
  )
  expect(component.getByTestId('carousel')).toBeInTheDocument()
})
