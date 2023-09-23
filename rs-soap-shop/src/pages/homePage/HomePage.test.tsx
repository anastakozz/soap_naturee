import { render, screen } from '@testing-library/react';
import HomePage from '.';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../App';

it('renders random cards section page in DOM', () => {
  render(
    <CartContext.Provider value={[null]}>
      <BrowserRouter>
        <HomePage></HomePage>
      </BrowserRouter>
    </CartContext.Provider>
  );
  expect(screen.getByRole('home-page')).toBeInTheDocument();
});
