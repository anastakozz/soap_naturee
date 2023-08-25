import { ProductCardProps } from '../../lib/interfaces'
import Card from './Card'
import { render } from '@testing-library/react'

const propsData: ProductCardProps = {
  label: 'A',
  description: 'B',
  imgSrc: 'C',
  link: 'D',
  price: '2',
  isOnSale: true,
  newPrice: 1
}

it('renders a card in DOM', () => {
  const component = render(<Card {...propsData} />)
  expect(component.getByTestId('card')).toBeInTheDocument()
})
