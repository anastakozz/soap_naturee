import { ProductCardProps } from '../../lib/interfaces';
import Card from './Card';
import { render, fireEvent, screen, act } from '@testing-library/react';
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
  act(() => {
    render(
      <BrowserRouter>
        <Card {...propsData} />
      </BrowserRouter>
    );
  });
  expect(screen.getByRole('product-card')).toBeInTheDocument();
});

it('navigates on click', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Card {...propsData} />
      </BrowserRouter>
    );
  });
  fireEvent.click(screen.getByRole('product-card'));
  expect(mockedUsedNavigate).toBeCalled();
});

// it('does not navigate on click on button Add to Cart', () => {
//   act(() => {
//     render(
//       <BrowserRouter>
//         <Card {...propsData} />
//       </BrowserRouter>
//     );

//   });
//   act(()=>{fireEvent.click(screen.getByRole('button'));})

//   expect(mockedUsedNavigate).not.toBeCalled();
// });

it('renders no sale info if !isOnSale', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Card {...propsDataNoSale} />
      </BrowserRouter>
    );
  });

  expect(screen.queryByText('SALE')).not.toBeInTheDocument();
});
