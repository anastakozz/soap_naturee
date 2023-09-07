import { ProductCardProps } from '../../lib/interfaces';
import Card from './Card';
import { render, fireEvent, screen } from '@testing-library/react';
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

const propsDataNoSale: ProductCardProps = {
  productId: '12345',
  label: 'A',
  description: 'B',
  imgSrc: 'C',
  link: 'D',
  price: '2',
  isOnSale: false,
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

it('navigates on click', () => {
  const component = render(
    <BrowserRouter>
      <Card {...propsData} />
    </BrowserRouter>
  );
  fireEvent.click(component.getByTestId('card'));
  expect(mockedUsedNavigate).toBeCalled;
});

it('does not navigate on click on button Add to Cart', () => {
  const component = render(
    <BrowserRouter>
      <Card {...propsData} />
    </BrowserRouter>
  );
  fireEvent.click(component.getByRole('button'));
  expect(mockedUsedNavigate).not.toBeCalled;
});

it('renders no sale info if !isOnSale', () => {
  render(
    <BrowserRouter>
      <Card {...propsDataNoSale} />
    </BrowserRouter>
  );
  expect(screen.queryByText('SALE')).not.toBeInTheDocument();
});
