import { ProductCardProps } from '../../lib/interfaces';
import Card from './Card';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

const propsData: ProductCardProps = {
  productId: '12345',
  label: 'A',
  description: 'B',
  imgSrc: 'C',
  link: 'D',
  price: '2',
  isOnSale: true,
  newPrice: '1'
};

it('renders a card in DOM', () => {
  const component = render(
    <BrowserRouter>
      <Card {...propsData} />
    </BrowserRouter>
  );
  expect(component.getByTestId('card')).toBeInTheDocument();
});
